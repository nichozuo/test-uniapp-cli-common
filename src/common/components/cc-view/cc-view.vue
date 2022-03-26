<template>
  <view>
    <cc-loading />
    <template v-if="isResolve && pageStatus == 0">
      <view></view>
    </template>
    <template v-else-if="isResolve && pageStatus">
      <slot />
    </template>
    <template v-else>
      <cc-skeleton />
    </template>
  </view>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["pageStatus"],
  computed: {
    ...mapState("loading", {
      isResolve: "isResolve",
    }),
  },
};
</script>
