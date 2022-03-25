<template>
  <view>
    <slot v-if="isResolve"></slot>
    <template v-else>
      <view class="w-full p-3">
        <text class="text-gray-400">系统正在加载中...</text>
        <u-skeleton
          rows="5"
          titleHeight="20"
          rowsHeight="20"
          class="mt-3 mb-3"
        ></u-skeleton>
      </view>
    </template>
  </view>
</template>

<script>
import { mapState } from "vuex";

export default {
  onLoad() {},
  computed: {
    ...mapState("loading", {
      count: "count",
      isResolve: "isResolve",
    }),
  },
  watch: {
    count(newV) {
      console.log("watch loading count", newV);
      if (newV == 0) {
        uni.hideLoading();
      } else {
        uni.showLoading({
          title: "加载中",
          mask: true,
        });
      }
    },
  },
};
</script>
