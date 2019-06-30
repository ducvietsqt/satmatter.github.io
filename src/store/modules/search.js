const state = {
  querySearch: ''
};
const getters = {
  query: state => state.querySearch
};
const actions = {};
const mutations = {
  setQuerySearch(state, query) {
    state.querySearch = query;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
