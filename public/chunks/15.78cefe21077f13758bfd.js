webpackJsonp([15],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_masterRoute_vue__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_masterRoute_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_masterRoute_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_masterRoute_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_masterRoute_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1147835c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_masterRoute_vue__ = __webpack_require__(712);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_masterRoute_vue__["default"],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1147835c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_masterRoute_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1147835c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_masterRoute_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/router/components/masterRoute.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1147835c", Component.options)
  } else {
    hotAPI.reload("data-v-1147835c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 385:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (45:4)\n\n\u001b[0m \u001b[90m 43 | \u001b[39m    \u001b[33mHeaderMasterLayouts\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 44 | \u001b[39m    \u001b[33mInviteHeaderMasterLayouts\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 45 | \u001b[39m    \u001b[33mFooterMasterLayouts\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 46 | \u001b[39m    \u001b[33mCategoriesModal\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 47 | \u001b[39m  }\u001b[33m,\u001b[39m\n \u001b[90m 48 | \u001b[39m  props\u001b[33m:\u001b[39m [\u001b[0m\n");

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.$route.name != "invite"
        ? _c("header-master-layouts", {
            attrs: {
              assets: _vm.assets,
              user_id: _vm.userId,
              is_seller: _vm.isSeller,
              profile_photo: _vm.profilePhoto,
              user_full_name: _vm.userFullName,
              user_logout_path: _vm.userLogoutPath,
              storage_path: _vm.storagePath,
              login_page_path: _vm.userLogoutPath,
              categoryList: _vm.categoryList
            }
          })
        : _c("InviteHeaderMasterLayouts"),
      _vm._v(" "),
      _c("CategoriesModal", {
        attrs: {
          categoryList: _vm.categoryList,
          modalSubCategory: _vm.modalSubCategory,
          mainSubCategories: _vm.mainSubCategories
        }
      }),
      _vm._v(" "),
      _c("router-view", {
        attrs: {
          id: "main-content",
          str: _vm.storagePath,
          assets: _vm.assets,
          "is-user-login": _vm.userId,
          "user-type": _vm.isSeller,
          verifiedUserContent: _vm.verifiedUserContent,
          categoryList: _vm.categoryList
        }
      }),
      _vm._v(" "),
      _c("footer-master-layouts")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1147835c", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});