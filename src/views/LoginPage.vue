<template>
    <div>
        <Alert/>
        <div class="dialog-content">   
            <h3 class="dialog-text">Welcome</h3>
            <label for="exampleInputEmail">Email address*</label>
            <input type="email" class="w-100" v-model="user.username" id="exampleInputEmail" placeholder="Enter email">          
            <label for="exampleInputPassword">Password*</label>
            <input type="password" class="w-100" v-model="user.password" id="exampleInputPassword" placeholder="Password">           
            <a href="#" class="dialog-btn" @click.prevent="signIn(user)" @keyup.enter="signIn(user)">Sign In</a>               
        </div>
    </div>
</template>
<script>
import Alert from '../components/Alert-message.vue';
import {mapActions, mapGetters} from 'vuex';
export default {
    components : { 
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