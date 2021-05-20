<style scoped>
p,
span {
  line-height: 1.5;
}

.from-wrapper {
  max-width: 400px;
  margin: 49px auto 70px;
  overflow: hidden;
}

.title-contents {
  font-weight: 500;
  font-size: 18px;
  color: #555;
  margin-bottom: 16px;
}

.form-contents {
  line-height: 1.618;
}

.form-contents label {
  font-weight: 500;
  color: #777;
  margin: 0 auto 7px;
}

.input-wrapper {
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}

input {
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  color: #bdc4cc;
  padding: 8px 0 8px;
  direction: ltr;
  transition: 150ms;
  background: #fbfbfb;
  max-width: 70px;
  text-align: center;
}

.input-wrapper i {
  display: inline-block;
  position: absolute;
  left: 15px;
  font-size: 21px;
  color: #bebebe;
  top: 11px;
  transition: 150ms;
}

input:focus,
input:focus + i {
  color: #333;
}

input.active {
  border-color: #4dc0bb;
  color: #333;
}

input.active + i {
  color: #4dc0bb;
}

input.active:focus,
input.active:focus + i,
input.active + i {
  border-color: #4dc0bb;
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
  color: #e41c38;
  height: 22px;
  direction: rtl;
  font-size: 13px;
  padding-top: 2px;
}

.step-action {
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.submit-button {
  background: #e0e0e0;
  color: #fff;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 18px;
  padding: 8px;
  transition: 150ms;
  cursor: default;
  max-width: 147px;
  display: inline-block;
}

.submit-button.back-button {
  background: #fff;
  color: #909090;
  border: 1px solid #bebebe;
  cursor: pointer;
  max-width: 127px;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
}
.submit-button.active:hover i {
  right: 3px;
  transition: 150ms;
}

.submit-button i {
  position: relative;
  top: 1px;
  font-size: 14px;
  right: 0;
  transition: 150ms;
}

.count-down-timer {
  text-align: center;
  margin-top: 16px;
  margin-bottom: -2px;
}

.count-down-timer p {
  font-weight: bold;
}

.resend-code-button {
  background: none;
  border: none;
  cursor: pointer;
}
</style>

<template>
  <div class="text-rtl from-wrapper">
    <h2 class="title-contents">
      کد تایید را وارد نمایید
      <span class="red-text">*</span>
    </h2>

    <form
      v-on:submit.prevent="submitVerifyCode()"
      class="form-contents col-xs-12"
    >
      <div class="row">
        <label for="phone-number">
          کد ارسال شده به شماره ی
          <span class="light-green-text" v-text="$parent.step1.phone"> </span>
          را وارد کنید
        </label>
        <div class="input-wrapper">
          <input
            v-model="code.number1"
            name="code"
            class="code-input"
            placeholder="_"
            maxlength="1"
            type="tel"
            onfocus="this.select();"
            :class="{
              error: this.$parent.errors.verification_code,
              active: code.number1.length,
            }"
          />
          <input
            v-model="code.number2"
            name="code"
            class="code-input"
            placeholder="_"
            maxlength="1"
            type="tel"
            onfocus="this.select();"
            :class="{
              error: this.$parent.errors.verification_code,
              active: code.number2.length,
            }"
          />
          <input
            v-model="code.number3"
            name="code"
            class="code-input"
            placeholder="_"
            maxlength="1"
            type="tel"
            onfocus="this.select();"
            :class="{
              error: this.$parent.errors.verification_code,
              active: code.number3.length,
            }"
          />
          <input
            v-model="code.number4"
            name="code"
            class="code-input"
            placeholder="_"
            maxlength="1"
            type="tel"
            onfocus="this.select();"
            :class="{
              error: this.$parent.errors.verification_code,
              active: code.number4.length,
            }"
          />
        </div>

        <p class="error-message">
          <span
            v-if="$parent.errors.verification_code"
            v-text="$parent.errors.verification_code"
          ></span>
        </p>
        <div class="count-down-timer">
          <p class="gray-text text-center" v-if="$parent.step2.showTimer">
            ارسال مجدد کد تا
            <span
              class="blue-text"
              v-text="$parent.step2.timeCounterDown"
            ></span>
            ثانیه دیگر
          </p>
          <button
            v-else
            class="resend-code-button blue-text"
            type="button"
            @click="reSendCode()"
            :disabled="$parent.step2.reSendCode === false"
            :value="$parent.step2.timeCounterDown"
          >
            ارسال مجدد کد تایید
          </button>
        </div>
        <div class="step-action text-left">
          <!-- this.phoneNumber.length >= 11 && -->
          <button
            class="submit-button disabled"
            :class="{
              active:
                currentCode.length >= 4 &&
                !this.$parent.errors.verification_code &&
                !$parent.step3.verifyCodeLoader,
            }"
            @click.prevent="submitVerifyCode()"
            :disabled="$parent.step3.verifyCodeLoader"
          >
            مرحله بعد

            <i
              class="fas fa-circle-notch fa-spin"
              v-if="$parent.step3.verifyCodeLoader"
            ></i>
            <i class="fa fa-arrow-left" v-else></i>
          </button>

          <button
            class="submit-button back-button"
            @click.prevent="$parent.currentStep--"
          >
            <i class="fa fa-arrow-right"></i>
            مرحله قبل
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      errors: {
        number1: "",
        number2: "",
        number3: "",
        number4: "",
      },
      code: {
        number1: "",
        number2: "",
        number3: "",
        number4: "",
      },
      currentCode: "",
    };
  },
  methods: {
    init() {
      this.inputCodeLimits();
    },
    submitVerifyCode() {
      if (this.$parent.step2.verification_code) {
        if (!this.$parent.errors.verification_code) {
          this.$parent.verifyCode();
        }
      } else {
        this.$parent.errors.verification_code = "لطفا کد تایید را وارد کنید.";
      }
    },
    inputCodeLimits() {
      const inputElements = [...$("input.code-input")];

      inputElements.forEach((ele, index) => {
        ele.addEventListener("keydown", (e) => {
          if (e.keyCode === 8 && e.target.value === "")
            inputElements[Math.max(0, index - 1)].focus();
        });
        ele.addEventListener("input", (e) => {
          const [first, ...rest] = e.target.value;
          e.target.value = first ? first : "";
          if (index !== inputElements.length - 1 && first !== undefined) {
            inputElements[index + 1].focus();
            inputElements[index + 1].value = rest.join("");
            inputElements[index + 1].dispatchEvent(new Event("input"));
          }
        });
      });
    },
    validateVerifyNumber(value) {
      this.errors.each;
      if (!this.$parent.validateRegx(value, /^\d*$/)) {
        return "لطفا  فقط عدد وارد کنید";
      }
    },
    sumCodeNumbers() {
      let code =
        this.code.number1 +
        this.code.number2 +
        this.code.number3 +
        this.code.number4;

      this.currentCode = this.$parent.toLatinNumbers(code);
    },
    reSendCode() {
      this.currentCode = "";
      this.code.number1 = "";
      this.code.number2 = "";
      this.code.number3 = "";
      this.$parent.errors.verification_code = " ";
      this.$parent.sendVerificationCode();
    },
  },
  mounted() {
    if (this.$parent.isOsIOS()) {
      $("#phone-number").attr("type", "text");
    }
    this.init();
  },
  watch: {
    "code.number1"(value) {
      this.sumCodeNumbers();
      this.errors.number1 = false;
      if (value) {
        let error = this.validateVerifyNumber(this.currentCode);
        this.$parent.errors.verification_code = error;
      }
    },
    "code.number2"(value) {
      this.sumCodeNumbers();
      this.errors.number2 = false;
      if (value) {
        let error = this.validateVerifyNumber(this.currentCode);
        this.$parent.errors.verification_code = error;
      }
    },
    "code.number3"(value) {
      this.sumCodeNumbers();
      this.errors.number3 = false;
      if (value) {
        let error = this.validateVerifyNumber(this.currentCode);
        this.$parent.errors.verification_code = error;
      }
    },
    "code.number4"(value) {
      this.sumCodeNumbers();
      this.errors.number4 = false;
      if (value) {
        let error = this.validateVerifyNumber(this.currentCode);
        this.$parent.errors.verification_code = error;
      }
    },
    currentCode(value) {
      if (value) {
        this.$parent.step2.verification_code = value;
      }
    },
  },
};
</script>
