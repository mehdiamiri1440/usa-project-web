<style scoped>
p,
span {
  line-height: 1.5;
}
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
  background: #FF9828;
  cursor: pointer;
}

.title-contents {
  font-weight: bold;
  font-size: 19px;
}

.form-contents {
  margin: 5px auto;
}

.form-contents lable {
  font-size: 12px;
}

.input-wrapper {
  margin: 6px auto 4px;
  position: relative;
}

input {
  box-shadow: none !important;
}
input {
  width: 100%;

  border-radius: 4px;

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
  text-align: center;

  color: #e41c38;

  font-weight: bold;

  height: 25px;

  margin-bottom: 5px;

  direction: rtl;

  font-size: 12px;
}
</style>

<template>
  <div>
    <div class="form-contents col-xs-12">
      <div class="row">
        <br />
        <label for="phone-number">لطفا شماره موبایل خود را وارد کنید</label>

        <div class="input-wrapper user-phone-number-wrapper">
          <input
            v-model="phoneNumber"
            :class="{
              error: $parent.errors[0],
              active: phoneNumber.length >= 11,
            }"
            id="phone-number"
            type="tel"
            class="dire"
            placeholder="شماره موبایل"
            pattern="[0-9]*"
          />

          <i class="fa fa-phone-square-alt"></i>
        </div>
        <p class="error-message">
          <span v-if="$parent.errors" v-text="$parent.errors[0]"></span>
        </p>
        <span class="small-description"
          >پس از وارد کردن شماره موبایل ما یک کد برای شما ارسال میکنیم تا از صحت
          شماره وارد شده اطمینان حاصل کنیم</span
        >

        <p>
          <br />
        </p>
        <button
          class="submit-button disabled"
          :class="{
            active: phoneNumber.length >= 11 && $parent.step2.sendCode,
          }"
          @click.prevent="getPhoneNumber()"
          :disabled="!$parent.step2.sendCode"
        >
          ارسال کد تایید
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      phoneNumber: this.$parent.step2.phone,
    };
  },
  methods: {
    getPhoneNumber() {
      this.$parent.step2.phone = this.phoneNumber;
      this.$parent.sendPhoneVerificationCode();
    },
  },
  watch: {
    phoneNumber: function (value) {
      this.$parent.errors[0] = "";
      if (this.phoneNumber.length >= 11) {
        this.phoneNumber = this.phoneNumber.substring(0, 11);
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
