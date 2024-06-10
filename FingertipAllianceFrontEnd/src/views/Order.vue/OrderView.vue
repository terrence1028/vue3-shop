<template>
    <OrderViewHeader title="我的訂單" />
    <van-tabs v-model:active="active">
        <van-tab title="全部" name="allOrder">
            <OrderAllView />
        </van-tab>
        <van-tab title="待支付" name="payOrder">
            <OrderPayView type="1" />
        </van-tab>
        <van-tab title="待收貨" name="takeOrder">
            <OrderTakeView type="2" />
        </van-tab>
        <van-tab title="待評價" name="AppraiseOrder">
            <OrderAppraiseView type="3" />
        </van-tab>
    </van-tabs>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useRoute } from "vue-router"
import OrderViewHeader from "../../components/PubHeader.vue"
import OrderAppraiseView from "./OrderAppraise.vue"
import OrderTakeView from "./OrderTake.vue"
import OrderAllView from "./OrderAll.vue"
import OrderPayView from "./OrderPay.vue"

const route = useRoute()

const active = ref<string | string[]>("allOrder")

onMounted(() => {
    active.value = route.params.index
})

</script>
<style lang="less" scoped></style>
