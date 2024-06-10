<template>
  <TopNav />
  <van-dropdown-menu>
    <van-dropdown-item title="位置" ref="location">
      <div class="list" @click="onLocation">
        <h3 value="area" :class="[active == 'area' ? 'active' : '']">區域</h3>
        <h3 value="subway" :class="[active == 'subway' ? 'active' : '']">地鐵</h3>
      </div>
      <div class="item">
        <van-cell-group v-if="active == 'area'">
          <van-cell :value="item" v-for="(item, index) in areas" :key="index" @click="onItem(item)" />
        </van-cell-group>
        <van-cell-group v-if="active == 'subway'">
          <van-cell :value="item" v-for="(item, index) in subways" :key="index" @click="onItem(item)" />
        </van-cell-group>
      </div>
    </van-dropdown-item>
    <van-dropdown-item title="租金" ref="price">
      <van-cell-group>
        <van-cell value="不限" />
        <van-cell value="2000元以下" @click="onPrice('2000元')" />
        <van-cell value="2000元-2500元" @click="onPrice('2000元-2500元')" />
        <van-cell value="2500元-3000元" @click="onPrice('2500元-3000元')" />
        <van-cell value="3000元以上" @click="onPrice('3000元以上')" />
      </van-cell-group>
    </van-dropdown-item>
    <van-dropdown-item title="類型" ref="type">
      <div class="container">
        <div class="title">商鋪類型</div>
        <div class="btn" v-for="(item, index) in types" :key="index" @click="onType(item)">{{ item }}</div>
      </div>
    </van-dropdown-item>
    <van-dropdown-item title="更多" ref="more">
      <div class="container">
        <div class="title">{{ mores1.title }}</div>
        <div :class="[selectBtn1 == childItem ? 'activeBtn' : '']" class="btn"
          v-for="(childItem, childIndex) in mores1.btns" :key="childIndex" @click="onMore1(childItem)">{{ childItem }}
        </div>
      </div>
      <div class="container">
        <div class="title">{{ mores2.title }}</div>
        <div :class="[selectBtn2 == childItem ? 'activeBtn' : '']" class="btn"
          v-for="(childItem, childIndex) in mores2.btns" :key="childIndex" @click="onMore2(childItem)">{{ childItem }}
        </div>
      </div>
      <div class="container btnL">
        <div class="clearBtn" @click="clearBtn">清空篩選</div>
        <div class="sureBtn" @click="trueBtn">確定</div>
      </div>
    </van-dropdown-item>
  </van-dropdown-menu>
  <div class="content">
    <van-list v-model:loading="loading" :finished="finished" finished-tex="沒有更多了" @load="onLoad">
      <div class="place-item" v-for="(item, index) in list" :key="index" @click="onPlaceItem(item.id)">
        <img :src="item.image" alt="">
        <div class="place-item-desc">
          <p>{{ item.title }}</p>
          <span class="descs">{{ item.descs }}</span>
          <span class="price">{{ item.price }}元/月</span>
        </div>
      </div>
    </van-list>
  </div>

</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import TopNav from "@/components/TopNav.vue";
import { getPlaceList } from "@/api/Place";
import { useRouter } from "vue-router";

const router = useRouter()

const areas = ["不限", "東城區", "西城區", "朝陽區", "海淀區", "昌平區"]
const subways = ["不限", "1號線", "2號線", "3號線", "4號線", "5號線"]
const types = ["不限", "商場", "超市", "商業街", "社區底商"]
const mores1 = {
  title: "面積",
  btns: ["不限", "20㎡以下", "20㎡-50㎡", "50㎡-100㎡", "100㎡-200㎡", "200㎡以上",]
}
const mores2 = {
  title: "樓層",
  btns: ["不限", "地下", "一層", "二層", "三層", "四層或以上",]
}

interface IParams {
  location: string,
  price: string,
  type: string
}

const active = ref<string>("area")
const location = ref()
const price = ref()
const type = ref()
const more = ref()
const selectBtn1 = ref('不限')
const selectBtn2 = ref('不限')

const params: IParams = reactive({
  location: "不限",
  price: "不限",
  type: "不限"
})

const onLocation = (event: any) => {
  active.value = event.target.getAttribute("value")
}

const onItem = (value: string) => {
  params.location = value
  location.value.toggle()
}

const onPrice = (value: string) => {
  params.price = value
  price.value.toggle()
}

const onType = (value: string) => {
  params.type = value
  type.value.toggle()
}

const onMore1 = (value: string) => {
  selectBtn1.value = value
}

const onMore2 = (value: string) => {
  selectBtn2.value = value
}

const clearBtn = () => {
  selectBtn1.value = "不限"
  selectBtn2.value = "不限"
}

const trueBtn = () => {
  more.value.toggle()
}

//列表數據

interface IList {
  id: number,
  image: string,
  title: string,
  descs: string,
  price: string,

}

const loading = ref(false)
const finished = ref(false)
const page = ref<number>(1)
const list = ref<IList[]>()

const onLoad = () => {
  getPlaceList({ page: page.value }).then(res => {
    page.value++
    if (res.data.status === 200) {
      list.value = res.data.data
    }
    //加載狀態結束
    loading.value = false
    //數據全部加載完畢
    if (res.data.status === 500) {
      finished.value = true
    }
  })
}

const onPlaceItem = (id:number)=>{
  router.push({
    name:"placeDetails",
    params:{id}
  })
}

</script>
<style>
.van-dropdown-item__content {
  background-color: #f3f4f5;
}
</style>
<style lang="less" scoped>
.list {
  width: 50%;
  float: left;
  background: #f3f4f5;

  h3 {
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    height: 80px;
    line-height: 40px;
    padding-left: 20px;
    box-sizing: border-box;
  }

  h3.active {
    background: #fff;
  }
}

.item {
  width: 50%;
  float: left;

  .item-cell {
    text-align: left;
  }
}

.container {
  background: #fff;
  overflow: hidden;
  clear: both;

  .title {
    padding: 20px;
    box-sizing: border-box;
    font-size: 14px;
  }

  .btn {
    float: left;
    width: 80px;
    height: 30px;
    line-height: 30px;
    background-color: #f3f4f5;
    margin: 10px;
    text-align: center;
    font-size: 14px;
    margin-top: 0;
    border-radius: 5px;
  }

  .clearBtn {
    width: 30%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #f3f4f5;
    border-radius: 5px;
    margin: 10px;
  }

  .sureBtn {
    width: 50%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #684886;
    color: #fff;
    border-radius: 5px;
    margin: 10px;
  }
}

.btnL {
  display: flex;
  justify-content: center;
}

.activeBtn {
  background-color: #684886 !important;
  color: #fff;
}

.content {
  padding: 10px;
  background-color: #fff;

  .place-item {
    border-bottom: 1px solid #f3f4f5;
    padding: 10px 0;
    display: flex;

    img {
      width: 150px;
      border-radius: 5px;
    }

    .place-item-desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;

      p {
        font-size: 14px;
        margin: 5px 0;
      }

      .descs {
        display: block;
        font-size: 14px;
        color: #999;
        margin: 5px 0;
      }

      .price {
        display: block;
        font-size: 14px;
        color: #ff4444;
        margin: 5px 0;
      }
    }
  }
}
</style>
