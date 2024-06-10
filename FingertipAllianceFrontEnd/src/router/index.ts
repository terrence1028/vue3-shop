import { createRouter, createWebHistory } from 'vue-router'
import Layoutview from '../views/Layoutview.vue'
import HomeView from '../views/Homeview/HomeView.vue'
import MineView from "../views/Mineview/Mineview.vue";
import PlaceView from "../views/PlaceView/Placeview.vue";
import PersonView from "../views/Personview/Personview.vue";
import Shopview from "../views/Shopview/Shopview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layoutview,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/Mine',
          name: 'Mine',
          component: MineView
        },
        {
          path: '/Place',
          name: 'Place',
          component: PlaceView
        },
        {
          path: '/Person',
          name: 'Person',
          component: PersonView
        },
        {
          path: '/Shop',
          name: 'Shopview',
          component: Shopview
        },
      ]
    },
    {
      path: "/city",
      name: "city",
      component: () => import("../views/Homeview/CityView.vue")
    },
    {
      path: "/beauty",
      name: "beauty",
      component: () => import("../views/Homeview/BeautyView.vue")
    },
    {
      path: "/goodsDetail/:id",
      name: "goodsDetail",
      component: () => import("../views/Goodsview/goods.vue")
    },
    {
      path: "/commentList",
      name: "commentList",
      component: () => import("../views/Goodsview/CommentList.vue")
    },
    {
      path: "/placeDetails/:id",
      name: "placeDetails",
      component: () => import("../views/PlaceView/PlaceDetail.vue")
    },
    {
      path: "/placeMap",
      name: "placeMap",
      component: () => import("../views/PlaceView/PlaceMap.vue")
    },
    {
      path: "/persondetails/:id",
      name: "personDetails",
      component: () => import("../views/Personview/PersonDetail.vue")
    },
    {
      path:"/login",
      name:"login",
      component:()=>import("../views/LoginView/login.vue")
    },
    {
      path:"/register",
      name:"register",
      component:()=>import("../views/LoginView/Register.vue")
    },
    {
      path:"/mineset",
      name:"mineset",
      component:()=>import("../views/Mineview/MineSet.vue")
    },
    {
      path:"/mineaccount",
      name:"mineaccount",
      component:()=>import("../views/Mineview/MineAccount.vue")
    },
    {
      path:"/minedata",
      name:"minedata",
      component:()=>import("../views/Mineview/Minedata.vue")
    },
    { 
      path:"/order/:index",
      name:"order",
      component:()=>import("../views/Order.vue/OrderView.vue")
    },
    {
      path:"/pay/:id/:orderNo",
      name:"pay",
      component:() => import("../views/PayView/pay.vue")
    }
  ]
})

export default router
