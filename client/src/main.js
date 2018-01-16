// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import nprogress from 'nprogress'

/* css */
import '@/assets/css/bootstrap-4.0.0-beta.3.min.css'
import 'material-design-lite/dist/material.blue-indigo.min.css'
import 'nprogress/nprogress.css'
import '@/assets/css/styles.css'

/* js */
import 'material-design-lite/material.min.js'

/* global vue components */
import Nav from '@/components/global/Nav'
import Footer from '@/components/global/Footer'
import Loading from '@/components/global/Loading'
import Notification from '@/components/global/Notification'

/* register global vue components */
Vue.component('Nav', Nav)
Vue.component('Loading', Loading)
Vue.component('Footer', Footer)
Vue.component('Notification', Notification)

/* configurations */
Vue.config.productionTip = false
nprogress.configure({ showSpinner: false })

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

