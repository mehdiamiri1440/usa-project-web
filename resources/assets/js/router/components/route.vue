<style scoped>
.android-download-alert-wrapper {
  position: fixed;

  bottom: 0;

  width: 100%;

  background: #e41c38;

  text-align: center;

  color: #fff;

  direction: rtl;

  z-index: 1020;
}

.android-apk-download {
  padding: 15px;

  background: none;

  border: none;

  width: 100%;

  height: 100%;
}

.close-android-download-alert-wrapper {
  background: none;

  border: none;

  font-size: 20px;

  position: absolute;

  right: 15px;

  top: 13px;

  z-index: 1021;
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
    <!-- Chat Join Modals -->
    <div class="container">
      <div id="join-to-group" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="main_popup_content">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>
              <p class="main-pop-up" v-text="joinGroupMessage"></p>

              <a
                href="#"
                class="btn green-button delete"
                data-dismiss="modal"
                @click.prevent="subscribeUserToGroup()"
                v-text="'عضویت در گروه'"
              ></a>

              <a
                href="#"
                class="btn green-button bg-gray"
                data-dismiss="modal"
                v-text="'انصراف'"
              ></a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <!--  #regex elevator modal  -->

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

    <!-- end regex elevator modal -->

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
    <ReviewModal />
    <ShareToSocialModal />
    <ReportModal />

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

    <!-- <router-view
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
    /> -->

    <!-- add android app download  -->

    <div
      v-if="downloadAppButton"
      class="android-download-alert-wrapper hidden-lg hidden-md"
    >
      <button
        class="close-android-download-alert-wrapper"
        @click.prevent="downloadAppButton = false"
      >
        <i class="fa fa-times-circle"></i>
      </button>

      <button class="android-apk-download" @click.prevent="doDownload">
        <i class="fas fa-download"></i>
        دانلود اپلیکیشن باسکول
      </button>
    </div>
  </div>
</template>

<script>
import router from "../router.js";

import ChatModal from "../../components/layouts/main/main_components/chat_modal";
import ReportModal from "../../components/layouts/main/main_components/report";
import ReviewModal from "../../components/layouts/main/main_components/review-component/review";
import ShareToSocialModal from "../../components/layouts/main/main_components/share-to-social-modal";
import WalletComponent from "../../components/layouts/main/wallet";

export default {
  components: {
    ChatModal,
    ReportModal,
    ReviewModal,
    ShareToSocialModal,
    WalletComponent,
  },
  data: function () {
    return {
      iswebview: navigator.userAgent == "webView" ? true : false,
      isConditionSatisfied: false,
      downloadAppButton: false,
      buyAdId: "",
      msg: "",
      reviewCurrentStep: 0,
      currentUser: "",
      walletBalance: "",
      verifiedUserContent:
        "<div class='tooltip-wrapper text-rtl'>اطلاعات هویتی این کاربر احراز شده است.<br/><a href='/verification'>اطلاعات بیشتر</a> </div>",
      doPaymentLoader: false,
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
          if (!this.$store.state.routeStore.activeContactId) {
            this.$store.state.messagesStore.messageCount = 1;
          }
          this.$store.state.messagesStore.contanctMessageReceived = true;
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
            window.location.pathname != "/seller/buyAd-requests" &&
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
            window.location.pathname != "/seller/buyAd-requests" &&
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
    extractSenderIdFromTag: function (tag) {
      return tag.split("FCM")[1];
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
      let userObg = {
        user_id: this.$store.state.routeStore.reviewUserData.id,
      };
      axios
        .post("/profile/is-user-authorized-to-post-comment", userObg)
        .then((response) => {
          this.$store.state.messagesStore.userAllowedReview =
            response.data.is_allowed;
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
  },
  mounted() {
    this.activateDownloadAppButton();
    $("#wallet-modal").on("show.bs.modal", (e) => {
      this.handleBackKeys();
    });
  },
  watch: {
    currentUser(user) {
      this.walletBalance = user.user_info.wallet_balance;

      let date = user.profile.created_at;
      let userCreatedAt = new Date(date);
      let currentDate = new Date();
      currentDate = new Date(currentDate.getTime() - 60 * 60000);
      if (currentDate > userCreatedAt) {
        // this.activateDownloadApp();
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
