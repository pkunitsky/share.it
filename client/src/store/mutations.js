export default {
  setToken (state, payload) {
    if (!payload) {
      state.user = null
      state.token = null
    }

    state.token = payload
  },
  setUser: (state, payload) => state.user = payload
}
