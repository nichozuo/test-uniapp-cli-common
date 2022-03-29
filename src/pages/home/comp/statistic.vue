<template>
  <view class="bg-white rounded-xl pt-4 pb-4">
    <uni-grid
      :column="3"
      :square="false"
      :highlight="false"
      :showBorder="false"
      class="text-center"
      @change="onChange"
    >
      <uni-grid-item v-for="(item, index) in items" :key="index" :index="index">
        <text class="text-gray-400 text-xs mb-1">{{ item.label }}</text>
        <text class="text-yellow-500">{{ item.value }}</text>
      </uni-grid-item>
      <!-- <uni-grid-item :index="1">
        <text class="text-gray-400 text-xs mb-1">今日营业额</text>
        <text class="text-yellow-500">￥92,374.00</text>
      </uni-grid-item>
      <uni-grid-item :index="2">
        <text class="text-gray-400 text-xs mb-1">今日预估收益</text>
        <text class="text-yellow-500">￥374.00</text>
      </uni-grid-item> -->
    </uni-grid>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "今日订单",
          value: "98",
          link: "/pages/todayOrders/index",
        },
        {
          label: "今日营业额",
          value: "￥92,374.00",
          link: "/pages/todayOrders/index",
        },
        {
          label: "今日预估收益",
          value: "￥374.00",
          link: "/pages/todayOrders/index",
        },
      ],
    };
  },
  methods: {
    onChange(e) {
      const item = this.items[e.detail.index];
      console.log("item", item, item.link);
      uni.$u.route({
        url: item.link,
      });
    },
  },
};
</script>
