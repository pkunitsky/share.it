import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'

import '@/assets/css/styles.css'

/** vue plugins */
import '@/plugins/vuetify'
import '@/plugins/nprogress'
import '@/plugins/vuex-router-sync'

/** global vue components */
import Nav from '@/app/_global/components/Nav'
import Footer from '@/app/_global/components/Footer'

Vue.component('Nav', Nav)
Vue.component('Footer', Footer)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
