<template>
  <view class="bg-gray-50 w-full min-h-screen">
    <cc-loading />
    <template v-if="appLaunched && pageAuthed == 0">
      <view></view>
    </template>
    <template v-else-if="appLaunched && pageAuthed">
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
  computed: {
    ...mapState("loading", {
      appLaunched: "appLaunched",
      pageAuthed: "pageAuthed",
    }),
  },
};
</script>
