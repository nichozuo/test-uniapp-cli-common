const state = {
  count: 1,
};

const getters = {};

const actions = {
  addLoadingAction({ commit }) {
    commit("addLoading");
  },
  subLoadingAction({ commit }) {
    commit("subLoading");
  },
};

const mutations = {
  addLoading(state) {
    state.count = state.count + 1;
  },
  subLoading(state) {
    state.count = state.count - 1;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
