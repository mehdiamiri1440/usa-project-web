(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_components_layouts_main_product_components_product-view_user_info_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      base: ""
    };
  },
  methods: {
    activeComponentTooltip: function activeComponentTooltip() {
      $(".verified-user").popover({
        trigger: "manual",
        html: true,
        animation: false
      }).on("mouseenter", function () {
        var _this = this;

        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
          $(_this).popover("hide");
        });
      }).on("mouseleave", function () {
        var _this = this;

        setTimeout(function () {
          if (!$(".popover:hover").length) {
            $(_this).popover("hide");
          }
        }, 300);
      });
    }
  },
  mounted: function mounted() {
    this.base = getBase();
  },
  watch: {
    "$parent.product.user_info": function $parentProductUser_info() {
      var _this2 = this;

      if (this.$parent.product.user_info) {
        setTimeout(function () {
          _this2.activeComponentTooltip();
        }, 10);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=template&id=624cfce6&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=template&id=624cfce6&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_user_defult_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../img/user-defult.png */ "./resources/assets/img/user-defult.png");



var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-624cfce6");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-624cfce6");

var _hoisted_1 = {
  "class": "user-info-section-wrapper"
};
var _hoisted_2 = {
  "class": "user-information-content-image"
};
var _hoisted_3 = {
  key: 1,
  "class": "user-image"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_user_defult_png__WEBPACK_IMPORTED_MODULE_1__.default,
  "class": "image_defult"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  key: 2,
  "class": "valid-icon"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
  width: "21.75",
  height: "21.68",
  viewBox: "0 0 24.965 30.574"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  id: "buskool-icon",
  "data-name": "buskool",
  transform: "translate(-273.1 -715.025)"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  id: "Subtraction_1",
  "data-name": "Subtraction 1",
  d: "M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z",
  transform: "translate(2237.1 709.808)",
  fill: "#fff"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", {
  id: "Group_24",
  "data-name": "Group 24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  id: "Rectangle_12",
  "data-name": "Rectangle 12",
  d: "M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z",
  transform: "translate(282.389 717.5) rotate(45)",
  fill: "#fff"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
  id: "Rectangle_13",
  "data-name": "Rectangle 13",
  d: "M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z",
  transform: "translate(294.935 718.561) rotate(135)",
  fill: "#fff"
})])])], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "user-information-content"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-certificate"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = {
  key: 0,
  "class": "response-rate"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" احتمال پاسخ گویی ");

var _hoisted_11 = {
  key: 1,
  "class": "user-valid-text"
};
var _hoisted_12 = {
  key: 2,
  "class": "user-position"
};
var _hoisted_13 = {
  key: 3,
  "class": "profile-rating-box-wrapper"
};
var _hoisted_14 = {
  "class": "profile-rating-box"
};
var _hoisted_15 = {
  "class": "rating-stars pull-left"
};
var _hoisted_16 = {
  "class": "stars-wrapper"
};
var _hoisted_17 = {
  "class": "review-count-wrapper"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" نظر ");

var _hoisted_19 = {
  "class": "rating-score pull-right"
};
var _hoisted_20 = {
  "class": "user-info-actions hidden-xs hidden-sm hidden-md"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("مشاهده پروفایل");

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-comment-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ارسال پیام ");

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-comment-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ارسال پیام ");

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ویرایش پروفایل ");

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-pencil-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ویرایش پروفایل ");

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-pencil-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "more-info hidden-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" مشاهده پروفایل "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-angle-left"
})], -1
/* HOISTED */
);

var _hoisted_31 = {
  key: 1,
  "class": "user-info-wrapper default-user-info-wrapper wrapper-bg"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"default-wrapper-main-image placeholder-content text-center\" data-v-624cfce6></div><div class=\"default-image-info text-rtl text-center margin-15-0\" data-v-624cfce6><span class=\"placeholder-content content-half-width inline-block\" data-v-624cfce6></span><span class=\"placeholder-content content-default-width inline-block\" data-v-624cfce6></span></div><div class=\"default-user-action-buttons\" data-v-624cfce6><div class=\"placeholder-content default-button-full-with margin-0 hidden-xs hidden-md hidden-sm\" data-v-624cfce6></div><div class=\"placeholder-content default-button-user-item default-button-full-with margin-10-0\" data-v-624cfce6></div></div>", 3);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
  href: "https://blog.buskool.com/%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%d8%ae%d8%b1%db%8c%d8%af-%d8%a7%d9%85%d9%86/",
  target: "_blank",
  "class": "warning-wrapper col-xs-12 info-wrapper hidden-md hidden-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "warning-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-question-circle"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" راهنمای خرید امن ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "warning-text"
}, " باسکول هیچ‌گونه منفعت و مسئولیتی در قبال معامله شما ندارد. با مطالعه‌ی راهنمای خرید امن ، آسوده‌تر معامله کنید. ")], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [_ctx.$parent.product.user_info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    key: 0,
    "class": ["user-info-wrapper wrapper-bg", {
      active: _ctx.$parent.product.user_info.active_pakage_type == 3
    }]
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: '/profile/' + _ctx.$parent.product.user_info.user_name,
    "class": "user-information-link text-rtl"
  }, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_ctx.$parent.product.profile_info.profile_photo ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
        key: 0,
        "class": "user-image",
        style: {
          backgroundImage: 'url(' + $data.base + 'storage/' + _ctx.$parent.product.profile_info.profile_photo + ')'
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        "class": "hidden",
        loading: "lazy",
        src: '/storage/' + _ctx.$parent.product.profile_info.profile_photo
      }, null, 8
      /* PROPS */
      , ["src"])], 4
      /* STYLE */
      )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_3, [_hoisted_4])), _ctx.$parent.product.user_info.active_pakage_type == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_5, [_hoisted_6])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.product.user_info.first_name + " " + _ctx.$parent.product.user_info.last_name) + " ", 1
      /* TEXT */
      ), _ctx.$parent.product.user_info.is_verified ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
        key: 0,
        onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"])),
        "class": "verified-user",
        "data-container": "body",
        "data-toggle": "popover",
        "data-placement": "bottom",
        "data-content": _ctx.$parent.verifiedUserContent,
        title: ""
      }, [_hoisted_8], 8
      /* PROPS */
      , ["data-content"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.$parent.product.user_info]]), _ctx.$parent.product.user_info.response_rate ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.product.user_info.response_rate + '%')
      }, null, 8
      /* PROPS */
      , ["textContent"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$parent.product.user_info.active_pakage_type == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", _hoisted_11, " فروشنده ویژه ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", _hoisted_12, "فروشنده")), _ctx.$parent.product.user_info.review_info.avg_score > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(5, function (star, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
          key: index
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
          textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1)
        }, null, 8
        /* PROPS */
        , ["textContent"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
          "class": ["fa fa-star", {
            'yellow-text': index < _ctx.$parent.starScore
          }]
        }, null, 2
        /* CLASS */
        )]);
      }), 64
      /* STABLE_FRAGMENT */
      ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.product.user_info.review_info.total_count)
      }, null, 8
      /* PROPS */
      , ["textContent"]), _hoisted_18])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.product.user_info.review_info.avg_score)
      }, null, 8
      /* PROPS */
      , ["textContent"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: '/profile/' + _ctx.$parent.product.user_info.user_name,
        "class": "green-button green-button-o"
      }, {
        "default": _withId(function () {
          return [_hoisted_21];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["to"]), !_ctx.$parent.isMyProfile && _ctx.$parent.currentUser.user_info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
        key: 0,
        onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return _ctx.$parent.openChatModal(_ctx.$parent.product);
        }, ["prevent"])),
        "class": "green-button"
      }, [_hoisted_22, _hoisted_23])) : !_ctx.$parent.isMyProfile && !_ctx.$parent.currentUser.user_info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
        key: 1,
        onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return _ctx.$parent.loginModal();
        }, ["prevent"])),
        "class": "green-button"
      }, [_hoisted_24, _hoisted_25])) : _ctx.$parent.userType == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
        key: 2,
        to: {
          name: 'profileBasicBuyer'
        },
        "class": "green-button"
      }, {
        "default": _withId(function () {
          return [_hoisted_26, _hoisted_27];
        }),
        _: 1
        /* STABLE */

      })) : _ctx.$parent.userType == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
        key: 3,
        to: {
          name: 'profileBasicSeller'
        },
        "class": "green-button"
      }, {
        "default": _withId(function () {
          return [_hoisted_28, _hoisted_29];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_30];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])], 2
  /* CLASS */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_31, [_hoisted_32])), _hoisted_35]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ni[data-v-624cfce6] {\n  position: relative;\n  top: 1px;\n  padding: 0 2px;\n}\n.green-button[data-v-624cfce6] {\n  font-size: 14px;\n  font-weight: bold;\n  padding: 10px 0;\n  width: 100%;\n  border-radius: 8px;\n}\n.green-button-o[data-v-624cfce6] {\n  color: #00c569;\n  background: none;\n  border: 2px solid #00c569;\n  padding: 8px 0;\n}\n.green-button-o[data-v-624cfce6]:hover {\n  background: #00c569;\n  color: #fff;\n}\n.user-info-wrapper[data-v-624cfce6] {\n  padding: 15px 20px 25px;\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 30px;\n  position: relative;\n}\n.user-info-wrapper.active[data-v-624cfce6] {\n  padding: 15px 20px;\n  border: 1px solid #00c569;\n}\n.user-information-content-image[data-v-624cfce6] {\n  position: relative;\n  min-width: 110px;\n}\n.user-information-content-image .user-image[data-v-624cfce6] {\n  width: 90px;\n  height: 90px;\n  position: relative;\n  margin: 0 auto 10px;\n  border-radius: 90px;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center;\n  background-color: #bebebe;\n}\n.user-information-content-image .user-image img[data-v-624cfce6],\n.user-info-wrapper .default-wrapper-main-image[data-v-624cfce6] {\n  width: 90px;\n  height: 90px;\n}\n.user-information-content-image img[data-v-624cfce6] {\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: 50%;\n}\n.valid-icon[data-v-624cfce6] {\n  background: #00c569;\n\n  width: 31px;\n\n  height: 31px;\n\n  border-radius: 50px;\n\n  padding-top: 3px;\n\n  position: absolute;\n\n  bottom: -12px;\n\n  right: auto;\n\n  left: 50%;\n\n  margin-left: -15px;\n}\n.user-information-content > p[data-v-624cfce6] {\n  font-size: 18px;\n\n  font-weight: bold;\n\n  color: #333;\n\n  direction: rtl;\n}\n.user-information-content p.user-position[data-v-624cfce6] {\n  font-size: 12px;\n  color: #777;\n}\np.user-valid-text[data-v-624cfce6] {\n  font-size: 13px;\n\n  font-weight: bold;\n\n  color: #00c569;\n}\np.user-valid-text[data-v-624cfce6],\np.user-position[data-v-624cfce6] {\n  padding-top: 5px;\n}\np.response-rate[data-v-624cfce6] {\n  color: #777;\n  font-size: 12px;\n  padding-top: 5px;\n  direction: rtl;\n}\np.response-rate span[data-v-624cfce6] {\n  color: #e41c38;\n}\n\n/* stars styles */\n.profile-rating-box-wrapper[data-v-624cfce6] {\n  padding-left: 10px;\n}\n.profile-rating-box[data-v-624cfce6] {\n  border: 1px solid #f6f6f6;\n  border-radius: 4px;\n  width: 100%;\n  max-width: 180px;\n  margin: 5px auto;\n  overflow: hidden;\n}\n.stars-wrapper[data-v-624cfce6] {\n  padding-right: 2px;\n}\n.rating-stars[data-v-624cfce6] {\n  /* width: calc(100% - 40px); */\n  text-align: center;\n}\n.rating-stars p > span[data-v-624cfce6] {\n  position: relative;\n  display: inline-block;\n}\n.rating-stars p > span i[data-v-624cfce6] {\n  position: absolute;\n  left: 2px;\n  font-size: 17px;\n  z-index: 0;\n  top: 0px;\n  color: #bdc4cc;\n}\n.rating-stars p > span > span[data-v-624cfce6] {\n  display: block;\n  position: relative;\n  z-index: 1;\n  font-size: 9px;\n  width: 18px;\n  text-align: center;\n  margin-left: 5px;\n  color: #777;\n}\n.rating-stars .review-count-wrapper[data-v-624cfce6] {\n  color: #556080;\n  line-height: 1;\n  font-size: 11px;\n  padding: 3px;\n}\n.rating-score[data-v-624cfce6] {\n  width: 40px;\n  background: #f6f6f6;\n  height: 100%;\n  text-align: center;\n  padding: 9px 0;\n  font-size: 16px;\n  font-weight: bold;\n  color: #556080;\n}\n.more-info[data-v-624cfce6] {\n  position: absolute;\n  top: calc(50% - 11px);\n  left: 15px;\n  color: #00c569;\n}\n.user-info-section-wrapper[data-v-624cfce6] {\n  padding: 0 15px;\n}\n.warning-wrapper[data-v-624cfce6] {\n  background: #fffbe5;\n  border-radius: 12px;\n  direction: rtl;\n  padding: 10px 15px;\n  margin-top: 15px;\n}\n.info-wrapper.warning-wrapper[data-v-624cfce6] {\n  background: #f5fbff;\n  display: block;\n  margin-bottom: 30px;\n}\n.warning-title[data-v-624cfce6] {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.warning-title i[data-v-624cfce6] {\n  font-size: 23px;\n  position: relative;\n  top: 4px;\n}\n@media screen and (max-width: 1199px) {\n.default-button-user-item[data-v-624cfce6] {\n    height: 20px;\n    margin-top: 27px;\n}\n.rating-stars .review-count-wrapper[data-v-624cfce6] {\n    padding: 12px;\n}\n.user-info-section-wrapper[data-v-624cfce6] {\n    padding: 0;\n    margin-top: 30px;\n}\n.user-info-wrapper[data-v-624cfce6],\n  .user-info-wrapper.active[data-v-624cfce6] {\n    padding: 7px;\n    float: right;\n    width: 100%;\n}\n.user-information-content-image .user-image[data-v-624cfce6],\n  .user-information-content-image .user-image img[data-v-624cfce6],\n  .user-info-wrapper .default-wrapper-main-image[data-v-624cfce6] {\n    width: 70px;\n    height: 70px;\n}\n.rating-stars p > span > span[data-v-624cfce6] {\n    margin: 0 1px;\n    font-size: 14px;\n    left: 4px;\n}\n.rating-stars p > span i[data-v-624cfce6] {\n    left: -1px;\n    font-size: 23px;\n}\n.rating-score[data-v-624cfce6] {\n    padding: 9px 0;\n}\n.user-information-content-image[data-v-624cfce6],\n  .default-wrapper-main-image[data-v-624cfce6],\n  .default-image-info[data-v-624cfce6] {\n    float: right;\n}\n.user-information-content[data-v-624cfce6] {\n    float: right;\n\n    text-align: right;\n\n    margin-right: 15px;\n\n    padding-top: 6px;\n\n    width: calc(100% - 125px);\n}\n.profile-rating-box[data-v-624cfce6] {\n    max-width: initial;\n    float: right;\n    width: initial;\n}\n.profile-rating-box-wrapper[data-v-624cfce6] {\n    padding-left: 0;\n    width: 100%;\n    float: right;\n}\n.user-info-actions[data-v-624cfce6],\n  .default-user-action-buttons[data-v-624cfce6] {\n    float: left;\n}\n.valid-icon[data-v-624cfce6] {\n    padding-top: 3px;\n\n    bottom: -5px;\n}\n.green-button[data-v-624cfce6] {\n    padding: 7px 0;\n}\n.user-info-actions a[data-v-624cfce6]:first-of-type {\n    margin-top: 0;\n}\n.default-image-info[data-v-624cfce6] {\n    width: 40%;\n\n    text-align: right;\n\n    margin-top: 15px;\n\n    margin-right: 15px;\n}\n.default-user-action-buttons[data-v-624cfce6] {\n    width: 160px;\n}\n.user-information-content p.stars-wrapper[data-v-624cfce6] {\n    padding: 7px;\n    background: #f6f6f6;\n    float: right;\n}\n.user-information-content p.stars-wrapper > span[data-v-624cfce6] {\n    padding-top: 4px;\n    margin: 0 5px;\n}\n.user-information-content p[data-v-624cfce6]:last-of-type {\n    margin-bottom: 0;\n    float: right;\n    font-size: 15px;\n}\n.user-info-actions[data-v-624cfce6] {\n    margin-top: 5px;\n}\n.profile-rating-box-wrapper[data-v-624cfce6] {\n    padding-left: 0;\n}\n}\n@media screen and (max-width: 767px) {\n.user-info-section-wrapper[data-v-624cfce6] {\n    padding: 0 15px;\n    margin-top: 0;\n}\n.user-information-content-image[data-v-624cfce6] {\n    min-width: 50px;\n}\n.user-information-content p.stars-wrapper > span[data-v-624cfce6] {\n    padding-top: 0;\n    margin: 0 1px;\n}\n.rating-stars p > span i[data-v-624cfce6] {\n    left: -1px;\n    font-size: 17px;\n}\n.user-information-content[data-v-624cfce6] {\n    width: calc(100% - 85px);\n}\n.user-information-content p.stars-wrapper[data-v-624cfce6] {\n    padding: 9px 7px;\n}\n.green-button[data-v-624cfce6] {\n    padding: 10px 0;\n}\n.user-info-actions a[data-v-624cfce6]:first-of-type {\n    margin-top: 15px;\n}\n.rating-stars p > span > span[data-v-624cfce6] {\n    left: 1px;\n}\n.default-image-info[data-v-624cfce6] {\n    text-align: center;\n\n    margin: 15px auto;\n\n    padding: 0;\n}\n}\n@media screen and (max-width: 374px) {\n.more-info[data-v-624cfce6] {\n    top: 21px;\n}\n.user-info-wrapper[data-v-624cfce6],\n  .user-info-wrapper.active[data-v-624cfce6] {\n    padding: 10px 15px;\n}\n.user-information-content[data-v-624cfce6] {\n    width: 100%;\n    margin: 0;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _user_info_vue_vue_type_template_id_624cfce6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user_info.vue?vue&type=template&id=624cfce6&scoped=true */ "./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=template&id=624cfce6&scoped=true");
/* harmony import */ var _user_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user_info.vue?vue&type=script&lang=js */ "./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=script&lang=js");
/* harmony import */ var _user_info_vue_vue_type_style_index_0_id_624cfce6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css */ "./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css");




;
_user_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _user_info_vue_vue_type_template_id_624cfce6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_user_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-624cfce6"
/* hot reload */
if (false) {}

_user_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_user_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_info_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./user_info.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=template&id=624cfce6&scoped=true":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=template&id=624cfce6&scoped=true ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_info_vue_vue_type_template_id_624cfce6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_info_vue_vue_type_template_id_624cfce6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./user_info.vue?vue&type=template&id=624cfce6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=template&id=624cfce6&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_info_vue_vue_type_style_index_0_id_624cfce6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_info_vue_vue_type_style_index_0_id_624cfce6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_info_vue_vue_type_style_index_0_id_624cfce6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_info_vue_vue_type_style_index_0_id_624cfce6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_user_info_vue_vue_type_style_index_0_id_624cfce6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/user_info.vue?vue&type=style&index=0&id=624cfce6&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2eed7896", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);