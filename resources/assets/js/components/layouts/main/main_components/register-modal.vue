<style scoped>
.modal {
  text-align: center;
  padding: 0 !important;
}

.modal:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -4px;
}

.modal-dialog {
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}

.modal-content {
  overflow: hidden;
  border-radius: 12px;
}
.close-modal {
  font-size: 20px;

  color: #777;

  position: absolute;

  right: 0;

  padding: 8px 15px 2px;

  top: 0;
}

.modal-title {
  font-size: 16px;

  font-weight: 800;

  color: #474747;

  text-align: center;
}

.modal-header {
  padding: 9px 15px 10px;
}

.modal-body {
  padding: 0 15px;
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
}
</style>

<template>
  <div class="container">
    <div
      id="register-modal"
      class="register-modal modal fade"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close-modal" @click.prevent="closeRegisterModal()">
              <i class="fa fa-times"></i>
            </a>

            <div class="modal-title">ورود به باسکول</div>
          </div>
          <div class="modal-body col-xs-12" v-if="$parent.isPrice">
            <PriceRegisterNumber v-show="currentStep == 1" />
            <PriceVerifyCode v-show="currentStep == 2" />
            <UserInformations v-show="currentStep == 3" />
          </div>
          <div class="modal-body col-xs-12" v-else>
            <RegisterNumber v-show="currentStep == 1" />
            <VerifiedCode v-show="currentStep == 2" />
            <UserInformations v-show="currentStep == 3" />
            <RegisterRequest v-show="currentStep == 4" />
            <RegisterLoader v-show="currentStep == 5" />
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import PriceRegisterNumber from "./register-modal-steps/new-register-steps/register-number.vue";
import PriceVerifyCode from "./register-modal-steps/new-register-steps/verify-code.vue";
import PriceComplementary from "./register-modal-steps/new-register-steps/complementary-info.vue";
import RegisterNumber from "./register-modal-steps/register-number";
import VerifiedCode from "./register-modal-steps/verified-code";
import UserInformations from "./register-modal-steps/user-informations";
import ChoseRoute from "./register-modal-steps/chose-route";
import Location from "./register-modal-steps/location";
import RegisterRequest from "./register-modal-steps/register-reuqest";
import RegisterLoader from "./register-modal-steps/register-loader";
import device from "device-uuid/lib/device-uuid";

export default {
  props: ["isChat", "product", "isPrice"],
  components: {
    PriceRegisterNumber,
    PriceVerifyCode,
    PriceComplementary,
    RegisterNumber,
    VerifiedCode,
    UserInformations,
    ChoseRoute,
    Location,
    RegisterRequest,
    RegisterLoader,
  },
  data: function () {
    return {
      isMobile: false,
      currentStep: 1,
      activity_type: 0,
      stock: "",
      productName: "",
      errorFlag: false,
      currentUser: {
        profile: "",
        user_info: "",
      },
      errors: {
        phone: "",
        verification_code: "",
        name: "",
        family: "",
        city: "",
        province: "",
        stock: "",
        productName: "",
        activity_type: "",
      },
      step1: {
        phone: "",
        sendCode: false,
      },
      step2: {
        verification_code: "",
        reSendCode: false,
        timeCounterDown: 119,
        showTimer: false,
        now: null,
      },
      step3: {
        name: "",
        family: "",
        province: "",
        city: "",
        activity_type: "",
        provinceList: "",
        cityList: "",
        verifyCodeLoader: false,
      },
      step4: {
        name: "",
        family: "",
        password: "",
        activity_type: "",
      },
      step5: {
        provinceName: "",
        cityName: "",
      },
    };
  },
  methods: {
    provinceValidator(province) {
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
    cityValidator(city) {
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
    setProvince(event) {
      this.errors.province = "";
      this.setProvinceName(event);
      this.validateErrors();
    },
    setCity(event) {
      this.errors.city = "";
      this.setCityName(event);
      this.validateErrors();
    },
    submitUserInformation() {
      if (!this.step3.name) {
        this.errors.name = "لطفا نام خود را وارد کنید";
      }
      if (!this.step3.family) {
        this.errors.family = "لطفا نام خانوادگی خود را وارد کنید";
      }
     
      this.provinceValidator(this.step3.province);
      this.cityValidator(this.step3.city);

      if (!this.step3.activity_type) {
        this.errors.activity_type = "لطفا نوع فعالیت خود را انتخاب کنید";
      }
      
      if (this.step3.activity_type == 0) {
        this.openChatOrCall(this.step3);
      } else if(this.step3.activity_type == 1) {
        this.goToStep(4)
      }
    },

    /*----------*/
    registerBuyAd() {
      if (this.currentUser.user_info) {
        if (this.stock) {
          if (!this.errors.productName) {
            this.submitBuyAd(this.currentUser);
          }
        } else {
          $("#register-modal").modal("hide");
        }
      }
    },
    registerUser(isRoute = false) {
      if (!this.currentUser.user_info) {
        if (!isRoute && !this.isPrice) {
          this.currentStep = 7;
        }
        this.step4.password = this.makeRandomString(8);

        var object = {};

        if (this.isPrice) {
          this.stepsValidator();
          object = {
            phone: this.step1.phone,
            first_name: this.step3.name,
            last_name: this.step3.family,
            verification_code: this.step2.verification_code,
            password: this.step4.password,
            user_name: "",
            sex: "آقا",
            province: this.step3.province,
            city: this.step3.city,
            activity_type: this.step4.activity_type,
            national_code: "",
            category_id: this.product.main.category_id,
          };
        } else {
          object = {
            phone: this.step1.phone,
            first_name: this.step4.name,
            last_name: this.step4.family,
            verification_code: this.step2.verification_code,
            password: this.step4.password,
            user_name: "",
            sex: "آقا",
            province: this.step5.provinceName,
            city: this.step5.cityName,
            activity_type: this.activity_type,
            national_code: "",
            category_id: this.product.main.category_id,
          };
        }

        if (
          this.errorFlag === false &&
          !this.errors.name &&
          !this.errors.family
        ) {
          axios
            .post("/api/v1/users", object)
            .then((response) => {
              if (response.status === 201) {
                this.createCookie("registerNewUser", true, 60);

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
                      this.getCurrentUser(isRoute);
                    }
                  })
                  .catch((err) => {
                    console.log("err");
                  });
                this.registerComponentStatistics(
                  "Register-Modal",
                  "successful-register",
                  "user-registered-successfully"
                );
              }
            })
            .catch((err) => {
              console.log("User register API failed");
              this.registerComponentExceptions(
                "User register API failed",
                true
              );
            });
        }
      }
    },
    getCurrentUser(isRoute = false) {
      if (!isRoute && !this.isPrice) {
        this.currentStep = 7;
      }

      axios.post("/user/profile_info").then((response) => {
        this.currentUser = response.data;
        if (response.data.status && !isRoute) {
          $("#register-modal").modal("hide");
        }
      });
    },
    submitBuyAd(currentUser) {
      this.currentStep = 7;

      let formData = this.getBuyAdFormFields();

      axios
        .post("/user/add_buyAd", formData)
        .then((response) => {
          if (response.status === 201) {
            $("#register-modal").modal("hide");
          }
        })
        .catch((err) => {
          //   this.errors = err.response.data.errors;
          this.registerComponentExceptions("validation error in buyAd-request");
        });
    },
    openChatOrCall(currentUser) {
      setTimeout(() => {
        this.$parent.updatedCurrentUser = currentUser;
        // if (this.$parent.currentUser.user_info) {
        //   if (this.$parent.currentUser.user_info.is_seller == true) {
        //     this.$parent.showRegisterRequestBox = false;
        //   }
        // }
        if (this.isPrice) {
          this.$parent.priceModalFunction();
        } else {
          if (this.$parent.updatedCurrentUser.user_info.is_seller) {
            this.$parent.openChat(this.$parent.product);
          } else {
            if (this.isChat) {
              this.$parent.openChat(this.$parent.product);
            } else {
              this.$parent.activePhoneCall(this.isMobile);
            }
          }
        }
      }, 100);
    },
    getBuyAdFormFields() {
      let formData = new FormData();

      formData.append("name", this.productName);
      formData.append("requirement_amount", this.stock);
      formData.append("category_id", this.product.main.sub_category_id);
      return formData;
    },
    sendVerificationCode() {
      this.step2.reSendCode = false;
      this.step1.sendCode = true;

      this.step2.now = new Date().getTime();
      this.step2.showTimer = true;
      this.step2.timeCounterDown = 120;

      axios
        .post("/send_verification_code", {
          phone: this.step1.phone,
        })
        .then((response) => {
          this.step1.sendCode = false;
          this.goToStep(2);

          this.step2.verification_code = "";
          this.errors.verification_code = "";

          setTimeout(() => {
            this.step2.reSendCode = true;
          }, 120000);

          this.registerComponentStatistics(
            "Register-Modal",
            "send-verification-code",
            "verification-code-sent-to-user"
          );
        })
        .catch((err) => {
          this.step1.sendCode = false;

          this.errors.phone = err.response.data.errors.phone;

          this.step1.sendCode = false;

          this.registerComponentStatistics(
            "Register-Modal-Error",
            "phone-number-verification",
            "error:" + this.errors.phone
          );
        });
    },
    verifyCode() {
      this.step3.verifyCodeLoader = true;

      axios
        .post("/verify_code", {
          verification_code: this.step2.verification_code,
          phone: this.step1.phone,
        })
        .then((response) => {
          this.step3.verifyCodeLoader = false;

          if (response.data.status === true) {
            if (response.data.redirected) {
              //   window.location.href = "/login";
              this.getCurrentUser();
            } else {
              this.getProvinceList();
              this.goToStep(3);
            }
          } else {
            this.errors.verification_code = response.data.msg;

            this.registerComponentStatistics(
              "Register-Modal-Error",
              "verification-code-wrong",
              "error:" + this.errors.verification_code
            );
          }
        })
        .catch((error) => {
          this.step3.verifyCodeLoader = false;

          this.goToStep(2);
          this.errors.verification_code = "وارد کردن کد الزامی است.";

          this.registerComponentStatistics(
            "Register-Modal-Error",
            "verification-code-empty",
            "error:" + this.errors.verification_code
          );
        });
    },
    createCookie(name, value, minutes) {
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    },
    getProvinceList() {
      axios
        .post("/location/get_location_info", { cascade_list: true })
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
    registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
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
    descriptionValidator(text, name) {
      name = name ? name : "توضیحات";
      if (text != "") {
        if (
          !this.validateRegx(
            text,
            /^(?!.*[(@#!%$&*)])[s\u{0600}-\u{06FF}\u{060C}\u{061B}\u{061F}\u{0640}\u{066A}\u{066B}\u{066C}\u{0E}\u{0A}_.-،:()A-Za-z0-9 ]+$/u
          )
        ) {
          return `${name} شامل کاراکتر های غیرمجاز است`;
        }
      }
    },
    updateCounterDownTimer(seconds) {
      if (seconds !== 1) {
        this.step2.timeCounterDown = seconds;
      } else this.step2.showTimer = false;
    },
    goToStep(step) {
      if (step < 1) {
        step = 1;
      } else if (step > 4) {
        step = 4;
      }
      this.currentStep = step;
    },
    toLatinNumbers(num) {
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
    toLatinNumbersWithCommas: function (num) {
      if (num == null) {
        return null;
      }
      num = num.toString().replace(/,/g, "");
      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function (c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function (c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    convertUnits: function (number) {
      let data = number / 1000;
      let text = "";
      if (number < 1000) {
        return number + " " + "کیلوگرم";
      } else {
        let ton = data.toString().split(".")[0];
        ton = this.getNumberWithCommas(ton);
        let kg = number.toString().substr(ton.length);
        kg = kg.replace(/^0+/, "");
        ton = ton + " " + "تن";

        if (kg) {
          kg = " و " + kg + " کیلوگرم";
          text = ton + kg;
        } else {
          text = ton;
        }

        return text;
      }
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    validateRegx(input, regx) {
      return regx.test(input);
    },
    isOsIOS() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    closeRegisterModal() {
      $(".modal").modal("hide");
      //   this.resetData();
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
    checkMobileWidth() {
      window.addEventListener("resize", (event) => {
        this.cehckPageWidth();
      });
    },
    cehckPageWidth() {
      let pageWidth = window.outerWidth;
      if (pageWidth <= 991) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    registerComponentExceptions(description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal,
      });
    },
    handleBackKeys() {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", (e) => {
        if (this.currentStep > 1) {
          this.currentStep--;
          history.pushState(null, null, window.location);
        } else {
          this.closeRegisterModal();
        }
      });
    },
  },
  mounted() {
    this.cehckPageWidth();
    this.checkMobileWidth();
    $("#register-modal").on("show.bs.modal", (e) => {
      this.handleBackKeys();
    });
    $("#register-modal").on("hidden.bs.modal", (e) => {
      if (this.currentUser.user_info) {
        this.openChatOrCall(this.currentUser);
      } else {
        this.currentStep = 1;
        this.$parent.isPrice = false;
      }
    });
  },
  watch: {
    "step2.timeCounterDown"() {
      var self = this;
      var now = new Date().getTime();

      var distance = now - this.step2.now;

      var seconds = 119 - Math.floor((distance % (1000 * 120)) / 1000);

      setTimeout(function () {
        seconds - 1;
      }, 1000);
      setTimeout(function () {
        self.updateCounterDownTimer(seconds);
      }, 1000);
    },
  },
};
</script>
