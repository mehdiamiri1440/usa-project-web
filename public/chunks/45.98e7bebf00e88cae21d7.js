webpackJsonp([45],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_env_test_presets_env_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_status_vue__ = __webpack_require__(367);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f24c44a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_status_vue__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_env_test_presets_env_plugins_node_modules_vue_loader_lib_selector_type_script_index_0_status_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f24c44a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_status_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f24c44a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_status_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/seller/dashboard/status.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f24c44a", Component.options)
  } else {
    hotAPI.reload("data-v-3f24c44a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
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
  props: ["dataQuestion"],
  data: function data() {
    return {
      question: this.dataQuestion,
      form: {
        title: this.dataQuestion.title,
        body: this.dataQuestion.body
      },
      editing: false
    };
  },

  methods: {
    cancel: function cancel() {
      this.editing = false;
    }
  }
});

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", {
      attrs: { id: "test" },
      domProps: { textContent: _vm._s(_vm.editing) }
    }),
    _vm._v(" "),
    !_vm.editing
      ? _c("div", [
          _c("h1", { domProps: { textContent: _vm._s(_vm.question.title) } }),
          _vm._v(" "),
          _c("div", { domProps: { textContent: _vm._s(_vm.question.body) } }),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { id: "edit" },
              on: {
                click: function($event) {
                  _vm.editing = true
                }
              }
            },
            [_vm._v("Edit")]
          )
        ])
      : _c("div", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.title,
                expression: "form.title"
              }
            ],
            attrs: { type: "text", name: "title" },
            domProps: { value: _vm.form.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "title", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.body,
                expression: "form.body"
              }
            ],
            attrs: { name: "body" },
            domProps: { value: _vm.form.body },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "body", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { id: "cancel" },
              on: {
                click: function($event) {
                  _vm.cancel()
                }
              }
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { id: "update" },
              on: {
                click: function($event) {
                  _vm.editing = false
                }
              }
            },
            [_vm._v("Update")]
          )
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f24c44a", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});