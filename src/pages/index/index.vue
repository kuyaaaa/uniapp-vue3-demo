<template>
    <view class="content">
        <image class="logo" src="/static/logo.png" />
        <view class="text-area">
            <text class="title">{{ title }}</text>
            <text class="scss-test">sass</text>
        </view>
        <button @click="toTest">to test</button>
    </view>
    <div></div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import useLoginStore from "@/store/modules/login";

const loginStore = useLoginStore();

const title = ref("Hello");

const { userName } = storeToRefs(loginStore);
loginStore.userName = "爷傲丶奈我何";
loginStore.$patch({
    userName: "爷傲奈我何",
    userId: 2,
});

watch(
    userName,
    val => {
        console.log(val);
    },
    { immediate: true }
);

const toTest = () => {
    uni.navigateTo({ url: "/pages/test/index" });
};
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;

    .scss-test {
        font-size: 100rpx;
        text-align: center;
        color: red;
    }
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
