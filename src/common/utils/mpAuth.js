import store from "../../store";
const urlencode = require("urlencode");
const queryString = require("query-string");

export const mpAuth = () => {
  const search = queryString.parse(location.search);
  const lastCode = uni.getStorageSync(process.env.WECHAT_LAST_CODE_KEY);
  if (search.code && lastCode != search.code) {
    store
      .dispatch("auth/loginAction", { code: search.code })
      .then(() => {
        store.dispatch("loading/onAppLaunchedAction");
        location.search = "";
        uni.$appLaunched();
      })
      .catch(() => {});
  } else {
    store
      .dispatch("auth/meAction")
      .then(() => {
        store.dispatch("loading/onAppLaunchedAction");
        uni.$appLaunched();
      })
      .catch((err) => {
        console.log("err", err);
        uni.showModal({
          title: "未登录",
          content: "跳转到微信进行登录？",
          showCancel: false,
          confirmText: "点击前往",
          success: function () {
            location.href =
              process.env.WECHAT_PROXY_LOGIN_URL +
              "?url=" +
              urlencode(location.href);
          },
        });
      });
  }
};
