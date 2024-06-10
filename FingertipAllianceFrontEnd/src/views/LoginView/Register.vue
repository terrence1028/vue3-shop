<template>
    <RegisterHeader title="" />
    <div class="text">
        <h3>新用户注册</h3>
    </div>
    <div class="info">
        <van-cell-group inset>
            <van-field v-model="tel" label="手机号" type="tel" />
            <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
                <template #button>
                    <van-button color="#684886" type="primary">发送验证码</van-button>
                </template>
            </van-field>
            <van-field v-model="password" label="密码" type="password" />
        </van-cell-group>
    </div>
    <div class="btn">
        <van-button @click="onRegister" color="#684886" type="primary" block>注册</van-button>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import RegisterHeader from "../../components/PubHeader.vue"
import {register} from "../../api/Login/index"
import { useRouter } from "vue-router";

const router = useRouter()

const tel = ref("")
const password = ref("")
const sms = ref("")

const onRegister = () => {
    console.log(tel.value,
        password.value);
    
    register({
        phone:tel.value,
        password:password.value
    }).then(res=>{
        if(res.data.status === 200){
            router.push("/login")
        }
        // console.log(res.data);
    })
}

</script>
<style lang="less" scoped>
.text {
    h3 {
        text-align: center;
        padding: 40px;
    }
}
</style>
