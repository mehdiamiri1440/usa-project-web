webpackJsonp([27],{184:function(t,e,r){"use strict";var a={props:["wrapperBg","isUserLogin","categoryList"],data:function(){return{errors:{categorySelected:"",selectedMainSubCategory:"",sub_category_id:"",requirement_amount:"",name:""},currentUser:{profile:"",user_info:""},buyAd:{name:"",requirement_amount:"",sub_category_id:"",category_id:""},buyAdFields:["name","requirement_amount","sub_category_id"],categorySelected:"",mainSubCategories:"",selectedMainSubCategory:"",subCategoryList:"",selectedSubCategory:"",subCategoryName:"محصول",cities:"",buyAdFiles:[],popUpMsg:"",profileConfirmed:!1,disableSubmit:!1,submiting:!1,relatedProducts:null,requirement_amount_text:"",categoryName:"میوه",items:[{message:" ثبت درخواست جدید",url:"registerRequest"}]}},methods:{init:function(){var t=this;axios.post("/user/profile_info").then(function(e){return t.currentUser=e.data})},formValidator:function(){""===this.categorySelected&&(this.errors.categorySelected="دسته بندی الزامی است"),this.selectedMainSubCategory||(this.errors.selectedMainSubCategory="زیر دسته بندی الزامی است"),this.buyAd.sub_category_id||(this.errors.sub_category_id="نام محصول الزامی است"),this.requirementAmountValidator(this.buyAd.requirement_amount),this.errors.categorySelected||this.errors.selectedMainSubCategory||this.errors.sub_category_id||this.errors.name||this.errors.requirement_amount||this.submitBuyAd()},submitBuyAd:function(){this.errors="",window.localStorage.setItem("buyAd",JSON.stringify(this.buyAd)),this.isUserLogin?window.location.href="/buyer/register-request":this.$router.push("/register")},setCategoryId:function(t){this.errors.sub_category_id="",this.buyAd.sub_category_id=t.id},setCityId:function(t){this.buyAd.city_id=t},toLatinNumbers:function(t){return null==t?null:(t=(t=(t=(t=t.toString().replace(/,/g,"")).toString().replace(/^0+/,"")).toString().replace(/^\u0660+/,"")).toString().replace(/^\u06f0+/,"")).toString().replace(/[\u0660-\u0669]/g,function(t){return t.charCodeAt(0)-1632}).replace(/[\u06f0-\u06f9]/g,function(t){return t.charCodeAt(0)-1776})},registerComponentStatistics:function(t,e,r){gtag("event",e,{event_category:t,event_label:r})},registerComponentExceptions:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];gtag("event","exception",{description:t,fatal:e})},isOsIOS:function(){var t=window.navigator.userAgent.toLowerCase();/safari/.test(t);return/iphone|ipod|ipad/.test(t)},scrollToTop:function(){window.scrollTo(0,0)},requirementAmountValidator:function(t){this.errors.requirement_amount="";var e=this.toLatinNumbers(t);""==e?this.errors.requirement_amount="فیلد میزان نیازمندی الزامی است":this.validateRegx(e,/^\d*$/)||(this.errors.requirement_amount="فقط عدد وارد کنید")},validateRegx:function(t,e){return e.test(t)},convertUnits:function(t){var e=t/1e3;if(t<1e3)return t+" کیلوگرم";var r=e.toString().split(".")[0],a=t.toString().substr(r.length);return a=a.replace(/^0+/,""),r=this.getNumberWithCommas(r),r+=" تن",a?r+(a=" و "+a+" کیلوگرم"):r},getNumberWithCommas:function(t){return t||"number"==typeof t?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""},productNameValidator:function(t){this.validateRegx(t,/^[\u0600-\u06FF\s_,.:/;()+-\d]+$/)||(this.errors.name="لطفا نوع محصول را فارسی وارد کنید.")},resetSelectData:function(){this.errors.categorySelected="",this.errors.selectedMainSubCategory="",this.errors.sub_category_id="",this.selectedMainSubCategory="",this.mainSubCategories="",this.selectedSubCategory="",this.buyAd.sub_category_id="",this.subCategoryList=""}},mounted:function(){this.isOsIOS()&&$('input[type="tel"]').attr("type","text"),this.init()},watch:{categorySelected:function(t){this.resetSelectData(),this.mainSubCategories=this.categoryList[t].subcategories,this.errors.categorySelected=""},selectedMainSubCategory:function(t){if(this.errors.selectedMainSubCategory="",t){this.selectedSubCategory="",this.buyAd.sub_category_id="";var e=this.categoryList[this.categorySelected].subcategories[t];this.buyAd.category_id=e.id,this.subCategoryList=e.subcategories,this.categoryName=e.category_name}},selectedSubCategory:function(t){t&&(this.subCategoryName=t.category_name,this.setCategoryId(t))},"buyAd.sub_category_id":function(){this.errors.sub_category_id=""},"buyAd.requirement_amount":function(t){if(this.errors.requirement_amount="",t){t.length>=13&&(this.buyAd.requirement_amount=t.substring(0,13));var e=this.toLatinNumbers(this.buyAd.requirement_amount);this.validateRegx(e,/^\d*$/)||(this.errors.requirement_amount="لطفا  فقط عدد وارد کنید"),this.errors.requirement_amount||(this.buyAd.requirement_amount=this.getNumberWithCommas(e),this.requirement_amount_text=this.convertUnits(e))}else this.requirement_amount_text=""},"buyAd.name":function(t){this.errors.name="",t&&this.productNameValidator(t)}}},s=r(2);var i=function(t){r(185)},o=Object(s.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section-wrapper col-xs-12"},[r("div",{staticClass:"row"},[r("div",{staticClass:"text-right col-xs-12 form-contents-wrapper",class:{"wrapper-bg":t.wrapperBg}},[r("div",{staticClass:"form-wrapper"},[r("div",{staticClass:"section-title"},[t._v("ثبت درخواست خرید")]),t._v(" "),r("div",{staticClass:"form-contents col-xs-12"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-4 pull-right"},[t._m(0),t._v(" "),r("label",{staticClass:"description",attrs:{for:"category"}},[t._v("\n                مثلا: کشاورزی\n              ")]),t._v(" "),r("div",{staticClass:"input-wrapper select-items"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.categorySelected,expression:"categorySelected"}],class:{active:""!==t.categorySelected,error:t.errors.categorySelected},attrs:{id:"category"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.categorySelected=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("انتخاب دسته بندی")]),t._v(" "),t._l(t.categoryList,function(e,a){return r("option",{key:a,domProps:{value:a,textContent:t._s(e.category_name)}})})],2)]),t._v(" "),r("p",{staticClass:"error-message"},[t.errors.categorySelected?r("span",{domProps:{textContent:t._s(t.errors.categorySelected)}}):t._e()])]),t._v(" "),r("div",{staticClass:"col-xs-12 col-md-4 pull-right"},[t._m(1),t._v(" "),r("label",{staticClass:"description",attrs:{for:"mainSubcategory"}},[t._v("\n                مثلا: میوه\n              ")]),t._v(" "),r("div",{staticClass:"input-wrapper select-items"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedMainSubCategory,expression:"selectedMainSubCategory"}],class:{active:t.selectedMainSubCategory,error:t.errors.selectedMainSubCategory},attrs:{id:"mainSubcategory"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedMainSubCategory=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("\n                    انتخاب زیر دسته بندی\n                  ")]),t._v(" "),t._l(t.mainSubCategories,function(e,a){return r("option",{key:a,domProps:{value:a,textContent:t._s(e.category_name)}})})],2)]),t._v(" "),r("p",{staticClass:"error-message"},[t.errors.selectedMainSubCategory?r("span",{domProps:{textContent:t._s(t.errors.selectedMainSubCategory)}}):t._e()])]),t._v(" "),r("div",{staticClass:"col-xs-12 col-md-4"},[t._m(2),t._v(" "),r("label",{staticClass:"description",attrs:{for:"sub-category"}},[t._v("\n                مثلا: خرما\n              ")]),t._v(" "),r("div",{staticClass:"input-wrapper select-items"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSubCategory,expression:"selectedSubCategory"}],class:{active:t.buyAd.sub_category_id,error:t.errors.sub_category_id},attrs:{id:"sub-category"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedSubCategory=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("انتخاب نام محصول")]),t._v(" "),t._l(t.subCategoryList,function(e,a){return r("option",{key:a,domProps:{value:e,textContent:t._s(e.category_name)}})})],2)]),t._v(" "),r("p",{staticClass:"error-message"},[t.errors.sub_category_id?r("span",{domProps:{textContent:t._s(t.errors.sub_category_id)}}):t._e()])]),t._v(" "),r("div",{staticClass:"col-xs-12 col-md-6 pull-right"},[r("h2",{staticClass:"title-contents col-xs-12"},[t._v("\n                نوع\n                "),r("span",{staticClass:"light-green-text",domProps:{textContent:t._s(" "+t.subCategoryName+" ")}}),t._v("\n                مورد نیاز خود را وارد کنید.\n              ")]),t._v(" "),r("label",{staticClass:"description",attrs:{for:"product-type"}},["میوه"==t.categoryName?r("span",[t._v(" مثلا: مضافتی ")]):"صیفی"==t.categoryName?r("span",[t._v("\n                  مثلا: بذر متین صادراتی\n                ")]):"غلات"==t.categoryName?r("span",[t._v("\n                  مثلا: هندی ۱۱۲۱\n                ")]):"خشکبار"==t.categoryName?r("span",[t._v("\n                  مثلا: فندقی\n                ")]):"ادویه"==t.categoryName?r("span",[t._v(" مثلا: نگین ")]):"دامپروری"==t.categoryName?r("span",[t._v("\n                  مثلا: چهل گیاه\n                ")]):"حبوبات"==t.categoryName?r("span",[t._v(" مثلا: چیتی ")]):r("span",[t._v(" مثلا: مضافتی")])]),t._v(" "),r("div",{staticClass:"text-input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyAd.name,expression:"buyAd.name"}],class:{active:t.buyAd.name,error:t.errors.name},attrs:{id:"product-type",type:"text",placeholder:"نوع محصول مورد نیاز خود را وارد کنید"},domProps:{value:t.buyAd.name},on:{input:function(e){e.target.composing||t.$set(t.buyAd,"name",e.target.value)}}}),t._v(" "),t.buyAd.name&&!t.errors.name?r("i",{staticClass:"fa fa-check-circle"}):t.errors.name?r("i",{staticClass:"fa fa-times-circle"}):r("i",{staticClass:"fa fa-edit"})]),t._v(" "),r("div",{staticClass:"input-text-wrapper"},[r("p",{staticClass:"error-message"},[t.errors.name?r("span",{staticClass:"red-text",domProps:{textContent:t._s(t.errors.name)}}):t._e()])])]),t._v(" "),r("div",{staticClass:"col-xs-12 col-md-6"},[t._m(3),t._v(" "),r("label",{staticClass:"description",attrs:{for:"requirement_amount"}},[t._v("\n                مثلا: 50,000\n              ")]),t._v(" "),r("div",{staticClass:"text-input-wrapper"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.buyAd.requirement_amount,expression:"buyAd.requirement_amount"}],class:{active:t.buyAd.requirement_amount,error:t.errors.requirement_amount},attrs:{id:"requirement_amount",type:"tel",placeholder:"میزان نیازمندی را وارد کنید",pattern:"[0-9]*"},domProps:{value:t.buyAd.requirement_amount},on:{input:function(e){e.target.composing||t.$set(t.buyAd,"requirement_amount",e.target.value)}}}),t._v(" "),t.buyAd.requirement_amount&&!t.errors.requirement_amount?r("i",{staticClass:"fa fa-check-circle"}):t.errors.requirement_amount?r("i",{staticClass:"fa fa-times-circle"}):r("i",{staticClass:"fa fa-edit"})]),t._v(" "),r("div",{staticClass:"input-text-wrapper"},[t.errors.requirement_amount?t._e():r("p",{staticClass:"small-description-text"},[t.requirement_amount_text?r("span",{staticClass:"blue-text",domProps:{textContent:t._s(t.requirement_amount_text)}}):t._e()]),t._v(" "),r("p",{staticClass:"error-message"},[t.errors.requirement_amount?r("span",{staticClass:"red-text",domProps:{textContent:t._s(t.errors.requirement_amount)}}):t._e()])])])]),t._v(" "),r("div",{staticClass:"submit-button-wrapper col-xs-12"},[r("div",{staticClass:"row"},[r("button",{staticClass:"submit-button disabled",class:{active:t.buyAd.sub_category_id&&t.buyAd.requirement_amount&&!t.errors.requirement_amount},on:{click:function(e){e.preventDefault(),t.formValidator()}}},[t._v("\n                ثبت درخواست\n                "),r("i",{staticClass:"fa fa-check"})])])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title-contents col-xs-12"},[this._v("\n                دسته بندی محصول\n                "),e("span",{staticClass:"red-text"},[this._v(" * ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title-contents col-xs-12"},[this._v("\n                زیر دسته بندی\n                "),e("span",{staticClass:"red-text"},[this._v(" * ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title-contents col-xs-12"},[this._v("\n                نام محصول\n\n                "),e("span",{staticClass:"red-text"},[this._v(" * ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"title-contents col-xs-12"},[this._v("\n                میزان نیازمندی\n\n                "),e("span",{staticClass:"small-label"},[this._v("(کیلوگرم)")]),this._v(" "),e("span",{staticClass:"red-text"},[this._v(" * ")])])}],!1,i,"data-v-6e6f5788",null);e.a=o.exports},185:function(t,e,r){var a=r(186);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(1).default)("61551e18",a,!0,{})},186:function(t,e,r){(t.exports=r(0)(!1)).push([t.i,'.title-contents[data-v-6e6f5788]{font-weight:500;font-size:18px;margin-bottom:15px;padding:0}.form-contents-wrapper[data-v-6e6f5788]{direction:rtl}.form-wrapper[data-v-6e6f5788]{margin:0 auto}.form-contents[data-v-6e6f5788]{margin-top:26px;margin-bottom:15px}.submit-button[data-v-6e6f5788]{background:#ddd;color:#fff;border:none;border-radius:8px;display:inline-block;font-size:16px;padding:8px 45px 7px;-webkit-transition:.2s;transition:.2s;cursor:default;margin:0}.submit-button i[data-v-6e6f5788]{-webkit-transition:.3s;transition:.3s;position:relative;top:2px;left:-3px}.input-text-wrapper[data-v-6e6f5788]{height:25px;padding-top:5px}.submit-button.default-back-button i[data-v-6e6f5788]{left:3px}.submit-button.default-back-button[data-v-6e6f5788]{background:#fff;color:#777;border:1px solid #bdc4cc;border-radius:4px;cursor:pointer;font-weight:400;font-size:14px}.submit-button.default-back-button:hover i[data-v-6e6f5788]{-webkit-transform:translateX(5px);transform:translateX(5px)}.submit-button.active[data-v-6e6f5788]{background:#00c569;cursor:pointer;-webkit-transform:translateX(0);transform:translateX(0)}.submit-button.active:hover i[data-v-6e6f5788]{background:#00c569;cursor:pointer;-webkit-transform:translateX(-5px);transform:translateX(-5px)}.action-control-wrapper[data-v-6e6f5788]{padding:20px 15px 50px;background:#fff}label[data-v-6e6f5788]{margin:0 auto 10px;font-size:15px;font-weight:400;color:#777}.small-label[data-v-6e6f5788]{font-size:15px}.text-input-wrapper[data-v-6e6f5788]{margin:0 auto;position:relative;background:#fbfbfb}input[data-v-6e6f5788]{background:none;z-index:1;position:relative;width:100%;padding:8px 15px;border:1px solid #bdc4cc;border-radius:8px;-webkit-box-shadow:none;box-shadow:none}.text-input-wrapper i[data-v-6e6f5788]{position:absolute;left:15px;top:11px;font-size:18px;color:#bdc4cc;-webkit-transition:.3s;transition:.3s}input:focus+i[data-v-6e6f5788],input[data-v-6e6f5788]:focus{color:#333;border-color:#333}input.active[data-v-6e6f5788]{border-color:#00c569;color:#333}input.active+i[data-v-6e6f5788]{color:#00c569}input.active+i[data-v-6e6f5788],input.active:focus+i[data-v-6e6f5788],input.active[data-v-6e6f5788]:focus{border-color:#00c569}input.error[data-v-6e6f5788]{color:#333;border-color:#e41c38}input.error+i[data-v-6e6f5788]{color:#e41c38}input.error:focus+i[data-v-6e6f5788],input.error[data-v-6e6f5788]:focus{border-color:#e41c38}.spinner-border[data-v-6e6f5788]{width:1.5rem;height:1.5rem;top:-5px;position:relative;left:2px}select[data-v-6e6f5788]{width:100%;border-radius:8px;padding:8px 15px;position:relative;z-index:1;color:#777;direction:rtl;-webkit-transition:.2s;transition:.2s;background:none;appearance:none;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none}.input-wrapper i[data-v-6e6f5788]{display:inline-block;position:absolute;left:15px;font-size:20px;color:#bebebe;top:9px;-webkit-transition:.2s;transition:.2s}.select-items.input-wrapper[data-v-6e6f5788]{position:relative;margin:6px auto;background:#fbfbfb}.select-items.input-wrapper[data-v-6e6f5788]:after{content:"\\F107";color:#777;position:absolute;display:inline-block;top:6px;font-family:Font Awesome\\ 5 Free,sans-serif;font-weight:900;left:15px;font-size:20px;z-index:0}select[data-v-6e6f5788]:focus,select option[data-v-6e6f5788]{color:#333}select.active[data-v-6e6f5788]{color:#333;color:#00c569;border:1px solid #00c569}select.active[data-v-6e6f5788]:focus{color:#00c569}select.error[data-v-6e6f5788]{color:#333;color:#e41c38;border:1px solid #e41c38}select.error[data-v-6e6f5788]:focus{color:#e41c38}.error-message[data-v-6e6f5788]{text-align:right;color:#e41c38;font-weight:700;height:25px;direction:rtl;font-size:11px}.small-description[data-v-6e6f5788]{font-size:11px;font-weight:700;color:#777;line-height:1.618}.small-description-text[data-v-6e6f5788]{text-align:left;font-weight:700;color:#777;height:25px;direction:rtl;font-size:12px}.submit-button-wrapper[data-v-6e6f5788]{text-align:center}label .small-label[data-v-6e6f5788]{font-size:12px}@media screen and (max-width:767px){.form-contents[data-v-6e6f5788]{border-radius:0}.title-section[data-v-6e6f5788]{padding:0 15px}select[data-v-6e6f5788]{font-size:12px}.input-wrapper[data-v-6e6f5788]:after{left:14px}.title-contents.margin-top-30[data-v-6e6f5788]{margin-top:30px}}',""])},457:function(t,e,r){var a=r(458);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(1).default)("746ae778",a,!0,{})},458:function(t,e,r){(t.exports=r(0)(!1)).push([t.i,".header-request[data-v-1d9c0ee6]{margin-bottom:20px}.header-request h2[data-v-1d9c0ee6]{font-size:22px;margin:0;margin-bottom:15px}",""])},502:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={props:["categoryList"],components:{mainRegisterRequestForm:r(184).a}},s=r(2);var i=function(t){r(457)},o=Object(s.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-content-index-pages"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[this._m(0),this._v(" "),e("div",{staticClass:"main-request-content"},[e("main-register-request-form",{attrs:{"wrapper-bg":"true",categoryList:this.categoryList}})],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-request wrapper-bg text-center col-xs-12"},[e("h2",[this._v("ثبت درخواست خرید")]),this._v(" "),e("p",[this._v("برای ثبت درخواست خرید فرم زیر را کامل کنید")])])}],!1,i,"data-v-1d9c0ee6",null);e.default=o.exports}});