import axios from 'axios';
export default {
    namespaced :true,
    state: {
        orders:{},
        pagination:{}
    },
    actions:{
        getOrders(context, page = 1){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/orders?page=${page}`;
            context.commit('LOADING',true, {root:true});
            axios.get(api).then((res)=>{
                context.commit("ORDERS", res.data.orders);
                context.commit("PAGINATION", res.data.pagination);
                context.commit('LOADING',false, {root:true});
            })
        },
    },
    mutations:{
        ORDERS(state, payload){
            state.orders = payload;
        },
        PAGINATION(state,payload){
            state.pagination = payload;
        },
    },
    getters:{
        orders: state => state.orders,
        pagination : state => state.pagination,
    }
}
