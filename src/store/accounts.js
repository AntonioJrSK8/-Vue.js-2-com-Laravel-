import Vue from 'vue'

export default {
  state: {
    accountList: []
  },
  mutations: {
    /* mutations faz alterações nos stats */
    updateAccountList (state, data) {
      state.accountList.push(data)
    }
  },
  actions: {
    getAccountList (context) {
      Vue.http.get('api/accounts').then(response => {
        context.commit('updateAccountList', response.data)
      })
    }
  }
}
