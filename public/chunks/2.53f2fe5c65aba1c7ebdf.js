webpackJsonp([2],{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(721)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(723)
/* template */
var __vue_template__ = __webpack_require__(734)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c5ebe4ce"
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
Component.options.__file = "resources/assets/js/components/layouts/main/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5ebe4ce", Component.options)
  } else {
    hotAPI.reload("data-v-c5ebe4ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 385:
/***/ (function(module, exports) {

module.exports = "/images/loading.gif?36a44a255896f2fb037f388ad92a4323";

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(416)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(418)
/* template */
var __vue_template__ = __webpack_require__(419)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4865f20e"
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
Component.options.__file = "resources/assets/js/components/layouts/main/product_components/product-grid-article-components/product_user_info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4865f20e", Component.options)
  } else {
    hotAPI.reload("data-v-4865f20e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(417);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0a8adc00", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4865f20e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_user_info.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4865f20e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_user_info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\ni[data-v-4865f20e] {\n  position: relative;\n  top: 1px;\n  padding: 0 2px;\n}\n.verified-user[data-v-4865f20e] {\n  font-size: 16px;\n}\n.user-information-wrapper[data-v-4865f20e] {\n  font-size: 14px;\n\n  font-weight: bold;\n\n  padding: 4px 0 5px;\n\n  margin: 0;\n\n  margin: 3px 5px;\n\n  line-height: 1.618;\n  border-bottom: 1px solid #e9ecef;\n}\n.user-information-wrapper[data-v-4865f20e]:hover {\n  cursor: pointer;\n}\n.article-action-buttons button[data-v-4865f20e] {\n  margin-top: 7px;\n  width: 100%;\n}\n.article-action-buttons[data-v-4865f20e] {\n  float: left !important;\n  display: none !important;\n}\n.green-text[data-v-4865f20e] {\n  color: #00c569;\n}\n.green-text[data-v-4865f20e]:hover {\n  color: #279b41;\n}\n.red-text[data-v-4865f20e] {\n  color: #e41c38;\n}\n.red-text[data-v-4865f20e]:hover {\n  color: #d81b35;\n}\n.blue-background[data-v-4865f20e] {\n  color: #000546;\n}\n.blue-background[data-v-4865f20e]:hover {\n  color: #000430;\n}\n.blue-button[data-v-4865f20e] {\n  margin: 15px 0;\n  display: inline-block;\n  background: #150e47;\n  color: #fff;\n  padding: 5px 0;\n  width: 100%;\n  border-radius: 3px;\n  text-align: center;\n  border: none;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.blue-button[data-v-4865f20e]:hover,\n.blue-button[data-v-4865f20e]:focus {\n  color: #fff;\n  background: #1d1060;\n}\n.user-image[data-v-4865f20e] {\n  width: 35px;\n  height: 35px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0;\n  margin-left: 10px;\n}\n.user-information-content-image[data-v-4865f20e] {\n  float: right;\n}\n.user-action-link[data-v-4865f20e] {\n  padding-right: 10px;\n  font-size: 11px;\n  float: left;\n  text-align: left;\n}\n.response-rate-wrapper[data-v-4865f20e] {\n  width: 50px;\n}\n.response-rate-wrapper button[data-v-4865f20e] {\n  background: #f2f2f2;\n  border: none;\n  border-radius: 20px;\n  font-size: 13px;\n  text-align: center;\n  color: #e41c38;\n  width: 100%;\n  line-height: initial;\n  padding: 0;\n}\n.user-information-content[data-v-4865f20e] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  max-width: calc(100% - 70px);\n}\n.user-action-link.default[data-v-4865f20e] {\n  padding-top: 9px;\n}\ndiv.user-information-link[data-v-4865f20e] {\n  display: block;\n  overflow: hidden;\n  font-size: 13px;\n  font-weight: bold;\n  color: #777;\n  padding-top: 0;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_components_route__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_components_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__router_components_route__);
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
  components: { Route: __WEBPACK_IMPORTED_MODULE_1__router_components_route___default.a },
  props: ["profile_photo", "user_info", "user_full_name", "user_name", "current_user", "product_id", "is_my_profile_status"],
  data: function data() {
    return {
      popUpMsg: "",
      deleteButtonText: "",
      cancelButtonText: ""
    };
  },

  methods: {
    openChat: function openChat(product) {
      this.registerComponentStatistics("product", "openChat", "click on open chatBox");

      var productName = product.main.sub_category_name + " " + product.main.product_name;
      var contact = {
        contact_id: this.user_info.id,
        first_name: this.user_info.first_name,
        last_name: this.user_info.last_name,
        profile_photo: this.profile_photo,
        user_name: this.user_info.user_name,
        product_name: productName
      };
      var self = this;

      if (this.current_user.user_info) {
        if (this.current_user.user_info.id !== this.user_info.id) {
          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("ChatInfo", contact);
          // window.localStorage.setItem("contact", JSON.stringify(contact));

          // this.$router.push({name : 'registerInquiry'});
        } else {
          this.popUpMsg = "شما نمی توانید به خودتان پیام دهید.";
          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("submitSuccess", this.popUpMsg);
          $("#custom-main-modal").modal("show");
        }
      } else {
        window.localStorage.setItem("contact", JSON.stringify(contact));
        // this.$router.push({ name: "registerInquiry" });
        __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("modal", "sendMsg");
      }
    },
    scrollToTheRequestRegisterBox: function scrollToTheRequestRegisterBox(element) {
      var newPosition = $(element).offset();
      $("html, body").stop().animate({ scrollTop: newPosition.top - 380 }, 1000);
    },
    deleteProduct: function deleteProduct() {
      //show modal
      // this.popUpMsg = "آیا محصول حذف شود؟";
      // this.deleteButtonText = "حذف";
      // this.cancelButtonText = "انصراف";

      // eventBus.$emit("submitSuccess", this.popUpMsg);
      // eventBus.$emit("deleteButtonText", this.deleteButtonText);
      // eventBus.$emit("cancelButtonText", this.cancelButtonText);
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("productId", this.product_id);
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("modal", "deleteProduct");

      // $("#deleteModal").modal("show");

      this.registerComponentStatistics("product", "delete-product", "click on delete product-btn");
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    registerComponentExceptions: function registerComponentExceptions(description) {
      var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      gtag("event", "exception", {
        description: description,
        fatal: fatal
      });
    },
    activeComponentTooltip: function activeComponentTooltip() {
      $(".verified-user").popover({ trigger: "manual", html: true, animation: false }).on("mouseenter", function () {
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
      $(".response-rate").tooltip();
    }
  },
  mounted: function mounted() {
    this.activeComponentTooltip();
  }
});

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "user-information-wrapper",
      on: {
        click: function($event) {
          $event.preventDefault()
          _vm.$parent.setScroll()
        }
      }
    },
    [
      _c("div", { staticClass: "user-information-link" }, [
        _c("div", { staticClass: "user-information-content pull-right" }, [
          _c("i", { staticClass: "fa fa-user-circle" }),
          _vm._v("\n      " + _vm._s(_vm.user_full_name) + "\n    ")
        ]),
        _vm._v(" "),
        !!_vm.user_info.is_verified
          ? _c(
              "button",
              {
                staticClass: "verified-user",
                attrs: {
                  "data-container": "body",
                  "data-toggle": "popover",
                  "data-placement": "bottom",
                  "data-content": _vm.$parent.verifiedUserContent,
                  title: ""
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-certificate" })]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "response-rate-wrapper pull-left" }, [
          _vm.user_info.response_rate != 0
            ? _c(
                "button",
                {
                  staticClass: "response-rate",
                  attrs: {
                    "data-toggle": "tooltip",
                    "data-placement": "right",
                    title: "احتمال پاسخ گویی"
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-exchange-alt" }),
                  _vm._v(
                    "\n        " +
                      _vm._s("%" + _vm.user_info.response_rate) +
                      "\n      "
                  )
                ]
              )
            : _vm._e()
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4865f20e", module.exports)
  }
}

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(421)
  __webpack_require__(423)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(425)
/* template */
var __vue_template__ = __webpack_require__(426)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f5afafe"
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
Component.options.__file = "resources/assets/js/components/layouts/main/product_components/product-grid-article-components/article_main_contents.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f5afafe", Component.options)
  } else {
    hotAPI.reload("data-v-2f5afafe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(422);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6f9e055f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f5afafe\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article_main_contents.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f5afafe\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./article_main_contents.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\nbody {\n  padding-right: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(424);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("232eb109", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f5afafe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./article_main_contents.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f5afafe\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./article_main_contents.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.main-article-contents p span[data-v-2f5afafe]:first-of-type {\n  color: #777;\n  width: 13px;\n  display: inline-block;\n  text-align: center;\n  margin-left: 8px;\n}\n.main-article-contents-wrapper[data-v-2f5afafe] {\n  overflow: hidden;\n  display: block;\n}\n.main-article-contents-image-wrapper[data-v-2f5afafe],\n.main-article-contents[data-v-2f5afafe] {\n  float: right;\n\n  padding: 15px;\n\n  padding-left: 0;\n}\n.main-article-contents > a[data-v-2f5afafe] {\n  display: block;\n  float: right;\n}\n.main-article-contents[data-v-2f5afafe] {\n  color: #474747;\n}\n.main-article-contents p[data-v-2f5afafe] {\n  font-size: 13px;\n\n  color: #777;\n\n  font-weight: 500;\n\n  max-width: 500px;\n\n  overflow: hidden;\n\n  height: 30px;\n\n  line-height: 1.618;\n\n  white-space: nowrap;\n\n  text-overflow: ellipsis;\n\n  padding: 0 2px;\n\n  margin-bottom: 5px;\n}\n.main-article-contents p[data-v-2f5afafe]:last-of-type {\n  border: none;\n  margin-bottom: 5px;\n}\n.share-link[data-v-2f5afafe] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  font-size: 11px;\n  border: 1px solid;\n  border-radius: 4px;\n  padding: 0 5px;\n  color: #777 !important;\n  line-height: 21px;\n}\n.text-danger[data-v-2f5afafe] {\n  height: 24px;\n}\n.main-article-contents h1[data-v-2f5afafe],\n.main-article-contents h3[data-v-2f5afafe],\n.main-article-contents a p[data-v-2f5afafe] {\n  max-width: 300px;\n}\n.main-article-contents a p[data-v-2f5afafe] {\n  font-size: 12px;\n}\n.share-link span[data-v-2f5afafe] {\n  display: none;\n}\n.main-article-contents-image-wrapper[data-v-2f5afafe],\n.main-article-contents[data-v-2f5afafe] {\n  padding-right: 10px;\n}\n.main-article-contents[data-v-2f5afafe] {\n  float: right;\n  width: 100%;\n  position: relative;\n  padding-bottom: 0;\n  padding: 9px 5px 0;\n}\n.product-description[data-v-2f5afafe] {\n  display: none;\n}\n.pointer-class[data-v-2f5afafe] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  props: ["productIndex", "is_my_profile_status"],

  methods: {
    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    getProductLinkTarget: function getProductLinkTarget() {
      // if (this.isDeviceMobile()) {
      //   return "_blank";
      // }

      return "_self";
    },
    getNumberWithCommas: function getNumberWithCommas(number) {
      if (number || typeof number === "number") return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");else return "";
    },
    getConvertedNumbers: function getConvertedNumbers(number) {
      if (number || typeof number === "number") {
        var data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
    }
  }
});

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "main-article-contents-wrapper pointer-class",
      class: {
        "is-user-valid-content":
          _vm.$parent.product.user_info.active_pakage_type != 3
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "main-article-contents",
          on: {
            click: function($event) {
              _vm.$parent.setScroll()
            }
          }
        },
        [
          _c("p", [
            _vm._m(0),
            _vm._v(" "),
            _c("span", {
              staticStyle: { color: "#474747" },
              domProps: {
                textContent: _vm._s(
                  _vm.$parent.product.main.province_name +
                    " - " +
                    _vm.$parent.product.main.city_name
                )
              }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._m(1),
            _vm._v(" "),
            _c("span", {
              staticStyle: { color: "#474747" },
              domProps: {
                textContent: _vm._s(
                  _vm.getConvertedNumbers(_vm.$parent.product.main.stock)
                )
              }
            })
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fa fa-map-marker-alt" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fa fa-box-open" })])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f5afafe", module.exports)
  }
}

/***/ }),

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(428)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(430)
/* template */
var __vue_template__ = __webpack_require__(431)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3b690ab2"
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
Component.options.__file = "resources/assets/js/components/layouts/main/product_components/product-grid-article-components/product_image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b690ab2", Component.options)
  } else {
    hotAPI.reload("data-v-3b690ab2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6f7c801e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b690ab2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_image.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3b690ab2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product_image.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n/*preloader image style*/\n.main-article-image[data-v-3b690ab2] {\n  display: block;\n  background-color: #404b55;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: 130px;\n\n  overflow: hidden;\n\n  position: relative;\n}\n.main-article-image[data-v-3b690ab2]:hover {\n  cursor: pointer;\n}\n.main-article-image .product-image[data-v-3b690ab2] {\n  display: block;\n\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n.image-wrapper-contents[data-v-3b690ab2] {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n}\n.image-count-item[data-v-3b690ab2] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 5px 9px 3px;\n  color: #fff;\n  border-radius: 50px;\n}\n.spinner-border[data-v-3b690ab2] {\n  position: absolute;\n  left: calc(50% - 20px);\n  top: calc(50% - 20px);\n  color: #21ad93;\n  width: 4rem;\n  height: 4rem;\n  vertical-align: text-bottom;\n  border-width: 0.35rem;\n}\n.article-title[data-v-3b690ab2] {\n  position: absolute;\n  bottom: 0;\n  min-height: 40px;\n  width: 100%;\n  right: 0;\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.6)));\n  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 16px;\n  padding-bottom: 2px;\n}\n.article-title p[data-v-3b690ab2] {\n  font-size: 17px;\n  padding: 0 5px;\n  color: #fff;\n  overflow: hidden;\n  height: 29px;\n  line-height: 1.618;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-weight: 500;\n}\n.valid-user-badge[data-v-3b690ab2] {\n  width: 30px;\n  height: 35px;\n  background: #00c569;\n  position: absolute;\n  left: 10px;\n  top: 0;\n  padding: 0px 3px;\n  border-top: 3px solid #00b761;\n  text-align: center;\n  color: #fff !important;\n}\n.valid-user-badge[data-v-3b690ab2]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 15px 14px;\n  border-color: transparent #00c569 transparent #00c569;\n  line-height: 0;\n  _border-color: #000000 #000000 #000000 #6980fe;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -14px;\n}\n@media screen and (max-width: 555px) {\n.main-article-image[data-v-3b690ab2] {\n    height: 130px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imgSrcs: "",
      isImageLoad: false
    };
  },
  props: ["img", "base", "popUpLoaded", "alt", "imageCount", "productUrl"],

  created: function created() {
    this.loadImage();
  },
  methods: {
    loadImage: function loadImage() {
      this.isImageLoad = false;
    },
    ImageLoaded: function ImageLoaded() {
      this.isImageLoad = true;
    },
    getProductName: function getProductName() {
      var productName = "";
      productName = this.$parent.product.main.sub_category_name + ' | <span style="color: #fff">' + this.$parent.product.main.product_name + "</span>";
      return productName;
    }
  }
});

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-article-image" }, [
    _c("div", {
      staticClass: "product-image",
      style: {
        backgroundImage: "url(" + _vm.base + "thumbnails/" + _vm.img + ")"
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isImageLoad,
            expression: "!isImageLoad"
          }
        ],
        staticClass: "text-center spinner-wrapper"
      },
      [_vm._m(0)]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "image-wrapper-contents" }, [
      _vm.$parent.product.user_info.active_pakage_type == 3
        ? _c("div", { staticClass: "valid-user-badge" }, [
            _c("div", { staticClass: "wrapper-icon" }, [
              _c(
                "svg",
                {
                  attrs: {
                    width: "24.965",
                    height: "30.574",
                    viewBox: "0 0 24.965 30.574"
                  }
                },
                [
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "buskool-icon",
                        "data-name": "buskool",
                        transform: "translate(-273.1 -715.025)"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          id: "Subtraction_1",
                          "data-name": "Subtraction 1",
                          d:
                            "M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z",
                          transform: "translate(2237.1 709.808)",
                          fill: "#fff"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "g",
                        { attrs: { id: "Group_24", "data-name": "Group 24" } },
                        [
                          _c("path", {
                            attrs: {
                              id: "Rectangle_12",
                              "data-name": "Rectangle 12",
                              d:
                                "M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z",
                              transform: "translate(282.389 717.5) rotate(45)",
                              fill: "#fff"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            attrs: {
                              id: "Rectangle_13",
                              "data-name": "Rectangle 13",
                              d:
                                "M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z",
                              transform:
                                "translate(294.935 718.561) rotate(135)",
                              fill: "#fff"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("img", {
        staticClass: "hidden",
        attrs: { src: _vm.base + "thumbnails/" + _vm.img, alt: _vm.alt },
        on: { load: _vm.ImageLoaded }
      }),
      _vm._v(" "),
      _vm.imageCount
        ? _c("div", { staticClass: "image-count-item" }, [
            _c("i", { staticClass: "fas fa-images" }),
            _vm._v(" "),
            _c("span", { domProps: { textContent: _vm._s(_vm.imageCount) } })
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("h3", { staticClass: "article-title" }, [
        _c("p", { domProps: { innerHTML: _vm._s(_vm.getProductName()) } })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner-border" }, [
      _c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3b690ab2", module.exports)
  }
}

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "/images/web-logo.svg?b986ac3ee95fbc6d3331a8f1f15faea3";

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(471)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(473)
/* template */
var __vue_template__ = __webpack_require__(474)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-039466f4"
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
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/main-register-request-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-039466f4", Component.options)
  } else {
    hotAPI.reload("data-v-039466f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(472);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1db18520", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-039466f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-register-request-form.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-039466f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-register-request-form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.title-contents[data-v-039466f4] {\n  font-weight: 500;\n  font-size: 18px;\n  margin-bottom: 15px;\n  padding: 0;\n}\n.form-contents-wrapper[data-v-039466f4] {\n  direction: rtl;\n}\n.form-wrapper[data-v-039466f4] {\n  margin: 0 auto;\n  max-width: 767px;\n}\n.form-contents[data-v-039466f4] {\n  margin-top: 26px;\n  margin-bottom: 15px;\n}\n.submit-button[data-v-039466f4] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  display: inline-block;\n  font-size: 16px;\n  padding: 8px 45px 7px;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  cursor: default;\n  margin: 0;\n}\n.submit-button i[data-v-039466f4] {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  position: relative;\n  top: 2px;\n  left: -3px;\n}\n.input-text-wrapper[data-v-039466f4] {\n  height: 25px;\n  padding-top: 5px;\n}\n.submit-button.default-back-button i[data-v-039466f4] {\n  left: 3px;\n}\n.submit-button.default-back-button[data-v-039466f4] {\n  background: #fff;\n  color: #777;\n  border: 1px solid #bdc4cc;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: 400;\n  font-size: 14px;\n}\n.submit-button.default-back-button:hover i[data-v-039466f4] {\n  -webkit-transform: translateX(5px);\n          transform: translateX(5px);\n}\n.submit-button.active[data-v-039466f4] {\n  background: #00c569;\n  cursor: pointer;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.submit-button.active:hover i[data-v-039466f4] {\n  background: #00c569;\n  cursor: pointer;\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n.action-control-wrapper[data-v-039466f4] {\n  padding: 20px 15px 50px;\n  background: #fff;\n}\nlabel[data-v-039466f4] {\n  margin: 0 auto 10px auto;\n  font-size: 15px;\n  font-weight: 400;\n  color: #777;\n}\n.small-label[data-v-039466f4] {\n  font-size: 15px;\n}\n.text-input-wrapper[data-v-039466f4] {\n  margin: 0 auto;\n  position: relative;\n  background: #fbfbfb;\n}\ninput[data-v-039466f4] {\n  background: none;\n  z-index: 1;\n  position: relative;\n  width: 100%;\n  padding: 8px 15px;\n  border: 1px solid #bdc4cc;\n  border-radius: 8px;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.text-input-wrapper i[data-v-039466f4] {\n  position: absolute;\n  left: 15px;\n  top: 11px;\n  font-size: 18px;\n  color: #bdc4cc;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\ninput[data-v-039466f4]:focus,\ninput:focus + i[data-v-039466f4] {\n  color: #333;\n  border-color: #333;\n}\ninput.active[data-v-039466f4] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-039466f4] {\n  color: #00c569;\n}\ninput.active[data-v-039466f4]:focus,\ninput.active:focus + i[data-v-039466f4],\ninput.active + i[data-v-039466f4] {\n  border-color: #00c569;\n}\ninput.error[data-v-039466f4] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-039466f4] {\n  color: #e41c38;\n}\ninput.error[data-v-039466f4]:focus,\ninput.error:focus + i[data-v-039466f4] {\n  border-color: #e41c38;\n}\n.spinner-border[data-v-039466f4] {\n  width: 1.5rem;\n  height: 1.5rem;\n  top: -5px;\n  position: relative;\n  left: 2px;\n}\nselect[data-v-039466f4] {\n  width: 100%;\n  border-radius: 8px;\n  padding: 8px 15px;\n  position: relative;\n  z-index: 1;\n  color: #777777;\n  direction: rtl;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  background: none;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n}\n.input-wrapper i[data-v-039466f4] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  -webkit-transition: 200ms;\n\n  transition: 200ms;\n}\n.select-items.input-wrapper[data-v-039466f4] {\n  position: relative;\n  margin: 6px auto;\n  background: #fbfbfb;\n}\n.select-items.input-wrapper[data-v-039466f4]:after {\n  content: \"\\F107\";\n\n  color: #777;\n\n  position: absolute;\n\n  display: inline-block;\n\n  top: 6px;\n\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n\n  font-weight: 900;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  z-index: 0;\n}\nselect option[data-v-039466f4] {\n  color: #333;\n}\nselect[data-v-039466f4]:focus {\n  color: #333;\n}\nselect.active[data-v-039466f4] {\n  color: #333;\n  color: #00c569;\n  border: 1px solid #00c569;\n}\nselect.active[data-v-039466f4]:focus {\n  color: #00c569;\n}\nselect.error[data-v-039466f4] {\n  color: #333;\n  color: #e41c38;\n  border: 1px solid #e41c38;\n}\nselect.error[data-v-039466f4]:focus {\n  color: #e41c38;\n}\n.error-message[data-v-039466f4] {\n  text-align: right;\n\n  color: #e41c38;\n\n  font-weight: bold;\n\n  height: 25px;\n\n  direction: rtl;\n\n  font-size: 11px;\n}\n.small-description[data-v-039466f4] {\n  font-size: 11px;\n\n  font-weight: bold;\n\n  color: #777777;\n\n  line-height: 1.618;\n}\n.small-description-text[data-v-039466f4] {\n  text-align: left;\n\n  font-weight: bold;\n\n  color: #777777;\n\n  height: 25px;\n\n  direction: rtl;\n\n  font-size: 12px;\n}\n.submit-button-wrapper[data-v-039466f4] {\n  text-align: center;\n}\nlabel .small-label[data-v-039466f4] {\n  font-size: 12px;\n}\n@media screen and (max-width: 767px) {\nselect[data-v-039466f4] {\n    font-size: 12px;\n}\n.input-wrapper[data-v-039466f4]::after {\n    left: 14px;\n}\n.form-contents[data-v-039466f4] {\n    border-radius: 0;\n}\n.title-section[data-v-039466f4] {\n    padding: 0 15px;\n}\nselect[data-v-039466f4] {\n    font-size: 12px;\n}\n.input-wrapper[data-v-039466f4]::after {\n    left: 14px;\n}\n.title-contents.margin-top-30[data-v-039466f4] {\n    margin-top: 30px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  props: ["wrapperBg", "isUserLogin"],
  data: function data() {
    return {
      errors: {
        categorySelected: "",
        sub_category_id: "",
        requirement_amount: "",
        name: ""
      },
      currentUser: {
        profile: "",
        user_info: ""
      },
      buyAd: {
        name: "",
        requirement_amount: "",
        sub_category_id: "",
        category_id: ""
      },
      buyAdFields: ["name", "requirement_amount", "sub_category_id"],
      categorySelected: "",
      categoryList: "",
      subCategoryList: "",
      selectedSubCategory: "",
      subCategoryName: "محصول",
      cities: "",
      buyAdFiles: [],
      popUpMsg: "",
      profileConfirmed: false,
      disableSubmit: false,
      submiting: false,
      relatedProducts: null,
      requirement_amount_text: "",
      categoryName: "میوه",
      items: [{
        message: " ثبت درخواست جدید",
        url: "registerRequest"
      }]
    };
  },
  methods: {
    init: function init() {
      var _this = this;

      axios.post("/user/profile_info").then(function (response) {
        return _this.currentUser = response.data;
      });

      axios.post("/get_category_list").then(function (response) {
        return _this.categoryList = response.data.categories;
      });
    },
    loadSubCategoryList: function loadSubCategoryList(category) {
      var _this2 = this;

      var categoryId = category.id;
      axios.post("/get_category_list", {
        parent_id: categoryId
      }).then(function (response) {
        return _this2.subCategoryList = response.data.categories;
      });
    },
    formValidator: function formValidator() {
      if (!this.categorySelected) {
        this.errors.categorySelected = "دسته بندی الزامی است";
      }
      if (!this.buyAd.sub_category_id) {
        this.errors.sub_category_id = "نام محصول الزامی است";
      }

      this.requirementAmountValidator(this.buyAd.requirement_amount);

      if (!this.errors.categorySelected && !this.errors.sub_category_id && !this.errors.name && !this.errors.requirement_amount) {
        this.submitBuyAd();
      }
    },
    submitBuyAd: function submitBuyAd() {
      this.errors = "";
      var self = this;

      this.buyAd.category_id = this.categorySelected.id;

      window.localStorage.setItem("buyAd", JSON.stringify(this.buyAd));

      if (this.isUserLogin) {
        window.location.href = "/buyer/register-request";
      } else {
        this.$router.push("/register");
      }
    },

    setCategoryId: function setCategoryId(subCategory) {
      this.errors.sub_category_id = "";
      this.buyAd.sub_category_id = subCategory.id;
    },
    setCityId: function setCityId(cityId) {
      this.buyAd.city_id = cityId;
    },
    toLatinNumbers: function toLatinNumbers(num) {
      if (num == null) {
        return null;
      }

      num = num.toString().replace(/,/g, "");
      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num.toString().replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    registerComponentExceptions: function registerComponentExceptions(description) {
      var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      gtag("event", "exception", {
        description: description,
        fatal: fatal
      });
    },
    isOsIOS: function isOsIOS() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
          safari = /safari/.test(userAgent),
          ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    scrollToTop: function scrollToTop() {
      window.scrollTo(0, 0);
    },

    requirementAmountValidator: function requirementAmountValidator(number) {
      this.errors.requirement_amount = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.requirement_amount = "فیلد میزان نیازمندی الزامی است";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.requirement_amount = "فقط عدد وارد کنید";
      }
    },
    validateRegx: function validateRegx(input, regx) {
      return regx.test(input);
    },
    convertUnits: function convertUnits(number) {
      var data = number / 1000;
      var text = "";
      if (number < 1000) {
        return number + " " + "کیلوگرم";
      } else {
        var ton = data.toString().split(".")[0];
        var kg = number.toString().substr(ton.length);
        kg = kg.replace(/^0+/, "");
        ton = this.getNumberWithCommas(ton);
        ton = ton + " " + "تن";

        if (kg) {
          kg = " و " + kg + " کیلوگرم";
          text = ton + kg;
        } else {
          text = ton;
        }

        return text;
      }
    },
    getNumberWithCommas: function getNumberWithCommas(number) {
      if (number || typeof number === "number") return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");else return "";
    },
    productNameValidator: function productNameValidator(name) {
      if (!this.validateRegx(name, /^[\u0600-\u06FF\s_,.:/;()+-\d]+$/)) {
        this.errors.name = "لطفا نوع محصول را فارسی وارد کنید.";
      }
    }
  },
  mounted: function mounted() {
    if (this.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
    this.init();
  },

  watch: {
    categorySelected: function categorySelected(category) {
      this.categoryName = category.category_name;
      this.loadSubCategoryList(category);
      this.errors.categorySelected = "";
    },
    selectedSubCategory: function selectedSubCategory(subCategory) {
      this.subCategoryName = subCategory.category_name;
      this.setCategoryId(subCategory);
    },
    "buyAd.sub_category_id": function buyAdSub_category_id() {
      this.errors.sub_category_id = "";
    },
    "buyAd.requirement_amount": function buyAdRequirement_amount(value) {
      this.errors.requirement_amount = "";
      if (value) {
        if (value.length >= 13) {
          this.buyAd.requirement_amount = value.substring(0, 13);
        }
        var number = this.toLatinNumbers(this.buyAd.requirement_amount);
        if (!this.validateRegx(number, /^\d*$/)) {
          this.errors.requirement_amount = "لطفا  فقط عدد وارد کنید";
        }
        if (!this.errors.requirement_amount) {
          this.buyAd.requirement_amount = this.getNumberWithCommas(number);
          this.requirement_amount_text = this.convertUnits(number);
        }
      } else {
        this.requirement_amount_text = "";
      }
    },

    "buyAd.name": function buyAdName(text) {
      this.errors.name = "";
      if (text) {
        this.productNameValidator(text);
      }
    }
  }
});

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "section-wrapper col-xs-12" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass: "text-right col-xs-12 form-contents-wrapper",
          class: { "wrapper-bg": _vm.wrapperBg }
        },
        [
          _c("div", { staticClass: "form-wrapper" }, [
            _c("div", { staticClass: "section-title" }, [
              _vm._v("ثبت درخواست خرید")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-contents col-xs-12" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-xs-12 col-md-6 pull-right" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "label",
                    { staticClass: "description", attrs: { for: "category" } },
                    [_vm._v(" مثلا: میوه ")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-wrapper select-items" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.categorySelected,
                            expression: "categorySelected"
                          }
                        ],
                        class: {
                          active: _vm.categorySelected,
                          error: _vm.errors.categorySelected
                        },
                        attrs: { id: "category" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.categorySelected = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { value: "", selected: "", disabled: "" } },
                          [_vm._v("انتخاب دسته بندی")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.categoryList, function(category, index) {
                          return _c("option", {
                            key: index,
                            domProps: {
                              value: category,
                              textContent: _vm._s(category.category_name)
                            }
                          })
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "error-message" }, [
                    _vm.errors.categorySelected
                      ? _c("span", {
                          domProps: {
                            textContent: _vm._s(_vm.errors.categorySelected)
                          }
                        })
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-md-6" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "description",
                      attrs: { for: "sub-category" }
                    },
                    [_vm._v("\n                مثلا: خرما\n              ")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-wrapper select-items" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedSubCategory,
                            expression: "selectedSubCategory"
                          }
                        ],
                        class: {
                          active: _vm.buyAd.sub_category_id,
                          error: _vm.errors.sub_category_id
                        },
                        attrs: { id: "sub-category" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.selectedSubCategory = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { value: "", disabled: "", selected: "" } },
                          [
                            _vm._v(
                              "\n                    انتخاب زیر دسته بندی\n                  "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.subCategoryList, function(
                          subCategory,
                          index
                        ) {
                          return _c("option", {
                            key: index,
                            domProps: {
                              value: subCategory,
                              textContent: _vm._s(subCategory.category_name)
                            }
                          })
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "error-message" }, [
                    _vm.errors.sub_category_id
                      ? _c("span", {
                          domProps: {
                            textContent: _vm._s(_vm.errors.sub_category_id)
                          }
                        })
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-md-6 pull-right" }, [
                  _c("h2", { staticClass: "title-contents col-xs-12" }, [
                    _vm._v("\n                نوع\n                "),
                    _c("span", {
                      staticClass: "light-green-text",
                      domProps: {
                        textContent: _vm._s(" " + _vm.subCategoryName + " ")
                      }
                    }),
                    _vm._v(
                      "\n                مورد نیاز خود را وارد کنید.\n              "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "description",
                      attrs: { for: "product-type" }
                    },
                    [
                      _vm.categoryName == "میوه"
                        ? _c("span", [_vm._v(" مثلا: مضافتی ")])
                        : _vm.categoryName == "صیفی"
                          ? _c("span", [
                              _vm._v(
                                "\n                  مثلا: بذر متین صادراتی\n                "
                              )
                            ])
                          : _vm.categoryName == "غلات"
                            ? _c("span", [
                                _vm._v(
                                  "\n                  مثلا: هندی ۱۱۲۱\n                "
                                )
                              ])
                            : _vm.categoryName == "خشکبار"
                              ? _c("span", [
                                  _vm._v(
                                    "\n                  مثلا: فندقی\n                "
                                  )
                                ])
                              : _vm.categoryName == "ادویه"
                                ? _c("span", [_vm._v(" مثلا: نگین ")])
                                : _vm.categoryName == "دامپروری"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                  مثلا: چهل گیاه\n                "
                                      )
                                    ])
                                  : _vm.categoryName == "حبوبات"
                                    ? _c("span", [_vm._v(" مثلا: چیتی ")])
                                    : _c("span", [_vm._v(" مثلا: مضافتی")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-input-wrapper" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.buyAd.name,
                          expression: "buyAd.name"
                        }
                      ],
                      class: { active: _vm.buyAd.name, error: _vm.errors.name },
                      attrs: {
                        id: "product-type",
                        type: "text",
                        placeholder: "نوع محصول مورد نیاز خود را وارد کنید",
                        pattern: "[0-9]*"
                      },
                      domProps: { value: _vm.buyAd.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.buyAd, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.buyAd.name && !_vm.errors.name
                      ? _c("i", { staticClass: "fa fa-check-circle" })
                      : _vm.errors.name
                        ? _c("i", { staticClass: "fa fa-times-circle" })
                        : _c("i", { staticClass: "fa fa-edit" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-text-wrapper" }, [
                    _c("p", { staticClass: "error-message" }, [
                      _vm.errors.name
                        ? _c("span", {
                            staticClass: "red-text",
                            domProps: { textContent: _vm._s(_vm.errors.name) }
                          })
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-md-6" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "description",
                      attrs: { for: "requirement_amount" }
                    },
                    [_vm._v("\n                مثلا: 50,000\n              ")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-input-wrapper" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.buyAd.requirement_amount,
                          expression: "buyAd.requirement_amount"
                        }
                      ],
                      class: {
                        active: _vm.buyAd.requirement_amount,
                        error: _vm.errors.requirement_amount
                      },
                      attrs: {
                        id: "requirement_amount",
                        type: "tel",
                        placeholder: "میزان نیازمندی را وارد کنید",
                        pattern: "[0-9]*"
                      },
                      domProps: { value: _vm.buyAd.requirement_amount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.buyAd,
                            "requirement_amount",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.buyAd.requirement_amount &&
                    !_vm.errors.requirement_amount
                      ? _c("i", { staticClass: "fa fa-check-circle" })
                      : _vm.errors.requirement_amount
                        ? _c("i", { staticClass: "fa fa-times-circle" })
                        : _c("i", { staticClass: "fa fa-edit" })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-text-wrapper" }, [
                    !_vm.errors.requirement_amount
                      ? _c("p", { staticClass: "small-description-text" }, [
                          _vm.requirement_amount_text
                            ? _c("span", {
                                staticClass: "blue-text",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.requirement_amount_text
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("p", { staticClass: "error-message" }, [
                      _vm.errors.requirement_amount
                        ? _c("span", {
                            staticClass: "red-text",
                            domProps: {
                              textContent: _vm._s(_vm.errors.requirement_amount)
                            }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "submit-button-wrapper col-xs-12" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "button",
                    {
                      staticClass: "submit-button disabled",
                      class: {
                        active:
                          _vm.buyAd.sub_category_id &&
                          _vm.buyAd.requirement_amount &&
                          !_vm.errors.requirement_amount
                      },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.formValidator()
                        }
                      }
                    },
                    [
                      _vm._v("\n                ثبت درخواست\n                "),
                      _c("i", { staticClass: "fa fa-check" })
                    ]
                  )
                ])
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "title-contents col-xs-12" }, [
      _vm._v("\n                دسته بندی محصول\n                "),
      _c("span", { staticClass: "red-text" }, [_vm._v(" * ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "title-contents col-xs-12" }, [
      _vm._v("\n                نام محصول\n\n                "),
      _c("span", { staticClass: "red-text" }, [_vm._v(" * ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "title-contents col-xs-12" }, [
      _vm._v("\n                میزان نیازمندی\n\n                "),
      _c("span", { staticClass: "small-label" }, [_vm._v("(کیلوگرم)")]),
      _vm._v(" "),
      _c("span", { staticClass: "red-text" }, [_vm._v(" * ")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-039466f4", module.exports)
  }
}

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(722);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("905f23a4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5ebe4ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c5ebe4ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n/*general styles*/\nh1[data-v-c5ebe4ce],\nh2[data-v-c5ebe4ce],\nh3[data-v-c5ebe4ce],\nh4[data-v-c5ebe4ce],\np[data-v-c5ebe4ce],\ndiv[data-v-c5ebe4ce],\nspan[data-v-c5ebe4ce] {\n  line-height: 1.618;\n}\np[data-v-c5ebe4ce] {\n  font-size: 14px;\n}\nh1[data-v-c5ebe4ce] {\n  font-size: 26px;\n\n  font-weight: 500;\n}\nh2[data-v-c5ebe4ce] {\n  font-size: 17px;\n\n  font-weight: normal;\n}\ni[data-v-c5ebe4ce] {\n  position: relative;\n  top: 1px;\n  padding: 0 2px;\n}\n#main-content[data-v-c5ebe4ce] {\n  margin-bottom: -60px;\n}\n.hidden[data-v-c5ebe4ce] {\n  display: none !important;\n}\n#intro[data-v-c5ebe4ce]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: rgba(25, 102, 142, 0.4);\n  background: radial-gradient(\n    circle,\n    rgba(0, 0, 0, 0.2) 0%,\n    rgba(0, 0, 0, 0.4) 100%\n  );\n  z-index: 0;\n}\n#intro > div[data-v-c5ebe4ce] {\n  position: relative;\n  z-index: 1;\n}\n.box-content[data-v-c5ebe4ce] {\n  overflow: hidden;\n  background: #fff;\n  padding: 15px;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n}\n.title-box[data-v-c5ebe4ce] {\n  text-align: center;\n}\n.title-box h3[data-v-c5ebe4ce] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #4b4b4b;\n  margin-bottom: 12px;\n}\n.title-box a[data-v-c5ebe4ce] {\n  margin: 20px auto 10px;\n  width: inherit;\n  font-size: 17px;\n  border-radius: 8px;\n  padding: 7px 22px 6px;\n  direction: rtl;\n  font-weight: normal;\n}\n.title-box a i[data-v-c5ebe4ce] {\n  top: 3px;\n}\n.title-box p[data-v-c5ebe4ce] {\n  margin-top: 20px;\n  font-size: 15px;\n  text-align: right;\n  line-height: 28px;\n}\n.section-wrapper[data-v-c5ebe4ce] {\n  margin-top: 30px;\n}\n.section-wrapper .title-box[data-v-c5ebe4ce] {\n  text-align: right;\n\n  margin-top: 85px;\n}\n.product-hidden[data-v-c5ebe4ce] {\n  display: none;\n}\n\n/*intro section style */\n#intro[data-v-c5ebe4ce] {\n  margin-top: 93px;\n\n  text-align: center;\n\n  padding: 25px 15px;\n\n  direction: rtl;\n\n  position: relative;\n  background-color: #404b55;\n}\n#intro h1[data-v-c5ebe4ce] {\n  margin-top: 18px;\n  font-size: 30px;\n  margin-bottom: 16px;\n}\n#intro h1[data-v-c5ebe4ce],\n#intro h2[data-v-c5ebe4ce] {\n  color: #fff;\n  font-weight: bold;\n}\n#intro h2[data-v-c5ebe4ce] {\n  margin-bottom: 16px;\n  font-size: 15px;\n}\n.search-wrapper[data-v-c5ebe4ce] {\n  position: relative;\n\n  max-width: 593px;\n\n  margin: 0 auto;\n}\n.hero-search-input[data-v-c5ebe4ce] {\n  display: block;\n  min-width: 455px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 8px;\n  margin: 35px auto 0;\n  max-width: 670px;\n}\n.hero-search-input input[data-v-c5ebe4ce] {\n  padding: 11px 15px;\n  border-radius: 12px;\n  margin: 0;\n  float: right;\n  border: none;\n  font-size: 16px;\n}\n.hero-search-input button[data-v-c5ebe4ce] {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n\n  border: none;\n\n  margin: 0;\n\n  padding: 16px 31px;\n\n  color: #fff;\n\n  background: #000546;\n\n  border-radius: 8px 0 0 8px;\n\n  position: absolute;\n\n  left: 0;\n\n  top: 0;\n\n  font-size: 20px;\n}\n.hero-search-input button[data-v-c5ebe4ce]:hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  padding-left: 33px;\n  padding-right: 33px;\n}\n.hero-search-input button[data-v-c5ebe4ce]:before {\n  position: relative;\n\n  top: 2px;\n}\n.main-cta-page[data-v-c5ebe4ce] {\n  font-size: 17px;\n  border-radius: 8px;\n  padding: 7px 22px 6px;\n  direction: rtl;\n  font-weight: normal;\n  margin: 20px auto 0;\n  display: block;\n  max-width: 270px;\n}\n#intro a.green-button[data-v-c5ebe4ce] {\n  font-size: 20px;\n  margin: 0 auto;\n  width: initial;\n  padding: 13px 33px;\n  font-weight: 400;\n  line-height: 1;\n  border-radius: 12px;\n  margin-top: 62px;\n  margin-bottom: 30px;\n}\n#intro a.green-button i[data-v-c5ebe4ce] {\n  font-size: 21px;\n  top: 3px;\n}\n\n/*sub navigation styles*/\n.last-buyAds-carousel[data-v-c5ebe4ce] {\n  z-index: 0;\n}\n.secondary-nav-wrapper[data-v-c5ebe4ce] {\n  background: #fff;\n\n  color: #4b4b4b;\n\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);\n\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);\n\n  direction: rtl;\n\n  text-align: center;\n}\n.category-item[data-v-c5ebe4ce] {\n  font-size: 16px;\n\n  color: #777;\n\n  padding: 7px 50px 13px;\n\n  display: inline-block;\n\n  line-height: 1.618;\n\n  position: relative;\n\n  font-weight: bold;\n}\n.category-item i[data-v-c5ebe4ce]:before {\n  position: relative;\n\n  right: 5px;\n\n  top: 2px;\n}\n.sub-category-item[data-v-c5ebe4ce]:hover {\n  background: #00c569;\n  border-color: #00c569;\n  color: #fff;\n}\n.sub-category-item[data-v-c5ebe4ce] {\n  font-size: 15px;\n  color: #5f6368;\n  display: inline-block;\n  line-height: 1.618;\n  position: relative;\n  padding: 5px 0px;\n  width: 100%;\n  background: #fff;\n  border-radius: 8px;\n  margin-top: 20px;\n  border: 1px solid #ddd;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\n.product-link.green-button[data-v-c5ebe4ce] {\n  width: initial;\n\n  margin: 0;\n\n  font-size: 14px;\n\n  font-weight: bold;\n}\n.product-link.green-button i[data-v-c5ebe4ce] {\n  position: relative;\n  top: 3px;\n  right: 5px;\n}\nnav[data-v-c5ebe4ce] {\n  position: relative;\n}\nnav li[data-v-c5ebe4ce] {\n  opacity: 0;\n\n  cursor: pointer;\n}\nnav li.active > h2 a[data-v-c5ebe4ce]:before {\n  content: \" \";\n\n  background: #00c569;\n\n  width: 100%;\n\n  display: block;\n\n  position: absolute;\n\n  left: 0;\n\n  bottom: 0;\n\n  height: 3px;\n}\nnav li.active > h2 a[data-v-c5ebe4ce]:after {\n  content: \" \";\n\n  display: inline-block;\n\n  width: 0;\n\n  height: 0;\n\n  border-style: solid;\n\n  border-width: 8px 8px 0 8px;\n\n  border-color: #00c569 transparent transparent transparent;\n\n  position: absolute;\n\n  bottom: -8px;\n\n  left: calc(50% - 8px);\n\n  z-index: 1001;\n}\nnav li > ul[data-v-c5ebe4ce] {\n  position: absolute;\n\n  pointer-events: none;\n\n  left: 0;\n\n  opacity: 0;\n\n  -webkit-transition: 500ms;\n\n  transition: 500ms;\n\n  border: 1px solid #f1f1f1;\n}\nnav > ul > li[data-v-c5ebe4ce] {\n  opacity: 1;\n\n  padding: 0;\n\n  direction: ltr;\n\n  -webkit-transition: 500ms;\n\n  transition: 500ms;\n}\nli.active > ul[data-v-c5ebe4ce] {\n  opacity: 1;\n\n  pointer-events: initial;\n\n  background: #fff;\n\n  border-radius: 0 0 4px 4px;\n\n  -webkit-box-shadow: 0 5px 6px rgba(0, 0, 0, 0.07);\n\n          box-shadow: 0 5px 6px rgba(0, 0, 0, 0.07);\n\n  padding: 20px 15px;\n\n  z-index: 1000;\n}\nli.active > ul > li[data-v-c5ebe4ce],\nul:hover > li[data-v-c5ebe4ce] {\n  opacity: 1;\n}\nnav > ul > li li ul[data-v-c5ebe4ce] {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  top: 0;\n  right: 0;\n}\nnav > ul > li > ul > li[data-v-c5ebe4ce] {\n  -webkit-transition: opacity 0.4s, -webkit-transform 0.4s;\n  transition: opacity 0.4s, -webkit-transform 0.4s;\n  transition: transform 0.4s, opacity 0.4s;\n  transition: transform 0.4s, opacity 0.4s, -webkit-transform 0.4s;\n  -webkit-transform: translateY(150%);\n          transform: translateY(150%);\n  opacity: 0;\n}\nnav > ul > li.active > ul > li[data-v-c5ebe4ce] {\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n  opacity: 1;\n}\nli > ul > li > ul > li[data-v-c5ebe4ce] {\n  -webkit-transition: opacity 0.4s, -webkit-transform 0.4s;\n  transition: opacity 0.4s, -webkit-transform 0.4s;\n  transition: transform 0.4s, opacity 0.4s;\n  transition: transform 0.4s, opacity 0.4s, -webkit-transform 0.4s;\n  -webkit-transform: translateX(195px) translateY(0%);\n          transform: translateX(195px) translateY(0%);\n  opacity: 0;\n}\nli > ul > li.active > ul > li[data-v-c5ebe4ce] {\n  -webkit-transform: translateX(0) translateY(0%);\n          transform: translateX(0) translateY(0%);\n  opacity: 1;\n}\n.default-item.carousel-item[data-v-c5ebe4ce] {\n  padding: 0;\n  text-align: center;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #f0f0f1;\n  margin-bottom: 20px;\n}\n\n/*requests section style*/\n.requests-contents[data-v-c5ebe4ce] {\n  padding: 0;\n  margin-top: 20px;\n  overflow: hidden;\n  padding-bottom: 10px;\n}\n.buyAds-placeholder[data-v-c5ebe4ce] {\n  border: 1px solid #ddd;\n  padding: 8px 11px 10px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  background: #fdfdfd !important;\n  overflow: hidden;\n}\n.wrapper_no_pro[data-v-c5ebe4ce] {\n  text-align: center;\n  font-size: 23px;\n  padding: 15px 0;\n}\n.content_no_pic[data-v-c5ebe4ce] {\n  font-size: 70px;\n  margin: 20px auto;\n  color: #bdbdbd;\n}\n.text_no_pic[data-v-c5ebe4ce] {\n  margin: 30px auto;\n  color: #bdbdbd;\n}\n.list-time[data-v-c5ebe4ce] {\n  direction: rtl;\n}\n.list-title[data-v-c5ebe4ce],\n.needs[data-v-c5ebe4ce],\n.list-time[data-v-c5ebe4ce] {\n  float: right;\n  text-align: center;\n  line-height: 1.618;\n  font-weight: bold;\n  padding: 0;\n  padding-top: 5px;\n}\n.list-group-item[data-v-c5ebe4ce] {\n  border: 1px solid #ddd;\n\n  padding: 7px 0;\n}\n.list-group-item a[data-v-c5ebe4ce] {\n  margin: 0;\n\n  width: initial;\n\n  padding: 6px 15px 9px;\n\n  direction: rtl;\n\n  font-size: 14px;\n\n  font-weight: bold;\n}\n.main-content > ul[data-v-c5ebe4ce] {\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 10px #e1e1e1;\n          box-shadow: 0 0 10px #e1e1e1;\n  overflow: hidden;\n}\n.main-content .list-group-item p[data-v-c5ebe4ce] {\n  text-align: center;\n  direction: rtl;\n}\n#main.little-main[data-v-c5ebe4ce] {\n  margin-right: 80px;\n}\n.message-list[data-v-c5ebe4ce] {\n  padding: 19px;\n  text-align: center;\n  background: #eff3f6;\n  line-height: 1.618;\n}\n.title[data-v-c5ebe4ce] {\n  text-align: right;\n  padding: 13px 15px;\n}\n.title h1[data-v-c5ebe4ce] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.list-placeholder-wrapper[data-v-c5ebe4ce] {\n  border: 1px solid rgb(221, 221, 221);\n\n  position: relative;\n\n  overflow: hidden;\n\n  border-radius: 0 0 3px 3px;\n\n  margin-bottom: 20px;\n\n  border-top: none;\n\n  background: #f6f6f6;\n}\n.list-placeholder-wrapper ul[data-v-c5ebe4ce] {\n  margin: 0;\n\n  overflow: hidden;\n\n  border: none;\n}\n.list-placeholder-wrapper li[data-v-c5ebe4ce] {\n  background: none;\n\n  -webkit-filter: blur(8px);\n\n  filter: blur(8px);\n}\n.list-placeholder[data-v-c5ebe4ce]::after {\n  position: absolute;\n\n  width: 100%;\n\n  height: 100%;\n\n  content: \"\";\n\n  left: 0;\n\n  top: 0;\n}\n.list-placeholder-wrapper .link[data-v-c5ebe4ce] {\n  position: absolute;\n\n  width: 100%;\n\n  text-align: center;\n\n  top: calc(50% - 82px);\n\n  padding: 15px;\n}\n.list-placeholder-wrapper .link-wrapper-content[data-v-c5ebe4ce] {\n  max-width: 500px;\n\n  background: white;\n\n  padding: 15px;\n\n  border-radius: 4px;\n\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n\n  margin: 0 auto;\n}\n.list-placeholder-wrapper .link p[data-v-c5ebe4ce] {\n  font-size: 19px;\n\n  font-weight: bold;\n\n  color: #4b4b4b;\n\n  margin-bottom: 4px;\n\n  line-height: 1.618;\n}\n.list-placeholder-wrapper .link a[data-v-c5ebe4ce] {\n  font-size: 14px;\n\n  font-weight: bold;\n\n  margin-top: 4px;\n}\n\n/*product section style*/\n.carousel-item[data-v-c5ebe4ce] {\n  padding: 0;\n  text-align: center;\n}\n.products-contents[data-v-c5ebe4ce] {\n  padding: 0;\n  margin-top: 5px;\n}\n.products-contents .product-placeholder-wrapper[data-v-c5ebe4ce] {\n  margin-top: 15px;\n}\n\n/*services section*/\n#services-section[data-v-c5ebe4ce] {\n  text-align: center;\n}\n#services-section h3[data-v-c5ebe4ce] {\n  margin-top: 24px;\n  font-size: 21px;\n  font-weight: 500;\n  color: #404b55;\n  margin-bottom: 26px;\n}\n.box-image[data-v-c5ebe4ce] {\n  height: 85px;\n}\n.box-image img[data-v-c5ebe4ce] {\n  width: initial;\n\n  height: 100%;\n}\n.service-box[data-v-c5ebe4ce] {\n  padding: 0;\n  position: relative;\n  top: 0;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-radius: 12px;\n  border: 1px solid #f0f0f1;\n  margin-bottom: 30px;\n}\n.service-box[data-v-c5ebe4ce]:hover {\n  top: -5px;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  -webkit-box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);\n}\n.service-box a[data-v-c5ebe4ce] {\n  padding: 15px;\n  display: block;\n  color: #4b4b4b;\n}\n.service-box a h4[data-v-c5ebe4ce] {\n  font-size: 17px;\n\n  font-weight: bold;\n}\n.service-box p[data-v-c5ebe4ce] {\n  margin-top: 5px;\n}\n\n/*links section styles */\n#benefit-links[data-v-c5ebe4ce] {\n  background: #fff;\n\n  text-align: right;\n}\n.links-title[data-v-c5ebe4ce] {\n  color: #777;\n\n  font-size: 16px;\n\n  font-weight: bold;\n\n  margin-top: 24px;\n}\n.benefit-links-item[data-v-c5ebe4ce] {\n  line-height: 1.4;\n  margin-top: 6px;\n  direction: rtl;\n  margin-bottom: 50px;\n}\n.benefit-links-item h4[data-v-c5ebe4ce] {\n  line-height: 1.4;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.benefit-links-item a[data-v-c5ebe4ce] {\n  font-size: 10px;\n  color: #bdc4cc;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.benefit-links-item a[data-v-c5ebe4ce]:hover {\n  color: #00c569;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n\n/*mobile responsive styles*/\n.mobile-requests-contents[data-v-c5ebe4ce] {\n  background: #fff;\n  border: 1px solid #ddd;\n  margin-bottom: 30px;\n  padding: 5px 0 20px;\n}\n.mobile-requests-buttons[data-v-c5ebe4ce] {\n  font-size: 14px;\n  width: initial;\n  font-weight: bold;\n  margin: 25px 0 0;\n}\n.main-incobac-logo img[data-v-c5ebe4ce] {\n  width: 200px;\n}\n.web-category-wrapper[data-v-c5ebe4ce] {\n  background: #fff;\n  position: absolute;\n  right: 15px;\n  left: 15px;\n  border-radius: 12px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);\n  padding: 8px 0 0;\n}\n.web-category-wrapper > .section-title[data-v-c5ebe4ce] {\n  margin: 0 14px;\n}\n.web-category-wrapper > ul[data-v-c5ebe4ce] {\n  margin-top: 10px;\n  height: 267px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  overflow: hidden;\n}\n\n/* .web-category-wrapper > ul > li {\n  position: relative;\n} */\n.web-category-wrapper > ul > li:hover .sub-categories-wrapper[data-v-c5ebe4ce] {\n  display: block;\n}\n.web-category-wrapper > ul > li button[data-v-c5ebe4ce] {\n  width: 100%;\n  background: none;\n  border: none;\n  padding: 8px 20px 9px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  z-index: 1;\n}\n.web-category-wrapper > ul > li span[data-v-c5ebe4ce],\n.web-category-wrapper > ul > li i[data-v-c5ebe4ce] {\n  position: relative;\n  z-index: 1;\n  font-size: 16px;\n  color: #5f6368;\n}\n.web-category-wrapper > ul > li span[data-v-c5ebe4ce] {\n  font-weight: 500;\n}\n.web-category-wrapper > ul > li:hover button[data-v-c5ebe4ce]::after {\n  width: 100%;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\n.web-category-wrapper > ul > li button[data-v-c5ebe4ce]::after {\n  content: \" \";\n  -webkit-transition: 150ms;\n  transition: 150ms;\n  background-color: #00c569;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  width: 0%;\n  z-index: 0;\n  background: #fbfbfb;\n}\n.web-category-wrapper .sub-categories-wrapper[data-v-c5ebe4ce] {\n  position: absolute;\n  right: 100%;\n  background: #fbfbfb;\n  /* top: 0; */\n  width: 600px;\n  border-radius: 12px 0 12px 12px;\n  overflow: hidden;\n  display: none;\n  min-height: 90px;\n  padding: 15px 20px 30px;\n  -webkit-box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.16);\n          box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.16);\n}\n.web-banner-wrapper[data-v-c5ebe4ce] {\n  margin-top: 70px;\n}\n.load-more-categories[data-v-c5ebe4ce] {\n  width: 100%;\n  background: #f2f2f2;\n  border: none;\n  border-radius: 0 0 12px 12px;\n  font-size: 17px;\n  font-weight: 500;\n  color: #556080;\n  padding: 8px 0px;\n  margin-top: 0;\n}\n.rotate-icon[data-v-c5ebe4ce] {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.web-banner-wrapper .banner-item[data-v-c5ebe4ce] {\n  height: 160px;\n  background-size: cover;\n  border-radius: 12px;\n  background-color: #404b55;\n  background-position: 50% 0;\n  background-repeat: no-repeat;\n  overflow: hidden;\n  border-radius: 12px;\n  position: relative;\n  margin-top: 20px;\n  border: none;\n  width: 100%;\n  z-index: 0;\n}\n.web-banner-wrapper .banner-contents[data-v-c5ebe4ce] {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  text-align: right;\n  color: #fff;\n  direction: rtl;\n}\n.web-banner-wrapper .banner-contents p[data-v-c5ebe4ce] {\n  font-size: 40px;\n  padding: 0 20px;\n}\n.web-banner-wrapper .banner-contents > div[data-v-c5ebe4ce] {\n  position: absolute;\n  left: 20px;\n  bottom: 15px;\n  border: none;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50px;\n  font-size: 18px;\n  padding: 5px 17px;\n}\n.web-banner-wrapper .banner-item[data-v-c5ebe4ce]::after {\n  content: \" \";\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: radial-gradient(\n    circle,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 0.5) 100%\n  );\n}\n.web-banner-wrapper .banner-more-categories[data-v-c5ebe4ce] {\n  height: 160px;\n  background-color: #f0f7e7;\n  overflow: hidden;\n  border-radius: 12px;\n  position: relative;\n  margin-top: 20px;\n  border: none;\n  width: 100%;\n}\n.web-banner-wrapper .banner-more-categories .banner-contents[data-v-c5ebe4ce] {\n  text-align: center;\n  color: #404b55;\n}\n.web-banner-wrapper .banner-more-categories .banner-contents p[data-v-c5ebe4ce] {\n  font-size: 32px;\n  padding: 9px 0 0;\n  width: 60px;\n  height: 60px;\n  background: #fff;\n  border-radius: 50px;\n  margin: 18px auto 0;\n}\n.web-banner-wrapper .banner-more-categories .banner-contents div[data-v-c5ebe4ce] {\n  position: relative;\n  bottom: initial;\n  left: initial;\n  background: #fff;\n  display: inline-block;\n  margin-top: 16px;\n}\n.web-banner-wrapper .banner-more-categories .banner-contents div i[data-v-c5ebe4ce] {\n  color: #1da1f2;\n}\n\n/* mobile categories styles \n******************************************/\n.mobile-banner[data-v-c5ebe4ce] {\n  padding: 20px 15px;\n}\n.mobile-banner .banner-item-wrapper[data-v-c5ebe4ce] {\n  background: #f2f2f2;\n  border-radius: 12px;\n  padding: 25px 0 0;\n  overflow: hidden;\n}\n.mobile-banner .banner-item-wrapper > div > div[data-v-c5ebe4ce] {\n  padding: 0 7px;\n  text-align: center;\n}\n.mobile-banner .banner-item[data-v-c5ebe4ce] {\n  text-align: center;\n  display: block;\n  background: none;\n  border: none;\n  padding: 0;\n  width: 100%;\n  margin-bottom: 20px;\n}\n.mobile-banner .banner-item-wrapper .banner-item .item-image[data-v-c5ebe4ce] {\n  height: 45px;\n  width: 45px;\n  border-radius: 50px;\n  background-size: cover;\n  margin: 0 auto;\n  background-position: center;\n  background-color: #fff;\n}\n.mobile-banner .banner-item-wrapper .banner-item.all-banners .item-image[data-v-c5ebe4ce] {\n  background-color: #fff;\n  padding-top: 7px;\n  font-size: 22px;\n}\n.mobile-banner .banner-item-wrapper .banner-item p[data-v-c5ebe4ce] {\n  font-size: 16px;\n  font-weight: 500;\n  color: #313a43;\n  margin-top: 5px;\n}\n\n/* categories modal styles \n******************************************/\n.modal-content[data-v-c5ebe4ce] {\n  overflow: hidden;\n  border-radius: 12px;\n}\n.close-modal[data-v-c5ebe4ce] {\n  font-size: 20px;\n\n  color: #777;\n\n  position: absolute;\n\n  right: 0;\n\n  padding: 8px 15px 2px;\n\n  top: 0;\n}\n.modal-title[data-v-c5ebe4ce] {\n  font-size: 16px;\n\n  font-weight: 800;\n\n  color: #474747;\n\n  text-align: center;\n}\n.modal-header[data-v-c5ebe4ce] {\n  padding: 9px 15px 10px;\n}\n.form-check-wrapper[data-v-c5ebe4ce] {\n  direction: rtl;\n}\n.report-form textarea[data-v-c5ebe4ce] {\n  max-width: 600px;\n\n  margin: 0px auto;\n\n  height: 110px;\n\n  max-height: 170px;\n\n  border-radius: 5px;\n\n  direction: rtl;\n}\n.main-text[data-v-c5ebe4ce] {\n  text-align: center;\n  /* margin: 20px 0 40px; */\n}\n.form-check-wrapper button[data-v-c5ebe4ce] {\n  width: 100%;\n\n  border: none;\n\n  background: none;\n\n  border-bottom: 1px solid #eee;\n\n  text-align: right;\n\n  padding: 12px 15px 13px;\n}\n.form-check-wrapper button[data-v-c5ebe4ce]:hover {\n  background: #fafafa;\n  cursor: pointer;\n}\n.form-check-wrapper li[data-v-c5ebe4ce] {\n  position: relative;\n}\n.form-check-wrapper li i[data-v-c5ebe4ce] {\n  position: absolute;\n\n  top: 15px;\n\n  left: 20px;\n\n  font-size: 18px;\n\n  color: #777;\n}\n.loading-list[data-v-c5ebe4ce] {\n  padding: 90px 0 130px;\n}\n.main-contents-wrapper[data-v-c5ebe4ce] {\n  padding: 20px;\n  position: relative;\n  border-radius: 12px;\n  border: 1px solid #f0f0f1;\n  margin: 30px auto;\n  direction: rtl;\n  max-height: 400px;\n  overflow-y: scroll;\n}\n.main-contents-wrapper > p[data-v-c5ebe4ce] {\n  margin: 20px auto;\n}\n.main-contents-wrapper p[data-v-c5ebe4ce]:last-of-type {\n  margin-bottom: 30px;\n}\n.items-wrapper[data-v-c5ebe4ce] {\n  padding: 0 3px;\n}\n@media screen and (max-width: 1199px) {\n.title-box a[data-v-c5ebe4ce] {\n    font-size: 15px;\n    padding: 7px 15px 6px;\n}\n}\n@media screen and (max-width: 992px) {\n.title-box a[data-v-c5ebe4ce] {\n    font-size: 17px;\n    padding: 7px 22px 6px;\n}\n.product-hidden[data-v-c5ebe4ce] {\n    display: block;\n}\n.section-wrapper .title-box[data-v-c5ebe4ce] {\n    margin-top: 35px;\n}\n}\n@media screen and (max-width: 767px) {\n.form-check-wrapper li:last-of-type button[data-v-c5ebe4ce] {\n    border: none;\n}\n.modal-body[data-v-c5ebe4ce] {\n    margin-left: 0;\n    margin-right: 0;\n}\n.mobile-banner .banner-item-wrapper .banner-item p[data-v-c5ebe4ce] {\n    height: 35px;\n}\n#intro[data-v-c5ebe4ce] {\n    margin-top: 75px;\n    padding: 20px 0;\n}\n.hero-search-input[data-v-c5ebe4ce] {\n    width: 100%;\n\n    margin-bottom: 15px;\n\n    min-width: initial;\n\n    overflow: hidden;\n}\n.hero-search-input button[data-v-c5ebe4ce] {\n    padding: 14px 20px 15px;\n}\n.hero-search-input button[data-v-c5ebe4ce]:hover {\n    padding: 14px 20px 15px;\n}\n#intro a.green-button[data-v-c5ebe4ce] {\n    margin: 15px auto;\n\n    float: none !important;\n}\n.secondary-nav-wrapper[data-v-c5ebe4ce] {\n    padding: 0;\n}\n.category-item[data-v-c5ebe4ce] {\n    padding: 7px 15px 13px;\n}\n.category-item i[data-v-c5ebe4ce]::before {\n    position: relative;\n    right: 1px;\n    top: 4px;\n}\nli.active > ul[data-v-c5ebe4ce] {\n    left: 0;\n\n    right: 0;\n}\n.product-link.green-button[data-v-c5ebe4ce] {\n    margin: 15px 0 0;\n}\n#categories-modal > div[data-v-c5ebe4ce] {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n}\n.modal-content[data-v-c5ebe4ce] {\n    min-height: 100%;\n\n    border-radius: 0;\n\n    border: none;\n\n    float: right;\n\n    width: 100%;\n}\n.title-box p[data-v-c5ebe4ce] {\n    text-align: center;\n}\n.section-wrapper .title-box[data-v-c5ebe4ce] {\n    text-align: center;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_components_main_register_request_form__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_components_main_register_request_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_components_main_register_request_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_components_landing_page_buyAds__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_components_landing_page_buyAds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_components_landing_page_buyAds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_components_landing_page_product_grid_article__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_components_landing_page_product_grid_article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__product_components_landing_page_product_grid_article__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_components_route__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_components_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__router_components_route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_device_uuid_lib_device_uuid__ = __webpack_require__(971);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_device_uuid_lib_device_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_device_uuid_lib_device_uuid__);
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






var visible = false;




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Route: __WEBPACK_IMPORTED_MODULE_4__router_components_route___default.a,
    LandingPageBuyAds: __WEBPACK_IMPORTED_MODULE_2__main_components_landing_page_buyAds___default.a,
    MainRegisterRequestForm: __WEBPACK_IMPORTED_MODULE_1__main_components_main_register_request_form___default.a,
    ProductGridArticle: __WEBPACK_IMPORTED_MODULE_3__product_components_landing_page_product_grid_article___default.a
  },
  props: ["isUserLogin", "userType", "assets", "str", "verifiedUserContent"],
  data: function data() {
    return {
      mainSearchBoxText: "",
      enterKeyActiveForSearch: false,
      lastRequests: "",
      lastProducts: "",
      isLoading: false,
      categoryList: "",
      subCategoryList: "",
      isCollapse: false,
      isCategories: false,
      categoryModalList: "",
      footerLinks: {
        wholesaleDate: [{
          name: "خرما",
          link: "خرما"
        }, {
          name: "خرمای مضافتی",
          link: "خرمای-مضافتی"
        }, {
          name: "خرمای بم",
          link: "خرمای-مضافتی"
        }, {
          name: "خرمای زاهدی",
          link: "خرما"
        }, {
          name: "خرمای بوشهر",
          link: "خرما"
        }, {
          name: "خرمای کبکاب",
          link: "خرما-کبکاب"
        }, {
          name: "خرما خاصویی",
          link: "خرما-خاصویی"
        }, {
          name: "خرما ربی",
          link: "خرما-ربی"
        }, {
          name: "خرمای خوزستان",
          link: "خرما"
        }, {
          name: "خرما در مشهد",
          link: "خرما"
        }, {
          name: "خرما در بوشهر",
          link: "خرما"
        }, {
          name: "خرمای مجول",
          link: "خرما"
        }, {
          name: "کشمش",
          link: "کشمش"
        }, {
          name: "پسته",
          link: "پسته"
        }, {
          name: "انجیر خشک استهبان",
          link: "انجیر"
        }, {
          name: "زعفران",
          link: "زعفران"
        }, {
          name: "پسته اکبری",
          link: "پسته-اکبری"
        }, {
          name: "پسته فندقی",
          link: "پسته-فندقی"
        }, {
          name: "پسته احمد آقایی",
          link: "پسته-احمد-آقایی"
        }, {
          name: "پسته کله قوچی",
          link: "پسته-کله-قوچی"
        }],
        wholesaleRise: [{
          name: "برنج",
          link: "برنج"
        }, {
          name: "خاطره",
          link: "برنج"
        }, {
          name: "هندی طبیعت",
          link: "برنج"
        }, {
          name: "محسن",
          link: "برنج"
        }, {
          name: "پاکستانی",
          link: "برنج"
        }, {
          name: "طبیعت",
          link: "برنج"
        }, {
          name: "قهوه ای",
          link: "برنج"
        }, {
          name: "شمال",
          link: "برنج-شمال"
        }, {
          name: "طارم",
          link: "برنج-طارم"
        }, {
          name: "دم سیاه",
          link: "برنج"
        }, {
          name: "هاشمی",
          link: "برنج-هاشمی"
        }, {
          name: "صدری",
          link: "برنج"
        }]
      }
    };
  },
  methods: {
    stopLoader: function stopLoader() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("isLoading", false);
    },
    collapseDropDown: function collapseDropDown() {
      $(".profile-list").fadeIn("slow", function () {
        visible = true;
      });
    },
    collapseDropDownList: function collapseDropDownList() {
      $(".icon-header-list").fadeIn("slow", function () {
        visible = true;
      });
    },
    documentClick: function documentClick(e) {
      if (visible) {
        $(".profile-list").fadeOut("slow");
        $(".icon-header-list").fadeOut("slow");
        visible = false;
      }
    },

    init: function init() {
      var _this = this;

      var self = this;
      $("#categories-modal").on("show.bs.modal", function (e) {
        _this.handleBackKeys();
      });

      window.scrollTo(0, 0);

      axios.post("/get_category_list", {
        cascade_list: true
      }).then(function (response) {
        self.categoryList = response.data.categories;
      });

      axios.post("/get_sample_products", {}).then(function (response) {
        self.lastProducts = response.data.products;
        self.$nextTick(function () {
          self.productOwlCarouselEnabled();
        });
      });

      axios.post("/get_sample_buyAds", {}).then(function (response) {
        self.lastRequests = response.data.buyAds;
        self.$nextTick(function () {
          self.buyAdsOwlCarouselEnabled();
        });
      });
    },
    search: function search() {
      if (this.mainSearchBoxText !== "") {
        __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("textSearch", this.mainSearchBoxText);

        var searchValue = this.mainSearchBoxText;
        var queryValue = searchValue.replace(/ /g, "+");

        this.$router.push({
          name: "productList",
          query: {
            s: queryValue
          }
        });
      }
    },
    generateProductLink: function generateProductLink(product) {
      var id = product.main.id;
      var categoryName = product.main.category_name;
      var subCategoryName = product.main.sub_category_name;

      return "/product-view/خرید-عمده-" + subCategoryName.replace(" ", "-") + "/" + categoryName.replace(" ", "-") + "/" + id;
    },
    getSubCategoryUrl: function getSubCategoryUrl(name) {
      var url = "/product-list/category/" + name.replace(" ", "-");
      return url;
    },
    dropDownSecondaryMenu: function dropDownSecondaryMenu(event, index) {
      function collapseDropDown(eventItem) {
        var dropdowns = $(".menu-wrapper > li");
        var targetClass = $(eventItem.target).attr("class");
        var activeItemIndex = $(".active .sub-categories-wrapper ").data("index");

        if (index != activeItemIndex && targetClass == "category-item" || index != activeItemIndex && targetClass == "fa fa-angle-down ") {
          dropdowns.each(function (index) {
            $(this).removeClass("active");
          });
          document.getElementById("menu" + index).classList.toggle("active");
        } else {
          dropdowns.each(function (index) {
            $(this).removeClass("active");
          });
        }
      }

      window.onclick = function (event) {
        var eventItem = event;
        setTimeout(collapseDropDown(eventItem), 80);
      };
    },

    getProductUrl: function getProductUrl(product) {
      return "/product-view/خرید-عمده-" + product.subcategory_name.replace(" ", "-") + "/" + product.category_name.replace(" ", "-") + "/" + product.id;
    },
    getNumberWithCommas: function getNumberWithCommas(number) {
      if (number || typeof number === "number") return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");else return "";
    },
    getConvertedNumbers: function getConvertedNumbers(number) {
      if (number || typeof number === "number") {
        var data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
    },
    collapseMenu: function collapseMenu() {
      if (!this.isCollapse) {
        var fullHeight = 10 + this.categoryList.length * 42.8833;
        fullHeight = Math.round(fullHeight);
        $("#web-categories").height(fullHeight);
        this.isCollapse = true;
      } else {
        $("#web-categories").height(267);
        this.isCollapse = false;
      }
    },
    getImageUrl: function getImageUrl(index) {
      return this.assets + "assets/img/banners/banner-" + index + ".jpg";
    },
    imageParallax: function imageParallax() {
      var parallax = -0.13;
      var staticHeight = -80;

      var $bg_image1 = $("#banner-item-1");
      var $bg_image2 = $("#banner-item-2");
      var $bg_image3 = $("#banner-item-3");
      var $bg_image4 = $("#banner-item-4");
      var $bg_image5 = $("#banner-item-5");
      var $bg_image6 = $("#banner-item-6");
      var $bg_image7 = $("#banner-item-7");

      var offset_tops = [];

      $bg_image1.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image2.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image3.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image4.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image5.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image6.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image7.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });

      $(window).scroll(function () {
        var dy = $(this).scrollTop();
        $bg_image1.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css("background-position", "50% " + ((dy - ot) * parallax + staticHeight) + "px");
        });
        $bg_image2.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css("background-position", "50% " + ((dy - ot) * parallax + staticHeight) + "px");
        });
        $bg_image3.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css("background-position", "50% " + ((dy - ot) * parallax + staticHeight) + "px");
        });
        $bg_image4.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css("background-position", "50% " + ((dy - ot) * parallax + staticHeight) + "px");
        });
        $bg_image5.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css("background-position", "50% " + ((dy - ot) * parallax + staticHeight) + "px");
        });
        $bg_image6.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css("background-position", "50% " + ((dy - ot) * parallax + staticHeight) + "px");
        });
        $bg_image7.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css("background-position", "50% " + ((dy - ot) * parallax + staticHeight) + "px");
        });
      });
    },
    closeModal: function closeModal() {
      $(".modal").modal("hide");
    },

    handleBackKeys: function handleBackKeys() {
      var _this2 = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function () {
        _this2.closeModal();
      });
    },
    routeCategories: function routeCategories(categoryName) {
      this.closeModal();
      this.$router.push(this.getSubCategoryUrl(categoryName));
    },
    openCategoriesModal: function openCategoriesModal(categoryname) {
      $("#categories-modal").modal("show");
      if (categoryname) {
        var categoryId = this.getCategoryIdByName(categoryname);
        for (var i = 0; i < this.categoryList.length; i++) {
          if (this.categoryList[i].id == categoryId) {
            this.categoryModalList = this.categoryList[i].subcategories;
          }
        }
      } else {
        this.isCategories = true;
        this.categoryModalList = this.categoryList;
      }
    },
    getCategoryIdByName: function getCategoryIdByName(categoryName) {
      var category = "";

      category = this.categoryList.filter(function (item) {
        if (categoryName == item.category_name) {
          return item;
        }
      });
      return category[0].id;
    },
    activeSubCategories: function activeSubCategories(categoryId) {
      for (var i = 0; i < this.categoryList.length; i++) {
        if (this.categoryList[i].id == categoryId) {
          this.categoryModalList = this.categoryList[i].subcategories;
        }
      }

      this.isCategories = false;
    },
    productOwlCarouselEnabled: function productOwlCarouselEnabled() {
      $(".latest-product .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        loop: false,
        rewind: true,
        nav: true,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        mouseDrag: true,
        margin: 6,
        dots: true,
        stagePadding: 6,
        rtl: true,
        responsive: {
          0: {
            items: 1,
            navText: false,
            dots: true
          },
          370: {
            items: 2,
            navText: false,
            dots: true
          },
          992: {
            items: 3
          }
        }
      });
    },
    buyAdsOwlCarouselEnabled: function buyAdsOwlCarouselEnabled() {
      $(".last-buyAds-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        nav: true,
        navText: false,
        items: 1,
        mouseDrag: true,
        margin: 3,
        dots: true,
        stagePadding: 3
      });
    }
  },
  mounted: function mounted() {
    var uuid = new __WEBPACK_IMPORTED_MODULE_5_device_uuid_lib_device_uuid___default.a.DeviceUUID();
    console.log(navigator.userAgent);
    this.init();
    this.imageParallax();
    this.isLoading = true;
  },
  updated: function updated() {
    this.$nextTick(this.stopLoader());
  },
  created: function created() {
    var _this3 = this;

    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$on("textSearch", function (event) {
      _this3.mainSearchBoxText = event;
    });

    gtag("config", "UA-129398000-1", { page_path: "/home-page" });

    document.addEventListener("click", this.documentClick);

    var self = this;

    window.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        if (self.enterKeyActiveForSearch) {
          self.search();
        }
      }
    });
  },

  watch: {
    mainSearchBoxText: function mainSearchBoxText(value) {
      this.enterKeyActiveForSearch = this.mainSearchBoxText !== "";
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("textSearch", value);
    }
  },
  metaInfo: function metaInfo() {
    return {
      title: " بازار خرید و فروش عمده محصولات کشاورزی ",
      titleTemplate: "باسکول | %s",
      meta: [{
        name: "description",
        content: "خرید و فروش عمده مواد غذایی و کشاورزی ایران ☀️☀️☀️ قیمت عمده مواد غذایی و محصولات کشاورزی - ارتباط مستقیم با صادرکنندگان خریداران فروشندگان عمده"
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

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(725)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(727)
/* template */
var __vue_template__ = __webpack_require__(728)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4f950b66"
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
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/landing-page-buyAds.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4f950b66", Component.options)
  } else {
    hotAPI.reload("data-v-4f950b66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(726);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("59a9a440", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f950b66\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./landing-page-buyAds.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4f950b66\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./landing-page-buyAds.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n/* .requests .main-content {\n  padding-top: 50px;\n} */\n.user-information-wrapper[data-v-4f950b66] {\n  float: right;\n  width: 100%;\n  margin-bottom: 4px;\n}\n.user-information-content[data-v-4f950b66] {\n  display: block;\n  float: right;\n  width: 100%;\n  background: none;\n  border: none;\n  padding-bottom: 3px;\n}\n.user-image[data-v-4f950b66] {\n  width: 25px;\n  height: 25px;\n  float: right;\n  margin-left: 10px;\n}\n.user-content[data-v-4f950b66] {\n  display: block;\n  max-width: 170px;\n  overflow: hidden;\n  font-size: 13px;\n  font-weight: 400;\n  color: #adadad;\n  height: 21px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: right;\n}\n.user-content i[data-v-4f950b66] {\n  margin-left: 1px;\n  position: relative;\n  top: 3px;\n  font-size: 15px;\n}\n.wrapper_no_pro[data-v-4f950b66] {\n  text-align: center;\n  font-size: 23px;\n  padding: 15px 0;\n}\n.content_no_pic[data-v-4f950b66] {\n  font-size: 70px;\n  margin: 20px auto;\n  color: #bdbdbd;\n}\n.text_no_pic[data-v-4f950b66] {\n  margin: 30px auto;\n  color: #bdbdbd;\n}\n.list-title[data-v-4f950b66],\n.needs[data-v-4f950b66],\n.list-time[data-v-4f950b66],\n.list-notice[data-v-4f950b66] {\n  direction: rtl;\n  text-align: center;\n  line-height: 1.618;\n  font-weight: 400;\n  padding: 5px;\n  color: #777;\n}\n.buyAd-wrapper-item[data-v-4f950b66] {\n  border: 1px solid #ddd;\n  padding: 3px 5px 5px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n}\n.buyAd-wrapper-item.golden[data-v-4f950b66] {\n  padding: 11px 15px 15px 0;\n}\n.buyAd-wrapper-item[data-v-4f950b66]:nth-last-of-type(2n + 1) {\n  background: #fdfdfd !important;\n}\n.buyAd-phone-buttons-wrapper[data-v-4f950b66] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n.detail-success[data-v-4f950b66] {\n  padding: 10px 0;\n  width: 100%;\n  background: #00c569;\n  border: none;\n  color: #fff;\n  text-align: center;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: bold;\n  display: block;\n  max-width: 250px;\n  margin: 13px auto 0;\n  direction: rtl;\n}\nbutton.disable[data-v-4f950b66] {\n  background: #e0e0e0 !important;\n}\n.main-content > ul[data-v-4f950b66] {\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 10px #e1e1e1;\n          box-shadow: 0 0 10px #e1e1e1;\n  overflow: hidden;\n}\n.main-content .buyAd-wrapper-item > p[data-v-4f950b66] {\n  text-align: center;\n  direction: rtl;\n  padding-top: 25px;\n  font-size: 15px;\n  font-weight: bold;\n}\n#main.little-main[data-v-4f950b66] {\n  margin-right: 80px;\n}\n.message-list[data-v-4f950b66] {\n  padding: 19px;\n  text-align: center;\n  background: #eff3f6;\n  line-height: 1.618;\n}\n.request-detail .green-button[data-v-4f950b66] {\n  font-size: 16px;\n  padding: 8px 30px;\n}\n.title[data-v-4f950b66] {\n  background: #f6f6f6;\n  position: fixed;\n  right: 250px;\n  left: 0;\n  z-index: 4;\n  border-radius: 0;\n  padding: 13px 15px;\n}\n.placeholder-title h1[data-v-4f950b66],\n.title h1[data-v-4f950b66] {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.9;\n}\n.fix-request-header-box[data-v-4f950b66] {\n  background: #eff3f6;\n  position: fixed;\n  right: 250px;\n  left: 0;\n  z-index: 2;\n  border-radius: 0;\n  padding: 10px 0;\n}\n.fix-request-bottom[data-v-4f950b66] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  background: #fff;\n  border-radius: 0;\n  padding: 10px 0;\n}\n.request-update button[data-v-4f950b66] {\n  margin: 0;\n  padding: 3px 14px;\n  margin-right: 6px;\n}\n#main.little-main .fix-request-header-box[data-v-4f950b66],\n#main.little-main .title[data-v-4f950b66] {\n  right: 80px;\n}\n.detail-contents[data-v-4f950b66] {\n  margin: 15px auto;\n}\n.detail-contents > div[data-v-4f950b66] {\n  background: #fff;\n  padding: 15px;\n  margin-bottom: 15px;\n  line-height: 25px;\n  font-size: 30px;\n}\n.list-notice[data-v-4f950b66] {\n  text-align: right;\n  height: 32px;\n}\n.list-notice button[data-v-4f950b66] {\n  background: none;\n\n  border: none;\n\n  color: #556080;\n\n  padding: 0;\n\n  position: relative;\n\n  top: -5px;\n}\n.list-notice button > span[data-v-4f950b66]:first-of-type {\n  position: relative;\n\n  font-size: 26px;\n}\n.list-notice button > span.request-count[data-v-4f950b66] {\n  font-size: 18px;\n\n  position: relative;\n\n  top: -5px;\n}\n.list-notice button > span > i[data-v-4f950b66]:last-of-type {\n  position: absolute;\n\n  left: 17px;\n\n  color: #fff;\n\n  font-size: 15px;\n\n  top: 7px;\n}\n.hide-reply[data-v-4f950b66] {\n  display: none;\n}\n.wrapper-items[data-v-4f950b66] {\n  padding-top: 75px;\n  overflow: hidden;\n}\n.list-title.list-name[data-v-4f950b66] {\n  text-align: right;\n  padding: 5px 15px;\n  direction: rtl;\n  color: #7e7e7e;\n}\n.list-title.list-name div.buyer-text[data-v-4f950b66] {\n  text-align: center;\n  font-size: 15px;\n  font-weight: normal;\n  height: 65px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.list-title.list-name div.buyer-text > div[data-v-4f950b66] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bold;\n}\n.text-center[data-v-4f950b66] {\n  text-align: center !important;\n}\n@media screen and (max-width: 991px) {\n.fix-request-header-box[data-v-4f950b66],\n  .title[data-v-4f950b66] {\n    right: 0;\n}\n.default-list-title[data-v-4f950b66] {\n    padding: 4px 15px;\n}\n}\n@media screen and (max-width: 767px) {\n.banner-wrapper .main-wrapper[data-v-4f950b66] {\n    padding: 20px 10px;\n}\n.banner-wrapper .circle-item-wrapper[data-v-4f950b66] {\n    left: -20px;\n    width: 190px;\n    height: 190px;\n    top: calc(50% - 48px);\n}\n.buyAd-phone-buttons-wrapper[data-v-4f950b66] {\n    margin-top: 15px;\n}\n.list-title.list-name div.buyer-text[data-v-4f950b66] {\n    text-align: center;\n    min-height: 83px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.list-title.list-name div.buyer-text > div[data-v-4f950b66] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.button-wrapper[data-v-4f950b66] {\n    margin: 10px auto;\n}\n.main-content .buyAd-wrapper-item > p[data-v-4f950b66] {\n    padding-top: 10px;\n}\n.lock span.lock-text[data-v-4f950b66] {\n    text-align: center;\n    right: 0;\n    top: 90px;\n}\n.main-content[data-v-4f950b66],\n  .wrapper-items[data-v-4f950b66] {\n    padding: 0;\n}\n.requests .main-content[data-v-4f950b66] {\n    padding: 0 0 100px !important;\n}\n.title[data-v-4f950b66] {\n    position: relative;\n    z-index: 0;\n}\n.title h1[data-v-4f950b66] {\n    text-align: center;\n}\n.detail-success[data-v-4f950b66] {\n    max-width: 300px;\n    margin: 13px auto 0;\n}\n.default-button-full-with[data-v-4f950b66] {\n    max-width: 300px;\n}\n.list-notice button > span.request-count[data-v-4f950b66] {\n    font-size: 15px;\n    top: -5px;\n}\n.list-notice button > span > i[data-v-4f950b66]:last-of-type {\n    left: 16px;\n\n    font-size: 12px;\n    top: 7px;\n}\n.list-notice button > span[data-v-4f950b66]:first-of-type {\n    font-size: 23px;\n}\n.list-notice button > span.request-count[data-v-4f950b66] {\n    font-size: 15px;\n}\n.list-title.list-name[data-v-4f950b66] {\n    text-align: center !important;\n}\n.main-content .buyAd-wrapper-item > p.list-notice[data-v-4f950b66] {\n    text-align: left;\n    padding-left: 30px;\n}\n.main-content .buyAd-wrapper-item > p.list-time[data-v-4f950b66] {\n    text-align: right;\n    padding-right: 30px;\n    padding-top: 6px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  props: ["buyAd"],
  methods: {
    getConvertedNumbers: function getConvertedNumbers(number) {
      if (number || typeof number === "number") {
        var data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
    },
    getNumberWithCommas: function getNumberWithCommas(number) {
      if (number || typeof number === "number") return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");else return "";
    }
  }
});

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "buyAd-wrapper-item col-xs-12" }, [
    _c("div", { staticClass: "list-title list-name col-xs-12" }, [
      _c("div", { staticClass: "user-information-wrapper" }, [
        _c("div", { staticClass: "user-information-content" }, [
          _c("div", { staticClass: "user-content" }, [
            _c("i", { staticClass: "fa fa-user-circle" }),
            _vm._v(" "),
            _c("span", {
              staticClass: "user-name-link",
              domProps: {
                textContent: _vm._s(
                  _vm.buyAd.first_name + " " + _vm.buyAd.last_name
                )
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "buyer-text" }, [
        _c("div", [
          _c("span", [_vm._v(" خریدار ")]),
          _vm._v(" "),
          _c("span", {
            staticClass: "red-text",
            domProps: {
              textContent: _vm._s(
                _vm.getConvertedNumbers(_vm.buyAd.requirement_amount)
              )
            }
          }),
          _vm._v(" "),
          _c("span", {
            staticClass: "brand-text",
            domProps: { textContent: _vm._s(_vm.buyAd.subcategory_name) }
          }),
          _vm._v(" "),
          _vm.buyAd.name ? _c("span", [_vm._v(" از نوع ")]) : _vm._e(),
          _vm._v(" "),
          _vm.buyAd.name
            ? _c("span", {
                staticClass: "brand-text",
                domProps: { textContent: _vm._s(_vm.buyAd.name) }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("span", [_vm._v(" هستم ")])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("p", {
      staticClass: "list-time",
      domProps: { textContent: _vm._s(_vm.buyAd.register_date) }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4f950b66", module.exports)
  }
}

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(730)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(732)
/* template */
var __vue_template__ = __webpack_require__(733)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61294016"
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
Component.options.__file = "resources/assets/js/components/layouts/main/product_components/landing_page_product_grid_article.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61294016", Component.options)
  } else {
    hotAPI.reload("data-v-61294016", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(731);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("cf52984a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61294016\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./landing_page_product_grid_article.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61294016\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./landing_page_product_grid_article.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.green-button[data-v-61294016]:focus,\n.green-button[data-v-61294016]:hover {\n  color: #fff !important;\n}\n.green-button.edit-product[data-v-61294016] {\n  background: #000546;\n  width: 100%;\n}\n.green-button[data-v-61294016]:focus {\n  color: #fff;\n}\n.green-button.edit-product[data-v-61294016]:hover {\n  background: #000430;\n}\n.title-widget[data-v-61294016] {\n  font-size: 18px;\n  padding: 15px 15px 0 15px;\n}\n.main-content-item[data-v-61294016] {\n  direction: rtl;\n  margin: 15px auto;\n  border-radius: 12px;\n  padding: 0;\n  background: #fff;\n  float: right;\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  overflow: hidden;\n  position: relative;\n  height: 250px;\n}\n.elevator-event[data-v-61294016] {\n  position: absolute;\n  left: 5px;\n  bottom: 15px;\n  border: none;\n  border-radius: 8px;\n  background: #38485f;\n  color: #fff;\n}\n.main-article-title[data-v-61294016] {\n  margin: 15px auto;\n  font-weight: bold;\n  font-size: 32px;\n}\n.main-article-title a[data-v-61294016] {\n  color: #4c5058;\n}\n.main-article-title a[data-v-61294016]:hover {\n  color: #444;\n}\n.main-article-content p[data-v-61294016] {\n  margin-bottom: 15px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.main-article-content p span[data-v-61294016] {\n  font-weight: normal;\n}\n.image-article-content[data-v-61294016] {\n  padding: 0;\n  padding-top: 10px;\n  height: 240px;\n  overflow: hidden;\n  float: right;\n}\n.image-article-content img[data-v-61294016] {\n  height: 100%;\n}\n.buy_details[data-v-61294016] {\n  border-top: 2px solid #f0f3f6;\n  padding: 15px 0;\n  margin: 15px auto;\n  display: none;\n}\n.btn-content[data-v-61294016] {\n  display: inline-block;\n  margin: 0 auto;\n}\n.btn-content img[data-v-61294016],\n.btn-content span[data-v-61294016] {\n  float: right;\n  margin: 0 5px;\n}\n.create_buy_mobile a[data-v-61294016] {\n  margin: 0;\n}\n.main-image[data-v-61294016] {\n  float: right;\n  direction: ltr;\n  padding: 0;\n}\n.load-more-button a[data-v-61294016] {\n  direction: rtl;\n  color: #666;\n  font-size: 18px;\n  width: 100%;\n  -webkit-box-shadow: 0 0 5px #bfbfbf;\n          box-shadow: 0 0 5px #bfbfbf;\n  background: #f0f3f6 !important;\n  overflow: hidden;\n  border-radius: 5px;\n  position: relative;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  border: none;\n  top: 0;\n}\n.load-more-button a[data-v-61294016]:hover {\n  top: -6px;\n  color: #333333;\n  -webkit-box-shadow: 0 0 5px #a5a5a5;\n          box-shadow: 0 0 5px #a5a5a5;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  position: relative;\n}\n.btn-loader[data-v-61294016] {\n  height: 38px;\n\n  overflow: hidden;\n}\n.btn-loader img[data-v-61294016] {\n  width: 56px;\n  margin-top: -15px;\n}\ninput[type=\"text\"][data-v-61294016],\nselect[data-v-61294016],\ntextarea[data-v-61294016] {\n  background: #eff3f6;\n  border: 1px solid #cfcfcf;\n  border-radius: 3px;\n  width: 100% !important;\n}\ninput[type=\"text\"][data-v-61294016],\ntextarea[data-v-61294016] {\n  padding: 13px 15px;\n}\nlabel[data-v-61294016] {\n  display: block;\n  margin: 9px auto;\n}\n.article-seo-title[data-v-61294016] {\n  margin-bottom: 15px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.article-seo-title h2[data-v-61294016] {\n  font-size: 15px;\n  font-weight: normal;\n  display: inline-block;\n  color: #333;\n}\n.is-user-valid[data-v-61294016] {\n  border: 1px solid #00c569;\n}\n.modal-content[data-v-61294016] {\n  overflow: hidden;\n}\n.text-danger[data-v-61294016] {\n  height: 24px;\n  font-size: 12px;\n}\n.close-modal[data-v-61294016] {\n  font-size: 20px;\n\n  color: red;\n\n  float: right;\n\n  display: block;\n\n  margin-left: 15px;\n\n  margin-top: 8px;\n}\n.modal-title[data-v-61294016] {\n  float: right;\n\n  font-size: 23px;\n\n  font-weight: bold;\n\n  color: #474747;\n}\n.green-button[data-v-61294016] {\n  border: medium none;\n\n  margin: 15px auto;\n\n  width: initial;\n\n  font-size: 14px;\n\n  font-weight: bold;\n\n  display: block;\n}\n.footer-article[data-v-61294016] {\n  overflow: hidden;\n  padding: 0 10px 10px;\n}\n.article-features[data-v-61294016] {\n  width: 42px;\n}\n.article-features button[data-v-61294016] {\n  background: none;\n  border: none;\n}\n.article-action-buttons[data-v-61294016] {\n  width: calc(100% - 42px);\n  padding-left: 10px;\n}\n.article-action-buttons > button[data-v-61294016] {\n  margin: 0;\n  padding: 4px 15px;\n  width: 100%;\n  border-radius: 8px;\n}\n.article-features button.disable[data-v-61294016] {\n  background: #777;\n  border: none;\n}\n.article-features button.disable[data-v-61294016] {\n  background: #777;\n  border: none;\n}\n.full-width-button[data-v-61294016],\n.full-width-button button[data-v-61294016] {\n  width: 100% !important;\n  padding-left: 0;\n}\n.owner-product .article-action-buttons[data-v-61294016] {\n  width: calc(100% - 114px);\n  padding-left: 5px;\n}\n.owner-product .article-features button.elevator-event[data-v-61294016]:first-of-type {\n  font-size: 11px;\n  padding: 4px 4px 3px;\n}\n.owner-product .article-features button.elevator-event[data-v-61294016] {\n  color: #fff;\n  border-radius: 4px;\n  padding: 4px 10px;\n}\n.owner-product .article-features[data-v-61294016] {\n  width: 114px;\n}\n@media screen and (max-width: 555px) {\n.article-action-buttons > button[data-v-61294016] {\n    padding: 8px 15px;\n    font-size: 16px;\n}\n.article-action-buttons[data-v-61294016] {\n    padding: 0 15px 15px;\n    display: block;\n}\n.article-features[data-v-61294016] {\n    position: relative;\n\n    padding: 0 15px;\n\n    right: 0;\n\n    bottom: 0;\n}\n.article-features[data-v-61294016] {\n    min-width: initial;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_grid_article_components_product_user_info__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_grid_article_components_product_user_info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__product_grid_article_components_product_user_info__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_grid_article_components_article_main_contents__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_grid_article_components_article_main_contents___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__product_grid_article_components_article_main_contents__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_grid_article_components_product_image__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_grid_article_components_product_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__product_grid_article_components_product_image__);
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
  components: {
    ProductUserInfo: __WEBPACK_IMPORTED_MODULE_1__product_grid_article_components_product_user_info___default.a,
    ArticleMainContents: __WEBPACK_IMPORTED_MODULE_2__product_grid_article_components_article_main_contents___default.a,
    ProductImage: __WEBPACK_IMPORTED_MODULE_3__product_grid_article_components_product_image___default.a
  },
  props: ["productIndex", "lastProduct", "str"],
  data: function data() {
    return {
      submiting: false,
      errors: "",
      popUpMsg: "",
      popUpLoaded: false,
      isMyProfile: false,
      product: {
        user_info: "",
        main: "",
        profile_info: ""
      },
      productUrl: "",
      jsonLDObject: "",
      verifiedUserContent: this.$parent.verifiedUserContent
    };
  },
  methods: {
    init: function init() {
      this.productUrl = this.getProductUrl();
    },
    setProductData: function setProductData() {
      this.product.user_info = {
        first_name: this.lastProduct.first_name,
        last_name: this.lastProduct.last_name,
        active_pakage_type: 0,
        user_name: "",
        response_rate: 0,
        is_verified: this.lastProduct.is_verified
      };
      this.product.main = {
        id: this.lastProduct.id,
        photos_count: 0,
        sub_category_name: this.lastProduct.subcategory_name,
        category_name: this.lastProduct.category_name,
        product_name: this.lastProduct.product_name,
        city_name: this.lastProduct.city_name,
        province_name: this.lastProduct.province_name,
        stock: this.lastProduct.stock
      };
    },

    setScroll: function setScroll() {
      localStorage.setItem("scrollIndex", this.$props.productIndex);
      window.open(this.productUrl, "_blank");
      // if (
      //   this.isDeviceMobile() &&
      //   window.location.pathname.includes("product-list")
      // ) {
      //   window.open(this.productUrl, "_blank");
      // } else {
      //   this.$router.push(this.productUrl);
      // }
      this.registerComponentStatistics("product", "show-product-in-seperate-page", "show-product-in-seperate-page");
    },
    toLatinNumbers: function toLatinNumbers(num) {
      if (num == null) {
        return null;
      }

      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num.toString().replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
    },
    scrollToTheRequestRegisterBox: function scrollToTheRequestRegisterBox(element) {
      var newPosition = $(element).offset();
      $("html, body").stop().animate({ scrollTop: newPosition.top - 380 }, 1000);
    },

    getProductUrl: function getProductUrl() {
      return "/product-view/خرید-عمده-" + this.product.main.sub_category_name.replace(" ", "-") + "/" + this.product.main.category_name.replace(" ", "-") + "/" + this.product.main.id;
    },
    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    createJsonLDObject: function createJsonLDObject() {
      var fullName = this.product.user_info.first_name + " " + this.product.user_info.last_name;

      var productOwnerProfilePageUrl = "https://www.buskool.com/profile/" + this.product.user_info.user_name;

      var jsonDL = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: this.product.main.product_name,
        image: this.product.photos.map(function (photo) {
          return "https://www.buskool.com/storage/" + photo.file_path;
        }),
        description: this.product.main.description,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.4",
          reviewCount: "3"
        },
        offers: {
          "@type": "Offer",
          url: "https://www.buskool.com" + this.getProductUrl(),
          priceCurrency: "IRR",
          price: this.product.main.min_sale_price * 10,
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Person",
            name: fullName,
            url: productOwnerProfilePageUrl
          }
        }
      };

      return jsonDL;
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    registerComponentExceptions: function registerComponentExceptions(description) {
      var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      gtag("event", "exception", {
        description: description,
        fatal: fatal
      });
    }
  },
  created: function created() {
    this.setProductData();
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "article",
    { staticClass: "main-content-item" },
    [
      _c(
        "div",
        {
          staticClass: "main-article-contents-image-wrapper",
          on: {
            click: function($event) {
              _vm.setScroll()
            }
          }
        },
        [
          _c("ProductImage", {
            attrs: {
              base: _vm.str + "/",
              img: _vm.lastProduct.photo,
              alt:
                "فروش عمده ی " +
                _vm.lastProduct.sub_category_name +
                " " +
                _vm.lastProduct.product_name +
                " " +
                _vm.lastProduct.city_name +
                " - " +
                _vm.lastProduct.province_name,
              "image-count": _vm.product.main.photos_count,
              "product-url": _vm.productUrl
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("ProductUserInfo", {
        attrs: {
          profile_photo: _vm.product.profile_info.profile_photo,
          user_info: _vm.product.user_info,
          user_full_name:
            _vm.lastProduct.first_name + " " + _vm.lastProduct.last_name,
          user_name: _vm.product.user_info.user_name,
          current_user: false,
          product_id: _vm.lastProduct.id,
          is_my_profile_status: false
        }
      }),
      _vm._v(" "),
      _c("ArticleMainContents", {
        attrs: { productIndex: _vm.productIndex, is_my_profile_status: false }
      }),
      _vm._v(" "),
      _c("script", {
        attrs: { type: "application/ld+json" },
        domProps: { innerHTML: _vm._s(_vm.jsonLDObject) }
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
    require("vue-hot-reload-api")      .rerender("data-v-61294016", module.exports)
  }
}

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        class: {
          "loader-wrapper": _vm.isLoading,
          "finish-loader-show": !_vm.isLoading
        }
      },
      [_vm._m(0)]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        {
          staticClass: "categories-modal modal fade",
          attrs: { id: "categories-modal", tabindex: "-1", role: "dialog" }
        },
        [
          _c(
            "div",
            {
              staticClass: "modal-dialog modal-dialog-centered",
              attrs: { role: "document" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-header" }, [
                  _c(
                    "a",
                    {
                      staticClass: "close-modal",
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.closeModal()
                        }
                      }
                    },
                    [_c("i", { staticClass: "fa fa-times" })]
                  ),
                  _vm._v(" "),
                  _vm._m(1)
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body row" }, [
                  !_vm.isCategories
                    ? _c(
                        "ul",
                        { staticClass: "form-check-wrapper" },
                        _vm._l(_vm.categoryModalList, function(item, index) {
                          return _c(
                            "li",
                            {
                              key: item.category_name + index,
                              staticClass: "col-xs-12 col-sm-4 pull-right"
                            },
                            [
                              _c("button", {
                                staticClass: "default-button-list",
                                domProps: {
                                  textContent: _vm._s(item.category_name)
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.routeCategories(item.category_name)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("i", { staticClass: "fa fa-angle-left" })
                            ]
                          )
                        })
                      )
                    : _c(
                        "ul",
                        { staticClass: "form-check-wrapper" },
                        _vm._l(_vm.categoryModalList, function(item, index) {
                          return _c(
                            "li",
                            {
                              key: item.category_name + index,
                              staticClass: "col-xs-12 col-sm-4 pull-right"
                            },
                            [
                              _c("button", {
                                staticClass: "default-button-list",
                                domProps: {
                                  textContent: _vm._s(item.category_name)
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.activeSubCategories(item.id)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("i", { staticClass: "fa fa-angle-left" })
                            ]
                          )
                        })
                      )
                ])
              ])
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "container-fluid", attrs: { id: "intro" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              {
                attrs: {
                  name: "fadeIn",
                  delay: "0.5s",
                  duration: "1s",
                  iteration: 1,
                  offset: 0,
                  animateClass: "animated",
                  begin: false
                }
              },
              [
                _c("h2", { staticClass: "intro-site-title" }, [
                  _vm._v(
                    "\n              ارتباط مستقیم با خریداران و فروشندگان عمده محصولات کشاورزی\n            "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "search-wrapper" },
              [
                _c("div", { staticClass: "hero-search-input" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mainSearchBoxText,
                        expression: "mainSearchBoxText"
                      }
                    ],
                    attrs: {
                      type: "text",
                      placeholder: "محصول مورد نظر خود را جستجو کنید"
                    },
                    domProps: { value: _vm.mainSearchBoxText },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.mainSearchBoxText = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("button", {
                    staticClass: "hidden-sm hidden-md hidden-lg fa fa-search",
                    on: { click: _vm.search }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "hidden-xs", on: { click: _vm.search } },
                    [_c("i", { staticClass: "fa fa-search" })]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "green-button",
                    attrs: { to: { name: "productList" } }
                  },
                  [
                    _vm._v("\n              لیست محصولات\n              "),
                    _c("i", { staticClass: "fa fa-angle-left" })
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "categories-banner container",
        attrs: { id: "categories-banner" }
      },
      [
        _c("div", { staticClass: "web-banner-wrapper hidden-xs hidden-sm" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "banner-item-wrapper" }, [
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(7) + ")"
                    },
                    attrs: { id: "banner-item-1" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("حبوبات")
                      }
                    }
                  },
                  [_vm._m(3)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-9" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(1) + ")"
                    },
                    attrs: { id: "banner-item-2" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("میوه")
                      }
                    }
                  },
                  [_vm._m(4)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(5) + ")"
                    },
                    attrs: { id: "banner-item-3" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("ادویه")
                      }
                    }
                  },
                  [_vm._m(5)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-6" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(2) + ")"
                    },
                    attrs: { id: "banner-item-4" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("صیفی")
                      }
                    }
                  },
                  [_vm._m(6)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(3) + ")"
                    },
                    attrs: { id: "banner-item-5" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("غلات")
                      }
                    }
                  },
                  [_vm._m(7)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-6" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(4) + ")"
                    },
                    attrs: { id: "banner-item-6" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("خشکبار")
                      }
                    }
                  },
                  [_vm._m(8)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-item",
                    style: {
                      backgroundImage: "url(" + _vm.getImageUrl(6) + ")"
                    },
                    attrs: { id: "banner-item-7" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal("دامپروری")
                      }
                    }
                  },
                  [_vm._m(9)]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "pull-right col-xs-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "banner-more-categories",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.openCategoriesModal(false)
                      }
                    }
                  },
                  [_vm._m(10)]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mobile-banner-wrapper hidden-md hidden-lg" },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "mobile-banner" }, [
                _c("div", { staticClass: "banner-item-wrapper" }, [
                  _vm.categoryList.length
                    ? _c(
                        "div",
                        _vm._l(_vm.categoryList, function(item, index) {
                          return _c(
                            "div",
                            {
                              key: "mobile-banner-category-" + index,
                              staticClass: "col-xs-3 pull-right",
                              class: { hidden: index > 6 }
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "banner-item",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.openCategoriesModal(
                                        item.category_name
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("div", {
                                    staticClass: "item-image",
                                    style: {
                                      backgroundImage:
                                        "url(" +
                                        _vm.getImageUrl(index + 1) +
                                        ")"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("p", {
                                    staticClass: "item-text",
                                    domProps: {
                                      textContent: _vm._s(item.category_name)
                                    }
                                  })
                                ]
                              )
                            ]
                          )
                        })
                      )
                    : _c(
                        "div",
                        _vm._l(7, function(item, index) {
                          return _c(
                            "div",
                            {
                              key:
                                "placeholder-mobile-banner-category-" + index,
                              staticClass: "col-xs-3 pull-right",
                              class: { hidden: index > 6 }
                            },
                            [
                              _c("button", { staticClass: "banner-item" }, [
                                _c("div", {
                                  staticClass: "item-image",
                                  style: {
                                    backgroundColor: "#fff"
                                  }
                                }),
                                _vm._v(" "),
                                _c("p", {
                                  staticClass: "item-text",
                                  domProps: { textContent: _vm._s("---") }
                                })
                              ])
                            ]
                          )
                        })
                      ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-3 pull-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "banner-item all-banners",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.openCategoriesModal(false)
                          }
                        }
                      },
                      [
                        _vm._m(11),
                        _vm._v(" "),
                        _c("p", { staticClass: "item-text" }, [_vm._v("همه")])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "section-wrapper container latest-product",
        attrs: { id: "product-section" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12 col-md-9" }, [
            _c("div", { staticClass: "section-title" }, [
              _vm._v("آخرین محصولات ثبت شده")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 products-contents" },
              [
                _vm.lastProducts
                  ? _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "hidden-sm hidden-md hidden-lg" },
                        [
                          _c(
                            "div",
                            { staticClass: "owl-carousel" },
                            _vm._l(_vm.lastProducts, function(
                              product,
                              productIndex
                            ) {
                              return _c(
                                "div",
                                { key: "products-carousel-" + productIndex },
                                [
                                  _c("ProductGridArticle", {
                                    key: "product-item-" + product.id,
                                    attrs: {
                                      productIndex: productIndex,
                                      "last-product": product,
                                      str: _vm.str
                                    }
                                  })
                                ],
                                1
                              )
                            })
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "hidden-xs" },
                        _vm._l(_vm.lastProducts, function(
                          product,
                          productIndex
                        ) {
                          return _c(
                            "div",
                            {
                              key: "products-" + productIndex,
                              staticClass:
                                "col-xs-6 col-sm-4 items-wrapper pull-right col-md-3",
                              class: { "product-hidden": productIndex > 7 }
                            },
                            [
                              _c("ProductGridArticle", {
                                key: "product-item-" + product.id,
                                attrs: {
                                  productIndex: productIndex,
                                  "last-product": product,
                                  str: _vm.str
                                }
                              })
                            ],
                            1
                          )
                        })
                      )
                    ])
                  : _c(
                      "div",
                      { staticClass: "row product-placeholder-wrapper" },
                      _vm._l(9, function(item, index) {
                        return _c(
                          "div",
                          {
                            key: "placeholder-product-item-" + index,
                            staticClass:
                              "col-md-3 col-sm-4 items-wrapper col-xs-6 pull-right",
                            class: {
                              "product-hidden": index > 7,
                              "hidden-xs": index > 1
                            }
                          },
                          [_vm._m(12, true)]
                        )
                      })
                    ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "green-button bg-light-green main-cta-page",
                    attrs: { to: { name: "productList" } }
                  },
                  [
                    _vm._v("مشاهده همه محصولات\n            "),
                    _c("i", { staticClass: "fa fa-angle-left" })
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-md-3 pull-right" }, [
            _vm.isUserLogin && _vm.userType == 0
              ? _c(
                  "div",
                  { staticClass: "title-box" },
                  [
                    _c("div", { staticClass: "section-title" }, [
                      _vm._v("ارتباط با فروشندگان")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n            محصولات فروشندگان را ببینید و بدون واسطه با آن ها ارتباط برقرار\n            کنید\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "green-button",
                        attrs: { to: { name: "productList" } }
                      },
                      [_vm._v("لیست محصولات")]
                    )
                  ],
                  1
                )
              : _vm.isUserLogin && _vm.userType == 1
                ? _c(
                    "div",
                    { staticClass: "title-box" },
                    [
                      _c("div", { staticClass: "section-title" }, [
                        _vm._v("ثبت و معرفی محصول")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n            با ثبت و معرفی محصول خود، بدون واسطه با خریداران عمده ارتباط\n            برقرار کنید\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: { to: { name: "registerProductSeller" } }
                        },
                        [_vm._v("ثبت محصول")]
                      )
                    ],
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "title-box" },
                    [
                      _c("div", { staticClass: "section-title" }, [
                        _vm._v("ثبت نام خریداران")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n            برای استعلام قیمت و خرید محصولات کشاورزی از بهترین فروشندگان عمده\n            هم اکنون ثبت نام کنید\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: { to: { name: "register" } }
                        },
                        [
                          _vm._v("ثبت نام رایگان\n            "),
                          _c("i", { staticClass: "fa fa-angle-left" })
                        ]
                      )
                    ],
                    1
                  )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "section-wrapper container",
        attrs: { id: "requests-section" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xs-12 col-md-9" },
            [
              _c("div", { staticClass: "section-title" }, [
                _vm._v("آخرین درخواست های خرید")
              ]),
              _vm._v(" "),
              _vm.lastRequests
                ? _c("div", { staticClass: "requests-contents" }, [
                    _c(
                      "div",
                      { staticClass: "row hidden-xs" },
                      _vm._l(_vm.lastRequests, function(buyAd, index) {
                        return _c(
                          "div",
                          {
                            key: "buyAd-item-" + index,
                            staticClass: "col-xs-12 col-sm-6 col-md-4"
                          },
                          [
                            _c("LandingPageBuyAds", { attrs: { buyAd: buyAd } })
                          ],
                          1
                        )
                      })
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "owl-carousel hidden-sm hidden-md hidden-lg last-buyAds-carousel"
                      },
                      _vm._l(_vm.lastRequests, function(buyAd, index) {
                        return _c("LandingPageBuyAds", {
                          key: "mobile-buyAd-item-" + index,
                          attrs: { buyAd: buyAd }
                        })
                      })
                    )
                  ])
                : _c(
                    "div",
                    { staticClass: "requests-contents" },
                    _vm._l(6, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: "default-request-" + index,
                          staticClass: "col-xs-12 col-sm-6 col-md-4",
                          class: { "hidden-xs": index > 0 }
                        },
                        [_vm._m(13, true)]
                      )
                    })
                  ),
              _vm._v(" "),
              !_vm.isUserLogin || (_vm.isUserLogin && _vm.userType == 1)
                ? _c(
                    "router-link",
                    {
                      staticClass: "green-button bg-light-green main-cta-page",
                      attrs: { to: { name: "buyAdRequestsSeller" } }
                    },
                    [
                      _vm._v("مشاهده همه درخواست ها\n          "),
                      _c("i", { staticClass: "fa fa-angle-left" })
                    ]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-12 col-md-3 pull-right" }, [
            _vm.isUserLogin && _vm.userType == 0
              ? _c(
                  "div",
                  { staticClass: "title-box" },
                  [
                    _c("div", { staticClass: "section-title" }, [
                      _vm._v("یک درخواست و چندین قیمت")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "\n            از فروشندگان عمده قیمت بگیرید و با یک درخواست چندین قیمت دریافت\n            کنید\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "green-button",
                        attrs: { to: { name: "registerRequestBuyer" } }
                      },
                      [_vm._v("ثبت درخواست خرید")]
                    )
                  ],
                  1
                )
              : _vm.isUserLogin && _vm.userType == 1
                ? _c(
                    "div",
                    { staticClass: "title-box" },
                    [
                      _c("div", { staticClass: "section-title" }, [
                        _vm._v("خریداران عمده")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n            درخواست های خریداران عمده را ببینید و بدون واسطه با آن ها ارتباط\n            برقرار کنید\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: { to: { name: "buyAdRequestsSeller" } }
                        },
                        [_vm._v("لیست درخواست های خرید")]
                      )
                    ],
                    1
                  )
                : _c(
                    "div",
                    { staticClass: "title-box" },
                    [
                      _c("div", { staticClass: "section-title" }, [
                        _vm._v("ثبت نام فروشندگان")
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n            برای فروش بدون واسطه محصولات کشاورزی خود به خریداران مستقیم و\n            صادرکنندگان هم اکنون ثبت نام کنید\n          "
                        )
                      ]),
                      _vm._v(" "),
                      !_vm.isUserLogin
                        ? _c(
                            "router-link",
                            {
                              staticClass: "green-button",
                              attrs: { to: { name: "register" } }
                            },
                            [
                              _vm._v("ثبت نام رایگان "),
                              _c("i", { staticClass: "fa fa-angle-left" })
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "section",
      {
        staticClass: "section-wrapper container",
        attrs: { id: "services-section" }
      },
      [
        _c("div", { staticClass: "row" }, [
          _c("h3", { staticClass: "col-xs-12" }, [
            _vm._v(
              "\n        ارتباط مستقیم با خریداران و فروشندگان عمده محصولات کشاورزی\n      "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "service-boxs-wrapper col-xs-12" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-xs-12 col-md-4 hidden-md hidden-lg" },
                [
                  _c(
                    "article",
                    { staticClass: "service-box main-incobac-logo" },
                    [
                      _c("router-link", { attrs: { to: { name: "help" } } }, [
                        _c("div", { staticClass: "box-image" }, [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(438)
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("باسکول چیست؟")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  باسکول بازار خرید و فروش عمده محصولات کشاورزی\n                  "
                          ),
                          _c("br"),
                          _vm._v(
                            "است که خریداران را به فروشندگان عمده متصل کرده "
                          ),
                          _c("br"),
                          _vm._v(
                            "و\n                  خریداران و فروشندگان بدون واسطه می توانند با یکدیگر ارتباط\n                  برقرار کنند\n                "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-xs-12 col-sm-6 col-md-4 pull-right" },
                [
                  _c(
                    "article",
                    { staticClass: "service-box" },
                    [
                      _c("router-link", { attrs: { to: { name: "help" } } }, [
                        _c("div", { staticClass: "box-image" }, [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(735)
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("خدمات فروشندگان")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  معرفی محصولات به خریداران عمده\n                  "
                          ),
                          _c("br"),
                          _vm._v("دسترسی به درخواست های خرید روزانه "),
                          _c("br"),
                          _vm._v(
                            "گسترش شبکه ی\n                  تجاری و مشتریان "
                          ),
                          _c("br"),
                          _vm._v(
                            "فروش بدون واسطه و مقرون به صرفه\n                  "
                          ),
                          _c("br")
                        ])
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-xs-12 col-sm-6 col-md-4 pull-right hidden-xs hidden-sm"
                },
                [
                  _c(
                    "article",
                    { staticClass: "service-box main-incobac-logo" },
                    [
                      _c("router-link", { attrs: { to: { name: "help" } } }, [
                        _c("div", { staticClass: "box-image" }, [
                          _c("img", {
                            attrs: {
                              src: __webpack_require__(438)
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("باسکول چیست؟")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  باسکول بازار خرید و فروش عمده محصولات کشاورزی\n                  "
                          ),
                          _c("br"),
                          _vm._v(
                            "است که خریداران را به فروشندگان عمده متصل کرده "
                          ),
                          _c("br"),
                          _vm._v(
                            "و\n                  خریداران و فروشندگان بدون واسطه می توانند با یکدیگر ارتباط\n                  برقرار کنند\n                "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-xs-12 col-sm-6 col-md-4 pull-right" },
                [
                  _c(
                    "article",
                    { staticClass: "service-box" },
                    [
                      _c("router-link", { attrs: { to: { name: "help" } } }, [
                        _c("div", { staticClass: "box-image" }, [
                          _c("img", {
                            attrs: { src: __webpack_require__(736) }
                          })
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("خدمات خریداران")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                  استعلام قیمت از فروشندگان و کشاورزان\n                  "
                          ),
                          _c("br"),
                          _vm._v("دسترسی بدون واسطه به فروشندگان متنوع "),
                          _c("br"),
                          _vm._v(
                            "صرفه جویی\n                  در زمان و هزینه خرید محصول "
                          ),
                          _c("br"),
                          _vm._v(
                            "گسترش شبکه تامین کنندگان\n                  "
                          ),
                          _c("br")
                        ])
                      ])
                    ],
                    1
                  )
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _vm.userType != 1
      ? _c(
          "section",
          {
            staticClass: "container",
            attrs: { id: "register-request-section" }
          },
          [
            _c("main-register-request-form", {
              attrs: { "wrapper-bg": "true", "is-user-login": _vm.isUserLogin }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm._m(14),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "container-fluid", attrs: { id: "benefit-links" } },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "links-title col-xs-12" }, [
              _vm._v("لینک های مفید")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "benefit-links-item col-xs-12" }, [
              _c(
                "div",
                { staticClass: "row" },
                [
                  _vm._l(_vm.footerLinks.wholesaleDate, function(item, index) {
                    return _c(
                      "h4",
                      {
                        key: "wholesale-date-item-" + index,
                        staticClass: "col-xs-6 col-sm-4 col-md-2 pull-right"
                      },
                      [
                        _c("router-link", {
                          attrs: { to: _vm.getSubCategoryUrl(item.link) },
                          domProps: {
                            textContent: _vm._s("فروش عمده" + " " + item.name)
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm.categoryList.length
                    ? _c(
                        "div",
                        _vm._l(_vm.categoryList, function(category, index) {
                          return _c(
                            "div",
                            { key: "wholesale-categories-item-" + index },
                            _vm._l(category.subcategories, function(
                              subCategory,
                              subIndex
                            ) {
                              return _c(
                                "h4",
                                {
                                  key:
                                    "wholesale-sub-categories-item-" + subIndex,
                                  staticClass:
                                    "col-xs-6 col-sm-4 col-md-2 pull-right"
                                },
                                [
                                  _c("router-link", {
                                    attrs: {
                                      to: _vm.getSubCategoryUrl(
                                        subCategory.category_name
                                      )
                                    },
                                    domProps: {
                                      textContent: _vm._s(
                                        "فروش عمده" +
                                          " " +
                                          subCategory.category_name
                                      )
                                    }
                                  })
                                ],
                                1
                              )
                            })
                          )
                        })
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.footerLinks.wholesaleRise, function(item, index) {
                    return _c(
                      "h4",
                      {
                        key: "wholesale-rise-item-" + index,
                        staticClass: "col-xs-6 col-sm-4 col-md-2 pull-right"
                      },
                      [
                        _c("router-link", {
                          attrs: { to: _vm.getSubCategoryUrl(item.link) },
                          domProps: {
                            textContent: _vm._s(
                              "فروش عمده برنج" + " " + item.name
                            )
                          }
                        })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-loader" }, [
      _c("img", { attrs: { src: __webpack_require__(385) } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-title" }, [
      _c("span", [_vm._v(" دسته بندی ها ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { name: "fadeIn" } }, [
      _c("h1", { staticClass: "intro-site-title" }, [
        _vm._v(
          "\n              باسکول | بازار خرید و فروش عمده محصولات کشاورزی\n            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("حبوبات")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("میوه")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("ادویه")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("صیفی")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("غلات")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("خشکبار")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_vm._v("دامپروری")]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  مشاهده همه\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "banner-contents" }, [
      _c("p", [_c("i", { staticClass: "fa fa-list" })]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n                  همه دسته ها\n                  "),
        _c("i", { staticClass: "fa fa-arrow-left" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "item-image" }, [
      _c("i", { staticClass: "fa fa-list" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "article",
      { staticClass: "carousel-item default-item col-xs-12" },
      [
        _c("span", {
          staticClass:
            "default-index-product-image placeholder-content col-xs-12 pull-right"
        }),
        _vm._v(" "),
        _c("span", {
          staticClass:
            "content-default-width placeholder-content margin-10 col-xs-10 col-xs-offset-1 pull-right"
        }),
        _vm._v(" "),
        _c("span", {
          staticClass:
            "content-default-width placeholder-content col-xs-8 margin-10 col-xs-offset-2 pull-right"
        }),
        _vm._v(" "),
        _c("span", {
          staticClass:
            "content-default-width placeholder-content margin-10 col-xs-10 col-xs-offset-1 pull-right"
        }),
        _vm._v(" "),
        _c("span", { staticClass: "margin-10" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("article", { staticClass: "buyAds-placeholder" }, [
      _c("span", {
        staticClass:
          "content-default-width placeholder-content padding-10-0 margin-10 col-xs-6 col-xs-offset-3 pull-right"
      }),
      _vm._v(" "),
      _c("span", {
        staticClass:
          "content-default-width placeholder-content padding-10-0 margin-10 col-xs-10 col-xs-offset-1"
      }),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c("span", {
          staticClass:
            "content-default-width placeholder-content padding-10-0 margin-10 col-xs-6 col-xs-offset-3"
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "container", attrs: { id: "main-contents-section" } },
      [
        _c("div", { staticClass: "col-xs-12" }, [
          _c("div", { staticClass: "row" }, [
            _c("article", { staticClass: "main-contents-wrapper" }, [
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("عمده فروشی مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            عمده فروشی مواد غذایی به عنوان یک تجارت پرسود در تمام جهان به حساب\n            می آید که به صورت کلی دو حالت دارد، در حالت اول خود تولید کننده\n            اقدام به فروش محصولات به مصرف کننده اصلی می کند و در حالت دوم، یک\n            سری از افراد به عنوان واسطه بین تولید کننده اصلی و مصرف کننده\n            نهایی عمل می کنند که اصطلاحا به این افراد بنکدار یا مراکز پخش عمده\n            گفته می شود. خرید از تولید کننده اصلی باعث می شود شما در هزینه\n            خودتان صرفه جویی کنید و از پرداخت هزینه های جانبی به واسطه های\n            متعدد برای رسیدن به کالا خودداری کنید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در حال حاضر افراد زیادی در زمینه عمده فروشی مواد غذایی فعالیت\n            دارند و انواع مواد غذایی را با قیمت های مقرون به صرفه در اختیار\n            شما قرار می دهند، سایت باسکول به عنوان یک کانال دو طرفه برای\n            برقراری ارتباط بین عمده فروشان و خریداران عمل می کند. بنابراین اگر\n            شما عمده فروش مواد غذایی هستید می توانید با ثبت نام در سایت\n            باسکول، هزاران خریدار از سراسر ایران را در کمترین زمان ممکن جذب\n            کنید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("خرید عمده مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            خرید عمده مواد غذایی به صورت آنلاین به یک روش راحت و کاربردی در\n            سال های اخیر تبدیل شده است و طرفداران بسیار زیادی پیدا کرده است.\n            خرید عمده هر محصولی از فروشنده اصلی باعث کم کردن هزینه های جانبی\n            شما می شود که این موضوع در خصوص خرید عمده مواد غذایی نیز صدق می\n            کند و خرید عمده مواد غذایی از کارخانه، بهترین انتخاب برای شما می\n            باشد تا با کمک آن بهترین محصول را با قیمت مناسب خریداری کنید. در\n            سایت باسکول این امکان برای شما فراهم شده است که فروشندگان مواد\n            غذایی را پیدا کرده، محصولات آنها را به نسبت قیمت و کیفیت مقایسه\n            کنید و در نهایت بهترین فروشنده را برای خرید عمده مواد غذایی را\n            پیدا کرده و با او معامله کنید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            همچنین شما می توانید بعد از ثبت نام در سایت یا اپلیکیشن، یک\n            درخواست خرید عمده مواد غذایی با جزئیاتی مانند میزان و نوع محصول\n            مورد نظر خودتان، ثبت کنید و منتظر بمانید تا فروشنده مورد نظر با\n            شما ارتباط برقرار کند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("قیمت عمده مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            همانطور که می دانید مواد غذایی شامل اقلام بسیار زیاد و متنوعی است\n            که هر یک از آنها دارای قیمت های متفاوتی می باشند. به صورت کلی قیمت\n            عمده مواد غذایی به عوامل مختلفی مانند نحوه ارائه، کیفیت، بسته\n            بندی، نوع مواد غذایی و غیره بستگی دارد اما این موضوع در خصوص همه\n            اقلام مواد غذایی صدق می کند که اگر شما محصول مورد نظر خودتان را از\n            تولید کننده اصلی یعنی شرکت های تولیدی، خریداری کنید، واسطه ها را\n            از بین خواهید برد و قیمت نهایی محصول بسیار پایین تر از حد انتظار\n            خواهد بود. یکی از مهم ترین ویژگی های وب سایت باسکول این است که\n            خریدار می تواند با هزاران فروشنده مواد غذایی از سراسر ایران ارتباط\n            برقرار کند و از آنها استعلام قیمت بگیرید و در نتیجه به نسبت کیفیت\n            و برند مواد غذایی تصمیم به خرید محصول با قیمت مورد نظر خودش بگیرد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش عمده مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            بازار خرید و فروش مواد غذایی، یکی از پر رونق ترین و فعال ترین\n            بازارهای حال حاضر در جهان و ایران است و به علت حضور در چرخه تامین\n            غذا فعالیت آن دائمی است و در تمام طول سال مشتریان خاص خودش را\n            دارد. برای فروش عمده مواد غذایی می توانید وارد سایت یا اپلیکیشن\n            باسکول شوید و محصولات خودتان را بارگذاری کنید تا خریداران عمده\n            بتوانند آنها را مشاهده کنند و در صورت تطابق با نیازشان با شما تماس\n            برقرار کنند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            بنابراین اگر در زمینه فروش عمده مواد غذایی فعالیت دارید، انتخاب\n            سایت باسکول به عنوان بستر فروش محصولات خود به صورت آنلاین، می\n            تواند بهترین گزینه و انتخاب برای شما باشد و شما را با خریداران\n            معتبر آشنا میکند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("عمده فروش مواد غذایی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            یکی از مشکلاتی که عمده فروش مواد غذایی با آن سروکار دارد، واسطه\n            های بسیار زیاد است، در واقع واسطه ها، مواد غذایی را با قیمت خیلی\n            پایین خریداری می کند و با قیمتی بالاتر در اختیار خریدار بعدی قرار\n            می دهند، که خوشبختانه در سال های اخیر با توجه به اینکه تعداد زیادی\n            عمده فروش مواد غذایی با پلتفرم های آنلاین آشنا شدند و به دنبال\n            فروش محصول خود به خریدار اصلی با قیمت مناسب و واقعی هستند، این\n            مشکلات کمتر شده است. سایت باسکول در همین راستا میتواند شما را با\n            خریداران متعددی آشنا کند و روند فروش مواد غذایی را بهبود ببخشد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("سایت عمده فروشان")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            زمانی که حرف از سایت عمده فروشان زده می شود، معمولا یک سوال اساسی\n            در ذهن افراد در خصوص میزان امنیت معاملات شکل می گیرد، سایت باسکول\n            با استراتژِی های متعدد سعی در این دارد که شما یک معامله کاملا ایمن\n            با خریداران و فروشندگان معتبر داشته باشد و در همین راستا سیستم های\n            اعتبار سنجی و احراز هویت را به کار برده است تا هر دو طرف معامله با\n            امنیت بیشتری با یکدیگر آشنا شوند. باسکول به عنوان سایت عمده فروشان\n            شناخته شده است و روزانه هزاران فروشنده عمده در این سایت به فعالیت\n            میپردازند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش عمده محصولات کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            فروش عمده محصولات کشاورزی به صورت مستقیم و بدون واسطه باعث می شود\n            هر دو طرف معامله، یعنی فروشنده و خریدار سود بیشتری کسب کنند، در\n            واقع در این حالت نیازی به پرداخت هزینه به واسطه های متعدد نیست و\n            شما میتوانید محصول کشاورزی را با قیمت واقعی خریداری کنید که این\n            موضوع در خصوص اقلام کشاورزی نیز صدق می کند و فروشنده یا کشاورز می\n            تواند سود بیشتری از فروش محصولات خودش به دست آورد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            سایت باسکول این امکان را در اختیار شما قرار داده است که بعد از ثبت\n            نام و قرار دادن کالا در سایت، محصول خودتان را با قیمت واقعی و بدون\n            دخالت هیچ واسطه ای به فروش برسانید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("قیمت عمده محصولات کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            محصولات کشاورزی به نسبت کیفیت، نوسانات ارز، بسته بندی، نوع محصول و\n            نحوه تحویل به صورت فله و بسته بندی، دارای قیمت های بسیار مختلفی می\n            باشند و این امکان وجود ندارد که قیمت محصولات کشاورزی به صورت ثابت\n            در یک بازه زمانی بماند. بنابراین بهترین راه برای به دست آوردن قیمت\n            عمده محصولات کشاورزی برقراری ارتباط با فروشندگان عمده است. در حال\n            حاضر هزاران فروشنده محصولات غذایی در سایت باسکول فعالیت دارند که\n            شما می توانید برای اطلاع از قیمت عمده انواع محصولات کشاورزی به\n            صورت دقیق و به روز، با آنها به صورت مستقیم ارتباط برقرار کرده و از\n            آنها استعلام قیمت بگیرید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("بازار کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            همانطور که میدانید بخش کشاورزی یکی مهمترین بخش های تامین نیازهای\n            افراد است که شامل بسیاری از مواد غذایی می باشد. در چند سال اخیر\n            توجه بسیار زیادی به بازار کشاورزی آنلاین شده است تا جایی که عمده\n            خرید و فروش های محصولات کشاورزی به صورت آنلاین صورت می گیرد. در\n            حال حاضر پلتفرم های بسیار زیادی در زمینه بازار کشاورزی فعالیت\n            دارند و باعث رونق بیشتر بازار خرید و فروش محصولات کشاورزی در جهان\n            شده اند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            باسکول به عنوان یک پلتفرم که در زمینه بازار کشاورزی آنلاین فعالیت\n            دارد، امکان خرید و فروش بدون واسطه و مستقیم را برای شما فراهم می\n            کند و شما با کمک آن میتوانید سود بیشتری از خرید و فروش محصولات\n            کشاورزی مورد نظر خودتان به دست بیاورید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("بازار کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            باسکول به عنوان یک پلتفرم آنلاین، یک فضای دو طرفه ایجاد کرده و سعی\n            دارد با حذف واسطه ها در وقت و هزینه شما تا میزان زیادی صرفه جویی\n            کند، عدم دسترسی به فروشندگان و خریداران عمده محصولات کشاورزی باعث\n            شده است که بازار خرید آن ها رو به رکود برود و زمینه فعالیت واسطه\n            ها را تا حد زیادی گسترش داده است. هدف باسکول این است که یک ارتباط\n            مستقیم و بدون واسطه را بین خریدار عمده با فروشنده اصلی ایجاد کند\n            تا هر دو طرف، محصول را با قیمت اصلی معامله کنند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در حال حاضر باسکول به عنوان بازارگاه کشاورزی آنلاین، هزاران کشاورز\n            یا فروشنده عمده محصولات کشاورزی را در خود جای داده است و شما\n            میتوانید به راحتی و با چند کلیک با آنها ارتباط برقرار کنید، در\n            صورتی که خود شما فروشنده هستید پیشنهاد می کنیم در سایت باسکول ثبت\n            نام کنید و از خدمات متنوع باسکول همچون اطلاع از آخرین درخواست های\n            خرید و ارتباط با هزاران خریدار از سراسر کشور برخوردار شوید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش مستقیم محصولات کشاورزی")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در سال های گذشته فروش مستقیم محصولات کشاورزی برای همه افراد وجود\n            نداشت و واسطه گری افراد باعث می شد که کشاورز محصول خود را با هزینه\n            کمتر به فروش برساند و از طرف دیگر خریدار قیمت بیشتری برای آن\n            پرداخت کند. در حال حاضر سایت ها و پلتفرم هایی وجود دارند که به شما\n            امکان فروش مستقیم محصولات کشاورزی را می دهند. سایت باسکول با هدف\n            ارتباط دادن تولید کننده اصلی محصولات کشاورزی با خریدار، سعی در\n            کاهش هزینه های هر دو طرف دارد و باعث می شود در زمان و هزینه خریدار\n            و فروشنده صرفه جویی شود.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در حال حاضر هزاران نفر از افرادی که به دنبال فروش مستقیم محصولات\n            کشاورزی هستند در سایت باسکول حضور دارند و شما میتوانید محصول مورد\n            نظر خودتان را با کیفیت بسیار عالی و قیمت مطلوب از آنها خریداری\n            کنید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("خرید و فروش عمده")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            خرید و فروش عمده انواع محصولات به دو صورت حضوری و آنلاین صورت\n            میگیرد، که در حال حاضر با توجه به شرایط و مزایای معامله آنلاین،\n            بیشتر افراد تمایل به خرید و فروش عمده به صورت آنلاین دارند. شما در\n            هر دو صورت محصول خودتان را از بنکدار یا فروشنده عمده، تحویل می\n            گیرید با این تفاوت که خرید آنلاین را با چند کلیک ساده انجام می\n            دهید و این امکان را دارید که قیمت ها و کیفیت محصولات را مقایسه\n            کنید و بهترین انتخاب ممکن را بدون صرف هزینه و هدر رفتن زمان، داشته\n            باشید. این موضوع در مورد فروش عمده نیز صدق می کند و بنکدار می\n            تواند محصولات مختلفی را در سایت قرار داده و محصول خودش را به افراد\n            بیشتری معرفی و در نتیجه با قیمت مناسب به فروش برساند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش عمده میوه و تره بار")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            با توجه به شرایطی همچون عدم دسترسی به بازار های جدید در سطح کشور و\n            هزینه های بالای تبلیغات آفلاین، امروزه تلاش کسب و کارهای مختلف\n            برای پیشبرد انجام معاملات به صورت آنلاین است که فروش عمده میوه و\n            تره بار نیز از این قضیه مستثنی نیست. باسکول به عنوان یک پلتفرم\n            برای خریداران و فروشندگان عمده فعالیت دارد و اجتماع بزرگی از\n            صادرکنندگان میوه و تره بار به سراسر ایران و خارج از کشور را در خود\n            جای داده است، اگر شما هم در زمینه فروش عمده میوه و تره بار فعالیت\n            دارید، می توانید محصولات خودتان را با بهترین قیمت به فروش برسانید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            از طرف دیگر خریداران میتوانند با صدها سالن سورت و بسته بندی میوه و\n            تره بار در سراسر ایران به صورت مستقیم و بدون واسطه ارتباط برقرار\n            کرده و محصول مورد نظر خود را از نظر کیفیت و قیمت بررسی کنند و سپس\n            اقدام به خرید نمایند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروش عمده میوه و تره بار")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            در حال حاضر عمده فروشی آنلاین به یکی از راه های مقرون به صرفه برای\n            فروش محصولات به حساب می آید. چند سال پیش کمتر کسی می توانست به\n            عمده فروشی آنلاین اعتماد کند و معاملات خودش را به صورت آنلاین\n            انجام دهد، اما با گذشت زمان و فعالیت کسب و کارهای مختلف در زمینه ی\n            عمده فروشی آنلاین، کم کم افراد به دلیل ویژگی ها و مزیت هایی که\n            عمده فروشی آنلاین به نسبت معاملات حضوری داشت، استفاده از این خدمات\n            افزایش یافت تا جایی که در حال حاضر بخشی از فروش عمده محصولات مختلف\n            مانند مواد غذایی و کشاورزی به صورت آنلاین صورت می گیرد.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            سایت باسکول در چند سال اخیر توانسته است یک اجتماع از فروشندگان و\n            خریداران معتبر از سراسر ایران و جهان در خود تشکیل دهد و باعث رونق\n            بیشتر عمده فروشی آنلاین شود. بنابراین اگر شما هم در زمینه خرید و\n            فروش عمده فعالیت دارید، پیشنهاد میکنم در سایت باسکول ثبت نام کنید\n            و از مزایای آن نهایت استفاده را ببرید.\n          "
                )
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "section-title" }, [
                _vm._v("فروشگاه عمده")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            اگر به دنبال کم کردن هزینه های اضافی و جانبی هنگام خرید عمده\n            محصولات مختلف هستید، پیشنهاد میکنم از فروشگاه های عمده آنلاین\n            مانند باسکول استفاده کنید و امکان دخالت واسطه ها در معاملات را به\n            صفر برسانید. فروشگاه عمده باید دارای یک سری ویژگی ها باشد تا\n            اعتماد خریدار و فروشنده را جلب کند و زمینه یک معامله ایمن را برای\n            آنها فراهم کند. سایت باسکول امکانات متعددی مانند : مقایسه قیمت و\n            کیفیت، اعتبارسنجی فروشنده و خریدار، احراز هویت و غیره را در اختیار\n            شما قرار داده است تا از هر گونه سوء استفاده احتمالی جلوگیری کند.\n          "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            بنابراین اگر به دنبال یک فروشگاه عمده معتبر برای فروش محصولات خود\n            و یا خرید محصولات از فروشنده اصلی هستید، سایت باسکول بهترین گزینه\n            برای شما می باشد.\n          "
                )
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c5ebe4ce", module.exports)
  }
}

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

module.exports = "/images/seller.jpg?eea58c1809a3dc12b3b1312e6308f748";

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

module.exports = "/images/buyer.jpg?eb6d74ea165894067207c805adbfb329";

/***/ }),

/***/ 971:
/***/ (function(module, exports) {

/*!
 * device-uuid.js v1.0.4 (https://github.com/biggora/device-uuid/)
 * Copyright 2016-2017 Alexey Gordeyev
 * Licensed under MIT (https://github.com/biggora/device-uuid/blob/master/LICENSE)
 */
/*global
 screen, window, navigator
 */
(function (exports) {
    'use strict';

    var BOTS = [
        '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
        'googlebot',
        'baiduspider',
        'gurujibot',
        'yandexbot',
        'slurp',
        'msnbot',
        'bingbot',
        'facebookexternalhit',
        'linkedinbot',
        'twitterbot',
        'slackbot',
        'telegrambot',
        'applebot',
        'pingdom',
        'tumblr ',
        'Embedly',
        'spbot'
    ];
    var IS_BOT_REGEXP = new RegExp('^.*(' + BOTS.join('|') + ').*$');

    var DeviceUUID = function (options) {
        options = options ? options : {};
        var defOptions = {
            version: false,
            language: false,
            platform: true,
            os: true,
            pixelDepth: true,
            colorDepth: true,
            resolution: false,
            isAuthoritative: true,
            silkAccelerated: true,
            isKindleFire: true,
            isDesktop: true,
            isMobile: true,
            isTablet: true,
            isWindows: true,
            isLinux: true,
            isLinux64: true,
            isChromeOS: true,
            isMac: true,
            isiPad: true,
            isiPhone: true,
            isiPod: true,
            isAndroid: true,
            isSamsung: true,
            isSmartTV: true,
            isRaspberry: true,
            isBlackberry: true,
            isTouchScreen: true,
            isOpera: false,
            isIE: false,
            isEdge: false,
            isIECompatibilityMode: false,
            isSafari: false,
            isFirefox: false,
            isWebkit: false,
            isChrome: false,
            isKonqueror: false,
            isOmniWeb: false,
            isSeaMonkey: false,
            isFlock: false,
            isAmaya: false,
            isPhantomJS: false,
            isEpiphany: false,
            source: false,
            cpuCores: false
        };
        for (var key in options) {
            if (options.hasOwnProperty(key) && typeof defOptions[key] !== 'undefined') {
                defOptions[key] = options[key];
            }
        }
        this.options = defOptions;
        this.version = '1.0.0';
        this._Versions = {
            Edge: /Edge\/([\d\w\.\-]+)/i,
            Firefox: /firefox\/([\d\w\.\-]+)/i,
            IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
            Chrome: /chrome\/([\d\w\.\-]+)/i,
            Chromium: /(?:chromium|crios)\/([\d\w\.\-]+)/i,
            Safari: /version\/([\d\w\.\-]+)/i,
            Opera: /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,
            Ps3: /([\d\w\.\-]+)\)\s*$/i,
            Psp: /([\d\w\.\-]+)\)?\s*$/i,
            Amaya: /amaya\/([\d\w\.\-]+)/i,
            SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
            OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
            Flock: /flock\/([\d\w\.\-]+)/i,
            Epiphany: /epiphany\/([\d\w\.\-]+)/i,
            WinJs: /msapphost\/([\d\w\.\-]+)/i,
            PhantomJS: /phantomjs\/([\d\w\.\-]+)/i,
            UC: /UCBrowser\/([\d\w\.]+)/i
        };
        this._Browsers = {
            Edge: /edge/i,
            Amaya: /amaya/i,
            Konqueror: /konqueror/i,
            Epiphany: /epiphany/i,
            SeaMonkey: /seamonkey/i,
            Flock: /flock/i,
            OmniWeb: /omniweb/i,
            Chromium: /chromium|crios/i,
            Chrome: /chrome/i,
            Safari: /safari/i,
            IE: /msie|trident/i,
            Opera: /opera|OPR/i,
            PS3: /playstation 3/i,
            PSP: /playstation portable/i,
            Firefox: /firefox/i,
            WinJs: /msapphost/i,
            PhantomJS: /phantomjs/i,
            UC: /UCBrowser/i
        };
        this._OS = {
            Windows10: /windows nt 10\.0/i,
            Windows81: /windows nt 6\.3/i,
            Windows8: /windows nt 6\.2/i,
            Windows7: /windows nt 6\.1/i,
            UnknownWindows: /windows nt 6\.\d+/i,
            WindowsVista: /windows nt 6\.0/i,
            Windows2003: /windows nt 5\.2/i,
            WindowsXP: /windows nt 5\.1/i,
            Windows2000: /windows nt 5\.0/i,
            WindowsPhone8: /windows phone 8\./,
            OSXCheetah: /os x 10[._]0/i,
            OSXPuma: /os x 10[._]1(\D|$)/i,
            OSXJaguar: /os x 10[._]2/i,
            OSXPanther: /os x 10[._]3/i,
            OSXTiger: /os x 10[._]4/i,
            OSXLeopard: /os x 10[._]5/i,
            OSXSnowLeopard: /os x 10[._]6/i,
            OSXLion: /os x 10[._]7/i,
            OSXMountainLion: /os x 10[._]8/i,
            OSXMavericks: /os x 10[._]9/i,
            OSXYosemite: /os x 10[._]10/i,
            OSXElCapitan: /os x 10[._]11/i,
            OSXSierra: /os x 10[._]12/i,
            Mac: /os x/i,
            Linux: /linux/i,
            Linux64: /linux x86_64/i,
            ChromeOS: /cros/i,
            Wii: /wii/i,
            PS3: /playstation 3/i,
            PSP: /playstation portable/i,
            iPad: /\(iPad.*os (\d+)[._](\d+)/i,
            iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
            Bada: /Bada\/(\d+)\.(\d+)/i,
            Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i
        };
        this._Platform = {
            Windows: /windows nt/i,
            WindowsPhone: /windows phone/i,
            Mac: /macintosh/i,
            Linux: /linux/i,
            Wii: /wii/i,
            Playstation: /playstation/i,
            iPad: /ipad/i,
            iPod: /ipod/i,
            iPhone: /iphone/i,
            Android: /android/i,
            Blackberry: /blackberry/i,
            Samsung: /samsung/i,
            Curl: /curl/i
        };

        this.DefaultAgent = {
            isAuthoritative: true,
            isMobile: false,
            isTablet: false,
            isiPad: false,
            isiPod: false,
            isiPhone: false,
            isAndroid: false,
            isBlackberry: false,
            isOpera: false,
            isIE: false,
            isEdge: false,
            isIECompatibilityMode: false,
            isSafari: false,
            isFirefox: false,
            isWebkit: false,
            isChrome: false,
            isKonqueror: false,
            isOmniWeb: false,
            isSeaMonkey: false,
            isFlock: false,
            isAmaya: false,
            isPhantomJS: false,
            isEpiphany: false,
            isDesktop: false,
            isWindows: false,
            isLinux: false,
            isLinux64: false,
            isMac: false,
            isChromeOS: false,
            isBada: false,
            isSamsung: false,
            isRaspberry: false,
            isBot: false,
            isCurl: false,
            isAndroidTablet: false,
            isWinJs: false,
            isKindleFire: false,
            isSilk: false,
            isCaptive: false,
            isSmartTV: false,
            isUC: false,
            isTouchScreen: false,
            silkAccelerated: false,
            colorDepth: -1,
            pixelDepth: -1,
            resolution: [],
            cpuCores: -1,
            language: 'unknown',
            browser: 'unknown',
            version: 'unknown',
            os: 'unknown',
            platform: 'unknown',
            geoIp: {},
            source: '',
            hashInt: function (string) {
                var hash = 0, i, chr, len;
                if (string.length === 0) { return hash; }
                for (i = 0, len = string.length; i < len; i++) {
                    chr = string.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0;
                }
                return hash;
            },
            hashMD5: function (string) {
                function rotateLeft(lValue, iShiftBits) {
                    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
                }

                function addUnsigned(lX, lY) {
                    var lX4, lY4, lX8, lY8, lResult;
                    lX8 = (lX & 0x80000000);
                    lY8 = (lY & 0x80000000);
                    lX4 = (lX & 0x40000000);
                    lY4 = (lY & 0x40000000);
                    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

                    if (lX4 & lY4) {
                        return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                    }
                    if (lX4 | lY4) {
                        if (lResult & 0x40000000) {
                            return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                        } else {
                            return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                        }
                    } else {
                        return (lResult ^ lX8 ^ lY8);
                    }
                }

                function gF(x, y, z) {
                    return (x & y) | ((~x) & z);
                }

                function gG(x, y, z) {
                    return (x & z) | (y & (~z));
                }

                function gH(x, y, z) {
                    return (x ^ y ^ z);
                }

                function gI(x, y, z) {
                    return (y ^ (x | (~z)));
                }

                function gFF(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gF(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function gGG(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gG(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function gHH(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gH(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function gII(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gI(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function convertToWordArray(string) {
                    var lWordCount;
                    var lMessageLength = string.length;
                    var lNumberOfWordsTemp1 = lMessageLength + 8;
                    var lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64;
                    var lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
                    var lWordArray = new Array(lNumberOfWords - 1);
                    var lBytePosition = 0;
                    var lByteCount = 0;

                    while (lByteCount < lMessageLength) {
                        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                        lBytePosition = (lByteCount % 4) * 8;
                        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
                        lByteCount++;
                    }

                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
                    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                    return lWordArray;
                }

                function wordToHex(lValue) {
                    var wordToHexValue = '', wordToHexValueTemp = '', lByte, lCount;
                    for (lCount = 0; lCount <= 3; lCount++) {
                        lByte = (lValue >>> (lCount * 8)) & 255;
                        wordToHexValueTemp = '0' + lByte.toString(16);
                        wordToHexValue = wordToHexValue + wordToHexValueTemp.substr(wordToHexValueTemp.length - 2, 2);
                    }
                    return wordToHexValue;
                }

                function utf8Encode(string) {
                    string = string.replace(/\r\n/g, '\n');
                    var utftext = '';

                    for (var n = 0; n < string.length; n++) {
                        var c = string.charCodeAt(n);
                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        } else if ((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        } else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }
                    }
                    return utftext;
                }

                var x = [];
                var k, AA, BB, CC, DD, a, b, c, d;
                var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
                var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
                var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
                var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
                string = utf8Encode(string);
                x = convertToWordArray(string);
                a = 0x67452301;
                b = 0xEFCDAB89;
                c = 0x98BADCFE;
                d = 0x10325476;

                for (k = 0; k < x.length; k += 16) {
                    AA = a;
                    BB = b;
                    CC = c;
                    DD = d;
                    a = gFF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
                    d = gFF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                    c = gFF(c, d, a, b, x[k + 2], S13, 0x242070DB);
                    b = gFF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                    a = gFF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
                    d = gFF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                    c = gFF(c, d, a, b, x[k + 6], S13, 0xA8304613);
                    b = gFF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                    a = gFF(a, b, c, d, x[k + 8], S11, 0x698098D8);
                    d = gFF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                    c = gFF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
                    b = gFF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                    a = gFF(a, b, c, d, x[k + 12], S11, 0x6B901122);
                    d = gFF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                    c = gFF(c, d, a, b, x[k + 14], S13, 0xA679438E);
                    b = gFF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                    a = gGG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
                    d = gGG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                    c = gGG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
                    b = gGG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                    a = gGG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
                    d = gGG(d, a, b, c, x[k + 10], S22, 0x2441453);
                    c = gGG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
                    b = gGG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                    a = gGG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
                    d = gGG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                    c = gGG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
                    b = gGG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                    a = gGG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
                    d = gGG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                    c = gGG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
                    b = gGG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                    a = gHH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
                    d = gHH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                    c = gHH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
                    b = gHH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                    a = gHH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
                    d = gHH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                    c = gHH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
                    b = gHH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                    a = gHH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
                    d = gHH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                    c = gHH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
                    b = gHH(b, c, d, a, x[k + 6], S34, 0x4881D05);
                    a = gHH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
                    d = gHH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                    c = gHH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
                    b = gHH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                    a = gII(a, b, c, d, x[k + 0], S41, 0xF4292244);
                    d = gII(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                    c = gII(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
                    b = gII(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                    a = gII(a, b, c, d, x[k + 12], S41, 0x655B59C3);
                    d = gII(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                    c = gII(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
                    b = gII(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                    a = gII(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
                    d = gII(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                    c = gII(c, d, a, b, x[k + 6], S43, 0xA3014314);
                    b = gII(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                    a = gII(a, b, c, d, x[k + 4], S41, 0xF7537E82);
                    d = gII(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                    c = gII(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
                    b = gII(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                    a = addUnsigned(a, AA);
                    b = addUnsigned(b, BB);
                    c = addUnsigned(c, CC);
                    d = addUnsigned(d, DD);
                }
                var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
                return temp.toLowerCase();
            }
        };

        this.Agent = {};

        this.getBrowser = function (string) {
            switch (true) {
                case this._Browsers.Edge.test(string):
                    this.Agent.isEdge = true;
                    return 'Edge';
                case this._Browsers.PhantomJS.test(string):
                    this.Agent.isPhantomJS = true;
                    return 'PhantomJS';
                case this._Browsers.Konqueror.test(string):
                    this.Agent.isKonqueror = true;
                    return 'Konqueror';
                case this._Browsers.Amaya.test(string):
                    this.Agent.isAmaya = true;
                    return 'Amaya';
                case this._Browsers.Epiphany.test(string):
                    this.Agent.isEpiphany = true;
                    return 'Epiphany';
                case this._Browsers.SeaMonkey.test(string):
                    this.Agent.isSeaMonkey = true;
                    return 'SeaMonkey';
                case this._Browsers.Flock.test(string):
                    this.Agent.isFlock = true;
                    return 'Flock';
                case this._Browsers.OmniWeb.test(string):
                    this.Agent.isOmniWeb = true;
                    return 'OmniWeb';
                case this._Browsers.Opera.test(string):
                    this.Agent.isOpera = true;
                    return 'Opera';
                case this._Browsers.Chromium.test(string):
                    this.Agent.isChrome = true;
                    return 'Chromium';
                case this._Browsers.Chrome.test(string):
                    this.Agent.isChrome = true;
                    return 'Chrome';
                case this._Browsers.Safari.test(string):
                    this.Agent.isSafari = true;
                    return 'Safari';
                case this._Browsers.WinJs.test(string):
                    this.Agent.isWinJs = true;
                    return 'WinJs';
                case this._Browsers.IE.test(string):
                    this.Agent.isIE = true;
                    return 'IE';
                case this._Browsers.PS3.test(string):
                    return 'ps3';
                case this._Browsers.PSP.test(string):
                    return 'psp';
                case this._Browsers.Firefox.test(string):
                    this.Agent.isFirefox = true;
                    return 'Firefox';
                case this._Browsers.UC.test(string):
                    this.Agent.isUC = true;
                    return 'UCBrowser';
                default:
                    // If the UA does not start with Mozilla guess the user agent.
                    if (string.indexOf('Mozilla') !== 0 && /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(string)) {
                        this.Agent.isAuthoritative = false;
                        return RegExp.$1;
                    }
                    return 'unknown';
            }
        };

        this.getBrowserVersion = function (string) {
            var regex;
            switch (this.Agent.browser) {
                case 'Edge':
                    if (this._Versions.Edge.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'PhantomJS':
                    if (this._Versions.PhantomJS.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chrome':
                    if (this._Versions.Chrome.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chromium':
                    if (this._Versions.Chromium.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Safari':
                    if (this._Versions.Safari.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Opera':
                    if (this._Versions.Opera.test(string)) {
                        return RegExp.$1 ? RegExp.$1 : RegExp.$2;
                    }
                    break;
                case 'Firefox':
                    if (this._Versions.Firefox.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'WinJs':
                    if (this._Versions.WinJs.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'IE':
                    if (this._Versions.IE.test(string)) {
                        return RegExp.$2 ? RegExp.$2 : RegExp.$1;
                    }
                    break;
                case 'ps3':
                    if (this._Versions.Ps3.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'psp':
                    if (this._Versions.Psp.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Amaya':
                    if (this._Versions.Amaya.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Epiphany':
                    if (this._Versions.Epiphany.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'SeaMonkey':
                    if (this._Versions.SeaMonkey.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Flock':
                    if (this._Versions.Flock.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'OmniWeb':
                    if (this._Versions.OmniWeb.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'UCBrowser':
                    if (this._Versions.UC.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                default:
                    if (this.Agent.browser !== 'unknown') {
                        regex = new RegExp(this.Agent.browser + '[\\/ ]([\\d\\w\\.\\-]+)', 'i');
                        if (regex.test(string)) {
                            return RegExp.$1;
                        }
                    }
            }
        };

        this.getOS = function (string) {
            switch (true) {
                case this._OS.WindowsVista.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows Vista';
                case this._OS.Windows7.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 7';
                case this._OS.Windows8.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 8';
                case this._OS.Windows81.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 8.1';
                case this._OS.Windows10.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 10.0';
                case this._OS.Windows2003.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 2003';
                case this._OS.WindowsXP.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows XP';
                case this._OS.Windows2000.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 2000';
                case this._OS.WindowsPhone8.test(string):
                    return 'Windows Phone 8';
                case this._OS.Linux64.test(string):
                    this.Agent.isLinux = true;
                    this.Agent.isLinux64 = true;
                    return 'Linux 64';
                case this._OS.Linux.test(string):
                    this.Agent.isLinux = true;
                    return 'Linux';
                case this._OS.ChromeOS.test(string):
                    this.Agent.isChromeOS = true;
                    return 'Chrome OS';
                case this._OS.Wii.test(string):
                    return 'Wii';
                case this._OS.PS3.test(string):
                    return 'Playstation';
                case this._OS.PSP.test(string):
                    return 'Playstation';
                case this._OS.OSXCheetah.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Cheetah';
                case this._OS.OSXPuma.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Puma';
                case this._OS.OSXJaguar.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Jaguar';
                case this._OS.OSXPanther.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Panther';
                case this._OS.OSXTiger.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Tiger';
                case this._OS.OSXLeopard.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Leopard';
                case this._OS.OSXSnowLeopard.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Snow Leopard';
                case this._OS.OSXLion.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Lion';
                case this._OS.OSXMountainLion.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Mountain Lion';
                case this._OS.OSXMavericks.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Mavericks';
                case this._OS.OSXYosemite.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Yosemite';
                case this._OS.OSXElCapitan.test(string):
                    this.Agent.isMac = true;
                    return 'OS X El Capitan';
                case this._OS.OSXSierra.test(string):
                    this.Agent.isMac = true;
                    return 'macOS Sierra';
                case this._OS.Mac.test(string):
                    this.Agent.isMac = true;
                    return 'OS X';
                case this._OS.iPad.test(string):
                    this.Agent.isiPad = true;
                    return string.match(this._OS.iPad)[0].replace('_', '.');
                case this._OS.iPhone.test(string):
                    this.Agent.isiPhone = true;
                    return string.match(this._OS.iPhone)[0].replace('_', '.');
                case this._OS.Bada.test(string):
                    this.Agent.isBada = true;
                    return 'Bada';
                case this._OS.Curl.test(string):
                    this.Agent.isCurl = true;
                    return 'Curl';
                default:
                    return 'unknown';
            }
        };

        this.getPlatform = function (string) {
            switch (true) {
                case this._Platform.Windows.test(string):
                    return 'Microsoft Windows';
                case this._Platform.WindowsPhone.test(string):
                    this.Agent.isWindowsPhone = true;
                    return 'Microsoft Windows Phone';
                case this._Platform.Mac.test(string):
                    return 'Apple Mac';
                case this._Platform.Curl.test(string):
                    return 'Curl';
                case this._Platform.Android.test(string):
                    this.Agent.isAndroid = true;
                    return 'Android';
                case this._Platform.Blackberry.test(string):
                    this.Agent.isBlackberry = true;
                    return 'Blackberry';
                case this._Platform.Linux.test(string):
                    return 'Linux';
                case this._Platform.Wii.test(string):
                    return 'Wii';
                case this._Platform.Playstation.test(string):
                    return 'Playstation';
                case this._Platform.iPad.test(string):
                    this.Agent.isiPad = true;
                    return 'iPad';
                case this._Platform.iPod.test(string):
                    this.Agent.isiPod = true;
                    return 'iPod';
                case this._Platform.iPhone.test(string):
                    this.Agent.isiPhone = true;
                    return 'iPhone';
                case this._Platform.Samsung.test(string):
                    this.Agent.isiSamsung = true;
                    return 'Samsung';
                default:
                    return 'unknown';
            }
        };

        this.testCompatibilityMode = function () {
            var ua = this;
            if (this.Agent.isIE) {
                if (/Trident\/(\d)\.0/i.test(ua.Agent.source)) {
                    var tridentVersion = parseInt(RegExp.$1, 10);
                    var version = parseInt(ua.Agent.version, 10);
                    if (version === 7 && tridentVersion === 7) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 11.0;
                    }

                    if (version === 7 && tridentVersion === 6) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 10.0;
                    }

                    if (version === 7 && tridentVersion === 5) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 9.0;
                    }

                    if (version === 7 && tridentVersion === 4) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 8.0;
                    }
                }
            }
        };

        this.testSilk = function () {
            var ua = this;
            switch (true) {
                case new RegExp('silk', 'gi').test(ua.Agent.source):
                    this.Agent.isSilk = true;
                    break;
                default:
            }

            if (/Silk-Accelerated=true/gi.test(ua.Agent.source)) {
                this.Agent.SilkAccelerated = true;
            }
            return this.Agent.isSilk ? 'Silk' : false;
        };

        this.testKindleFire = function () {
            var ua = this;
            switch (true) {
                case /KFOT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire';
                case /KFTT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD';
                case /KFJWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9';
                case /KFJWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9 4G';
                case /KFSOWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 7';
                case /KFTHWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7';
                case /KFTHWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7 4G';
                case /KFAPWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9';
                case /KFAPWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9 4G';
                default:
                    return false;
            }
        };

        this.testCaptiveNetwork = function () {
            var ua = this;
            switch (true) {
                case /CaptiveNetwork/gi.test(ua.Agent.source):
                    ua.Agent.isCaptive = true;
                    ua.Agent.isMac = true;
                    ua.Agent.platform = 'Apple Mac';
                    return 'CaptiveNetwork';
                default:
                    return false;
            }
        };

        this.testMobile = function testMobile() {
            var ua = this;
            switch (true) {
                case ua.Agent.isWindows:
                case ua.Agent.isLinux:
                case ua.Agent.isMac:
                case ua.Agent.isChromeOS:
                    ua.Agent.isDesktop = true;
                    break;
                case ua.Agent.isAndroid:
                case ua.Agent.isSamsung:
                    ua.Agent.isMobile = true;
                    ua.Agent.isDesktop = false;
                    break;
                default:
            }
            switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isiPod:
                case ua.Agent.isiPhone:
                case ua.Agent.isBada:
                case ua.Agent.isBlackberry:
                case ua.Agent.isAndroid:
                case ua.Agent.isWindowsPhone:
                    ua.Agent.isMobile = true;
                    ua.Agent.isDesktop = false;
                    break;
                default:
            }
            if (/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isMobile = true;
                ua.Agent.isDesktop = false;
            }
        };

        this.testTablet = function testTablet() {
            var ua = this;
            switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isAndroidTablet:
                case ua.Agent.isKindleFire:
                    ua.Agent.isTablet = true;
                    break;
            }
            if (/tablet/i.test(ua.Agent.source)) {
                ua.Agent.isTablet = true;
            }
        };

        this.testNginxGeoIP = function testNginxGeoIP(headers) {
            var ua = this;
            Object.keys(headers).forEach(function (key) {
                if (/^GEOIP/i.test(key)) {
                    ua.Agent.geoIp[key] = headers[key];
                }
            });
        };

        this.testBot = function testBot() {
            var ua = this;
            var isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());
            if (isBot) {
                ua.Agent.isBot = isBot[1];
            } else if (!ua.Agent.isAuthoritative) {
                // Test unauthoritative parse for `bot` in UA to flag for bot
                ua.Agent.isBot = /bot/i.test(ua.Agent.source);
            }
        };

        this.testSmartTV = function testBot() {
            var ua = this;
            var isSmartTV = new RegExp('smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv', 'gi').exec(ua.Agent.source.toLowerCase());
            if (isSmartTV) {
                ua.Agent.isSmartTV = isSmartTV[1];
            }
        };

        this.testAndroidTablet = function testAndroidTablet() {
            var ua = this;
            if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isAndroidTablet = true;
            }
        };

        this.testTouchSupport = function () {
            var ua = this;
            ua.Agent.isTouchScreen = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        };

        this.getLaguage = function () {
            var ua = this;
            ua.Agent.language = (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || '').toLowerCase();
        };

        this.getColorDepth = function () {
            var ua = this;
            ua.Agent.colorDepth = screen.colorDepth || -1;
        };

        this.getScreenResolution = function () {
            var ua = this;
            ua.Agent.resolution = [screen.availWidth, screen.availHeight];
        };

        this.getPixelDepth = function () {
            var ua = this;
            ua.Agent.pixelDepth = screen.pixelDepth || -1;
        };

        this.getCPU = function () {
            var ua = this;
            ua.Agent.cpuCores = navigator.hardwareConcurrency || -1;
        };

        this.reset = function reset() {
            var ua = this;
            for (var key in ua.DefaultAgent) {
                if (ua.DefaultAgent.hasOwnProperty(key)) {
                    ua.Agent[key] = ua.DefaultAgent[key];
                }
            }
            return ua;
        };

        this.parse = function get(source) {
            source = source || navigator.userAgent;
            var ua = new DeviceUUID();
            ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
            ua.Agent.os = ua.getOS(ua.Agent.source);
            ua.Agent.platform = ua.getPlatform(ua.Agent.source);
            ua.Agent.browser = ua.getBrowser(ua.Agent.source);
            ua.Agent.version = ua.getBrowserVersion(ua.Agent.source);
            ua.testBot();
            ua.testSmartTV();
            ua.testMobile();
            ua.testAndroidTablet();
            ua.testTablet();
            ua.testCompatibilityMode();
            ua.testSilk();
            ua.testKindleFire();
            ua.testCaptiveNetwork();
            ua.testTouchSupport();
            ua.getLaguage();
            ua.getColorDepth();
            ua.getPixelDepth();
            ua.getScreenResolution();
            ua.getCPU();
            return ua.Agent;
        };

        this.get = function (customData) {
            var pref = 'a', du = this.parse();
            var dua = [];
            for (var key in this.options) {
                if (this.options.hasOwnProperty(key) && this.options[key] === true) {
                    dua.push(du[key]);
                }
            }
            if (customData) {
                dua.push(customData);
            }
            if (!this.options.resolution && du.isMobile) {
                dua.push(du.resolution);
            }
            // 8, 9, a, b
            pref = 'b';
            var tmpUuid = du.hashMD5(dua.join(':'));
            var uuid = [
                tmpUuid.slice(0,8),
                tmpUuid.slice(8,12),
                '4' + tmpUuid.slice(12,15),
                pref + tmpUuid.slice(15,18),
                tmpUuid.slice(20)
            ];
            return uuid.join('-');
        };

        this.Agent = this.DefaultAgent;
        return this;
    };

    exports.DeviceUUID = DeviceUUID;
    return new DeviceUUID(navigator.userAgent);

})(this);


/***/ })

});