<style scoped>
p,
span {
  line-height: 1.5;
}
a.text-green {
  color: #00c569;

  margin: 10px auto;

  display: inline-block;
}

.submit-button,
.register-button {
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

  height: 15px;

  direction: rtl;

  font-size: 12px;
}
.register-form {
  overflow: hidden;
  direction: rtl;
}
.register-form p {
  margin: 4px 0;

  font-size: 13px;

  font-weight: bold;

  text-align: center;
}

.register-form p img {
  width: 23px;

  position: relative;

  top: 8px;
}

.register-form p span {
  margin-left: 10px;
}
.register-form .register-button {
  background: #00c569;
  cursor: pointer;
  display: block;
  text-align: center;
}
@media screen and (max-width: 430px) {
  .register-form p img {
    width: 20px;
    position: relative;
    top: 7px;
  }
  .form-contents .col-xs-3,
  .form-contents .col-xs-6 {
    padding: 0 5px;
  }
  .register-form p span {
    margin-left: 0;
  }
}
.vertical-padding {
  padding: 12px;
}
</style>

<template>
  <div>
    <!-- 		 <h2 class="title-contents">
		 	ورود به سامانه
		 </h2>
    -->
    <p class="error-message">
      <span v-if="$parent.showMsg" v-text="$parent.step1.msg"></span>
    </p>
    <div class="form-contents col-xs-12">
      <div class="row">
        <label for="phone-number">شماره موبایل</label>

        <div class="input-wrapper user-phone-number-wrapper">
          <input
            v-model="phoneNumber"
            :class="{
              error: $parent.errors.phone,
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
          <span
            v-if="$parent.errors.phone"
            v-text="$parent.errors.phone[0]"
          ></span>
        </p>

        <label for="phone-number">کلمه عبور</label>

        <div class="input-wrapper user-phone-number-wrapper">
          <input
            v-model="password"
            :class="{ error: $parent.errors.password, active: password.length }"
            id="password"
            type="password"
            class="dire"
            placeholder="کلمه عبور را وارد کنید"
          />

          <i class="fa fa-lock"></i>
        </div>

        <p class="error-message">
          <span
            v-if="$parent.errors.password"
            v-text="$parent.errors.password[0]"
          ></span>
        </p>

        <a href="#" class="text-green" @click.prevent="$parent.goToStep(2)"
          >رمز عبور خود را فراموش کرده اید؟</a
        >

        <button
          class="submit-button disabled"
          :class="{ active: phoneNumber.length >= 11 && password.length }"
          @click.prevent="doLogin()"
        >
          <span
            v-if="
              phoneNumber.length >= 11 &&
              password.length &&
              $parent.loginBtnLoading
            "
            class="fas fa-circle-notch fa-spin"
          ></span>

          ورود
        </button>

        <div class="register-form">
          <p>
            <span>برای ثبت نام در باسکول بر روی دکمه زیر کلیک کنید</span>
            <img src="./img/banner-arrow.png" />
          </p>

          <router-link to="/register" class="register-button vertical-padding"
            >ثبت نام در باسکول</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      phoneNumber: this.$parent.step1.phone,
      password: this.$parent.step1.password,
    };
  },
  methods: {
    doLogin() {
      this.$parent.doLogin();
    },
  },
  watch: {
    phoneNumber: function (value) {
      this.$parent.errors.phone = "";

      // if (this.phoneNumber.length >= 11) {
      this.phoneNumber = this.phoneNumber.substring(0, 11);
      this.$parent.step1.phone = this.phoneNumber;
      // }
    },
    password: function (value) {
      this.$parent.errors.password = "";
      this.$parent.step1.password = this.password;
    },
  },
  mounted() {
    if (this.$parent.isOsIOS()) {
      $("#phone-number").attr("type", "text");
    }
  },
};
</script>
