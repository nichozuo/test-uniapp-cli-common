<template>
  <cc-view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="text-4xl">{{ title }}</text>
      <button type="warn">uni-app内置组件</button>
      <u-button type="primary" text="uview组件" @click="onClick"></u-button>
      <uni-card title="uni-ui卡片">{{ test }} </uni-card>
    </view>
  </cc-view>
</template>

<script>
const config = require("../../config/config");
export default {
  data() {
    return {
      title: "tailwindcss",
      test: process.env.HTTP_BASE_URL,
    };
  },
  onLoad() {
    console.log(process.env, process.env.HTTP_BASE_URL);
  },
  methods: {
    onClick() {
      uni.navigateTo({ url: "/pages/login" });
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
