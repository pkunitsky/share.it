import Vue from 'vue'
import Vuex from 'vuex'

import ChatStoreModule from '@/store/chat-store-module'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins: [createPersistedState()],
  modules: [ChatStoreModule]
})
