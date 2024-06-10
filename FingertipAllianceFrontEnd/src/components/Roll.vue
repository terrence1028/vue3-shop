<template>
    <div class="roll">
        <div class="roll-header">
            <h3>{{rollInfo.title}}</h3>
            <span class="all">{{ rollInfo.all }}<span class="iconfont icon-jiandouyou"></span></span>
        </div>
        <div class="roll-main">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"

interface IRoll{
    title:string,
    all:string
}

const props = defineProps<{
    rollInfo:IRoll
}>()

</script>
<style lang="less" scoped>
//左右滾動
.roll {
    background: #fff;

    .roll-header {
        height: 40px;
        line-height: 40px;
        display: flex;

        h3 {
            flex: 1;
            font-size: 16px;
            font-weight: 400;
            text-align: left;
            padding-left: 10px;
        }

        .all {
            flex: 1;
            text-align: right;
            font-size: 14px;
            color: #999;
            padding-right: 10px;
        }

        span {
            font-size: 12px;
        }
    }

    .roll-main {
        text-align: center;
        white-space: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
    }
}
</style>
