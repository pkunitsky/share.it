import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'

import '@/assets/css/styles.css'

import Nav from '@/components/global/Nav'
import Footer from '@/components/global/Footer'

import '@/plugins/vuetify'
import '@/plugins/nprogress'
import '@/plugins/vuex-router-sync'

Vue.component('Nav', Nav)
Vue.component('Footer', Footer)

/** eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

