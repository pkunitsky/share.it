export default {
  setToken (state, payload) {
    if (!payload) {
      state.user = null
      state.token = null
      state.messages = []
      return
    }

    state.token = payload
  },

  setUser: (state, payload) => state.user = payload,

  pushMessage: (state, payload) => state.messages.push(payload)
}
