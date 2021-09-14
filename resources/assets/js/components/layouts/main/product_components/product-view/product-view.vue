<style scoped>
@import url("../../../../../../css/owl.carousel.min.css");
@import url("../../../../../../css/magnific-popup.css");
@import url("../../../../../../css/owl-product-items-style.css");
div,
p,
span {
  line-height: 1.5em;
}
#main {
  padding-top: 120px;
}

.main-content > h4 {
  margin: 30px auto;
}

.buttons-wrapper {
  margin: 15px auto;
  text-align: center;
}

.buttons-wrapper .green-button {
  width: initial;
  font-size: 16px;
  padding: 8px 20px;
  border-radius: 8px;
}

.bread-crumbs-wrapper {
  margin: 3px auto 11px;
  height: 25px;
}

.bread-crumbs-wrapper a {
  color: #999;
  font-size: 14px;
  margin-left: 5px;
}

.bread-crumbs-wrapper span {
  color: #bbb;
  font-size: 14px;
}

.bread-crumbs-wrapper a i {
  margin-right: 2px;
  font-size: 11px;
}

.bread-crumbs-wrapper a:hover {
  color: #555;
}

.box-content {
  overflow: hidden;
  background: #fff;
  padding: 0;
  text-align: center;
  padding-bottom: 10px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  min-height: 212px;
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

.box-title {
  font-size: 18px;
  color: #313a43;
  direction: rtl;
  margin: 30px 0 15px;
}

.box-title::after {
  content: " ";
  width: 100px;
  height: 4px;
  background: #00c569;
  display: block;
  border-radius: 5px;
  margin-top: 10px;
}

.section-wrapper .title-box {
  text-align: center;

  margin-top: 35px;
}

.fix-send-message-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 5px;
  box-shadow: 0 -6px 15px rgba(0, 0, 0, 0.16);
  background: #fff;
  display: flex;
}

.fix-send-message-wrapper button {
  width: 100%;
  border-radius: 6px;
  margin: 0;
  font-size: 18px;
  padding: 10px 15px;
}

.fix-send-message-wrapper button.disable {
  background: #e0e0e0;
}

button.send-message-button {
  background: none;
  border-radius: 8px;
  border: 1px solid #404b55;
  color: #404b55;
  transition: 300ms;
  margin-right: 10px;
}

.send-message-button:hover {
  background: none;
  border-radius: 8px;
  border: 1px solid #404b55;
  background: #404b55;
  color: #fff;
  transition: 300ms;
}

/* 
---------------------------------------------------------------------------------

 modal styles
*/

.modal-content {
  overflow: hidden;
  border-radius: 12px;
}
.close-modal {
  font-size: 20px;

  color: #777;

  position: absolute;

  right: 0;

  padding: 8px 15px 2px;

  top: 0;
}

.modal-title {
  font-size: 16px;

  font-weight: 800;

  color: #474747;

  text-align: center;
}

.modal-header {
  padding: 9px 15px 10px;
}

.modal-body {
  padding: 0 15px;
}

.default-carousel-item .box-content {
  margin-bottom: 15px;
}

.spinner-border {
  width: 1.5rem;
  height: 1.5rem;
  top: -8px;
  position: relative;
  left: 2px;
}

.main-content-wrapper {
  max-width: 1336px;
}

.product-section-wrapper {
  width: calc(100% - 400px);
}

.user-section-wrapper {
  padding: 0;
  max-width: 370px;
}

.section-wrapper .title-box {
  text-align: center;

  margin-top: 35px;
}

.section-wrapper {
  border-top: 1px solid #e0e0e0;
}

.default-grid {
  padding: 0 3px;
}

.default-grid .default-main-article-content {
  width: 100%;
}
.default-grid .default-wrapper-main-image {
  width: 100%;
  height: 160px;
}
.default-grid > div {
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f0f0f1;
}

.default-grid .default-article-contents {
  padding: 15px;
}

.related-product,
.default-related-product {
  margin-top: 70px;
}

.tag-item {
  background: #f2f2f2;
  border: 1px solid #e0e0e0;
  color: #313942;
  border-radius: 12px;
  padding: 8px 27px;
  margin-left: 10px;
  display: inline-block;
  margin-bottom: 15px;
}

.tag-item:hover {
  background: #e0e0e0;
}

.data-tag-wrapper {
  margin-top: 50px;
}

@media screen and (max-width: 1199px) {
  .product-section-wrapper {
    width: 100%;
  }
  .user-section-wrapper {
    max-width: initial;
  }
  .default-carousel-item:last-of-type {
    display: none;
  }

  .bread-crumbs-wrapper {
    padding: 0 15px;
    margin: 11px auto;
  }
}

@media screen and (max-width: 991px) {
  .default-carousel-item:nth-child(3) {
    display: none;
  }
  .fix-send-message-wrapper {
    bottom: 59px;
  }
}

@media screen and (max-width: 767px) {
  .box-title {
    padding: 0 10px;
  }
  .bread-crumbs-wrapper a {
    font-size: 12px;
  }

  .main-content-wrapper {
    padding: 0 15px !important;
  }

  #main {
    padding-top: 94px;
  }

  .main-product-wrapper {
    border-radius: 0;
  }
}

@media screen and (max-width: 450px) {
  .default-carousel-item {
    display: none;
  }

  .default-carousel-item:first-of-type {
    display: block;
    width: 100%;
  }
}
</style>

<template>
  <div class="container-fluid padding-0-30 main-content-wrapper">
    <RegisterModal
      v-if="!currentUser.user_info"
      :is-chat="isChat"
      :product="product"
    />
    <main id="main" class="row">
      <div class="col-xs-12">
        <div class="row">
          <div class="text-rtl text-right bread-crumbs-wrapper">
            <div v-if="breadCrumbs">
              <router-link :to="{ name: 'productList' }">
                همه دسته ها
                <i class="fa fa-angle-left"></i>
              </router-link>

              <router-link
                v-for="(item, index) in breadCrumbs"
                :key="index"
                :to="getSubCategoryUrl(item)"
              >
                {{ item }}
                <i class="fa fa-angle-left"></i>
              </router-link>
              <span v-text="product.main.product_name"></span>
            </div>
          </div>
          <div class="col-xs-12 col-lg-8 product-section-wrapper pull-right">
            <section class="main-content">
              <div class="row">
                <ProductContents />
              </div>
            </section>
            <div
              class="
                col-xs-12 col-lg-4
                hidden-lg
                user-section-wrapper
                pull-left
              "
            >
              <div class="row">
                <UserInfo v-if="checkIsMobile()" />
              </div>
            </div>
            <UserData />
          </div>

          <aside
            class="
              col-xs-12 col-lg-4
              hidden-xs hidden-sm hidden-md
              user-section-wrapper
              pull-left
            "
          >
            <UserInfo v-if="!checkIsMobile()" />
          </aside>
        </div>
      </div>

      <div
        id="related-products-wrapper"
        class="section-wrapper col-xs-12 related-product"
        :class="{ 'default-related-product': !isRelatedProducts }"
      >
        <div v-show="isRelatedProducts">
          <div class="row">
            <h3 class="box-title">محصولات مرتبط</h3>
            <RelatedProducts />
          </div>
        </div>

        <div v-if="!isRelatedProducts" class="row">
          <h3 class="box-title">محصولات مرتبط</h3>
          <div>
            <div
              v-for="(defaultItem, index) in 12"
              :key="index"
              class="
                default-items
                col-xs-6 col-sm-4 col-md-3 col-lg-2
                default-grid
              "
            >
              <div
                class="
                  col-xs-12
                  margin-15-0
                  default-item-wrapper default-main-wrapper
                "
              >
                <div class="default-wrapper-main-image pull-right">
                  <span class="default-main-image placeholder-content"></span>
                </div>

                <div
                  class="
                    default-article-contents
                    padding-0
                    margin-top-10
                    col-xs-12
                  "
                >
                  <div class="default-main-article-content">
                    <span class="content-half-width placeholder-content"></span>

                    <span
                      class="content-default-width placeholder-content"
                    ></span>
                    <span
                      class="
                        placeholder-content
                        default-button-full-with
                        pull-left
                        mobile-hidden
                      "
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12" id="related-categories">
        <div class="data-tag-wrapper text-rtl" v-if="dataTags.length">
          <router-link
            class="tag-item"
            v-for="(tag, index) in dataTags"
            :key="index"
            v-text="tag"
            :to="{
              name: 'productCategory',
              params: {
                categoryName: convertCategoryname(tag),
              },
            }"
          ></router-link>
        </div>
      </div>

      <div
        v-if="product.main.product_name && !isMyProfile"
        class="fix-send-message-wrapper hidden-lg hidden-md"
      >
        <button
          v-if="!isMyProfile && currentUser.user_info"
          @click.prevent="openChat(product)"
          :class="{
            'send-message-button':
              product.user_info.has_phone && currentUser.user_info.is_buyer,
            'green-button bg-gradient-green':
              !product.user_info.has_phone ||
              (product.user_info.has_phone && currentUser.user_info.is_seller),
          }"
        >
          <span
            v-if="product.user_info.has_phone && currentUser.user_info.is_buyer"
          >
            چت
          </span>
          <span v-else> چت با فروشنده </span>

          <i class="fas fa-comment-alt"></i>
        </button>
        <button
          v-else-if="!currentUser.user_info"
          @click.prevent="loginModal(true)"
          :class="{
            'send-message-button': product.user_info.has_phone,
            'green-button bg-gradient-green': !product.user_info.has_phone,
          }"
        >
          <span v-if="product.user_info.has_phone"> چت </span>
          <span v-else> چت با فروشنده </span>
          <i class="fas fa-comment-alt"></i>
        </button>
        <button
          v-if="
            !isMyProfile &&
            currentUser.user_info &&
            product.user_info.has_phone &&
            currentUser.user_info.is_buyer
          "
          @click.prevent="activePhoneCall(true)"
          class="green-button bg-gradient-green"
          :class="{ disable: isActivePhone }"
          :disabled="isActivePhone"
        >
          اطلاعات تماس
          <i class="fas fa-phone-square-alt" v-if="!getPhoneLoader"></i>
          <div v-else class="spinner-border">
            <span class="sr-only"></span>
          </div>
        </button>
        <button
          v-else-if="!currentUser.user_info && product.user_info.has_phone"
          @click.prevent="loginModal(false)"
          class="green-button bg-gradient-green"
          :class="{ disable: isActivePhone }"
          :disabled="isActivePhone"
        >
          اطلاعات تماس
          <i class="fas fa-phone-square-alt" v-if="!getPhoneLoader"></i>
          <div v-else class="spinner-border">
            <span class="sr-only"></span>
          </div>
        </button>
      </div>
      <div
        v-else-if="!product.main.product_name && !isMyProfile"
        class="fix-send-message-wrapper hidden-lg hidden-md hidden-sm"
      >
        <div class="content-full-width h-40 placeholder-content"></div>
      </div>
    </main>
  </div>
</template>

<script>
import { eventBus } from "../../../../../router/router";

import ProductContents from "./product";
import UserInfo from "./user_info";
import UserData from "./User-data";
import RelatedProducts from "./related-products.vue";
import RegisterModal from "../../main_components/register-modal";
import swal from "../../../../../sweetalert.min.js";
import StickySidebar from "../../../../../stickySidebar.js";
// import registerInquerForm from "../../main_components/register-inquiry-form.vue";
import { isElementShownInView } from "../../../../../custom";

export default {
  components: {
    ProductContents,
    UserInfo,
    UserData,
    RegisterModal,
    RelatedProducts,
    // registerInquerForm,
  },
  props: ["str", "assets", "userType", "categoryList", "currentUser"],
  data: function () {
    return {
      isChat: true,
      product: {
        main: {
          category_name: "",
          sub_category_name: "",
        },
        user_info: "",
        profile_info: {
          profile_photo: "",
        },
        photos: [],
      },
      isRelatedProducts: false,
      relatedLoad: false,
      errors: "",
      popUpMsg: "",
      submiting: false,
      isLoading: false,
      isMyProfile: false,
      showRegisterRequestBox: true,
      starScore: "",
      verifiedUserContent: this.$parent.verifiedUserContent,
      categoryUrl: "",
      isActivePhone: false,
      userPhone: "",
      getPhoneLoader: false,
      breadCrumbs: "",
      dataTags: "",
    };
  },
  methods: {
    init() {
      this.scrollToTop();
      this.isLoading = true;
    },
    checkCurrentUser() {
      var self = this;
      let userId = getUserId();

      if (this.currentUser && this.currentUser.user_info) {
        if (this.currentUser.user_info.is_seller == true) {
          this.showRegisterRequestBox = false;
        }
      }
      axios
        .post("/get_product_by_id", {
          product_id: self.$route.params.id,
        })
        .then(function (response) {
          self.product = response.data.product;
          self.getRelatedCategories(self.product.main.sub_category_id);
          if (userId) {
            if (userId === self.product.main.myuser_id) {
              self.isMyProfile = true;
              self.$emit("isMyProfile", self.isMyProfile);
            }
          }
          self.categoryUrl = "/product-list/category/" + self.getCategoryName();
          self.starScore = Math.floor(
            self.product.user_info.review_info.avg_score
          );

          self.sidebarScroll();
          self.getBreadCrumbs();
        })
        .catch(function (err) {
          window.location.href = "/404";
        });
    },
    openChat(product) {
      this.isChat = true;
      this.registerComponentStatistics(
        "product",
        "openChat",
        "click on open chatBox"
      );

      let productName =
        product.main.sub_category_name + " " + product.main.product_name;
      var contact = {
        contact_id: product.user_info.id,
        first_name: product.user_info.first_name,
        last_name: product.user_info.last_name,
        profile_photo: product.profile_info.profile_photo,
        user_name: product.user_info.user_name,
        product_name: productName,
        product_id: product.main.id,
      };

      var self = this;
      if (this.currentUser.user_info) {
        if (this.currentUser.user_info.id !== product.user_info.id) {
          eventBus.$emit("ChatInfo", contact);
          //   window.localStorage.setItem("contact", JSON.stringify(contact));

          //   this.$router.push({ name: "registerInquiry" });
        } else {
          this.popUpMsg = "شما نمی توانید به خودتان پیام دهید.";
          eventBus.$emit("submitSuccess", this.popUpMsg);
          $("#custom-main-modal").modal("show");
        }
      } else {
        window.localStorage.setItem("contact", JSON.stringify(contact));

        // this.$router.push({ name: "registerInquiry" });
        eventBus.$emit("modal", "sendMsg");
      }
    },
    loginModal(isChat) {
      this.isChat = isChat;
      $("#register-modal").modal("show");
    },
    openChatModal(product) {
      this.isChat = true;
      this.registerComponentStatistics(
        "product",
        "openChat",
        "click on open chatBox"
      );

      var contact = {
        contact_id: product.user_info.id,
        first_name: product.user_info.first_name,
        last_name: product.user_info.last_name,
        profile_photo: product.profile_info.profile_photo,
        user_name: product.user_info.user_name,
        product_id: product.main.id,
      };

      var self = this;
      if (this.currentUser.user_info) {
        if (this.currentUser.user_info.id !== product.user_info.id) {
          window.localStorage.setItem("contact", JSON.stringify(contact));

          eventBus.$emit("ChatInfo", contact);
        } else {
          this.popUpMsg = "شما نمی توانید به خودتان پیام دهید.";
          eventBus.$emit("submitSuccess", this.popUpMsg);
          $("#custom-main-modal").modal("show");
        }
      } else {
        window.localStorage.setItem("contact", JSON.stringify(contact));
        window.localStorage.setItem("pathname", window.location.pathname);

        eventBus.$emit("modal", "sendMsg");
      }
    },
    activePhoneCall(isModal) {
      this.isChat = false;
      this.getPhoneLoader = true;
      this.isActivePhone = true;
      axios
        .post("/get_seller_phone_number", {
          s_id: this.product.user_info.id,
          p_id: this.$route.params.id,
          item: "PRODUCT",
        })
        .then((response) => {
          if (isModal) {
            this.$nextTick(() => {
              this.userPhone = response.data.phone;
              this.getPhoneLoader = false;

              this.handleBackKeys();

              var buskoolInfo = document.createElement("div");
              buskoolInfo.className = "phone-number-wrapper";
              buskoolInfo.innerHTML = `<a href="tel:${this.userPhone}" class="phone-number">
                        <p>
                          <i class="fa fa-phone-square-alt"></i>
                          ${this.userPhone}
                        </p>
                        <p>شماره تماس</p>
                      </a>
                      <div class="warning-wrapper">
                        <p class="warning-title">
                          <i class="fa fa-exclamation-circle"></i>

                           هشدار پلیس 
          </p>
          <p class="warning-text">
            لطفاً پیش از انجام معامله و هر نوع پرداخت وجه، از صحت کالا یا خدمات ارائه شده، به صورت حضوری اطمینان حاصل نمایید. 
          </p>
                      </div>`;

              swal({
                content: buskoolInfo,
                className: "custom-swal-with-cancel",
                buttons: {
                  close: {
                    text: "بستن",
                    className: "bg-cancel",
                  },
                },
              }).then((value) => {
                this.isActivePhone = false;
              });
            });
          } else {
            this.$nextTick(() => {
              this.userPhone = response.data.phone;
              $("#phone-number-wrapper").collapse("show");
              this.getPhoneLoader = false;
            });
          }
        })
        .catch((error) => {
          this.getPhoneLoader = false;
          this.isActivePhone = false;

          swal({
            text: error.response.data.msg,
            icon: "warning",
            className: "custom-swal-with-cancel",
            buttons: {
              close: {
                text: "بستن",
                className: "bg-cancel",
              },
            },
          });
        });
    },
    registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
    getProductUrl() {
      return (
        "/product-view/خرید-عمده-" +
        this.product.main.sub_category_name.replace(" ", "-") +
        "/" +
        this.product.main.category_name.replace(" ", "-") +
        "/" +
        this.product.main.id
      );
    },
    shareMyProfile() {
      let baseUrl = getBase();
      baseUrl = baseUrl.substring(0, baseUrl.length - 1);
      if (this.isDeviceMobile()) {
        this.registerComponentStatistics(
          "product",
          "copy-product-link",
          "click on copy poduct link"
        );
        var linkElement = document.createElement("a");
        var Message = baseUrl + this.getProductUrl();
        var messageToWhatsApp = encodeURIComponent(Message);
        var url = "whatsapp://send?text=" + messageToWhatsApp;

        linkElement.setAttribute("href", url);
        linkElement.setAttribute("data-action", "share/whatsapp/share");

        document.body.appendChild(linkElement);

        linkElement.click();

        document.body.removeChild(linkElement);
      } else {
        let url = baseUrl + this.getProductUrl();
        let shareItem = {
          shareModalUrl: url,
          shareModalText: "",
        };
        eventBus.$emit("shareModalUrl", shareItem);
      }
    },
    isDeviceMobile() {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    },
    toLatinNumbers(num) {
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
    editProduct(getProductWrapper) {
      this.submiting = true;
      this.errors = "";

      var stock = "#" + getProductWrapper + " input.stock";
      var getProductId = "#" + getProductWrapper + " .product-id";
      var minSalePrice = "#" + getProductWrapper + " input.min-sale-price";
      var maxSalePrice = "#" + getProductWrapper + " input.max-sale-price";
      var minSaleAmount = "#" + getProductWrapper + " input.min-sale-amount";
      var description = "#" + getProductWrapper + " textarea.description";

      stock = this.toLatinNumbers($(stock).val());
      getProductId = this.toLatinNumbers($(getProductId).val());
      minSalePrice = this.toLatinNumbers($(minSalePrice).val());
      maxSalePrice = this.toLatinNumbers($(maxSalePrice).val());
      minSaleAmount = this.toLatinNumbers($(minSaleAmount).val());
      description = $(description).val();

      var request = {
        product_id: getProductId,
        stock: stock,
        min_sale_price: minSalePrice,
        max_sale_price: maxSalePrice,
        min_sale_amount: minSaleAmount,
      };

      if (description !== "") {
        request.description = description;
      }

      var self = this;

      axios
        .post("/edit_product", request)
        .then(function (response) {
          $(".modal").modal("hide");

          eventBus.$emit("modal", "productEditDone");

          self.registerComponentStatistics(
            "product",
            "register-product-edit",
            "product-edited-successfully"
          );
        })
        .catch(function (err) {
          self.errors = "";
          self.errors = err.response.data.errors;
          // self.registerComponentExceptions('Product-component: validation errors in edit product API');
        });
    },
    stopLoader() {
      eventBus.$emit("isLoading", false);
    },
    getRelatedProductUrl(product) {
      return (
        "/product-view/خرید-عمده-" +
        product.subcategory_name.replace(" ", "-") +
        "/" +
        product.category_name.replace(" ", "-") +
        "/" +
        product.id
      );
    },
    elevatorEvent() {
      // eventBus.$emit("elevatorText", "با استفاده از نردبان، محصول شما تا زمان دریافت محصول تازه تر در همان دسته بندی، به عنوان اولین محصول نمایش داده می‌شود.");

      // eventBus.$emit("productId", this.product.main.id);
      // eventBus.$emit("modal", "elevator");
      let paymentData = {
        paymentName: "elevatorPricingData",
        productId: this.product.main.id,
        totalPrice: "25000",
      };
      eventBus.$emit("peymentMethodData", paymentData);
      $("#payment-type-modal").modal("show");
    },
    inquiry() {
      //eventBus.$emit("productUserInfo", this.product);
      this.$router.push({ name: "registerinquiry" });
    },
    getConvertedNumbers(number) {
      if (number || typeof number === "number") {
        let data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          return data + " " + "تن";
        }
      } else return "";
    },
    getCategoryName() {
      let name = this.product.main.sub_category_name;

      return name ? name.split("-").join(" ") : "";
    },
    convertCategoryname(name) {
      return name ? name.toString().split("-").join(" ") : "";
    },
    handleBackKeys() {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $(".modal").modal("hide");
      });
    },
    closePhoneModal() {
      $(".modal").modal("hide");
    },
    getBreadCrumbs() {
      let items = [];

      items.push(this.product.main.super_category_name);
      items.push(this.product.main.category_name);
      items.push(this.product.main.sub_category_name);

      this.breadCrumbs = items;
    },
    getSubCategoryUrl(category) {
      let url = "/product-list/category/" + category.split(" ").join("-");
      return url;
    },
    sidebarScroll() {
      $("aside").StickySidebar({
        additionalMarginTop: 157,
      });
    },
    checkIsMobile() {
      let pageWidth = window.outerWidth;
      if (pageWidth <= 1199) {
        return true;
      } else {
        return false;
      }
    },
    getRelatedCategories(categroyId) {
      isElementShownInView(
        "#related-categories",
        (isInView) => {
          if (isInView) {
            axios
              .post("/get_related_categories", {
                category_id: categroyId,
                category_name: this.getCategoryName(),
              })
              .then((response) => {
                this.dataTags = response.data.category_names;
              });
          }
        },
        100
      );
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/product-view" });

    document.addEventListener("click", this.documentClick);
  },
  mounted() {
    this.init();
    var self = this;
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated() {
    this.$nextTick(this.stopLoader());
  },
  watch: {
    $route(to, from) {
      this.currentUser = "";
      this.relatedProducts = "";
      this.product.user_info = "";
      this.errors = "";
      this.popUpMsg = "";
      this.submiting = false;
      this.loading = false;
      this.isMyProfile = false;
      this.product.main.id = "";
      this.init();
    },
    currentUser(user) {
      this.checkCurrentUser();
    },
  },
  metaInfo() {
    let productSubCategory = this.product.main.sub_category_name;
    let productName = this.product.main.product_name;
    let productCity = this.product.main.city_name;
    let productProvince = this.product.main.province_name;
    let productOwnerFullName =
      this.product.user_info.first_name +
      " " +
      this.product.user_info.last_name;
    let productStock = this.product.main.stock;
    let productDescription = this.product.main.description
      ? this.product.main.description.split("<hr/>").join("")
      : "";

    let pageUrl = this.getProductUrl();
    let canonicalLink = window.location.host + pageUrl;

    //
    return {
      title:
        "خرید و قیمت " +
        productSubCategory +
        " " +
        productName +
        " عمده " +
        productCity +
        " " +
        productProvince +
        " " +
        productOwnerFullName,
      titleTemplate: "%s | باسکول",
      meta: [
        {
          name: "description",
          content:
            productOwnerFullName +
            " " +
            "خرید و فروش عمده و قیمت " +
            productSubCategory +
            " " +
            productName +
            " " +
            productCity +
            " " +
            productProvince +
            " " +
            "موجودی : " +
            productStock +
            " کیلوگرم" +
            productDescription,
        },
        {
          name: "author",
          content: "باسکول",
        },
        {
          property: "og:description",
          content:
            "خرید و فروش عمده و قیمت " +
            productSubCategory +
            " از بهترین تولیدکنندگان ایران - باسکول بازار آنلاین کشاورزی ایران",
        },
        {
          property: "og:site_name",
          content:
            "باسکول بازارآنلاین خرید و فروش محصولات غذایی و کشاورزی ایران",
        },
        {
          property: "og:title",
          content:
            "باسکول | خرید و فروش عمده و قیمت " +
            productSubCategory +
            " " +
            productName +
            " " +
            productCity +
            " " +
            productProvince +
            " " +
            productOwnerFullName,
        },
      ],
      link: [{ rel: "canonical", href: canonicalLink }],
    };
  },
};
</script>
