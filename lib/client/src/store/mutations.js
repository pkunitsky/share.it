export default {
  messages (state, payload) {
    if (!payload) return
    state.messages = payload
  }
}
