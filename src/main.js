import Vue from "vue";
import App from "./App";

// store
import store from "./store/index.js";
// add tailwind
import "tailwindcss/tailwind.css";
// add uviewui
import uView from "uview-ui";
Vue.use(uView);
uni.$u.config.unit = "rpx";
// add http
import http from "./common/utils/http";
Vue.prototype.$http = http;
// onLaunch阻塞
Vue.prototype.$onLaunched = new Promise((resolve) => {
  Vue.prototype.$isResolve = resolve;
});

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  store,
  ...App,
});
app.$mount();
