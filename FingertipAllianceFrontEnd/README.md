# FingertipAllianceFrontEnd 

## 項目技術
Vue3 + Vite + TypeScript + ...

## 兩個端
1.FingertopAllianceFrontEnd:前端
2.FingertopAllianceServer:後端(Node + Express ＋ MySQL,目的是提供數據)

## 項目環境搭建
- 工具鏈：npm create vue@latest
-安裝依賴
    -axios
    -less less-loader
    -vant


### vant UI組件庫按需加載
-安裝依賴：`npm i @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import -D`

-修改`vite.config.ts`文件：import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/rspack';
import Components from 'unplugin-vue-components/rspack';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


## vue2 + vue3 模板
設置 - 用户設置 -搜索vue.json 修改
```
{
    "vue3":{
        "prefix": "vue3",
        "body": [
            "<template>",
            " <div class=\"\">",
            "",
            "</div>",
            "</template>",
            "<script setup lang=\"ts\">",
            "import { ref , reactive } from \"vue\"",
            "",
            "/script",
            "style lang=\"less\" scoped>",
            "",
            "</style>",
            ""
        ],
        "description": "快速創建模板"
    }
}

## 本地存储持久化
1. 安装依赖：npm install --save pinia-plugin-persist
2. 使用依赖

## 跨域问题
1. 跨域产生的原因：JS不允许同源策略：端口、域名、协议不同，都会引起跨域
2. 解决方案
	- 后端：cors
	- 前端：proxy代理  参考vite.config.ts文件
3. 开发环境与生产环境
	- 后端解决可以用于生产环境
	- 前端解决，只能用于开发环境，如果是生产环境，还需要额外处理


## 关于token
参考网址：https://ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html


## 支付宝支付：
大家需要在手机上安装一个支付宝沙箱