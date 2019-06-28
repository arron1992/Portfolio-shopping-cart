import axios from 'axios';
export default {
    namespaced :true,
    state: {
        coupons:[],
        pagination:{}
    },
    actions:{
        getCoupons(context, page = 1){
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/coupons?page=${page}`
            context.commit('LOADING',true, {root:true});
            axios.get(api).then((res)=>{
                console.log(res);
                context.commit("COUPONS", res.data.coupons);
                context.commit("PAGINATION", res.data.pagination);
                context.commit('LOADING',false, {root:true});
            })
        },
        removeCoupon(context, id){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/coupon/${id}`
            context.commit('LOADING',true, {root:true});
            axios.delete(url).then((res) => {
                context.dispatch("getCoupons");
                context.commit('LOADING',false, {root:true});
            })
        },
    },
    mutations:{
        COUPONS(state, payload){
            state.coupons = payload;
        },
        PAGINATION(state,payload){
            state.pagination = payload;
        },
    },
    getters:{
        coupons: state => state.coupons,
        pagination : state => state.pagination,
    }
}
