import axios from "../../utils/request";

// 商品詳情
export function getGoodsDetails(params: any) {
    return axios({
        url: "/api/api/goods/details",
        method: "get",
        params
    })
}

export function getGoodsComments(params: any) {
    return axios({
        url: "/api/api/comment/goods",
        method: "get",
        params
    })
}

export function getGoodsCommentAll() {
    return axios({
        url: "/api/api/comment/all",
        method: "get",
    })
}