<template>
    <div>
        <div class="top" @click.prevent="goTop()">
        <a href="#"><i class="fa fa-chevron-up"></i></a>
    </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data(){
        return{}
    },
    methods:{
        goTop(){
            $('.top a').click(function(event){
                $('html, body').animate({
                    scrollTop: 0
                },700)
            });
        },
    },
}
</script>
<style lang="scss">
    .top{
        position: fixed;
        right:0;
        bottom: 50px;
        right: 30px;
        z-index: 999;
        text-decoration: none;
        @media (max-width: 568px) { 
            right:20px;
            bottom: 20px;
        }
        a{
            color : #fff;
            padding: 5px 10px;
            font-size: 24px;
            background-color: #ff6666;
            &:hover{
                color : #000;
            }
            @media (max-width: 568px) { 
                padding: 5px 10px;
                font-size: 16px;
            }
        }
        &:hover{
            cursor: pointer;;
        }
    }   
</style>