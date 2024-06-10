import axios from "../../utils/request"
import qs from "querystring"

// 登录
export function login(data:any){
    return axios({
        url:"/api/api/login",
        method:"post",
        data:qs.stringify(data)
    })
}

// 注册
export function register(data:any){
    return axios({
        url:"/api/api/register",
        method:"post",
        data:qs.stringify(data)
    })
}