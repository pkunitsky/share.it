import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import auth from '@/pages/auth'
import home from '@/pages/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: home,
      beforeEnter: (to, from, next) => {
        const { token } = store.state
        if (!token) {
          // if no token redirect to auth page
          next({
            path: '/auth'
          })
        }
        next()
      }
    },
    {
      path: '/auth',
      component: auth
    },
    {
      path: '/logout',
      beforeEnter: (to, from, next) => {
        
      }
    }
  ]
})
