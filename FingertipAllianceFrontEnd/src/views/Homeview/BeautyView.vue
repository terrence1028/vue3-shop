<template>
    <BeautyHeader title="美业快讯" />
    <div class="beauty-banner">
        <img src="../../assets/images/banner1.jpg" alt="">
    </div>
    <!-- 列表數據 -->
    <van-list v-model:loading="loading" :finished="finished" finished-text="被看光了~" @load="onLoad">
        <div class="beauty-item" v-for="(item, index) in list" :key="index">
            <img :src="item.image" alt="">
            <div class="beauty-item-desc">
                <p>{{ item.title }}</p>
                <span>{{ item.descs }}</span>
            </div>
        </div>
    </van-list>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import BeautyHeader from "../../components/PubHeader.vue"
import { getBeauty } from "@/api/home/index"

interface IList {
    id: number,
    image: any,
    title: string,
    descs: string
}

const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
const list = ref<IList[]>([])
const page = ref<number>(1)

const onLoad = () => {
    // 異步更新數據
    getBeauty({ page: page.value }).then(res => {
        if (res.data.status === 200) {
            page.value++
            // 小問題:數據合拼
            list.value = list.value.concat(res.data.data)
        }
        // 加載狀態結束
        loading.value = false;

        // 數據全部加載完成
        if (res.data.status === 500) {
            finished.value = true;
        }
    })
};

</script>
<style lang="less" scoped>
.beauty-banner {
    img {
        width: 100%;
    }
}

.beauty-item {
    display: flex;
    background-color: #fff;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #f3f4f5;

    img {
        width: 100px;
        height: 100px;
        border-radius: 5px;
    }

    .beauty-item-desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        box-sizing: border-box;

        p {
            font-size: 15px;
            padding: 10px 0;
        }

        span {
            display: block;
            font-size: 14px;
            color: #999;
            padding: 10px 0;
        }
    }
}
</style>