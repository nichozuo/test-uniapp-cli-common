<template>
  <cc-view class="content">
    <button @click="onClick">Login Page</button>
  </cc-view>
</template>

<script>
export default {
  methods: {
    onClick() {
      uni.navigateTo({ url: "/pages/index" });
    },
  },
};
</script>
