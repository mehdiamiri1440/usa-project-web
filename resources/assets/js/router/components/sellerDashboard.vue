<style >
.profile-carosel .owl-nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  margin-top: -10px;
  top: calc(50% - 10px);
  direction: ltr;
  padding: 0 15px;
  height: 0;
}
</style>
<style scoped>
#main {
  margin-right: 250px;
  margin-top: 59px;
  position: relative;
}
#main.has-verification-alert {
  margin-top: 99px;
}
#main.little-main {
  margin-right: 80px;
}

.fixed-action-button-wrapper {
  position: fixed;
  width: 60px;
  height: 60px;
  right: 25px;
  bottom: 75px;
  font-weight: bold;
  font-size: 10px;
  background: #e51c38;
  border-radius: 50px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
  z-index: 1;
}

.fixed-action-button-wrapper .fixed-action {
  background: none;
  border: none;
  text-align: center;
  color: #fff;
  padding: 0;
  width: 100%;
  height: 100%;
}

.fixed-action-button-wrapper .fixed-action i {
  display: block;
  font-size: 18px;
}
#main.is-required-fix-alert {
  margin-top: 84px !important;
}

#pricing-modal,
#factor-pricing-modal {
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0 !important ;
}

#pricing-modal .modal-body,
#factor-pricing-modal .modal-body {
  padding: 20px 15px 0;
}

#pricing-modal .modal-content,
#factor-pricing-modal .modal-content {
  min-height: 100%;
  border-radius: 0;
  border: none;
  float: right;
  width: 100%;
  background: #fff;
}

#factor-pricing-modal .modal-content {
  background: #fff;
}

#factor-pricing-modal .modal-body {
  text-align: center;
}

#factor-pricing-modal p.factor-title {
  font-size: 22px;
  margin-top: 10px;
  font-weight: bold;
  color: #313a43;
  text-align: right;
}

#factor-pricing-modal ul {
  text-align: right;
  margin-top: 20px;
}

#factor-pricing-modal ul li {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  direction: rtl;
  padding: 20px 0;
  border-top: 1px solid #f2f2f2;
}

#factor-pricing-modal ul li .item-title {
  font-size: 18px;
  font-weight: 500;
  color: #556080;
}

#factor-pricing-modal ul li .item-value {
  font-size: 18px;
  font-weight: bold;
  color: #666;
}

#factor-pricing-modal ul li.checkout-item .item-title {
  color: #00c569;
}

#factor-pricing-modal ul li.checkout-item .item-value {
  color: #00c569;
}

#factor-pricing-modal ul li .item-value span {
  color: #666;
  font-size: 14px;
  font-weight: 400;
}

#factor-pricing-modal ul li.checkout-item {
  border-top: 1px solid #bebebe;
}

#factor-pricing-modal ul li:first-of-type {
  border-top: none;
}

#factor-pricing-modal button.pay {
  background: linear-gradient(-45deg, #00c569, #23d5ab, #21ad93, #23a6d5);
  background-size: 400% 400%;
  animation: gradient 7s ease infinite;
  font-size: 22px;
  padding: 13px;
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
}

.modal-header {
  padding: 9px 15px 10px;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
}

.modal-dialog {
  margin: 0;
  height: 100%;
  width: 100%;
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

.modal-body {
  position: relative;
  padding: 80px 15px 0;
}

@media screen and (max-width: 991px) {
  #main,
  #main.little-main,
  #main.is-required-fix-alert {
    margin-right: 0 !important;
  }
  .modal-body {
    padding: 20px 7px;
  }
  #main.is-required-fix-alert {
    margin-top: 89px !important;
  }
  #main.has-verification-alert {
    margin-top: 81px;
  }
}

@media screen and (max-width: 767px) {
  #main.is-required-fix-alert {
    margin-top: 84px !important;
  }
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes shake {
  0% {
    transform: translate3d(0, -1px, 0);
  }

  50% {
    transform: translate3d(0, -5px, 0);
  }
  100% {
    transform: translate3d(0, -1px, 0);
  }
}
</style>

<template>
  <div>
    <div v-if="doPaymentLoader" class="main-loader-content">
      <div class="pricing-loader-icon">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="pricing-loader-text text-rtl">
          در حال انتقال به درگاه پرداخت . . .
        </p>
      </div>
    </div>
    <!--  #regex pricing modal  -->

    <!--modal-->
    <div class="container" v-show="is_pricing_active">
      <div
        id="pricing-modal"
        class="pricing-modal modal fade"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <a href="#" class="close-modal" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>
              <div class="modal-title">
                <span>ارتقا عضویت</span>
              </div>
            </div>

            <div class="modal-body col-xs-12 col-lg-8 col-lg-offset-2">
              <div class="row">
                <pricing-contents
                  justPro="false"
                  :offer-time="this.offerTime"
                  isModal="modal-"
                  :currentUser="currentUser"
                />
              </div>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <!--modal-->
    <div class="container">
      <div
        id="factor-pricing-modal"
        class="factor-pricing-modal modal fade"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body col-xs-12 col-lg-4 col-lg-offset-4">
              <p class="factor-title">جزئيات پرداخت</p>
              <ul>
                <li
                  v-for="(item, index) in paymentData.paymentItems"
                  :key="index"
                  :class="{
                    'checkout-item':
                      index == paymentData.paymentItems.length - 1,
                  }"
                >
                  <p class="item-title" v-text="item.title"></p>
                  <p class="item-value" v-if="item.value != '0'">
                    {{ item.value }}
                    <span v-text="item.unit"> </span>
                  </p>
                  <p class="item-value" v-else>ندارد</p>
                </li>
              </ul>

              <button class="green-button pay" @click.prevent="doPayment">
                پرداخت
              </button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>
    <!-- end regex pricing modal -->
    <promotion-modal />
    
    <DelsaPromotionModal />
    <PhoneLockedModal />

    <header-dash-seller
      :storage="storagePath"
      :assets="assets"
      :logout="'/logout'"
      :user-id="userId"
      :messageCount="messageCount"
      :is-required-fix-alert="this.isRequiredFixAlert"
      :offer-time="this.offerTime"
    ></header-dash-seller>

    <div
      id="main"
      class="h-100"
      :class="{
        'is-required-fix-alert': isRequiredFixAlert,
        'has-verification-alert': verificationAlert,
      }"
    >
      <router-view
        :str="storagePath"
        :assets="assets"
        :user-type="currentUser.user_info.is_seller"
        :current-user="currentUser"
        :offer-time="this.offerTime"
      ></router-view>
    </div>

    <div
      v-if="buttonIsActive && buttonActiveInSteps"
      class="fixed-action-button-wrapper hidden-sm hidden-md hidden-lg"
    >
      <router-link
        tag="button"
        :to="{ name: 'messagesRequestSeller' }"
        class="fixed-action"
      >
        <i class="fa fa-list-alt"></i>
        <span> خریداران </span>
      </router-link>
    </div>
  </div>
</template>


<script>
import HeaderDashSeller from "../../components/dashboard/seller/header/header";
import pricingContents from "../../components/dashboard/seller/pricing-seller-page/pricing-tables/pricing-package-contents";
import PromotionModal from "../../components/layouts/main/promotion-modal";
import DelsaPromotionModal from "../../components/layouts/main/delsa-promotion-modal.vue";
import PhoneLockedModal from "../../components/layouts/main/phone-locked-modal.vue";
import { eventBus } from "../router.js";

export default {
  components: {
    "header-dash-seller": HeaderDashSeller,
    "pricing-contents": pricingContents,
    PromotionModal,
    DelsaPromotionModal,
    PhoneLockedModal,
    
  },
  props: [
    "userId",
    "isSeller",
    "assets",
    "storagePath",
    "messageCount",
    "verifiedUserContent",
  ],
  data: function () {
    return {
      linkHideStates: [
        "messenger/contacts",
        "messenger/buy-ads",
        "register-product/success",
        "buyAd-requests",
        "register-product",
        "pricing",
        "product-pricing",
        "buyad-pricing",
        "invited-users",
        "referral",
        "introduction-delsa",
      ],
      buttonIsActive: true,
      currentUser: {
        profile: {
          is_company: "",
          company_name: "",
          company_register_code: "",
          address: "",
          public_phone: "",
          profile_photo: this.storage + "",
          postal_code: "",
          shaba_code: "",
        },
        user_info: "",
      },
      buttonActiveInSteps: true,
      isRequiredFixAlert: false,
      offerTime: "",
      active_pakage_type: 3,
      is_pricing_active: false,
      paymentData: "",
      doPaymentLoader: false,
      verificationAlert: false,
      buyAdsGolden: [],
    };
  },
  methods: {
    init() {
      this.checkButtonIsHide();

      $("#factor-pricing-modal").on("show.bs.modal", (e) => {
        this.handleBackKeys();
      });

      $("#pricing-modal").on("show.bs.modal", (e) => {
        this.handleBackKeys();
      });
      $("#pricing-modal").on("hidden.bs.modal", (e) => {
        if (this.getCookie("closePricingModalCount")) {
          if (this.getCookie("closePricingModalCount") < 10) {
            let closeCount = this.getCookie("closePricingModalCount");
            closeCount = parseInt(closeCount) + 1;
            this.createCookie(
              "closePricingModalCount",
              closeCount,
              (30 - closeCount) * (24 * 60)
            ); // for 30 day
            this.createCookie("closePricingModal", true, 24 * 60); //for one day
          }
        } else {
          this.createCookie("closePricingModal", true, 24 * 60); //for one day
          this.createCookie("closePricingModalCount", 1, 29 * (24 * 60)); // for 30 day
        }
      });

      axios
        .post("/get_total_unread_messages_for_current_user")
        .then(function (response) {
          let messageCount = response.data.msg_count;
          eventBus.$emit("messageCount", messageCount);
        })
        .catch(function (error) {
          console.log("error", error);
        });

      axios.post("/get_show_pricing_page_status").then((response) => {
        this.offerTime = response.data.show_off;
        if (
          !this.getCookie("closePricingModal") &&
          response.data.show &&
          window.location.pathname != "/seller/register-product"
        ) {
          if (
            !this.getCookie("closePricingModalCount") ||
            this.getCookie("closePricingModalCount") < 10
          ) {
            this.is_pricing_active = true;
            this.checkPricingModal();
          }
        }
      });
    },
    subIsActive: function (input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
    checkButtonIsHide: function () {
      let buttonActive = true;
      // if (this.checkPricingRoute()) {
      //   this.isRequiredFixAlert = false;
      // } else {
      //   this.checkCookie();
      // }
      for (var i = 0; i < this.linkHideStates.length; i++) {
        if (this.subIsActive("/seller/" + this.linkHideStates[i])) {
          buttonActive = false;
        }
      }
      this.buttonIsActive = buttonActive ? true : false;
    },
    createCookie: function (name, value, minutes) {
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    },
    getCookie: function (cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    checkCookie: function () {
      if (
        this.active_pakage_type == 3 ||
        this.getCookie("closeSellerFixModal") == "false" ||
        this.checkPricingRoute()
      ) {
        this.isRequiredFixAlert = false;
      } else {
        this.isRequiredFixAlert = true;
      }
    },
    checkPricingRoute: function () {
      let pageIsPricing = false;
      if (
        this.urlIsPricing("dashboardPricingTableSeller") ||
        this.urlIsPricing("dashboardBuyAdPricing") ||
        this.urlIsPricing("dashboardProductPricing")
      ) {
        pageIsPricing = true;
      }
      return pageIsPricing;
    },
    urlIsPricing(pricingName) {
      if (this.$route.name == pricingName) {
        return true;
      } else {
        return false;
      }
    },
    handleBackKeys: function () {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $("#factor-pricing-modal").modal("hide");
        $("#pricing-modal").modal("hide");
        $("#description-modal").modal("hide");
      });
    },
    checkPricingModal: function () {
      if (
        this.$route.name == "dashboardPricingTableSeller" ||
        this.$route.name == "dashboardProductPricing" ||
        this.$route.name == "dashboardBuyAdPricing"
      ) {
        this.is_pricing_active = false;
      } else {
      }
    },
    doPayment: function () {
      this.doPaymentLoader = true;
      let userId = getUserId();

      this.registerComponentStatistics(
        "payment",
        "type-" + this.paymentData.selectedPackage,
        "userId: " + userId
      );
      window.location.href = "/payment/" + this.paymentData.selectedPackage;
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
    promotionModal() {
      $("#promotion-modal").on("hidden.bs.modal", (e) => {
        this.createCookie("closePromotionModal", true, 60 * 24);
      });
      $("#promotion-modal").on("show.bs.modal", (e) => {
        this.handleBackKeys();
      });
      if (
        !this.getCookie("closePromotionModal") &&
        !this.getCookie("registerNewUser") &&
        this.currentUser.user_info.active_pakage_type == 0
      ) {
        if (this.buyAdsGolden.length == 0) {
          this.checkGoldenBuyAd();
        } else {
          setTimeout(() => {
            $("#promotion-modal").modal("show");
          }, 5000);
        }
      }
    },
    checkGoldenBuyAd() {
      axios.post("/get_my_buyAd_suggestions").then((response) => {
        this.buyAdsGolden = response.data.golden_buyAds;
        setTimeout(() => {
          $("#promotion-modal").modal("show");
        }, 4000);
      });
    },
    routePromotionModal() {
      $("#promotion-modal").modal("hide");
      this.$router.push({ name: "dashboardPricingTableSeller" });
    },
    
    handleBackKeys: function () {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        if (swal.getState().isOpen) {
          swal.close();
        } else {
          $(".modal").modal("hide");
        }
      });
    },
    openGoldenChatRestrictionModal() {
      eventBus.$emit("modal", "goldenBuyAdReplyLimit");

      this.registerComponentStatistics(
        "suggestedBuyAdReply",
        "openChat",
        "permission denied"
      );
    },
  },
  watch: {
    currentUser(user) {
      this.$parent.currentUser = user;
      if (user.user_info.id) {
        this.promotionModal();
      }
    },
    $route() {
      this.checkButtonIsHide();
      this.checkPricingModal();
      this.buttonActiveInSteps = true;
    },
    active_pakage_type: function () {
      // this.checkCookie();
    },
    is_pricing_active: function () {
      if (this.is_pricing_active == true) {
        $("#pricing-modal").modal("show");
      }
    },
  },
  mounted: function () {
    this.init();

    eventBus.$on("buyAdbuttonActive", (event) => {
      this.buttonActiveInSteps = event;
    });

    eventBus.$on("paymentData", (event) => {
      this.paymentData = event;
      $("#factor-pricing-modal").modal("show");
    });
  },
  created: function () {
    // this.checkCookie();
  },
};
</script>
