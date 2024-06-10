<template>
    <CityHeader :title="title"/>
    <div class="current-city">
        <h3>當前定位城市</h3>
        <div>北京</div>
    </div>
    <div class="change-city">選擇城市</div>
    <van-index-bar>
        <div v-for="(value, key, index) in cityListJson.city_list" :key="index">
            <van-index-anchor :index="key" />
            <van-cell :title="item.city" v-for="(item,cityIndex) in cityListJson.city_list[key]" :key="cityIndex" @click="onChangeCity(item.city)"/>
        </div>

    </van-index-bar>

</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import cityListJson from "@/assets/json/city_list.json"
import { useRouter } from "vue-router";
import { useCityStore } from "@/stores/city";
import CityHeader from "@/components/PubHeader.vue"



const router = useRouter()

const cityStore = useCityStore()

const title = "城市選擇"

const onChangeCity = (city:string) => {
    // window.history.back()
    cityStore.city = city
    router.back()
    
}

</script>
<style lang="less" scoped>
.current-city {
    background-color: #fff;
    margin: 10px 0;
    padding: 10px;

    h3 {
        font-size: 14px;
        color: #999;
        font-weight: 400;
    }

    div {
        font-size: 14px;
        margin-top: 15px;
    }
}

.change-city {
    background-color: #fff;
    margin: 10px 0;
    padding: 10px;
}
</style>
