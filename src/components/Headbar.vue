<template>
    <div>
        <div class="nav-bar">
            <h1><a href="#">甜心電商</a></h1>
            <ul class="topmenu ml-auto">   
                <li>
                    <router-link to="/store" class="topmenu-item">產品</router-link>
                </li>
                <li>
                    <router-link to="/login" class="topmenu-item">登入</router-link>
                </li>
                <li>
                    <router-link to="" class="topmenu-item">
                        <span class="cart-num badge badge-info">1</span>
                        <i class="fas fa-shopping-cart fa-1x"></i>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
