<template>
    <MineSetHeader title="設置" />
    <div class="gap">
        <ItemView :item="item1" />
    </div>
    <div class="gap">
        <ItemView :item="item2" @click="onAccount" />
        <ItemView :item="item3" :right="true" />
    </div>
    <div class="gap">
        <ItemView :item="item4" />
    </div>
    <div class="logout" @click="onLogout">退出登錄</div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import MineSetHeader from "../../components/PubHeader.vue"
import ItemView from "../Mineview/components/Item.vue"
import { useTokenStore } from "../../stores/login"
import { useRouter } from "vue-router";

const router = useRouter()
const { clearToken } = useTokenStore()

const item1 = {
    text: "個人信息",
    desc: ""
}

const item2 = {
    text: "帳號管理",
    desc: ""
}

const item3 = {
    text: "清除緩存",
    desc: "0.0M"
}

const item4 = {
    text: "關於我們",
    desc: ""
}

const onLogout = () => {
    clearToken()
    router.push("/login")
}

const onAccount = () => {
    router.push("/mineaccount")
}


</script>
<style lang="less" scoped>
.gap {
    margin: 10px 0;
}

.logout {
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    background-color: #fff;
    margin-top: 25px;
}
</style>
