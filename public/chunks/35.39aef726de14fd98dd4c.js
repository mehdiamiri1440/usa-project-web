webpackJsonp([35],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_buyAd_requests_vue__ = __webpack_require__(427);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51160c67_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_buyAd_requests_vue__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(784)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51160c67"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_buyAd_requests_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51160c67_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_buyAd_requests_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51160c67_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_buyAd_requests_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\buyer\\my-requests\\buyAd-requests.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51160c67", Component.options)
  } else {
    hotAPI.reload("data-v-51160c67", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "/images/hand-phone-icon-6.jpg?1fba94752974fbdbe303388a613a2c7f";

/***/ }),

/***/ 427:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["storage"],
  data: function data() {
    return {
      buyAds: "",
      isConditionSatisfied: false,
      load: false,
      isRequests: true
    };
  },
  methods: {
    init: function init() {
      this.load = true;
      var self = this;
      axios.post("/get_my_buyAds").then(function (response) {
        self.buyAds = response.data.buyAds;
        self.load = false;
      });
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
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    isOsIOS: function isOsIOS() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
          safari = /safari/.test(userAgent),
          ios = /iphone|ipod|ipad/.test(userAgent);
      return ios;
    },
    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    getAndroidVersion: function getAndroidVersion(ua) {
      ua = (ua || navigator.userAgent).toLowerCase();
      var match = ua.match(/android\s([0-9\.]*)/);
      return match ? match[1] : undefined;
    },
    isOsAndroid: function isOsAndroid() {
      var self = this;
      if (this.isDeviceMobile() && !this.isOsIOS()) {
        var androidVersion = this.getAndroidVersion();
        if (parseInt(androidVersion) >= 5) {
          this.isConditionSatisfied = false;
        }
      }
    },
    deleteBuyAd: function deleteBuyAd(id) {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("buyAdId", id);

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("modal", "deleteBuyAdModal");

      this.registerComponentStatistics("buyAd", "delete-buyAd", "click on delete buyAd-btn");
    },

    createCookie: function createCookie(name, value, minutes) {
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }
  },
  mounted: function mounted() {
    this.isOsAndroid();
    this.init();
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", false);
  },
  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/buyAd-requests" });
  }
});

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(785);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("c75ea0e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-51160c67\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buyAd-requests.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-51160c67\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buyAd-requests.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\r\n/* .requests .main-content {\r\n  padding-top: 50px;\r\n} */\n.wrapper_no_pro[data-v-51160c67] {\r\n  text-align: center;\r\n  font-size: 23px;\r\n  padding: 15px 0;\n}\n.wrapper_no_pro .green-button[data-v-51160c67] {\r\n  font-size: 1.6rem;\n}\n.content_no_pic[data-v-51160c67] {\r\n  font-size: 70px;\r\n  margin: 20px auto;\r\n  color: #bdbdbd;\n}\n.text_no_pic[data-v-51160c67] {\r\n  margin: 30px auto;\r\n  color: #bdbdbd;\n}\n.list-title[data-v-51160c67],\r\n.needs[data-v-51160c67],\r\n.list-time[data-v-51160c67],\r\n.list-notice[data-v-51160c67] {\r\n  float: right;\r\n  text-align: center;\r\n  line-height: 1.618;\r\n  font-weight: bold;\r\n  padding: 5px;\n}\n.list-group-item[data-v-51160c67] {\r\n  border: 1px solid #ddd;\r\n  padding: 11px 0;\n}\n.list-group-item[data-v-51160c67]:nth-last-of-type(2n + 1) {\r\n  background: #fdfdfd !important;\n}\n.detail-success[data-v-51160c67] {\r\n  padding: 8px 0;\r\n  width: 100%;\r\n  background: #00c569;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  font-size: 13px;\r\n  font-weight: bold;\n}\n.main-content > ul[data-v-51160c67] {\r\n  border-radius: 3px;\r\n  -webkit-box-shadow: 0 0 10px #e1e1e1;\r\n          box-shadow: 0 0 10px #e1e1e1;\r\n  overflow: hidden;\n}\n.main-content .list-group-item p[data-v-51160c67] {\r\n  text-align: center;\r\n  direction: rtl;\n}\n#main.little-main[data-v-51160c67] {\r\n  margin-right: 80px;\n}\n.message-list[data-v-51160c67] {\r\n  padding: 19px;\r\n  text-align: center;\r\n  background: #eff3f6;\r\n  line-height: 1.618;\n}\n.text-red[data-v-51160c67] {\r\n  color: #e41c38;\n}\n.request-detail .green-button[data-v-51160c67] {\r\n  font-size: 16px;\r\n  padding: 8px 30px;\n}\n.title[data-v-51160c67] {\r\n  background: #f6f6f6;\r\n  position: fixed;\r\n  right: 250px;\r\n  left: 0;\r\n  z-index: 1;\r\n  border-radius: 0;\r\n  padding: 13px 15px;\n}\n.placeholder-title h1[data-v-51160c67],\r\n.title h1[data-v-51160c67] {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  line-height: 1.9;\n}\n.fix-request-header-box[data-v-51160c67] {\r\n  background: #eff3f6;\r\n  position: fixed;\r\n  right: 250px;\r\n  left: 0;\r\n  z-index: 2;\r\n  border-radius: 0;\r\n  padding: 10px 0;\n}\n.fix-request-bottom[data-v-51160c67] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 5;\r\n  width: 100%;\r\n  background: #fff;\r\n  border-radius: 0;\r\n  padding: 10px 0;\n}\n.request-update button[data-v-51160c67] {\r\n  margin: 0;\r\n  padding: 3px 14px;\r\n  margin-right: 6px;\n}\n#main.little-main .fix-request-header-box[data-v-51160c67],\r\n#main.little-main .title[data-v-51160c67] {\r\n  right: 80px;\n}\n.buyAds-wrapper[data-v-51160c67] {\r\n  padding-top: 80px;\r\n  overflow: hidden;\r\n  max-width: 992px;\r\n  margin: 0 auto;\n}\n.delete-button[data-v-51160c67] {\r\n  font-size: 18px;\r\n  text-align: center;\r\n  padding: 15px;\r\n  background: none;\r\n  border: none;\n}\n.item-wrapper[data-v-51160c67] {\r\n  border-radius: 12px;\r\n  border: 1px solid #e9ecef;\r\n  min-height: 150px;\r\n  direction: rtl;\r\n  margin-bottom: 30px;\r\n  text-align: center;\n}\ntable[data-v-51160c67] {\r\n  width: 100%;\n}\n.table-wrapper[data-v-51160c67] {\r\n  min-height: 227px;\n}\ntd[data-v-51160c67] {\r\n  padding: 15px;\n}\ntr[data-v-51160c67]:nth-child(even) {\r\n  background-color: #f6fbff;\n}\n.remove-filter-button[data-v-51160c67] {\r\n  background: #fff;\r\n  border-radius: 50px;\r\n  border: 1px solid #e41c39;\r\n  color: #777;\r\n  margin: 0;\r\n  padding: 2px 15px;\r\n  margin-right: 10px;\n}\n.remove-filter-icon[data-v-51160c67] {\r\n  position: relative;\r\n  top: 2px;\r\n  right: -6px;\n}\n.android-wrapper[data-v-51160c67] {\r\n  padding: 100px 15px;\r\n  text-align: center;\r\n  background: #fff;\r\n  direction: rtl;\n}\n.android-wrapper p[data-v-51160c67] {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: #333;\r\n  line-height: 1.618;\n}\n.android-wrapper p.section-contents[data-v-51160c67] {\r\n  color: #e51c38;\n}\n.android-wrapper .section-image[data-v-51160c67] {\r\n  max-width: 190px;\r\n  margin: 15px auto;\r\n  padding-left: 25px;\n}\n.android-wrapper a[data-v-51160c67] {\r\n  padding: 12px 50px;\r\n  font-size: 16px;\n}\n@media screen and (max-width: 991px) {\n.fix-request-header-box[data-v-51160c67],\r\n  .title[data-v-51160c67] {\r\n    right: 0;\n}\n.default-list-title[data-v-51160c67] {\r\n    padding: 4px 15px;\n}\n}\n@media screen and (max-width: 767px) {\n.buyAds-wrapper[data-v-51160c67] {\r\n    padding-top: 10px;\n}\n.requests .main-content[data-v-51160c67] {\r\n    padding: 0 0 100px !important;\n}\n.title[data-v-51160c67] {\r\n    position: relative;\n}\n.title h1[data-v-51160c67] {\r\n    text-align: center;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isRequests,
            expression: "isRequests"
          }
        ],
        staticClass: "requests"
      },
      [
        _c("section", { staticClass: "main-content col-xs-12 padding-0-15'" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm.isConditionSatisfied
            ? _c("div", { staticClass: "android-wrapper" }, [
                _c("p", { staticClass: "section-title" }, [
                  _vm._v(
                    "\n          لیست درخواست های خود را از این قسمت ببینید\n        "
                  )
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("p", { staticClass: "section-contents" }, [
                  _vm._v(
                    "\n          برای دسترسی به این قسمت لطفا اپلیکیشن موبایل باسکول را نصب کنید.\n        "
                  )
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.buyAds.length != 0 && !_vm.load
            ? _c(
                "div",
                { staticClass: "buyAds-wrapper" },
                _vm._l(_vm.buyAds, function(buyAd, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "col-xs-12 col-md-6 pull-right"
                    },
                    [
                      _c("article", { staticClass: "item-wrapper bg-white" }, [
                        _c("div", { staticClass: "table-wrapper" }, [
                          _c("table", [
                            _c("tr", [
                              _c("td", { staticClass: "gray-text" }, [
                                _vm._v("دسته بندی")
                              ]),
                              _vm._v(" "),
                              _c("td", {
                                domProps: {
                                  textContent: _vm._s(buyAd.subcategory_name)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            buyAd.name
                              ? _c("tr", [
                                  _c("td", { staticClass: "gray-text" }, [
                                    _vm._v("نوع محصول")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", {
                                    domProps: {
                                      textContent: _vm._s(buyAd.name)
                                    }
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "gray-text" }, [
                                _vm._v("میزان نیاز مندی")
                              ]),
                              _vm._v(" "),
                              _c("td", {
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.getConvertedNumbers(
                                      buyAd.requirement_amount
                                    )
                                  )
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "gray-text" }, [
                                _vm._v("زمان ثبت")
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(
                                      _vm._f("moment")(
                                        buyAd.created_at,
                                        "jYYYY/jMM/jDD"
                                      )
                                    ) +
                                    "\n                  "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "gray-text" }, [
                                _vm._v("تعداد پاسخ های دریافتی")
                              ]),
                              _vm._v(" "),
                              _c("td", {
                                domProps: {
                                  textContent: _vm._s(buyAd.reply_capacity)
                                }
                              })
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "red-text delete-button",
                            on: {
                              click: function($event) {
                                _vm.deleteBuyAd(buyAd.id)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-trash" }),
                            _vm._v(
                              "\n              حذف این درخواست\n            "
                            )
                          ]
                        )
                      ])
                    ]
                  )
                })
              )
            : _vm.buyAds.length === 0 && !_vm.load
            ? _c("div", { staticClass: "buyAds-wrapper" }, [
                _c(
                  "div",
                  { staticClass: "wrapper_no_pro" },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "green-button",
                        attrs: { to: { name: "registerRequestBuyer" } }
                      },
                      [_vm._v("\n            ثبت درخواست خرید\n          ")]
                    )
                  ],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.buyAds.length === 0 && _vm.load
            ? _c(
                "div",
                { staticClass: "buyAds-wrapper" },
                _vm._l(6, function(buyAd, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "col-xs-12 col-md-6 pull-right"
                    },
                    [_vm._m(4, true)]
                  )
                })
              )
            : _vm._e()
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
    return _c("div", { staticClass: "title hidden-xs hidden-sm" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 text-rtl text-right col-sm-8 pull-right" },
          [_c("h1", [_vm._v("درخواست های من")])]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "section-image" }, [
      _c("img", {
        attrs: { src: __webpack_require__(326) }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content_no_pic" }, [
      _c("i", { staticClass: "fa fa-list-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text_no_pic text-rtl" }, [
      _c("p", [
        _vm._v("شما درخواست خریدی را ثبت نکرده اید یا در انتظار تایید است.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "article",
      { staticClass: "item-wrapper padding-bottom-15 bg-white" },
      [
        _c("div", { staticClass: "table-wrapper" }, [
          _c("table", [
            _c("tr", [
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-half-width"
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-half-width"
                })
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-default-width"
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-min-width"
                })
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-half-width"
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-default-width"
                })
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-default-width"
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-half-width"
                })
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-half-width"
                })
              ]),
              _vm._v(" "),
              _c("td", [
                _c("p", {
                  staticClass: "placeholder-content content-default-width"
                })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "margin-top-10" }, [
          _c("p", {
            staticClass:
              "\n                  placeholder-content\n                  padding-15-0\n                  margin-auto\n                  content-half-width\n                "
          })
        ])
      ]
    )
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-51160c67", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});