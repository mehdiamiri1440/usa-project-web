webpackJsonp([40],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_show_number_guide_vue__ = __webpack_require__(406);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2758c4ec_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_show_number_guide_vue__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(686)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2758c4ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_show_number_guide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2758c4ec_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_show_number_guide_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2758c4ec_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_show_number_guide_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\seller\\show-number-guide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2758c4ec", Component.options)
  } else {
    hotAPI.reload("data-v-2758c4ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 406:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(687);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("7063f8aa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2758c4ec\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show-number-guide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2758c4ec\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show-number-guide.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.main-content[data-v-2758c4ec] {\r\n  direction: rtl;\r\n  line-height: 1.618;\n}\n.guide-wrapper[data-v-2758c4ec] {\r\n  max-width: 992px;\r\n  margin: 50px auto;\r\n  border: 1px solid #e9ecef;\r\n  border-radius: 12px;\r\n  padding: 30px;\n}\nh1[data-v-2758c4ec] {\r\n  font-size: 18px;\r\n  font-weight: bold;\n}\np.default-text[data-v-2758c4ec] {\r\n  font-size: 16px;\r\n  color: #333;\r\n  margin: 30px auto;\r\n  font-weight: bold;\n}\n.info-wrapper[data-v-2758c4ec] {\r\n  max-width: 500px;\r\n  background: #f6fbff;\r\n  margin: 0 auto;\r\n  border-radius: 12px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 15px 10px;\r\n  margin-bottom: 15px;\n}\n.info-wrapper p[data-v-2758c4ec] {\r\n  color: #1da1f2;\r\n  font-size: 16px;\r\n  font-weight: 500;\n}\n.info-wrapper button[data-v-2758c4ec] {\r\n  margin: 0;\r\n  border-radius: 8px;\r\n  font-size: 15px;\r\n  padding: 6px;\r\n  width: 123px;\n}\n.info-wrapper.upgrade[data-v-2758c4ec] {\r\n  background: #eefef6;\n}\n.info-wrapper.upgrade p[data-v-2758c4ec] {\r\n  color: #21ad93;\n}\nul.list-info-wrapper[data-v-2758c4ec] {\r\n  padding-right: 15px;\r\n  margin: 30px auto;\n}\nul.list-info-wrapper li[data-v-2758c4ec] {\r\n  color: #556080;\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n  margin-bottom: 15px;\r\n  position: relative;\n}\nul.list-info-wrapper li[data-v-2758c4ec]::after {\r\n  content: \"*\";\r\n  color: #e41c38;\r\n  position: absolute;\r\n  top: 4px;\r\n  right: -15px;\n}\n.notic-wrapper[data-v-2758c4ec] {\r\n  background: #fafafa;\r\n  border-radius: 12px;\r\n  padding: 15px;\n}\n.notic-wrapper span[data-v-2758c4ec] {\r\n  color: #556080;\r\n  margin: 7px auto 20px;\r\n  display: block;\n}\n@media screen and (max-width: 991px) {\n.guide-wrapper[data-v-2758c4ec] {\r\n    border: none;\r\n    padding: 0;\n}\n}\n@media screen and (max-width: 767px) {\n.title[data-v-2758c4ec] {\r\n    text-align: center;\n}\n.main-content[data-v-2758c4ec] {\r\n    padding-bottom: 90px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 688:
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
              "\n        در صورتیکه تمايل به نمايش شماره ندارید از قسمت باسکول من، قسمت\n        "
            ),
            _c(
              "router-link",
              { attrs: { to: { name: "profileBasicSeller" } } },
              [_vm._v("ویرایش پروفایل")]
            ),
            _vm._v(
              "\n        را انتخاب کرده و نمايش شماره را غیر فعال کنید.\n      "
            )
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
    require("vue-hot-reload-api")      .rerender("data-v-2758c4ec", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});