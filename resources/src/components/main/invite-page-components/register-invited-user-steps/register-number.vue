<style scoped>
p,
span {
  line-height: 1.5;
}

label.input-title {
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 26px;
}

.submit-button {
  background: #c2c9d1;
  color: #9e9e9e;
  border: none;
  border-radius: 8px;
  width: 100%;
  font-size: 16px;
  padding: 10px 0 9px;
  transition: 300ms;
  cursor: default;
  margin: 5px auto 0;
  display: block;
}

.submit-button.active {
  background: #00c569;
  cursor: pointer;
  color: #fff;
}

.title-contents {
  font-weight: bold;
  font-size: 19px;
}

.form-contents {
  margin: 0 auto;
  max-width: 400px;
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

  border-radius: 8px;

  border: 1px solid;

  padding: 8px 15px 9px 45px;

  color: #bebebe;

  direction: ltr;

  transition: 300ms;
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
  text-align: right;
  color: #e41c38;
  height: 25px;
  margin-bottom: 5px;
  direction: rtl;
  font-size: 12px;
}
</style>

<template>
  <div class="form-contents col-xs-12">
    <div class="row">
      <label class="input-title" for="phone-number">
        برای ورود یا ثبت نام ، شماره موبایل خود را وارد کنید
      </label>

      <form
        v-on:submit.prevent="submitPhone()"
        class="input-wrapper user-phone-number-wrapper"
      >
        <input
          v-model="phoneNumber"
          :class="{
            error: $parent.errors.phone,
            active: this.phoneNumber.length >= 11,
          }"
          id="phone-number"
          type="tel"
          class="dire"
          placeholder="شماره موبایل"
          pattern="[0-9]*"
        />

        <i class="fa fa-phone-square-alt"></i>
      </form>

      <p class="error-message">
        <i class="fa fa-exclamation" v-if="$parent.errors.phone"></i>
        <span v-if="$parent.errors.phone" v-text="$parent.errors.phone"></span>
      </p>
      <button
        class="submit-button disabled"
        :class="{
          active: this.phoneNumber.length >= 11 && $parent.step1.sendCode,
        }"
        @click.prevent="submitPhone()"
        :disabled="!$parent.step1.sendCode"
      >
        ورود به باسکول
        <i
          v-if="$parent.verifyCodeBtnLoading"
          class="fas fa-circle-notch fa-spin"
        ></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      phoneNumber: "",
    };
  },
  methods: {
    submitPhone() {
      if (!this.phoneNumber) {
        this.$parent.errors.phone = "لطفا  شماره موبایل خود را وارد کنید";
      } else if (this.phoneNumber && this.phoneNumber.length < 11) {
        this.$parent.errors.phone =
          "لطفا  شماره موبایل خود را به صورت کامل وارد کنید";
      } else if (!this.$parent.errors.phone) {
        this.$parent.sendVerificationCode();
      }
    },
  },
  watch: {
    phoneNumber: function (value) {
      this.$parent.errors.phone = "";

      if (value) {
        if (this.phoneNumber.length >= 11) {
          this.phoneNumber = this.phoneNumber.substring(0, 11);
        }
        let number = this.$parent.toLatinNumbers(value);
        if (!this.$parent.validateRegx(number, /^\d*$/)) {
          this.$parent.errors.phone =
            "لطفا شماره موبایل را به صورت عددی وارد کنید";
        } else if (number.length >= 2) {
          if (number.substring(0, 2) != "09") {
            this.$parent.errors.phone = "فرمت شماره موبایل درست نیست";
          }
        }
        if (!this.$parent.errors.phone) {
          this.$parent.step1.phone = number;
        }
      }
    },
  },
  mounted() {
    if (this.$parent.isOsIOS()) {
      $("#phone-number").attr("type", "text");
    }
  },
};
</script>
