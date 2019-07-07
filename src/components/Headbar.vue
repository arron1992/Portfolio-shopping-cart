<template>
    <div>
        <nav>
            <div class="menu-img">
                <h1><router-link to="/home" class="menu-item">電商</router-link></h1>
            </div>
            <ul class="menu ml-auto">
                <li>
                    <router-link to="/home" class="menu-item">Home</router-link>
                </li> 
                <li>
                    <router-link to="/store/products" class="menu-item">Products</router-link>
                </li>   
                <li>
                    <router-link to="/admin" class="menu-item">Admin</router-link>
                </li>
                <li>
                    <router-link to="/login" class="menu-item">
                        Sign In
                    </router-link>
                </li>
                <li>
                    <Cart/>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Cart from './Cart'
export default {
    components:{
        Cart,
    },
    data(){
        return {}
    },
    methods:{

    }
}
</script>
