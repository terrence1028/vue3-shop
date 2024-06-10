<template>
    <div class="nav-container">
      <div class="nav" v-for="(item,index) in navs" :key="index">
          <span class="iconfont" :class="item.icon"></span>
          <span class="nav-title">{{ item.name }}</span>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import {ref,reactive} from "vue"
  
  const navs = [
      {
          name:"甲油膠",
          icon:"icon-art",
          class:"nav1"
      },
      {
          name:"潮流飾品",
          icon:"icon-a-camerashot",
          class:"nav2"
      },
      {
          name:"美甲工具",
          icon:"icon-clarity",
          class:"nav3"
      },
      {
          name:"美睫產品",
          icon:"icon-effects",
          class:"nav4"
      },
      {
          name:"美甲燈",
          icon:"icon-a-Closeupshot",
          class:"nav5"
      },
      {
          name:"筆系列",
          icon:"icon-Shadow",
          class:"nav6"
      },
      {
          name:"批發套装",
          icon:"icon-Colors",
          class:"nav7"
      },
      {
          name:"全部分類",
          icon:"icon-Scene",
          class:"nav8"
      }
  ]
  
  </script>
  <style lang="less" scoped>
  
  .nav-container{
      padding: 10px;
      overflow: hidden;
      clear: both;
      background-color: #fff;
      text-align: center;
      .nav{
          float: left;
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          .iconfont{
              display: block;
              background-color: #f3f4f5;
              width: 50px;
              height: 50px;
              font-size: 25px;
              text-align: center;
              border-radius: 50%;
              line-height: 50px;
          }
          .nav-title{
              font-size: 14px;
              margin-top: 5px;
          }
      }
      .icon-art{
          color: #2a83fe;
      }
      .icon-a-camerashot{
          color: #fd3761;
      }
      .icon-clarity{
          color: #2b91e2;
      }
      .icon-effects{
          color: #00b478;
      }
  }
  
  </style>
  