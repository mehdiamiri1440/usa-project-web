webpackJsonp([28],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_verification_info_vue__ = __webpack_require__(398);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_253e0867_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_verification_info_vue__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(744)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-253e0867"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_verification_info_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_253e0867_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_verification_info_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_253e0867_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_verification_info_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/layouts/main/verification-info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-253e0867", Component.options)
  } else {
    hotAPI.reload("data-v-253e0867", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_components_route__ = __webpack_require__(34);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Route: __WEBPACK_IMPORTED_MODULE_1__router_components_route__["a" /* default */] },
  methods: {
    stopLoader: function stopLoader() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("isLoading", false);
    }
  },
  mounted: function mounted() {
    var self = this;
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated: function updated() {
    this.$nextTick(this.stopLoader);
  },
  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/about-us" });
  },
  metaInfo: function metaInfo() {
    return {
      title: "احراز هویت ",
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

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(745);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("2d602478", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-253e0867\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verification-info.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-253e0867\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verification-info.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\np[data-v-253e0867],\nspan[data-v-253e0867],\ndiv[data-v-253e0867],\nh3[data-v-253e0867] {\n  line-height: 1.618;\n}\n.green-button[data-v-253e0867] {\n  width: initial;\n  padding: 13px 15px;\n  font-size: 16px;\n}\n.about-us-icon[data-v-253e0867] {\n  background: #fff;\n  border-radius: 4px;\n  padding: 15px;\n  margin-bottom: 15px;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n}\n.about-us-icon img[data-v-253e0867] {\n  max-width: 70px;\n  float: right;\n  margin-left: 15px;\n}\n.about-us-icon p[data-v-253e0867] {\n  float: right;\n  font-size: 17px;\n  margin-top: 17px;\n}\n.info-text[data-v-253e0867] {\n  margin-top: 30px;\n  font-size: 12px;\n}\n@media screen and (max-width: 767px) {\n.about-us-icon[data-v-253e0867] {\n    text-align: center;\n}\n.about-us-icon img[data-v-253e0867] {\n    margin: 0 auto;\n    float: none;\n}\n.about-us-icon p[data-v-253e0867] {\n    float: none;\n    width: 100%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-content-index-pages" }, [
    _c("section", { staticClass: "parallax-section policy" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12 col-sm-12" }, [
            _c("h3", { staticClass: "text-right" }, [
              _vm._v("کاربران احراز هویت شده چه کسانی هستند؟")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-12" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "text-center" },
                [
                  _vm.$parent.userId && _vm.$parent.isSeller == 1
                    ? _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: {
                            to: { name: "profileBasicSellerVeficiation" }
                          }
                        },
                        [_vm._v("شما هم احراز هویت کنید")]
                      )
                    : _vm.$parent.userId && _vm.$parent.isSeller == 0
                    ? _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: {
                            to: { name: "profileBasicBuyerVeficiation" }
                          }
                        },
                        [_vm._v("شما هم احراز هویت کنید")]
                      )
                    : _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: { to: { name: "login" } }
                        },
                        [_vm._v("شما هم احراز هویت کنید")]
                      )
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "text-center gray-text info-text" }, [
                _vm._v(
                  "\n              باسکول هیچ مسئولیتی در قبال سو رفتار کاربران احراز هویت شده به\n              عهده نمی گیرد و صرفا اطلاعات هویتی آنها را مطابق توضیحات بالا\n              تایید می کند.\n            "
                )
              ])
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
    return _c("div", { staticClass: "col-xs-12 about-us-icon" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(747),
          alt: ""
        }
      }),
      _vm._v(" "),
      _c("p", [_vm._v("اطلاعات کارت ملی آن ها نزد باسکول است.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12 about-us-icon" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(748),
          alt: ""
        }
      }),
      _vm._v(" "),
      _c("p", [_vm._v("مطابقت تصویر کارت ملی با تصویر خودشان انجام شده است.")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-12 about-us-icon" }, [
      _c("img", {
        attrs: {
          src: __webpack_require__(749),
          alt: ""
        }
      }),
      _vm._v(" "),
      _c("p", [_vm._v("اطلاعات آدرس مکانی انها احراز شده است.")])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-253e0867", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "/images/verify-icon-1.jpg?64e3ea0e84aaeb3411a0c7c75bca6429";

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "/images/verify-icon-3.jpg?77589c4efefbf091528f3f5be9aa4b0c";

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "/images/verify-icon-2.jpg?97208fed91fed0a07254b040f8f0745b";

/***/ })

});