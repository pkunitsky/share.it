import Vue from 'vue'
import Router from 'vue-router'
import { RouterGuard } from '@/router/guards'
import routes from '@/router/routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  routes
})

router.beforeEach(RouterGuard.beforeEach)

export default router
