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
exports.push([module.i, "\n/* .requests .main-content {\n  padding-top: 50px;\n} */\n.wrapper_no_pro[data-v-568f1f20] {\n  text-align: center;\n  font-size: 23px;\n  padding: 15px 0;\n}\n.content_no_pic[data-v-568f1f20] {\n  font-size: 70px;\n  margin: 20px auto;\n  color: #bdbdbd;\n}\n.text_no_pic[data-v-568f1f20] {\n  margin: 30px auto;\n  color: #bdbdbd;\n}\n.list-title[data-v-568f1f20],\n.needs[data-v-568f1f20],\n.list-time[data-v-568f1f20],\n.list-notice[data-v-568f1f20] {\n  float: right;\n  text-align: center;\n  line-height: 1.618;\n  font-weight: bold;\n  padding: 5px;\n}\n.list-group-item[data-v-568f1f20] {\n  border: 1px solid #ddd;\n  padding: 11px 0;\n}\n.list-group-item[data-v-568f1f20]:nth-last-of-type(2n + 1) {\n  background: #fdfdfd !important;\n}\n.detail-success[data-v-568f1f20] {\n  padding: 8px 0;\n  width: 100%;\n  background: #00c569;\n  color: #fff;\n  text-align: center;\n  border-radius: 5px;\n  font-size: 13px;\n  font-weight: bold;\n}\n.main-content > ul[data-v-568f1f20] {\n  border-radius: 3px;\n  -webkit-box-shadow: 0 0 10px #e1e1e1;\n          box-shadow: 0 0 10px #e1e1e1;\n  overflow: hidden;\n}\n.main-content .list-group-item p[data-v-568f1f20] {\n  text-align: center;\n  direction: rtl;\n}\n#main.little-main[data-v-568f1f20] {\n  margin-right: 80px;\n}\n.message-list[data-v-568f1f20] {\n  padding: 19px;\n  text-align: center;\n  background: #eff3f6;\n  line-height: 1.618;\n}\n.text-red[data-v-568f1f20] {\n  color: #e41c38;\n}\n.request-detail .green-button[data-v-568f1f20] {\n  font-size: 16px;\n  padding: 8px 30px;\n}\n.title[data-v-568f1f20] {\n  background: #f6f6f6;\n  position: fixed;\n  right: 250px;\n  left: 0;\n  z-index: 1;\n  border-radius: 0;\n  padding: 13px 15px;\n}\n.placeholder-title h1[data-v-568f1f20],\n.title h1[data-v-568f1f20] {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 1.9;\n}\n.fix-request-header-box[data-v-568f1f20] {\n  background: #eff3f6;\n  position: fixed;\n  right: 250px;\n  left: 0;\n  z-index: 2;\n  border-radius: 0;\n  padding: 10px 0;\n}\n.fix-request-bottom[data-v-568f1f20] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  background: #fff;\n  border-radius: 0;\n  padding: 10px 0;\n}\n.request-update button[data-v-568f1f20] {\n  margin: 0;\n  padding: 3px 14px;\n  margin-right: 6px;\n}\n#main.little-main .fix-request-header-box[data-v-568f1f20],\n#main.little-main .title[data-v-568f1f20] {\n  right: 80px;\n}\n.buyAds-wrapper[data-v-568f1f20] {\n  padding-top: 60px;\n  max-width: 992px;\n  margin: 0 auto;\n}\n.delete-button[data-v-568f1f20] {\n  font-size: 18px;\n  text-align: center;\n  padding: 15px;\n  background: none;\n  border: none;\n}\n.item-wrapper[data-v-568f1f20] {\n  border-radius: 7px;\n  border-top: 5px solid #556080;\n  min-height: 150px;\n  direction: rtl;\n  margin-bottom: 30px;\n  text-align: center;\n}\ntable[data-v-568f1f20] {\n  width: 100%;\n}\ntd[data-v-568f1f20] {\n  padding: 15px;\n}\ntr[data-v-568f1f20]:nth-child(even) {\n  background-color: #f6fbff;\n}\n.remove-filter-button[data-v-568f1f20] {\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #e41c39;\n  color: #777;\n  margin: 0;\n  padding: 2px 15px;\n  margin-right: 10px;\n}\n.remove-filter-icon[data-v-568f1f20] {\n  position: relative;\n  top: 2px;\n  right: -6px;\n}\n.android-wrapper[data-v-568f1f20] {\n  padding: 100px 15px;\n  text-align: center;\n  background: #fff;\n  direction: rtl;\n}\n.android-wrapper p[data-v-568f1f20] {\n  font-size: 15px;\n  font-weight: bold;\n  color: #333;\n  line-height: 1.618;\n}\n.android-wrapper p.section-contents[data-v-568f1f20] {\n  color: #e51c38;\n}\n.android-wrapper .section-image[data-v-568f1f20] {\n  max-width: 190px;\n  margin: 15px auto;\n  padding-left: 25px;\n}\n.android-wrapper a[data-v-568f1f20] {\n  padding: 12px 50px;\n  font-size: 16px;\n}\n@media screen and (max-width: 991px) {\n.fix-request-header-box[data-v-568f1f20],\n  .title[data-v-568f1f20] {\n    right: 0;\n}\n.default-list-title[data-v-568f1f20] {\n    padding: 4px 15px;\n}\n}\n@media screen and (max-width: 767px) {\n.item-wrapper[data-v-568f1f20] {\n    padding: 10px;\n}\n.requests .main-content[data-v-568f1f20] {\n    padding: 0 0 100px !important;\n}\n.title[data-v-568f1f20] {\n    position: relative;\n}\n.title h1[data-v-568f1f20] {\n    text-align: center;\n}\n}\n", ""]);

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
          this.isConditionSatisfied = false;
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
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "buyAds-wrapper" },
            _vm._l(5, function(buyAd, index) {
              return _c(
                "div",
                { key: index, staticClass: "col-xs-12 col-md-6 pull-right" },
                [_vm._m(2, true)]
              )
            })
          )
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
    return _c(
      "article",
      { staticClass: "item-wrapper shadow-content bg-white" },
      [
        _c("div", { staticClass: "table-wrapper" }, [
          _c("table", [
            _c("tr", [
              _c("td", [_vm._v("دسته بندی")]),
              _vm._v(" "),
              _c("td", [_vm._v("خرما")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("نوع محصول")]),
              _vm._v(" "),
              _c("td", [_vm._v("مضافتی")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("زمان ثبت")]),
              _vm._v(" "),
              _c("td", [_vm._v("۲۵ اردیبهشت، ۱۳۹۹")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("تعداد پاسخ های دریافتی")]),
              _vm._v(" "),
              _c("td", [_vm._v("۲۰")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("وضعیت")]),
              _vm._v(" "),
              _c("td", [_vm._v("بد نیست")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "red-text delete-button" }, [
          _c("i", { staticClass: "fa fa-trash" }),
          _vm._v("\n              حذف این درخواست\n            ")
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
    require("vue-hot-reload-api")      .rerender("data-v-568f1f20", module.exports)
  }
}

/***/ })

});