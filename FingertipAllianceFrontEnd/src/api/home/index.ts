import axios from "../../utils/request"

// banner 輪播圖
export function getCaroursel(){
    return axios({
        url:"/api/api/banner",
        method:"get",
    })
}

// 美業快訊
export function getBeauty(params:any){
    return axios({
        url:"/api/api/beauty",
        method:"get",
        params
    })
}

// 最新店鋪
export function getNewGoods(){
    return axios({
        url:"/api/api/newgoods",
        method:"get",
    })
}

//人才庫

export function getPersonStore(){
    return axios({
        url:"/api/api/personstore",
        method:"get",

    })
}

//為你推薦

export function getRecommendgoods(){
    return axios({
        url:"/api/api/recommendgoods",
        method:"get"
    })
}