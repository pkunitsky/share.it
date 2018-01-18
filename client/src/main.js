import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'

import '@/assets/css/styles.css'

import Nav from '@/components/global/Nav'
import Footer from '@/components/global/Footer'

import _notify from '@/mixins/global/_notify'

import '@/plugins/vuetify'
import '@/plugins/nprogress'
import '@/plugins/vuex-router-sync'

Vue.component('Nav', Nav)
Vue.component('Footer', Footer)

Vue.mixin(_notify)

/** eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

