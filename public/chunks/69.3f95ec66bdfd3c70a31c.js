webpackJsonp([69],{

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1016)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(1018)
/* template */
var __vue_template__ = __webpack_require__(1019)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04bd379e"
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
Component.options.__file = "resources/assets/js/components/dashboard/seller/support.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04bd379e", Component.options)
  } else {
    hotAPI.reload("data-v-04bd379e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1016:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1017);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("371bbe19", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04bd379e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./support.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04bd379e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./support.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1017:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.help[data-v-04bd379e] {\n  direction: rtl;\n  line-height: 1.618;\n}\nol[data-v-04bd379e] {\n  list-style: inherit;\n  list-style-type: decimal !important;\n}\nul[data-v-04bd379e] {\n  padding: 0 15px;\n  list-style: inherit;\n}\n.help .title_list_help[data-v-04bd379e] {\n  font-size: 16px;\n  font-weight: 800;\n}\n.help .title_list_help ol[data-v-04bd379e] {\n  margin: 25px 0;\n  font-size: 14px;\n  font-weight: 400;\n  padding: 15px 30px;\n  -webkit-box-shadow: 0 0 9px rgba(0, 0, 0, 0.075);\n          box-shadow: 0 0 9px rgba(0, 0, 0, 0.075);\n  background: #fff;\n}\n.help .title_list_help li[data-v-04bd379e] {\n  padding: 6px 0;\n}\n.title[data-v-04bd379e] {\n  text-align: right;\n  padding: 13px 15px;\n}\n.title h1[data-v-04bd379e] {\n  font-size: 18px;\n  font-weight: bold;\n}\n@media screen and (max-width: 767px) {\n.title[data-v-04bd379e] {\n    text-align: center;\n}\n.main-content[data-v-04bd379e] {\n    padding-bottom: 90px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1018:
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

/***/ 1019:
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
    return _c("section", { staticClass: "main-content col-xs-12" }, [
      _c("div", { staticClass: "help" }, [
        _c("div", { staticClass: "title col-xs-12" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12 col-sm-4 pull-right" }, [
              _c("h1", [_vm._v("پشتیبانی باسکول")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("ul", { staticClass: "col-xs-12" }, [
          _c("li", { staticClass: "title_list_help" }, [
            _vm._v(
              "\n        کشاورزان و تامین کنندگان محترم، می توانید نسبت به فروش مستقیم و ثبت\n        محصولات خود و طبق راهنمای زیر اقدام کنید:\n        "
            ),
            _c("ol", { staticClass: "list-group" }, [
              _c("li", [_vm._v("شماره تماس :‌09118413054 / 09178928266")]),
              _vm._v(" "),
              _c("li", [_vm._v("ایمیل پشتیبانی :‌support@buskool.com")]),
              _vm._v(" "),
              _c("li", [
                _vm._v("ایمیل شخصی مدیر فنی :‌ ali_delkhosh@ymail.com")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-12 col-sm-12 bg-white shadow-content" },
          [
            _c("h3", { staticClass: "text-right" }, [_vm._v("ارتباط با ما")]),
            _vm._v(" "),
            _c("p", { staticClass: "text-right" }, [
              _vm._v(
                "\n        از هریک از راه های زیر که برایتان راحت تر است با ما در ارتباط باشید.\n      "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("ul", { staticClass: "text-right" }, [
              _c("li", [_vm._v("شماره تماس :‌09118413054 / 09178928266")]),
              _vm._v(" "),
              _c("li", [_vm._v("ایمیل پشتیبانی :‌support@buskool.com")]),
              _vm._v(" "),
              _c("li", [
                _vm._v("ایمیل شخصی مدیر فنی :‌ ali_delkhosh@ymail.com")
              ])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-right" }, [
              _vm._v(
                "\n        سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل\n        support@buskool.com با ما در میان بگذارید.\n      "
              )
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04bd379e", module.exports)
  }
}

/***/ })

});