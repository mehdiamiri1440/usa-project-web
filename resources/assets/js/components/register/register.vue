<style scoped>
p,
span {
  line-height: 1.5;
}

#main-content {
  padding-bottom: 0;
  padding-top: 80px;
}

.error-message {
  direction: rtl;
  font-size: 11px;
}

#main {
  margin-top: 21px;
  height: 100%;
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 700px;
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
  margin: 40px auto;
}

/*main contents styles */
.main-contents {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 16px;
  border: 1px solid #e0e0e0;
  min-height: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 50px 15px;
}

.logo-wrapper {
  margin-bottom: 42px;
}
.header-wrapper > h1 {
  color: #264653;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 36px;
}
.header-wrapper > p {
  font-size: 20px;
  color: #000;
  margin-bottom: 22px;
}

@media screen and (max-width: 767px) {
  .logo-wrapper {
    margin-bottom: 22px;
  }
  .header-wrapper > h1 {
    margin-bottom: 26px;
  }
  .header-wrapper > p {
    margin-bottom: 12px;
  }
  #main {
    padding: 0;
  }

  #main-content {
    padding-top: 50px;
  }

  .progrees-item p {
    display: none;
  }

  .main-wrapper {
    top: 0;
    left: 0;
    transform: translate(0);
  }

  #main.latest-step {
    margin: 0;
  }

  .progressbar-items {
    padding: 0 15px;
  }

  .main-contents {
    border-radius: 0;
    border: none;
    margin: 0;
    padding: 15px;
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
@media (max-width: 500px) {
  #main{
    padding-top: 0;
    min-height: 660px;
  }
   #main .main-content{
    padding-top: 0;
  }
  .logo-wrapper svg {
    width: 60px;
    height: 77px;
  }
}
@media screen and (max-width: 400px) {
  .form-contents .col-xs-10 {
    padding: 0;
  }

  .form-contents .col-xs-3 {
    padding: 0 5px;
  }

  .col-xs-10.col-xs-offset-1.col-sm-8.col-sm-offset-2 {
    padding: 0;
  }
}

@media (max-width: 375px) {
  #main{
    margin-bottom:18px
  }
  #main .main-contents{
    padding-top: 0;
  }
  .header-wrapper > h1 {
    font-size: 2.2rem;
  }
  .logo-wrapper{
    margin-bottom: 17px;
}
  .logo-wrapper svg {
    width: 60px;
    height: 77px;
  }
}
@media (max-width: 350px) {
   .logo-wrapper svg {
    width: 50px;
    height: 67px;
  }
}
</style>

<template>
  <div>
    <div v-if="!loginCheckerLoading">
      <main
        id="main"
        class="container"
        :class="{ 'latest-step': currentStep == 3 }"
      >
        <div class="main-wrapper">
          <div class="main-contents text-rtl">
            <div class="header-wrapper" v-if="currentStep <= 2">
              <div class="logo-wrapper">
                <svg
                  width="75"
                  height="87"
                  viewBox="0 0 75 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0429 28.4241C24.6519 28.6962 24.3555 28.8998 24.0612 29.1074C18.0136 33.377 14.5544 39.1646 13.7944 46.5587C12.6152 58.035 20.5315 69.846 33.6406 72.015C46.528 74.1478 58.4034 65.8929 61.022 53.1022C61.1807 52.2541 61.6134 51.4814 62.2537 50.9029C64.1244 49.1189 65.9649 47.3046 67.8659 45.4601C68.1037 45.6456 68.3235 45.7826 68.5049 45.958C70.4824 47.8771 72.4741 49.7882 74.4073 51.7456C74.7533 52.1175 74.9394 52.6105 74.9254 53.1184C74.0828 60.8633 71.0146 67.6487 65.854 73.4483C59.6049 80.4716 51.743 84.6444 42.4297 85.8237C23.1682 88.2568 5.2855 75.9984 1.09251 57.4142C-2.35461 42.1501 2.41895 29.4542 14.5141 19.5059C15.1955 18.9455 15.6027 18.9374 16.2477 19.5966C18.8543 22.2636 21.5273 24.8641 24.1741 27.4927C24.4422 27.7689 24.7023 28.0652 25.0429 28.4241Z"
                    fill="#F03738"
                  />
                  <path
                    d="M27.9095 6.21509C30.5301 6.1647 32.6085 7.14037 34.3824 8.82361C35.3077 9.70253 36.2189 10.5996 37.0877 11.5329C37.6038 12.0893 37.9666 12.0369 38.4847 11.5188C41.1053 8.8982 43.7381 6.32596 46.3748 3.7376C51.3943 -1.18916 58.4437 -1.24964 63.5096 3.58238C63.9954 4.04603 64.4812 4.51169 64.9973 4.93905C65.5537 5.39665 65.4993 5.75749 64.9973 6.23727C63.3161 7.8298 61.6543 9.44652 60.0121 11.0874C54.2185 16.8367 48.4303 22.5899 42.6475 28.3472C40.9783 30.0043 39.2689 31.6169 37.6078 33.274C36.9446 33.9311 36.4366 33.9191 35.7552 33.2377C30.3689 27.8406 24.9643 22.4649 19.5417 17.1108C18.7031 16.2736 17.8504 15.4585 16.9836 14.6656C16.5179 14.2422 16.4453 13.9157 16.9412 13.4359C18.6083 11.8232 20.1908 10.1279 21.8962 8.55954C23.6016 6.9912 25.6578 6.12438 27.9095 6.21509Z"
                    fill="#0AA709"
                  />
                  <path
                    d="M48.9571 27.5024C49.4006 27.2 49.9005 26.954 50.2775 26.5811C52.878 24.0069 55.4764 21.4306 58.0204 18.7999C58.6252 18.173 59.0283 18.1951 59.6895 18.683C68.0715 24.9321 73.1958 33.1528 74.7521 43.5325C74.8629 44.2602 74.9254 44.994 75 45.7257C75 45.7761 74.9456 45.8346 74.8488 46.014L67.9344 39.281L61.3204 45.7015C59.9859 37.7974 55.9723 31.911 48.9571 27.5024Z"
                    fill="#F03738"
                  />
                </svg>
              </div>
              <h1>به باسکول خوش آمدید !</h1>
              <p>
                <span v-if="currentStep == 1"> ورود / ثبت نام </span>
                <span v-else-if="currentStep == 2">
                  کد تایید را وارد کنید
                </span>
              </p>
            </div>
            <RegisterNumber v-if="currentStep == 1" />
            <VerifyCode v-else-if="currentStep == 2" />
            <ComplementaryInfo v-else-if="currentStep == 3" />
          </div>
        </div>
      </main>
    </div>
    <div v-else>
      <div class="loading-container">
        <div class="image-wrapper">
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
import { eventBus } from "../../router/router";
import RegisterNumber from "./register-steps/register-number";
import VerifyCode from "./register-steps/verify-code";
import ComplementaryInfo from "./register-steps/complementary-info.vue";
import device from "device-uuid/lib/device-uuid";
import swal from "../../sweetalert.min.js";

export default {
  components: {
    RegisterNumber,
    VerifyCode,
    ComplementaryInfo,
  },
  props: ["isUserLogin", "userType"],
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
      this.scrollToTop();
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

          self.setupWebOTP();

          self.registerComponentStatistics(
            "Register",
            "send-verification-code",
            "verification-code-sent-to-user"
          );
        })
        .catch(function (err) {
          self.verifyCodeBtnLoading = false;

          self.errors.phone = err.response.data.errors.phone;

          self.step1.sendCode = true;

          self.registerComponentStatistics(
            "Register-Error",
            "phone-number-verification",
            "error:" + self.errors.phone
          );
        });
    },
    setupWebOTP: function(){
        if ('OTPCredential' in window) {
          // window.addEventListener('DOMContentLoaded', e => {
            // const input = document.querySelector('input[autocomplete="one-time-code"]');
            // if (!input) return;
            const ac = new AbortController();
            // const form = input.closest('form');
            // if (form) {
            //   form.addEventListener('submit', e => {
            //     ac.abort();
            //   });
            // }
            console.log('active');
            let self = this;
            navigator.credentials.get({
              otp: { transport:['sms'] }
            }).then(otp => {
              // alert(otp.code);
              self.step2.verification_code = otp.code;
              // alert('opt code is : ' + self.step2.verification_code);
              self.verifyCode();
              // input.value = otp.code;
              // if (form) form.submit();
            }).catch(err => {
              console.log(err);
              alert(err);
            });
          // });
        }
  
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
              "Register-Error",
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
            "Register-Error",
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
      };

      if (
        this.errorFlag === false &&
        !this.errors.name &&
        !this.errors.family
      ) {
        this.formSubmitActive = true;
        axios
          .post("api/v1/users", object)
          .then(function (response) {
            if (response.status === 201) {
              eventBus.$emit("modal", "userRegisterSuccess");
              self.createCookie("registerNewUser", true, 60);
              self.createCookie("firstLogin", true, 1);
              self.createCookie("firstThreeDaysRegistered", true, 4320); // 3 days expire date

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
                "Register",
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
        this.errors.activity_type = " نوع فعالیت خود را انتخاب کنید.";
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
    showNavigationMenu() {
      if (screen.width < 992) {
        if (document.querySelector(".custom-navigation")) {
          document.querySelector(".custom-navigation").style.display = "block";
         
        }
      }
    },
    hideNavigationMenu() {
      if (screen.width < 992) {
          if (document.querySelector(".custom-navigation")) {
            document.querySelector(".custom-navigation").style.display = "none";
          }
      }
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
  created() {
    var self = this;

    let userInfo = {
      is_buyer: !self.userType,
      is_seller: self.userType,
    };

    if (self.isUserLogin && self.userType == 1) {
      if (self.isUserInInquirySubmissionProcess()) {
        self.returnUserToPreviousPageAndChatBox(userInfo);
      } else {
        self.$router.push("/seller/register-product");
      }
    } else if (self.isUserLogin && self.userType != 1) {
      // self.returnUserToPreviousPageAndChatBox(userInfo);
      self.$router.push("/buyer/register-request");
    } else {
      self.loginCheckerLoading = false;
    }
    gtag("config", "UA-129398000-1", { page_path: "/register" });
  },
  mounted: function () {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        // self.$nextTick(this.stopLoader());
      }
    };
    // this.setupWebOTP();
  },
  updated: function () {
    this.$nextTick(this.stopLoader());
  },
  metaInfo() {
    return {
      title: "ثبت نام",
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
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات غذایی و کشاورزی ایران | صادرات محصولات غذایی و کشاورزی",
        },
        {
          property: "og:site_name",
          content:
            "باسکول بازارآنلاین خرید و فروش محصولات غذایی و کشاورزی ایران",
        },
        {
          property: "og:title",
          content: "باسکول | ثبت نام",
        },
      ],
    };
  },
};
</script>
