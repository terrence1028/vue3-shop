<template>
    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="(item,index) in images" :key="index">
            <img :src="item.image" />
        </van-swipe-item>
    </van-swipe>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"

interface IImage{
    image:string,
    title:string,
    url:string
}

const props = defineProps<{
    images:IImage[]
}>()

</script>
<style lang="less" scoped>
img{
    width: 100%;
}
</style>

<style>

</style>
