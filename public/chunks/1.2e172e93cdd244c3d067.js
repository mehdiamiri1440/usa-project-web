webpackJsonp([1,3],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(448)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(450)
/* template */
var __vue_template__ = __webpack_require__(451)
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(538)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(540)
/* template */
var __vue_template__ = __webpack_require__(562)
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

/***/ 391:
/***/ (function(module, exports) {

module.exports = "/images/512-buskool-logo.jpg?eac56955a30a44cc7dad1d6971926bf9";

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(449);
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

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.contact-body .contact-search[data-v-42216dd2] {\n  background: #f0f0f0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.contact-items[data-v-42216dd2] {\n  padding-top: 102px;\n}\n.contact-items.is-buyer-list[data-v-42216dd2] {\n  padding-top: 60px;\n}\n.contact-body .contact-search .contact-search-input-wrapper[data-v-42216dd2] {\n  position: relative;\n  padding: 10px 7px;\n}\n.contact-body .contact-search .contact-search-input-wrapper > i[data-v-42216dd2] {\n  position: absolute;\n  right: 20px;\n  font-size: 16px;\n  color: #919191;\n  top: 21px;\n}\n.contact-body .contact-search .contact-search-input-wrapper input[data-v-42216dd2] {\n  padding: 8px 40px 8px 15px;\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n}\n.contact-body .contact-search .contact-search-input-wrapper > button[data-v-42216dd2] {\n  position: absolute;\n  left: 7px;\n  font-size: 16px;\n  color: #919191;\n  top: 12px;\n  background: none;\n  border: none;\n  padding: 7px 15px 1px;\n}\n.contact-body .contact-image[data-v-42216dd2],\n.contact-body .channel-image[data-v-42216dd2] {\n  width: 45px;\n  height: 45px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  border: 1px solid #f2f2f2;\n  position: relative;\n}\n.contact-body .channel-image img[data-v-42216dd2] {\n  width: 100%;\n  height: 100%;\n}\n.contact-body .contact-item a[data-v-42216dd2] {\n  font-size: 13px;\n  color: #666;\n  overflow: hidden;\n  padding: 10px 7px;\n  border-bottom: 1px solid #ededed;\n  display: block;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-left: 2px solid #fff;\n}\n.contact-body .contact-item a[data-v-42216dd2]:hover,\n.contact-body .contact-item a.active[data-v-42216dd2] {\n  background: #fafafa;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-left: 2px solid #00c569;\n}\n.contact-body .contact-item:last-of-type a[data-v-42216dd2] {\n  border-bottom: none;\n}\n.contact-body .contact-item span.contact-name[data-v-42216dd2] {\n  float: right;\n  position: relative;\n  font-size: 14px;\n  max-width: calc(100% - 85px);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: right;\n  font-weight: 500;\n}\n.contact-body .contact-item span.contact-last-message[data-v-42216dd2] {\n  float: right;\n  width: calc(100% - 60px);\n  font-weight: lighter;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  direction: rtl;\n  text-align: right;\n}\n.contact-body .contact-item .contact-date[data-v-42216dd2] {\n  float: left;\n  padding-top: 5px;\n  width: 50px;\n  direction: ltr;\n  text-align: center;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2],\n.contact-body .contact-item .my-channel-name-wraopper[data-v-42216dd2] {\n  float: right;\n  padding-top: 6px;\n  direction: ltr;\n  text-align: left;\n  width: calc(100% - 45px);\n  padding-right: 15px;\n}\n.contact-body .contact-item .my-channel-name-wraopper[data-v-42216dd2] {\n  padding-top: 15px;\n}\n.contact-body .contact-item .my-channel-name-wraopper .icon-wrapper[data-v-42216dd2] {\n  font-size: 16px;\n  color: #999;\n  float: left;\n  margin-left: 15px;\n}\n.last-message-date[data-v-42216dd2] {\n  display: inline-block;\n  height: 17px;\n  width: 70px;\n  font-size: 12px;\n  line-height: 2;\n  text-align: center;\n}\n.count-number[data-v-42216dd2] {\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  background: #00c569;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 10px;\n  line-height: 2;\n}\n.count-number-wrapper[data-v-42216dd2] {\n  width: 60px;\n  float: left;\n  text-align: center;\n}\n.empty-list[data-v-42216dd2] {\n  text-align: center;\n  padding: 10px 15px 0;\n}\n.empty-list p[data-v-42216dd2] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #777;\n}\n.empty-list i[data-v-42216dd2] {\n  margin: 5px;\n}\n.load-more[data-v-42216dd2] {\n  margin: 0px 0 0;\n  display: inline-block;\n  background: #00c569;\n  color: #fff;\n  padding: 10px 25px;\n  border-radius: 0px;\n  text-align: center;\n  font-size: 15px;\n  font-weight: bold;\n  border: none;\n  width: 100%;\n}\n.verified-user[data-v-42216dd2] {\n  line-height: 1;\n  font-size: 15px;\n  position: relative;\n  right: 3px;\n  top: -2px;\n  float: right;\n}\n.verified-user[data-v-42216dd2]::before {\n  top: 4px;\n  left: 3px;\n  font-size: 9px;\n}\n.contacts-switch-buttons-wrapper[data-v-42216dd2] {\n  float: right;\n  width: 100%;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-42216dd2] {\n  float: right;\n  width: 50%;\n}\n.contacts-switch-buttons-wrapper .contact-button[data-v-42216dd2] {\n  border: none;\n  width: 100%;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  color: #666;\n  background: #f0f0f0;\n}\n.contacts-switch-buttons-wrapper .contact-button .fa-plus[data-v-42216dd2] {\n  position: relative;\n  left: -5px;\n  top: -9px;\n  color: #00c569;\n  font-size: 12px;\n}\n.contacts-switch-buttons-wrapper .contact-button.active[data-v-42216dd2],\n.contacts-switch-buttons-wrapper .contact-button[data-v-42216dd2]:hover {\n  background-color: #fff;\n  border-bottom: 2px solid #00c569;\n  margin-bottom: -2px;\n  z-index: 1;\n}\ni.fa-star[data-v-42216dd2] {\n  font-size: 16px;\n  background: linear-gradient(\n    21deg,\n    rgb(199, 168, 79) 0%,\n    rgb(249, 242, 159) 51%,\n    rgb(199, 168, 79) 100%\n  );\n  background-clip: border-box;\n  background-clip: border-box;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  position: relative;\n  top: 2px;\n}\n.contact-button.active[data-v-42216dd2] {\n  border-radius: 4px 4px 0 0;\n}\n.buyad-lists-wrapper .contact-item > button[data-v-42216dd2] {\n  background: #fff;\n  border: none;\n  border-bottom: 2px solid #dddddd;\n  padding: 0;\n  text-align: center;\n}\n.buyad-expier[data-v-42216dd2] {\n  color: #556080;\n}\n.buyad-notice[data-v-42216dd2] {\n  color: #aeaeae;\n}\n.request-contact-image[data-v-42216dd2] {\n  width: 30px;\n  height: 30px;\n  float: right;\n}\n.buyad-info[data-v-42216dd2] {\n  font-size: 15px;\n  padding: 5px 0;\n  font-weight: bold;\n  color: #777;\n}\n.buyad-info span[data-v-42216dd2] {\n  color: #556080;\n}\n.buyad-header[data-v-42216dd2] {\n  padding: 8px 5px;\n  float: right;\n  width: 100%;\n  border-bottom: 1px solid #f2f2f2;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2] {\n  float: right;\n  padding-top: 2px;\n  direction: ltr;\n  text-align: left;\n  width: calc(100% - 45px);\n  padding-right: 8px;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2]:last-of-type {\n  padding-top: 6px;\n}\n.empty-list i[data-v-42216dd2] {\n  color: #777;\n  margin-top: 50px;\n  font-size: 50px;\n  text-align: center;\n  margin-bottom: 10px;\n  display: block;\n}\n.empty-list p[data-v-42216dd2]:first-of-type {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.618;\n  margin-top: 11px;\n}\n.user-button[data-v-42216dd2] {\n  background: #00c569;\n  color: #fff;\n  border-radius: 4px;\n  padding: 8px 0;\n  max-width: 200px;\n  margin: 15px auto;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  display: block;\n  border: none;\n  width: 100%;\n  font-size: 17px;\n  font-weight: bold;\n}\n.user-button[data-v-42216dd2] :hover {\n  /* background: #00c569; */\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.user-not-fount[data-v-42216dd2] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 500;\n  padding-top: 60px;\n}\n.user-not-fount img[data-v-42216dd2] {\n  width: 200px;\n  display: block;\n  margin: 60px auto 20px;\n}\n.user-not-fount p[data-v-42216dd2] {\n  font-weight: 500;\n}\n", ""]);

// exports


/***/ }),

/***/ 450:
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
    },
    "$parent.isChanleActive": function $parentIsChanleActive() {
      var _this3 = this;

      if (this.$parent.isChanleActive) {
        setTimeout(function () {
          _this3.activeComponentTooltip();
        }, 10);
      }
    }
  }
});

/***/ }),

/***/ 451:
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
                  ? _c(
                      "div",
                      {
                        staticClass: "contact-items",
                        class: { "is-buyer-list": !_vm.$parent.userType }
                      },
                      [
                        _c("ul", [
                          _c("li", { staticClass: "contact-item" }, [
                            _c(
                              "a",
                              {
                                class: {
                                  active: _vm.$parent.isChanleActive
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.$parent.openChannel()
                                  }
                                }
                              },
                              [
                                _vm._m(3),
                                _vm._v(" "),
                                _vm.$parent.channelInfo.unread_contents == 0
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "my-channel-name-wraopper"
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "contact-name text-rtl"
                                          },
                                          [_vm._v(" کانال رسمی باسکول ")]
                                        ),
                                        _vm._v(" "),
                                        _c(
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
                                        ),
                                        _vm._v(" "),
                                        _vm._m(4)
                                      ]
                                    )
                                  : _c(
                                      "div",
                                      {
                                        staticClass: "my-contact-info-wrapper"
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "contact-name text-rtl"
                                          },
                                          [_vm._v(" کانال رسمی باسکول ")]
                                        ),
                                        _vm._v(" "),
                                        _c(
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "last-message-date" },
                                          [
                                            _vm._v(
                                              "\n                " +
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    _vm.$parent.channelInfo
                                                      .last_content_date,
                                                    "jYYYY/jMM/jDD"
                                                  )
                                                ) +
                                                "\n              "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "my-contact-info-wrapper" },
                                  [
                                    _c("span", {
                                      staticClass: "contact-last-message",
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.$parent.channelInfo
                                            .last_content_title
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "count-number-wrapper" },
                                      [
                                        _vm.$parent.channelInfo
                                          .unread_contents !== 0
                                          ? _c("p", {
                                              staticClass: "count-number",
                                              domProps: {
                                                textContent: _vm._s(
                                                  _vm.$parent.channelInfo
                                                    .unread_contents
                                                )
                                              }
                                            })
                                          : _vm._e()
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "div",
                              { staticClass: "empty-list" },
                              [
                                _c("i", { staticClass: "fa fa-user" }),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v("در حال حاضر مخاطبی وجود ندارد")
                                ]),
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
                                          "\n              شروع چت با خریداران\n            "
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
                                          "\n              شروع چت با فروشندگان\n            "
                                        )
                                      ]
                                    )
                              ],
                              1
                            )
                          ])
                        ])
                      ]
                    )
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
                _c("li", { staticClass: "contact-item" }, [
                  _c(
                    "a",
                    {
                      class: {
                        active: _vm.$parent.isChanleActive
                      },
                      attrs: { href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.$parent.openChannel()
                        }
                      }
                    },
                    [
                      _vm._m(5),
                      _vm._v(" "),
                      _vm.$parent.channelInfo.unread_contents == 0
                        ? _c(
                            "div",
                            { staticClass: "my-channel-name-wraopper" },
                            [
                              _c(
                                "span",
                                { staticClass: "contact-name text-rtl" },
                                [_vm._v(" کانال رسمی باسکول ")]
                              ),
                              _vm._v(" "),
                              _c(
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
                                [_c("i", { staticClass: "fa fa-certificate" })]
                              ),
                              _vm._v(" "),
                              _vm._m(6)
                            ]
                          )
                        : _c(
                            "div",
                            { staticClass: "my-contact-info-wrapper" },
                            [
                              _c(
                                "span",
                                { staticClass: "contact-name text-rtl" },
                                [_vm._v(" کانال رسمی باسکول ")]
                              ),
                              _vm._v(" "),
                              _c(
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
                                [_c("i", { staticClass: "fa fa-certificate" })]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "last-message-date" }, [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm._f("moment")(
                                        _vm.$parent.channelInfo
                                          .last_content_date,
                                        "jYYYY/jMM/jDD"
                                      )
                                    ) +
                                    "\n            "
                                )
                              ])
                            ]
                          ),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-contact-info-wrapper" }, [
                        _c("span", {
                          staticClass: "contact-last-message",
                          domProps: {
                            textContent: _vm._s(
                              _vm.$parent.channelInfo.last_content_title
                            )
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "count-number-wrapper" }, [
                          _vm.$parent.channelInfo.unread_contents !== 0
                            ? _c("p", {
                                staticClass: "count-number",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.$parent.channelInfo.unread_contents
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.$parent.contactList, function(contact, index) {
                  return _c("li", { key: index, staticClass: "contact-item" }, [
                    _c(
                      "a",
                      {
                        class: {
                          active:
                            _vm.$parent.selectedContact.contact_id ==
                              contact.contact_id && !_vm.$parent.isChanleActive
                        },
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.$parent.loadChatHistory(contact, index, false)
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
                                  src: __webpack_require__(160)
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
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
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
                                [_c("i", { staticClass: "fa fa-certificate" })]
                              )
                            : _vm._e(),
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
        attrs: { src: __webpack_require__(452), alt: "" }
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "channel-image" }, [
      _c("img", {
        attrs: { src: __webpack_require__(391) }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icon-wrapper" }, [
      _c("i", { staticClass: "fa fa-bullhorn" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "channel-image" }, [
      _c("img", {
        attrs: { src: __webpack_require__(391) }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icon-wrapper" }, [
      _c("i", { staticClass: "fa fa-bullhorn" })
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

/***/ 452:
/***/ (function(module, exports) {

module.exports = "/images/empty-message.svg?de5572e9650b06d1981ac6d77f76f741";

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(454)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(456)
/* template */
var __vue_template__ = __webpack_require__(457)
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

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(455);
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

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n/* Track */\n[data-v-6c3786fc]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n}\n.user-image[data-v-6c3786fc] {\n  width: 90px;\n  height: 90px;\n  margin: 0 auto;\n  border-radius: 45px;\n  overflow: hidden;\n}\n.user-name[data-v-6c3786fc] {\n  text-align: center;\n  font-size: 18px;\n  color: #474747;\n  line-height: 1.618;\n  font-weight: bold;\n  margin-top: 10px;\n}\n.main-text p[data-v-6c3786fc] {\n  font-size: 15px;\n  color: #777;\n  text-align: right;\n  margin: 15px auto 0;\n}\n.main-text > p[data-v-6c3786fc] {\n  font-weight: 800;\n  font-size: 15px;\n  color: #777;\n  text-align: center;\n  margin: 15px auto 0;\n  line-height: 1.618;\n}\n.main-text[data-v-6c3786fc] {\n  text-align: center;\n  margin: 0 0 20px;\n}\n\n/* rate styles */\n.rate[data-v-6c3786fc] {\n  padding: 0px;\n\n  margin: 0 auto;\n\n  overflow: hidden;\n\n  width: 260px;\n  height: 60px;\n}\n.rate:not(:checked) > input[data-v-6c3786fc] {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n  /* top: -9999px; */\n}\n.rate:not(:checked) > label[data-v-6c3786fc] {\n  float: left;\n\n  width: 45px;\n\n  overflow: hidden;\n\n  white-space: nowrap;\n\n  cursor: pointer;\n\n  font-size: 41px;\n\n  color: #ccc;\n\n  text-align: center;\n\n  height: 46px;\n\n  margin-left: 8px;\n}\n.rate:not(:checked) > label[data-v-6c3786fc]:first-of-type {\n  margin-left: 0;\n}\n.rate:not(:checked) > label[data-v-6c3786fc]:before {\n  content: \"\\F005\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n}\n.rate > input:checked ~ label[data-v-6c3786fc] {\n  color: #ffbb00;\n}\n.rate:not(:checked) > label[data-v-6c3786fc]:hover,\n.rate:not(:checked) > label:hover ~ label[data-v-6c3786fc] {\n  color: #fbca1e;\n}\n.rate > input:checked + label[data-v-6c3786fc]:hover,\n.rate > input:checked + label:hover ~ label[data-v-6c3786fc],\n.rate > label:hover ~ input:checked ~ label[data-v-6c3786fc] {\n  color: #fbca1e;\n}\n.rate label[data-v-6c3786fc]::after {\n  position: relative;\n\n  color: #777;\n\n  font-size: 20px;\n\n  top: -35px;\n\n  width: 100%;\n\n  text-align: center;\n\n  display: block;\n}\n#lable-star5[data-v-6c3786fc]::after {\n  content: \"5\";\n}\n#lable-star4[data-v-6c3786fc]::after {\n  content: \"4\";\n}\n#lable-star3[data-v-6c3786fc]::after {\n  content: \"3\";\n}\n#lable-star2[data-v-6c3786fc]::after {\n  content: \"2\";\n}\n#lable-star1[data-v-6c3786fc]::after {\n  content: \"1\";\n}\n.form-wrapper[data-v-6c3786fc] {\n  padding: 0 10px;\n}\n.chat-report-form-wrapper[data-v-6c3786fc] {\n  direction: rtl;\n\n  overflow: hidden;\n}\n.chat-report-form-wrapper textarea[data-v-6c3786fc] {\n  max-width: 600px;\n\n  margin: 15px auto 0px;\n\n  height: 110px;\n\n  max-height: 170px;\n\n  border-radius: 5px;\n\n  background: #fff;\n}\n.report-button-wrapper .green .review-button i[data-v-6c3786fc] {\n  color: #ffbb00;\n}\n\n/* end rate styles  */\n.error-input[data-v-6c3786fc] {\n  border: 1px solid #e41c39;\n}\n.main-text p.error-text[data-v-6c3786fc] {\n  font-size: 14px;\n  font-weight: 400;\n  height: 15px;\n  margin-top: 10px;\n}\n.btn-disable[data-v-6c3786fc] {\n  background: #dbdbdb;\n}\n.hint-reviews[data-v-6c3786fc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  max-width: 272px;\n  margin: 0 auto;\n  direction: rtl;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  font-size: 13px;\n  color: #bebebe;\n  padding-right: 7px;\n  font-weight: 500;\n}\n@media screen and (max-width: 1366px) {\n.rate[data-v-6c3786fc] {\n    width: 217px;\n}\n.rate:not(:checked) > label[data-v-6c3786fc] {\n    width: 40px;\n    font-size: 35px;\n    height: 44px;\n    margin-left: 4px;\n}\n.rate label[data-v-6c3786fc]::after {\n    font-size: 17px;\n    top: -30px;\n}\n.hint-reviews[data-v-6c3786fc] {\n    max-width: 233px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 456:
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

// import StartStep from "./review-steps/start-step";
// import ReviewStep from "./review-steps/review-step";
// import ReviewDescription from "./review-steps/review-description";
// import FinalStep from "./review-steps/final-step";
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["userFullName", "userId"],
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
      submitLoader: false
    };
  },
  methods: {
    reviewSteps: function reviewSteps(step) {
      this.$parent.reviewCurrentStep = step;
    },
    showReviewText: function showReviewText() {
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
        if (!this.validateRegx(reviewText, /^[\u0600-\u06FF\a-zA-z\s_,.:/;()+-\d]+$/)) {
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
        user_id: self.userId
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
          // self.$parent.isUserAuthorizedToPostComment();
          self.resetData();
          if (reviewObg.text) {
            self.$parent.successMessage = "نظر شما با موفقیت ثبت و پس از تایید نمایش داده خواهد شد";
          } else {
            self.$parent.successMessage = "نظر شما با موفقیت ثبت شد";
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
  watch: {
    "reviewData.rate": function reviewDataRate() {
      this.emptyErros();
    },
    "reviewData.reviewText": function reviewDataReviewText(value) {
      this.emptyErros();
      this.reviewTextValidator(value);
    }
  }
});

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "rate-score-wrapper row" }, [
    _c("div", { staticClass: "main-text" }, [
      _c("p", [_vm._v("به این کاربر از 1 تا 5 امتیاز دهید")]),
      _vm._v(" "),
      _c("div", { staticClass: "rate" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar5", name: "rate", value: "5" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "5") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "5")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star5", for: "chatStar5", title: "5" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar4", name: "rate", value: "4" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "4") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "4")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star4", for: "chatStar4", title: "4" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar3", name: "rate", value: "3" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "3") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "3")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star3", for: "chatStar3", title: "3" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar2", name: "rate", value: "2" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "2") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "2")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star2", for: "chatStar2", title: "2" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.reviewData.rate,
              expression: "reviewData.rate"
            }
          ],
          attrs: { type: "radio", id: "chatStar1", name: "rate", value: "1" },
          domProps: { checked: _vm._q(_vm.reviewData.rate, "1") },
          on: {
            change: function($event) {
              _vm.$set(_vm.reviewData, "rate", "1")
            }
          }
        }),
        _vm._v(" "),
        _c("label", {
          attrs: { id: "lable-star1", for: "chatStar1", title: "1" },
          on: {
            click: function($event) {
              _vm.showReviewText()
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "chat-report-form-wrapper" }, [
        _c(
          "div",
          {
            staticClass: "form-wrapper collapse",
            attrs: { id: "chat-report-form" }
          },
          [
            _c("p", [
              _vm._v("\n          نظر خود را درباره\n          "),
              _vm.userFullName
                ? _c("span", {
                    staticClass: "light-green-text",
                    domProps: { textContent: _vm._s(_vm.userFullName) }
                  })
                : _c("span", { staticClass: "light-green-text" }, [
                    _vm._v("این کاربر")
                  ]),
              _vm._v("\n          اینجا بنویسید\n        ")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.reviewData.reviewText,
                  expression: "reviewData.reviewText"
                }
              ],
              class: { "error-input": _vm.errors.reviewText },
              attrs: {
                placeholder:
                  "نظرتان درباره این کاربر را با بقیه به اشتراک بگذارید..."
              },
              domProps: { value: _vm.reviewData.reviewText },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.reviewData, "reviewText", $event.target.value)
                }
              }
            })
          ]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "red-text error-text" }, [
          _vm.errors.reviewText || _vm.errors.reviewData
            ? _c("span", {
                domProps: {
                  textContent: _vm._s(
                    _vm.errors.reviewText || _vm.errors.reviewData
                  )
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "report-button-wrapper" }, [
          _c(
            "button",
            {
              staticClass: "green-button register-report hover-effect",
              class: {
                "btn-disable":
                  _vm.errors.reviewText ||
                  _vm.errors.reviewData ||
                  (!_vm.reviewData.reviewText && !_vm.reviewData.rate) ||
                  _vm.submitLoader
              },
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
    return _c("div", { staticClass: "hint-reviews" }, [
      _c("span", [_vm._v("خیلی خوب")]),
      _vm._v(" "),
      _c("span", [_vm._v("خیلی بد")])
    ])
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

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(459)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(461)
/* template */
var __vue_template__ = __webpack_require__(462)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d1f163d"
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
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/review-component/success-submit-chat-review.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d1f163d", Component.options)
  } else {
    hotAPI.reload("data-v-4d1f163d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(460);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("444469d9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d1f163d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./success-submit-chat-review.vue", function() {
     var newContent = require("!!../../../../../../../../node_modules/css-loader/index.js!../../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d1f163d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./success-submit-chat-review.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.main-text[data-v-4d1f163d] {\n  text-align: center;\n  margin: 20px 0 40px;\n}\n.main-text p[data-v-4d1f163d] {\n  font-weight: 800;\n  font-size: 16px;\n  color: #474747;\n  text-align: center;\n  margin: 15px auto;\n  padding: 0 30px;\n  line-height: 1.618;\n}\n.success-icon i[data-v-4d1f163d] {\n  display: inline-block;\n\n  font-size: 55px;\n\n  color: #00c569;\n\n  border: 1px solid;\n\n  border-radius: 50px;\n\n  width: 90px;\n\n  height: 90px;\n\n  padding-top: 18px;\n}\n@media screen and (max-width: 768px) {\n.success-icon[data-v-4d1f163d] {\n    margin-top: 80px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 461:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      reportFormData: "",
      reportFormActive: false,
      stars: ""
    };
  }
});

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "main-text" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("p", { domProps: { textContent: _vm._s(_vm.$parent.successMessage) } })
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "success-icon" }, [
      _c("i", { staticClass: "fa fa-check" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d1f163d", module.exports)
  }
}

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(539);
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

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.message-wrapper[data-v-7fac3fde] {\n  border-right: 1px solid #e4e4e4;\n  position: relative;\n  height: 100%;\n}\n.main-content[data-v-7fac3fde] {\n  padding: 59px 250px 0 0;\n\n  direction: rtl;\n\n  /* border-bottom: 2px solid #f2f2f2; */\n  height: 100%;\n  position: fixed;\n\n  /*right: 0;*/\n  background: #fff;\n\n  left: 0;\n\n  bottom: 0;\n\n  top: 0;\n}\n.main-content.is-fix-alert[data-v-7fac3fde] {\n  padding: 85px 250px 0 0;\n}\n.little-main .main-content[data-v-7fac3fde] {\n  padding: 59px 80px 0 0;\n}\n.lds-ring[data-v-7fac3fde] {\n  display: inline-block;\n\n  position: absolute;\n\n  width: 64px;\n\n  height: 64px;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n}\n.lds-ring div[data-v-7fac3fde] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 5px solid #00c569;\n  border-radius: 50%;\n  -webkit-animation: lds-ring-data-v-7fac3fde 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring-data-v-7fac3fde 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #00c569 transparent transparent transparent;\n}\n.lds-ring-alt[data-v-7fac3fde] {\n  display: block;\n  margin-top: 50px;\n  direction: rtl;\n  text-align: center;\n}\n.lds-ring div[data-v-7fac3fde]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div[data-v-7fac3fde]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div[data-v-7fac3fde]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n.loade-more-messages .lds-ring[data-v-7fac3fde] {\n  width: 50px;\n\n  height: 50px;\n}\n.loade-more-messages .lds-ring > div[data-v-7fac3fde] {\n  width: 36px;\n\n  height: 36px;\n}\n@-webkit-keyframes lds-ring-data-v-7fac3fde {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes lds-ring-data-v-7fac3fde {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n\n/*preloader image style*/\n.contact-title[data-v-7fac3fde] {\n  font-size: 16px;\n  padding: 18px 8px 23px;\n  border-bottom: 2px solid #f2f2f2;\n}\n.contact-title i[data-v-7fac3fde] {\n  font-size: 26px;\n  position: relative;\n  top: 5px;\n}\n.contact-title span[data-v-7fac3fde] {\n  font-size: 16px;\n  padding-right: 4px;\n}\n.contact-wrapper[data-v-7fac3fde],\n.contact-wrapper > div[data-v-7fac3fde] {\n  height: 100%;\n}\n.contact-wrapper .contact-body[data-v-7fac3fde] {\n  height: 100%;\n  overflow-y: scroll;\n  float: right;\n  width: 100%;\n}\n.default-message-wrapper[data-v-7fac3fde] {\n  position: relative;\n  height: 100%;\n  background: #f6f6f6;\n}\n.default-message-wrapper .default-main-contents[data-v-7fac3fde] {\n  width: 250px;\n\n  height: 250px;\n\n  background: #fff;\n\n  border-radius: 250px;\n\n  position: absolute;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n\n  text-align: center;\n\n  padding-top: 60px;\n  -webkit-box-shadow: 0 0 10px #ebebeb;\n          box-shadow: 0 0 10px #ebebeb;\n}\n.default-message-wrapper .default-main-contents.seller-buyAd-picture[data-v-7fac3fde] {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 10px;\n  padding: 0;\n  padding-top: 30px;\n  height: 435px;\n}\n.default-message-wrapper .default-main-contents.seller-buyAd-picture .red-text[data-v-7fac3fde] {\n  margin: 30px 0px -24px;\n  z-index: 1;\n  padding: 0 15px;\n  line-height: 1.618;\n  position: relative;\n}\n.default-message-wrapper\n  .default-main-contents.seller-buyAd-picture\n  p[data-v-7fac3fde]:last-of-type {\n  max-width: 320px;\n  margin: 0 auto;\n}\n.default-message-wrapper .default-main-contents i[data-v-7fac3fde] {\n  font-size: 55px;\n}\n.default-message-wrapper .default-main-contents p[data-v-7fac3fde] {\n  font-size: 16px;\n\n  margin: 20px 0;\n}\n.contact-not-found[data-v-7fac3fde] {\n  text-align: center;\n  margin: 15px auto;\n}\n.contact-not-found i[data-v-7fac3fde] {\n  font-size: 26px;\n}\n.contact-not-found p[data-v-7fac3fde] {\n  margin-bottom: 7px;\n}\n.contacts-switch-buttons-wrapper[data-v-7fac3fde] {\n  float: right;\n  width: 100%;\n  background: #eef3f3;\n  border-bottom: 3px solid #e3e3e3;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-7fac3fde] {\n  float: right;\n  width: 50%;\n}\n.contacts-switch-buttons-wrapper .contact-button[data-v-7fac3fde] {\n  border: none;\n  width: 100%;\n  font-size: 13px;\n  font-weight: bold;\n  padding: 15px 0;\n  position: relative;\n}\n.contacts-switch-buttons-wrapper .contact-button .fa-plus[data-v-7fac3fde] {\n  position: relative;\n  left: -5px;\n  top: -9px;\n  color: #00c569;\n  font-size: 12px;\n}\n.contacts-switch-buttons-wrapper .contact-button.active[data-v-7fac3fde],\n.contacts-switch-buttons-wrapper .contact-button[data-v-7fac3fde]:hover {\n  background-color: #fff;\n  border-bottom: 2px solid #00c569;\n  margin-bottom: -2px;\n  z-index: 1;\n}\n.total-unread-messages-badge[data-v-7fac3fde] {\n  position: absolute;\n  top: 1px;\n  background: red;\n  height: 23px;\n  width: 33px;\n  color: #fff;\n  border-radius: 10px;\n  left: 5px;\n  font-size: 12px;\n}\n@media screen and (max-width: 991px) {\n.main-content[data-v-7fac3fde] {\n    padding: 0;\n    top: 59px;\n    padding-bottom: 59px;\n}\n.main-content.is-fix-alert[data-v-7fac3fde] {\n    padding: 0;\n    top: 89px;\n    padding-bottom: 89px;\n}\n}\n@media screen and (max-width: 767px) {\n.send-message-form .button-wrapper button[data-v-7fac3fde] {\n    padding: 12px 13px;\n    font-size: inherit;\n}\n.send-message-form .message-input input[data-v-7fac3fde] {\n    padding: 13px 15px;\n}\n.main-content.is-fix-alert[data-v-7fac3fde] {\n    padding: 0;\n    top: 85px;\n}\n.hidden_element[data-v-7fac3fde] {\n    display: none;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-7fac3fde] {\n    width: 33.3333%;\n}\n.reply-info p[data-v-7fac3fde] {\n    width: 100%;\n}\n}\n@media screen and (max-width: 767px) {\n.is-guide-active[data-v-7fac3fde] {\n    z-index: 4 !important;\n    background: transparent !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_push_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_components_chat_user_info__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_components_chat_user_info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__messages_components_chat_user_info__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_components_main_channel_wrapper__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_components_main_channel_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__messages_components_main_channel_wrapper__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MainChatWrapper: __WEBPACK_IMPORTED_MODULE_4__messages_components_main_chat_wrapper___default.a,
    MainChannelWrapper: __WEBPACK_IMPORTED_MODULE_5__messages_components_main_channel_wrapper___default.a
  },
  data: function data() {
    return {
      isImageLoad: false,
      isImageOpened: false,
      isChatMessagesLoaded: true,
      isFirstMessageLoading: true,
      selectedIndex: -1,
      items: [{
        message: "پیام ها",
        url: "messages"
      }],
      isSearchingContact: false,
      contactList: [],
      channelInfo: {
        unread_contents: 0,
        last_content_title: "",
        last_content_date: ""
      },
      chatMessages: "",
      isNoticeActive: true,
      isLikeBoxActive: true,
      isGuideActive: false,
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
      verifiedUserContent: this.$parent.verifiedUserContent,
      isCurrentUserVerified: false,
      isChatUpdate: true,
      userDataLoader: true,
      isChanleActive: false,
      userAllowedReview: false,
      isReviewSubmited: false,
      reviewSubmitLoader: false
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
        self.channelInfo = response.data.channel_info;
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
    openChannel: function openChannel() {
      this.channelInfo.unread_contents = 0;
      this.channelInfo.last_content_title = "";
      this.channelInfo.last_content_date = "";
      this.handleBackBtnClickOnDevices();
      this.isChanleActive = true;

      this.registerComponentStatistics("messenger", "openChannel", "clickOnChannel");
    },

    loadChatHistory: function loadChatHistory(contact, index, isUpdate) {
      this.isChanleActive = false;
      if (!isUpdate) {
        this.selectedContact = "";
        this.selectedContact = contact;
        this.chatMessages = "";
        this.userDataLoader = true;
      }
      var self = this;

      // enable loader for user info component

      self.isChatLoadeMore = false;
      self.handleBackBtnClickOnDevices();
      self.isChatMessagesLoaded = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;

      this.setUserGuideCookie();

      this.currentContactUserId = contact.contact_id;

      axios.post("/get_user_chat_history", {
        user_id: contact.contact_id
      }).then(function (response) {
        self.isNoticeActive = true;
        var data = response.data.messages;
        // let itemDate = "";
        // data = data.map((item) => {
        //   let date = item.created_at.substr(0, 10);
        //   item.isDateShow = true;
        //   if (itemDate == date) {
        //     item.isDateShow = false;
        //   }
        //   itemDate = date;
        //   return item;
        // });
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
    cookieHasUser: function cookieHasUser(userId) {
      return userId == this.selectedContact.contact_id;
    },
    setUserGuideCookie: function setUserGuideCookie() {
      var contactUserId = this.selectedContact.contact_id;
      var cookie = this.getCookie("userGuideData");

      if (cookie) {
        var getAllGuidDataCookies = JSON.parse(cookie).userSelected;
        if (!getAllGuidDataCookies.find(this.cookieHasUser)) {
          getAllGuidDataCookies.push(contactUserId);
          this.createCookie("userGuideData", JSON.stringify({ userSelected: getAllGuidDataCookies }), 5400 * 365 // 2400 * 365 this time may 5 years
          );
          if (getAllGuidDataCookies.length > 20) {
            this.isGuideActive = false;
          } else {
            this.isGuideActive = true;
          }
        } else {
          this.isGuideActive = false;
        }
      } else {
        this.createCookie("userGuideData", JSON.stringify({ userSelected: [contactUserId] }), 5400 * 365 // 2400 * 365 this time may 2 years
        );
        this.isGuideActive = true;
      }
      if (this.isGuideActive == true) {
        $(".overlay-bg-guide").css("display", "block");
        setTimeout(function () {
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
    },
    setNoticeCookie: function setNoticeCookie() {
      var contactUserId = this.selectedContact.contact_id;
      var cookie = this.getCookie("messengerNoticeData");
      if (cookie) {
        var getAllCookies = JSON.parse(cookie).userNoticeCloed;
        if (!getAllCookies.find(this.cookieHasUser)) {
          getAllCookies.push(contactUserId);
          this.createCookie("messengerNoticeData", JSON.stringify({ userNoticeCloed: getAllCookies }), 1000);
        }
      } else {
        this.createCookie("messengerNoticeData", JSON.stringify({ userNoticeCloed: [contactUserId] }), 1000);
      }
      this.isNoticeActive = false;
    },
    setLikeBoxCookie: function setLikeBoxCookie() {
      var contactUserId = this.selectedContact.contact_id;
      var cookie = this.getCookie("closeLikeBox");
      if (cookie) {
        var getAllCookies = JSON.parse(cookie).userCloseLikeBox;
        if (!getAllCookies.find(this.cookieHasUser)) {
          getAllCookies.push(contactUserId);
          this.createCookie("closeLikeBox", JSON.stringify({ userCloseLikeBox: getAllCookies }), 60 * 24);
        }
      } else {
        this.createCookie("closeLikeBox", JSON.stringify({ userCloseLikeBox: [contactUserId] }), 60 * 24);
      }
      this.isLikeBoxActive = false;
    },
    userHasLikeBox: function userHasLikeBox() {
      var cookie = this.getCookie("closeLikeBox");
      if (cookie) {
        var getAlCookies = JSON.parse(cookie).userCloseLikeBox;
        if (getAlCookies.find(this.cookieHasUser)) {
          this.isLikeBoxActive = false;
        }
      }
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
          self.loadChatHistory(self.selectedContact, -10, true);
        }).catch(function (e) {
          //
        });
      }
    },
    keepChatUpdated: function keepChatUpdated(contact) {
      var self = this;
      setTimeout(function () {
        self.loadChatHistory(contact, -10, true);
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
            if (!self.isImageOpened) {
              if (self.selectedContact) {
                self.selectedContact = "";
              } else if (self.isChanleActive) {
                self.isChanleActive = false;
              }
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
    registerReview: function registerReview(reviewScore) {
      this.reviewSubmitLoader = true;

      var reviewObg = {
        user_id: this.selectedContact.contact_id,
        rating_score: reviewScore
      };

      var self = this;

      axios.post("/profile/add-comment", reviewObg).then(function (response) {
        self.reviewSubmitLoader = false;
        if (response.data.status == true) {
          self.isReviewSubmited = true;

          setTimeout(function () {
            $(".mobile-like-user").fadeOut();
            setTimeout(function () {
              self.userAllowedReview = false;
            }, 1500);
          }, 3000);
        }
      });
    },
    activeChanel: function activeChanel() {
      // this.isChanleActive = true
    }
  },

  mounted: function mounted() {
    this.init();
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", false);
  },

  created: function created() {
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
        if (self.selectedContact) {
          self.appendMessageToChatHistory(self.selectedContact);
        } else if (self.isComponentActive) {
          self.loadContactList();
        }
      });
    }

    // eventBus.$on("userAllowedReview", ($event) => {
    //   this.userAllowedReview = $event;
    // });
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
    },
    isChanleActive: function isChanleActive(isChanel) {
      if (isChanel) {
        this.activeChanel();
      }
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

/***/ 541:
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

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(543)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(545)
/* template */
var __vue_template__ = __webpack_require__(546)
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

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(544);
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

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.user-info-wrapper[data-v-dd3487f6] {\n  height: 100%;\n  overflow-y: scroll;\n  background: #f6fbff;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.contact-wrapper .contact-body[data-v-dd3487f6]::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.contact-wrapper .contact-body[data-v-dd3487f6] {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.title-section[data-v-dd3487f6] {\n  background: #f0f0f0;\n  padding: 17px 10px 16px;\n}\n.title-section p[data-v-dd3487f6] {\n  font-size: 16px;\n  color: #777;\n}\n.user-image[data-v-dd3487f6] {\n  width: 50px;\n  height: 50px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 10px;\n}\n.user-contents[data-v-dd3487f6] {\n  float: right;\n  width: calc(100% - 60px);\n  padding-top: 4px;\n}\n.user-contents p[data-v-dd3487f6] {\n  font-size: 16px;\n  color: #666666;\n  font-weight: bold;\n}\n.user-contents p.response-rate[data-v-dd3487f6] {\n  font-size: 14px;\n  margin-top: 11px;\n  color: #777;\n}\n.empty-response-rate[data-v-dd3487f6] {\n  padding-top: 13px;\n}\nli.user-info[data-v-dd3487f6],\nli.user-items[data-v-dd3487f6] {\n  float: right;\n  width: 100%;\n  padding: 25px 20px;\n  border-bottom: 5px solid #f0f0f0;\n  background: #fff;\n}\n.user-items ul[data-v-dd3487f6] {\n  padding: 0;\n}\n.user-items ul li[data-v-dd3487f6] {\n  color: #777;\n  font-size: 15px;\n  margin-bottom: 25px;\n  float: right;\n  width: 100%;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.user-items ul li[data-v-dd3487f6]:last-of-type {\n  margin-bottom: 0;\n}\n.user-items > ul > li > span[data-v-dd3487f6] {\n  display: inline-block;\n  padding-top: 9px;\n}\n.verified-user[data-v-dd3487f6] {\n  line-height: 1;\n  font-size: 25px;\n  top: 5px;\n  color: #cccccc;\n}\n.verified-user[data-v-dd3487f6]::before {\n  top: 5px;\n  left: 6px;\n  font-size: 14px;\n}\nli.verified-user-wrpapper > span[data-v-dd3487f6] {\n  padding-top: 11px;\n  display: inline-block;\n}\nli.user-activity-item > span[data-v-dd3487f6] {\n  padding-top: 12px;\n  display: inline-block;\n}\nul li.verified-user-wrpapper[data-v-dd3487f6] {\n  color: #cccccc;\n}\n.verified-user-wrpapper.verified-user-active[data-v-dd3487f6] {\n  color: #1da1f2;\n}\n.verified-user-wrpapper.verified-user-active p[data-v-dd3487f6],\n.verified-user-wrpapper.verified-user-active .verified-user[data-v-dd3487f6] {\n  color: #1da1f2;\n}\n.icon-wrapper[data-v-dd3487f6] {\n  margin-left: 10px;\n  width: 31px;\n  text-align: center;\n  float: right;\n}\n.icon-wrapper > svg[data-v-dd3487f6] {\n  height: 31px;\n}\n.cls-1[data-v-dd3487f6] {\n  fill: #666;\n}\n.cls-2[data-v-dd3487f6] {\n  fill: #666;\n}\nul li.report-item button[data-v-dd3487f6] {\n  width: 100%;\n  text-align: right;\n  padding: 0px 0 0;\n  background: none;\n  border: none;\n  color: #e41c38;\n}\n.report-item button i[data-v-dd3487f6] {\n  font-size: 21px;\n}\n.user-items ul li.report-item[data-v-dd3487f6]:hover {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.spinner-wrapper[data-v-dd3487f6] {\n  margin-top: 120px;\n}\n.spinner-border[data-v-dd3487f6] {\n  width: 5.5rem;\n  height: 5.5rem;\n  border-width: 0.5rem;\n  color: #00c569;\n}\n\n/* stars */\n.profile-rating-box[data-v-dd3487f6] {\n  border: 1px solid #f6f6f6;\n  border-radius: 4px;\n  width: 100%;\n  max-width: 230px;\n  margin: 30px auto;\n  overflow: hidden;\n}\n.stars-wrapper[data-v-dd3487f6] {\n  padding-right: 2px;\n}\n.rating-stars[data-v-dd3487f6] {\n  width: calc(100% - 50px);\n  padding: 7px 0 0;\n  text-align: center;\n}\n.rating-stars p > span[data-v-dd3487f6] {\n  position: relative;\n  display: inline-block;\n  margin-left: 5px;\n}\n.rating-stars p > span[data-v-dd3487f6]:last-of-type {\n  margin-left: 0;\n}\n.rating-stars p > span i[data-v-dd3487f6] {\n  position: absolute;\n  left: 2px;\n  font-size: 20px;\n  z-index: 0;\n  top: -4px;\n  color: #bdc4cc;\n}\n.rating-stars p > span > span[data-v-dd3487f6] {\n  display: block;\n  position: relative;\n  z-index: 1;\n  font-size: 13px;\n  width: 18px;\n  text-align: center;\n  margin-left: 5px;\n  color: #777;\n}\n.rating-stars .review-count-wrapper[data-v-dd3487f6] {\n  margin-top: 7px;\n  color: #556080;\n}\n.rating-score[data-v-dd3487f6] {\n  width: 50px;\n  background: #f6f6f6;\n  height: 100%;\n  text-align: center;\n  padding: 15px 0;\n  font-size: 22px;\n  font-weight: bold;\n  color: #556080;\n}\nli.rating-item[data-v-dd3487f6] {\n  border-bottom: 1px solid #f2f2f2;\n}\nli.score-item > span[data-v-dd3487f6] {\n  padding-top: 10px;\n  display: inline-block;\n}\nli.score-item i[data-v-dd3487f6] {\n  font-size: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_main_main_components_review_component_success_submit_chat_review__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_main_main_components_review_component_success_submit_chat_review___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__layouts_main_main_components_review_component_success_submit_chat_review__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ChatReviewComponent: __WEBPACK_IMPORTED_MODULE_0__layouts_main_main_components_review_component_chat_review___default.a,
    SuccessReviewComponent: __WEBPACK_IMPORTED_MODULE_1__layouts_main_main_components_review_component_success_submit_chat_review___default.a
  },
  data: function data() {
    return {
      userStatistics: "",
      reviewCurrentStep: 0,
      successMessage: "نظر شما با موفقیت ثبت شد"
    };
  },
  methods: {
    init: function init() {
      // if (!this.checkMobileWidth()) {
      this.isUserAuthorizedToPostComment();
      // }
    },
    checkMobileWidth: function checkMobileWidth() {
      if ($(window).width() <= 991) {
        return true;
      } else {
        return false;
      }
    },

    isUserAuthorizedToPostComment: function isUserAuthorizedToPostComment() {
      var self = this;
      var userObg = {
        user_id: this.selectedContact.contact_id
      };
      axios.post("/profile/is-user-authorized-to-post-comment", userObg).then(function (response) {
        self.$parent.userAllowedReview = response.data.is_allowed;
        if (!self.checkMobileWidth()) {
          self.getUserData();
        }
      });
    },
    getUserData: function getUserData() {
      this.$parent.userDataLoader = true;
      this.reviewCurrentStep = 0;

      var self = this;
      axios.post("/get_user_statistics_by_user_name", {
        user_name: self.selectedContact.user_name
      }).then(function (statisticsResponse) {
        self.userStatistics = statisticsResponse.data.statistics;
        self.activeComponentTooltip();
        self.$parent.userDataLoader = false;
      }).catch(function (err) {
        //
      });
    },
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
  mounted: function mounted() {
    this.init();
  },

  watch: {
    "$parent.selectedContact": function $parentSelectedContact(isItemActive) {
      if (isItemActive) {
        this.init();
      } else {
        this.$parent.userDataLoader = true;
      }
    },
    "$parent.userDataLoader": function $parentUserDataLoader(userDataLoader) {
      var _this2 = this;

      if (!userDataLoader) {
        setTimeout(function () {
          _this2.activeComponentTooltip();
        }, 50);
      }
    }
  }
});

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "user-info-wrapper" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "main-section" }, [
      !_vm.$parent.userDataLoader
        ? _c("ul", [
            _c("li", { staticClass: "user-info" }, [
              _c("div", { staticClass: "user-image" }, [
                _vm.selectedContact.profile_photo
                  ? _c("img", {
                      attrs: {
                        src:
                          _vm.$parent.str +
                          "/" +
                          _vm.selectedContact.profile_photo,
                        alt: _vm.selectedContact.first_name[0]
                      }
                    })
                  : _c("img", {
                      attrs: { src: __webpack_require__(160) }
                    })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "user-contents" }, [
                _c("p", {
                  class: {
                    "empty-response-rate":
                      !_vm.userStatistics.response_rate &&
                      _vm.userStatistics.response_rate == "0"
                  },
                  domProps: {
                    textContent: _vm._s(
                      _vm.selectedContact.first_name +
                        " " +
                        _vm.selectedContact.last_name
                    )
                  }
                }),
                _vm._v(" "),
                _vm.userStatistics.response_rate &&
                _vm.userStatistics.response_rate != "0"
                  ? _c("p", { staticClass: "response-rate" }, [
                      _vm._v("\n            احتمال پاسخگویی\n            "),
                      _c("span", {
                        staticClass: "red-text",
                        domProps: {
                          textContent: _vm._s(
                            "%" + _vm.userStatistics.response_rate
                          )
                        }
                      })
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "user-items col-xs-12" }, [
              _c("div", [
                _c("ul", { staticClass: "col-xs-12" }, [
                  _vm.userStatistics.reputation_score
                    ? _c("li", { staticClass: "score-item" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("span", {}, [
                          _vm._v(
                            "\n                اعتبار کاربر\n                "
                          ),
                          _c("span", { staticClass: "light-green-text" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.userStatistics.reputation_score) +
                                "\n                "
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      staticClass: "verified-user-wrpapper",
                      class: {
                        "verified-user-active": _vm.selectedContact.is_verified
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
                              "data-content": _vm.$parent.verifiedUserContent
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
                      _vm.selectedContact.is_verified
                        ? _c("span", {
                            domProps: { textContent: _vm._s("احراز هویت شده") }
                          })
                        : _c("span", {
                            domProps: { textContent: _vm._s("احراز هویت نشده") }
                          })
                    ]
                  ),
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
                      [
                        _vm._m(2),
                        _vm._v(" "),
                        _c("span", [_vm._v("گزارش تخلف")])
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "col-xs-12 bg-white" }, [
              _vm.userStatistics.rating_info.avg_score
                ? _c(
                    "div",
                    { staticClass: "profile-rating-box-wrapper hidden-xs" },
                    [
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
                                  class: {
                                    "yellow-text":
                                      index <
                                      _vm.userStatistics.rating_info.avg_score
                                  }
                                })
                              ])
                            })
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "review-count-wrapper" }, [
                            _c("span", {
                              domProps: {
                                textContent: _vm._s(
                                  _vm.userStatistics.rating_info.total_count
                                )
                              }
                            }),
                            _vm._v(
                              "\n                نظر ثبت شده است\n              "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "rating-score pull-right" }, [
                          _c("span", {
                            domProps: {
                              textContent: _vm._s(
                                _vm.userStatistics.rating_info.avg_score
                              )
                            }
                          })
                        ])
                      ])
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.$parent.userAllowedReview
              ? _c(
                  "li",
                  { staticClass: "col-xs-12" },
                  [
                    _vm.reviewCurrentStep == 0
                      ? _c("ChatReviewComponent", {
                          attrs: {
                            "user-full-name":
                              _vm.selectedContact.first_name +
                              " " +
                              _vm.selectedContact.last_name,
                            "user-id": _vm.selectedContact.contact_id
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.reviewCurrentStep == 1
                      ? _c("SuccessReviewComponent")
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ])
        : _c("div", { staticClass: "text-center spinner-wrapper" }, [_vm._m(3)])
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
    return _c("p", { staticClass: "icon-wrapper" }, [
      _c("i", { staticClass: "fa fa-award" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "icon-wrapper" }, [
      _c("i", { staticClass: "fa fa-exclamation-circle" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner-border" }, [
      _c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])
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

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(548)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(550)
/* template */
var __vue_template__ = __webpack_require__(551)
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

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(549);
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

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(7);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.loading-container[data-v-b8dd9550] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  position: relative;\n  align-items: center;\n  z-index: 1;\n}\n.loading-container .lds-ring[data-v-b8dd9550] {\n  background: #fff;\n  border-radius: 50px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n  width: 50px;\n  height: 50px;\n  padding: 4px;\n}\n.loading-container .lds-ring > div[data-v-b8dd9550] {\n  width: 30px;\n  height: 30px;\n  border-width: 3px;\n}\n.whatsapp-loading-gif[data-v-b8dd9550] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 20%;\n  height: 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.chat-loaded[data-v-b8dd9550] {\n  opacity: 1;\n}\n.contact-is-search img[data-v-b8dd9550] {\n  display: block;\n  width: 60px;\n  margin: 18px auto;\n}\n.clock-icon[data-v-b8dd9550] {\n  font-size: 14px;\n}\n.check-items[data-v-b8dd9550] {\n  padding-left: 10px;\n  color: #b2b2b2;\n}\n.text-blue[data-v-b8dd9550] {\n  color: #60caf1;\n}\n.check-items.dual[data-v-b8dd9550] :last-of-type {\n  margin-left: -8px;\n}\n.message-wrapper .message-contact-title[data-v-b8dd9550] {\n  font-size: 16px;\n  padding: 7px 15px 8px;\n  float: right;\n  width: 100%;\n  color: #fff;\n  background: -webkit-gradient(linear, right top, left top, from(#21ad93), to(#4dc0bb));\n  background: linear-gradient(-90deg, #21ad93, #4dc0bb);\n}\n.message-contact-title a[data-v-b8dd9550] {\n  color: #fafafa;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-contact-title a[data-v-b8dd9550]:hover {\n  color: #fff;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.chat-page .bg-wrapper[data-v-b8dd9550] {\n  background: url(" + escape(__webpack_require__(162)) + ") repeat;\n  opacity: 0.06;\n  position: absolute;\n  z-index: 1;\n  left: 15px;\n  right: 0;\n  top: 50px;\n  bottom: 60px;\n  background-size: contain;\n}\n.chat-page ul[data-v-b8dd9550] {\n  background-color: #e5ddd6;\n}\n.chat-page ul li[data-v-b8dd9550] {\n  position: relative;\n  z-index: 1;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550] {\n  width: 35px;\n  height: 35px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 10px;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550]:hover {\n  cursor: pointer;\n}\n.message-wrapper .message-contact-title img[data-v-b8dd9550] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: initial;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.message-wrapper .message-contact-title a[data-v-b8dd9550] {\n  float: right;\n  display: block;\n  max-width: 300px;\n  font-size: 15px;\n  color: #fff;\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550]:first-of-type {\n  max-width: 190px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: 25px;\n  overflow: hidden;\n  margin-top: 10px;\n  float: right;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-b8dd9550] {\n  border-radius: 5px;\n  padding: 4px 7px;\n  margin-right: 12px;\n  margin-top: 6px;\n  background: #fff;\n  color: #23ae94;\n  font-size: 13px;\n  float: right;\n}\n.message-wrapper .message-contact-title span.commetns-link i[data-v-b8dd9550] {\n  position: relative;\n  top: 2px;\n  font-size: 12px;\n}\n.back-state[data-v-b8dd9550] {\n  background: none;\n  color: #fff;\n  border: none;\n  font-size: 22px;\n  position: relative;\n  top: 5px;\n  padding: 0 6px;\n  float: right;\n}\n.report-button[data-v-b8dd9550] {\n  background: none;\n  border: none;\n  padding: 7px 0 0px;\n  font-size: 13px;\n  color: #fff;\n}\n.message-wrapper .chat-page ul[data-v-b8dd9550] {\n  padding: 20px 20px 0;\n\n  overflow-x: hidden;\n\n  position: absolute;\n\n  left: 0;\n\n  right: 0;\n\n  bottom: 60px;\n\n  top: 50px;\n\n  -webkit-transition: 100ms;\n\n  transition: 100ms;\n}\n.message-wrapper .chat-page ul li[data-v-b8dd9550] {\n  width: 100%;\n  float: right;\n}\n.message-wrapper .chat-page ul li[data-v-b8dd9550]:last-of-type {\n  margin-bottom: 10px;\n}\n.message-date[data-v-b8dd9550] {\n  text-align: center;\n  margin: 10px auto;\n  color: #313a43;\n  font-size: 14px;\n}\n.message-date span[data-v-b8dd9550] {\n  background: #e1f5fe;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n  padding: 3px 10px 0;\n  line-height: 1;\n}\n.message-wrapper .chat-page li > div.message-item-wrapper[data-v-b8dd9550] {\n  font-size: 14px;\n  line-height: 1.612;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 8px;\n  margin: 0 auto 3px;\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n  min-width: 100px;\n}\n.message-content-wrapper[data-v-b8dd9550] {\n  max-width: 455px;\n  padding: 5px 10px;\n  display: block;\n}\n.message-wrapper .chat-page .message-item-wrapper.message-receive[data-v-b8dd9550] {\n  float: left;\n  background: #fff;\n  border-radius: 0 8px 8px 8px;\n}\n.message-wrapper .chat-page .message-receive[data-v-b8dd9550]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: -6px;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 6px 9px 0;\n  border-color: transparent #fff transparent transparent;\n  line-height: 0px;\n  _border-color: #000000 #fff #000000 #000000;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n}\n.message-wrapper .chat-page .message-item-wrapper.message-send[data-v-b8dd9550] {\n  float: right;\n  background: #dcf8c6;\n  border-radius: 8px 0 8px 8px;\n}\n.message-wrapper .chat-page .message-send[data-v-b8dd9550]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  right: -6px;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 6px 0 0;\n  border-color: #dcf8c6 transparent transparent transparent;\n  line-height: 0px;\n  _border-color: #dcf8c6 #000000 #000000 #000000;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n}\n.message-wrapper .chat-page span.message-chat-date[data-v-b8dd9550] {\n  text-align: right;\n  font-size: 13px;\n  padding-top: 3px;\n  width: 100%;\n  direction: ltr;\n  display: block;\n  color: #b2b2b2;\n}\n.send-message-form[data-v-b8dd9550] {\n  overflow: hidden;\n  padding: 10px 15px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: #f0f0f0;\n}\n.message-input[data-v-b8dd9550] {\n  float: left;\n  width: calc(100% - 50px);\n}\n.send-message-form .message-input input[data-v-b8dd9550] {\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n  padding: 7px 50px 8px 15px;\n  -webkit-transition: 150ms;\n  transition: 150ms;\n}\n.send-message-form .message-input input.padding-default[data-v-b8dd9550] {\n  -webkit-transition: 150ms;\n  transition: 150ms;\n  padding: 7px 15px 8px 15px;\n}\n.capture-image[data-v-b8dd9550] {\n  position: absolute;\n  font-size: 21px;\n  background: none;\n  border: none;\n  color: #919191;\n  padding: 7px 15px 7px 10px;\n}\n.button-wrapper[data-v-b8dd9550] {\n  float: right;\n  line-height: 1.1;\n  position: relative;\n}\n.send-message-form .button-wrapper .item-wrapper[data-v-b8dd9550] {\n  width: 40px;\n  height: 40px;\n  background: -webkit-gradient(linear, left top, right top, from(#00c569), to(#21ad93));\n  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);\n  border-radius: 35px;\n}\n.send-message-form .button-wrapper .item-wrapper .send-message-button[data-v-b8dd9550] {\n  background: none;\n  border: none;\n  width: 40px;\n  height: 40px;\n  height: 40px;\n  position: absolute;\n  right: calc(50% - 21px);\n  padding: 7px 0 0;\n}\n.send-message-form .button-wrapper .voice-message-button[data-v-b8dd9550] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0px;\n  background: none;\n  border: none;\n  font-size: 19px;\n  bottom: 0;\n  padding: 4px 13px 0;\n}\n.button-wrapper .send-message-button svg[data-v-b8dd9550] {\n  width: 19px;\n  height: 19px;\n}\n#chat-menu-items[data-v-b8dd9550] {\n  position: absolute;\n  left: 15px;\n  z-index: 10;\n  width: 170px;\n  background: #fff;\n  text-align: right;\n  direction: rtl;\n  border-radius: 4px;\n  line-height: 1.618;\n  -webkit-box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  top: 48px;\n  overflow: hidden;\n  padding: 0 !important;\n}\n#chat-menu-items li:last-of-type button[data-v-b8dd9550] {\n  border: none;\n}\n#chat-menu-items li button i[data-v-b8dd9550] {\n  margin-left: 6px;\n}\n#chat-menu-items li button[data-v-b8dd9550] {\n  background: none;\n  color: #777;\n  font-size: 14px;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  text-align: right;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-bottom: 1px solid #dbdbdb;\n}\n#chat-menu-items li button[data-v-b8dd9550]:hover {\n  color: #333;\n  background: #eee;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.new-badge[data-v-b8dd9550] {\n  position: absolute;\n  right: -16px;\n  background: #e51c38;\n  border-radius: 50px;\n  font-size: 12px;\n  color: #fff;\n  top: -8px;\n  line-height: 1;\n  padding: 4px 2px;\n}\n.mobile-like-user[data-v-b8dd9550] {\n  position: absolute;\n  z-index: 1;\n  background: #e8f4f8;\n  text-align: center;\n  border-radius: 12px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);\n  padding: 25px 0;\n  margin-top: 20px;\n}\n.mobile-like-user.success[data-v-b8dd9550] {\n  background: #f2f6e7;\n  padding: 20px 0 0;\n}\n.mobile-like-user .close-rating[data-v-b8dd9550] {\n  position: absolute;\n  right: 0;\n  background: none;\n  border: none;\n  color: #777;\n  padding: 5px 15px;\n  top: 0px;\n}\n.mobile-like-user .title-item[data-v-b8dd9550] {\n  color: #313a43;\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0 auto 25px;\n}\n.mobile-like-user.success .title-item[data-v-b8dd9550] {\n  margin: 25px auto;\n}\n.mobile-like-user.success > div > div[data-v-b8dd9550] {\n  font-size: 45px;\n  background: #fff;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  border-radius: 55px;\n  padding-top: 19px;\n  color: #50a791;\n}\n.mobile-like-user .likes-wrapper[data-v-b8dd9550] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.mobile-like-user .likes-wrapper > button[data-v-b8dd9550] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  max-width: 120px;\n  background: none;\n  border: none;\n  color: #21ad93;\n}\n.mobile-like-user .likes-wrapper > button.dislike[data-v-b8dd9550] {\n  color: #e41c38;\n}\n.mobile-like-user .likes-wrapper > button.dislike i[data-v-b8dd9550] {\n  background: #e41c38;\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n}\n.mobile-like-user .likes-wrapper > button i[data-v-b8dd9550] {\n  display: block;\n  font-size: 25px;\n  background: #21ad93;\n  color: #fff;\n  width: 48px;\n  height: 48px;\n  margin: 0 auto;\n  border-radius: 50px;\n  padding-top: 11px;\n}\n.messenger-notice[data-v-b8dd9550] {\n  text-align: center;\n  background: #fff8c1;\n  padding: 7px;\n  border-radius: 8px;\n  margin-top: 20px;\n  line-height: 1.618;\n  color: #777;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);\n}\n.messenger-notice .notice-title[data-v-b8dd9550] {\n  font-size: 13px;\n}\n.message-wrapper .chat-page li > div.notice-actions[data-v-b8dd9550] {\n  margin: 3px auto 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550] {\n  border: none;\n  color: #21ad92;\n  border-radius: 4px;\n  margin: 2px 7px 0;\n  background: #fff;\n  padding: 2px 15px;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550]:hover {\n  background: #21ad93;\n  border-color: #21ad93;\n  color: #fff;\n}\n.messenger-notice .notice-actions button i[data-v-b8dd9550] {\n  margin-left: 7px;\n}\n.verified-user[data-v-b8dd9550]::before {\n  top: 3px;\n  left: 3px;\n}\n.verified-user[data-v-b8dd9550] {\n  float: right;\n  top: 7px;\n  right: 5px;\n}\n.overlay-bg-guide[data-v-b8dd9550] {\n  position: absolute;\n  width: 100%;\n  z-index: 5;\n  background: rgba(0, 0, 0, 0.6);\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.guide-arrow-item[data-v-b8dd9550] {\n  margin-top: 80px;\n}\n.guide-arrow-item svg[data-v-b8dd9550] {\n  max-width: 130px;\n  right: 35%;\n  position: relative;\n}\n.guide-text[data-v-b8dd9550] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  line-height: 1.618;\n}\n.review-loader[data-v-b8dd9550] {\n  padding: 15px 0;\n}\n.spinner-border[data-v-b8dd9550] {\n  width: 4.1rem;\n  height: 4.1rem;\n  top: -5px;\n  position: relative;\n  left: 2px;\n  border-width: 3px;\n  color: #23ae95;\n}\n@media screen and (max-width: 1199px) {\n.message-wrapper .message-contact-title[data-v-b8dd9550] {\n    position: relative;\n    z-index: 5;\n}\n}\n@media screen and (max-width: 767px) {\n.chat-page .bg-wrapper[data-v-b8dd9550] {\n    left: 0;\n}\n.guide-arrow-item[data-v-b8dd9550] {\n    margin-top: 120px;\n}\n.overlay-bg-guide[data-v-b8dd9550] {\n    top: -60px;\n}\n#chat-menu-items[data-v-b8dd9550] {\n    left: 54px;\n}\n.message-wrapper .message-contact-title[data-v-b8dd9550] {\n    padding: 8px;\n}\n.notice-actions[data-v-b8dd9550] {\n    width: 100%;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550] {\n    width: 100%;\n    text-align: right;\n    background: none;\n    padding: 5px 0;\n}\n.messenger-notice .notice-actions button[data-v-b8dd9550]:hover {\n    background: initial;\n    border-color: initial;\n    color: #21ad92;\n}\n.message-button-wrapper[data-v-b8dd9550] {\n    margin: 0 -10px -5px;\n    overflow: hidden;\n    border-radius: 0 0 4px 4px;\n}\n.message-button-wrapper button[data-v-b8dd9550] {\n    display: block;\n    width: 100%;\n    background: #21ad93;\n    text-align: center;\n    color: #fff;\n    border: none;\n    font-size: 14px;\n    padding: 5px;\n    margin-top: 8px;\n}\n.message-button-wrapper button i[data-v-b8dd9550] {\n    font-size: 11px;\n}\n.is-phone-active-wrapper[data-v-b8dd9550] {\n    min-width: 200px;\n}\n.is-phone-active-text[data-v-b8dd9550] {\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 500px) {\n.message-wrapper .message-contact-title a[data-v-b8dd9550] {\n    max-width: 190px;\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550]:first-of-type {\n    max-width: 100px;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-b8dd9550] {\n    margin-right: 8px;\n    margin-top: 7px;\n    padding: 4px;\n}\n.verified-user[data-v-b8dd9550] {\n    right: 2px;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550] {\n    margin-left: 5px;\n}\n}\n@media screen and (max-width: 365px) {\n.message-wrapper .message-contact-title a[data-v-b8dd9550] {\n    max-width: 180px;\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550]:first-of-type {\n    max-width: 90px;\n}\n}\n@media screen and (max-width: 355px) {\n.message-wrapper .message-contact-title a[data-v-b8dd9550] {\n    max-width: 154px;\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550]:first-of-type {\n    max-width: 66px;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-b8dd9550] {\n    margin-right: 6px;\n    margin-top: 5px;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550] {\n    margin-left: 5px;\n}\n.back-state[data-v-b8dd9550] {\n    padding: 0 0px 0 5px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 550:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      this.userGuide();
      this.hideCollapses();
      this.$parent.userHasNotice();
      this.$parent.userHasLikeBox();
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
    },
    userGuide: function userGuide() {
      var _this = this;

      $(".overlay-bg-guide").on("click", function () {
        _this.$parent.setUserGuideCookie();
        $(".overlay-bg-guide").fadeOut("fast");
      });
      if (this.$parent.isGuideActive) {
        setTimeout(function () {
          _this.$parent.setUserGuideCookie();
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
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
    },
    "$parent.isGuideActive": function $parentIsGuideActive(value) {
      var _this2 = this;

      if (value) {
        setTimeout(function () {
          _this2.$parent.setUserGuideCookie();
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
    }
  }
});

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$parent.isGuideActive,
            expression: "$parent.isGuideActive"
          }
        ],
        staticClass: "overlay-bg-guide hidden-lg"
      },
      [
        _c("div", { staticClass: "guide-arrow-item" }, [
          _c(
            "svg",
            {
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                width: "122.37",
                height: "122.37",
                viewBox: "0 0 122.37 122.37"
              }
            },
            [
              _c("defs", [
                _c(
                  "pattern",
                  {
                    attrs: {
                      id: "pattern",
                      width: "1",
                      height: "1",
                      patternTransform: "matrix(1, 0, 0, -1, 0, 196)",
                      viewBox: "-0.674 -0.587 98 98"
                    }
                  },
                  [
                    _c("image", {
                      attrs: {
                        preserveAspectRatio: "none",
                        width: "98",
                        height: "98",
                        "xlink:href":
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDItMDZUMTA6Mzg6MTArMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAyLTA2VDEwOjM4OjQzKzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAyLTA2VDEwOjM4OjQzKzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjllZGU0Nzg2LTY2Y2YtNDhkMS1iOTk5LTdjMWViMzZjNTA5MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5ZWRlNDc4Ni02NmNmLTQ4ZDEtYjk5OS03YzFlYjM2YzUwOTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZWRlNDc4Ni02NmNmLTQ4ZDEtYjk5OS03YzFlYjM2YzUwOTAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjllZGU0Nzg2LTY2Y2YtNDhkMS1iOTk5LTdjMWViMzZjNTA5MCIgc3RFdnQ6d2hlbj0iMjAyMS0wMi0wNlQxMDozODoxMCswMzozMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+E73F6gAAD3FJREFUeJzt3XmQFOUdxvHvwgpyxIND1JIjEVTAxAWMYkVUVEQ8QEWDpfFIJIpo1HikjFTFqKmooDFqPMHEUmMMHhElgoLG8ohAQCNgVJQgKqJcq66AAsvkj99OGJbZ3pl53+6e7nk+VVsV2Z1fv5p9eN/ufo+qTCaDiOTXIu4GiJQzBUQkgAIiEkABEQmggIgEUEBEAiggIgEUEJEACohIAAVEJIACIhJAAREJoICIBFBARAJUx90AkQC9gX7ATkAtMA9YFGUDFBApN9sDZwAXA33zfP9N4GpgShSNqdKCKSkTHYELGr52KeDnJwFjgPowG6UeROLWC7gUOAtoU8TnRmPhGBNGo7LUg0hcDgYuA4bj9rBoGDDdS4vyUEAkSi2BE7FgDPRUcx6wv6da21BAJArtgJ8AlwDfCaH+EcALIdRVQCRUuwI/w+4TOoR4neeAoWEUVkAkDH2xYdTpQKuIrlmDPQL2Sm/SxacjgGnAQuDHRBcOgF+EUVQ9iLiqBk7FeoyaGNuxCegJLPVZVD2IlGoH4ApgCfAg8YYDLKiX+S6qHkSK1Q2bBjIaC0k5WYe1b7WvgupBpFD9gYeBxdib73ILB0BbbKqKN+pBJEgVcAw2dBkcc1sKtQrrRdb7KKYeRPJpDZyDPY2aSnLCAdAJeynphXoQydUBGAtcCHSJuS0u/gvshYeZvgqIAOyJ3VecjY3j0+BU4K+uRRSQynYQcDlwAukbbr8ODHAtooBUnhZYIC7HApJmQ4CZLgUUkMrRFpv+cQn2xrkSzACOcimggKRfF7bMqO0Yc1vi0B94o9QPp23cKVv0xtZtLwXGUZnhAMdJjOpB0mcwdn8xDHvRVy42Ec8eCPXYkPKDUj6sHiQ9aoDXsJV1x1A+4fg3to3PvTFdvyUOkxjVg6TD8cBkbE+pcjEduAl4vuGf3wL6xNSWdUB3bBpKUdSDJF8/yiccG4D7ge9iQ7xsOHYnvnCAPcG7sJQPKiDJdy/xh6MWuB7ogT1KXtjo+0dG3aA8LqCEWQIKSLIdRohb3hRgCXAR0BW4CljexM+5BmQWsMaxRkmTGBWQZDsupuvOAX6I7Yp4O7C2mZ93DciTwF2ONcBu1lsW8wEFJNl6R3itzdiG0YOAA4FHKWy27L7Abo7XngHcBnztWKcHFuyCKSDJ1jqCa6wH7sHCeALwSpGfd+09VmFvwldgDwBcFfXiUAFJtqbG/D6sBH6NPR4dQ+nnchzr2I7ngey7iJuwnsxFDUXMz1JAku3VEGouwgLRDbgGC0qpvgUc4tieGTn/ezHwhGM9KKIX0YvCZOsAfIjtfevqZeBm4Cm2/I3t6mTsXsVFd+zfMWt/4F+ONcHWirze3A+pB0m2Ndj7h1LVY7/AB2J/00/BXzjA3vC7WMTW4QCYC/zDsS4U2IsoIMl3A7axQjG+wp4K9cKe6szx3Sjsd2uYY41nm/jz8Y51wXq3ZneaV0CSrx4YCdxdwM8ux17oZTd/WxJiuwYCnR1rNBX86cB8x9oFTWJUQNJhA3A+9kv5F2zqR+73XsQ2ZOiBDclqCZ/r8KoOa3dTJjjWB5sWExhi3aSnVydsd/UV2FqMqLnO3n0cGwY1pRp4H7uJd3Ed8KumvqkeJL1WAZ8QTzj64D579+lmvr8JuMXxGmCTGJt8CqiASBhOcfz8ZuCZAn5uEu6TGDtgu0jmpYBIGFwDMovCXlCuBe50vBbYpnl5lwMrIOJbb+wINhfNDa9y3Yb7RtXdgVH5vqGAiG+uvQfYC8tCrcTPJMYr8v2hnmKJbwuwKe6lequEz+8JvEuRaz3yOJpGLyfVg4hPvXELB5Q2dyu0SYwKiPh0pocak0v83I0ern04jZYwKyDiSwvsXHQXbwFvl/jZedieYK626kUUEPFlMLZ5g4tSe48sH5MYT8LuaQAFRPzxMbxyXTvyLPCmY42W2NatgJ5iiR/tgE+B9g41FmIbzrk6DfizY42vsXcjK9SDiA8n4RYOsCOmfZhMiRtV59geOzJCQyzx4izHz28GHvLREPxNYhwLtNMQS1z1xJbGuuwm/zx+tydtiy3VdT0TZax6EHF1Lu5HLTzgoyE51gF3eKgzUj2IuGgFLMMWZ5VqLXZMXHPblxarE9aLtHGosVo9iLgYiVs4wFYO+g4H2IKxPznW2EEBERfneajhe3iV6yYK2z+4KepBpGT7AIc61liKnz2umrIEeMzh83MVEClVSSc2NTIR9712m+MyifER3aRLKXYGPsJty9ON2P5cn3ppUbDJFL+QayFQox5ESvFT3PcDnkI04QB76VfMJnl12JSVegVEilVNwzQMR4XsBOnLKmy2cSETGZcDQ7CVkZpqIkU7GdjDscYi/KzdKMZS4ABspu4Heb6/BnvqtS8wO/uHugeRYs3GftFcXI4dtRCnvbBpMtXYC8UF5HkkrIBIMQYBLznWWI8trFrt3pzwaYglxRjnocYDJCQcoB5ECufjZKcMtmfvO+7NiYZ6ECmUj95jGgkKB6gHkcLsix1Y4zqtfQgw07050VEPIoW4CvdwzCdh4QAFRJq3N3aOoSsfy2AjpyGWNKeUeUyNLcMOzNzg3pxoqQeRIP0JPgatUBNIYDhAPYgEm4bteO5iBXZ4qOsZHrFQDyJNGYR7OAB+R0LDAepBpGkvAwc71qjFdiisc29OPNSDSD4jcA8H2PFoiQ0HqAeRbbXCjiHo6VjnS+zeo9a1QXFSDyKNXYR7OMCmsyc6HKAeRLbWGXgP2NGxzkrsvcdXzi2KmXoQyXUd7uEAuJ4UhAPUg8gW+2HHmLmeFPsR0Av4xrlFZUA9iIBNRLwb93AAXEtKwgEKiJhzgYEe6iwC7vdQp2xoiCW7YIuYdvZQawTwlIc6ZUM9iNyMn3DMJGXhAPUgle5w7HQnV/VAPxo2W0sT9SCVqz0wyVOtiaQwHKAepJLdge1Z6+oL7M37Kg+1yo56kMo0GDjfU61rSWk4QD1IJWqPDYd6eKg1HxiAHb2cSupBKs8E/IQjA4whxeEABaTSDMd+qX2YBLzmqVbZ0hCrcuyODYk6eqi1AjujMPHT2ZujHqQyVGGbRvsIB9jxBakPByggleIK4AhPtWYAD3qqVfY0xEq/gdiZHtt5qFWH7dP7oYdaiaAeJN06A4/iJxxgQ6uKCQeoB0mzlsBz2HwrH2YAR3mqlRjqQdLrOvyF40tgtKdaiaKApNMJwJUe611GhQ2tsjTESp/vAa9iU0p8eAIY6alW4igg6dIFmAN081TvY2wzhzWe6iWOhljp0Rr4G/7CsRk4gwoOByggaTIROMhjvfHAix7rJZKGWOnwW+CXHuvNxjavTvVM3UIoIMl3IXC7x3qrsJOlPvJYM7E0xEq2k4FbPdbbDJyGwvF/CkhyHQY8hN//D6/G3phLAw2xkmkg9ovs610HwFRsQZV+IXIoIMnTH3gBP7uwZy0G9gc+91gzFTTESpa+2AREn+H4AjgOhSMvBSQ5+mK7IPpaFQi2I+IobG9eyUMBSYZ+2Eu7Lp7rXgo867lmqugepPwNBKYBO3muew/+djhJLQWkvB0GPI3fp1VggRuO3pQ3S0Os8jUceAb/4ZgDnILCURAFpDydj63DaOO57nvAscBaz3VTSwEpL1XYCbF34ue8wFyfAUNJ8UbTYaiOuwHyf9sB92FrMHz7HBgGLAmhdqopIOVhF+BxbIq5b3XA0cAbIdROPQUkfv2AJ/G3EjDXeuwt+ewQalcE3YPEaxTwCuGE4xvs1NmXQqhdMRSQeFQDNwKPAG1DqP8NtlZEU9cdaYgVvT2wYPwgpPrrsH2xFA4P1INEK3uzHFY4sjfkCocnCkg0WgE3YG/GO4V0jVrgSODlkOpXJA2xwtcXWxpbE+I1VgJDgDdDvEZFUg8SnhbYnrbzCDcci7Ehm8IRAvUg4eiJHXJ5aMjXmYO951gZ8nUqlnoQv6qxDdwWEH44ngYGo3CESj2IPwOwuVT7RXCte4ALsCWzEiL1IO46Andh0znCDkc9diDnGBSOSKgHKV1L4DzsJKcOEVyvFjgV29VEIqKAlOZw4GbCfTqV6z/YvKr3I7qeNNAQqzj7AdOx7XdqIrrmFGzjBoUjBgpIYb4NPIhNExka0TU3YU/ETsSmkEgMNMQK1hMYB/yIaP9bfYzdb7wa4TUlDwUkv72Bq4DT8b82vDl/B84CVkd8XclDQ6ytHQI8BbwNnEm04diAPcI9HoWjbKgHsc0SRgI/Bw6IqQ3zsc0a5sd0fWlCJQekK/YeYzT+97wtVD0wATu4ZkNMbZAAlRaQ7bDJfWdjG6hFfX+R631sGPdajG2QZlRKQGqwG9/Tgc7xNoVN2EvGa7BdR6SMpTkgfbBHpaOAvWJuS9Zs4Fx0r5EYaQpIFXaTPaLhq0+8zdlKHfbY+E7sJFlJiKQHZGdsHfZQbGvN3eNtzjYy2Bv4K4HlMbdFSpC0gLTDlpcehi0W+j7x3mgHmQVcjK36k4Qq94D0AA4CDsQm7PXHnkSVs2XYHKqH0JHKiVcuAWkD7IPdN9Rg+9X2I5p1Fr6swbb2uR34Oua2iCdRBaQK2w+qK9Ad24u2J9Cr4asHyZ32sha4FRiPHaksKZIvIFXAIGyc3xV7bl+LPYlZB2xky/FdLRu+WmO9QHvsDO8dsaWoHbG31F0o/6FRsdZha8PHA5/G3BYJSeOAHA3cgg13JL8vgTuw/07aUSTlcgMyDvhNXA1JgBXY/cUfsBObpAJkj4EeDUyMuS3lagHWWzyMHSsgFaQqk8l0wSbO+T5uOMk2Y2eJ/x6YGW9TJE7VwFgUjqxlwB+xbUM/jLktUgaqsRVslWwjtlPJfcBUtCGb5KjKZDLr8H9gfRLMBR7ATnvS0yjJqxp7h1EpFgCPAZOBd2JuiyRANfb4cte4GxKSDNZTPIkFY1GsrZHEqQb+CZwUd0M8qsPO6JuKHXn2WbzNkSSrymQyI7C/YZNqIza1fCa2Jeichj8TcVaVyWSqsMPmD467MQWqwwLxSsPXLGxelIh32Tfp3bBftN3ibc421mI31vOwe4m52KZuehQrkcgGBGBP4HGiOSGpsa+wG+h3G74WYBsbLEaLjiRGuQEBu2k/B5ubNQCb+u5qPfakbAXwCfa2ehmwJOdLN9JSlhoHJFd7bHFTB2AHbD349ti6jpbY3+wZ7IZ4IxaEtQ1fX2AzXmsb/lkkkYICIlLxkrrMVSQSCohIAAVEJIACIhJAAREJoICIBFBARAIoICIBFBCRAAqISAAFRCSAAiISQAERCaCAiAT4H18pHuOco75EAAAAAElFTkSuQmCC"
                      }
                    })
                  ]
                )
              ]),
              _vm._v(" "),
              _c("rect", {
                attrs: {
                  id: "arrow-up-icon",
                  width: "98",
                  height: "98",
                  transform: "translate(28.652 122.37) rotate(-107)",
                  fill: "url(#pattern)"
                }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "guide-text text-rtl" }, [
          _vm._v(
            "\n      در مورد این کاربر نظر دهید و نظرات دیگران را ببینید.\n    "
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "message-contact-title" }, [
      _c(
        "div",
        { staticClass: "contact-title-contents pull-right" },
        [
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
            [_c("i", { staticClass: "fa fa-arrow-right" })]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "message-contact-title-img hidden-sm hidden-md hidden-lg",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.$parent.selectedContact = !_vm.$parent.selectedContact
                }
              }
            },
            [
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
                    attrs: { src: __webpack_require__(160) }
                  })
            ]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "message-contact-title-img hidden-xs",
              attrs: {
                to: {
                  path: "/profile/" + _vm.$parent.selectedContact.user_name
                },
                tag: "div"
              }
            },
            [
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
                    attrs: { src: __webpack_require__(160) }
                  })
            ]
          ),
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
                    "\n        "
                )
              ]),
              _vm._v(" "),
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
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "commetns-link" }, [
                _vm._v(" نظر کاربران ")
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "head-action-buttons pull-left" }, [
        _c("div", { staticClass: "head-action-buttons pull-left" }, [
          _c(
            "button",
            {
              staticClass: "report-button hidden-lg",
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
              _vm._v("\n          گزارش تخلف\n        ")
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
                                                    "jYYYY/jMM/jDD, HH:mm"
                                                  )
                                                )
                                              )
                                            ])
                                          : _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    Date(),
                                                    "jYYYY/jMM/jDD, HH:mm"
                                                  )
                                                )
                                              )
                                            ]),
                                        _vm._v(" "),
                                        _vm._m(0, true)
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
                                                    "jYYYY/jMM/jDD, HH:mm"
                                                  )
                                                )
                                              )
                                            ])
                                          : _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("moment")(
                                                    Date(),
                                                    "jYYYY/jMM/jDD, HH:mm"
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
                                                "jYYYY/jMM/jDD, HH:mm"
                                              )
                                            )
                                          )
                                        ])
                                      : _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("moment")(
                                                Date(),
                                                "jYYYY/jMM/jDD, HH:mm"
                                              )
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
                : _vm._e(),
              _vm._v(" "),
              _vm.$parent.userAllowedReview && _vm.$parent.isLikeBoxActive
                ? _c(
                    "li",
                    {
                      staticClass:
                        "mobile-like-user hidden-lg hidden-md hidden-sm",
                      class: { success: _vm.$parent.isReviewSubmited }
                    },
                    [
                      _vm.$parent.isReviewSubmited
                        ? _c("div", [
                            _c(
                              "button",
                              {
                                staticClass: "close-rating",
                                on: {
                                  click: function($event) {
                                    _vm.$parent.setLikeBoxCookie()
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-times" })]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "title-item" }, [
                              _vm._v("\n            از\n            "),
                              _c("span", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.$parent.selectedContact.first_name +
                                        " " +
                                        _vm.$parent.selectedContact.last_name
                                    ) +
                                    "\n            "
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            !_vm.$parent.reviewSubmitLoader
                              ? _c("div", { staticClass: "likes-wrapper" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "like",
                                      on: {
                                        click: function($event) {
                                          _vm.$parent.registerReview(5)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-thumbs-up"
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v(" راضی هستم ")])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "dislike",
                                      on: {
                                        click: function($event) {
                                          _vm.$parent.registerReview(1)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-thumbs-up"
                                      }),
                                      _vm._v(" "),
                                      _c("span", [_vm._v(" راضی نیستم ")])
                                    ]
                                  )
                                ])
                              : _c("div", { staticClass: "review-loader" }, [
                                  _vm._m(1)
                                ])
                          ])
                        : _c("div", [_vm._m(2)])
                    ]
                  )
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _vm.$parent.isChatMessagesLoaded && _vm.$parent.isFirstMessageLoading
            ? _c("div", { staticClass: "loading-container" }, [_vm._m(3)])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "send-message-form" }, [
            _c(
              "form",
              {
                on: {
                  "v-on:submit": function($event) {
                    $event.preventDefault()
                    _vm.$parent.sendMessage()
                  }
                }
              },
              [
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
                            _vm.$parent.sendMessage()
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
              ]
            )
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
    return _c("div", { staticClass: "spinner-border" }, [
      _c("span", { staticClass: "sr-only" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "likes-wrapper" }, [
      _c("div", [_c("i", { staticClass: "fa fa-check" })]),
      _vm._v(" "),
      _c("p", { staticClass: "title-item" }, [_vm._v("از نظر شما سپاسگذاریم.")])
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

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(553)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(555)
/* template */
var __vue_template__ = __webpack_require__(561)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5db09dff"
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
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/main-channel-wrapper.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5db09dff", Component.options)
  } else {
    hotAPI.reload("data-v-5db09dff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(554);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("500570be", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5db09dff\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-channel-wrapper.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5db09dff\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./main-channel-wrapper.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(7);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.loading-container[data-v-5db09dff] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  position: relative;\n  align-items: center;\n  z-index: 1;\n}\n.loading-container .lds-ring[data-v-5db09dff] {\n  background: #fff;\n  border-radius: 50px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n  width: 50px;\n  height: 50px;\n  padding: 4px;\n}\n.loading-container .lds-ring > div[data-v-5db09dff] {\n  width: 30px;\n  height: 30px;\n  border-width: 3px;\n}\n.whatsapp-loading-gif[data-v-5db09dff] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 20%;\n  height: 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.chat-loaded[data-v-5db09dff] {\n  opacity: 1;\n}\n.chat-loaded.load-more-active[data-v-5db09dff] {\n  padding-top: 80px !important;\n}\n.contact-is-search img[data-v-5db09dff] {\n  display: block;\n  width: 60px;\n  margin: 18px auto;\n}\n.clock-icon[data-v-5db09dff] {\n  font-size: 14px;\n}\n.check-items[data-v-5db09dff] {\n  padding-left: 10px;\n  color: #b2b2b2;\n}\n.text-blue[data-v-5db09dff] {\n  color: #60caf1;\n}\n.check-items.dual[data-v-5db09dff] :last-of-type {\n  margin-left: -8px;\n}\n.message-wrapper .message-contact-title[data-v-5db09dff] {\n  font-size: 16px;\n  padding: 7px 15px 8px;\n  float: right;\n  width: 100%;\n  color: #fff;\n  background: -webkit-gradient(linear, right top, left top, from(#21ad93), to(#4dc0bb));\n  background: linear-gradient(-90deg, #21ad93, #4dc0bb);\n}\n.message-contact-title a[data-v-5db09dff] {\n  color: #fafafa;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-contact-title a[data-v-5db09dff]:hover {\n  color: #fff;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.chat-page .bg-wrapper[data-v-5db09dff] {\n  background: url(" + escape(__webpack_require__(162)) + ") repeat;\n  opacity: 0.06;\n  position: absolute;\n  z-index: 1;\n  left: 15px;\n  right: 0;\n  top: 50px;\n  bottom: 0;\n  background-size: contain;\n}\n.chat-page ul[data-v-5db09dff] {\n  background-color: #e5ddd6;\n}\n.chat-page ul li[data-v-5db09dff] {\n  position: relative;\n  z-index: 1;\n}\n.message-wrapper .message-contact-title-img[data-v-5db09dff] {\n  width: 35px;\n  height: 35px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 10px;\n}\n.message-wrapper .message-contact-title-img[data-v-5db09dff]:hover {\n  cursor: pointer;\n}\n.message-wrapper .message-contact-title a[data-v-5db09dff] {\n  float: right;\n  display: block;\n  max-width: 300px;\n  font-size: 15px;\n  color: #fff;\n}\n.message-wrapper .message-contact-title span[data-v-5db09dff]:first-of-type {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  height: 25px;\n  overflow: hidden;\n  margin-top: 10px;\n  float: right;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-5db09dff] {\n  border-radius: 5px;\n  padding: 4px 7px;\n  margin-right: 12px;\n  margin-top: 6px;\n  background: #fff;\n  color: #23ae94;\n  font-size: 13px;\n  float: right;\n}\n.message-wrapper .message-contact-title span.commetns-link i[data-v-5db09dff] {\n  position: relative;\n  top: 2px;\n  font-size: 12px;\n}\n.back-state[data-v-5db09dff] {\n  background: none;\n  color: #fff;\n  border: none;\n  font-size: 22px;\n  position: relative;\n  top: 5px;\n  padding: 0 6px;\n  float: right;\n}\n.report-button[data-v-5db09dff] {\n  background: none;\n  border: none;\n  padding: 7px 0 0px;\n  font-size: 13px;\n  color: #fff;\n}\n.message-wrapper .chat-page ul[data-v-5db09dff] {\n  padding: 20px 20px 0;\n\n  overflow-x: hidden;\n\n  position: absolute;\n\n  left: 0;\n\n  right: 0;\n\n  bottom: 50px;\n\n  top: 50px;\n\n  -webkit-transition: 100ms;\n\n  transition: 100ms;\n}\n.message-wrapper .chat-page ul li[data-v-5db09dff] {\n  width: 100%;\n  float: right;\n}\n.message-wrapper .chat-page ul li[data-v-5db09dff]:last-of-type {\n  margin-bottom: 10px;\n}\n.message-date[data-v-5db09dff] {\n  text-align: center;\n  margin: 20px auto;\n  color: #313a43;\n  font-size: 14px;\n}\n.message-date span[data-v-5db09dff] {\n  background: #e1f5fe;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 7px;\n  padding: 3px 10px 0;\n  line-height: 1;\n}\n.message-wrapper .chat-page li > div.message-item-wrapper[data-v-5db09dff] {\n  font-size: 14px;\n  line-height: 1.612;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 8px;\n  margin: 0 auto 3px;\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n  min-width: 100px;\n}\n.message-contents[data-v-5db09dff] {\n  max-width: 455px;\n  float: left;\n  position: relative;\n  margin-top: 20px;\n  width: 100%;\n}\n.message-content-wrapper[data-v-5db09dff] {\n  padding: 5px;\n  display: block;\n  min-width: 200px;\n}\n.message-content-wrapper.product-wrapper[data-v-5db09dff] {\n  padding: 5px 10px;\n  display: block;\n  min-width: 200px;\n  border: 2px solid #00c569;\n  float: right;\n  width: 100%;\n  border-radius: 10px;\n}\n.message-content-wrapper .product-header > p[data-v-5db09dff] {\n  font-size: 17px;\n  color: #474747;\n  font-weight: 500;\n  margin: 13px 0 18px;\n}\n.message-wrapper .chat-page .message-item-wrapper.message-receive[data-v-5db09dff] {\n  float: left;\n  background: #fff;\n  border-radius: 0 8px 8px 8px;\n  width: 100%;\n  position: relative;\n  margin-bottom: 5px;\n}\n.message-wrapper .chat-page .message-receive[data-v-5db09dff]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: -6px;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 6px 9px 0;\n  border-color: transparent #fff transparent transparent;\n  line-height: 0px;\n  _border-color: #000000 #fff #000000 #000000;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n}\n.message-wrapper .chat-page .message-receive.product-item[data-v-5db09dff] {\n  border-radius: 10px;\n}\n.message-wrapper .chat-page .message-receive.product-item[data-v-5db09dff]::after {\n  display: none;\n}\n.message-wrapper .chat-page span.message-chat-date[data-v-5db09dff] {\n  text-align: right;\n  font-size: 13px;\n  padding-top: 3px;\n  width: 100%;\n  direction: ltr;\n  display: block;\n  color: #b2b2b2;\n}\n.product-content-wrapper[data-v-5db09dff] {\n  float: right;\n  width: 100%;\n  padding: 10px 0;\n}\n.message-wrapper .chat-page .product-wrapper span.message-chat-date[data-v-5db09dff] {\n  float: right;\n  width: 100%;\n  border-top: 1px solid #eee;\n  margin-top: 2px;\n  padding: 5px 0;\n}\n.product-title[data-v-5db09dff] {\n  font-weight: 500;\n  color: #474747;\n  padding-top: 3px;\n  font-size: 20px;\n}\n.product-amount i[data-v-5db09dff] {\n  position: relative;\n  top: 2px;\n}\n.product-amount[data-v-5db09dff] {\n  margin-top: 5px;\n  font-size: 17px;\n  font-weight: 500;\n}\n.send-message-form[data-v-5db09dff] {\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.send-message-form > button[data-v-5db09dff] {\n  padding: 12px 10px 17px;\n  text-align: center;\n  width: 100%;\n  color: #fff;\n  border: none;\n  border-top-color: currentcolor;\n  border-top-style: none;\n  border-top-width: medium;\n  border-radius: 0;\n  background: #4eb9fb;\n  position: relative;\n  z-index: 4;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 500;\n}\n.send-message-form > button i[data-v-5db09dff] {\n  font-size: 19px;\n  position: relative;\n  height: 18px;\n  line-height: 1;\n  top: 2px;\n  left: 5px;\n}\n.send-message-form > button[data-v-5db09dff]:hover {\n  background: #1da1f2;\n}\n.capture-image[data-v-5db09dff] {\n  position: absolute;\n  font-size: 21px;\n  background: none;\n  border: none;\n  color: #919191;\n  padding: 7px 15px 7px 10px;\n}\n#chat-menu-items[data-v-5db09dff] {\n  position: absolute;\n  left: 15px;\n  z-index: 10;\n  width: 170px;\n  background: #fff;\n  text-align: right;\n  direction: rtl;\n  border-radius: 4px;\n  line-height: 1.618;\n  -webkit-box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);\n  top: 48px;\n  overflow: hidden;\n  padding: 0 !important;\n}\n#chat-menu-items li:last-of-type button[data-v-5db09dff] {\n  border: none;\n}\n#chat-menu-items li button i[data-v-5db09dff] {\n  margin-left: 6px;\n}\n#chat-menu-items li button[data-v-5db09dff] {\n  background: none;\n  color: #777;\n  font-size: 14px;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  text-align: right;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n  border-bottom: 1px solid #dbdbdb;\n}\n#chat-menu-items li button[data-v-5db09dff]:hover {\n  color: #333;\n  background: #eee;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.new-badge[data-v-5db09dff] {\n  position: absolute;\n  right: -16px;\n  background: #e51c38;\n  border-radius: 50px;\n  font-size: 12px;\n  color: #fff;\n  top: -8px;\n  line-height: 1;\n  padding: 4px 2px;\n}\n.messenger-notice[data-v-5db09dff] {\n  text-align: center;\n  background: #fff8c1;\n  padding: 7px;\n  border-radius: 8px;\n  margin-top: 20px;\n  line-height: 1.618;\n  color: #777;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n}\n.messenger-notice .notice-title[data-v-5db09dff] {\n  font-size: 13px;\n}\n.message-wrapper .chat-page li > div.notice-actions[data-v-5db09dff] {\n  margin: 3px auto 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.messenger-notice .notice-actions button[data-v-5db09dff] {\n  border: none;\n  color: #21ad92;\n  border-radius: 4px;\n  margin: 2px 7px 0;\n  background: #fff;\n  padding: 2px 15px;\n}\n.messenger-notice .notice-actions button[data-v-5db09dff]:hover {\n  background: #21ad93;\n  border-color: #21ad93;\n  color: #fff;\n}\n.messenger-notice .notice-actions button i[data-v-5db09dff] {\n  margin-left: 7px;\n}\n.verified-user[data-v-5db09dff]::before {\n  top: 3px;\n  left: 3px;\n}\n.verified-user[data-v-5db09dff] {\n  float: right;\n  top: 7px;\n  right: 5px;\n}\n.overlay-bg-guide[data-v-5db09dff] {\n  position: absolute;\n  width: 100%;\n  z-index: 5;\n  background: rgba(0, 0, 0, 0.6);\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.guide-arrow-item[data-v-5db09dff] {\n  margin-top: 80px;\n}\n.guide-arrow-item svg[data-v-5db09dff] {\n  max-width: 130px;\n  right: 35%;\n  position: relative;\n}\n.guide-text[data-v-5db09dff] {\n  font-size: 24px;\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  padding: 15px;\n  line-height: 1.618;\n}\n.share-button[data-v-5db09dff] {\n  border-radius: 4px;\n  border: none;\n  width: 100%;\n  color: #fff;\n  padding: 5px;\n  background: rgba(0, 0, 0, 0.4);\n\n  font-size: 15px;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  display: block;\n  overflow: hidden;\n  text-align: center;\n}\n.share-button i[data-v-5db09dff] {\n  position: relative;\n  top: 2px;\n  left: 2px;\n}\n.share-button[data-v-5db09dff]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.share-button.custom-link[data-v-5db09dff] {\n  background: rgba(56, 72, 95, 0.67);\n\n  -webkit-transition: 0ms;\n\n  transition: 0ms;\n  padding: 9px;\n}\n.share-button.custom-link[data-v-5db09dff]:hover {\n  background: rgba(56, 72, 95, 0.9);\n  -webkit-transition: 0ms;\n  transition: 0ms;\n}\n.forward-item[data-v-5db09dff] {\n  position: absolute;\n  bottom: 0;\n  right: -40px;\n  background: rgba(0, 0, 0, 0.4);\n  width: 30px;\n  height: 30px;\n  display: inline-block;\n  border-radius: 50px;\n  text-align: center;\n  color: #fff;\n  font-size: 15px;\n  border: none;\n  padding: 0;\n  padding-top: 5px;\n}\n.forward-item[data-v-5db09dff]:hover {\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n}\n.chat-spinner-wrapper[data-v-5db09dff] {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  width: 46px;\n  height: 46px;\n  background: #fff;\n  border-radius: 45px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin: 55px auto 0;\n}\n.message-text[data-v-5db09dff] {\n  line-height: 1.618;\n  white-space: pre-line;\n  padding: 0 5px;\n  font-size: 16px;\n  display: block;\n}\n.spinner-border[data-v-5db09dff] {\n  color: #00c569;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  width: 3rem;\n  height: 3rem;\n  border-width: 0.29rem;\n}\n.valid-user-badge[data-v-5db09dff] {\n  width: 36px;\n  height: 38px;\n  background: #00c569;\n  position: absolute;\n  left: 14px;\n  top: 0;\n  padding: 2px;\n  border-top: 3px solid #00b761;\n  text-align: center;\n  color: #fff !important;\n}\n.valid-user-badge[data-v-5db09dff]::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 18px 14px;\n  border-color: transparent #00c569 transparent #00c569;\n  line-height: 0;\n  _border-color: #000000 #000000 #000000 #6980fe;\n  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: -14px;\n}\n@media screen and (max-width: 1199px) {\n.message-contents[data-v-5db09dff] {\n    max-width: 423px;\n}\n.message-wrapper .message-contact-title[data-v-5db09dff] {\n    position: relative;\n    z-index: 5;\n}\n.message-wrapper .chat-page ul li[data-v-5db09dff] {\n    padding-right: 30px;\n}\n}\n@media screen and (max-width: 767px) {\n.chat-page .bg-wrapper[data-v-5db09dff] {\n    left: 0;\n}\n#chat-menu-items[data-v-5db09dff] {\n    left: 54px;\n}\n.message-wrapper .message-contact-title[data-v-5db09dff] {\n    padding: 8px;\n}\n.notice-actions[data-v-5db09dff] {\n    width: 100%;\n}\n.messenger-notice .notice-actions button[data-v-5db09dff] {\n    width: 100%;\n    text-align: right;\n    background: none;\n    padding: 5px 0;\n}\n.messenger-notice .notice-actions button[data-v-5db09dff]:hover {\n    background: initial;\n    border-color: initial;\n    color: #21ad92;\n}\n.message-button-wrapper[data-v-5db09dff] {\n    margin: 0 -10px -5px;\n    overflow: hidden;\n    border-radius: 0 0 4px 4px;\n}\n.message-button-wrapper button[data-v-5db09dff] {\n    display: block;\n    width: 100%;\n    background: #21ad93;\n    text-align: center;\n    color: #fff;\n    border: none;\n    font-size: 14px;\n    padding: 5px;\n    margin-top: 8px;\n}\n.message-button-wrapper button i[data-v-5db09dff] {\n    font-size: 11px;\n}\n.is-phone-active-wrapper[data-v-5db09dff] {\n    min-width: 200px;\n}\n.is-phone-active-text[data-v-5db09dff] {\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 500px) {\n.message-contents[data-v-5db09dff] {\n    max-width: 304px;\n}\n.message-wrapper .message-contact-title a[data-v-5db09dff] {\n    max-width: 190px;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-5db09dff] {\n    margin-right: 8px;\n    margin-top: 7px;\n    padding: 4px;\n}\n.verified-user[data-v-5db09dff] {\n    right: 2px;\n}\n.message-wrapper .message-contact-title-img[data-v-5db09dff] {\n    margin-left: 5px;\n}\n}\n@media screen and (max-width: 376px) {\n.message-contents[data-v-5db09dff] {\n    max-width: 289px;\n}\n}\n@media screen and (max-width: 365px) {\n.message-wrapper .message-contact-title a[data-v-5db09dff] {\n    max-width: 180px;\n}\n}\n@media screen and (max-width: 355px) {\n.message-wrapper .chat-page ul li[data-v-5db09dff] {\n    padding-right: 0;\n}\n.forward-item[data-v-5db09dff] {\n    display: none;\n}\n.message-wrapper .message-contact-title a[data-v-5db09dff] {\n    max-width: 154px;\n}\n.message-wrapper .message-contact-title span.commetns-link[data-v-5db09dff] {\n    margin-right: 6px;\n    margin-top: 5px;\n}\n.message-wrapper .message-contact-title-img[data-v-5db09dff] {\n    margin-left: 5px;\n}\n.back-state[data-v-5db09dff] {\n    padding: 0 0px 0 5px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messege_image__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messege_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__messege_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_router__ = __webpack_require__(8);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MessageImage: __WEBPACK_IMPORTED_MODULE_0__messege_image___default.a
  },
  data: function data() {
    return {
      isImageLoad: false,
      loadMoreContacts: false,
      channelMessages: "",
      channelMessagesTotalCount: 0,
      loadPagesCount: 1,
      listHeight: 0,
      isChannelContentLoaded: false
    };
  },

  methods: {
    init: function init() {
      this.hideCollapses();
      this.getChannelPosts(1);
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
    getChannelPosts: function getChannelPosts() {
      var _this = this;

      this.isChannelContentLoaded = true;
      axios.post("/get_channel_contents", {
        page: this.loadPagesCount
      }).then(function (response) {
        _this.channelMessagesTotalCount = response.data.total;
        var data = response.data.contents.reverse();
        _this.channelMessages = data;
        _this.$parent.scrollToEnd(0);
        _this.$nextTick(function () {
          _this.activeLoadMore();
        });
        _this.isChannelContentLoaded = false;
      });
    },
    loadMoreChannelPosts: function loadMoreChannelPosts() {
      var _this2 = this;

      this.loadPagesCount += 1;
      axios.post("/get_channel_contents", {
        page: this.loadPagesCount
      }).then(function (response) {
        var data = response.data.contents.reverse();
        if (data.length > 0) {
          var _channelMessages;

          (_channelMessages = _this2.channelMessages).unshift.apply(_channelMessages, _toConsumableArray(data));
          _this2.$nextTick(function () {
            _this2.stopScrollPostition();
          });
        }
      });
    },
    activeLoadMore: function activeLoadMore() {
      var _this3 = this;

      var chatPageElementList = $(".chat-page ul");
      this.listHeight = chatPageElementList.prop("scrollHeight");
      chatPageElementList.scroll(function () {
        if (chatPageElementList.scrollTop() == 0 && !_this3.loadMoreContacts) {
          if (_this3.channelMessagesTotalCount > _this3.channelMessages.length) {
            _this3.loadMoreContacts = true;
            _this3.loadMoreChannelPosts();
          }
        }
      });

      // loadMoreContacts
    },
    stopScrollPostition: function stopScrollPostition() {
      var chatPageElementList = $(".chat-page ul");
      var chatElementHeight = chatPageElementList.prop("scrollHeight");
      chatPageElementList.scrollTop(chatElementHeight - this.listHeight);
      this.listHeight = chatElementHeight;
      this.loadMoreContacts = false;
    },
    shareContetn: function shareContetn(contentId) {
      if (this.isDeviceMobile()) {
        var baseUrl = getBase();
        var linkElement = document.createElement("a");
        var Message = baseUrl + "public-channel/" + contentId;
        var messageToWhatsApp = encodeURIComponent(Message);
        var url = "whatsapp://send?text=" + messageToWhatsApp;

        linkElement.setAttribute("href", url);
        linkElement.setAttribute("data-action", "share/whatsapp/share");

        document.body.appendChild(linkElement);

        linkElement.click();

        document.body.removeChild(linkElement);
      } else {
        this.activeShareModal(contentId);
      }
    },

    handleBackKeys: function handleBackKeys() {
      this.$parent.isImageOpened = true;
      var self = this;
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $.magnificPopup.close();
      });
      this.$parent.handleBackBtnClickOnDevices();
    },
    resetBackKeys: function resetBackKeys() {
      this.$parent.isImageOpened = false;
      this.$parent.handleBackBtnClickOnDevices();
    },

    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    activeShareModal: function activeShareModal(contentId) {
      var baseUrl = getBase();
      var url = baseUrl + "public-channel/" + contentId;
      __WEBPACK_IMPORTED_MODULE_1__router_router__["b" /* eventBus */].$emit("shareModalUrl", url);
    },
    getProductInfo: function getProductInfo(text, isTitle) {
      var splitText = text.split("\n");
      if (isTitle) {
        return splitText[0];
      } else {
        return splitText[1].match(/\d+/)[0];
      }
    },
    productAmount: function productAmount(getAmount) {
      var amount = this.getProductInfo(getAmount, false);
      return this.getConvertedNumbers(amount);
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
    getProductUrl: function getProductUrl(product) {
      var productName = product.text.split("\n")[0].split("|");
      return "/product-view/خرید-عمده-" + productName[1].trim().replace(" ", "-") + "/" + productName[0].trim().replace(" ", "-") + "/" + product.product_id;
    },
    shareMyProfile: function shareMyProfile() {
      var baseUrl = getBase();

      if (this.isDeviceMobile()) {
        var linkElement = document.createElement("a");
        var Message = baseUrl + "shared-profile/" + this.$parent.currentUser.user_info.user_name;
        var messageToWhatsApp = encodeURIComponent(Message);
        var url = "whatsapp://send?text=" + messageToWhatsApp;

        linkElement.setAttribute("href", url);
        linkElement.setAttribute("data-action", "share/whatsapp/share");

        document.body.appendChild(linkElement);

        linkElement.click();

        document.body.removeChild(linkElement);
      } else {
        var _url = baseUrl + "shared-profile/" + this.$parent.currentUser.user_info.user_name;
        __WEBPACK_IMPORTED_MODULE_1__router_router__["b" /* eventBus */].$emit("shareModalUrl", _url);
      }
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(557)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(559)
/* template */
var __vue_template__ = __webpack_require__(560)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00d43b82"
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
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/messege-image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00d43b82", Component.options)
  } else {
    hotAPI.reload("data-v-00d43b82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(558);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("dac9f7ec", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00d43b82\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messege-image.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00d43b82\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messege-image.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.message-image[data-v-00d43b82] {\n  text-align: center;\n  height: 445px;\n  position: relative;\n  overflow: hidden;\n  background: #eee;\n  margin-bottom: 15px;\n}\n.message-image a[data-v-00d43b82] {\n  display: block;\n}\n.message-image a img[data-v-00d43b82] {\n  width: 100%;\n  height: initial;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.message-product-image[data-v-00d43b82] {\n  width: 100%;\n  height: 431px;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n  float: right;\n  background: #eee;\n}\n.message-product-image img[data-v-00d43b82] {\n  width: 100%;\n  height: initial;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.spinner-wrapper[data-v-00d43b82] {\n  position: relative;\n  top: calc(50% - 25px);\n  text-align: center;\n}\n.spinner-border[data-v-00d43b82] {\n  width: 5rem;\n  height: 5rem;\n  border-width: 0.35rem;\n  color: #21ad93;\n}\n.set-height[data-v-00d43b82] {\n  width: initial !important;\n  height: 100% !important;\n}\n@media screen and (max-width: 1199px) {\n.message-image[data-v-00d43b82] {\n    height: 413px;\n}\n.message-product-image[data-v-00d43b82] {\n    height: 399px;\n}\n}\n@media screen and (max-width: 500px) {\n.message-image[data-v-00d43b82] {\n    height: 288px;\n}\n.message-product-image[data-v-00d43b82] {\n    height: 280px;\n}\n}\n@media screen and (max-width: 375px) {\n.message-image[data-v-00d43b82] {\n    height: 279px;\n}\n.message-product-image[data-v-00d43b82] {\n    height: 265px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 559:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imgSrcs: "",
      isImageLoad: false
    };
  },
  props: ["base", "img", "alt", "isProduct", "imgId"],
  methods: {
    loadImage: function loadImage() {
      this.isImageLoad = false;
    },
    ImageLoaded: function ImageLoaded() {
      this.isImageLoad = true;
      this.setImagewidthAndHeight();
    },
    setImagewidthAndHeight: function setImagewidthAndHeight() {
      var element = $("#" + this.imgId);
      var elementWidth = element.prop("naturalWidth");
      var elementHeight = element.prop("naturalHeight");
      if (elementHeight < elementWidth) {
        element.attr("class", "set-height");
      }
    },
    activeImagePopup: function activeImagePopup() {
      var self = this;
      setTimeout(function (_) {
        $(".image-popup-no-margins").magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          },
          callbacks: {
            open: function open() {
              self.$parent.handleBackKeys();
            },
            close: function close() {
              self.$parent.resetBackKeys();
            }
          }
        });
      }, 10);
    }
  },
  mounted: function mounted() {
    this.activeImagePopup();
  },
  created: function created() {
    this.loadImage();
  }
});

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.img
    ? _c(
        "div",
        {
          class: {
            "message-image": !_vm.isProduct,
            "message-product-image": _vm.isProduct
          }
        },
        [
          _c("div", { staticClass: "spinner-wrapper" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isImageLoad,
                    expression: "!isImageLoad"
                  }
                ],
                staticClass: "spinner-border"
              },
              [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
            )
          ]),
          _vm._v(" "),
          !_vm.isProduct
            ? _c("div", { staticClass: "h-100" }, [
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isImageLoad,
                        expression: "isImageLoad"
                      }
                    ],
                    staticClass: "image-popup-no-margins",
                    attrs: { href: _vm.base + "/" + _vm.img }
                  },
                  [
                    _c("img", {
                      attrs: {
                        id: _vm.imgId,
                        src: _vm.base + "/" + _vm.img,
                        alt: _vm.alt
                      },
                      on: { load: _vm.ImageLoaded }
                    })
                  ]
                )
              ])
            : _c("div", { staticClass: "h-100" }, [
                _c("img", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.isImageLoad,
                      expression: "isImageLoad"
                    }
                  ],
                  attrs: {
                    id: _vm.imgId,
                    src: _vm.base + "/" + _vm.img,
                    alt: _vm.alt
                  },
                  on: { load: _vm.ImageLoaded }
                })
              ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00d43b82", module.exports)
  }
}

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "message-contact-title" }, [
      _c("div", { staticClass: "contact-title-contents pull-right" }, [
        _c(
          "button",
          {
            staticClass: "back-state hidden-sm hidden-md hidden-lg",
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.$parent.isChanleActive = !_vm.$parent.isChanleActive
              }
            }
          },
          [_c("i", { staticClass: "fa fa-arrow-right" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "message-contact-title-img hidden-sm hidden-md hidden-lg",
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.$parent.isChanleActive = !_vm.$parent.isChanleActive
              }
            }
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(391)
              }
            })
          ]
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "a",
          {
            attrs: { href: "" },
            on: {
              click: function($event) {
                $event.preventDefault()
              }
            }
          },
          [
            _c("span", [_vm._v(" کانال رسمی باسکول ")]),
            _vm._v(" "),
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
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.$parent.activeChanel
      ? _c("div", { staticClass: "chat-page" }, [
          _c("div", { staticClass: "bg-wrapper" }),
          _vm._v(" "),
          _vm.loadMoreContacts
            ? _c("div", { staticClass: "chat-spinner-wrapper" }, [_vm._m(1)])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "ul",
            {
              class: [
                _vm.isChannelContentLoaded ? "chat-not-loaded" : "chat-loaded",
                _vm.loadMoreContacts ? "load-more-active" : ""
              ]
            },
            [
              _vm.channelMessages.length == 0 && !_vm.isChannelContentLoaded
                ? _c("li", { staticClass: "messenger-notice" }, [
                    _c("p", { staticClass: "notice-title" }, [
                      _vm._v(
                        "\n          جدید ترین اخبار و اطلاعیه ها در کانال رسمی باسکول به زودی ارسال\n          خواهد شد.\n        "
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.channelMessages, function(msg) {
                return _c("li", { key: msg.id }, [
                  _c("div", { staticClass: "message-contents" }, [
                    _c(
                      "div",
                      {
                        staticClass: "message-item-wrapper message-receive",
                        class: { "product-item": msg.is_product }
                      },
                      [
                        msg.is_product
                          ? _c(
                              "router-link",
                              {
                                staticClass:
                                  "message-content-wrapper product-wrapper",
                                attrs: {
                                  target: "_blank",
                                  to: { path: _vm.getProductUrl(msg) }
                                }
                              },
                              [
                                _c("div", { staticClass: "product-header" }, [
                                  _c("p", [_vm._v("محصول پیشنهادی")]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "valid-user-badge" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "wrapper-icon" },
                                        [
                                          _c(
                                            "svg",
                                            {
                                              attrs: {
                                                width: "24.965",
                                                height: "30.574",
                                                viewBox: "0 0 24.965 30.574"
                                              }
                                            },
                                            [
                                              _c(
                                                "g",
                                                {
                                                  attrs: {
                                                    id: "buskool-icon",
                                                    "data-name": "buskool",
                                                    transform:
                                                      "translate(-273.1 -715.025)"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      id: "Subtraction_1",
                                                      "data-name":
                                                        "Subtraction 1",
                                                      d:
                                                        "M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z",
                                                      transform:
                                                        "translate(2237.1 709.808)",
                                                      fill: "#fff"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c(
                                                    "g",
                                                    {
                                                      attrs: {
                                                        id: "Group_24",
                                                        "data-name": "Group 24"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          id: "Rectangle_12",
                                                          "data-name":
                                                            "Rectangle 12",
                                                          d:
                                                            "M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z",
                                                          transform:
                                                            "translate(282.389 717.5) rotate(45)",
                                                          fill: "#fff"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c("path", {
                                                        attrs: {
                                                          id: "Rectangle_13",
                                                          "data-name":
                                                            "Rectangle 13",
                                                          d:
                                                            "M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z",
                                                          transform:
                                                            "translate(294.935 718.561) rotate(135)",
                                                          fill: "#fff"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("message-image", {
                                  attrs: {
                                    img: msg.file_path,
                                    base: _vm.$parent.str,
                                    alt: msg.text,
                                    "img-id": msg.id,
                                    "is-product": true
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "product-content-wrapper" },
                                  [
                                    _c("p", {
                                      staticClass: "message-text product-title",
                                      domProps: {
                                        textContent: _vm._s(
                                          _vm.getProductInfo(msg.text, true)
                                        )
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "message-text gray-text product-amount"
                                      },
                                      [
                                        _c("span", {
                                          domProps: {
                                            textContent: _vm._s(
                                              "موجودی : " +
                                                _vm.productAmount(msg.text)
                                            )
                                          }
                                        })
                                      ]
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
                                                "jYYYY/jMM/jDD, HH:mm"
                                              )
                                            )
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ],
                              1
                            )
                          : _c(
                              "div",
                              { staticClass: "message-content-wrapper" },
                              [
                                _c("message-image", {
                                  attrs: {
                                    img: msg.file_path,
                                    base: _vm.$parent.str,
                                    alt: msg.text,
                                    "img-id": msg.id
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass: "message-text",
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
                                                "jYYYY/jMM/jDD, HH:mm"
                                              )
                                            )
                                          )
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ],
                              1
                            ),
                        _vm._v(" "),
                        msg.is_sharable
                          ? _c(
                              "button",
                              {
                                staticClass: "forward-item",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.shareContetn(msg.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-share" })]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    msg.is_sharable
                      ? _c(
                          "button",
                          {
                            staticClass: "share-button",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.shareContetn(msg.id)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-share" }),
                            _vm._v(
                              "\n            ارسال برای دوستان\n          "
                            )
                          ]
                        )
                      : msg.cta_link
                        ? _c(
                            "a",
                            {
                              staticClass: "share-button custom-link",
                              attrs: { href: msg.cta_link, target: "_blank" }
                            },
                            [
                              _c("i", { staticClass: "fa fa-link" }),
                              _vm._v(
                                "\n            " +
                                  _vm._s(msg.cta_text) +
                                  "\n          "
                              )
                            ]
                          )
                        : _vm._e()
                  ])
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.isChannelContentLoaded
            ? _c("div", { staticClass: "loading-container" }, [_vm._m(2)])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "send-message-form" }, [
            _c(
              "button",
              {
                staticClass: "btn",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.shareMyProfile()
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-address-card" }),
                _vm._v("\n        ارسال پروفایل تجاری شما به دوستان\n      ")
              ]
            )
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
      "div",
      {
        staticClass: "message-contact-title-img hidden-xs",
        attrs: { tag: "div" }
      },
      [
        _c("img", {
          attrs: { src: __webpack_require__(391) }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner-border" }, [
      _c("span", { staticClass: "sr-only" })
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
    require("vue-hot-reload-api")      .rerender("data-v-5db09dff", module.exports)
  }
}

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    {
      staticClass: "main-content col-xs-12",
      class: {
        "is-fix-alert": _vm.isRequiredFixAlert,
        "is-guide-active": _vm.selectedContact
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "col-xs-12 contact-wrapper pull-right col-sm-4 col-lg-3",
          class: [
            {
              hidden_element: _vm.selectedContact || _vm.isChanleActive
            }
          ]
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
      _vm.selectedContact || _vm.isChanleActive
        ? _c(
            "div",
            {
              staticClass: "col-xs-12 pull-right message-wrapper col-sm-8",
              class: [
                {
                  "col-lg-6": !_vm.isChanleActive,
                  "col-lg-9": _vm.isChanleActive
                }
              ]
            },
            [
              _vm.isChanleActive
                ? _c("main-channel-wrapper")
                : _c("main-chat-wrapper")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.selectedContact && _vm.isCurrentStep == 0 && !_vm.isChanleActive
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
      _vm.selectedContact && !_vm.isChanleActive
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
        attrs: { src: __webpack_require__(563), alt: "" }
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

/***/ 563:
/***/ (function(module, exports) {

module.exports = "/images/messegs-buy-ads.jpg?afb212ea3048bdd1ad7baffb91a24797";

/***/ })

});