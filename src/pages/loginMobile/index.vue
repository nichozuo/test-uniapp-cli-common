<template>
  <cc-view>
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
    // 阻塞
    await uni.$onAppLaunched;
    await uni.$pageAuth(0);
    console.log("index.vue onShow");
  },
};
</script>
