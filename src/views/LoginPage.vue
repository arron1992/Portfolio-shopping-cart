<template>
    <div>
        <Headbar/>
        <div class="dialog-content">   
            <h3 class="dialog-text">會員登入</h3>
            <label for="exampleInputEmail"></label>
            <input type="email" class="w-100" v-model="user.username" id="exampleInputEmail" placeholder="Enter email">          
            <label for="exampleInputPassword"></label>
            <input type="password" class="w-100" v-model="user.password" id="exampleInputPassword" placeholder="Password">           
            <!-- <button class="btn btn-info w-100 my-3 p-2" @click.prevent="signIn()" @keyup.enter="signIn()">Sign In</button>  -->
            <a href="#" class="dialog-btn" @click.prevent="signIn()">Sign In</a>               
        </div>
        <Footbar/>
    </div>
</template>
<script>
import Headbar from '../components/Headbar.vue';
import Footbar from '../components/Footbar.vue';
import $ from 'jquery';
import {mapActions, mapGetters} from 'vuex';
export default {
    components : { 
        Headbar,
        Footbar,
    },
    data(){
        return{
            user:{
                username: '',
                password: '' 
            },
        }
    },
    methods:{  
        signIn(){
            const vm = this;
            const api =`${process.env.VUE_APP_APIPATH}/admin/signin`

            vm.$http.post(api, vm.user).then((response) =>{
                console.log(response.data)
                if(response.data.success){
                    vm.$router.push('/store/products')            
                } else {
                    console.log('登入失敗')
                }
            })
        }
    },
    computed:{
        ...mapGetters(['isLoading']),
    },
    created(){

    }
}
</script>