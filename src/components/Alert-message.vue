<template>
    <div class="alert">
        <!-- message for addToCart -->
        <div class="message-box" v-for="(item,i) in cartInfo" :key="i">
            <span class="message-title">系統提示</span>
            <span class="message-x" @click.prevent="removeCartInfo(i)">+</span>
            <div class="message-content" :class="'alert-' + item.status">
                <div class="success-txt my-2">
                    您已新增商品: <strong class="text-info">{{item.title}}</strong>
                    <span class="text-info">({{item.qty}}{{item.unit}})</span> 到您的購物車!
                </div>
            </div>
        </div>
        
        <!-- message for signIn  -->
        <div class="sign-message-box"  v-for="(item,i) in signIn" :key="i">
            <span class="sign-message-x" @click.prevent="removeSignIn(i)">+</span>
            <div class="sign-message-content" :class="'alert-' + item.status">
                <strong>{{item.message}}</strong>
            </div>
        </div>

        <!-- message for adminProduct  -->
        <div class="upload-message-box"  v-for="(item,i) in uploadFile" :key="i">
            <span class="upload-message-x" @click.prevent="removeUploadFile(i)">+</span>
            <div class="upload-message-content" :class="'alert-' + item.status">
                <strong v-if="item.status">圖片新增成功</strong>
                <strong v-if="!item.status">{{item.messages}}</strong>
            </div>
        </div>

    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return{}
    },
    methods:{
        removeCartInfo(num){
            this.cartInfo.splice(num, 1);
        },
        removeSignIn(num){
            this.signIn.splice(num, 1);
        },
        removeUploadFile(num){
            this.uploadFile.splice(num, 1);
        },
    },
    computed:{
        ...mapGetters('cartModules',['cart','cartInfo']),
        ...mapGetters(['signIn']),
        ...mapGetters('adProductsModules',['uploadFile'])
    }
}
</script>
<style lang="scss" scoped>
    .alert{
        padding: 0; 
        margin-bottom: 0;
        
        // for add to cart //
        .message-box{
        width:350px;
        position: fixed;
        z-index: 999999;
        right:75px;
        top:15px;
            .message-title{
            display: block;
            padding:8px;
            background:#000;
            color: #fff;
            font-size: 16px;
            letter-spacing: 2px;
            text-align: center;
            }
            .message-x{
                position: absolute;
                top:0;
                right:10px;
                cursor: pointer;
                color:#fff;
                transform: rotate(-45deg);
                font-size: 24px;
            }
            .message-content{
                padding:10px;
                font-size: 18px;    
            }
        }

        // for signin message //
        .sign-message-box{
            width:200px;
            position: fixed;
            z-index: 999999;
            right:75px;
            top:100px;
            .sign-message-x{
                position: absolute;
                top:0;
                right:10px;
                cursor: pointer;
                color:#000;
                transform: rotate(-45deg);
                font-size: 24px
            }
            .sign-message-content{
                padding:10px;
                font-size: 18px;  
                text-align: center
            }
        }

        // for uploadFile message //
        .upload-message-box{
            width:200px;
            position: fixed;
            z-index: 999999;
            right:75px;
            top:100px;
            .upload-message-x{
                position: absolute;
                top:0;
                right:10px;
                cursor: pointer;
                color:#000;
                transform: rotate(-45deg);
                font-size: 24px
            }
            .upload-message-content{
                padding:10px;
                font-size: 18px;  
                text-align: center
            }
        }

        // 共同
        .alert-true{
            background-color: #EAF0ED;
        }
        .alert-false{
            background-color: pink;            
        } 
    }
</style>