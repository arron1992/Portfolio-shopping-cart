<template>
    <div class="d-inline" >
        <div class="cart-icon d-inline" @click="isHide = !isHide"> 
            <span class="cart-num badge badge-info" v-if="cart.carts.carts">{{cart.carts.carts.length}}</span>
            <i class="fas fa-shopping-cart fa-1x"></i>
        </div>
        
        <div class="cart-modal" v-if="isHide" @click.self="isHide = !isHide">
            <div class="cart-modal-content">
                <span class="cart-modal-text text-secondary">已選擇商品</span>
                <div class="cart-menu-scroll">
                    <table class="table">
                    <tbody>
                        <tr v-for="(item, key) in cart.carts.carts" :key="key">
                            <td class="align-middle">
                                <a href="#" class="btn btn-icon btn-outline-danger" @click="removeCart(item.id)">
                                    <i class="far fa-trash-alt"></i>
                                </a>           
                            </td>
                            <td class="align-middle">                 
                                <div class="cart-img" :style="{backgroundImage:`url(${item.product.image})`}"></div>             
                            </td>
                            <td class="align-middle">
                                <span class="cart-title">{{item.product.title}}</span> 
                                <span class="d-block cart-qty-unit">{{item.qty}} / {{item.product.unit}}</span> 
                            </td>
                            <td class="align-middle cart-price">
                                NT {{item.product.price}}
                            </td>
                        </tr>          
                    </tbody> 
                </table> 
                </div>  
                <div class="cart-modal-footer">
                    <div class="d-flex total-area">
                        <span class="total-txt text-secondary">總計</span>
                        <span class="total-price ml-auto">NT {{cart.carts.final_total}}</span>
                    </div>   
                    <a href="#" class="checkout-btn btn btn-outline-info">結帳</a>
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
        ...mapActions('cartModules',['getCart','removeCart']),
    },
    computed:{
        ...mapGetters('cartModules',['cart'])
    },
    created(){
        this.getCart();
    },
    watch: {
        isHide: function () {
            document.body.style.overflow = this.isHide ? 'hidden' : 'auto'
        }
    }
}
</script>
