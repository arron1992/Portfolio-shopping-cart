<template>
    <div>
        <nav class="admin-nav">
            <input type="checkbox" class="menu-btn-checkbox">
            <a href="#" class="admin-show-menu">
                <i class="fas fa-bars fa-2x"></i>
            </a>
            <router-link to="/home" class="nav-link">Moluccess</router-link>
            <ul class="admin-menu">
                <li><router-link to="/admin" class="nav-item ml-auto">Products</router-link></li>
                <li><router-link to="/admin/coupons" class="nav-item" >Coupons</router-link></li>
                <li><router-link to="/admin/orders" class="nav-item">Orders</router-link></li>
            </ul>
            <a class="sign-out" @click="signOut()">Sign out</a>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        signOut(){
            const vm = this;
            const api =`${process.env.VUE_APP_APIPATH}/logout`
            vm.$http.post(api).then((response) =>{
                    vm.$router.push('/store/products')            
            })
        }
    }
}
</script>