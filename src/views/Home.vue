<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>
        <Alert/>
        <Headbar/>
        <Jumbotron/>     
        <!-- Index start -->
            <div class="home-page">
                <div class="hom-info-group">
                    <h2>snowboards</h2>
                    <p>HENDRERIT IN VULPUTATE VELIT ESSE MOLESTIE CONSEQUAT, VEL ILLUM DOLORE</p>
                    <span><i class="fas fa-times"></i></span>
                </div>
                <div class="container">
                    <div class="row home-product-group">
                        <div class="col-4 item" v-for="item in filterAry" :key="item.id">
                            <div class="item-container">
                                <a href="#" class="item-img" 
                                    :style="{backgroundImage:`url(${item.image})`}">
                                </a>
                                <div class="item-box">
                                    <span class="onsale-text" v-if="item.price < item.origin_price">on sale</span>
                                    <span class="item-txt">{{item.title}}</span>
                                    <div class="icon-group">
                                        <i class="fas fa-search" @click="getProduct(item.id)"></i>
                                        <i class="fas fa-shopping-bag" @click.prevent="addToCart(item.id)"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="mt-4">SNOWBOARD EXTREME SERIES</h3> 
                <div class="features">
                    <div class="container">
                        <div class="row">
                            <div class="features-item col-4">
                                <i class="fas fa-truck-loading"></i>
                                <h5>FREE SHIPPING</h5>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus non odit quos iure dolorem obcaecati voluptas facere voluptate nihil.</span>
                            </div>
                            <div class="features-item col-4">
                                <i class="far fa-clock"></i>
                                <h5>30 DAYS MONEY BACK</h5>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus non odit quos iure dolorem obcaecati voluptas facere voluptate nihil.</span>
                            </div>
                            <div class="features-item col-4">
                                <i class="fas fa-phone"></i>
                                <h5>SUPPORT 24/7</h5>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus non odit quos iure dolorem obcaecati voluptas facere voluptate nihil.</span>
                            </div>
                        </div>
                    </div>        
                </div>
                <div class="bgcover">
                    <div class="bgcover-user-area">
                        <div class="bgcover-user-info">         
                            <img src="../assets/image/user.png" alt="" class="bgcover-user-img">
                            <strong class="d-block h6">Emlia</strong>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate exercitationem labore sunt omnis numquam magnam, culpa odit in laboriosam provident quidem nulla. Laudantium, esse provident?</p>
                        </div>
                    </div>
                </div>

                <h4>SUBSCRIBE OUR NEWSLETTER</h4>
                <form action="">
                    <input type="text" placeholder="Enter your mail ?">
                    <input type="submit" value="SUBSCRIBE">
                </form>
            </div>  
        <!-- Index end -->
        <div class="subscript"></div>
        <Footbar/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Alert from '../components/Alert-message.vue';
import Headbar from '../components/Headbar.vue';
import Footbar from '../components/Footbar.vue';
import Jumbotron from '../components/Jumbotron.vue';
export default {
    components:{
        Headbar,
        Footbar,
        Jumbotron,
        Alert,
    },
    data(){
        return {
            newAry :[],
        }
    },
    methods:{
        addToCart(id, qty = 1) {
            this.$store.dispatch("cartModules/addToCart", { id, qty }); 
        },
        getProduct(id) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/product/${id}`;

            vm.$http.get(url).then(res => {
                if (res.data.success) {
                    vm.$router.push(`/store/porduct/${res.data.product.id}`);
                }
            });
        },
        ...mapActions("productsModules", ["getProducts"]),
        ...mapActions("cartModules", ["getCart"]),
    },
    computed:{
        filterAry(){
            const vm = this;
            const newAry = vm.products.map((item)=>{
                return item
            })
            return newAry.slice(0,6)
        },
        swiper() {
            return this.$refs.mySwiper.swiper
        },
        ...mapGetters("cartModules", ["cart"]),
        ...mapGetters("productsModules", ["categories", "products"]),
        ...mapGetters(["isLoading"])
    },
    created(){
        this.getProducts();
    }
}
</script>
