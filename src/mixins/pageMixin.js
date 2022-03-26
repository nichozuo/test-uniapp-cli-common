export default {
  data() {
    return {
      pageStatus: 0,
    };
  },
  methods: {
    async checkGuard(type) {
      this.pageStatus = 0;
      await this.$onLaunched;
      switch (type) {
        case 1: // 判断 store的user
          console.log("需要验证手机号");
          uni.showModal({
            title: "验证手机号",
            content: "跳转进行手机验证",
            showCancel: false,
            confirmText: "点击前往",
            success: function () {
              uni.navigateTo({ url: "/pages/loginMobile/index" });
            },
          });
          break;
        case 2: // 判断 store里的 shop信息
          break;
        case 0: // 不判断，判断 store里的wechat
        default:
          this.pageStatus = 1;
          console.log("通过");
          break;
      }
    },
  },
};
