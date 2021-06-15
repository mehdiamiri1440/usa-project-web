(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_router_components_masterRoute_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/router/components/masterRoute.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/router/components/masterRoute.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import HeaderMasterLayouts from "../../components/layouts/header/header";
// import FooterMasterLayouts from "../../components/layouts/footer/footer";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {// HeaderMasterLayouts,
    // FooterMasterLayouts,
  },
  data: function data() {
    return {
      productByResponseRate: false
    };
  },
  props: ["userId", "isSeller", "assets", "storagePath", "profilePhoto", "userFullName", "userLogoutPath", "verifiedUserContent"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/router/components/masterRoute.vue?vue&type=template&id=1147835c":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/router/components/masterRoute.vue?vue&type=template&id=1147835c ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_header_master_layouts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("header-master-layouts");

  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  var _component_footer_master_layouts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("footer-master-layouts");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_header_master_layouts, {
    assets: $props.assets,
    user_id: $props.userId,
    is_seller: $props.isSeller,
    profile_photo: $props.profilePhoto,
    user_full_name: $props.userFullName,
    user_logout_path: $props.userLogoutPath,
    storage_path: $props.storagePath,
    login_page_path: $props.userLogoutPath
  }, null, 8
  /* PROPS */
  , ["assets", "user_id", "is_seller", "profile_photo", "user_full_name", "user_logout_path", "storage_path", "login_page_path"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view, {
    id: "main-content",
    str: $props.storagePath,
    assets: $props.assets,
    "is-user-login": $props.userId,
    "user-type": $props.isSeller,
    verifiedUserContent: $props.verifiedUserContent
  }, null, 8
  /* PROPS */
  , ["str", "assets", "is-user-login", "user-type", "verifiedUserContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_footer_master_layouts)]);
}

/***/ }),

/***/ "./resources/assets/js/router/components/masterRoute.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/router/components/masterRoute.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _masterRoute_vue_vue_type_template_id_1147835c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masterRoute.vue?vue&type=template&id=1147835c */ "./resources/assets/js/router/components/masterRoute.vue?vue&type=template&id=1147835c");
/* harmony import */ var _masterRoute_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./masterRoute.vue?vue&type=script&lang=js */ "./resources/assets/js/router/components/masterRoute.vue?vue&type=script&lang=js");



_masterRoute_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _masterRoute_vue_vue_type_template_id_1147835c__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_masterRoute_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/router/components/masterRoute.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_masterRoute_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/router/components/masterRoute.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/router/components/masterRoute.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_masterRoute_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_masterRoute_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./masterRoute.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/router/components/masterRoute.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/router/components/masterRoute.vue?vue&type=template&id=1147835c":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/router/components/masterRoute.vue?vue&type=template&id=1147835c ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_masterRoute_vue_vue_type_template_id_1147835c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_masterRoute_vue_vue_type_template_id_1147835c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./masterRoute.vue?vue&type=template&id=1147835c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/router/components/masterRoute.vue?vue&type=template&id=1147835c");


/***/ })

}]);