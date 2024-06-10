import axios from "../../utils/request"

// 精选套装
export function getSuit(){
    return axios({
        url:"/api/api/suit",
        method:"get",
    })
}


