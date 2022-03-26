<template>
  <cc-view :pageStatus="pageStatus">
    <text class="text-red-500 text-6xl">Hello world</text>
    <button @click="onClick">Login Mobile Page</button>
  </cc-view>
</template>

<script>
import pageMixin from "@/mixins/pageMixin";
export default {
  mixins: [pageMixin],
  methods: {
    onClick() {
      this.$http.post("auth/test", { id: 1 }).then(() => {
        uni.navigateTo({ url: "/pages/index" });
      });
    },
  },
  async onShow() {
    await this.checkGuard(0);
    console.log("loginMobile/index:::onShow");
  },
};
</script>
