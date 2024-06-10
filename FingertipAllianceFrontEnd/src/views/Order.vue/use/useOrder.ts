import { ref,reactive,onMounted } from "vue"
import { getOrderType } from "../../../api/Order/index"

export function useOrder(type:string|number){

    // 声明一个存储数据的方案
    const orderList = ref([])
    onMounted(async () =>{
        const res = await getOrderType({type})
        if(res.data.status == 200){
            orderList.value = res.data.data
        }
    })

    return {
        orderList
    }
}