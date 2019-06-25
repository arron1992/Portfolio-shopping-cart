import axios from 'axios';
export default {
    namespaced :true,
    state: {
        item :{}
    },
    actions:{
        getItem(context, id){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/product/${id}`;       
            context.commit('LOADING',true, {root:true});
            axios.get(url).then((res)=>{
                if (res.data.success) {                   
                    context.commit('ITEM', res.data.product)
                }
                context.commit('LOADING',false, {root:true});
            })
        },
    },
    mutations:{
        ITEM(state, payload){
            state.item = payload
        }
    },
    getters:{
        item : state => state.item,
    }
}
