webpackJsonp([44],{251:function(t,a,e){var s=e(252);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(1).default)("4eac5ef4",s,!0,{})},252:function(t,a,e){(t.exports=e(0)(!1)).push([t.i,".main-content[data-v-1231b458]{direction:rtl}.green-button[data-v-1231b458]{padding:10px 15px;width:auto;border-radius:8px}.special-button[data-v-1231b458]{background:#000546;position:relative}.badge[data-v-1231b458]{position:absolute;left:-10px;background:red;top:-10px}.gray-brand-background[data-v-1231b458]{background:#556080}.blue-brand-background[data-v-1231b458]{background:#000546}.header-links-wrapper a[data-v-1231b458]{margin-top:15px;margin-left:15px}.title[data-v-1231b458]{text-align:right;padding:15px 0;border-bottom:2px solid #e8e8e8}.title h1[data-v-1231b458]{font-size:18px;font-weight:700;padding-top:9px}.boxes[data-v-1231b458]{margin:15px auto}.box[data-v-1231b458]{background:#fff;border:1px solid #e9ecef;border-radius:12px;padding:0;overflow:hidden;position:relative;top:0;-webkit-transition:.3s;transition:.3s;height:180px;margin:15px 0}.box[data-v-1231b458]:hover{-webkit-transition:.3s;transition:.3s;-webkit-box-shadow:0 8px 10px rgba(0,0,0,.3);box-shadow:0 8px 10px rgba(0,0,0,.3);top:-5px}.box:hover .box-icon[data-v-1231b458]{-webkit-animation:shake-data-v-1231b458 2.8s cubic-bezier(.36,.07,.19,.97) both;animation:shake-data-v-1231b458 2.8s cubic-bezier(.36,.07,.19,.97) both}.box .box-title[data-v-1231b458]{font-size:17px;padding:15px 10px 0;line-height:1.618}.box-main[data-v-1231b458]{padding:0 10px;margin:0 auto;position:absolute;bottom:60px;width:100%}.content-wrapper[data-v-1231b458]{font-size:28px;font-weight:700}.box .box-icon[data-v-1231b458]{opacity:.14;font-size:76px;position:absolute;left:10px;bottom:0}.box a[data-v-1231b458]{width:100%;position:relative;border-radius:0;margin:0}.box-upgrade-link[data-v-1231b458]{position:absolute;width:100%;left:0;bottom:0}.default-icon[data-v-1231b458]{position:absolute;bottom:0;left:10px}.header-links-wrapper a.viewers-link[data-v-1231b458]{margin:20px auto 5px;display:inline-block;font-size:17px;font-weight:700;color:#1da1f2;-webkit-transition:.3s;transition:.3s}.header-links-wrapper a.viewers-link[data-v-1231b458]:hover{-webkit-transition:.3s;transition:.3s;-webkit-transform:translateX(-5px);transform:translateX(-5px)}@-webkit-keyframes shake-data-v-1231b458{10%,90%{-webkit-transform:translate3d(0,-6px,0);transform:translate3d(0,-6px,0)}20%,80%{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes shake-data-v-1231b458{10%,90%{-webkit-transform:translate3d(0,-6px,0);transform:translate3d(0,-6px,0)}20%,80%{-webkit-transform:translateZ(0);transform:translateZ(0)}}@media screen and (max-width:991px){.list-time[data-v-1231b458],.list-title[data-v-1231b458],.needs[data-v-1231b458]{padding:15px}}@media screen and (max-width:767px){.box-upgrade-link[data-v-1231b458]{margin-top:0}.green-button[data-v-1231b458]{padding:13px 20px;font-size:15px;font-weight:700;margin:9px auto}.header-links-wrapper a[data-v-1231b458]{margin-left:0;width:100%}.title[data-v-1231b458]{float:right}.main-content[data-v-1231b458]{padding-bottom:80px}}",""])},519:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(4),i={data:function(){return{statusData:"",linkItems:[{href:"registerProductSeller",icon:"fa fa-plus",text:"افزودن محصول",badge:!1},{href:"buyAdRequestsSeller",icon:"fa fa-list-alt",text:"درخواست های خرید",badge:!1},{href:"messagesSeller",icon:"fas fa-comment-alt",text:"پیام ها",badge:!1},{href:"messagesRequestSeller",icon:"fas fa-list-ul",text:"خریداران پیشنهادی",badge:!0}],boxes:"",items:[]}},methods:{init:function(){s.b.$emit("subHeader",!1);var t=this;axios.post("/get_seller_dashboard_required_data").then(function(a){t.statusData=a.data,t.boxes=[{title:"نوع عضویت فعال شما",icon:"fas fa-address-card",iconColor:"#19668E",staticName:"",button:a.data.active_pakage_type<3,routerName:"dashboardPricingTableSeller",linkName:"ارتقا عضویت",linkIcon:"fa fa-arrow-up",status:t.checkPackage(a.data.active_pakage_type)},{title:"تعداد محصولات قابل ثبت",icon:"fas fa-list-ol",iconColor:"#aa49c8",staticName:"",button:!0,routerName:"dashboardProductPricing",linkName:"افزایش ظرفیت ثبت محصول",linkIcon:"fa fa-plus",status:0==a.data.max_allowed_product_register_count?"صفر":a.data.max_allowed_product_register_count+" محصول"},{title:"سقف روزانه تعداد پاسخ ها به درخواست های خرید",icon:"fas fa-list-alt",iconColor:"#D8A679",staticName:"",button:!0,routerName:"dashboardBuyAdPricing",linkName:"افزایش ظرفیت پاسخ گویی",linkIcon:"fa fa-arrow-up",status:t.checkRequest(a.data.max_buyAds_reply)},{title:"احراز هویت شده",icon:"fas fa-award\t",iconColor:"#21AD93",staticName:"",button:!a.data.is_verified,routerName:"profileBasicSellerVeficiation",linkName:"احراز هویت کنید",linkIcon:"",status:a.data.is_verified?"بله":"خیر"},{title:"دسترسی به درخواست های خرید طلایی",icon:"fas fa-star",iconColor:"#FFAC58",staticName:"",button:!a.data.access_to_golden_buyAds,routerName:"dashboardPricingTableSeller",linkName:"دسترسی به درخواست های طلایی",linkIcon:"",status:a.data.access_to_golden_buyAds?"بله":"خیر"},{title:"تعداد محصولات ثبت شده",icon:"fas fa-list-ol",iconColor:"#00C5BE",staticName:"",button:!0,routerName:"myProductsSeller",linkName:"محصولات من",linkIcon:"fas fa-list-ol",status:0==a.data.confirmed_products_count?"صفر":a.data.confirmed_products_count+" محصول"}]})},checkPackage:function(t){var a="";switch(t){case 0:a="عضویت رایگان";break;case 1:a="عضویت پایه";break;case 2:a="اشتراک 6 ماهه";break;case 3:a="عضویت ویژه"}return a},checkRequest:function(t){return t>=2e3?" نامحدود":0==t?"بدون درخواست":t+" پاسخ"}},mounted:function(){this.init()}},o=e(2);var n=function(t){e(251)},r=Object(o.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("section",{staticClass:"main-content col-xs-12"},[e("div",{staticClass:"title col-xs-12"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-xs-9 col-sm-4 pull-left text-left"},[e("router-link",{staticClass:"green-button blue-brand-background",attrs:{to:{name:"dashboardPricingTableSeller"}}},[e("i",{staticClass:"fa fa-arrow-up"}),t._v("\n            ارتقا عضویت\n          ")])],1)])]),t._v(" "),e("div",{staticClass:"header-links col-xs-12"},[e("div",{staticClass:"header-links-wrapper"},[e("div",[e("router-link",{staticClass:"viewers-link",attrs:{to:{name:"sellerViewer"}}},[e("span",[t._v(" خریدارانی که شماره تماس شما را دیده اند ")]),t._v(" "),e("i",{staticClass:"fa fa-arrow-left"})])],1),t._v(" "),t._l(t.linkItems,function(a,s){return e("router-link",{key:s,staticClass:"green-button",class:{"special-button":a.badge},attrs:{to:{name:a.href}}},[a.badge?e("span",{staticClass:"badge"},[t._v(" جدید ")]):t._e(),t._v(" "),e("i",{class:a.icon}),t._v(" "),e("span",{domProps:{textContent:t._s(a.text)}})])})],2)]),t._v(" "),t.statusData?e("div",{staticClass:"boxes col-xs-12"},[e("div",{staticClass:"row"},t._l(t.boxes,function(a,s){return e("div",{key:s,staticClass:"pull-right col-xs-12 col-sm-6 col-md-4 col-lg-3"},[e("div",{staticClass:"box"},[e("div",{staticClass:"box-title"},[e("span",{domProps:{textContent:t._s(a.title)}})]),t._v(" "),e("div",{staticClass:"box-main"},[e("div",{staticClass:"content-wrapper"},[a.status?e("span",{domProps:{textContent:t._s(a.status)}}):t._e(),t._v(" "),a.staticName?e("span",{domProps:{textContent:t._s(a.staticName)}}):t._e()]),t._v(" "),e("i",{staticClass:"box-icon",class:a.icon,style:{color:[a.iconColor]}})]),t._v(" "),a.button?e("div",{staticClass:"box-upgrade-link"},[e("router-link",{staticClass:"green-button",class:{"gray-brand-background":s>0},attrs:{to:{name:a.routerName}}},[a.linkIcon?e("i",{class:a.linkIcon}):t._e(),t._v("\n                "+t._s(a.linkName)+"\n              ")])],1):t._e()])])}))]):e("div",{staticClass:"boxes col-xs-12"},[e("div",{staticClass:"row"},t._l(6,function(a,s){return e("div",{key:s,staticClass:"pull-right col-xs-12 col-sm-6 col-md-4 col-lg-3"},[t._m(1,!0)])}))])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-xs-3 col-sm-4 pull-right"},[a("h1",[this._v("داشبورد")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"box"},[a("div",{staticClass:"box-title-default"},[a("span",{staticClass:"content-full-width placeholder-content margin-15"}),this._v(" "),a("span",{staticClass:"content-min-width placeholder-content margin-15"})]),this._v(" "),a("div",{staticClass:"box-main"},[a("div",{staticClass:"content-wrapper"},[a("span",{staticClass:"content-half-width placeholder-content"})]),this._v(" "),a("span",{staticClass:"default-icon pull-left placeholder-content"})]),this._v(" "),a("div",{staticClass:"box-upgrade-link"},[a("span",{staticClass:"\n                  content-full-width\n                  placeholder-content\n                  default-item-wrapper\n                  col-xs-12\n                "})])])}],!1,n,"data-v-1231b458",null);a.default=r.exports}});