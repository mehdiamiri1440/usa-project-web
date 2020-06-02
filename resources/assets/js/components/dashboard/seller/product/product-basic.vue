<style scoped>
/*main style*/

.main-content {
  max-width: 685px;
  background: #fff;
  border-radius: 9px;
  box-shadow: 0 0 10px #c5c5c5;
  position: absolute;
  left: calc(50% - 342px);
  top: 65px;
  margin-bottom: 50px;
  min-height: 500px;
  direction: rtl;
}

.wrapper-progressbar.title h2 {
  font-size: 23px;
  font-weight: bold;
  text-align: center;
}

.main-section-wrapper {
  max-width: 420px;
  margin: 50px auto 0;
}
.main-section-wrapper-full-width {
  max-width: 100%;
  margin: 25px auto 0;
}
/*progressbar styles*/

.wrapper-progressbar {
  position: relative;
  padding: 15px;
  border-bottom: 2px solid #00c569;
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
  height: 3px;
  background: #bebebe;
  right: 40px;
  left: 34px;
  position: absolute;
  top: 23px;
  z-index: 0;
}
.custom-progressbar.active-item {
  background: #00c569;
  width: 0;
  left: initial;
}

.custom-progressbar .progress-bar {
  background: #00c569;
  float: right;
}
.active-progress-wrapper {
  position: absolute;

  right: 37px;

  left: 41px;
}
.active-progress-wrapper .custom-progressbar {
  right: 0px;
  left: 0px;
  top: 8px !important;
}

@media screen and (max-width: 767px) {
  .main-section-wrapper {
    max-width: 600px;
  }

  .main-content {
    max-width: initial;
    background: #fff;
    border-radius: 0;
    box-shadow: none;
    min-height: 500px;
    direction: rtl;
    transform: translate(0, 0);

    top: 0;
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

  .active-progress-wrapper .custom-progressbar {
    right: 0;
    left: 0;
    top: 8px;
  }
}
</style>


<template>
  <div>
    <section class="main-content col-xs-12">
      <div class="row">
        <header class="header-section">
          <div v-if="currentStep == 0" class="wrapper-progressbar title">
            <h2>ثبت محصول جدید</h2>
          </div>

          <div v-else-if="currentStep > 0 && currentStep < 7" class="wrapper-progressbar">
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

              <a class="progrees-item" :class="{'active-item' : currentStep >= 2}">
                <span>2</span>
                <p>موجودی و قیمت</p>
              </a>

              <a class="progrees-item" :class="{'active-item' : currentStep >= 3}">
                <span>3</span>
                <p>انتخاب مبدا</p>
              </a>

              <a class="progrees-item" :class="{'active-item' : currentStep >= 4}">
                <span>4</span>
                <p>تصاویر محصول</p>
              </a>

              <a class="progrees-item" :class="{'active-item' : currentStep >= 5}">
                <span>5</span>
                <p>توضیحات</p>
              </a>

              <a class="progrees-item" :class="{'active-item' : currentStep >= 6}">
                <span>6</span>
                <p>ثبت نهایی</p>
              </a>
            </div>
          </div>

          <div v-else class="wrapper-progressbar title">
            <h2>ثبت محصول با موفقیت انجام شد</h2>
          </div>
        </header>

        <main
          class="main-section-wrapper"
          :class="{'main-section-wrapper-full-width' : currentStep == 4 || currentStep == 7}"
        >
          <StartRegisterProduct v-show="currentStep == 0" />
          <ProductCategory v-show="currentStep == 1" />
          <StockAndPrice v-show="currentStep == 2" />
          <Location v-show="currentStep == 3" />
          <ProductImage v-show="currentStep == 4" />
          <Terms v-show="currentStep == 5" />
          <MoreDetails v-show="currentStep == 6" />
          <FinishStage v-show="currentStep == 7" />
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
import ProductCategory from "./register-product-steps/product_category";
import StartRegisterProduct from "./register-product-steps/start_register_product";
import StockAndPrice from "./register-product-steps/stock_and_price";
import Location from "./register-product-steps/location";
import ProductImage from "./register-product-steps/product_image";
import Terms from "./register-product-steps/terms";
import MoreDetails from "./register-product-steps/more_details";
import FinishStage from "./register-product-steps/finish_stage";

export default {
  components: {
    ProductCategory,
    StartRegisterProduct,
    StockAndPrice,
    Location,
    ProductImage,
    Terms,
    MoreDetails,
    FinishStage
  },
  data: function() {
    return {
      currentStep: 0,
      currentUser: {
        profile: "",
        user_info: ""
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
        rules: true
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
        "city_id"
      ],
      categoryList: "",
      SubCategoryList: "",
      categorySelected: "",
      provinceSelected: "",
      provinces: "",
      cities: "",
      productFiles: [],
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
        images_size: ""
      },
      disableSubmit: false,
      items: [
        {
          message: " ثبت محصول",
          url: "registerProduct"
        }
      ],
      uploadPercentage: 0,
      relatedBuyAd: null,
      productCategoryName: "",
      productSubCategoryName: "",
      limited: {
        isLimited: true,
        msg: ""
      },
      isStartLoading: false
    };
  },
  methods: {
    init: function() {
      axios
        .post("/user/profile_info")
        .then(response => (this.currentUser = response.data));
      axios
        .post("/get_category_list")
        .then(response => (this.categoryList = response.data.categories));
      axios
        .post("/location/get_location_info")
        .then(response => (this.provinces = response.data.provinces));
    },

    startRegisterProductSubmited() {
      this.isStartLoading = true;

      var self = this;
      axios
        .post("/is_user_allowed_to_register_product")
        .then(function(response) {
          self.limited.isLimited = response.data.is_limited;
          self.limited.msg = response.data.msg;
          self.isStartLoading = false;

          if (self.limited.isLimited) {
            eventBus.$emit("modal", "registerProductLimit");
          } else {
            eventBus.$emit("buyAdbuttonActive", false);
            self.goToStep(1);
          }
        });
    },

    productCategorySubmited() {
      this.categorySelectedValidator(this.categorySelected);
      this.categoryIdValidator(this.product.category_id);
      this.productNameValidator(this.product.product_name);
      if (
        !this.errors.category_selected &&
        !this.errors.category_id &&
        !this.errors.product_name
      ) {
        this.goToStep(2);
      }
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
    productImageSubmited() {
      if (!this.productFiles[0]) {
        this.errors.images_count.push("لطفا تصویر محصول را وارد کنید");
      } else {
        this.errors.images_count = [];
      }
      if (
        !this.errors.images_count[0] &&
        this.productFiles[0] &&
        !this.errors.images_type &&
        !this.errors.images_size
      ) {
        this.goToStep(5);
      }
    },
    descriptionSubmited() {
      this.descriptionValidator(this.product.description);

      if (!this.errors.description) {
        this.goToStep(6);
      }
    },
    loadSubCategoryList: function(e) {
      e.preventDefault();
      var categoryId = $(e.target).val();
      this.errors.category_selected = "";
      this.categorySelected = categoryId;
      axios
        .post("/get_category_list", {
          parent_id: categoryId
        })
        .then(response => (this.SubCategoryList = response.data.categories));
    },
    loadCityList: function(e) {
      this.errors.provinceSelected = "";
      e.preventDefault();
      var provinceId = $(e.target).val();
      this.provinceSelected = provinceId;
      axios
        .post("/location/get_location_info", {
          province_id: provinceId
        })
        .then(response => (this.cities = response.data.cities));
    },
    submitProduct: function() {
      eventBus.$emit("submiting", true);
      var self = this;

      if (this.product.rules !== true) {
        this.popUpMsg = "موافقت با قوانین ثبت آگهی الزامی است";

        eventBus.$emit("submitSuccess", this.popUpMsg);
        eventBus.$emit("submiting", false);

        $("#custom-main-modal").modal("show");
      } else {
        let formData = this.getProductFormFields();
        axios
          .post("/user/add_product", formData, {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              "Content-Type": "application/json"
            },
            onUploadProgress: function(progressEvent) {
              this.uploadPercentage = parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            }.bind(this)
          })
          .then(function(response) {
            if (response.status === 201) {
              self.disableSubmit = true;
              self.popUpMsg = self.getProductRegisterSuccessMessage();
              eventBus.$emit("submitSuccess", self.popUpMsg);
              eventBus.$emit("submiting", false);
              // $('#custom-main-modal').modal('show');

              self.registerComponentStatistics(
                "product-register",
                "product-registered-successfully",
                "product-registered-successfully"
              );

              // if (response.data.buyAd) {
              //   self.relatedBuyAd = response.data.buyAd;
              // }

              self.goToStep(7);
            } else if (response.status === 200) {
              self.popUpMsg = response.data.msg;
              eventBus.$emit("submitSuccess", self.popUpMsg);
              eventBus.$emit("submiting", false);
              // $('#modal-buttons').modal('show');
              self.goToStep(7);
            }
          })
          .catch(function(err) {
            self.errors = [];
            self.errors = err.response.data.errors;
            eventBus.$emit("submiting", false);
          });
      }
    },
    getProductFormFields: function() {
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
        formData.append("image_" + i, file);
      }
      formData.append("images_count", this.productFiles.length);

      return formData;
    },
    setCategoryId: function(e) {
      e.preventDefault();
      var categoryId = $(e.target).val();
      this.errors.category_id = "";
      this.product.category_id = categoryId;
    },
    setCityId: function(e) {
      this.errors.city_id = "";
      e.preventDefault();
      var cityId = $(e.target).val();
      this.product.city_id = cityId;
    },
    handleProductFilesUpload: function() {
      let uploadedFiles = this.$refs.productFiles.files;
      /*
                  Adds the uploaded file to the files array
                */
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.productFiles.push(uploadedFiles[i]);
      }
    },
    toLatinNumbers: function(num) {
      if (num == null) {
        return null;
      }

      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");

      return num
        .toString()
        .replace(/[\u0660-\u0669]/g, function(c) {
          return c.charCodeAt(0) - 0x0660;
        })
        .replace(/[\u06f0-\u06f9]/g, function(c) {
          return c.charCodeAt(0) - 0x06f0;
        });
    },
    getProductRegisterSuccessMessage: function() {
      let msg = "";

      if (this.currentUser.user_info.active_pakage_type == 0) {
        msg =
          "محصول شما با موفقیت ثبت شد و پس از تایید کارشناسان در لیست محصولات نمایش داده میشود.";
      } else {
        msg = "محصول شما با موفقیت ثبت شد.";
      }

      return msg;
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    registerComponentExceptions: function(description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal
      });
    },
    goToStep: function(step) {
      this.currentStep = step;
      this.scrollToTop();
    },
    categorySelectedValidator: function(id) {
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
    categoryIdValidator: function(id) {
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
    productNameValidator: function(name) {
      this.errors.product_name = "";

      if (name == "") {
        this.errors.product_name = "لطفا نوع محصول را وارد کنید";
      } else if (!this.validateRegx(name, /^[\u0600-\u06FF\s]+$/)) {
        this.errors.product_name = "نوع محصول فرمت مناسبی نیست";
      }

      if (this.errors.product_name) {
        this.registerComponentStatistics(
          "product-register-error",
          "product-name",
          "input:" + name + " error:" + this.errors.product_name
        );
      }
    },
    stockValidator: function(number) {
      this.errors.stock = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.stock = "لطفا فیلد را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.stock = "یک فرمت معتبر وارد کنید";
      }

      if (this.errors.stock) {
        this.registerComponentStatistics(
          "product-register-error",
          "stock",
          "input:" + number + " error:" + this.errors.stock
        );
      }
    },
    minSaleAmountValidator: function(number) {
      this.errors.min_sale_amount = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.min_sale_amount = "لطفا فیلد را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.min_sale_amount = "یک فرمت معتبر وارد کنید";
      }

      if (this.errors.min_sale_amount) {
        this.registerComponentStatistics(
          "product-register-error",
          "min-sale-amount",
          "input:" + number + " error:" + this.errors.min_sale_amount
        );
      }
    },
    maxSalePriceValidator: function(number) {
      this.errors.max_sale_price = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.max_sale_price = "لطفا فیلد را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.max_sale_price = "یک فرمت معتبر وارد کنید";
      }

      if (this.errors.max_sale_price) {
        this.registerComponentStatistics(
          "product-register-error",
          "max-sale-price",
          "input:" + number + " error:" + this.errors.max_sale_price
        );
      }
    },
    minSalePriceValidator: function(number) {
      this.errors.min_sale_price = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.min_sale_price = "لطفا فیلد را وارد کنید";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.min_sale_price = "یک فرمت معتبر وارد کنید";
      }

      if (this.errors.min_sale_price) {
        this.registerComponentStatistics(
          "product-register-error",
          "min-sale-price",
          "input:" + number + " error:" + this.errors.min_sale_price
        );
      }
    },
    provincesValidator: function(id) {
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
    cityIdValidator: function(id) {
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
    descriptionValidator: function(description) {
      this.errors.description = "";

      if (description != "") {
        if (
          !this.validateRegx(
            description,
            /^(?!.*[(@#!%$&*)])[s\u{0600}-\u{06FF}\u{060C}\u{061B}\u{061F}\u{0640}\u{066A}\u{066B}\u{066C}\u{0E}\u{0A}_.-،:()A-Za-z0-9 ]+$/u
          )
        ) {
          this.errors.description = "توضیحات شامل کاراکتر های غیرمجاز است";
        }
      }

      if (this.errors.description) {
        this.registerComponentStatistics(
          "product-register-error",
          "description",
          "input:" + description + " error:" + this.errors.description
        );
      }
    },
    validateRegx: function(input, regx) {
      return regx.test(input);
    },
    reLoadPage() {
      location.reload(true);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    isOsIOS: function() {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

      return ios;
    },
    openChat: function(buyAd) {
      this.registerComponentStatistics(
        "buyAdReplyAfterProductRegister",
        "openChat",
        "click on open chatBox"
      );
      var self = this;

      axios
        .post("/get_user_last_confirmed_profile_photo", {
          user_id: buyAd.myuser_id
        })
        .then(function(response) {
          var profile_photo = response.data.profile_photo;

          var contact = {
            contact_id: buyAd.myuser_id,
            first_name: buyAd.first_name,
            last_name: buyAd.last_name,
            profile_photo: profile_photo,
            user_name: buyAd.user_name
          };

          eventBus.$emit("ChatInfo", contact);
        })
        .catch(function(err) {
          //
        });
    }
  },
  mounted() {
    this.init();
    $('input[type="file"]').imageuploadify();
    eventBus.$emit("subHeader", this.items);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/register-product" });
  },
  watch: {
    uploadPercentage: function() {
      eventBus.$emit("uploadPercentage", this.uploadPercentage);
    },
    "product.product_name": function(name) {
      this.errors.product_name = "";
    },
    productFiles: function(files) {
      var errorsStatus = false;
      if (files.length) {
        this.errors.images_count = [];
        for (var i = 0; i <= files.length; i++) {
          if (files[i]) {
            if (
              !files[i].type ||
              files[i].type == "" ||
              files[i].type == "image/gif" ||
              files[i].type == "image/svg+xml" ||
              files[i].type == "application/postscript" ||
              files[i].type == "text/xml" ||
              files[i].type == "application/x-gzip"
            ) {
              errorsStatus = true;
              this.errors.images_type = "تصاویر باید فرمت معتبری باشند.";
            }

            if (files[i].size > 5242880) {
              errorsStatus = true;
              this.errors.images_size =
                "حجم تصویر بالا است، باید کمتر از 5 مگابایت باشد.";
            } else if (files[i].size < 20480) {
              errorsStatus = true;
              this.errors.images_size =
                "حجم تصویر پایین است، باید بیشتر از 20 کیلوبایت باشد.";
            }
          }
        }
        if (!errorsStatus) {
          this.errors.images_type = "";
          this.errors.images_size = "";
        }
      } else {
        this.errors.images_type = "";
        this.errors.images_size = "";
      }
    },
    currentStep: function(step) {
      switch (step) {
        case 2:
          $(".custom-progressbar.active-item").css("width", "21%");
          break;

        case 3:
          $(".custom-progressbar.active-item").css("width", "43%");
          break;

        case 4:
          $(".custom-progressbar.active-item").css("width", "64%");
          break;

        case 5:
          $(".custom-progressbar.active-item").css("width", "82%");
          break;

        case 6:
          $(".custom-progressbar.active-item").css("width", "100%");
          break;

        default:
          $(".custom-progressbar.active-item").css("width", "0%");
          break;
      }
    }
  }
};
</script>
