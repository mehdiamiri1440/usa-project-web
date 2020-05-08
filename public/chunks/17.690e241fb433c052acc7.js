webpackJsonp([17],{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(560)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(562)
/* template */
var __vue_template__ = __webpack_require__(563)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-713402f9"
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
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/register-inquiry.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-713402f9", Component.options)
  } else {
    hotAPI.reload("data-v-713402f9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(314)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(316)
/* template */
var __vue_template__ = __webpack_require__(317)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e6d04c8"
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
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/register-inquiry-form.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e6d04c8", Component.options)
  } else {
    hotAPI.reload("data-v-0e6d04c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(315);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("6a7fc228", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e6d04c8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register-inquiry-form.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e6d04c8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register-inquiry-form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\ninput[data-v-0e6d04c8] {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\nlabel[data-v-0e6d04c8] {\n  margin: 0 auto 9px auto;\n}\n.section-wrapper[data-v-0e6d04c8] {\n  margin: 30px auto;\n}\n.submit-button[data-v-0e6d04c8] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 16px;\n  padding: 10px 30px 9px;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  cursor: default;\n  margin: 8px 0;\n}\n.submit-button.active[data-v-0e6d04c8] {\n  background: #00c569;\n  cursor: pointer;\n}\n.title-contents[data-v-0e6d04c8] {\n  font-weight: 400;\n  font-size: 14px;\n  margin-bottom: 15px;\n  text-align: right;\n  border-bottom: 2px solid #fafafa;\n  float: right;\n  width: 100%;\n  background: #597a9f;\n  padding: 5px 15px;\n}\n.user-image[data-v-0e6d04c8] {\n  width: 35px;\n  height: 35px;\n  float: right;\n  position: relative;\n  border-radius: 50px;\n  overflow: hidden;\n}\n.user-image img[data-v-0e6d04c8] {\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  top: 50%;\n}\n.user-name[data-v-0e6d04c8] {\n  float: right;\n\n  padding-top: 7px;\n\n  padding-right: 10px;\n\n  color: #fff;\n}\n.title-section[data-v-0e6d04c8] {\n  direction: rtl;\n  margin-bottom: 8px;\n  padding: 0;\n}\n.title-section h3[data-v-0e6d04c8] {\n  font-size: 16px;\n  color: #00c569;\n  float: right;\n  margin: 0;\n}\n.title-section hr[data-v-0e6d04c8] {\n  margin: 15px 15px 10px auto;\n  position: relative;\n}\n.title-section hr[data-v-0e6d04c8]::after {\n  content: \" \";\n  height: 3px;\n  width: 50px;\n  background: #00c569;\n  position: absolute;\n  top: -4px;\n  right: 0;\n}\n.form-contents-wrapper[data-v-0e6d04c8] {\n  border-bottom: 1px solid #eee;\n  padding: 0;\n  overflow: hidden;\n}\n.form-contents[data-v-0e6d04c8] {\n  margin: 5px auto;\n  line-height: 30px;\n}\n.form-contents lable[data-v-0e6d04c8] {\n  font-size: 12px;\n}\n.input-wrapper[data-v-0e6d04c8],\n.text-input-wrapper[data-v-0e6d04c8] {\n  margin: 6px auto;\n\n  position: relative;\n}\n.input-wrapper[data-v-0e6d04c8]:after {\n  content: \"\\F107\";\n\n  color: #777;\n\n  position: absolute;\n\n  display: inline-block;\n\n  top: 6px;\n\n  font-family: \"Font Awesome 5 Free\", sans-serif;\n\n  font-weight: 900;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  z-index: 0;\n}\ninput[data-v-0e6d04c8] {\n  width: 100%;\n\n  border-radius: 4px;\n\n  border: 1px solid;\n\n  padding: 8px 15px;\n\n  color: #bebebe;\n\n  border-color: #bebebe;\n\n  direction: rtl;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n\n  background: #fff;\n}\n.input-wrapper i[data-v-0e6d04c8] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n}\ninput[data-v-0e6d04c8]:focus,\ninput:focus + i[data-v-0e6d04c8] {\n  color: #333;\n  border-color: #333;\n}\ninput.active[data-v-0e6d04c8] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-0e6d04c8] {\n  color: #00c569;\n}\ninput.active[data-v-0e6d04c8]:focus,\ninput.active:focus + i[data-v-0e6d04c8],\ninput.active + i[data-v-0e6d04c8] {\n  border-color: #00c569;\n}\ninput.error[data-v-0e6d04c8],\ntextarea.error[data-v-0e6d04c8] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-0e6d04c8] {\n  color: #e41c38;\n}\ninput.error[data-v-0e6d04c8]:focus,\ninput.error:focus + i[data-v-0e6d04c8] {\n  border-color: #e41c38;\n}\n#inquiry-text[data-v-0e6d04c8] {\n  background: #fefefe;\n}\n.error-message[data-v-0e6d04c8] {\n  text-align: center;\n\n  color: #e41c38;\n\n  font-weight: bold;\n\n  height: 15px;\n\n  direction: rtl;\n\n  font-size: 11px;\n}\n.small-description[data-v-0e6d04c8] {\n  font-size: 11px;\n\n  font-weight: bold;\n\n  color: #777777;\n\n  line-height: 1.618;\n}\n.submit-button-wrapper[data-v-0e6d04c8] {\n  text-align: center;\n}\nlabel .small-label[data-v-0e6d04c8] {\n  font-size: 12px;\n}\n.placeholder-wrapper .title-contents[data-v-0e6d04c8] {\n  background: #fafafa;\n}\n.placeholder-wrapper .user-image span[data-v-0e6d04c8] {\n  display: block;\n}\n@media screen and (max-width: 767px) {\nselect[data-v-0e6d04c8] {\n    font-size: 12px;\n}\n.input-wrapper[data-v-0e6d04c8]::after {\n    left: 14px;\n}\n.form-contents[data-v-0e6d04c8] {\n    border-radius: 0;\n}\n.title-section[data-v-0e6d04c8] {\n    padding: 0 15px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["wrapperBg", "userProfileInfo", "userProfilePhoto", "str"],
  data: function data() {
    return {
      errors: {
        inquiryText: ""
      },
      inquiry: {
        text: ""
      }
    };
  },
  methods: {
    init: function init() {},
    submitForm: function submitForm() {
      this.textValidator(this.inquiry.text);

      if (!this.inquiry.text || this.inquiry.text == "") {
        this.errors.inquiryText = "توضیحات استعلام الزامی است.";
      }

      if (!this.errors.inquiryText) {
        window.localStorage.setItem('msgToSend', this.inquiry.text);
        if (!window.localStorage.getItem('contact')) {
          window.localStorage.setItem('contact', JSON.stringify(this.userProfileInfo));
        }
        window.location.href = '/register';
      }
    },

    textValidator: function textValidator(text) {
      this.toLatinNumbers(text);
      if (!text) {
        this.errors.inquiryText = "";
      } else if (!this.validateRegx(text, /^[\u0600-\u06FF\s\d]+$/)) {
        this.errors.inquiryText = "لطفا توضیحات استعلام را به درستی وارد کنید";
      }
    },
    toLatinNumbers: function toLatinNumbers(num) {
      if (num == null) {
        return null;
      }

      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num.toString().replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
    },
    validateRegx: function validateRegx(input, regx) {
      return regx.test(input);
    }
  },
  mounted: function mounted() {
    this.init();
  },

  watch: {
    "inquiry.text": function inquiryText() {
      this.errors.inquiryText = "";
    }
  }
});

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.userProfileInfo
    ? _c("div", { staticClass: "section-wrapper col-xs-12" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "text-right col-xs-12 form-contents-wrapper",
              class: { "wrapper-bg": _vm.wrapperBg }
            },
            [
              _c("div", { staticClass: "title-contents" }, [
                _c("div", { staticClass: "user-image" }, [
                  _c("img", {
                    attrs: {
                      src: _vm.str + "/" + _vm.userProfilePhoto,
                      alt: ""
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", {
                  staticClass: "user-name",
                  domProps: {
                    textContent: _vm._s(
                      "استعلام از " +
                        _vm.userProfileInfo.first_name +
                        " " +
                        _vm.userProfileInfo.last_name
                    )
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-contents col-xs-12" }, [
                _c("div", { staticClass: "row" }, [
                  _vm.userProfileInfo.product_name
                    ? _c("div", { staticClass: "col-xs-12" }, [
                        _c("p", { staticClass: "text-rtl" }, [
                          _vm._v("استعلام شرایط فروش "),
                          _c("span", {
                            staticClass: "red-text",
                            domProps: {
                              textContent: _vm._s(
                                _vm.userProfileInfo.product_name
                              )
                            }
                          })
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-xs-12 pull-right" }, [
                    _c(
                      "label",
                      {
                        staticClass: "text-rtl",
                        attrs: { for: "inquiry-text" }
                      },
                      [
                        _vm._v(
                          "\n             نیاز به دانستن چه جزییاتی درباره ی این محصول دارید؟(قیمت، بسته بندی و ...)\n            "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-input-wrapper" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.inquiry.text,
                            expression: "inquiry.text"
                          }
                        ],
                        staticClass: "text-right text-rtl",
                        class: {
                          active: _vm.inquiry.text,
                          error: _vm.errors.inquiryText
                        },
                        attrs: {
                          id: "inquiry-text",
                          type: "text",
                          rows: "3",
                          placeholder:
                            "توضیحات مورد نیاز را از فروشنده بپرسید..."
                        },
                        domProps: { value: _vm.inquiry.text },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.inquiry, "text", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "error-message" }, [
                      _vm.errors.inquiryText
                        ? _c("span", {
                            domProps: {
                              textContent: _vm._s(_vm.errors.inquiryText)
                            }
                          })
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "submit-button-wrapper col-xs-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "button",
                      {
                        staticClass: "submit-button disabled",
                        class: {
                          active: _vm.inquiry.text
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.submitForm($event)
                          }
                        }
                      },
                      [_vm._v("\n              ثبت\n            ")]
                    )
                  ])
                ])
              ])
            ]
          )
        ])
      ])
    : _c("div", { staticClass: "section-wrapper col-xs-12" }, [
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass:
                "text-right col-xs-12 placeholder-wrapper form-contents-wrapper",
              class: { "wrapper-bg": _vm.wrapperBg }
            },
            [_vm._m(2), _vm._v(" "), _vm._m(3)]
          )
        ])
      ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "title-section col-xs-12" }, [
        _c("h3", [_vm._v("\n        استعلام شرایط فروش\n      ")]),
        _vm._v(" "),
        _c("hr")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "title-section col-xs-12" }, [
        _c("h3", [_vm._v("\n        استعلام شرایط فروش\n      ")]),
        _vm._v(" "),
        _c("hr")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title-contents" }, [
      _c("div", { staticClass: "user-image" }, [
        _c("span", {
          staticClass: "placeholder-content default-article-user-image"
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "user-name col-xs-12 col-sm-4 col-md-3" }, [
        _c("span", { staticClass: "placeholder-content content-full-width" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-contents col-xs-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xs-12 pull-right" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "label",
              {
                staticClass: "text-rtl col-xs-12 col-sm-4 col-md-3 pull-right",
                attrs: { for: "inquiry-text" }
              },
              [
                _c("span", {
                  staticClass: "placeholder-content content-full-width"
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-input-wrapper" }, [
            _c("textarea", {
              attrs: { id: "inquiry-text", type: "text", rows: "3" }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "submit-button-wrapper col-xs-12" }, [
        _c("div", { staticClass: "row" }, [
          _c("span", { staticClass: "placeholder-content default-button h-40" })
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0e6d04c8", module.exports)
  }
}

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(561);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a9275b48", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-713402f9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register-inquiry.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-713402f9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register-inquiry.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.header-request h2[data-v-713402f9] {\n  font-size: 22px;\n  margin: 0;\n  margin-bottom: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_inquiry_form_vue__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_inquiry_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__register_inquiry_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_router__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    registerInquiryForm: __WEBPACK_IMPORTED_MODULE_0__register_inquiry_form_vue___default.a
  },
  props: ['str'],
  data: function data() {
    return {
      productUserInfo: ""
    };
  },
  methods: {
    setUpProductOwnerInfo: function setUpProductOwnerInfo() {
      var contact = JSON.parse(window.localStorage.getItem('contact'));
      if (contact) {
        this.productUserInfo = contact;
        // console.log(this.productUserInfo.first_name);
      }
    }
  },
  mounted: function mounted() {
    this.setUpProductOwnerInfo();
  },
  created: function created() {
    this.setUpProductOwnerInfo();
    // eventBus.$on("productUserInfo", ($event) => {
    //   this.productUserInfo = $event;
    //   console.log(productUserInfo);
    // });
  }
});

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main-content-index-pages" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "main-request-content" },
          [
            _c("register-inquiry-form", {
              attrs: {
                "wrapper-bg": "true",
                str: _vm.str,
                "user-profile-info": _vm.productUserInfo,
                "user-profile-photo": _vm.productUserInfo.profile_photo
                  ? _vm.str + "/" + _vm.productUserInfo.profile_photo
                  : _vm.$parent.defultimg
              }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-713402f9", module.exports)
  }
}

/***/ })

});