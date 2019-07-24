import axios from 'axios';
export default {
    namespaced :true,
    state: {
        products: [],
        categories: [],
    },
    actions:{
        getProducts(context){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/products/all`
            context.commit('LOADING', true , {root:true});
            axios.get(url).then((res)=>{
                context.commit('PRODUCTS',res.data.products);
                context.commit('CATEGORIES',res.data.products);
                context.commit('LOADING', false, { root: true });
            })
        },
    },
    mutations:{
        PRODUCTS(state,payload){
            state.products = payload
        },
        CATEGORIES(state, payload){
            const categories = new Set();
            payload.forEach((item) => {
                categories.add(item.category);
            });
            state.categories = categories;
        }
    },
    getters:{
        categories : state => state.categories,
        products : state => state.products
    }
}



