(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("adminBar"),n("router-view")],1)},e=[],i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("nav",{staticClass:"admin-nav"},[n("input",{staticClass:"menu-btn-checkbox",attrs:{type:"checkbox"}}),t._m(0),n("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[t._v("Moluccess")]),n("ul",{staticClass:"admin-menu"},[n("li",[n("router-link",{staticClass:"nav-item ml-auto",attrs:{to:"/admin"}},[t._v("Products")])],1),n("li",[n("router-link",{staticClass:"nav-item",attrs:{to:"/admin/coupons"}},[t._v("Coupons")])],1),n("li",[n("router-link",{staticClass:"nav-item",attrs:{to:"/admin/orders"}},[t._v("Orders")])],1)]),n("a",{staticClass:"sign-out",on:{click:function(s){return t.signOut()}}},[t._v("Sign out")])],1)])},o=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("a",{staticClass:"admin-show-menu",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-bars fa-2x"})])}],r={data:function(){return{}},methods:{signOut:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/logout");t.$http.post(s).then(function(s){t.$router.push("/store/products")})}}},u=r,c=n("2877"),l=Object(c["a"])(u,i,o,!1,null,null,null),m=l.exports,d={components:{adminBar:m}},v=d,h=Object(c["a"])(v,a,e,!1,null,null,null);s["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d2086b7.fa65230f.js.map