webpackJsonp([19],{

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(327)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(329)
/* template */
var __vue_template__ = __webpack_require__(335)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9d851ee8"
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
Component.options.__file = "resources/assets/js/components/dashboard/dashboard-pricing-table.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9d851ee8", Component.options)
  } else {
    hotAPI.reload("data-v-9d851ee8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("64112665", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9d851ee8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard-pricing-table.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9d851ee8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dashboard-pricing-table.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.title[data-v-9d851ee8] {\n    text-align: right;\n    padding: 15px 0;\n    border-bottom: 2px solid #E8E8E8;\n    margin-bottom: 30px;\n}\n.title h1[data-v-9d851ee8] {\n\n    font-size: 18px;\n    font-weight: bold;\n}\n@media screen and (max-width: 992px) {\n.list-title[data-v-9d851ee8], .needs[data-v-9d851ee8], .list-time[data-v-9d851ee8] {\n        padding: 15px;\n}\n}\n@media screen and (max-width: 767px) {\n.title[data-v-9d851ee8] {\n        text-align: center;\n        margin-bottom: 15px;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ 329:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (72:49)\n\n\u001b[0m \u001b[90m 70 | \u001b[39m        }\u001b[33m,\u001b[39m\n \u001b[90m 71 | \u001b[39m        methods\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 72 | \u001b[39m            registerComponentStatistics\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m(categoryName\u001b[33m,\u001b[39m actionName\u001b[33m,\u001b[39m labelName) {\n \u001b[90m    | \u001b[39m                                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 73 | \u001b[39m                gtag(\u001b[32m\"event\"\u001b[39m\u001b[33m,\u001b[39m actionName\u001b[33m,\u001b[39m {\n \u001b[90m 74 | \u001b[39m                    event_category\u001b[33m:\u001b[39m categoryName\u001b[33m,\u001b[39m\n \u001b[90m 75 | \u001b[39m                    event_label\u001b[33m:\u001b[39m labelName\u001b[0m\n");

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "main-content col-xs-12" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [_c("PricingTableContent")], 1)
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
          _c("h1", [
            _vm._v(
              "\n                        ارتقا عضویت\n                    "
            )
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
    require("vue-hot-reload-api")      .rerender("data-v-9d851ee8", module.exports)
  }
}

/***/ })

});