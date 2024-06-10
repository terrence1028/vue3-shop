<template>
    <TopNavComponent title="商城"/>
    <SwiperComponent :images="banners" />
    <ShopNavView />
    <div class="ad">
      <div class="ad-one">
        <img src="../../assets/images/ad-1.jpg" alt="">
      </div>
      <div class="ad-two">
        <img src="../../assets/images/ad-2.jpg" alt="">
      </div>
    </div>
    <ShopSeckillView />
    <div class="suit">
      <img src="../../assets/images/t1.jpg" alt="">
    </div>
    <RollComponent :rollInfo="suit">
      <div class="suit-content">
        <div class="suit-item" v-for="(item,index) in suitList" :key="index">
          <img :src="item.image" alt="">
          <p>{{ item.title }}</p>
          <span>{{ item.price }}</span>
        </div>
      </div>
    </RollComponent>
    <div class="discount">
      <h3>特惠专题</h3>
      <img src="../../assets/images/d1.png" alt="">
      <img src="../../assets/images/d2.jpg" alt="">
    </div>
    <CardComponent :recommendTitle="recommendTitle" :cardData="singleGoods"/>
  </template>
  <script setup lang="ts">
  import { ref, reactive, onMounted } from "vue"
  import TopNavComponent from "@/components/PubHeader.vue";
  import SwiperComponent from "@/components/swiper.vue";
  import { getCaroursel,getRecommendgoods } from "@/api/home/index"
  import { getSuit } from "@/api/Shop/index"
  import ShopNavView from "./shopnav.vue"
  import ShopSeckillView from "./shopseckill.vue";
  import RollComponent from "@/components/Roll.vue";
  import CardComponent from "@/components/card.vue";
  
  interface IBanner{
    image:string,
    title:string,
    url:string
  }
  
  const banners = ref<IBanner[]>([])
  
  onMounted(() => {
    getCaroursel().then(res => {
      if(res.data.status === 200){
        banners.value = res.data.data
      }
    })
  })
  
  /**
   * 精选套装
   */
  interface ISuit{
    title:string,
    all:string
  }
  const suit:ISuit = reactive({
    title:"精选套装",
    all:"查看全部"
  })
  
  interface ISuitList{
    image:string,
    title:string,
    price:string
  }
  
  const suitList = ref<ISuitList[]>([])
  
  onMounted(() =>{
    getSuit().then(res =>{
      if(res.data.status === 200){
        suitList.value = res.data.data
      }
    })
  })
  
  /**
   * 单品推荐
   */
  const recommendTitle = "单品推荐"
  
  interface ISingleGoods{
    id:number,
    image:string,
    price:string,
    title:string
  }
  
  const singleGoods = ref<ISingleGoods[]>([])
  
  onMounted(() =>{
    getRecommendgoods().then(res =>{
      singleGoods.value = res.data.data
    })
  })
  
  </script>
  <style lang="less" scoped>
  
  .ad{
    width: 100%;
    height: 100px;
    display: flex;
    margin: 10px 0;
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
    overflow: hidden;
    .ad-one{
      img{
        width: 100%;
      }
    }
    .ad-two{
      img{
        width: 100%;
      }
    }
  }
  
  .suit{
    img{
      width: 100%;
    }
  }
  
  .suit-content{
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    .suit-item{
      margin-right: 10px;
      width: 100px;
      img{
        width: 100px;
        height: 100px;
      }
      p{
        white-space: normal;
        word-break: break-word;
        font-size: 14px;
        text-align: left;
        margin-top: 5px;
      }
      span{
        display: block;
        text-align: left;
        font-size: 14px;
        color: #F23D52;
        margin-top: 5px;
      }
    }
  }
  
  .discount{
    background: #fff;
    margin-top: 5px;
    h3{
      text-align: center;
      font-size: 15px;
      font-weight: 400;
      padding: 15px 0;
    }
    img{
      width: 100%;
    }
  }
  
  </style>
  