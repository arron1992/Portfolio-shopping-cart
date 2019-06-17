<template>
    <div>
        <Loading :active.sync="isLoading"></Loading>

        <section class="row justify-content-center">
            <div class="col-6">
                <div class="checkout-step d-flex">
                    <div class="step-box-1">
                        <span class="step-num">1</span>
                        <span class="step-text">確認訂單資料</span>
                    </div>
                    <div class="step-box-2">
                        <span class="step-num step-now">2</span>
                        <span class="step-text">付款確認</span>
                    </div>
                    <div class="step-box-3">
                        <span class="step-num">3</span>
                        <span class="step-text">結帳完成</span>
                    </div>
                </div>
            </div>
        </section>

        <div v-if="order.id">
            <div class="row d-flex justify-content-center text-secondary mt-3">
                <div class="col-8">
                    <i class="fas fa-file-invoice-dollar mr-2"></i>
                    <span class="h6 my-2 d-inline-block h6">購買資訊</span>
                    <table class="table table-striped table-light shadow-sm">
                        <thead class="text-white bg-info h6">
                            <tr>
                                <th colspan="2">商品資訊</th>
                                <th>數量</th>
                                <th>金額</th>
                            </tr>
                        </thead>
                        <tbody class="text-secondary font-weight-bold">
                            <tr v-for="item in order.products" :key="item.id">
                                <td class="order-table-img align-middle m-2" :style="{backgroundImage:`url(${item.product.image})`}"></td>
                                <td class="align-middle">{{item.product.title}}</td>
                                <td clas="align-middle text-dark">
                                    {{item.qty}} / {{item.product.unit}}
                                </td>
                                <td class="text-right align-middle text-success">NT {{item.product.price}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-end align-items-baseline">
                        <span class="pr-3 h6">總計</span>
                        <span class="text-success h4">NT {{order.total}}</span>
                    </div>
                </div>
            </div>
            <br/>

            <div class="row d-flex justify-content-center text-secondary ">
                <div class="col-8">
                    <i class="fas fa-file-invoice-dollar mr-2"></i>
                    <span class="h6 my-2 d-inline-block h6">個人資訊</span>
                    <table class="table table-striped table-light shadow-sm">
                        <thead class="text-white bg-info h6">
                            <tr>
                                <th colspan="2">訂單資料</th>
                            </tr>
                        </thead>
                        <tbody class="font-weight-bold">
                            <tr>
                                <td class="text-dark ">姓名</td>
                                <td>{{order.user.name}}</td>
                            </tr>
                            <tr>
                                <td class="text-dark">電話</td>
                                <td>{{order.user.tel}}</td>
                            </tr>
                            <tr>
                                <td class="text-dark">Email</td>
                                <td>{{order.user.email}}</td>
                            </tr>
                            <tr>
                                <td class="text-dark">地址</td>
                                <td>{{order.user.address}}</td>
                            </tr>
                            <tr>
                                <td class="text-dark">付款狀態</td>
                                <td v-if="!order.is_paid" class="text-danger">尚未付款</td>
                                <td v-else class="text-success">已付款</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-end align-items-baseline">
                        <button class="btn btn-danger my-2" v-if="!order.is_paid" @click="payOrder(orderId)">確認付款</button>
                        <router-link to="/store/products" v-else class="btn btn-success my-2">繼續購物</router-link>
                    </div>
                </div>
            </div>
        </div>
        <br/>    
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            orderId : 0,
            order:{}
        }
    },
    methods:{
        getOrder(orderId){
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/order/${orderId}`;
            vm.$http.get(url).then((res) => {
                vm.order = res.data.order;
                console.log(vm.order);
            })
        },
        payOrder(orderId){
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/pay/${orderId}`;
            vm.$http.post(url).then((res) => {
                if(res.data.success){
                    this.getOrder(orderId);
                    vm.$router.push(`/checkout/done`);    
                }
            })
        }
    },
    computed:{
        ...mapGetters(['isLoading']),
    },
    created(){
        this.orderId = this.$route.params.orderId;
        this.getOrder(this.orderId);
    }
}
</script>