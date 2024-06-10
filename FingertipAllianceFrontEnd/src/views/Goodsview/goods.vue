<template>
    <GoodsDetailsHeader :title="title" />
    <div class="details-container">
        <div class="dc-goods">
            <img class="goods-image" :src="goodDetails?.image" alt="">
            <p class="goods-title">{{ goodDetails?.title }}</p>
            <p><span class="goods-price">${{ goodDetails?.price }}</span><span class="goods-price-old">$1000</span></p>
        </div>
        <div class="other">
            <span class="s1">快遞:免郵費</span>
            <span class="s2">好評率:99%</span>
            <span class="s3">銷量:3000</span>
        </div>
    </div>
    <div class="gap">
        <ItemView :image="false" :item="item" />
    </div>
    <div class="comment-container">
        <div class="comment">
            <div class="comment-header">
                <div class="title">用户評價(999+)</div>
                <div class="percent">
                    <span class="text-desc">98%好評</span>
                    <span class="iconfont">&#xe62d;</span>
                </div>
            </div>
        </div>
        <Comment :comment="item" v-for="(item, index) in comment" :key="index" />
        <div class="more" @click="onListMore">
            <div>查看更多</div>
        </div>
    </div>
    <div class="footer">
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" dot />
            <van-action-bar-icon icon="cart-o" text="购物车" badge="5" />
            <van-action-bar-icon icon="shop-o" text="店铺" badge="12" />
            <van-action-bar-button type="warning" text="加入购物车" />
            <van-action-bar-button type="danger" text="立即购买" @click="onBuy" />
        </van-action-bar>

    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router";
import { getGoodsDetails, getGoodsComments } from "@/api/Goods/index";
import GoodsDetailsHeader from "../../components/PubHeader.vue"
import ItemView from "../Goodsview/Components/item.vue"
import Comment from "./Comment.vue";
import { getCreateOrder } from "../../api/Order/index"

const route = useRoute()
const router = useRouter()

const title = "商品詳情"

interface IGoods {
    id: number,
    image: any,
    title: string,
    price: string
}


const goodDetails = ref<IGoods>()

onMounted(async () => {
    var res = await getGoodsDetails({ id: route.params.id })
    if (res.status === 200) {
        goodDetails.value = res.data.data
    }

})

// 規格

const item = {
    text: "選擇規格",
    desc: ""
}

//獲取商品評價

const comment = ref([])

onMounted(async () => {
    const res = await getGoodsComments({ id: route.params.id })
    if (res.data.status === 200) {
        comment.value = res.data.data
    }
})

const onListMore = () => {
    router.push("/commentList")
}

//立即購買 生成訂單

const onBuy = () => {
  getCreateOrder({
    title: goodDetails.value?.title,
    totalFee: goodDetails.value?.price
  }).then(res => {
    if (res.data.code === 200) {
      router.push({
        name: "pay",
        params: { 
          id: route.params.id,
          orderNo:res.data.data.orderNo 
        }
      })
    }
  })
}

</script>
<style lang="less" scoped>
.details-container {
    .dc-goods {
        background: #fff;

        .goods-image {
            width: 100%;
        }

        .goods-title {
            padding: 10px;
            box-sizing: border-box;
            font-size: 14px;
        }

        p {
            padding-bottom: 10px;

            .goods-price {
                padding: 10px;
                box-sizing: border-box;
                font-size: 16px;
                color: #F23D52;
            }

            .goods-price-old {
                padding: 10px;
                box-sizing: border-box;
                font-size: 12px;
                color: #999;
                text-decoration: line-through;
            }
        }

    }

    .other {
        background: #fff;
        display: flex;
        padding: 10px;

        span {
            flex: 1;
            font-size: 12px;
            color: #999;
        }

        .s1 {
            text-align: left;
        }

        .s2 {
            text-align: center;
        }

        .s3 {
            text-align: right;
        }
    }
}

.gap {
    margin: 5px 0;
}

.comment {
    background: #fff;
    border-bottom: 1px solid #f3f4f5;

    .comment-header {
        padding: 10px;
        display: flex;

        .title {
            flex: 1;
            font-size: 14px;
            text-align: left;
        }

        .percent {
            flex: 1;
            text-align: right;
            color: #999;

            .text-desc {
                font-size: 12px;
            }

            .iconfont {
                font-size: 12px;
            }
        }
    }
}

.more {
    background: #fff;
    padding: 10px;
    border-top: 1px solid #f3f4f5;

    div {
        text-align: center;
        font-size: 14px;
    }
}
</style>
