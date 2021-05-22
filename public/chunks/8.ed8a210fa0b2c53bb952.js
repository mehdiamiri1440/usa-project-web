webpackJsonp([8],{

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(772)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(774)
/* template */
var __vue_template__ = __webpack_require__(834)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-309343af"
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
Component.options.__file = "resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-309343af", Component.options)
  } else {
    hotAPI.reload("data-v-309343af", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(773);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5388e212", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-309343af\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product-view.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-309343af\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product-view.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\ndiv[data-v-309343af],\np[data-v-309343af],\nspan[data-v-309343af] {\n  line-height: 1.5em;\n}\n#main[data-v-309343af] {\n  padding-top: 160px;\n}\n.main-content > h4[data-v-309343af] {\n  margin: 30px auto;\n}\n.buttons-wrapper[data-v-309343af] {\n  margin: 15px auto;\n  text-align: center;\n}\n.buttons-wrapper .green-button[data-v-309343af] {\n  width: initial;\n  font-size: 16px;\n  padding: 8px 20px;\n  border-radius: 8px;\n}\n.box-content[data-v-309343af] {\n  overflow: hidden;\n  background: #fff;\n  padding: 0;\n  text-align: center;\n  padding-bottom: 10px;\n  border-radius: 12px;\n  border: 1px solid #e0e0e0;\n}\n.title-box[data-v-309343af] {\n  text-align: center;\n}\n.title-box h3[data-v-309343af] {\n  font-size: 17px;\n  font-weight: bold;\n  color: #4b4b4b;\n  margin-bottom: 12px;\n}\n.title-box a[data-v-309343af] {\n  margin: 20px auto 10px;\n\n  width: inherit;\n\n  font-size: 14px;\n\n  font-weight: bold;\n\n  padding: 9px 22px 6px;\n}\n.box-title[data-v-309343af] {\n  font-size: 18px;\n  color: #313a43;\n  direction: rtl;\n  margin: 30px 0 15px;\n}\n.box-title-placeholder[data-v-309343af] {\n  margin: 30px 0 15px;\n}\n.box-title[data-v-309343af]::after {\n  content: \" \";\n  width: 100px;\n  height: 4px;\n  background: #00c569;\n  display: block;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.section-wrapper[data-v-309343af] {\n  margin-top: 30px;\n}\n.section-wrapper .title-box[data-v-309343af] {\n  text-align: center;\n\n  margin-top: 35px;\n}\n.fix-send-message-wrapper[data-v-309343af] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  padding: 5px;\n  -webkit-box-shadow: 0 -6px 15px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 -6px 15px rgba(0, 0, 0, 0.16);\n  background: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.fix-send-message-wrapper button[data-v-309343af] {\n  width: 100%;\n  border-radius: 6px;\n  margin: 0;\n  font-size: 18px;\n  padding: 10px 15px;\n}\n.fix-send-message-wrapper button.disable[data-v-309343af] {\n  background: #e0e0e0;\n}\nbutton.send-message-button[data-v-309343af] {\n  background: none;\n  border-radius: 8px;\n  border: 1px solid #404b55;\n  color: #404b55;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  margin-right: 10px;\n}\n.send-message-button[data-v-309343af]:hover {\n  background: none;\n  border-radius: 8px;\n  border: 1px solid #404b55;\n  background: #404b55;\n  color: #fff;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n\n/* \n---------------------------------------------------------------------------------\n\n modal styles\n*/\n.modal-content[data-v-309343af] {\n  overflow: hidden;\n  border-radius: 12px;\n}\n.close-modal[data-v-309343af] {\n  font-size: 20px;\n\n  color: #777;\n\n  position: absolute;\n\n  right: 0;\n\n  padding: 8px 15px 2px;\n\n  top: 0;\n}\n.modal-title[data-v-309343af] {\n  font-size: 16px;\n\n  font-weight: 800;\n\n  color: #474747;\n\n  text-align: center;\n}\n.modal-header[data-v-309343af] {\n  padding: 9px 15px 10px;\n}\n.modal-body[data-v-309343af] {\n  padding: 0 15px;\n}\n@media screen and (max-width: 1199px) {\n.box-title[data-v-309343af] {\n    margin: 0 auto 15px;\n}\n.default-carousel-item[data-v-309343af]:last-of-type {\n    display: none;\n}\n}\n@media screen and (max-width: 991px) {\n.default-carousel-item[data-v-309343af]:nth-child(3) {\n    display: none;\n}\n}\n@media screen and (max-width: 767px) {\n#main[data-v-309343af] {\n    padding-top: 96px;\n}\n}\n@media screen and (max-width: 450px) {\n.default-carousel-item[data-v-309343af] {\n    display: none;\n}\n.default-carousel-item[data-v-309343af]:first-of-type {\n    display: block;\n    width: 100%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 774:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (568:4)\n\n\u001b[0m \u001b[90m 566 | \u001b[39m        }\n \u001b[90m 567 | \u001b[39m      }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 568 | \u001b[39m    }\u001b[33m,\u001b[39m\n \u001b[90m     | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 569 | \u001b[39m    openChatModal\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m (product) {\n \u001b[90m 570 | \u001b[39m      \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39misChat \u001b[33m=\u001b[39m \u001b[36mtrue\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 571 | \u001b[39m      \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mregisterComponentStatistics(\u001b[0m\n");

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      !_vm.currentUser.user_info
        ? _c("RegisterModal", { attrs: { "is-chat": _vm.isChat } })
        : _vm._e(),
      _vm._v(" "),
      _c("main", { staticClass: "row", attrs: { id: "main" } }, [
        _c("div", { staticClass: "col-xs-12 col-lg-9 pull-right" }, [
          _c("section", { staticClass: "main-content" }, [
            _c("div", { staticClass: "row" }, [_c("ProductContents")], 1)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-lg-3 pull-left" }, [
          _c("div", { staticClass: "row" }, [_c("UserInfo")], 1)
        ]),
        _vm._v(" "),
        _vm.relatedProducts.length > 0 && _vm.isLoading == false
          ? _c(
              "section",
              {
                staticClass: "section-wrapper container-fluid latest-product",
                attrs: { id: "product-section" }
              },
              [
                _c("div", { staticClass: "col-xs-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("h3", { staticClass: "box-title" }, [
                      _vm._v("محصولات مرتبط")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "products-contents" }, [
                      _c(
                        "div",
                        { staticClass: "owl-carousel" },
                        _vm._l(_vm.relatedProducts, function(product, index) {
                          return _c("ProductCarousel", {
                            key: index,
                            attrs: {
                              img: _vm.str + "/thumbnails/" + product.photo,
                              title: product.product_name,
                              stock: _vm.getConvertedNumbers(product.stock),
                              link: _vm.getRelatedProductUrl(product),
                              column: "4"
                            }
                          })
                        })
                      )
                    ])
                  ])
                ])
              ]
            )
          : _vm.relatedProducts.length == 0 && _vm.isLoading == true
            ? _c(
                "section",
                { staticClass: "section-wrapper container-fluid" },
                [
                  _c("div", { staticClass: "container" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-xs-12" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-xs-12 products-contents" },
                          [
                            _c(
                              "div",
                              { staticClass: "row" },
                              _vm._l(4, function(item, index) {
                                return _c(
                                  "div",
                                  {
                                    key: index,
                                    staticClass:
                                      "col-lg-3 col-md-4 col-xs-6 default-carousel-item",
                                    class: { "hidden-xs": index >= 2 }
                                  },
                                  [_vm._m(1, true)]
                                )
                              })
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ]
              )
            : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "buttons-wrapper col-xs-12" },
          [
            _c(
              "router-link",
              {
                staticClass: "green-button blue-button",
                attrs: { to: { path: this.categoryUrl } }
              },
              [_vm._v("مشاهده همه محصولات")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm.product.main.product_name && !_vm.isMyProfile
          ? _c(
              "div",
              { staticClass: "fix-send-message-wrapper hidden-lg hidden-md" },
              [
                !_vm.isMyProfile && _vm.currentUser.user_info
                  ? _c(
                      "button",
                      {
                        class: {
                          "send-message-button":
                            _vm.product.user_info.has_phone &&
                            _vm.currentUser.user_info.is_buyer,
                          "green-button":
                            !_vm.product.user_info.has_phone ||
                            (_vm.product.user_info.has_phone &&
                              _vm.currentUser.user_info.is_seller)
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.openChat(_vm.product)
                          }
                        }
                      },
                      [
                        _vm.product.user_info.has_phone &&
                        _vm.currentUser.user_info.is_buyer
                          ? _c("span", [_vm._v("\n          چت\n        ")])
                          : _c("span", [_vm._v(" چت با فروشنده ")]),
                        _vm._v(" "),
                        _c("i", { staticClass: "fas fa-comment-alt" })
                      ]
                    )
                  : !_vm.currentUser.user_info
                    ? _c(
                        "button",
                        {
                          class: {
                            "send-message-button":
                              _vm.product.user_info.has_phone,
                            "green-button": !_vm.product.user_info.has_phone
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.loginModal(true)
                            }
                          }
                        },
                        [
                          _vm.product.user_info.has_phone
                            ? _c("span", [_vm._v(" چت ")])
                            : _c("span", [_vm._v(" چت با فروشنده ")]),
                          _vm._v(" "),
                          _c("i", { staticClass: "fas fa-comment-alt" })
                        ]
                      )
                    : _vm._e(),
                _vm._v(" "),
                !_vm.isMyProfile &&
                _vm.currentUser.user_info &&
                _vm.product.user_info.has_phone &&
                _vm.currentUser.user_info.is_buyer
                  ? _c(
                      "button",
                      {
                        staticClass: "green-button",
                        class: { disable: _vm.isActivePhone },
                        attrs: { disabled: _vm.isActivePhone },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.activePhoneCall(true)
                          }
                        }
                      },
                      [
                        _vm._v("\n        اطلاعات تماس\n        "),
                        !_vm.getPhoneLoader
                          ? _c("i", { staticClass: "fas fa-phone-square-alt" })
                          : _c("div", { staticClass: "spinner-border" }, [
                              _c("span", { staticClass: "sr-only" })
                            ])
                      ]
                    )
                  : !_vm.currentUser.user_info &&
                    _vm.product.user_info.has_phone
                    ? _c(
                        "button",
                        {
                          staticClass: "green-button",
                          class: { disable: _vm.isActivePhone },
                          attrs: { disabled: _vm.isActivePhone },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.loginModal(false)
                            }
                          }
                        },
                        [
                          _vm._v("\n        اطلاعات تماس\n        "),
                          !_vm.getPhoneLoader
                            ? _c("i", {
                                staticClass: "fas fa-phone-square-alt"
                              })
                            : _c("div", { staticClass: "spinner-border" }, [
                                _c("span", { staticClass: "sr-only" })
                              ])
                        ]
                      )
                    : _vm._e()
              ]
            )
          : !_vm.product.main.product_name && !_vm.isMyProfile
            ? _c(
                "div",
                {
                  staticClass:
                    "fix-send-message-wrapper hidden-lg hidden-md hidden-sm"
                },
                [
                  _c("div", {
                    staticClass: "content-full-width h-40 placeholder-content"
                  })
                ]
              )
            : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-title-placeholder col-xs-12" }, [
      _c("span", { staticClass: "placeholder-content content-full-width" }),
      _vm._v(" "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "article",
      { staticClass: "carousel-item box-content col-xs-12" },
      [
        _c("span", {
          staticClass:
            "default-index-product-image placeholder-content col-xs-12"
        }),
        _vm._v(" "),
        _c("span", {
          staticClass:
            "content-default-width placeholder-content margin-10 col-xs-10 col-xs-offset-1"
        }),
        _vm._v(" "),
        _c("span", {
          staticClass:
            "content-default-width placeholder-content col-xs-8 col-xs-offset-2"
        }),
        _vm._v(" "),
        _c("span", { staticClass: "margin-10" })
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-309343af", module.exports)
  }
}

/***/ })

});