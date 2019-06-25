import Cookies from 'js-cookie';

// initial state
// shape: [{ id, quantity }]
const state = {
  dark: !!Cookies.getJSON('theme'),
  rightType: ""
}

// getters
const getters = {
  dark: state => state.dark,
  rightType: state => state.rightType
}

// mutations
const mutations = {
  switchTheme(state, darkValue) {
    state.dark = !!darkValue;
    Cookies.set('theme', darkValue ? 1 : 0);
  },
  openRight(state, type) {
    state.rightType = state.rightType === type ? null : type;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}