<template>
  <view class="flex flex-row">
    <u-avatar :src="wechat.avatar" size="50" />
    <view class="flex flex-col pl-3">
      <view>
        <text>{{ wechat.nickname }}</text>
        <text>186****1234</text>
      </view>
      <view>
        <uni-icons custom-prefix="iconfont" type="icon-xihuan" size="20" />
        <text> 金牌代理 </text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      user: getApp().globalData.user,
      wechat: getApp().globalData.wechat,
    };
  },
};
</script>

<style scoped></style>
