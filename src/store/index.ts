import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    counter: 0,
    user :{
      loggedIn: false,
      data: null
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value
    },
    SET_USER(state, data) {
      state.user.data = data
      state.user.loggedIn = data !== null
    },
    decreaseCounter(state) {
      state.counter--
    },
    increaseCounter(state){
      state.counter++
    }
  },
  actions: {

  },
  getters: {
    user(state) {
      return state.user
    },
    userLoggedIn(state) {
      return state.user.loggedIn
    },
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  modules: {

  },
  plugins: [createPersistedState()]
})

export { store }