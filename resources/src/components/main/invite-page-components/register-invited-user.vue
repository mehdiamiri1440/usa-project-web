<style scoped>
.register-content-wrapper {
  max-width: 660px;
  background: #fff;
  border-radius: 12px;
  margin: 30px auto 70px;
  overflow: hidden;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.05);
  display: flex;
  direction: rtl;
  min-height: 350px;
  align-items: center;
}

/*progressbar styles*/

.wrapper-progressbar {
  position: relative;
  max-width: 510px;
  margin: 40px auto 0;
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
  padding-top: 4px;
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
  height: 2px;
  background: #e0e0e0;
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

@media screen and (max-width: 768px) {
  #register-modal > div {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .modal-content {
    min-height: 100%;

    border-radius: 0;

    border: none;

    float: right;

    width: 100%;
  }
  .register-content-wrapper {
    box-shadow: none;
    background: none;
    position: relative;
    z-index: 1;
  }
}

@media screen and (max-width: 413px) {
  .progrees-item p {
    font-size: 11px;
  }
}
</style>

<template>
  <div class="register-content-wrapper">
    <RegisterNumber v-show="currentStep == 1" />
    <VerifiedCode v-show="currentStep == 2" />
    <ComplementaryInfo v-show="currentStep == 3" />
  </div>
</template>

<script>
import RegisterNumber from "./register-invited-user-steps/register-number";
import VerifiedCode from "./register-invited-user-steps/verify-code";
import ComplementaryInfo from "./register-invited-user-steps/complementary-info.vue";

import device from "device-uuid/lib/device-uuid";
import pricingTableSellerContentVue from "../../../dashboard/seller/pricing-seller-page/pricing-table-seller-content.vue";

import { eventBus } from "../../../../router/router";
import swal from "../../../../../scripts/sweetalert.min.js";

export default {
  props: ["categoryList", "referredUserName"],
  components: {
    RegisterNumber,
    VerifiedCode,
    ComplementaryInfo,
  },
  data: function () {
    return {
      isImageLoad: false,
      loginCheckerLoading: true,
      currentStep: 1,
      step1: {
        phone: "",
        sendCode: true,
      },
      step2: {
        verification_code: "",
        reSendCode: false,
        timeCounterDown: 120,
        showTimer: false,
        now: null,
      },
      step3: {
        name: "",
        family: "",
        password: "",
        re_password: "",
        user_name: "",
        sex: "آقا",
        province: "",
        city: "",
        national_code: "",
        provinceList: "",
        cityList: "",
      },
      step4: {
        activity_type: "",
        rules: 0,
        categoryList: "",
        category_id: "",
      },
      errors: {
        name: "",
        family: "",
        province: "",
        city: "",
        verification_code: "",
        phone: "",
        category_id: "",
        activity_type: "",
      },
      errorFlag: false,
      userNameUnique: true,
      nationalCodeUnique: true,
      popUpMsg: "",
      verifyCodeBtnLoading: false,
      formSubmitActive: false,
    };
  },
  methods: {
    setLocation() {
      this.getCategory();
    },
    makeRandomString(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    stopLoader: function () {
      eventBus.$emit("isLoading", false);
    },
    goToStep: function (step) {
      if (step < 1) {
        step = 1;
      } else if (step > 6) {
        step = 6;
      }

      this.currentStep = step;
    },
    sendVerificationCode: function () {
      this.verifyCodeBtnLoading = true;
      this.step2.reSendCode = false;
      this.step1.sendCode = false;
      var self = this;

      this.step2.now = new Date().getTime();
      this.step2.showTimer = true;
      this.step2.timeCounterDown = 119;

      axios
        .post("/send_verification_code", {
          phone: this.toLatinNumbers(this.step1.phone),
        })
        .then(function (response) {
          self.verifyCodeBtnLoading = false;

          self.goToStep(2);
          self.step1.sendCode = true;

          self.step2.verification_code = "";
          self.errors.verification_code = "";

          setTimeout(function () {
            self.step2.reSendCode = true;
          }, 120000);

          self.registerComponentStatistics(
            "invite-page",
            "send-verification-code",
            "verification-code-sent-to-user"
          );
        })
        .catch(function (err) {
          self.verifyCodeBtnLoading = false;

          self.errors.phone = err.response.data.errors.phone;

          self.step1.sendCode = true;

          self.registerComponentStatistics(
            "Invite-Register-Error",
            "phone-number-verification",
            "error:" + self.errors.phone
          );
        });
    },
    verifyCode: function () {
      var self = this;

      self.verifyCodeBtnLoading = true;

      let deviceInfo = new device.DeviceUUID();
      let deviceId = null;
      if (deviceInfo.get()) {
        deviceId = deviceInfo.get();
      }

      axios
        .post("/verify_code", {
          verification_code: this.toLatinNumbers(this.step2.verification_code),
          phone: this.toLatinNumbers(this.step1.phone),
          device_id: deviceId,
        })
        .then(function (response) {
          self.verifyCodeBtnLoading = false;

          if (response.data.status === true) {
            if (response.data.redirected) {
              // it's very tricky condition, be careful
              window.location.href = "/login";
            } else {
              self.goToStep(3);
              self.getProvinceList();
            }
          } else {
            self.goToStep(2);
            self.errors.verification_code = response.data.msg;
            self.registerComponentStatistics(
              "Invite-Register-Error",
              "verification-code-wrong",
              "error:" + self.errors.verification_code
            );
          }
        })
        .catch(function (error) {
          self.verifyCodeBtnLoading = false;

          self.goToStep(2);
          self.errors.verification_code = "";
          self.errors.verification_code = "وارد کردن کد الزامی است.";
          self.registerComponentStatistics(
            "Invite-Register-Error",
            "verification-code-empty",
            "error:" + self.errors.verification_code
          );
        });
    },
    submitForm: function () {
      var self = this;

      this.stepsValidator();

      var object = {
        phone: this.toLatinNumbers(this.step1.phone),
        first_name: this.step3.name,
        last_name: this.step3.family,
        verification_code: this.toLatinNumbers(this.step2.verification_code),
        password: this.makeRandomString(8),
        user_name: this.step3.user_name,
        sex: this.step3.sex,
        province: this.step3.province,
        city: this.step3.city,
        activity_type: this.step4.activity_type,
        national_code: this.toLatinNumbers(this.step3.national_code),
        category_id: this.step4.category_id,
        referred_user_name: this.referredUserName,
      };

      if (
        this.errorFlag === false &&
        !this.errors.name &&
        !this.errors.family
      ) {
        this.formSubmitActive = true;
        axios
          .post("/api/v1/users", object)
          .then(function (response) {
            if (response.status === 201) {
              eventBus.$emit("modal", "userRegisterSuccess");
              self.createCookie("registerNewUser", true, 60);
              self.createCookie("firstLogin", true, 1);

              let deviceInfo = new device.DeviceUUID();
              let deviceId = null;
              if (deviceInfo.get()) {
                deviceId = deviceInfo.get();
              }

              axios
                .post("/dologin", {
                  phone: object.phone,
                  password: object.password,
                  device_id: deviceId,
                })
                .then((response) => {
                  if (response.data.status) {
                    if (self.isUserComeFromChatBoxOpen()) {
                      swal.close(); //close modal

                      self.returnUserToPreviousPageAndChatBox(response.data);
                    } else {
                      self.redirectUserToPanel(response.data);
                    }
                  }
                })
                .catch((err) => {
                  console.log("err");
                });
              self.registerComponentStatistics(
                "invite-page",
                "successful-register",
                "user-registered-successfully"
              );
            }
          })
          .catch(function (err) {
            self.formSubmitActive = false;
            self.registerComponentExceptions("User register API failed", true);
          });
      }
    },
    setCategoryId: function (e) {
      e.preventDefault();

      this.step4.category_id = $(e.target).val();
    },
    validateErrors() {
      if (
        this.step3.name.length &&
        this.step3.family.length &&
        this.step3.province &&
        this.step3.city &&
        this.step4.activity_type !== "" &&
        this.step4.category_id !== ""
      ) {
        this.errorFlag = false;
      }
    },
    stepsValidator() {
      this.errorFlag = false;
      if (this.errors.name == "" && this.errors.family == "") {
        this.firstNameValidator(this.step3.name);
        this.lastNameValidator(this.step3.family);
      }
      this.provinceValidator(this.step3.province);
      this.cityValidator(this.step3.city);
      this.categoryIdValidator(this.step4.category_id);
      this.activityTypeValidator(this.step4.activity_type);
    },
    textValidator(text, name) {
      if (text != "") {
        if (!this.validateRegx(text, /^[\u0600-\u06FF\s]+$/)) {
          return `لطفا ${name} را به فارسی وارد کنید`;
        } else {
          return false;
        }
      }
    },
    firstNameValidator: function (name) {
      this.errors.name = "";

      if (name === "") {
        this.errors.name = "نام خود را وارد کنید.";
        this.errorFlag = true;
      }

      if (this.errors.name) {
        // update for analytics
        // this.registerComponentStatistics(
        //   "Invite-Register-Error",
        //   "first-name",
        //   "input:" + name + " Error:" + this.errors.name
        // );
      }
    },
    lastNameValidator: function (family) {
      this.errors.family = "";

      if (family === "") {
        this.errors.family = "نام خانوادگی خود را وارد کنید.";
        this.errorFlag = true;
      }

      if (this.errors.family) {
        // update for analytics
        // this.registerComponentStatistics(
        //   "Invite-Register-Error",
        //   "last-name",
        //   "input:" + family + " Error:" + this.errors.family
        // );
      }
    },

    provinceValidator: function (province) {
      this.errors.province = "";

      if (province == "") {
        this.errors.province = "استان خود را انتخاب کنید.";
        this.errorFlag = true;
      }

      if (this.errors.province) {
        // update for analytics
        // this.registerComponentStatistics(
        //   "Invite-Register-Error",
        //   "province",
        //   "input:" + province + " Error:" + this.errors.province
        // );
      }
    },
    cityValidator: function (city) {
      this.errors.city = "";

      if (city === "") {
        this.errors.city = "شهر خود را انتخاب کنید.";
        this.errorFlag = true;
      }
      if (this.errors.city) {
        // update for analytics
        // this.registerComponentStatistics(
        //   "Invite-Register-Error",
        //   "city",
        //   "input:" + city + " Error:" + this.errors.city
        // );
      }
    },
    categoryIdValidator: function (categoryId) {
      this.errors.category_id = "";
      if (categoryId === "") {
        this.errors.category_id = "حوزه فعالیت خود را انتخاب کنید.";
        this.errorFlag = true;
      }

      if (this.errors.category_id) {
        // update for analytics
        // this.registerComponentStatistics(
        //   "Invite-Register-Error",
        //   "category-selection",
        //   "input:" + categoryId + " Error:" + this.errors.category_id
        // );
      }
    },
    activityTypeValidator: function (activityType) {
      this.errors.activity_type = "";
      if (activityType === "") {
        this.errors.activity_type = "نوع فعالیت خود را انتخاب کنید.";
        this.errorFlag = true;
      }
      if (this.errors.activity_type) {
        // update for analytics
        // this.registerComponentStatistics(
        //   "Invite-Register-Error",
        //   "activity-type",
        //   "input:" + activityType + " Error:" + this.errors.activity_type
        // );
      }
    },
    isIrNationalCode: function (input) {
      if (!/^\d{10}$/.test(input)) {
        return false;
      }

      var check = parseInt(input[9]);
      var sum =
        [0, 1, 2, 3, 4, 5, 6, 7, 8]
          .map(function (x) {
            return parseInt(input[x]) * (10 - x);
          })
          .reduce(function (x, y) {
            return x + y;
          }) % 11;

      return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
    },

    validateRegx: function (input, regx) {
      return regx.test(input);
    },
    getCategory: function () {
      axios
        .post("/get_category_list")
        .then(
          (response) => (this.step4.categoryList = response.data.categories)
        );
    },
    getCategoryId: function (categoryId) {
      this.step4.category_id = categoryId;
    },
    getProvinceList: function () {
      axios
        .post("/location/get_location_info")
        .then(
          (response) => (this.step3.provinceList = response.data.provinces)
        );
    },
    getCityList: function (provinceId) {
      axios
        .post("/location/get_location_info", {
          province_id: provinceId,
        })
        .then((response) => (this.step3.cityList = response.data.cities));
    },
    setProvinceName: function (e) {
      e.preventDefault();

      this.step3.province = $(e.target).val();

      var provinceId = "";

      for (var i = 0; i < this.step3.provinceList.length; i++) {
        if (this.step3.province === this.step3.provinceList[i].province_name) {
          provinceId = this.step3.provinceList[i].id;
          break;
        }
      }

      this.getCityList(provinceId);
    },
    setCityName: function (e) {
      e.preventDefault();

      this.step3.city = $(e.target).val();
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
    updateCounterDownTimer: function (seconds) {
      if (seconds !== 1) {
        this.step2.timeCounterDown = seconds;
      } else this.step2.showTimer = false;
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
        let pathname = window.localStorage.getItem("msgToSend");

        if (userInfo.is_buyer) {
          window.location.href = "/buyer/register-request";
        } else if (userInfo.is_seller) {
          window.location.href = "/switch-role";
        } else {
          window.localStorage.removeItem("contact");
          window.localStorage.removeItem("msgToSend");

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

          eventBus.$emit("ChatInfo", contact);
        } else {
          this.redirectUserToPanel(userInfo);
        }
      } else {
        this.redirectUserToPanel(userInfo);
      }
    },
    redirectUserToPanel: function (userInfo) {
      if (userInfo.is_seller == true) {
        localStorage.setItem("showSnapShot", true);
        window.location.href = "/seller/register-product";
      } else if (userInfo.is_buyer == true) {
        localStorage.setItem("showSnapShot", true);
        window.location.href = "/buyer/register-request";
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
    createCookie: function (name, value, minutes) {
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    },
  },
  watch: {
    "step2.timeCounterDown": function () {
      var self = this;
      var now = new Date().getTime();

      var distance = now - this.step2.now;

      var seconds = 119 - Math.floor((distance % (1000 * 120)) / 1000) + 1;

      setTimeout(function () {
        self.updateCounterDownTimer(seconds);
      }, 1000);
    },
  },
  watch: {
    "step2.timeCounterDown": function () {
      var self = this;
      var now = new Date().getTime();

      var distance = now - this.step2.now;

      var seconds = 119 - Math.floor((distance % (1000 * 120)) / 1000) + 1;

      setTimeout(function () {
        self.updateCounterDownTimer(seconds);
      }, 1000);
    },
  },
};
</script>
