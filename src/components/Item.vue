<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>

        <div class="row my-5">
            <div class="col-6 product-img-group">
                <div class="product-img" :style="{backgroundImage:`url(${item.image})`}">    
                </div>
            </div>

            <div class="col-6 product-txt-group">
                <h5><span class="badge badge-warning text-white">{{item.category}}</span></h5>
                <p class="product-title tetx-info">{{item.title}}</p>
                <br/>
                <p class="product-txt">【產品說明】</p>
                <!-- <p class="product-content">{{item.content}}</p> -->
                <p class="product-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto suscipit sed fugiat tempore harum praesentium doloribus dolor, vel at ipsum!</p>
                <div class="num-group">
                    <span class="product-price">NT {{item.price}}</span>
                    <span class="product-og-price">NT {{item.origin_price}}</span>
                    <div class="num-box">
                        <select name="num" id="num" class="num-select" v-model="qtys">
                            <option :value="i" v-for="i in 10" :key="i">選購 {{i}} {{item.unit}}</option>
                        </select>
                        <a href="#" class="num-btn" @click.prevent="addToCart(itemId, qtys)">放入購物車</a>
                    </div>                                      
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    data(){
        return{
            itemId: '',
            item : {},
            qtys : 1
        }
    },
    methods:{
        getProduct(id){
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/product/${id}`;       
            vm.$http.get(url).then((res)=>{
                if (res.data.success) {                   
                    vm.item = res.data.product;               
                }
            })
        },
        addToCart(id, qty){
            this.$store.dispatch("cartModules/addToCart",{ id, qty })
        },     
    },
    computed:{
        ...mapGetters(["isLoading"])
    },
    created(){
        this.itemId = this.$route.params.itemId
        this.getProduct(this.itemId)
    }
}
</script>