import { getAuth } from 'firebase/auth';
const auth = getAuth()

const state = {
  currentUser: null,
};

const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
};

const actions = {
  async fetchCurrentUser({ commit }) {
    auth.onAuthStateChanged((user) => {
      commit('setCurrentUser', user);
    });
  },
};

const getters = {
  currentUser: (state) => state.currentUser,
};

export default {
  state,
  mutations,
  actions,
  getters,
};