webpackJsonp([1],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(330)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(332)
/* template */
var __vue_template__ = __webpack_require__(344)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3bf2e53e"
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
Component.options.__file = "resources/assets/js/components/dashboard/messages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bf2e53e", Component.options)
  } else {
    hotAPI.reload("data-v-3bf2e53e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(331);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("eb6ec3d2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bf2e53e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messages.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3bf2e53e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./messages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.message-wrapper[data-v-3bf2e53e] {\n  border-right: 2px solid #f2f2f2;\n  position: relative;\n  height: 100%;\n}\n.main-content[data-v-3bf2e53e] {\n  padding: 65px 250px 0 0;\n\n  direction: rtl;\n\n  border-bottom: 2px solid #f2f2f2;\n  height: 100%;\n  position: fixed;\n\n  /*right: 0;*/\n  background: #fff;\n\n  left: 0;\n\n  bottom: 0;\n\n  top: 0;\n}\n.little-main .main-content[data-v-3bf2e53e] {\n  padding: 65px 80px 0 0;\n}\n.lds-ring[data-v-3bf2e53e] {\n  display: inline-block;\n\n  position: absolute;\n\n  width: 64px;\n\n  height: 64px;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n}\n.lds-ring div[data-v-3bf2e53e] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 5px solid #00c569;\n  border-radius: 50%;\n  -webkit-animation: lds-ring-data-v-3bf2e53e 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring-data-v-3bf2e53e 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #00c569 transparent transparent transparent;\n}\n.lds-ring-alt[data-v-3bf2e53e] {\n  display: block;\n  margin-top: 50px;\n  direction: rtl;\n  text-align: center;\n}\n.lds-ring div[data-v-3bf2e53e]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div[data-v-3bf2e53e]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div[data-v-3bf2e53e]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n.loade-more-messages .lds-ring[data-v-3bf2e53e] {\n  width: 50px;\n\n  height: 50px;\n}\n.loade-more-messages .lds-ring > div[data-v-3bf2e53e] {\n  width: 36px;\n\n  height: 36px;\n}\n@-webkit-keyframes lds-ring-data-v-3bf2e53e {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes lds-ring-data-v-3bf2e53e {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n\n/*preloader image style*/\n.contact-title[data-v-3bf2e53e] {\n  font-size: 16px;\n  padding: 18px 8px 23px;\n  border-bottom: 2px solid #f2f2f2;\n}\n.contact-title i[data-v-3bf2e53e] {\n  font-size: 26px;\n  position: relative;\n  top: 5px;\n}\n.contact-title span[data-v-3bf2e53e] {\n  font-size: 16px;\n  padding-right: 4px;\n}\n.contact-wrapper[data-v-3bf2e53e],\n.contact-wrapper > div[data-v-3bf2e53e] {\n  height: 100%;\n}\n.contact-wrapper .contact-body[data-v-3bf2e53e] {\n  height: 100%;\n  overflow-y: scroll;\n  float: right;\n  width: 100%;\n}\n.default-message-wrapper[data-v-3bf2e53e] {\n  position: relative;\n  height: 100%;\n  background: #f6f6f6;\n}\n.default-message-wrapper .default-main-contents[data-v-3bf2e53e] {\n  width: 250px;\n\n  height: 250px;\n\n  background: #fff;\n\n  border-radius: 250px;\n\n  position: absolute;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n\n  text-align: center;\n\n  padding-top: 60px;\n  -webkit-box-shadow: 0 0 10px #ebebeb;\n          box-shadow: 0 0 10px #ebebeb;\n}\n.default-message-wrapper .default-main-contents i[data-v-3bf2e53e] {\n  font-size: 55px;\n}\n.default-message-wrapper .default-main-contents p[data-v-3bf2e53e] {\n  font-size: 16px;\n\n  margin: 20px 0;\n}\n.contact-not-found[data-v-3bf2e53e] {\n  text-align: center;\n  margin: 15px auto;\n}\n.contact-not-found i[data-v-3bf2e53e] {\n  font-size: 26px;\n}\n.contact-not-found p[data-v-3bf2e53e] {\n  margin-bottom: 7px;\n}\n.contacts-switch-buttons-wrapper[data-v-3bf2e53e] {\n  float: right;\n  width: 100%;\n  background: #eef3f3;\n  border-bottom: 3px solid #e3e3e3;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-3bf2e53e] {\n  float: right;\n  width: 50%;\n}\n.contacts-switch-buttons-wrapper .contact-button[data-v-3bf2e53e] {\n  border: none;\n  width: 100%;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 15px 0;\n  position: relative;\n}\n.contacts-switch-buttons-wrapper .contact-button .fa-plus[data-v-3bf2e53e] {\n  position: relative;\n  left: -5px;\n  top: -9px;\n  color: #00c569;\n  font-size: 12px;\n}\n.contacts-switch-buttons-wrapper .contact-button.active[data-v-3bf2e53e],\n.contacts-switch-buttons-wrapper .contact-button[data-v-3bf2e53e]:hover {\n  background-color: #fff;\n  border-bottom: 2px solid #00c569;\n  margin-bottom: -2px;\n  z-index: 1;\n}\n.total-unread-messages-badge[data-v-3bf2e53e] {\n  position: absolute;\n  top: 1px;\n  background: red;\n  height: 23px;\n  width: 33px;\n  color: #fff;\n  border-radius: 10px;\n  left: 5px;\n  font-size: 12px;\n}\n.contact-wrapper .contact-items[data-v-3bf2e53e] {\n  position: relative;\n  overflow-y: scroll;\n  height: calc(100% + 40px);\n}\n.contact-wrapper .contact-items > ul[data-v-3bf2e53e] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n@media screen and (max-width: 992px) {\n.main-content[data-v-3bf2e53e] {\n    padding: 65px 0 0;\n}\n}\n@media screen and (max-width: 767px) {\n.send-message-form .button-wrapper button[data-v-3bf2e53e] {\n    padding: 12px 13px;\n    font-size: inherit;\n}\n.send-message-form .message-input input[data-v-3bf2e53e] {\n    padding: 13px 15px;\n}\n.main-content[data-v-3bf2e53e] {\n    padding: 65px 0 0;\n}\n.hidden_element[data-v-3bf2e53e] {\n    display: none;\n}\n.message-wrapper .message-contact-title span[data-v-3bf2e53e] {\n    padding-top: 6px;\n\n    width: 170px;\n\n    overflow: hidden;\n\n    height: 40px;\n\n    line-height: 1.618;\n\n    text-overflow: ellipsis;\n\n    white-space: nowrap;\n}\n.contacts-switch-buttons-wrapper .switch-button-item[data-v-3bf2e53e] {\n    width: 33.3333%;\n}\n.reply-info p[data-v-3bf2e53e] {\n    width: 100%;\n}\n}\n@media screen and (max-width: 370px) {\n.message-wrapper .message-contact-title span[data-v-3bf2e53e] {\n    width: 130px;\n}\n}\n@media screen and (max-width: 330px) {\n.message-wrapper .message-contact-title-img[data-v-3bf2e53e] {\n    margin: 0 15px;\n}\n.message-wrapper .message-contact-title span[data-v-3bf2e53e] {\n    font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_push_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_push_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_components_main_chat_wrapper__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_components_main_chat_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__messages_components_main_chat_wrapper__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["loading_img"],
  components: {
    myContactList: __WEBPACK_IMPORTED_MODULE_2__messages_components_my_contact_list___default.a,
    MainChatWrapper: __WEBPACK_IMPORTED_MODULE_3__messages_components_main_chat_wrapper___default.a
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
      selectedContact: "",
      currentUserId: "",
      currentContactUserId: "",
      msgToSend: "",
      isComponentActive: true,
      contactNameSearchText: "",
      isContactListLoaded: false,
      isCurrentStep: 0,
      assets: this.$parent.assets,
      defultImg: this.$parent.defultimg,
      str: this.$parent.str
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

      axios.post("/get_contact_list").then(function (response) {
        self.contactList = response.data.contact_list;
        self.currentUserId = response.data.user_id;
        self.isContactListLoaded = true;
      }).catch(function (e) {
        //
      });
    },
    loadChatHistory: function loadChatHistory(contact, index) {
      var self = this;
      self.isChatLoadeMore = false;
      self.handleBackBtnClickOnDevices();
      self.isChatMessagesLoaded = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;

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

      var index = this.searchForObjectIndexInArray(contact.contact_id, this.contactList);

      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("messageCount", -1 * contact.unread_msgs_count);

      contact.unread_msgs_count = 0;

      this.contactList.splice(index, 1, contact);
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
    activeReportModal: function activeReportModal() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("reoprtModal", true);
    }
  },

  mounted: function mounted() {
    this.init();
    __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("subHeader", this.items);
  },

  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/messages" });

    var self = this;

    if (__WEBPACK_IMPORTED_MODULE_1_push_js___default.a.Permission.has() === false) {
      __WEBPACK_IMPORTED_MODULE_1_push_js___default.a.Permission.request(function () {}, function () {});
    }

    if (messaging) {
      messaging.requestPermission().then(function () {
        // console.log("Notification permission granted.");
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

/***/ 333:
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(335)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(337)
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

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(336);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("075b960a", content, false, {});
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

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.contact-body .contact-search[data-v-42216dd2] {\n  padding: 9px 7px;\n  background: #eef3f3;\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n.contact-items[data-v-42216dd2] {\n  padding-top: 60px;\n}\n.contact-body .contact-search .contact-search-input-wrapper[data-v-42216dd2] {\n  position: relative;\n}\n.contact-body .contact-search .contact-search-input-wrapper i[data-v-42216dd2] {\n  position: absolute;\n  left: 12px;\n  font-size: 20px;\n  color: #c1c1c1;\n  top: 8px;\n}\n.contact-body .contact-search .contact-search-input-wrapper input[data-v-42216dd2] {\n  padding: 9px 15px;\n  border-radius: 50px;\n  background: #fff;\n  border: none;\n}\n.contact-body .contact-image[data-v-42216dd2] {\n  width: 45px;\n  height: 45px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  border: 1px solid #f2f2f2;\n  position: relative;\n}\n.contact-body .contact-image img[data-v-42216dd2] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: initial;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.contact-body .contact-item a[data-v-42216dd2] {\n  font-size: 13px;\n  color: #595959;\n  overflow: hidden;\n  padding: 10px 7px;\n  border-bottom: 1px solid #b6b6b6;\n  display: block;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.contact-body .contact-item a[data-v-42216dd2]:hover,\n.contact-body .contact-item a.active[data-v-42216dd2] {\n  background: #f6f6f6;\n  -webkit-transition: 200ms;\n  transition: 200ms;\n}\n.contact-body .contact-item:last-of-type a[data-v-42216dd2] {\n  border-bottom: none;\n}\n.contact-body .contact-item span.contact-name[data-v-42216dd2] {\n  float: right;\n  font-weight: bold;\n}\n.contact-body .contact-item span.contact-last-message[data-v-42216dd2] {\n  float: right;\n  width: calc(100% - 60px);\n  font-weight: lighter;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  direction: rtl;\n  text-align: right;\n}\n.contact-body .contact-item .contact-date[data-v-42216dd2] {\n  float: left;\n  padding-top: 5px;\n  width: 50px;\n  direction: ltr;\n  text-align: center;\n}\n.contact-body .contact-item .my-contact-info-wrapper[data-v-42216dd2] {\n  float: right;\n  padding-top: 6px;\n  direction: ltr;\n  text-align: left;\n  width: calc(100% - 45px);\n  padding-right: 15px;\n}\n.last-message-date[data-v-42216dd2] {\n  display: inline-block;\n  height: 17px;\n  width: 60px;\n  font-size: 10px;\n  line-height: 2;\n  text-align: center;\n}\n.count-number[data-v-42216dd2] {\n  display: inline-block;\n  height: 17px;\n  width: 17px;\n  background: #00c569;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 10px;\n  line-height: 2;\n}\n.count-number-wrapper[data-v-42216dd2] {\n  width: 60px;\n  float: left;\n  text-align: center;\n}\n.not-found-item[data-v-42216dd2] {\n  text-align: center;\n  padding: 100px 15px 0;\n}\n.not-found-item p[data-v-42216dd2] {\n  font-size: 16px;\n  font-weight: bold;\n  color: #777;\n}\n.not-found-item i[data-v-42216dd2] {\n  margin: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 337:
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
          attrs: { type: "text", placeholder: "جستجوی مخاطبین" },
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
        _c("i", { staticClass: "fa fa-search" })
      ])
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
              ? _c("div", [_vm._m(0)])
              : _vm.$parent.isSearchingContact
                ? _c("div", { staticClass: "contact-is-search" }, [_vm._m(1)])
                : _vm.$parent.isContactListLoaded
                  ? _c("div", [_vm._m(2)])
                  : _vm._e()
        ])
      : _c("div", { staticClass: "contact-items" }, [
          _c(
            "ul",
            _vm._l(_vm.$parent.contactList, function(contact, index) {
              return _c("li", { key: index, staticClass: "contact-item" }, [
                _c(
                  "a",
                  {
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
                                _vm.$parent.str + "/" + contact.profile_photo,
                              alt: contact.first_name[0]
                            }
                          })
                        : _c("img", { attrs: { src: _vm.$parent.defultImg } })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "my-contact-info-wrapper" }, [
                      _c("span", {
                        staticClass: "contact-name",
                        domProps: {
                          textContent: _vm._s(
                            contact.first_name + " " + contact.last_name
                          )
                        }
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "last-message-date" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("moment")(
                              contact.last_msg_time_date,
                              "jYY/jMM/jDD"
                            )
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "my-contact-info-wrapper" }, [
                      _c("span", {
                        staticClass: "contact-last-message",
                        domProps: {
                          textContent: _vm._s(contact.last_msg.last_msg_text)
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "count-number-wrapper" }, [
                        contact.unread_msgs_count !== 0
                          ? _c("p", {
                              staticClass: "count-number",
                              domProps: {
                                textContent: _vm._s(contact.unread_msgs_count)
                              }
                            })
                          : _vm._e()
                      ])
                    ])
                  ]
                )
              ])
            })
          )
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("i", { staticClass: "fa fa-user" }),
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
    return _c("p", [
      _c("i", { staticClass: "fa fa-user" }),
      _vm._v(" "),
      _c("span", [_vm._v("مخاطب یافت نشد")])
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

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(339)
}
var normalizeComponent = __webpack_require__(4)
/* script */
var __vue_script__ = __webpack_require__(341)
/* template */
var __vue_template__ = __webpack_require__(343)
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

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(340);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("63f6ae76", content, false, {});
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

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.loading-container[data-v-b8dd9550] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  min-height: 86vh;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  background: #fff;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  position: relative;\n  align-items: center;\n  z-index: 1;\n}\n.whatsapp-loading-gif[data-v-b8dd9550] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 20%;\n  height: 0%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.chat-not-loaded[data-v-b8dd9550] {\n  opacity: 0;\n}\n.chat-loaded[data-v-b8dd9550] {\n  opacity: 1;\n}\n.contact-is-search img[data-v-b8dd9550] {\n  display: block;\n  width: 60px;\n  margin: 18px auto;\n}\n.clock-icon[data-v-b8dd9550] {\n  font-size: 14px;\n}\n.check-items[data-v-b8dd9550] {\n  padding-left: 10px;\n  color: #00a65a;\n}\n.message-wrapper .message-contact-title[data-v-b8dd9550] {\n  font-size: 16px;\n  padding: 7px 15px 8px;\n  background: -webkit-gradient(linear, left top, right top, from(#00c569), to(#21ad93));\n  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);\n  overflow: hidden;\n  color: #fff;\n}\n.message-contact-title a[data-v-b8dd9550] {\n  color: #fafafa;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-contact-title a[data-v-b8dd9550]:hover {\n  color: #fff;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.message-wrapper .message-contact-title-img[data-v-b8dd9550] {\n  width: 35px;\n  height: 35px;\n  float: right;\n  border-radius: 50px;\n  overflow: hidden;\n  position: relative;\n  margin-left: 20px;\n}\n.message-wrapper .message-contact-title img[data-v-b8dd9550] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: 100%;\n  width: initial;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.message-wrapper .message-contact-title span[data-v-b8dd9550] {\n  float: right;\n  display: block;\n  padding-top: 9px;\n}\n.back-state[data-v-b8dd9550] {\n  background: none;\n  color: #fff;\n  border: none;\n  font-size: 22px;\n  position: relative;\n  top: 5px;\n}\n.report-button[data-v-b8dd9550] {\n  background: #fff;\n  color: #777;\n  padding: 0px 10px;\n  border-radius: 5px;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.report-button[data-v-b8dd9550]:hover {\n  color: #00c569;\n}\n.message-wrapper .chat-page ul[data-v-b8dd9550] {\n  padding: 20px;\n\n  overflow-x: hidden;\n\n  position: absolute;\n\n  left: 0;\n\n  right: 0;\n\n  bottom: 57px;\n\n  top: 50px;\n\n  -webkit-transition: 100ms;\n\n  transition: 100ms;\n}\n.message-wrapper .chat-page ul li[data-v-b8dd9550] {\n  overflow: hidden;\n}\n.message-wrapper .chat-page li > div[data-v-b8dd9550] {\n  font-size: 14px;\n  line-height: 1.612;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n  border-radius: 8px;\n  margin: 0 auto 3px;\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n.message-content-wrapper[data-v-b8dd9550] {\n  max-width: 455px;\n  padding: 5px 10px;\n}\n.message-wrapper .chat-page .message-receive[data-v-b8dd9550] {\n  float: left;\n  background: #f7f7f7;\n}\n.message-wrapper .chat-page .message-send[data-v-b8dd9550] {\n  float: right;\n  background: #dcf8c6;\n}\n.message-wrapper .chat-page span.message-chat-date[data-v-b8dd9550] {\n  text-align: left;\n  font-size: 10px;\n  padding-top: 3px;\n  width: 100%;\n  direction: ltr;\n  display: block;\n}\n.send-message-form[data-v-b8dd9550] {\n  overflow: hidden;\n  padding: 4px 15px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.message-input[data-v-b8dd9550] {\n  float: left;\n  width: calc(100% - 60px);\n}\n\n/* .send-message-form .message-input textarea {\n  border-radius: 25px;\n  background: #fff;\n  border: none;\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 98px;\n  height: 50px;\n  box-sizing: border-box;\n  resize: none;\n} */\n.button-wrapper[data-v-b8dd9550] {\n  float: right;\n  line-height: 1.1;\n}\n.button-wrapper svg[data-v-b8dd9550] {\n  height: 21px;\n  position: relative;\n  right: -3px;\n  top: 3px;\n}\n.send-message-form .button-wrapper button[data-v-b8dd9550] {\n  border: none;\n  background: #00c569;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 22px;\n  color: #fff;\n  padding-left: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_textarea_autosize__ = __webpack_require__(342);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  methods: {
    init: function init() {
      var self = this;

      var caret = "";
      $("textarea").keydown(function (event) {
        if ($(this).val().length === 0 && event.keyCode == 13) {
          event.preventDefault();
        }
      });

      $("textarea").keyup(function (event) {
        if (event.keyCode == 13 && event.shiftKey) {
          console.log("shift enter");
        } else if (event.keyCode == 13) {
          self.$parent.sendMessage();
        }
      });
    }
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * vue-textarea-autosize v1.1.1 
 * (c) 2019 Saymon
 * Released under the MIT License.
 */
//
//
//
//
//
//
//
var script = {
  name: 'TextareaAutosize',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    autosize: {
      type: Boolean,
      default: true
    },
    minHeight: {
      type: [Number],
      'default': null
    },
    maxHeight: {
      type: [Number],
      'default': null
    },

    /*
     * Force !important for style properties
     */
    important: {
      type: [Boolean, Array],
      default: false
    }
  },
  data: function data() {
    return {
      // data property for v-model binding with real textarea tag
      val: null,
      // works when content height becomes more then value of the maxHeight property
      maxHeightScroll: false,
      height: 'auto'
    };
  },
  computed: {
    computedStyles: function computedStyles() {
      if (!this.autosize) return {};
      return {
        resize: !this.isResizeImportant ? 'none' : 'none !important',
        height: this.height,
        overflow: this.maxHeightScroll ? 'auto' : !this.isOverflowImportant ? 'hidden' : 'hidden !important'
      };
    },
    isResizeImportant: function isResizeImportant() {
      var imp = this.important;
      return imp === true || Array.isArray(imp) && imp.includes('resize');
    },
    isOverflowImportant: function isOverflowImportant() {
      var imp = this.important;
      return imp === true || Array.isArray(imp) && imp.includes('overflow');
    },
    isHeightImportant: function isHeightImportant() {
      var imp = this.important;
      return imp === true || Array.isArray(imp) && imp.includes('height');
    }
  },
  watch: {
    value: function value(val) {
      this.val = val;
    },
    val: function val(_val) {
      this.$nextTick(this.resize);
      this.$emit('input', _val);
    },
    minHeight: function minHeight() {
      this.$nextTick(this.resize);
    },
    maxHeight: function maxHeight() {
      this.$nextTick(this.resize);
    },
    autosize: function autosize(val) {
      if (val) this.resize();
    }
  },
  methods: {
    resize: function resize() {
      var _this = this;

      var important = this.isHeightImportant ? 'important' : '';
      this.height = "auto".concat(important ? ' !important' : '');
      this.$nextTick(function () {
        var contentHeight = _this.$el.scrollHeight + 1;

        if (_this.minHeight) {
          contentHeight = contentHeight < _this.minHeight ? _this.minHeight : contentHeight;
        }

        if (_this.maxHeight) {
          if (contentHeight > _this.maxHeight) {
            contentHeight = _this.maxHeight;
            _this.maxHeightScroll = true;
          } else {
            _this.maxHeightScroll = false;
          }
        }

        var heightVal = contentHeight + 'px';
        _this.height = "".concat(heightVal).concat(important ? ' !important' : '');
      });
      return this;
    }
  },
  created: function created() {
    this.val = this.value;
  },
  mounted: function mounted() {
    this.resize();
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.val),expression:"val"}],style:(_vm.computedStyles),domProps:{"value":(_vm.val)},on:{"focus":_vm.resize,"input":function($event){if($event.target.composing){ return; }_vm.val=$event.target.value;}}})};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TextareaAutosize = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var version = '1.1.1';

var install = function install(Vue) {
  Vue.component('TextareaAutosize', TextareaAutosize);
};

var plugin = {
  install: install,
  version: version
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

/* unused harmony default export */ var _unused_webpack_default_export = (plugin);


/***/ }),

/***/ 343:
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
              : _c("img", { attrs: { src: _vm.$parent.defultImg } })
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
              _c("span", {
                domProps: {
                  textContent: _vm._s(
                    _vm.$parent.selectedContact.first_name +
                      " " +
                      _vm.$parent.selectedContact.last_name
                  )
                }
              })
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "head-action-buttons pull-left" }, [
        _c(
          "button",
          {
            staticClass: "green-button report-button",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.$parent.activeReportModal()
              }
            }
          },
          [_vm._v("\n        گزارش تخلف\n      ")]
        ),
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
        )
      ])
    ]),
    _vm._v(" "),
    _vm.$parent.selectedContact
      ? _c("div", { staticClass: "chat-page" }, [
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
            _vm._l(_vm.$parent.chatMessages, function(msg) {
              return _c("li", { key: msg.id }, [
                _c(
                  "div",
                  {
                    class: [
                      msg.sender_id == _vm.$parent.currentUserId
                        ? "message-send"
                        : "message-receive"
                    ]
                  },
                  [
                    _c("div", { staticClass: "message-content-wrapper" }, [
                      _c("span", {
                        domProps: { textContent: _vm._s(msg.text) }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "message-chat-date" }, [
                        msg.created_at
                          ? _c("span", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(
                                    _vm._f("moment")(
                                      msg.created_at,
                                      "jYY/jMM/jDD, h:mm A"
                                    )
                                  ) +
                                  "\n              "
                              )
                            ])
                          : _c("span", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("moment")(
                                    Date(),
                                    "jYY/jMM/jDD, h:mm A"
                                  )
                                )
                              )
                            ]),
                        _vm._v(" "),
                        msg.sender_id === _vm.$parent.currentUserId
                          ? _c("span", { staticClass: "check-items" }, [
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
              ])
            })
          ),
          _vm._v(" "),
          _vm.$parent.isChatMessagesLoaded && _vm.$parent.isFirstMessageLoading
            ? _c("div", { staticClass: "loading-container" }, [
                _c("div", { staticClass: "image-wrapper" }, [
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
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "send-message-form" }, [
            _c("form", [
              _c(
                "div",
                { staticClass: "message-input" },
                [
                  _c("TextareaAutosize", {
                    attrs: {
                      placeholder: "Type something here...",
                      autosize: true,
                      "min-height": 50,
                      "max-height": 350
                    },
                    model: {
                      value: _vm.$parent.msgToSend,
                      callback: function($$v) {
                        _vm.$set(_vm.$parent, "msgToSend", $$v)
                      },
                      expression: "$parent.msgToSend"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "button-wrapper" }, [
                _c(
                  "button",
                  {
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
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b8dd9550", module.exports)
  }
}

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "main-content col-xs-12" }, [
    _c(
      "div",
      {
        staticClass: "col-xs-12 contact-wrapper pull-right col-sm-4 col-md-3",
        class: { hidden_element: _vm.selectedContact }
      },
      [_c("div", { staticClass: "row" }, [_c("my-contact-list")], 1)]
    ),
    _vm._v(" "),
    _vm.selectedContact
      ? _c(
          "div",
          {
            staticClass: "col-xs-12 message-wrapper col-sm-8 col-md-9",
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
              "col-xs-12 default-message-wrapper hidden-xs col-sm-8 col-md-9"
          },
          [_vm._m(0)]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "default-main-contents" }, [
      _c("i", { staticClass: "fa fa-user" }),
      _vm._v(" "),
      _c("p", [_vm._v("برای شروع چت لطفا یک مخاطب انتخاب کنید")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3bf2e53e", module.exports)
  }
}

/***/ })

});