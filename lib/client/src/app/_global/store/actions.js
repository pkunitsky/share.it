export default {
  login (that, payload) {
    const {user, token} = payload
    const {fullname} = user

    if (!user || !token || !fullname) return

    const [firstname, lastname] = fullname.split(' ')
    that.state.user = {
      firstname,
      lastname,
      ...user
    }
    that.state.token = token
  },

  logout (that) {
    that.state.user = null
    that.state.token = null
    that.state.messages = []
    window.localStorage.removeItem('vuex')
  }
}
