<template>
    <div class="seckill">
      <h3 class="title">限时秒杀</h3>
      <div class="list">
          <div class="item">
              <img src="../../assets/images/k1.png" alt="">
              <p>北歐408色</p>
              <span>13.5元起</span>
          </div>
          <div class="item">
              <img src="../../assets/images/k2.png" alt="">
              <p>南歐308色</p>
              <span>13.5元起</span>
          </div>
          <div class="item">
              <img src="../../assets/images/k3.png" alt="">
              <p>東歐108色</p>
              <span>13.5元起</span>
          </div>
          <div class="item">
              <img src="../../assets/images/k4.png" alt="">
              <p>西歐808色</p>
              <span>13.5元起</span>
          </div>
          <div class="item">
              <img src="../../assets/images/k5.png" alt="">
              <p>歐欧908色</p>
              <span>13.5元起</span>
          </div>
          <div class="item">
              <img src="../../assets/images/k6.png" alt="">
              <p>金欧408色</p>
              <span>13.5元起</span>
          </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import {ref,reactive} from "vue"
  
  </script>
  <style lang="less" scoped>
  
  .seckill{
      background-color: #fff;
      .title{
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          padding: 20px 0;
      }
      .list{
          padding: 10px;
          padding-top: 0;
          overflow: hidden;
          clear: both;
          .item{
              width: 32%;
              float: left;
              margin-right: 2%;
              margin-bottom: 20px;
              img{
                  width: 100%;
                  border-radius: 5px;
              }
              p{
                  font-size: 14px;
                  text-align: center;
              }
              span{
                  display: block;
                  font-size: 14px;
                  color: #F23D52;
                  text-align: center;
              }
          }
          .item:nth-child(3n){
              margin-right: 0;
          }
      }
  }
  
  </style>
  