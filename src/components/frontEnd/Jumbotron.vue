<template>
    <div class="jumbotron">
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner bg-banner">
                <div class="carousel-item active bg-banner-item-1" data-interval="10000"></div>
                <div class="carousel-item bg-banner-item-2" data-interval="2000"></div>
                <div class="carousel-item bg-banner-item-3"></div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.jumbotron{
        padding: 76px 0px 0px 0px;
        margin-bottom: 0;
        @media (max-width: 768px) {
            padding: 86px 0px 0px 0px;
        }
        .bg-banner{
            max-width:100%;
            // height:660px;
            height:600px;
            @media(max-width: 568px){
                height:350px;
            }
            @media(max-width: 320pxx){
                height:270px;
            }
        }
    }
    .bg-banner-item-1{
        background:url(https://images.unsplash.com/photo-1522056615691-da7b8106c665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80) no-repeat;
        background-position: center center;
        background-size:cover;
        width:100%;
        height:100%;
    } 
    .bg-banner-item-2{
        background:url(https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) no-repeat;
        background-position: center center;
        background-size:cover;
        width:100%;
        height:100%;
    } 
    .bg-banner-item-3{
        background:url(https://images.unsplash.com/photo-1517321579022-aa4d037c3b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) no-repeat;
        background-position: center center;
        background-size:cover;
        width:100%;
        height:100%;
    } 
</style>
