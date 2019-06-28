import axios from 'axios';
export default {
    namespaced :true,
    state:{
        cart : {
            carts: [],
        },
        cartInfo : []
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
                
                if(res.request.status){
                    context.commit('CART', res.data);
                    context.dispatch('getCart');
                    context.commit('LOADING', false , {root:true} );
                    // 01.(提示訊息) commit(INFO) 傳入陣列,並呈現在畫面上
                    context.commit('CARTINFO', res); 
                    // 02.(提示訊息)使用 settimeout 設定 2 秒後消失
                    context.dispatch('removeMessageWithTiming', res.data.data.id);
                } 
            })
        },    
        getCart(context){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/cart`
            context.commit('LOADING', true , {root:true} );                        
            axios.get(url).then((res)=>{
                if(res.data.data.carts){
                    context.commit('CART',res.data.data);
                    // console.log(res.data.data);
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
        },
        useCoupon(context,coupon_code){
            const coupon = {
                code : coupon_code
            }
            context.commit('LOADING', true, { root: true });
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/coupon`
            axios.post(url, {data : coupon}).then((res)=>{
                if(res.data.success){
                    context.dispatch('getCart');
                    context.commit('LOADING', false, { root: true });
                } else {
                    console.log('falis');
                    this.$store.dispatch('cartModules/getCart');
                    context.commit('LOADING', false, { root: true });
                }
            })
        },
        removeMessageWithTiming(context,id){
            const vm = this;
            setTimeout(()=>{
                const cartInfoAry = vm.state.cartModules.cartInfo;
                cartInfoAry.forEach((item,i)=>{
                    if(item.id === id){
                        cartInfoAry.splice(i, 1);
                    }
                })
            },5000)
        }
    },
    mutations:{
        CART(state,payload){
            state.cart.carts =  payload;
        },
        CARTINFO(state,payload){
            state.cartInfo.push({
                title : payload.data.data.product.title,
                status : payload.data.success,
                id : payload.data.data.id,
                qty : payload.data.data.qty,
                unit : payload.data.data.product.unit
            })
        }
    },
    getters:{
        cart : state => state.cart,
        cartInfo : state => state.cartInfo,
    }
}