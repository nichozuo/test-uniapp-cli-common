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

// // setup uni.$u.http
import "./common/utils/http";
import "./common/utils/pageAuth";

// onLaunch阻塞
uni.$onAppLaunched = new Promise((resolve) => {
  uni.$appLaunched = resolve;
});

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  store,
  ...App,
});
app.$mount();
