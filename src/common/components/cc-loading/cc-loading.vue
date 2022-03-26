<template>
  <view></view>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("loading", {
      count: "count",
    }),
  },
  watch: {
    count(newV) {
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
