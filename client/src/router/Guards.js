import TokenChecker from '@/utils/TokenChecker'
import nprogress from 'nprogress'
import store from '@/store'

const AuthGuard = {
  beforeEnter (to, from, next) {
    if (store.state.token) {
      next({ path: '/' })
      return
    }
    
    next()
  },

  logout: {
    beforeEnter (to, from, next) {
      store.commit('setToken', null)
    }
  }
}

const RouterGuard = {
  beforeEach (to, from, next) {
    const { token } = store.state
    if (!token) {
      (to.path === '/auth')
        ? next()
        : next({ path: '/auth' })
      return
    }
  
    nprogress.start()
    TokenChecker
      .check(token)
      .then(valid => {
        if (!valid) store.commit('setToken', null)
        nprogress.done()
        next()
      })
  }
}

export {
  AuthGuard,
  RouterGuard
}
