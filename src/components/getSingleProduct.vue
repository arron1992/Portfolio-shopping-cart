<template>
    <div>
        123
    </div>
</template>
<script>
export default {
    data(){
        return{
            itemId: '',
            item : {}
        }
    },
    methods:{
        getProduct(id){
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${itemId}`;       
            vm.$http.get(url).then((res)=>{
                if (res.data.success) {                   
                    vm.itemA = res.data.product;               
                }
                console.log(res)
            })
        }
    },
    created(){
        this.itemId = this.$route.params.itemId
        this.getProduct(itemId)
    }
}
</script>