<template>
  <view class="bg-white rounded-xl p-3">
    <text>常用功能</text>
    <u-grid
      :border="false"
      @click="click"
      col="4"
      class="text-center text-gray-800 text-xs mt-4 text-gray-600"
    >
      <u-grid-item
        v-for="(baseListItem, baseListIndex) in baseList"
        :key="baseListIndex"
        class="mb-4"
      >
        <u-icon :name="baseListItem.name" :size="22" />
        <text>{{ baseListItem.title }}</text>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script>
export default {
  data() {
    return {
      baseList: [
        {
          name: "photo",
          title: "购买机器",
        },
        {
          name: "lock",
          title: "购买彩票",
        },
        {
          name: "star",
          title: "发展代理",
        },
        {
          name: "photo",
          title: "发展商户",
        },
        {
          name: "lock",
          title: "佣金查询",
        },
        {
          name: "star",
          title: "相关协议",
        },
        {
          name: "photo",
          title: "我的设置",
        },
      ],
    };
  },
  methods: {
    click(name) {
      this.$refs.uToast.success(`点击了第${name}个`);
    },
  },
};
</script>
