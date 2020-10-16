import Vue from 'vue'
import Vuex from 'vuex'
import account from './accounts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    account: account
  },
  state: {
    key: 1
  }
})
