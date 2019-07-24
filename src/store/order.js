import axios from 'axios'
export default {
    namespaced :true,
    state: {
        order:{}
    },
    actions:{
        getOrder(context, orderId){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/order/${orderId}`;
            axios.get(url).then((res) => {
                context.commit("ORDER", res.data.order);
            })
        },
        payOrder(context,orderId){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/pay/${orderId}`;
            context.commit('LOADING', true , {root:true});         
            axios.post(url).then((res) => {
                context.commit('LOADING', false , {root:true});
                context.dispatch('getOrder',orderId);
            })
        },
    },
    mutations:{
        ORDER(state,payload){
            state.order = payload;
        }
    },
    getters:{
        order : state => state.order,
    }
}



