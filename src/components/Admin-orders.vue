<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <!-- Table Area-->
        <div class="row m-0">
            <div class="col-12 order-table p-0">
                <table class="table table-hover table-bordered">
                    <thead class="ad-order-thead">
                        <th >Purchase time</th>
                        <th >E-mail</th>
                        <th >Products</th>
                        <th >Order Bill</th>
                        <th >Status</th>
                    </thead>
                    <tbody class="ad-order-tbody">
                        <tr v-for="item in orders" :key="item.id">
                            <td class="align-middle">{{item.create_at | timestamp}}</td>
                            <td class="align-middle">{{item.user.email}}</td>
                            <td class="align-middle">
                                <ul class="table-ul">
                                    <li v-for="(product, i) in item.products" :key="i">
                                        {{ product.product.title }} 
                                    </li>
                                </ul>
                            </td>
                            <td class="align-middle text-right">{{item.total |　currency}}</td>
                            <td class="align-middle">
                                <div class="able" v-if="item.is_paid">Paid</div>
                                <div class="unable" v-else>Unpaid</div>
                            </td>                           
                        </tr>
                    </tbody>
                </table>
            </div> 

            <!-- pagination -->       
            <Pagination :page-data="pagination" v-on:bondMethod="reLoadMethod"></Pagination>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
import Pagination from './Pagination';
export default {
    components:{
        Pagination
    },
    data(){
        return {}
    },
    methods:{
        reLoadMethod(page){
            // 接收 Pagination.vue 傳來的 page , 重新渲染頁面
            this.getOrders(page);
        },
        ...mapActions("adOrdersModules",["getOrders"]),
    },
    computed:{
        ...mapGetters(["isLoading"]),
        ...mapGetters("adOrdersModules",["orders","pagination"]),
    },
    created(){
        this.getOrders()
    }
}
</script>