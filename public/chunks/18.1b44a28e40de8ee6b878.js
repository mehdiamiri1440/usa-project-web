webpackJsonp([18],{

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(818)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(820)
/* template */
var __vue_template__ = __webpack_require__(837)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ba0d9948"
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
Component.options.__file = "resources/assets/js/components/login/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba0d9948", Component.options)
  } else {
    hotAPI.reload("data-v-ba0d9948", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(819);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("784082e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba0d9948\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba0d9948\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-ba0d9948],\nspan[data-v-ba0d9948] {\n  line-height: 1.5;\n}\n.text-loader[data-v-ba0d9948] {\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-size: 16px;\n  position: absolute;\n  bottom: 37%;\n  right: 10px;\n}\n.loading-container[data-v-ba0d9948] {\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  z-index: 1100;\n  position: fixed;\n}\n#main-content[data-v-ba0d9948] {\n  padding-bottom: 0;\n}\n.error-message[data-v-ba0d9948] {\n  direction: rtl;\n  font-size: 11px;\n}\n#main[data-v-ba0d9948] {\n  margin-top: 21px;\n  background: #f9f9f9;\n\n  height: 100%;\n\n  position: relative;\n\n  width: 100%;\n  overflow: hidden;\n  min-height: 768px;\n}\ninput[type=\"number\"][data-v-ba0d9948] {\n  -moz-appearance: textfield;\n}\ninput[type=\"number\"][data-v-ba0d9948]::-webkit-inner-spin-button,\ninput[type=\"number\"][data-v-ba0d9948]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.main-wrapper[data-v-ba0d9948] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 620px;\n}\n.wraper-main-contents[data-v-ba0d9948] {\n  text-align: right;\n}\n\n/*progressbar styles*/\n.wrapper-progressbar[data-v-ba0d9948] {\n  position: relative;\n}\n.progressbar-items[data-v-ba0d9948] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  direction: rtl;\n  position: relative;\n}\n.progrees-item[data-v-ba0d9948] {\n  text-align: center;\n  color: #bebebe;\n}\n.progrees-item p[data-v-ba0d9948] {\n  font-size: 12px;\n}\n.progrees-item span[data-v-ba0d9948] {\n  width: 20px;\n  height: 20px;\n  font-size: 13px;\n  background: #bebebe;\n  border-radius: 50px;\n  color: #fff;\n  display: inline-block;\n  margin-bottom: 6px;\n  padding-top: 1px;\n}\n.lds-ring[data-v-ba0d9948] {\n  display: inline-block;\n\n  position: absolute;\n\n  width: 64px;\n\n  height: 64px;\n\n  left: 50%;\n\n  top: 50%;\n\n  -webkit-transform: translate(-50%, -50%);\n\n          transform: translate(-50%, -50%);\n}\n.lds-ring div[data-v-ba0d9948] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 5px solid #00c569;\n  border-radius: 50%;\n  -webkit-animation: lds-ring-data-v-ba0d9948 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring-data-v-ba0d9948 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #00c569 transparent transparent transparent;\n}\n.lds-ring-alt[data-v-ba0d9948] {\n  display: block;\n  margin-top: 50px;\n  direction: rtl;\n  text-align: center;\n}\n.lds-ring div[data-v-ba0d9948]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div[data-v-ba0d9948]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div[data-v-ba0d9948]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring-data-v-ba0d9948 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes lds-ring-data-v-ba0d9948 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n.progrees-item.active[data-v-ba0d9948] {\n  color: #333;\n}\n.progrees-item.active p[data-v-ba0d9948] {\n  font-weight: bold;\n}\n.progrees-item.active span[data-v-ba0d9948] {\n  background: #00c569;\n}\n.custom-progressbar[data-v-ba0d9948] {\n  display: block;\n  height: 3px;\n  background: #bebebe;\n  right: 20px;\n  left: 21px;\n  position: absolute;\n  top: 9px;\n  z-index: 0;\n}\n.custom-progressbar.active[data-v-ba0d9948] {\n  background: #00c569;\n  width: 0;\n  left: initial;\n}\n.custom-progressbar .progress-bar[data-v-ba0d9948] {\n  background: #00c569;\n  float: right;\n}\n\n/*main contents styles */\n.main-contents[data-v-ba0d9948] {\n  background: #fff;\n  border-radius: 9px;\n  overflow: hidden;\n  margin-top: 16px;\n  -webkit-box-shadow: 0 0 10px #c5c5c5;\n          box-shadow: 0 0 10px #c5c5c5;\n  height: 500px;\n}\n\n/*main content headers styles*/\n.main-content-header[data-v-ba0d9948] {\n  direction: rtl;\n  text-align: center;\n  background: #00c569;\n  color: #fff;\n  padding: 22px 0;\n}\n.main-content-header a[data-v-ba0d9948] {\n  color: #fff;\n  position: relative;\n  right: 0;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.main-content-header a[data-v-ba0d9948],\n.main-content-header h1[data-v-ba0d9948] {\n  font-size: 23px;\n}\n.main-content-header a[data-v-ba0d9948]:hover {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.main-content-header a.arrow-left[data-v-ba0d9948]:hover {\n  right: 5px;\n}\n.main-content-header a.arrow-right[data-v-ba0d9948]:hover {\n  right: -5px;\n}\n\n/*main content footer style*/\n.main-content-footer[data-v-ba0d9948] {\n  position: absolute;\n\n  bottom: 0;\n}\n.footer-content[data-v-ba0d9948] {\n  direction: rtl;\n  text-align: center;\n  background: #f6f6f6;\n  font-size: 11px;\n  padding: 5px;\n  color: #333;\n}\n.footer-content i[data-v-ba0d9948] {\n  font-size: 12px;\n  color: #00c569;\n}\n@media screen and (max-width: 767px) {\n#main[data-v-ba0d9948] {\n    padding: 0;\n}\n.progrees-item p[data-v-ba0d9948] {\n    display: none;\n}\n.main-wrapper[data-v-ba0d9948] {\n    top: calc(50% - 30px);\n}\n.progressbar-items[data-v-ba0d9948] {\n    padding: 0 15px;\n}\n.main-contents[data-v-ba0d9948] {\n    border-radius: 0;\n}\n.main-content-header[data-v-ba0d9948] {\n    direction: rtl;\n    text-align: center;\n    background: none;\n    color: #333;\n    padding: 14px 0;\n    border-bottom: 2px solid #00c569;\n}\n.main-content-header a[data-v-ba0d9948],\n  .main-content-header h1[data-v-ba0d9948] {\n    font-size: 17px;\n}\n.main-content-header a[data-v-ba0d9948] {\n    color: #333;\n    text-align: left;\n}\n.title-contents[data-v-ba0d9948] {\n    font-weight: bold;\n    font-size: 16px;\n}\n.form-contents label[data-v-ba0d9948] {\n    font-size: 12px;\n}\n.small-description[data-v-ba0d9948] {\n    font-size: 11px;\n\n    font-weight: bold;\n}\ninput[data-v-ba0d9948] {\n    font-size: 13px;\n    padding: 8px 15px 9px 35px;\n}\n}\n@media screen and (max-width: 370px) {\n.form-contents .col-xs-10[data-v-ba0d9948] {\n    padding: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_steps_login_page__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_steps_login_page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__login_steps_login_page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_steps_forgot_password__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_steps_forgot_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__login_steps_forgot_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_steps_verify_code__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_steps_verify_code___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__login_steps_verify_code__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    loginPage: __WEBPACK_IMPORTED_MODULE_1__login_steps_login_page___default.a,
    ForgotPassword: __WEBPACK_IMPORTED_MODULE_2__login_steps_forgot_password___default.a,
    VerifyCode: __WEBPACK_IMPORTED_MODULE_3__login_steps_verify_code___default.a
  },
  props: ["isUserLogin", "userType"],
  data: function data() {
    return {
      loginCheckerLoading: true,
      isImageLoad: false,
      currentStep: 1,
      loginBtnLoading: false,
      errors: [],
      showMsg: false,
      step1: {
        phone: "",
        password: "",
        msg: ""
      },
      step2: {
        phone: "",
        sendCode: true,
        msg: ""
      },
      step3: {
        verification_code: "",
        msg: "",
        reSendCode: false
      },
      createPassword: false,
      popUpMsg: ""
    };
  },
  methods: {
    stopLoader: function stopLoader() {
      __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("isLoading", false);
    },
    goToStep: function goToStep(step) {
      this.currentStep = step;
      this.scrollToTop();
    },
    doLogin: function doLogin() {
      var self = this;

      self.loginBtnLoading = true;

      axios.post("/dologin", {
        phone: this.step1.phone,
        password: this.step1.password
      }).then(function (response) {
        if (response.data.status === true) {
          if (response.data.confirmed_profile_record === true) {
            if (self.isUserComeFromChatBoxOpen() || self.isUserInInquirySubmissionProcess()) {
              window.localStorage.setItem("userId", response.data.id);
              window.localStorage.setItem("userType", response.data.is_seller);

              self.returnUserToPreviousPageAndChatBox(response.data);
            } else {
              window.localStorage.setItem("userId", response.data.id);
              window.localStorage.setItem("userType", response.data.is_seller);

              self.redirectUserToPanel(response.data);
            }
          } else {
            self.loginBtnLoading = false;

            self.registerComponentExceptions("Login-page: User does not have confirmed profile record", true);
            // window.location.href = "/seller/profile"; // Edit Profile Page
          }
        } else {
          self.loginBtnLoading = false;

          self.showMsg = true;
          self.errors = [];
          self.step1.msg = response.data.msg;

          self.registerComponentExceptions("Login-page: Validation error for user credentials in login page");
        }
      }).catch(function (err) {
        self.loginBtnLoading = false;

        self.errors = [];
        self.showMsg = false;
        self.errors = err.response.data.errors;

        self.registerComponentExceptions("Login-page: Validation error for user credentials in login page");
      });
    },
    sendPhoneVerificationCode: function sendPhoneVerificationCode() {
      this.step3.reSendCode = false;
      this.step2.sendCode = false;
      this.errors = [];
      var self = this;

      axios.post("/send_phone_verification_code_for_password_reset", {
        phone: this.toLatinNumbers(this.step2.phone)
      }).then(function (response) {
        if (response.status === 200) {
          self.goToStep(3);

          self.step2.sendCode = true;

          setTimeout(function () {
            self.step3.reSendCode = true;
          }, 60000);
        }
      }).catch(function (err) {
        if (err.response.status === 500) {
          self.errors[0] = err.response.data.msg;
        } else {
          self.errors = err.response.data.errors.phone;
        }

        self.step2.sendCode = true;
      });
    },
    verifyCode: function verifyCode() {
      var self = this;
      this.showMsg = false;
      this.createPassword = true;
      axios.post("/reset_password", {
        phone: this.toLatinNumbers(this.step2.phone),
        verification_code: this.toLatinNumbers(this.step3.verification_code)
      }).then(function (response) {
        if (response.data.status === true) {
          self.errors = [];

          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("modal", "passwordResetSuccess");

          self.currentStep = 1;
          self.createPassword = false;
        } else {
          self.errors = [];
          self.errors.verification_code = "کد اشتباه است یا منقضی شده";
          self.createPassword = false;
        }
      }).catch(function (err) {
        self.errors = [];
        self.errors = err.response.data.errors;
      });
    },
    loadImage: function loadImage() {
      this.isImageLoad = false;
    },
    ImageLoaded: function ImageLoaded() {
      this.isImageLoad = true;
    },
    toLatinNumbers: function toLatinNumbers(num) {
      if (num == null) {
        return null;
      }

      return num.toString().replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    registerComponentExceptions: function registerComponentExceptions(description) {
      var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      gtag("event", "exception", {
        description: description,
        fatal: fatal
      });
    },
    scrollToTop: function scrollToTop() {
      window.scrollTo(0, 0);
    },

    isOsIOS: function isOsIOS() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
          safari = /safari/.test(userAgent),
          ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    isUserComeFromChatBoxOpen: function isUserComeFromChatBoxOpen() {
      if (window.localStorage.getItem("contact") && window.localStorage.getItem("pathname")) {
        return true;
      }
      return false;
    },
    returnUserToPreviousPageAndChatBox: function returnUserToPreviousPageAndChatBox(userInfo) {
      if (this.isUserInInquirySubmissionProcess()) {
        var contact = JSON.parse(window.localStorage.getItem("contact"));
        var msg = window.localStorage.getItem("msgToSend");

        if (userInfo.id != contact.contact_id) {
          if (userInfo.is_buyer) {
            window.location.href = "/buyer/register-request";
          } else if (userInfo.is_seller) {
            window.location.href = "/switch-role";
          } else {
            window.localStorage.removeItem("contact");
            window.localStorage.removeItem("msgToSend");

            this.redirectUserToPanel(userInfo);
          }
        } else {
          this.redirectUserToPanel(userInfo);
        }
      } else if (this.isUserComeFromChatBoxOpen()) {
        var _contact = JSON.parse(window.localStorage.getItem("contact"));
        var pathname = window.localStorage.getItem("pathname");

        window.localStorage.removeItem("contact");
        window.localStorage.removeItem("pathname");

        if (userInfo.id != _contact.contact_id) {
          window.localStorage.setItem("comeFromAuthentication", true);

          this.$router.push({ path: pathname });

          __WEBPACK_IMPORTED_MODULE_0__router_router__["b" /* eventBus */].$emit("ChatInfo", _contact);
        } else {
          this.redirectUserToPanel(userInfo);
        }
      } else {
        this.redirectUserToPanel(userInfo);
      }
    },
    redirectUserToPanel: function redirectUserToPanel(userInfo) {
      var self = this;

      if (userInfo.is_buyer) {
        axios.post("/get_total_unread_messages_for_current_user").then(function (response) {
          if (response.data.msg_count) {
            window.location.href = "/buyer/messenger/contacts";
          } else {
            window.location.href = "/buyer/register-request";
          }
        }).catch(function (err) {
          //
        });

        localStorage.setItem("showSnapShot", true);
        localStorage.userRoute = JSON.stringify("buyer/register-request");
        // test
        self.registerComponentStatistics("Login", "seller-login", "seller-logged-in-successfully");
      } else if (userInfo.is_seller) {
        axios.post("/get_total_unread_messages_for_current_user").then(function (response) {
          if (response.data.msg_count) {
            window.location.href = "/seller/messenger/contacts";
          } else {
            axios.post("/get_seller_dashboard_required_data").then(function (response) {
              if (response.data.confirmed_products_count !== 0) {
                window.location.href = "/seller/buyAd-requests";
              } else {
                window.location.href = "/seller/register-product";
              }
            });
          }
        }).catch(function (err) {
          //
        });

        localStorage.setItem("showSnapShot", true);
        localStorage.userRoute = JSON.stringify("seller/register-product");
        self.registerComponentStatistics("Login", "buyer-login", "buyer-logged-in-succeccfully");
      } else {
        self.registerComponentExceptions("Login-page: Undefined user type user phone nubmer is: " + userInfo.phone, true);

        alert("نوع کاربری شما مشخص نشده است لطفا با پشتیبانی باسکول تماس بگیرید");
      }
    },
    isUserInInquirySubmissionProcess: function isUserInInquirySubmissionProcess() {
      if (window.localStorage.getItem("contact") && window.localStorage.getItem("msgToSend")) {
        return true;
      }
      return false;
    }
  },
  created: function created() {
    gtag("config", "UA-129398000-1", { page_path: "/login" });
    var self = this;

    var userInfo = {
      is_buyer: !self.userType,
      is_seller: self.userType
    };

    if (self.isUserLogin && self.userType == 1) {
      if (self.isUserInInquirySubmissionProcess()) {
        self.returnUserToPreviousPageAndChatBox(userInfo);
      } else {
        self.$router.push("seller/register-product");
      }
    } else if (self.isUserLogin && self.userType != 1) {
      // self.returnUserToPreviousPageAndChatBox(userInfo);
      self.$router.push("buyer/register-request");
    } else {
      self.loginCheckerLoading = false;
    }
    window.addEventListener("keydown", function (event) {
      if (window.location.pathname == "/login") {
        if (event.keyCode === 13) {
          self.doLogin();
        }
      }
    });
  },

  mounted: function mounted() {
    var _this = this;

    var self = this;
    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        self.$nextTick(_this.stopLoader());
      }
    };
  },
  updated: function updated() {
    this.$nextTick(this.stopLoader());
  },
  metaInfo: function metaInfo() {
    return {
      title: "ورود",
      titleTemplate: "باسکول | %s",
      meta: [{
        name: "description",
        content: "خرید عمده و قیمت میوه | خرید عمده و قیمت غلات | خرید عمده و قیمت صیفی جات | خرید و قیمت عمده خشکبار"
      }, {
        name: "author",
        content: "باسکول"
      }, {
        property: "og:description",
        content: "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی"
      }, {
        property: "og:site_name",
        content: "باسکول بازارآنلاین خرید و فروش محصولات کشاورزی ایران"
      }, {
        property: "og:title",
        content: "باسکول | ورود"
      }]
    };
  }
});

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(822)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(824)
/* template */
var __vue_template__ = __webpack_require__(825)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e1320fc0"
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
Component.options.__file = "resources/assets/js/components/login/login_steps/login_page.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1320fc0", Component.options)
  } else {
    hotAPI.reload("data-v-e1320fc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(823);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("af8bc028", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1320fc0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login_page.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1320fc0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./login_page.vue");
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

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-e1320fc0],\nspan[data-v-e1320fc0] {\n  line-height: 1.5;\n}\na.text-green[data-v-e1320fc0] {\n  color: #00c569;\n\n  margin: 10px auto;\n\n  display: inline-block;\n}\n.submit-button[data-v-e1320fc0],\n.register-button[data-v-e1320fc0] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 0 9px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  cursor: default;\n}\n.submit-button.active[data-v-e1320fc0] {\n  background: #00c569;\n  cursor: pointer;\n}\n.title-contents[data-v-e1320fc0] {\n  font-weight: bold;\n  font-size: 19px;\n}\n.form-contents[data-v-e1320fc0] {\n  margin: 5px auto;\n}\n.form-contents lable[data-v-e1320fc0] {\n  font-size: 12px;\n}\n.input-wrapper[data-v-e1320fc0] {\n  margin: 6px auto 4px;\n  position: relative;\n}\ninput[data-v-e1320fc0] {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\ninput[data-v-e1320fc0] {\n  width: 100%;\n\n  border-radius: 4px;\n\n  border: 1px solid;\n\n  padding: 8px 15px 9px 45px;\n\n  color: #bebebe;\n\n  direction: ltr;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n}\n.input-wrapper i[data-v-e1320fc0] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n}\ninput[data-v-e1320fc0]:focus,\ninput:focus + i[data-v-e1320fc0] {\n  color: #333;\n}\ninput.active[data-v-e1320fc0] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-e1320fc0] {\n  color: #00c569;\n}\ninput.active[data-v-e1320fc0]:focus,\ninput.active:focus + i[data-v-e1320fc0],\ninput.active + i[data-v-e1320fc0] {\n  border-color: #00c569;\n}\ninput.error[data-v-e1320fc0] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-e1320fc0] {\n  color: #e41c38;\n}\ninput.error[data-v-e1320fc0]:focus,\ninput.error:focus + i[data-v-e1320fc0] {\n  border-color: #e41c38;\n}\n.error-message[data-v-e1320fc0] {\n  text-align: center;\n\n  color: #e41c38;\n\n  font-weight: bold;\n\n  height: 15px;\n\n  direction: rtl;\n\n  font-size: 12px;\n}\n.register-form[data-v-e1320fc0] {\n  overflow: hidden;\n  direction: rtl;\n}\n.register-form p[data-v-e1320fc0] {\n  margin: 4px 0;\n\n  font-size: 13px;\n\n  font-weight: bold;\n\n  text-align: center;\n}\n.register-form p img[data-v-e1320fc0] {\n  width: 23px;\n\n  position: relative;\n\n  top: 8px;\n}\n.register-form p span[data-v-e1320fc0] {\n  margin-left: 10px;\n}\n.register-form .register-button[data-v-e1320fc0] {\n  background: #00c569;\n  cursor: pointer;\n  display: block;\n  text-align: center;\n}\n@media screen and (max-width: 430px) {\n.register-form p img[data-v-e1320fc0] {\n    width: 20px;\n    position: relative;\n    top: 7px;\n}\n.form-contents .col-xs-3[data-v-e1320fc0],\n  .form-contents .col-xs-6[data-v-e1320fc0] {\n    padding: 0 5px;\n}\n.register-form p span[data-v-e1320fc0] {\n    margin-left: 0;\n}\n}\n.vertical-padding[data-v-e1320fc0] {\n  padding: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ 824:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      phoneNumber: this.$parent.step1.phone,
      password: this.$parent.step1.password
    };
  },
  methods: {
    doLogin: function doLogin() {
      this.$parent.doLogin();
    }
  },
  watch: {
    phoneNumber: function phoneNumber(value) {
      this.$parent.errors.phone = "";

      // if (this.phoneNumber.length >= 11) {
      this.phoneNumber = this.phoneNumber.substring(0, 11);
      this.$parent.step1.phone = this.phoneNumber;
      // }
    },
    password: function password(value) {
      this.$parent.errors.password = "";
      this.$parent.step1.password = this.password;
    }
  },
  mounted: function mounted() {
    if (this.$parent.isOsIOS()) {
      $("#phone-number").attr("type", "text");
    }
  }
});

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("p", { staticClass: "error-message" }, [
      _vm.$parent.showMsg
        ? _c("span", {
            domProps: { textContent: _vm._s(_vm.$parent.step1.msg) }
          })
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "form-contents col-xs-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("label", { attrs: { for: "phone-number" } }, [
          _vm._v("شماره موبایل")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-wrapper user-phone-number-wrapper" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.phoneNumber,
                expression: "phoneNumber"
              }
            ],
            staticClass: "dire",
            class: {
              error: _vm.$parent.errors.phone,
              active: _vm.phoneNumber.length >= 11
            },
            attrs: {
              id: "phone-number",
              type: "tel",
              placeholder: "شماره موبایل",
              pattern: "[0-9]*"
            },
            domProps: { value: _vm.phoneNumber },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.phoneNumber = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-phone-square-alt" })
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "error-message" }, [
          _vm.$parent.errors.phone
            ? _c("span", {
                domProps: { textContent: _vm._s(_vm.$parent.errors.phone[0]) }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("label", { attrs: { for: "phone-number" } }, [_vm._v("کلمه عبور")]),
        _vm._v(" "),
        _c("div", { staticClass: "input-wrapper user-phone-number-wrapper" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password"
              }
            ],
            staticClass: "dire",
            class: {
              error: _vm.$parent.errors.password,
              active: _vm.password.length
            },
            attrs: {
              id: "password",
              type: "password",
              placeholder: "کلمه عبور را وارد کنید"
            },
            domProps: { value: _vm.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-lock" })
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "error-message" }, [
          _vm.$parent.errors.password
            ? _c("span", {
                domProps: {
                  textContent: _vm._s(_vm.$parent.errors.password[0])
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "text-green",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.$parent.goToStep(2)
              }
            }
          },
          [_vm._v("رمز عبور خود را فراموش کرده اید؟")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "submit-button disabled",
            class: {
              active: _vm.phoneNumber.length >= 11 && _vm.password.length
            },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.doLogin()
              }
            }
          },
          [
            _vm.phoneNumber.length >= 11 &&
            _vm.password.length &&
            _vm.$parent.loginBtnLoading
              ? _c("span", { staticClass: "fas fa-circle-notch fa-spin" })
              : _vm._e(),
            _vm._v("\n\n          ورود\n        ")
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "register-form" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "register-button vertical-padding",
                attrs: { to: "/register" }
              },
              [_vm._v("ثبت نام در باسکول")]
            )
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
    return _c("p", [
      _c("span", [_vm._v("برای ثبت نام در باسکول بر روی دکمه زیر کلیک کنید")]),
      _vm._v(" "),
      _c("img", { attrs: { src: __webpack_require__(826) } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e1320fc0", module.exports)
  }
}

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "/images/banner-arrow.png?219e567f01af6ba9b1161b3a26ea6aef";

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(828)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(830)
/* template */
var __vue_template__ = __webpack_require__(831)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04186acc"
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
Component.options.__file = "resources/assets/js/components/login/login_steps/forgot_password.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04186acc", Component.options)
  } else {
    hotAPI.reload("data-v-04186acc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(829);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("02ec2388", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04186acc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forgot_password.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04186acc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forgot_password.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-04186acc],\nspan[data-v-04186acc] {\n  line-height: 1.5;\n}\n.submit-button[data-v-04186acc] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 0 9px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  cursor: default;\n}\n.submit-button.active[data-v-04186acc] {\n  background: #00c569;\n  cursor: pointer;\n}\n.title-contents[data-v-04186acc] {\n  font-weight: bold;\n  font-size: 19px;\n}\n.form-contents[data-v-04186acc] {\n  margin: 5px auto;\n}\n.form-contents lable[data-v-04186acc] {\n  font-size: 12px;\n}\n.input-wrapper[data-v-04186acc] {\n  margin: 6px auto 4px;\n  position: relative;\n}\ninput[data-v-04186acc] {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\ninput[data-v-04186acc] {\n  width: 100%;\n\n  border-radius: 4px;\n\n  border: 1px solid;\n\n  padding: 8px 15px 9px 45px;\n\n  color: #bebebe;\n\n  direction: ltr;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n}\n.input-wrapper i[data-v-04186acc] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n}\ninput[data-v-04186acc]:focus,\ninput:focus + i[data-v-04186acc] {\n  color: #333;\n}\ninput.active[data-v-04186acc] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-04186acc] {\n  color: #00c569;\n}\ninput.active[data-v-04186acc]:focus,\ninput.active:focus + i[data-v-04186acc],\ninput.active + i[data-v-04186acc] {\n  border-color: #00c569;\n}\ninput.error[data-v-04186acc] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-04186acc] {\n  color: #e41c38;\n}\ninput.error[data-v-04186acc]:focus,\ninput.error:focus + i[data-v-04186acc] {\n  border-color: #e41c38;\n}\n.error-message[data-v-04186acc] {\n  text-align: center;\n\n  color: #e41c38;\n\n  font-weight: bold;\n\n  height: 25px;\n\n  margin-bottom: 5px;\n\n  direction: rtl;\n\n  font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ 830:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      phoneNumber: this.$parent.step2.phone
    };
  },
  methods: {
    getPhoneNumber: function getPhoneNumber() {
      this.$parent.step2.phone = this.phoneNumber;
      this.$parent.sendPhoneVerificationCode();
    }
  },
  watch: {
    phoneNumber: function phoneNumber(value) {
      this.$parent.errors[0] = "";
      if (this.phoneNumber.length >= 11) {
        this.phoneNumber = this.phoneNumber.substring(0, 11);
      }
    }
  },
  mounted: function mounted() {
    if (this.$parent.isOsIOS()) {
      $("#phone-number").attr("type", "text");
    }
  }
});

/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-contents col-xs-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("br"),
        _vm._v(" "),
        _c("label", { attrs: { for: "phone-number" } }, [
          _vm._v("لطفا شماره موبایل خود را وارد کنید")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-wrapper user-phone-number-wrapper" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.phoneNumber,
                expression: "phoneNumber"
              }
            ],
            staticClass: "dire",
            class: {
              error: _vm.$parent.errors[0],
              active: _vm.phoneNumber.length >= 11
            },
            attrs: {
              id: "phone-number",
              type: "tel",
              placeholder: "شماره موبایل",
              pattern: "[0-9]*"
            },
            domProps: { value: _vm.phoneNumber },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.phoneNumber = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("i", { staticClass: "fa fa-phone-square-alt" })
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "error-message" }, [
          _vm.$parent.errors
            ? _c("span", {
                domProps: { textContent: _vm._s(_vm.$parent.errors[0]) }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "small-description" }, [
          _vm._v(
            "پس از وارد کردن شماره موبایل ما یک کد برای شما ارسال میکنیم تا از صحت\n        شماره وارد شده اطمینان حاصل کنیم"
          )
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "submit-button disabled",
            class: {
              active: _vm.phoneNumber.length >= 11 && _vm.$parent.step2.sendCode
            },
            attrs: { disabled: !_vm.$parent.step2.sendCode },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.getPhoneNumber()
              }
            }
          },
          [_vm._v("\n        ارسال کد تایید\n      ")]
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
    return _c("p", [_c("br")])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04186acc", module.exports)
  }
}

/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(833)
}
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(835)
/* template */
var __vue_template__ = __webpack_require__(836)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-14ebd508"
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
Component.options.__file = "resources/assets/js/components/login/login_steps/verify_code.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-14ebd508", Component.options)
  } else {
    hotAPI.reload("data-v-14ebd508", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(834);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("15bc080e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14ebd508\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verify_code.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-14ebd508\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./verify_code.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\np[data-v-14ebd508], span[data-v-14ebd508]{\n    line-height: 1.5;\n}\n.submit-button[data-v-14ebd508] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 0 9px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  cursor: default;\n}\n.submit-button.active[data-v-14ebd508] {\n  background: #00c569;\n  cursor: pointer;\n}\n.timer-button[data-v-14ebd508] {\n  background: none;\n\n  border: 1px solid;\n\n  color: #00c569;\n\n  border-radius: 4px;\n\n  padding: 3px 10px;\n\n  margin-bottom: 9px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  cursor: pointer;\n}\n.timer-button[data-v-14ebd508]:hover {\n  background: #00c569;\n\n  border: none;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n  color: #fff;\n}\n.text-green[data-v-14ebd508] {\n  color: #00c569;\n}\n.title-contents[data-v-14ebd508] {\n  font-weight: bold;\n  font-size: 19px;\n}\n.form-contents[data-v-14ebd508] {\n  margin: 5px auto;\n}\n.form-contents lable[data-v-14ebd508] {\n  font-size: 12px;\n}\n.input-wrapper[data-v-14ebd508] {\n  margin: 13px auto 4px;\n  position: relative;\n}\n.timer-wrapper[data-v-14ebd508] {\n  height: 38px;\n  text-align: center;\n  font-size: 12px;\n}\ninput[data-v-14ebd508] {\n  width: 100%;\n\n  border-radius: 4px;\n\n  border: 1px solid;\n\n  padding: 8px 15px 9px 15px;\n\n  color: #bebebe;\n\n  direction: ltr;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n\n  text-align: center;\n}\n.input-wrapper i[data-v-14ebd508] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  -webkit-transition: 300ms;\n\n  transition: 300ms;\n}\ninput.active[data-v-14ebd508] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-14ebd508] {\n  color: #00c569;\n}\ninput.active[data-v-14ebd508]:focus,\ninput.active:focus + i[data-v-14ebd508],\ninput.active + i[data-v-14ebd508] {\n  border-color: #00c569;\n}\ninput.error[data-v-14ebd508] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-14ebd508] {\n  color: #e41c38;\n}\ninput.error[data-v-14ebd508]:focus,\ninput.error:focus + i[data-v-14ebd508] {\n  border-color: #e41c38;\n}\n.error-message[data-v-14ebd508] {\n  text-align: center;\n\n  color: #e41c38;\n\n  font-weight: bold;\n\n  height: 25px;\n\n  margin-bottom: 5px;\n\n  direction: rtl;\n\n  font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ 835:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      verifycode1: this.$parent.step3.verification_code.substring(0, 1),
      verifycode2: this.$parent.step3.verification_code.substring(1, 2),
      verifycode3: this.$parent.step3.verification_code.substring(2, 3),
      verifycode4: this.$parent.step3.verification_code.substring(3, 4),
      currentCode: ""
    };
  },

  methods: {
    reSendCode: function reSendCode() {
      this.$parent.goToStep(2);
    },
    getVerificationCode: function getVerificationCode() {
      this.sumCodeNumbers();
      this.$parent.verifyCode();
    },
    sumCodeNumbers: function sumCodeNumbers() {
      this.currentCode = this.verifycode1 + this.verifycode2 + this.verifycode3 + this.verifycode4;
      if (this.currentCode.length == 4) {
        this.$parent.step3.verification_code = this.currentCode;
      }
    },
    tabTopNext: function tabTopNext(element) {
      $(element).focus();
    },

    keymonitor: function keymonitor(event, index) {
      var keyWatch = this.$parent.toLatinNumbers(event.key);

      if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105 || keyWatch >= 0 && keyWatch <= 9) {
        if (index <= 4) {
          this.tabTopNext("#verify-code-" + index);
        }
      }
    }
  },
  watch: {
    verifycode1: function verifycode1(value) {
      this.$parent.errors.verification_code = "";
      this.sumCodeNumbers();
      this.verifycode1 = this.verifycode1.substring(0, 1);
    },
    verifycode2: function verifycode2(value) {
      this.$parent.errors.verification_code = "";
      this.sumCodeNumbers();
      this.verifycode2 = this.verifycode2.substring(0, 1);
    },
    verifycode3: function verifycode3(value) {
      this.$parent.errors.verification_code = "";
      this.sumCodeNumbers();
      this.verifycode3 = this.verifycode3.substring(0, 1);
    },
    verifycode4: function verifycode4(value) {
      this.$parent.errors.verification_code = "";
      this.sumCodeNumbers();
      this.verifycode4 = this.verifycode4.substring(0, 1);
    }
  },
  mounted: function mounted() {
    if (this.$parent.isOsIOS()) {
      for (var i = 0; i <= 4; i++) {
        $("#verify-code-" + i).attr("type", "text");
      }
    }

    if (this.$parent.isOsIOS()) {
      $("#phone-number").attr("type", "text");
    }
  }
});

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("br"),
    _vm._v(" "),
    _c("h2", { staticClass: "title-contents" }, [_vm._v("تایید موبایل")]),
    _vm._v(" "),
    _c("div", { staticClass: "form-contents col-xs-12" }, [
      _c("div", { staticClass: "row" }, [
        _c("label", { attrs: { for: "verify-code" } }, [
          _vm._v("\n        کد ارسال شده به شماره ی\n        "),
          _c("span", {
            staticClass: "text-green",
            domProps: { textContent: _vm._s(_vm.$parent.step1.phone) }
          }),
          _vm._v("\n\n        را وارد کنید\n      ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-wrapper verify-code-wrapper" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.verifycode1,
                    expression: "verifycode1"
                  }
                ],
                staticClass: "dire",
                class: {
                  error: this.$parent.errors.verification_code,
                  active: _vm.verifycode1.length
                },
                attrs: {
                  id: "verify-code-1",
                  type: "number",
                  placeholder: "_",
                  max: "9",
                  onfocus: "this.select();",
                  pattern: "[0-9]*"
                },
                domProps: { value: _vm.verifycode1 },
                on: {
                  keyup: function($event) {
                    _vm.keymonitor($event, 2)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.verifycode1 = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.verifycode2,
                    expression: "verifycode2"
                  }
                ],
                staticClass: "dire",
                class: {
                  error: _vm.$parent.errors.verification_code,
                  active: _vm.verifycode2.length
                },
                attrs: {
                  id: "verify-code-2",
                  type: "number",
                  placeholder: "_",
                  max: "9",
                  onfocus: "this.select();",
                  pattern: "[0-9]*"
                },
                domProps: { value: _vm.verifycode2 },
                on: {
                  keyup: function($event) {
                    _vm.keymonitor($event, 3)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.verifycode2 = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.verifycode3,
                    expression: "verifycode3"
                  }
                ],
                staticClass: "dire",
                class: {
                  error: _vm.$parent.errors.verification_code,
                  active: _vm.verifycode3.length
                },
                attrs: {
                  id: "verify-code-3",
                  type: "number",
                  placeholder: "_",
                  max: "9",
                  onfocus: "this.select();",
                  pattern: "[0-9]*"
                },
                domProps: { value: _vm.verifycode3 },
                on: {
                  keyup: function($event) {
                    _vm.keymonitor($event, 4)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.verifycode3 = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-3" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.verifycode4,
                    expression: "verifycode4"
                  }
                ],
                staticClass: "dire",
                class: {
                  error: _vm.$parent.errors.verification_code,
                  active: _vm.verifycode4.length
                },
                attrs: {
                  id: "verify-code-4",
                  type: "number",
                  placeholder: "_",
                  max: "9",
                  onfocus: "this.select();",
                  pattern: "[0-9]*"
                },
                domProps: { value: _vm.verifycode4 },
                on: {
                  keyup: function($event) {
                    _vm.keymonitor($event, 5)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.verifycode4 = $event.target.value
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "error-message" }, [
          _vm.$parent.errors.verification_code
            ? _c("span", {
                domProps: {
                  textContent: _vm._s(_vm.$parent.errors.verification_code)
                }
              })
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "timer-wrapper" }, [
          _c(
            "button",
            {
              staticClass: "timer-button",
              attrs: {
                type: "button",
                disabled: _vm.$parent.step2.reSendCode === false,
                value: _vm.$parent.step2.timeCounterDown
              },
              on: {
                click: function($event) {
                  _vm.reSendCode()
                }
              }
            },
            [_vm._v("ارسال مجدد کد فعال سازی")]
          )
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "submit-button disabled",
            class: {
              active: _vm.currentCode.length == 4 && !_vm.$parent.createPassword
            },
            attrs: { disabled: _vm.$parent.createPassword },
            on: {
              click: function($event) {
                $event.preventDefault()
                _vm.getVerificationCode()
              }
            }
          },
          [_vm._v("بررسی کد")]
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
    return _c("p", [_c("br")])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-14ebd508", module.exports)
  }
}

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    !_vm.loginCheckerLoading
      ? _c("div", [
          _c("main", { staticClass: "container", attrs: { id: "main" } }, [
            _c("div", { staticClass: "main-wrapper col-xs-12" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "main-contents" }, [
                  _c(
                    "header",
                    { staticClass: "main-content-header col-xs-12" },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("p", { staticClass: "arrow-left col-xs-2" }),
                        _vm._v(" "),
                        _c("h1", { staticClass: "col-xs-8" }, [
                          _vm.currentStep == 1
                            ? _c("span", [_vm._v("ورود به باسکول")])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.currentStep == 2
                            ? _c("span", [_vm._v("بازیابی کلمه عبور")])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.currentStep == 3 ? _c("span") : _vm._e()
                        ]),
                        _vm._v(" "),
                        _vm.currentStep != 1
                          ? _c(
                              "a",
                              {
                                staticClass: "arrow-right col-xs-2",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.goToStep(_vm.currentStep - 1)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-arrow-right" })]
                            )
                          : _vm._e()
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("main", { staticClass: "col-xs-12" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "wraper-main-contents row" },
                            [
                              _vm.currentStep == 1
                                ? _c("loginPage")
                                : _vm.currentStep == 2
                                  ? _c("ForgotPassword")
                                  : _vm.currentStep == 3
                                    ? _c("VerifyCode")
                                    : _vm._e()
                            ],
                            1
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(0)
                ])
              ])
            ])
          ])
        ])
      : _c("div", [
          _c("div", { staticClass: "loading-container" }, [
            _c("div", { staticClass: "image-wrapper" }, [
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
                  ]
                },
                [
                  _c("transition", [
                    _c("img", {
                      attrs: { src: "", alt: "alt" },
                      on: { load: _vm.ImageLoaded }
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-loader text-muted" }, [
                _vm._v("... در حال انتقال به پنل کاربری")
              ]),
              _vm._v(" "),
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
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "main-content-footer col-xs-12" }, [
      _c("div", { staticClass: "footer-content row" }, [
        _c("i", { staticClass: "fa fa-star" }),
        _vm._v(
          "\n                فرصت های جدید را خلق کنید و در زمان و هزینه صرفه جویی کنید\n              "
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
    require("vue-hot-reload-api")      .rerender("data-v-ba0d9948", module.exports)
  }
}

/***/ })

});