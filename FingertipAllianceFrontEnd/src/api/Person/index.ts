import axios from "../../utils/request"

// 人才列表
export function getPersonList(params:any){
    return axios({
        url:"/api/api/person/list",
        method:"get",
        params
    })
}

// 人才詳情
export function getPersonDetails(params:any){
    return axios({
        url:`/api/api/person/details?id=${params.id}`,
        method:"get"
    })
}
