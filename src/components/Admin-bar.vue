<template>
    <div>
        <nav>
            <router-link to="/store/products" class="nav-item">Moluccess</router-link>
            <router-link to="/admin/" class="nav-item">訂單</router-link>
            <router-link to="/admin/coupons" class="nav-item">優惠券</router-link>
            <router-link to="/admin/products" class="nav-item">產品</router-link>
            <span class="nav-item sign-out" @click="signOut()">登出</span>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods:{
        signOut(){
            console.log("hi")
            const vm = this;
            const api =`${process.env.VUE_APP_APIPATH}/logout`
            vm.$http.post(api).then((response) =>{
                console.log(response.data)
                if(response.data.success){
                    vm.$router.push('/store/products')            
                } else {
                    console.log('登出失敗')
                }
            })
        }
    }
}
</script>