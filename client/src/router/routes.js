/* route guards */
import { AuthGuard } from '@/router/guards'

/* page components */
import AuthPage from '@/components/pages/AuthPage'
import HomePage from '@/components/pages/HomePage'
import TestPage from '@/components/pages/TestPage'

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
