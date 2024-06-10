<template>
    <div class="order-container">
        <ItemView :item="item" v-for="(item, index) in orderList" :key="index" />
        <div class="order-pay">
            <div class="btn">立即付款</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import ItemView from "./Components/ItemView.vue";
import { useOrder } from "./use/useOrder"

const props = defineProps<{
    type: string
}>()

const { orderList } = useOrder(props.type)

</script>
<style lang="less" scoped>
.order-container {
    margin-top: 5px;

    .order-pay {
        background-color: #fff;
        border-top: 1px solid #f3f4f5;
        padding: 10px;
        display: flex;
        justify-content: flex-end;

        .btn {
            width: 100px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            background-color: #684886;
            border-radius: 20px;
        }
    }
}
</style>