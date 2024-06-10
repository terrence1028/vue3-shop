<template>
    <div class="login-container">
        <div class="login">
            <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="info">
            <van-cell-group inset>
                <van-field v-model="tel" label="手机号" type="tel" />
                <van-field v-model="password" label="密码" type="password" />
            </van-cell-group>
        </div>
        <div class="btn">
            <van-button color="#684886" type="primary" block @click="onLogin">登錄</van-button>
        </div>
        <div class="other">
            <div class="free" @click="onFree">没有帳號？免費注册</div>
            <div class="forget">忘記密碼</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { login } from "@/api/Login/index"
import { Md5 } from "ts-md5"
import { useTokenStore } from "../../stores/login"
import { useRoute, useRouter } from "vue-router"
import sha256 from "crypto-js/sha256"
import sha1 from "crypto-js/sha1"
import CryptoJS from "crypto-js"

const tel = ref<string>("")
const password = ref<string>("")

const tokenStore = useTokenStore()
const router = useRouter()
const route = useRoute()

const onLogin = () => {
    tokenStore.setToken({
        tel,
        password,
        verify: Md5.hashStr("iwenwiki")
    }, () => {
        // 成功了
        route.query.redirect ? router.replace(route.query.redirect as string) : router.replace("/")
    }, (error: Object) => {
        console.log(error);
    })
}


const onFree = () => {
    router.push("/register")
}


/**
 * 测试MD5加密
 */
onMounted(() => {
    console.log(Md5.hashStr("iwenwiki"));
    const salt = 'ABC%012';
    console.log(Md5.hashStr("iwenwiki" + salt));
    console.log(Md5.hashStr(Md5.hashStr("iwenwiki" + salt)));
})

/**
 * 测试sha256加密
 */
onMounted(() => {
    console.log(sha256('iwenwiki'));
})

/**
 * 测试sha1加密
 */
onMounted(() => {
    console.log(sha1('iwenwiki'));
})

/**
 * 测试AES加密
 */

onMounted(() => {
    const key = CryptoJS.enc.Utf8.parse('iwenwiki'); // 密钥 后端提供
    const iv = CryptoJS.enc.Utf8.parse(''); // 偏移量
    /**
 * AES加密 ：字符串 key iv  返回base64
 */
    const Encrypt = (word: any) => {
        const srcs = CryptoJS.enc.Utf8.parse(word);
        const encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
    };

    /**
     * AES 解密 ：字符串 key iv  返回base64
     */
    const Decrypt = (word: any) => {
        const base64 = CryptoJS.enc.Base64.parse(word);
        const src = CryptoJS.enc.Base64.stringify(base64);

        const decrypt = CryptoJS.AES.decrypt(src, key, {
            iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return CryptoJS.enc.Utf8.stringify(decrypt);
    };
    console.log('AES加密后', Encrypt('iwenwiki'));
    console.log('AES解密后', Decrypt(Encrypt('iwenwiki')));
})


</script>
<style lang="less" scoped>
.login-container {
    .login {
        width: 100%;
        margin-top: 50px;
        text-align: center;

        img {
            widows: 150px;
        }
    }

    .info {
        margin-top: 50px;
    }

    .btn {
        padding: 20px;
    }

    .other {
        display: flex;
        padding: 20px;
        padding-top: 0;

        .free {
            flex: 1;
            text-align: left;
            font-size: 14px;
        }

        .forget {
            flex: 1;
            text-align: right;
            font-size: 14px;
        }
    }
}
</style>
