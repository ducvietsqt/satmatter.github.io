import axios from "axios";

const findUser = (state, commit, userPK, resolve, reject, firstTime = false) => {
  for (let member of state.members) {
    if (member.user.pk === userPK) {
      return resolve(member.user);
    }
  }
  if (!firstTime) {
    axios
      .get(`/api/workspace/members/${userPK}/`)
      .then(resp => {
        commit("appendNewMember", resp.data);
        resolve(resp.data.user);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    reject(404); // Not found
  }
};

// initial state
const state = {
  members: null
};

const getters = {};

const actions = {
  getUser({state, commit}, userPK) {
    return new Promise((resolve, reject) => {
      if (state.members === null) {
        axios
          .get("/api/workspace/members/")
          .then(resp => {
            commit("setMembers", resp.data);
            findUser(state, commit, userPK, resolve, reject, true);
          })
          .catch(err => {
            reject(err);
          });
      } else {
        findUser(state, commit, userPK, resolve, reject);
      }
    });
  },
};

const mutations = {
  setMembers(state, members) {
    state.members = members;
    state.loaded = true;
  },
  appendNewMember(state, member) {
    state.members.push(member);
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
