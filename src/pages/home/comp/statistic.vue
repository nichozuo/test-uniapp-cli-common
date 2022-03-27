<template>
  <view class="bg-white rounded-xl pt-3 pb-3">
    <uni-grid
      :column="3"
      :square="false"
      :highlight="false"
      :showBorder="false"
      class="text-center"
      @change="onChange"
    >
      <uni-grid-item :index="0">
        <text class="text-gray-400 text-xs">今日订单</text>
        <text class="text-yellow-500">98</text>
      </uni-grid-item>
      <uni-grid-item :index="1">
        <text class="text-gray-400 text-xs">今日营业额</text>
        <text class="text-yellow-500">￥92,374.00</text>
      </uni-grid-item>
      <uni-grid-item :index="2">
        <text class="text-gray-400 text-xs">今日预估收益</text>
        <text class="text-yellow-500">￥374.00</text>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      console.log(e);
      // uni.navigateTo({ url: url });
    },
  },
};
</script>
