<template>
    <div class="jumbotron">
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner bg-banner">
                <div class="carousel-item active bg-banner-item" data-interval="10000"></div>
                <div class="carousel-item bg-banner-item" data-interval="2000"></div>
                <div class="carousel-item bg-banner-item"></div>
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
            height:485px;
            @media(max-width: 568px){
                height:285px;
            }
        }
    }
    .bg-banner-item{
        background:url(https://images.unsplash.com/photo-1473256599800-b48c7c88cd7e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae0d68ab0db4ee79bdce92722b31112b&auto=format&fit=crop&w=2725&q=80) no-repeat;
        background-position: center center;
        background-size:cover;
        width:100%;
        height:100%;
    } 
</style>
