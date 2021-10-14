<style scoped>
.register-content-wrapper {
  max-width: 660px;
  background: #fff;
  border-radius: 12px;
  margin: 30px auto 70px;
  overflow: hidden;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.05);
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
    <div class="wrapper-progressbar" v-if="currentStep != 6">
      <div class="custom-progressbar">
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuenow="21"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="custom-progressbar active">
        <div
          class="progress-bar"
          role="progressbar"
          aria-valuenow="21"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <div class="progressbar-items">
        <a class="progrees-item active">
          <span>1</span>
          <p>ثبت موبایل</p>
        </a>

        <a class="progrees-item" :class="{ active: currentStep >= 2 }">
          <span>2</span>
          <p>تایید شماره</p>
        </a>

        <a class="progrees-item" :class="{ active: currentStep >= 3 }">
          <span>3</span>
          <p>مشخصات فردی</p>
        </a>

        <a class="progrees-item" :class="{ active: currentStep >= 4 }">
          <span>4</span>
          <p>انتخاب آدرس</p>
        </a>

        <a class="progrees-item" :class="{ active: currentStep >= 5 }">
          <span>5</span>
          <p>حوزه فعالیت</p>
        </a>
      </div>
    </div>

    <RegisterNumber v-show="currentStep == 1" />
    <VerifiedCode v-show="currentStep == 2" />
    <PersonalInformation v-show="currentStep == 3" />
    <Location v-show="currentStep == 4" />
    <ActivityType v-show="currentStep == 5" />
    <RegisterLoader v-show="currentStep == 6" />
  </div>
</template>

<script>
import RegisterNumber from "./register-invited-user-steps/register-number";
import VerifiedCode from "./register-invited-user-steps/verified-code";
import PersonalInformation from "./register-invited-user-steps/personal-information";
import Location from "./register-invited-user-steps/location";
import ActivityType from "./register-invited-user-steps/activity-type";
import RegisterLoader from "./register-invited-user-steps/register-loader";
import device from "device-uuid/lib/device-uuid";
import pricingTableSellerContentVue from "../../../dashboard/seller/pricing-seller-page/pricing-table-seller-content.vue";

export default {
  props: ["categoryList"],
  components: {
    RegisterNumber,
    VerifiedCode,
    PersonalInformation,
    Location,
    ActivityType,
    RegisterLoader,
  },
  data: function () {
    return {
      currentStep: 1,
      currentUser: {
        profile: "",
        user_info: "",
      },
      errors: {
        phone: "",
        verification_code: "",
        name: "",
        family: "",
        activityType: "",
        categoryId: "",
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
        verifyCodeLoader: false,
        provinceList: "",
      },
      step4: {
        name: "",
        family: "",
        password: "",
      },
      step5: {
        provinceName: "",
        cityName: "",
      },
      step6: {
        activityType: "",
        categoryId: "",
      },
    };
  },
  methods: {
    registerUser() {
      if (!this.currentUser.user_info) {
        this.step4.password = this.makeRandomString(8);

        var object = {
          phone: this.step1.phone,
          first_name: this.step4.name,
          last_name: this.step4.family,
          verification_code: this.step2.verification_code,
          password: this.step4.password,
          user_name: "",
          sex: "آقا",
          province: this.step5.provinceName,
          city: this.step5.cityName,
          activity_type: this.step6.activityType,
          national_code: "",
          category_id: this.step6.categoryId,
          referred_user_name: true,
        };
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
                    window.location.href = "/login";
                  }
                })
                .catch((err) => {
                  console.log("err");
                });
              this.registerComponentStatistics(
                "invite-page",
                "successful-register",
                "user-registered-successfully"
              );
            }
          })
          .catch((err) => {
            console.log("User register API failed");
            this.registerComponentExceptions("User register API failed", true);
          });
      }
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
            "invite-page",
            "send-verification-code",
            "verification-code-sent-to-user"
          );
        })
        .catch((err) => {
          this.step1.sendCode = false;

          this.errors.phone = err.response.data.errors.phone;

          this.step1.sendCode = false;

          this.registerComponentStatistics(
            "Invite-Register-Error",
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
              window.location.href = "/login";
            } else {
              this.getProvinceList();
              this.goToStep(3);
            }
          } else {
            this.errors.verification_code = response.data.msg;

            this.registerComponentStatistics(
              "Invite-Register-Error",
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
            "Invite-Register-Error",
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
    updateCounterDownTimer(seconds) {
      if (seconds !== 1) {
        this.step2.timeCounterDown = seconds;
      } else this.step2.showTimer = false;
    },
    goToStep(step) {
      if (step < 1) {
        step = 1;
      } else if (step > 6) {
        step = 6;
      }
      this.currentStep = step;
      this.checkLevel();
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
    validateRegx(input, regx) {
      return regx.test(input);
    },
    isOsIOS() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
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
    registerComponentExceptions(description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal,
      });
    },
    checkLevel() {
      var progressElement = $(".custom-progressbar.active");
      switch (this.currentStep) {
        case 1:
          progressElement.css("width", "0");
          break;
        case 2:
          progressElement.css("width", "21%");
          break;
        case 3:
          progressElement.css("width", "43%");
          break;
        case 4:
          progressElement.css("width", "66%");
          break;
        case 5:
          progressElement.css("width", "89%");
          break;
      }
    },
  },
  mounted() {
    this.checkLevel();
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
