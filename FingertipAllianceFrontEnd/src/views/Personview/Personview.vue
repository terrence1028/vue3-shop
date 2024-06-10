<template>
    <TopNavComponent />
    <div class="content">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">

            <div class="person-item" v-for="(item, index) in list" :key="index" @click="onPersonDetails(item.id)">
                <img :src="item.image" alt="">
                <div class="person-item-desc">
                    <p>{{ item.name }}</p>
                    <span class="age">工作经验：{{ item.age }}年</span>
                    <span class="price">{{ item.price }}元/月</span>
                    <span class="descs">{{ item.descs }}</span>
                </div>
            </div>

        </van-list>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, renderSlot } from "vue"
import { getPersonList } from "../../api/Person/index"
import TopNavComponent from "@/components/TopNav.vue";
import { useRouter } from "vue-router";

const router = useRouter()

interface IList {
    id: number,
    image: string,
    name: string,
    age: string,
    price: string,
    descs: string,
    sex: string,
    birthday: string,
    education: string
}

const page = ref(1)
const loading = ref(false)
const finished = ref(false)
const list = ref<IList[]>([])

const onLoad = () => {
    getPersonList({ page: page.value }).then(res => {
        if (res.data.status === 200) {
            page.value++
            list.value = list.value.concat(res.data.data)
        }
        // 加载狀態结束
        loading.value = false;

        // 數據全部加载完成
        if (res.data.status === 500) {
            finished.value = true;
        }
    })
}

const onPersonDetails = (id: number) => {
    router.push({
        name: "personDetails",
        params: { id }
    })
}

</script>
<style lang="less" scoped>
.content {
    padding: 10px;
    background: #fff;
    box-sizing: border-box;

    .person-item {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #f3f4f5;

        img {
            width: 100px;
            border-radius: 5px;
        }

        .person-item-desc {
            padding: 10px;
            box-sizing: border-box;

            p {
                font-size: 15px;
                font-weight: 700;
                margin: 5px 0;
            }

            .age {
                display: block;
                font-size: 14px;
                color: #999;
                margin-bottom: 15px;
            }

            .price {
                display: block;
                font-size: 14px;
                color: #ff4444;
                margin-bottom: 10px;
            }

            .descs {
                font-size: 14px;
                color: #999;
            }
        }
    }
}
</style>