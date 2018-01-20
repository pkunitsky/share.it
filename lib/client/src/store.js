import Vue from 'vue'
import Vuex from 'vuex'

import store from '@/app/_global/store'
import authModule from '@/app/auth/store'
import chatModule from '@/app/chat/store'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  ...store,
  modules: {
    auth: {
      namespaced: true,
      ...authModule
    },
    chat: {
      namespaced: true,
      ...chatModule
    }
  },

  plugins: [createPersistedState()]
})
