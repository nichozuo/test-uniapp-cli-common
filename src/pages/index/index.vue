<template>
  <cc-view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="text-4xl">{{ title }}</text>
      <button type="warn">uni-app内置组件</button>
      <u-button type="primary" text="uview组件"></u-button>
      <uni-card title="uni-ui卡片"> </uni-card>
    </view>
  </cc-view>
</template>

<script>
export default {
  data() {
    return {
      title: "tailwindcss",
    };
  },
  onLoad() {},
  methods: {},
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
