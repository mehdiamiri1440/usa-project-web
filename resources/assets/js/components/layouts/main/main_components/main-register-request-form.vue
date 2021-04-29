<style scoped>
.title-contents {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 0;
}
.form-contents-wrapper {
  direction: rtl;
}

.form-wrapper {
  margin: 0 auto;
  max-width: 767px;
}
.form-contents {
  margin-top: 26px;
  margin-bottom: 15px;
}
.submit-button {
  background: #dddddd;
  color: #fff;
  border: none;
  border-radius: 8px;
  display: inline-block;
  font-size: 16px;
  padding: 8px 45px 7px;
  transition: 200ms;
  cursor: default;
  margin: 0;
}

.submit-button i {
  transition: 300ms;
  position: relative;
  top: 2px;
  left: -3px;
}

.input-text-wrapper {
  height: 25px;
  padding-top: 5px;
}

.small-description-text {
  text-align: left;
}

.submit-button.default-back-button i {
  left: 3px;
}

.submit-button.default-back-button {
  background: #fff;
  color: #777;
  border: 1px solid #bdc4cc;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
}

.submit-button.default-back-button:hover i {
  transform: translateX(5px);
}
.submit-button.active {
  background: #00c569;
  cursor: pointer;
  transform: translateX(0);
}
.submit-button.active:hover i {
  background: #00c569;
  cursor: pointer;
  transform: translateX(-5px);
}
.action-control-wrapper {
  padding: 20px 15px 50px;
  background: #fff;
}

label {
  margin: 0 auto 10px auto;
  font-size: 15px;
  font-weight: 400;
  color: #777;
}
.small-label {
  font-size: 15px;
}

.text-input-wrapper {
  margin: 0 auto;
  position: relative;
  background: #fbfbfb;
}

input {
  background: none;
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #bdc4cc;
  border-radius: 8px;
  box-shadow: none;
}

.text-input-wrapper i {
  position: absolute;
  left: 15px;
  top: 11px;
  font-size: 18px;
  color: #bdc4cc;
  transition: 300ms;
}

input:focus,
input:focus + i {
  color: #333;
  border-color: #333;
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

.spinner-border {
  width: 1.5rem;
  height: 1.5rem;
  top: -5px;
  position: relative;
  left: 2px;
}

select {
  width: 100%;
  border-radius: 8px;
  padding: 8px 15px;
  position: relative;
  z-index: 1;
  color: #777777;
  direction: rtl;
  -webkit-transition: 200ms;
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

.select-items.input-wrapper {
  position: relative;
  margin: 6px auto;
  background: #fbfbfb;
}

.select-items.input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 6px;

  font-family: "Font Awesome 5 Free", sans-serif;

  font-weight: 900;

  left: 15px;

  font-size: 20px;

  z-index: 0;
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
  border: 1px solid #00c569;
}

select.active:focus {
  color: #00c569;
}

select.error {
  color: #333;
  color: #e41c38;
  border: 1px solid #e41c38;
}

select.error:focus {
  color: #e41c38;
}

.error-message {
  text-align: right;

  color: #e41c38;

  font-weight: bold;

  height: 25px;

  direction: rtl;

  font-size: 11px;
}

.small-description {
  font-size: 11px;

  font-weight: bold;

  color: #777777;

  line-height: 1.618;
}

.small-description-text {
  text-align: right;

  font-weight: bold;
  color: #777777;

  height: 25px;

  direction: rtl;

  font-size: 12px;
}

.submit-button-wrapper {
  text-align: center;
}

label .small-label {
  font-size: 12px;
}

@media screen and (max-width: 767px) {
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
  .form-contents {
    border-radius: 0;
  }
  .title-section {
    padding: 0 15px;
  }
  select {
    font-size: 12px;
  }
  .input-wrapper::after {
    left: 14px;
  }
  .title-contents.margin-top-30 {
    margin-top: 30px;
  }
}
</style>

<template>
  <div class="section-wrapper col-xs-12">
    <div class="row">
      <div
        class="text-right col-xs-12 form-contents-wrapper"
        :class="{ 'wrapper-bg': wrapperBg }"
      >
        <div class="form-wrapper">
          <div class="section-title">ثبت درخواست خرید</div>

          <div class="form-contents col-xs-12">
            <div class="row">
              <div class="col-xs-12 col-md-6 pull-right">
                <h2 class="title-contents col-xs-12">
                  دسته بندی محصول
                  <span class="red-text"> * </span>
                </h2>
                <label for="category" class="description"> مثلا: میوه </label>

                <div class="input-wrapper select-items">
                  <select
                    :class="{
                      active: categorySelected,
                      error: errors.categorySelected,
                    }"
                    id="category"
                    v-model="categorySelected"
                  >
                    <option value="" selected disabled>انتخاب دسته بندی</option>
                    <option
                      v-for="(category, index) in categoryList"
                      v-bind:value="category"
                      :key="index"
                      v-text="category.category_name"
                    ></option>
                  </select>
                </div>
                <p class="error-message">
                  <span
                    v-if="errors.categorySelected"
                    v-text="errors.categorySelected"
                  ></span>
                </p>
              </div>

              <div class="col-xs-12 col-md-6">
                <h2 class="title-contents col-xs-12">
                  نام محصول

                  <span class="red-text"> * </span>
                </h2>
                <label for="sub-category" class="description">
                  مثلا: خرما
                </label>

                <div class="input-wrapper select-items">
                  <select
                    :class="{
                      active: buyAd.sub_category_id,
                      error: errors.sub_category_id,
                    }"
                    id="sub-category"
                    v-model="selectedSubCategory"
                  >
                    <option value="" disabled selected>
                      انتخاب زیر دسته بندی
                    </option>
                    <option
                      v-for="(subCategory, index) in subCategoryList"
                      v-bind:value="subCategory"
                      :key="index"
                      v-text="subCategory.category_name"
                    ></option>
                  </select>
                </div>
                <p class="error-message">
                  <span
                    v-if="errors.sub_category_id"
                    v-text="errors.sub_category_id"
                  ></span>
                </p>
              </div>

              <div class="col-xs-12 col-md-6 pull-right">
                <h2 class="title-contents col-xs-12">
                  نوع
                  <span
                    class="light-green-text"
                    v-text="' ' + subCategoryName + ' '"
                  >
                  </span>
                  مورد نیاز خود را وارد کنید.
                </h2>
                <label for="product-type" class="description">
                  <span v-if="categoryName == 'میوه'"> مثلا: مضافتی </span>
                  <span v-else-if="categoryName == 'صیفی'">
                    مثلا: بذر متین صادراتی
                  </span>
                  <span v-else-if="categoryName == 'غلات'">
                    مثلا: هندی ۱۱۲۱
                  </span>
                  <span v-else-if="categoryName == 'خشکبار'">
                    مثلا: فندقی
                  </span>
                  <span v-else-if="categoryName == 'ادویه'"> مثلا: نگین </span>
                  <span v-else-if="categoryName == 'دامپروری'">
                    مثلا: چهل گیاه
                  </span>
                  <span v-else> مثلا: مضافتی</span>
                </label>
                <div class="text-input-wrapper">
                  <input
                    v-model="buyAd.name"
                    id="product-type"
                    type="text"
                    :class="{ active: buyAd.name, error: errors.name }"
                    placeholder="نوع محصول مورد نیاز خود را وارد کنید"
                    pattern="[0-9]*"
                  />
                  <i
                    v-if="buyAd.name && !errors.name"
                    class="fa fa-check-circle"
                  ></i>
                  <i v-else-if="errors.name" class="fa fa-times-circle"></i>
                  <i v-else class="fa fa-edit"></i>
                </div>
                <div class="input-text-wrapper">
                  <p class="error-message">
                    <span
                      class="red-text"
                      v-if="errors.name"
                      v-text="errors.name"
                    ></span>
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-md-6">
                <h2 class="title-contents col-xs-12">
                  میزان نیازمندی

                  <span class="small-label">(کیلوگرم)</span>

                  <span class="red-text"> * </span>
                </h2>
                <label for="requirement_amount" class="description">
                  مثلا: 50,000
                </label>

                <div class="text-input-wrapper">
                  <input
                    v-model="buyAd.requirement_amount"
                    id="requirement_amount"
                    type="tel"
                    :class="{
                      active: buyAd.requirement_amount,
                      error: errors.requirement_amount,
                    }"
                    placeholder="میزان نیازمندی را وارد کنید"
                    pattern="[0-9]*"
                  />

                  <i
                    v-if="
                      buyAd.requirement_amount && !errors.requirement_amount
                    "
                    class="fa fa-check-circle"
                  ></i>
                  <i
                    v-else-if="errors.requirement_amount"
                    class="fa fa-times-circle"
                  ></i>
                  <i v-else class="fa fa-edit"></i>
                </div>

                <div class="input-text-wrapper">
                  <p
                    class="small-description-text"
                    v-if="!errors.requirement_amount"
                  >
                    <span
                      class="blue-text"
                      v-if="requirement_amount_text"
                      v-text="requirement_amount_text"
                    ></span>
                  </p>
                  <p class="error-message">
                    <span
                      class="red-text"
                      v-if="errors.requirement_amount"
                      v-text="errors.requirement_amount"
                    ></span>
                  </p>
                </div>
              </div>
            </div>

            <div class="submit-button-wrapper col-xs-12">
              <div class="row">
                <button
                  class="submit-button disabled"
                  :class="{
                    active: buyAd.sub_category_id && buyAd.requirement_amount,
                  }"
                  @click.prevent="formValidator"
                >
                  ثبت درخواست
                  <i class="fa fa-check"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["wrapperBg"],
  data: function () {
    return {
      errors: {
        categorySelected: "",
        sub_category_id: "",
        requirement_amount: "",
        name: "",
      },
      currentUser: {
        profile: "",
        user_info: "",
      },
      buyAd: {
        name: "",
        requirement_amount: "",
        sub_category_id: "",
        category_id: "",
      },
      buyAdFields: ["name", "requirement_amount", "sub_category_id"],
      categorySelected: "",
      categoryList: "",
      subCategoryList: "",
      selectedSubCategory: "",
      subCategoryName: "محصول",
      cities: "",
      buyAdFiles: [],
      popUpMsg: "",
      profileConfirmed: false,
      disableSubmit: false,
      submiting: false,
      relatedProducts: null,
      requirement_amount_text: "",
      categoryName: "میوه",
      items: [
        {
          message: " ثبت درخواست جدید",
          url: "registerRequest",
        },
      ],
    };
  },
  methods: {
    init: function () {
      axios
        .post("/user/profile_info")
        .then((response) => (this.currentUser = response.data));

      axios
        .post("/get_category_list")
        .then((response) => (this.categoryList = response.data.categories));
    },
    loadSubCategoryList: function (category) {
      var categoryId = category.id;
      axios
        .post("/get_category_list", {
          parent_id: categoryId,
        })
        .then((response) => (this.subCategoryList = response.data.categories));
    },
    formValidator: function () {
      if (!this.categorySelected) {
        this.errors.categorySelected = "دسته بندی الزامی است";
      }
      if (!this.buyAd.sub_category_id) {
        this.errors.sub_category_id = "نام محصول الزامی است";
      }

      this.requirementAmountValidator(this.buyAd.requirement_amount);

      if (
        !this.errors.categorySelected &&
        !this.errors.sub_category_id &&
        !this.errors.name &&
        !this.errors.requirement_amount
      ) {
        this.submitBuyAd();
      }
    },
    submitBuyAd: function () {
      this.errors = "";
      var self = this;

      this.buyAd.category_id = this.categorySelected.id;

      window.localStorage.setItem("buyAd", JSON.stringify(this.buyAd));

      window.location.href = "/buyer/register-request";
    },

    setCategoryId: function (subCategory) {
      this.errors.sub_category_id = "";
      this.buyAd.sub_category_id = subCategory.id;
    },
    setCityId: function (cityId) {
      this.buyAd.city_id = cityId;
    },
    toLatinNumbers: function (num) {
      if (num == null) {
        return null;
      }

      num = num.toString().replace(/,/g, "");
      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function (c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function (c) {
          return c.charCodeAt(0) - 0x06f0;
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
    registerComponentExceptions: function (description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal,
      });
    },
    isOsIOS: function () {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    requirementAmountValidator: function (number) {
      this.errors.requirement_amount = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.requirement_amount = "فیلد میزان نیازمندی الزامی است";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.requirement_amount = "فقط عدد وارد کنید";
      }
    },
    validateRegx: function (input, regx) {
      return regx.test(input);
    },
    convertUnits: function (number) {
      let data = number / 1000;
      let text = "";
      if (number < 1000) {
        return number + " " + "کیلوگرم";
      } else {
        let ton = data.toString().split(".")[0];
        let kg = number.toString().substr(ton.length);
        kg = kg.replace(/^0+/, "");
        ton = this.getNumberWithCommas(ton);
        ton = ton + " " + "تن";

        if (kg) {
          kg = " و " + kg + " کیلوگرم";
          text = ton + kg;
        } else {
          text = ton;
        }

        return text;
      }
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    productNameValidator: function (name) {
      if (!this.validateRegx(name, /^[\u0600-\u06FF\s_,.:/;()+-\d]+$/)) {
        this.errors.name = "لطفا نوع محصول را فارسی وارد کنید.";
      }
    },
  },
  mounted() {
    if (this.isOsIOS()) {
      $('input[type="tel"]').attr("type", "text");
    }
    this.init();
  },
  watch: {
    categorySelected: function (category) {
      this.categoryName = category.category_name;
      this.loadSubCategoryList(category);
      this.errors.categorySelected = "";
    },
    selectedSubCategory: function (subCategory) {
      this.subCategoryName = subCategory.category_name;
      this.setCategoryId(subCategory);
    },
    "buyAd.sub_category_id": function () {
      this.errors.sub_category_id = "";
    },
    "buyAd.requirement_amount": function (value) {
      this.errors.requirement_amount = "";
      if (value) {
        if (value.length >= 13) {
          this.buyAd.requirement_amount = value.substring(0, 13);
        }
        let number = this.toLatinNumbers(this.buyAd.requirement_amount);
        if (!this.validateRegx(number, /^\d*$/)) {
          this.errors.requirement_amount = "لطفا  فقط عدد وارد کنید";
        }
        if (!this.errors.requirement_amount) {
          this.buyAd.requirement_amount = this.getNumberWithCommas(number);
          this.requirement_amount_text = this.convertUnits(number);
        }
      } else {
        this.requirement_amount_text = "";
      }
    },

    "buyAd.name": function (text) {
      this.errors.name = "";
      if (text) {
        this.productNameValidator(text);
      }
    },
  },
};
</script>
