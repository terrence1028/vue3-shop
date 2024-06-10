<template>
    <div class="pub-header">
        <van-nav-bar :title="props.title" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"

const props = defineProps<{
    title:string
}>()

const onClickLeft= ()=>{
    history.back()
}

</script>

<style lang="less" scoped></style>
