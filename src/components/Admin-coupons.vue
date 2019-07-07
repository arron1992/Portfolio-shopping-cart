<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="ad-coupon">
            <div class="d-flex justify-content-end">
                <a href="#" class="add-coupon-btn" @click.prevent="openModal(true)">Add New Coupon
                    <i class="fas fa-plus"></i>
                </a>                     
            </div>
        </div>

        <!-- Table Area-->
        <div class="row">
            <div class="col-12 mt-3">
                <table class="table table-hover table-bordered">
                    <thead class="ad-coupon-thead">
                        <th width="250">Coupon Name</th>
                        <th width="200">Coupon Code</th>
                        <th width="200">Discount Percent</th>
                        <th width="200">Expiration date</th>
                        <th width="">Is Enabled?</th>
                        <th width="">Edit</th>
                    </thead>
                    <tbody class="ad-coupon-tbody">
                        <tr v-for="item in coupons" :key="item.id">
                            <td class="align-middle">{{item.title}}</td>
                            <td class="align-middle">{{item.code}}</td>
                            <td class="align-middle">{{item.percent}} %</td>
                            <td class="align-middle">{{item.due_date}}</td>
                            <td class="align-middle">
                                <span class="able" v-if="item.is_enabled">Enabled</span>
                                <span class="unable" v-else>Unabled</span>
                            </td>
                            <td class="align-middle">
                                <a href="#" class="edit-btn" @click.prevent="openModal(false, item)">Edit</a>
                                <a href="#" class="remove-btn" @click.prevent="removeCoupon(item.id)">Remove</a>
                            </td>                         
                        </tr>
                    </tbody>
                </table>
            </div> 
            
            <!-- Coupon Modal-->
            <div class="ad-coupon-modal" v-if="isHide" @click.self="closeModal()">
                
            <div class="modal-content">
                <div class="modal-head">
                    <p class="modal-text">Coupon Admin</p>
                    <span class="close-btn" @click="closeModal()">+</span>
                </div>
                <form>
                    <div class="modal-body row">
                        <div class="col-12 p-0">
                            <label for="title">coupon title</label>
                            <input type="text" v-model="tempCoupon.title" name="title" id="title" class="coupon-title" placeholder="Plz input your coupon title">
                            
                            <label for="code">discount code</label>
                            <input type="text" v-model="tempCoupon.code" name="code" id="code" placeholder="Plz input your coupon code">
                            
                            <label for="discount">discount percent</label>
                            <input type="number" v-model="tempCoupon.percent"  name="discount" id="discount" placeholder="Plz input your coupon discount">
                            
                            <label for="date">Due date</label>
                            <input type="date" v-model="tempCoupon.due_date" name="date" id="datetime">
                        
                            <label for="check" class="d-block">Is Enabled?</label>
                            <input type="checkbox" v-model="tempCoupon.is_enabled" 
                            :true-value="1" :false-value="0" name="check" id="check" value="check">
                        </div>                              
                        <button type="submit" value="Upload" class="btn confirm-btn" @click.prevent="updateCoupon(), closeModal()">Submit</button>
                    </div>
                </form>
            </div> 
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
        return {
            tempCoupon:{
                title : '',
                code : '',
                percent: 0,
                is_enabled: 0,
                due_date: 0,
            },
            isNew : false,
            isHide : false,
        }
    },
    methods:{
        openModal(isNew , item){
            if(isNew){
                this.tempCoupon = {}
                this.isNew = true
            } else {
                this.tempCoupon = Object.assign({}, item)
                this.isNew = false
            }
            this.isHide = true;
        },
        closeModal(){
            this.isHide = false;
        },
        updateCoupon(){
            const vm = this;
            let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/coupon`
            let methods = 'post';

            if(!vm.isNew){
                api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/coupon/${vm.tempCoupon.id}` 
                methods = 'put';
            }    
            vm.$http[methods](api, {data: vm.tempCoupon}).then((res) => {
                console.log(vm.tempCoupon);
                vm.getCoupons();
            })
        },
        reLoadMethod(page){
            // 接收 Pagination.vue 傳來的 page , 重新渲染頁面
            this.getCoupons(page);
        },
        ...mapActions("adCouponsModules",["getCoupons","removeCoupon"]),
    },
    computed:{
        ...mapGetters(["isLoading"]),
        ...mapGetters("adCouponsModules",["coupons","pagination"]),
    },
    created(){
        this.getCoupons()
    }
}
</script>