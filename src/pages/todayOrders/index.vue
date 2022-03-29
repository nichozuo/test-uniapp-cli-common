<template>
  <cc-view>
    <uni-list>
      <uni-list-item
        v-for="item in items"
        :title="item.title"
        :note="item.note"
        :key="item.id"
        :rightText="item.price"
        showArrow
        clickable
        :to="'/pages/orderDetail/index?id=' + item.id"
      />
    </uni-list>
  </cc-view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "20201-112-12-12",
          note: "hahahha",
          price: "￥5.00",
        },
        {
          id: 2,
          title: "20201-112-12-12",
          note: "hahahha",
          price: "￥5.00",
        },
        {
          id: 3,
          title: "20201-112-12-12",
          note: "hahahha",
          price: "￥5.00",
        },
        {
          id: 4,
          title: "20201-112-12-12",
          note: "hahahha",
          price: "￥5.00",
        },
      ],
    };
  },
  async onShow() {
    await uni.$pageAuth(0);
  },
};
</script>
