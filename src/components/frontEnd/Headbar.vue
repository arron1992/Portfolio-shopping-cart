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
                    <router-link to="/home" class="menu-item" active-class="active">Home</router-link>
                </li> 
                <li>
                    <router-link to="/store/products" class="menu-item" active-class="active">Products</router-link>
                </li>   
                <li>
                    <router-link to="/login" class="menu-item">
                        Sign In
                    </router-link>
                </li>
                <li>
                    <router-link to="/admin" class="menu-item" active-class="active">Admin</router-link>
                </li>
            </ul>          
            <Cart></Cart>
        </nav>
    </div>
</template>

<script>
import Cart from './Cart';
import $ from 'jquery';
import {mapActions, mapGetters} from 'vuex';
export default {
    components:{
        Cart,
    },
    data(){
        return {}
    },
    methods:{
    },
    computed:{
        ...mapGetters(["signIn"]),
    }
}
</script>
