(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c42e1"],{"3a74":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row m-0"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("Alert"),a("div",{staticClass:"product-group"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-sm-12 product-img-group"},[a("router-link",{staticClass:"page-back mb-1 mt-0",attrs:{to:"/store/products"}},[a("i",{staticClass:"fas fa-chevron-left mr-2"}),t._v("Back to Products\n                ")]),a("div",{staticClass:"product-img",style:{backgroundImage:"url("+t.item.image+")"}})],1),a("div",{staticClass:"col-md-6 col-sm-12 product-txt-group"},[a("h3",{staticClass:"product-title"},[t._v(t._s(t.item.title))]),a("p",{staticClass:"product-content"},[t._v(t._s(t.item.content))]),a("div",{staticClass:"d-flex"},[a("h5",[a("span",{staticClass:"badge badge-pill badge-color mr-2"},[t._v("#"+t._s(t.item.category))])]),a("h5",[t.item.price?a("span",{staticClass:"badge badge-pill badge-color"},[t._v("#On Sale")]):t._e()])])]),a("div",{staticClass:"col-md-3 col-sm-12 product-btn-group"},[a("span",{staticClass:"price"},[t._v(t._s(t._f("currency")(t.item.price)))]),a("div",{staticClass:"qty-group"},[a("p",[t._v("QUANTITY:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.qtys,expression:"qtys"}],staticClass:"select",attrs:{name:"qty",id:"qty"},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){var s="_value"in t?t._value:t.value;return s});t.qtys=s.target.multiple?a:a[0]}}},t._l(10,function(s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(s))])}),0)]),a("button",{staticClass:"addTocart",attrs:{type:"submit",name:"submit"},on:{click:function(s){return s.preventDefault(),t.addToCart(t.itemId,t.qtys)}}},[a("span",[t._v("Add To Cart")])])])]),a("div",{staticClass:"description"},[a("div",{staticClass:"des-area"},[a("span",{staticClass:"des-span"},[t._v("DESCRIPTION")]),a("p",[t._v(t._s(t.item.description))])])])])],1)},i=[],c=a("cebc"),o=a("2f62"),r=a("fb25"),d={components:{Alert:r["a"]},data:function(){return{itemId:"",qtys:1}},methods:Object(c["a"])({addToCart:function(t,s){this.$store.dispatch("cartModules/addToCart",{id:t,qty:s})}},Object(o["b"])("productModules",["getItem"])),computed:Object(c["a"])({},Object(o["c"])(["isLoading"]),Object(o["c"])("productModules",["item"])),created:function(){this.itemId=this.$route.params.itemId,this.getItem(this.itemId)}},n=d,l=a("2877"),u=Object(l["a"])(n,e,i,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c42e1.3e981ef6.js.map