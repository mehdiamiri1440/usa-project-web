webpackJsonp([0],{

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(957)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(959)
/* template */
var __vue_template__ = __webpack_require__(960)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51cd07aa"
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

module.exports = Component.exports


/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(958);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("b5f29f8e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-51cd07aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show-number-guide.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-51cd07aa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./show-number-guide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.main-content[data-v-51cd07aa] {\n  direction: rtl;\n  line-height: 1.618;\n}\n.guide-wrapper[data-v-51cd07aa] {\n  max-width: 992px;\n  margin: 50px auto;\n  border: 1px solid #e9ecef;\n  border-radius: 12px;\n  padding: 30px;\n}\nh1[data-v-51cd07aa] {\n  font-size: 18px;\n  font-weight: bold;\n}\np.default-text[data-v-51cd07aa] {\n  font-size: 16px;\n  color: #333;\n  margin: 30px auto;\n  font-weight: bold;\n}\n@media screen and (max-width: 767px) {\n.title[data-v-51cd07aa] {\n    text-align: center;\n}\n.main-content[data-v-51cd07aa] {\n    padding-bottom: 90px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 959:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

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
            [_vm._v("\n        ارتقاع عضویت\n      ")]
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
      _vm._m(1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [
        _vm._v(
          "\n        هر خریدار جدید که شماره تماس شما را ببند مبلغ ۵۰۰ تومان از حساب کیف\n        پول شما کم خواهد شد. (خریداران تکراری محاسبه نمی شوند)\n      "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n        کاربرانی که نوع عضویت پایه یا ویژه دارند نیازی به شارژ کیف پول ندارند.\n      "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notic-wrapper" }, [
      _c("p", [
        _vm._v(
          "\n        نکته: بصورت پیش فرض اجازه نمايش شماره تماس شما به خریداران فعال است\n      "
        )
      ]),
      _vm._v(" "),
      _c("span", [
        _vm._v(
          "\n        در صورتیکه تمايل به نمايش شماره ندارید از قسمت: باسکول من گزینه ویرایش\n        پروفایل را انتخاب کرده و تیک دسترسی را بردارید.\n      "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "\n        نکته: تنها کاربرانی که ارتقا عضویت داده اند به شماره تماس خریداران\n        دسترسی دارند.\n      "
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
    require("vue-hot-reload-api")      .rerender("data-v-51cd07aa", module.exports)
  }
}

/***/ })

});