<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>
        <Alert/>
        <form @submit.prevent="submitOrder()">
            <div class="row m-0">
                <!-- form-area -->
                <div class="col-md-8 col-sm-12 form-area">
                    <div class="coupon-group">
                        <h3>Have a Coupon?</h3>
                        <input type="text" class="code-text" placeholder="Your coupon code?" v-model="coupon_code" value="">
                        <a href="#" class="code-btn"  @click.prevent="useCoupon(coupon_code), coupon_code=''">Apply Coupon</a>
                    </div>

                    <div class="info-group mt-4">
                        <h3>Customer Info</h3>
                        <div class="form-row">
                            <!-- name -->
                            <div class="info-group-form col-md-6 col-sm-12">
                                <input type="text" v-model="form.user.name" placeholder="Name*"
                                name="name" v-validate="'required'"
                                :class="{'is-invalid':errors.has('name')}">
                                <span v-if="errors.has('name')" class="warning-text">請輸入姓名</span>
                            </div>
                            <!-- phone -->
                            <div class="info-group-form col-md-6 col-sm-12">
                                <input type="tel" v-model="form.user.tel" placeholder="Phone Number*"
                                name="tel" v-validate="'required'"
                                :class="{'is-invalid':errors.has('tel')}">
                                <span v-if="errors.has('tel')" class="warning-text">請輸入電話號碼</span>
                            </div>
                            <!-- email -->
                            <div class="info-group-form col-12">
                                <input type="email" v-model="form.user.email" placeholder="Email address*"
                                name="email" v-validate="'required|email'"
                                :class="{'is-invalid':errors.has('email')}"> 
                                <span v-if="errors.has('email')" class="warning-text">請輸入電子郵件</span>         
                            </div>
                            <!-- address -->
                            <div class="info-group-form col-12">
                                <input type="text" v-model="form.user.address" placeholder="Address*"
                                name="address" v-validate="'required'"
                                :class="{'is-invalid':errors.has('address')}"> 
                                <span v-if="errors.has('address')" class="warning-text">請輸入收件地址</span>   
                            </div>
                            <!-- textarea -->
                            <div class="info-group-form col-12">
                                <textarea v-model="form.message" rows="3" placeholder="Special Notes"></textarea>               
                            </div>
                        </div><!------ form end ------->
                    </div>
                </div>
                
                <!-- order-area -->
                <div class="col-md-4 col-sm-12 order-area">
                    <p class="table-title">Order Summary</p>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                                <th><i class="fas fa-cog"></i></th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr v-for="(item, key) in cart.carts.carts" :key="key">
                                <td class="align-middle">{{item.product.title}} x {{item.qty}}</td>
                                <td class="align-middle">{{item.total | currency}}</td>
                                <td class="align-middle">
                                    <span class="table-cross" @click="removeCart(item.id)">
                                        <i class="fas fa-ban"></i>
                                    </span>          
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="money-area mt-2">
                        <span class="code"><i class="fas fa-tag"></i> Coupon Code:「 cart-666 」</span>
                        <div class="d-flex justify-content-between mt-5">
                            <strong>Total :</strong>
                            <span>{{cart.carts.total | currency}}</span>
                        </div>
                        <div class="discouot-group d-flex justify-content-between" v-if="cart.carts.final_total !== cart.carts.total">
                            <strong>Discount :</strong>
                            <span>{{cart.carts.final_total | currency}}</span>
                        </div>
                    </div>
                    <button type="submit" class="checkout-btn">Pay Order</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
import Alert from '../mutual/Alert-message.vue';
export default {
    components:{
        Alert
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
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/order`;
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
