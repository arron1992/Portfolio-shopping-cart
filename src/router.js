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
      component: () => import('./views/ProductList.vue'),
      children:[
        {
          path: 'products',
          name: 'porducts',
          component: () => import('./components/storeProducts.vue')
        },
        {
          path: 'porduct/:itemId',
          name: 'porduct',
          component: () => import('./components/getSingleProduct.vue')
        }
      ]
    }
  ]
})
