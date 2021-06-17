(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_components_layouts_main_verification-info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router_components_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../router/components/route */ "./resources/assets/js/router/components/route.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Route: _router_components_route__WEBPACK_IMPORTED_MODULE_0__.default
  },
  created: function created() {
    gtag("config", "UA-129398000-1", {
      page_path: "/about-us"
    });
  },
  methods: {
    stopLoader: function stopLoader() {
      this.$store.state.routeStore.isLoading = false;
    },
    metaInfo: function metaInfo() {
      return {
        title: "احراز هویت ",
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
  },
  mounted: function mounted() {
    this.$store.commit("routeStore/setMeta", {
      meta: this.metaInfo()
    });
    var self = this;

    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated: function updated() {
    this.$nextTick(this.stopLoader);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=template&id=253e0867&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=template&id=253e0867&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_verification_icons_verify_icon_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../img/verification-icons/verify-icon-1.jpg */ "./resources/assets/img/verification-icons/verify-icon-1.jpg");
/* harmony import */ var _img_verification_icons_verify_icon_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../img/verification-icons/verify-icon-3.jpg */ "./resources/assets/img/verification-icons/verify-icon-3.jpg");
/* harmony import */ var _img_verification_icons_verify_icon_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../img/verification-icons/verify-icon-2.jpg */ "./resources/assets/img/verification-icons/verify-icon-2.jpg");





var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-253e0867");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-253e0867");

var _hoisted_1 = {
  "class": "main-content-index-pages"
};
var _hoisted_2 = {
  "class": "parallax-section policy"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "overlay"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "container"
};
var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-md-12 col-sm-12"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-right"
}, "کاربران احراز هویت شده چه کسانی هستند؟", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "col-xs-12"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-12 about-us-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_verification_icons_verify_icon_1_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
  alt: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "اطلاعات کارت ملی آن ها نزد باسکول است.")], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-12 about-us-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_verification_icons_verify_icon_3_jpg__WEBPACK_IMPORTED_MODULE_2__.default,
  alt: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "مطابقت تصویر کارت ملی با تصویر خودشان انجام شده است.")], -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-12 about-us-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_verification_icons_verify_icon_2_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
  alt: ""
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "اطلاعات آدرس مکانی انها احراز شده است.")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "text-center"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("شما هم احراز هویت کنید");

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("شما هم احراز هویت کنید");

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("شما هم احراز هویت کنید");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-center gray-text info-text"
}, " باسکول هیچ مسئولیتی در قبال سو رفتار کاربران احراز هویت شده به عهده نمی گیرد و صرفا اطلاعات هویتی آنها را مطابق توضیحات بالا تایید می کند. ", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [_hoisted_9, _hoisted_10, _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", _hoisted_12, [_ctx.$parent.userId && _ctx.$parent.isSeller == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 0,
    to: {
      name: 'profileBasicSellerVeficiation'
    },
    "class": "green-button"
  }, {
    "default": _withId(function () {
      return [_hoisted_13];
    }),
    _: 1
    /* STABLE */

  })) : _ctx.$parent.userId && _ctx.$parent.isSeller == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 1,
    to: {
      name: 'profileBasicBuyerVeficiation'
    },
    "class": "green-button"
  }, {
    "default": _withId(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 2,
    to: {
      name: 'login'
    },
    "class": "green-button"
  }, {
    "default": _withId(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  }))]), _hoisted_16])])])])])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-253e0867],\nspan[data-v-253e0867],\ndiv[data-v-253e0867],\nh3[data-v-253e0867] {\n  line-height: 1.618;\n}\n.green-button[data-v-253e0867] {\n  width: initial;\n  padding: 13px 15px;\n  font-size: 16px;\n}\n.about-us-icon[data-v-253e0867] {\n  background: #fff;\n  border-radius: 4px;\n  padding: 15px;\n  margin-bottom: 15px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n}\n.about-us-icon img[data-v-253e0867] {\n  max-width: 70px;\n  float: right;\n  margin-left: 15px;\n}\n.about-us-icon p[data-v-253e0867] {\n  float: right;\n  font-size: 17px;\n  margin-top: 17px;\n}\n.info-text[data-v-253e0867] {\n  margin-top: 30px;\n  font-size: 12px;\n}\n@media screen and (max-width: 767px) {\n.about-us-icon[data-v-253e0867] {\n    text-align: center;\n}\n.about-us-icon img[data-v-253e0867] {\n    margin: 0 auto;\n    float: none;\n}\n.about-us-icon p[data-v-253e0867] {\n    float: none;\n    width: 100%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/img/verification-icons/verify-icon-1.jpg":
/*!*******************************************************************!*\
  !*** ./resources/assets/img/verification-icons/verify-icon-1.jpg ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/verify-icon-1.jpg?438e5aa019d5e77644ac5d14a4dfb97e");

/***/ }),

/***/ "./resources/assets/img/verification-icons/verify-icon-2.jpg":
/*!*******************************************************************!*\
  !*** ./resources/assets/img/verification-icons/verify-icon-2.jpg ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/verify-icon-2.jpg?9521395cc556a51962c29d74cf9b1a4d");

/***/ }),

/***/ "./resources/assets/img/verification-icons/verify-icon-3.jpg":
/*!*******************************************************************!*\
  !*** ./resources/assets/img/verification-icons/verify-icon-3.jpg ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/verify-icon-3.jpg?4d039c27db412dd2d8aec7b5566728d1");

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/verification-info.vue":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/verification-info.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _verification_info_vue_vue_type_template_id_253e0867_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-info.vue?vue&type=template&id=253e0867&scoped=true */ "./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=template&id=253e0867&scoped=true");
/* harmony import */ var _verification_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification-info.vue?vue&type=script&lang=js */ "./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=script&lang=js");
/* harmony import */ var _verification_info_vue_vue_type_style_index_0_id_253e0867_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css */ "./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css");




;
_verification_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _verification_info_vue_vue_type_template_id_253e0867_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_verification_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-253e0867"
/* hot reload */
if (false) {}

_verification_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/layouts/main/verification-info.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_verification_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verification_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verification_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./verification-info.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=template&id=253e0867&scoped=true":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=template&id=253e0867&scoped=true ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verification_info_vue_vue_type_template_id_253e0867_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verification_info_vue_vue_type_template_id_253e0867_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./verification-info.vue?vue&type=template&id=253e0867&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=template&id=253e0867&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verification_info_vue_vue_type_style_index_0_id_253e0867_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verification_info_vue_vue_type_style_index_0_id_253e0867_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verification_info_vue_vue_type_style_index_0_id_253e0867_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verification_info_vue_vue_type_style_index_0_id_253e0867_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verification_info_vue_vue_type_style_index_0_id_253e0867_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/verification-info.vue?vue&type=style&index=0&id=253e0867&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("39ca180f", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);