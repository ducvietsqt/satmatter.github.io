const state = {
  rightType: "",
  search: false
}

// getters
const getters = {
  rightType: state => state.rightType
};
// actions
const actions = {

};
// mutations
const mutations = {
  openRight(state, type) {
    state.rightType = state.rightType === type ? null : type;
  },

};



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
