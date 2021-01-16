webpackJsonp([31],{

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(930)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(932)
/* template */
var __vue_template__ = __webpack_require__(933)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-34e58b5e"
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
Component.options.__file = "resources/assets/js/components/dashboard/seller/guide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34e58b5e", Component.options)
  } else {
    hotAPI.reload("data-v-34e58b5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(931);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("d1c523f0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34e58b5e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./guide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34e58b5e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./guide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.help[data-v-34e58b5e] {\n  direction: rtl;\n  line-height: 1.618;\n}\nol[data-v-34e58b5e] {\n  list-style: inherit;\n  list-style-type: decimal !important;\n}\nul[data-v-34e58b5e] {\n  padding: 0 15px;\n  list-style: inherit;\n}\n.help .title_list_help[data-v-34e58b5e] {\n  font-size: 16px;\n  font-weight: 800;\n}\n.help .title_list_help ol[data-v-34e58b5e] {\n  margin: 25px 0;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 15px 30px;\n  -webkit-box-shadow: 0 0 9px rgba(0, 0, 0, 0.075);\n          box-shadow: 0 0 9px rgba(0, 0, 0, 0.075);\n  background: #fff;\n}\n.help .title_list_help li[data-v-34e58b5e] {\n  padding: 6px 0;\n}\n.title[data-v-34e58b5e] {\n  text-align: right;\n  padding: 13px 15px;\n}\n.title h1[data-v-34e58b5e] {\n  font-size: 18px;\n  font-weight: bold;\n}\n@media screen and (max-width: 767px) {\n.title[data-v-34e58b5e] {\n    text-align: center;\n}\n.main-content[data-v-34e58b5e] {\n    padding-bottom: 90px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 932:
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
  data: function data() {
    return {
      items: [{
        message: "راهنما",
        url: "guide"
      }]
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", false);
  },
  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/guide" });
  }
});

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "main-content col-xs-12" }, [
    _c("div", { staticClass: "help" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("ul", { staticClass: "col-xs-12" }, [
        _c("li", { staticClass: "title_list_help" }, [
          _vm._v(
            "\n        کشاورزان و تامین کنندگان محترم، می توانید نسبت به فروش مستقیم و ثبت\n        محصولات خود و طبق راهنمای زیر اقدام کنید:\n        "
          ),
          _c("ol", { staticClass: "list-group" }, [
            _c("li", [
              _vm._v(
                "\n            در صورتی که از طریق گوشی موبایل خود از خدمات وبسایت استفاده می\n            کنید بالای صفحه گوشه سمت راست روی آیکون مربوطه بزنید تا به منو\n            دسترسی پیدا کنید.\n          "
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              [
                _vm._v(
                  "\n            تکمیل کردن هر چه بیشتر پرفایل سبب رغبت بیشتر خریداران با شما می\n            شود. شما میتواننید در قسمت\n            "
                ),
                _c(
                  "router-link",
                  { attrs: { to: { name: "profileBasicSeller" } } },
                  [_vm._v("\n              ویرایش پروفایل ")]
                ),
                _vm._v(
                  "نسبت به تکمیل و به روز رسانی پروفایل خود اقدام کنید.\n          "
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _vm._v("\n            به قسمت\n            "),
                _c(
                  "router-link",
                  { attrs: { to: { name: "registerProductSeller" } } },
                  [_vm._v("ثبت محصول ")]
                ),
                _vm._v(
                  "رفته و اطلاعات محصولات خود را بصورت کامل پر کنید. این محصولات\n            بهمراه جزییات در صفحه پروفایل شخصی شما به خریداران نمایش داده می\n            شود.\n          "
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _vm._v(
                  "\n            پیشنهاد های خرید از سوی خریداران را میتوانید در قسمت\n            "
                ),
                _c(
                  "router-link",
                  { attrs: { to: { name: "buyAdRequestsSeller" } } },
                  [_vm._v("درخواست ها")]
                ),
                _vm._v(
                  "مشاهده کنیدو در صورت داشتن آمادگی جهت تامین محصول، قیمت پیشنهادی،\n            عکس محصولات و توضیحات مربوطه را به خریدار ارسال نمایید.\n          "
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _vm._v(
                  "\n            خریداران در صورت رغبت از طریق پیام با شما در ارتباط خواهند بود.\n            لیست پیام های شما در قسمت\n            "
                ),
                _c(
                  "router-link",
                  { attrs: { to: { name: "messagesSeller" } } },
                  [_vm._v("پیام ها")]
                ),
                _vm._v("قرار دارد.\n          ")
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n            سامانه ی باسکول به منظور حفظ حریم خصوصی افراد شماره فروشندگان و\n            خریداران را به دیگران نمایش نمی دهد. افراد در صورت تمایل میتوانند\n            شماره تماس خود را در پیام رد و بدل کنند.\n          "
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("در صورت بروز هرگونه مشکل با خدمتگزاران خود تماس بگیرید.")
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title col-xs-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12 col-sm-4 pull-right" }, [
          _c("h1", [_vm._v("راهنما")])
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
    require("vue-hot-reload-api")      .rerender("data-v-34e58b5e", module.exports)
  }
}

/***/ })

});