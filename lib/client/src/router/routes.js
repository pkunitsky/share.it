/* route guards */
import { AuthGuard } from '@/router/guards'

/* page components */
import AuthPage from '@/components/pages/auth-page'
import NewsPage from '@/components/pages/news-page'
import ProfilePage from '@/components/pages/profile-page'
import ChatPage from '@/components/pages/chat-page'
import TestPage from '@/components/pages/test-page'

export default [
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
    path: '/chat',
    component: ChatPage
  },
  {
    path: '/news',
    component: NewsPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage
  },
  {
    path: '*',
    redirect: '/chat'
  }
]
