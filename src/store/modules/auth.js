import { http } from "../../common/utils/http.js";

const state = {
  user: {},
  permissions: {},
};

const getters = {
  user: (state) => state.user,
  permissions: (state) => state.permissions,
};

const actions = {
  loginAction({ commit }, params) {
    http.post("auth/login", params).then((res) => {
      commit("setLogin", res.data.user);
      commit("setMenu", res.data.permissions);
      uni.setStorageSync("TOKEN", res.data.token.access_token);
      uni.switchTab({
        url: "/pages/work/index",
      });
    });
  },
  meAction({ commit }) {
    http.post("auth/me").then((res) => {
      commit("setLogin", res.data.user);
      commit("setMenu", res.data.permissions);
      uni.switchTab({
        url: "/pages/work/index",
      });
    });
  },
};

const mutations = {
  setLogin(state, user) {
    state.user = user;
  },
  setMenu(state, menu) {
    state.permissions = menu;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
