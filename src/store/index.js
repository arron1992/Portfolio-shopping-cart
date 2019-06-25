import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './products';
import itemModules from './item';
import cartModules from './cart';
import orderModules from './order';
import adOrdersModules from './ad-orders';
import adCouponsModules from './ad-coupons';
import adProductsModules from './ad-products';

Vue.use(Vuex);
export default new Vuex.Store({
    script:true,
    state:{
        isLoading : false,
    },
    actions:{
        updateLoading(context, payload){
            context.commit('LOADING',payload);
        },
    },
    mutations:{
        LOADING(state, payload){
            state.isLoading = payload
        },
    },
    getters:{
        isLoading : state => state.isLoading,
    },
    modules:{
        productsModules,
        itemModules,
        cartModules,
        orderModules,
        adOrdersModules,
        adCouponsModules,
        adProductsModules
    }
})