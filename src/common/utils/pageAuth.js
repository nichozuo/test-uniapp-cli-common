import store from "../../store";

const pageAuth = async (type) => {
  await uni.$onAppLaunched;

  const user = getApp().globalData.user;

  switch (type) {
    case 1: // 判断 store的user
      if (!user) {
        await store.dispatch("loading/pageAuthFailAction");
        uni.showModal({
          title: "验证手机号",
          content: "跳转进行手机验证",
          showCancel: false,
          confirmText: "点击前往",
          success: function () {
            uni.navigateTo({ url: "/pages/loginMobile/index" });
          },
        });
      } else {
        await store.dispatch("loading/pageAuthOKAction");
      }
      break;
    case 2: // 判断 store里的 shop信息
      break;
    case 0: // 判断 store里的wechat
    default:
      await store.dispatch("loading/pageAuthOKAction");
      console.log("通过");
      break;
  }
};

uni.$pageAuth = pageAuth;
