<template>
    <h3 class="title">{{recommendTitle}}</h3>
    <div class="card">
        <div class="card-item" v-for="(item,index) in cardData" :key="item.id" @click="onGoodsItem(item.id)">
            <img class="item-goods" :src="item.image" alt="">
            <p class="item-name">{{ item.title }}</p>
            <div class="item-desc">
                <span class="price">${{ item.price }}.00</span>
                <span class="iconfont">&#x344b;</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref , reactive } from "vue"
import { useRouter } from "vue-router";

const route = useRouter()

interface ICard{
    id:number,
    image:any,
    title:string,
    price:string
}

const props = defineProps<{
    cardData:ICard[],
    recommendTitle:string
}>()

const onGoodsItem =(id:number)=>{
    route.push({
        name:"goodsDetail",
        params:{id}
    })
}

</script>
<style lang="less" scoped>
.title {
    text-align: center;
    font-weight: 400;
    color: #999;
    font-size: 14px;
    margin: 10px auto;
    display: flex;
    flex-direction: row;

    &::before {
        content: "";
        width: 50px;
        border-bottom: 1px solid #999;
        margin: auto;
    }

    &::after {
        content: "";
        width: 50px;
        border-bottom: 1px solid #999;
        margin: auto;
    }
}

.card {
    background: #fff;
    padding: 20px 10px;
    overflow: hidden;
    clear: both;

    .card-item {
        width: 49%;
        float: left;
        margin: 10px 0;

        .item-goods {
            width: 100%;
            border-radius: 5px;
        }

        .item-name {
            font-size: 14px;
            margin: 5px 0;
            padding: 0 10px;
            box-sizing: border-box;
        }

        .item-desc {
            display: flex;
            padding: 5px 10px;
            box-sizing: border-box;

            .price {
                flex: 1;
                font-size: 12px;
                text-align: left;
            }

            .iconfont {
                flex: 1;
                font-size: 12px;
                text-align: right;
                color: #999;
            }
        }
    }

    .card-item:nth-child(even) {
        margin-left: 2%;
    }
}
</style>
