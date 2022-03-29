<script>
import { mpAuth } from "./common/utils/mpAuth";

export default {
  globalData: {
    user: undefined,
    wechat: undefined,
  },
  onLaunch: async function () {
    console.log("App onLaunch:::start");
    await mpAuth();
    console.log("App Launch:::end");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss">
@import "uview-ui/index.scss";
@import "@/static/iconfont/iconfont.css";
</style>
