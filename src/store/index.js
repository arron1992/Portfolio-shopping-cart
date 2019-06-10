import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './products';
import cartModules from './cart';

Vue.use(Vuex);

export default new Vuex.Store({
    script:true,
    state:{
        isLoading : false,
    },
    actions:{
        updateLoading(context, payload){
            context.commit('LOADING',payload);
        }
    },
    mutations:{
        LOADING(state, payload){
            state.isLoading = payload
        }
    },
    getters:{
        isLoading : state => state.isLoading,
    },
    modules:{
        productsModules,
        cartModules
    }
})