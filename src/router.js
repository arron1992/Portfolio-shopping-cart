import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path : '*',
      redirect : '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/LoginPage.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('./views/ProductPage.vue'),
      children:[
        {
          path: 'products',
          name: 'porducts',
          component: () => import('./components/frontEnd/Products.vue')
        },
        {
          path: 'porduct/:itemId',
          name: 'porduct',
          component: () => import('./components/frontEnd/Product.vue')
        }
      ]
    },
    {
      path: '/checkout',
      name: '',
      component: () => import('./views/CheckOutPage.vue'),
      children:[
        {
          path: '',
          name: 'client-info',
          component: () => import('./components/frontEnd/Client-info.vue')
        },
        {
          path: 'order/:orderId',
          name: 'client-order',
          component: () => import('./components/frontEnd/Client-order.vue')
        },
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/AdminPage.vue'),
      meta: { requiresAuth: true },
      children:[
        {
          path: 'products',
          name: 'admin-products',
          component: () => import('./components/backEnd/Admin-products'),
          meta: { requiresAuth: true }, 
        },
        {
          path: 'coupons',
          name: 'admin-coupons',
          component: () => import('./components/backEnd/Admin-coupons'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('./components/backEnd/Admin-orders'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
