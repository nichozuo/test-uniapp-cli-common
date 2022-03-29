<template>
  <cc-view>
    <view class="flex flex-col p-4 min-h-full w-full header-wrapper">
      <avatar />
      <statistic />
      <achievement />
      <icons />
    </view>
  </cc-view>
</template>

<script>
import avatar from "./comp/avatar.vue";
import statistic from "./comp/statistic";
import achievement from "./comp/achievement";
import icons from "./comp/icons";
export default {
  components: { avatar, statistic, achievement, icons },
  data() {
    return {};
  },
  async onShow() {
    // 阻塞
    await uni.$pageAuth(0);
    console.log("index.vue onShow");
  },
};
</script>

<style>
.header-wrapper {
  background-image: url(/static/imgs/home-top-bg.png);
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
