<template>
    <div>
        <section class="row justify-content-center">
            <div class="col-6">
                <div class="checkout-step d-flex">
                    <div class="step-box-1">
                        <span class="step-num">1</span>
                        <span class="step-text">確認訂單資料</span>
                    </div>
                    <div class="step-box-2">
                        <span class="step-num">2</span>
                        <span class="step-text">付款確認</span>
                    </div>
                    <div class="step-box-3">
                        <span class="step-num step-now">3</span>
                        <span class="step-text">結帳完成</span>
                    </div>
                </div>
            </div>
        </section>
        <div class="bg-done my-4">
            <span class="success-txt">付款成功</span>
            <!-- <div class="success-box">繼續逛逛</div> -->
            <router-link to="/store/products" class="success-box">繼續逛逛</router-link>
        </div>
    </div>
</template>