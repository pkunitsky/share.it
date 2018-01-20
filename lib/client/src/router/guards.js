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
    if (process.env.NODE_ENV === 'development') {
      console.log('checker disabled for a while for client development')
      next()
      return
    }
    /** let pass for test route */
    if (to.name === 'test') next()

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
