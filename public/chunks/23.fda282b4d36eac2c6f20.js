webpackJsonp([23],{

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_about_us_vue__ = __webpack_require__(551);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_429bf4ce_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_us_vue__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(5);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(835)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-429bf4ce"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_about_us_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_429bf4ce_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_us_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_429bf4ce_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_us_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/layouts/main/about_us.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-429bf4ce", Component.options)
  } else {
    hotAPI.reload("data-v-429bf4ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_components_route__ = __webpack_require__(170);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Route: __WEBPACK_IMPORTED_MODULE_1__router_components_route__["default"] },
  methods: {
    stopLoader: function stopLoader() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("isLoading", false);
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
    gtag("config", "UA-129398000-1", { page_path: "/about-us" });
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

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(836);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(4).default
var update = add("c66a44ae", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-429bf4ce\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about_us.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-429bf4ce\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about_us.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-429bf4ce],\nspan[data-v-429bf4ce],\ndiv[data-v-429bf4ce],\nh3[data-v-429bf4ce] {\n  line-height: 1.618;\n}\n.green-button[data-v-429bf4ce] {\n  width: initial;\n  padding: 13px 15px;\n  font-size: 16px;\n}\n.about-us-icons[data-v-429bf4ce] {\n  margin: 7px auto 15px;\n  text-align: center;\n}\n.about-us-icon[data-v-429bf4ce] {\n  background: #fff;\n  border-radius: 4px;\n  padding: 15px;\n  margin-bottom: 15px;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n}\n.about-us-icons .row > div[data-v-429bf4ce] {\n  min-height: 310px;\n  float: right;\n}\n.about-us-icons p[data-v-429bf4ce] {\n  text-align: center;\n}\n.about-us-icons img[data-v-429bf4ce] {\n  max-width: 130px;\n}\n", ""]);

// exports


/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-content-index-pages" }, [
    _c("section", { staticClass: "parallax-section policy" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12 col-sm-12" }, [
            _c("h3", { staticClass: "text-right" }, [_vm._v("درباره ما")]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12 col-sm-12" }, [
              _c("p", { staticClass: "text-right" }, [
                _vm._v(
                  "\n              با توجه به تحقیقات و مطالعات صورت گرفته در بازار و حضور در نمایشگاه\n              های داخلی و بین المللی حوزه محصولات کشاورزی و سابقه ی حضور در بازار صادرات ایران شاهد\n              مشکلات عدیده‌ای از قبیل : عدم دسترسی مناسب به محصولات با کیفیت، فقدان شبکه دسترسی برای\n              قیمت‌گذاری، وجود واسطه های بسیار زیاد و افزایش قیمت در تبع آن و هدر رفت سرمایه بودیم.\n              لذا برآن شدیم تا با ایجاد ساختاری تکنولوژی محور در راستای حل و تسهیل این مشکلات گام\n              برداریم.\n            "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n              از آنجا که ما خود بخش کوچکی از خانواده ی کشاورزی ایران هستیم، عزم کامل خود را برای ریشه\n              کن کردن مشکلات دسترسی تولید کنندگان و خریداران محصولات کشاورزی به یکدیگر جزم کرده\n              ایم و تا زمانی که این هدف محقق نشود دست از تلاش شبانه روزی خود بر نخواهیم داشت.\n            "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h3", { staticClass: "text-right" }, [
                _vm._v("ارزش های باسکول برای فروشندگان")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h3", { staticClass: "text-right" }, [
                _vm._v("ارزش های باسکول برای خریداران")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "text-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "green-button",
                      attrs: { to: { name: "register" } }
                    },
                    [_vm._v("هم اکنون عضو جامعه باسکول شوید")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("p"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "text-center" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "green-button",
                      attrs: { to: { name: "help" } }
                    },
                    [_vm._v("باسکول چگونه کار میکند؟")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "text-right" }, [
                _vm._v(
                  "\n              سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل support@buskool.com با ما در میان\n              بگذارید.\n            "
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "text-right" }, [
      _c("li", [
        _vm._v(
          "\n                به راحتی فضای کاری خود را به دنیای دیجیتال گسترش دهید تا همه با برند و نام شما آشنا\n                شوند.\n              "
        )
      ]),
      _vm._v(" "),
      _c("li", [_vm._v("با خریداران نام آشنا و معتبر معامله کنید.")]),
      _vm._v(" "),
      _c("li", [
        _vm._v("محصولات خود را به خریداران در سراسر ایران معرفی کنید.")
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                عضوی از جامعه باسکول باشید، با اطلاع از بازار با قیمت و شرایط بهتر محصول خود را به\n                فروش برسانید.\n              "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "text-right" }, [
      _c("li", [
        _vm._v(
          "\n                کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با آنها به صورت مستقیم ارتباط\n                برقرار کنید.\n              "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه کنید."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید."
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات بازار، با قیمت و شرایط بهتر\n                محصول خود را تهیه کنید.\n              "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container about-us-icons" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(838), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("با خریداران نام آشنا و معتبر معامله کنید.")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(839), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("محصولات خود را به خریداران در سراسر ایران معرفی کنید.")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(840), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                    عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات بازار، با قیمت و\n                    شرایط بهتر محصول خود را تهیه کنید.\n                  "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(841), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                    کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با آنها به صورت\n                    مستقیم ارتباط برقرار کنید.\n                  "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(842), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه کنید."
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(843), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید."
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-429bf4ce", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "/images/1.jpg?11338aaffecef244c10d879a36bcc811";

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = "/images/2.jpg?711f7e889c4f4033366320dda7b9e485";

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "/images/3.jpg?f139e179c6150176218ff88701fad09c";

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "/images/4.jpg?31c7ae8b6d2be98f0bd01d913fff258e";

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "/images/5.jpg?4bcfa0de5a2f17c7619c36342c094576";

/***/ }),

/***/ 843:
/***/ (function(module, exports) {

module.exports = "/images/6.jpg?face96c695954d756af1eb5c4c12a24e";

/***/ })

});