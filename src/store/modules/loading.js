const state = {
  appLaunched: false, // app是否加载完
  pageAuthed: false, // 页面是否加载完
  count: 0, // 请求的数量
};

const getters = {};

const actions = {
  addAction({ commit }) {
    commit("addLoading");
  },
  subAction({ commit }) {
    commit("subLoading");
  },
  onAppLaunchedAction({ commit }) {
    commit("onAppLaunched");
  },
  pageAuthOKAction({ commit }) {
    commit("pageAuthOK");
  },
  pageAuthFailAction({ commit }) {
    commit("pageAuthFail");
  },
};

const mutations = {
  addLoading(state) {
    state.count = state.count + 1;
  },
  subLoading(state) {
    state.count = state.count - 1;
  },
  onAppLaunched(state) {
    state.appLaunched = true;
  },
  pageAuthOK(state) {
    state.pageAuthed = true;
  },
  pageAuthFail(state) {
    state.pageAuthed = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
