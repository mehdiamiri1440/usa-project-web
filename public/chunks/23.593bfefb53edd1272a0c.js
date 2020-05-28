webpackJsonp([23],{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(458)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(460)
/* template */
var __vue_template__ = __webpack_require__(461)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-429bf4ce"
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

module.exports = Component.exports


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(459);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7fa281cb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-429bf4ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about_us.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-429bf4ce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./about_us.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\np[data-v-429bf4ce], span[data-v-429bf4ce], div[data-v-429bf4ce], h3[data-v-429bf4ce]{\n    line-height: 1.618;\n}\n.green-button[data-v-429bf4ce] {\n    width: initial;\n    padding: 13px 15px;\n    font-size: 16px;\n}\n.about-us-icons[data-v-429bf4ce] {\n    margin: 7px auto 15px;\n    text-align: center;\n}\n.about-us-icon[data-v-429bf4ce] {\nbackground: \n#fff;\nborder-radius: 4px;\npadding: 15px;\nmargin-bottom: 15px;\n-webkit-box-shadow: 0 3px 6px\n    rgba(0,0,0,0.1);\n        box-shadow: 0 3px 6px\n    rgba(0,0,0,0.1);\n}\n.about-us-icons .row > div[data-v-429bf4ce] {\n    min-height: 310px;\n    float: right;\n}\n.about-us-icons p[data-v-429bf4ce] {\n    text-align: center;\n}\n.about-us-icons img[data-v-429bf4ce] {\n    max-width: 130px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_components_route__ = __webpack_require__(147);
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
//
//
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
    props: ['img_about_us_1', 'img_about_us_2', 'img_about_us_3', 'img_about_us_4', 'img_about_us_5', 'img_about_us_6'],
    methods: {
        stopLoader: function stopLoader() {
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit('isLoading', false);
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
        gtag('config', 'UA-129398000-1', { 'page_path': '/about-us' });
    },
    metaInfo: function metaInfo() {

        return {
            title: ' درباره ما ',
            titleTemplate: 'باسکول | %s',
            meta: [{
                name: 'description',
                content: 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
            }, {
                name: 'author',
                content: 'باسکول'
            }, {
                'property': 'og:description',
                'content': 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
            }, {
                'property': 'og:site_name',
                'content': 'باسکول بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران'
            }, {
                'property': 'og:title',
                'content': ' باسکول | بازار خرید و فروش عمده محصولات کشاورزی '
            }]

        };
    }
});

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

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
          _c("div", { staticClass: "  col-md-12 col-sm-12" }, [
            _c("h3", { staticClass: "text-right" }, [_vm._v("درباره ما")]),
            _vm._v(" "),
            _c("div", { staticClass: "  col-md-12 col-sm-12" }, [
              _c("p", { staticClass: "text-right" }, [
                _vm._v(
                  "با توجه به تحقیقات و مطالعات صورت گرفته در بازار و حضور در نمایشگاه\n                            های داخلی و بین المللی حوزه محصولات کشاورزی و سابقه ی حضور در بازار صادرات ایران شاهد\n                            مشکلات عدیده‌ای از قبیل : عدم دسترسی مناسب به محصولات با کیفیت، فقدان شبکه دسترسی برای\n                            قیمت‌گذاری، وجود واسطه های بسیار زیاد و افزایش قیمت در تبع آن و هدر رفت سرمایه بودیم.\n                            لذا برآن شدیم تا با ایجاد ساختاری تکنولوژی محور در راستای حل و تسهیل این مشکلات گام\n                            برداریم.\n                        "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                            از آنجا که ما خود بخش کوچکی از خانواده ی کشاورزی ایران هستیم، عزم کامل خود را برای ریشه\n                            کن کردن مشکلات دسترسی تولید کنندگان و خریداران محصولات خام کشاورزی به یکدیگر جزم کرده\n                            ایم و تا زمانی که این هدف محقق نشود دست از تلاش شبانه روزی خود بر نخواهیم داشت.\n                        "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", { staticClass: "text-right" }, [
                _vm._v(
                  "\n                            ما به دلیل مشکلات امنیتی ایجاد شده به علت نمایش شماره تماس افراد و همچنین نقض حریم خصوصی\n                            افراد، از نمایش این اطلاعات اجتناب کرده ایم. لذا افراد میتوانند از طریق پیام رسان\n                            باسکول در صورت تمایل اطلاعات تماس خود را ردوبدل کنند.\n                        "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h3", { staticClass: "text-right" }, [
                _vm._v(
                  "\n                            ارزش های باسکول برای فروشندگان\n                        "
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h3", { staticClass: "text-right" }, [
                _vm._v(
                  "\n                            ارزش های باسکول برای خریداران\n                        "
                )
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
                    [
                      _vm._v(
                        " هم اکنون عضو جامعه باسکول شوید\n                            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("p"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "container about-us-icons" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3 " }, [
                    _c("div", { staticClass: "about-us-icon" }, [
                      _c("img", { attrs: { src: _vm.img_about_us_1, alt: "" } })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v("با خریداران نام آشنا و معتبر معامله کنید. ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
                    _c("div", { staticClass: "about-us-icon" }, [
                      _c("img", { attrs: { src: _vm.img_about_us_2, alt: "" } })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "محصولات خود را به خریداران در سراسر ایران معرفی کنید. "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
                    _c("div", { staticClass: "about-us-icon" }, [
                      _c("img", { attrs: { src: _vm.img_about_us_3, alt: "" } })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        " عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات بازار، با قیمت و\n                                        شرایط بهتر محصول خود را تهیه کنید.\n\n                                    "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
                    _c("div", { staticClass: "about-us-icon" }, [
                      _c("img", { attrs: { src: _vm.img_about_us_4, alt: "" } })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        " کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با آنها به صورت\n                                        مستقیم ارتباط برقرار کنید. "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
                    _c("div", { staticClass: "about-us-icon" }, [
                      _c("img", { attrs: { src: _vm.img_about_us_5, alt: "" } })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه کنید. "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-6 col-sm-4 col-md-3" }, [
                    _c("div", { staticClass: "about-us-icon" }, [
                      _c("img", { attrs: { src: _vm.img_about_us_6, alt: "" } })
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید. "
                      )
                    ])
                  ])
                ])
              ]),
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
                    [
                      _vm._v(
                        " باسکول چگونه کار میکند؟\n                            "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "text-right" }, [
                _vm._v(
                  "\n                            سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل support@buskool.com با ما در میان\n                            بگذارید.\n                        "
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
          " به راحتی فضای کاری خود را به دنیای دیجیتال گسترش دهید تا همه با برند و نام شما آشنا\n                                شوند.\n                            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                                با خریداران نام آشنا و معتبر معامله کنید.\n                            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                                محصولات خود را به خریداران در سراسر ایران معرفی کنید.\n                            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                                عضوی از جامعه باسکول باشید، با اطلاع از بازار با قیمت و شرایط بهتر محصول خود را به\n                                فروش برسانید.\n                            "
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
          "\n                                کالای مورد نظر خود را از میان فروشندگان مختلف بیابید و با آنها به صورت مستقیم ارتباط\n                                برقرار کنید.\n                            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                                بهترین قیمت و کیفیت را از فروشندگان مختلف دریافت و مقایسه کنید.\n                            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                                سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید.\n                            "
        )
      ]),
      _vm._v(" "),
      _c("li", [
        _vm._v(
          "\n                                عضوی از جامعه باسکول باشید، با اطلاع از آخرین تغییرات بازار، با قیمت و شرایط بهتر\n                                محصول خود را تهیه کنید.\n                            "
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-429bf4ce", module.exports)
  }
}

/***/ })

});