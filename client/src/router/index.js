import Vue from 'vue'
import Router from 'vue-router'

/* page components */
import AuthPage from '@/components/pages/AuthPage'
import HomePage from '@/components/pages/HomePage'
import TestPage from '@/components/pages/TestPage'

/* route guards */
import { RouterGuard, AuthGuard } from './Guards'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      exact: true,
      component: HomePage
    },
    {
      path: '/auth',
      component: AuthPage,
      beforeEnter: AuthGuard.beforeEnter,
      children: [
        {
          path: 'logout',
          beforeEnter: AuthGuard.logout.beforeEnter
        }
      ]
    },
    {
      path: '/test',
      component: TestPage
    }
  ]
})

router.beforeEach(RouterGuard.beforeEach)

export default router
