<template>
    <div>
        <div class="cart-icon d-inline" @click="isHide = !isHide"> 
            <span class="cart-num badge" v-if="cart.carts.carts">{{cart.carts.carts.length}}</span>
            <i class="fas fa-shopping-cart fa-x"></i>
        </div>
        
        <div class="cart-modal" v-if="isHide" @click.self="isHide = !isHide">
            <div class="cart-modal-content">
                <div class="cart-menu-scroll">
                    <p class="cart-info" v-if="cart.carts.carts.length == 0">購物車中無任何商品</p>
                    <table class="table">
                    <tbody>
                        <tr v-for="(item, key) in cart.carts.carts" :key="key" class="d-flex justify-content-between mb-2">
                            <td class="align-top">                 
                                <div class="cart-img" :style="{backgroundImage:`url(${item.product.image})`}"></div>             
                            </td>
                            <td class="align-top">
                                <div class="d-flex flex-column">
                                    <span>{{item.product.title}}</span> 
                                    <span class="my-2">x {{item.qty}} {{item.product.price | currency}}</span> 
                                </div>
                            </td>
                            <td class="d-flex">
                                <a href="#" class="remove-icon align-self-center" @click="removeCart(item.id)">
                                    <i class="fas fa-times mr-2"></i>
                                </a>           
                            </td>
                        </tr>          
                    </tbody> 
                    </table> 
                </div>  
                <div class="cart-modal-footer" v-if="cart.carts.carts.length !== 0">
                    <div class="d-flex total-area">
                        <span>Total</span>
                        <span class="ml-auto">{{cart.carts.final_total | currency}}</span>
                    </div>  
                    <button class="btn checkout-btn" @click.prevent="goCheckOut()">Check Out</button>
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
            isHide  : false,
        }
    },
    methods:{
        goCheckOut(){      
            this.$router.push(`/checkout`);
            this.isHide = false;
        },
        ...mapActions('cartModules',['getCart','removeCart']),
    },
    computed:{
        ...mapGetters('cartModules',['cart']),
    },
    watch: {
        isHide: function () {
            document.body.style.overflow = this.isHide ? 'hidden' : 'auto';
        }
    },
    created(){
        this.getCart();
        document.body.style.overflow = 'auto';
    },
}
</script>
