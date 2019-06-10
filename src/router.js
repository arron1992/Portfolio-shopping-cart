import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path : '*',
      redirect : '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/LoginPage.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('./views/ProductList.vue')
    }
  ]
})
