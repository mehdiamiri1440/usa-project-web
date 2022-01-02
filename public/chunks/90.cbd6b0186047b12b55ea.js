webpackJsonp([90],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_status_vue__ = __webpack_require__(401);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c3ff9030_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_status_vue__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(579)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c3ff9030"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_status_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c3ff9030_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_status_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c3ff9030_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_status_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\seller\\dashboard\\status.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c3ff9030", Component.options)
  } else {
    hotAPI.reload("data-v-c3ff9030", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(580);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("5c4a4151", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-c3ff9030\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./status.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-c3ff9030\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./status.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.main-content[data-v-c3ff9030] {\r\n  direction: rtl;\n}\n.green-button[data-v-c3ff9030] {\r\n  padding: 10px 15px;\r\n  width: initial;\r\n  border-radius: 8px;\n}\n.special-button[data-v-c3ff9030] {\r\n  background: #000546;\r\n  position: relative;\n}\n.badge[data-v-c3ff9030] {\r\n  position: absolute;\r\n  left: -10px;\r\n  background: red;\r\n  top: -10px;\n}\n.gray-brand-background[data-v-c3ff9030] {\r\n  background: #556080;\n}\n.blue-brand-background[data-v-c3ff9030] {\r\n  background: #000546;\n}\n.header-links-wrapper a[data-v-c3ff9030] {\r\n  margin-top: 15px;\r\n  margin-left: 15px;\n}\n.title[data-v-c3ff9030] {\r\n  text-align: right;\r\n  padding: 15px 0;\r\n  border-bottom: 2px solid #e8e8e8;\n}\n.title h1[data-v-c3ff9030] {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  padding-top: 9px;\n}\n.boxes[data-v-c3ff9030] {\r\n  margin: 15px auto;\n}\n.box[data-v-c3ff9030] {\r\n  background: #fff;\r\n\r\n  border: 1px solid #e9ecef;\r\n\r\n  border-radius: 12px;\r\n\r\n  padding: 0;\r\n\r\n  overflow: hidden;\r\n\r\n  position: relative;\r\n\r\n  top: 0;\r\n\r\n  -webkit-transition: 300ms;\r\n\r\n  transition: 300ms;\r\n\r\n  height: 180px;\r\n\r\n  margin: 15px 0;\n}\n.box[data-v-c3ff9030]:hover {\r\n  -webkit-transition: 300ms;\r\n  transition: 300ms;\r\n  -webkit-box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);\r\n  top: -5px;\n}\n.box:hover .box-icon[data-v-c3ff9030] {\r\n  -webkit-animation: shake-data-v-c3ff9030 2.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n          animation: shake-data-v-c3ff9030 2.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n.box .box-title[data-v-c3ff9030] {\r\n  font-size: 17px;\r\n\r\n  padding: 15px 10px 0;\r\n\r\n  line-height: 1.618;\n}\n.box-main[data-v-c3ff9030] {\r\n  padding: 0 10px;\r\n  margin: 0 auto;\r\n  position: absolute;\r\n  bottom: 60px;\r\n  width: 100%;\n}\n.content-wrapper[data-v-c3ff9030] {\r\n  font-size: 28px;\r\n\r\n  font-weight: bold;\n}\n.box .box-icon[data-v-c3ff9030] {\r\n  opacity: 0.14;\r\n  font-size: 76px;\r\n  position: absolute;\r\n  left: 10px;\r\n  bottom: 0;\n}\n.box a[data-v-c3ff9030] {\r\n  width: 100%;\r\n  position: relative;\r\n  border-radius: 0;\r\n  margin: 0;\n}\n.box-upgrade-link[data-v-c3ff9030] {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\n}\n.default-icon[data-v-c3ff9030] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 10px;\n}\n.header-links-wrapper a.viewers-link[data-v-c3ff9030] {\r\n  margin: 20px auto 5px;\r\n  display: inline-block;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  color: #1da1f2;\r\n  -webkit-transition: 300ms;\r\n  transition: 300ms;\n}\n.header-links-wrapper a.viewers-link[data-v-c3ff9030]:hover {\r\n  -webkit-transition: 300ms;\r\n  transition: 300ms;\r\n  -webkit-transform: translateX(-5px);\r\n          transform: translateX(-5px);\n}\n@-webkit-keyframes shake-data-v-c3ff9030 {\n10%,\r\n  90% {\r\n    -webkit-transform: translate3d(0, -6px, 0);\r\n            transform: translate3d(0, -6px, 0);\n}\n20%,\r\n  80% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes shake-data-v-c3ff9030 {\n10%,\r\n  90% {\r\n    -webkit-transform: translate3d(0, -6px, 0);\r\n            transform: translate3d(0, -6px, 0);\n}\n20%,\r\n  80% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\n}\n}\n@media screen and (max-width: 991px) {\n.list-title[data-v-c3ff9030],\r\n  .needs[data-v-c3ff9030],\r\n  .list-time[data-v-c3ff9030] {\r\n    padding: 15px;\n}\n}\n@media screen and (max-width: 767px) {\n.box-upgrade-link[data-v-c3ff9030] {\r\n    margin-top: 0;\n}\n.green-button[data-v-c3ff9030] {\r\n    padding: 13px 20px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    margin: 9px auto;\n}\n.header-links-wrapper a[data-v-c3ff9030] {\r\n    margin-left: 0;\r\n    width: 100%;\n}\n.title[data-v-c3ff9030] {\r\n    float: right;\n}\n.main-content[data-v-c3ff9030] {\r\n    padding-bottom: 80px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
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
          [
            _c(
              "div",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "viewers-link",
                    attrs: { to: { name: "sellerViewer" } }
                  },
                  [
                    _c("span", [
                      _vm._v(" خریدارانی که شماره تماس شما را دیده اند ")
                    ]),
                    _vm._v(" "),
                    _c("i", { staticClass: "fa fa-arrow-left" })
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
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
          ],
          2
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
            "\n                  content-full-width\n                  placeholder-content\n                  default-item-wrapper\n                  col-xs-12\n                "
        })
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c3ff9030", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});