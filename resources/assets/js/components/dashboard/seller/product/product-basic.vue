
<style scoped>
/*main style*/

.main-content {
  max-width: 685px;
  position: absolute;
  left: calc(50% - 342px);
  top: 65px;
  margin-bottom: 50px;
  height: 100%;
  direction: rtl;
}

.main-content > div.wrapper-section {
  border: 1px solid #dadce0;
  border-radius: 12px;
  min-height: 400px;
}

.main-content > div.wrapper-section.finish-stage {
  border: none;
}

.main-content > div.wrapper-section.empty-section {
  border: none;
  border-radius: 4px;
  min-height: initial;
}

.main-content .section-title {
  font-size: 25px;
  margin-bottom: 30px;
}

.main-content div.section-title h2 {
  font-size: 25px;
  margin-bottom: 10px;
}

.main-content div.section-title p {
  font-size: 15px;
}

.section-background {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  content: "";
  z-index: -1;
}

.wrapper-progressbar.title h2 {
  font-size: 23px;
  font-weight: bold;
  text-align: right;
}

.main-section-wrapper {
  max-width: 420px;
  margin: 42px auto;
}
.main-section-wrapper-full-width {
  max-width: 100%;
  margin: 0;
}

.header-section > h2 {
  font-weight: 600;
}
/*progressbar styles*/

.wrapper-progressbar {
  position: relative;
  padding: 0 15px;
  top: -12px;
  overflow: hidden;
}

.progressbar-items {
  display: flex;
  justify-content: space-between;
  direction: rtl;
  position: relative;
}

.progrees-item {
  text-align: center;
  color: #bebebe;
}

.progrees-item p {
  font-size: 12px;
}

.progrees-item span {
  width: 20px;
  height: 20px;
  font-size: 13px;
  background: #bebebe;
  border-radius: 50px;
  color: #fff;
  display: inline-block;
  margin-bottom: 6px;
  padding-top: 4px;
}

.progrees-item.active-item {
  color: #333;
}

.progrees-item.active-item p {
  font-weight: bold;
}
.progrees-item.active-item span {
  background: #00c569;
}

.custom-progressbar {
  display: block;
  height: 1px;
  background: #bebebe;
  right: 40px;
  left: 34px;
  position: absolute;
  top: 11px;
  z-index: 0;
}
.custom-progressbar.active-item {
  background: #00c569;
  width: 0%;
  left: initial;
}

.custom-progressbar .progress-bar {
  background: #00c569;
  float: right;
}
.active-progress-wrapper {
  position: absolute;

  right: 43px;

  left: 41px;
}
.active-progress-wrapper .custom-progressbar {
  right: 0;
}

.success-register {
  background: #edf8e6;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 10px 15px 20px;
  color: #21ad93;
  text-align: center;
}

.success-register h2 {
  font-size: 19px;
  margin-bottom: 10px;
}

.success-register h2 i {
  font-size: 26px;
  width: 38px;
  height: 38px;
  background: #fff;
  border-radius: 50px;
  padding-top: 6px;
}

.success-register h2 span {
  position: relative;
  top: -4px;
  margin-right: 5px;
}

@media screen and (max-width: 767px) {
  .main-section-wrapper {
    max-width: initial;
    margin: 0px auto;
  }

  .main-content .section-title p {
    line-height: 1.618;
  }

  .main-content > div.wrapper-section {
    border: none;
    border-radius: 0;
  }

  .main-content {
    max-width: initial;
    background: #fff;
    border-radius: 0;
    box-shadow: none;
    direction: rtl;
    transform: translate(0, 0);
    top: 0;
    padding-top: 20px;
    width: 100%;
    left: 0;
  }

  .progrees-item p {
    display: none;
  }

  .custom-progressbar {
    right: 30px;
    left: 34px;
  }

  .active-progress-wrapper {
    right: 20px;
    left: 26px;
  }

  .success-register {
    margin-top: -20px;
  }

  .success-register p {
    line-height: 1.618;
  }

  .success-register h2 i {
    display: block;
    margin: 0 auto 20px;
    width: 80px;
    height: 80px;
    font-size: 45px;
    padding-top: 17px;
  }
}
</style>


<template>
  <div>
    <section
      v-show="$route.name == 'successRegisterProduct'"
      class="main-content col-xs-12"
    >
      <div class="row">
        <div class="success-register" v-if="successRegisterProduct">
          <div class="title-success">
            <h2>
              <i class="fa fa-check"></i>
              <span> ثبت محصول با موفقیت انجام شد </span>
            </h2>
          </div>
          <p>پس از تایید کارشناسان، محصول شما در لیست قرار خواهد گرفت.</p>
        </div>
        <div class="col-xs-12" v-if="buyAds.length != 0">
          <div class="section-title">
            <h2>خریداران</h2>
            <p>
              خریداران پیشنهادی از طرف
              <span class="light-green-text">باسکول</span> برای محصول شما.
            </p>
          </div>
        </div>
      </div>
      <div
        v-show="buyAds.length > 0"
        class="row wrapper-section finish-stage"
        :class="{
          'empty-section': buyAds.length == 0,
        }"
      >
        <div class="main-section">
          <main
            class="main-section-wrapper main-section-wrapper-full-width row"
          >
            <FinishStage />
          </main>
        </div>

        <div class="section-background"></div>
      </div>
      <div
        v-show="buyAds.length == 0"
        class="row wrapper-section"
        :class="{ 'empty-section': buyAds.length == 0 }"
      >
        <div class="main-section">
          <main
            class="main-section-wrapper main-section-wrapper-full-width row"
          >
            <FinishStage />
          </main>
        </div>

        <div class="section-background"></div>
      </div>
    </section>
    <section
      v-show="$route.name != 'successRegisterProduct'"
      class="main-content col-xs-12"
    >
      <h2 class="section-title">ثبت محصول جدید</h2>
      <div
        class="row wrapper-section"
        :class="{ 'empty-section': currentStep == 7 && buyAds.length == 0 }"
      >
        <div class="main-section">
          <header class="header-section">
            <div
              v-if="currentStep > 0 && currentStep < 7"
              class="wrapper-progressbar"
            >
              <div class="custom-progressbar">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="21"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div class="active-progress-wrapper">
                <div class="custom-progressbar active-item">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="21"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progressbar-items">
                <a class="progrees-item active-item">
                  <span>1</span>
                  <p>نوع محصول</p>
                </a>

                <a
                  class="progrees-item"
                  :class="{ 'active-item': currentStep >= 2 }"
                >
                  <span>2</span>
                  <p>موجودی و قیمت</p>
                </a>

                <a
                  class="progrees-item"
                  :class="{ 'active-item': currentStep >= 3 }"
                >
                  <span>3</span>
                  <p>انتخاب مبدا</p>
                </a>

                <a
                  class="progrees-item"
                  :class="{ 'active-item': currentStep >= 4 }"
                >
                  <span>4</span>
                  <p>تصاویر محصول</p>
                </a>

                <a
                  class="progrees-item"
                  :class="{ 'active-item': currentStep >= 5 }"
                >
                  <span>5</span>
                  <p>توضیحات</p>
                </a>

                <a
                  class="progrees-item"
                  :class="{ 'active-item': currentStep >= 6 }"
                >
                  <span>6</span>
                  <p>ثبت نهایی</p>
                </a>
              </div>
            </div>
          </header>

          <main
            class="main-section-wrapper row"
            :class="{
              'main-section-wrapper-full-width': currentStep == 7,
            }"
          >
            <StartRegisterProduct v-if="currentStep == 0" />
            <ProductCategory
              :category-list="categoryList"
              v-else-if="currentStep == 1"
            />
            <StockAndPrice v-else-if="currentStep == 2" />
            <Location :provinces="provinces" v-else-if="currentStep == 3" />
            <ProductImage
              :resetAllImages="resetAllImages"
              v-show="currentStep == 4"
            />
            <Terms v-if="currentStep == 5" />
            <MoreDetails v-else-if="currentStep == 6" />
          </main>
        </div>

        <div class="section-background"></div>
      </div>
    </section>
  </div>
</template>

<script>
// import { eventBus } from "../../../../router/router";
import ProductCategory from "./register-product-steps/product_category";
import StartRegisterProduct from "./register-product-steps/start_register_product";
import StockAndPrice from "./register-product-steps/stock_and_price";
import Location from "./register-product-steps/location";
import ProductImage from "./register-product-steps/product_image";
import Terms from "./register-product-steps/terms";
import MoreDetails from "./register-product-steps/more_details";
import FinishStage from "./register-product-steps/finish_stage";
import imageuploadify from "../../../../imageuploadify.min";

export default {
  components: {
    ProductCategory,
    StartRegisterProduct,
    StockAndPrice,
    Location,
    ProductImage,
    Terms,
    MoreDetails,
    FinishStage,
  },
  data: function () {
    return {
      currentStep: 0,
      currentUser: {
        profile: "",
        user_info: "",
      },
      product: {
        product_name: "",
        stock: "",
        min_sale_price: "",
        max_sale_price: "",
        min_sale_amount: "",
        description: "",
        address: "",
        category_id: "",
        city_id: "",
        rules: true,
      },
      productFields: [
        "product_name",
        "stock",
        "min_sale_price",
        "max_sale_price",
        "min_sale_amount",
        "description",
        "address",
        "category_id",
        "city_id",
      ],
      categoryList: "",
      SubCategoryList: "",
      categorySelected: "",
      provinceSelected: "",
      provinces: "",
      cities: "",
      productFiles: [],
      testProductFiles: [],
      popUpMsg: "",
      errors: {
        category_selected: "",
        category_id: "",
        product_name: "",
        stock: "",
        min_sale_price: "",
        max_sale_price: "",
        min_sale_amount: "",
        description: "",
        provinceSelected: "",
        city_id: "",
        images_count: [],
        images_type: "",
        images_size: "",
      },
      disableSubmit: false,
      items: [
        {
          message: " ثبت محصول",
          url: "registerProduct",
        },
      ],
      uploadPercentage: 0,
      relatedBuyAd: null,
      productCategoryName: "",
      productSubCategoryName: "",
      limited: {
        isLimited: true,
        msg: "",
      },
      isStartLoading: false,
      stock_text: "",
      min_sale_amount_text: "",
      buyAds: [],
      load: true,
      successRegisterProduct: false,
      resetAllImages: false,
    };
  },
  methods: {
    init: function () {
      if (
        this.$route.name == "successRegisterProduct" &&
        this.successRegisterProduct == false
      ) {
        axios.post("/get_related_buyAds_to_my_product").then((response) => {
          if (response.data.status) {
            this.buyAds = response.data.buyAds;
            this.load = false;
          } else {
            this.load = false;
          }
        });
      }
      axios
        .post("/user/profile_info")
        .then((response) => (this.currentUser = response.data));
      axios
        .post("/get_category_list", { cascade_list: true })
        .then((response) => (this.categoryList = response.data.categories));
      axios
        .post("/location/get_location_info", { cascade_list: true })
        .then((response) => (this.provinces = response.data.provinces));
    },

    startRegisterProductSubmited() {
      this.isStartLoading = true;
      this.resetAllImages = true;
      var self = this;
      axios
        .post("/is_user_allowed_to_register_product")
        .then(function (response) {
          self.limited.isLimited = response.data.is_limited;
          self.limited.msg = response.data.msg;
          self.isStartLoading = false;

          if (self.limited.isLimited) {
            self.$store.commit("routeStore/setModal", {
              name: "registerProductLimit",
            });
          } else {
            eventBus.$emit("buyAdbuttonActive", false);
            self.goToStep(1);
          }
        });
    },

    stockAndPriceSubmited() {
      this.stockValidator(this.product.stock);
      this.minSaleAmountValidator(this.product.min_sale_amount);
      this.maxSalePriceValidator(this.product.max_sale_price);
      this.minSalePriceValidator(this.product.min_sale_price);

      if (
        !this.errors.stock &&
        !this.errors.min_sale_amount &&
        !this.errors.max_sale_price &&
        !this.errors.min_sale_price
      ) {
        this.goToStep(3);
      }
    },
    locationSubmited() {
      this.provincesValidator(this.provinceSelected);
      this.cityIdValidator(this.product.city_id);

      if (!this.errors.provinceSelected && !this.errors.city_id) {
        this.goToStep(4);
      }
    },
    submitProduct: function () {
      eventBus.$emit("submiting", true);
      var self = this;

      if (this.product.rules !== true) {
        this.popUpMsg = "موافقت با قوانین ثبت آگهی الزامی است";

        this.$store.state.dashboardStore.submitSuccess = this.popUpMsg;
        eventBus.$emit("submiting", false);

        $("#custom-main-modal").modal("show");
      } else {
        let formData = this.getProductFormFields();
        axios
          .post("/user/add_product", formData, {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              "Content-Type": "application/json",
            },
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            }.bind(this),
          })
          .then(function (response) {
            if (response.status === 201) {
              self.resetAllImages = true;

              self.disableSubmit = true;
              self.popUpMsg = self.getProductRegisterSuccessMessage();
              self.$store.state.dashboardStore.submitSuccess = self.popUpMsg;
              eventBus.$emit("submiting", false);

              self.registerComponentStatistics(
                "product-register",
                "product-registered-successfully",
                "product-registered-successfully"
              );

              self.load = false;
              self.successRegisterProduct = true;
              self.resetComponent();
              self.$router.push({ name: "successRegisterProduct" });

              if (response.data.product) {
                if (
                  response.data.product.active_package_type == 0 &&
                  !response.data.buyAds
                ) {
                  setTimeout(function () {
                    self.$parent.is_pricing_active = true;
                  }, 1000);
                }
              } else if (response.data.buyAds) {
                self.buyAds = response.data.buyAds;
              }
            } else if (response.status === 200) {
              self.resetAllImages = true;

              self.popUpMsg = response.data.msg;
              self.$store.state.dashboardStore.submitSuccess = self.popUpMsg;
              eventBus.$emit("submiting", false);
              self.load = false;
              self.successRegisterProduct = true;
              self.resetComponent();
              self.$router.push({ name: "successRegisterProduct" });

              if (response.data.product) {
                if (response.data.product.active_package_type == 0) {
                  setTimeout(function () {
                    self.$parent.is_pricing_active = true;
                  }, 1000);
                }
              }
            }
          })
          .catch(function (err) {
            self.errors = [];
            self.errors = err.response.data.errors;
            eventBus.$emit("submiting", false);
          });
      }
    },
    getProductFormFields: function () {
      let formData = new FormData();
      let cnt = this.productFields.length;

      for (var i = 0; i < cnt; i++) {
        formData.append(
          this.productFields[i],
          this.toLatinNumbers(this.product[this.productFields[i]])
        );
      }
      for (var i = 0; i < this.productFiles.length; i++) {
        let file = this.productFiles[i];
        formData.append("image_" + i, file.file);
      }
      formData.append("images_count", this.productFiles.length);

      return formData;
    },
    setCategoryId: function (e) {
      e.preventDefault();
      var categoryId = $(e.target).val();
      this.errors.category_id = "";
      this.product.category_id = categoryId;
    },
    setCityId: function (e) {
      this.errors.city_id = "";
      e.preventDefault();
      var cityId = $(e.target).val();
      this.product.city_id = cityId;
    },
    handleProductFilesUpload: function () {
      let uploadedFiles = this.$refs.productFiles.files;
      /*
                  Adds the uploaded file to the files array
                */
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.productFiles.push(uploadedFiles[i]);
      }
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
    getConvertedNumbers: function (number) {
      if (number || typeof number === "number") {
        let data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    getProductRegisterSuccessMessage: function () {
      let msg = "";

      if (this.currentUser.user_info.active_pakage_type == 0) {
        msg =
          "محصول شما با موفقیت ثبت شد و پس از تایید کارشناسان در لیست محصولات نمایش داده میشود.";
      } else {
        msg = "محصول شما با موفقیت ثبت شد.";
      }

      return msg;
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
    goToStep: function (step) {
      if (step != 6) {
        this.buyAds = "";
        this.successRegisterProduct = false;
      }
      this.currentStep = step;
      this.scrollToTop();
    },
    categorySelectedValidator: function (id) {
      this.errors.category_selected = "";

      if (id == "") {
        this.errors.category_selected = "لطفا دسته بندی را انتخاب کنید";
      }

      if (this.errors.category_selected) {
        this.registerComponentStatistics(
          "product-register-error",
          "category- selection",
          this.errors.category_selected
        );
      }
    },
    categoryIdValidator: function (id) {
      this.errors.category_id = "";

      if (id == "") {
        this.errors.category_id = "لطفا زیر دسته بندی را مشخص کنید";
      }

      if (this.errors.category_id) {
        this.registerComponentStatistics(
          "product-register-error",
          "sub-category-selection",
          this.errors.category_id
        );
      }
    },
    stockValidator: function (number) {
      this.errors.stock = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.stock = "لطفا میزان موجودی را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.stock = "لطفا فقط عدد وارد کنید";
      }

      if (this.errors.stock) {
        this.registerComponentStatistics(
          "product-register-error",
          "stock",
          "input:" + number + " error:" + this.errors.stock
        );
      }
    },
    minSaleAmountValidator: function (number) {
      this.errors.min_sale_amount = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.min_sale_amount = "لطفا حداقل میزان فروش را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.min_sale_amount = "لطفا فقط عدد وارد کنید ";
      }

      if (this.errors.min_sale_amount) {
        this.registerComponentStatistics(
          "product-register-error",
          "min-sale-amount",
          "input:" + number + " error:" + this.errors.min_sale_amount
        );
      }
    },
    maxSalePriceValidator: function (number) {
      this.errors.max_sale_price = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.max_sale_price = "لطفا حداکثر قیمت را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.max_sale_price = "لطفا فقط عدد وارد کنید ";
      }

      if (this.errors.max_sale_price) {
        this.registerComponentStatistics(
          "product-register-error",
          "max-sale-price",
          "input:" + number + " error:" + this.errors.max_sale_price
        );
      }
    },
    minSalePriceValidator: function (number) {
      this.errors.min_sale_price = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.min_sale_price = "لطفا حداقل قیمت را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.min_sale_price = "لطفا فقط عدد وارد کنید ";
      }

      if (this.errors.min_sale_price) {
        this.registerComponentStatistics(
          "product-register-error",
          "min-sale-price",
          "input:" + number + " error:" + this.errors.min_sale_price
        );
      }
    },
    provincesValidator: function (id) {
      this.errors.provinceSelected = "";

      if (id == "") {
        this.errors.provinceSelected = "لطفا استان را انتخاب کنید";
      }

      if (this.errors.provinceSelected) {
        this.registerComponentStatistics(
          "product-register-error",
          "province-selection",
          this.errors.provinceSelected
        );
      }
    },
    cityIdValidator: function (id) {
      this.errors.city_id = "";

      if (id == "") {
        this.errors.city_id = "لطفا شهر را وارد کنید";
      }

      if (this.errors.provinceSelected) {
        this.registerComponentStatistics(
          "product-register-error",
          "city-selection",
          this.errors.city_id
        );
      }
    },

    validateRegx: function (input, regx) {
      return regx.test(input);
    },
    reLoadPage() {
      location.reload(true);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    isOsIOS: function () {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    convertUnits: function (number) {
      let data = number / 1000;
      let text = "";
      if (number < 1000) {
        return number + " " + "کیلوگرم";
      } else {
        let ton = data.toString().split(".")[0];
        ton = this.getNumberWithCommas(ton);
        let kg = number.toString().substr(ton.length);
        kg = kg.replace(/^0+/, "");
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
    resetComponent() {
      this.product = {
        product_name: "",
        stock: "",
        min_sale_price: "",
        max_sale_price: "",
        min_sale_amount: "",
        description: "",
        address: "",
        category_id: "",
        city_id: "",
        rules: true,
      };
      this.currentStep = 0;
      this.resetAllImages = false;
    },
  },
  mounted() {
    this.init();
    $('input[type="file"]').imageuploadify();
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/register-product" });
  },
  watch: {
    uploadPercentage: function () {
      eventBus.$emit("uploadPercentage", this.uploadPercentage);
    },
    "product.product_name": function (name) {
      this.errors.product_name = "";
    },
    currentStep: function (step) {
      switch (step) {
        case 1:
          $(".custom-progressbar.active-item").css("width", "0");
          break;
        case 2:
          $(".custom-progressbar.active-item").css("width", "20%");
          break;

        case 3:
          $(".custom-progressbar.active-item").css("width", "41%");
          break;

        case 4:
          $(".custom-progressbar.active-item").css("width", "62%");
          break;

        case 5:
          $(".custom-progressbar.active-item").css("width", "81%");
          break;

        case 6:
          $(".custom-progressbar.active-item").css("width", "99%");
          break;

        default:
          $(".custom-progressbar.active-item").css("width", "0%");
          break;
      }
    },
    "product.stock": function (value) {
      this.errors.stock = "";
      if (value) {
        if (value.length >= 13) {
          this.product.stock = this.product.stock.substring(0, 13);
        }
        let number = this.toLatinNumbers(this.product.stock);
        if (!this.validateRegx(number, /^\d*$/)) {
          this.errors.stock = "لطفا  فقط عدد وارد کنید";
        }

        if (!this.errors.stock) {
          this.product.stock = this.getNumberWithCommas(number);
          this.stock_text = this.convertUnits(number);
        }
      } else {
        this.stock_text = "";
      }
    },
    "product.min_sale_amount": function (value) {
      this.errors.min_sale_amount = "";
      if (value.length >= 13) {
        this.product.min_sale_amount = this.product.min_sale_amount.substring(
          0,
          13
        );
      }
      if (value) {
        let number = this.toLatinNumbers(this.product.min_sale_amount);
        if (!this.validateRegx(number, /^\d*$/)) {
          this.errors.min_sale_amount = "لطفا  فقط عدد وارد کنید";
        }
        if (!this.errors.min_sale_amount) {
          this.product.min_sale_amount = this.getNumberWithCommas(number);
          this.min_sale_amount_text = this.convertUnits(number);
        }
      } else {
        this.min_sale_amount_text = "";
      }
    },
    "product.min_sale_price": function (value) {
      this.errors.min_sale_price = "";
      if (value.length >= 13) {
        this.product.min_sale_price = this.product.min_sale_price.substring(
          0,
          13
        );
      }
      if (value) {
        let number = this.toLatinNumbers(this.product.min_sale_price);
        if (!this.validateRegx(number, /^\d*$/)) {
          this.errors.min_sale_price = "لطفا  فقط عدد وارد کنید";
        }
        if (!this.errors.min_sale_price) {
          this.product.min_sale_price = this.getNumberWithCommas(number);
        }
      }
    },
    "product.max_sale_price": function (value) {
      this.errors.max_sale_price = "";
      if (value.length >= 13) {
        this.product.max_sale_price = this.product.max_sale_price.substring(
          0,
          13
        );
      }
      if (value) {
        let number = this.toLatinNumbers(this.product.max_sale_price);
        if (!this.validateRegx(number, /^\d*$/)) {
          this.errors.max_sale_price = "لطفا  فقط عدد وارد کنید";
        }
        if (!this.errors.max_sale_price) {
          this.product.max_sale_price = this.getNumberWithCommas(number);
        }
      }
    },
  },
};
</script>
