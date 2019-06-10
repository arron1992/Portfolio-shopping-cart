import axios from 'axios';
export default {
    namespaced :true,
    state:{
        cart : []
    },
    actions:{
        addToCart(id, qty = 1){
            const vm = this;
            const item = {
                product_id: id,
                qty,
            };
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/cart`

            vm.$http.post(url, {data:item}).then((res)=>{
                if(res.data.success){
                console.log('ya');
                }
                console.log(res);
            })
        },
    },
    mutations:{

    },
    getters:{

    }
}