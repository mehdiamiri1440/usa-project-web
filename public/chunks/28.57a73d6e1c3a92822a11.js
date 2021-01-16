webpackJsonp([28],{

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(654)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(656)
/* template */
var __vue_template__ = __webpack_require__(657)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-568f1f20"
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
Component.options.__file = "resources/assets/js/components/dashboard/buyer/my-requests/buyAd-requests.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-568f1f20", Component.options)
  } else {
    hotAPI.reload("data-v-568f1f20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "/images/hand-phone-icon-6.jpg?03a7ff45c76baed977b285293188a513";

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(655);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("73955b4c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-568f1f20\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buyAd-requests.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-568f1f20\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./buyAd-requests.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n/* .requests .main-content {\n  padding-top: 50px;\n} */\n.wrapper_no_pro[data-v-568f1f20] {\n  text-align: center;\n  font-size: 23px;\n  padding: 15px 0;\n}\n.content_no_pic[data-v-568f1f20] {\n  font-size: 70px;\n  margin: 20px auto;\n  color: #bdbdbd;\n}\n.text_no_pic[data-v-568f1f20] {\n  margin: 30px auto;\n  color: #bdbdbd;\n}\n.list-title[data-v-568f1f20],\n.needs[data-v-568f1f20],\n.list-time[data-v-568f1f20],\n.list-notice[data-v-568f1f20] {\n  float: right;\n  text-align: center;\n  line-height: 1.618;\n  font-weight: bold;\n  padding: 5px;\n}\n.list-group-item[data-v-568f1f20] {\n  border: 1px solid #ddd;\n  padding: 11px 0;\n}\n.list-group-item[data-v-568f1f20]:nth-last-of-type(2n + 1) {\n  background: #fdfdfd !important;\n}\n.detail-success[data-v-568f1f20] {\n  padding: 8px 0;\n  width: 100%;\n  background: #00c569;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  font-size: 13px;\n  font-weight: bold;\n}\n.main-content > ul[data-v-568f1f20] {\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 10px #e1e1e1;\n          box-shadow: 0 0 10px #e1e1e1;\n  overflow: hidden;\n}\n.main-content .list-group-item p[data-v-568f1f20] {\n  text-align: center;\n  direction: rtl;\n}\n#main.little-main[data-v-568f1f20] {\n  margin-right: 80px;\n}\n.message-list[data-v-568f1f20] {\n  padding: 19px;\n  text-align: center;\n  background: #eff3f6;\n  line-height: 1.618;\n}\n.text-red[data-v-568f1f20] {\n  color: #e41c38;\n}\n.request-detail .green-button[data-v-568f1f20] {\n  font-size: 16px;\n  padding: 8px 30px;\n}\n.title[data-v-568f1f20] {\n  background: #f6f6f6;\n  position: fixed;\n  right: 250px;\n  left: 0;\n  z-index: 1;\n  border-radius: 0;\n  padding: 13px 15px;\n}\n.placeholder-title h1[data-v-568f1f20],\n.title h1[data-v-568f1f20] {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.9;\n}\n.fix-request-header-box[data-v-568f1f20] {\n  background: #eff3f6;\n  position: fixed;\n  right: 250px;\n  left: 0;\n  z-index: 2;\n  border-radius: 0;\n  padding: 10px 0;\n}\n.fix-request-bottom[data-v-568f1f20] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  background: #fff;\n  border-radius: 0;\n  padding: 10px 0;\n}\n.request-update button[data-v-568f1f20] {\n  margin: 0;\n  padding: 3px 14px;\n  margin-right: 6px;\n}\n#main.little-main .fix-request-header-box[data-v-568f1f20],\n#main.little-main .title[data-v-568f1f20] {\n  right: 80px;\n}\n.detail-contents[data-v-568f1f20] {\n  margin: 15px auto;\n}\n.detail-contents > div[data-v-568f1f20] {\n  background: #fff;\n  padding: 15px;\n  margin-bottom: 15px;\n  line-height: 25px;\n  font-size: 30px;\n}\n.list-notice[data-v-568f1f20] {\n  text-align: right;\n  height: 32px;\n}\n.list-notice button[data-v-568f1f20] {\n  background: none;\n\n  border: none;\n\n  color: #777;\n\n  padding: 0;\n\n  position: relative;\n\n  top: -5px;\n}\n.list-notice button > span[data-v-568f1f20]:first-of-type {\n  position: relative;\n\n  font-size: 26px;\n}\n.list-notice button > span.request-count[data-v-568f1f20] {\n  font-size: 18px;\n\n  position: relative;\n\n  top: -5px;\n}\n.list-notice button > span > i[data-v-568f1f20]:last-of-type {\n  position: absolute;\n\n  left: 17px;\n\n  color: #fff;\n\n  font-size: 15px;\n\n  top: 7px;\n}\n.hide-reply[data-v-568f1f20] {\n  display: none;\n}\n.wrapper-items[data-v-568f1f20] {\n  padding-top: 60px;\n}\n.remove-filter-button[data-v-568f1f20] {\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #e41c39;\n  color: #777;\n  margin: 0;\n  padding: 2px 15px;\n  margin-right: 10px;\n}\n.remove-filter-icon[data-v-568f1f20] {\n  position: relative;\n  top: 2px;\n  right: -6px;\n}\n.android-wrapper[data-v-568f1f20] {\n  padding: 100px 15px;\n  text-align: center;\n  background: #fff;\n  direction: rtl;\n}\n.android-wrapper p[data-v-568f1f20] {\n  font-size: 15px;\n  font-weight: bold;\n  color: #333;\n  line-height: 1.618;\n}\n.android-wrapper p.section-contents[data-v-568f1f20] {\n  color: #e51c38;\n}\n.android-wrapper .section-image[data-v-568f1f20] {\n  max-width: 190px;\n  margin: 15px auto;\n  padding-left: 25px;\n}\n.android-wrapper a[data-v-568f1f20] {\n  padding: 12px 50px;\n  font-size: 16px;\n}\n.lock > p[data-v-568f1f20] {\n  -webkit-filter: blur(7px);\n          filter: blur(7px);\n}\n.lock > span.lock-text[data-v-568f1f20] {\n  position: absolute;\n  left: 0;\n  text-align: right;\n  right: 90px;\n  font-size: 20px;\n  font-weight: bold;\n  top: 14px;\n}\n@media screen and (max-width: 991px) {\n.fix-request-header-box[data-v-568f1f20],\n  .title[data-v-568f1f20] {\n    right: 0;\n}\n.default-list-title[data-v-568f1f20] {\n    padding: 4px 15px;\n}\n}\n@media screen and (max-width: 767px) {\n.lock > span.lock-text[data-v-568f1f20] {\n    text-align: center;\n    right: 0;\n    top: 60px;\n}\n.golden[data-v-568f1f20] {\n    padding: 25px 0;\n}\n.golden[data-v-568f1f20]::after {\n    display: none;\n}\n.main-content[data-v-568f1f20],\n  .wrapper-items[data-v-568f1f20] {\n    padding: 0;\n}\n.requests .main-content[data-v-568f1f20] {\n    padding: 0 0 100px !important;\n}\n.title[data-v-568f1f20] {\n    position: relative;\n}\n.title h1[data-v-568f1f20] {\n    text-align: center;\n}\n.detail-success[data-v-568f1f20] {\n    max-width: 300px;\n    margin: 0 auto;\n}\n.default-button-full-with[data-v-568f1f20] {\n    max-width: 300px;\n}\n.list-notice button > span.request-count[data-v-568f1f20] {\n    font-size: 15px;\n    top: -5px;\n}\n.list-notice button > span > i[data-v-568f1f20]:last-of-type {\n    left: 16px;\n\n    font-size: 12px;\n    top: 7px;\n}\n.list-notice button > span[data-v-568f1f20]:first-of-type {\n    font-size: 23px;\n}\n.list-notice button > span.request-count[data-v-568f1f20] {\n    font-size: 15px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 656:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["storage"],
  data: function data() {
    return {
      currentUser: {
        profile: "",
        user_info: ""
      },
      buyAds: [{
        id: 84,
        name: "سیب سبز",
        created_at: "2020-10-24 19:09:34",
        updated_at: "2020-10-24 19:09:34",
        category_id: 3,
        requirement_amount: 10000202,
        confirmed: 1,
        myuser_id: 1,
        reply_capacity: 10,
        first_name: "علی",
        last_name: "قاسمی",
        is_golden: false,
        score: 5,
        category_name: "میوه",
        subcategory_name: "سیب",
        register_date: "۳  آبان , ۱۳۹۹"
      }, {
        id: 84,
        name: "سیب سبز",
        created_at: "2020-10-24 19:09:34",
        updated_at: "2020-10-24 19:09:34",
        category_id: 3,
        requirement_amount: 10000202,
        confirmed: 1,
        myuser_id: 1,
        reply_capacity: 10,
        first_name: "علی",
        last_name: "قاسمی",
        is_golden: false,
        score: 5,
        category_name: "میوه",
        subcategory_name: "سیب",
        register_date: "۳  آبان , ۱۳۹۹"
      }, {
        id: 84,
        name: "سیب سبز",
        created_at: "2020-10-24 19:09:34",
        updated_at: "2020-10-24 19:09:34",
        category_id: 3,
        requirement_amount: 10000202,
        confirmed: 1,
        myuser_id: 1,
        reply_capacity: 10,
        first_name: "علی",
        last_name: "قاسمی",
        is_golden: false,
        score: 5,
        category_name: "میوه",
        subcategory_name: "سیب",
        register_date: "۳  آبان , ۱۳۹۹"
      }],
      isConditionSatisfied: false,
      load: false,
      items: [],
      isRequests: true
    };
  },
  methods: {
    init: function init() {
      this.load = true;
      var self = this;
      this.filterBuyAdByCategory();
      axios.post("/user/profile_info").then(function (response) {
        self.currentUser = response.data;
      });

      // axios
      //   .post("/get_related_buyAds_list_to_the_seller")
      //   .then(function (response) {
      //     self.allBuyAds = response.data.buyAds;
      //     self.buyAds = self.allBuyAds;

      //     self.load = false;
      //     setTimeout(function () {
      //       $(".list-notice button").tooltip();
      //     }, 100);
      //   });
    },
    getNumberWithCommas: function getNumberWithCommas(number) {
      if (number || typeof number === "number") return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");else return "";
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
          this.isConditionSatisfied = true;
        }
      }
    },
    doDownload: function doDownload() {
      //ga
      this.registerComponentStatistics("download", "app download btn", "download app btn in popUp");
      // code here
      this.createCookie("downloadAppModal", true, 60 * 24);
      window.location.href = "https://app-download.s3.ir-thr-at1.arvanstorage.com/buskool.apk";
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

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

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
                ]),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "green-button",
                    attrs: { href: "" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.doDownload()
                      }
                    }
                  },
                  [_vm._v("\n          دانلود اپلیکیشن")]
                )
              ])
            : _vm.buyAds.length != 0
              ? _c("div", [
                  _c(
                    "ul",
                    { staticClass: "list-unstyled wrapper-items" },
                    _vm._l(_vm.buyAds, function(buyAd, index) {
                      return _c(
                        "li",
                        {
                          key: index,
                          staticClass: "list-group-item col-xs-12"
                        },
                        [
                          _c(
                            "p",
                            { staticClass: "list-title col-sm-3 col-xs-12" },
                            [
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(buyAd.category_name)
                                }
                              }),
                              _vm._v(" "),
                              _c("span", [_vm._v("|")]),
                              _vm._v(" "),
                              _c("span", {
                                domProps: {
                                  textContent: _vm._s(buyAd.subcategory_name)
                                }
                              }),
                              _vm._v(" "),
                              buyAd.name
                                ? _c("span", {
                                    domProps: {
                                      textContent: _vm._s(" | " + buyAd.name)
                                    }
                                  })
                                : _vm._e()
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "needs col-sm-3 col-xs-12" }, [
                            _c("span", { staticClass: "static-content" }, [
                              _vm._v("میزان نیازمندی :")
                            ]),
                            _vm._v(" "),
                            _c("span", {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.getNumberWithCommas(
                                    buyAd.requirement_amount
                                  )
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "static-content" }, [
                              _vm._v("کیلوگرم")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", {
                            staticClass: "list-time col-sm-2 col-xs-12",
                            domProps: {
                              textContent: _vm._s(buyAd.register_date)
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "col-sm-3 col-xs-12 pull-left",
                              attrs: { href: "" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.openChat(buyAd, $event)
                                }
                              }
                            },
                            [
                              _vm._m(2, true),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "detail-success hide-reply",
                                  attrs: { id: "loader-" + buyAd.id }
                                },
                                [
                                  _vm._v(
                                    "\n                کمی صبر کنید...\n              "
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    })
                  )
                ])
              : _vm.buyAds.length === 0 && !_vm.load
                ? _c("div", { staticClass: "col-xs-12 wrapper-items" }, [
                    _vm._m(3)
                  ])
                : _vm.load
                  ? _c("div", { staticClass: "col-xs-12 wrapper-items" }, [
                      _c(
                        "ul",
                        { staticClass: "list-unstyled" },
                        _vm._l(5, function(item, index) {
                          return _c(
                            "li",
                            {
                              key: index,
                              staticClass: "list-group-item col-xs-12"
                            },
                            [
                              _vm._m(4, true),
                              _vm._v(" "),
                              _vm._m(5, true),
                              _vm._v(" "),
                              _vm._m(6, true),
                              _vm._v(" "),
                              _vm._m(7, true),
                              _vm._v(" "),
                              _vm._m(8, true)
                            ]
                          )
                        })
                      )
                    ])
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
    return _c("div", { staticClass: "title" }, [
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
        attrs: { src: __webpack_require__(414) }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "detail-success hover-effect" }, [
      _c("span", { staticClass: "fas fa-comment-alt" }),
      _vm._v(" پیام به خریدار\n              ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "wrapper_no_pro" }, [
      _c("div", { staticClass: "content_no_pic" }, [
        _c("i", { staticClass: "fa fa-list-alt" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text_no_pic" }, [
        _c("p", [_vm._v("در حال حاظر شما درخواستی ثبت نکرده اید")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "default-list-title pull-right col-sm-9 hidden-xs margin-10-0"
      },
      [
        _c("span", {
          staticClass: "placeholder-content content-full-width h-20"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "list-title col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm"
      },
      [
        _c("span", {
          staticClass: "placeholder-content content-half-width h-20 margin-auto"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "needs col-sm-4 col-xs-12 hidden-md hidden-lg hidden-sm" },
      [
        _c("span", {
          staticClass:
            "placeholder-content content-default-width h-20 margin-auto"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass:
          "list-time col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm"
      },
      [
        _c("span", {
          staticClass: "placeholder-content content-min-width h-20 margin-auto"
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "col-sm-3 col-xs-12" }, [
      _c("span", {
        staticClass:
          "placeholder-content default-button-full-with margin-10-auto"
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-568f1f20", module.exports)
  }
}

/***/ })

});