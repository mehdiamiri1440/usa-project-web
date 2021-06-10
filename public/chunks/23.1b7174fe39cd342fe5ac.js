webpackJsonp([23],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_my_buyad_list_vue__ = __webpack_require__(388);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cb882a9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_buyad_list_vue__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(548)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3cb882a9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_my_buyad_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cb882a9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_buyad_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3cb882a9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_my_buyad_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/dashboard/messages-components/my-buyad-list.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cb882a9", Component.options)
  } else {
    hotAPI.reload("data-v-3cb882a9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 233:
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

/***/ 234:
/***/ (function(module, exports) {

module.exports = "/images/whatsappbg.png?686b98c9fdffef3f63127759e2057750";

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_chat_modal_vue__ = __webpack_require__(233);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_231e6fe2_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_chat_modal_vue__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(4);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(242)
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

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(243);
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

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(6);
exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n/*main chat modal styles*/\n.loading-container[data-v-231e6fe2],\n.image-wrapper[data-v-231e6fe2] {\n  height: 100%;\n}\n.loading-container[data-v-231e6fe2] {\n  height: calc(100% + 56px);\n  background: #fff;\n  z-index: 1;\n  position: relative;\n}\n.chat-modal-wrapper[data-v-231e6fe2] {\n  position: fixed;\n\n  background: #fafafa;\n\n  z-index: 1012;\n\n  width: 450px;\n  height: 550px;\n\n  bottom: -800px;\n\n  left: 15px;\n\n  border-radius: 12px;\n\n  border: 1px solid #00c569;\n\n  -webkit-transition: 1s;\n\n  transition: 1s;\n\n  -webkit-box-shadow: 0 0 22px rgba(0, 0, 0, 0.15);\n\n          box-shadow: 0 0 22px rgba(0, 0, 0, 0.15);\n\n  overflow: hidden;\n}\n.open-chat[data-v-231e6fe2] {\n  bottom: 15px;\n}\n\n/*header chat modal styles */\n.header-chat-modal[data-v-231e6fe2] {\n  background: -webkit-gradient(linear, left top, right top, from(#00c569), to(#21ad93));\n  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);\n\n  overflow: hidden;\n\n  color: #fff;\n}\n.header-info-wrapper[data-v-231e6fe2] {\n  float: right;\n  padding: 7px 18px 7px 0;\n  background: none;\n  border: none;\n}\n.header-chat-image[data-v-231e6fe2] {\n  width: 35px;\n  height: 35px;\n  position: relative;\n  float: right;\n  border-radius: 90px;\n  overflow: hidden;\n}\n.header-chat-image img[data-v-231e6fe2] {\n  width: 100%;\n  min-height: 100%;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  top: 50%;\n}\n.header-chat-content[data-v-231e6fe2] {\n  float: right;\n  margin-top: 8px;\n  margin-right: 10px;\n  color: #fff;\n  font-weight: bold;\n  max-width: 200px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: right;\n  overflow: hidden;\n  height: 30px;\n  line-height: 1.618;\n  direction: rtl;\n}\n.close-chat-modal[data-v-231e6fe2] {\n  font-size: 18px;\n  border: none;\n  background: none;\n  padding: 15px;\n}\n\n/*main chat modal styles*/\n.main-modal-chat[data-v-231e6fe2] {\n  float: right;\n  width: 100%;\n  height: calc(100% - 110px);\n  background-color: #e5ddd6;\n}\n.main-modal-chat .bg-wrapper[data-v-231e6fe2] {\n  opacity: 0.06;\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 60px;\n}\n.main-modal-chat .bg-wrapper.background-chat[data-v-231e6fe2] {\n  background: url(" + escape(__webpack_require__(234)) + ") repeat;\n  background-size: 90%;\n}\n.main-modal-chat ul[data-v-231e6fe2] {\n  overflow: auto;\n  padding: 20px;\n  max-height: 100%;\n  height: 100%;\n}\n.main-modal-chat li[data-v-231e6fe2] {\n  float: left;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n.main-modal-chat li[data-v-231e6fe2]:last-of-type {\n  margin-bottom: 10px;\n}\n.main-modal-chat li > div[data-v-231e6fe2] {\n  background: #f7f7f7;\n\n  border-radius: 8px;\n\n  padding: 12px 10px 3px;\n\n  float: left;\n\n  direction: rtl;\n\n  font-size: 12px;\n\n  margin: 3px auto;\n\n  text-align: right;\n\n  max-width: calc(100% - 50px);\n\n  line-height: 1.612;\n\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n}\n.main-modal-chat li.sender > div[data-v-231e6fe2] {\n  background: #dcf8c6;\n\n  float: right;\n}\n.message-info[data-v-231e6fe2] {\n  font-size: 10px;\n\n  color: #333;\n\n  overflow: hidden;\n\n  padding-top: 5px;\n\n  display: inline-block;\n\n  line-height: 1.618;\n}\n.message-info span.visited[data-v-231e6fe2] {\n  font-size: 11px;\n\n  color: #00c569;\n\n  margin-left: 5px;\n\n  float: right;\n}\n.message-info span.time[data-v-231e6fe2] {\n  float: left;\n\n  margin-top: 3px;\n\n  direction: ltr;\n}\n\n/*footer chat modal styles*/\n.footer-modal-chat[data-v-231e6fe2] {\n  left: 0;\n  overflow: hidden;\n  padding: 8px 15px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: #f0f0f0;\n}\n.send-message-button[data-v-231e6fe2] {\n  float: right;\n\n  width: 40px;\n\n  height: 40px;\n\n  color: #fff;\n\n  background: -webkit-gradient(linear, left top, right top, from(#00c569), to(#21ad93));\n\n  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);\n\n  border: none;\n\n  border-radius: 35px;\n\n  padding: 0 10px;\n}\n.send-message-button i[data-v-231e6fe2] {\n  display: block;\n}\n.send-message-button svg[data-v-231e6fe2] {\n  height: 21px;\n  position: relative;\n  right: -3px;\n  top: 3px;\n}\n.footer-modal-chat input[data-v-231e6fe2] {\n  float: left;\n\n  width: calc(100% - 60px);\n\n  border-radius: 50px;\n\n  background: #fff;\n\n  border: none;\n\n  padding: 7px 15px 8px 15px;\n\n  direction: rtl;\n\n  text-align: right;\n}\n@media screen and (max-width: 991px) {\n.chat-modal-wrapper[data-v-231e6fe2] {\n    left: calc(50% - 230px);\n\n    width: 460px;\n}\n}\n@media screen and (max-width: 767px) {\n.close-chat-modal span[data-v-231e6fe2] {\n    background: #fff;\n\n    color: #00c569;\n\n    padding: 5px 14px;\n\n    border-radius: 5px;\n\n    font-size: 12px;\n}\n.chat-modal-wrapper[data-v-231e6fe2] {\n    height: 100%;\n\n    width: 100%;\n\n    left: -2000px;\n\n    bottom: 0;\n\n    border-radius: 0;\n\n    -webkit-transition: 800ms;\n\n    transition: 800ms;\n\n    border: none;\n}\n.open-chat[data-v-231e6fe2] {\n    left: 0;\n    bottom: 0;\n}\n}\n@media screen and (max-width: 370px) {\n.header-chat-content[data-v-231e6fe2] {\n    max-width: 120px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 244:
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

/***/ 341:
/***/ (function(module, exports) {

module.exports = "/images/hand-phone-icon-6.jpg?03a7ff45c76baed977b285293188a513";

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sweetalert_min_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sweetalert_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__sweetalert_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_main_main_components_chat_modal__ = __webpack_require__(241);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      buyAds: "",
      buyAdsGolden: "",
      buyAdsGoldenFilter: "",
      buyAdsFilter: "",
      isLoading: false,
      isConditionSatisfied: false,
      filterBuyAd: "",
      isSearchingBuyAds: false
    };
  },
  methods: _defineProperty({
    init: function init() {
      this.getBuyAds();
      this.isOsAndroid();
    },
    getBuyAds: function getBuyAds() {
      var _this2 = this;

      this.isLoading = true;
      axios.post("/get_my_buyAd_suggestions").then(function (response) {
        _this2.buyAds = response.data.buyAds;
        _this2.buyAdsGolden = response.data.golden_buyAds;
        _this2.buyAdsGoldenFilter = _this2.buyAdsGolden;
        _this2.filterBuyAdBySearch();
        _this2.isLoading = false;
      });
    },
    activeComponentTooltip: function activeComponentTooltip() {
      $(".verified-user").popover({ trigger: "manual", html: true, animation: false }).on("mouseenter", function () {
        var _this = this;
        $(".popover").on("mouseleave", function () {
          $(this).popover("show");
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
    },

    openChat: function openChat(buyAd) {
      var self = this;
      var id = "#loader-0";
      id = "#loader-chat-" + buyAd.id;
      self.hideReplyBtn(id);
      axios.post("/get_user_permission_for_buyAd_reply", {
        buy_ad_id: buyAd.id
      }).then(function (response) {
        self.showReplyBtn(id);

        if (response.data.permission == true) {
          var contact = {
            contact_id: buyAd.buyer_id,
            first_name: buyAd.first_name,
            last_name: buyAd.last_name,
            profile_photo: null,
            user_name: buyAd.user_name,
            buyAd_id: buyAd.id
          };

          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("ChatInfo", contact);

          self.registerComponentStatistics("suggestedBuyAdReply", "openChat", "click on open chatBox");
        } else {
          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("modal", "buyAdReplyLimit");
          self.registerComponentStatistics("suggestedBuyAdReply", "openChat", "permission denied");
        }
      });
    },
    activePhoneCall: function activePhoneCall(buyAdUserId, buyAdId) {
      var _this3 = this;

      var id = "#loader-phone-" + buyAdId;

      $(id).prop("disabled", true);
      $(id).addClass("disable");

      this.hideReplyBtn(id);

      axios.post("/get_buyer_phone_number", {
        b_id: buyAdUserId,
        ba_id: buyAdId,
        item: "BUYAD"
      }).then(function (response) {
        _this3.$nextTick(function () {
          $("#" + buyAdId + "-phone-number-wrapper .phone").text(response.data.phone);
          $("#" + buyAdId + "-phone-number-wrapper a.phone-number").attr("href", "tel:" + response.data.phone);
          $("#" + buyAdId + "-phone-number-wrapper").collapse("show");
          _this3.showReplyBtn(id);
        });
      }).catch(function (error) {
        _this3.showReplyBtn(id);
        $(id).prop("disabled", false);
        $(id).removeClass("disable");
        if (error.response.status == 423) {
          __WEBPACK_IMPORTED_MODULE_1__sweetalert_min_js___default()({
            title: "ارتقا عضویت",
            text: error.response.data.msg,
            icon: "warning",
            className: "custom-swal-with-cancel",
            buttons: {
              success: {
                text: "ارتقا عضویت",
                value: "promote"
              },
              close: {
                text: "بستن",
                className: "bg-cancel"
              }
            }
          }).then(function (value) {
            switch (value) {
              case "promote":
                _this3.$router.push({ name: "dashboardPricingTableSeller" });
                break;
            }
          });
        } else {
          __WEBPACK_IMPORTED_MODULE_1__sweetalert_min_js___default()({
            text: error.response.data.msg,
            icon: "warning",
            className: "custom-swal-with-cancel",
            buttons: {
              close: {
                text: "بستن",
                className: "bg-cancel"
              }
            }
          });
        }
      });
    },
    openGoldenChatRestrictionModal: function openGoldenChatRestrictionModal() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("modal", "goldenBuyAdReplyLimit");

      this.registerComponentStatistics("suggestedBuyAdReply", "openChat", "permission denied");
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },

    hideReplyBtn: function hideReplyBtn(id) {
      var itemFirst = id + " span:first-child";
      var itemLast = id + " span:last-child";
      $(itemFirst).hide();
      $(itemLast).show();
    },
    showReplyBtn: function showReplyBtn(id) {
      var itemFirst = id + " span:first-child";
      var itemLast = id + " span:last-child";
      $(itemLast).hide();
      $(itemFirst).show();
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
          // this.isConditionSatisfied = true;
        }
      }
    },
    getNumberWithCommas: function getNumberWithCommas(number) {
      if (number || typeof number === "number") return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");else return "";
    },
    filterBuyAdBySearch: function filterBuyAdBySearch() {
      var _this4 = this;

      this.buyAdsFilter = this.buyAds.filter(function (buyAd) {
        var text = _this4.filterBuyAd.split(" ");
        return text.every(function (el) {
          if (buyAd.first_name.indexOf(el) > -1 || buyAd.last_name.indexOf(el) > -1 || buyAd.name.indexOf(el) > -1 || buyAd.subcategory_name.indexOf(el) > -1) {
            return true;
          } else return false;
        });
      });
      this.buyAdsGoldenFilter = this.buyAdsGolden.filter(function (buyAd) {
        var text = _this4.filterBuyAd.split(" ");
        return text.every(function (el) {
          if (buyAd.first_name.indexOf(el) > -1 || buyAd.last_name.indexOf(el) > -1 || buyAd.name.indexOf(el) > -1 || buyAd.subcategory_name.indexOf(el) > -1) {
            return true;
          } else return false;
        });
      });
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
  }, "registerComponentStatistics", function registerComponentStatistics(categoryName, actionName, labelName) {
    gtag("event", actionName, {
      event_category: categoryName,
      event_label: labelName
    });
  }),
  watch: {
    "$parent.contactList": function $parentContactList() {
      var _this5 = this;

      if (this.$parent.contactList) {
        setTimeout(function () {
          _this5.activeComponentTooltip();
        }, 10);
      }
    },
    filterBuyAd: function filterBuyAd() {
      if (this.filterBuyAd != "") {
        this.isSearchingBuyAds = true;
        this.filterBuyAdBySearch();
      } else {
        this.buyAdsFilter = this.buyAds;
        this.buyAdsGoldenFilter = this.buyAdsGolden;
        this.isSearchingBuyAds = false;
      }
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(549);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(3).default
var update = add("2bcedeef", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3cb882a9\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-buyad-list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-3cb882a9\",\"scoped\":true,\"sourceMap\":false}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-buyad-list.vue");
     if(newContent.__esModule) newContent = newContent.default;
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

exports = module.exports = __webpack_require__(0)(false);
// imports


// module
exports.push([module.i, "\n.contact-body .contact-search[data-v-3cb882a9] {\n  background: #f0f0f0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n.user-information-content[data-v-3cb882a9] {\n  display: block;\n  float: right;\n  width: 100%;\n  background: none;\n  border: none;\n  padding: 10px 0 3px;\n}\n.user-image[data-v-3cb882a9] {\n  width: 25px;\n  height: 25px;\n  float: right;\n  margin-left: 10px;\n}\n.user-content[data-v-3cb882a9] {\n  display: block;\n  max-width: 170px;\n  overflow: hidden;\n  font-size: 13px;\n  font-weight: 400;\n  color: #adadad;\n  height: 21px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: right;\n}\n.user-content i[data-v-3cb882a9] {\n  margin-left: 1px;\n  position: relative;\n  top: 3px;\n  font-size: 15px;\n}\n.contact-items[data-v-3cb882a9] {\n  padding-top: 102px;\n}\n.buyAds-list-wrapper[data-v-3cb882a9] {\n  padding: 15px 5px;\n  overflow: hidden;\n}\nli.contact-item[data-v-3cb882a9] {\n  border: 1px solid #dddddd;\n  float: right;\n  width: 100%;\n  padding: 10px 0;\n  min-height: 230px;\n  border-radius: 12px;\n  margin-bottom: 15px;\n}\nli.contact-item[data-v-3cb882a9]:nth-last-of-type(2n + 1) {\n  background: #fdfdfd !important;\n}\n.contact-items.is-buyer-list[data-v-3cb882a9] {\n  padding-top: 60px;\n}\n.contact-body .contact-search .contact-search-input-wrapper[data-v-3cb882a9] {\n  position: relative;\n  padding: 10px 7px;\n}\n.contact-body .contact-search .contact-search-input-wrapper > i[data-v-3cb882a9] {\n  position: absolute;\n  right: 20px;\n  font-size: 16px;\n  color: #919191;\n  top: 21px;\n}\n.contact-body .contact-search .contact-search-input-wrapper input[data-v-3cb882a9] {\n  padding: 8px 40px 8px 15px;\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n}\n.contact-body .contact-search .contact-search-input-wrapper > button[data-v-3cb882a9] {\n  position: absolute;\n  left: 7px;\n  font-size: 16px;\n  color: #919191;\n  top: 12px;\n  background: none;\n  border: none;\n  padding: 7px 15px 1px;\n}\n.contact-body .contact-image[data-v-3cb882a9] {\n  width: 45px;\n  height: 45px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  border: 1px solid #f2f2f2;\n  position: relative;\n}\n.contact-body .contact-image img[data-v-3cb882a9] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: initial;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.contact-body .contact-item a.download-app[data-v-3cb882a9] {\n  font-size: 13px;\n  color: #595959;\n  overflow: hidden;\n  padding: 10px 7px;\n  border-bottom: 1px solid #b6b6b6;\n  display: block;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.contact-body .contact-item a.download-app[data-v-3cb882a9]:hover,\n.contact-body .contact-item a.download-app.active[data-v-3cb882a9] {\n  background: #f6f6f6;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.contact-body .contact-item:last-of-type a[data-v-3cb882a9] {\n  border-bottom: none;\n}\n.contact-body .contact-item span.contact-name[data-v-3cb882a9] {\n  float: right;\n  font-weight: bold;\n}\n.contact-body .contact-item span.contact-last-message[data-v-3cb882a9] {\n  float: right;\n  width: calc(100% - 60px);\n  font-weight: lighter;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  direction: rtl;\n  text-align: right;\n}\n.contact-body .contact-item .contact-date[data-v-3cb882a9] {\n  float: left;\n  padding-top: 5px;\n  width: 50px;\n  direction: ltr;\n  text-align: center;\n}\n.last-message-date[data-v-3cb882a9] {\n  display: inline-block;\n  height: 17px;\n  width: 60px;\n  font-size: 10px;\n  line-height: 2;\n  text-align: center;\n}\n.count-number[data-v-3cb882a9] {\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  background: #00c569;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 10px;\n  line-height: 2;\n}\n.count-number-wrapper[data-v-3cb882a9] {\n  width: 60px;\n  float: left;\n  text-align: center;\n}\n.not-found-item[data-v-3cb882a9] {\n  text-align: center;\n  padding: 100px 15px 0;\n}\n.not-found-item p[data-v-3cb882a9] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #777;\n}\n.not-found-item i[data-v-3cb882a9] {\n  margin: 5px;\n}\n.load-more[data-v-3cb882a9] {\n  margin: 0px 0 0;\n  display: inline-block;\n  background: #00c569;\n  color: #fff;\n  padding: 10px 25px;\n  border-radius: 0px;\n  text-align: center;\n  font-size: 15px;\n  font-weight: bold;\n  border: none;\n  width: 100%;\n}\n.verified-user[data-v-3cb882a9]::before {\n  top: 3px;\n  left: 3px;\n}\n.contacts-switch-buttons-wrapper[data-v-3cb882a9] {\n  float: right;\n  width: 100%;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-3cb882a9] {\n  float: right;\n  width: 50%;\n}\n.contacts-switch-buttons-wrapper .contact-button[data-v-3cb882a9] {\n  border: none;\n  width: 100%;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  color: #666;\n  background: #f0f0f0;\n}\n.contacts-switch-buttons-wrapper .contact-button .fa-plus[data-v-3cb882a9] {\n  position: relative;\n  left: -5px;\n  top: -9px;\n  color: #00c569;\n  font-size: 12px;\n}\n.contacts-switch-buttons-wrapper .contact-button.active[data-v-3cb882a9],\n.contacts-switch-buttons-wrapper .contact-button[data-v-3cb882a9]:hover {\n  background-color: #fff;\n  border-bottom: 2px solid #00c569;\n  margin-bottom: -2px;\n  z-index: 1;\n}\ni.fa-star[data-v-3cb882a9] {\n  font-size: 16px;\n  background: linear-gradient(\n    21deg,\n    rgb(199, 168, 79) 0%,\n    rgb(249, 242, 159) 51%,\n    rgb(199, 168, 79) 100%\n  );\n  background-clip: border-box;\n  background-clip: border-box;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  position: relative;\n  top: 2px;\n}\n.total-unread-messages-badge[data-v-3cb882a9] {\n  position: absolute;\n  top: -6px;\n  background: #e41c38;\n  height: 16px;\n  width: 30px;\n  color: #fff;\n  border-radius: 4px;\n  left: 5px;\n  font-size: 11px;\n  line-height: 1;\n  padding-top: 2px;\n}\n.contact-button.active[data-v-3cb882a9] {\n  border-radius: 4px 4px 0 0;\n}\n.buyad-lists-wrapper .contact-item > div[data-v-3cb882a9] {\n  text-align: center;\n}\n.buyad-expire[data-v-3cb882a9] {\n  color: #556080;\n  min-height: 40px;\n}\n.buyad-notice[data-v-3cb882a9] {\n  color: #aeaeae;\n}\n.buyAd-buttons-wrapper[data-v-3cb882a9] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 10px;\n}\n.buyAd-buttons-wrapper button.phone-button[data-v-3cb882a9] {\n  margin-left: 15px;\n}\n.buyad-info[data-v-3cb882a9] {\n  font-size: 15px;\n  padding: 5px;\n  font-weight: bold;\n  color: #777;\n  min-height: 68px;\n  padding-top: 15px;\n  line-height: 1.618;\n}\n.buyad-notice.red-text[data-v-3cb882a9] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.buyad-info span[data-v-3cb882a9] {\n  color: #556080;\n}\n.buyad-info span.gray-text[data-v-3cb882a9] {\n  color: #777;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-3cb882a9] {\n  float: right;\n  padding-top: 7px;\n  direction: ltr;\n  text-align: left;\n  width: calc(100% - 45px);\n  padding-right: 8px;\n}\n.buyad-button[data-v-3cb882a9] {\n  background: #00c569;\n  color: #fff;\n  border-radius: 8px;\n  padding: 8px 0;\n  max-width: 200px;\n  margin: 15px auto;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  display: block;\n  border: none;\n  width: 100%;\n  font-size: 15px;\n  font-weight: bold;\n}\nbutton.disable[data-v-3cb882a9] {\n  background: #e0e0e0 !important;\n}\n.buyad-button[data-v-3cb882a9] :hover {\n  /* background: #00c569; */\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.buyad-button.disable[data-v-3cb882a9] {\n  background: #dddddd;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\nli.golden[data-v-3cb882a9] {\n  border: 2px solid rgb(199, 168, 79);\n  position: relative;\n  padding-right: 20px;\n}\n.golden .buyad-notice[data-v-3cb882a9] {\n  display: inline-block;\n  margin-bottom: 15px;\n}\n.golden[data-v-3cb882a9]::after {\n  background: linear-gradient(\n    44deg,\n    rgb(199, 168, 79) 0%,\n    rgb(249, 242, 159) 51%,\n    rgb(199, 168, 79) 100%\n  );\n  width: 20px;\n  height: 100%;\n  content: \"\";\n  position: absolute;\n  right: 0;\n  top: 0;\n  border-radius: 0 10px 10px 0;\n}\nli.golden[data-v-3cb882a9]:first-of-type {\n  border-top: 2px solid rgb(199, 168, 79);\n}\n\n/* li.golden .buyad-info {\n  margin-top: 15px;\n} */\nli.golden .buyad-button[data-v-3cb882a9],\nli.golden .buyad-button[data-v-3cb882a9]:hover {\n  color: #333;\n  background: linear-gradient(\n    21deg,\n    rgb(199, 168, 79) 0%,\n    rgb(249, 242, 159) 51%,\n    rgb(199, 168, 79) 100%\n  );\n}\nli .buyAd-buttons-wrapper .buyad-button.send-message-button[data-v-3cb882a9] {\n  background: none;\n  border: 1px solid #404b55;\n  color: #404b55;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\nli .buyAd-buttons-wrapper .buyad-button.send-message-button[data-v-3cb882a9]:hover {\n  background: #404b55;\n  color: #fff;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.hide-reply[data-v-3cb882a9] {\n  display: none;\n}\n.empty-list i[data-v-3cb882a9] {\n  color: #777;\n  margin-top: 50px;\n  font-size: 50px;\n  text-align: center;\n}\n.empty-list p[data-v-3cb882a9]:first-of-type {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.618;\n  margin-top: 11px;\n}\n.empty-list p[data-v-3cb882a9]:last-of-type {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.618;\n  margin-top: 11px;\n}\n.android-wrapper[data-v-3cb882a9] {\n  padding: 150px 15px 15px;\n  text-align: center;\n}\n.android-wrapper p[data-v-3cb882a9] {\n  font-size: 15px;\n  font-weight: bold;\n  color: #333;\n  line-height: 1.618;\n}\n.android-wrapper p.section-contents[data-v-3cb882a9] {\n  color: #e51c38;\n}\n.android-wrapper .section-image[data-v-3cb882a9] {\n  max-width: 190px;\n  margin: 15px auto;\n  padding-left: 25px;\n}\n.android-wrapper a[data-v-3cb882a9] {\n  padding: 12px 50px;\n  font-size: 16px;\n}\n.main-background-buyad[data-v-3cb882a9] {\n  -webkit-filter: blur(6px);\n          filter: blur(6px);\n  position: absolute;\n  top: 18px;\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10+ and Edge */\n  -moz-user-select: none;\n       user-select: none; /* Standard syntax */\n  z-index: 0;\n  width: 100%;\n  left: 0;\n  text-align: center;\n}\n.golden-info-text[data-v-3cb882a9] {\n  position: relative;\n  z-index: 1;\n}\n.golden-info-text .buyad-info[data-v-3cb882a9] {\n  font-size: 18px;\n}\nli.static-item[data-v-3cb882a9] {\n  margin-bottom: 50px;\n  margin-top: 20px;\n}\nli.static-item > i[data-v-3cb882a9] {\n  font-size: 55px;\n  display: block;\n  text-align: center;\n  color: #777;\n  margin-top: 15px;\n}\nli.static-item > button[data-v-3cb882a9] {\n  font-size: 14px;\n  background: #21ad93;\n}\nli.static-item > button i[data-v-3cb882a9] {\n  position: relative;\n  top: 2px;\n  right: 3px;\n}\n.phone-number-wrapper[data-v-3cb882a9] {\n  padding: 15px 10px;\n  margin: 5px 0;\n}\n@media screen and (max-width: 991px) {\n.main-content[data-v-3cb882a9] {\n    padding: 59px 0 0;\n}\n.main-content.is-fix-alert[data-v-3cb882a9] {\n    padding: 89px 0 0;\n}\n}\n@media screen and (max-width: 767px) {\n.send-message-form .button-wrapper button[data-v-3cb882a9] {\n    padding: 12px 13px;\n    font-size: inherit;\n}\n.send-message-form .message-input input[data-v-3cb882a9] {\n    padding: 13px 15px;\n}\n.main-content[data-v-3cb882a9] {\n    padding: 59px 0 0;\n}\n.main-content.is-fix-alert[data-v-3cb882a9] {\n    padding: 85px 0 0;\n}\n.hidden_element[data-v-3cb882a9] {\n    display: none;\n}\n.message-wrapper .message-contact-title span[data-v-3cb882a9] {\n    padding-top: 6px;\n\n    width: 170px;\n\n    overflow: hidden;\n\n    height: 40px;\n\n    line-height: 1.618;\n\n    text-overflow: ellipsis;\n\n    white-space: nowrap;\n}\n.reply-info p[data-v-3cb882a9] {\n    width: 100%;\n}\n}\n@media screen and (max-width: 370px) {\n.message-wrapper .message-contact-title span[data-v-3cb882a9] {\n    width: 130px;\n}\n}\n@media screen and (max-width: 330px) {\n.message-wrapper .message-contact-title-img[data-v-3cb882a9] {\n    margin: 0 15px;\n}\n.message-wrapper .message-contact-title span[data-v-3cb882a9] {\n    font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 550:
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
    { staticClass: "contact-body my-contacts" },
    [
      _c("ChatModal"),
      _vm._v(" "),
      _c("div", { staticClass: "contact-search" }, [
        _c("div", { staticClass: "contact-search-input-wrapper" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filterBuyAd,
                expression: "filterBuyAd"
              }
            ],
            attrs: { type: "text", placeholder: " جستجو پیشنهاد" },
            domProps: { value: _vm.filterBuyAd },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.filterBuyAd = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-search" }),
          _vm._v(" "),
          _vm.filterBuyAd
            ? _c(
                "button",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.filterBuyAd = ""
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
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "switch-button-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "contact-button",
                      attrs: { to: { name: "messagesSeller" }, tag: "button" }
                    },
                    [
                      _c("i", { staticClass: "fa fa-user" }),
                      _vm._v("\n          مخاطبین من\n        ")
                    ]
                  )
                ],
                1
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.isConditionSatisfied
        ? _c("div", { staticClass: "android-wrapper" }, [
            _c("p", { staticClass: "section-title" }, [
              _vm._v("لیست خریداران محصول خود را اینجا ببینید")
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("p", { staticClass: "section-contents" }, [
              _vm._v(
                "\n      برای دسترسی به این قسمت لطفا اپلیکیشن موبایل باسکول را نصب کنید.\n    "
              )
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "green-button download-app",
                attrs: { href: "" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.doDownload()
                  }
                }
              },
              [_vm._v("\n      دانلود اپلیکیشن")]
            )
          ])
        : _vm.buyAds.length === 0 &&
          _vm.buyAdsGoldenFilter.length == 0 &&
          _vm.isLoading
        ? _c("div", { staticClass: "image-wrapper" }, [_vm._m(2)])
        : _vm.buyAds.length === 0 &&
          _vm.buyAdsGoldenFilter.length == 0 &&
          !_vm.isLoading
        ? _c("div", { staticClass: "not-found-item" }, [
            _c(
              "div",
              { staticClass: "empty-list" },
              [
                _c("i", { staticClass: "fa fa-list-ul" }),
                _vm._v(" "),
                _c("p", [_vm._v("در حال حاضر پیشنهادی برای شما وجود ندارد")]),
                _vm._v(" "),
                _c("p", { staticClass: "red-text" }, [
                  _vm._v(
                    "\n        در صورتی که محصولی ثبت نکرده اید، ابتدا محصول خود را ثبت کنید.\n      "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "buyad-button",
                    attrs: {
                      to: { name: "registerProductSeller" },
                      tag: "button"
                    }
                  },
                  [_vm._v("\n        ثبت محصول\n      ")]
                )
              ],
              1
            )
          ])
        : _vm.isSearchingBuyAds == true &&
          _vm.buyAdsFilter.length === 0 &&
          _vm.buyAdsGoldenFilter.length == 0
        ? _c("div", { staticClass: "contact-items buyad-lists-wrapper" }, [
            _vm._m(3)
          ])
        : _c(
            "div",
            { staticClass: "contact-items col-xs-12 buyad-lists-wrapper" },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "ul",
                  { staticClass: "buyAds-list-wrapper" },
                  [
                    _vm._l(_vm.buyAdsGoldenFilter, function(buyAd, index) {
                      return _c(
                        "li",
                        {
                          key: "golden-" + index,
                          staticClass: "contact-item golden"
                        },
                        [
                          _vm.$parent.currentUser.user_info.active_pakage_type >
                          0
                            ? _c("div", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "user-information-wrapper col-xs-12"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "user-information-content"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "user-content" },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-user-circle"
                                            }),
                                            _vm._v(" "),
                                            _c("span", {
                                              staticClass: "user-name-link",
                                              domProps: {
                                                textContent: _vm._s(
                                                  buyAd.first_name +
                                                    " " +
                                                    buyAd.last_name
                                                )
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "buyad-main col-xs-12" },
                                  [
                                    _c("div", { staticClass: "row" }, [
                                      _c("p", { staticClass: "buyad-info" }, [
                                        _vm._v(
                                          "\n                  خریدار\n                  "
                                        ),
                                        buyAd.requirement_amount < 1000
                                          ? _c("span", {
                                              staticClass: "red-text",
                                              domProps: {
                                                textContent: _vm._s(
                                                  buyAd.requirement_amount +
                                                    "کیلوگرم"
                                                )
                                              }
                                            })
                                          : buyAd.requirement_amount == 1000
                                          ? _c(
                                              "span",
                                              { staticClass: "red-text" },
                                              [_vm._v("یک تن")]
                                            )
                                          : _c("span", {
                                              staticClass: "red-text",
                                              domProps: {
                                                textContent: _vm._s(
                                                  _vm.getNumberWithCommas(
                                                    buyAd.requirement_amount /
                                                      1000
                                                  ) + " تن "
                                                )
                                              }
                                            }),
                                        _vm._v(" "),
                                        _c("span", {
                                          domProps: {
                                            textContent: _vm._s(
                                              buyAd.subcategory_name
                                            )
                                          }
                                        }),
                                        _vm._v(" "),
                                        buyAd.name
                                          ? _c(
                                              "span",
                                              { staticClass: "gray-text" },
                                              [_vm._v(" از نوع ")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        buyAd.name
                                          ? _c("span", {
                                              domProps: {
                                                textContent: _vm._s(buyAd.name)
                                              }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "gray-text" },
                                          [_vm._v(" هستم ")]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "buyad-notice" }, [
                                        _vm._v(
                                          "\n                  درصورت داشتن این محصول به من پیام دهید.\n                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      buyAd.has_phone
                                        ? _c("div", [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "buyAd-buttons-wrapper"
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "buyad-button golden-button phone-button",
                                                    attrs: {
                                                      id:
                                                        "loader-phone-" +
                                                        buyAd.id
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.activePhoneCall(
                                                          buyAd.buyer_id,
                                                          buyAd.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._m(4, true),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "hide-reply text-rtl"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        کمی صبر کنید...\n                      "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "buyad-button golden-button send-message-button",
                                                    attrs: {
                                                      id:
                                                        "loader-chat-" +
                                                        buyAd.id
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.openChat(buyAd)
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._m(5, true),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "hide-reply text-rtl"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        کمی صبر کنید...\n                      "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "phone-number-wrapper collapse",
                                                attrs: {
                                                  id:
                                                    buyAd.id +
                                                    "-phone-number-wrapper"
                                                }
                                              },
                                              [
                                                _vm._m(6, true),
                                                _vm._v(" "),
                                                _vm._m(7, true)
                                              ]
                                            )
                                          ])
                                        : _c(
                                            "button",
                                            {
                                              staticClass:
                                                "buyad-button golden-button",
                                              attrs: {
                                                id: "loader-chat-" + buyAd.id
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.openChat(buyAd)
                                                }
                                              }
                                            },
                                            [
                                              _vm._m(8, true),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "hide-reply text-rtl"
                                                },
                                                [_vm._v(" کمی صبر کنید... ")]
                                              )
                                            ]
                                          )
                                    ])
                                  ]
                                )
                              ])
                            : _c("div", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "user-information-wrapper col-xs-12"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "user-information-content"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "user-content" },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-user-circle"
                                            }),
                                            _vm._v(" "),
                                            _c("span", {
                                              staticClass: "user-name-link",
                                              domProps: {
                                                textContent: _vm._s(
                                                  buyAd.first_name +
                                                    " " +
                                                    buyAd.last_name
                                                )
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "buyad-main col-xs-12" },
                                  [
                                    _vm._m(9, true),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "row golden-info-text" },
                                      [
                                        _c("p", { staticClass: "buyad-info" }, [
                                          _vm._v(
                                            "\n                  خریدار\n\n                  "
                                          ),
                                          _c("span", {
                                            domProps: {
                                              textContent: _vm._s(
                                                buyAd.subcategory_name
                                              )
                                            }
                                          }),
                                          _vm._v(" "),
                                          buyAd.name
                                            ? _c(
                                                "span",
                                                { staticClass: "gray-text" },
                                                [_vm._v(" از نوع ")]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          buyAd.name
                                            ? _c("span", {
                                                domProps: {
                                                  textContent: _vm._s(
                                                    buyAd.name
                                                  )
                                                }
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "gray-text" },
                                            [_vm._v(" هستم ")]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        buyAd.has_phone
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "buyAd-buttons-wrapper"
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "buyad-button golden-button phone-button",
                                                    attrs: {
                                                      id:
                                                        "loader-phone-" +
                                                        buyAd.id
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.openGoldenChatRestrictionModal()
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._m(10, true),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "hide-reply text-rtl"
                                                      },
                                                      [
                                                        _vm._v(
                                                          " کمی صبر کنید... "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "buyad-button send-message-button",
                                                    on: {
                                                      click: function($event) {
                                                        _vm.openGoldenChatRestrictionModal()
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-comment-alt"
                                                    }),
                                                    _vm._v(
                                                      "\n                    چت با خریدار\n                  "
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _c(
                                              "button",
                                              {
                                                staticClass: "buyad-button",
                                                on: {
                                                  click: function($event) {
                                                    _vm.openGoldenChatRestrictionModal()
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-comment-alt"
                                                }),
                                                _vm._v(
                                                  "\n                  چت با خریدار\n                "
                                                )
                                              ]
                                            )
                                      ]
                                    )
                                  ]
                                )
                              ])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.buyAdsFilter, function(buyAd, index) {
                      return _c(
                        "li",
                        { key: index, staticClass: "contact-item" },
                        [
                          !buyAd.expired
                            ? _c("div", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "user-information-wrapper col-xs-12"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "user-information-content"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "user-content" },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-user-circle"
                                            }),
                                            _vm._v(" "),
                                            _c("span", {
                                              staticClass: "user-name-link",
                                              domProps: {
                                                textContent: _vm._s(
                                                  buyAd.first_name +
                                                    " " +
                                                    buyAd.last_name
                                                )
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "buyad-main col-xs-12" },
                                  [
                                    _c("div", { staticClass: "row" }, [
                                      _c("p", { staticClass: "buyad-info" }, [
                                        _vm._v(
                                          "\n                  خریدار\n                  "
                                        ),
                                        buyAd.requirement_amount < 1000
                                          ? _c("span", {
                                              staticClass: "red-text",
                                              domProps: {
                                                textContent: _vm._s(
                                                  buyAd.requirement_amount +
                                                    " کیلوگرم "
                                                )
                                              }
                                            })
                                          : buyAd.requirement_amount == 1000
                                          ? _c(
                                              "span",
                                              { staticClass: "red-text" },
                                              [_vm._v("یک تن")]
                                            )
                                          : _c("span", {
                                              staticClass: "red-text",
                                              domProps: {
                                                textContent: _vm._s(
                                                  _vm.getNumberWithCommas(
                                                    buyAd.requirement_amount /
                                                      1000
                                                  ) + " تن "
                                                )
                                              }
                                            }),
                                        _vm._v(" "),
                                        _c("span", {
                                          domProps: {
                                            textContent: _vm._s(
                                              buyAd.subcategory_name
                                            )
                                          }
                                        }),
                                        _vm._v(" "),
                                        buyAd.name
                                          ? _c(
                                              "span",
                                              { staticClass: "gray-text" },
                                              [_vm._v(" از نوع ")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        buyAd.name
                                          ? _c("span", {
                                              domProps: {
                                                textContent: _vm._s(buyAd.name)
                                              }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "gray-text" },
                                          [_vm._v(" هستم ")]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "buyad-expire" }, [
                                        _c(
                                          "span",
                                          { staticClass: "red-text" },
                                          [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-hourglass-half"
                                            }),
                                            _vm._v(" "),
                                            _c("span", {
                                              domProps: {
                                                textContent: _vm._s(
                                                  buyAd.remaining_time +
                                                    " ساعت "
                                                )
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(
                                          "\n                  دیگر فرصت پاسخ گویی شما به این خریدار\n                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("p", { staticClass: "buyad-notice" }, [
                                        _vm._v(
                                          "\n                  درصورت داشتن این محصول به من پیام دهید.\n                "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      buyAd.has_phone
                                        ? _c("div", [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "buyAd-buttons-wrapper"
                                              },
                                              [
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "buyad-button phone-button",
                                                    attrs: {
                                                      id:
                                                        "loader-phone-" +
                                                        buyAd.id
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.activePhoneCall(
                                                          buyAd.buyer_id,
                                                          buyAd.id
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._m(11, true),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "hide-reply text-rtl"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        کمی صبر کنید...\n                      "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "button",
                                                  {
                                                    staticClass:
                                                      "buyad-button send-message-button",
                                                    attrs: {
                                                      id:
                                                        "loader-chat-" +
                                                        buyAd.id
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.openChat(buyAd)
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._m(12, true),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "hide-reply text-rtl"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                        کمی صبر کنید...\n                      "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "phone-number-wrapper collapse",
                                                attrs: {
                                                  id:
                                                    buyAd.id +
                                                    "-phone-number-wrapper"
                                                }
                                              },
                                              [
                                                _vm._m(13, true),
                                                _vm._v(" "),
                                                _vm._m(14, true)
                                              ]
                                            )
                                          ])
                                        : _c(
                                            "button",
                                            {
                                              staticClass: "buyad-button",
                                              attrs: {
                                                id: "loader-chat-" + buyAd.id
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.openChat(buyAd)
                                                }
                                              }
                                            },
                                            [
                                              _vm._m(15, true),
                                              _vm._v(" "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "hide-reply text-rtl"
                                                },
                                                [_vm._v(" کمی صبر کنید... ")]
                                              )
                                            ]
                                          )
                                    ])
                                  ]
                                )
                              ])
                            : _c("div", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "user-information-wrapper col-xs-12"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "user-information-content"
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "user-content" },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-user-circle"
                                            }),
                                            _vm._v(" "),
                                            _c("span", {
                                              staticClass: "user-name-link",
                                              domProps: {
                                                textContent: _vm._s(
                                                  buyAd.first_name +
                                                    " " +
                                                    buyAd.last_name
                                                )
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "buyad-main col-xs-12" },
                                  [
                                    _c("div", { staticClass: "row" }, [
                                      _c("p", { staticClass: "buyad-info" }, [
                                        _vm._v(
                                          "\n                  خریدار\n                  "
                                        ),
                                        buyAd.requirement_amount < 1000
                                          ? _c("span", {
                                              staticClass: "red-text",
                                              domProps: {
                                                textContent: _vm._s(
                                                  buyAd.requirement_amount +
                                                    " کیلوگرم "
                                                )
                                              }
                                            })
                                          : buyAd.requirement_amount == 1000
                                          ? _c(
                                              "span",
                                              { staticClass: "red-text" },
                                              [_vm._v("یک تن")]
                                            )
                                          : _c("span", {
                                              staticClass: "red-text",
                                              domProps: {
                                                textContent: _vm._s(
                                                  _vm.getNumberWithCommas(
                                                    buyAd.requirement_amount /
                                                      1000
                                                  ) + " تن "
                                                )
                                              }
                                            }),
                                        _vm._v(" "),
                                        _c("span", {
                                          domProps: {
                                            textContent: _vm._s(
                                              buyAd.subcategory_name
                                            )
                                          }
                                        }),
                                        _vm._v(" "),
                                        buyAd.name
                                          ? _c(
                                              "span",
                                              { staticClass: "gray-text" },
                                              [_vm._v(" از نوع ")]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        buyAd.name
                                          ? _c("span", {
                                              domProps: {
                                                textContent: _vm._s(buyAd.name)
                                              }
                                            })
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "gray-text" },
                                          [_vm._v(" هستم ")]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass: "buyad-notice red-text"
                                        },
                                        [
                                          _vm._v(
                                            "\n                  فرصت پاسخ گویی شما به این خریدار به پایان رسیده است\n                "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._m(16, true)
                                    ])
                                  ]
                                )
                              ])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "col-xs-12 static-item" },
                      [
                        _c("i", { staticClass: "fa fa-list-alt" }),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "buyad-button",
                            attrs: {
                              tag: "button",
                              to: { name: "buyAdRequestsSeller" }
                            }
                          },
                          [
                            _vm._v(
                              "\n            همه درخواست های خرید\n            "
                            ),
                            _c("i", { staticClass: "fa fa-arrow-left" })
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  2
                )
              ])
            ]
          )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "switch-button-item" }, [
      _c("button", { staticClass: "contact-button active" }, [
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v("\n          خریداران پیشنهادی\n        ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "section-image" }, [
      _c("img", {
        attrs: { src: __webpack_require__(341) }
      })
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
    return _c("div", [
      _c("div", { staticClass: "empty-list text-center" }, [
        _c("i", { staticClass: "fa fa-search" }),
        _vm._v(" "),
        _c("p", [_vm._v("جستجو نتیجه ای نداشت.")]),
        _vm._v(" "),
        _c("p", { staticClass: "red-text" }, [
          _vm._v(
            "\n          در صورت وجود درخواست خرید، به شما اطلاع داده می شود.\n        "
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { staticClass: "fas fa-phone-square-alt" }),
      _vm._v("\n                        اطلاعات تماس\n                      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { staticClass: "fas fa-comment-alt" }),
      _vm._v("\n                        چت با خریدار\n                      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "phone-number" }, [
      _c("p", [
        _c("i", { staticClass: "fa fa-phone-square-alt" }),
        _vm._v(" "),
        _c("span", { staticClass: "phone" })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("شماره تماس")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "warning-wrapper" }, [
      _c("p", { staticClass: "warning-title" }, [
        _c("i", { staticClass: "fa fa-exclamation-circle" }),
        _vm._v(
          "\n\n                        توصیه باسکول\n                      "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "warning-text" }, [
        _vm._v(
          "\n                        توصیه باسکول همواره به انجام معاملات حضوری است.\n                      "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { staticClass: "fas fa-comment-alt" }),
      _vm._v("\n                    چت با خریدار\n                  ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main-background-buyad" }, [
      _c("p", { staticClass: "buyad-info" }, [
        _vm._v("\n                  این درخواست فقط برای\n                  "),
        _c("span", { staticClass: "red-text" }, [_vm._v(" کاربران ویژه ")]),
        _vm._v("\n                  قابل نمایش است\n                ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "buyad-notice" }, [
        _vm._v(
          "\n                  برای مشاهده لطفا حساب کاربری خود را ارتقا دهد\n                "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { staticClass: "fas fa-phone-square-alt" }),
      _vm._v("\n                      اطلاعات تماس\n                    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { staticClass: "fas fa-phone-square-alt" }),
      _vm._v("\n                        اطلاعات تماس\n                      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { staticClass: "fas fa-comment-alt" }),
      _vm._v("\n                        چت با خریدار\n                      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "phone-number" }, [
      _c("p", [
        _c("i", { staticClass: "fa fa-phone-square-alt" }),
        _vm._v(" "),
        _c("span", { staticClass: "phone" })
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("شماره تماس")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "warning-wrapper" }, [
      _c("p", { staticClass: "warning-title" }, [
        _c("i", { staticClass: "fa fa-exclamation-circle" }),
        _vm._v(
          "\n\n                        توصیه باسکول\n                      "
        )
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "warning-text" }, [
        _vm._v(
          "\n                        توصیه باسکول همواره به انجام معاملات حضوری است.\n                      "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("span", { staticClass: "fas fa-comment-alt" }),
      _vm._v("\n                    چت با خریدار\n                  ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "buyad-button disable" }, [
      _c("i", { staticClass: "fas fa-comment-alt" }),
      _vm._v("\n                  چت با خریدار\n                ")
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3cb882a9", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});