import axios from 'axios'
import router from '../router';
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
            axios.post(url).then((res) => {
                if(res.data.success){
                    router.push(`/checkout/done`);    
                }
            })
        },
    },
    mutations:{
        ORDER(state,payload){
            state.order = payload
        }
    },
    getters:{
        order : state => state.order,
    }
}



