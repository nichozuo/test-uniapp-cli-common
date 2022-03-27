<template>
  <cc-view :pageStatus="pageStatus">
    <view class="flex flex-col p-4 min-h-full w-full header-wrapper">
      <avatar />
      <statistic />
      <achievement />
      <icons />
    </view>
  </cc-view>
</template>

<script>
import pageMixin from "@/mixins/pageMixin";
import avatar from "./comp/avatar.vue";
import statistic from "./comp/statistic";
import achievement from "./comp/achievement";
import icons from "./comp/icons";
export default {
  mixins: [pageMixin],
  components: { avatar, statistic, achievement, icons },
  data() {
    return {};
  },
  async onShow() {
    // 阻塞 & 页面鉴权
    await this.checkGuard(0);
    // 写业务
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
