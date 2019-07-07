<template>
    <div class="order">
        <Loading :active.sync="isLoading"></Loading>
        <div v-if="order.id">
            <div class="row d-flex justify-content-center mt-3">
                <div class="col-11">
                    <!-- <i class="fas fa-file-invoice-dollar mr-2"></i>
                    <span class="h6 my-2 d-inline-block h6">Product Details</span> -->
                    <table class="table table-striped table-light shadow-sm">
                        <thead>
                            <tr>
                                <th colspan="2">
                                    <i class="fas fa-file-invoice-dollar mr-2"></i>Product Details
                                </th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody class="font-weight-bold">
                            <tr v-for="item in order.products" :key="item.id">
                                <td class="order-table-img align-middle m-2" :style="{backgroundImage:`url(${item.product.image})`}"></td>
                                <td class="align-middle">{{item.product.title}}</td>
                                <td clas="align-middle text-dark text-center">
                                    X {{item.qty}}
                                </td>
                                <td class="text-right align-middle">{{item.product.price | currency}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-end align-items-baseline">
                        <span class="pr-3 h6">Final Total</span>
                        <span class="h4">{{order.total | currency}}</span>
                    </div>
                </div>
            </div>
            <br/>

            <div class="row d-flex justify-content-center text-secondary ">
                <div class="col-11">
                    <table class="table table-striped table-light shadow-sm">
                        <thead>
                            <tr>
                                <th colspan="2">
                                    <i class="fas fa-file-invoice-dollar mr-1"></i>
                                    Personal Info
                                </th>
                            </tr>
                        </thead>
                        <tbody class="font-weight-bold">
                            <tr>
                                <td class="text-dark ">Name</td>
                                <td>{{order.user.name}}</td>
                            </tr>
                            <tr>
                                <td class="text-dark">Phone</td>
                                <td>{{order.user.tel}}</td>
                            </tr>
                            <tr>
                                <td class="text-dark">Email</td>
                                <td>{{order.user.email}}</td>
                            </tr>
                            <tr>
                                <td class="text-dark">Address</td>
                                <td>{{order.user.address}}</td>
                            </tr>
                            <tr>
                                <td class="text-dark">Paid Status</td>
                                <td v-if="!order.is_paid" class="text-danger">Paid yet</td>
                                <td v-else class="text-success">Success</td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn pay-order" v-if="!order.is_paid" @click="payOrder(orderId)">Check Out</button>
                    <router-link to="/store/products" v-if="order.is_paid" class="payed">Keep Shopping!</router-link>
                </div>
            </div>
        </div>
        <br/>    
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data(){
        return {
            orderId : 0,
        }
    },
    methods:{
        ...mapActions('orderModules',['getOrder','payOrder']),
    },
    computed:{
        ...mapGetters(['isLoading']),
        ...mapGetters('orderModules',['order']),
    },
    created(){
        this.orderId = this.$route.params.orderId;
        this.getOrder(this.orderId);
    }
}
</script>