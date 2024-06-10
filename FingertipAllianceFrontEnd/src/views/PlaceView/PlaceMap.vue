<template>
 <Mapheader title="地圖位置"/>
<!-- 地圖 -->    
<GoogleMap  
		api-key="AIzaSyDI-HqLoKuSR3HIm-_UiqdVxl5_fSEyeyw"  
		style="width: 100%; height: 500px"  
        :center="{lng:116.337474, lat:40.084816}"
		:zoom="19"  
        @ready="ready">  
	</GoogleMap>
</template>
<script setup lang="ts">
import { ref , reactive } from "vue"
import Mapheader from "../../components/PubHeader.vue"
import { GoogleMap } from "vue3-google-map";

const ready = ({GMap,Map}:any)=>{
    console.log(GMap,Map);
    
}

</script>
<style lang="less" scoped>

</style>
