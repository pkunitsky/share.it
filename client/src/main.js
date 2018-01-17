import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'

/** styles.css */
import '@/assets/css/styles.css'

/** import global vue components */
import Nav from '@/components/global/Nav'
import Footer from '@/components/global/Footer'

/** register global vue components */
Vue.component('Nav', Nav)
Vue.component('Footer', Footer)

/** vue plugins */
import '@/plugins/vuetify'
import '@/plugins/nprogress'
import '@/plugins/vue-notifications'
import '@/plugins/vuex-router-sync'

/** eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

