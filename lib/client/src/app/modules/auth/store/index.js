export default {
  state: {
    authorized: false,
    token: null,
    user: null
  },
  mutations: {
    test_authorize: (state) => state.authorized = true,
    
    login (state, payload) {
      const {user, token} = payload
      const {fullname} = user
  
      if (!user || !token || !fullname) return
  
      const [firstname, lastname] = fullname.split(' ')
      state.user = {
        firstname,
        lastname,
        ...user
      }
      state.token = token
      state.authorized = true
    },
  
    logout (state) {
      state.user = null
      state.token = null
      state.messages = []
      state.authorized = false
      window.localStorage.removeItem('vuex')
    }
  }
}
