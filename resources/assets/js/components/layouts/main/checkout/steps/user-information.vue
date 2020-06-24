<style scoped>
/* input styles  */

input[type="text"],
input[type="tel"],
input[type="password"],
textarea {
  padding: 7px 15px;
}
.input-wrapper {
  position: relative;
  margin-bottom: 15px;
}
.input-wrapper.select-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 42px;

  font-family: "Font Awesome 5 Free", sans-serif;

  font-weight: 900;

  left: 25px;

  font-size: 20px;

  z-index: 0;
}
select {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 8px 15px;
  position: relative;

  z-index: 1;

  color: #777777;

  direction: rtl;

  transition: 200ms;

  background: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}
.input-wrapper i {
  display: inline-block;

  position: absolute;

  left: 15px;

  font-size: 20px;

  color: #bebebe;

  top: 9px;

  transition: 200ms;
}

select option {
  color: #333;
}

select:focus {
  color: #333;
}

select.active,
input.active,
textarea.active {
  color: #333;
  border-color: #00c569;
}

select.active:focus {
  color: #00c569;
}

select.error {
  color: #333;
  border-color: #e41c38;
}

select.error,
input.error,
textarea.error {
  color: #333;
  border-color: #e41c38;
}

.error-message {
  color: #e41c38;
  font-weight: bold;
  margin-bottom: 5px;
  direction: rtl;
  font-size: 12px;
  padding: 7px 0;
  text-align: right;
}

.form-contents {
  margin: 10px auto 0;
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

/* forms styles */

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

/* radio button styles  */

.label-radio label svg {
  width: 20px;
  height: 30px;
  float: right;
}

.label-radio {
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  direction: rtl;
  padding: 8px 0 8px 0;
  font-size: 14px;
  width: calc(50% - 40px);
  text-align: center;
}

.label-radio:nth-of-type(2) {
  margin-left: 16px;
}
/* Hide the browser's default radio button */
.label-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  margin: 0;
  width: 100%;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;

  top: 11px;

  right: 13px;

  height: 12px;

  width: 12px;

  background-color: #eee;

  border-radius: 50%;
}

.label-radio label {
  margin: 0;
}

/* On mouse-over, add a grey background color */
.label-radio:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.label-radio input:checked ~ .checkmark {
  background-color: #00c569;
}

.label-radio input:checked ~ label::after {
  border-color: #00c569;
}

.label-radio label::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: -2px;
  bottom: 0;
  z-index: 0;
  margin: 0;
  padding: 0;
  border-radius: 3px;
  border: 1px solid #bdc4cc;
}

.label-radio label i {
  margin: 0 4px;
}
@media screen and (max-width: 992px) {
  .change-step {
    margin-top: 20px;
  }
}
@media screen and (max-width: 600px) {
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
      <div v-if="!$parent.currentUser.user_info && $parent.isProfileLoaded" class="header-section">
        <p>اطلاعات کاربری</p>
      </div>
      <div
        v-if="!$parent.currentUser.user_info && $parent.isProfileLoaded"
        class="main-form-wrapper"
      >
        <div class="form-contents col-xs-12">
          <div class="row">
            <div class="radio-wrapper col-xs-12 col-sm-8 text-right col-md-4 pull-right">
              <label for="gender">جنسیت خود را انتخاب کنید</label>

              <div class="label-radio">
                <input
                  v-model="sex"
                  type="radio"
                  value="خانم"
                  name="radio"
                  :checked="'خانم'  == sex"
                />

                <span class="checkmark"></span>

                <label>
                  <i class="fa fa-female"></i>
                  خانم
                </label>
              </div>

              <div class="label-radio">
                <input type="radio" v-model="sex" value="آقا" :checked="'آقا'  == sex" name="radio" />
                <span class="checkmark"></span>
                <label>
                  <i class="fa fa-male"></i>
                  آقا
                </label>
              </div>
              <p class="error-message">
                <span v-if="errors.sex" v-text="errors.sex"></span>
              </p>
            </div>
          </div>
        </div>
        <div class="form-contents text-rtl col-xs-12">
          <div class="row">
            <div class="input-wrapper col-xs-12 col-md-4 pull-right">
              <label for="first-name">
                نام خود را وارد کنید
                <span class="red-text">*</span>
              </label>

              <input
                v-model="firstName"
                :class="{'error' : errors.firstName , 'active' : firstName.length}"
                id="first-name"
                type="text"
                class="dire"
                placeholder="نام"
              />

              <p class="error-message">
                <span v-if="errors.firstName" v-text="errors.firstName"></span>
              </p>
            </div>
            <div class="input-wrapper col-xs-12 col-md-4 pull-right">
              <label for="first-name">
                نام خانوادگی خود را وارد کنید
                <span class="red-text">*</span>
              </label>

              <input
                v-model="lastName"
                :class="{'error' : errors.lastName , 'active' : lastName.length}"
                id="first-name"
                type="text"
                class="dire"
                placeholder="نام خانوادگی"
              />

              <p class="error-message">
                <span v-if="errors.lastName" v-text="errors.lastName"></span>
              </p>
            </div>
            <div class="input-wrapper col-xs-12 col-md-4 pull-right">
              <label for="first-name">
                یک گذرواژه انتخاب کنید
                <span class="red-text">(۸ کاراکتر یا بیشتر) *</span>
              </label>

              <input
                v-model="password"
                :class="{'error' : errors.password , 'active' : password.length}"
                id="first-name"
                type="password"
                class="dire"
                placeholder="گذرواژه"
              />

              <p class="error-message">
                <span v-if="errors.password" v-text="errors.password"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="header-section">
        <p>آدرس</p>
      </div>
      <div class="main-form-wrapper">
        <div class="form-contents text-rtl col-xs-12">
          <div class="row">
            <div
              v-if="!$parent.currentUser.user_info && $parent.isProfileLoaded"
              class="input-wrapper select-wrapper col-xs-12 col-md-4 pull-right"
            >
              <label for="first-name">
                استان را انتخاب کنید
                <span class="red-text">*</span>
              </label>

              <select
                v-model="provinceId"
                :class="{'error' :  errors.provinces, 'active' : provinceId}"
                id="province"
                class="dire"
              >
                <option selected disabled value>یک استان انتخاب کنید</option>
                <option
                  v-for="(province,intex) in provinces"
                  :key="intex"
                  v-text="province.province_name"
                  :value="province.id"
                >یک استان انتخاب کنید</option>
              </select>
              <p class="error-message">
                <span v-if="errors.provinceId" v-text="errors.provinceId"></span>
              </p>
            </div>
            <div
              v-if="!$parent.currentUser.user_info && $parent.isProfileLoaded"
              class="input-wrapper select-wrapper col-xs-12 col-md-4 pull-right"
            >
              <label for="first-name">
                شهر خود را انتخاب کنید
                <span class="red-text">*</span>
              </label>

              <select
                @change="setCityId($event)"
                :class="{'error' :  errors.cityId, 'active' : cityId}"
                id="province"
                class="dire"
              >
                <option disabled selected>شهر را انتخاب کنید</option>
                <option
                  v-for="(city,intex) in cities"
                  :key="intex"
                  v-text="city.city_name"
                  :value="city.id"
                >یک شهر انتخاب کنید</option>
              </select>
              <p class="error-message">
                <span v-if="errors.cityId" v-text="errors.cityId"></span>
              </p>
            </div>

            <div class="input-wrapper margin-0 col-xs-12 col-md-8 pull-right">
              <label for="address">
                آدرس کامل
                <span class="red-text">*</span>
              </label>

              <input
                v-model="address"
                :class="{'error' : errors.address , 'active' : address.length}"
                id="address"
                type="text"
                class="dire"
                placeholder="آدرس کامل"
              />

              <p class="error-message">
                <span v-if="errors.address" v-text="errors.address"></span>
              </p>
            </div>
            <div class="input-wrapper col-xs-12 col-md-4 pull-left">
              <label for="postal-code">
                کد پستی وارد کنید
                <span class="gray-text">(اختیاری)</span>
              </label>

              <input
                v-model="postalCode"
                :class="{'error' : errors.postalCode , 'active' : postalCode.length}"
                id="postal-code"
                type="tel"
                class="dire"
                placeholder="کد پستی"
              />

              <p class="error-message">
                <span v-if="errors.postalCode" v-text="errors.postalCode"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pricing-section-wrapper col-xs-12">
      <div class="row">
        <div class="header-section">
          <p>قیمت نهایی</p>
        </div>

        <div class="prising-section">
          <div class="row">
            <div class="price-contents text-left col-xs-12 col-sm-6 col-md-8 pull-right">
              <p class="price-item">
                قیمت :
                <span
                  v-text=" $parent.getNumberWithCommas($parent.productData.product_total_price) + ' تومان'"
                ></span>
              </p>
            </div>
            <div class="change-step col-xs-12 col-md-3 pull-left">
              <button @click.prevent="setInformationData()" class="green-button hover-effect">
                <i class="fa fa-arrow-left"></i>
                <span>ادامه فرایند خرید</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      firstName: "",
      lastName: "",
      password: "",
      sex: "",
      provinces: "",
      provinceId: "",
      cities: "",
      cityId: "",
      address: "",
      postalCode: "",
      errors: {
        firstName: "",
        lastName: "",
        password: "",
        sex: "",
        provinceId: "",
        cityId: "",
        address: "",
        postalCode: ""
      },
      fileds: [
        "firstName",
        "lastName",
        "password",
        "sex",
        "provinces",
        "city",
        "address",
        "postalCode"
      ]
    };
  },
  methods: {
    init: function() {
      this.$parent.getCurrentUser();
      this.$parent.setProductData();
      this.getProvinces();
    },
    setInformationData: function() {
      if (this.$parent.currentUser.user_info && this.$parent.profileIsLoad) {
        this.addressValidator();
        this.postalCodeValidator();
      } else {
        this.sexValidator();
        this.nameValidator();
        this.familyValidator();
        this.passwordValidator();
        this.provinceValidator();
        this.cityValidator();
        this.addressValidator();
        this.postalCodeValidator();
      }
    },
    getProvinces: function() {
      axios
        .post("/location/get_location_info")
        .then(response => (this.provinces = response.data.provinces));
    },
    getCities() {
      axios
        .post("/location/get_location_info", {
          province_id: this.provinceId
        })
        .then(response => (this.cities = response.data.cities));
    },
    setCityId(e) {
      this.cityId = $(e.target).val();
    },
    sexValidator: function() {
      this.errors.sex = "";
      if (this.sex === "") {
        this.errors.sex = "لطفا جنسیت را انتخاب کنید";
      }
    },
    nameValidator: function() {
      this.errors.firstName = "";
      let hasError = this.textHasError(this.firstName, "نام");
      this.errors.firstName = hasError ? hasError : "";
    },
    familyValidator: function() {
      this.errors.lastName = "";
      let hasError = this.textHasError(this.lastName, "نام خانوادگی");
      this.errors.lastName = hasError ? hasError : "";
    },
    passwordValidator: function() {
      this.errors.password = "";
      if (this.password === "") {
        this.errors.password = "رمز عبور الزامی است";
      } else if (this.password.length < 8) {
        this.errors.password = "رمز عبور حداقل ۸ کاراکتر باشد";
      }
    },
    provinceValidator: function() {
      this.errors.provinceId = "";
      if (this.provinceId === "") {
        this.errors.provinceId = "لطفا استان را انتخاب کنید";
      }
    },
    cityValidator: function() {
      this.errors.cityId = "";
      if (this.provinceId === "") {
        this.errors.cityId = "لطفا شهر را انتخاب کنید";
      }
    },
    addressValidator: function() {
      this.errors.address = "";
      let hasError = this.textHasError(this.address, "آدرس");
      this.errors.address = hasError ? hasError : "";
    },
    postalCodeValidator: function() {
      this.errors.postalCode = "";
      if (this.postalCode) {
        if (!this.validateRegx(this.postalCode, /^[0-9٠-٩۰-۹\s]+$/)) {
          this.errors.postalCode =
            " کد پستی فقط می تواند اعداد فارسی یا لاتین باشد با فرمت مناسب باشد.";
        } else if (this.postalCode.length <= 9) {
          this.errors.postalCode = "کد پستی باید ۱۰ رقم باشد.";
        }
      }
    },
    textHasError: function(text, type) {
      let error = "";
      if (text == "") {
        error = "لطفا " + type + " را وارد کنید";
      } else if (!this.validateRegx(text, /^[\u0600-\u06FF0-9\s]+$/)) {
        error = type + " فرمت مناسبی نیست";
      } else {
        return false;
      }

      return error;
    },
    validateRegx: function(input, regx) {
      return regx.test(input);
    }
  },
  mounted: function() {
    this.init();
    if (this.$parent.isOsIOS()) {
      $("#postal-code").attr("type", "text");
    }
  },
  watch: {
    provinceId: function(id) {
      this.errors.provinceId = "";

      this.getCities();
    },
    sex: function() {
      this.errors.sex = "";
    },
    firstName: function() {
      this.errors.firstName = "";
    },
    lastName: function() {
      this.errors.lastName = "";
    },

    cityId: function() {
      this.errors.cityId = "";
    },
    address: function() {
      this.errors.address = "";
    },
    password: function() {
      this.errors.password = "";
    },
    postalCode: function(value) {
      this.errors.postalCode = "";
      if (this.postalCode.length >= 10) {
        this.postalCode = this.postalCode.substring(0, 10);
      }
    }
  }
};
</script>