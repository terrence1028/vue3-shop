<template>
    <div class="order-container">
      <ItemView :item="item" v-for="(item,index) in orderList" :key="index"/>
    </div>
  </template>
  <script setup lang="ts">
  import {ref,reactive} from "vue"
  import ItemView from "./Components/ItemView.vue";
  import { useOrder } from "./use/useOrder"
  
  const props = defineProps<{
    type:string
  }>()
  const { orderList } = useOrder(props.type)
  
  </script>
  <style lang="less" scoped>
  
  .order-container{
    margin-top: 5px;
  }
  
  </style>
  