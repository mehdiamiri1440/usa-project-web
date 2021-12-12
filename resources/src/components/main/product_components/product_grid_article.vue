<style scoped>
.green-button:focus,
.green-button:hover {
  color: #fff !important;
}

.green-button.edit-product {
  background: #000546;
  width: 100%;
}

.green-button:focus {
  color: #fff;
}

.green-button.edit-product:hover {
  background: #000430;
}

.title-widget {
  font-size: 18px;
  padding: 15px 15px 0 15px;
}

.main-content-item {
  direction: rtl;
  margin: 15px auto;
  border-radius: 12px;
  padding: 0;
  background: #fff;
  float: right;
  width: 100%;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  position: relative;
  height: 250px;
}

.main-content-item.has-action {
  height: 300px;
}

.has-action .actions-wrapper {
  padding: 0 5px;
}

.has-action .green-button,
.has-action .green-button:active,
.has-action .green-button:focus {
  transition: 150ms;
  margin: 0 auto;
  border-radius: 12px;
  padding: 9px 0;
  width: 100%;
  font-size: 16px;
  background: #fff !important;
  border: 1px solid;
  color: #128c7e !important;
  line-height: 1;
  font-weight: 400;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  max-width: 200px;
}
.svg-1 {
  fill: #128c7e;
  transition: 150ms;
}

.has-action .green-button:hover .svg-1 {
  fill: #fff;
  transition: 150ms;
}
.has-action .green-button:hover {
  transition: 150ms;
  color: #fff !important;
  background: #128c7e !important;
}

.has-action .green-button svg {
  width: initial;
  margin-left: 6px;
}

.elevator-event {
  position: absolute;
  left: 5px;
  bottom: 11px;
  border: none;
  border-radius: 8px;
  background: #38485f;
  color: #fff;
  padding: 3px 7px 0;
}

.main-article-title {
  margin: 15px auto;
  font-weight: bold;
  font-size: 32px;
}

.main-article-title a {
  color: #4c5058;
}

.main-article-title a:hover {
  color: #444;
}

.main-article-content p {
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: bold;
}

.main-article-content p span {
  font-weight: normal;
}

.image-article-content {
  padding: 0;
  padding-top: 10px;
  height: 240px;
  overflow: hidden;
  float: right;
}

.image-article-content img {
  height: 100%;
}

.buy_details {
  border-top: 2px solid #f0f3f6;
  padding: 15px 0;
  margin: 15px auto;
  display: none;
}

.btn-content {
  display: inline-block;
  margin: 0 auto;
}

.btn-content img,
.btn-content span {
  float: right;
  margin: 0 5px;
}

.create_buy_mobile a {
  margin: 0;
}

.main-image {
  float: right;
  direction: ltr;
  padding: 0;
}

.load-more-button a {
  direction: rtl;
  color: #666;
  font-size: 18px;
  width: 100%;
  box-shadow: 0 0 5px #bfbfbf;
  background: #f0f3f6 !important;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  transition: 300ms;
  border: none;
  top: 0;
}

.load-more-button a:hover {
  top: -6px;
  color: #333333;
  box-shadow: 0 0 5px #a5a5a5;
  transition: 300ms;
  position: relative;
}

.btn-loader {
  height: 38px;

  overflow: hidden;
}

.btn-loader img {
  width: 56px;
  margin-top: -15px;
}

input[type="text"],
select,
textarea {
  background: #eff3f6;
  border: 1px solid #cfcfcf;
  border-radius: 3px;
  width: 100% !important;
}

input[type="text"],
textarea {
  padding: 13px 15px;
}

label {
  display: block;
  margin: 9px auto;
}

.article-seo-title {
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: bold;
}

.article-seo-title h2 {
  font-size: 15px;
  font-weight: normal;
  display: inline-block;
  color: #333;
}

.is-user-valid {
  border: 1px solid #00c569;
}

.modal-content {
  overflow: hidden;
}

.text-danger {
  height: 24px;
  font-size: 12px;
}

.close-modal {
  font-size: 20px;

  color: red;

  float: right;

  display: block;

  margin-left: 15px;

  margin-top: 8px;
}

.modal-title {
  float: right;

  font-size: 23px;

  font-weight: bold;

  color: #474747;
}

.green-button {
  border: medium none;

  margin: 15px auto;

  width: initial;

  font-size: 14px;

  font-weight: bold;

  display: block;
}
.footer-article {
  overflow: hidden;
  padding: 0 10px 10px;
}
.article-features {
  width: 42px;
}

.article-features button {
  background: none;
  border: none;
}
.article-action-buttons {
  width: calc(100% - 42px);
  padding-left: 10px;
}
.article-action-buttons > button {
  margin: 0;
  padding: 4px 15px;
  width: 100%;
  border-radius: 8px;
}

.article-features button.disable {
  background: #777;
  border: none;
}

.article-features button.disable {
  background: #777;
  border: none;
}
.full-width-button,
.full-width-button button {
  width: 100% !important;
  padding-left: 0;
}

.owner-product .article-action-buttons {
  width: calc(100% - 114px);
  padding-left: 5px;
}

.owner-product .article-features button.elevator-event:first-of-type {
  font-size: 11px;
  padding: 4px 4px 3px;
}

.owner-product .article-features button.elevator-event {
  color: #fff;
  border-radius: 4px;
  padding: 4px 10px;
}

.owner-product .article-features {
  width: 114px;
}

.main-wrapper {
  position: relative;
}

@media screen and (max-width: 555px) {
  .article-action-buttons > button {
    padding: 8px 15px;
    font-size: 16px;
  }
  .article-action-buttons {
    padding: 0 15px 15px;
    display: block;
  }
  .article-features {
    position: relative;

    padding: 0 15px;

    right: 0;

    bottom: 0;
  }
  .article-features {
    min-width: initial;
  }
}
</style>

<template>
  <article
    class="main-content-item"
    :class="[
      { 'is-user-valid': product.user_info.active_pakage_type == 3 },
      { 'has-action': checkActionButtonShow() },
    ]"
  >
    <!--article modal-->

    <div
      v-if="isMyProfile"
      class="modal fade"
      :id="'article-modal' + product.main.id"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <a class="close-modal" href="#" data-dismiss="modal">
              <i class="fa fa-times"></i>
            </a>

            <div
              class="modal-title"
              v-text="
                'ویرایش ' +
                product.main.category_name +
                ' | ' +
                product.main.sub_category_name
              "
            ></div>
          </div>
          <div class="modal-body col-xs-12">
            <div class="row">
              <input
                type="hidden"
                class="product-id"
                :value="product.main.id"
              />
              <div class="col-xs-12 col-sm-6 pull-right">
                <label class="content-label">مقدار موجودی (کیلوگرم)</label>

                <input
                  placeholder="مثلا : 5000 "
                  type="text"
                  class="form-control stock"
                  :value="product.main.stock"
                />

                <div class="text-danger">
                  <span v-if="errors.stock" v-text="errors.stock[0]"></span>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6">
                <label class="content-label">حداقل سفارش (کیلوگرم)</label>

                <input
                  placeholder="مثلا : 200 "
                  type="text"
                  class="form-control min-sale-amount"
                  :value="product.main.min_sale_amount"
                />

                <div class="text-danger">
                  <span
                    v-if="errors.min_sale_amount"
                    v-text="errors.min_sale_amount[0]"
                  ></span>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 pull-right">
                <label class="content-label">حداقل قیمت (تومان)</label>

                <input
                  placeholder="مثلا : 10000 "
                  type="text"
                  class="form-control min-sale-price"
                  :value="product.main.min_sale_price"
                />

                <div class="text-danger">
                  <span
                    v-if="errors.min_sale_price"
                    v-text="errors.min_sale_price[0]"
                  ></span>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6">
                <label class="content-label">حداکثر قیمت (تومان)</label>

                <input
                  placeholder="مثلا : 50000 "
                  type="text"
                  class="form-control max-sale-price"
                  :value="product.main.max_sale_price"
                />

                <div class="text-danger">
                  <span
                    v-if="errors.max_sale_price"
                    v-text="errors.max_sale_price[0]"
                  ></span>
                </div>
              </div>
            </div>
            <button
              @click="editProduct('article-modal' + product.main.id)"
              type="submit"
              style="border: none"
              class="green-button"
            >
              ثبت ویرایش
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--end article modal-->
    <div
      class="main-article-contents-image-wrapper"
      @click="openProductInSeperatePage()"
    >
      <ProductImage
        :base="str + '/'"
        :img="product.photos[0].file_path"
        :alt="
          'فروش عمده ی ' +
          product.main.sub_category_name +
          ' ' +
          product.main.product_name +
          ' ' +
          product.main.city_name +
          ' - ' +
          product.main.province_name
        "
        :image-count="product.main.photos_count"
        :product-url="productUrl"
      />
    </div>

    <ProductUserInfo
      :profile_photo="product.profile_info.profile_photo"
      :user_info="product.user_info"
      :user_full_name="
        product.user_info.first_name + ' ' + product.user_info.last_name
      "
      :user_name="product.user_info.user_name"
      :product_id="product.main.id"
      :is_my_profile_status="isMyProfile"
    />

    <div class="main-wrapper">
      <ArticleMainContents
        :productIndex="productIndex"
        :is_my_profile_status="isMyProfile"
      />
      <button
        v-if="product.main.is_elevated == 1"
        data-toggle="tooltip"
        data-placement="right"
        title="نردبان اعمال شده است"
        class="elevator-event"
      >
        <i class="fas fa-chart-line"></i>
      </button>
    </div>
    <div v-if="checkActionButtonShow()" class="actions-wrapper">
      <button @click="openProductWithABtest()" class="green-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 20 20"
        >
          <path
            class="svg-1"
            d="M19.388.405a.605.605 0 0 0-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.162 2.162 0 0 0-1.097.338L.729 12.157a1.01 1.01 0 0 0-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133zm-4.371 9.358a1.608 1.608 0 0 1-2.24-.396a1.614 1.614 0 0 1 .395-2.246a1.607 1.607 0 0 1 1.868.017c-.272.164-.459.26-.494.275a.606.606 0 0 0 .259 1.153c.086 0 .174-.02.257-.059c.194-.092.402-.201.619-.33a1.615 1.615 0 0 1-.664 1.586z"
          />
        </svg>

        استعلام قیمت
      </button>
    </div>
    <!--google codes-->
    <script v-html="jsonLDObject" type="application/ld+json"></script>
    <!--end google codes-->
  </article>
</template>
<script>
import { eventBus } from "../../../../router/router";

import ProductUserInfo from "./product-grid-article-components/product_user_info";
import ArticleMainContents from "./product-grid-article-components/article_main_contents";
import ProductImage from "./product-grid-article-components/product_image";

export default {
  components: {
    ProductUserInfo,
    ArticleMainContents,
    ProductImage,
  },
  props: ["productIndex", "product", "str", "hasActionButton"],
  data: function () {
    return {
      submiting: false,
      errors: "",
      popUpMsg: "",
      popUpLoaded: false,
      isMyProfile: false,
      productUrl: "",
      jsonLDObject: "",
      verifiedUserContent: this.$parent.verifiedUserContent,
      loadedProduct: true,
    };
  },
  methods: {
    init: function () {
      this.productUrl = this.getProductUrl();
      let userId = getUserId();
      if (userId) {
        if (userId === this.product.main.myuser_id) {
          this.isMyProfile = true;
          this.$emit("isMyProfile", this.isMyProfile);
        }
      }

      // this.jsonLDObject = this.createJsonLDObject();
    },
    openProductInSeperatePage: function () {
      localStorage.setItem("scrollIndex", this.$props.productIndex);
      window.open(this.productUrl, "_blank");

      this.registerComponentStatistics(
        "product",
        "show-product-in-seperate-page",
        "show-product-in-seperate-page"
      );
    },
    openProductWithABtest() {
      let routeName = this.$route.name;
      // if (routeName == "productList") {
      //   // ready for analytics
      //   // this.registerComponentStatistics("","","");
      // } else if (routeName == "productCategory") {
      //   // ready for analytics
      //   // this.registerComponentStatistics("","","");
      // }

      this.registerComponentStatistics(
        "product",
        "show-product-in-seperate-page",
        "click-on-btn"
      );

      this.openProductInSeperatePage();
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
    scrollToTheRequestRegisterBox: function (element) {
      var newPosition = $(element).offset();
      $("html, body")
        .stop()
        .animate({ scrollTop: newPosition.top - 380 }, 1000);
    },
    editProduct: function (getProductWrapper) {
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

          self.registerComponentExceptions(
            "Product-component: validation errors in edit product API"
          );
        });
    },
    updatePopUpStatus: function (popUpOpenStatus) {
      this.popUpLoaded = popUpOpenStatus;
    },
    getProductUrl: function () {
      return (
        "/product-view/خرید-عمده-" +
        this.product.main.sub_category_name.replace(" ", "-") +
        "/" +
        this.product.main.category_name.replace(" ", "-") +
        "/" +
        this.product.main.id
      );
    },
    copyProductLinkToClipBoard: function () {
      this.registerComponentStatistics(
        "product",
        "copy-product-link",
        "click on copy poduct link"
      );

      if (this.isDeviceMobile()) {
        var linkElement = document.createElement("a");
        var Message = "https://buskool.com" + this.getProductUrl();
        var messageToWhatsApp = encodeURIComponent(Message);
        var url = "whatsapp://send?text=" + messageToWhatsApp;

        linkElement.setAttribute("href", url);
        linkElement.setAttribute("data-action", "share/whatsapp/share");

        document.body.appendChild(linkElement);

        linkElement.click();

        document.body.removeChild(linkElement);
      } else {
        var input = document.createElement("input");
        input.setAttribute(
          "value",
          "https://buskool.com" + this.getProductUrl()
        );
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand("copy");
        document.body.removeChild(input);
        if (result) {
          this.popUpMsg = "آدرس محصول کپی شد.";
          eventBus.$emit("submitSuccess", this.popUpMsg);
          $("#custom-main-modal").modal("show");
        }
      }
    },
    isDeviceMobile: function () {
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
    createJsonLDObject: function () {
      var fullName =
        this.product.user_info.first_name +
        " " +
        this.product.user_info.last_name;

      var productOwnerProfilePageUrl =
        "https://www.buskool.com/profile/" + this.product.user_info.user_name;

      let jsonDL = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: this.product.main.product_name,
        image: this.product.photos.map(function (photo) {
          return "https://www.buskool.com/storage/" + photo.file_path;
        }),
        description: this.product.main.description,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.4",
          reviewCount: "3",
        },
        offers: {
          "@type": "Offer",
          url: "https://www.buskool.com" + this.getProductUrl(),
          priceCurrency: "IRR",
          price: this.product.main.min_sale_price * 10,
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Person",
            name: fullName,
            url: productOwnerProfilePageUrl,
          },
        },
      };

      return jsonDL;
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
    elevatorEvent: function () {
      // eventBus.$emit(
      //   "elevatorText",
      //   "با استفاده از نردبان، محصول شما تا زمان دریافت محصول تازه تر در همان دسته بندی، به عنوان اولین محصول نمایش داده می‌شود."
      // );

      eventBus.$emit("productId", this.product.main.id);
      eventBus.$emit("modal", "elevator");
    },
    checkActionButtonShow() {
      let userId = getUserId();
      if (
        (!userId && this.hasActionButton) ||
        (userId == -1 && this.hasActionButton)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.init();
    $(".elevator-event").tooltip();
  },
};
</script>
