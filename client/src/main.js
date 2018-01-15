// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import nprogress from 'nprogress'

/* js */
import 'material-design-lite/material.min.js'

/* css */
import './assets/css/bootstrap-grid.min.css'
import 'material-design-lite/dist/material.blue-indigo.min.css'
import 'nprogress/nprogress.css'
import './assets/css/styles.css'

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

