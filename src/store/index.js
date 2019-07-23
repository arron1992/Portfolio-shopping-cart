import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

import productsModules from './products';
import productModules from './product';
import cartModules from './cart';
import orderModules from './order';
import adOrdersModules from './admin-orders';
import adCouponsModules from './admin-coupons';
import adProductsModules from './admin-products';

Vue.use(Vuex);
export default new Vuex.Store({
    script:true,
    state:{
        isLoading : false,
        signIn: [],
    },
    actions:{
        updateLoading(context, payload){
            context.commit('LOADING',payload);
        },
        signIn(context, user){
            const api =`${process.env.VUE_APP_APIPATH}/admin/signin`     
            axios.post(api, user).then((res) =>{
                if(res.data.success){
                    context.commit('SIGNIN', res.data);
                    router.push('/store/products');
                    context.dispatch('removeMessageWithTiming',res.data.uid);          
                } else {
                    context.commit('SIGNIN',res.data);
                    context.dispatch('removeMessageWithTiming',res.data.uid);          
                }
            })
        },
        removeMessageWithTiming(context,id){
            const vm = this;
            setTimeout(()=>{
                const signinAry = vm.state.signIn;
                signinAry.forEach((item,i)=>{
                    if(item.id === id){
                        signinAry.splice(i, 1);
                    }
                })
            },3000)
        }
    },
    mutations:{
        LOADING(state, payload){
            state.isLoading = payload
        },
        SIGNIN(state, payload){
            state.signIn.push({
                message : payload.message,
                status : payload.success,
                id : payload.uid,
            })
            console.log(state.signIn)
        }
    },
    getters:{
        isLoading : state => state.isLoading,
        signIn : state => state.signIn,
    },
    modules:{
        productsModules,
        productModules,
        cartModules,
        orderModules,
        adOrdersModules,
        adCouponsModules,
        adProductsModules,
    }
})