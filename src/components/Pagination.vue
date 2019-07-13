<template>
    <div class="page-area">
        <ul class="page-list">
            <li><a href="#" class="page-item" :class="{'noHover': !pageData.has_pre}"
            @click.prevent="sentDataMethod(page = pageData.current_page - 1)">&laquo;</a></li>

            <li><a href="#" class="page-item" 
                :class="{'active': pageData.current_page === page}"
                @click.prevent="sentDataMethod(page)"
                v-for="page in pageData.total_pages" :key="page"
            >{{page}}</a></li>

            <li>
                <a href="#" class="page-item" :class="{'noHover': !pageData.has_next}"
                @click.prevent="sentDataMethod(page = pageData.current_page + 1)">&raquo;</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        pageData:{
            type : Object
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        sentDataMethod(page){
            //將 v-for 出來的 page (即頁碼) 傳給使用元件的那端
            this.$emit('bondMethod', page)
        }
    }
}
</script>
<style lang="scss">
.page-area{
    margin:35px auto 25px auto;
    ul{
        padding: 0 10px;
        @media(max-width: 568px){
            padding:0px
        }
    }
    .page-list{
        list-style: none;
        display: inline-flex;
        text-align: center;
        margin: 30px 0px;
        display: flex;
        justify-content: center;
        @media(max-width: 320px){
            padding:0px 3px;
        }
        .page-item{
            padding:15px;
            margin-right:1px;
            background-color: #fff;
            border :1px solid #9B9B9B;
            color: #333;
            font-size: 20px;
            text-decoration: none;
            @media(max-width: 568px){
                padding: 7px;
                font-size: 18px;
            }
            &:hover{
                background-color: #333;
                color:#fff;
                cursor: pointer;
            }           
            &.active{
                background-color: #333;
                color:#fff;
                transition: 0.3s all;
                cursor: pointer;  
            }
            &.noHover{
                pointer-events: none;
            }    
        }
    }
}

</style>