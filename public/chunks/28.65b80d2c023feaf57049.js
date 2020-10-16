webpackJsonp([28],{

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(635)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(637)
/* template */
var __vue_template__ = __webpack_require__(638)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21cd6c4a"
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
Component.options.__file = "resources/assets/js/components/layouts/main/help.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21cd6c4a", Component.options)
  } else {
    hotAPI.reload("data-v-21cd6c4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(636);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("50be64ae", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21cd6c4a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./help.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21cd6c4a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./help.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-21cd6c4a] {\n    direction: rtl;\n    margin-bottom: 15px;\n}\np[data-v-21cd6c4a], span[data-v-21cd6c4a], div[data-v-21cd6c4a], h3[data-v-21cd6c4a]{\n    line-height: 1.618;\n}\nli[data-v-21cd6c4a] {\n    margin-bottom: 15px;\n}\n.panel[data-v-21cd6c4a] {\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);\n    margin-bottom: 30px;\n}\n.panel-title a[data-v-21cd6c4a] {\n    background: #ececec;\n}\n.desktop-image[data-v-21cd6c4a], .mobile-image[data-v-21cd6c4a] {\n    margin-bottom: 15px;\n}\n.mobile-image[data-v-21cd6c4a] {\n    max-width: 360px;\n    text-align: center;\n    margin: 0 auto;\n    display: none;\n}\n.main-green-button[data-v-21cd6c4a] {\n    max-width: 360px;\n    margin: 0 auto;\n    text-align:center;\n}\n.panel-heading[data-v-21cd6c4a], .panel-title[data-v-21cd6c4a] {\n    padding: 0;\n    margin: 0;\n}\n.panel-heading a[data-v-21cd6c4a] {\n    padding: 15px 20px;\n    display: block;\n    line-height: 1.618;\n}\n@media screen and (max-width: 768px) {\n.desktop-image[data-v-21cd6c4a] {\n        display: none;\n}\n.mobile-image[data-v-21cd6c4a] {\n        display: block;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_components_route__ = __webpack_require__(160);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    props: ['assets', 'isUserLogin', 'userType'],
    methods: {
        stopLoader: function stopLoader() {
            __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit('isLoading', false);
        }
    },
    mounted: function mounted() {
        var _this = this;

        var self = this;
        document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                self.$nextTick(_this.stopLoader());
            }
        };
    },
    updated: function updated() {
        this.$nextTick(this.stopLoader());
    },
    metaInfo: function metaInfo() {

        return {
            title: ' باسکول چگونه کار می کند؟ ',
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

/***/ 638:
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
        _c("h3", { staticClass: "text-right " }, [
          _vm._v("باسکول چگونه کار می کند؟")
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "panel-group",
            attrs: {
              id: "accordion",
              role: "tablist",
              "aria-multiselectable": "true"
            }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "collapseFour",
                    role: "tabpanel",
                    "aria-labelledby": "headingFour"
                  }
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("ul", [
                      _c(
                        "li",
                        [
                          _vm._v(
                            "\n                                    جهت ثبت نام دکمه ورود به باسکول یا\n                                    "
                          ),
                          _c(
                            "router-link",
                            {
                              attrs: { to: { name: "login" }, target: "_blank" }
                            },
                            [_vm._v("ورود/ثبت نام")]
                          ),
                          _vm._v(
                            "\n                                    کلیک کنید\n                                "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _vm._v("سپس در صفحه ورود روی دکمه ی "),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "register" },
                                target: "_blank"
                              }
                            },
                            [
                              _vm._v(
                                "ثبت نام در\n                                    باسکول"
                              )
                            ]
                          ),
                          _vm._v(
                            " کلیک\n                                    کنید.\n                                "
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/web/login.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/mobile/login.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("p", [
                          _vm._v(
                            "\n                                        در صفحه ی ثبت نام ابتدا شماره تلفن همراه خود را وارد کنید سپس دکمه ارسال کد\n                                        تایید را بزنید.\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/web/1.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/mobile/1.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("p", [
                          _vm._v(
                            "\n                                        کد چهار رقمی ارسال شده به تلفن همراه خود را وارد کنید.\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/web/2.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/mobile/2.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("p", [
                          _vm._v(
                            '\n                                        مشخصات فردی خود را وارد کرده و روی دکمه "مرحله بعد" کلیک کنید\n                                    '
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/web/3.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/mobile/3.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("p", [
                          _vm._v(
                            '\n                                        استان و شهر خود را انتخاب کرده و روی دکمه "مرحله بعد" کلیک کنید\n                                    '
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/web/4.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/mobile/4.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("p", [
                          _vm._v(
                            "\n                                        یک نام کاربری انگلیسی بدون فاصله برای خود انتخاب کرده و وارد کنید به عنوان\n                                        مثال: amiri243\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/web/5.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/mobile/5.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("p", [
                          _vm._v(
                            "\n                                        در مرحله ی پایانی نوع کاربری و حوزه فعالیت خود را وارد کرده و دکمه ی ثبت\n                                        نهایی را کلیک کنید\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/web/6.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/register/mobile/6.jpg"
                            }
                          })
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "collapseten",
                    role: "tabpanel",
                    "aria-labelledby": "headingten"
                  }
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("ul", [
                      _c("li", [
                        _vm._v(
                          "\n                                    تکمیل پروفایل تجاری کسب و کار شما باعث معرفی شما به دیگر خریداران و فروشندگان\n                                    شده و باعث ایجاد اعتماد در مشتریان و افزایش فروش شما خواهد شد.\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _vm._v(
                          "\n                                    برای تکمیل پروفایل خود ابتدا از نوار داشبورد کنار صفحه گزینه ویرایش پروفایل را\n                                    انتخاب کنید.\n                                "
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(5),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/edit-profile/web/1.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/edit-profile/mobile/1.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(6),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/edit-profile/web/2.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/edit-profile/mobile/2.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/edit-profile/mobile/3.jpg"
                            }
                          })
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _vm._m(7),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "collapseFive",
                    role: "tabpanel",
                    "aria-labelledby": "headingFive"
                  }
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("ul", [
                      _c("li", [
                        _c(
                          "p",
                          [
                            _vm._v("ابتدا وارد پنل کاربری خود شوید."),
                            _c(
                              "router-link",
                              { attrs: { to: { name: "login" } } },
                              [_vm._v("لینک ورود")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("p", [
                          _vm._v(
                            "\n\n                                        در سمت راست منوی داشبورد خود بر روی (ثبت محصول) کلیک کنید.\n\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n\n                                        سپس در وسط صفحه بر روی دکمه ی (ثبت محصول) کلیک کنید.\n\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/web/1.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/mobile/1.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            '\n\n                                        در مرحله اول دسته بندی و نوع محصول را وارد کرده و روی دکمه "مرحله بعد" کلیک\n                                        کنید.\n\n                                    '
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/web/2.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/mobile/2.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            '\n\n                                        در مرحله دوم میزان موجودی و قیمت محصول خود را وارد کنید و روی دکمه "مرحله\n                                        بعد" کلیک کنید.\n\n                                    '
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/web/3.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/mobile/3.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            '\n\n                                        در مرحله سوم مکان محصول خود را انتخاب کنید سپس روی دکمه "مرحله بعد" کلیک\n                                        کنید.\n\n                                    '
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/web/4.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/mobile/4.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            '\n\n                                        در مرحله چهارم تصاویر محصول خود را وارد کنید سپس روی دکمه "مرحله بعد" کلیک\n                                        کنید.\n\n                                    '
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/web/5.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/mobile/5.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            '\n\n                                        در مرحله آخر توضیحات مربوط به محصول خود مانند کیفیت، استاندارد، نوع بسته\n                                        بندی و ... را وارد کنید سپس روی دکمه "ثبت نهایی" کلیک کنید.\n\n                                    '
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/web/6.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/post-product/mobile/6.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _vm._v(
                            "\n                                    محصول شما پس از تایید ناظران باسکول در صفحه ی "
                          ),
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "productList" },
                                target: "_blank"
                              }
                            },
                            [
                              _vm._v(
                                "لیست\n                                    محصولات"
                              )
                            ]
                          ),
                          _vm._v(
                            "\n                                    نمایش داده می شود و خریداران می توانند درخواست های خرید خود را برای شما ارسال\n                                    کنند.\n                                "
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _vm._m(8),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "collapseSix",
                    role: "tabpanel",
                    "aria-labelledby": "headingSix"
                  }
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("ul", [
                      _c(
                        "li",
                        [
                          _vm._v(
                            "\n                                    ابتدا وارد پنل کاربری خود شوید. "
                          ),
                          _c(
                            "router-link",
                            { attrs: { to: { name: "login" } } },
                            [_vm._v("لینک ورود")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._m(9),
                      _vm._v(" "),
                      _c("li", [
                        _c("p", [
                          _vm._v(
                            "\n                                        شما می توانید در قسمت (ثبت درخواست خرید) در منوی داشبورد کنار صفحه، اطلاعات محصول مورد نیاز خود از قبیل نوع محصول، وزن، قیمت و ... را وارد کرده و درخواست خرید خود را ثبت کنید. این درخواست خرید شما برای تمامی فروشندگان محصول مورد نظرتان ارسال شده و شما می توانید بهترین محصول با بهترین قیمت را از میان فروشندگان بیابید.\n\n                                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            '\n\n                                        برای شروع روی دکمه "ثبت درخواست خرید" در وسط صفحه کلیک کنید\n\n                                    '
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets + "assets/img/help/buyad/web/1.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            '\n                                        در مرحله دوم نوع و میزان محصول مورد نیاز خود را وارد کنید و روی دکمه "ثبت درخواست" کلیک کنید.\n\n                                    '
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets + "assets/img/help/buyad/web/2.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/buyad/mobile/1.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/buyad/mobile/2.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/buyad/mobile/3.jpg"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(10)
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _vm._m(11),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "collapseEleven",
                    role: "tabpanel",
                    "aria-labelledby": "headingeleven"
                  }
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("ul", [
                      _vm._m(12),
                      _vm._v(" "),
                      _c("li", [
                        _c("div", { staticClass: "desktop-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/buy-ad-list/web/1.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/buy-ad-list/mobile/1.jpg"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mobile-image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                _vm.assets +
                                "assets/img/help/buy-ad-list/mobile/2.jpg"
                            }
                          })
                        ])
                      ])
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-default" }, [
              _vm._m(13),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "panel-collapse collapse",
                  attrs: {
                    id: "collapseEight",
                    role: "tabpanel",
                    "aria-labelledby": "headingEight"
                  }
                },
                [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("p", [
                      _vm._v(
                        "\n                                خریداران و فروشندگان عزیز می توانند از طریق پیام رسان تجاری باسکول در هر لحظه (بدون ایجاد مزاحمت در اثر تعداد زیاد تماس) با یکدیگر ارتباط برقرار کنند، به صورت روزانه استعلام قیمت بگیرند و در صورت صلاح دید نسبت به تبادل شماره ی تماس و برقراری تماس تلفنی اقدام کنند.\n                            "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "desktop-image" }, [
                      _c("img", {
                        attrs: {
                          src:
                            _vm.assets + "assets/img/help/messenger/web/1.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mobile-image" }, [
                      _c("img", {
                        attrs: {
                          src:
                            _vm.assets +
                            "assets/img/help/messenger/mobile/1.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mobile-image" }, [
                      _c("img", {
                        attrs: {
                          src:
                            _vm.assets +
                            "assets/img/help/messenger/mobile/2.jpg"
                        }
                      })
                    ])
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(14)
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "h1",
              { staticClass: " main-green-button" },
              [
                _vm.isUserLogin && _vm.userType == 0
                  ? _c(
                      "router-link",
                      {
                        staticClass: "green-button",
                        attrs: { to: { name: "productList" } }
                      },
                      [_vm._v("لیست محصولات")]
                    )
                  : _vm.isUserLogin && _vm.userType == 1
                    ? _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: { to: { name: "buyAdRequestsSeller" } }
                        },
                        [
                          _vm._v(
                            "\n                            لیست درخواست های خرید\n                        "
                          )
                        ]
                      )
                    : _c(
                        "router-link",
                        {
                          staticClass: "green-button",
                          attrs: { to: { name: "register" } }
                        },
                        [_vm._v("ثبت نام در باسکول")]
                      )
              ],
              1
            )
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
    return _c("div", { staticClass: "panel panel-default" }, [
      _c(
        "div",
        {
          staticClass: "panel-heading",
          attrs: { role: "tab", id: "headingFirst" }
        },
        [
          _c("h4", { staticClass: "panel-title" }, [
            _c(
              "a",
              {
                staticClass: "collapsed",
                attrs: {
                  "data-toggle": "collapse",
                  "data-parent": "#accordion",
                  href: "#collapseFirst",
                  "aria-expanded": "false",
                  "aria-controls": "collapseFirst"
                }
              },
              [
                _vm._v(
                  "\n                        باسکول چیست؟\n                    "
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "panel-collapse collapse",
          attrs: {
            id: "collapseFirst",
            role: "tabpanel",
            "aria-labelledby": "headingFirst"
          }
        },
        [
          _c("div", { staticClass: "panel-body" }, [
            _c("p", [
              _vm._v(
                "\n                                باسکول بازار خرید و فروش عمده محصولات کشاورزی است که خریداران را به فروشندگان دست\n                                اول محصولات کشاورزی متصل کرده و خریدار و فروشنده بدون واسطه می توانند با یکدیگر\n                                ارتباط بر قرار کنند.\n                            "
              )
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel panel-default" }, [
      _c(
        "div",
        {
          staticClass: "panel-heading",
          attrs: { role: "tab", id: "headingTwo" }
        },
        [
          _c("h4", { staticClass: "panel-title" }, [
            _c(
              "a",
              {
                staticClass: "collapsed",
                attrs: {
                  "data-toggle": "collapse",
                  "data-parent": "#accordion",
                  href: "#collapseTwo",
                  "aria-expanded": "false",
                  "aria-controls": "collapseTwo"
                }
              },
              [
                _vm._v(
                  "\n                        خدمات باسکول برای فروشندگان چیست؟\n                    "
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "panel-collapse collapse",
          attrs: {
            id: "collapseTwo",
            role: "tabpanel",
            "aria-labelledby": "headingTwo"
          }
        },
        [
          _c("div", { staticClass: "panel-body" }, [
            _c("p", [
              _vm._v(
                "\n                                اگر کشاورز، باغدار و تولید کننده محصولات کشاورزی هستید می توانید به عنوان فروشنده در\n                                بازار باسکول فعالیت کنید. پس از ثبت محصول خود و تکمیل پروفایل، به جدید ترین\n                                درخواست های خرید که توسط خریداران بر روی باسکول قرار گرفته است می توانید پاسخ\n                                دهید.\n                                "
              ),
              _c("br"),
              _vm._v(
                "\n                                از طریق باسکول با خریداران در سراسر کشور آشنا شده و محصولات خود را راحت تر و با\n                                قیمت مناسب تر به فروش برسانید.\n                            "
              )
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel panel-default" }, [
      _c(
        "div",
        {
          staticClass: "panel-heading",
          attrs: { role: "tab", id: "headingThree" }
        },
        [
          _c("h4", { staticClass: "panel-title" }, [
            _c(
              "a",
              {
                staticClass: "collapsed",
                attrs: {
                  "data-toggle": "collapse",
                  "data-parent": "#accordion",
                  href: "#collapseThree",
                  "aria-expanded": "false",
                  "aria-controls": "collapseThree"
                }
              },
              [
                _vm._v(
                  "\n                        خدمات باسکول برای خریداران چیست؟\n                    "
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "panel-collapse collapse",
          attrs: {
            id: "collapseThree",
            role: "tabpanel",
            "aria-labelledby": "headingThree"
          }
        },
        [
          _c("div", { staticClass: "panel-body" }, [
            _c("p", [
              _vm._v(
                "\n                                اگر صادر کننده، خریدار عمده و بنکدار هستید می توانید به عنوان خریدار در بازار\n                                باسکول فعالیت کنید. شما میتوانید از طریق لیست محصولات، کالای مورد نظر خود را جستجو\n                                کرده و از راه ارسال پیام همچنین استعلام قیمت با فروشندگان به صورت مستقیم و بدون\n                                واسطه ارتباط برقرار کنید.\n                                "
              ),
              _c("br"),
              _vm._v(
                "\n\n                                با ثبت درخواست خرید این درخواست برای تمامی فروشندگان کالای مورد نظر ارسال شده و شما\n                                می توانید بهترین قیمت را پیدا کنید.\n\n                            "
              )
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "panel-heading",
        attrs: { role: "tab", id: "headingFour" }
      },
      [
        _c("h4", { staticClass: "panel-title" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                "data-toggle": "collapse",
                "data-parent": "#accordion",
                href: "#collapseFour",
                "aria-expanded": "false",
                "aria-controls": "collapseFour"
              }
            },
            [
              _vm._v(
                "\n                        چگونه در سامانه باسکول ثبت نام کنم؟\n                    "
              )
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "panel-heading",
        attrs: { role: "tab", id: "headingten" }
      },
      [
        _c("h4", { staticClass: "panel-title" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                "data-toggle": "collapse",
                "data-parent": "#accordion",
                href: "#collapseten",
                "aria-expanded": "false",
                "aria-controls": "collapseten"
              }
            },
            [
              _vm._v(
                "\n                        چگونه پروفایل خود را کامل کنم؟\n                    "
              )
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _vm._v(
        "\n                                    در قسمت اول می توانید نوع کسب و کار خود را مشخص نمایید. اگر در قالب شرکت فعالیت\n                                    می کنید گزینه (حقوقی) و اگر در قالب شخصی فعالیت می کنید گزینه (حقیقی) را انتخاب\n                                    کنید. در این قسمت یک تصویر برای پروفایل خود بارگذاری کنید. پس از تکمیل اطلاعات\n                                    حتما بر روی گزینه ثبت تغییرات در پایین صفحه کلیک کنید.\n                                    "
      ),
      _c("br"),
      _vm._v(" "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _vm._v(
        "\n\n                                    در قسمت دوم ، می توانید توضیحات و تصاویر مربوط به کسب و کار خود و همچنین مجوز\n                                    ها، استاندارد ها و گواهینامه های کسب و کار خود را بار گذاری کنید. توجه کنید که\n                                    کامل کردن پروفایل تجاری باعث ایجاد اعتماد و افزایش تعداد مشتریان شما می شود. پس\n                                    از تکمیل اطلاعات حتما بر روی گزینه ثبت تغییرات در پایین صفحه کلیک کنید.\n\n\n                                    "
      ),
      _c("br"),
      _vm._v(" "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "panel-heading",
        attrs: { role: "tab", id: "headingFive" }
      },
      [
        _c("h4", { staticClass: "panel-title" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                "data-toggle": "collapse",
                "data-parent": "#accordion",
                href: "#collapseFive",
                "aria-expanded": "false",
                "aria-controls": "collapseFive"
              }
            },
            [
              _vm._v(
                "\n                        چگونه در باسکول محصول ثبت کنم؟ (فروشندگان)\n                    "
              )
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "panel-heading",
        attrs: { role: "tab", id: "headingSix" }
      },
      [
        _c("h4", { staticClass: "panel-title" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                "data-toggle": "collapse",
                "data-parent": "#accordion",
                href: "#collapseSix",
                "aria-expanded": "false",
                "aria-controls": "collapseSix"
              }
            },
            [
              _vm._v(
                "\n                                چگونه درخواست خرید خود را در باسکول ثبت کنم؟ (خریداران)\n                            "
              )
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", [
        _vm._v(
          "\n                                        در سمت راست پنل خود لینک ثبت درخواست جدید را کلیک کنید(پنل خریداران)\n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _vm._v(
        "\n                                    درخواست شما پس از تایید ناظران باسکول برای تامین کنندگان مربوطه ارسال می شود تا قیمت ، تصاویر و سایر جزییات محصولشان را برایتان ارسال کنند.\n                                    "
      ),
      _c("br"),
      _vm._v(
        "\n                                    برای مشاهده ی پاسخ فروشندگان به قسمت پیام ها مراجعه کنید.\n                                "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "panel-heading",
        attrs: { role: "tab", id: "headingeleven" }
      },
      [
        _c("h4", { staticClass: "panel-title" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                "data-toggle": "collapse",
                "data-parent": "#accordion",
                href: "#collapseEleven",
                "aria-expanded": "false",
                "aria-controls": "collapseEleven"
              }
            },
            [
              _vm._v(
                "\n                        چگونه درخواست های خرید را ببینیم؟ (فروشندگان)\n                    "
              )
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", [
        _vm._v(
          "\n                                        فروشندگان محترم می توانند در این قسمت درخواست های خریدی که از سوی خریداران اعلام شده است را ببینند و با خریداران ارتباط برقرار کنند. برای دیدن درخواست های خرید می توانید در منوی کنار صفحه به قسمت (درخواست های خرید) مراجعه کنید.\n\n                                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "panel-heading",
        attrs: { role: "tab", id: "headingEight" }
      },
      [
        _c("h4", { staticClass: "panel-title" }, [
          _c(
            "a",
            {
              staticClass: "collapsed",
              attrs: {
                "data-toggle": "collapse",
                "data-parent": "#accordion",
                href: "#collapseEight",
                "aria-expanded": "false",
                "aria-controls": "collapseEight"
              }
            },
            [
              _vm._v(
                "\n                        پیام رسان باسکول\n                    "
              )
            ]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel panel-default" }, [
      _c(
        "div",
        {
          staticClass: "panel-heading",
          attrs: { role: "tab", id: "headingSeven" }
        },
        [
          _c("h4", { staticClass: "panel-title" }, [
            _c(
              "a",
              {
                staticClass: "collapsed",
                attrs: {
                  "data-toggle": "collapse",
                  "data-parent": "#accordion",
                  href: "#collapseSeven",
                  "aria-expanded": "false",
                  "aria-controls": "collapseSeven"
                }
              },
              [
                _vm._v(
                  "\n                        آیا جهت عضویت در سامانه هزینه ای باید پرداخت شود؟\n                    "
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "panel-collapse collapse",
          attrs: {
            id: "collapseSeven",
            role: "tabpanel",
            "aria-labelledby": "headingSeven"
          }
        },
        [
          _c("div", { staticClass: "panel-body" }, [
            _c("p", [
              _vm._v(
                "\n                                شما با عضویت رایگان می توانید به صورت محدود از خدمات باسکول استفاده کنید. برای استفاده نامحدود از خدمات باسکول ( ثبت محصولات بیشتر، دیدن همه درخواست های خرید اولویت در نمایش و...) می توانید حساب کاربری خود را به عضویت ویژه ارتقا دهید و به عنوان کاربر ویژه در جمع خریداران و فروشندگان فعالیت کنید.\n                            "
              )
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21cd6c4a", module.exports)
  }
}

/***/ })

});