<style scoped>
/*main style*/
/* 
.main-content-wrapper {
  padding: 30px;
}

.success-inquiry-wrapper,
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

/*progressbar styles

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

.inquiry-button {
  padding: 4px 15px;
  margin: 10px auto 15px;
  transition: 200ms;
}

@media screen and (max-width: 991px) {
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
} */



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
  border-radius: 4px;
  min-height: 400px;

}
.main-content .section-title {
  font-size: 25px;
  margin-bottom: 30px;
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
  margin: 25px auto 0;
}

.header-section > h2 {
  font-weight: 600;
}

.success-inquiry-wrapper{
  background: #edf8e6;
  color:'#a5dc86';
  border-radius: 4px;
  padding: 15px;  
}

.info-inquiry-wrapper{
  background: #e6f4f8;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
}

.info-inquiry-wrapper p{
  line-height: 1.618;
}

@media screen and (max-width: 767px) {
  .main-section-wrapper {
    max-width: 600px;
    margin: 0px auto;
  }

  .main-content .section-title {
    padding: 0 10px;
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
}
</style>

<template>

  <!-- <div
    class="col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2 main-content-wrapper"
  >
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

      <section
        v-if="currentStep == 1"
        class="success-inquiry-wrapper wrapper-bg col-xs-12"
      >
        <p class="red-text success-message-wrapper text-rtl pull-right">
          &nbsp&nbsp&nbspآیا قصد خرید عمده محصولی را دارید؟
        </p>
        <p class="success-message-wrapper text-rtl">
          همین حالا درخواست خرید ثبت کنید&nbsp .
        </p>
      </section>

      <section
        v-if="!relatedProducts && currentStep <= 2"
        class="main-content wrapper-bg col-xs-12"
      >
        <div class="row">
          <header class="header-section">
            <div v-if="currentStep <= 1" class="wrapper-progressbar title">
              <h2>ثبت درخواست خرید</h2>
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

      
    </div>
  </div> -->
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

      <section
        v-if="currentStep == 1"
        class="info-inquiry-wrapper  col-xs-12"
      >
        <p class=" success-message-wrapper text-rtl pull-right">
          <i class="fa fa-info-circle"></i>
          <span class="red-text"> آیا قصد خرید عمده محصولی را دارید؟ </span>
          همین حالا درخواست خرید ثبت کنید.
        </p>
      </section>
    </div>

    <div class="row">
      <h2 class="section-title"  v-if="currentStep <= 1" >ثبت درخواست خرید</h2>
      <h2 class="section-title" v-else>درخواست شما با موفقیت ثبت شد</h2>
    </div>
    <div class="row wrapper-section">
      <div class="main-section">

        <main
          class="main-section-wrapper row"
        >
           <start-register-request v-if="currentStep == 0" />
            <register-request :categoryList="categoryList" v-else-if="currentStep == 1" />
            <finish-register-request-related
            v-else-if="currentStep == 2 && relatedProducts"
            :products="relatedProducts"
            :str="str"
           />
            <finish-register-request v-else-if="currentStep == 2" />
            
        </main>
      </div>

      <div class="section-background"></div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../../../router/router";
import StartRegisterRequest from "./register-request-steps/start-register-request";
import RegisterRequest from "./register-request-steps/register-request-content";
import FinishRegisterRequestRelated from "./register-request-steps/fnish-register-request-related";
import FinishRegisterRequest from "./register-request-steps/fnish-register-request";
import ProductCarousel from "../../../layouts/main/main_components/product-list-carousel";

export default {
  props: ["str"],
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
      relatedProducts: null,
      inquirySent: false,
      relatedProductsToInquiry: null,
      requirement_amount_text: "",
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
      let self = this;

      axios.post("/user/profile_info").then(function (response) {
        self.currentUser = response.data;

        if (self.isThereInquiryToSend()) {
          self.sendInquiry();
        }
      });

      axios
        .post("/get_category_list",{cascade_list : true})
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
      
      num = num.toString().replace(/,/g, '');
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
    convertUnits: function (number) {
      let data = number / 1000;
      let text = "";
      if (number < 1000) {
        return number + " " + "کیلوگرم";
      } else {
        let ton = data.toString().split(".")[0];
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
