export default {
  setUser(state, data) {
    state.user.data = data
    state.user.loggedIn = data !== null
    state.user.uid = data.uid
  },

};