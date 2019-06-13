import axios from 'axios';
export default {
    namespaced :true,
    state:{
        cart : {
            carts: [],
        }
    },
    actions:{
        addToCart(context, {id, qty}){
            const item = {
                product_id: id,
                qty,
            };

            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/cart`
            context.commit('LOADING', true , {root:true} );            
            axios.post(url, { data: item }).then((res)=>{  
                context.commit('CART', res.data);
                context.commit('LOADING', false , {root:true} );  
                context.dispatch('getCart'); 
                // console.log('addToCart:=> ',res);
            })
        },
        getCart(context){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/cart`
            context.commit('LOADING', true , {root:true} );                        
            axios.get(url).then((res)=>{
                if(res.data.data.carts){
                    context.commit('CART',res.data.data);
                    console.log(res.data.data);
                }
                context.commit('LOADING', false , {root:true} );        
            })
        },
        removeCart(context,id){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/cart/${id}`
            context.commit('LOADING', true , {root:true} );                        
            axios.delete(url).then((res)=>{
                // console.log(res);
                context.dispatch('getCart')
                context.commit('LOADING', false , {root:true} );   
            })
        }
    },
    mutations:{
        CART(state,payload){
            state.cart.carts =  payload;
        }
    },
    getters:{
        cart : state => state.cart,
    }
}