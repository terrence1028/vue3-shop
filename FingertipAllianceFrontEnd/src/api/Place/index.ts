import axios from "../../utils/request"

// 選址列表
export function getPlaceList(params:any){
    return axios({
        url:"/api/api/place",
        method:"get",
        params
    })
}

/**
 * 選址詳情
 */
export function getPlaceDetails(params:any){
    return axios({
        url:`/api/api/place/details?id=${params.id}`,
        method:"get"
    })
}