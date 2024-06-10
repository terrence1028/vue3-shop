<template>
    <div class="item">
       <p class="title">{{item.text}}</p>
       <div class="text" v-if="!image">
           <span :style="{color:item.descColor,fontSize:item.fontSize}" class="text-desc">{{item.desc}}</span>
           <span v-if="!right" class="iconfont icon-jiantouyou"></span>
       </div>
       <div class="mixin" v-else>
           <img :src="item.image" alt="">
           <span class="iconfont icon-jiantouyou"></span>
       </div>
   </div>
   </template>
   <script setup lang="ts">
   import { ref , reactive } from "vue"
   
   interface IItem{
       text:string,
       desc:string,
       descColor?:string,
       fontSize?:string,
       image?:string
   }
   
   const porps = defineProps<{
       image?:boolean,
       right?:boolean
       item:IItem
   }>()
   
   </script>
   <style lang="less" scoped>
   .item{
       width: 100%;
       background: #fff;
       padding: 0 10px;
       border-bottom: 1px solid #f3f4f5;
       border-top: 1px solid #f3f4f5;
       box-sizing: border-box;
       display: flex;
       align-items: center;
       .title{
           flex: 1;
           font-size: 14px;
           padding-left: 10px;
           text-align: left;
           height: 50px;
           line-height: 50px;
       }
       .text{
           .text-desc{
               font-size: 14px;
               margin-right: 10px;
           }
           .iconfont{
               font-size: 15px;
           }
       }
       .mixin{
           flex:1;
           display: flex;
           align-items: center;
           justify-content: flex-end;
           img{
               width: 50px;
               height: 50px;
               padding: 10px 0;
               margin-right: 10px;
           }
           .iconfont{
               font-size: 15px;
           }
       }
   }
   </style>
   