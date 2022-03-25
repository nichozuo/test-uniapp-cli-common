const state = {
  isResolve: false,
  count: 0,
};

const getters = {};

const actions = {
  addLoadingAction({ commit }) {
    commit("addLoading");
  },
  subLoadingAction({ commit }) {
    commit("subLoading");
  },
  onLaunchFinishAction({ commit }) {
    commit("onLaunchFinish");
  },
};

const mutations = {
  addLoading(state) {
    state.count = state.count + 1;
  },
  subLoading(state) {
    state.count = state.count - 1;
  },
  onLaunchFinish(state) {
    state.isResolve = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
