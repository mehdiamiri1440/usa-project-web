webpackJsonp([27],{585:function(t,e,i){var o=i(586);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(4)("7af83c9a",o,!0,{})},586:function(t,e,i){(t.exports=i(1)(!1)).push([t.i,".submit-button[data-v-49a9c62f]{background:#ddd;color:#fff;border:none;border-radius:4px;width:100%;font-size:16px;padding:10px 0 9px;-webkit-transition:.3s;transition:.3s;cursor:default}.submit-button.active[data-v-49a9c62f]{background:#00c569;cursor:pointer}.form-contents[data-v-49a9c62f]{line-height:1.618;margin-top:30px;margin-bottom:50px}.form-contents lable[data-v-49a9c62f]{font-size:12px}.input-wrapper[data-v-49a9c62f]{margin:6px auto 4px;position:relative}input[data-v-49a9c62f]{width:100%;border-radius:4px;border:1px solid;color:#bebebe;direction:ltr;-webkit-transition:.3s;transition:.3s;padding:8px 15px 9px 45px}.verify-code-wrapper input[data-v-49a9c62f]{padding:8px 15px 9px;text-align:center}.timer-button[data-v-49a9c62f]{background:none;border:1px solid;color:#00c569;border-radius:4px;padding:3px 10px;margin-bottom:9px;-webkit-transition:.3s;transition:.3s;cursor:pointer}.timer-button[data-v-49a9c62f]:hover{background:#00c569;-webkit-transition:.3s;transition:.3s;color:#fff}.input-wrapper i[data-v-49a9c62f]{display:inline-block;position:absolute;left:15px;font-size:20px;color:#bebebe;top:9px;-webkit-transition:.3s;transition:.3s}input:focus+i[data-v-49a9c62f],input[data-v-49a9c62f]:focus{color:#333}input.active[data-v-49a9c62f]{border-color:#00c569;color:#333}input.active+i[data-v-49a9c62f]{color:#00c569}input.active+i[data-v-49a9c62f],input.active:focus+i[data-v-49a9c62f],input.active[data-v-49a9c62f]:focus{border-color:#00c569}input.error[data-v-49a9c62f]{color:#333;border-color:#e41c38}input.error+i[data-v-49a9c62f]{color:#e41c38}input.error:focus+i[data-v-49a9c62f],input.error[data-v-49a9c62f]:focus{border-color:#e41c38}.error-message[data-v-49a9c62f]{text-align:center;color:#e41c38;font-weight:700;height:25px;margin-bottom:5px;direction:rtl;font-size:12px}.header-section>p[data-v-49a9c62f]{text-align:right;font-size:18px;font-weight:700;color:#777;border-bottom:1px solid #ebebeb;padding-bottom:15px;margin-top:20px}.product-section[data-v-49a9c62f]{margin-top:15px;overflow:hidden}.product-image[data-v-49a9c62f]{width:100px;height:100px;background:#bdc4cc;border-radius:4px;position:relative;overflow:hidden}.product-image img[data-v-49a9c62f]{height:100%;width:auto;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.product-contents[data-v-49a9c62f]{width:calc(100% - 100px)}.product-contents .content[data-v-49a9c62f]{padding:0 15px;line-height:1.618;color:#777}.product-contents .content i[data-v-49a9c62f],.shipping-badge i[data-v-49a9c62f]{margin-left:7px}.shipping-badge[data-v-49a9c62f]{color:#777}.product-title[data-v-49a9c62f]{font-size:16px;font-weight:700}.content.pull-right>p[data-v-49a9c62f]{margin-bottom:15px}.content.pull-right>p>span[data-v-49a9c62f]:last-of-type{color:#333}.prising-section[data-v-49a9c62f]{margin:20px auto}.price-item[data-v-49a9c62f]{color:#777;font-size:20px;font-weight:700;padding-top:11px}.price-item>span[data-v-49a9c62f]{color:#00c569}.change-step>button[data-v-49a9c62f]{margin:0;width:100%;font-size:16px;font-weight:400;line-height:1}.change-step>button i[data-v-49a9c62f]{font-size:26px;line-height:1}.change-step>button span[data-v-49a9c62f]{position:relative;top:-5px;margin-left:10px}@media screen and (max-width:992px){.change-step[data-v-49a9c62f]{margin-top:20px}}@media screen and (max-width:600px){.product-contents[data-v-49a9c62f]{width:100%}.product-image[data-v-49a9c62f]{width:100%;height:300px;margin-bottom:20px}.badged-wrapper[data-v-49a9c62f]{float:right!important;padding:15px;width:100%}.change-step[data-v-49a9c62f]{position:fixed;bottom:0;left:0;right:0;z-index:1;background:#fff;padding:15px;-webkit-box-shadow:0 3px 15px rgba(0,0,0,.2);box-shadow:0 3px 15px rgba(0,0,0,.2)}}",""])},587:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{currentStep:0,errors:{verification_code:[],phoneNumber:[]},step1:{phoneNumber:"",sendCode:!0},step2:{verification_code:"",reSendCode:!1,timeCounterDown:120,showTimer:!1,now:null,verification:{verifycode1:"",verifycode2:"",verifycode3:"",verifycode4:"",currentCode:""}},verifyCodeBtnLoading:!1}},methods:{init:function(){},send_verification_code:function(){this.verifyCodeBtnLoading=!0,this.step2.reSendCode=!1,this.step1.sendCode=!1;var t=this;this.step2.now=(new Date).getTime(),this.step2.showTimer=!0,this.step2.timeCounterDown=119,setTimeout(function(){t.verifyCodeBtnLoading=!1,t.currentStep=1,t.step1.sendCode=!0,t.step2.verification_code="",t.errors.verification_code=[]},500)},verify_code:function(){this.sumCodeNumbers(),this.verifyCodeBtnLoading=!0,this.$router.push({name:"registerInformation"})},isOsIOS:function(){var t=window.navigator.userAgent.toLowerCase();/safari/.test(t);return/iphone|ipod|ipad/.test(t)},toLatinNumbers:function(t){return null==t?null:t.toString().replace(/[\u0660-\u0669]/g,function(t){return t.charCodeAt(0)-1632}).replace(/[\u06f0-\u06f9]/g,function(t){return t.charCodeAt(0)-1776})},registerComponentStatistics:function(t,e,i){gtag("event",e,{event_category:t,event_label:i})},reSendCode:function(){this.currentStep=0},sumCodeNumbers:function(){this.errors.verification_code=[],this.step2.verification.currentCode=this.step2.verification.verifycode1+this.step2.verification.verifycode2+this.step2.verification.verifycode3+this.step2.verification.verifycode4},tabTopNext:function(t){$(t).focus()},keymonitor:function(t,e){var i=this.toLatinNumbers(t.key);(t.keyCode>=48&&t.keyCode<=57||t.keyCode>=96&&t.keyCode<=105||i>=0&&i<=9)&&e<=4&&this.tabTopNext("#verify-code-"+e)},updateCounterDownTimer:function(t){1!==t?this.step2.timeCounterDown=t:this.step2.showTimer=!1}},mounted:function(){this.init(),this.isOsIOS()&&$("#phone-number").attr("type","text")},watch:{"step1.phoneNumber":function(t){this.errors.phoneNumber[0]="",this.step1.phoneNumber.length>=11&&(this.step1.phoneNumber=this.step1.phoneNumber.substring(0,11))},"step2.verification.verifycode1":function(t){this.sumCodeNumbers(),this.step2.verification.verifycode1=this.step2.verification.verifycode1.substring(0,1)},"step2.verification.verifycode2":function(t){this.sumCodeNumbers(),this.step2.verification.verifycode2=this.step2.verification.verifycode2.substring(0,1)},"step2.verification.verifycode3":function(t){this.sumCodeNumbers(),this.step2.verification.verifycode3=this.step2.verification.verifycode3.substring(0,1)},"step2.verification.verifycode4":function(t){this.sumCodeNumbers(),this.step2.verification.verifycode4=this.step2.verification.verifycode4.substring(0,1)},"step2.timeCounterDown":function(){var t=this,e=(new Date).getTime()-this.step2.now,i=119-Math.floor(e%12e4/1e3)+1;setTimeout(function(){t.updateCounterDownTimer(i)},1e3)}}}},588:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"confirm-product-contents"},[i("section",{staticClass:"product-section-wrapper"},[t._m(0),t._v(" "),0==this.currentStep?i("div",{staticClass:"form-contents text-right col-md-4 col-md-offset-4 col-xs-12"},[i("div",{staticClass:"row"},[i("label",{attrs:{for:"phone-number"}},[t._v("لطفا شماره موبایل خود را وارد کنید")]),t._v(" "),i("div",{staticClass:"input-wrapper phone-number-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.step1.phoneNumber,expression:"step1.phoneNumber"}],staticClass:"dire",class:{error:t.errors.phoneNumber[0],active:this.step1.phoneNumber.length>=11},attrs:{id:"phone-number",type:"tel",placeholder:"شماره موبایل",pattern:"[0-9]*"},domProps:{value:t.step1.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.step1,"phoneNumber",e.target.value)}}}),t._v(" "),i("i",{staticClass:"fa fa-phone-square-alt"})]),t._v(" "),i("span",{staticClass:"small-description"},[t._v("پس از وارد کردن شماره موبایل ما یک کد برای شما ارسال میکنیم تا از صحت شماره وارد شده اطمینان حاصل کنیم")]),t._v(" "),i("p",{staticClass:"error-message"},[t.errors.phoneNumber?i("span",{domProps:{textContent:t._s(t.errors.phoneNumber[0])}}):t._e()]),t._v(" "),i("button",{staticClass:"submit-button disabled",class:{active:this.step1.phoneNumber.length>=11},on:{click:function(e){e.preventDefault(),t.send_verification_code()}}},[t.verifyCodeBtnLoading?i("span",{staticClass:"fas fa-circle-notch fa-spin"}):t._e(),t._v("\n          ارسال کد تایید\n        ")])])]):t._e(),t._v(" "),1==this.currentStep?i("div",{staticClass:"form-contents text-right col-md-4 col-md-offset-4 col-xs-12"},[i("div",{staticClass:"row"},[i("label",{attrs:{for:"verify-code"}},[t._v("\n          کد ارسال شده به شماره ی\n          "),i("span",{staticClass:"green-text",domProps:{textContent:t._s(t.step1.phoneNumber)}}),t._v("\n          را وارد کنید\n        ")]),t._v(" "),i("div",{staticClass:"input-wrapper verify-code-wrapper"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.step2.verification.verifycode1,expression:"step2.verification.verifycode1"}],staticClass:"dire",class:{error:this.errors.verification_code[0],active:t.step2.verification.verifycode1.length},attrs:{id:"verify-code-1",type:"number",placeholder:"_",max:"9",onfocus:"this.select();",pattern:"[0-9]*"},domProps:{value:t.step2.verification.verifycode1},on:{keyup:function(e){t.keymonitor(e,2)},input:function(e){e.target.composing||t.$set(t.step2.verification,"verifycode1",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-xs-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.step2.verification.verifycode2,expression:"step2.verification.verifycode2"}],staticClass:"dire",class:{error:this.errors.verification_code[0],active:t.step2.verification.verifycode2.length},attrs:{id:"verify-code-2",type:"number",placeholder:"_",max:"9",onfocus:"this.select();",pattern:"[0-9]*"},domProps:{value:t.step2.verification.verifycode2},on:{keyup:function(e){t.keymonitor(e,3)},input:function(e){e.target.composing||t.$set(t.step2.verification,"verifycode2",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-xs-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.step2.verification.verifycode3,expression:"step2.verification.verifycode3"}],staticClass:"dire",class:{error:this.errors.verification_code[0],active:t.step2.verification.verifycode3.length},attrs:{id:"verify-code-3",type:"number",placeholder:"_",max:"9",onfocus:"this.select();",pattern:"[0-9]*"},domProps:{value:t.step2.verification.verifycode3},on:{keyup:function(e){t.keymonitor(e,4)},input:function(e){e.target.composing||t.$set(t.step2.verification,"verifycode3",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-xs-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.step2.verification.verifycode4,expression:"step2.verification.verifycode4"}],staticClass:"dire",class:{error:this.errors.verification_code[0],active:t.step2.verification.verifycode4.length},attrs:{id:"verify-code-4",type:"number",placeholder:"_",max:"9",onfocus:"this.select();",pattern:"[0-9]*"},domProps:{value:t.step2.verification.verifycode4},on:{keyup:function(e){t.keymonitor(e,5)},input:function(e){e.target.composing||t.$set(t.step2.verification,"verifycode4",e.target.value)}}})])])]),t._v(" "),i("p",{staticClass:"error-message"},[this.errors.verification_code[0]?i("span",{domProps:{textContent:t._s(this.errors.verification_code[0])}}):t._e()]),t._v(" "),t.step2.showTimer?i("div",{staticClass:"timer-wrapper margin-15-auto text-center"},[i("span",[t._v("مدت اعتبار کد")]),t._v(" "),i("span",{staticClass:"green-text",domProps:{textContent:t._s(t.step2.timeCounterDown)}}),t._v(" "),i("span",[t._v("ثانیه")])]):i("div",{staticClass:"timer-wrapper margin-15-auto text-center"},[i("button",{staticClass:"timer-button",attrs:{type:"button",disabled:!1===t.step2.reSendCode,value:t.step2.timeCounterDown},on:{click:function(e){t.currentStep}}},[t._v("ارسال مجدد کد فعال سازی")])]),t._v(" "),i("button",{staticClass:"submit-button disabled",class:{active:4==t.step2.verification.currentCode.length},on:{click:function(e){e.preventDefault(),t.verify_code()}}},[t.verifyCodeBtnLoading?i("span",{staticClass:"fas fa-circle-notch fa-spin"}):t._e(),t._v("\n          بررسی کد\n        ")])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-section"},[e("p",[this._v("اطلاعات محصول")])])}]}},785:function(t,e,i){var o=i(5)(i(587),i(588),!1,function(t){i(585)},"data-v-49a9c62f",null);t.exports=o.exports}});