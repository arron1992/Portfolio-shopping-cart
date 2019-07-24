<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <Alert></Alert>

        <!-- Table Area-->
        <div class="products-group">
            <a href="#" class="add-product-btn" @click.prevent="openModal(true)">Add New Product
                <i class="fas fa-plus"></i>
            </a>  

            <div class="products-table">
                <table class="table table-hover table-bordered">
                    <thead class="ad-product-thead">
                        <th>Product</th>
                        <th>Original</th>
                        <th>Discount</th>
                        <th>Status</th>
                        <th>Edit</th>
                    </thead>
                    <tbody class="ad-product-tbody">
                        <tr v-for="item in products" :key="item.id">
                            <td class="d-flex align-items-center">
                                <div :style="{backgroundImage:`url(${item.image})`}" class="ad-product-img img-thumbnail"></div>
                                <span>{{item.title}}</span>
                            </td>
                            <td class="align-middle text-right">{{item.origin_price | currency}}</td>
                            <td class="align-middle text-right">{{item.price | currency}}</td>
                            <td class="align-middle">
                                <span class="able" v-if="item.is_enabled">Published</span>
                                <span class="unable" v-else>Unublished</span>
                            </td>
                            <td class="align-middle">
                                <a href="#" class="edit-btn" @click.prevent="openModal(false, item)">Edit</a>
                                <a href="#" class="remove-btn" @click.prevent="removeProduct(item.id)">Remove</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>

        <!-- pagination -->       
        <Pagination :page-data="pagination" v-on:bondMethod="reLoadMethod"></Pagination>      

        <!-- Product Modal -->
        <div class="ad-product-modal" v-if="isHide" @click.self="closeModal()">
            <div class="modal-content">
                <div class="modal-head">
                    <p class="modal-text">Product Admin</p>
                    <span class="close-btn" @click="closeModal()">+</span>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="">
                        <div class="row">
                            <!-- Image Area-->
                            <div class="col-md-6 col-sm-12 img-area">
                                <div class="file-upload-wrapper" data-text="Select your file...">
                                    <input name="file-upload-field" ref="files" type="file" class="file-upload-field"
                                    @change="uploadFile">
                                </div>
                                    
                                <input type="text" name="item-img-txt" id="item-img-txt" class="item-img-txt"
                                v-model="tempProduct.image" placeholder="Input you website">
                                    
                                <div class="item-img-bg" :style="{backgroundImage: `url(${tempProduct.image})`}"></div>
                                <textarea name="description" id="description" cols="30" rows="4" class="description"
                                v-model="tempProduct.description" placeholder="Image Description"></textarea>
                            </div>

                            <!-- Set Area-->
                            <div class="col-md-6 col-sm-12 set-area">
                                <div class="info-group mb-2">
                                    <label for="title">Product Content</label>
                                    <input type="text" name="title" id="title" 
                                    v-model="tempProduct.title" placeholder="Item name">  
                                    <textarea name="content" id="content" cols="30" rows="4" class="textarea"
                                    v-model="tempProduct.content" placeholder="Write somthing about your content?"></textarea>
                                </div>
                                <span class="info-group">Price</span>
                                <div class="input-group mb-3">                
                                    <div class="input-group-prepend w-100">
                                        <span class="input-group-text">Original</span>
                                        <input type="text" class="form-control" v-model="tempProduct.origin_price">
                                    </div>
                                    <div class="input-group-prepend w-100 mt-3">
                                        <span class="input-group-text">Discount</span>
                                        <input type="text" class="form-control" v-model="tempProduct.price">
                                    </div>
                                </div>

                                <span class="info-group mt-2">Specification</span>
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend w-100">
                                        <span class="input-group-text">Category</span>
                                        <input type="text" class="form-control" v-model="tempProduct.category">
                                    </div>
                                        <div class="input-group-prepend w-100 mt-3">
                                            <span class="input-group-text" id="basic-addon1">Unit</span>
                                            <input type="text" class="form-control" v-model="tempProduct.unit">
                                        </div>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" 
                                    v-model="tempProduct.is_enabled"
                                        :true-value="1"
                                        :false-value="0"
                                        class="form-check-input" id="is_enabled">
                                        <label class="form-check-label" for="is_enabled">Is enabled?</label>
                                </div>
                                <button type="submit" value="Upload" class="btn confirm-btn" @click.prevent="updateProduct(tempProduct.id), closeModal()">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Pagination from './Pagination';
import Alert from '../mutual/Alert-message.vue';
import {mapActions, mapGetters} from 'vuex';
export default {
    components:{
        Pagination,
        Alert
    },
    data(){
        return{
            tempProduct:{},
            isNew : false,
            isHide: false,
        }
    },
    methods:{
        openModal(isNew , item){
            if(isNew){
                this.tempProduct = {}
                this.isNew = true;
            } else {
                this.tempProduct = this.tempProduct = Object.assign({}, item);
                this.isNew = false;
            }
            this.isHide = true;
        },
        closeModal(){
            this.isHide = false;
        },
        updateProduct(){
            const vm = this;
            let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/product`;
            let methods = 'post';
            if(!vm.isNew){
                api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/product/${vm.tempProduct.id}`; 
                methods = 'put';
            }    
            vm.$http[methods](api, {data: vm.tempProduct}).then((res) => {
                vm.getProducts();
            })
        },
        uploadFile(){
            // 01. 查看 this => console.log(this)
            // 02. 找出 upload 的 img
            // 03. 使用 formdata 模擬表單傳送
            // 04. 上傳 formdata

            const vm = this;
            const img = vm.$refs.files.files[0];
            
            const formData = new FormData;
            formData.append('file-upload', img);            
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMERPATH}/admin/upload`
            vm.$http.post(api,formData,{
                headers : {
                    'Content-type' : 'multipart/form-data'
                }      
            }).then((res)=>{
                // vm.tempProduct.image = res.data.imageUrl; => 因為資料結構一開始沒設定好, 所以用 $set 強制綁定確保雙向綁定
                vm.$set(vm.tempProduct, 'image', res.data.imageUrl);

                const id = Math.floor(new Date() / 1000);
                const imgObj = {
                    id : id,
                    res : res.data
                }
                vm.$store.commit('adProductsModules/UPLOADFILE', imgObj);
                vm.$store.dispatch('adProductsModules/removeMessageWithTiming', id);
            })
        },
        reLoadMethod(page){
            //接收 Pagination.vue 傳來的 page , 重新渲染頁面
            this.getProducts(page);
        },
        ...mapActions("adProductsModules",["getProducts","removeProduct",])
    },
    computed:{
        ...mapGetters(["isLoading"]),
        ...mapGetters("adProductsModules",["products","pagination"])
    },
    created(){
        this.getProducts();
    }
}
</script>