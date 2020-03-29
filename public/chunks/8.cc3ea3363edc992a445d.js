webpackJsonp([8],{

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(346)
/* template */
var __vue_template__ = __webpack_require__(347)
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
Component.options.__file = "resources/assets/js/components/dashboard/messenger.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fac3fde", Component.options)
  } else {
    hotAPI.reload("data-v-7fac3fde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 346:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (14:13)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m    \u001b[36mreturn\u001b[39m {\n \u001b[90m 13 | \u001b[39m      groupStep\u001b[33m:\u001b[39m \u001b[35m0\u001b[39m\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m      userId \u001b[33m=\u001b[39m \u001b[32m\"\"\u001b[39m\n \u001b[90m    | \u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m    }\u001b[33m;\u001b[39m\n \u001b[90m 16 | \u001b[39m  }\u001b[33m,\u001b[39m\n \u001b[90m 17 | \u001b[39m  mounted(){\u001b[0m\n");

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("router-view", {
        attrs: { "user-id": _vm.userId, name: "contact-list" }
      }),
      _vm._v(" "),
      _c("router-view", {
        attrs: { "user-id": _vm.userId, name: "group-list" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fac3fde", module.exports)
  }
}

/***/ })

});