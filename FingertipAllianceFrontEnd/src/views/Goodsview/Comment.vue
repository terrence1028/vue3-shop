<template>
    <div class="comment-container">
        <div class="comment-header">
            <div class="header-image">
                <img :src="comment.icon" alt="">
            </div>
            <div class="header-user">
                <span>{{comment.name}}</span>
                <van-rate class="rate" v-model="comment.rate" icon="like" :size="12" readonly />
            </div>
            <div class="time">
                <span>{{comment.time}}</span>
            </div>
        </div>
        <div class="comment-body">
            <div class="body-text">
                <span>{{ comment.text }}</span>
            </div>
            <div class="body-image">
                <img :src="item" alt="" v-for="(item,index) in comment.images" :key="index">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"

const value = 4

interface IComment{
    id:number,
    icon:string,
    name:string,
    rate:number,
    time:string,
    text:string,
    images:[]
}

const props = defineProps<{
    comment:IComment
}>()

</script>
<style lang="less" scoped>
.comment-container{
    background: #fff;
    .comment-header{
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        .header-image{
            img{
                width: 40px;
                height: 40px;
            }
        }
        .header-user{
            padding-left: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            span{
                font-size: 15px;
            }
        }
        .time{
            flex: 1;
            display: flex;
            justify-content: flex-end;
            span{
                font-size: 13px;
                color: #999;
                padding-top: 5px;
            }
        }
    }
    .comment-body{
        padding: 10px;
        padding-top: 0;
        padding-left: 50px;
        .body-text{
            span{
                font-size: 14px;
            }
        }
        .body-image{
            margin-top: 5px;
            img{
                width: 50px;
                margin-right: 10px;
            }
        }
    }
}
</style>
