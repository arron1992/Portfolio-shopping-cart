<template>
    <div class="d-block w-100">
        <ul class="page-area my-5 d-flex justify-content-end">
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
        list-style: none;
        display: inline-flex;
        text-align: center;
        padding: 0 15px;
        .page-item{
            padding:15px;
            margin-right:1px;
            background-color: #fff;
            border :1px solid #9B9B9B;
            color: #000;
            font-size: 18px;
            text-decoration: none;
            &:hover{
                background-color: #000;
                color:#fff;
                cursor: pointer;
            }           
            &.active{
                background-color: #000;
                color:#fff;
                transition: 0.3s all;
                cursor: pointer;  
            }
            &.noHover{
                pointer-events: none;
            }    
        }
    }
</style>