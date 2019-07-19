(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3eba1f4"],{1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-area"},[a("ul",{staticClass:"page-list"},[a("li",[a("a",{staticClass:"page-item",class:{noHover:!t.pageData.has_pre},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.sentDataMethod(t.page=t.pageData.current_page-1)}}},[t._v("«")])]),a("li",t._l(t.pageData.total_pages,function(e){return a("a",{key:e,staticClass:"page-item",class:{active:t.pageData.current_page===e},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.sentDataMethod(e)}}},[t._v(t._s(e))])}),0),a("li",[a("a",{staticClass:"page-item",class:{noHover:!t.pageData.has_next},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.sentDataMethod(t.page=t.pageData.current_page+1)}}},[t._v("»")])])])])},s=[],o={props:{pageData:{type:Object}},data:function(){return{}},methods:{sentDataMethod:function(t){this.$emit("bondMethod",t)}}},r=o,c=(a("5eaf"),a("2877")),n=Object(c["a"])(r,i,s,!1,null,null,null);e["a"]=n.exports},"5eaf":function(t,e,a){"use strict";var i=a("d2f7"),s=a.n(i);s.a},"8bd8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("Alert"),a("div",{staticClass:"row m-0"},[a("a",{staticClass:"add-product-btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openModal(!0)}}},[t._v("Add New Product\n            "),a("i",{staticClass:"fas fa-plus"})]),a("div",{staticClass:"col-12 products-table"},[a("table",{staticClass:"table table-hover table-bordered"},[t._m(0),a("tbody",{staticClass:"ad-product-tbody"},t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"ad-product-img img-thumbnail",style:{backgroundImage:"url("+e.image+")"}}),a("span",[t._v(t._s(e.title))])]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",{staticClass:"align-middle"},[e.is_enabled?a("span",{staticClass:"able"},[t._v("Published")]):a("span",{staticClass:"unable"},[t._v("Unublished")])]),a("td",{staticClass:"align-middle"},[a("a",{staticClass:"edit-btn",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.openModal(!1,e)}}},[t._v("Edit")]),a("a",{staticClass:"remove-btn",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeProduct(e.id)}}},[t._v("Remove")])])])}),0)])])]),a("Pagination",{attrs:{"page-data":t.pagination},on:{bondMethod:t.reLoadMethod}}),t.isHide?a("div",{staticClass:"ad-product-modal",on:{click:function(e){return e.target!==e.currentTarget?null:t.closeModal()}}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-head"},[a("p",{staticClass:"modal-text"},[t._v("Product Admin")]),a("span",{staticClass:"close-btn",on:{click:function(e){return t.closeModal()}}},[t._v("+")])]),a("div",{staticClass:"modal-body"},[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-sm-12 img-area"},[a("div",{staticClass:"file-upload-wrapper",attrs:{"data-text":"Select your file..."}},[a("input",{ref:"files",staticClass:"file-upload-field",attrs:{name:"file-upload-field",type:"file"},on:{change:t.uploadFile}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.image,expression:"tempProduct.image"}],staticClass:"item-img-txt",attrs:{type:"text",name:"item-img-txt",id:"item-img-txt",placeholder:"Input you website"},domProps:{value:t.tempProduct.image},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"image",e.target.value)}}}),a("div",{staticClass:"item-img-bg",style:{backgroundImage:"url("+t.tempProduct.image+")"}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"description",attrs:{name:"description",id:"description",cols:"30",rows:"4",placeholder:"Image Description"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"col-md-6 col-sm-12 set-area"},[a("div",{staticClass:"info-group mb-2"},[a("label",{attrs:{for:"title"}},[t._v("Product Content")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],attrs:{type:"text",name:"title",id:"title",placeholder:"Item name"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"textarea",attrs:{name:"content",id:"content",cols:"30",rows:"4",placeholder:"Write somthing about your content?"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("span",{staticClass:"info-group"},[t._v("Price")]),a("div",{staticClass:"input-group mb-3"},[a("div",{staticClass:"input-group-prepend w-100"},[a("span",{staticClass:"input-group-text"},[t._v("Original")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"input-group-prepend w-100 mt-3"},[a("span",{staticClass:"input-group-text"},[t._v("Discount")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("span",{staticClass:"info-group mt-2"},[t._v("Specification")]),a("div",{staticClass:"input-group mb-2"},[a("div",{staticClass:"input-group-prepend w-100"},[a("span",{staticClass:"input-group-text"},[t._v("Category")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"input-group-prepend w-100 mt-3"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("Unit")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-group form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,i=e.target,s=i.checked?1:0;if(Array.isArray(a)){var o=null,r=t._i(a,o);i.checked?r<0&&t.$set(t.tempProduct,"is_enabled",a.concat([o])):r>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("Is enabled?")])]),a("button",{staticClass:"btn confirm-btn",attrs:{type:"submit",value:"Upload"},on:{click:function(e){e.preventDefault(),t.updateProduct(t.tempProduct.id),t.closeModal()}}},[t._v("Submit")])])])])])])]):t._e()],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"ad-product-thead"},[a("th",[t._v("Product")]),a("th",[t._v("Original")]),a("th",[t._v("Discount")]),a("th",[t._v("Status")]),a("th",[t._v("Edit")])])}],o=a("cebc"),r=a("1799"),c=a("abaf"),n=a("2f62"),d={components:{Pagination:r["a"],Alert:c["a"]},data:function(){return{tempProduct:{},isNew:!1,isHide:!1}},methods:Object(o["a"])({openModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=this.tempProduct=Object.assign({},e),this.isNew=!1),this.isHide=!0},closeModal:function(){this.isHide=!1},updateProduct:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("portfolio-shopping-cart","/admin/product"),a="post";t.isNew||(e="".concat("https://vue-course-api.hexschool.io","/api/").concat("portfolio-shopping-cart","/admin/product/").concat(t.tempProduct.id),a="put"),t.$http[a](e,{data:t.tempProduct}).then(function(e){t.getProducts()})},uploadFile:function(){var t=this,e=t.$refs.files.files[0],a=new FormData;a.append("file-upload",e);var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("portfolio-shopping-cart","/admin/upload");t.$http.post(i,a,{headers:{"Content-type":"multipart/form-data"}}).then(function(e){console.log(e),t.$set(t.tempProduct,"image",e.data.imageUrl);var a=Math.floor(new Date/1e3),i={id:a,res:e.data};t.$store.commit("adProductsModules/UPLOADFILE",i),t.$store.dispatch("adProductsModules/removeMessageWithTiming",a)})},reLoadMethod:function(t){this.getProducts(t)}},Object(n["b"])("adProductsModules",["getProducts","removeProduct"])),computed:Object(o["a"])({},Object(n["c"])(["isLoading"]),Object(n["c"])("adProductsModules",["products","pagination"])),created:function(){this.getProducts()}},l=d,u=a("2877"),p=Object(u["a"])(l,i,s,!1,null,null,null);e["default"]=p.exports},d2f7:function(t,e,a){}}]);
//# sourceMappingURL=chunk-a3eba1f4.9e45d927.js.map