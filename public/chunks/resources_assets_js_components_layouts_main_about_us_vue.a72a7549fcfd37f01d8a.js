(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_components_layouts_main_about_us_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../router/router */ "./resources/assets/js/router/router.js");
/* harmony import */ var _router_components_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router/components/route */ "./resources/assets/js/router/components/route.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Route: _router_components_route__WEBPACK_IMPORTED_MODULE_1__.default
  },
  methods: {
    stopLoader: function stopLoader() {
      _router_router__WEBPACK_IMPORTED_MODULE_0__.eventBus.$emit("isLoading", false);
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
    gtag("config", "UA-129398000-1", {
      page_path: "/about-us"
    });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=template&id=429bf4ce&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=template&id=429bf4ce&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_about_us_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../img/about-us/1.jpg */ "./resources/assets/img/about-us/1.jpg");
/* harmony import */ var _img_about_us_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../img/about-us/2.jpg */ "./resources/assets/img/about-us/2.jpg");
/* harmony import */ var _img_about_us_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../img/about-us/3.jpg */ "./resources/assets/img/about-us/3.jpg");
/* harmony import */ var _img_about_us_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../img/about-us/4.jpg */ "./resources/assets/img/about-us/4.jpg");
/* harmony import */ var _img_about_us_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../img/about-us/5.jpg */ "./resources/assets/img/about-us/5.jpg");
/* harmony import */ var _img_about_us_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../img/about-us/6.jpg */ "./resources/assets/img/about-us/6.jpg");








var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-429bf4ce");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-429bf4ce");

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
}, "درباره ما", -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "col-md-12 col-sm-12"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-right"
}, " با توجه به تحقیقات و مطالعات صورت گرفته در بازار و حضور در نمایشگاه های داخلی و بین المللی حوزه محصولات کشاورزی و سابقه ی حضور در بازار صادرات ایران شاهد مشکلات عدیده‌ای از قبیل : عدم دسترسی مناسب به محصولات با کیفیت، فقدان شبکه دسترسی برای قیمت‌گذاری، وجود واسطه های بسیار زیاد و افزایش قیمت در تبع آن و هدر رفت سرمایه بودیم. لذا برآن شدیم تا با ایجاد ساختاری تکنولوژی محور در راستای حل و تسهیل این مشکلات گام برداریم. ", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " از آنجا که ما خود بخش کوچکی از خانواده ی کشاورزی ایران هستیم، عزم کامل خود را برای ریشه کن کردن مشکلات دسترسی تولید کنندگان و خریداران محصولات کشاورزی به یکدیگر جزم کرده ایم و تا زمانی که این هدف محقق نشود دست از تلاش شبانه روزی خود بر نخواهیم داشت. ", -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-right"
}, "ارزش های باسکول برای فروشندگان", -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", {
  "class": "text-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, " به راحتی فضای کاری خود را به دنیای دیجیتال گسترش دهید تا همه با برند و نام شما آشنا شوند. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, "با خریداران نام آشنا و معتبر معامله کنید."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, "محصولات خود را به خریداران در سراسر ایران معرفی کنید."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, " عضوی از جامعه باسکول باشید، با اطلاع از بازار با قیمت و شرایط بهتر محصول خود را به فروش برسانید. ")], -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "text-right"
}, "ارزش های باسکول برای خریداران", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", {
  "class": "text-right"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, " کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با آنها به صورت مستقیم ارتباط برقرار کنید. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, "بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه کنید."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, "سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, " عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات بازار، با قیمت و شرایط بهتر محصول خود را تهیه کنید. ")], -1
/* HOISTED */
);

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "text-center"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("هم اکنون عضو جامعه باسکول شوید");

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, null, -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "container about-us-icons"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-6 col-sm-4 col-md-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "about-us-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_about_us_1_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "با خریداران نام آشنا و معتبر معامله کنید.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-6 col-sm-4 col-md-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "about-us-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_about_us_2_jpg__WEBPACK_IMPORTED_MODULE_2__.default,
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "محصولات خود را به خریداران در سراسر ایران معرفی کنید.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-6 col-sm-4 col-md-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "about-us-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_about_us_3_jpg__WEBPACK_IMPORTED_MODULE_3__.default,
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات بازار، با قیمت و شرایط بهتر محصول خود را تهیه کنید. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-6 col-sm-4 col-md-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "about-us-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_about_us_4_jpg__WEBPACK_IMPORTED_MODULE_4__.default,
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با آنها به صورت مستقیم ارتباط برقرار کنید. ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-6 col-sm-4 col-md-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "about-us-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_about_us_5_jpg__WEBPACK_IMPORTED_MODULE_5__.default,
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه کنید.")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-xs-6 col-sm-4 col-md-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "about-us-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_about_us_6_jpg__WEBPACK_IMPORTED_MODULE_6__.default,
  alt: ""
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید.")])])], -1
/* HOISTED */
);

var _hoisted_26 = {
  "class": "text-center"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("باسکول چگونه کار میکند؟");

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "text-right"
}, " سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل support@buskool.com با ما در میان بگذارید. ", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("section", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [_hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'register'
    },
    "class": "green-button"
  }, {
    "default": _withId(function () {
      return [_hoisted_22];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_23, _hoisted_24, _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      name: 'help'
    },
    "class": "green-button"
  }, {
    "default": _withId(function () {
      return [_hoisted_27];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_28])])])])])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-429bf4ce],\nspan[data-v-429bf4ce],\ndiv[data-v-429bf4ce],\nh3[data-v-429bf4ce] {\n  line-height: 1.618;\n}\n.green-button[data-v-429bf4ce] {\n  width: initial;\n  padding: 13px 15px;\n  font-size: 16px;\n}\n.about-us-icons[data-v-429bf4ce] {\n  margin: 7px auto 15px;\n  text-align: center;\n}\n.about-us-icon[data-v-429bf4ce] {\n  background: #fff;\n  border-radius: 4px;\n  padding: 15px;\n  margin-bottom: 15px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n}\n.about-us-icons .row > div[data-v-429bf4ce] {\n  min-height: 310px;\n  float: right;\n}\n.about-us-icons p[data-v-429bf4ce] {\n  text-align: center;\n}\n.about-us-icons img[data-v-429bf4ce] {\n  max-width: 130px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/img/about-us/1.jpg":
/*!*********************************************!*\
  !*** ./resources/assets/img/about-us/1.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/1.jpg?ddb8d3109819ff35d2f4bcb8f87105c5");

/***/ }),

/***/ "./resources/assets/img/about-us/2.jpg":
/*!*********************************************!*\
  !*** ./resources/assets/img/about-us/2.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/2.jpg?2519db69ba3ef5a86e45e44e65504e61");

/***/ }),

/***/ "./resources/assets/img/about-us/3.jpg":
/*!*********************************************!*\
  !*** ./resources/assets/img/about-us/3.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/3.jpg?07e5d2acd05109bd71ed2eca6ce5d5db");

/***/ }),

/***/ "./resources/assets/img/about-us/4.jpg":
/*!*********************************************!*\
  !*** ./resources/assets/img/about-us/4.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/4.jpg?b29809c2d14611f0ae4f91f1a741dcc2");

/***/ }),

/***/ "./resources/assets/img/about-us/5.jpg":
/*!*********************************************!*\
  !*** ./resources/assets/img/about-us/5.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/5.jpg?11827708b1bbcc0abc95afb60b1de008");

/***/ }),

/***/ "./resources/assets/img/about-us/6.jpg":
/*!*********************************************!*\
  !*** ./resources/assets/img/about-us/6.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/6.jpg?45fa7dc18417047e4473f9645b2fd219");

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/about_us.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/about_us.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about_us_vue_vue_type_template_id_429bf4ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about_us.vue?vue&type=template&id=429bf4ce&scoped=true */ "./resources/assets/js/components/layouts/main/about_us.vue?vue&type=template&id=429bf4ce&scoped=true");
/* harmony import */ var _about_us_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about_us.vue?vue&type=script&lang=js */ "./resources/assets/js/components/layouts/main/about_us.vue?vue&type=script&lang=js");
/* harmony import */ var _about_us_vue_vue_type_style_index_0_id_429bf4ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css */ "./resources/assets/js/components/layouts/main/about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css");




;
_about_us_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _about_us_vue_vue_type_template_id_429bf4ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_about_us_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-429bf4ce"
/* hot reload */
if (false) {}

_about_us_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/layouts/main/about_us.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_about_us_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/about_us.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/about_us.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_us_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_us_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./about_us.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/about_us.vue?vue&type=template&id=429bf4ce&scoped=true":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/about_us.vue?vue&type=template&id=429bf4ce&scoped=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_us_vue_vue_type_template_id_429bf4ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_us_vue_vue_type_template_id_429bf4ce_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./about_us.vue?vue&type=template&id=429bf4ce&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=template&id=429bf4ce&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/layouts/main/about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_us_vue_vue_type_style_index_0_id_429bf4ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_us_vue_vue_type_style_index_0_id_429bf4ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_us_vue_vue_type_style_index_0_id_429bf4ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_us_vue_vue_type_style_index_0_id_429bf4ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_about_us_vue_vue_type_style_index_0_id_429bf4ce_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/about_us.vue?vue&type=style&index=0&id=429bf4ce&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b7adde18", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);