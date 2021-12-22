webpackJsonp([45],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_guide_vue__ = __webpack_require__(429);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e2d7bbf8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_guide_vue__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(788)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e2d7bbf8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_guide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e2d7bbf8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_guide_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e2d7bbf8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_guide_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\buyer\\guide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e2d7bbf8", Component.options)
  } else {
    hotAPI.reload("data-v-e2d7bbf8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 429:
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



/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(789);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("8e7b66f6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e2d7bbf8\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./guide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e2d7bbf8\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./guide.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.help[data-v-e2d7bbf8] {\r\n  direction: rtl;\r\n  line-height: 1.618;\n}\nol[data-v-e2d7bbf8] {\r\n  list-style: inherit;\r\n  list-style-type: decimal !important;\n}\nul[data-v-e2d7bbf8] {\r\n  padding: 0 15px;\r\n  list-style: inherit;\n}\n.help .title_list_help[data-v-e2d7bbf8] {\r\n  font-size: 16px;\r\n  font-weight: 800;\n}\n.help .title_list_help ol[data-v-e2d7bbf8] {\r\n  margin: 25px 0;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  padding: 15px 30px;\r\n  border: 1px solid #e9ecef;\r\n  border-radius: 12px;\r\n  background: #fff;\n}\n.help .title_list_help li[data-v-e2d7bbf8] {\r\n  padding: 6px 0;\n}\n.title[data-v-e2d7bbf8] {\r\n  text-align: right;\r\n  padding: 13px 15px;\n}\n.title h1[data-v-e2d7bbf8] {\r\n  font-size: 18px;\r\n  font-weight: bold;\n}\n@media screen and (max-width: 992px) {\n.list-group[data-v-e2d7bbf8] {\r\n    margin-bottom: 100px !important;\n}\n}\n@media screen and (max-width: 767px) {\n.title[data-v-e2d7bbf8] {\r\n    text-align: center;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
            "\n        بازرگانان و خریدارن محترم می توانید طبق راهنمای زیر، نسبت به ثبت سفارش\n        و استعلام قیمت محصولات اقدام کنید:\n        "
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
                _vm._v("\n            به قسمت\n            "),
                _c(
                  "router-link",
                  { attrs: { to: { name: "registerRequestBuyer" } } },
                  [_vm._v("\n              ثبت درخواست خرید ")]
                ),
                _vm._v(
                  "رفته و اطلاعات لازم جهت خرید محصول مورد نظر خود را وارد کنید.\n            "
                ),
                _c(
                  "router-link",
                  {
                    staticClass: "guide-link",
                    attrs: { to: { name: "registerRequestBuyer" } }
                  },
                  [
                    _vm._v("\n              ثبت درخواست خرید\n              "),
                    _c("i", { staticClass: "fa fa-arrow-left" })
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n            پس از تنظیم و ثبت درخواست خرید، این درخواست ابتدا باید به تایید\n            کارشناسان ما برسد و سپس به تامین کنندگان مرتبط ارسال می شود تا\n            پیشنهادهای خود را برای شما ارسال کنند.\n          "
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              [
                _vm._v("\n            در قسمت\n            "),
                _c("router-link", { attrs: { to: { name: "productList" } } }, [
                  _vm._v("\n              لیست محصولات ")
                ]),
                _vm._v(
                  "می توانید متناسب با نیاز خود محصول و تامین کنندگان مورد نظر را\n            پیدا کرده و نسبت به انجام معامله با وی و کسب اطلاعات بیشتر، با\n            مراجعه به صفحه ی پروفایل فروشنده و کلیک روی دکمه ی ارسال پیام با\n            او وارد چت شوید.\n            "
                ),
                _c(
                  "router-link",
                  {
                    staticClass: "guide-link",
                    attrs: { to: { name: "productList" } }
                  },
                  [
                    _vm._v("\n              لیست محصولات\n              "),
                    _c("i", { staticClass: "fa fa-arrow-left" })
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n            پس از ثبت درخواست خرید و تایید آن توسط کارشناسان باسکول شماره تماس\n            شما برای فروشندگان واقعی قابل دسترسی است برای تغییر تنظیمات از\n            قسمت ویرایش پروفایل، دسترسی به شماره تماس را غیر فعال کنید.\n          "
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "\n            هر گونه بروز رسانی پروفایل، پس از تایید کارشناسان ما برای دیگران\n            قابل مشاهده خواهد بود.\n          "
              )
            ]),
            _vm._v(" "),
            _c(
              "li",
              [
                _vm._v(
                  "\n            در صورت بروز هرگونه مشکل با خدمتگزاران خود تماس بگیرید.\n            "
                ),
                _c(
                  "router-link",
                  {
                    staticClass: "guide-link",
                    attrs: { to: { name: "supportBuyer" } }
                  },
                  [
                    _vm._v("\n              پشتیبانی باسکول\n              "),
                    _c("i", { staticClass: "fa fa-arrow-left" })
                  ]
                )
              ],
              1
            )
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
      _c("div", { staticClass: "row hidden-xs hidden-sm" }, [
        _c("div", { staticClass: "col-xs-12 col-sm-4 pull-right" }, [
          _c("h1", [_vm._v("راهنما")])
        ])
      ]),
      _vm._v(" "),
      _c("br")
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e2d7bbf8", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});