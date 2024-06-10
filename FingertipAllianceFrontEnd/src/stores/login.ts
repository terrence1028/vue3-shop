import { defineStore } from "pinia"
import { login } from "../api/Login/index"

export const useTokenStore = defineStore("login", {
    state: () => ({
        user: {
            token: "",
            username: ""
        }
    }),
    actions: {
        async setToken({ tel, password, verify }: any, success: Function, fail: Function) {
            const res = await login({
                tel: tel.value,
                password: password.value,
                verify
            })
            if (res.data.status == 200) {
                // 存储到状态管理中
                this.user.token = res.data.token
                this.user.username = res.data.username
                success()
            } else {
                fail(res.data)
            }
        },
        clearToken(){
            this.user.token = ""
            this.user.username = ""
        }
    },
    persist: {
        enabled: true,
        strategies: [{
            storage: localStorage,
            key: "user"
        }]
    }
})