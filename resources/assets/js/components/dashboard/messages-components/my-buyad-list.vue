<style scoped>
.contact-body .contact-search {
  padding: 9px 0 0;
  background: #eef3f3;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
}

.contact-items {
  padding-top: 99px;
}

li.contact-item {
  min-height: 230px;
}

.contact-items.is-buyer-list {
  padding-top: 60px;
}

.contact-body .contact-search .contact-search-input-wrapper {
  position: relative;
  padding: 0 7px;
  margin-bottom: 5px;
}

.contact-body .contact-search .contact-search-input-wrapper i {
  position: absolute;
  left: 15px;
  font-size: 20px;
  color: #c1c1c1;
  top: 11px;
}

.contact-body .contact-search .contact-search-input-wrapper input {
  padding: 9px 15px;
  border-radius: 50px;
  background: #fff;
  border: none;
}

.contact-body .contact-image {
  width: 45px;
  height: 45px;
  float: right;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid #f2f2f2;
  position: relative;
}

.contact-body .contact-image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: initial;
  transform: translate(-50%, -50%);
}

.contact-body .contact-item a {
  font-size: 13px;
  color: #595959;
  overflow: hidden;
  padding: 10px 7px;
  border-bottom: 1px solid #b6b6b6;
  display: block;
  transition: 200ms;
}

.contact-body .contact-item a:hover,
.contact-body .contact-item a.active {
  background: #f6f6f6;
  transition: 200ms;
}

.contact-body .contact-item:last-of-type a {
  border-bottom: none;
}

.contact-body .contact-item span.contact-name {
  float: right;
  font-weight: bold;
}
.contact-body .contact-item span.contact-last-message {
  float: right;
  width: calc(100% - 60px);
  font-weight: lighter;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: rtl;
  text-align: right;
}

.contact-body .contact-item .contact-date {
  float: left;
  padding-top: 5px;
  width: 50px;
  direction: ltr;
  text-align: center;
}

.last-message-date {
  display: inline-block;
  height: 17px;
  width: 60px;
  font-size: 10px;
  line-height: 2;
  text-align: center;
}

.count-number {
  display: inline-block;
  height: 17px;
  width: 17px;
  background: #00c569;
  color: #fff;
  border-radius: 50px;
  font-size: 10px;
  line-height: 2;
}
.count-number-wrapper {
  width: 60px;
  float: left;
  text-align: center;
}
.not-found-item {
  text-align: center;
  padding: 100px 15px 0;
}
.not-found-item p {
  font-size: 16px;
  font-weight: bold;
  color: #777;
}
.not-found-item i {
  margin: 5px;
}

.load-more {
  margin: 0px 0 0;
  display: inline-block;
  background: #00c569;
  color: #fff;
  padding: 10px 25px;
  border-radius: 0px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  border: none;
  width: 100%;
}

.verified-user::before {
  top: 3px;
  left: 3px;
}

.contacts-switch-buttons-wrapper {
  float: right;
  width: 100%;
  background: #eef3f3;
  border-bottom: 3px solid #e3e3e3;
}

.contacts-switch-buttons-wrapper .switch-button-item {
  float: right;
  width: 50%;
}

.contacts-switch-buttons-wrapper .contact-button {
  border: none;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  padding: 8px 0;
  position: relative;
}

.contacts-switch-buttons-wrapper .contact-button .fa-plus {
  position: relative;
  left: -5px;
  top: -9px;
  color: #00c569;
  font-size: 12px;
}

.contacts-switch-buttons-wrapper .contact-button.active,
.contacts-switch-buttons-wrapper .contact-button:hover {
  background-color: #fff;
  border-bottom: 2px solid #00c569;
  margin-bottom: -2px;
  z-index: 1;
}

.total-unread-messages-badge {
  position: absolute;
  top: -3px;
  background: red;
  height: 20px;
  width: 29px;
  color: #fff;
  border-radius: 10px;
  left: 5px;
  font-size: 11px;
  line-height: 1;
  padding-top: 4px;
}
.contact-button.active {
  border-radius: 4px 4px 0 0;
}
.buyad-lists-wrapper .contact-item > div {
  background: #fff;
  border: none;
  border-bottom: 2px solid #dddddd;
  padding: 0;
  text-align: center;
  width: 100%;
}
.buyad-expire {
  color: #556080;
  min-height: 40px;
}
.buyad-notice {
  color: #aeaeae;
}
.request-contact-image {
  width: 30px;
  height: 30px;
  float: right;
}
.buyad-info {
  font-size: 15px;
  padding: 5px;
  font-weight: bold;
  color: #777;
  min-height: 58px;
  padding-top: 15px;
}
.buyad-notice.red-text {
  padding-top: 15px;
  padding-bottom: 15px;
}
.buyad-info span {
  color: #556080;
}
.buyad-info span.gray-text {
  color: #777;
}

.buyad-header {
  padding: 8px 5px;
  float: right;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
}
.contact-body .contact-item .my-contact-info-wrapper {
  float: right;
  padding-top: 7px;
  direction: ltr;
  text-align: left;
  width: calc(100% - 45px);
  padding-right: 8px;
}

.buyad-button {
  background: #00c569;
  color: #fff;
  border-radius: 4px;
  padding: 3px;
  max-width: 150px;
  margin: 7px auto 15px;
  transition: 300ms;
  display: block;
  border: none;
  width: 100%;
}

.buyad-button :hover {
  background: #00c569;
  transition: 300ms;
}

.buyad-button.disable {
  background: #dddddd;
  transition: 300ms;
}

.golden {
  border: 2px solid rgb(199, 168, 79);
  border-top: transparent;
}

.golden:first-of-type {
  border-top: 2px solid rgb(199, 168, 79);
}

.golden .buyad-info {
  margin-top: 15px;
}

.golden .buyad-button,
.golden .buyad-button:hover {
  color: #333;
  background: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
}

.hide-reply {
  display: none;
}
.empty-list i {
  color: #777;
  margin-top: 50px;
  font-size: 50px;
  text-align: center;
}
.empty-list p:first-of-type {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.618;
  margin-top: 11px;
}
.empty-list p:last-of-type {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.618;
  margin-top: 11px;
}

.android-wrapper {
  padding: 150px 15px 15px;
  text-align: center;
}
.android-wrapper p {
  font-size: 15px;
  font-weight: bold;
  color: #333;
  line-height: 1.618;
}
.android-wrapper p.section-contents {
  color: #e51c38;
}
.android-wrapper .section-image {
  max-width: 190px;
  margin: 15px auto;
  padding-left: 25px;
}

.android-wrapper a {
  padding: 12px 50px;
  font-size: 16px;
}

.main-background-buyad {
  filter: blur(6px);
  position: absolute;
  top: 18px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */
  z-index: 0;
  width: 100%;
  left: 0;
  text-align: center;
}
.golden-info-text {
  position: relative;
  z-index: 1;
}
.golden-info-text .buyad-info {
  font-size: 18px;
}
@media screen and (max-width: 991px) {
  .main-content {
    padding: 59px 0 0;
  }
  .main-content.is-fix-alert {
    padding: 89px 0 0;
  }
}

@media screen and (max-width: 767px) {
  .send-message-form .button-wrapper button {
    padding: 12px 13px;
    font-size: inherit;
  }

  .send-message-form .message-input input {
    padding: 13px 15px;
  }

  .main-content {
    padding: 59px 0 0;
  }

  .main-content.is-fix-alert {
    padding: 85px 0 0;
  }

  .hidden_element {
    display: none;
  }

  .message-wrapper .message-contact-title span {
    padding-top: 6px;

    width: 170px;

    overflow: hidden;

    height: 40px;

    line-height: 1.618;

    text-overflow: ellipsis;

    white-space: nowrap;
  }

  .reply-info p {
    width: 100%;
  }
}

@media screen and (max-width: 370px) {
  .message-wrapper .message-contact-title span {
    width: 130px;
  }
}

@media screen and (max-width: 330px) {
  .message-wrapper .message-contact-title-img {
    margin: 0 15px;
  }

  .message-wrapper .message-contact-title span {
    font-size: 13px;
  }
}
</style>

<template>
  <div class="contact-body my-contacts">
    <div class="contact-search">
      <div class="contact-search-input-wrapper">
        <input type="text" placeholder="جستجو" v-model="filterBuyAd" />
        <i class="fa fa-search"></i>
      </div>
      <div v-if="$parent.userType" class="contacts-switch-buttons-wrapper">
        <div class="switch-button-item">
          <button class="contact-button active">
            <span class="total-unread-messages-badge">جدید</span>
            <i class="fa fa-list-alt"></i>
            خریداران پیشنهادی
          </button>
        </div>

        <div class="switch-button-item">
          <router-link
            :to="{ name: 'messagesSeller' }"
            tag="button"
            class="contact-button"
          >
            <i class="fa fa-user"></i>
            مخاطبین من
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="isConditionSatisfied" class="android-wrapper">
      <p class="section-title">لیست خریداران محصول خود را اینجا ببینید</p>
      <p class="section-image">
        <img src="../../../../img/hand-phone-icon-6.jpg" />
      </p>
      <p class="section-contents">
        برای دسترسی به این قسمت لطفا اپلیکیشن موبایل باسکول را نصب کنید.
      </p>
      <a class="green-button" href @click.prevent="doDownload()">
        دانلود اپلیکیشن</a
      >
    </div>
    <div class="image-wrapper" v-else-if="buyAds.length === 0 && isLoading">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <!-- <span v-text="alt" class="lds-ring-alt"></span> -->
    </div>
    <div v-else-if="buyAds.length === 0 && !isLoading" class="not-found-item">
      <div class="empty-list">
        <i class="fa fa-list-alt"></i>
        <p>در حال حاضر پیشنهادی برای شما وجود ندارد</p>
        <p class="red-text">
          در صورت وجود خریدار پیشنهادی، به شما اطلاع داده می شود.
        </p>
      </div>
    </div>

    <div v-else class="contact-items buyad-lists-wrapper">
      <div
        v-if="
          isSearchingBuyAds == true &&
          buyAdsFilter.length === 0 &&
          buyAdsGoldenFilter.length == 0
        "
      >
        <div class="empty-list text-center">
          <i class="fa fa-search"></i>
          <p>جستجو نتیجه ای نداشت.</p>
          <p class="red-text">
            در صورت وجود درخواست خرید، به شما اطلاع داده می شود.
          </p>
        </div>
      </div>
      <div v-else>
        <ul>
          <li
            class="contact-item golden"
            v-for="(buyAd, index) in buyAdsGoldenFilter"
            :key="'golden-' + index"
          >
            <div v-if="$parent.currentUser.user_info.active_pakage_type > 0">
              <div class="buyad-header">
                <div class="request-contact-image">
                  <img src="../../../../img/user-defult.png" />
                </div>
                <div class="my-contact-info-wrapper">
                  <span
                    class="contact-name text-rtl"
                    v-text="buyAd.first_name + ' ' + buyAd.last_name"
                  >
                  </span>
                </div>
              </div>
              <div class="buyad-main col-xs-12">
                <div class="row">
                  <p class="buyad-info">
                    خریدار
                    <span
                      class="red-text"
                      v-if="buyAd.requirement_amount < 1000"
                      v-text="buyAd.requirement_amount + 'کیلوگرم'"
                    ></span>
                    <span
                      class="red-text"
                      v-else-if="buyAd.requirement_amount == 1000"
                      >یک تن</span
                    >
                    <span
                      v-else
                      class="red-text"
                      v-text="
                        getNumberWithCommas(buyAd.requirement_amount / 1000) +
                        ' تن '
                      "
                    ></span>
                    <span v-text="buyAd.subcategory_name"></span>
                    <span v-if="buyAd.name" class="gray-text"> از نوع </span>
                    <span v-if="buyAd.name" v-text="buyAd.name"></span>
                    <span v-if="buyAd.name" class="gray-text"> هستم </span>
                  </p>
                  <p class="buyad-notice">
                    درصورت داشتن این محصول به من پیام دهید.
                  </p>
                  <button
                    @click="openChat(buyAd, $event)"
                    class="buyad-button golden-button"
                  >
                    پیام به خریدار
                  </button>
                  <button
                    class="hide-reply buyad-button"
                    :id="'golden-loader-' + buyAd.id"
                    disabled
                  >
                    کمی صبر کنید...
                  </button>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="buyad-header">
                <div class="request-contact-image">
                  <img src="../../../../img/user-defult.png" />
                </div>
                <div class="my-contact-info-wrapper">
                  <span
                    class="contact-name text-rtl"
                    v-text="buyAd.first_name + ' ' + buyAd.last_name"
                  >
                  </span>
                </div>
              </div>
              <div class="buyad-main col-xs-12">
                <div class="main-background-buyad">
                  <p class="buyad-info">
                    این درخواست فقط برای
                    <span class="red-text"> کاربران ویژه </span>
                    قابل نمایش است
                  </p>
                  <p class="buyad-notice">
                    برای مشاهده لطفا حساب کاربری خود را ارتقا دهد
                  </p>
                </div>
                <div class="row golden-info-text">
                  <p>
                    <br />
                  </p>
                  <p class="buyad-info">
                    خریدار

                    <span v-text="buyAd.subcategory_name"></span>
                    <span v-if="buyAd.name" class="gray-text"> از نوع </span>
                    <span v-if="buyAd.name" v-text="buyAd.name"></span>
                    <span v-if="buyAd.name" class="gray-text"> هستم </span>
                  </p>

                  <button
                    @click="openGoldenChatRestrictionModal()"
                    class="buyad-button"
                  >
                    پیام به خریدار
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li
            class="contact-item"
            v-for="(buyAd, index) in buyAdsFilter"
            :key="index"
          >
            <div v-if="!buyAd.expired">
              <div class="buyad-header">
                <div class="request-contact-image">
                  <!-- <img
                  v-if="contact.profile_photo"
                  :src="$parent.str + '/' + contact.profile_photo"
                  :alt="contact.first_name[0]"
                /> -->

                  <!-- <img v-else src="../../../../img/user-defult.png" /> -->
                  <img src="../../../../img/user-defult.png" />
                </div>
                <div class="my-contact-info-wrapper">
                  <span
                    class="contact-name text-rtl"
                    v-text="buyAd.first_name + ' ' + buyAd.last_name"
                  >
                  </span>
                </div>
              </div>
              <div class="buyad-main col-xs-12">
                <div class="row">
                  <p class="buyad-info">
                    خریدار
                    <span
                      class="red-text"
                      v-if="buyAd.requirement_amount < 1000"
                      v-text="buyAd.requirement_amount + ' کیلوگرم '"
                    ></span>
                    <span
                      class="red-text"
                      v-else-if="buyAd.requirement_amount == 1000"
                      >یک تن</span
                    >
                    <span
                      v-else
                      class="red-text"
                      v-text="
                        getNumberWithCommas(buyAd.requirement_amount / 1000) +
                        ' تن '
                      "
                    ></span>
                    <span v-text="buyAd.subcategory_name"></span>
                    <span v-if="buyAd.name" class="gray-text"> از نوع </span>
                    <span v-if="buyAd.name" v-text="buyAd.name"></span>
                    <span v-if="buyAd.name" class="gray-text"> هستم </span>
                  </p>
                  <p class="buyad-expire">
                    <span class="red-text">
                      <i class="fas fa-hourglass-half"></i>
                      <span v-text="buyAd.remaining_time + ' ساعت '"></span>
                    </span>
                    دیگر فرصت پاسخ گویی شما به این خریدار
                  </p>
                  <p class="buyad-notice">
                    درصورت داشتن این محصول به من پیام دهید.
                  </p>
                  <button @click="openChat(buyAd, $event)" class="buyad-button">
                    پیام به خریدار
                  </button>
                  <button
                    class="hide-reply buyad-button"
                    :id="'loader-' + buyAd.id"
                    disabled
                  >
                    کمی صبر کنید...
                  </button>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="buyad-header">
                <div class="request-contact-image">
                  <img src="../../../../img/user-defult.png" />
                </div>
                <div class="my-contact-info-wrapper">
                  <span
                    class="contact-name text-rtl"
                    v-text="buyAd.first_name + ' ' + buyAd.last_name"
                  >
                  </span>
                </div>
              </div>
              <div class="buyad-main col-xs-12">
                <div class="row">
                  <p>
                    <br />
                  </p>
                  <p class="buyad-info">
                    خریدار
                    <span
                      class="red-text"
                      v-if="buyAd.requirement_amount < 1000"
                      v-text="buyAd.requirement_amount + ' کیلوگرم '"
                    ></span>
                    <span
                      class="red-text"
                      v-else-if="buyAd.requirement_amount == 1000"
                      >یک تن</span
                    >
                    <span
                      v-else
                      class="red-text"
                      v-text="
                        getNumberWithCommas(buyAd.requirement_amount / 1000) +
                        ' تن '
                      "
                    ></span>
                    <span v-text="buyAd.subcategory_name"></span>
                    <span v-if="buyAd.name" class="gray-text"> از نوع </span>
                    <span v-if="buyAd.name" v-text="buyAd.name"></span>
                    <span v-if="buyAd.name" class="gray-text"> هستم </span>
                  </p>

                  <p class="buyad-notice red-text">
                    فرصت پاسخ گویی شما به این خریدار به پایان رسیده است
                  </p>
                  <button class="buyad-button disable">پیام به خریدار</button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script >
import { eventBus } from "../../../router/router";

export default {
  data: function () {
    return {
      buyAds: "",
      buyAdsGolden: "",
      buyAdsGoldenFilter: "",
      buyAdsFilter: "",
      isLoading: false,
      isConditionSatisfied: false,
      filterBuyAd: "",
      isSearchingBuyAds: false,
    };
  },
  methods: {
    init() {
      this.getBuyAds();
      this.isOsAndroid();
    },
    getBuyAds() {
      this.isLoading = true;
      axios.post("/get_my_buyAd_suggestions").then((response) => {
        this.buyAds = response.data.buyAds;
        this.buyAdsGolden = response.data.golden_buyAds;
        this.buyAdsGoldenFilter = this.buyAdsGolden;
        this.filterBuyAdBySearch();
        this.isLoading = false;
      });
    },
    activeComponentTooltip() {
      $(".verified-user")
        .popover({ trigger: "manual", html: true, animation: false })
        .on("mouseenter", function () {
          var _this = this;
          $(".popover").on("mouseleave", function () {
            $(this).popover("show");
            $(_this).popover("hide");
          });
        })
        .on("mouseleave", function () {
          var _this = this;
          setTimeout(function () {
            if (!$(".popover:hover").length) {
              $(_this).popover("hide");
            }
          }, 300);
        });
    },
    openChat: function (buyAd, event) {
      var self = this;
      let id = "#loader-0";
      if ($(event.target).hasClass("golden-button")) {
        id = "#golden-loader-" + buyAd.id;
      } else {
        id = "#loader-" + buyAd.id;
      }
      self.hideReplyBtn(event, id);

      axios
        .post("/get_user_permission_for_buyAd_reply", {
          buy_ad_id: buyAd.id,
        })
        .then(function (response) {
          self.showReplyBtn(event, id);

          if (response.data.permission == true) {
            var contact = {
              contact_id: buyAd.buyer_id,
              first_name: buyAd.first_name,
              last_name: buyAd.last_name,
              profile_photo: null,
              user_name: buyAd.user_name,
              buyAd_id: buyAd.id,
            };

            eventBus.$emit("ChatInfo", contact);

            self.registerComponentStatistics(
              "suggestedBuyAdReply",
              "openChat",
              "click on open chatBox"
            );
          } else {
            eventBus.$emit("modal", "buyAdReplyLimit");
            self.registerComponentStatistics(
              "suggestedBuyAdReply",
              "openChat",
              "permission denied"
            );
          }
        });
    },
    openGoldenChatRestrictionModal: function () {
      eventBus.$emit("modal", "goldenBuyAdReplyLimit");

      this.registerComponentStatistics(
        "suggestedBuyAdReply",
        "openChat",
        "permission denied"
      );
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
    hideReplyBtn: function (e, id) {
      return new Promise((resolve, reject) => {
        $(e.target).hide();
        resolve(true);
      }).then(() => {
        $(id).show();
      });
    },
    showReplyBtn: function (e, id) {
      return new Promise((resolve, reject) => {
        $(id).hide();
        resolve(true);
      }).then(() => {
        $(e.target).show();
      });
    },
    isOsIOS: function () {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);
      return ios;
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
    getAndroidVersion: function (ua) {
      ua = (ua || navigator.userAgent).toLowerCase();
      var match = ua.match(/android\s([0-9\.]*)/);
      return match ? match[1] : undefined;
    },
    isOsAndroid: function () {
      let self = this;
      if (this.isDeviceMobile() && !this.isOsIOS()) {
        let androidVersion = this.getAndroidVersion();
        if (parseInt(androidVersion) >= 5) {
          this.isConditionSatisfied = true;
        }
      }
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    filterBuyAdBySearch: function () {
      this.buyAdsFilter = this.buyAds.filter((buyAd) => {
        var text = this.filterBuyAd.split(" ");
        return text.every(function (el) {
          if (
            buyAd.first_name.indexOf(el) > -1 ||
            buyAd.last_name.indexOf(el) > -1 ||
            buyAd.name.indexOf(el) > -1 ||
            buyAd.subcategory_name.indexOf(el) > -1
          ) {
            return true;
          } else return false;
        });
      });
      this.buyAdsGoldenFilter = this.buyAdsGolden.filter((buyAd) => {
        var text = this.filterBuyAd.split(" ");
        return text.every(function (el) {
          if (
            buyAd.first_name.indexOf(el) > -1 ||
            buyAd.last_name.indexOf(el) > -1 ||
            buyAd.name.indexOf(el) > -1 ||
            buyAd.subcategory_name.indexOf(el) > -1
          ) {
            return true;
          } else return false;
        });
      });
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
      window.location.href =
        "https://app-download.s3.ir-thr-at1.arvanstorage.com/buskool.apk";
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
  },
  watch: {
    "$parent.contactList": function () {
      if (this.$parent.contactList) {
        setTimeout(() => {
          this.activeComponentTooltip();
        }, 10);
      }
    },
    filterBuyAd: function () {
      if (this.filterBuyAd != "") {
        this.isSearchingBuyAds = true;
        this.filterBuyAdBySearch();
      } else {
        this.buyAdsFilter = this.buyAds;
        this.buyAdsGoldenFilter = this.buyAdsGolden;
        this.isSearchingBuyAds = false;
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
