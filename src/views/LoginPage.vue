<template>
    <div>
        <Headbar/>
        <Alert/>
        <div class="dialog-content">   
            <h3 class="dialog-text">會員登入</h3>
            <label for="exampleInputEmail"></label>
            <input type="email" class="w-100" v-model="user.username" id="exampleInputEmail" placeholder="Enter email">          
            <label for="exampleInputPassword"></label>
            <input type="password" class="w-100" v-model="user.password" id="exampleInputPassword" placeholder="Password">           
            <a href="#" class="dialog-btn" @click.prevent="signIn(user)" @keyup.enter="signIn(user)">Sign In</a>               
        </div>
        <Footbar/>
    </div>
</template>
<script>
import Headbar from '../components/Headbar.vue';
import Footbar from '../components/Footbar.vue';
import Alert from '../components/Alert-message.vue';
import {mapActions, mapGetters} from 'vuex';
export default {
    components : { 
        Headbar,
        Footbar,
        Alert
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
        ...mapActions(['signIn']),
    },
    computed:{
        ...mapGetters(['isLoading']),
    },
    created(){

    }
}
</script>