<template>
    <div>
        <div class="login" id="loginModal" @click.self="closeModal()">
            <div class="login-box">
                <span class="close-btn"  @click="closeModal()">&times;</span>
                <div class="login-content">   
                    <h3 class="login-text">會員登入</h3>
                    <label for="exampleInputEmail"></label>
                    <input type="email" class="w-100" v-model="user.username" id="exampleInputEmail" placeholder="Enter email">          
                    <label for="exampleInputPassword"></label>
                    <input type="password" class="w-100" v-model="user.password" id="exampleInputPassword" placeholder="Password">           
                    <button class="btn btn-info w-100 my-3 p-2" @click.prevent="signIn()" @keyup.enter="signIn()">Sign In</button>                
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
import {mapActions, mapGetters} from 'vuex';
export default {
    data(){
        return{
            user:{
                username: '',
                password: '' 
            },
        }
    },
    methods:{
        openModal(){
            $('#signinModal').css('display','block');
        },
        closeModal(){
            $('#signinModal').css('display','none'); 
        },     
        signIn(){
            const vm = this;
            const api =`${process.env.VUE_APP_APIPATH}/admin/signin`

            vm.$http.post(api, vm.user).then((response) =>{
                console.log(response.data)
                if(response.data.success){
                    vm.closeModal();              
                } else {
                    console.log('登入失敗')
                    vm.closeModal(); 
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
