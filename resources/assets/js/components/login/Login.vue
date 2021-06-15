<style scoped>
p,
span {
  line-height: 1.5;
}
.text-loader {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 16px;
  position: absolute;
  bottom: 37%;
  right: 10px;
}

.loading-container {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #fff;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  padding: 0;
  z-index: 1100;
  position: fixed;
}

#main-content {
  padding-bottom: 0;
}

.error-message {
  direction: rtl;
  font-size: 11px;
}

#main {
  margin-top: 21px;
  background: #f9f9f9;

  height: 100%;

  position: relative;

  width: 100%;
  overflow: hidden;
  min-height: 768px;
}

input[type="number"] {
  -moz-appearance: textfield;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.main-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 620px;
}

.wraper-main-contents {
  text-align: right;
}

/*progressbar styles*/

.wrapper-progressbar {
  position: relative;
}

.progressbar-items {
  display: flex;
  justify-content: space-between;
  direction: rtl;
  position: relative;
}

.progrees-item {
  text-align: center;
  color: #bebebe;
}

.progrees-item p {
  font-size: 12px;
}

.progrees-item span {
  width: 20px;
  height: 20px;
  font-size: 13px;
  background: #bebebe;
  border-radius: 50px;
  color: #fff;
  display: inline-block;
  margin-bottom: 6px;
  padding-top: 1px;
}

.lds-ring {
  display: inline-block;

  position: absolute;

  width: 64px;

  height: 64px;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -50%);
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 5px solid #00c569;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #00c569 transparent transparent transparent;
}

.lds-ring-alt {
  display: block;
  margin-top: 50px;
  direction: rtl;
  text-align: center;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.progrees-item.active {
  color: #333;
}

.progrees-item.active p {
  font-weight: bold;
}

.progrees-item.active span {
  background: #00c569;
}

.custom-progressbar {
  display: block;
  height: 3px;
  background: #bebebe;
  right: 20px;
  left: 21px;
  position: absolute;
  top: 9px;
  z-index: 0;
}

.custom-progressbar.active {
  background: #00c569;
  width: 0;
  left: initial;
}

.custom-progressbar .progress-bar {
  background: #00c569;
  float: right;
}

/*main contents styles */
.main-contents {
  background: #fff;
  border-radius: 9px;
  overflow: hidden;
  margin-top: 16px;
  box-shadow: 0 0 10px #c5c5c5;
  height: 500px;
}

/*main content headers styles*/
.main-content-header {
  direction: rtl;
  text-align: center;
  background: #00c569;
  color: #fff;
  padding: 22px 0;
}

.main-content-header a {
  color: #fff;
  position: relative;
  right: 0;
  transition: 300ms;
}

.main-content-header a,
.main-content-header h1 {
  font-size: 23px;
}

.main-content-header a:hover {
  transition: 300ms;
}

.main-content-header a.arrow-left:hover {
  right: 5px;
}

.main-content-header a.arrow-right:hover {
  right: -5px;
}

/*main content footer style*/
.main-content-footer {
  position: absolute;

  bottom: 0;
}

.footer-content {
  direction: rtl;
  text-align: center;
  background: #f6f6f6;
  font-size: 11px;
  padding: 5px;
  color: #333;
}

.footer-content i {
  font-size: 12px;
  color: #00c569;
}

@media screen and (max-width: 767px) {
  #main {
    padding: 0;
  }

  .progrees-item p {
    display: none;
  }

  .main-wrapper {
    top: calc(50% - 30px);
  }

  .progressbar-items {
    padding: 0 15px;
  }

  .main-contents {
    border-radius: 0;
  }

  .main-content-header {
    direction: rtl;
    text-align: center;
    background: none;
    color: #333;
    padding: 14px 0;
    border-bottom: 2px solid #00c569;
  }

  .main-content-header a,
  .main-content-header h1 {
    font-size: 17px;
  }

  .main-content-header a {
    color: #333;
    text-align: left;
  }

  .title-contents {
    font-weight: bold;
    font-size: 16px;
  }

  .form-contents label {
    font-size: 12px;
  }

  .small-description {
    font-size: 11px;

    font-weight: bold;
  }

  input {
    font-size: 13px;
    padding: 8px 15px 9px 35px;
  }
}

@media screen and (max-width: 370px) {
  .form-contents .col-xs-10 {
    padding: 0;
  }
}
</style>

<template>
  <div>
    <div v-if="!loginCheckerLoading">
      <main id="main" class="container">
        <div class="main-wrapper col-xs-12">
          <div class="row">
            <div class="main-contents">
              <header class="main-content-header col-xs-12">
                <div class="row">
                  <p class="arrow-left col-xs-2">
                    <!-- <i class="fa fa-arrow-left"></i> -->
                  </p>
                  <h1 class="col-xs-8">
                    <span v-if="currentStep == 1">ورود به باسکول</span>
                    <span v-if="currentStep == 2">بازیابی کلمه عبور</span>
                    <span v-if="currentStep == 3"></span>
                  </h1>

                  <a
                    href="#"
                    v-if="currentStep != 1"
                    @click.prevent="goToStep(currentStep - 1)"
                    class="arrow-right col-xs-2"
                  >
                    <i class="fa fa-arrow-right"></i>
                  </a>
                </div>
              </header>
              <main class="col-xs-12">
                <div class="row">
                  <div
                    class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2"
                  >
                    <div class="wraper-main-contents row">
                      <loginPage v-if="currentStep == 1" />

                      <ForgotPassword v-else-if="currentStep == 2" />

                      <VerifyCode v-else-if="currentStep == 3" />
                    </div>
                  </div>
                </div>
              </main>

              <footer class="main-content-footer col-xs-12">
                <div class="footer-content row">
                  <i class="fa fa-star"></i>
                  فرصت های جدید را خلق کنید و در زمان و هزینه صرفه جویی کنید
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div v-else>
      <div class="loading-container">
        <div class="image-wrapper">
          <a v-show="isImageLoad">
            <transition>
              <img src @load="ImageLoaded" alt="alt" />
            </transition>
          </a>
          <div class="text-loader text-muted">
            ... در حال انتقال به پنل کاربری
          </div>
          <div v-show="!isImageLoad" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <!-- <span v-text="alt" class="lds-ring-alt"></span> -->
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import loginPage from "./login_steps/login_page";
import ForgotPassword from "./login_steps/forgot_password";
import VerifyCode from "./login_steps/verify_code";
import device from "device-uuid/lib/device-uuid";

export default {
  components: {
    loginPage,
    ForgotPassword,
    VerifyCode,
  },
  props: ["isUserLogin", "userType"],
  data: function () {
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
        msg: "",
      },
      step2: {
        phone: "",
        sendCode: true,
        msg: "",
      },
      step3: {
        verification_code: "",
        msg: "",
        reSendCode: false,
      },
      createPassword: false,
      popUpMsg: "",
    };
  },
  methods: {
    stopLoader: function () {
      this.$store.state.routeStore.isLoading = false;
    },
    goToStep: function (step) {
      this.currentStep = step;
      this.scrollToTop();
    },
    doLogin: function () {
      var self = this;

      self.loginBtnLoading = true;

      let deviceInfo = new device.DeviceUUID();
      let deviceId = null;
      if (deviceInfo.get()) {
        deviceId = deviceInfo.get();
      }

      axios
        .post("/dologin", {
          phone: this.step1.phone,
          password: this.step1.password,
          device_id: deviceId,
        })
        .then(function (response) {
          if (response.data.status === true) {
            if (response.data.confirmed_profile_record === true) {
              if (
                self.isUserComeFromChatBoxOpen() ||
                self.isUserInInquirySubmissionProcess()
              ) {
                window.localStorage.setItem("userId", response.data.id);
                window.localStorage.setItem(
                  "userType",
                  response.data.is_seller
                );

                self.returnUserToPreviousPageAndChatBox(response.data);
              } else {
                window.localStorage.setItem("userId", response.data.id);
                window.localStorage.setItem(
                  "userType",
                  response.data.is_seller
                );

                self.redirectUserToPanel(response.data);
              }
            } else {
              self.loginBtnLoading = false;

              self.registerComponentExceptions(
                "Login-page: User does not have confirmed profile record",
                true
              );
              // window.location.href = "/seller/profile"; // Edit Profile Page
            }
          } else {
            self.loginBtnLoading = false;

            self.showMsg = true;
            self.errors = [];
            self.step1.msg = response.data.msg;

            self.registerComponentExceptions(
              "Login-page: Validation error for user credentials in login page"
            );
          }
        })
        .catch(function (err) {
          self.loginBtnLoading = false;

          self.errors = [];
          self.showMsg = false;
          self.errors = err.response.data.errors;

          self.registerComponentExceptions(
            "Login-page: Validation error for user credentials in login page"
          );
        });
    },
    sendPhoneVerificationCode: function () {
      this.step3.reSendCode = false;
      this.step2.sendCode = false;
      this.errors = [];
      var self = this;

      axios
        .post("/send_phone_verification_code_for_password_reset", {
          phone: this.toLatinNumbers(this.step2.phone),
        })
        .then(function (response) {
          if (response.status === 200) {
            self.goToStep(3);

            self.step2.sendCode = true;

            setTimeout(function () {
              self.step3.reSendCode = true;
            }, 60000);
          }
        })
        .catch(function (err) {
          if (err.response.status === 500) {
            self.errors[0] = err.response.data.msg;
          } else {
            self.errors = err.response.data.errors.phone;
          }

          self.step2.sendCode = true;
        });
    },
    verifyCode: function () {
      var self = this;
      this.showMsg = false;
      this.createPassword = true;
      axios
        .post("/reset_password", {
          phone: this.toLatinNumbers(this.step2.phone),
          verification_code: this.toLatinNumbers(this.step3.verification_code),
        })
        .then(function (response) {
          if (response.data.status === true) {
            self.errors = [];

            self.$store.commit("routeStore/setModal", {
              name: "passwordResetSuccess",
            });

            self.currentStep = 1;
            self.createPassword = false;
          } else {
            self.errors = [];
            self.errors.verification_code = "کد اشتباه است یا منقضی شده";
            self.createPassword = false;
          }
        })
        .catch(function (err) {
          self.errors = [];
          self.errors = err.response.data.errors;
        });
    },
    loadImage: function () {
      this.isImageLoad = false;
    },
    ImageLoaded: function () {
      this.isImageLoad = true;
    },
    toLatinNumbers: function (num) {
      if (num == null) {
        return null;
      }

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function (c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function (c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
    registerComponentExceptions: function (description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal,
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    isOsIOS: function () {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    isUserComeFromChatBoxOpen: function () {
      if (
        window.localStorage.getItem("contact") &&
        window.localStorage.getItem("pathname")
      ) {
        return true;
      }
      return false;
    },
    returnUserToPreviousPageAndChatBox: function (userInfo) {
      if (this.isUserInInquirySubmissionProcess()) {
        let contact = JSON.parse(window.localStorage.getItem("contact"));
        let msg = window.localStorage.getItem("msgToSend");

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
        let contact = JSON.parse(window.localStorage.getItem("contact"));
        let pathname = window.localStorage.getItem("pathname");

        window.localStorage.removeItem("contact");
        window.localStorage.removeItem("pathname");

        if (userInfo.id != contact.contact_id) {
          window.localStorage.setItem("comeFromAuthentication", true);

          this.$router.push({ path: pathname });

          this.$store.state.messagesStore.chatInfo = contact;
        } else {
          this.redirectUserToPanel(userInfo);
        }
      } else {
        this.redirectUserToPanel(userInfo);
      }
    },
    redirectUserToPanel: function (userInfo) {
      var self = this;

      if (userInfo.is_buyer) {
        axios
          .post("/get_total_unread_messages_for_current_user")
          .then(function (response) {
            if (response.data.msg_count) {
              window.location.href = "/buyer/messenger/contacts";
            } else {
              window.location.href = "/buyer/register-request";
            }
          })
          .catch(function (err) {
            //
          });

        localStorage.setItem("showSnapShot", true);
        localStorage.userRoute = JSON.stringify("buyer/register-request");
        // test
        self.registerComponentStatistics(
          "Login",
          "seller-login",
          "seller-logged-in-successfully"
        );
      } else if (userInfo.is_seller) {
        axios
          .post("/get_total_unread_messages_for_current_user")
          .then(function (response) {
            if (response.data.msg_count) {
              window.location.href = "/seller/messenger/contacts";
            } else {
              axios
                .post("/get_seller_dashboard_required_data")
                .then(function (response) {
                  if (response.data.confirmed_products_count !== 0) {
                    window.location.href = "/seller/buyAd-requests";
                  } else {
                    window.location.href = "/seller/register-product";
                  }
                });
            }
          })
          .catch(function (err) {
            //
          });

        localStorage.setItem("showSnapShot", true);
        localStorage.userRoute = JSON.stringify("seller/register-product");
        self.registerComponentStatistics(
          "Login",
          "buyer-login",
          "buyer-logged-in-succeccfully"
        );
      } else {
        self.registerComponentExceptions(
          "Login-page: Undefined user type user phone nubmer is: " +
            userInfo.phone,
          true
        );

        alert(
          "نوع کاربری شما مشخص نشده است لطفا با پشتیبانی باسکول تماس بگیرید"
        );
      }
    },
    isUserInInquirySubmissionProcess: function () {
      if (
        window.localStorage.getItem("contact") &&
        window.localStorage.getItem("msgToSend")
      ) {
        return true;
      }
      return false;
    },
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/login" });
    var self = this;

    let userInfo = {
      is_buyer: !self.userType,
      is_seller: self.userType,
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
  mounted: function () {
    var self = this;
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        self.$nextTick(this.stopLoader());
      }
    };
  },
  updated: function () {
    this.$nextTick(this.stopLoader());
  },
  metaInfo() {
    return {
      title: "ورود",
      titleTemplate: "باسکول | %s",
      meta: [
        {
          name: "description",
          content:
            "خرید عمده و قیمت میوه | خرید عمده و قیمت غلات | خرید عمده و قیمت صیفی جات | خرید و قیمت عمده خشکبار",
        },
        {
          name: "author",
          content: "باسکول",
        },
        {
          property: "og:description",
          content:
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی",
        },
        {
          property: "og:site_name",
          content: "باسکول بازارآنلاین خرید و فروش محصولات کشاورزی ایران",
        },
        {
          property: "og:title",
          content: "باسکول | ورود",
        },
      ],
    };
  },
};
</script>



