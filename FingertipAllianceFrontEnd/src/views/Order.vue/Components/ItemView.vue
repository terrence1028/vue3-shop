<template>
  <div class="order">
    <div class="order-header">
      <div class="order-header-num">
        <p>訂單號：{{ item.num }}</p>
      </div>
      <div class="order-header-status">
        <p v-if="item.status == '1'">等待支付</p>
        <p v-if="item.status == '2'">等待收貨</p>
        <p v-if="item.status == '3'">等待評價</p>
      </div>
    </div>
    <div class="order-body">
      <van-card :num="item.num" :price="item.price" :desc="item.descs" :title="item.title" :thumb="item.image" />
    </div>
    <div class="order-footer">
      <div class="order-footer-text">
        <p>數量</p>
      </div>
      <div class="order-footer-num">
        <p>共{{ item.ordernum }}件 <span class="iconfont icon-jiantouyou"></span></p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"

const statusNum = ref("1")

interface IItem {
  id: number,
  descs: string,
  image: string,
  num: string,
  ordernum: string,
  price: string,
  status: string,
  title: string,
  totalnum: string
}

const props = defineProps<{ item: IItem }>()

</script>
<style lang="less" scoped>
.order {
  background-color: #fff;
  margin-top: 5px;

  .order-header {
    display: flex;
    padding: 10px;

    .order-header-num {
      flex: 1;

      p {
        text-align: left;
        font-size: 12px;
      }
    }

    .order-header-status {
      flex: 1;
      text-align: right;

      p {
        font-size: 12px;
        color: #ff4444;
      }
    }
  }

  .order-body {
    background: #fff;
  }

  .order-footer {
    display: flex;
    padding: 10px;

    .order-footer-text {
      flex: 1;
      font-size: 14px;
    }

    .order-footer-num {
      flex: 1;
      font-size: 14px;
      text-align: right;

      span {
        font-size: 12px;
      }
    }
  }
}
</style>