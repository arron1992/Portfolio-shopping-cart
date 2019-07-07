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
        bottom:0;
        right:0;
        bottom: 50px;
        right: 30px;
        z-index: 999;
        text-decoration: none;
        a{
            color : #fff;
            padding: 5px 10px;
            font-size: 24px;
            background-color: #ff6666;
            &:hover{
                color : #000;
            }
        }
        &:hover{
            cursor: pointer;;
        }
    }   
</style>