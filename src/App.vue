<script>
const urlencode = require("urlencode");
const queryString = require("query-string");

export default {
  onLaunch: function () {
    const search = queryString.parse(location.search);
    const lastCode = uni.getStorageSync(process.env.WECHAT_LAST_CODE_KEY);
    const that = this;
    console.log("search.code", search.code, "lastCode", lastCode);
    if (search.code && lastCode != search.code) {
      this.$store
        .dispatch("auth/loginAction", { code: search.code })
        .then(() => {
          console.log("dispath:::then");
          that.$store.dispatch("loading/onLaunchFinishAction");
          that.$isResolve();
          location.search = "";
        })
        .catch(() => {
          console.log("dispath:::catch");
        });
    } else {
      const that = this;
      this.$store
        .dispatch("auth/meAction")
        .then(() => {
          that.$store.dispatch("loading/onLaunchFinishAction");
          that.$isResolve();
        })
        .catch(() => {
          uni.showModal({
            title: "未登录",
            content: "跳转到微信进行登录？",
            showCancel: false,
            confirmText: "点击前往",
            success: function (res) {
              location.href =
                process.env.WECHAT_PROXY_LOGIN_URL +
                "?url=" +
                urlencode(location.href);
            },
          });
        });
      console.log("App Launch");
    }
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
  methods: {
    test() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ id: 1 });
        }, 1000);
      });
    },
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
</style>
