webpackJsonp([36],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_privacy_and_policy_vue__ = __webpack_require__(442);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d52104c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_privacy_and_policy_vue__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(840)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6d52104c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_privacy_and_policy_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d52104c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_privacy_and_policy_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6d52104c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_privacy_and_policy_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\layouts\\main\\privacy_and_policy.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d52104c", Component.options)
  } else {
    hotAPI.reload("data-v-6d52104c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    stopLoader: function stopLoader() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("isLoading", false);
    }
  },
  mounted: function mounted() {
    this.$nextTick(this.stopLoader());
  },
  updated: function updated() {
    this.$nextTick(this.stopLoader());
  },
  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/privacy-and-policy" });
  },
  metaInfo: function metaInfo() {
    return {
      title: " قوانین و مقررات ",
      titleTemplate: "باسکول | %s",
      meta: [{
        name: "description",
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات غذایی و کشاورزی ایران | صادرات محصولات غذایی و کشاورزی"
      }, {
        name: "author",
        content: "باسکول"
      }, {
        property: "og:description",
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات غذایی و کشاورزی ایران | صادرات محصولات غذایی و کشاورزی"
      }, {
        property: "og:site_name",
        content: "باسکول بازارآنلاین خرید و فروش عمده محصولات غذایی و کشاورزی ایران"
      }, {
        property: "og:title",
        content: " باسکول | بازار خرید و فروش عمده محصولات غذایی و کشاورزی "
      }]
    };
  }
});

/***/ }),

/***/ 840:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(841);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("3ed6b2e7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6d52104c\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./privacy_and_policy.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-6d52104c\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./privacy_and_policy.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 841:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\np[data-v-6d52104c],\r\nspan[data-v-6d52104c],\r\ndiv[data-v-6d52104c],\r\nh3[data-v-6d52104c] {\r\n  line-height: 1.618;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
          _c("div", { staticClass: "col-md-12 col-sm-12" }, [
            _c("h3", { staticClass: "text-right" }, [
              _vm._v("قوانین استفاده از باسکول")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-right" }, [
              _vm._v(
                "\n          باسکول، بستر تجاری آنلاین است که از طریق آن هر کاربر ثبت شده می\n          تواند برای برقراری و توسعه کسب و کار با دیگر تولید کنندگان و\n          خریداران همکاری کند. شرایط و مقررات تشکیل شده در این صفحه مشخص می\n          کند که چگونه باید وب سایت و خدمات مورد استفاده قرار گیرد و نهایتا\n          روابط فی مابین باسکول و کاربران (ثبت شده یا ثبت نشده) را تنظیم می\n          کند. لطفاً شرایط و مقررات حاضر را به دقت مطالعه کنید و در صورتی که\n          قوانین وب سایت برای شما قابل قبول نیست استفاده خود را از وب سایت و\n          یا خدمات باسکول به هر نحو متوقف کنید. در استفاده از خدمات وب سایت\n          باسکول فرض بر این است که عملاً این شرایط و مقررات و تغییرات بعدی آن\n          را پذیرفته اید، در این صورت هیچ ادعایی ناشی از استفاده مداوم شما از\n          این سایت و ادعای عدم مطالعه یا آگاهی شما از این مقررات و تغییرات\n          بعدی ترتیب اثر داده نخواهد شد. شرایط درج آگهی در سامانه باسکول:\n        "
              )
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "text-right" }, [
              _c("li", [
                _vm._v(
                  "\n            آگهی ها باید زیر مجموعه حوزه کشاورزی و دسته بندی های موجود در\n            وبسایت باشند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            عدم مغایرت با قوانین جمهوری اسلامی ایران، ناقض حریم خصوصی افراد ،\n            فاقد هرگونه توهین به ادیان رسمی کشور، آداب، رسوم، قومیت‌ها،\n            لهجه‌ها و گویش‌های مختلف\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            عدم درج کالاهای ممنوعه مانند : ماریجوانا و مواد مخدر گیاهی و یا\n            بذر و دانه آنها\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            عدم درخواست کمک‌های نقدی یا پیش‌پرداخت برای معامله‌های از راه دور\n            و عدم درج شماره حساب در متن آگهی\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("نبود جملات نادرست از نظر املائی یا نگارشی در آگهی")
              ])
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n          به منظور بهبود فرآیند تأیید و انتشار آگهی‌ها، سامانه باسکول ممکن است\n          در مواردی بر اساس قوانین، متن یا آگهی شما را به طور جزئی تغییر دهد.\n          مسئولیت استفاده از آگهی‌های این سایت بر عهده شماست و باسکول هیچ\n          تعهدى در قبال خسارات مستقیم، اتفاقى، تبعى، غیرمستقیم و کیفرى، ناشى\n          از دسترسى و استفاده شما از این سایت را ندارد. باسکول هیچ قرارداد،\n          تعهدنامه یا سندی را با آگهی‌دهندگان حقیقی یا حقوقی منعقد نمی‌کند.\n          کاربران باسکول در هر لحظه قادر به ویرایش آگهی خود هستند، بنابراین\n          باسکول، هیچ‌گونه مسئولیتی را در قبال هر نوع آگهی درج شده در سایت\n          نمی‌پذیرد و صرفاً مطالب درج شده توسط کاربران را نمایش می‌دهد.\n          مسئولیت استفاده از هرگونه متن، پیام، توضیح، اطلاعات، تصویر، مشخصات\n          تماس و موارد مشابه که به باسکول جهت درج آگهی ارسال می‌شود یا در آن\n          قرار می‌گیرد، شامل بازتولید، افشاء، مخابره، نشر و پخش آن بر عهده\n          فرستنده اطلاعات است\n        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12 col-sm-12" }, [
            _c("h3", { staticClass: "text-right" }, [
              _vm._v("قوانین استفاده از چت باسکول")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-right" }, [
              _vm._v(
                "\n          چت باسکول یک فضای ارتباطی عمومی بین اعضای باسکول است که با هدف تسهیل\n          ارتباط و معاملات ارائه شده‌ است. هرگونه استفاده از چت باسکول به معنی\n          پذیرفتن ضوابط و شرایط ذیل است:\n        "
              )
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "text-right" }, [
              _c("li", [
                _vm._v(
                  "\n            مکاتبات کاربران از طریق چت باسکول باید مربوط به آگهی خاص و در خصوص\n            ارائه و یا دریافت کالا و خدمات مورد اشاره باشد و استفاده از آن\n            بابت مقاصد دیگر از جمله ارتباطات خصوصی مجاز نیست.\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            استفاده از چت باسکول صرفاً باید مربوط به معاملات باشد و باسکول\n            ممکن است برای ایجاد محیطی ایمن و جلوگیری از سوءاستفاده و مزاحمت،\n            در صورت لزوم بر مکاتبات، نظارت ماشینی یا انسانی انجام دهد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            مواردی از قبیل ارسال پیام و محتواهای غیراخلاقی یا نامربوط به\n            معامله، استفاده از ادبیات غیرمؤدبانه، انجام هرگونه تبلیغات، ارائه\n            اجناس و خدماتی که خلاف شرایط و قوانین هستند و همچنین ارسال\n            پیام‌های انبوه، در صورتی که توسط کاربران گزارش شوند، مورد بررسی\n            قرار گرفته و طبق قوانین باسکول ممکن است منجر به تعلیق یا مسدود شدن\n            دائمی کاربر متخلف شود.\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            تعلیق کاربر حالتی است که کاربر براساس گزارش کاربران دیگر درباره\n            تخلف او، به مدت محدودی امکان استفاده از چت باسکول را ندارد. این\n            مدت ممکن است یک، سه، هفت یا سی روز بوده و در صورت تکرار تخلف، این\n            مدت تمدید گردد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            مسدود شدن کاربر حالتی است که کاربر با توجه به نوع تخلف مشمول جریمه\n            عدم امکان استفاده از چت باسکول بطور کلی خواهد بود.\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            تعلیق شدن یا مسدود شدن کاربر به فراخور تخلف صورت گرفته و به تشخیص\n            کارشناسان باسکول صورت می‌گیرد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            لازم است کاربران هنگام باز کردن لینک‌های ارسال شده توسط کاربران\n            دیگر احتیاط لازم را انجام دهند تا در معرض خطرات فیشینگ و\n            کلاهبرداری‌های اینترنتی قرار نگیرند. باسکول هیچ گونه مسئولیتی در\n            قبال وقوع فیشینگ و کلاهبرداری‌های اینترنتی توسط کاربران ندارد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            هم‌چنین توصیه همیشگی باسکول به کاربران این است که از ارسال اطلاعات\n            شخصی و خصوصی خود که برای انجام معامله غیرضروری هستند، خودداری\n            کنید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n            در صورتی که کاربری، شما را مسدود نموده و یا آگهی خود را از باسکول\n            حذف نماید، اطلاعات تماس او جزو حریم خصوصی وی محسوب شده و باسکول\n            اجازه ندارد تا اطلاعات تماس وی را در اختیار کاربران دیگر قرار دهد.\n            لذا لطفاً از انجام هرگونه توافق ناظر بر پرداخت وجه از طریق چت\n            باسکول یا پرداخت وجه بدون اطمینان یافتن از دریافت جنس خودداری\n            نمایید؛ و یا حتما از دریافت اطلاعات تماس معتبر جهت پیگیری معامله و\n            توافقات یکدیگر قبل از حذف آگهی مطمئن شوید بدیهی است که در صورت\n            وقوع کلاهبرداری یا سایر جرایم از طریق چت باسکول ، باسکول\n            همکاری‌های لازم را جهت تحقیقات قضایی حسب دستور مقامات قضایی انجام\n            خواهد داد.\n          "
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6d52104c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});