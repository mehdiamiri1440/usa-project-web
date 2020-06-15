webpackJsonp([53],{

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(592)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(594)
/* template */
var __vue_template__ = __webpack_require__(595)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e7350fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/layouts/main/privacy_and_policy.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e7350fa", Component.options)
  } else {
    hotAPI.reload("data-v-3e7350fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(593);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("67781b10", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e7350fa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./privacy_and_policy.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e7350fa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./privacy_and_policy.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-3e7350fa], span[data-v-3e7350fa], div[data-v-3e7350fa], h3[data-v-3e7350fa]{\n    line-height: 1.618;\n}\n", ""]);

// exports


/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        stopLoader: function stopLoader() {
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit('isLoading', false);
        }
    },
    mounted: function mounted() {
        this.$nextTick(this.stopLoader());
    },
    updated: function updated() {
        this.$nextTick(this.stopLoader());
    },
    created: function created() {
        gtag('config', 'UA-129398000-1', { 'page_path': '/privacy-and-policy' });
    },
    metaInfo: function metaInfo() {

        return {
            title: ' قوانین و مقررات ',
            titleTemplate: 'باسکول | %s',
            meta: [{
                name: 'description',
                content: 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
            }, {
                name: 'author',
                content: 'باسکول'
            }, {
                'property': 'og:description',
                'content': 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
            }, {
                'property': 'og:site_name',
                'content': 'باسکول بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران'
            }, {
                'property': 'og:title',
                'content': ' باسکول | بازار خرید و فروش عمده محصولات کشاورزی '
            }]

        };
    }
});

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-content-index-pages" }, [
      _c("section", { staticClass: "parallax-section policy" }, [
        _c("div", { staticClass: "overlay" }),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "  col-md-12 col-sm-12" }, [
            _c("h3", { staticClass: "text-right" }, [
              _vm._v("قوانین استفاده از باسکول")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-right" }, [
              _vm._v(
                "باسکول، بستر تجاری آنلاین است که از طریق آن هر کاربر ثبت شده می تواند\n                    برای برقراری و توسعه کسب و کار با دیگر تولید کنندگان و خریداران همکاری کند. شرایط و مقررات\n                    تشکیل شده در این صفحه مشخص می کند که چگونه باید وب سایت و خدمات مورد استفاده قرار گیرد و\n                    نهایتا روابط فی مابین باسکول و کاربران (ثبت شده یا ثبت نشده) را تنظیم می کند. لطفاً شرایط\n                    و مقررات حاضر را به دقت مطالعه کنید و در صورتی که قوانین وب سایت برای شما قابل قبول نیست\n                    استفاده خود را از وب سایت و یا خدمات باسکول به هر نحو متوقف کنید.\n                    در استفاده از خدمات وب سایت باسکول فرض بر این است که عملاً این شرایط و مقررات و تغییرات\n                    بعدی آن را پذیرفته اید، در این صورت هیچ ادعایی ناشی از استفاده مداوم شما از این سایت و ادعای\n                    عدم مطالعه یا آگاهی شما از این مقررات و تغییرات بعدی ترتیب اثر داده نخواهد شد.\n                    شرایط درج آگهی در سامانه باسکول:\n                "
              )
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "text-right" }, [
              _c("li", [
                _vm._v(
                  "آگهی ها باید زیر مجموعه حوزه کشاورزی و دسته بندی های موجود در وبسایت باشند."
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " عدم مغایرت با قوانین جمهوری اسلامی ایران، ناقض حریم خصوصی افراد ، فاقد هرگونه توهین به\n                        ادیان رسمی کشور، آداب، رسوم، قومیت‌ها، لهجه‌ها و گویش‌های مختلف\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " عدم درج کالاهای ممنوعه مانند : ماریجوانا و مواد مخدر گیاهی و یا بذر و دانه آنها"
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "عدم درخواست کمک‌های نقدی یا پیش‌پرداخت برای معامله‌های از راه دور و عدم درج شماره حساب\n                        در متن آگهی\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(" نبود جملات نادرست از نظر املائی یا نگارشی در آگهی")
              ])
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n                    به منظور بهبود فرآیند تأیید و انتشار آگهی‌ها، سامانه باسکول ممکن است در مواردی بر اساس\n                    قوانین، متن یا آگهی شما را به طور جزئی تغییر دهد.\n                    مسئولیت استفاده از آگهی‌های این سایت بر عهده شماست و باسکول هیچ تعهدى در قبال خسارات\n                    مستقیم، اتفاقى، تبعى، غیرمستقیم و کیفرى، ناشى از دسترسى و استفاده شما از این سایت را ندارد.\n                    باسکول هیچ قرارداد، تعهدنامه یا سندی را با آگهی‌دهندگان حقیقی یا حقوقی منعقد نمی‌کند.\n                    کاربران باسکول در هر لحظه قادر به ویرایش آگهی خود هستند، بنابراین باسکول، هیچ‌گونه\n                    مسئولیتی را در قبال هر نوع آگهی درج شده در سایت نمی‌پذیرد و صرفاً مطالب درج شده توسط کاربران\n                    را نمایش می‌دهد.\n                    مسئولیت استفاده از هرگونه متن، پیام، توضیح، اطلاعات، عکس، مشخصات تماس و موارد مشابه که به\n                    باسکول جهت درج آگهی ارسال می‌شود یا در آن قرار می‌گیرد، شامل بازتولید، افشاء، مخابره، نشر و\n                    پخش آن بر عهده فرستنده اطلاعات است\n\n\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: " col-md-12 col-sm-12" }, [
            _c("h3", { staticClass: "text-right" }, [
              _vm._v("قوانین استفاده از چت باسکول")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-right" }, [
              _vm._v(
                "چت باسکول یک فضای ارتباطی عمومی بین اعضای باسکول است که با هدف تسهیل\n                    ارتباط و معاملات ارائه شده‌ است. هرگونه استفاده از چت باسکول به معنی پذیرفتن ضوابط و شرایط\n                    ذیل است:\n                "
              )
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "text-right" }, [
              _c("li", [
                _vm._v(
                  " مکاتبات کاربران از طریق چت باسکول باید مربوط به آگهی خاص و در خصوص ارائه و یا دریافت\n                        کالا و خدمات مورد اشاره باشد و استفاده از آن بابت مقاصد دیگر از جمله ارتباطات خصوصی مجاز\n                        نیست.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " استفاده از چت باسکول صرفاً باید مربوط به معاملات باشد و باسکول ممکن است برای ایجاد\n                        محیطی ایمن و جلوگیری از سوءاستفاده و مزاحمت، در صورت لزوم بر مکاتبات، نظارت ماشینی یا\n                        انسانی انجام دهد.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " مواردی از قبیل ارسال پیام و محتواهای غیراخلاقی یا نامربوط به معامله، استفاده از ادبیات\n                        غیرمؤدبانه، انجام هرگونه تبلیغات، ارائه اجناس و خدماتی که خلاف شرایط و قوانین هستند و\n                        همچنین ارسال پیام‌های انبوه، در صورتی که توسط کاربران گزارش شوند، مورد بررسی قرار گرفته\n                        و طبق قوانین باسکول ممکن است منجر به تعلیق یا مسدود شدن دائمی کاربر متخلف شود.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " تعلیق کاربر حالتی است که کاربر براساس گزارش کاربران دیگر درباره تخلف او، به مدت محدودی\n                        امکان استفاده از چت باسکول را ندارد. این مدت ممکن است یک، سه، هفت یا سی روز بوده و در\n                        صورت تکرار تخلف، این مدت تمدید گردد.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " مسدود شدن کاربر حالتی است که کاربر با توجه به نوع تخلف مشمول جریمه عدم امکان استفاده از\n                        چت باسکول بطور کلی خواهد بود.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " تعلیق شدن یا مسدود شدن کاربر به فراخور تخلف صورت گرفته و به تشخیص کارشناسان باسکول\n                        صورت می‌گیرد.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " لازم است کاربران هنگام باز کردن لینک‌های ارسال شده توسط کاربران دیگر احتیاط لازم را\n                        انجام دهند تا در معرض خطرات فیشینگ و کلاهبرداری‌های اینترنتی قرار نگیرند. باسکول هیچ\n                        گونه مسئولیتی در قبال وقوع فیشینگ و کلاهبرداری‌های اینترنتی توسط کاربران ندارد.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " هم‌چنین توصیه همیشگی باسکول به کاربران این است که از ارسال اطلاعات شخصی و خصوصی خود\n                        که برای انجام معامله غیرضروری هستند، خودداری کنید.\n                    "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  " در صورتی که کاربری، شما را مسدود نموده و یا آگهی خود را از باسکول حذف نماید، اطلاعات\n                        تماس او جزو حریم خصوصی وی محسوب شده و باسکول اجازه ندارد تا اطلاعات تماس وی را در\n                        اختیار کاربران دیگر قرار دهد. لذا لطفاً از انجام هرگونه توافق ناظر بر پرداخت وجه از طریق\n                        چت باسکول یا پرداخت وجه بدون اطمینان یافتن از دریافت جنس خودداری نمایید؛ و یا حتما از\n                        دریافت اطلاعات تماس معتبر جهت پیگیری معامله و توافقات یکدیگر قبل از حذف آگهی مطمئن شوید\n                        بدیهی است که در صورت وقوع کلاهبرداری یا سایر جرایم از طریق چت باسکول ، باسکول\n                        همکاری‌های لازم را جهت تحقیقات قضایی حسب دستور مقامات قضایی انجام خواهد داد.\n                    "
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e7350fa", module.exports)
  }
}

/***/ })

});