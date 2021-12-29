webpackJsonp([28],{

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_about_us_vue__ = __webpack_require__(437);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17cec479_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_us_vue__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(2);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(822)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17cec479"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_about_us_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17cec479_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_us_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17cec479_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_about_us_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\layouts\\main\\about_us.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17cec479", Component.options)
  } else {
    hotAPI.reload("data-v-17cec479", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_components_route__ = __webpack_require__(37);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { Route: __WEBPACK_IMPORTED_MODULE_1__router_components_route__["a" /* default */] },
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
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات غذایی و کشاورزی ایران | صادرات محصولات غذایی و کشاورزی"
      }, {
        name: "author",
        content: "باسکول"
      }, {
        property: "og:description",
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات غذایی و کشاورزی ایران | صادرات محصولات غذایی و کشاورزی"
      }, {
        property: "og:site_name",
        content: "باسکول بازارآنلاین خرید و فروش عمده محصولات غذایی و کشاورزی ایران"
      }, {
        property: "og:title",
        content: " باسکول | بازار خرید و فروش عمده محصولات غذایی و کشاورزی "
      }]
    };
  }
});

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(823);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("14bf48f6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-17cec479\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about_us.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-17cec479\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about_us.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\np[data-v-17cec479],\r\nspan[data-v-17cec479],\r\ndiv[data-v-17cec479],\r\nh3[data-v-17cec479] {\r\n  line-height: 1.618;\n}\n.green-button[data-v-17cec479] {\r\n  width: initial;\r\n  padding: 13px 15px;\r\n  font-size: 16px;\n}\n.about-us-icons[data-v-17cec479] {\r\n  margin: 7px auto 15px;\r\n  text-align: center;\n}\n.about-us-icon[data-v-17cec479] {\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  padding: 15px;\r\n  margin-bottom: 15px;\r\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\r\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n}\n.about-us-icons .row > div[data-v-17cec479] {\r\n  min-height: 310px;\r\n  float: right;\n}\n.about-us-icons p[data-v-17cec479] {\r\n  text-align: center;\n}\n.about-us-icons img[data-v-17cec479] {\r\n  max-width: 130px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 824:
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
                  "\n              با توجه به تحقیقات و مطالعات صورت گرفته در بازار و حضور در\n              نمایشگاه های داخلی و بین المللی حوزه محصولات غذایی و کشاورزی و\n              سابقه ی حضور در بازار صادرات ایران شاهد مشکلات عدیده‌ای از قبیل\n              : عدم دسترسی مناسب به محصولات با کیفیت، فقدان شبکه دسترسی برای\n              قیمت‌گذاری، وجود واسطه های بسیار زیاد و افزایش قیمت در تبع آن و\n              هدر رفت سرمایه بودیم. لذا برآن شدیم تا با ایجاد ساختاری تکنولوژی\n              محور در راستای حل و تسهیل این مشکلات گام برداریم.\n            "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n              از آنجا که ما خود بخش کوچکی از خانواده ی کشاورزی ایران هستیم،\n              عزم کامل خود را برای ریشه کن کردن مشکلات دسترسی تولید کنندگان و\n              خریداران محصولات غذایی و کشاورزی به یکدیگر جزم کرده ایم و تا\n              زمانی که این هدف محقق نشود دست از تلاش شبانه روزی خود بر نخواهیم\n              داشت.\n            "
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
                  "\n              سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل\n              support@buskool.com با ما در میان بگذارید.\n            "
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
          "\n                به راحتی فضای کاری خود را به دنیای دیجیتال گسترش دهید تا همه\n                با برند و نام شما آشنا شوند.\n              "
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
          "\n                عضوی از جامعه باسکول باشید، با اطلاع از بازار با قیمت و شرایط\n                بهتر محصول خود را به فروش برسانید.\n              "
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
          "\n                کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با آنها\n                به صورت مستقیم ارتباط برقرار کنید.\n              "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه\n                کنید.\n              "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله\n                کنید.\n              "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات بازار،\n                با قیمت و شرایط بهتر محصول خود را تهیه کنید.\n              "
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
              attrs: { src: __webpack_require__(825), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("با خریداران نام آشنا و معتبر معامله کنید.")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(826), alt: "" }
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
              attrs: { src: __webpack_require__(827), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                    عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات\n                    بازار، با قیمت و شرایط بهتر محصول خود را تهیه کنید.\n                  "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(828), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                    کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با\n                    آنها به صورت مستقیم ارتباط برقرار کنید.\n                  "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(829), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                    بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه\n                    کنید.\n                  "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
          _c("div", { staticClass: "about-us-icon" }, [
            _c("img", {
              attrs: { src: __webpack_require__(830), alt: "" }
            })
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\n                    سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها\n                    معامله کنید.\n                  "
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
    require("vue-hot-reload-api")      .rerender("data-v-17cec479", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "/images/1.jpg?c21ca6a1829ec41bf791128e3829ea37";

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "/images/2.jpg?832641b4678bd742f979c1802c470a17";

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "/images/3.jpg?78208d9afcd3083374ce932a871615b8";

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "/images/4.jpg?31c7ae8b6d2be98f0bd01d913fff258e";

/***/ }),

/***/ 829:
/***/ (function(module, exports) {

module.exports = "/images/5.jpg?73e68daa2078c2c73bb8630eb2d17ed0";

/***/ }),

/***/ 830:
/***/ (function(module, exports) {

module.exports = "/images/6.jpg?face96c695954d756af1eb5c4c12a24e";

/***/ })

});