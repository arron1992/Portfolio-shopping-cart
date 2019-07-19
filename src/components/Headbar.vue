<template>
    <div>
        <nav>
            <input type="checkbox" class="menu-button-checkbox">
            <a href="#" class="show-menu">
                <i class="fas fa-bars fa-2x"></i>
            </a>
            <div class="menu-img">
                <h1><router-link to="/home" class="menu-item">電商</router-link></h1>
            </div>
            <ul class="menu">
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
            </ul>          
            <Cart></Cart>
        </nav>
    </div>
</template>

<script>
import Cart from './Cart';
import $ from 'jquery';
export default {
    components:{
        Cart,
    },
    data(){
        return {}
    },
    methods:{
    },

}
</script>
