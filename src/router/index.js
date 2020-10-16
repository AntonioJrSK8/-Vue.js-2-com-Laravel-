import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Lista from '@/components/contas/list'
import ViewConta from '@/components/contas/view'
import ViewContaEdit from '@/components/contas/edit'
import ViewContaInsert from '@/components/contas/create'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Menu', component: Menu },
    { path: '/contas', component: Lista },
    { path: '/contas/nova', component: ViewContaInsert },
    { path: '/contas/:id', component: ViewConta },
    { path: '/contas/:id/edit', component: ViewContaEdit }
  ]
})
