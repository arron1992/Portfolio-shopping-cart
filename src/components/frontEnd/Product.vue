<template>
    <div class="row m-0">
        <Loading :active.sync="isLoading"></Loading>
        <Alert/>
        <div class="product-group">
            <!-- product-img-group -->
            <div class="row">
                <div class="col-md-3 col-sm-12 product-img-group">
                    <router-link to="/store/products" class="page-back mb-1 mt-0">
                        <i class="fas fa-chevron-left mr-2"></i>Back to Products
                    </router-link>
                    <div class="product-img" :style="{backgroundImage:`url(${item.image})`}">    </div>
                </div>

                <!-- product-txt-group -->
                <div class="col-md-6 col-sm-12 product-txt-group">
                    <h3 class="product-title">{{item.title}}</h3>
                    <p class="product-content">{{item.content}}</p>
                    <div class="d-flex">
                        <h5><span class="badge badge-pill badge-color mr-2">#{{item.category}}</span></h5>
                        <h5><span class="badge badge-pill badge-color" v-if="item.price">#On Sale</span></h5>
                    </div>
                </div>

                <!-- product-btn-group   -->
                <div class="col-md-3 col-sm-12 product-btn-group">
                    <span class="price">{{item.price | currency}}</span>
                    <div class="qty-group">
                        <p>QUANTITY:</p>
                        <select name="qty" id="qty" v-model="qtys" class="select">
                            <option :value="i" v-for="i in 10" :key="i">{{i}}</option>
                        </select>
                    </div>
                    <button class="addTocart" type="submit" name="submit" @click.prevent="addToCart(itemId, qtys)">
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>
            
            <!-- description -->
            <div class="description">
                <div class="des-area">
                    <span class="des-span">DESCRIPTION</span>   
                    <p>{{item.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
import Alert from '../mutual/Alert-message.vue';
export default {
    components: {
        Alert
    },
    data(){
        return{
            itemId: '',
            qtys : 1
        }
    },
    methods:{
        addToCart(id, qty){
            this.$store.dispatch("cartModules/addToCart", { id, qty });
        },
        ...mapActions("productModules",["getItem"]),
    },
    computed:{
        ...mapGetters(["isLoading"]),
        ...mapGetters("productModules",["item"]),

    },
    created(){
        this.itemId = this.$route.params.itemId;
        this.getItem(this.itemId);
    }
}
</script>