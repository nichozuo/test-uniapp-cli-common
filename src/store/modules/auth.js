const state = {
  wechat: {}, // 微信信息
  user: {}, // 用户信息
};

const getters = {
  wechat: (state) => state.wechat, // 跟api交互的access_token
  user: (state) => state.user,
};

const actions = {
  loginAction({ commit }, params) {
    return uni.$u.http
      .post("auth/code", params)
      .then((res) => {
        commit("setLogin", res.data);
        uni.setStorageSync(process.env.WECHAT_LAST_CODE_KEY, params.code);
        uni.setStorageSync(
          process.env.ACCESS_TOKEN_KEY,
          res.data.token.access_token
        );
        return Promise.resolve(res);
      })
      .catch(() => {
        return Promise.reject();
      });
  },
  meAction({ commit }) {
    return uni.$u.http
      .post("auth/me")
      .then((res) => {
        commit("setLogin", res.data);
        return Promise.resolve();
      })
      .catch(() => {
        return Promise.reject();
      });
  },
};

const mutations = {
  setLogin(state, data) {
    state.wechat = getApp().globalData.wechat = data.wechat;
    state.user = getApp().globalData.user = data.user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
