// 官方套件
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
import store from './store'; 

// 自訂元件
import App from './App.vue';
import currencyFilter from './filiters/currency';
import timestampFilter from './filiters/timestamp';

// 啟用套件 & 元件 & Filters
Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.component('Loading',Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('timestamp', timestampFilter);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);

// 修正跨域登入
axios.defaults.withCredentials = true;

// '檢查用戶是否仍持續登入' => 驗證登入成功後即切換網址
router.beforeEach((to, from, next) => {
  console.log(to)
  if(to.meta.requiresAuth){
      const api =`${process.env.VUE_APP_APIPATH}/api/user/check`;
      axios.post(api).then((res) =>{
        // console.log(res);
        if(res.data.success){
          next();
        } else{
          next({path:'/login'})
        }
    })
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
