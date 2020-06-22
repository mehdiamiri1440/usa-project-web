webpackJsonp([26],{

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(611)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(613)
/* template */
var __vue_template__ = __webpack_require__(614)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c539e768"
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
Component.options.__file = "resources/assets/js/components/layouts/main/verfication-info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c539e768", Component.options)
  } else {
    hotAPI.reload("data-v-c539e768", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(612);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7ba84a00", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c539e768\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verfication-info.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c539e768\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verfication-info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-c539e768],\nspan[data-v-c539e768],\ndiv[data-v-c539e768],\nh3[data-v-c539e768] {\n  line-height: 1.618;\n}\n.green-button[data-v-c539e768] {\n  width: initial;\n  padding: 13px 15px;\n  font-size: 16px;\n}\n.about-us-icon[data-v-c539e768] {\n  background: #fff;\n  border-radius: 4px;\n  padding: 15px;\n  margin-bottom: 15px;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n}\n.about-us-icon img[data-v-c539e768] {\n  max-width: 70px;\n  float: right;\n  margin-left: 15px;\n}\n.about-us-icon p[data-v-c539e768] {\n  float: right;\n  font-size: 17px;\n  margin-top: 17px;\n}\n", ""]);

// exports


/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_components_route__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_components_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__router_components_route__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Route: __WEBPACK_IMPORTED_MODULE_1__router_components_route___default.a },
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
      title: " درباره ما ",
      titleTemplate: "باسکول | %s",
      meta: [{
        name: "description",
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی"
      }, {
        name: "author",
        content: "باسکول"
      }, {
        property: "og:description",
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی"
      }, {
        property: "og:site_name",
        content: "باسکول بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران"
      }, {
        property: "og:title",
        content: " باسکول | بازار خرید و فروش عمده محصولات کشاورزی "
      }]
    };
  }
});

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

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
              _vm._v("کاربران تایید شده چه کسانی هستند؟")
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
                  _c(
                    "router-link",
                    {
                      staticClass: "green-button",
                      attrs: { to: { name: "help" } }
                    },
                    [_vm._v("شما هم احراز هویت کنید")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "text-center color-gray" }, [
                _vm._v(
                  "باسکول هیچ مسئولیتی در قبال سو رفتار کاربران تایید شده به عهده نمی گیرد و صرفا اطلاعات هویتی آنها را مطابث توضیحات بالا تایید میکند."
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
          src: __webpack_require__(812),
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
          src: __webpack_require__(814),
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
          src: __webpack_require__(813),
          alt: ""
        }
      }),
      _vm._v(" "),
      _c("p", [_vm._v("اطلاعات آدرس مکانی انها احراز شده است.")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c539e768", module.exports)
  }
}

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "/images/verify-icon-1.jpg?64e3ea0e84aaeb3411a0c7c75bca6429";

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "/images/verify-icon-2.jpg?97208fed91fed0a07254b040f8f0745b";

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "/images/verify-icon-3.jpg?77589c4efefbf091528f3f5be9aa4b0c";

/***/ })

});