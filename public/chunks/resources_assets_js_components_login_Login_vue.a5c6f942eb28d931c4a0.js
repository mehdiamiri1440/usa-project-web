(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_components_login_Login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_steps_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_steps/login_page */ "./resources/assets/js/components/login/login_steps/login_page.vue");
/* harmony import */ var _login_steps_forgot_password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_steps/forgot_password */ "./resources/assets/js/components/login/login_steps/forgot_password.vue");
/* harmony import */ var _login_steps_verify_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login_steps/verify_code */ "./resources/assets/js/components/login/login_steps/verify_code.vue");
/* harmony import */ var device_uuid_lib_device_uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! device-uuid/lib/device-uuid */ "./node_modules/device-uuid/lib/device-uuid.js");
/* harmony import */ var device_uuid_lib_device_uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(device_uuid_lib_device_uuid__WEBPACK_IMPORTED_MODULE_3__);
// import { eventBus } from "../../router/router";




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    loginPage: _login_steps_login_page__WEBPACK_IMPORTED_MODULE_0__.default,
    ForgotPassword: _login_steps_forgot_password__WEBPACK_IMPORTED_MODULE_1__.default,
    VerifyCode: _login_steps_verify_code__WEBPACK_IMPORTED_MODULE_2__.default
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
      eventBus.$emit("isLoading", false);
    },
    goToStep: function goToStep(step) {
      this.currentStep = step;
      this.scrollToTop();
    },
    doLogin: function doLogin() {
      var self = this;
      self.loginBtnLoading = true;
      var deviceInfo = new (device_uuid_lib_device_uuid__WEBPACK_IMPORTED_MODULE_3___default().DeviceUUID)();
      var deviceId = null;

      if (deviceInfo.get()) {
        deviceId = deviceInfo.get();
      }

      axios.post("/dologin", {
        phone: this.step1.phone,
        password: this.step1.password,
        device_id: deviceId
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
            self.registerComponentExceptions("Login-page: User does not have confirmed profile record", true); // window.location.href = "/seller/profile"; // Edit Profile Page
          }
        } else {
          self.loginBtnLoading = false;
          self.showMsg = true;
          self.errors = [];
          self.step1.msg = response.data.msg;
          self.registerComponentExceptions("Login-page: Validation error for user credentials in login page");
        }
      })["catch"](function (err) {
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
      })["catch"](function (err) {
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
          eventBus.$emit("modal", "passwordResetSuccess");
          self.currentStep = 1;
          self.createPassword = false;
        } else {
          self.errors = [];
          self.errors.verification_code = "کد اشتباه است یا منقضی شده";
          self.createPassword = false;
        }
      })["catch"](function (err) {
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
          this.$router.push({
            path: pathname
          });
          eventBus.$emit("ChatInfo", _contact);
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
        })["catch"](function (err) {//
        });
        localStorage.setItem("showSnapShot", true);
        localStorage.userRoute = JSON.stringify("buyer/register-request"); // test

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
        })["catch"](function (err) {//
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
    gtag("config", "UA-129398000-1", {
      page_path: "/login"
    });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
      this.$parent.errors.phone = ""; // if (this.phoneNumber.length >= 11) {

      this.phoneNumber = this.phoneNumber.substring(0, 11);
      this.$parent.step1.phone = this.phoneNumber; // }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=template&id=ba0d9948&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=template&id=ba0d9948&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-ba0d9948");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-ba0d9948");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  id: "main",
  "class": "container"
};
var _hoisted_3 = {
  "class": "main-wrapper col-xs-12"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "main-contents"
};
var _hoisted_6 = {
  "class": "main-content-header col-xs-12"
};
var _hoisted_7 = {
  "class": "row"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", {
  "class": "arrow-left col-xs-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <i class=\"fa fa-arrow-left\"></i> ")], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "col-xs-8"
};
var _hoisted_10 = {
  key: 0
};
var _hoisted_11 = {
  key: 1
};
var _hoisted_12 = {
  key: 2
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-arrow-right"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = {
  "class": "col-xs-12"
};
var _hoisted_15 = {
  "class": "row"
};
var _hoisted_16 = {
  "class": "col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"
};
var _hoisted_17 = {
  "class": "wraper-main-contents row"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("footer", {
  "class": "main-content-footer col-xs-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "footer-content row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-star"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" فرصت های جدید را خلق کنید و در زمان و هزینه صرفه جویی کنید ")])], -1
/* HOISTED */
);

var _hoisted_19 = {
  key: 1
};
var _hoisted_20 = {
  "class": "loading-container"
};
var _hoisted_21 = {
  "class": "image-wrapper"
};

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "text-loader text-muted"
}, "... در حال انتقال به پنل کاربری", -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "lds-ring"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, null, -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, null, -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, null, -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, null, -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_loginPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loginPage");

  var _component_ForgotPassword = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ForgotPassword");

  var _component_VerifyCode = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VerifyCode");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [!_ctx.loginCheckerLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("header", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h1", _hoisted_9, [_ctx.currentStep == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_10, "ورود به باسکول")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.currentStep == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_11, "بازیابی کلمه عبور")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.currentStep == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _ctx.currentStep != 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("a", {
    key: 0,
    href: "#",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.goToStep(_ctx.currentStep - 1);
    }, ["prevent"])),
    "class": "arrow-right col-xs-2"
  }, [_hoisted_13])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("main", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_17, [_ctx.currentStep == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_loginPage, {
    key: 0
  })) : _ctx.currentStep == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ForgotPassword, {
    key: 1
  })) : _ctx.currentStep == 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_VerifyCode, {
    key: 2
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), _hoisted_18])])])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, null, {
    "default": _withId(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
        src: "",
        onLoad: _cache[2] || (_cache[2] = function () {
          return $options.ImageLoaded && $options.ImageLoaded.apply($options, arguments);
        }),
        alt: "alt"
      }, null, 32
      /* HYDRATE_EVENTS */
      )];
    }),
    _: 1
    /* STABLE */

  })], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, _ctx.isImageLoad]]), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_23, [_hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !_ctx.isImageLoad]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <span v-text=\"alt\" class=\"lds-ring-alt\"></span> ")])])]))]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=template&id=04186acc&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=template&id=04186acc&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-04186acc");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-04186acc");

var _hoisted_1 = {
  "class": "form-contents col-xs-12"
};
var _hoisted_2 = {
  "class": "row"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "phone-number"
}, "لطفا شماره موبایل خود را وارد کنید", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "input-wrapper user-phone-number-wrapper"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-phone-square-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "error-message"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "small-description"
}, "پس از وارد کردن شماره موبایل ما یک کد برای شما ارسال میکنیم تا از صحت شماره وارد شده اطمینان حاصل کنیم", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br")], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [_hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.phoneNumber = $event;
    }),
    "class": [{
      error: _ctx.$parent.errors[0],
      active: _ctx.phoneNumber.length >= 11
    }, "dire"],
    id: "phone-number",
    type: "tel",
    placeholder: "شماره موبایل",
    pattern: "[0-9]*"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.phoneNumber]]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_7, [_ctx.$parent.errors ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.errors[0])
  }, null, 8
  /* PROPS */
  , ["textContent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": ["submit-button disabled", {
      active: _ctx.phoneNumber.length >= 11 && _ctx.$parent.step2.sendCode
    }],
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getPhoneNumber();
    }, ["prevent"])),
    disabled: !_ctx.$parent.step2.sendCode
  }, " ارسال کد تایید ", 10
  /* CLASS, PROPS */
  , ["disabled"])])])]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=template&id=e1320fc0&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=template&id=e1320fc0&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _img_banner_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/banner-arrow.png */ "./resources/assets/js/components/login/login_steps/img/banner-arrow.png");



var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-e1320fc0");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-e1320fc0");

var _hoisted_1 = {
  "class": "error-message"
};
var _hoisted_2 = {
  "class": "form-contents col-xs-12"
};
var _hoisted_3 = {
  "class": "row"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "phone-number"
}, "شماره موبایل", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "input-wrapper user-phone-number-wrapper"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-phone-square-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "error-message"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  "for": "phone-number"
}, "کلمه عبور", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "input-wrapper user-phone-number-wrapper"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fa fa-lock"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "error-message"
};
var _hoisted_12 = {
  key: 0,
  "class": "fas fa-circle-notch fa-spin"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ورود ");

var _hoisted_14 = {
  "class": "register-form"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, "برای ثبت نام در باسکول بر روی دکمه زیر کلیک کنید"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  src: _img_banner_arrow_png__WEBPACK_IMPORTED_MODULE_1__.default
})], -1
/* HOISTED */
);

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ثبت نام در باسکول");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" \t\t <h2 class=\"title-contents\">\n\t\t \tورود به سامانه\n\t\t </h2>\n    "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_1, [_ctx.$parent.showMsg ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.step1.msg)
  }, null, 8
  /* PROPS */
  , ["textContent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.phoneNumber = $event;
    }),
    "class": [{
      error: _ctx.$parent.errors.phone,
      active: _ctx.phoneNumber.length >= 11
    }, "dire"],
    id: "phone-number",
    type: "tel",
    placeholder: "شماره موبایل",
    pattern: "[0-9]*"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.phoneNumber]]), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_7, [_ctx.$parent.errors.phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.errors.phone[0])
  }, null, 8
  /* PROPS */
  , ["textContent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.password = $event;
    }),
    "class": [{
      error: _ctx.$parent.errors.password,
      active: _ctx.password.length
    }, "dire"],
    id: "password",
    type: "password",
    placeholder: "کلمه عبور را وارد کنید"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.password]]), _hoisted_10]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_11, [_ctx.$parent.errors.password ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.errors.password[0])
  }, null, 8
  /* PROPS */
  , ["textContent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("a", {
    href: "#",
    "class": "text-green",
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return _ctx.$parent.goToStep(2);
    }, ["prevent"]))
  }, "رمز عبور خود را فراموش کرده اید؟"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": ["submit-button disabled", {
      active: _ctx.phoneNumber.length >= 11 && _ctx.password.length
    }],
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.doLogin();
    }, ["prevent"]))
  }, [_ctx.phoneNumber.length >= 11 && _ctx.password.length && _ctx.$parent.loginBtnLoading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_13], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/register",
    "class": "register-button vertical-padding"
  }, {
    "default": _withId(function () {
      return [_hoisted_16];
    }),
    _: 1
    /* STABLE */

  })])])])]);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=template&id=14ebd508&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=template&id=14ebd508&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
var _this = undefined;



var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-14ebd508");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-14ebd508");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "title-contents"
}, "تایید موبایل", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "form-contents col-xs-12"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "for": "verify-code"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" کد ارسال شده به شماره ی ");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" را وارد کنید ");

var _hoisted_8 = {
  "class": "input-wrapper verify-code-wrapper"
};
var _hoisted_9 = {
  "class": "row"
};
var _hoisted_10 = {
  "class": "col-xs-3"
};
var _hoisted_11 = {
  "class": "col-xs-3"
};
var _hoisted_12 = {
  "class": "col-xs-3"
};
var _hoisted_13 = {
  "class": "col-xs-3"
};
var _hoisted_14 = {
  "class": "error-message"
};
var _hoisted_15 = {
  "class": "timer-wrapper"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br")], -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1, _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
    "class": "text-green",
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.step1.phone)
  }, null, 8
  /* PROPS */
  , ["textContent"]), _hoisted_7]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.verifycode1 = $event;
    }),
    "class": [{
      'error': _this.$parent.errors.verification_code,
      'active': $data.verifycode1.length
    }, "dire"],
    id: "verify-code-1",
    type: "number",
    placeholder: "_",
    max: "9",
    onfocus: "this.select();",
    pattern: "[0-9]*",
    onKeyup: _cache[2] || (_cache[2] = function ($event) {
      return $options.keymonitor($event, 2);
    })
  }, null, 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.verifycode1]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.verifycode2 = $event;
    }),
    "class": [{
      'error': _ctx.$parent.errors.verification_code,
      'active': $data.verifycode2.length
    }, "dire"],
    id: "verify-code-2",
    type: "number",
    placeholder: "_",
    max: "9",
    onfocus: "this.select();",
    pattern: "[0-9]*",
    onKeyup: _cache[4] || (_cache[4] = function ($event) {
      return $options.keymonitor($event, 3);
    })
  }, null, 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.verifycode2]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.verifycode3 = $event;
    }),
    "class": [{
      'error': _ctx.$parent.errors.verification_code,
      'active': $data.verifycode3.length
    }, "dire"],
    id: "verify-code-3",
    type: "number",
    placeholder: "_",
    max: "9",
    onfocus: "this.select();",
    pattern: "[0-9]*",
    onKeyup: _cache[6] || (_cache[6] = function ($event) {
      return $options.keymonitor($event, 4);
    })
  }, null, 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.verifycode3]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.verifycode4 = $event;
    }),
    "class": [{
      'error': _ctx.$parent.errors.verification_code,
      'active': $data.verifycode4.length
    }, "dire"],
    id: "verify-code-4",
    type: "number",
    placeholder: "_",
    max: "9",
    onfocus: "this.select();",
    pattern: "[0-9]*",
    onKeyup: _cache[8] || (_cache[8] = function ($event) {
      return $options.keymonitor($event, 5);
    })
  }, null, 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.verifycode4]])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_14, [_ctx.$parent.errors.verification_code ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$parent.errors.verification_code)
  }, null, 8
  /* PROPS */
  , ["textContent"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": "timer-button",
    type: "button",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return $options.reSendCode();
    }),
    disabled: _ctx.$parent.step2.reSendCode === false,
    value: _ctx.$parent.step2.timeCounterDown
  }, "ارسال مجدد کد فعال سازی", 8
  /* PROPS */
  , ["disabled", "value"])]), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
    "class": ["submit-button disabled", {
      'active': $data.currentCode.length == 4 && !_ctx.$parent.createPassword
    }],
    onClick: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.getVerificationCode();
    }, ["prevent"])),
    disabled: _ctx.$parent.createPassword
  }, "بررسی کد", 10
  /* CLASS, PROPS */
  , ["disabled"])])])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-ba0d9948],\nspan[data-v-ba0d9948] {\n  line-height: 1.5;\n}\n.text-loader[data-v-ba0d9948] {\n  display: block;\n  width: 100%;\n  text-align: center;\n  font-size: 16px;\n  position: absolute;\n  bottom: 37%;\n  right: 10px;\n}\n.loading-container[data-v-ba0d9948] {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  z-index: 1100;\n  position: fixed;\n}\n#main-content[data-v-ba0d9948] {\n  padding-bottom: 0;\n}\n.error-message[data-v-ba0d9948] {\n  direction: rtl;\n  font-size: 11px;\n}\n#main[data-v-ba0d9948] {\n  margin-top: 21px;\n  background: #f9f9f9;\n\n  height: 100%;\n\n  position: relative;\n\n  width: 100%;\n  overflow: hidden;\n  min-height: 768px;\n}\ninput[type=\"number\"][data-v-ba0d9948] {\n  -moz-appearance: textfield;\n}\ninput[type=\"number\"][data-v-ba0d9948]::-webkit-inner-spin-button,\ninput[type=\"number\"][data-v-ba0d9948]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.main-wrapper[data-v-ba0d9948] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  max-width: 620px;\n}\n.wraper-main-contents[data-v-ba0d9948] {\n  text-align: right;\n}\n\n/*progressbar styles*/\n.wrapper-progressbar[data-v-ba0d9948] {\n  position: relative;\n}\n.progressbar-items[data-v-ba0d9948] {\n  display: flex;\n  justify-content: space-between;\n  direction: rtl;\n  position: relative;\n}\n.progrees-item[data-v-ba0d9948] {\n  text-align: center;\n  color: #bebebe;\n}\n.progrees-item p[data-v-ba0d9948] {\n  font-size: 12px;\n}\n.progrees-item span[data-v-ba0d9948] {\n  width: 20px;\n  height: 20px;\n  font-size: 13px;\n  background: #bebebe;\n  border-radius: 50px;\n  color: #fff;\n  display: inline-block;\n  margin-bottom: 6px;\n  padding-top: 1px;\n}\n.lds-ring[data-v-ba0d9948] {\n  display: inline-block;\n\n  position: absolute;\n\n  width: 64px;\n\n  height: 64px;\n\n  left: 50%;\n\n  top: 50%;\n\n  transform: translate(-50%, -50%);\n}\n.lds-ring div[data-v-ba0d9948] {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 5px solid #00c569;\n  border-radius: 50%;\n  -webkit-animation: lds-ring-ba0d9948 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring-ba0d9948 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #00c569 transparent transparent transparent;\n}\n.lds-ring-alt[data-v-ba0d9948] {\n  display: block;\n  margin-top: 50px;\n  direction: rtl;\n  text-align: center;\n}\n.lds-ring div[data-v-ba0d9948]:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div[data-v-ba0d9948]:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div[data-v-ba0d9948]:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring-ba0d9948 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes lds-ring-ba0d9948 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.progrees-item.active[data-v-ba0d9948] {\n  color: #333;\n}\n.progrees-item.active p[data-v-ba0d9948] {\n  font-weight: bold;\n}\n.progrees-item.active span[data-v-ba0d9948] {\n  background: #00c569;\n}\n.custom-progressbar[data-v-ba0d9948] {\n  display: block;\n  height: 3px;\n  background: #bebebe;\n  right: 20px;\n  left: 21px;\n  position: absolute;\n  top: 9px;\n  z-index: 0;\n}\n.custom-progressbar.active[data-v-ba0d9948] {\n  background: #00c569;\n  width: 0;\n  left: initial;\n}\n.custom-progressbar .progress-bar[data-v-ba0d9948] {\n  background: #00c569;\n  float: right;\n}\n\n/*main contents styles */\n.main-contents[data-v-ba0d9948] {\n  background: #fff;\n  border-radius: 9px;\n  overflow: hidden;\n  margin-top: 16px;\n  box-shadow: 0 0 10px #c5c5c5;\n  height: 500px;\n}\n\n/*main content headers styles*/\n.main-content-header[data-v-ba0d9948] {\n  direction: rtl;\n  text-align: center;\n  background: #00c569;\n  color: #fff;\n  padding: 22px 0;\n}\n.main-content-header a[data-v-ba0d9948] {\n  color: #fff;\n  position: relative;\n  right: 0;\n  transition: 300ms;\n}\n.main-content-header a[data-v-ba0d9948],\n.main-content-header h1[data-v-ba0d9948] {\n  font-size: 23px;\n}\n.main-content-header a[data-v-ba0d9948]:hover {\n  transition: 300ms;\n}\n.main-content-header a.arrow-left[data-v-ba0d9948]:hover {\n  right: 5px;\n}\n.main-content-header a.arrow-right[data-v-ba0d9948]:hover {\n  right: -5px;\n}\n\n/*main content footer style*/\n.main-content-footer[data-v-ba0d9948] {\n  position: absolute;\n\n  bottom: 0;\n}\n.footer-content[data-v-ba0d9948] {\n  direction: rtl;\n  text-align: center;\n  background: #f6f6f6;\n  font-size: 11px;\n  padding: 5px;\n  color: #333;\n}\n.footer-content i[data-v-ba0d9948] {\n  font-size: 12px;\n  color: #00c569;\n}\n@media screen and (max-width: 767px) {\n#main[data-v-ba0d9948] {\n    padding: 0;\n}\n.progrees-item p[data-v-ba0d9948] {\n    display: none;\n}\n.main-wrapper[data-v-ba0d9948] {\n    top: calc(50% - 30px);\n}\n.progressbar-items[data-v-ba0d9948] {\n    padding: 0 15px;\n}\n.main-contents[data-v-ba0d9948] {\n    border-radius: 0;\n}\n.main-content-header[data-v-ba0d9948] {\n    direction: rtl;\n    text-align: center;\n    background: none;\n    color: #333;\n    padding: 14px 0;\n    border-bottom: 2px solid #00c569;\n}\n.main-content-header a[data-v-ba0d9948],\n  .main-content-header h1[data-v-ba0d9948] {\n    font-size: 17px;\n}\n.main-content-header a[data-v-ba0d9948] {\n    color: #333;\n    text-align: left;\n}\n.title-contents[data-v-ba0d9948] {\n    font-weight: bold;\n    font-size: 16px;\n}\n.form-contents label[data-v-ba0d9948] {\n    font-size: 12px;\n}\n.small-description[data-v-ba0d9948] {\n    font-size: 11px;\n\n    font-weight: bold;\n}\ninput[data-v-ba0d9948] {\n    font-size: 13px;\n    padding: 8px 15px 9px 35px;\n}\n}\n@media screen and (max-width: 370px) {\n.form-contents .col-xs-10[data-v-ba0d9948] {\n    padding: 0;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-04186acc],\nspan[data-v-04186acc] {\n  line-height: 1.5;\n}\n.submit-button[data-v-04186acc] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 0 9px;\n  transition: 300ms;\n  cursor: default;\n}\n.submit-button.active[data-v-04186acc] {\n  background: #00c569;\n  cursor: pointer;\n}\n.title-contents[data-v-04186acc] {\n  font-weight: bold;\n  font-size: 19px;\n}\n.form-contents[data-v-04186acc] {\n  margin: 5px auto;\n}\n.form-contents lable[data-v-04186acc] {\n  font-size: 12px;\n}\n.input-wrapper[data-v-04186acc] {\n  margin: 6px auto 4px;\n  position: relative;\n}\ninput[data-v-04186acc] {\n  box-shadow: none !important;\n}\ninput[data-v-04186acc] {\n  width: 100%;\n\n  border-radius: 4px;\n\n  border: 1px solid;\n\n  padding: 8px 15px 9px 45px;\n\n  color: #bebebe;\n\n  direction: ltr;\n\n  transition: 300ms;\n}\n.input-wrapper i[data-v-04186acc] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  transition: 300ms;\n}\ninput[data-v-04186acc]:focus,\ninput:focus + i[data-v-04186acc] {\n  color: #333;\n}\ninput.active[data-v-04186acc] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-04186acc] {\n  color: #00c569;\n}\ninput.active[data-v-04186acc]:focus,\ninput.active:focus + i[data-v-04186acc],\ninput.active + i[data-v-04186acc] {\n  border-color: #00c569;\n}\ninput.error[data-v-04186acc] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-04186acc] {\n  color: #e41c38;\n}\ninput.error[data-v-04186acc]:focus,\ninput.error:focus + i[data-v-04186acc] {\n  border-color: #e41c38;\n}\n.error-message[data-v-04186acc] {\n  text-align: center;\n\n  color: #e41c38;\n\n  font-weight: bold;\n\n  height: 25px;\n\n  margin-bottom: 5px;\n\n  direction: rtl;\n\n  font-size: 12px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-e1320fc0],\nspan[data-v-e1320fc0] {\n  line-height: 1.5;\n}\na.text-green[data-v-e1320fc0] {\n  color: #00c569;\n\n  margin: 10px auto;\n\n  display: inline-block;\n}\n.submit-button[data-v-e1320fc0],\n.register-button[data-v-e1320fc0] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 0 9px;\n  transition: 300ms;\n  cursor: default;\n}\n.submit-button.active[data-v-e1320fc0] {\n  background: #00c569;\n  cursor: pointer;\n}\n.title-contents[data-v-e1320fc0] {\n  font-weight: bold;\n  font-size: 19px;\n}\n.form-contents[data-v-e1320fc0] {\n  margin: 5px auto;\n}\n.form-contents lable[data-v-e1320fc0] {\n  font-size: 12px;\n}\n.input-wrapper[data-v-e1320fc0] {\n  margin: 6px auto 4px;\n  position: relative;\n}\ninput[data-v-e1320fc0] {\n  box-shadow: none !important;\n}\ninput[data-v-e1320fc0] {\n  width: 100%;\n\n  border-radius: 4px;\n\n  border: 1px solid;\n\n  padding: 8px 15px 9px 45px;\n\n  color: #bebebe;\n\n  direction: ltr;\n\n  transition: 300ms;\n}\n.input-wrapper i[data-v-e1320fc0] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  transition: 300ms;\n}\ninput[data-v-e1320fc0]:focus,\ninput:focus + i[data-v-e1320fc0] {\n  color: #333;\n}\ninput.active[data-v-e1320fc0] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-e1320fc0] {\n  color: #00c569;\n}\ninput.active[data-v-e1320fc0]:focus,\ninput.active:focus + i[data-v-e1320fc0],\ninput.active + i[data-v-e1320fc0] {\n  border-color: #00c569;\n}\ninput.error[data-v-e1320fc0] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-e1320fc0] {\n  color: #e41c38;\n}\ninput.error[data-v-e1320fc0]:focus,\ninput.error:focus + i[data-v-e1320fc0] {\n  border-color: #e41c38;\n}\n.error-message[data-v-e1320fc0] {\n  text-align: center;\n\n  color: #e41c38;\n\n  font-weight: bold;\n\n  height: 15px;\n\n  direction: rtl;\n\n  font-size: 12px;\n}\n.register-form[data-v-e1320fc0] {\n  overflow: hidden;\n  direction: rtl;\n}\n.register-form p[data-v-e1320fc0] {\n  margin: 4px 0;\n\n  font-size: 13px;\n\n  font-weight: bold;\n\n  text-align: center;\n}\n.register-form p img[data-v-e1320fc0] {\n  width: 23px;\n\n  position: relative;\n\n  top: 8px;\n}\n.register-form p span[data-v-e1320fc0] {\n  margin-left: 10px;\n}\n.register-form .register-button[data-v-e1320fc0] {\n  background: #00c569;\n  cursor: pointer;\n  display: block;\n  text-align: center;\n}\n@media screen and (max-width: 430px) {\n.register-form p img[data-v-e1320fc0] {\n    width: 20px;\n    position: relative;\n    top: 7px;\n}\n.form-contents .col-xs-3[data-v-e1320fc0],\n  .form-contents .col-xs-6[data-v-e1320fc0] {\n    padding: 0 5px;\n}\n.register-form p span[data-v-e1320fc0] {\n    margin-left: 0;\n}\n}\n.vertical-padding[data-v-e1320fc0] {\n  padding: 12px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\np[data-v-14ebd508], span[data-v-14ebd508]{\n    line-height: 1.5;\n}\n.submit-button[data-v-14ebd508] {\n  background: #dddddd;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 0 9px;\n  transition: 300ms;\n  cursor: default;\n}\n.submit-button.active[data-v-14ebd508] {\n  background: #00c569;\n  cursor: pointer;\n}\n.timer-button[data-v-14ebd508] {\n  background: none;\n\n  border: 1px solid;\n\n  color: #00c569;\n\n  border-radius: 4px;\n\n  padding: 3px 10px;\n\n  margin-bottom: 9px;\n  transition: 300ms;\n  cursor: pointer;\n}\n.timer-button[data-v-14ebd508]:hover {\n  background: #00c569;\n\n  border: none;\n  transition: 300ms;\n  color: #fff;\n}\n.text-green[data-v-14ebd508] {\n  color: #00c569;\n}\n.title-contents[data-v-14ebd508] {\n  font-weight: bold;\n  font-size: 19px;\n}\n.form-contents[data-v-14ebd508] {\n  margin: 5px auto;\n}\n.form-contents lable[data-v-14ebd508] {\n  font-size: 12px;\n}\n.input-wrapper[data-v-14ebd508] {\n  margin: 13px auto 4px;\n  position: relative;\n}\n.timer-wrapper[data-v-14ebd508] {\n  height: 38px;\n  text-align: center;\n  font-size: 12px;\n}\ninput[data-v-14ebd508] {\n  width: 100%;\n\n  border-radius: 4px;\n\n  border: 1px solid;\n\n  padding: 8px 15px 9px 15px;\n\n  color: #bebebe;\n\n  direction: ltr;\n\n  transition: 300ms;\n\n  text-align: center;\n}\n.input-wrapper i[data-v-14ebd508] {\n  display: inline-block;\n\n  position: absolute;\n\n  left: 15px;\n\n  font-size: 20px;\n\n  color: #bebebe;\n\n  top: 9px;\n\n  transition: 300ms;\n}\ninput.active[data-v-14ebd508] {\n  border-color: #00c569;\n  color: #333;\n}\ninput.active + i[data-v-14ebd508] {\n  color: #00c569;\n}\ninput.active[data-v-14ebd508]:focus,\ninput.active:focus + i[data-v-14ebd508],\ninput.active + i[data-v-14ebd508] {\n  border-color: #00c569;\n}\ninput.error[data-v-14ebd508] {\n  color: #333;\n  border-color: #e41c38;\n}\ninput.error + i[data-v-14ebd508] {\n  color: #e41c38;\n}\ninput.error[data-v-14ebd508]:focus,\ninput.error:focus + i[data-v-14ebd508] {\n  border-color: #e41c38;\n}\n.error-message[data-v-14ebd508] {\n  text-align: center;\n\n  color: #e41c38;\n\n  font-weight: bold;\n\n  height: 25px;\n\n  margin-bottom: 5px;\n\n  direction: rtl;\n\n  font-size: 12px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/device-uuid/lib/device-uuid.js":
/*!*****************************************************!*\
  !*** ./node_modules/device-uuid/lib/device-uuid.js ***!
  \*****************************************************/
/***/ (function() {

/*!
 * device-uuid.js v1.0.4 (https://github.com/biggora/device-uuid/)
 * Copyright 2016-2017 Alexey Gordeyev
 * Licensed under MIT (https://github.com/biggora/device-uuid/blob/master/LICENSE)
 */
/*global
 screen, window, navigator
 */
(function (exports) {
    'use strict';

    var BOTS = [
        '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
        'googlebot',
        'baiduspider',
        'gurujibot',
        'yandexbot',
        'slurp',
        'msnbot',
        'bingbot',
        'facebookexternalhit',
        'linkedinbot',
        'twitterbot',
        'slackbot',
        'telegrambot',
        'applebot',
        'pingdom',
        'tumblr ',
        'Embedly',
        'spbot'
    ];
    var IS_BOT_REGEXP = new RegExp('^.*(' + BOTS.join('|') + ').*$');

    var DeviceUUID = function (options) {
        options = options ? options : {};
        var defOptions = {
            version: false,
            language: false,
            platform: true,
            os: true,
            pixelDepth: true,
            colorDepth: true,
            resolution: false,
            isAuthoritative: true,
            silkAccelerated: true,
            isKindleFire: true,
            isDesktop: true,
            isMobile: true,
            isTablet: true,
            isWindows: true,
            isLinux: true,
            isLinux64: true,
            isChromeOS: true,
            isMac: true,
            isiPad: true,
            isiPhone: true,
            isiPod: true,
            isAndroid: true,
            isSamsung: true,
            isSmartTV: true,
            isRaspberry: true,
            isBlackberry: true,
            isTouchScreen: true,
            isOpera: false,
            isIE: false,
            isEdge: false,
            isIECompatibilityMode: false,
            isSafari: false,
            isFirefox: false,
            isWebkit: false,
            isChrome: false,
            isKonqueror: false,
            isOmniWeb: false,
            isSeaMonkey: false,
            isFlock: false,
            isAmaya: false,
            isPhantomJS: false,
            isEpiphany: false,
            source: false,
            cpuCores: false
        };
        for (var key in options) {
            if (options.hasOwnProperty(key) && typeof defOptions[key] !== 'undefined') {
                defOptions[key] = options[key];
            }
        }
        this.options = defOptions;
        this.version = '1.0.0';
        this._Versions = {
            Edge: /Edge\/([\d\w\.\-]+)/i,
            Firefox: /firefox\/([\d\w\.\-]+)/i,
            IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
            Chrome: /chrome\/([\d\w\.\-]+)/i,
            Chromium: /(?:chromium|crios)\/([\d\w\.\-]+)/i,
            Safari: /version\/([\d\w\.\-]+)/i,
            Opera: /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,
            Ps3: /([\d\w\.\-]+)\)\s*$/i,
            Psp: /([\d\w\.\-]+)\)?\s*$/i,
            Amaya: /amaya\/([\d\w\.\-]+)/i,
            SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
            OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
            Flock: /flock\/([\d\w\.\-]+)/i,
            Epiphany: /epiphany\/([\d\w\.\-]+)/i,
            WinJs: /msapphost\/([\d\w\.\-]+)/i,
            PhantomJS: /phantomjs\/([\d\w\.\-]+)/i,
            UC: /UCBrowser\/([\d\w\.]+)/i
        };
        this._Browsers = {
            Edge: /edge/i,
            Amaya: /amaya/i,
            Konqueror: /konqueror/i,
            Epiphany: /epiphany/i,
            SeaMonkey: /seamonkey/i,
            Flock: /flock/i,
            OmniWeb: /omniweb/i,
            Chromium: /chromium|crios/i,
            Chrome: /chrome/i,
            Safari: /safari/i,
            IE: /msie|trident/i,
            Opera: /opera|OPR/i,
            PS3: /playstation 3/i,
            PSP: /playstation portable/i,
            Firefox: /firefox/i,
            WinJs: /msapphost/i,
            PhantomJS: /phantomjs/i,
            UC: /UCBrowser/i
        };
        this._OS = {
            Windows10: /windows nt 10\.0/i,
            Windows81: /windows nt 6\.3/i,
            Windows8: /windows nt 6\.2/i,
            Windows7: /windows nt 6\.1/i,
            UnknownWindows: /windows nt 6\.\d+/i,
            WindowsVista: /windows nt 6\.0/i,
            Windows2003: /windows nt 5\.2/i,
            WindowsXP: /windows nt 5\.1/i,
            Windows2000: /windows nt 5\.0/i,
            WindowsPhone8: /windows phone 8\./,
            OSXCheetah: /os x 10[._]0/i,
            OSXPuma: /os x 10[._]1(\D|$)/i,
            OSXJaguar: /os x 10[._]2/i,
            OSXPanther: /os x 10[._]3/i,
            OSXTiger: /os x 10[._]4/i,
            OSXLeopard: /os x 10[._]5/i,
            OSXSnowLeopard: /os x 10[._]6/i,
            OSXLion: /os x 10[._]7/i,
            OSXMountainLion: /os x 10[._]8/i,
            OSXMavericks: /os x 10[._]9/i,
            OSXYosemite: /os x 10[._]10/i,
            OSXElCapitan: /os x 10[._]11/i,
            OSXSierra: /os x 10[._]12/i,
            Mac: /os x/i,
            Linux: /linux/i,
            Linux64: /linux x86_64/i,
            ChromeOS: /cros/i,
            Wii: /wii/i,
            PS3: /playstation 3/i,
            PSP: /playstation portable/i,
            iPad: /\(iPad.*os (\d+)[._](\d+)/i,
            iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
            Bada: /Bada\/(\d+)\.(\d+)/i,
            Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i
        };
        this._Platform = {
            Windows: /windows nt/i,
            WindowsPhone: /windows phone/i,
            Mac: /macintosh/i,
            Linux: /linux/i,
            Wii: /wii/i,
            Playstation: /playstation/i,
            iPad: /ipad/i,
            iPod: /ipod/i,
            iPhone: /iphone/i,
            Android: /android/i,
            Blackberry: /blackberry/i,
            Samsung: /samsung/i,
            Curl: /curl/i
        };

        this.DefaultAgent = {
            isAuthoritative: true,
            isMobile: false,
            isTablet: false,
            isiPad: false,
            isiPod: false,
            isiPhone: false,
            isAndroid: false,
            isBlackberry: false,
            isOpera: false,
            isIE: false,
            isEdge: false,
            isIECompatibilityMode: false,
            isSafari: false,
            isFirefox: false,
            isWebkit: false,
            isChrome: false,
            isKonqueror: false,
            isOmniWeb: false,
            isSeaMonkey: false,
            isFlock: false,
            isAmaya: false,
            isPhantomJS: false,
            isEpiphany: false,
            isDesktop: false,
            isWindows: false,
            isLinux: false,
            isLinux64: false,
            isMac: false,
            isChromeOS: false,
            isBada: false,
            isSamsung: false,
            isRaspberry: false,
            isBot: false,
            isCurl: false,
            isAndroidTablet: false,
            isWinJs: false,
            isKindleFire: false,
            isSilk: false,
            isCaptive: false,
            isSmartTV: false,
            isUC: false,
            isTouchScreen: false,
            silkAccelerated: false,
            colorDepth: -1,
            pixelDepth: -1,
            resolution: [],
            cpuCores: -1,
            language: 'unknown',
            browser: 'unknown',
            version: 'unknown',
            os: 'unknown',
            platform: 'unknown',
            geoIp: {},
            source: '',
            hashInt: function (string) {
                var hash = 0, i, chr, len;
                if (string.length === 0) { return hash; }
                for (i = 0, len = string.length; i < len; i++) {
                    chr = string.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0;
                }
                return hash;
            },
            hashMD5: function (string) {
                function rotateLeft(lValue, iShiftBits) {
                    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
                }

                function addUnsigned(lX, lY) {
                    var lX4, lY4, lX8, lY8, lResult;
                    lX8 = (lX & 0x80000000);
                    lY8 = (lY & 0x80000000);
                    lX4 = (lX & 0x40000000);
                    lY4 = (lY & 0x40000000);
                    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

                    if (lX4 & lY4) {
                        return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                    }
                    if (lX4 | lY4) {
                        if (lResult & 0x40000000) {
                            return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                        } else {
                            return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                        }
                    } else {
                        return (lResult ^ lX8 ^ lY8);
                    }
                }

                function gF(x, y, z) {
                    return (x & y) | ((~x) & z);
                }

                function gG(x, y, z) {
                    return (x & z) | (y & (~z));
                }

                function gH(x, y, z) {
                    return (x ^ y ^ z);
                }

                function gI(x, y, z) {
                    return (y ^ (x | (~z)));
                }

                function gFF(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gF(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function gGG(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gG(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function gHH(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gH(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function gII(a, b, c, d, x, s, ac) {
                    a = addUnsigned(a, addUnsigned(addUnsigned(gI(b, c, d), x), ac));
                    return addUnsigned(rotateLeft(a, s), b);
                }

                function convertToWordArray(string) {
                    var lWordCount;
                    var lMessageLength = string.length;
                    var lNumberOfWordsTemp1 = lMessageLength + 8;
                    var lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64;
                    var lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
                    var lWordArray = new Array(lNumberOfWords - 1);
                    var lBytePosition = 0;
                    var lByteCount = 0;

                    while (lByteCount < lMessageLength) {
                        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                        lBytePosition = (lByteCount % 4) * 8;
                        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
                        lByteCount++;
                    }

                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
                    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                    return lWordArray;
                }

                function wordToHex(lValue) {
                    var wordToHexValue = '', wordToHexValueTemp = '', lByte, lCount;
                    for (lCount = 0; lCount <= 3; lCount++) {
                        lByte = (lValue >>> (lCount * 8)) & 255;
                        wordToHexValueTemp = '0' + lByte.toString(16);
                        wordToHexValue = wordToHexValue + wordToHexValueTemp.substr(wordToHexValueTemp.length - 2, 2);
                    }
                    return wordToHexValue;
                }

                function utf8Encode(string) {
                    string = string.replace(/\r\n/g, '\n');
                    var utftext = '';

                    for (var n = 0; n < string.length; n++) {
                        var c = string.charCodeAt(n);
                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        } else if ((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        } else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }
                    }
                    return utftext;
                }

                var x = [];
                var k, AA, BB, CC, DD, a, b, c, d;
                var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
                var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
                var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
                var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
                string = utf8Encode(string);
                x = convertToWordArray(string);
                a = 0x67452301;
                b = 0xEFCDAB89;
                c = 0x98BADCFE;
                d = 0x10325476;

                for (k = 0; k < x.length; k += 16) {
                    AA = a;
                    BB = b;
                    CC = c;
                    DD = d;
                    a = gFF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
                    d = gFF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                    c = gFF(c, d, a, b, x[k + 2], S13, 0x242070DB);
                    b = gFF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                    a = gFF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
                    d = gFF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                    c = gFF(c, d, a, b, x[k + 6], S13, 0xA8304613);
                    b = gFF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                    a = gFF(a, b, c, d, x[k + 8], S11, 0x698098D8);
                    d = gFF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                    c = gFF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
                    b = gFF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                    a = gFF(a, b, c, d, x[k + 12], S11, 0x6B901122);
                    d = gFF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                    c = gFF(c, d, a, b, x[k + 14], S13, 0xA679438E);
                    b = gFF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                    a = gGG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
                    d = gGG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                    c = gGG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
                    b = gGG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                    a = gGG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
                    d = gGG(d, a, b, c, x[k + 10], S22, 0x2441453);
                    c = gGG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
                    b = gGG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                    a = gGG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
                    d = gGG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                    c = gGG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
                    b = gGG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                    a = gGG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
                    d = gGG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                    c = gGG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
                    b = gGG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                    a = gHH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
                    d = gHH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                    c = gHH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
                    b = gHH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                    a = gHH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
                    d = gHH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                    c = gHH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
                    b = gHH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                    a = gHH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
                    d = gHH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                    c = gHH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
                    b = gHH(b, c, d, a, x[k + 6], S34, 0x4881D05);
                    a = gHH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
                    d = gHH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                    c = gHH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
                    b = gHH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                    a = gII(a, b, c, d, x[k + 0], S41, 0xF4292244);
                    d = gII(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                    c = gII(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
                    b = gII(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                    a = gII(a, b, c, d, x[k + 12], S41, 0x655B59C3);
                    d = gII(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                    c = gII(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
                    b = gII(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                    a = gII(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
                    d = gII(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                    c = gII(c, d, a, b, x[k + 6], S43, 0xA3014314);
                    b = gII(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                    a = gII(a, b, c, d, x[k + 4], S41, 0xF7537E82);
                    d = gII(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                    c = gII(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
                    b = gII(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                    a = addUnsigned(a, AA);
                    b = addUnsigned(b, BB);
                    c = addUnsigned(c, CC);
                    d = addUnsigned(d, DD);
                }
                var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
                return temp.toLowerCase();
            }
        };

        this.Agent = {};

        this.getBrowser = function (string) {
            switch (true) {
                case this._Browsers.Edge.test(string):
                    this.Agent.isEdge = true;
                    return 'Edge';
                case this._Browsers.PhantomJS.test(string):
                    this.Agent.isPhantomJS = true;
                    return 'PhantomJS';
                case this._Browsers.Konqueror.test(string):
                    this.Agent.isKonqueror = true;
                    return 'Konqueror';
                case this._Browsers.Amaya.test(string):
                    this.Agent.isAmaya = true;
                    return 'Amaya';
                case this._Browsers.Epiphany.test(string):
                    this.Agent.isEpiphany = true;
                    return 'Epiphany';
                case this._Browsers.SeaMonkey.test(string):
                    this.Agent.isSeaMonkey = true;
                    return 'SeaMonkey';
                case this._Browsers.Flock.test(string):
                    this.Agent.isFlock = true;
                    return 'Flock';
                case this._Browsers.OmniWeb.test(string):
                    this.Agent.isOmniWeb = true;
                    return 'OmniWeb';
                case this._Browsers.Opera.test(string):
                    this.Agent.isOpera = true;
                    return 'Opera';
                case this._Browsers.Chromium.test(string):
                    this.Agent.isChrome = true;
                    return 'Chromium';
                case this._Browsers.Chrome.test(string):
                    this.Agent.isChrome = true;
                    return 'Chrome';
                case this._Browsers.Safari.test(string):
                    this.Agent.isSafari = true;
                    return 'Safari';
                case this._Browsers.WinJs.test(string):
                    this.Agent.isWinJs = true;
                    return 'WinJs';
                case this._Browsers.IE.test(string):
                    this.Agent.isIE = true;
                    return 'IE';
                case this._Browsers.PS3.test(string):
                    return 'ps3';
                case this._Browsers.PSP.test(string):
                    return 'psp';
                case this._Browsers.Firefox.test(string):
                    this.Agent.isFirefox = true;
                    return 'Firefox';
                case this._Browsers.UC.test(string):
                    this.Agent.isUC = true;
                    return 'UCBrowser';
                default:
                    // If the UA does not start with Mozilla guess the user agent.
                    if (string.indexOf('Mozilla') !== 0 && /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(string)) {
                        this.Agent.isAuthoritative = false;
                        return RegExp.$1;
                    }
                    return 'unknown';
            }
        };

        this.getBrowserVersion = function (string) {
            var regex;
            switch (this.Agent.browser) {
                case 'Edge':
                    if (this._Versions.Edge.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'PhantomJS':
                    if (this._Versions.PhantomJS.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chrome':
                    if (this._Versions.Chrome.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Chromium':
                    if (this._Versions.Chromium.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Safari':
                    if (this._Versions.Safari.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Opera':
                    if (this._Versions.Opera.test(string)) {
                        return RegExp.$1 ? RegExp.$1 : RegExp.$2;
                    }
                    break;
                case 'Firefox':
                    if (this._Versions.Firefox.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'WinJs':
                    if (this._Versions.WinJs.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'IE':
                    if (this._Versions.IE.test(string)) {
                        return RegExp.$2 ? RegExp.$2 : RegExp.$1;
                    }
                    break;
                case 'ps3':
                    if (this._Versions.Ps3.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'psp':
                    if (this._Versions.Psp.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Amaya':
                    if (this._Versions.Amaya.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Epiphany':
                    if (this._Versions.Epiphany.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'SeaMonkey':
                    if (this._Versions.SeaMonkey.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'Flock':
                    if (this._Versions.Flock.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'OmniWeb':
                    if (this._Versions.OmniWeb.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                case 'UCBrowser':
                    if (this._Versions.UC.test(string)) {
                        return RegExp.$1;
                    }
                    break;
                default:
                    if (this.Agent.browser !== 'unknown') {
                        regex = new RegExp(this.Agent.browser + '[\\/ ]([\\d\\w\\.\\-]+)', 'i');
                        if (regex.test(string)) {
                            return RegExp.$1;
                        }
                    }
            }
        };

        this.getOS = function (string) {
            switch (true) {
                case this._OS.WindowsVista.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows Vista';
                case this._OS.Windows7.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 7';
                case this._OS.Windows8.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 8';
                case this._OS.Windows81.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 8.1';
                case this._OS.Windows10.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 10.0';
                case this._OS.Windows2003.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 2003';
                case this._OS.WindowsXP.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows XP';
                case this._OS.Windows2000.test(string):
                    this.Agent.isWindows = true;
                    return 'Windows 2000';
                case this._OS.WindowsPhone8.test(string):
                    return 'Windows Phone 8';
                case this._OS.Linux64.test(string):
                    this.Agent.isLinux = true;
                    this.Agent.isLinux64 = true;
                    return 'Linux 64';
                case this._OS.Linux.test(string):
                    this.Agent.isLinux = true;
                    return 'Linux';
                case this._OS.ChromeOS.test(string):
                    this.Agent.isChromeOS = true;
                    return 'Chrome OS';
                case this._OS.Wii.test(string):
                    return 'Wii';
                case this._OS.PS3.test(string):
                    return 'Playstation';
                case this._OS.PSP.test(string):
                    return 'Playstation';
                case this._OS.OSXCheetah.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Cheetah';
                case this._OS.OSXPuma.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Puma';
                case this._OS.OSXJaguar.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Jaguar';
                case this._OS.OSXPanther.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Panther';
                case this._OS.OSXTiger.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Tiger';
                case this._OS.OSXLeopard.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Leopard';
                case this._OS.OSXSnowLeopard.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Snow Leopard';
                case this._OS.OSXLion.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Lion';
                case this._OS.OSXMountainLion.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Mountain Lion';
                case this._OS.OSXMavericks.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Mavericks';
                case this._OS.OSXYosemite.test(string):
                    this.Agent.isMac = true;
                    return 'OS X Yosemite';
                case this._OS.OSXElCapitan.test(string):
                    this.Agent.isMac = true;
                    return 'OS X El Capitan';
                case this._OS.OSXSierra.test(string):
                    this.Agent.isMac = true;
                    return 'macOS Sierra';
                case this._OS.Mac.test(string):
                    this.Agent.isMac = true;
                    return 'OS X';
                case this._OS.iPad.test(string):
                    this.Agent.isiPad = true;
                    return string.match(this._OS.iPad)[0].replace('_', '.');
                case this._OS.iPhone.test(string):
                    this.Agent.isiPhone = true;
                    return string.match(this._OS.iPhone)[0].replace('_', '.');
                case this._OS.Bada.test(string):
                    this.Agent.isBada = true;
                    return 'Bada';
                case this._OS.Curl.test(string):
                    this.Agent.isCurl = true;
                    return 'Curl';
                default:
                    return 'unknown';
            }
        };

        this.getPlatform = function (string) {
            switch (true) {
                case this._Platform.Windows.test(string):
                    return 'Microsoft Windows';
                case this._Platform.WindowsPhone.test(string):
                    this.Agent.isWindowsPhone = true;
                    return 'Microsoft Windows Phone';
                case this._Platform.Mac.test(string):
                    return 'Apple Mac';
                case this._Platform.Curl.test(string):
                    return 'Curl';
                case this._Platform.Android.test(string):
                    this.Agent.isAndroid = true;
                    return 'Android';
                case this._Platform.Blackberry.test(string):
                    this.Agent.isBlackberry = true;
                    return 'Blackberry';
                case this._Platform.Linux.test(string):
                    return 'Linux';
                case this._Platform.Wii.test(string):
                    return 'Wii';
                case this._Platform.Playstation.test(string):
                    return 'Playstation';
                case this._Platform.iPad.test(string):
                    this.Agent.isiPad = true;
                    return 'iPad';
                case this._Platform.iPod.test(string):
                    this.Agent.isiPod = true;
                    return 'iPod';
                case this._Platform.iPhone.test(string):
                    this.Agent.isiPhone = true;
                    return 'iPhone';
                case this._Platform.Samsung.test(string):
                    this.Agent.isiSamsung = true;
                    return 'Samsung';
                default:
                    return 'unknown';
            }
        };

        this.testCompatibilityMode = function () {
            var ua = this;
            if (this.Agent.isIE) {
                if (/Trident\/(\d)\.0/i.test(ua.Agent.source)) {
                    var tridentVersion = parseInt(RegExp.$1, 10);
                    var version = parseInt(ua.Agent.version, 10);
                    if (version === 7 && tridentVersion === 7) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 11.0;
                    }

                    if (version === 7 && tridentVersion === 6) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 10.0;
                    }

                    if (version === 7 && tridentVersion === 5) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 9.0;
                    }

                    if (version === 7 && tridentVersion === 4) {
                        ua.Agent.isIECompatibilityMode = true;
                        ua.Agent.version = 8.0;
                    }
                }
            }
        };

        this.testSilk = function () {
            var ua = this;
            switch (true) {
                case new RegExp('silk', 'gi').test(ua.Agent.source):
                    this.Agent.isSilk = true;
                    break;
                default:
            }

            if (/Silk-Accelerated=true/gi.test(ua.Agent.source)) {
                this.Agent.SilkAccelerated = true;
            }
            return this.Agent.isSilk ? 'Silk' : false;
        };

        this.testKindleFire = function () {
            var ua = this;
            switch (true) {
                case /KFOT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire';
                case /KFTT/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD';
                case /KFJWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9';
                case /KFJWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 8.9 4G';
                case /KFSOWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HD 7';
                case /KFTHWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7';
                case /KFTHWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 7 4G';
                case /KFAPWI/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9';
                case /KFAPWA/gi.test(ua.Agent.source):
                    this.Agent.isKindleFire = true;
                    return 'Kindle Fire HDX 8.9 4G';
                default:
                    return false;
            }
        };

        this.testCaptiveNetwork = function () {
            var ua = this;
            switch (true) {
                case /CaptiveNetwork/gi.test(ua.Agent.source):
                    ua.Agent.isCaptive = true;
                    ua.Agent.isMac = true;
                    ua.Agent.platform = 'Apple Mac';
                    return 'CaptiveNetwork';
                default:
                    return false;
            }
        };

        this.testMobile = function testMobile() {
            var ua = this;
            switch (true) {
                case ua.Agent.isWindows:
                case ua.Agent.isLinux:
                case ua.Agent.isMac:
                case ua.Agent.isChromeOS:
                    ua.Agent.isDesktop = true;
                    break;
                case ua.Agent.isAndroid:
                case ua.Agent.isSamsung:
                    ua.Agent.isMobile = true;
                    ua.Agent.isDesktop = false;
                    break;
                default:
            }
            switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isiPod:
                case ua.Agent.isiPhone:
                case ua.Agent.isBada:
                case ua.Agent.isBlackberry:
                case ua.Agent.isAndroid:
                case ua.Agent.isWindowsPhone:
                    ua.Agent.isMobile = true;
                    ua.Agent.isDesktop = false;
                    break;
                default:
            }
            if (/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isMobile = true;
                ua.Agent.isDesktop = false;
            }
        };

        this.testTablet = function testTablet() {
            var ua = this;
            switch (true) {
                case ua.Agent.isiPad:
                case ua.Agent.isAndroidTablet:
                case ua.Agent.isKindleFire:
                    ua.Agent.isTablet = true;
                    break;
            }
            if (/tablet/i.test(ua.Agent.source)) {
                ua.Agent.isTablet = true;
            }
        };

        this.testNginxGeoIP = function testNginxGeoIP(headers) {
            var ua = this;
            Object.keys(headers).forEach(function (key) {
                if (/^GEOIP/i.test(key)) {
                    ua.Agent.geoIp[key] = headers[key];
                }
            });
        };

        this.testBot = function testBot() {
            var ua = this;
            var isBot = IS_BOT_REGEXP.exec(ua.Agent.source.toLowerCase());
            if (isBot) {
                ua.Agent.isBot = isBot[1];
            } else if (!ua.Agent.isAuthoritative) {
                // Test unauthoritative parse for `bot` in UA to flag for bot
                ua.Agent.isBot = /bot/i.test(ua.Agent.source);
            }
        };

        this.testSmartTV = function testBot() {
            var ua = this;
            var isSmartTV = new RegExp('smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv', 'gi').exec(ua.Agent.source.toLowerCase());
            if (isSmartTV) {
                ua.Agent.isSmartTV = isSmartTV[1];
            }
        };

        this.testAndroidTablet = function testAndroidTablet() {
            var ua = this;
            if (ua.Agent.isAndroid && !/mobile/i.test(ua.Agent.source)) {
                ua.Agent.isAndroidTablet = true;
            }
        };

        this.testTouchSupport = function () {
            var ua = this;
            ua.Agent.isTouchScreen = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        };

        this.getLaguage = function () {
            var ua = this;
            ua.Agent.language = (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || '').toLowerCase();
        };

        this.getColorDepth = function () {
            var ua = this;
            ua.Agent.colorDepth = screen.colorDepth || -1;
        };

        this.getScreenResolution = function () {
            var ua = this;
            ua.Agent.resolution = [screen.availWidth, screen.availHeight];
        };

        this.getPixelDepth = function () {
            var ua = this;
            ua.Agent.pixelDepth = screen.pixelDepth || -1;
        };

        this.getCPU = function () {
            var ua = this;
            ua.Agent.cpuCores = navigator.hardwareConcurrency || -1;
        };

        this.reset = function reset() {
            var ua = this;
            for (var key in ua.DefaultAgent) {
                if (ua.DefaultAgent.hasOwnProperty(key)) {
                    ua.Agent[key] = ua.DefaultAgent[key];
                }
            }
            return ua;
        };

        this.parse = function get(source) {
            source = source || navigator.userAgent;
            var ua = new DeviceUUID();
            ua.Agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
            ua.Agent.os = ua.getOS(ua.Agent.source);
            ua.Agent.platform = ua.getPlatform(ua.Agent.source);
            ua.Agent.browser = ua.getBrowser(ua.Agent.source);
            ua.Agent.version = ua.getBrowserVersion(ua.Agent.source);
            ua.testBot();
            ua.testSmartTV();
            ua.testMobile();
            ua.testAndroidTablet();
            ua.testTablet();
            ua.testCompatibilityMode();
            ua.testSilk();
            ua.testKindleFire();
            ua.testCaptiveNetwork();
            ua.testTouchSupport();
            ua.getLaguage();
            ua.getColorDepth();
            ua.getPixelDepth();
            ua.getScreenResolution();
            ua.getCPU();
            return ua.Agent;
        };

        this.get = function (customData) {
            var pref = 'a', du = this.parse();
            var dua = [];
            for (var key in this.options) {
                if (this.options.hasOwnProperty(key) && this.options[key] === true) {
                    dua.push(du[key]);
                }
            }
            if (customData) {
                dua.push(customData);
            }
            if (!this.options.resolution && du.isMobile) {
                dua.push(du.resolution);
            }
            // 8, 9, a, b
            pref = 'b';
            var tmpUuid = du.hashMD5(dua.join(':'));
            var uuid = [
                tmpUuid.slice(0,8),
                tmpUuid.slice(8,12),
                '4' + tmpUuid.slice(12,15),
                pref + tmpUuid.slice(15,18),
                tmpUuid.slice(20)
            ];
            return uuid.join('-');
        };

        this.Agent = this.DefaultAgent;
        return this;
    };

    exports.DeviceUUID = DeviceUUID;
    return new DeviceUUID(navigator.userAgent);

})(this);


/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/img/banner-arrow.png":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/img/banner-arrow.png ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/banner-arrow.png?7bf5b792aa4c47c713ce2ffc0148e6fc");

/***/ }),

/***/ "./resources/assets/js/components/login/Login.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/components/login/Login.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_ba0d9948_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=ba0d9948&scoped=true */ "./resources/assets/js/components/login/Login.vue?vue&type=template&id=ba0d9948&scoped=true");
/* harmony import */ var _Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js */ "./resources/assets/js/components/login/Login.vue?vue&type=script&lang=js");
/* harmony import */ var _Login_vue_vue_type_style_index_0_id_ba0d9948_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css */ "./resources/assets/js/components/login/Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css");




;
_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Login_vue_vue_type_template_id_ba0d9948_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-ba0d9948"
/* hot reload */
if (false) {}

_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/login/Login.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/forgot_password.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/forgot_password.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forgot_password_vue_vue_type_template_id_04186acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot_password.vue?vue&type=template&id=04186acc&scoped=true */ "./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=template&id=04186acc&scoped=true");
/* harmony import */ var _forgot_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot_password.vue?vue&type=script&lang=js */ "./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=script&lang=js");
/* harmony import */ var _forgot_password_vue_vue_type_style_index_0_id_04186acc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css */ "./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css");




;
_forgot_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _forgot_password_vue_vue_type_template_id_04186acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_forgot_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-04186acc"
/* hot reload */
if (false) {}

_forgot_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/login/login_steps/forgot_password.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_forgot_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/login_page.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/login_page.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_page_vue_vue_type_template_id_e1320fc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login_page.vue?vue&type=template&id=e1320fc0&scoped=true */ "./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=template&id=e1320fc0&scoped=true");
/* harmony import */ var _login_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login_page.vue?vue&type=script&lang=js */ "./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=script&lang=js");
/* harmony import */ var _login_page_vue_vue_type_style_index_0_id_e1320fc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css */ "./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css");




;
_login_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _login_page_vue_vue_type_template_id_e1320fc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_login_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-e1320fc0"
/* hot reload */
if (false) {}

_login_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/login/login_steps/login_page.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_login_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/verify_code.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/verify_code.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _verify_code_vue_vue_type_template_id_14ebd508_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify_code.vue?vue&type=template&id=14ebd508&scoped=true */ "./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=template&id=14ebd508&scoped=true");
/* harmony import */ var _verify_code_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify_code.vue?vue&type=script&lang=js */ "./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=script&lang=js");
/* harmony import */ var _verify_code_vue_vue_type_style_index_0_id_14ebd508_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css */ "./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css");




;
_verify_code_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _verify_code_vue_vue_type_template_id_14ebd508_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_verify_code_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-14ebd508"
/* hot reload */
if (false) {}

_verify_code_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/login/login_steps/verify_code.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_verify_code_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/login/Login.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/login/Login.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=script&lang=js":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_forgot_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_forgot_password_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./forgot_password.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_page_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_page.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verify_code_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verify_code_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./verify_code.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/login/Login.vue?vue&type=template&id=ba0d9948&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/Login.vue?vue&type=template&id=ba0d9948&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_ba0d9948_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_template_id_ba0d9948_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=template&id=ba0d9948&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=template&id=ba0d9948&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=template&id=04186acc&scoped=true":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=template&id=04186acc&scoped=true ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_forgot_password_vue_vue_type_template_id_04186acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_forgot_password_vue_vue_type_template_id_04186acc_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./forgot_password.vue?vue&type=template&id=04186acc&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=template&id=04186acc&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=template&id=e1320fc0&scoped=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=template&id=e1320fc0&scoped=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_page_vue_vue_type_template_id_e1320fc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_page_vue_vue_type_template_id_e1320fc0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_page.vue?vue&type=template&id=e1320fc0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=template&id=e1320fc0&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=template&id=14ebd508&scoped=true":
/*!********************************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=template&id=14ebd508&scoped=true ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verify_code_vue_vue_type_template_id_14ebd508_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verify_code_vue_vue_type_template_id_14ebd508_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./verify_code.vue?vue&type=template&id=14ebd508&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=template&id=14ebd508&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/login/Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_style_index_0_id_ba0d9948_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader/index.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_style_index_0_id_ba0d9948_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_style_index_0_id_ba0d9948_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_style_index_0_id_ba0d9948_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Login_vue_vue_type_style_index_0_id_ba0d9948_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_forgot_password_vue_vue_type_style_index_0_id_04186acc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_forgot_password_vue_vue_type_style_index_0_id_04186acc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_forgot_password_vue_vue_type_style_index_0_id_04186acc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_forgot_password_vue_vue_type_style_index_0_id_04186acc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_forgot_password_vue_vue_type_style_index_0_id_04186acc_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_page_vue_vue_type_style_index_0_id_e1320fc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_page_vue_vue_type_style_index_0_id_e1320fc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_page_vue_vue_type_style_index_0_id_e1320fc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_page_vue_vue_type_style_index_0_id_e1320fc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_page_vue_vue_type_style_index_0_id_e1320fc0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verify_code_vue_vue_type_style_index_0_id_14ebd508_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader/index.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verify_code_vue_vue_type_style_index_0_id_14ebd508_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verify_code_vue_vue_type_style_index_0_id_14ebd508_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verify_code_vue_vue_type_style_index_0_id_14ebd508_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_verify_code_vue_vue_type_style_index_0_id_14ebd508_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/Login.vue?vue&type=style&index=0&id=ba0d9948&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2da24d22", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/forgot_password.vue?vue&type=style&index=0&id=04186acc&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4d54c1c5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/login_page.vue?vue&type=style&index=0&id=e1320fc0&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("22fcee23", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/login/login_steps/verify_code.vue?vue&type=style&index=0&id=14ebd508&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5603ebb0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);