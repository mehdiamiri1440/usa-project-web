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
.main-content > div.wrapper-section.empty-section {
  border: none;
  background: #fff;
}

.main-content .section-title {
  line-height: 1.618;
  font-size: 25px;
  margin-bottom: 30px;
}

.main-content .section-title.related-product h2 {
  font-size: 25px;
  margin-bottom: 15px;
}

.main-content .section-title.related-product p {
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
  background: #fff;
}
.main-section-wrapper-full-width {
  max-width: 100%;
  margin: 25px auto 0;
}

.header-section > h2 {
  font-weight: 600;
}

.success-inquiry-wrapper {
  background: #edf8e6;
  color: "#a5dc86";
  border-radius: 4px;
  padding: 15px;
}

.info-inquiry-wrapper {
  background: #e6f4f8;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
}

.info-inquiry-wrapper p {
  line-height: 1.618;
}

.success-register {
  background: #edf8e6;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 10px 15px 20px;
  color: #21ad93;
  text-align: center;
}

.success-register.mini {
  padding: 10px 15px 6px;
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
    margin: 0px auto;
  }

  .main-content > div.wrapper-section {
    border: none;
    border-top: 1px solid #dadce0;
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
    padding-top: 0;
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
  .info-inquiry-wrapper {
    padding: 20px;
    border-radius: 0px;
  }
}
</style>

<template>
  <section class="main-content col-xs-12">
    <div class="row">
      <section
        v-if="currentStep == 1 && inquirySent"
        class="success-inquiry-wrapper wrapper-bg col-xs-12"
      >
        <p class="success-message-wrapper text-rtl pull-right">
          <span class="fa fa-check-circle"></span>
          <span class="success-message"
            >استعلام شرایط فروش با موفقیت ارسال شد</span
          >
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

      <section v-if="currentStep == 1" class="info-inquiry-wrapper col-xs-12">
        <p class="success-message-wrapper text-rtl pull-right">
          <i class="fa fa-info-circle"></i>
          <span class="red-text"> آیا قصد خرید عمده محصولی را دارید؟ </span>
          همین حالا درخواست خرید ثبت کنید.
        </p>
      </section>
    </div>

    <div class="row">
      <div class="col-xs-12" v-if="currentStep <= 1">
        <h2 class="section-title">ثبت درخواست خرید</h2>
      </div>
      <div v-else-if="currentStep == 2 && relatedProducts">
        <div class="success-register">
          <div class="title-success">
            <h2>
              <i class="fa fa-check"></i>
              <span>درخواست شما با موفقیت ثبت شد</span>
            </h2>
            <p>
              درخواست خرید شما پس از تایید کارشناسان
              <span class="light-green-text">باسکول،</span> برای کشاورزان و
              تامین کنندگان مرتبط ارسال می شود.
            </p>
          </div>
        </div>
        <div class="section-title related-product">
          <h2>فروشندگان پیشنهادی</h2>
          <p>
            فروشندگان پیشنهادی از طرف
            <span class="light-green-text">باسکول</span> برای درخواست شما.
          </p>
        </div>
      </div>
      <div class="success-register mini" v-else>
        <div class="title-success">
          <h2>
            <i class="fa fa-check"></i>
            <span>درخواست شما با موفقیت ثبت شد</span>
          </h2>
        </div>
      </div>
    </div>
    <div
      class="row wrapper-section"
      :class="{ 'empty-section': relatedProducts && currentStep == 2 }"
    >
      <div class="main-section">
        <main
          class="main-section-wrapper row"
          :class="{ 'main-section-wrapper-full-width': currentStep == 2 }"
        >
          <start-register-request v-if="currentStep == 0" />
          <register-request
            :categoryList="categoryList"
            v-else-if="currentStep == 1"
            :form-loader="formLoader"
          />
          <finish-register-request-related
            v-else-if="currentStep == 2 && relatedProducts"
            :products="relatedProducts"
            :currentUser="currentUser"
            :str="str"
            :verifiedUserContent="verifiedUserContent"
          />
          <finish-register-request v-else-if="currentStep == 2" />
        </main>
      </div>

      <div class="section-background"></div>
    </div>
  </section>
</template>

<script>
// import { eventBus } from "../../../../router/router";
import StartRegisterRequest from "./register-request-steps/start-register-request";
import RegisterRequest from "./register-request-steps/register-request-content";
import FinishRegisterRequestRelated from "./register-request-steps/fnish-register-request-related";
import FinishRegisterRequest from "./register-request-steps/fnish-register-request";

export default {
  props: ["str", "verifiedUserContent"],
  components: {
    StartRegisterRequest,
    RegisterRequest,
    FinishRegisterRequestRelated,
    FinishRegisterRequest,
  },
  data: function () {
    return {
      currentStep: 1,
      errors: {
        categorySelected: "",
        category_id: "",
        requirement_amount: "",
        productName: "",
      },
      currentUser: {
        profile: "",
        user_info: "",
      },
      buyAd: {
        name: "",
        requirement_amount: "",
        category_id: "",
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
      relatedProducts: "",
      inquirySent: false,
      relatedProductsToInquiry: null,
      requirement_amount_text: "",
      items: [
        {
          message: " ثبت درخواست جدید",
          url: "registerRequest",
        },
      ],
      formLoader: false,
    };
  },
  methods: {
    init: function () {
      let self = this;

      axios.post("/user/profile_info").then(function (response) {
        self.currentUser = response.data;
        if (self.isThereInquiryToSend()) {
          self.sendInquiry();
        }
      });

      axios
        .post("/get_category_list", { cascade_list: true })
        .then((response) => (this.categoryList = response.data.categories));
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

            window.localStorage.removeItem("buyAd");
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
          self.formLoader = false;
        })
        .catch(function (err) {
          self.errors = err.response.data.errors;

          eventBus.$emit("submitingEvent", false);

          self.registerComponentExceptions("validation error in buyAd-request");
          self.formLoader = false;
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
    isThereInquiryToSend: function () {
      if (
        window.localStorage.getItem("contact") &&
        window.localStorage.getItem("msgToSend")
      ) {
        return true;
      }

      return false;
    },
    sendInquiry: function () {
      var self = this;

      let tempMsg = window.localStorage.getItem("msgToSend");

      let contact = JSON.parse(window.localStorage.getItem("contact"));

      if (tempMsg) {
        let msgObject = {
          sender_id: self.currentUser.user_info.id,
          receiver_id: contact.contact_id ? contact.contact_id : contact.id,
          text: tempMsg,
        };

        axios
          .post("/messanger/send_message", msgObject)
          .then(function (response) {
            self.inquirySent = true;
            self.clearLocalStorage();
          })
          .catch(function (e) {
            //
          });
      }
    },
    clearLocalStorage: function () {
      window.localStorage.removeItem("contact");
      window.localStorage.removeItem("msgToSend");
    },
  },
  mounted() {
    this.init();

    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/register-request" });
  },
};
</script>
