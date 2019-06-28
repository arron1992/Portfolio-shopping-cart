<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>
        <Alert/>
        <Jumbotron/>
        
        <!-- list-group-area -->
        <div class="row product-group">
        <div class="col-3" style="padding-left:0px;">
            <ul class="select-list">
                <li class="select-list-item" 
                @click.prevent="keyText = ''" 
                :class="{'active': keyText === ''}">全部甜點</li>

                <li v-for="(item,i) in categories"
                    class="select-list-item"
                    :key="i"
                    @click.prevent="keyText = item"
                    :class="{'active': item === keyText}">{{item}}</li>
                </ul>
        </div>

        <!-- main-product-area -->
        <div class="col-9" style="padding-right:0px;">
            <div class="search-box clear-fix ml-auto">
            <input type="text" class="search-txt" placeholder="請輸入商品名稱" name="search" v-model="keyText" @keyup.enter="findKeyWord()">
            <a href="#" class="search-btn">
                <i class="fas fa-search"></i>
            </a>
            </div>
            <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12"
                v-for="item in filterData[currentPage]"
                :key="item.id">
                <div class="card">
                    <a href="#" class="card-head"
                        :style="{backgroundImage:`url(${item.image})`}"
                        @click.prevent="getProduct(item.id)">
                    </a>
                    <div class="card-body">
                        <h5>
                        <span class="badge badge-pill badge-info">{{item.category}}</span>
                        </h5>
                        <a href="#" class="card-title"
                        @click.prevent="getProduct(item.id)">{{item.title}}</a>
                        <p class>{{item.description}}</p>
                        <p class="price">NT {{item.price | currency}}</p>
                    </div>
                    <div class="card-foot d-flex">
                        <a href="#" class="addToCart" @click.prevent="addToCart(item.id)">加入購物車</a>
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
            <div class="clearfix"></div>
        </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Jumbotron from '../components/Jumbotron.vue';
import Alert from '../components/Alert-message.vue';

export default {
components: {
    Jumbotron,
    Alert
},
data() {
    return {
        keyText: "",
        currentPage: 0,
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
                return item.title.toLowerCase().includes(vm.keyText.toLowerCase());
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