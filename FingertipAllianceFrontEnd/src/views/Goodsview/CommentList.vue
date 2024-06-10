<template>
    <CommentListHeader title="全部評價" />
    <Comment :comment="item" v-for="(item,index) in comment" :key="index"/>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import CommentListHeader from "../../components/PubHeader.vue"
import { getGoodsCommentAll } from "../../api/Goods/index"
import Comment from "./Comment.vue";

const comment =ref([])

onMounted(async() => {
    const res = await getGoodsCommentAll()
    console.log(res.data);
    if(res.data.status === 200){
        comment.value = res.data.data
    }
    
})

</script>
<style lang="less" scoped></style>
