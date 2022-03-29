<template>
  <view class="my-3">
    <uni-grid
      :column="2"
      :square="false"
      :highlight="false"
      :showBorder="false"
      class="text-center"
      @change="onChange"
    >
      <uni-grid-item
        v-for="(item, index) in items"
        class="pr-1"
        :key="index"
        :index="index"
      >
        <view :class="item.color + 'rounded-xl flex flex-col justify-between'">
          <text>{{ item.value }}</text>
          <text>{{ item.label }}</text>
        </view>
      </uni-grid-item>
    </uni-grid>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "我的代理",
          value: "13",
          color: "bg-yellow-100 ",
          link: "/pages/myAgents/index",
        },
        {
          label: "我的商户",
          value: "310",
          color: "bg-red-100 ",
          link: "/pages/myMerchants/index",
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
