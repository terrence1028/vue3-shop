<template>
    <TopNavComponent />
    <SwiperComponent :images="banners" />
    <div class="nav">
        <div class="item" @click="onItem(item.id)" v-for="(item, index) in navData" :key="item.id">
            <img :src='item.image' alt="">
            <span>{{ item.text }}</span>
        </div>
    </div>
    <div class="info" @click="onBeautyInfo">
        <h3>美甲資訊科</h3>
        <p>年會不能錯過的款，美呆了～</p>
        <span class="iconfont icon-jiantouyou"></span>
    </div>
    <div class="recommend">
        <div class="hot">
            <h3>熱門活動</h3>
        </div>
        <div class="opt">
            <h3>優選店鋪</h3>
        </div>
    </div>
    <Rollcomponent :rollInfo="newShopInfo">
        <!-- 骨架屏 Start -->
        <div class="new-shop-content" v-if="newGoodsLoading">
            <div class="new-shop-item" v-for="(item, index) in newGoods" :key="index">
                <img :src="item.image" alt="">
                <p class="new-shop-title">{{ item.title }}</p>
                <span class="new-shop-price">{{ item.price }}元/月</span>
            </div>
        </div>
        <div class="skeleton-newShop" v-else>
            <div class="skeleton-item">
                <van-skeleton-image class="image" />
                <van-skeleton-paragraph />
                <van-skeleton-paragraph />
            </div>
            <div class="skeleton-item">
                <van-skeleton-image class="image" />
                <van-skeleton-paragraph />
                <van-skeleton-paragraph />
            </div>
        </div>
        <!-- 骨架屏 End -->
    </Rollcomponent>
    <div class="ad">
        <img src="../../assets/images/onlineimg.png" alt="">
    </div>
    <Rollcomponent :rollInfo="personInfo">
        <div class="person-content">
            <div class="person-item" v-for="(item, index) in personStore" :key="index">
                <img :src="item.image" alt="">
                <p>{{ item.name }}</p>
                <span>{{ item.desc }}</span>
            </div>
        </div>
    </Rollcomponent>
    <div class="recommend-main">
        <Cardcomponent :recommendTitle="recommendTitle" :cardData="recommendGoods" v-if="recommendGoodsLoading"/>
        <van-empty 
      v-else
      image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png" 
      image-size="80"
      description="等待加载..." />
  </div>

</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import TopNavComponent from "@/components/TopNav.vue";
import SwiperComponent from "@/components/swiper.vue";
import { getCaroursel, getNewGoods, getPersonStore, getRecommendgoods } from "../../api/home/index";
import Rollcomponent from "@/components/Roll.vue"
import Cardcomponent from "@/components/card.vue";
import nav1 from "../../assets/images/nav1.png"
import nav2 from "../../assets/images/nav2.png"
import nav3 from "../../assets/images/nav3.png"
import nav4 from "../../assets/images/nav4.png"
import nav5 from "../../assets/images/nav5.png"
import router from "@/router";

interface IImage {
    image: string,
    title: string,
    url: string
}

const banners = ref<IImage[]>([])


onMounted(async () => {
    const res = await getCaroursel();
    if (res.data.status === 200) {
        banners.value = res.data.data
    }
})

const navData = [
    {
        id: 1,
        text: "轉讓出租",
        image: nav1
    },
    {
        id: 2,
        text: "招聘求職",
        image: nav2
    },
    {
        id: 3,
        text: "流行產品",
        image: nav3
    },
    {
        id: 4,
        text: "培訓課程",
        image: nav4
    },
    {
        id: 5,
        text: "批發進貨",
        image: nav5
    }
]


// nav點擊事件

const onItem = (val: number | string) => {
    console.log(val);

}

//美甲詳情頁面跳轉
const onBeautyInfo = () => {
    router.push("/beauty")
}

// 最新商品

const newGoodsLoading = ref<boolean>(false)

interface INewGoods {
    id: number,
    image: any,
    title: string,
    price: string | number
}

const newGoods = ref<INewGoods[]>([])

const newShopInfo = {
    title: "最新商铺",
    all: "查看全部"
}

onMounted(() => {
    getNewGoods().then(res => {
        if (res.data.status === 200) {
            newGoodsLoading.value = true
            newGoods.value = res.data.data
        }
    })
})

// 人才庫數據

interface IRoll {
    title: string,
    all: string
}

const personInfo: IRoll = reactive({
    title: "人才庫",
    all: "查看全部"
})

interface IPersonStore {
    image: any,
    name: string,
    desc: string
}

const personStore = ref<IPersonStore[]>([])


onMounted(async () => {
    const res = await getPersonStore();
    if (res.status === 200) {
        personStore.value = res.data.data
    }
})

// 為你推薦

interface IGoods{
    id:number,
    image:any,
    title:string,
    price:string
}

const recommendTitle = "為你推薦"
const recommendGoodsLoading = ref<boolean>(false)
const recommendGoods = ref<IGoods[]>([])

onMounted(async() => {
    const res = await getRecommendgoods();
    if(res.status === 200){
        recommendGoodsLoading.value = true
        recommendGoods.value = res.data.data
    }
})

</script>
<style lang="less" scoped>
.nav {
    background-color: #fff;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
    clear: both;

    .item {
        width: 20%;
        float: left;
        // text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 40px;
        }

        span {
            display: block;
            font-size: 12px;
            margin-top: 10px;
        }
    }

}

.info {
    background-color: #fff;
    display: flex;
    padding: 10px 0;
    align-items: center;
    border-top: 1px solid #f3f4f5;

    h3 {
        font-size: 14px;
        color: #999;
        font-weight: 400;
        padding: 0 20px;
        border-right: 1px solid #f3f4f5;
    }

    p {
        font-size: 14px;
        margin-left: 10px;
    }

    span {
        flex: 1;
        text-align: right;
        padding-right: 10px;
    }
}

.recommend {
    width: 100%;
    background-color: #fff;
    margin-top: 5px;
    display: flex;
    padding: 10px;
    box-sizing: border-box;

    div {
        flex: 1;
        height: 80px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hot {
        background: url("../../assets/images/home-cb1.png");
        background-position: center;
        background-size: cover;
        margin-right: 5px;
    }

    .opt {
        background: url("../../assets/images/home-cb2.png");
        background-position: center;
        background-size: cover;
        margin-left: 5px;
    }
}

// 最新商品樣式
.new-shop-content {
    display: flex;
}

.new-shop-item {
    margin-right: 15px;
}

img {
    display: block;
    width: 230px;
    height: 130px;

}

.new-shop-title {
    white-space: normal;
    word-break: break-word;
    font-size: 14px;
    text-align: center;
    padding: 10px;
}

.new-shop-price {
    display: block;
    font-size: 14px;
    width: 100%;
    text-align: center;
    padding: 10px;
    padding-top: 0;
    color: #820085;
}

.skeleton-newShop {
    height: 208px;
    width: 100%;
    display: flex;

    .skeleton-item {
        margin: 10px;
        width: 230px;

        image {
            width: 230px;
        }
    }
}

//廣告圖
.ad {
    background: #fff;
    margin: 5px;

    img {
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
    }
}

// 人才庫
.person-content {
    display: flex;

    .person-item {
        margin-left: 10px;

        img {
            width: 110px;
            height: 170px;
            border-radius: 5px;
        }

        p {
            font-size: 16px;
            margin: 5px 0;
        }

        span {
            display: block;
            font-size: 14px;
            color: #999;
            padding-bottom: 10px;
        }
    }
}
</style>
