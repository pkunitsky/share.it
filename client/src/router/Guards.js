import store from '@/store'
import TokenChecker from '@/utils/TokenChecker'
import nprogress from 'nprogress'

const RouterGuard = {
  beforeEach (to, from, next) {
    const { token } = store.state
    
    if (!token) {
      next({ path: '/auth' })
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

const AuthGuard = {
  beforeEnter (to, from, next) {
    const { token } = store.state
    if (token) {
      next({ path: '/' })
      return
    }
    next()
  },
  logout: {
    beforeEnter (to, from, next) {
      store.commit('setToken', null)
      next()
    }
  }
}

export {
  RouterGuard,
  AuthGuard
}
