<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>

        <!-- step area -->
        <section class="row justify-content-center">
            <div class="col-6">
                <div class="checkout-step d-flex">
                    <div class="step-box-1">
                        <span class="step-num step-now">1</span>
                        <span class="step-text">確認訂單資料</span>
                    </div>
                    <div class="step-box-2">
                        <span class="step-num">2</span>
                        <span class="step-text">付款確認</span>
                    </div>
                    <div class="step-box-3">
                        <span class="step-num">3</span>
                        <span class="step-text">結帳完成</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- main area -->
        <div class="row my-4">
            <div class="col-8 client-info">      
                <h5 class="client-order">訂單資訊</h5>
                <form @submit.prevent="submitOrder()">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="client-name">姓名</label>
                            <input type="text" v-model="form.user.name" class="form-control client-name" id="client-name" aria-describedby="client-name" placeholder=""
                            name="name" v-validate="'required'"
                            :class="{'is-invalid':errors.has('name')}">
                            <span v-if="errors.has('name')" class="text-danger">請輸入姓名</span>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="client-phone">電話</label>
                            <input type="tel" v-model="form.user.tel" class="form-control client-phone" id="client-phone" placeholder=""
                            name="tel" v-validate="'required'"
                            :class="{'is-invalid':errors.has('tel')}">
                            <span v-if="errors.has('tel')" class="text-danger">請輸入電話號碼</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="client-email">郵箱</label>
                        <input type="email" v-model="form.user.email" class="form-control client-email" id="client-email" placeholder=""
                        name="email" v-validate="'required|email'"
                        :class="{'is-invalid':errors.has('email')}"> 
                        <span v-if="errors.has('email')" class="text-danger">請輸入電子郵件</span>         
                    </div>
                    <div class="form-group">
                        <label for="client-address">收件地址</label>
                        <input type="text" v-model="form.user.address" class="form-control client-address" id="client-address" placeholder=""
                        name="address" v-validate="'required'"
                        :class="{'is-invalid':errors.has('address')}"> 
                        <span v-if="errors.has('address')" class="text-danger">請輸入收件地址</span>               
                    </div>
                    <div class="form-group">
                        <label for="client-talk">備註</label>
                        <small>(選填)</small>
                        <textarea v-model="form.message" class="form-control" id="client-talk" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn client-btn">前往付款</button>
                </form>             
            </div>
        
            <div class="col-4 client-cart">
                <div class="client-list">
                    <span class="client-list-title">購物清單</span>
                    <div class="client-scroll">
                    <table class="table client-table">
                        <tbody>
                            <tr v-for="(item, key) in cart.carts.carts" :key="key">
                                <td class="align-middle">                 
                                    <div class="client-img" :style="{backgroundImage:`url(${item.product.image})`}"></div>             
                                </td>
                                <td class="align-middle">
                                    <span class="cart-title">{{item.product.title}}({{item.qty}})</span> 
                                    <span class="d-block cart-qty-unit">NT {{item.product.price | currency}}</span> 
                                </td>
                                <td class="align-middle">
                                    <a href="#" class="btn btn-icon" @click="removeCart(item.id)">
                                        <i class="far fa-trash-alt btn btn-outline-danger"></i>
                                    </a>           
                                </td>
                            </tr>          
                        </tbody>
                    </table>                        
                    </div>
                    <div class="client-cost">
                        <span class="d-flex">總計:</span> 
                        <span class="client-cost-org">NT {{cart.carts.total | currency}}</span>
                    </div>    
                    <div class="client-cost" v-if="cart.carts.final_total !== cart.carts.total">
                        <span class="d-flex">折價後: </span> 
                        <span class="client-cost-dec">{{cart.carts.final_total | currency}}</span>
                    </div>
                    <div class="coupon-group">
                        <input type="text" class="client-coupon" placeholder="Your coupon code?" v-model="coupon_code">
                        <a href="#" class="client-coupon-btn"  @click.prevent="useCoupon(coupon_code), coupon_code=''">使用優惠券</a>
                    </div>
                    <router-link to="/store" class="back-btn">返回購物</router-link>                   
                </div>               
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    components:{
    },
    data(){
        return {
            form: {
                user:{
                    name: '',
                    email: '',
                    tel: '',
                    address: ''
                },
                message: ''
            },
            coupon_code : '',
        }
    },
    methods:{
        submitOrder(){
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/order`
            const order = vm.form;
            this.$validator.validate().then(valid => {
                if (valid) {
                    vm.$http.post(url, {data:order}).then((res) => {
                        if(res.data.success){
                            vm.$router.push(`/checkout/order/${res.data.orderId}`);
                        } 
                    })
                }
            })
        },
        useCoupon(coupon_code){
            this.$store.dispatch('cartModules/useCoupon', coupon_code);
        },
        ...mapActions('cartModules',['getCart','removeCart',]),
    },
    computed:{
        ...mapGetters("cartModules", ["cart"]),
        ...mapGetters(["isLoading"])
    },
    created(){
        this.getCart;
    }
}
</script>
