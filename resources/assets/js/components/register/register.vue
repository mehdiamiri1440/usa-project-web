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
  min-height: 400px;
}

#main.latest-step {
  min-height: 650px;
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
  align-items: center;
  padding: 15px;
}

@media screen and (max-width: 767px) {
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
