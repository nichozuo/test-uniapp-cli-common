<template>
  <cc-view :pageStatus="pageStatus">
    <text>需要授权过手机号才能访问的 </text>
  </cc-view>
</template>

<script>
import pageMixin from "@/mixins/pageMixin";

export default {
  mixins: [pageMixin],
  data() {
    return {};
  },
  async onShow() {
    // 阻塞 & 页面鉴权
    await this.checkGuard(1);
    // 写业务
  },
};
</script>
