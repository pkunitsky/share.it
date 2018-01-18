/* route guards */
import { AuthGuard } from '@/router/guards'

/* page components */
import AuthPage from '@/components/pages/auth-page'
import HomePage from '@/components/pages/home-page'
import TestPage from '@/components/pages/test-page'

export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/auth',
    component: AuthPage,
    beforeEnter: AuthGuard.beforeEnter,
    children: [
      {
        path: 'logout',
        name: 'logout',
        beforeEnter: AuthGuard.logout.beforeEnter
      }
    ]
  },
  {
    path: '/test',
    component: TestPage
  },
  {
    path: '*',
    redirect: '/'
  }
]
