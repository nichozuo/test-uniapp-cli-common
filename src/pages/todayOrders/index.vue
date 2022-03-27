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
  onLoad() {
    console.log(uni.$u.color);
  },
};
</script>
