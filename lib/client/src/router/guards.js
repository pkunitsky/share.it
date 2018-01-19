import tokenChecker from '@/utils/token-checker'
import nprogress from '@/../modules/nprogress'
import store from '@/store'

const AuthGuard = {
  beforeEnter (to, from, next) {
    if (to.name === 'logout') next()
    
    const { token } = store.state
    if (token) {
      next({ path: '/' })
      return
    }
    
    next()
  },

  logout: {
    beforeEnter (to, from, next) {
      store.dispatch('logout')
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
    tokenChecker
      .check(token)
      .then(valid => {
        if (!valid) {
          store.dispatch('logout')
        }
        nprogress.done()
        next()
      })
  }
}

export {
  AuthGuard,
  RouterGuard
}
