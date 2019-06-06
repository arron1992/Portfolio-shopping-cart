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

// 啟用套件 & 元件
Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.component('Loading',Loading);
Vue.use(VeeValidate);
VeeValidate.Validator.localize('zh_TW', zhTWValidate);

// 修正跨域登入
axios.defaults.withCredentials = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
