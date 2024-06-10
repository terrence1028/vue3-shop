<template>
   <RouterView></RouterView>
   <TopBar/>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"
import TopBar from "@/components/TopBar.vue"
</script>
<style lang="less" scoped></style>
