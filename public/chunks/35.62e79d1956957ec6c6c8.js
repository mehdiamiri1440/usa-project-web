webpackJsonp([35],{

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(681)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(683)
/* template */
var __vue_template__ = __webpack_require__(684)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-477c251e"
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
Component.options.__file = "resources/assets/js/components/dashboard/buyer/support.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-477c251e", Component.options)
  } else {
    hotAPI.reload("data-v-477c251e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(682);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8274834e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-477c251e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./support.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-477c251e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./support.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.support-wrapper[data-v-477c251e] {\n  direction: rtl;\n  line-height: 1.618;\n  max-width: 600px;\n  margin: 60px auto;\n  text-align: center;\n}\n.support-wrapper > div.shadow-content[data-v-477c251e] {\n  border-radius: 8px;\n  padding: 60px 15px;\n}\n.support-wrapper > div.shadow-content h3[data-v-477c251e] {\n  margin: 20px 0 30px;\n  line-height: 1.618;\n}\n.support-wrapper > div.shadow-content h4[data-v-477c251e] {\n  margin-bottom: 18px;\n  color: #21ad93;\n  letter-spacing: 2px;\n}\n@media screen and (max-width: 767px) {\n.title[data-v-477c251e] {\n    text-align: center;\n}\n.support-wrapper > div.shadow-content[data-v-477c251e] {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding: 60px 15px;\n}\n.main-content[data-v-477c251e] {\n    padding-bottom: 90px;\n    background: #fff;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 683:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", false);
  }
});

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "main-content col-xs-12" }, [
    _c("div", { staticClass: "support-wrapper" }, [
      _c("div", { staticClass: "bg-white shadow-content" }, [
        _c("div", { staticClass: "buskool-icon" }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "92.818",
                height: "113.671",
                viewBox: "0 0 92.818 113.671"
              }
            },
            [
              _c(
                "g",
                {
                  attrs: {
                    id: "Group_23",
                    "data-name": "Group 23",
                    transform: "translate(-273.1 -703.931)"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      id: "Subtraction_1",
                      "data-name": "Subtraction 1",
                      d:
                        "M46.473,84.764A46.472,46.472,0,0,1,0,38.291,45.955,45.955,0,0,1,5.124,17.06,46.892,46.892,0,0,1,18.8.952l11.8,11.8A29.746,29.746,0,1,0,75.91,42.2l8.124-7.99,8.7,8.557a46.481,46.481,0,0,1-46.262,42ZM92.818,34.8l-.007-.007-8.777-8.661-8.065,7.957A29.849,29.849,0,0,0,60.905,11.907L72.812,0a46.252,46.252,0,0,1,20,34.786Z",
                      transform: "translate(273.1 732.838)",
                      fill: "#e51b35"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "Group_24",
                        "data-name": "Group 24",
                        transform: "translate(293.176 703.931)"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          id: "Rectangle_12",
                          "data-name": "Rectangle 12",
                          d:
                            "M3,0H35.32a0,0,0,0,1,0,0V20.448a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z",
                          transform: "translate(14.459 9.201) rotate(45)",
                          fill: "#00c569"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          id: "Rectangle_13",
                          "data-name": "Rectangle 13",
                          d:
                            "M0,0H50.191a0,0,0,0,1,0,0V18.589a0,0,0,0,1,0,0H4a4,4,0,0,1-4-4V0A0,0,0,0,1,0,0Z",
                          transform: "translate(61.103 13.145) rotate(135)",
                          fill: "#00c569"
                        }
                      })
                    ]
                  )
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("h3", [_vm._v("شماره تماس های پشتیبانی باسکول")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _c("i", { staticClass: "fa fa-phone" }),
      _vm._v(" 09178928266")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [
      _c("i", { staticClass: "fa fa-phone" }),
      _vm._v(" ‌09118413054")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-477c251e", module.exports)
  }
}

/***/ })

});