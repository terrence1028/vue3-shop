<template>
    <PersonDetailsHeader title="人才详情" />
    <div class="details">
        <div class="left">
            <img :src="personDetails?.image" alt="">
        </div>
        <div class="right">
            <p class="name">{{ personDetails?.name }}</p>
            <p class="info">{{ personDetails?.sex }} <span>|</span>{{ personDetails?.age }}<span>|</span>
            {{personDetails?.birthday }}<span>|</span>{{ personDetails?.education }} </p>
            <p class="work">工作經驗：{{ personDetails?.age }}</p>
            <span class="price">{{ personDetails?.price }}元/月</span>
        </div>
    </div>
    <div class="introduce">
        <h3>个人介绍</h3>
        <p>{{ personDetails?.descs }}</p>
    </div>
    <div class="btn-content">
        <div class="btn">立即聯絡</div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useRoute } from "vue-router"
import PersonDetailsHeader from "../../components/PubHeader.vue"
import { getPersonDetails } from "../../api/Person/index"

const route = useRoute()

interface IPersonDetails {
    id: number,
    image: string,
    name: string,
    age: string,
    price: string,
    descs: string,
    sex: string,
    birthday: string,
    education: string
}

const personDetails = ref<IPersonDetails>()

onMounted(async () => {
    const res = await getPersonDetails({ id: route.params.id })
    if (res.data.status === 200) {
        personDetails.value = res.data.data
    }
})

</script>
<style lang="less" scoped>
.details {
    background-color: #fff;
    display: flex;
    padding: 10px;
    box-sizing: border-box;

    .left {
        img {
            width: 100px;
            border-radius: 5px;
        }
    }

    .right {
        padding: 10px;
        line-height: 30px;

        .name {
            font-size: 15px;
            font-weight: 700;
        }

        .info {
            font-size: 14px;
            color: #999;

            span {
                padding: 0 5px;
            }
        }

        .work {
            font-size: 14px;
            color: #999;
        }

        .price {
            font-size: 14px;
            color: #ff4444;
        }
    }
}

.introduce {
    background-color: #fff;
    margin-top: 10px;
    padding: 10px;

    h3 {
        font-size: 16px;
        padding: 10px 0;
    }

    p {
        font-size: 14px;
        color: #999;
        letter-spacing: 1.5px;
    }
}

.btn-content {
    width: 100%;
    text-align: center;
    margin: 30px 0;

    .btn {
        width: 90%;
        height: 40px;
        line-height: 40px;
        border-radius: 5px;
        background-color: #684886;
        color: #fff;
        margin: 0 auto;
    }
}
</style>