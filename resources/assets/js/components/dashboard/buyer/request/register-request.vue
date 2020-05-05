<style scoped>
/*main style*/

.main-content-wrapper {
  padding: 30px;
}

.success-inquery-wrapper,
.main-content,
.recent-products-wrapper {
  margin-bottom: 30px;
}
.main-content {
  padding: 0 15px;
}
.success-message-wrapper > span.fa {
  color: #00c569;

  font-weight: 400;

  font-size: 19px;

  position: relative;

  top: 3px;

  margin-left: 5px;
}

.success-actions button {
  color: #00c569;

  background: none;

  border: 1px solid;

  border-radius: 3px;

  font-size: 14px;

  padding: 1px 15px;
}

.success-actions button i {
  position: relative;

  top: 2px;
}

.wrapper-progressbar.title h2 {
  font-size: 22px;

  font-weight: bold;

  text-align: center;

  color: #555;
}

.main-section-wrapper {
  margin: 15px auto;

  overflow: hidden;
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

.title-section {
  direction: rtl;
  margin-bottom: 8px;
}

.title-section h3 {
  font-size: 16px;
  color: #00c569;
  float: right;
}

.title-section hr {
  margin: 15px 15px 10px auto;
  position: relative;
}

.title-section hr::after {
  content: " ";
  height: 3px;
  width: 50px;
  background: #00c569;
  position: absolute;
  top: -4px;
  right: 0;
}

.box-content {
  overflow: hidden;
  background: #fff;
  padding: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
}
.carousel-item {
  padding: 0;
  text-align: center;
}
.title-box {
  text-align: center;
}

.title-box h3 {
  font-size: 17px;
  font-weight: bold;
  color: #4b4b4b;
  margin-bottom: 12px;
}

.title-box a {
  margin: 20px auto 10px;

  width: inherit;

  font-size: 14px;

  font-weight: bold;

  padding: 9px 22px 6px;
}

.inquery-button {
  padding: 4px 15px;
  margin: 10px auto 15px;
  transition: 200ms;
}

@media screen and (max-width: 992px) {
  .finish-state-main-content {
    padding: 0;
  }
}

@media screen and (max-width: 767px) {
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
    right: 0px;
    left: 0px;
    top: 8px;
  }
}

@media screen and (max-width: 555px) {
  .success-message-wrapper,
  .success-actions {
    text-align: center;

    width: 100%;
  }

  .success-message-wrapper {
    margin-bottom: 15px;
  }
}
</style>

<template>
  <div
    class="col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2 main-content-wrapper"
  >
    <div class="row">
      <section class="success-inquery-wrapper wrapper-bg col-xs-12">
        <p class="success-message-wrapper text-rtl pull-right">
          <span class="fa fa-check-circle"></span>
          <span class="success-message">
            استعلام شرایط فروش با موفقیت ارسال شد
          </span>
        </p>

        <div class="success-actions pull-left">
          <router-link
            class="text-rtl"
            :to="{ path: 'messenger/contacts' }"
            tag="button"
          >
            <i class="fa fa-comment-alt"></i>
            مشاهده پیام ها
          </router-link>
        </div>
      </section>

      <section
        v-if="!relatedProducts && currentStep <= 2"
        class="main-content wrapper-bg col-xs-12"
      >
        <div class="row">
          <header class="header-section">
            <div v-if="currentStep <= 1" class="wrapper-progressbar title">
              <h2>
                ثبت درخواست خرید
              </h2>
            </div>

            <div v-else class="wrapper-progressbar title">
              <h2>درخواست شما با موفقیت ثبت شد</h2>
            </div>
          </header>

          <main class="main-section-wrapper text-rtl">
            <start-register-request v-if="currentStep == 0" />
            <register-request v-else-if="currentStep == 1" />
            <finish-register-request v-else-if="currentStep == 2" />
          </main>
        </div>
      </section>

      <section
        v-else-if="currentStep == 2 && relatedProducts"
        class="finish-state-main-content col-xs-12"
      >
        <main class="finish-state-wrapper">
          <finish-register-request-related
            :products="relatedProducts"
            :str="str"
          />
        </main>
      </section>

      <section class="recent-products-wrapper">
        <div class="title-section col-xs-12">
          <div class="row">
            <h3>
              آخرین محصولات ثبت شده
            </h3>
            <hr />
          </div>
        </div>
        <div class="col-xs-12 products-contents latest-product">
          <div class="row">
            <div class="owl-carousel">
              <product-carousel
                v-for="(product, index) in 6"
                :key="index"
                img="http://localhost:8000/storage/products/YQny6p20xGGkx65yIPvONtKolPSEpqYve50v9PAv.jpeg"
                title="خرما مضافتی"
                stock="2000"
                link=""
                column="3"
                auto-play="false"
                inquery-button="true"
              />
            </div>
          </div>

          <!-- <div v-else class="row">
            <div
              v-for="(item, index) in 3"
              :key="index"
              :class="{ 'hidden-xs': index >= 2 }"
              class="col-md-4 col-sm-4 col-xs-6"
            >
              <article class="carousel-item box-content col-xs-12">
                <span
                  class="default-index-product-image placeholder-content col-xs-12"
                ></span>

                <span
                  class="content-default-width placeholder-content margin-10 col-xs-10 col-xs-offset-1"
                ></span>

                <span
                  class="content-default-width placeholder-content col-xs-8 col-xs-offset-2"
                ></span>

                <span class="margin-10 content-default-width"></span>
              </article>
            </div>
          </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
import StartRegisterRequest from "./register-request-steps/start-register-request";
import RegisterRequest from "./register-request-steps/register-request-content";
import FinishRegisterRequestRelated from "./register-request-steps/fnish-register-request-related";
import FinishRegisterRequest from "./register-request-steps/fnish-register-request";
import ProductCarousel from "../../../layouts/main/main_components/product-list-carousel";

export default {
  props: ["defimgitem", "str"],
  components: {
    StartRegisterRequest,
    RegisterRequest,
    FinishRegisterRequestRelated,
    FinishRegisterRequest,
    ProductCarousel,
  },
  data: function () {
    return {
      currentStep: 1,
      errors: {
        categorySelected: "",
        category_id: "",
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
        price: "",
        description: "",
        address: "",
        pack_type: "",
        category_id: "",
        rules: false,
        categorySelected: "",
      },
      buyAdFields: ["name", "requirement_amount", "category_id"],
      categorySelected: "",
      categoryList: "",
      subCategoryList: "",
      cities: "",
      buyAdFiles: [],
      popUpMsg: "",
      profileConfirmed: false,
      disableSubmit: false,
      submiting: false,
      relatedProducts: null,
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
    loadSubCategoryList: function (e) {
      e.preventDefault();
      var categoryId = $(e.target).val();
      this.categorySelected = categoryId;

      this.buyAd.categorySelected = categoryId;

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
      if (!this.buyAd.category_id) {
        this.errors.category_id = "نام محصول الزامی است";
      }

      // this.nameValidator(this.buyAd.name);
      //console.log(this.nameValidator(this.buyAd.name));
      this.requirementAmountValidator(this.buyAd.requirement_amount);

      if (
        !this.errors.categorySelected &&
        !this.errors.category_id &&
        !this.errors.name &&
        !this.errors.requirement_amount
      ) {
        this.submitBuyAd();
      }
    },
    submitBuyAd: function () {
      this.errors = "";
      var self = this;

      eventBus.$emit("submitingEvent", true);

      let formData = this.getBuyAdFormFields();

      axios
        .post("/user/add_buyAd", formData)
        .then(function (response) {
          if (response.status === 201) {
            self.disableSubmit = true;
            self.popUpMsg = "درخواست شما با موفقیت ثبت شد";

            window.localStorage.removeItem("buyAd");

            eventBus.$emit("submitSuccess", self.popUpMsg);

            // $('#custom-main-modal').modal('show');

            eventBus.$emit("submitingEvent", false);

            self.registerComponentStatistics(
              "buyAd-register",
              "buyAd-registered-successfully",
              "buyAd-registered-successfully"
            );

            if (response.data.products) {
              self.relatedProducts = response.data.products;
            }

            self.goToStep(2);
          }
          eventBus.$emit("submitingEvent", false);
        })
        .catch(function (err) {
          self.errors = err.response.data.errors;

          eventBus.$emit("submitingEvent", false);

          self.registerComponentExceptions("validation error in buyAd-request");
        });
    },
    getBuyAdFormFields: function () {
      let formData = new FormData();
      let cnt = this.buyAdFields.length;

      for (var i = 0; i < cnt; i++) {
        formData.append(
          this.buyAdFields[i],
          this.toLatinNumbers(this.buyAd[this.buyAdFields[i]])
        );
      }
      return formData;
    },
    setCategoryId: function (e) {
      e.preventDefault();

      this.buyAd.category_id = $(e.target).val();
    },
    setCityId: function (cityId) {
      this.buyAd.city_id = cityId;
    },
    toLatinNumbers: function (num) {
      if (num == null) {
        return null;
      }

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
    goToStep: function (step) {
      this.currentStep = step;
      this.scrollToTop();
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
    nameValidator: function (name) {
      this.toLatinNumbers(name);
      if (!name) {
        this.errors.name = "";
      } else if (!this.validateRegx(name, /^[\u0600-\u06FF\s\d]+$/)) {
        this.errors.name = "نوع محصول فرمت مناسبی نیست";
      }
    },
    requirementAmountValidator: function (number) {
      this.errors.requirement_amount = "";
      var standardNumber = this.toLatinNumbers(number);
      if (standardNumber == "") {
        this.errors.requirement_amount = "فیلد میزان نیاز الزامی است";
      } else if (!this.validateRegx(standardNumber, /^\d*$/)) {
        this.errors.requirement_amount = "فقط عدد وارد کنید";
      }
    },
    validateRegx: function (input, regx) {
      return regx.test(input);
    },
    reLoadPage() {
      location.reload(true);
    },
    openChat: function (product) {
      this.registerComponentStatistics(
        "productReplyAfterBuyAdRegister",
        "openChat",
        "click on open chatBox"
      );
      var self = this;

      axios
        .post("/get_user_last_confirmed_profile_photo", {
          user_id: product.myuser_id,
        })
        .then(function (response) {
          var profile_photo = response.data.profile_photo;

          var contact = {
            contact_id: product.myuser_id,
            first_name: product.first_name,
            last_name: product.last_name,
            profile_photo: profile_photo,
            user_name: product.user_name,
          };

          eventBus.$emit("ChatInfo", contact);
        })
        .catch(function (err) {
          //
        });
    },
    getProductUrl: function () {
      return (
        "/product-view/خرید-عمده-" +
        this.relatedProduct.subcategory_name.replace(" ", "-") +
        "/" +
        this.relatedProduct.category_name.replace(" ", "-") +
        "/" +
        this.relatedProduct.id
      );
    },
  },
  mounted() {
    this.init();

    eventBus.$emit("subHeader", this.items);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/register-request" });
  },
};
</script>
