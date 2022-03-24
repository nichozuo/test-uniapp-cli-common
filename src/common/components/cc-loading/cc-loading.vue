<template>
  <view class="my-loading" v-if="false">
    <view class="bord" v-show="count > 0">
      <icon type="loading" size="26" />
      <text class="text">加载中...</text>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "my-loading",
  computed: {
    ...mapState("loading", {
      count: "count",
    }),
  },
  watch: {
    count(newV, oldV) {
      console.log("watch", newV, oldV);
    },
  },
};
</script>

<style lang="scss">
.my-loading {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color: #000000, $alpha: 0);
  .bord {
    background-color: rgba($color: #000000, $alpha: 0.6);
    width: 220rpx;
    height: 220rpx;
    border-radius: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img {
      width: 80%;
      height: 80%;
      padding-top: 20rpx;
    }
    .text {
      color: rgba($color: #ffffff, $alpha: 0.8);
      padding-bottom: 20rpx;
    }
  }
}
</style>
