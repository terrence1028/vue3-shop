<template>
    <MineDataHeader title="用户"/>
 <div class="gap">
    <ItemView :image="true" :item="item1"/>
    <ItemView :item="item2"/>
    <ItemView :item="item3"/>
    <ItemView :item="item4"/>
</div>
<div class="gap">
    <ItemView :item="item5"/>
</div>
</template>
<script setup lang="ts">
import { ref , reactive } from "vue"
import MineDataHeader from "../../components/PubHeader.vue"
import ItemView from "./components/Item.vue";
import icon from "../../assets/images/icon.png"
import {useTokenStore} from "../../stores/login"

const {user} = useTokenStore()

const item1 ={
    text:"頭像",
    desc:"",
    image:icon
}
const item2 ={
    text:"暱稱",
    desc:user.username,
}
const item3 ={
    text:"性別",
    desc:"男",
}
const item4 ={
    text:"生日",
    desc:"",
}
const item5 ={
    text:"收貨地址",
    desc:"",
}
</script>
<style lang="less" scoped>
.gap{
    margin: 10px 0;
}
</style>
