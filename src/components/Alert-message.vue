<template>
    <div class="alert">
        <!-- message for addToCart -->
        <div class="cart-message-box" v-for="(item,i) in cartInfo" :key="i">
            <span class="cart-message-x" @click.prevent="removeCartInfo(i)">+</span>
            <div class="cart-message-content" :class="'alert-' + item.status">
                <p class="cart-message-title">Add To Cart</p>
                <strong class="d-flex">{{item.title}} x {{item.qty}}</strong>
            </div>
        </div>
        
        <!-- message for signIn  -->
        <div class="sign-message-box"  v-for="(item,i) in signIn" :key="i">
            <span class="sign-message-x" @click.prevent="removeSignIn(i)">+</span>
            <div class="sign-message-content" :class="'alert-' + item.status">
                <strong>{{item.message}}</strong>
            </div>
        </div>

        <!-- message for coupon  -->
        <div class="coupon-message-box"  v-for="(item,i) in couponInfo" :key="i">
            <span class="coupon-message-x" @click.prevent="removeCoupon(i)">+</span>
            <div class="coupon-message-content" :class="'alert-' + item.status">
                <strong>{{item.message}}</strong>
            </div>
        </div>

        <!-- message for adminProduct  -->
        <div class="upload-message-box"  v-for="(item,i) in uploadFile" :key="i">
            <span class="upload-message-x" @click.prevent="removeUploadFile(i)">+</span>
            <div class="upload-message-content" :class="'alert-' + item.status">
                <strong v-if="item.status">上傳成功</strong>
                <strong v-else>{{item.messages}}</strong>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return{}
    },
    methods:{
        removeCartInfo(num){
            this.cartInfo.splice(num, 1);
        },
        removeSignIn(num){
            this.signIn.splice(num, 1);
        },
        removeCoupon(num){
            this.couponInfo.splice(num, 1);
        },
        removeUploadFile(num){
            this.uploadFile.splice(num, 1);
        },
    },
    computed:{
        ...mapGetters('cartModules',['cart','cartInfo','couponInfo']),
        ...mapGetters(['signIn']),
        ...mapGetters('adProductsModules',['uploadFile'])
    }
}
</script>