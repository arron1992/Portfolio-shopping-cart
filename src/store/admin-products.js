import axios from 'axios';
export default {
    namespaced :true,
    state:{
        products:{},
        pagination:{},
        uploadFile:[]
    },
    actions:{
        getProducts(context, page=1){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/products?page=${page}`;
            context.commit('LOADING',true, {root:true});
            axios.get(url).then((res)=>{
                context.commit('PRODUCTS' ,res.data.products);
                context.commit('PAGINATION' ,res.data.pagination);
                context.commit('LOADING',false, {root:true});
            })
        },
        removeProduct(context, id){
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/product/${id}`;
            context.commit('LOADING',true, {root:true});
            axios.delete(url).then((res) => {
                context.dispatch("getProducts");
                context.commit('LOADING',false, {root:true});
            })
        },
        removeMessageWithTiming(context,id){
            const vm = this;
            setTimeout(()=>{
                const uploadImgAry = vm.state.adProductsModules.uploadFile;
                uploadImgAry.forEach((item,i)=>{
                    if(item.id === id){
                        uploadImgAry.splice(i, 1);
                    }
                })
            },5000)
        }   
    },
    mutations:{
        PRODUCTS(state,payload){
            state.products = payload;
        },
        PAGINATION(state,payload){
            state.pagination = payload;
        },
        UPLOADFILE(state, payload){
            state.uploadFile.push({
                status : payload.res.success,
                messages : payload.res.message,
                id : payload.id
            })
        },
    },
    getters:{
        products : state  => state.products,
        pagination : state => state.pagination,
        uploadFile : state => state.uploadFile,
    }
}