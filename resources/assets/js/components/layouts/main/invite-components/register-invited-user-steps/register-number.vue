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
}

input {
  width: 100%;
  border-radius: 8px;
  border: 1px solid;
  color: #bdc4cc;
  padding: 8px 15px 8px 45px;
  direction: ltr;
  transition: 150ms;
  text-align: right;
  background: #fbfbfb;
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
</style>

<template>
  <div class="text-rtl from-wrapper">
    <h2 class="title-contents">
      شماره موبایل
      <span class="red-text">*</span>
    </h2>

    <form v-on:submit.prevent="submitPhone()" class="form-contents col-xs-12">
      <div class="row">
        <label for="phone-number"> لطفا شماره موبایل خود را وارد کنید</label>

        <div class="input-wrapper user-phone-number-wrapper">
          <input
            v-model="phoneNumber"
            :class="{
              error: $parent.errors.phone,
              active: this.phoneNumber.length >= 11,
            }"
            id="phone-number"
            type="tel"
            placeholder="09123456789"
            pattern="[0-9]*"
          />

          <i
            class="fa fa-check-circle"
            v-if="this.phoneNumber.length >= 11 && !$parent.errors.phone"
          ></i>
          <i class="fa fa-times-circle" v-else-if="$parent.errors.phone"></i>
          <i class="fa fa-phone-square-alt" v-else></i>
        </div>

        <p class="error-message">
          <span
            v-if="$parent.errors.phone"
            v-text="$parent.errors.phone"
          ></span>
        </p>
        <div class="step-action text-left">
          <button
            class="submit-button disabled"
            :class="{
              active:
                this.phoneNumber.length >= 11 &&
                !$parent.step1.sendCode &&
                !$parent.errors.phone,
            }"
            @click.prevent="submitPhone()"
            :disabled="$parent.step1.sendCode"
          >
            ثبت شماره

            <i
              class="fas fa-circle-notch fa-spin"
              v-if="$parent.step1.sendCode"
            ></i>
            <i class="fa fa-arrow-left" v-else></i>
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
