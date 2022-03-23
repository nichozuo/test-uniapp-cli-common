import Vue from "vue";
import App from "./App";

// add tailwind
import "tailwindcss/tailwind.css";
// add uviewui
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false;

App.mpType = "app";

const app = new Vue({
  ...App,
});
app.$mount();
