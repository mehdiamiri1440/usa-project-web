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

.elevator-event {
  position: absolute;
  left: 5px;
  bottom: 15px;
  border: none;
  border-radius: 8px;
  background: #38485f;
  color: #fff;
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
  <article class="main-content-item">
    <!--end article modal-->
    <div class="main-article-contents-image-wrapper" @click="setScroll()">
      <ProductImage
        :base="str + '/'"
        :img="lastProduct.photo"
        :alt="
          'فروش عمده ی ' +
          lastProduct.sub_category_name +
          ' ' +
          lastProduct.product_name +
          ' ' +
          lastProduct.city_name +
          ' - ' +
          lastProduct.province_name
        "
        :image-count="product.main.photos_count"
        :product-url="productUrl"
      />
    </div>

    <ProductUserInfo
      :profile_photo="product.profile_info.profile_photo"
      :user_info="product.user_info"
      :user_full_name="lastProduct.first_name + ' ' + lastProduct.last_name"
      :user_name="product.user_info.user_name"
      :current_user="false"
      :product_id="lastProduct.id"
      :is_my_profile_status="false"
    />

    <ArticleMainContents
      :productIndex="productIndex"
      :is_my_profile_status="false"
    />

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
  props: ["productIndex", "lastProduct", "str", "loadedProduct"],
  data: function () {
    return {
      submiting: false,
      errors: "",
      popUpMsg: "",
      popUpLoaded: false,
      isMyProfile: false,
      product: {
        user_info: "",
        main: "",
        profile_info: "",
      },
      productUrl: "",
      jsonLDObject: "",
      verifiedUserContent: this.$parent.verifiedUserContent,
    };
  },
  methods: {
    init: function () {
      this.productUrl = this.getProductUrl();
    },
    setProductData() {
      this.product.user_info = {
        first_name: this.lastProduct.first_name,
        last_name: this.lastProduct.last_name,
        active_pakage_type: 0,
        user_name: "",
        response_rate: 0,
        is_verified: this.lastProduct.is_verified,
      };
      this.product.main = {
        id: this.lastProduct.id,
        photos_count: 0,
        sub_category_name: this.lastProduct.subcategory_name,
        category_name: this.lastProduct.category_name,
        product_name: this.lastProduct.product_name,
        city_name: this.lastProduct.city_name,
        province_name: this.lastProduct.province_name,
        stock: this.lastProduct.stock,
      };
    },
    setScroll: function () {
      localStorage.setItem("scrollIndex", this.$props.productIndex);
      window.open(this.productUrl, "_blank");
      // if (
      //   this.isDeviceMobile() &&
      //   window.location.pathname.includes("product-list")
      // ) {
      //   window.open(this.productUrl, "_blank");
      // } else {
      //   this.$router.push(this.productUrl);
      // }
      this.registerComponentStatistics(
        "product",
        "show-product-in-seperate-page",
        "show-product-in-seperate-page"
      );
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
  },
  created() {
    this.setProductData();
  },
  mounted() {
    this.init();
  },
};
</script>
