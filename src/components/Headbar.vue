<template>
    <div>
        <div class="nav-bar">
            <h1><a href="#">甜心電商</a></h1>
            <ul class="topmenu ml-auto">   
                <li>
                    <router-link to="/store/products" class="topmenu-item">產品</router-link>
                </li>
                <li>
                    <router-link to="/login" class="topmenu-item">登入</router-link>
                </li>
                <li>
                    <Cart/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Cart from './Cart'
export default {
    components:{
        Cart,
    },
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
