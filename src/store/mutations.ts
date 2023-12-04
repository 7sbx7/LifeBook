export default {
  setUser(state, data) {
    if (data) {
      state.user.data = data;
      state.user.loggedIn = true;
      state.user.uid = data.uid;
    } else {
      state.user.data = null;
      state.user.loggedIn = false;
      state.user.uid = null;
    }
  }
};