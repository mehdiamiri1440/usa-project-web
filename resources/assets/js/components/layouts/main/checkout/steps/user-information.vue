<style scoped>
/* input styles  */

input[type="text"],
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

select.active {
  color: #333;
  color: #00c569;
}

select.active:focus {
  color: #00c569;
}

select.error {
  color: #333;
  color: #e41c38;
}

select.error:focus {
  color: #e41c38;
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
      <div class="header-section">
        <p>اطلاعات کاربری</p>
      </div>
      <div class="main-form-wrapper">
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
                :class="{'error' : errors.first_name[0] , 'active' : firstName.length}"
                id="first-name"
                type="text"
                class="dire"
                placeholder="نام"
              />

              <p class="error-message">
                <span v-if="errors.first_name[0]" v-text="errors.first_name[0]"></span>
              </p>
            </div>
            <div class="input-wrapper col-xs-12 col-md-4 pull-right">
              <label for="first-name">
                نام خانوادگی خود را وارد کنید
                <span class="red-text">*</span>
              </label>

              <input
                v-model="firstName"
                :class="{'error' : errors.first_name[0] , 'active' : firstName.length}"
                id="first-name"
                type="text"
                class="dire"
                placeholder="نام خانوادگی"
              />

              <p class="error-message">
                <span v-if="errors.first_name[0]" v-text="errors.first_name[0]"></span>
              </p>
            </div>
            <div class="input-wrapper col-xs-12 col-md-4 pull-right">
              <label for="first-name">
                یک گذرواژه انتخاب کنید
                <span class="red-text">(۸ کاراکتر یا بیشتر) *</span>
              </label>

              <input
                v-model="firstName"
                :class="{'error' : errors.first_name[0] , 'active' : firstName.length}"
                id="first-name"
                type="text"
                class="dire"
                placeholder="گذرواژه"
              />

              <p class="error-message">
                <span v-if="errors.first_name[0]" v-text="errors.first_name[0]"></span>
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
            <div class="input-wrapper select-wrapper col-xs-12 col-md-4 pull-right">
              <label for="first-name">
                استان را انتخاب کنید
                <span class="red-text">*</span>
              </label>

              <select :class="{'error' :  error}" id="province" class="dire">
                <option selected disabled>استان را انتخاب کنید</option>

                <option>یک استان انتخاب کنید</option>
              </select>
            </div>
            <div class="input-wrapper select-wrapper col-xs-12 col-md-4 pull-right">
              <label for="first-name">
                شهر خود را انتخاب کنید
                <span class="red-text">*</span>
              </label>

              <select :class="{'error' :  error}" id="province" class="dire">
                <option selected disabled>شهر را انتخاب کنید</option>

                <option>یک شهر انتخاب کنید</option>
              </select>
            </div>
            <div class="input-wrapper col-xs-12 col-md-4 pull-left">
              <label for="first-name">
                کد پستی وارد کنید
                <span class="gray-text">(اختیاری)</span>
              </label>

              <input
                v-model="firstName"
                :class="{'error' : errors.first_name[0] , 'active' : firstName.length}"
                id="first-name"
                type="text"
                class="dire"
                placeholder="کد پستی"
              />

              <p class="error-message">
                <span v-if="errors.first_name[0]" v-text="errors.first_name[0]"></span>
              </p>
            </div>
            <div class="input-wrapper margin-0 col-xs-12 col-md-8 pull-right">
              <label for="first-name">
                آدرس کامل
                <span class="red-text">*</span>
              </label>

              <input
                v-model="firstName"
                :class="{'error' : errors.first_name[0] , 'active' : firstName.length}"
                id="first-name"
                type="text"
                class="dire"
                placeholder="آدرس کامل"
              />

              <p class="error-message">
                <span v-if="errors.first_name[0]" v-text="errors.first_name[0]"></span>
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
                <span v-text=" getNumberWithCommas($parent.totalPrice) + ' تومان'"></span>
              </p>
            </div>
            <div class="change-step col-xs-12 col-md-3 pull-left">
              <button class="green-button hover-effect">
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
      sex: "",
      errors: {
        first_name: [],
        last_name: [],
        sex: [],
        city: [],
        password: []
      }
    };
  },
  methods: {
    init: function() {},
    getNumberWithCommas: function(number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>