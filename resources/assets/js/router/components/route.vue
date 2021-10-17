<style scoped>
.android-download-alert-wrapper {
  position: fixed;
  bottom: 59px;
  width: 100%;
  background: #fff;
  text-align: center;
  color: #fff;
  direction: rtl;
  z-index: 1020;
  font-weight: bold;
  font-size: 20px;
  padding: 5px;
  box-shadow: 0 -8px 8px rgba(0, 0, 0, 0.1);
}

.android-apk-download {
  padding: 10px 15px;
  background: linear-gradient(-35deg, #ff9300, #f60);
  border: none;
  width: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.android-apk-download img {
  width: 28px;
  position: absolute;
  left: 15px;
}

.close-android-download-alert-wrapper {
  background: none;
  border: none;
  font-size: 20px;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 1021;
  padding: 11px 15px 8px;
}
/* 
.modal-dialog {
  width: 400px;
} */
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

.download-app-logo-wrapper {
  width: 73px;
  margin: 0 auto;
}

#download-app-modal .modal-body {
  padding-top: 100px;
  text-align: center;
}

#download-app-modal h3 {
  font-size: 23px;
  color: #666;
  margin-top: 5px;
}

#download-app-modal .modal-body p {
  font-size: 15px;
  font-weight: bold;
  color: #7e7e7e;
  margin: 20px 0;
  line-height: 1.618;
}

#download-app-modal .modal-body a {
  background: #00c569;
  color: #fff;
  border-radius: 10px;
  padding: 12px 0;
  font-size: 20px;
  max-width: 350px;
  display: block;
  margin: 50px auto;
}

.main_popup_content i.fa-times {
  color: #777;
  background: none;
  top: 0;
  right: 0;
}

.main_popup_content {
  padding: 50px 0;
}

#payment-type-modal.modal {
  text-align: center;
  padding: 0 !important;
}

#payment-type-modal.modal:before {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -4px;
}

#payment-type-modal .modal-dialog {
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}

@media screen and (max-width: 768px) {
  #wallet-modal .modal-dialog {
    margin: 0;
    height: 100%;
  }
  #wallet-modal {
    padding: 0 !important;
  }

  #download-app-modal > div {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .modal-content {
    min-height: 100%;

    border-radius: 0;

    border: none;

    float: right;

    width: 100%;
  }

  #payment-type-modal .modal-dialog {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
}
</style>

<template>
  <div>
    <!-- payment loader -->
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

    <!--  #regex wallet modal  -->

    <div class="container">
      <div id="wallet-modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="main_popup_content col-xs-12">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>
              <WalletComponent
                :user-name="userFullName"
                :walletBalance="walletBalance"
              />
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <!-- end regex wallet modal -->

    <!--  #regex payment type modal  -->

    <div class="container">
      <div
        id="payment-type-modal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-body col-xs-12">
              <div class="main_popup_content modal-body col-xs-12">
                <a href="#" data-dismiss="modal">
                  <i class="fa fa-times"></i>
                </a>
                <PaymentTypes
                  :peyment-method-data="peymentMethodData"
                  :wallet-balance="walletBalance"
                />
              </div>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <!-- end regex payment type modal -->

    <!--  #regex download App modal  -->

    <div class="container">
      <div
        id="download-app-modal"
        class="download-app-modal modal fade"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <a class="close-modal" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>

              <div class="modal-title">دانلود اپلیکیشن باسکول</div>
            </div>
            <div class="modal-body col-xs-12">
              <div class="download-app-logo-wrapper">
                <img src="../../../img/logo/mobile-logo.svg" alt />
              </div>
              <h3>اپلیکیشن جدید باسکول</h3>
              <p class="text-rtl">
                برای دسترسی سریعتر و راحت تر به خریداران و فروشندگان عمده برنامه
                جدید باسکول را نصب کنید.
              </p>
              <a href @click.prevent="doDownload()">
                دانلود اپلیکیشن باسکول
                <i class="fa fa-download"></i>
              </a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <!-- end regex download App modal  -->

    <ChatModal />
    <EditProductModal />
    <ShareToSocialModal
      :share-modal-url="shareModalUrl"
      :share-modal-text="shareModalText"
      :share-modal-title="shareModalTitle"
    />
    <ReportModal :reported-user-id="reportedUserId" />
    <ReviewModal :review-user-data="reviewUserData" />

    <Navigation
      v-if="$route.name != 'invite'"
      :messageCount="messageCount"
      class="hidden-lg hidden-md"
    />

    <router-view
      :user-id="userId"
      :is-seller="isSeller"
      :assets="assets"
      :storage-path="storagePath"
      :profile-photo="profilePhoto"
      :user-full-name="userFullName"
      :user-logout-path="userLogoutPath"
      :verified-user-content="verifiedUserContent"
    />

    <router-view
      name="buyer"
      :user-id="userId"
      :is-seller="isSeller"
      :assets="assets"
      :storage-path="storagePath"
      :verified-user-content="verifiedUserContent"
    />

    <router-view
      name="seller"
      class="h-100"
      :user-id="userId"
      :is-seller="isSeller"
      :assets="assets"
      :storage-path="storagePath"
      :verified-user-content="verifiedUserContent"
    />

    <!-- add android app download  -->

    <div
      v-if="downloadAppButton && $route.name != 'invite'"
      class="android-download-alert-wrapper hidden-lg hidden-md"
    >
      <button
        class="close-android-download-alert-wrapper"
        @click.prevent="downloadAppButton = false"
      >
        <i class="fa fa-times"></i>
      </button>

      <button class="android-apk-download" @click.prevent="doDownload()">
        دانلود اپلیکیشن باسکول

        <img
          src="../../../img/google-play-icon.svg"
          alt="دانلود اپلیکیشن باسکول"
        />
      </button>
    </div>
  </div>
</template>

<script>
import router from "../router.js";
import { eventBus } from "../router.js";
import Cookies from "js-cookie";
import IsWebview from "is-webview";
import ChatModal from "../../components/layouts/main/main_components/chat_modal";
import EditProductModal from "../../components/layouts/main/main_components/edit-product-modal";
import ReportModal from "../../components/layouts/main/main_components/report";
import ReviewModal from "../../components/layouts/main/main_components/review-component/review";
import ShareToSocialModal from "../../components/layouts/main/main_components/share-to-social-modal";
import WalletComponent from "../../components/layouts/main/wallet";
import PaymentTypes from "../../components/layouts/main/payment-types.vue";
import swal from "../../sweetalert.min.js";
import Navigation from "./navigation.vue";

export default {
  components: {
    ChatModal,
    EditProductModal,
    ReportModal,
    ReviewModal,
    ShareToSocialModal,
    WalletComponent,
    PaymentTypes,
    Navigation,
  },
  data: function () {
    return {
      iswebview: navigator.userAgent == "webView" ? true : false,
      isConditionSatisfied: false,
      downloadAppButton: false,
      elevatorText: "",
      productId: "",
      buyAdId: "",
      joinGroupMessage: "",
      joinGroupId: "",
      activeContactId: "",
      reportedUserId: "",
      shareModalUrl: "",
      shareModalText: "",
      shareModalTitle: "",
      msg: "",
      reviewCurrentStep: 0,
      reviewUserData: "",
      reviewUserPrfileId: "",
      currentUser: {
        profile: {
          profile_photo: "",
        },
        user_info: "",
      },
      walletBalance: "",
      peymentMethodData: "",
      verifiedUserContent:
        "<div class='tooltip-wrapper text-rtl'>اطلاعات هویتی این کاربر احراز شده است.<br/><a href='/verification'>اطلاعات بیشتر</a> </div>",
      doPaymentLoader: false,
      messageCount: "",
    };
  },
  props: [
    "userId",
    "isSeller",
    "assets",
    "storagePath",
    "profilePhoto",
    "userFullName",
    "userLogoutPath",
  ],
  created: function () {
    window.localStorage.setItem("userId", this.userId);
    window.localStorage.setItem("userType", this.isSeller);

    this.setEventBus();

    let self = this;

    $(document).on("mouseleave", function () {
      if (!self.userId) {
        if (!window.localStorage.getItem("guideShowed")) {
          self.openRelatedSwalModal("guide");

          window.localStorage.setItem("guideShowed", true);
        }
      }
    });

    if (messaging) {
      messaging.onMessage(function (payload) {
        if (payload.notification.tag == "buskool") {
          if (!self.activeContactId) {
            eventBus.$emit("messageCount", 1);
          }
          eventBus.$emit("contanctMessageReceived", true);
        } else {
          eventBus.$emit("groupMessageReceived", true);
        }
      });
    }
  },
  router,
  methods: {
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
    getAndroidVersion: function (ua) {
      ua = (ua || navigator.userAgent).toLowerCase();
      var match = ua.match(/android\s([0-9\.]*)/);
      return match ? match[1] : undefined;
    },
    doDownload: function () {
      //ga
      this.registerComponentStatistics(
        "download",
        "app download btn",
        "download app btn in popUp"
      );
      // code here
      this.createCookie("downloadAppModal", true, 60 * 24);
      // window.location.href =
      //   "https://play.google.com/store/apps/details?id=com.buskool";
      window.location.href =
        "https://play.google.com/store/search?q=%D8%A8%D8%A7%D8%B3%DA%A9%D9%88%D9%84&c=apps";
    },
    isOsIOS: function () {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);
      return ios;
    },
    activateDownloadApp: function () {
      let self = this;
      $("#download-app-modal").on("show.bs.modal", (e) => {
        this.handleBackKeys();
      });
      $("#download-app-modal").on("hidden.bs.modal", function () {
        self.createCookie("downloadAppModal", true, 60 * 24);
      });
      if (this.isDeviceMobile() && !this.isOsIOS()) {
        let androidVersion = this.getAndroidVersion();
        if (parseInt(androidVersion) >= 5) {
          if (
            window.location.pathname != "/buyer/messenger/contacts" &&
            window.location.pathname != "/seller/messenger/contacts" &&
            window.location.pathname != "/buyAd-requests" &&
            !window.location.pathname.includes("product-view") &&
            !this.iswebview
          ) {
            this.isConditionSatisfied = true;
          }

          if (!this.checkCookie() && this.userId && !this.iswebview) {
            setTimeout(() => {
              $("#download-app-modal").modal("show");
            }, 1000);
          }
        }
      }
    },
    activateDownloadAppButton: function () {
      let self = this;
      if (this.isDeviceMobile() && !this.isOsIOS()) {
        let androidVersion = this.getAndroidVersion();
        if (parseInt(androidVersion) >= 5) {
          if (
            window.location.pathname != "/buyer/messenger/contacts" &&
            window.location.pathname != "/seller/messenger/contacts" &&
            window.location.pathname != "/buyAd-requests" &&
            !window.location.pathname.includes("product-view") &&
            !this.iswebview
          ) {
            this.downloadAppButton = true;
          }
          // if (!this.checkCookie() && !this.iswebview) {
          // setTimeout(() => {
          //   $("#download-app-modal").modal("show");
          // }, 1000);
          // }
        }
      }
    },
    closeGlobalChatBox() {
      eventBus.$emit("ChatBoxStatus", false);
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
    subscribeUserToGroup: function () {
      var self = this;
      var groupId = this.joinGroupId;
      axios
        .post("/group/subscribe_user", {
          group_id: groupId,
        })
        .then(function (response) {
          self.popUpMsg = "شما با موفقییت در گروه عضو شدید";
          eventBus.$emit("submitSuccess", self.popUpMsg);
          $("#custom-main-modal").modal("show");
          eventBus.$emit("reloadAllGroupLists", true);
        });
    },
    extractSenderIdFromTag: function (tag) {
      return tag.split("FCM")[1];
    },
    openRelatedSwalModal: function (modalName) {
      switch (modalName) {
        case "sendMsg":
          this.raiseSendMessageModal();
          break;
        case "elevator":
          this.raiseElevatorModal();
          break;
        case "deleteProduct":
          this.raiseDeleteProductModal();
          break;
        case "deleteBuyAdModal":
          this.raiseDeleteBuyAdModal();
          break;
        case "productEditDone":
          this.raiseProductEditSuccessModal();
          break;
        case "userRegisterSuccess":
          this.raiseUserRegisterSuccessModal();
          break;
        case "registerProductLimit":
          this.raiseRegisterProductLimitModal();
          break;
        case "buyAdReplyLimit":
          this.raiseBuyAdReplyLimitModal();
          break;
        case "profileEditSuccess":
          this.raiseProfileEditSuccessModal();
          break;
        case "passwordResetSuccess":
          this.raisePasswordResetSuccessModal();
          break;
        case "guide":
          this.raiseGuideModal();
          break;
        case "deleteUserComment":
          this.raiseDeleteUserCommentModal();
          break;
        case "verificationInfoUploadDone":
          this.raiseVerificationUploadSuccessModal();
          break;
        case "goldenBuyAdReplyLimit":
          this.raiseGoldenBuyAdReplyLimitModal();
          break;
      }
    },
    raiseSendMessageModal: function () {
      let self = this;

      this.handleBackBtn();

      swal({
        title: "ارتباط با مخاطب",
        text: "برای ارتباط با هزاران خریدار و فروشنده در باسکول ابتدا ثبت نام کنید.",
        className: "custom-swal-with-cancel",
        buttons: {
          success: {
            text: "ورود سریع / ثبت نام",
            value: "register",
          },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "register":
            self.$router.push({ name: "register" });
            break;
          default:
            window.localStorage.removeItem("contact");
            window.localStorage.removeItem("pathname");
            break;
        }
      });
    },
    raiseElevatorModal: function () {
      let self = this;

      this.handleBackBtn();

      let price = document.createElement("div");
      price.innerHTML =
        '<h1 class="green-text" dir="rtl"><span>25,000</span> تومان </h1><br/><p class="swal-text">با استفاده از نردبان، محصول شما تا زمان دریافت محصول تازه تر در همان دسته بندی، به عنوان اولین محصول نمایش داده می‌شود.</p>';

      swal({
        title: "اعمال نردبان",
        content: price,
        className: "custom-swal-with-cancel",
        buttons: {
          success: {
            text: "پرداخت از طریق درگاه",
            value: "pay",
          },
          // wallet: {
          //   text: "پرداخت از کیف پول",
          //   value: "wallet",
          //   className: "bg-blue",
          // },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "pay":
            window.location.href = "/payment/elevator/" + self.productId;
            break;
          case "wallet":
            axios
              .post("/wallet-expend/elevator", {
                product_id: self.productId,
              })
              .then((response) => {
                swal({
                  title: "نردبان اعمال شد",
                  text: "اعمال نردبان با موفقیت انجام شد.",
                  icon: "success",
                  className: "custom-swal-with-cancel",
                  buttons: {
                    close: {
                      text: "بستن",
                      value: "close",
                      className: "bg-cancel",
                    },
                  },
                }).then((value) => {
                  if (value == "close") {
                    window.location.reload();
                  }
                });
              })
              .catch((err) => {
                swal({
                  title: "خطا",
                  text: err.response.data.msg,
                  icon: "error",
                  className: "custom-swal-with-cancel",
                  buttons: {
                    wallet: {
                      text: "افزایش موجودی",
                      value: "wallet",
                      className: "bg-blue",
                    },
                    close: {
                      text: "بستن",
                      value: "close",
                      className: "bg-cancel",
                    },
                  },
                });
              });
            break;
        }
      });
    },
    raiseDeleteProductModal: function () {
      let self = this;

      this.handleBackBtn();

      swal({
        title: "حذف محصول",
        text: "آیا میخواهید این محصول را حذف کنید؟",
        // content: closeIconBtn,
        className: "custom-swal-with-cancel",
        buttons: {
          delete: {
            text: "حذف کن",
            value: "delete",
            className: "bg-red",
          },
          reject: {
            text: "انصراف",
          },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "delete":
            axios
              .post("/delete_product_by_id", {
                product_id: self.productId,
              })
              .then(function (response) {
                swal({
                  title: "حذف شد",
                  text: "محصول شما از لیست محصولات باسکول حذف شد.",
                  icon: "success",
                  className: "custom-swal-with-cancel",
                  buttons: {
                    close: {
                      text: "بستن",
                      value: "close",
                      className: "bg-cancel",
                    },
                  },
                }).then((value) => {
                  if (value == "close") {
                    window.location.reload();
                  }
                });

                self.registerComponentStatistics(
                  "product",
                  "product-deleted",
                  "product-deleted-successfully"
                );
              })
              .catch(function (err) {
                console.log(err);
                self.registerComponentStatistics(
                  "product",
                  "product-delete-failed",
                  "product-delete-failed"
                );
                //show modal
                swal({
                  title: "خطا",
                  text: "خطایی رخ داده است. دوباره تلاش کنید.",
                  icon: "error",
                  className: "custom-swal-with-cancel",
                  buttons: {
                    close: {
                      text: "بستن",
                      value: "close",
                      className: "bg-cancel",
                    },
                  },
                });
              });

            break;
        }
      });
    },
    raiseDeleteBuyAdModal: function () {
      let self = this;

      this.handleBackBtn();

      swal({
        title: "حذف درخواست",
        text: "آیا میخواهید این درخواست را حذف کنید؟",
        // content: closeIconBtn,
        className: "custom-swal-with-cancel",
        buttons: {
          delete: {
            text: "حذف کن",
            value: "delete",
            className: "bg-red",
          },
          reject: {
            text: "انصراف",
          },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "delete":
            axios
              .post("/delete_buy_ad_by_id", {
                buy_ad_id: self.buyAdId,
              })
              .then(function (response) {
                swal({
                  title: "حذف شد",
                  text: "درخواست خرید شما با موفقیت حذف شد.",
                  icon: "success",
                  className: "custom-swal-with-cancel",
                  buttons: {
                    close: {
                      text: "بستن",
                      value: "close",
                      className: "bg-cancel",
                    },
                  },
                }).then((value) => {
                  if (value == "close") {
                    window.location.reload();
                  }
                });

                self.registerComponentStatistics(
                  "product",
                  "product-deleted",
                  "product-deleted-successfully"
                );
              })
              .catch(function (err) {
                console.log(err);
                self.registerComponentStatistics(
                  "product",
                  "product-delete-failed",
                  "product-delete-failed"
                );
                //show modal
                swal({
                  title: "خطا",
                  text: "خطایی رخ داده است. دوباره تلاش کنید.",
                  icon: "error",
                  className: "custom-swal-with-cancel",
                  buttons: {
                    close: {
                      text: "بستن",
                      value: "close",
                      className: "bg-cancel",
                    },
                  },
                });
              });

            break;
        }
      });
    },
    raiseProductEditSuccessModal: function () {
      this.handleBackBtn();
      swal({
        title: "ویرایش محصول",
        text: "ویرایش محصول شما با موفقیت انجام شد.",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      });
    },
    raiseUserRegisterSuccessModal: function () {
      this.handleBackBtn();
      swal({
        title: "ثبت نام موفق",
        text: "به باسکول خوش آمدید. لطفا کمی صبر کنید...",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      });
    },
    raiseRegisterProductLimitModal: function () {
      let self = this;

      this.handleBackBtn();

      let content = document.createElement("div");
      content.innerHTML =
        '<p dir="rtl" class="swal-guide">سقف تعداد محصولات ثبت شده شما پر شده است.</p><br/><p class="red-text swal-guide" dir="rtl"><b>برای ثبت محصولات جدید، لطفا دکمه افزایش ظرفیت را بزنید.</b></p>';
      swal({
        title: "محدودیت ثبت محصول جدید",
        content: content,
        className: "custom-swal-with-cancel",
        icon: "warning",
        buttons: {
          success: {
            text: "افزایش ظرفیت",
            value: "promote",
            // className: "button-new-badge",
          },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "promote":
            self.$router.push({ name: "dashboardProductPricing" });
            break;
        }
      });
    },
    raiseBuyAdReplyLimitModal: function () {
      let self = this;

      this.handleBackBtn();

      let content = document.createElement("div");
      content.innerHTML =
        '<p class="swal-guide" dir="rtl">ظرفیت روزانه پاسخ به درخواست های خرید شما پر شده است.</p><br/><p class="red-text swal-guide" dir="rtl"><b>برای افزایش ظرفیت، لطفا دکمه افزایش ظرفیت را بزنید.</b></p>';
      swal({
        title: "محدودیت پاسخ به درخواست ها",
        content: content,
        className: "custom-swal-with-cancel",
        icon: "warning",
        buttons: {
          success: {
            text: "افزایش ظرفیت",
            value: "promote",
            // className: "button-new-badge",
          },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "promote":
            self.$router.push({ name: "dashboardBuyAdPricing" });
            break;
        }
      });
    },
    raiseProfileEditSuccessModal: function () {
      this.handleBackBtn();
      swal({
        title: "ویرایش پروفایل",
        text: "ویرایش پروفایل شما با موفقیت انجام شد.پس از تایید کارشناسان پروفایل شما برای همه قابل نمایش خواهد بود.",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      });
    },
    raisePasswordResetSuccessModal: function () {
      this.handleBackBtn();
      swal({
        title: "بازیابی کلمه عبور",
        text: "کلمه عبور جدید به تلفن همراهتان ارسال شد.",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      });
    },
    raiseGuideModal: function () {
      let self = this;

      this.handleBackBtn();

      swal({
        title: "راهنما",
        text: "خریدار عمده هستید یا فروشنده عمده؟",
        className: "custom-swal-with-cancel",
        // icon: "success",
        buttons: {
          buyer: {
            text: "خریدارم",
            value: "buyer",
          },
          seller: {
            text: "فروشنده ام",
            value: "seller",
          },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "buyer":
            self.$router.push({ name: "mainRegisterRequest" });
            break;
          case "seller":
            self.$router.push({ name: "register" });
            break;
        }
      });
    },
    raiseDeleteUserCommentModal: function () {
      let self = this;

      this.handleBackBtn();

      swal({
        title: "حذف نظر",
        text: "تعداد نظرات حذف شده توسط شما به کاربران نمایش داده خواهد شد. آیا می خواهید این نظر را حذف کنید؟",
        className: "custom-swal-with-cancel",
        icon: "warning",
        buttons: {
          delete: {
            text: "حذف کن",
            value: "delete",
            className: "bg-red",
          },
          reject: {
            text: "انصراف",
          },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "delete":
            self.$router.push({ name: "mainRegisterRequest" });
            break;
        }
      });
    },
    raiseVerificationUploadSuccessModal: function () {
      this.handleBackBtn();
      swal({
        title: "احراز هویت",
        text: "اطلاعات شما با موفقیت ارسال شد. در صورت تایید کارشناسان باسکول نشان احراز هویت به حساب کاربری شما داده می شود.",
        className: "custom-swal-with-cancel",
        icon: "success",
        buttons: {
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      });
    },
    raiseGoldenBuyAdReplyLimitModal: function () {
      let self = this;

      this.handleBackBtn();

      let content = document.createElement("div");
      content.innerHTML =
        '<p><span class="swal-star-badge"><i class="fa fa-star"></i></span></p><br/><p class="swal-guide" dir="rtl">شما به درخواست هایی طلایی دسترسی ندارید.</p><br/><p class="red-text swal-guide" dir="rtl"><b>برای دسترسی به تمام درخواست های طلایی، عضویت خود را ارتقا دهید.</b></p>';
      swal({
        title: "درخواست های طلایی",
        content: content,
        className: "custom-swal-with-cancel",
        icon: "warning",
        buttons: {
          success: {
            text: "ارتقا عضویت",
            value: "promote",
          },
          close: {
            text: "بستن",
            className: "bg-cancel",
          },
        },
      }).then((value) => {
        switch (value) {
          case "promote":
            $(".modal").modal("hide");
            self.$router.push({ name: "dashboardPricingTableSeller" });
            break;
        }
      });
    },
    isModalOpen: function () {
      return swal.getState().isOpen;
    },
    handleBackBtn: function () {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        if (self.isModalOpen()) {
          swal.close();
          window.localStorage.removeItem("contact"); // it's been set before modal openning
          window.localStorage.removeItem("msgToSend");
          window.localStorage.removeItem("pathname");
          // window.location.href = window.location.pathname;
        }
      });
    },
    handleBackKeys: function () {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $(".modal").modal("hide");
      });
    },
    isUserAuthorizedToPostComment: function () {
      let self = this;
      let userObg = {
        user_id: this.reviewUserPrfileId,
      };
      axios
        .post("/profile/is-user-authorized-to-post-comment", userObg)
        .then(function (response) {
          eventBus.$emit("userAllowedReview", response.data.is_allowed);
        });
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
      if (!!this.getCookie("downloadAppModal")) {
        return true;
      } else {
        return false;
      }
    },
    rechargeWalletPayment(price) {
      this.doPaymentLoader = true;
      let amount = Number(this.toLatinNumbers(price));

      this.registerComponentStatistics(
        "payment",
        "increase-wallet-capacity",
        amount
      );

      window.location.href = "/wallet-payment/charge/" + amount;
    },
    toLatinNumbers(num) {
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
    numberGuideCountCookie() {
      let showNumberCount = this.getCookie("showNumberCount");
      if (!showNumberCount) {
        showNumberCount = 1;
      } else {
        showNumberCount++;
      }
      this.createCookie("showNumberCount", showNumberCount, 60 * 24 * 365);

      return showNumberCount;
    },
    isShowNumberGuideActive() {
      let showNumberGuideActive = this.getCookie("showNumberGuideActive");
      if (!showNumberGuideActive) {
        this.createCookie("showNumberGuideActive", true, 24 * 60); //for one day
        return true;
      } else {
        return false;
      }
    },
    initShowNumberGuide() {
      let registerNewUser = this.getCookie("registerNewUser");
      if (this.isShowNumberGuideActive() && !registerNewUser) {
        if (this.numberGuideCountCookie() < 5) {
          swal({
            title: "نمایش اطلاعات تماس",
            text: "شماره تماس شما به خریداران نمایش داده نمی شود. اگر مایل به نمایش شماره تماس خود به خریداران هستید. راهنمای زیر را مطالعه کنید.",
            className: "custom-swal-with-cancel",
            icon: "info",
            buttons: {
              success: {
                text: "راهنمای اطلاعات تماس",
                value: "guide",
              },
              close: {
                text: "بستن",
                className: "bg-cancel",
              },
            },
          }).then((value) => {
            switch (value) {
              case "guide":
                this.$router.push({ name: "showNumberGuideSeller" });
                break;
            }
          });
        }
      }
    },
    setEventBus() {
      eventBus.$on("elevatorText", ($event) => {
        this.elevatorText = $event;
      });

      eventBus.$on("productId", ($event) => {
        this.productId = $event;
      });

      eventBus.$on("buyAdId", ($event) => {
        this.buyAdId = $event;
      });

      eventBus.$on("joinGroupId", ($event) => {
        this.joinGroupId = $event;
      });
      eventBus.$on("joinGroupMessage", ($event) => {
        this.joinGroupMessage = $event;
      });

      eventBus.$on("activeContactId", ($event) => {
        this.activeContactId = $event;
      });

      eventBus.$on("reoprtModal", ($event) => {
        this.reportedUserId = $event;
        $("#report-modal").modal("show");
      });

      eventBus.$on("shareModalUrl", ($event) => {
        let shareItem = $event;
        this.shareModalUrl = shareItem.shareModalUrl;
        if (shareItem.shareModalText) {
          this.shareModalText = shareItem.shareModalText;
        }

        if (shareItem.shareModalTitle) {
          this.shareModalTitle = shareItem.shareModalTitle;
        } else {
          this.shareModalTitle = "";
        }

        $("#share-modal").modal("show");
      });

      eventBus.$on("reviewUserData", ($event) => {
        this.reviewUserData = $event;
        this.reviewUserPrfileId = $event.id;
        $("#review-modal").modal("show");
      });

      eventBus.$on("modal", ($event) => {
        this.openRelatedSwalModal($event);
      });

      eventBus.$on("peymentMethodData", ($event) => {
        this.peymentMethodData = $event;
      });
      eventBus.$on("messageCount", (event) => {
        this.messageCount += event;
      });
    },
  },
  mounted() {
    $(document).ready(() => {
      $("#master-loader-wrapper").css("display", "none");
    });
    this.activateDownloadAppButton();
    $("#wallet-modal").on("show.bs.modal", (e) => {
      this.handleBackKeys();
    });
    eventBus.$emit("globalVerifiedBadgeContents", 1);
  },
  watch: {
    currentUser(user) {
      if (user.user_info) {
        this.walletBalance = user.user_info.wallet_balance;

        let date = user.profile.created_at;
        let userCreatedAt = new Date(date);
        let currentDate = new Date();
        currentDate = new Date(currentDate.getTime() - 60 * 60000);
        if (currentDate > userCreatedAt) {
          // this.activateDownloadApp();
        }
      }
    },
    walletBalance(balance) {
      let activePackageType = this.currentUser.user_info.active_pakage_type;
      if (balance == 0 && Number(activePackageType) == 0) {
        // this.initShowNumberGuide();
      }
    },
  },
};
</script>
