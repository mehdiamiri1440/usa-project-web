webpackJsonp([34],{

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(497)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(499)
/* template */
var __vue_template__ = __webpack_require__(500)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f24c44a"
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

module.exports = Component.exports


/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(498);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("8071f074", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3f24c44a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./status.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3f24c44a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./status.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.main-content[data-v-3f24c44a] {\n  direction: rtl;\n}\n.green-button[data-v-3f24c44a] {\n  padding: 10px 15px;\n  width: initial;\n}\n.special-button[data-v-3f24c44a] {\n  background: #000546;\n  position: relative;\n}\n.badge[data-v-3f24c44a] {\n  position: absolute;\n  left: -10px;\n  background: red;\n  top: -10px;\n}\n.gray-brand-background[data-v-3f24c44a] {\n  background: #556080;\n}\n.blue-brand-background[data-v-3f24c44a] {\n  background: #000546;\n}\n.header-links-wrapper a[data-v-3f24c44a] {\n  margin-top: 15px;\n  margin-left: 15px;\n}\n.title[data-v-3f24c44a] {\n  text-align: right;\n  padding: 15px 0;\n  border-bottom: 2px solid #e8e8e8;\n}\n.title h1[data-v-3f24c44a] {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 9px;\n}\n.boxes[data-v-3f24c44a] {\n  margin: 15px auto;\n}\n.box[data-v-3f24c44a] {\n  background: #fff;\n\n  border-radius: 4px;\n\n  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);\n\n          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);\n\n  padding: 0;\n\n  overflow: hidden;\n\n  position: relative;\n\n  top: 0;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n\n  height: 180px;\n\n  margin: 15px 0;\n}\n.box[data-v-3f24c44a]:hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  -webkit-box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);\n  top: -5px;\n}\n.box:hover .box-icon[data-v-3f24c44a] {\n  -webkit-animation: shake-data-v-3f24c44a 2.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake-data-v-3f24c44a 2.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n.box .box-title[data-v-3f24c44a] {\n  font-size: 17px;\n\n  padding: 15px 10px 0;\n\n  line-height: 1.618;\n}\n.box-main[data-v-3f24c44a] {\n  padding: 0 10px;\n  margin: 0 auto;\n  position: absolute;\n  bottom: 60px;\n  width: 100%;\n}\n.content-wrapper[data-v-3f24c44a] {\n  font-size: 28px;\n\n  font-weight: bold;\n}\n.box .box-icon[data-v-3f24c44a] {\n  opacity: 0.14;\n  font-size: 76px;\n  position: absolute;\n  left: 10px;\n  bottom: 0;\n}\n.box a[data-v-3f24c44a] {\n  width: 100%;\n  position: relative;\n  border-radius: 0;\n  margin: 0;\n}\n.box-upgrade-link[data-v-3f24c44a] {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n}\n.default-icon[data-v-3f24c44a] {\n  position: absolute;\n  bottom: 0;\n  left: 10px;\n}\n@-webkit-keyframes shake-data-v-3f24c44a {\n10%,\n  90% {\n    -webkit-transform: translate3d(0, -6px, 0);\n            transform: translate3d(0, -6px, 0);\n}\n20%,\n  80% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes shake-data-v-3f24c44a {\n10%,\n  90% {\n    -webkit-transform: translate3d(0, -6px, 0);\n            transform: translate3d(0, -6px, 0);\n}\n20%,\n  80% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@media screen and (max-width: 991px) {\n.list-title[data-v-3f24c44a],\n  .needs[data-v-3f24c44a],\n  .list-time[data-v-3f24c44a] {\n    padding: 15px;\n}\n}\n@media screen and (max-width: 767px) {\n.box-upgrade-link[data-v-3f24c44a] {\n    margin-top: 0;\n}\n.green-button[data-v-3f24c44a] {\n    padding: 13px 20px;\n    font-size: 15px;\n    font-weight: bold;\n    margin: 9px auto;\n}\n.header-links-wrapper a[data-v-3f24c44a] {\n    margin-left: 0;\n    width: 100%;\n}\n.title[data-v-3f24c44a] {\n    float: right;\n}\n.main-content[data-v-3f24c44a] {\n    padding-bottom: 80px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(7);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      statusData: "",
      linkItems: [{
        href: "registerProductSeller",
        icon: "fa fa-plus",
        text: "افزودن محصول",
        badge: false
      }, {
        href: "buyAdRequestsSeller",
        icon: "fa fa-list-alt",
        text: "درخواست های خرید",
        badge: false
      }, {
        href: "messagesSeller",
        icon: "fas fa-comment-alt",
        text: "پیام ها",
        badge: false
      }, {
        href: "messagesRequestSeller",
        icon: "fas fa-list-ul",
        text: "خریداران پیشنهادی",
        badge: true
      }],

      boxes: "",
      items: []
    };
  },
  methods: {
    init: function init() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", false);

      var self = this;
      axios.post("/get_seller_dashboard_required_data").then(function (response) {
        self.statusData = response.data;

        self.boxes = [{
          title: "نوع عضویت فعال شما",
          icon: "fas fa-address-card",
          iconColor: "#19668E",
          staticName: "",
          button: response.data.active_pakage_type < 3 ? true : false,
          routerName: "dashboardPricingTableSeller",
          linkName: "ارتقا عضویت",
          linkIcon: "fa fa-arrow-up",
          status: self.checkPackage(response.data.active_pakage_type)
        }, {
          title: "تعداد محصولات قابل ثبت",
          icon: "fas fa-list-ol",
          iconColor: "#aa49c8",
          staticName: "",
          button: true,
          routerName: "dashboardProductPricing",
          linkName: "افزایش ظرفیت ثبت محصول",
          linkIcon: "fa fa-plus",
          status: response.data.max_allowed_product_register_count == 0 ? "صفر" : response.data.max_allowed_product_register_count + " محصول"
        }, {
          title: "سقف روزانه تعداد پاسخ ها به درخواست های خرید",
          icon: "fas fa-list-alt",
          iconColor: "#D8A679",
          staticName: "",
          button: true,
          routerName: "dashboardBuyAdPricing",
          linkName: "افزایش ظرفیت پاسخ گویی",
          linkIcon: "fa fa-arrow-up",
          status: self.checkRequest(response.data.max_buyAds_reply)
        }, {
          title: "احراز هویت شده",
          icon: "fas fa-award	",
          iconColor: "#21AD93",
          staticName: "",
          button: response.data.is_verified ? false : true,
          routerName: "profileBasicSellerVeficiation",
          linkName: "احراز هویت کنید",
          linkIcon: "",
          status: response.data.is_verified ? "بله" : "خیر"
        }, {
          title: "دسترسی به درخواست های خرید طلایی",
          icon: "fas fa-star",
          iconColor: "#FFAC58",
          staticName: "",
          button: response.data.access_to_golden_buyAds ? false : true,
          routerName: "dashboardPricingTableSeller",
          linkName: "دسترسی به درخواست های طلایی",
          linkIcon: "",
          status: response.data.access_to_golden_buyAds ? "بله" : "خیر"
        },

        // {
        //   title: "میزان اعتبار",
        //   icon: "fas fa-star",
        //   iconColor: "#00C5BE",
        //   staticName: "",
        //   button: false,
        //   routerName: "dashboardPricingTableSeller",
        //   linkName: "ارتقا عضویت",
        //   linkIcon: "fa fa-arrow-up",
        //   status: response.data.reputation_score
        //     ? response.data.reputation_score
        //     : "بدون اعتبار",
        // },
        {
          title: "تعداد محصولات ثبت شده",
          icon: "fas fa-list-ol",
          iconColor: "#00C5BE",
          staticName: "",
          button: true,
          routerName: "myProductsSeller",
          linkName: "محصولات من",
          linkIcon: "fas fa-list-ol",
          status: response.data.confirmed_products_count == 0 ? "صفر" : response.data.confirmed_products_count + " محصول"
        }];
      }
      /*					{
      title : 'احتمال پاسخگویی به پیام',
      icon : 'fa fa-chart-line',
      iconColor : '#FF8058',
      staticName : 'درصد',
      upgrade : true,
      status : '20'
      },	*/
      );
    },
    checkPackage: function checkPackage(packageId) {
      var packageName = "";
      switch (packageId) {
        case 0:
          packageName = "عضویت رایگان";
          break;
        case 1:
          packageName = "عضویت پایه";
          break;
        case 2:
          packageName = "اشتراک 6 ماهه";
          break;
        case 3:
          packageName = "عضویت ویژه";
          break;
      }
      return packageName;
    },
    checkRequest: function checkRequest(requestNumber) {
      var setRequest = "";

      if (requestNumber >= 2000) {
        setRequest = " نامحدود";
      } else if (requestNumber == 0) {
        setRequest = "بدون درخواست";
      } else {
        setRequest = requestNumber + " پاسخ";
      }
      return setRequest;
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "main-content col-xs-12" }, [
      _c("div", { staticClass: "title col-xs-12" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xs-9 col-sm-4 pull-left text-left" },
            [
              _c(
                "router-link",
                {
                  staticClass: "green-button blue-brand-background",
                  attrs: { to: { name: "dashboardPricingTableSeller" } }
                },
                [
                  _c("i", { staticClass: "fa fa-arrow-up" }),
                  _vm._v("\n            ارتقا عضویت\n          ")
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "header-links col-xs-12" }, [
        _c(
          "div",
          { staticClass: "header-links-wrapper" },
          _vm._l(_vm.linkItems, function(link, index) {
            return _c(
              "router-link",
              {
                key: index,
                staticClass: "green-button",
                class: { "special-button": link.badge },
                attrs: { to: { name: link.href } }
              },
              [
                link.badge
                  ? _c("span", { staticClass: "badge" }, [_vm._v(" جدید ")])
                  : _vm._e(),
                _vm._v(" "),
                _c("i", { class: link.icon }),
                _vm._v(" "),
                _c("span", { domProps: { textContent: _vm._s(link.text) } })
              ]
            )
          })
        )
      ]),
      _vm._v(" "),
      _vm.statusData
        ? _c("div", { staticClass: "boxes col-xs-12" }, [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.boxes, function(box, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass:
                      "pull-right col-xs-12 col-sm-6 col-md-4 col-lg-3"
                  },
                  [
                    _c("div", { staticClass: "box" }, [
                      _c("div", { staticClass: "box-title" }, [
                        _c("span", {
                          domProps: { textContent: _vm._s(box.title) }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "box-main" }, [
                        _c("div", { staticClass: "content-wrapper" }, [
                          box.status
                            ? _c("span", {
                                domProps: { textContent: _vm._s(box.status) }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          box.staticName
                            ? _c("span", {
                                domProps: {
                                  textContent: _vm._s(box.staticName)
                                }
                              })
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "box-icon",
                          class: box.icon,
                          style: { color: [box.iconColor] }
                        })
                      ]),
                      _vm._v(" "),
                      box.button
                        ? _c(
                            "div",
                            { staticClass: "box-upgrade-link" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "green-button",
                                  class: { "gray-brand-background": index > 0 },
                                  attrs: { to: { name: box.routerName } }
                                },
                                [
                                  box.linkIcon
                                    ? _c("i", { class: box.linkIcon })
                                    : _vm._e(),
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(box.linkName) +
                                      "\n              "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ])
                  ]
                )
              })
            )
          ])
        : _c("div", { staticClass: "boxes col-xs-12" }, [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(6, function(items, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass:
                      "pull-right col-xs-12 col-sm-6 col-md-4 col-lg-3"
                  },
                  [_vm._m(1, true)]
                )
              })
            )
          ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-3 col-sm-4 pull-right" }, [
      _c("h1", [_vm._v("داشبورد")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box" }, [
      _c("div", { staticClass: "box-title-default" }, [
        _c("span", {
          staticClass: "content-full-width placeholder-content margin-15"
        }),
        _vm._v(" "),
        _c("span", {
          staticClass: "content-min-width placeholder-content margin-15"
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-main" }, [
        _c("div", { staticClass: "content-wrapper" }, [
          _c("span", { staticClass: "content-half-width placeholder-content" })
        ]),
        _vm._v(" "),
        _c("span", {
          staticClass: "default-icon pull-left placeholder-content"
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "box-upgrade-link" }, [
        _c("span", {
          staticClass:
            "content-full-width placeholder-content default-item-wrapper col-xs-12"
        })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3f24c44a", module.exports)
  }
}

/***/ })

});