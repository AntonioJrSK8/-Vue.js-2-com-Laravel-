<template>
   <div class="row">
    <div class="content-header">
      <h1>Contas bancárias <small>Gerenciamento de contas</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <span>Suas contas</span>
        </small>
      </div>
    </div>

    <div class="card col s12">
      Contas: {{ accounts }}
      <div class="card-content">
        <table class="highlight">
          <thead>
            <tr>
              <th>contas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="valign-wrapper">
                <tr @click="goto(1)" class="link">
                  <small>agência:  / conta:   / código do banco: </small>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a href="#/contas/nova">Nova conta</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',

  methods: {
    goto: function (id) {
      this.$router.push('/contas/' + id)
    }
  },

  computed: {
    accounts () {
      return this.$store.state.account.accountList
    }
  },

  created () {
    this.$store.dispatch('getAccountList')
  }
}
</script>
<style scoped>
.link {
  cursor: pointer;
}
</style>
