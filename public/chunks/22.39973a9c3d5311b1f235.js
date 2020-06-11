webpackJsonp([22],{

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(609)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(611)
/* template */
var __vue_template__ = __webpack_require__(612)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a40fe50"
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
Component.options.__file = "resources/assets/js/components/layouts/main/checkout/checkout-product.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a40fe50", Component.options)
  } else {
    hotAPI.reload("data-v-5a40fe50", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 379:
/***/ (function(module, exports) {

module.exports = "/images/web-logo.svg?b986ac3ee95fbc6d3331a8f1f15faea3";

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(610);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("36eabfb2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a40fe50\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkout-product.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a40fe50\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkout-product.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.logo-wrapper[data-v-5a40fe50] {\n  max-width: 210px;\n  padding: 15px 10px;\n  margin: 0 auto;\n}\n.progress-wrapper[data-v-5a40fe50] {\n  position: relative;\n}\n.progress-wrapper > span[data-v-5a40fe50] {\n  width: 100%;\n  height: 3px;\n  background: #bebebe;\n  display: block;\n  margin: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.progress-wrapper > span.active[data-v-5a40fe50] {\n  background: #00c569;\n  width: 50%;\n}\n.steps > p.step-item[data-v-5a40fe50] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  display: inline-block;\n  max-width: 100px;\n}\n.steps > p.step-item[data-v-5a40fe50]:first-of-type {\n  right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      eventBus.$emit("isLoading", false);
    }
  },
  mounted: function mounted() {
    var self = this;
    // document.onreadystatechange = () => {
    //   if (document.readyState === "complete") {
    //     self.$nextTick(self.stopLoader());
    //   }
    // };
  },
  updated: function updated() {}
  // this.$nextTick(this.stopLoader);

  //   created() {
  //     gtag("config", "UA-129398000-1", { page_path: "/about-us" });
  //   },
  //   metaInfo() {
  //     return {
  //       title: " درباره ما ",
  //       titleTemplate: "باسکول | %s",
  //       meta: [
  //         {
  //           name: "description",
  //           content:
  //             "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی"
  //         },
  //         {
  //           name: "author",
  //           content: "باسکول"
  //         },
  //         {
  //           property: "og:description",
  //           content:
  //             "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی"
  //         },
  //         {
  //           property: "og:site_name",
  //           content: "باسکول بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران"
  //         },
  //         {
  //           property: "og:title",
  //           content: " باسکول | بازار خرید و فروش عمده محصولات کشاورزی "
  //         }
  //       ]
  //     };
  //   }
});

/***/ }),

/***/ 612:
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
    return _c("div", { staticClass: "checkout-main-pages" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("section", { staticClass: "header" }, [
            _c("div", { staticClass: "logo-page" }, [
              _c("div", { staticClass: "logo-wrapper" }, [
                _c("img", {
                  attrs: {
                    src: __webpack_require__(379),
                    alt: ""
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "steps-progress-wrapper" }, [
              _c("div", { staticClass: "step-progress" }, [
                _c("div", { staticClass: "progress-wrapper" }, [
                  _c("span", { staticClass: "progress-item" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "progress-item active" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "steps" }, [
                  _c("p", { staticClass: "step-item" }, [
                    _c("span", { staticClass: "step-index" }, [_vm._v("1")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "step-text" }, [
                      _vm._v("اطلاعات محصول")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "step-item" }, [
                    _c("span", { staticClass: "step-index" }, [_vm._v("2")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "step-text" }, [
                      _vm._v("ثبت اطلاعات")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "step-item" }, [
                    _c("span", { staticClass: "step-index" }, [_vm._v("3")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "step-text" }, [
                      _vm._v("ثبت نهایی")
                    ])
                  ])
                ])
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
    require("vue-hot-reload-api")      .rerender("data-v-5a40fe50", module.exports)
  }
}

/***/ })

});