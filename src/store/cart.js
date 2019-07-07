import axios from 'axios';
export default {
    namespaced :true,
    state:{
        cart : {
            carts: [],
        },
        cartInfo : [],
        couponInfo: []
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
                    context.dispatch('removeMessageWithTimingForCart', res.data.data.id);
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
                const id = Math.floor(Date.now() / 1000)
                const resObj = {
                    success :  res.data.success,
                    message: res.data.message,
                    id : id,
                }
                if(res.data.success){
                    context.dispatch('getCart');
                    context.commit('COUPONINFO', resObj);
                    context.commit('LOADING', false, { root: true });
                    context.dispatch('removeMessageWithTimingForCoupon', id);
                } else {
                    context.commit('COUPONINFO', resObj);
                    context.commit('LOADING', false, { root: true });
                    context.dispatch('removeMessageWithTimingForCoupon', id);
                }
            })
        },
        removeMessageWithTimingForCart(context,id){
            const vm = this;
            setTimeout(()=>{
                const cartInfoAry = vm.state.cartModules.cartInfo;
                cartInfoAry.forEach((item,i)=>{
                    if(item.id === id){
                        cartInfoAry.splice(i, 1);
                    }
                })
            },3000)
        },
        removeMessageWithTimingForCoupon(context,id){
            const vm = this;
            setTimeout(()=>{
                const couponInfoAry = vm.state.cartModules.couponInfo;
                couponInfoAry.forEach((item,i)=>{
                    if(item.id === id){
                        couponInfoAry.splice(i, 1);
                    }
                })
            },3000)
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
            })
        },
        COUPONINFO(state,payload){
            state.couponInfo.push({
                status : payload.success,
                message : payload.message,
                id : payload.id,
            })
        },
    },
    getters:{
        cart : state => state.cart,
        cartInfo : state => state.cartInfo,
        couponInfo : state => state.couponInfo,
    }
}