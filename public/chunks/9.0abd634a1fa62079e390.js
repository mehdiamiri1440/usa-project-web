webpackJsonp([9],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_seller_viewer_vue__ = __webpack_require__(499);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_058b6482_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_seller_viewer_vue__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(610)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-058b6482"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_seller_viewer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_058b6482_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_seller_viewer_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_058b6482_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_seller_viewer_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/seller/seller-viewer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-058b6482", Component.options)
  } else {
    hotAPI.reload("data-v-058b6482", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router_js__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// import moment from "vue-jalali-moment";

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      chatMessagesLoader: true,
      isFirstMessageLoading: true,
      openChatBox: false,
      contactInfo: "",
      chatMessages: "",
      currentContactUserId: "",
      currentUserId: "",
      msgToSend: ""
    };
  },
  methods: {
    setUpChat: function setUpChat() {
      this.handleBackBtnClickOnDevices();

      this.loadChatHistory(this.contactInfo);
    },
    loadChatHistory: function loadChatHistory(contact, index) {
      var self = this;
      self.chatMessagesLoader = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      // self.selectedIndex = index;
      // this.selectedContact = contact;
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
      var chatPageElementList = $(".main-modal-chat ul");

      var self = this;
      setTimeout(function () {
        chatPageElementList.animate({ scrollTop: chatPageElementList.prop("scrollHeight") }, 500, "swing", function () {
          self.chatMessagesLoader = false;
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

        if (self.contactInfo.buyAd_id !== undefined && self.contactInfo.buyAd_id != null) {
          axios.post("/send_reply_to_buyAd", {
            buy_ad_id: self.contactInfo.buyAd_id,
            text: msgObject.text
          }).then(function (response) {
            self.isFirstMessageLoading = false;
            self.loadChatHistory(self.contactInfo, -10);
          }).catch(function (e) {
            //
          });
        } else {
          axios.post("/messanger/send_message", msgObject).then(function (response) {
            self.isFirstMessageLoading = false;
            self.loadChatHistory(self.contactInfo, -10);
          }).catch(function (e) {
            //
          });
        }
      }
    },
    handleInitialMessage: function handleInitialMessage() {
      var self = this;

      return new Promise(function (resolve, reject) {
        self.loadChatHistory(self.contactInfo);
        resolve(true);
      }).then(function () {
        self.sendMessage();
      });
    },
    handleBackBtnClickOnDevices: function handleBackBtnClickOnDevices() {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        self.openChatBox = false;

        if (self.doesUserComeFromAuthenticationPages()) {
          // if(window.location.pathname == '/login' || window.location.pathname == '/register'){
          window.localStorage.removeItem("comeFromAuthentication");
          window.location.href = window.location.pathname;
          // }
        }
      });
    },
    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    doesUserComeFromAuthenticationPages: function doesUserComeFromAuthenticationPages() {
      if (window.localStorage.getItem("comeFromAuthentication")) {
        return true;
      } else {
        return false;
      }
    },
    routeToProfile: function routeToProfile() {
      if (this.contactInfo.user_name) {
        this.openChatBox = false;
        this.$router.push({ path: "/profile/" + this.contactInfo.user_name });
      }
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

  created: function created() {
    var _this2 = this;

    __WEBPACK_IMPORTED_MODULE_0__router_router_js__["b" /* eventBus */].$on("ChatInfo", function ($event) {
      _this2.contactInfo = $event;
      _this2.chatMessages = "";
      _this2.openChatBox = true;
      _this2.msgToSend = "";
      _this2.setUpChat();
    });
  },
  watch: {
    openChatBox: function openChatBox(value) {
      var _this3 = this;

      if (value == true) {
        $("body").addClass("overflow-hidden");
        setTimeout(function () {
          _this3.activeComponentTooltip();
        }, 10);
      } else {
        $("body").removeClass("overflow-hidden");
      }
    }
  }
});

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = "/images/whatsappbg.png?686b98c9fdffef3f63127759e2057750";

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_chat_modal_vue__ = __webpack_require__(360);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_231e6fe2_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_modal_vue__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(369)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-231e6fe2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_chat_modal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_231e6fe2_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_modal_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_231e6fe2_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_modal_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/layouts/main/main_components/chat_modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-231e6fe2", Component.options)
  } else {
    hotAPI.reload("data-v-231e6fe2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(370);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("49604552", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-231e6fe2\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat_modal.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-231e6fe2\",\"scoped\":true,\"sourceMap\":false}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./chat_modal.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(6);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n/*main chat modal styles*/\n.loading-container[data-v-231e6fe2],\n.image-wrapper[data-v-231e6fe2] {\n  height: 100%;\n}\n.loading-container[data-v-231e6fe2] {\n  height: calc(100% + 56px);\n  background: #fff;\n  z-index: 1;\n  position: relative;\n}\n.chat-modal-wrapper[data-v-231e6fe2] {\n  position: fixed;\n\n  background: #fafafa;\n\n  z-index: 1012;\n\n  width: 450px;\n  height: 550px;\n\n  bottom: -800px;\n\n  left: 15px;\n\n  border-radius: 12px;\n\n  border: 1px solid #00c569;\n\n  -webkit-transition: 1s;\n\n  transition: 1s;\n\n  -webkit-box-shadow: 0 0 22px rgba(0, 0, 0, 0.15);\n\n          box-shadow: 0 0 22px rgba(0, 0, 0, 0.15);\n\n  overflow: hidden;\n}\n.open-chat[data-v-231e6fe2] {\n  bottom: 15px;\n}\n\n/*header chat modal styles */\n.header-chat-modal[data-v-231e6fe2] {\n  background: -webkit-gradient(linear, left top, right top, from(#00c569), to(#21ad93));\n  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);\n\n  overflow: hidden;\n\n  color: #fff;\n}\n.header-info-wrapper[data-v-231e6fe2] {\n  float: right;\n  padding: 7px 18px 7px 0;\n  background: none;\n  border: none;\n}\n.header-chat-image[data-v-231e6fe2] {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  float: right;\n  border-radius: 90px;\n  overflow: hidden;\n}\n.header-chat-image img[data-v-231e6fe2] {\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  top: 50%;\n}\n.header-chat-content[data-v-231e6fe2] {\n  float: right;\n  margin-top: 8px;\n  margin-right: 10px;\n  color: #fff;\n  font-weight: bold;\n  max-width: 200px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: right;\n  overflow: hidden;\n  height: 30px;\n  line-height: 1.618;\n  direction: rtl;\n}\n.close-chat-modal[data-v-231e6fe2] {\n  font-size: 18px;\n  border: none;\n  background: none;\n  padding: 15px;\n}\n\n/*main chat modal styles*/\n.main-modal-chat[data-v-231e6fe2] {\n  float: right;\n  width: 100%;\n  height: calc(100% - 110px);\n  background-color: #e5ddd6;\n}\n.main-modal-chat .bg-wrapper[data-v-231e6fe2] {\n  opacity: 0.06;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 60px;\n}\n.main-modal-chat .bg-wrapper.background-chat[data-v-231e6fe2] {\n  background: url(" + escape(__webpack_require__(361)) + ") repeat;\n  background-size: 90%;\n}\n.main-modal-chat ul[data-v-231e6fe2] {\n  overflow: auto;\n  padding: 20px;\n  max-height: 100%;\n  height: 100%;\n}\n.main-modal-chat li[data-v-231e6fe2] {\n  float: left;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.main-modal-chat li[data-v-231e6fe2]:last-of-type {\n  margin-bottom: 10px;\n}\n.main-modal-chat li > div[data-v-231e6fe2] {\n  background: #f7f7f7;\n\n  border-radius: 8px;\n\n  padding: 12px 10px 3px;\n\n  float: left;\n\n  direction: rtl;\n\n  font-size: 12px;\n\n  margin: 3px auto;\n\n  text-align: right;\n\n  max-width: calc(100% - 50px);\n\n  line-height: 1.612;\n\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n}\n.main-modal-chat li.sender > div[data-v-231e6fe2] {\n  background: #dcf8c6;\n\n  float: right;\n}\n.message-info[data-v-231e6fe2] {\n  font-size: 10px;\n\n  color: #333;\n\n  overflow: hidden;\n\n  padding-top: 5px;\n\n  display: inline-block;\n\n  line-height: 1.618;\n}\n.message-info span.visited[data-v-231e6fe2] {\n  font-size: 11px;\n\n  color: #00c569;\n\n  margin-left: 5px;\n\n  float: right;\n}\n.message-info span.time[data-v-231e6fe2] {\n  float: left;\n\n  margin-top: 3px;\n\n  direction: ltr;\n}\n\n/*footer chat modal styles*/\n.footer-modal-chat[data-v-231e6fe2] {\n  left: 0;\n  overflow: hidden;\n  padding: 8px 15px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: #f0f0f0;\n}\n.send-message-button[data-v-231e6fe2] {\n  float: right;\n\n  width: 40px;\n\n  height: 40px;\n\n  color: #fff;\n\n  background: -webkit-gradient(linear, left top, right top, from(#00c569), to(#21ad93));\n\n  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);\n\n  border: none;\n\n  border-radius: 35px;\n\n  padding: 0 10px;\n}\n.send-message-button i[data-v-231e6fe2] {\n  display: block;\n}\n.send-message-button svg[data-v-231e6fe2] {\n  height: 21px;\n  position: relative;\n  right: -3px;\n  top: 3px;\n}\n.footer-modal-chat input[data-v-231e6fe2] {\n  float: left;\n\n  width: calc(100% - 60px);\n\n  border-radius: 50px;\n\n  background: #fff;\n\n  border: none;\n\n  padding: 7px 15px 8px 15px;\n\n  direction: rtl;\n\n  text-align: right;\n}\n@media screen and (max-width: 991px) {\n.chat-modal-wrapper[data-v-231e6fe2] {\n    left: calc(50% - 230px);\n\n    width: 460px;\n}\n}\n@media screen and (max-width: 767px) {\n.close-chat-modal span[data-v-231e6fe2] {\n    background: #fff;\n\n    color: #00c569;\n\n    padding: 5px 14px;\n\n    border-radius: 5px;\n\n    font-size: 12px;\n}\n.chat-modal-wrapper[data-v-231e6fe2] {\n    height: 100%;\n\n    width: 100%;\n\n    left: -2000px;\n\n    bottom: 0;\n\n    border-radius: 0;\n\n    -webkit-transition: 800ms;\n\n    transition: 800ms;\n\n    border: none;\n}\n.open-chat[data-v-231e6fe2] {\n    left: 0;\n    bottom: 0;\n}\n}\n@media screen and (max-width: 370px) {\n.header-chat-content[data-v-231e6fe2] {\n    max-width: 120px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "chat-modal-wrapper",
      class: { "open-chat": _vm.openChatBox }
    },
    [
      _vm.contactInfo
        ? _c("div", { staticClass: "header-chat-modal" }, [
            _c(
              "button",
              {
                staticClass: "header-info-wrapper",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.routeToProfile($event)
                  }
                }
              },
              [
                _vm.contactInfo.profile_photo
                  ? _c("span", { staticClass: "header-chat-image" }, [
                      _c("img", {
                        attrs: {
                          src:
                            _vm.$parent.assets +
                            "storage/" +
                            _vm.contactInfo.profile_photo
                        }
                      })
                    ])
                  : !_vm.chatMessagesLoader
                  ? _c("span", { staticClass: "header-chat-image" }, [
                      _c("img", {
                        attrs: {
                          src: _vm.$parent.assets + "assets/img/user-defult.png"
                        }
                      })
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("span", { staticClass: "header-chat-content" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(
                        _vm.contactInfo.first_name +
                          " " +
                          _vm.contactInfo.last_name
                      ) +
                      "\n        "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "close-chat-modal",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.openChatBox = false
                  }
                }
              },
              [
                _c("i", { staticClass: "fa fa-times-circle hidden-xs" }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-arrow-left hidden-lg hidden-md hidden-sm"
                })
              ]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "main-modal-chat" }, [
        _c("div", {
          staticClass: "bg-wrapper",
          class: { "background-chat": !_vm.chatMessagesLoader }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.chatMessagesLoader && _vm.isFirstMessageLoading,
                expression: "chatMessagesLoader && isFirstMessageLoading"
              }
            ],
            staticClass: "loading-container"
          },
          [_vm._m(0)]
        ),
        _vm._v(" "),
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.chatMessages,
                expression: "chatMessages"
              }
            ]
          },
          _vm._l(_vm.chatMessages, function(msg) {
            return _c(
              "li",
              {
                key: msg.id,
                class: [
                  msg.sender_id == _vm.currentUserId ? "sender" : "resiver"
                ]
              },
              [
                _c("div", [
                  _c("p", { domProps: { textContent: _vm._s(msg.text) } }),
                  _vm._v(" "),
                  _c("div", { staticClass: "message-info" }, [
                    msg.created_at
                      ? _c("span", { staticClass: "time" }, [
                          _vm._v(
                            _vm._s(
                              _vm._f("moment")(
                                msg.created_at,
                                "jYY/jMM/jDD, h:mm A"
                              )
                            ) + "\n               "
                          )
                        ])
                      : _c("span", [
                          _vm._v(
                            _vm._s(
                              _vm._f("moment")(Date(), "jYY/jMM/jDD, h:mm A")
                            )
                          )
                        ]),
                    _vm._v(" "),
                    msg.sender_id === _vm.currentUserId
                      ? _c("span", { staticClass: "visited" }, [
                          msg.created_at
                            ? _c("i", { staticClass: "fa fa-check" })
                            : _c("i", { staticClass: "far fa-clock" }),
                          _vm._v(" "),
                          msg.is_read
                            ? _c("i", { staticClass: "fa fa-check" })
                            : _vm._e()
                        ])
                      : _vm._e()
                  ])
                ])
              ]
            )
          })
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "footer-modal-chat" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                _vm.sendMessage()
              }
            }
          },
          [
            _c(
              "button",
              {
                staticClass: "send-message-button",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.sendMessage($event)
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
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.msgToSend,
                  expression: "msgToSend"
                }
              ],
              attrs: { type: "text", placeholder: "پیغامی بگذارید" },
              domProps: { value: _vm.msgToSend },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.msgToSend = $event.target.value
                }
              }
            })
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
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

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-231e6fe2", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_jalali_moment__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_jalali_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_jalali_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_main_main_components_chat_modal__ = __webpack_require__(368);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ChatModal: __WEBPACK_IMPORTED_MODULE_2__layouts_main_main_components_chat_modal__["a" /* default */]
  },
  data: function data() {
    return {
      items: "",
      users: "",
      loader: false
    };
  },
  methods: {
    init: function init() {
      var _this = this;

      this.loader = true;
      var itemDate = "";

      axios.post("/get_phone_number_viewers_list").then(function (response) {
        _this.users = response.data.users;
        _this.users = _this.users.map(function (item) {
          var date = item.created_at.substr(0, 10);
          item.isDateShow = true;
          if (itemDate == date) {
            item.isDateShow = false;
          }
          itemDate = date;
          return item;
        });
        _this.loader = false;
      });
    },

    openChat: function openChat(user) {
      this.registerComponentStatistics("ٰsellerViewer", "openChat", "click on open chatBox");

      var contact = {
        contact_id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        user_name: user.user_name
      };
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("ChatInfo", contact);
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    fireToast: function fireToast() {
      var toast = $(".toast");
      toast.addClass("show");
      setTimeout(function () {
        toast.removeClass("show");
      }, 3000);
    }
  },
  mounted: function mounted() {
    this.init();
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", false);
  }
});

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(611);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("6447e22c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-058b6482\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./seller-viewer.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-058b6482\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./seller-viewer.vue");
     if(newContent.__esModule) newContent = newContent.default;
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.title[data-v-058b6482] {\n  text-align: right;\n  padding: 13px 15px;\n}\n.title h1[data-v-058b6482] {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 1.618;\n}\n.user-items-wrapper[data-v-058b6482] {\n  direction: rtl;\n  background: #fff;\n  border-radius: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid #e9ecef;\n  padding: 11px 15px 12px;\n  margin-bottom: 25px;\n}\n.user-items-wrapper a[data-v-058b6482] {\n  font-size: 20px;\n  color: #313a43;\n  text-align: right;\n}\n.user-items-wrapper a i[data-v-058b6482] {\n  position: relative;\n  top: 2px;\n  color: #777;\n}\nli:nth-of-type(2n + 1) .user-items-wrapper[data-v-058b6482] {\n  background: #f9faf5;\n}\n.doller-sign[data-v-058b6482] {\n  background: none;\n  border: none;\n  font-size: 22px;\n  position: relative;\n  top: 5px;\n  margin-left: 20px;\n  color: #556080;\n}\n.date-wrapper p[data-v-058b6482] {\n  font-weight: bold;\n  margin: 0 auto;\n  max-width: 110px;\n  background: #e9ecef;\n  text-align: center;\n  color: #555;\n  padding: 5px;\n  border-radius: 25px;\n  margin-bottom: 15px;\n}\n.green-button[data-v-058b6482] {\n  margin: 0;\n  margin: 0;\n  padding: 6px 20px 5px;\n  border-radius: 8px;\n  font-size: 15px;\n}\n.default-chat-button[data-v-058b6482] {\n  max-width: 120px;\n  margin-right: 10px;\n}\n.list-empty-wrapper[data-v-058b6482] {\n  text-align: center;\n  font-size: 70px;\n  margin-top: 15px;\n  color: #777;\n}\n@media screen and (max-width: 767px) {\n.content-wrapper[data-v-058b6482],\n  .user-items-wrapper[data-v-058b6482] {\n    padding-left: 5px;\n    padding-right: 5px;\n}\n.user-items-wrapper a[data-v-058b6482] {\n    overflow: hidden;\n    height: 30px;\n    line-height: 1.618;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 142px;\n}\n.toast[data-v-058b6482] {\n    margin-left: 0;\n    left: 10px;\n    right: 10px;\n}\n.title[data-v-058b6482] {\n    text-align: center;\n}\n.doller-sign[data-v-058b6482] {\n    margin-left: 5px;\n}\n.main-content[data-v-058b6482] {\n    padding-bottom: 90px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "main-content col-xs-12" },
    [
      _c("ChatModal"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "content-wrapper col-xs-12" }, [
          !_vm.loader && _vm.users.length
            ? _c(
                "ul",
                _vm._l(_vm.users, function(user, index) {
                  return _c("li", { key: index }, [
                    user.isDateShow
                      ? _c("div", { staticClass: "date-wrapper" }, [
                          _c("p", [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  _vm._f("moment")(
                                    user.created_at,
                                    "jYYYY/jMM/jDD"
                                  )
                                ) +
                                "\n            "
                            )
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "user-items-wrapper" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "profile",
                                params: { user_name: user.user_name }
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-user-circle" }),
                            _vm._v(" "),
                            _c("span", {
                              domProps: {
                                textContent: _vm._s(
                                  user.first_name + " " + user.last_name
                                )
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", [
                          user.is_free
                            ? _c(
                                "button",
                                {
                                  staticClass: "doller-sign",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      _vm.fireToast()
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-dollar-sign" })]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "green-button",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.openChat(user)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-comment-alt" }),
                              _vm._v("\n                چت\n              ")
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ])
                })
              )
            : !_vm.loader && _vm.users.length == 0
            ? _c(
                "div",
                { staticClass: "list-empty-wrapper" },
                [
                  _c("i", { staticClass: "fa fa-users" }),
                  _vm._v(" "),
                  _c("p", [_vm._v("هنوز کاربری شماره تماس شما را ندیده است")]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "green-button",
                      attrs: {
                        tag: "button",
                        to: { name: "showNumberGuideSeller" }
                      }
                    },
                    [_vm._v("\n          راهنمای نمایش اطلاعات تماس\n        ")]
                  )
                ],
                1
              )
            : _c(
                "ul",
                _vm._l(5, function(item, index) {
                  return _c("li", { key: index }, [_vm._m(1, true)])
                })
              )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "toast" }, [
        _vm._v("از کیف پول شما برای این دسترسی مبلغی کم شده است")
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
    return _c("div", { staticClass: "title col-xs-12" }, [
      _c("div", { staticClass: "col-xs-12 pull-right" }, [
        _c("h1", [_vm._v("خریدارانی که شماره تماس شما را دیده اند")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "user-items-wrapper" }, [
      _c("p", {
        staticClass: "placeholder-content h-30 content-default-width"
      }),
      _vm._v(" "),
      _c("span", {
        staticClass:
          "\n                default-chat-button\n                placeholder-content\n                h-30\n                content-min-width\n              "
      })
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-058b6482", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});