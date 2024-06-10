<template>
 <router-view/>
</template>
<script setup lang="ts">
import { ref , reactive } from "vue"

</script>
<style lang="less">
    // 公共nav返回按鈕樣式修改
.van-nav-bar__text{
    color:#684886 !important;
}
.van-nav-bar .van-icon{
    color:#684886 !important;
}
//焦點輪播圖樣式

.van-swipe__indicator--active{
    background-color: #684886;
}

//篩選下拉菜單
.van-dropdown-item__content{
    background-color: #f3f4f5 !important;
}
//cell去掉flex
.van-cell__value{
    flex:none !important;
}   
//tab切換樣式重置
.van-tabs__line{
    background-color: #684886 !important;
}

</style>
