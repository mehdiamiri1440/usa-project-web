(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_components_layouts_main_product_components_product-view_product-view_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sweetalert_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../sweetalert.min.js */ "./resources/assets/js/sweetalert.min.js");
/* harmony import */ var _sweetalert_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_min_js__WEBPACK_IMPORTED_MODULE_0__);
// import { eventBus } from "../../../../../router/router";
// import ProductCarousel from "../../main_components/product-list-carousel";
// import ProductContents from "./product";
// import UserInfo from "./user_info";
// import registerInquerForm from "../../main_components/register-inquiry-form.vue";
// import RegisterModal from "../../main_components/register-modal";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {// ProductContents,
    // UserInfo,
    // ProductCarousel,
    // RegisterModal,
    // registerInquerForm,
  },
  props: ["str", "assets", "userType"],
  data: function data() {
    return {
      isChat: true,
      currentUser: {
        profile: "",
        user_info: ""
      },
      product: {
        main: {
          category_name: "",
          sub_category_name: ""
        },
        user_info: "",
        profile_info: {
          profile_photo: ""
        },
        photos: []
      },
      relatedProducts: "",
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
      getPhoneLoader: false
    };
  },
  methods: {
    init: function init() {
      this.isLoading = true;
      var self = this;
      axios.post("/user/profile_info").then(function (response) {
        if (response.data.status) {
          self.currentUser = response.data;

          if (self.currentUser.user_info) {
            if (self.currentUser.user_info.is_seller == true) {
              self.showRegisterRequestBox = false;
            }
          }
        }

        axios.post("/get_product_by_id", {
          product_id: self.$route.params.id
        }).then(function (response) {
          self.product = response.data.product;
          self.categoryUrl = "/product-list/category/" + self.getCategoryName();
          self.starScore = Math.floor(self.product.user_info.review_info.avg_score);

          if (self.currentUser.user_info) {
            if (self.currentUser.user_info.id === self.product.main.myuser_id) {
              self.isMyProfile = true;
              self.$emit("isMyProfile", self.isMyProfile);
            }
          }

          axios.post("/get_related_products", {
            product_id: self.product.main.id
          }).then(function (response) {
            self.relatedProducts = response.data.related_products;
            self.isLoading = false;
          });
        })["catch"](function (err) {
          window.location.href = "/404";
        });
      });
    },
    openChat: function openChat(product) {
      this.isChat = true;
      this.registerComponentStatistics("product", "openChat", "click on open chatBox");
      var productName = product.main.sub_category_name + " " + product.main.product_name;
      var contact = {
        contact_id: product.user_info.id,
        first_name: product.user_info.first_name,
        last_name: product.user_info.last_name,
        profile_photo: product.profile_info.profile_photo,
        user_name: product.user_info.user_name,
        product_name: productName
      };
      var self = this;

      if (this.currentUser.user_info) {
        if (this.currentUser.user_info.id !== product.user_info.id) {
          this.$store.state.messagesStore.chatInfo = contact; //   window.localStorage.setItem("contact", JSON.stringify(contact));
          //   this.$router.push({ name: "registerInquiry" });
        } else {
          this.popUpMsg = "شما نمی توانید به خودتان پیام دهید.";
          this.$store.state.dashboardStore.submitSuccess = this.popUpMsg;
          $("#custom-main-modal").modal("show");
        }
      } else {
        window.localStorage.setItem("contact", JSON.stringify(contact)); // this.$router.push({ name: "registerInquiry" });

        this.$store.commit("routeStore/setModal", {
          name: "sendMsg"
        });
      }
    },
    loginModal: function loginModal(isChat) {
      this.isChat = isChat;
      $("#register-modal").modal("show"); // swal({
      //   title: "ارتباط با مخاطب",
      //   icon: "info",
      //   text:
      //     "برای ارتباط با هزاران خریدار و فروشنده در باسکول ابتدا ثبت نام کنید.",
      //   className: "custom-swal-with-cancel",
      //   buttons: {
      //     success: {
      //       text: "ورود سریع / ثبت نام",
      //     },
      //     close: {
      //       text: "بستن",
      //       className: "bg-cancel",
      //     },
      //   },
      // }).then((value) => {
      //   if (value == "success") {
      //     this.$router.push({ name: "register" });
      //   }
      // });
    },
    openChatModal: function openChatModal(product) {
      this.isChat = true;
      this.registerComponentStatistics("product", "openChat", "click on open chatBox");
      var contact = {
        contact_id: product.user_info.id,
        first_name: product.user_info.first_name,
        last_name: product.user_info.last_name,
        profile_photo: product.profile_info.profile_photo,
        user_name: product.user_info.user_name
      };

      if (this.currentUser.user_info) {
        if (this.currentUser.user_info.id !== product.user_info.id) {
          window.localStorage.setItem("contact", JSON.stringify(contact));
          this.$store.state.messagesStore.chatInfo = contact;
        } else {
          this.popUpMsg = "شما نمی توانید به خودتان پیام دهید.";
          this.$store.state.dashboardStore.submitSuccess = this.popUpMsg;
          $("#custom-main-modal").modal("show");
        }
      } else {
        window.localStorage.setItem("contact", JSON.stringify(contact));
        window.localStorage.setItem("pathname", window.location.pathname);
        this.$store.commit("routeStore/setModal", {
          name: "sendMsg"
        });
      }
    },
    activePhoneCall: function activePhoneCall(isModal) {
      var _this = this;

      this.isChat = false;
      this.getPhoneLoader = true;
      this.isActivePhone = true;
      axios.post("/get_seller_phone_number", {
        s_id: this.product.user_info.id,
        p_id: this.$route.params.id,
        item: "PRODUCT"
      }).then(function (response) {
        if (isModal) {
          _this.$nextTick(function () {
            _this.userPhone = response.data.phone;
            _this.getPhoneLoader = false;

            _this.handleBackKeys();

            var buskoolInfo = document.createElement("div");
            buskoolInfo.className = "phone-number-wrapper";
            buskoolInfo.innerHTML = "<a href=\"tel:".concat(_this.userPhone, "\" class=\"phone-number\">\n                        <p>\n                          <i class=\"fa fa-phone-square-alt\"></i>\n                          ").concat(_this.userPhone, "\n                        </p>\n                        <p>\u0634\u0645\u0627\u0631\u0647 \u062A\u0645\u0627\u0633</p>\n                      </a>\n                      <div class=\"warning-wrapper\">\n                        <p class=\"warning-title\">\n                          <i class=\"fa fa-exclamation-circle\"></i>\n\n                           \u0647\u0634\u062F\u0627\u0631 \u067E\u0644\u06CC\u0633 \n          </p>\n          <p class=\"warning-text\">\n            \u0644\u0637\u0641\u0627\u064B \u067E\u06CC\u0634 \u0627\u0632 \u0627\u0646\u062C\u0627\u0645 \u0645\u0639\u0627\u0645\u0644\u0647 \u0648 \u0647\u0631 \u0646\u0648\u0639 \u067E\u0631\u062F\u0627\u062E\u062A \u0648\u062C\u0647\u060C \u0627\u0632 \u0635\u062D\u062A \u06A9\u0627\u0644\u0627 \u06CC\u0627 \u062E\u062F\u0645\u0627\u062A \u0627\u0631\u0627\u0626\u0647 \u0634\u062F\u0647\u060C \u0628\u0647 \u0635\u0648\u0631\u062A \u062D\u0636\u0648\u0631\u06CC \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062D\u0627\u0635\u0644 \u0646\u0645\u0627\u06CC\u06CC\u062F. \n          </p>\n                      </div>");
            _sweetalert_min_js__WEBPACK_IMPORTED_MODULE_0___default()({
              content: buskoolInfo,
              className: "custom-swal-with-cancel",
              buttons: {
                close: {
                  text: "بستن",
                  className: "bg-cancel"
                }
              }
            }).then(function (value) {
              _this.isActivePhone = false;
            });
          });
        } else {
          _this.$nextTick(function () {
            _this.userPhone = response.data.phone;
            $("#phone-number-wrapper").collapse("show");
            _this.getPhoneLoader = false;
          });
        }
      })["catch"](function (error) {
        _this.getPhoneLoader = false;
        _this.isActivePhone = false;
        _sweetalert_min_js__WEBPACK_IMPORTED_MODULE_0___default()({
          text: error.response.data.msg,
          icon: "warning",
          className: "custom-swal-with-cancel",
          buttons: {
            close: {
              text: "بستن",
              className: "bg-cancel"
            }
          }
        });
      });
    },
    registerComponentStatistics: function registerComponentStatistics(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    getProductUrl: function getProductUrl() {
      return "/product-view/خرید-عمده-" + this.product.main.sub_category_name.replace(" ", "-") + "/" + this.product.main.category_name.replace(" ", "-") + "/" + this.product.main.id;
    },
    copyProductLinkToClipBoard: function copyProductLinkToClipBoard() {
      this.registerComponentStatistics("product", "copy-product-link", "click on copy poduct link");

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
        input.setAttribute("value", "https://buskool.com" + this.getProductUrl());
        document.body.appendChild(input);
        input.select();
        var result = document.execCommand("copy");
        document.body.removeChild(input);

        if (result) {
          this.popUpMsg = "آدرس محصول کپی شد.";
          this.$store.state.dashboardStore.submitSuccess = this.popUpMsg;
          $("#custom-main-modal").modal("show");
        }
      }
    },
    isDeviceMobile: function isDeviceMobile() {
      if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
      } else {
        return false;
      }
    },
    toLatinNumbers: function toLatinNumbers(num) {
      if (num == null) {
        return null;
      }

      num = num.toString().replace(/^0+/, "");
      num = num.toString().replace(/^\u0660+/, "");
      num = num.toString().replace(/^\u06f0+/, "");
      return num.toString().replace(/[\u0660-\u0669]/g, function (c) {
        return c.charCodeAt(0) - 0x0660;
      }).replace(/[\u06f0-\u06f9]/g, function (c) {
        return c.charCodeAt(0) - 0x06f0;
      });
    },
    editProduct: function editProduct(getProductWrapper) {
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
        min_sale_amount: minSaleAmount
      };

      if (description !== "") {
        request.description = description;
      }

      var self = this;
      axios.post("/edit_product", request).then(function (response) {
        $(".modal").modal("hide");
        this.$store.commit("routeStore/setModal", {
          name: "editProductModal"
        });
        self.registerComponentStatistics("product", "register-product-edit", "product-edited-successfully");
      })["catch"](function (err) {
        self.errors = "";
        self.errors = err.response.data.errors; // self.registerComponentExceptions('Product-component: validation errors in edit product API');
      });
    },
    stopLoader: function stopLoader() {
      this.$store.state.routeStore.isLoading = false;
    },
    getRelatedProductUrl: function getRelatedProductUrl(product) {
      return "/product-view/خرید-عمده-" + product.subcategory_name.replace(" ", "-") + "/" + product.category_name.replace(" ", "-") + "/" + product.id;
    },
    elevatorEvent: function elevatorEvent() {
      this.$store.commit("routeStore/elevatorModal", {
        text: "default",
        productId: this.product.main.id
      });
    },
    inquiry: function inquiry() {
      //eventBus.$emit("productUserInfo", this.product);
      this.$router.push({
        name: "registerinquiry"
      });
    },
    getConvertedNumbers: function getConvertedNumbers(number) {
      if (number || typeof number === "number") {
        var data = number / 1000;

        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          return data + " " + "تن";
        }
      } else return "";
    },
    getCategoryName: function getCategoryName() {
      var name = this.product.main.sub_category_name;
      return name.split("-").join(" ");
    },
    handleBackKeys: function handleBackKeys() {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        $(".modal").modal("hide");
      });
    },
    closePhoneModal: function closePhoneModal() {
      $(".modal").modal("hide");
    }
  },
  created: function created() {
    gtag("config", "UA-129398000-1", {
      page_path: "/product-view"
    });
    document.addEventListener("click", this.documentClick);
  },
  mounted: function mounted() {
    this.init();
    var self = this;

    document.onreadystatechange = function () {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated: function updated() {
    this.$nextTick(this.stopLoader());
  },
  watch: {
    $route: function $route(to, from) {
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
    }
  },
  metaInfo: function metaInfo() {
    var productSubCategory = this.product.main.sub_category_name;
    var productName = this.product.main.product_name;
    var productCity = this.product.main.city_name;
    var productProvince = this.product.main.province_name;
    var productOwnerFullName = this.product.user_info.first_name + " " + this.product.user_info.last_name;
    var productStock = this.product.main.stock;
    var productDescription = this.product.main.description ? this.product.main.description.split("<hr/>").join("") : "";
    var pageUrl = this.getProductUrl();
    var canonicalLink = window.location.host + pageUrl; //

    return {
      title: productOwnerFullName + " " + "خرید و فروش عمده و قیمت " + productSubCategory + " " + productName + " " + productCity + " " + productProvince,
      titleTemplate: "%s | باسکول",
      meta: [{
        name: "description",
        content: productOwnerFullName + " " + "خرید و فروش عمده و قیمت " + productSubCategory + " " + productName + " " + productCity + " " + productProvince + " " + "موجودی : " + productStock + " کیلوگرم" + productDescription
      }, {
        name: "author",
        content: "باسکول"
      }, {
        property: "og:description",
        content: "خرید و فروش عمده و قیمت " + productSubCategory + " از بهترین تولیدکنندگان ایران - باسکول بازار آنلاین کشاورزی ایران"
      }, {
        property: "og:site_name",
        content: "باسکول بازارآنلاین خرید و فروش محصولات کشاورزی ایران"
      }, {
        property: "og:title",
        content: "باسکول | خرید و فروش عمده و قیمت " + productSubCategory + " " + productName + " " + productCity + " " + productProvince + " " + productOwnerFullName
      }],
      link: [{
        rel: "canonical",
        href: canonicalLink
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=template&id=309343af&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=template&id=309343af&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-309343af");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-309343af");

var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  id: "main",
  "class": "row"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xs-12 col-lg-9 pull-right\" data-v-309343af><section class=\"main-content\" data-v-309343af><div class=\"row\" data-v-309343af><!-- &lt;ProductContents /&gt; --></div></section></div><div class=\"col-xs-12 col-lg-3 pull-left\" data-v-309343af><div class=\"row\" data-v-309343af><!-- &lt;UserInfo /&gt; --></div></div>", 2);

var _hoisted_5 = {
  key: 0,
  id: "product-section",
  "class": "section-wrapper col-xs-12 latest-product"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "box-title"
}, "محصولات مرتبط"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "products-contents"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "owl-carousel product-carousel"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <ProductCarousel\n                v-for=\"(product, index) in relatedProducts\"\n                :key=\"index\"\n                :img=\"str + '/thumbnails/' + product.photo\"\n                :title=\"product.product_name\"\n                :stock=\"getConvertedNumbers(product.stock)\"\n                :link=\"getRelatedProductUrl(product)\"\n                column=\"4\"\n              /> ")])])], -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 1,
  "class": "section-wrapper col-xs-12"
};
var _hoisted_8 = {
  "class": "row"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", {
  "class": "box-title"
}, "محصولات مرتبط", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "col-xs-12 products-contents"
};
var _hoisted_11 = {
  "class": "row"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<article class=\"carousel-item box-content col-xs-12\" data-v-309343af><span class=\"\n                      default-index-product-image\n                      placeholder-content\n                      col-xs-12\n                    \" data-v-309343af></span><span class=\"\n                      content-default-width\n                      placeholder-content\n                      margin-10\n                      col-xs-10 col-xs-offset-1\n                    \" data-v-309343af></span><span class=\"\n                      content-default-width\n                      placeholder-content\n                      col-xs-8 col-xs-offset-2\n                    \" data-v-309343af></span><span class=\"margin-10\" data-v-309343af></span></article>", 1);

var _hoisted_13 = {
  "class": "buttons-wrapper col-xs-12"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("مشاهده همه محصولات");

var _hoisted_15 = {
  key: 2,
  "class": "fix-send-message-wrapper hidden-lg hidden-md"
};
var _hoisted_16 = {
  key: 0
};
var _hoisted_17 = {
  key: 1
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fas fa-comment-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_19 = {
  key: 0
};
var _hoisted_20 = {
  key: 1
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "fas fa-comment-alt"
}, null, -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" اطلاعات تماس ");

var _hoisted_23 = {
  key: 0,
  "class": "fas fa-phone-square-alt"
};
var _hoisted_24 = {
  key: 1,
  "class": "spinner-border"
};

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, null, -1
/* HOISTED */
);

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" اطلاعات تماس ");

var _hoisted_27 = {
  key: 0,
  "class": "fas fa-phone-square-alt"
};
var _hoisted_28 = {
  key: 1,
  "class": "spinner-border"
};

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
  "class": "sr-only"
}, null, -1
/* HOISTED */
);

var _hoisted_30 = {
  key: 3,
  "class": "fix-send-message-wrapper hidden-lg hidden-md hidden-sm"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "content-full-width h-40 placeholder-content"
}, null, -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <RegisterModal\n      v-if=\"!currentUser.user_info\"\n      :is-chat=\"isChat\"\n      :product=\"product\"\n    /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("main", _hoisted_2, [_hoisted_3, _ctx.relatedProducts.length > 0 && _ctx.isLoading == false ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("section", _hoisted_5, [_hoisted_6])) : _ctx.relatedProducts.length == 0 && _ctx.isLoading == true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("section", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(4, function (item, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      key: index,
      "class": [{
        'hidden-xs': index >= 2
      }, "col-lg-3 col-md-4 col-xs-6 default-carousel-item"]
    }, [_hoisted_12], 2
    /* CLASS */
    );
  }), 64
  /* STABLE_FRAGMENT */
  ))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: {
      path: _ctx.categoryUrl
    },
    "class": "green-button blue-button"
  }, {
    "default": _withId(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["to"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <register-inquer-form\n        v-if=\"showRegisterRequestBox\"\n        wrapper-bg=\"true\"\n        :str=\"str\"\n        :user-profile-info=\"product.user_info\"\n        :user-profile-photo=\"\n          product.profile_info.profile_photo\n            ? str + '/' + product.profile_info.profile_photo\n            : assets + 'assets/img/user-defult.png'\n        \"\n      /> "), _ctx.product.main.product_name && !_ctx.isMyProfile ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_15, [!_ctx.isMyProfile && _ctx.currentUser.user_info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 0,
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.openChat(_ctx.product);
    }, ["prevent"])),
    "class": {
      'send-message-button': _ctx.product.user_info.has_phone && _ctx.currentUser.user_info.is_buyer,
      'green-button': !_ctx.product.user_info.has_phone || _ctx.product.user_info.has_phone && _ctx.currentUser.user_info.is_seller
    }
  }, [_ctx.product.user_info.has_phone && _ctx.currentUser.user_info.is_buyer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_16, " چت ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_17, " چت با فروشنده ")), _hoisted_18], 2
  /* CLASS */
  )) : !_ctx.currentUser.user_info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.loginModal(true);
    }, ["prevent"])),
    "class": {
      'send-message-button': _ctx.product.user_info.has_phone,
      'green-button': !_ctx.product.user_info.has_phone
    }
  }, [_ctx.product.user_info.has_phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_19, " چت ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_20, " چت با فروشنده ")), _hoisted_21], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !_ctx.isMyProfile && _ctx.currentUser.user_info && _ctx.product.user_info.has_phone && _ctx.currentUser.user_info.is_buyer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 2,
    onClick: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.activePhoneCall(true);
    }, ["prevent"])),
    "class": ["green-button", {
      disable: _ctx.isActivePhone
    }],
    disabled: _ctx.isActivePhone
  }, [_hoisted_22, !_ctx.getPhoneLoader ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("i", _hoisted_23)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_24, [_hoisted_25]))], 10
  /* CLASS, PROPS */
  , ["disabled"])) : !_ctx.currentUser.user_info && _ctx.product.user_info.has_phone ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 3,
    onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.loginModal(false);
    }, ["prevent"])),
    "class": ["green-button", {
      disable: _ctx.isActivePhone
    }],
    disabled: _ctx.isActivePhone
  }, [_hoisted_26, !_ctx.getPhoneLoader ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("i", _hoisted_27)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_28, [_hoisted_29]))], 10
  /* CLASS, PROPS */
  , ["disabled"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : !_ctx.product.main.product_name && !_ctx.isMyProfile ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_30, [_hoisted_31])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_css_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../css/owl.carousel.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/assets/css/owl.carousel.min.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../css/magnific-popup.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/assets/css/magnific-popup.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_css_owl_product_items_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../css/owl-product-items-style.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/assets/css/owl-product-items-style.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_css_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_css_magnific_popup_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_css_owl_product_items_style_css__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\ndiv[data-v-309343af],\np[data-v-309343af],\nspan[data-v-309343af] {\n  line-height: 1.5em;\n}\n#main[data-v-309343af] {\n  padding-top: 160px;\n}\n.main-content > h4[data-v-309343af] {\n  margin: 30px auto;\n}\n.buttons-wrapper[data-v-309343af] {\n  margin: 15px auto;\n  text-align: center;\n}\n.buttons-wrapper .green-button[data-v-309343af] {\n  width: initial;\n  font-size: 16px;\n  padding: 8px 20px;\n  border-radius: 8px;\n}\n.box-content[data-v-309343af] {\n  overflow: hidden;\n  background: #fff;\n  padding: 0;\n  text-align: center;\n  padding-bottom: 10px;\n  border-radius: 12px;\n  border: 1px solid #e0e0e0;\n  min-height: 212px;\n}\n.title-box[data-v-309343af] {\n  text-align: center;\n}\n.title-box h3[data-v-309343af] {\n  font-size: 17px;\n  font-weight: bold;\n  color: #4b4b4b;\n  margin-bottom: 12px;\n}\n.title-box a[data-v-309343af] {\n  margin: 20px auto 10px;\n\n  width: inherit;\n\n  font-size: 14px;\n\n  font-weight: bold;\n\n  padding: 9px 22px 6px;\n}\n.box-title[data-v-309343af] {\n  font-size: 18px;\n  color: #313a43;\n  direction: rtl;\n  margin: 30px 0 15px;\n}\n.box-title[data-v-309343af]::after {\n  content: \" \";\n  width: 100px;\n  height: 4px;\n  background: #00c569;\n  display: block;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.section-wrapper .title-box[data-v-309343af] {\n  text-align: center;\n\n  margin-top: 35px;\n}\n.fix-send-message-wrapper[data-v-309343af] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  padding: 5px;\n  box-shadow: 0 -6px 15px rgba(0, 0, 0, 0.16);\n  background: #fff;\n  display: flex;\n}\n.fix-send-message-wrapper button[data-v-309343af] {\n  width: 100%;\n  border-radius: 6px;\n  margin: 0;\n  font-size: 18px;\n  padding: 10px 15px;\n}\n.fix-send-message-wrapper button.disable[data-v-309343af] {\n  background: #e0e0e0;\n}\nbutton.send-message-button[data-v-309343af] {\n  background: none;\n  border-radius: 8px;\n  border: 1px solid #404b55;\n  color: #404b55;\n  transition: 300ms;\n  margin-right: 10px;\n}\n.send-message-button[data-v-309343af]:hover {\n  background: none;\n  border-radius: 8px;\n  border: 1px solid #404b55;\n  background: #404b55;\n  color: #fff;\n  transition: 300ms;\n}\n\n/* \n---------------------------------------------------------------------------------\n\n modal styles\n*/\n.modal-content[data-v-309343af] {\n  overflow: hidden;\n  border-radius: 12px;\n}\n.close-modal[data-v-309343af] {\n  font-size: 20px;\n\n  color: #777;\n\n  position: absolute;\n\n  right: 0;\n\n  padding: 8px 15px 2px;\n\n  top: 0;\n}\n.modal-title[data-v-309343af] {\n  font-size: 16px;\n\n  font-weight: 800;\n\n  color: #474747;\n\n  text-align: center;\n}\n.modal-header[data-v-309343af] {\n  padding: 9px 15px 10px;\n}\n.modal-body[data-v-309343af] {\n  padding: 0 15px;\n}\n.default-carousel-item .box-content[data-v-309343af] {\n  margin-bottom: 15px;\n}\n@media screen and (max-width: 1199px) {\n.box-title[data-v-309343af] {\n    margin: 0 auto 15px;\n}\n.default-carousel-item[data-v-309343af]:last-of-type {\n    display: none;\n}\n}\n@media screen and (max-width: 991px) {\n.default-carousel-item[data-v-309343af]:nth-child(3) {\n    display: none;\n}\n}\n@media screen and (max-width: 767px) {\n#main[data-v-309343af] {\n    padding-top: 96px;\n}\n.box-title[data-v-309343af] {\n    margin: 0 10px 15px;\n}\n}\n@media screen and (max-width: 450px) {\n.default-carousel-item[data-v-309343af] {\n    display: none;\n}\n.default-carousel-item[data-v-309343af]:first-of-type {\n    display: block;\n    width: 100%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/assets/css/magnific-popup.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/assets/css/magnific-popup.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Magnific Popup CSS */\n.mfp-bg {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1042;\n  overflow: hidden;\n  position: fixed;\n  background: #0b0b0b;\n  opacity: 0.8; }\n\n.mfp-wrap {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1043;\n  position: fixed;\n  outline: none !important;\n  -webkit-backface-visibility: hidden; }\n\n.mfp-container {\n  cursor: initial;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  padding: 0 8px;\n  box-sizing: border-box; }\n\n.mfp-container:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle; }\n\n.mfp-align-top .mfp-container:before {\n  display: none; }\n\n.mfp-content {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 auto;\n  text-align: left;\n  z-index: 1045; }\n\n.mfp-inline-holder .mfp-content,\n.mfp-ajax-holder .mfp-content {\n  width: 100%;\n  cursor: auto; }\n\n.mfp-ajax-cur {\n  cursor: progress; }\n\n.mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close {\n  cursor: pointer;\n}\n\n.mfp-zoom {\n  cursor: pointer;\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n\n.mfp-auto-cursor .mfp-content {\n  cursor: auto; }\n\n.mfp-close,\n.mfp-arrow,\n.mfp-preloader,\n.mfp-counter {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none; }\n\n.mfp-loading.mfp-figure {\n  display: none; }\n\n.mfp-hide {\n  display: none !important; }\n\n.mfp-preloader {\n  color: #CCC;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  text-align: center;\n  margin-top: -0.8em;\n  left: 8px;\n  right: 8px;\n  z-index: 1044; }\n  .mfp-preloader a {\n    color: #CCC; }\n    .mfp-preloader a:hover {\n      color: #FFF; }\n\n.mfp-s-ready .mfp-preloader {\n  display: none; }\n\n.mfp-s-error .mfp-content {\n  display: none; }\n\nbutton.mfp-close,\nbutton.mfp-arrow {\n  overflow: visible;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n  display: block;\n  outline: none;\n  padding: 0;\n  z-index: 1046;\n  box-shadow: none;\n  touch-action: manipulation; }\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\n.mfp-close {\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-decoration: none;\n  text-align: center;\n  opacity: 0.65;\n  padding: 0 0 18px 10px;\n  color: #FFF;\n  font-style: normal;\n  font-size: 28px;\n  font-family: Arial, Baskerville, monospace; }\n  .mfp-close:hover,\n  .mfp-close:focus {\n    opacity: 1; }\n  .mfp-close:active {\n    top: 1px; }\n\n.mfp-close-btn-in .mfp-close {\n  color: #333; }\n\n.mfp-image-holder .mfp-close,\n.mfp-iframe-holder .mfp-close {\n  color: #FFF;\n  right: -6px;\n  text-align: right;\n  padding-right: 6px;\n  width: 100%; }\n\n.mfp-counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #CCC;\n  font-size: 12px;\n  line-height: 18px;\n  white-space: nowrap; }\n\n.mfp-arrow {\n  position: absolute;\n  opacity: 0.65;\n  margin: 0;\n  top: 50%;\n  margin-top: -55px;\n  padding: 0;\n  width: 90px;\n  height: 110px;\n  -webkit-tap-highlight-color: transparent; }\n  .mfp-arrow:active {\n    margin-top: -54px; }\n  .mfp-arrow:hover,\n  .mfp-arrow:focus {\n    opacity: 1; }\n  .mfp-arrow:before,\n  .mfp-arrow:after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin-top: 35px;\n    margin-left: 35px;\n    border: medium inset transparent; }\n  .mfp-arrow:after {\n    border-top-width: 13px;\n    border-bottom-width: 13px;\n    top: 8px; }\n  .mfp-arrow:before {\n    border-top-width: 21px;\n    border-bottom-width: 21px;\n    opacity: 0.7; }\n\n.mfp-arrow-left {\n  left: 0; }\n  .mfp-arrow-left:after {\n    border-right: 17px solid #FFF;\n    margin-left: 31px; }\n  .mfp-arrow-left:before {\n    margin-left: 25px;\n    border-right: 27px solid #3F3F3F; }\n\n.mfp-arrow-right {\n  right: 0; }\n  .mfp-arrow-right:after {\n    border-left: 17px solid #FFF;\n    margin-left: 39px; }\n  .mfp-arrow-right:before {\n    border-left: 27px solid #3F3F3F; }\n\n.mfp-iframe-holder {\n  padding-top: 40px;\n  padding-bottom: 40px; }\n  .mfp-iframe-holder .mfp-content {\n    line-height: 0;\n    width: 100%;\n    max-width: 900px; }\n  .mfp-iframe-holder .mfp-close {\n    top: -40px; }\n\n.mfp-iframe-scaler {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  padding-top: 56.25%; }\n  .mfp-iframe-scaler iframe {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #000; }\n\n/* Main image in popup */\nimg.mfp-img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  line-height: 0;\n  box-sizing: border-box;\n  padding: 40px 0 40px;\n  margin: 0 auto; }\n\n/* The shadow behind the image */\n.mfp-figure {\n  line-height: 0; }\n  .mfp-figure:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 40px;\n    bottom: 40px;\n    display: block;\n    right: 0;\n    width: auto;\n    height: auto;\n    z-index: -1;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #444; }\n  .mfp-figure small {\n    color: #BDBDBD;\n    display: block;\n    font-size: 12px;\n    line-height: 14px; }\n  .mfp-figure figure {\n    margin: 0; }\n\n.mfp-bottom-bar {\n  margin-top: -36px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  cursor: auto; }\n\n.mfp-title {\n  text-align: left;\n  line-height: 18px;\n  color: #F3F3F3;\n  word-wrap: break-word;\n  padding-right: 36px; }\n\n.mfp-image-holder .mfp-content {\n  max-width: 100%; }\n\n.mfp-gallery .mfp-image-holder .mfp-figure {\n  cursor: pointer; }\n\n@media screen and (max-width: 800px) and (orientation: landscape), screen and (max-height: 300px) {\n  /**\n       * Remove all paddings around the image on small screen\n       */\n  .mfp-img-mobile .mfp-image-holder {\n    padding-left: 0;\n    padding-right: 0; }\n  .mfp-img-mobile img.mfp-img {\n    padding: 0; }\n  .mfp-img-mobile .mfp-figure:after {\n    top: 0;\n    bottom: 0; }\n  .mfp-img-mobile .mfp-figure small {\n    display: inline;\n    margin-left: 5px; }\n  .mfp-img-mobile .mfp-bottom-bar {\n    background: rgba(0, 0, 0, 0.6);\n    bottom: 0;\n    margin: 0;\n    top: auto;\n    padding: 3px 5px;\n    position: fixed;\n    box-sizing: border-box; }\n    .mfp-img-mobile .mfp-bottom-bar:empty {\n      padding: 0; }\n  .mfp-img-mobile .mfp-counter {\n    right: 5px;\n    top: 3px; }\n  .mfp-img-mobile .mfp-close {\n    top: 0;\n    right: 0;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    background: rgba(0, 0, 0, 0.6);\n    position: fixed;\n    text-align: center;\n    padding: 0; } }\n\n@media all and (max-width: 900px) {\n  .mfp-arrow {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75); }\n  .mfp-arrow-left {\n    -webkit-transform-origin: 0;\n    transform-origin: 0; }\n  .mfp-arrow-right {\n    -webkit-transform-origin: 100%;\n    transform-origin: 100%; }\n  .mfp-container {\n    padding-left: 6px;\n    padding-right: 6px; } }\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/assets/css/owl-product-items-style.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/assets/css/owl-product-items-style.css ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n.product-carousel .owl-dots {\n    text-align: center;\n    position: absolute;\n    left: initial;\n    width: 100%;\n}\n\n.product-carousel .owl-dot {\n    width: 7px !important;\n    height: 7px !important;\n    background: #d4d4d4 !important;\n    margin: 0 3px !important;\n    border-radius: 50px !important;\n\n}\n\n .product-carousel  .owl-nav{\n\n    position: absolute;\n\n    width: 100%;\n\n    margin-top: -10px;\n\n    top: 50%;\n\n}\n\n .product-carousel .owl-nav {\n    display: flex;\n    justify-content: space-between;\n    direction: ltr;\n    height: 0;\n}\n\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/assets/css/owl.carousel.min.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./resources/assets/css/owl.carousel.min.css ***!
  \*****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Owl Carousel v2.3.4\n * Copyright 2013-2018 David Deutsch\n * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE\n */\n.owl-carousel,.owl-carousel .owl-item{-webkit-tap-highlight-color:transparent;position:relative}.owl-carousel{display:none;width:100%;z-index:1}.owl-carousel .owl-stage{position:relative;-ms-touch-action:pan-Y;touch-action:manipulation;-moz-backface-visibility:hidden}.owl-carousel .owl-stage:after{content:\".\";display:block;clear:both;visibility:hidden;line-height:0;height:0}.owl-carousel .owl-stage-outer{position:relative;overflow:hidden;-webkit-transform:translate3d(0,0,0)}.owl-carousel .owl-item,.owl-carousel .owl-wrapper{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;-ms-backface-visibility:hidden;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0)}.owl-carousel .owl-item{min-height:1px;float:left;-webkit-backface-visibility:hidden;-webkit-touch-callout:none}.owl-carousel .owl-item img{display:block;width:100%}.owl-carousel .owl-dots.disabled,.owl-carousel .owl-nav.disabled{display:none}.no-js .owl-carousel,.owl-carousel.owl-loaded{display:block}.owl-carousel .owl-dot,.owl-carousel .owl-nav .owl-next,.owl-carousel .owl-nav .owl-prev{cursor:pointer;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel .owl-nav button.owl-next,.owl-carousel .owl-nav button.owl-prev,.owl-carousel button.owl-dot{background:0 0;color:inherit;border:none;padding:0!important;font:inherit}.owl-carousel.owl-loading{opacity:0;display:block}.owl-carousel.owl-hidden{opacity:0}.owl-carousel.owl-refresh .owl-item{visibility:hidden}.owl-carousel.owl-drag .owl-item{-ms-touch-action:pan-y;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.owl-carousel.owl-grab{cursor:move;cursor:grab}.owl-carousel.owl-rtl{direction:rtl}.owl-carousel.owl-rtl .owl-item{float:right}.owl-carousel .animated{animation-duration:1s;animation-fill-mode:both}.owl-carousel .owl-animated-in{z-index:0}.owl-carousel .owl-animated-out{z-index:1}.owl-carousel .fadeOut{animation-name:fadeOut}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.owl-height{transition:height .5s ease-in-out}.owl-carousel .owl-item .owl-lazy{opacity:0;transition:opacity .4s ease}.owl-carousel .owl-item .owl-lazy:not([src]),.owl-carousel .owl-item .owl-lazy[src^=\"\"]{max-height:0}.owl-carousel .owl-item img.owl-lazy{transform-style:preserve-3d}.owl-carousel .owl-video-wrapper{position:relative;height:100%;background:#000}.owl-carousel .owl-video-play-icon{position:absolute;height:80px;width:80px;left:50%;top:50%;margin-left:-40px;margin-top:-40px;cursor:pointer;z-index:1;-webkit-backface-visibility:hidden;transition:transform .1s ease}.owl-carousel .owl-video-play-icon:hover{-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3)}.owl-carousel .owl-video-playing .owl-video-play-icon,.owl-carousel .owl-video-playing .owl-video-tn{display:none}.owl-carousel .owl-video-tn{opacity:0;height:100%;background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity .4s ease}.owl-carousel .owl-video-frame{position:relative;z-index:1;height:100%;width:100%}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_view_vue_vue_type_template_id_309343af_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-view.vue?vue&type=template&id=309343af&scoped=true */ "./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=template&id=309343af&scoped=true");
/* harmony import */ var _product_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-view.vue?vue&type=script&lang=js */ "./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=script&lang=js");
/* harmony import */ var _product_view_vue_vue_type_style_index_0_id_309343af_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css */ "./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css");




;
_product_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _product_view_vue_vue_type_template_id_309343af_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_product_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-309343af"
/* hot reload */
if (false) {}

_product_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_product_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_view_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./product-view.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=template&id=309343af&scoped=true":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=template&id=309343af&scoped=true ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_view_vue_vue_type_template_id_309343af_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_view_vue_vue_type_template_id_309343af_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./product-view.vue?vue&type=template&id=309343af&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=template&id=309343af&scoped=true");


/***/ }),

/***/ "./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_view_vue_vue_type_style_index_0_id_309343af_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader/index.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_view_vue_vue_type_style_index_0_id_309343af_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_view_vue_vue_type_style_index_0_id_309343af_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_view_vue_vue_type_style_index_0_id_309343af_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_product_view_vue_vue_type_style_index_0_id_309343af_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/assets/js/components/layouts/main/product_components/product-view/product-view.vue?vue&type=style&index=0&id=309343af&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3107671b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);