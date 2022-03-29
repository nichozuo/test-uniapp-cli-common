<template>
  <cc-view> </cc-view>
</template>

<script>
export default {
  data() {
    return {};
  },
  async onShow() {
    await uni.$pageAuth(0);
  },
};
</script>
