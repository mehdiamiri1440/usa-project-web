webpackJsonp([33],{251:function(a,t,e){var n=e(252);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);(0,e(1).default)("6ab29e87",n,!0,{})},252:function(a,t,e){(a.exports=e(0)(!1)).push([a.i,".main-content[data-v-3ec2aac2]{max-width:685px;position:absolute;left:calc(50% - 342px);top:45px;margin-bottom:50px;height:100%;direction:rtl}.main-content>div.wrapper-section[data-v-3ec2aac2]{border:1px solid #dadce0;border-radius:12px;min-height:400px}.main-content .section-title[data-v-3ec2aac2]{font-size:25px;margin-bottom:30px}.main-content div.section-title h2[data-v-3ec2aac2]{font-size:25px;margin-bottom:10px}.main-content div.section-title p[data-v-3ec2aac2]{font-size:15px}.invitation-image-wrapper[data-v-3ec2aac2]{max-width:350px;margin:30px auto}.content-wrapper[data-v-3ec2aac2]{max-width:580px;padding:0 15px;margin:0 auto}.content-wrapper h1[data-v-3ec2aac2]{font-size:23px;color:#555}.content-wrapper>p[data-v-3ec2aac2]{font-size:15px;font-weight:300;color:#555;margin:20px auto;line-height:1.618}.referral-url-wrapper[data-v-3ec2aac2]{background:#f0f0f0;border-radius:12px;display:-webkit-box;display:-ms-flexbox;display:flex;direction:ltr;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:20px;overflow:hidden}.referral-url[data-v-3ec2aac2]{font-size:16px;font-weight:lighter;color:#555}.copy-url[data-v-3ec2aac2]{color:#fff;border:none;background:#556080;padding:12px 20px}.send-invitation[data-v-3ec2aac2]{display:block;max-width:330px;width:100%;border:none;background:linear-gradient(45deg,#1da1f2,#3d7db2);-webkit-box-shadow:0 4px 0 #0966ad;box-shadow:0 4px 0 #0966ad;border-radius:12px;color:#fff;font-size:20px;padding:12px 15px;margin:30px auto 100px}@media screen and (max-width:767px){.main-section-wrapper[data-v-3ec2aac2]{max-width:none;margin:0 auto}.main-content .section-title p[data-v-3ec2aac2]{line-height:1.618}.main-content>div.wrapper-section[data-v-3ec2aac2]{border:none;border-radius:0}.main-content[data-v-3ec2aac2]{max-width:none;background:#fff;border-radius:0;-webkit-box-shadow:none;box-shadow:none;direction:rtl;-webkit-transform:translate(0);transform:translate(0);top:0;padding-top:20px;width:100%;left:0}.invitation-image-wrapper[data-v-3ec2aac2]{max-width:270px;margin:10px auto 30px}.content-wrapper h1[data-v-3ec2aac2]{font-size:19px}.content-wrapper>p[data-v-3ec2aac2]{font-size:15px;margin:10px auto 20px}.referral-url[data-v-3ec2aac2]{font-size:13px}.referral-url-wrapper[data-v-3ec2aac2]{padding-left:10px}.copy-url[data-v-3ec2aac2]{padding:12px 10px}}",""])},253:function(a,t){a.exports="/images/referral.jpg?3efe1e093668763344861ae14cc3bb99"},523:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(4),r={props:["currentUser"],data:function(){return{baseUrl:"",shareText:"از شما دعوت می کنم تا به جمع بازرگانان در باسکول (بزرگترین مرجع خرید و فروش عمده محصولات غذایی و کشاورزی ایران) بپیوندید. اگر این دعوت را قبول می کنید روی لینک معرف زیر بزنید"}},methods:{getBaseUrl:function(){this.baseUrl=getBase()},openShareModal:function(){var a={shareModalUrl:this.baseUrl+"invite/"+this.$parent.currentUser.user_info.user_name,shareModalText:this.shareText,shareModalTitle:"ارسال برای همکاران"};n.b.$emit("shareModalUrl",a)},copyLink:function(){var a=$("#main"),t=this.baseUrl+"invite/"+this.$parent.currentUser.user_info.user_name,e=t;this.shareText&&(e=this.shareText+"\n"+t),a.append('<textarea id="copy-url-to-share" style=" opacity: 0 !important; width: 0 !important; height: 0 !important; position: fixed !important;" type="text" >'+e+"</textarea>");var n=$("#copy-url-to-share");n.select();var r=document.execCommand("copy");if(n.remove(),r){var i=document.getElementById("snackbar");i.className="show",setTimeout(function(){i.className=i.className.replace("show","")},3e3)}}},mounted:function(){this.getBaseUrl()}},i=[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"invitation-image-wrapper"},[t("img",{attrs:{src:e(253),alt:"referral"}})])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("\n          با دعوت از همکاران خود به باسکول میتوانید کسب درآمد کنید. در صورتی\n          که همکار دعوت شده به جمع باسکول بپیوندد بعد از خرید هر کدام از سرویس\n          های غیر رایگان باسکول،\n          "),t("strong",{staticClass:"green-text"},[this._v("نصف مبلغ خرید به کیف پول باسکول شما اضافه می شود.")]),this._v("\n          همین حالا دعوت نامه را ارسال کنید.\n        ")])}],o=e(2);var s=function(a){e(251)},c=Object(o.a)(r,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("section",{staticClass:"main-content col-xs-12"},[e("h2",{staticClass:"section-title hidden-xs"},[a._v("دعوت از همکاران")]),a._v(" "),e("div",{staticClass:"row wrapper-section invitation-wrapper"},[a._m(0),a._v(" "),e("div",{staticClass:"content-wrapper"},[e("h1",[a._v("دعوت از همکاران")]),a._v(" "),a._m(1),a._v(" "),e("div",{staticClass:"referral-url-wrapper"},[e("p",{staticClass:"referral-url",domProps:{textContent:a._s(a.baseUrl+"invite/"+a.currentUser.user_info.user_name)}}),a._v(" "),e("button",{staticClass:"copy-url",on:{click:function(t){t.preventDefault(),a.copyLink()}}},[a._v("\n            کپی آدرس\n          ")])]),a._v(" "),e("button",{staticClass:"send-invitation",on:{click:function(t){a.openShareModal()}}},[e("i",{staticClass:"fa fa-share-alt"}),a._v("\n          ارسال دعوت نامه\n        ")])])])])])},i,!1,s,"data-v-3ec2aac2",null);t.default=c.exports}});