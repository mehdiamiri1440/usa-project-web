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
            <a class="close-modal" @click.prevent="reportResetData()">
              <i class="fa fa-times"></i>
            </a>

            <div class="modal-title">ورود / ثبت نام</div>
          </div>
          <div class="modal-body col-xs-12">
            <RegisterNumber v-if="currentStep == 0" />
            <VerifiedCode v-else-if="currentStep == 1" />
          </div>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
  </div>
</template>

<script>
import RegisterNumber from "./register-modal-steps/register-number";
import VerifiedCode from "./register-modal-steps/verified-code";

export default {
  components: {
    RegisterNumber,
    VerifiedCode,
  },
  data: function () {
    return {
      currentStep: 0,

      errors: {
        phone: "",
        verification_code: "",
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
      },
    };
  },
  methods: {
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
          this.goToStep(1);

          this.step2.verification_code = "";
          this.errors.verification_code = "";

          setTimeout(() => {
            this.step2.reSendCode = true;
          }, 120000);

          this.registerComponentStatistics(
            "Register",
            "send-verification-code",
            "verification-code-sent-to-user"
          );
        })
        .catch((err) => {
          this.step1.sendCode = false;

          this.errors.phone = err.response.data.errors.phone;

          this.step1.sendCode = false;

          this.registerComponentStatistics(
            "Register-Error",
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
              // it's very tricky condition, be careful
              window.location.href = "/login";
            } else {
              this.goToStep(2);
              //   self.getProvinceList();
            }
          } else if (response.data.status === false) {
            // this.goToStep(2);
            this.errors.verification_code =
              "کد وارد شده صحیح نیست یا منقضی شده است";

            this.registerComponentStatistics(
              "Register-Error",
              "verification-code-wrong",
              "error:" + this.errors.verification_code
            );
          }
        })
        .catch((error) => {
          this.step3.verifyCodeLoader = false;

          this.goToStep(1);
          this.errors.verification_code = "وارد کردن کد الزامی است.";

          this.registerComponentStatistics(
            "Register-Error",
            "verification-code-empty",
            "error:" + this.errors.verification_code
          );
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
    updateCounterDownTimer: function (seconds) {
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

      //   this.checkLevel();
      //   this.scrollToTop();
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
    validateRegx(input, regx) {
      return regx.test(input);
    },
    isOsIOS() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    reportResetData() {
      $(".modal").modal("hide");
      //   this.resetData();
    },
  },
  watch: {
    "step2.timeCounterDown": function () {
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
