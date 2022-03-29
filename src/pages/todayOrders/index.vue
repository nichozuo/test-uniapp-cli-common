<template>
  <view :id="$u.guid()" :class="elClass"> 《《》》</view>
</template>

<script>
export default {
  data() {
    return {
      elClass: uni.$u.guid(20),
    };
  },
  async onShow() {
    // 阻塞
    await uni.$pageAuth(0);
    console.log("index.vue onShow");
  },
};
</script>
