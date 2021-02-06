webpackJsonp([1,3],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(413)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(415)
/* template */
var __vue_template__ = __webpack_require__(416)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42216dd2"
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
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/my-contact-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42216dd2", Component.options)
  } else {
    hotAPI.reload("data-v-42216dd2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(510)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(512)
/* template */
var __vue_template__ = __webpack_require__(525)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7fac3fde"
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
Component.options.__file = "resources/assets/js/components/dashboard/messenger.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7fac3fde", Component.options)
  } else {
    hotAPI.reload("data-v-7fac3fde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(414);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("075b960a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42216dd2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-contact-list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42216dd2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-contact-list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.contact-body .contact-search[data-v-42216dd2] {\n  background: #f0f0f0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.contact-items[data-v-42216dd2] {\n  padding-top: 102px;\n}\n.contact-items.is-buyer-list[data-v-42216dd2] {\n  padding-top: 60px;\n}\n.contact-body .contact-search .contact-search-input-wrapper[data-v-42216dd2] {\n  position: relative;\n  padding: 10px 7px;\n}\n.contact-body .contact-search .contact-search-input-wrapper > i[data-v-42216dd2] {\n  position: absolute;\n  right: 20px;\n  font-size: 16px;\n  color: #919191;\n  top: 21px;\n}\n.contact-body .contact-search .contact-search-input-wrapper input[data-v-42216dd2] {\n  padding: 8px 40px 8px 15px;\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n}\n.contact-body .contact-search .contact-search-input-wrapper > button[data-v-42216dd2] {\n  position: absolute;\n  left: 7px;\n  font-size: 16px;\n  color: #919191;\n  top: 8px;\n  background: none;\n  border: none;\n  padding: 7px 15px 1px;\n}\n.contact-body .contact-image[data-v-42216dd2] {\n  width: 45px;\n  height: 45px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  border: 1px solid #f2f2f2;\n  position: relative;\n}\n.contact-body .contact-image img[data-v-42216dd2] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: initial;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.contact-body .contact-item a[data-v-42216dd2] {\n  font-size: 13px;\n  color: #666;\n  overflow: hidden;\n  padding: 10px 7px;\n  border-bottom: 1px solid #ededed;\n  display: block;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-left: 2px solid #fff;\n}\n.contact-body .contact-item a[data-v-42216dd2]:hover,\n.contact-body .contact-item a.active[data-v-42216dd2] {\n  background: #fafafa;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-left: 2px solid #00c569;\n}\n.contact-body .contact-item:last-of-type a[data-v-42216dd2] {\n  border-bottom: none;\n}\n.contact-body .contact-item span.contact-name[data-v-42216dd2] {\n  float: right;\n  position: relative;\n}\n.contact-body .contact-item span.contact-last-message[data-v-42216dd2] {\n  float: right;\n  width: calc(100% - 60px);\n  font-weight: lighter;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  direction: rtl;\n  text-align: right;\n}\n.contact-body .contact-item .contact-date[data-v-42216dd2] {\n  float: left;\n  padding-top: 5px;\n  width: 50px;\n  direction: ltr;\n  text-align: center;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2] {\n  float: right;\n  padding-top: 6px;\n  direction: ltr;\n  text-align: left;\n  width: calc(100% - 45px);\n  padding-right: 15px;\n}\n.last-message-date[data-v-42216dd2] {\n  display: inline-block;\n  height: 17px;\n  width: 60px;\n  font-size: 10px;\n  line-height: 2;\n  text-align: center;\n}\n.count-number[data-v-42216dd2] {\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  background: #00c569;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 10px;\n  line-height: 2;\n}\n.count-number-wrapper[data-v-42216dd2] {\n  width: 60px;\n  float: left;\n  text-align: center;\n}\n.not-found-item[data-v-42216dd2] {\n  text-align: center;\n  padding: 100px 15px 0;\n}\n.not-found-item p[data-v-42216dd2] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #777;\n}\n.not-found-item i[data-v-42216dd2] {\n  margin: 5px;\n}\n.load-more[data-v-42216dd2] {\n  margin: 0px 0 0;\n  display: inline-block;\n  background: #00c569;\n  color: #fff;\n  padding: 10px 25px;\n  border-radius: 0px;\n  text-align: center;\n  font-size: 15px;\n  font-weight: bold;\n  border: none;\n  width: 100%;\n}\n.verified-user[data-v-42216dd2] {\n  line-height: 1;\n  font-size: 15px;\n  position: absolute;\n  left: -18px;\n  top: -2px;\n}\n.verified-user[data-v-42216dd2]::before {\n  top: 4px;\n  left: 3px;\n  font-size: 9px;\n}\n.contacts-switch-buttons-wrapper[data-v-42216dd2] {\n  float: right;\n  width: 100%;\n  background: #eef3f3;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-42216dd2] {\n  float: right;\n  width: 50%;\n}\n.contacts-switch-buttons-wrapper .contact-button[data-v-42216dd2] {\n  border: none;\n  width: 100%;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  color: #666;\n}\n.contacts-switch-buttons-wrapper .contact-button .fa-plus[data-v-42216dd2] {\n  position: relative;\n  left: -5px;\n  top: -9px;\n  color: #00c569;\n  font-size: 12px;\n}\n.contacts-switch-buttons-wrapper .contact-button.active[data-v-42216dd2],\n.contacts-switch-buttons-wrapper .contact-button[data-v-42216dd2]:hover {\n  background-color: #fff;\n  border-bottom: 2px solid #00c569;\n  margin-bottom: -2px;\n  z-index: 1;\n}\ni.fa-star[data-v-42216dd2] {\n  font-size: 16px;\n  background: linear-gradient(\n    21deg,\n    rgb(199, 168, 79) 0%,\n    rgb(249, 242, 159) 51%,\n    rgb(199, 168, 79) 100%\n  );\n  background-clip: border-box;\n  background-clip: border-box;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  position: relative;\n  top: 2px;\n}\n.contact-button.active[data-v-42216dd2] {\n  border-radius: 4px 4px 0 0;\n}\n.buyad-lists-wrapper .contact-item > button[data-v-42216dd2] {\n  background: #fff;\n  border: none;\n  border-bottom: 2px solid #dddddd;\n  padding: 0;\n  text-align: center;\n}\n.buyad-expier[data-v-42216dd2] {\n  color: #556080;\n}\n.buyad-notice[data-v-42216dd2] {\n  color: #aeaeae;\n}\n.request-contact-image[data-v-42216dd2] {\n  width: 30px;\n  height: 30px;\n  float: right;\n}\n.buyad-info[data-v-42216dd2] {\n  font-size: 15px;\n  padding: 5px 0;\n  font-weight: bold;\n  color: #777;\n}\n.buyad-info span[data-v-42216dd2] {\n  color: #556080;\n}\n.buyad-header[data-v-42216dd2] {\n  padding: 8px 5px;\n  float: right;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2] {\n  float: right;\n  padding-top: 2px;\n  direction: ltr;\n  text-align: left;\n  width: calc(100% - 45px);\n  padding-right: 8px;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2]:last-of-type {\n  padding-top: 6px;\n}\n.empty-list i[data-v-42216dd2] {\n  color: #777;\n  margin-top: 50px;\n  font-size: 50px;\n  text-align: center;\n  margin-bottom: 10px;\n  display: block;\n}\n.empty-list p[data-v-42216dd2]:first-of-type {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.618;\n  margin-top: 11px;\n}\n.user-button[data-v-42216dd2] {\n  background: #00c569;\n  color: #fff;\n  border-radius: 4px;\n  padding: 8px 0;\n  max-width: 200px;\n  margin: 15px auto;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  display: block;\n  border: none;\n  width: 100%;\n  font-size: 17px;\n  font-weight: bold;\n}\n.user-button[data-v-42216dd2] :hover {\n  /* background: #00c569; */\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.user-not-fount img[data-v-42216dd2] {\n  width: 200px;\n  display: block;\n  margin: 60px auto 20px;\n}\n.user-not-fount p[data-v-42216dd2] {\n  font-weight: 500;\n}\n@media screen and (max-width: 991px) {\n.main-content[data-v-42216dd2] {\n    padding: 59px 0 0;\n}\n.main-content.is-fix-alert[data-v-42216dd2] {\n    padding: 89px 0 0;\n}\n}\n@media screen and (max-width: 767px) {\n.send-message-form .button-wrapper button[data-v-42216dd2] {\n    padding: 12px 13px;\n    font-size: inherit;\n}\n.send-message-form .message-input input[data-v-42216dd2] {\n    padding: 13px 15px;\n}\n.main-content[data-v-42216dd2] {\n    padding: 59px 0 0;\n}\n.main-content.is-fix-alert[data-v-42216dd2] {\n    padding: 85px 0 0;\n}\n.hidden_element[data-v-42216dd2] {\n    display: none;\n}\n.message-wrapper .message-contact-title span[data-v-42216dd2] {\n    padding-top: 6px;\n\n    width: 170px;\n\n    overflow: hidden;\n\n    height: 40px;\n\n    line-height: 1.618;\n\n    text-overflow: ellipsis;\n\n    white-space: nowrap;\n}\n.reply-info p[data-v-42216dd2] {\n    width: 100%;\n}\n}\n@media screen and (max-width: 370px) {\n.message-wrapper .message-contact-title span[data-v-42216dd2] {\n    width: 130px;\n}\n}\n@media screen and (max-width: 330px) {\n.message-wrapper .message-contact-title-img[data-v-42216dd2] {\n    margin: 0 15px;\n}\n.message-wrapper .message-contact-title span[data-v-42216dd2] {\n    font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 415:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      is_contact: true
    };
  },
  methods: {
    activeComponentTooltip: function activeComponentTooltip() {
      $(".verified-user").popover({ trigger: "manual", html: true, animation: false }).on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
          $(_this).popover("hide");
        });
      }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
          if (!$(".popover:hover").length) {
            $(_this).popover("hide");
          }
        }, 300);
      });
    }
  },
  watch: {
    "$parent.contactList": function $parentContactList() {
      var _this2 = this;

      if (this.$parent.contactList) {
        setTimeout(function () {
          _this2.activeComponentTooltip();
        }, 10);
      }
    }
  }
});

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "contact-body my-contacts" }, [
    _c("div", { staticClass: "contact-search" }, [
      _c("div", { staticClass: "contact-search-input-wrapper" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.$parent.contactNameSearchText,
              expression: "$parent.contactNameSearchText"
            }
          ],
          attrs: { type: "text", placeholder: "جستجو مخاطب" },
          domProps: { value: _vm.$parent.contactNameSearchText },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(
                _vm.$parent,
                "contactNameSearchText",
                $event.target.value
              )
            }
          }
        }),
        _vm._v(" "),
        _c("i", { staticClass: "fa fa-search" }),
        _vm._v(" "),
        _vm.$parent.contactNameSearchText
          ? _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.$parent.contactNameSearchText = ""
                  }
                }
              },
              [_c("i", { staticClass: "fa fa-times" })]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.$parent.userType
        ? _c("div", { staticClass: "contacts-switch-buttons-wrapper" }, [
            _c(
              "div",
              { staticClass: "switch-button-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "contact-button",
                    attrs: {
                      to: { name: "messagesRequestSeller" },
                      tag: "button"
                    }
                  },
                  [
                    _c("i", { staticClass: "fa fa-star" }),
                    _vm._v("\n\n          خریداران پیشنهادی\n        ")
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0)
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.$parent.contactList.length === 0
      ? _c("div", { staticClass: "not-found-item" }, [
          !_vm.$parent.contactNameSearchText && !_vm.$parent.isContactListLoaded
            ? _c("div", { staticClass: "image-wrapper" }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          !_vm.$parent.isImageLoad || _vm.$parent.isImageLoad,
                        expression:
                          "!$parent.isImageLoad || $parent.isImageLoad"
                      }
                    ],
                    staticClass: "lds-ring"
                  },
                  [
                    _c("div"),
                    _vm._v(" "),
                    _c("div"),
                    _vm._v(" "),
                    _c("div"),
                    _vm._v(" "),
                    _c("div")
                  ]
                )
              ])
            : _vm.$parent.contactNameSearchText &&
              !_vm.$parent.isSearchingContact
              ? _c("div", [_vm._m(1)])
              : _vm.$parent.isSearchingContact
                ? _c("div", { staticClass: "contact-is-search" }, [_vm._m(2)])
                : _vm.$parent.isContactListLoaded
                  ? _c("div", [
                      _c(
                        "div",
                        { staticClass: "empty-list" },
                        [
                          _c("i", { staticClass: "fa fa-user" }),
                          _vm._v(" "),
                          _c("p", [_vm._v("در حال حاضر مخاطبی وجود ندارد")]),
                          _vm._v(" "),
                          _vm.$parent.userType
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "user-button",
                                  attrs: {
                                    to: { name: "buyAdRequestsSeller" },
                                    tag: "button"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n          شروع چت با خریداران\n        "
                                  )
                                ]
                              )
                            : _c(
                                "router-link",
                                {
                                  staticClass: "user-button",
                                  attrs: {
                                    to: { name: "productList" },
                                    tag: "button"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n          شروع چت با فروشندگان\n        "
                                  )
                                ]
                              )
                        ],
                        1
                      )
                    ])
                  : _vm._e()
        ])
      : _c(
          "div",
          {
            staticClass: "contact-items",
            class: { "is-buyer-list": !_vm.$parent.userType }
          },
          [
            _c(
              "ul",
              [
                _vm._l(_vm.$parent.contactList, function(contact, index) {
                  return _c("li", { key: index, staticClass: "contact-item" }, [
                    _c(
                      "a",
                      {
                        class: {
                          active:
                            _vm.$parent.selectedContact.contact_id ==
                            contact.contact_id
                        },
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.$parent.loadChatHistory(contact, index)
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "contact-image" }, [
                          contact.profile_photo
                            ? _c("img", {
                                attrs: {
                                  src:
                                    _vm.$parent.str +
                                    "/" +
                                    contact.profile_photo,
                                  alt: contact.first_name[0]
                                }
                              })
                            : _c("img", {
                                attrs: {
                                  src: __webpack_require__(159)
                                }
                              })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "my-contact-info-wrapper" }, [
                          _c("span", { staticClass: "contact-name text-rtl" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  contact.first_name + " " + contact.last_name
                                ) +
                                "\n              "
                            ),
                            contact.is_verified
                              ? _c(
                                  "button",
                                  {
                                    staticClass: "verified-user",
                                    attrs: {
                                      "data-container": "body",
                                      "data-toggle": "popover",
                                      "data-placement": "bottom",
                                      "data-content":
                                        _vm.$parent.verifiedUserContent,
                                      title: ""
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-certificate"
                                    })
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "last-message-date" }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  _vm._f("moment")(
                                    contact.last_msg_time_date,
                                    "jYYYY/jMM/jDD"
                                  )
                                ) +
                                "\n            "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "my-contact-info-wrapper" }, [
                          _c("span", {
                            staticClass: "contact-last-message",
                            domProps: {
                              textContent: _vm._s(
                                contact.last_msg.last_msg_text
                              )
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "count-number-wrapper" }, [
                            contact.unread_msgs_count !== 0
                              ? _c("p", {
                                  staticClass: "count-number",
                                  domProps: {
                                    textContent: _vm._s(
                                      contact.unread_msgs_count
                                    )
                                  }
                                })
                              : _vm._e()
                          ])
                        ])
                      ]
                    )
                  ])
                }),
                _vm._v(" "),
                _vm.$parent.showLoadMoreBtn &&
                !_vm.$parent.contactNameSearchText
                  ? _c("li", { staticClass: "contact-item" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn load-more",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              _vm.$parent.loadMoreContacts()
                            }
                          }
                        },
                        [_vm._v("\n          ادامه مخاطبین\n        ")]
                      )
                    ])
                  : _vm._e()
              ],
              2
            )
          ]
        )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "switch-button-item" }, [
      _c("button", { staticClass: "contact-button active" }, [
        _c("i", { staticClass: "fa fa-user" }),
        _vm._v("\n          مخاطبین من\n        ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "user-not-fount" }, [
      _c("img", {
        attrs: { src: __webpack_require__(417), alt: "" }
      }),
      _vm._v(" "),
      _c("span", [_vm._v("مخاطب یافت نشد")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lds-ring" }, [
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("div")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-42216dd2", module.exports)
  }
}

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "/images/empty-message.svg?de5572e9650b06d1981ac6d77f76f741";

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(511);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5bec9cfb", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fac3fde\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messenger.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7fac3fde\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messenger.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.message-wrapper[data-v-7fac3fde] {\n  border-right: 1px solid #e4e4e4;\n  position: relative;\n  height: 100%;\n}\n.main-content[data-v-7fac3fde] {\n  padding: 59px 250px 0 0;\n\n  direction: rtl;\n\n  /* border-bottom: 2px solid #f2f2f2; */\n  height: 100%;\n  position: fixed;\n\n  /*right: 0;*/\n  background: #fff;\n\n  left: 0;\n\n  bottom: 0;\n\n  top: 0;\n}\n.main-content.is-fix-alert[data-v-7fac3fde] {\n  padding: 85px 250px 0 0;\n}\n.little-main .main-content[data-v-7fac3fde] {\n  padding: 59px 80px 0 0;\n}\n.lds-ring[data-v-7fac3fde] {\n  display: inline-block;\n\n  position: absolute;\n\n  width: 64px;\n\n  height: 64px;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n}\n.lds-ring div[data-v-7fac3fde] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 5px solid #00c569;\n  border-radius: 50%;\n  -webkit-animation: lds-ring-data-v-7fac3fde 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring-data-v-7fac3fde 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #00c569 transparent transparent transparent;\n}\n.lds-ring-alt[data-v-7fac3fde] {\n  display: block;\n  margin-top: 50px;\n  direction: rtl;\n  text-align: center;\n}\n.lds-ring div[data-v-7fac3fde]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div[data-v-7fac3fde]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div[data-v-7fac3fde]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n.loade-more-messages .lds-ring[data-v-7fac3fde] {\n  width: 50px;\n\n  height: 50px;\n}\n.loade-more-messages .lds-ring > div[data-v-7fac3fde] {\n  width: 36px;\n\n  height: 36px;\n}\n@-webkit-keyframes lds-ring-data-v-7fac3fde {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes lds-ring-data-v-7fac3fde {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n\n/*preloader image style*/\n.contact-title[data-v-7fac3fde] {\n  font-size: 16px;\n  padding: 18px 8px 23px;\n  border-bottom: 2px solid #f2f2f2;\n}\n.contact-title i[data-v-7fac3fde] {\n  font-size: 26px;\n  position: relative;\n  top: 5px;\n}\n.contact-title span[data-v-7fac3fde] {\n  font-size: 16px;\n  padding-right: 4px;\n}\n.contact-wrapper[data-v-7fac3fde],\n.contact-wrapper > div[data-v-7fac3fde] {\n  height: 100%;\n}\n.contact-wrapper .contact-body[data-v-7fac3fde] {\n  height: 100%;\n  overflow-y: scroll;\n  float: right;\n  width: 100%;\n}\n.default-message-wrapper[data-v-7fac3fde] {\n  position: relative;\n  height: 100%;\n  background: #f6f6f6;\n}\n.default-message-wrapper .default-main-contents[data-v-7fac3fde] {\n  width: 250px;\n\n  height: 250px;\n\n  background: #fff;\n\n  border-radius: 250px;\n\n  position: absolute;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n\n  text-align: center;\n\n  padding-top: 60px;\n  -webkit-box-shadow: 0 0 10px #ebebeb;\n          box-shadow: 0 0 10px #ebebeb;\n}\n.default-message-wrapper .default-main-contents.seller-buyAd-picture[data-v-7fac3fde] {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 10px;\n  padding: 0;\n  padding-top: 30px;\n  height: 435px;\n}\n.default-message-wrapper .default-main-contents.seller-buyAd-picture .red-text[data-v-7fac3fde] {\n  margin: 30px 0px -24px;\n  z-index: 1;\n  padding: 0 15px;\n  line-height: 1.618;\n  position: relative;\n}\n.default-message-wrapper\n  .default-main-contents.seller-buyAd-picture\n  p[data-v-7fac3fde]:last-of-type {\n  max-width: 320px;\n  margin: 0 auto;\n}\n.default-message-wrapper .default-main-contents i[data-v-7fac3fde] {\n  font-size: 55px;\n}\n.default-message-wrapper .default-main-contents p[data-v-7fac3fde] {\n  font-size: 16px;\n\n  margin: 20px 0;\n}\n.contact-not-found[data-v-7fac3fde] {\n  text-align: center;\n  margin: 15px auto;\n}\n.contact-not-found i[data-v-7fac3fde] {\n  font-size: 26px;\n}\n.contact-not-found p[data-v-7fac3fde] {\n  margin-bottom: 7px;\n}\n.contacts-switch-buttons-wrapper[data-v-7fac3fde] {\n  float: right;\n  width: 100%;\n  background: #eef3f3;\n  border-bottom: 3px solid #e3e3e3;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-7fac3fde] {\n  float: right;\n  width: 50%;\n}\n.contacts-switch-buttons-wrapper .contact-button[data-v-7fac3fde] {\n  border: none;\n  width: 100%;\n  font-size: 13px;\n  font-weight: bold;\n  padding: 15px 0;\n  position: relative;\n}\n.contacts-switch-buttons-wrapper .contact-button .fa-plus[data-v-7fac3fde] {\n  position: relative;\n  left: -5px;\n  top: -9px;\n  color: #00c569;\n  font-size: 12px;\n}\n.contacts-switch-buttons-wrapper .contact-button.active[data-v-7fac3fde],\n.contacts-switch-buttons-wrapper .contact-button[data-v-7fac3fde]:hover {\n  background-color: #fff;\n  border-bottom: 2px solid #00c569;\n  margin-bottom: -2px;\n  z-index: 1;\n}\n.total-unread-messages-badge[data-v-7fac3fde] {\n  position: absolute;\n  top: 1px;\n  background: red;\n  height: 23px;\n  width: 33px;\n  color: #fff;\n  border-radius: 10px;\n  left: 5px;\n  font-size: 12px;\n}\n.contact-wrapper .contact-items[data-v-7fac3fde] {\n  position: relative;\n  overflow-y: scroll;\n  height: calc(100% + 40px);\n}\n.contact-wrapper .contact-items > ul[data-v-7fac3fde] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n@media screen and (max-width: 991px) {\n.main-content[data-v-7fac3fde] {\n    padding: 59px 0 0;\n}\n.main-content.is-fix-alert[data-v-7fac3fde] {\n    padding: 89px 0 0;\n}\n}\n@media screen and (max-width: 767px) {\n.send-message-form .button-wrapper button[data-v-7fac3fde] {\n    padding: 12px 13px;\n    font-size: inherit;\n}\n.send-message-form .message-input input[data-v-7fac3fde] {\n    padding: 13px 15px;\n}\n.main-content[data-v-7fac3fde] {\n    padding: 59px 0 0;\n}\n.main-content.is-fix-alert[data-v-7fac3fde] {\n    padding: 85px 0 0;\n}\n.hidden_element[data-v-7fac3fde] {\n    display: none;\n}\n.message-wrapper .message-contact-title span[data-v-7fac3fde] {\n    padding-top: 6px;\n\n    width: 170px;\n\n    overflow: hidden;\n\n    height: 40px;\n\n    line-height: 1.618;\n\n    text-overflow: ellipsis;\n\n    white-space: nowrap;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-7fac3fde] {\n    width: 33.3333%;\n}\n.reply-info p[data-v-7fac3fde] {\n    width: 100%;\n}\n}\n@media screen and (max-width: 370px) {\n.message-wrapper .message-contact-title span[data-v-7fac3fde] {\n    width: 130px;\n}\n}\n@media screen and (max-width: 330px) {\n.message-wrapper .message-contact-title-img[data-v-7fac3fde] {\n    margin: 0 15px;\n}\n.message-wrapper .message-contact-title span[data-v-7fac3fde] {\n    font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_push_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_components_chat_user_info__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_components_chat_user_info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__messages_components_chat_user_info__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["isRequiredFixAlert", "userType", "currentUser", "str"],
  components: {
    myContactList: __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list___default.a,
    chatUserInfo: __WEBPACK_IMPORTED_MODULE_3__messages_components_chat_user_info___default.a,
    MainChatWrapper: __WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper___default.a
  },
  data: function data() {
    return {
      isImageLoad: false,
      isChatMessagesLoaded: true,
      isFirstMessageLoading: true,
      selectedIndex: -1,
      items: [{
        message: "پیام ها",
        url: "messages"
      }],
      isSearchingContact: false,
      contactList: [],
      chatMessages: "",
      isNoticeActive: true,
      selectedContact: "",
      currentUserId: "",
      currentContactUserId: "",
      msgToSend: "",
      isComponentActive: true,
      contactNameSearchText: "",
      isContactListLoaded: false,
      isCurrentStep: 0,
      assets: this.$parent.assets,
      fromContact: 0,
      toContact: 15,
      contactsCountInEachLoad: 20,
      showLoadMoreBtn: false,
      userAllowedReview: false,
      verifiedUserContent: this.$parent.verifiedUserContent,
      isCurrentUserVerified: false
    };
  },

  methods: {
    init: function init() {
      this.loadContactList();
    },
    loadImage: function loadImage() {
      this.isImageLoad = false;
    },
    ImageLoaded: function ImageLoaded() {
      this.isImageLoad = true;
    },
    loadContactList: function loadContactList() {
      var self = this;
      this.isContactListLoaded = false;

      axios.post("/get_contact_list", {
        from: self.fromContact,
        to: self.toContact
      }).then(function (response) {
        self.contactList = response.data.contact_list;
        self.currentUserId = response.data.user_id;
        self.isCurrentUserVerified = response.data.is_verified;
        self.isContactListLoaded = true;

        if (self.contactList.length >= self.toContact) {
          self.showLoadMoreBtn = true;
        } else {
          self.showLoadMoreBtn = false;
        }
      }).catch(function (e) {
        //
      });
    },
    loadMoreContacts: function loadMoreContacts() {
      this.toContact = this.toContact + this.contactsCountInEachLoad;

      this.loadContactList();
    },
    loadChatHistory: function loadChatHistory(contact, index) {
      this.selectedContact = "";

      var self = this;
      self.isChatLoadeMore = false;
      self.handleBackBtnClickOnDevices();
      self.isChatMessagesLoaded = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;

      this.selectedContact = contact;
      this.isUserAuthorizedToPostComment();

      this.currentContactUserId = contact.contact_id;

      axios.post("/get_user_chat_history", {
        user_id: contact.contact_id
      }).then(function (response) {
        self.isNoticeActive = true;
        var data = response.data.messages;
        var itemDate = "";
        data = data.map(function (item) {
          var date = item.created_at.substr(0, 10);
          item.isDateShow = true;
          if (itemDate == date) {
            item.isDateShow = false;
          }
          itemDate = date;
          return item;
        });
        self.chatMessages = data;
        if (!self.chatMessages.length) {
          self.isNoticeActive = false;
        }
        self.userHasNotice();
        self.currentUserId = response.data.current_user_id;
        self.scrollToEnd(0);
      }).catch(function (e) {
        //
      });

      var index = this.searchForObjectIndexInArray(contact.contact_id, this.contactList);

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("messageCount", -1 * contact.unread_msgs_count);

      contact.unread_msgs_count = 0;

      this.contactList.splice(index, 1, contact);
    },
    userHasNotice: function userHasNotice() {
      var cookie = this.getCookie("messengerNoticeData");
      if (cookie) {
        var getAlCookies = JSON.parse(cookie).userNoticeCloed;
        if (getAlCookies.find(this.cookieHasUser)) {
          this.isNoticeActive = false;
        }
      }
    },
    cookieHasUser: function cookieHasUser(userId) {
      return userId == this.selectedContact.contact_id;
    },
    setNoticeCookie: function setNoticeCookie() {
      var contactUserId = this.selectedContact.contact_id;
      var cookie = this.getCookie("messengerNoticeData");
      if (cookie) {
        var getAlCookies = JSON.parse(cookie).userNoticeCloed;
        if (!getAlCookies.find(this.cookieHasUser)) {
          getAlCookies.push(contactUserId);
          this.createCookie("messengerNoticeData", JSON.stringify({ userNoticeCloed: getAlCookies }), 1000);
        }
      } else {
        this.createCookie("messengerNoticeData", JSON.stringify({ userNoticeCloed: [contactUserId] }), 1000);
      }
      this.isNoticeActive = false;
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
    },
    getCookie: function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    checkCookie: function checkCookie() {
      if (this.active_pakage_type == 3 || this.getCookie("closeSellerFixModal") == "false" || this.checkPricingRoute()) {
        this.isRequiredFixAlert = false;
      } else {
        this.isRequiredFixAlert = true;
      }
    },
    appendMessageToChatHistory: function appendMessageToChatHistory(contact) {
      var self = this;
      self.isChatMessagesLoaded = false;

      this.selectedContact = contact;
      this.currentContactUserId = contact.contact_id;

      axios.post("/get_user_chat_history", {
        user_id: contact.contact_id
      }).then(function (response) {
        self.chatMessages = response.data.messages;
        self.currentUserId = response.data.current_user_id;
        self.scrollToEnd(0);
      }).catch(function (e) {
        //
      });
    },
    scrollToEnd: function scrollToEnd(time) {
      var chatPageElementList = $(".chat-page ul");
      var self = this;
      setTimeout(function () {
        chatPageElementList.animate({ scrollTop: chatPageElementList.prop("scrollHeight") }, 0, "swing", function () {
          self.isChatMessagesLoaded = false;
        });
      }, time);
    },
    sendMessage: function sendMessage() {
      var self = this;

      var tempMsg = self.msgToSend;
      self.msgToSend = "";

      if (tempMsg) {
        var msgObject = {
          sender_id: self.currentUserId,
          receiver_id: self.currentContactUserId,
          text: tempMsg
        };

        self.chatMessages.push(msgObject);
        self.scrollToEnd(0);

        axios.post("/messanger/send_message", msgObject).then(function (response) {
          self.isFirstMessageLoading = false;
          self.loadChatHistory(self.selectedContact, -10);
        }).catch(function (e) {
          //
        });
      }
    },
    keepChatUpdated: function keepChatUpdated(contact) {
      var self = this;
      setTimeout(function () {
        self.loadChatHistory(contact);
      }, 20000);
    },
    pushNotification: function pushNotification(header, body, link) {
      __WEBPACK_IMPORTED_MODULE_1_push_js___default.a.create(header, {
        body: body,
        timeout: 4000,
        link: link,
        onClick: function onClick() {
          window.focus();
          this.close();
        }
      });
    },
    goToButtomOfChat: function goToButtomOfChat() {
      $(".chat-page ul").animate({ scrollTop: $(".chat-page ul").prop("scrollHeight") }, 0);
    },
    searchForObjectIndexInArray: function search(contactId, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].contact_id === contactId) {
          return i;
        }
      }
    },
    pageHasBeenReloaded: function pageHasBeenReloaded() {
      if (window.performance) {
        //                  TYPE_BACK_FORWARD
        if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
          return true;
        } else {
          return false;
        }
      }
    },
    parseDateTime: function parseDateTime(dateTimeString) {
      //
    },
    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    handleBackBtnClickOnDevices: function handleBackBtnClickOnDevices() {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        if (self.isDeviceMobile()) {
          if (window.location.pathname == "/seller/messenger/contacts" || window.location.pathname == "/buyer/messenger/contacts") {
            if (self.selectedContact) {
              self.selectedContact = "";
            }
          }
        }
      });
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    sendTokenToServer: function sendTokenToServer(token) {
      axios.post("/fcm/register_token", {
        token: token
      }).then(function (response) {
        var token = response.data.token;

        window.localStorage.setItem("storedToken", token);
      });
    },
    goToGroupList: function goToGroupList() {
      this.$router.push("group-messages");
      this.$parent.groupStep = 1;
    },
    activeReportModal: function activeReportModal(reportedUserId) {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("reoprtModal", reportedUserId);
    },
    activeReviewModal: function activeReviewModal() {
      var userImage = "";

      var selectedUserData = {
        id: this.selectedContact.contact_id,
        name: this.selectedContact.first_name + " " + this.selectedContact.last_name
      };

      if (this.selectedContact.profile_photo) {
        userImage = this.str + "/" + this.selectedContact.profile_photo;
        selectedUserData.img = userImage;
      }

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("reviewUserData", selectedUserData);
    },
    isUserAuthorizedToPostComment: function isUserAuthorizedToPostComment() {
      var self = this;
      var userObg = {
        user_id: this.selectedContact.contact_id
      };
      axios.post("/profile/is-user-authorized-to-post-comment", userObg).then(function (response) {
        self.userAllowedReview = response.data.is_allowed;
      });
    }
  },

  mounted: function mounted() {
    this.init();
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", false);
  },

  created: function created() {
    var _this = this;

    gtag("config", "UA-129398000-1", { page_path: "/messages" });

    var self = this;

    if (__WEBPACK_IMPORTED_MODULE_1_push_js___default.a.Permission.has() === false) {
      __WEBPACK_IMPORTED_MODULE_1_push_js___default.a.Permission.request(function () {}, function () {});
    }

    if (messaging) {
      messaging.requestPermission().then(function () {
        return messaging.getToken();
      }).then(function (currentToken) {
        var storedToken = window.localStorage.getItem("storedToken");

        if (storedToken != currentToken) {
          self.sendTokenToServer(currentToken);
        }
      }).catch(function (err) {
        // Happen if user deney permission
        console.log("Unable to get permission to notify.", err);
      });

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$on("contanctMessageReceived", function ($event) {
        // console.log("contact message");
        if (self.selectedContact) {
          self.appendMessageToChatHistory(self.selectedContact);
        } else if (self.isComponentActive) {
          self.loadContactList();
        }
      });
    }

    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$on("userAllowedReview", function ($event) {
      _this.userAllowedReview = $event;
    });
  },
  watch: {
    contactNameSearchText: function contactNameSearchText(value) {
      var self = this;
      if (self.contactNameSearchText !== "") {
        self.isSearchingContact = true;
        axios.post("/get_contact_list").then(function (response) {
          self.contactList = response.data.contact_list;
          self.currentUserId = response.data.user_id;

          var text = self.contactNameSearchText.split(" ");
          self.contactList = self.contactList.filter(function (contact) {
            return text.every(function (el) {
              if (contact.first_name.indexOf(el) > -1 || contact.last_name.indexOf(el) > -1) {
                return true;
              } else return false;
            });
          });

          self.isSearchingContact = false;
        }).catch(function (e) {
          //
        });
      } else {
        self.contactList = [];
        self.loadContactList();
      }
    },
    selectedContact: function selectedContact(value) {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("activeContactId", value.contact_id);
    }
  },

  activated: function activated() {
    this.isComponentActive = true;
  },
  deactivated: function deactivated() {
    this.isComponentActive = false;
  },
  beforeDestroy: function beforeDestroy() {
    this.isComponentActive = false;
    this.selectedContact = "";
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("activeContactId", "");
  }
});

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Push v1.0
 * =========
 * A compact, cross-browser solution for the JavaScript Notifications API
 *
 * Credits
 * -------
 * Tsvetan Tsvetkov (ttsvetko)
 * Alex Gibson (alexgibson)
 *
 * License
 * -------
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015-2017 Tyler Nickerson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function(i,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):i.Push=t()}(this,function(){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(t)}function t(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function n(i,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function e(i,t,e){return t&&n(i.prototype,t),e&&n(i,e),i}function o(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)}function r(i,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}var s="PushError:",c={errors:{incompatible:"".concat(s," Push.js is incompatible with browser."),invalid_plugin:"".concat(s," plugin class missing from plugin manifest (invalid plugin). Please check the documentation."),invalid_title:"".concat(s," title of notification must be a string"),permission_denied:"".concat(s," permission request declined"),sw_notification_error:"".concat(s," could not show a ServiceWorker notification due to the following reason: "),sw_registration_error:"".concat(s," could not register the ServiceWorker due to the following reason: "),unknown_interface:"".concat(s," unable to create notification: unknown interface")}},a=function(){function i(n){t(this,i),this._win=n,this.GRANTED="granted",this.DEFAULT="default",this.DENIED="denied",this._permissions=[this.GRANTED,this.DEFAULT,this.DENIED]}return e(i,[{key:"request",value:function(i,t){return arguments.length>0?this._requestWithCallback.apply(this,arguments):this._requestAsPromise()}},{key:"_requestWithCallback",value:function(i,t){var n=this,e=this.get(),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n._win.Notification.permission;void 0===e&&n._win.webkitNotifications&&(e=n._win.webkitNotifications.checkPermission()),e===n.GRANTED||0===e?i&&i():t&&t()};e!==this.DEFAULT?o(e):this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._win.webkitNotifications.requestPermission(o):this._win.Notification&&this._win.Notification.requestPermission?this._win.Notification.requestPermission().then(o).catch(function(){t&&t()}):i&&i()}},{key:"_requestAsPromise",value:function(){var i=this,t=this.get(),n=t!==this.DEFAULT,e=this._win.Notification&&this._win.Notification.requestPermission,o=this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission;return new Promise(function(r,s){var c=function(t){return function(t){return t===i.GRANTED||0===t}(t)?r():s()};n?c(t):o?i._win.webkitNotifications.requestPermission(function(i){c(i)}):e?i._win.Notification.requestPermission().then(function(i){c(i)}).catch(s):r()})}},{key:"has",value:function(){return this.get()===this.GRANTED}},{key:"get",value:function(){return this._win.Notification&&this._win.Notification.permission?this._win.Notification.permission:this._win.webkitNotifications&&this._win.webkitNotifications.checkPermission?this._permissions[this._win.webkitNotifications.checkPermission()]:navigator.mozNotification?this.GRANTED:this._win.external&&this._win.external.msIsSiteMode?this._win.external.msIsSiteMode()?this.GRANTED:this.DEFAULT:this.GRANTED}}]),i}(),u=function(){function n(){t(this,n)}return e(n,null,[{key:"isUndefined",value:function(i){return void 0===i}},{key:"isNull",value:function(i){return null===obj}},{key:"isString",value:function(i){return"string"==typeof i}},{key:"isFunction",value:function(i){return i&&"[object Function]"==={}.toString.call(i)}},{key:"isObject",value:function(t){return"object"===i(t)}},{key:"objectMerge",value:function(i,t){for(var n in t)i.hasOwnProperty(n)&&this.isObject(i[n])&&this.isObject(t[n])?this.objectMerge(i[n],t[n]):i[n]=t[n]}}]),n}(),f=function i(n){t(this,i),this._win=n},l=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.Notification}},{key:"create",value:function(i,t){return new this._win.Notification(i,{icon:u.isString(t.icon)||u.isUndefined(t.icon)||u.isNull(t.icon)?t.icon:t.icon.x32,body:t.body,tag:t.tag,requireInteraction:t.requireInteraction})}},{key:"close",value:function(i){i.close()}}]),n}(),h=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.navigator&&void 0!==this._win.navigator.serviceWorker}},{key:"getFunctionBody",value:function(i){var t=i.toString().match(/function[^{]+{([\s\S]*)}$/);return void 0!==t&&null!==t&&t.length>1?t[1]:null}},{key:"create",value:function(i,t,n,e,o){var r=this;this._win.navigator.serviceWorker.register(e),this._win.navigator.serviceWorker.ready.then(function(e){var s={id:i,link:n.link,origin:document.location.href,onClick:u.isFunction(n.onClick)?r.getFunctionBody(n.onClick):"",onClose:u.isFunction(n.onClose)?r.getFunctionBody(n.onClose):""};void 0!==n.data&&null!==n.data&&(s=Object.assign(s,n.data)),e.showNotification(t,{icon:n.icon,body:n.body,vibrate:n.vibrate,tag:n.tag,data:s,requireInteraction:n.requireInteraction,silent:n.silent}).then(function(){e.getNotifications().then(function(i){e.active.postMessage(""),o(i)})}).catch(function(i){throw new Error(c.errors.sw_notification_error+i.message)})}).catch(function(i){throw new Error(c.errors.sw_registration_error+i.message)})}},{key:"close",value:function(){}}]),n}(),_=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.navigator.mozNotification}},{key:"create",value:function(i,t){var n=this._win.navigator.mozNotification.createNotification(i,t.body,t.icon);return n.show(),n}}]),n}(),v=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.external&&void 0!==this._win.external.msIsSiteMode}},{key:"create",value:function(i,t){return this._win.external.msSiteModeClearIconOverlay(),this._win.external.msSiteModeSetIconOverlay(u.isString(t.icon)||u.isUndefined(t.icon)?t.icon:t.icon.x16,i),this._win.external.msSiteModeActivate(),null}},{key:"close",value:function(){this._win.external.msSiteModeClearIconOverlay()}}]),n}(),d=function(i){function n(){return t(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return o(n,f),e(n,[{key:"isSupported",value:function(){return void 0!==this._win.webkitNotifications}},{key:"create",value:function(i,t){var n=this._win.webkitNotifications.createNotification(t.icon,i,t.body);return n.show(),n}},{key:"close",value:function(i){i.cancel()}}]),n}();return new(function(){function i(n){t(this,i),this._currentId=0,this._notifications={},this._win=n,this.Permission=new a(n),this._agents={desktop:new l(n),chrome:new h(n),firefox:new _(n),ms:new v(n),webkit:new d(n)},this._configuration={serviceWorker:"/serviceWorker.min.js",fallback:function(i){}}}return e(i,[{key:"_closeNotification",value:function(i){var t=!0,n=this._notifications[i];if(void 0!==n){if(t=this._removeNotification(i),this._agents.desktop.isSupported())this._agents.desktop.close(n);else if(this._agents.webkit.isSupported())this._agents.webkit.close(n);else{if(!this._agents.ms.isSupported())throw t=!1,new Error(c.errors.unknown_interface);this._agents.ms.close()}return t}return!1}},{key:"_addNotification",value:function(i){var t=this._currentId;return this._notifications[t]=i,this._currentId++,t}},{key:"_removeNotification",value:function(i){var t=!1;return this._notifications.hasOwnProperty(i)&&(delete this._notifications[i],t=!0),t}},{key:"_prepareNotification",value:function(i,t){var n,e=this;return n={get:function(){return e._notifications[i]},close:function(){e._closeNotification(i)}},t.timeout&&setTimeout(function(){n.close()},t.timeout),n}},{key:"_serviceWorkerCallback",value:function(i,t,n){var e=this,o=this._addNotification(i[i.length-1]);navigator&&navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",function(i){var t=JSON.parse(i.data);"close"===t.action&&Number.isInteger(t.id)&&e._removeNotification(t.id)}),n(this._prepareNotification(o,t))),n(null)}},{key:"_createCallback",value:function(i,t,n){var e,o=this,r=null;if(t=t||{},e=function(i){o._removeNotification(i),u.isFunction(t.onClose)&&t.onClose.call(o,r)},this._agents.desktop.isSupported())try{r=this._agents.desktop.create(i,t)}catch(e){var s=this._currentId,c=this.config().serviceWorker,a=function(i){return o._serviceWorkerCallback(i,t,n)};this._agents.chrome.isSupported()&&this._agents.chrome.create(s,i,t,c,a)}else this._agents.webkit.isSupported()?r=this._agents.webkit.create(i,t):this._agents.firefox.isSupported()?this._agents.firefox.create(i,t):this._agents.ms.isSupported()?r=this._agents.ms.create(i,t):(t.title=i,this.config().fallback(t));if(null!==r){var f=this._addNotification(r),l=this._prepareNotification(f,t);u.isFunction(t.onShow)&&r.addEventListener("show",t.onShow),u.isFunction(t.onError)&&r.addEventListener("error",t.onError),u.isFunction(t.onClick)&&r.addEventListener("click",t.onClick),r.addEventListener("close",function(){e(f)}),r.addEventListener("cancel",function(){e(f)}),n(l)}n(null)}},{key:"create",value:function(i,t){var n,e=this;if(!u.isString(i))throw new Error(c.errors.invalid_title);return n=this.Permission.has()?function(n,o){try{e._createCallback(i,t,n)}catch(i){o(i)}}:function(n,o){e.Permission.request().then(function(){e._createCallback(i,t,n)}).catch(function(){o(c.errors.permission_denied)})},new Promise(n)}},{key:"count",value:function(){var i,t=0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&t++;return t}},{key:"close",value:function(i){var t;for(t in this._notifications)if(this._notifications.hasOwnProperty(t)&&this._notifications[t].tag===i)return this._closeNotification(t)}},{key:"clear",value:function(){var i,t=!0;for(i in this._notifications)this._notifications.hasOwnProperty(i)&&(t=t&&this._closeNotification(i));return t}},{key:"supported",value:function(){var i=!1;for(var t in this._agents)this._agents.hasOwnProperty(t)&&(i=i||this._agents[t].isSupported());return i}},{key:"config",value:function(i){return(void 0!==i||null!==i&&u.isObject(i))&&u.objectMerge(this._configuration,i),this._configuration}},{key:"extend",value:function(i){var t,n={}.hasOwnProperty;if(!n.call(i,"plugin"))throw new Error(c.errors.invalid_plugin);n.call(i,"config")&&u.isObject(i.config)&&null!==i.config&&this.config(i.config),t=new(0,i.plugin)(this.config());for(var e in t)n.call(t,e)&&u.isFunction(t[e])&&(this[e]=t[e])}}]),i}())("undefined"!=typeof window?window:global)});
//# sourceMappingURL=push.min.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(515)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(517)
/* template */
var __vue_template__ = __webpack_require__(518)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dd3487f6"
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
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/chat-user-info.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd3487f6", Component.options)
  } else {
    hotAPI.reload("data-v-dd3487f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(516);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("12df1eb6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dd3487f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-user-info.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dd3487f6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-user-info.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.user-info-wrapper[data-v-dd3487f6] {\n  height: 100%;\n  overflow-y: scroll;\n  background: #f6fbff;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.contact-wrapper .contact-body[data-v-dd3487f6]::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.contact-wrapper .contact-body[data-v-dd3487f6] {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.title-section[data-v-dd3487f6] {\n  background: #f0f0f0;\n  padding: 17px 10px 16px;\n}\n.title-section p[data-v-dd3487f6] {\n  font-size: 16px;\n  color: #777;\n}\n.user-image[data-v-dd3487f6] {\n  width: 50px;\n  height: 50px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 10px;\n}\n.user-contents[data-v-dd3487f6] {\n  float: right;\n  width: calc(100% - 60px);\n  padding-top: 4px;\n}\n.user-contents p[data-v-dd3487f6] {\n  font-size: 16px;\n  color: #666666;\n  font-weight: bold;\n}\n.user-contents p.response-rate[data-v-dd3487f6] {\n  font-size: 14px;\n  margin-top: 11px;\n  color: #777;\n}\nli.user-info[data-v-dd3487f6],\nli.user-items[data-v-dd3487f6] {\n  float: right;\n  width: 100%;\n  padding: 25px 20px;\n  border-bottom: 5px solid #f0f0f0;\n  background: #fff;\n}\n.user-items ul[data-v-dd3487f6] {\n  padding: 0;\n}\n.user-items ul li[data-v-dd3487f6] {\n  color: #777;\n  font-size: 15px;\n  margin-bottom: 25px;\n  float: right;\n  width: 100%;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.user-items ul li[data-v-dd3487f6]:last-of-type {\n  margin-bottom: 0;\n}\n.user-items > ul > li > span[data-v-dd3487f6] {\n  display: inline-block;\n  padding-top: 9px;\n}\n.verified-user[data-v-dd3487f6] {\n  line-height: 1;\n  font-size: 25px;\n  top: 5px;\n  color: #cccccc;\n}\n.verified-user[data-v-dd3487f6]::before {\n  top: 5px;\n  left: 6px;\n  font-size: 14px;\n}\nli.verified-user-wrpapper > span[data-v-dd3487f6] {\n  padding-top: 11px;\n  display: inline-block;\n}\nli.user-activity-item > span[data-v-dd3487f6] {\n  padding-top: 12px;\n  display: inline-block;\n}\nul li.verified-user-wrpapper[data-v-dd3487f6] {\n  color: #cccccc;\n}\n.verified-user-wrpapper.verified-user-active[data-v-dd3487f6] {\n  color: #1da1f2;\n}\n.verified-user-wrpapper.verified-user-active p[data-v-dd3487f6],\n.verified-user-wrpapper.verified-user-active .verified-user[data-v-dd3487f6] {\n  color: #1da1f2;\n}\n.icon-wrapper[data-v-dd3487f6] {\n  margin-left: 10px;\n  width: 31px;\n  text-align: center;\n  float: right;\n}\n.icon-wrapper > svg[data-v-dd3487f6] {\n  height: 31px;\n}\n.cls-1[data-v-dd3487f6] {\n  fill: #666;\n}\n.cls-2[data-v-dd3487f6] {\n  fill: #666;\n}\nul li.report-item button[data-v-dd3487f6] {\n  width: 100%;\n  text-align: right;\n  padding: 0px 0 0;\n  background: none;\n  border: none;\n  color: #e41c38;\n}\n.report-item button i[data-v-dd3487f6] {\n  font-size: 21px;\n}\n.user-items ul li.report-item[data-v-dd3487f6]:hover {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n\n/* stars */\n.profile-rating-box[data-v-dd3487f6] {\n  border: 1px solid #f6f6f6;\n  border-radius: 4px;\n  width: 100%;\n  max-width: 230px;\n  margin: 30px auto;\n  overflow: hidden;\n}\n.stars-wrapper[data-v-dd3487f6] {\n  padding-right: 2px;\n}\n.rating-stars[data-v-dd3487f6] {\n  width: calc(100% - 50px);\n  padding: 7px 0 0;\n  text-align: center;\n}\n.rating-stars p > span[data-v-dd3487f6] {\n  position: relative;\n  display: inline-block;\n  margin-left: 5px;\n}\n.rating-stars p > span[data-v-dd3487f6]:last-of-type {\n  margin-left: 0;\n}\n.rating-stars p > span i[data-v-dd3487f6] {\n  position: absolute;\n  left: 2px;\n  font-size: 20px;\n  z-index: 0;\n  top: -4px;\n  color: #bdc4cc;\n}\n.rating-stars p > span > span[data-v-dd3487f6] {\n  display: block;\n  position: relative;\n  z-index: 1;\n  font-size: 13px;\n  width: 18px;\n  text-align: center;\n  margin-left: 5px;\n  color: #777;\n}\n.rating-stars .review-count-wrapper[data-v-dd3487f6] {\n  margin-top: 7px;\n  color: #556080;\n}\n.rating-score[data-v-dd3487f6] {\n  width: 50px;\n  background: #f6f6f6;\n  height: 100%;\n  text-align: center;\n  padding: 15px 0;\n  font-size: 22px;\n  font-weight: bold;\n  color: #556080;\n}\nli.rating-item[data-v-dd3487f6] {\n  border-bottom: 1px solid #f2f2f2;\n}\n", ""]);

// exports


/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["selectedContact"],
  components: {
    ChatReviewComponent: __WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review___default.a
  },
  data: function data() {
    return {
      user: ""
    };
  },
  methods: {
    init: function init() {
      console.log("isrun");

      axios.post("/get_user_statistics_by_user_name", {
        user_name: this.selectedContact.user_name
      }).then(function (response) {
        console.log(response.data);
        // self.profileOwnerStatistics = response.data.statistics;
        // if (self.profileOwnerStatistics.rating_info) {
        //   self.starScore = Math.floor(
        //     self.profileOwnerStatistics.rating_info.avg_score
        //   );
        // } else {
        //   self.profileOwnerStatistics.rating_info = {};
        // }
        // self.statisticsLoader = false;
      }).catch(function (err) {
        //
      });
    }
  },
  watch: {
    selectedContact: function selectedContact() {
      console.log("is change");
      this.init();
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user-info-wrapper" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "main-section" }, [
      _c("ul", [
        _c("li", { staticClass: "user-info" }, [
          _c("div", { staticClass: "user-image" }, [
            _vm.$parent.selectedContact.profile_photo
              ? _c("img", {
                  attrs: {
                    src:
                      _vm.$parent.str +
                      "/" +
                      _vm.$parent.selectedContact.profile_photo,
                    alt: _vm.$parent.selectedContact.first_name[0]
                  }
                })
              : _c("img", {
                  attrs: { src: __webpack_require__(159) }
                })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "user-contents" }, [
            _c("p", {
              domProps: {
                textContent: _vm._s(
                  _vm.$parent.selectedContact.first_name +
                    " " +
                    _vm.$parent.selectedContact.last_name
                )
              }
            }),
            _vm._v(" "),
            _vm._m(1)
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "user-items col-xs-12" }, [
          _c("div", [
            _c("ul", { staticClass: "col-xs-12" }, [
              _c(
                "li",
                {
                  staticClass: "verified-user-wrpapper",
                  class: {
                    "verified-user-active":
                      _vm.$parent.selectedContact.is_verified
                  }
                },
                [
                  _c("p", { staticClass: "icon-wrapper" }, [
                    _c(
                      "button",
                      {
                        staticClass: "verified-user",
                        attrs: {
                          "data-container": "body",
                          "data-toggle": "popover",
                          "data-placement": "bottom",
                          "data-content": _vm.$parent.verifiedUserContent,
                          title: ""
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-certificate" })]
                    )
                  ]),
                  _vm._v(" "),
                  _vm.$parent.selectedContact.is_verified
                    ? _c("span", {
                        domProps: { textContent: _vm._s("احراز هویت شده") }
                      })
                    : _c("span", {
                        domProps: { textContent: _vm._s("احراز هویت نشده") }
                      })
                ]
              ),
              _vm._v(" "),
              _c("li", { staticClass: "user-activity-item" }, [
                _c("p", { staticClass: "icon-wrapper" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        "data-v-64b62b6b": "",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16.55",
                        height: "20.411",
                        viewBox: "0 0 16.55 20.411"
                      }
                    },
                    [
                      _c("path", {
                        staticClass: "cls-2",
                        attrs: {
                          "data-v-64b62b6b": "",
                          id: "Path_7",
                          "data-name": "Path 7",
                          d:
                            "M15.781,12.574l-3.81-1.1a1.017,1.017,0,0,1-.2-.082.333.333,0,0,0-.16-.105,1.036,1.036,0,0,1-.388-.8V9.419a3.676,3.676,0,0,0,1.233-2.747V3.784a3.684,3.684,0,1,0-7.368,0V6.672A3.675,3.675,0,0,0,6.286,9.385v1.094a1.037,1.037,0,0,1-.745.991l-3.812,1.1A2.407,2.407,0,0,0,0,14.875v4.567a.337.337,0,1,0,.674,0V14.875a1.73,1.73,0,0,1,1.243-1.654l1.415-.409a.331.331,0,0,0,.026.032L5.17,14.656a1.38,1.38,0,0,0,1.781.149l.636-.453a1.213,1.213,0,0,0,.45.722L6.613,21.943a.526.526,0,0,0,.127.451l1.425,1.894.031.036a.819.819,0,0,0,1.157,0l.017-.017,1.442-1.915a.528.528,0,0,0,.123-.455L9.515,15.073a1.213,1.213,0,0,0,.449-.721l.636.453a1.38,1.38,0,0,0,1.781-.149l1.834-1.834,1.38.4a1.73,1.73,0,0,1,1.243,1.654v4.567a.337.337,0,0,0,.674,0V14.875A2.407,2.407,0,0,0,15.781,12.574ZM10.012,1.05l-.03-.024.037.017ZM5.766,6.674V4.89q.186.018.373.018A3.936,3.936,0,0,0,8.918,3.761L9.929,2.751a1.531,1.531,0,0,1,.795.466,2.382,2.382,0,0,0,1.062.616v2.84a3.01,3.01,0,1,1-6.021,0Zm3.01,3.684A3.661,3.661,0,0,0,10.554,9.9v.582a1.706,1.706,0,0,0,.411,1.106l-1.9,1.351a1.17,1.17,0,0,0-.58,0L6.561,11.568a1.705,1.705,0,0,0,.4-1.089V9.873a3.66,3.66,0,0,0,1.816.484Zm-2.219,3.9a.708.708,0,0,1-.914-.077L4.064,12.6l1.664-.482A1.685,1.685,0,0,0,6.013,12L7.86,13.319c-.007.009-.015.016-.022.025Zm3.7,7.75-1.4,1.855a.144.144,0,0,1-.179,0l-1.4-1.855,1.383-6.681c.034,0,.067.005.1.005a.67.67,0,0,0,.1-.005ZM11.9,14.178a.708.708,0,0,1-.913.076l-1.28-.911c-.007-.009-.015-.016-.022-.025l1.83-1.3a1.685,1.685,0,0,0,.264.1l1.7.491Z",
                          transform: "translate(0 -0.1)"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        staticClass: "cls-1",
                        attrs: {
                          "data-v-64b62b6b": "",
                          id: "Path_8",
                          "data-name": "Path 8",
                          d:
                            "M199.657,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,199.657,230.69Z",
                          transform: "translate(-185.887 -215.15)"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        staticClass: "cls-1",
                        attrs: {
                          "data-v-64b62b6b": "",
                          id: "Path_9",
                          "data-name": "Path 9",
                          d:
                            "M51.407,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,51.407,230.69Z",
                          transform: "translate(-47.628 -215.15)"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        staticClass: "cls-1",
                        attrs: {
                          "data-v-64b62b6b": "",
                          id: "Path_10",
                          "data-name": "Path 10",
                          d:
                            "M101.82,98.128a2.188,2.188,0,0,0,2.022-1.39.337.337,0,1,0-.628-.244,1.5,1.5,0,0,1-2.793,0,.337.337,0,1,0-.628.244,2.188,2.188,0,0,0,2.028,1.39Z",
                          transform: "translate(-93.045 -89.797)"
                        }
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("span", [_vm._v(" فروشنده ")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "report-item" }, [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.$parent.activeReportModal(
                          _vm.$parent.selectedContact.contact_id
                        )
                      }
                    }
                  },
                  [_vm._m(2), _vm._v(" "), _c("span", [_vm._v("گزارش تخلف")])]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "col-xs-12 bg-white" }, [
          _c("div", { staticClass: "profile-rating-box-wrapper hidden-xs" }, [
            _c("div", { staticClass: "profile-rating-box" }, [
              _c("div", { staticClass: "rating-stars pull-left" }, [
                _c(
                  "p",
                  { staticClass: "stars-wrapper" },
                  _vm._l(5, function(star, index) {
                    return _c("span", { key: index }, [
                      _c("span", {
                        domProps: { textContent: _vm._s(index + 1) }
                      }),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "fa fa-star",
                        class: { "yellow-text": index < 3 }
                      })
                    ])
                  })
                ),
                _vm._v(" "),
                _c("p", { staticClass: "review-count-wrapper" }, [
                  _c("span", { domProps: { textContent: _vm._s(5) } }),
                  _vm._v("\n                نظر ثبت شده است\n              ")
                ])
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "rating-score pull-right" }, [
                _c("span", { domProps: { textContent: _vm._s(5) } })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "col-xs-12" },
          [
            _c("ChatReviewComponent"),
            _vm._v("\n        " + _vm._s(_vm.selectedContact) + "\n      ")
          ],
          1
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
    return _c("div", { staticClass: "title-section" }, [
      _c("p", [_vm._v("اطلاعات کاربر")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "response-rate" }, [
      _vm._v("\n            احتمال پاسخگویی\n            "),
      _c("span", { staticClass: "red-text" }, [_vm._v(" ۹۰٪ ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icon-wrapper" }, [
      _c("i", { staticClass: "fa fa-exclamation-circle" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-dd3487f6", module.exports)
  }
}

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(520)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(523)
/* template */
var __vue_template__ = __webpack_require__(524)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b8dd9550"
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
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/main-chat-wrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b8dd9550", Component.options)
  } else {
    hotAPI.reload("data-v-b8dd9550", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(521);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("63f6ae76", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b8dd9550\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-chat-wrapper.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b8dd9550\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-chat-wrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(9);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.loading-container[data-v-b8dd9550] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  position: relative;\n  align-items: center;\n  z-index: 1;\n}\n.loading-container .lds-ring[data-v-b8dd9550] {\n  background: #fff;\n  border-radius: 50px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n  width: 50px;\n  height: 50px;\n  padding: 4px;\n}\n.loading-container .lds-ring > div[data-v-b8dd9550] {\n  width: 30px;\n  height: 30px;\n  border-width: 3px;\n}\n.whatsapp-loading-gif[data-v-b8dd9550] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 20%;\n  height: 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.chat-loaded[data-v-b8dd9550] {\n  opacity: 1;\n}\n.contact-is-search img[data-v-b8dd9550] {\n  display: block;\n  width: 60px;\n  margin: 18px auto;\n}\n.clock-icon[data-v-b8dd9550] {\n  font-size: 14px;\n}\n.check-items[data-v-b8dd9550] {\n  padding-left: 10px;\n  color: #b2b2b2;\n}\n.text-blue[data-v-b8dd9550] {\n  color: #60caf1;\n}\n.check-items.dual[data-v-b8dd9550] :last-of-type {\n  margin-left: -8px;\n}\n.message-wrapper .message-contact-title[data-v-b8dd9550] {\n  font-size: 16px;\n  padding: 7px 15px 8px;\n  float: right;\n  width: 100%;\n  color: #fff;\n  background: -webkit-gradient(linear, right top, left top, from(#21ad93), to(#4dc0bb));\n  background: linear-gradient(-90deg, #21ad93, #4dc0bb);\n}\n.message-contact-title a[data-v-b8dd9550] {\n  color: #fafafa;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-contact-title a[data-v-b8dd9550]:hover {\n  color: #fff;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.chat-page .bg-wrapper[data-v-b8dd9550] {\n  background: url(" + escape(__webpack_require__(522)) + ") repeat;\n  opacity: 0.06;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 60px;\n  background-size: 50%;\n}\n.chat-page ul[data-v-b8dd9550] {\n  background-color: #e5ddd6;\n}\n.chat-page ul li[data-v-b8dd9550] {\n  position: relative;\n  z-index: 1;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550] {\n  width: 35px;\n  height: 35px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 10px;\n}\n.message-wrapper .message-contact-title img[data-v-b8dd9550] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: initial;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550] {\n  float: right;\n  display: block;\n  margin-top: 7px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: 25px;\n  overflow: hidden;\n  max-width: 135px;\n  font-size: 15px;\n  color: #fff;\n}\n.back-state[data-v-b8dd9550] {\n  background: none;\n  color: #fff;\n  border: none;\n  font-size: 22px;\n  position: relative;\n  top: 5px;\n  padding: 0;\n  padding-right: 10px;\n}\n.report-button[data-v-b8dd9550] {\n  background: #fff;\n  color: #777;\n  padding: 3px 12px 0px;\n  border-radius: 5px;\n  font-size: 20px;\n  border: none;\n  position: relative;\n  top: 3px;\n}\n.message-wrapper .chat-page ul[data-v-b8dd9550] {\n  padding: 20px;\n\n  overflow-x: hidden;\n\n  position: absolute;\n\n  left: 0;\n\n  right: 0;\n\n  bottom: 60px;\n\n  top: 50px;\n\n  -webkit-transition: 100ms;\n\n  transition: 100ms;\n}\n.message-wrapper .chat-page ul li[data-v-b8dd9550] {\n  width: 100%;\n  float: right;\n}\n.message-wrapper .chat-page ul li[data-v-b8dd9550]:last-of-type {\n  margin-bottom: 20px;\n}\n.message-date[data-v-b8dd9550] {\n  text-align: center;\n  margin: 10px auto;\n  color: #313a43;\n  font-size: 14px;\n}\n.message-date span[data-v-b8dd9550] {\n  background: #e1f5fe;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n  padding: 3px 10px 0;\n  line-height: 1;\n}\n.message-wrapper .chat-page li > div.message-item-wrapper[data-v-b8dd9550] {\n  font-size: 14px;\n  line-height: 1.612;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 8px;\n  margin: 0 auto 3px;\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n  min-width: 100px;\n}\n.message-content-wrapper[data-v-b8dd9550] {\n  max-width: 455px;\n  padding: 5px 10px;\n  display: block;\n}\n.message-wrapper .chat-page .message-item-wrapper.message-receive[data-v-b8dd9550] {\n  float: left;\n  background: #fff;\n  border-radius: 0 8px 8px 8px;\n}\n.message-wrapper .chat-page .message-receive[data-v-b8dd9550]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: -6px;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 6px 9px 0;\n  border-color: transparent #fff transparent transparent;\n  line-height: 0px;\n  _border-color: #000000 #fff #000000 #000000;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n}\n.message-wrapper .chat-page .message-item-wrapper.message-send[data-v-b8dd9550] {\n  float: right;\n  background: #dcf8c6;\n  border-radius: 8px 0 8px 8px;\n}\n.message-wrapper .chat-page .message-send[data-v-b8dd9550]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  right: -6px;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 6px 0 0;\n  border-color: #dcf8c6 transparent transparent transparent;\n  line-height: 0px;\n  _border-color: #dcf8c6 #000000 #000000 #000000;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n}\n.message-wrapper .chat-page span.message-chat-date[data-v-b8dd9550] {\n  text-align: right;\n  font-size: 11px;\n  padding-top: 3px;\n  width: 100%;\n  direction: ltr;\n  display: block;\n  color: #b2b2b2;\n}\n.send-message-form[data-v-b8dd9550] {\n  overflow: hidden;\n  padding: 10px 15px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: #f0f0f0;\n}\n.message-input[data-v-b8dd9550] {\n  float: left;\n  width: calc(100% - 60px);\n}\n.send-message-form .message-input input[data-v-b8dd9550] {\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n  padding: 7px 50px 8px 15px;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\n.send-message-form .message-input input.padding-default[data-v-b8dd9550] {\n  -webkit-transition: 150ms;\n  transition: 150ms;\n  padding: 7px 15px 8px 15px;\n}\n.capture-image[data-v-b8dd9550] {\n  position: absolute;\n  font-size: 21px;\n  background: none;\n  border: none;\n  color: #919191;\n  padding: 7px 15px 7px 10px;\n}\n.button-wrapper[data-v-b8dd9550] {\n  float: right;\n  line-height: 1.1;\n  position: relative;\n}\n.send-message-form .button-wrapper .item-wrapper[data-v-b8dd9550] {\n  float: right;\n\n  width: 40px;\n\n  height: 40px;\n\n  color: #fff;\n\n  background: -webkit-gradient(linear, left top, right top, from(#00c569), to(#21ad93));\n\n  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);\n\n  border: none;\n\n  border-radius: 35px;\n\n  padding: 0 10px;\n}\n.send-message-form .button-wrapper .item-wrapper .send-message-button[data-v-b8dd9550] {\n  background: none;\n  border: none;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 0;\n  padding-top: 7px;\n  padding-left: 9px;\n}\n.send-message-form .button-wrapper .voice-message-button[data-v-b8dd9550] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0px;\n  background: none;\n  border: none;\n  font-size: 19px;\n  bottom: 0;\n  padding: 4px 13px 0;\n}\n.button-wrapper .send-message-button svg[data-v-b8dd9550] {\n  width: 19px;\n  height: 19px;\n}\n#chat-menu-items[data-v-b8dd9550] {\n  position: absolute;\n  left: 15px;\n  z-index: 10;\n  width: 170px;\n  background: #fff;\n  text-align: right;\n  direction: rtl;\n  border-radius: 4px;\n  line-height: 1.618;\n  -webkit-box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  top: 48px;\n  overflow: hidden;\n  padding: 0 !important;\n}\n#chat-menu-items li:last-of-type button[data-v-b8dd9550] {\n  border: none;\n}\n#chat-menu-items li button i[data-v-b8dd9550] {\n  margin-left: 6px;\n}\n#chat-menu-items li button[data-v-b8dd9550] {\n  background: none;\n  color: #777;\n  font-size: 14px;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  text-align: right;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-bottom: 1px solid #dbdbdb;\n}\n#chat-menu-items li button[data-v-b8dd9550]:hover {\n  color: #333;\n  background: #eee;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.new-badge[data-v-b8dd9550] {\n  position: absolute;\n  right: -16px;\n  background: #e51c38;\n  border-radius: 50px;\n  font-size: 12px;\n  color: #fff;\n  top: -8px;\n  line-height: 1;\n  padding: 4px 2px;\n}\n.messenger-notice[data-v-b8dd9550] {\n  text-align: center;\n  background: #fff8c1;\n  padding: 7px;\n  border-radius: 8px;\n  margin-top: 20px;\n  line-height: 1.618;\n  color: #777;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n}\n.messenger-notice .notice-title[data-v-b8dd9550] {\n  font-size: 13px;\n}\n.message-wrapper .chat-page li > div.notice-actions[data-v-b8dd9550] {\n  margin: 3px auto 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550] {\n  border: none;\n  color: #21ad92;\n  border-radius: 4px;\n  margin: 2px 7px 0;\n  background: #fff;\n  padding: 2px 15px;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550]:hover {\n  background: #21ad93;\n  border-color: #21ad93;\n  color: #fff;\n}\n.messenger-notice .notice-actions button i[data-v-b8dd9550] {\n  margin-left: 7px;\n}\n.verified-user[data-v-b8dd9550]::before {\n  top: 3px;\n  left: 3px;\n}\n@media screen and (max-width: 767px) {\n#chat-menu-items[data-v-b8dd9550] {\n    left: 54px;\n}\n.messenger-notice[data-v-b8dd9550] {\n    margin: 20px -20px;\n    border-radius: 0;\n    background: #fcfaf8;\n    text-align: right;\n    padding: 7px 15px;\n}\n.notice-actions[data-v-b8dd9550] {\n    width: 100%;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550] {\n    width: 100%;\n    text-align: right;\n    background: none;\n    padding: 5px 0;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550]:hover {\n    background: initial;\n    border-color: initial;\n    color: #21ad92;\n}\n.message-button-wrapper[data-v-b8dd9550] {\n    margin: 0 -10px -5px;\n    overflow: hidden;\n    border-radius: 0 0 4px 4px;\n}\n.message-button-wrapper button[data-v-b8dd9550] {\n    display: block;\n    width: 100%;\n    background: #21ad93;\n    text-align: center;\n    color: #fff;\n    border: none;\n    font-size: 14px;\n    padding: 5px;\n    margin-top: 8px;\n}\n.message-button-wrapper button i[data-v-b8dd9550] {\n    font-size: 11px;\n}\n.is-phone-active-wrapper[data-v-b8dd9550] {\n    min-width: 200px;\n}\n.is-phone-active-text[data-v-b8dd9550] {\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 345px) {\n.message-wrapper .message-contact-title-img[data-v-b8dd9550] {\n    margin-left: 10px;\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550] {\n    width: 115px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "/images/whatsappbg.png?686b98c9fdffef3f63127759e2057750";

/***/ }),

/***/ 523:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      isVoiceRecord: false,
      isChat: false
    };
  },

  methods: {
    init: function init() {
      this.hideCollapses();
      this.$parent.userHasNotice();
    },
    hideCollapses: function hideCollapses() {
      $(document).on("click", function (e) {
        /* bootstrap collapse js adds "in" class to your collapsible element*/

        var user_menu_opened = $("#chat-menu-items").hasClass("in");

        if (!$(e.target).closest("#chat-menu-items").length && !$(e.target).is("#button-collapse-chat-menu") && user_menu_opened === true) {
          $("#chat-menu-items").collapse("toggle");
        }

        /* bootstrap collapse js adds "in" class to your collapsible element*/
      });
    },
    checkMessageName: function checkMessageName(index, prevIndex) {
      var isMessageName = false;

      if (this.$parent.chatMessages[prevIndex] && prevIndex >= 0) {
        if (this.$parent.chatMessages[index].sender_id != this.$parent.chatMessages[prevIndex].sender_id) {
          isMessageName = true;
        }
      } else {
        isMessageName = true;
      }

      return isMessageName;
    },
    checkMessageListClass: function checkMessageListClass(senderId) {
      var myMessage = false;
      if (this.$parent.selectedContact.is_verified == true) {
        this.$parent.isNoticeActive = false;
      }
      if (senderId == this.$parent.currentUserId) {
        this.$parent.isNoticeActive = false;
        myMessage = true;
      } else {
        myMessage = false;
      }
      return myMessage;
    },
    recordVoice: function recordVoice() {
      console.log("voice");
    }
  },
  mounted: function mounted() {
    this.init();
  },
  watch: {
    "$parent.msgToSend": function $parentMsgToSend(value) {
      if (value) {
        this.isChat = true;
      } else {
        this.isChat = false;
      }
    }
  }
});

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "message-contact-title" }, [
      _c(
        "div",
        { staticClass: "contact-title-contents pull-right" },
        [
          _c("div", { staticClass: "message-contact-title-img" }, [
            _vm.$parent.selectedContact.profile_photo
              ? _c("img", {
                  attrs: {
                    src:
                      _vm.$parent.str +
                      "/" +
                      _vm.$parent.selectedContact.profile_photo,
                    alt: _vm.$parent.selectedContact.first_name[0]
                  }
                })
              : _c("img", {
                  attrs: { src: __webpack_require__(159) }
                })
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              attrs: {
                to: {
                  path: "/profile/" + _vm.$parent.selectedContact.user_name
                }
              }
            },
            [
              _c("span", [
                _vm._v(
                  "\n          " +
                    _vm._s(
                      _vm.$parent.selectedContact.first_name +
                        " " +
                        _vm.$parent.selectedContact.last_name
                    ) +
                    "\n          "
                ),
                _vm.$parent.selectedContact.is_verified
                  ? _c(
                      "button",
                      {
                        staticClass: "verified-user",
                        attrs: {
                          "data-container": "body",
                          "data-toggle": "popover",
                          "data-placement": "bottom",
                          "data-content": _vm.$parent.verifiedUserContent,
                          title: ""
                        },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-certificate" })]
                    )
                  : _vm._e()
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "head-action-buttons pull-left" }, [
        _c("div", { staticClass: "head-action-buttons pull-left" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "back-state hidden-sm hidden-md hidden-lg",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.$parent.selectedContact = !_vm.$parent.selectedContact
                }
              }
            },
            [_c("i", { staticClass: "fa fa-arrow-left" })]
          ),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "collapse", attrs: { id: "chat-menu-items" } },
            [
              _c("li", { staticClass: "list-item" }, [
                _c(
                  "button",
                  {
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.$parent.activeReportModal(
                          _vm.$parent.selectedContact.contact_id
                        )
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-exclamation-circle" }),
                    _vm._v("\n              گزارش تخلف\n            ")
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.$parent.userAllowedReview
                ? _c("li", { staticClass: "list-item" }, [
                    _c(
                      "button",
                      {
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.$parent.activeReviewModal()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fas fa-star" }),
                        _vm._v("\n              ثبت نظر\n            ")
                      ]
                    )
                  ])
                : _vm._e()
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.$parent.selectedContact
      ? _c("div", { staticClass: "chat-page" }, [
          _c("div", { staticClass: "bg-wrapper" }),
          _vm._v(" "),
          _c(
            "ul",
            {
              class: [
                _vm.$parent.isChatMessagesLoaded &&
                _vm.$parent.isFirstMessageLoading
                  ? "chat-not-loaded"
                  : "chat-loaded"
              ]
            },
            [
              _vm._l(_vm.$parent.chatMessages, function(msg, index) {
                return _c(
                  "li",
                  {
                    key: msg.id,
                    class: {
                      "margin-top-10": _vm.checkMessageName(index, index - 1)
                    }
                  },
                  [
                    msg.isDateShow
                      ? _c("div", { staticClass: "message-date" }, [
                          _c("span", [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  _vm._f("moment")(
                                    msg.created_at,
                                    "jYYYY/jMM/jDD"
                                  )
                                ) +
                                "\n          "
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "message-item-wrapper",
                        class: [
                          _vm.checkMessageListClass(msg.sender_id)
                            ? "message-send"
                            : "message-receive"
                        ]
                      },
                      [
                        msg.is_phone &&
                        !_vm.checkMessageListClass(msg.sender_id)
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "message-content-wrapper is-phone-active-wrapper"
                              },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "hidden-sm hidden-md hidden-lg",
                                    attrs: { href: "tel:" + msg.text }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "is-phone-active-text" },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(msg.text) +
                                            "\n              "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "message-chat-date" },
                                      [
                                        msg.created_at
                                          ? _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    msg.created_at,
                                                    "HH:mm"
                                                  )
                                                )
                                              )
                                            ])
                                          : _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    Date(),
                                                    "HH:mm"
                                                  )
                                                )
                                              )
                                            ]),
                                        _vm._v(" "),
                                        _vm._m(1, true)
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "message-content-wrapper hidden-xs"
                                  },
                                  [
                                    _c("span", {
                                      domProps: {
                                        textContent: _vm._s(msg.text)
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "message-chat-date" },
                                      [
                                        msg.created_at
                                          ? _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    msg.created_at,
                                                    "HH:mm"
                                                  )
                                                )
                                              )
                                            ])
                                          : _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    Date(),
                                                    "HH:mm"
                                                  )
                                                )
                                              )
                                            ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _c(
                              "div",
                              { staticClass: "message-content-wrapper" },
                              [
                                _c("span", {
                                  domProps: { textContent: _vm._s(msg.text) }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "message-chat-date" },
                                  [
                                    msg.created_at
                                      ? _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                msg.created_at,
                                                "HH:mm"
                                              )
                                            )
                                          )
                                        ])
                                      : _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(Date(), "HH:mm")
                                            )
                                          )
                                        ]),
                                    _vm._v(" "),
                                    msg.sender_id ===
                                      _vm.$parent.currentUserId &&
                                    !msg.created_at
                                      ? _c(
                                          "span",
                                          { staticClass: "check-items" },
                                          [
                                            _c("i", {
                                              staticClass: "far fa-clock"
                                            })
                                          ]
                                        )
                                      : msg.sender_id ===
                                          _vm.$parent.currentUserId &&
                                        msg.created_at
                                        ? _c(
                                            "span",
                                            { staticClass: "check-items dual" },
                                            [
                                              msg.is_read
                                                ? _c("i", {
                                                    staticClass: "fa fa-check",
                                                    class: {
                                                      "text-blue": msg.is_read
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-check text-blue"
                                              })
                                            ]
                                          )
                                        : _vm._e()
                                  ]
                                )
                              ]
                            )
                      ]
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _vm.$parent.isNoticeActive && !_vm.$parent.isChatMessagesLoaded
                ? _c("li", { staticClass: "messenger-notice" }, [
                    _c("p", { staticClass: "notice-title" }, [
                      _vm._v("\n          اطلاعات هویتی این کاربر\n          "),
                      !_vm.$parent.isCurrentUserVerified
                        ? _c("span", { staticClass: "red-text" }, [
                            _vm._v("مانند اطلاعات هویتی شما")
                          ])
                        : _vm._e(),
                      _vm._v("\n          نزد باسکول احراز "),
                      _c("span", { staticClass: "red-text" }, [
                        _vm._v(" نشده ")
                      ]),
                      _vm._v(" است.\n        ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "notice-actions" },
                      [
                        _c(
                          "button",
                          {
                            on: {
                              click: function($event) {
                                _vm.$parent.setNoticeCookie()
                              }
                            }
                          },
                          [_vm._v("متوجه شدم")]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              tag: "button",
                              to: { name: "verificationInfo" }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-info" }),
                            _vm._v("\n            اطلاعات بیشتر\n          ")
                          ]
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _vm.$parent.isChatMessagesLoaded && _vm.$parent.isFirstMessageLoading
            ? _c("div", { staticClass: "loading-container" }, [_vm._m(2)])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "send-message-form" }, [
            _c("form", [
              _c("div", { staticClass: "message-input" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.$parent.msgToSend,
                      expression: "$parent.msgToSend"
                    }
                  ],
                  staticClass: "padding-default",
                  attrs: { type: "text", placeholder: "پیغامی بگذارید " },
                  domProps: { value: _vm.$parent.msgToSend },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.$parent, "msgToSend", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "button-wrapper" }, [
                _c("div", { staticClass: "item-wrapper" }, [
                  _c(
                    "button",
                    {
                      staticClass: "send-message-button scale-up-center-full",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.isChat = true
                        }
                      }
                    },
                    [
                      _c(
                        "svg",
                        {
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13.347",
                            height: "12.766",
                            viewBox: "0 0 13.347 12.766"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              id: "send-message-icon",
                              "data-name": "send-message-icon",
                              d:
                                "M2511.158-3909.893l12.347-5.929-12.347-5.837.235,4.51,10.029,1.327-10.029,1.477Z",
                              transform: "translate(-2510.658 3922.159)",
                              fill: "#fff",
                              stroke: "#fff",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "1"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "report-button hover-effect",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          id: "button-collapse-chat-menu",
          href: "#chat-menu-items",
          role: "button"
        }
      },
      [_c("i", { staticClass: "fa fa-ellipsis-h" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "message-button-wrapper" }, [
      _c("button", [
        _c("i", { staticClass: "fa fa-phone-alt" }),
        _vm._v("\n                    تماس\n                  ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "image-wrapper" }, [
      _c("div", { staticClass: "lds-ring" }, [
        _c("div"),
        _vm._v(" "),
        _c("div"),
        _vm._v(" "),
        _c("div"),
        _vm._v(" "),
        _c("div")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b8dd9550", module.exports)
  }
}

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "main-content col-xs-12",
      class: { "is-fix-alert": _vm.isRequiredFixAlert }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-xs-12 contact-wrapper pull-right col-sm-4 col-lg-3",
          class: { hidden_element: _vm.selectedContact }
        },
        [
          _c(
            "div",
            { staticClass: "row" },
            [_c("router-view", { attrs: { name: "messenger-list" } })],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.selectedContact
        ? _c(
            "div",
            {
              staticClass:
                "col-xs-12 pull-right message-wrapper col-sm-8 col-lg-6",
              class: { hidden_element: !_vm.selectedContact }
            },
            [_c("mainChatWrapper")],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.selectedContact && _vm.isCurrentStep == 0
        ? _c(
            "div",
            {
              staticClass:
                "col-xs-12 default-message-wrapper hidden-xs col-sm-8 col-lg-9"
            },
            [
              _vm.userType
                ? _c(
                    "div",
                    {
                      staticClass: "default-main-contents seller-buyAd-picture"
                    },
                    [_vm._m(0)]
                  )
                : _c("div", { staticClass: "default-main-contents" }, [
                    _c("i", { staticClass: "fa fa-user" }),
                    _vm._v(" "),
                    _c("p", [_vm._v("برای شروع چت لطفا یک مخاطب انتخاب کنید")])
                  ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.selectedContact
        ? _c(
            "div",
            {
              staticClass:
                "contact-wrapper pull-left hiiden-sm hidden-xs col-lg-3",
              class: { hidden_element: !_vm.selectedContact }
            },
            [
              _c(
                "div",
                { staticClass: "row" },
                [
                  _vm.selectedContact
                    ? _c("chat-user-info", {
                        attrs: { "selected-contact": _vm.selectedContact }
                      })
                    : _vm._e()
                ],
                1
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "red-text" }, [
      _vm._v(
        "\n        برای دسترسی به خریداران پیشنهادی از این قسمت در منوی سمت راست اقدام\n        کنید\n        "
      ),
      _c("img", {
        attrs: { src: __webpack_require__(526), alt: "" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7fac3fde", module.exports)
  }
}

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "/images/messegs-buy-ads.jpg?afb212ea3048bdd1ad7baffb91a24797";

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(913)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(915)
/* template */
var __vue_template__ = __webpack_require__(916)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c3786fc"
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
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/review-component/chat-review.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c3786fc", Component.options)
  } else {
    hotAPI.reload("data-v-6c3786fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(914);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("59c13f86", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c3786fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-review.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c3786fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat-review.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n/* Track */\n[data-v-6c3786fc]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n.user-image[data-v-6c3786fc] {\n  width: 90px;\n  height: 90px;\n  margin: 0 auto;\n  border-radius: 45px;\n  overflow: hidden;\n}\n.user-name[data-v-6c3786fc] {\n  text-align: center;\n  font-size: 18px;\n  color: #474747;\n  line-height: 1.618;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.main-text p[data-v-6c3786fc] {\n  font-size: 15px;\n  color: #777;\n  text-align: right;\n  margin: 15px auto 0;\n}\n.main-text > p[data-v-6c3786fc] {\n  font-weight: 800;\n  font-size: 15px;\n  color: #777;\n  text-align: center;\n  margin: 15px auto 0;\n  line-height: 1.618;\n}\n.main-text[data-v-6c3786fc] {\n  text-align: center;\n  margin: 0 0 40px;\n}\n.buttons-wrapper .green-button[data-v-6c3786fc] {\n  background: #fff;\n\n  color: #777;\n\n  border: 1px solid #00c569;\n\n  font-size: 16px;\n\n  font-weight: bold;\n\n  padding: 5px 40px;\n\n  margin: 15px;\n}\n.buttons-wrapper .green-button[data-v-6c3786fc]:hover {\n  background: #00c569;\n\n  color: #fff;\n\n  border: 1px solid #00c569;\n}\n\n/* rate styles */\n.rate[data-v-6c3786fc] {\n  padding: 0px;\n\n  margin: 0 auto;\n\n  overflow: hidden;\n\n  width: 260px;\n}\n.rate:not(:checked) > input[data-v-6c3786fc] {\n  position: absolute;\n  top: -9999px;\n}\n.rate:not(:checked) > label[data-v-6c3786fc] {\n  float: left;\n\n  width: 45px;\n\n  overflow: hidden;\n\n  white-space: nowrap;\n\n  cursor: pointer;\n\n  font-size: 41px;\n\n  color: #ccc;\n\n  text-align: center;\n\n  height: 46px;\n\n  margin-left: 8px;\n}\n.rate:not(:checked) > label[data-v-6c3786fc]:first-of-type {\n  margin-left: 0;\n}\n.rate:not(:checked) > label[data-v-6c3786fc]:before {\n  content: \"\\F005\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n}\n.rate > input:checked ~ label[data-v-6c3786fc] {\n  color: #ffbb00;\n}\n.rate:not(:checked) > label[data-v-6c3786fc]:hover,\n.rate:not(:checked) > label:hover ~ label[data-v-6c3786fc] {\n  color: #fbca1e;\n}\n.rate > input:checked + label[data-v-6c3786fc]:hover,\n.rate > input:checked + label:hover ~ label[data-v-6c3786fc],\n.rate > label:hover ~ input:checked ~ label[data-v-6c3786fc] {\n  color: #fbca1e;\n}\n.rate label[data-v-6c3786fc]::after {\n  position: relative;\n\n  color: #777;\n\n  font-size: 20px;\n\n  top: -35px;\n\n  width: 100%;\n\n  text-align: center;\n\n  display: block;\n}\n#lable-star5[data-v-6c3786fc]::after {\n  content: \"5\";\n}\n#lable-star4[data-v-6c3786fc]::after {\n  content: \"4\";\n}\n#lable-star3[data-v-6c3786fc]::after {\n  content: \"3\";\n}\n#lable-star2[data-v-6c3786fc]::after {\n  content: \"2\";\n}\n#lable-star1[data-v-6c3786fc]::after {\n  content: \"1\";\n}\n.buttons-wrapper[data-v-6c3786fc] {\n  display: inline-block;\n  margin-bottom: 15px;\n}\n.chat-report-form-wrapper[data-v-6c3786fc] {\n  direction: rtl;\n\n  overflow: hidden;\n}\n.chat-report-form-wrapper textarea[data-v-6c3786fc] {\n  max-width: 600px;\n\n  margin: 15px auto 0px;\n\n  height: 110px;\n\n  max-height: 170px;\n\n  border-radius: 5px;\n\n  background: #fafafa;\n}\n.buttons-wrapper .green-button[data-v-6c3786fc] {\n  background: #fff;\n\n  color: #777;\n\n  border: 1px solid #00c569;\n\n  font-size: 16px;\n\n  font-weight: bold;\n\n  padding: 5px;\n  margin: 15px;\n  width: 138px;\n}\n.buttons-wrapper .green-button[data-v-6c3786fc]:hover {\n  background: #00c569;\n\n  color: #fff;\n\n  border: 1px solid #00c569;\n}\n.buttons-wrapper .review-button[data-v-6c3786fc] {\n  background: #00c569;\n  color: #fff;\n}\n.review-button i[data-v-6c3786fc] {\n  color: #ffbb00;\n}\n\n/* end rate styles  */\n.error-input[data-v-6c3786fc] {\n  border: 1px solid #e41c39;\n}\n.main-text p.error-text[data-v-6c3786fc] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.btn-disable[data-v-6c3786fc] {\n  background: #dbdbdb;\n}\n@media screen and (max-width: 1366px) {\n.rate[data-v-6c3786fc] {\n    width: 217px;\n}\n.rate:not(:checked) > label[data-v-6c3786fc] {\n    width: 40px;\n    font-size: 35px;\n    height: 44px;\n    margin-left: 4px;\n}\n.rate label[data-v-6c3786fc]::after {\n    font-size: 17px;\n    top: -30px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 915:
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

// import StartStep from "./review-steps/start-step";
// import ReviewStep from "./review-steps/review-step";
// import ReviewDescription from "./review-steps/review-description";
// import FinalStep from "./review-steps/final-step";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      reviewData: {
        rate: "",
        reviewText: ""
      },
      errors: {
        reviewData: "",
        reviewText: ""
      },
      submitLoader: false,
      successMessage: ""
    };
  },
  methods: {
    init: function init() {
      var self = this;

      $("#review-modal").on("hide.bs.modal", function (e) {
        setTimeout(function () {
          self.reviewSteps(0);
        }, 200);
        self.resetData();
      });

      $("#review-modal").on("show.bs.modal", function (e) {
        self.handleBackBtnClickOnDevices();
      });
    },
    reviewSteps: function reviewSteps(step) {
      this.$parent.reviewCurrentStep = step;
    },
    showReviewText: function showReviewText() {
      console.log($("#chat-report-form"));
      $("#chat-report-form").collapse("show");
    },
    resetData: function resetData() {
      var self = this;
      this.emptyErros();
      this.reviewData = {
        rate: "",
        reviewText: ""
      };
      $("#chat-report-form").collapse("hide");
      setTimeout(function () {
        self.$parent.reviewUserData = "";
      }, 200);
    },
    reviewResetData: function reviewResetData() {
      $("#review-modal").modal("hide");
      this.resetData();
    },
    emptyErros: function emptyErros() {
      this.errors = {
        reviewData: "",
        reviewText: ""
      };
    },
    reviewTextValidator: function reviewTextValidator(reviewText) {
      this.errors.reviewText = "";

      if (reviewText != "") {
        if (!this.validateRegx(reviewText, /^(?!(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*[!#-&\(-\*@])[\n\x0E \(\)\.-\u06FF]+$/)) {
          this.errors.reviewText = "توضیحات شامل کاراکتر های غیرمجاز است";
        }
      }
    },
    validateRegx: function validateRegx(input, regx) {
      return regx.test(input);
    },
    submitReview: function submitReview() {
      var self = this;
      this.reviewTextValidator(self.reviewData.reviewText);
      if (self.reviewData.rate == "" && self.reviewData.reviewText == "") {
        this.errors.reviewData = "میزان رضایت یا نظر خود را وارد کنید";
      }
      if (!self.errors.reviewData && !self.errors.reviewText) {
        this.registerReview();
      }
    },
    registerReview: function registerReview() {
      var self = this;
      this.submitLoader = true;

      var reviewObg = {
        user_id: self.reviewUserData.id
      };

      if (self.reviewData.rate) {
        reviewObg.rating_score = self.reviewData.rate;
      }
      if (self.reviewData.reviewText) {
        reviewObg.text = self.reviewData.reviewText;
      }

      axios.post("/profile/add-comment", reviewObg).then(function (response) {
        self.submitLoader = false;
        if (response.data.status == true) {
          self.$parent.isUserAuthorizedToPostComment();
          self.resetData();
          if (reviewObg.text) {
            self.successMessage = "نظر شما با موفقیت ثبت و پس از تایید نمایش داده خواهد شد";
          } else {
            self.successMessage = "نظر شما با موفقیت ثبت شد";
          }
          self.reviewSteps(1);
          // show success modal
        } else {
          self.errors.reviewData = "خطایی رخ داده است لطفا دوباره تلاش کنید";
        }
      });
    },
    handleBackBtnClickOnDevices: function handleBackBtnClickOnDevices() {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        self.reviewResetData();
      });
    }
  },
  mounted: function mounted() {
    this.init();
  },
  watch: {
    "reviewData.rate": function reviewDataRate() {
      this.emptyErros();
    },
    "reviewData.reviewText": function reviewDataReviewText() {
      this.emptyErros();
    }
  }
});

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "rate-score-wrapper" }, [
    _c("div", { staticClass: "main-text" }, [
      _c("p", [_vm._v("میزان رضایت خود را از 1 تا 5 ثبت کنید")]),
      _vm._v(" "),
      _c("div", { staticClass: "rate" }, [
        _c("input", {
          attrs: { type: "radio", id: "chatStar5", name: "rate", value: "5" }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star5", for: "chatStar5", title: "text" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "radio", id: "chatStar4", name: "rate", value: "4" }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star4", for: "chatStar4", title: "text" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "radio", id: "chatStar3", name: "rate", value: "3" }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star3", for: "chatStar3", title: "text" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "radio", id: "chatStar2", name: "rate", value: "2" }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star2", for: "chatStar2", title: "text" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "radio", id: "chatStar1", name: "rate", value: "1" }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star1", for: "chatStar1", title: "text" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "chat-report-form-wrapper" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "report-button-wrapper" }, [
          _c(
            "button",
            {
              staticClass: "green-button register-report hover-effect",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.submitReview()
                }
              }
            },
            [_vm._v("\n          ثبت نظر\n        ")]
          )
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
    return _c(
      "div",
      {
        staticClass: "form-wrapper collapse",
        attrs: { id: "chat-report-form" }
      },
      [
        _c("p", [_vm._v("نظر خود را اینجا بنویسید")]),
        _vm._v(" "),
        _c("textarea", {
          attrs: {
            placeholder:
              "نظرتان درباره این کاربر را با بقیه به اشتراک بگذارید..."
          }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "red-text error-text" })
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c3786fc", module.exports)
  }
}

/***/ })

});