<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>
        <Alert/>
        
        <!-- list-group-area -->
        <div class="products-group">
                <ul class="select-list">
                    <li class="select-list-item" 
                    @click.prevent="keyText = ''" 
                    :class="{'active': keyText === ''}">All</li>

                    <li v-for="(item,i) in categories"
                        class="select-list-item"
                        :key="i"
                        @click.prevent="keyText = item"
                        :class="{'active': item === keyText}">{{item}}
                    </li>
                </ul>

            <!-- main-product-area -->
            <div class="col-12">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
                        v-for="item in filterData[currentPage]"
                        :key="item.id">
                        <div class="card flex-column">
                            <div class="card-container">
                                <a href="#" class="card-img" 
                                    :style="{backgroundImage:`url(${item.image})`}"
                                    @click.prevent="getProduct(item.id)">
                                </a>
                                <a href="#" class="buyit"  @click.prevent="addToCart(item.id)">ADD TO CART</a>
                                <span class="onsale-text" v-if="item.price < item.origin_price">On sale</span>
                            </div>
                            <div class="card-foot">       
                                <span href="#" class="card-title" @click.prevent="">{{item.title}}</span> 
                                <div class="price-group">
                                    <span class="price-discount">{{item.price | currency}} </span>
                                    <span class="price-origin">{{item.origin_price | currency}}</span>
                                </div>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- pagination -->
            <ul class="page-list">
                <li>
                    <a href="#" class="page-list-item"
                    :class="{'noHover':currentPage === 0}"
                    @click.prevent="currentPage = currentPage - 1">&laquo;</a>
                </li>

                <li v-for="page in filterData.length" :key="page">
                    <a href="#" @click.prevent="currentPage = page - 1"
                    :class="{'active': currentPage === page - 1}"
                    class="page-list-item">{{page}}</a>
                </li>

                <li>
                    <a href="#" class="page-list-item"
                    :class="{'noHover': currentPage === filterData.length - 1}"
                    @click.prevent="currentPage = currentPage + 1">&raquo;</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Alert from '../mutual/Alert-message.vue';
export default {
components: {
    Alert
},
data() {
    return {
        keyText: "",
        currentPage: 0,
        active : false,
    };
},
methods: {
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
    ...mapActions("cartModules", ["getCart"]),
    ...mapActions("productsModules", ["getProducts"]),
},
computed: {
    filterData() {
        const vm = this;
        let newData = [];
        if (vm.keyText !== "") {
            newData = vm.products.filter(item => {
                return item.category === vm.keyText;
            });
        } else {
            newData = vm.products;
        }   

        // [[page1:10個item],[page2:剩下的item]]
        let pageAry = [];
        newData.filter((item, i) => {
            if (i % 10 === 0) {
                pageAry.push([]);
            }
            let page = parseInt(i / 10);
            pageAry[page].push(item);
        });
        return pageAry;
        },
        ...mapGetters("productsModules", ["categories", "products"]),
        ...mapGetters("cartModules", ["cart"]),
        ...mapGetters(["isLoading"])
    },
created() {
    this.getProducts();
    this.getCart();
}
};
</script>