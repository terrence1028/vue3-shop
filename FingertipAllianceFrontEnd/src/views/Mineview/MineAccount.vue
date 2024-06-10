<template>
    <MineAccountHeader title="帳號管理"/>
    <div class="gap">
        <ItemView :item="item1"/>
        <ItemView :item="item2"/>
        <ItemView :item="item3"/>
        <ItemView :item="item4"/>
    </div>
</template>
<script setup lang="ts">
import { ref , reactive } from "vue"
import MineAccountHeader from "../../components/PubHeader.vue"
import ItemView from "../Mineview/components/Item.vue"

const item1 = {
    text:"用户名",
    desc:"未設置",
    descColor:"#999",
    fontSize:'13px'
}

const item2 = {
    text:"手機號",
    desc:"未設置",
    descColor:"#999",
    fontSize:'13px'
}

const item3 = {
    text:"Email",
    desc:"未設置",
    descColor:"#999",
    fontSize:'13px'
}

const item4 = {
    text:"修改密碼",
    desc:""
}

</script>
<style lang="less" scoped>
.gap{
    margin: 10px 0;
}
</style>
