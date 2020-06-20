webpackJsonp([30],{

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(606)
/* template */
var __vue_template__ = __webpack_require__(607)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/js/components/layouts/main/product_components/product-view-route.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d0740262", Component.options)
  } else {
    hotAPI.reload("data-v-d0740262", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 606:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (9:60)\n\n\u001b[0m \u001b[90m  7 | \u001b[39m  data\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m() {\n \u001b[90m  8 | \u001b[39m    \u001b[36mreturn\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  9 | \u001b[39m       verifiedUserContent\u001b[33m:\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$parent\u001b[33m.\u001b[39mverifiedUserContent\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                                                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 10 | \u001b[39m    }\n \u001b[90m 11 | \u001b[39m  }\u001b[33m,\u001b[39m\n \u001b[90m 12 | \u001b[39m  props\u001b[33m:\u001b[39m [\u001b[32m\"str\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"assets\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"userType\"\u001b[39m]\u001b[0m\n");

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view", {
    key: _vm.$route.fullPath,
    attrs: { str: _vm.str, assets: _vm.assets, userType: _vm.userType }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d0740262", module.exports)
  }
}

/***/ })

});