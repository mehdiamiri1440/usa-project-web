webpackJsonp([35],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_show_number_guide_vue__ = __webpack_require__(352);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51cd07aa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_show_number_guide_vue__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(593)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51cd07aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_show_number_guide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51cd07aa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_show_number_guide_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51cd07aa_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_show_number_guide_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/seller/show-number-guide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51cd07aa", Component.options)
  } else {
    hotAPI.reload("data-v-51cd07aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: ""
    };
  },
  methods: {
    showWallet: function showWallet() {
      $("#wallet-modal").modal("show");
    }
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", false);
  },
  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/guide" });
  }
});

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(594);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2).default
var update = add("536cf0c6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-51cd07aa\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show-number-guide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-51cd07aa\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show-number-guide.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.main-content[data-v-51cd07aa] {\n  direction: rtl;\n  line-height: 1.618;\n}\n.guide-wrapper[data-v-51cd07aa] {\n  max-width: 992px;\n  margin: 50px auto;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 30px;\n}\nh1[data-v-51cd07aa] {\n  font-size: 18px;\n  font-weight: bold;\n}\np.default-text[data-v-51cd07aa] {\n  font-size: 16px;\n  color: #333;\n  margin: 30px auto;\n  font-weight: bold;\n}\n.info-wrapper[data-v-51cd07aa] {\n  max-width: 500px;\n  background: #f6fbff;\n  margin: 0 auto;\n  border-radius: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 15px 10px;\n  margin-bottom: 15px;\n}\n.info-wrapper p[data-v-51cd07aa] {\n  color: #1da1f2;\n  font-size: 16px;\n  font-weight: 500;\n}\n.info-wrapper button[data-v-51cd07aa] {\n  margin: 0;\n  border-radius: 8px;\n  font-size: 15px;\n  padding: 6px;\n  width: 123px;\n}\n.info-wrapper.upgrade[data-v-51cd07aa] {\n  background: #eefef6;\n}\n.info-wrapper.upgrade p[data-v-51cd07aa] {\n  color: #21ad93;\n}\nul.list-info-wrapper[data-v-51cd07aa] {\n  padding-right: 15px;\n  margin: 30px auto;\n}\nul.list-info-wrapper li[data-v-51cd07aa] {\n  color: #556080;\n  font-size: 15px;\n  font-weight: 500;\n  margin-bottom: 15px;\n  position: relative;\n}\nul.list-info-wrapper li[data-v-51cd07aa]::after {\n  content: \"*\";\n  color: #e41c38;\n  position: absolute;\n  top: 4px;\n  right: -15px;\n}\n.notic-wrapper[data-v-51cd07aa] {\n  background: #fafafa;\n  border-radius: 12px;\n  padding: 15px;\n}\n.notic-wrapper span[data-v-51cd07aa] {\n  color: #556080;\n  margin: 7px auto 20px;\n  display: block;\n}\n@media screen and (max-width: 991px) {\n.guide-wrapper[data-v-51cd07aa] {\n    border: none;\n    padding: 0;\n}\n}\n@media screen and (max-width: 767px) {\n.title[data-v-51cd07aa] {\n    text-align: center;\n}\n.main-content[data-v-51cd07aa] {\n    padding-bottom: 90px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "main-content col-xs-12" }, [
    _c("div", { staticClass: "guide-wrapper" }, [
      _c("h1", [_vm._v("راهنمای نمایش اطلاعات تماس")]),
      _vm._v(" "),
      _c("p", { staticClass: "default-text" }, [
        _vm._v(
          "\n      برای نمايش شماره تماس خود به خریداران، می توانید یکی از راه های زیر را\n      انجام دهید.\n    "
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "info-wrapper upgrade" },
        [
          _c("p", [_vm._v("ارتقا عضویت در باسکول")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "green-button bg-light-green",
              attrs: {
                tag: "button",
                to: { name: "dashboardPricingTableSeller" }
              }
            },
            [_vm._v("\n        ارتقا عضویت\n      ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "info-wrapper" }, [
        _c("p", [_vm._v("شارژ کیف پول خود در باسکول")]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "green-button bg-blue",
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.showWallet()
              }
            }
          },
          [_vm._v("\n        افزایش موجودی\n      ")]
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "notic-wrapper" }, [
        _c("p", [
          _vm._v(
            "\n        نکته: بصورت پیش فرض اجازه نمايش شماره تماس شما به خریداران فعال است\n      "
          )
        ]),
        _vm._v(" "),
        _c(
          "span",
          [
            _vm._v(
              "\n        در صورتیکه تمايل به نمايش شماره ندارید قسمت\n        "
            ),
            _c(
              "router-link",
              { attrs: { to: { name: "profileBasicSeller" } } },
              [_vm._v("ویرایش پروفایل")]
            ),
            _vm._v("\n        را انتخاب کرده و تیک دسترسی را بردارید.\n      ")
          ],
          1
        ),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n        نکته: تنها کاربرانی که ارتقا عضویت داده اند به شماره تماس خریداران\n        دسترسی دارند.\n      "
          )
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
    return _c("ul", { staticClass: "list-info-wrapper" }, [
      _c("li", [
        _vm._v(
          "\n        هر خریدار جدید که شماره تماس شما را ببند مبلغ\n        "
        ),
        _c("span", { staticClass: "green-text" }, [_vm._v("۵۰۰ تومان")]),
        _vm._v(
          " از حساب کیف پول شما کم خواهد\n        شد. (خریداران تکراری محاسبه نمی شوند)\n      "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n        کاربرانی که نوع عضویت پایه یا ویژه دارند نیازی به شارژ کیف پول ندارند.\n      "
        )
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-51cd07aa", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});