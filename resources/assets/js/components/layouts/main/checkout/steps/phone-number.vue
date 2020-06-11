<style scoped>
/* input styles  */

.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  padding: 10px 0 9px;
  transition: 300ms;
  cursor: default;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
}
.form-contents {
  line-height: 1.618;
  margin-top: 30px;
  margin-bottom: 50px;
}

.form-contents lable {
  font-size: 12px;
}

.input-wrapper {
  margin: 6px auto 4px;
  position: relative;
}

input {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  color: #bebebe;

  direction: ltr;

  transition: 300ms;
}

input {
  padding: 8px 15px 9px 45px;
}
.verify-code-wrapper input {
  padding: 8px 15px 9px;
  text-align: center;
}
.timer-button {
  background: none;

  border: 1px solid;

  color: #00c569;

  border-radius: 4px;

  padding: 3px 10px;

  margin-bottom: 9px;
  transition: 300ms;
  cursor: pointer;
}
.timer-button:hover {
  background: #00c569;
  transition: 300ms;
  color: #fff;
}
.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 300ms;
}

input:focus,
input:focus + i {
  color: #333;
}

input.active {
  border-color: #00c569;
  color: #333;
}

input.active + i {
  color: #00c569;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #00c569;
}

input.error {
  color: #333;
  border-color: #e41c38;
}

input.error + i {
  color: #e41c38;
}

input.error:focus,
input.error:focus + i {
  border-color: #e41c38;
}

.error-message {
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 25px;

  margin-bottom: 5px;

  direction: rtl;

  font-size: 12px;
}

/* headr styles  */
.header-section > p {
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  color: #777;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 15px;
  margin-top: 20px;
}

/* product styles */
.product-section {
  margin-top: 15px;
  overflow: hidden;
}

.product-image {
  width: 100px;
  height: 100px;
  background: #bdc4cc;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.product-image img {
  height: 100%;
  width: initial;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.product-contents {
  width: calc(100% - 100px);
}

.product-contents .content {
  padding: 0 15px;
  line-height: 1.618;
  color: #777;
}
.product-contents .content i,
.shipping-badge i {
  margin-left: 7px;
}
.shipping-badge {
  color: #777;
}
.product-title {
  font-size: 16px;
  font-weight: bold;
}

.content.pull-right > p {
  margin-bottom: 15px;
}
.content.pull-right > p > span:last-of-type {
  color: #333;
}

.prising-section {
  margin: 20px auto;
}

.price-item {
  color: #777;
  font-size: 20px;
  font-weight: bold;
  padding-top: 11px;
}
.price-item > span {
  color: #00c569;
}
.change-step > button {
  margin: 0;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
}
.change-step > button i {
  font-size: 26px;
  line-height: 1;
}
.change-step > button span {
  position: relative;
  top: -5px;
  margin-left: 10px;
}
@media screen and (max-width: 992px) {
  .change-step {
    margin-top: 20px;
  }
}
@media screen and (max-width: 600px) {
  .product-contents {
    width: 100%;
  }
  .product-image {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
  .badged-wrapper {
    float: right !important;
    padding: 15px;
    width: 100%;
  }
  .change-step {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: #fff;
    padding: 15px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  }
}
</style>

<template>
  <div class="confirm-product-contents">
    <section class="product-section-wrapper">
      <div class="header-section">
        <p>اطلاعات محصول</p>
      </div>
      <div
        v-if="this.currentStep == 0"
        class="form-contents text-right col-md-4 col-md-offset-4 col-xs-12"
      >
        <div class="row">
          <label for="phone-number">لطفا شماره موبایل خود را وارد کنید</label>
          <div class="input-wrapper phone-number-wrapper">
            <input
              v-model="step1.phoneNumber"
              :class="{'error' : errors.phoneNumber[0] , 'active' : this.step1.phoneNumber.length >= 11}"
              id="phone-number"
              type="tel"
              class="dire"
              placeholder="شماره موبایل"
              pattern="[0-9]*"
            />

            <i class="fa fa-phone-square-alt"></i>
          </div>

          <span
            class="small-description"
          >پس از وارد کردن شماره موبایل ما یک کد برای شما ارسال میکنیم تا از صحت شماره وارد شده اطمینان حاصل کنیم</span>

          <p class="error-message">
            <span v-if="errors.phoneNumber" v-text="errors.phoneNumber[0]"></span>
          </p>
          <button
            class="submit-button disabled"
            :class="{'active' : this.step1.phoneNumber.length >= 11 }"
            @click.prevent="send_verification_code()"
          >
            <span v-if="verifyCodeBtnLoading" class="fas fa-circle-notch fa-spin"></span>
            ارسال کد تایید
          </button>
        </div>
      </div>
      <div
        v-if="this.currentStep == 1"
        class="form-contents text-right col-md-4 col-md-offset-4 col-xs-12"
      >
        <div class="row">
          <label for="verify-code">
            کد ارسال شده به شماره ی
            <span class="green-text" v-text="step1.phoneNumber"></span>
            را وارد کنید
          </label>

          <div class="input-wrapper verify-code-wrapper">
            <div class="row">
              <div class="col-xs-3">
                <input
                  v-model="step2.verification.verifycode1"
                  :class="{'error' : this.errors.verification_code[0], 'active' : step2.verification.verifycode1.length}"
                  id="verify-code-1"
                  type="number"
                  class="dire"
                  placeholder="_"
                  max="9"
                  onfocus="this.select();"
                  pattern="[0-9]*"
                  v-on:keyup="keymonitor($event,2)"
                />
              </div>

              <div class="col-xs-3">
                <input
                  v-model="step2.verification.verifycode2"
                  :class="{'error' : this.errors.verification_code[0], 'active' : step2.verification.verifycode2.length}"
                  id="verify-code-2"
                  type="number"
                  class="dire"
                  placeholder="_"
                  max="9"
                  onfocus="this.select();"
                  pattern="[0-9]*"
                  v-on:keyup="keymonitor($event,3)"
                />
              </div>

              <div class="col-xs-3">
                <input
                  v-model="step2.verification.verifycode3"
                  :class="{'error' : this.errors.verification_code[0] , 'active' : step2.verification.verifycode3.length }"
                  id="verify-code-3"
                  type="number"
                  class="dire"
                  placeholder="_"
                  max="9"
                  onfocus="this.select();"
                  pattern="[0-9]*"
                  v-on:keyup="keymonitor($event,4)"
                />
              </div>

              <div class="col-xs-3">
                <input
                  v-model="step2.verification.verifycode4"
                  :class="{'error' : this.errors.verification_code[0], 'active' : step2.verification.verifycode4.length}"
                  id="verify-code-4"
                  type="number"
                  class="dire"
                  placeholder="_"
                  max="9"
                  onfocus="this.select();"
                  pattern="[0-9]*"
                  v-on:keyup="keymonitor($event,5)"
                />
              </div>
            </div>
          </div>

          <p class="error-message">
            <span v-if="this.errors.verification_code[0]" v-text="this.errors.verification_code[0]"></span>
          </p>

          <div class="timer-wrapper margin-15-auto text-center" v-if="step2.showTimer">
            <span>مدت اعتبار کد</span>

            <span class="green-text" v-text="step2.timeCounterDown"></span>
            <span>ثانیه</span>
          </div>

          <div class="timer-wrapper margin-15-auto text-center" v-else>
            <button
              class="timer-button"
              type="button"
              @click="currentStep == 0"
              :disabled="step2.reSendCode === false"
              :value="step2.timeCounterDown"
            >ارسال مجدد کد فعال سازی</button>
          </div>

          <button
            class="submit-button disabled"
            :class="{'active' : step2.verification.currentCode.length == 4}"
            @click.prevent="verify_code()"
          >
            <span v-if="verifyCodeBtnLoading" class="fas fa-circle-notch fa-spin"></span>
            بررسی کد
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentStep: 0,
      errors: {
        verification_code: [],
        phoneNumber: []
      },
      step1: {
        phoneNumber: "",
        sendCode: true
      },
      step2: {
        // verification_code: "",
        reSendCode: false,
        timeCounterDown: 120,
        showTimer: false,
        now: null,
        verification: {
          verifycode1: "",
          verifycode2: "",
          verifycode3: "",
          verifycode4: "",
          currentCode: ""
        }
      },

      verifyCodeBtnLoading: false
    };
  },
  methods: {
    init: function() {},
    send_verification_code: function() {
      this.verifyCodeBtnLoading = true;
      this.step2.reSendCode = false;
      this.step1.sendCode = false;

      var self = this;

      this.step2.now = new Date().getTime();
      this.step2.showTimer = true;
      this.step2.timeCounterDown = 119;

      axios
        .post("/send_verification_code", {
          phone: this.toLatinNumbers(this.step1.phoneNumber)
        })
        .then(function(response) {
          self.verifyCodeBtnLoading = false;

          self.currentStep = 1;
          self.step1.sendCode = true;

          self.step2.verification.currentCode = "";
          self.errors.verification_code = [];

          setTimeout(function() {
            self.step2.reSendCode = true;
          }, 120000);

          self.registerComponentStatistics(
            "Register",
            "send-verification-code",
            "verification-code-sent-to-user"
          );
        })
        .catch(function(err) {
          self.verifyCodeBtnLoading = false;

          self.errors.phoneNumber = err.response.data.errors.phone;

          self.step1.sendCode = true;

          self.registerComponentStatistics(
            "Register-Error",
            "phone-number-verification",
            "error:" + self.errors.phoneNumber[0]
          );
        });
    },
    verify_code: function() {
      var self = this;
      this.sumCodeNumbers();
      axios
        .post("/verify_code", {
          verification_code: this.toLatinNumbers(
            this.step2.verification.currentCode
          ),
          phone: this.toLatinNumbers(this.step1.phoneNumber)
        })
        .then(function(response) {
          self.verifyCodeBtnLoading = false;

          if (response.data.status === true) {
            if (response.data.redirected) {
              // it's very tricky condition, be careful
              window.location.href = "/login";
            } else {
              this.$router.push({ name: "registerInformation" });
            }
          } else if (response.data.status === false) {
            self.errors.verification_code = [];
            self.errors.verification_code.push(
              "کد وارد شده صحیح نیست یا منقضی شده است"
            );
            self.registerComponentStatistics(
              "Register-Error",
              "verification-code-wrong",
              "error:" + self.errors.verification_code[0]
            );
          }
        })
        .catch(function(error) {
          self.verifyCodeBtnLoading = false;
          self.errors.verification_code = [];
          self.errors.verification_code.push("وارد کردن کد الزامی است.");
          self.registerComponentStatistics(
            "Register-Error",
            "verification-code-empty",
            "error:" + self.errors.verification_code[0]
          );
        });
    },
    isOsIOS: function() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    toLatinNumbers: function(num) {
      if (num == null) {
        return null;
      }

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function(c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function(c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    reSendCode() {
      this.currentStep = 0;
    },
    sumCodeNumbers() {
      this.errors.verification_code = [];
      this.step2.verification.currentCode =
        this.step2.verification.verifycode1 +
        this.step2.verification.verifycode2 +
        this.step2.verification.verifycode3 +
        this.step2.verification.verifycode4;
    },
    tabTopNext(element) {
      $(element).focus();
    },
    keymonitor: function(event, index) {
      var keyWatch = this.toLatinNumbers(event.key);

      if (
        (event.keyCode >= 48 && event.keyCode <= 57) ||
        (event.keyCode >= 96 && event.keyCode <= 105) ||
        (keyWatch >= 0 && keyWatch <= 9)
      ) {
        if (index <= 4) {
          this.tabTopNext("#verify-code-" + index);
        }
      }
    },
    updateCounterDownTimer: function(seconds) {
      if (seconds !== 1) {
        this.step2.timeCounterDown = seconds;
      } else this.step2.showTimer = false;
    }
  },
  mounted: function() {
    this.init();
    if (this.isOsIOS()) {
      $("#phone-number").attr("type", "text");
    }
  },
  watch: {
    "step1.phoneNumber": function(value) {
      this.errors.phoneNumber[0] = "";

      if (this.step1.phoneNumber.length >= 11) {
        this.step1.phoneNumber = this.step1.phoneNumber.substring(0, 11);
      }
    },
    "step2.verification.verifycode1": function(value) {
      this.sumCodeNumbers();
      this.step2.verification.verifycode1 = this.step2.verification.verifycode1.substring(
        0,
        1
      );
    },
    "step2.verification.verifycode2": function(value) {
      this.sumCodeNumbers();
      this.step2.verification.verifycode2 = this.step2.verification.verifycode2.substring(
        0,
        1
      );
    },
    "step2.verification.verifycode3": function(value) {
      this.sumCodeNumbers();
      this.step2.verification.verifycode3 = this.step2.verification.verifycode3.substring(
        0,
        1
      );
    },
    "step2.verification.verifycode4": function(value) {
      this.sumCodeNumbers();
      this.step2.verification.verifycode4 = this.step2.verification.verifycode4.substring(
        0,
        1
      );
    },
    "step2.timeCounterDown": function() {
      var self = this;
      var now = new Date().getTime();

      var distance = now - this.step2.now;

      var seconds = 119 - Math.floor((distance % (1000 * 120)) / 1000) + 1;

      setTimeout(function() {
        self.updateCounterDownTimer(seconds);
      }, 1000);
    }
  }
};
</script>