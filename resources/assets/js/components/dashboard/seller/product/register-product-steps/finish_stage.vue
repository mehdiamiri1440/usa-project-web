<style  scoped>
.static-item a {
  color: #1da1f2;
}
.static-item a:hover {
  color: #337ab7;
}

.user-information-content {
  display: block;
  float: right;
  width: 100%;
  background: none;
  border: none;
  padding-bottom: 3px;
}
.user-image {
  width: 25px;
  height: 25px;
  float: right;
  margin-left: 10px;
}
.user-content {
  display: block;
  max-width: 170px;
  overflow: hidden;
  font-size: 13px;
  font-weight: 400;
  color: #adadad;
  height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
}

.user-content i {
  margin-left: 1px;
  position: relative;
  top: 3px;
  font-size: 15px;
}

.list-title,
.needs,
.list-time,
.list-notice {
  float: right;
  text-align: center;
  line-height: 1.618;
  font-weight: bold;
  padding: 5px;
  color: #7e7e7e;
}

.right-side {
  text-align: right !important;
}

.buyAd-list-item {
  padding: 10px 15px;
  border-radius: 12px;
  margin-bottom: 15px;
  border: 1px solid #e9ecef;
}

.buyAd-list-item:nth-last-of-type(2n + 1) {
  background: #fdfdfd !important;
}

.buyAd-list-item:last-of-type {
  border: none;
}
.detail-success {
  padding: 8px 0;
  width: 100%;
  background: #00c569;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  font-weight: bold;
  border: none;
}

.buyAd-buttons-wrapper {
  display: flex;
  padding: 0;
  margin-top: 7px;
}

.buyAd-buttons-wrapper button.phone-button {
  margin-left: 15px;
}
.main-content > ul {
  border-radius: 3px;
  box-shadow: 0 0 10px #e1e1e1;
  overflow: hidden;
}
/* 
.main-content .buyAd-list-item p {
  text-align: center;
  direction: rtl;
} */

#main.little-main {
  margin-right: 80px;
}

.message-list {
  padding: 19px;
  text-align: center;
  background: #eff3f6;
  line-height: 1.618;
}

.request-detail .green-button {
  font-size: 16px;
  padding: 8px 30px;
}

.title {
  background: #f6f6f6;
  position: fixed;
  right: 250px;
  left: 0;
  z-index: 1;
  border-radius: 0;
  padding: 13px 15px;
}

.placeholder-title h1,
.title h1 {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.9;
}
.fix-request-header-box {
  background: #eff3f6;
  position: fixed;
  right: 250px;
  left: 0;
  z-index: 2;
  border-radius: 0;
  padding: 10px 0;
}

.fix-request-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  background: #fff;
  border-radius: 0;
  padding: 10px 0;
}
.request-update button {
  margin: 0;
  padding: 3px 14px;
  margin-right: 6px;
}

#main.little-main .fix-request-header-box,
#main.little-main .title {
  right: 80px;
}

.detail-contents {
  margin: 15px auto;
}
.detail-contents > div {
  background: #fff;
  padding: 15px;
  margin-bottom: 15px;
  line-height: 25px;
  font-size: 30px;
}
.list-notice {
  text-align: right;
  height: 32px;
}
.list-notice button {
  background: none;

  border: none;

  color: #777;

  padding: 0;

  position: relative;

  top: -5px;
}
.list-notice button > span:first-of-type {
  position: relative;

  font-size: 26px;
}
.list-notice button > span.request-count {
  font-size: 18px;

  position: relative;

  top: -5px;
}
.list-notice button > span > i:last-of-type {
  position: absolute;

  left: 17px;

  color: #fff;

  font-size: 15px;

  top: 7px;
}

.hide-reply {
  display: none;
}

.remove-filter-button {
  background: #fff;
  border-radius: 50px;
  border: 1px solid #e41c39;
  color: #777;
  margin: 0;
  padding: 2px 15px;
  margin-right: 10px;
}
.remove-filter-icon {
  position: relative;
  top: 2px;
  right: -6px;
}

.buyad-button {
  width: 100%;
}
.buyad-button.single-send-message-button {
  margin-top: 7px;
}

button.disable {
  background: #e0e0e0 !important;
}

.buyad-button :hover {
  /* background: #00c569; */
  transition: 300ms;
}
.golden {
  border: 2px solid #c5a75b;
  position: relative;
  padding-right: 30px;
}

.golden::after {
  background: linear-gradient(
    44deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  width: 20px;
  height: 100%;
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 10px 10px 0;
}
.golden .detail-success {
  background: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  color: #333;
}

.lock .right-side p.list-title {
  filter: blur(7px);
}

.lock span.lock-text {
  position: absolute;
  left: 0;
  text-align: right;
  right: 30px;
  font-size: 14px;
  font-weight: bold;
  color: #7e7e7e;
  top: 40px;
}
.text-input-wrapper > p {
  font-size: 20px;
}

.green-button {
  margin-top: 30px;
}

.form-contents {
  float: right;
  width: 100%;
  padding: 40px 0;
  text-align: center;
  line-height: 1.618;
}

.spinner-wrapper {
  margin-top: 120px;
}

.spinner-border {
  width: 6.5rem;
  height: 6.5rem;
  border-width: 0.5rem;
  color: #00c569;
}

.static-item {
  text-align: center;
  padding: 40px 5px;
}

li .buyad-button.send-message-button {
  background: none;
  border: 1px solid #404b55;
  color: #404b55;
  border-radius: 8px;
  transition: 300ms;
}

li .buyad-button.send-message-button:hover {
  background: #404b55;
  color: #fff;
  transition: 300ms;
}

.static-item {
  border: none;
  background: #fff;
}

.phone-number-wrapper {
  padding: 15px 0;
}

@media screen and (max-width: 991px) {
  .fix-request-header-box,
  .title {
    right: 0;
  }
  .default-list-title {
    padding: 4px 15px;
  }
}
@media screen and (max-width: 767px) {
  .static-item {
    text-align: center;
    padding: 45px 5px 80px;
  }

  .lock span.lock-text {
    text-align: center;
    right: 0;
    font-size: 16px;
    top: 55px;
  }
  .golden {
    padding: 25px 0;
  }
  .golden::after {
    display: none;
  }
  .main-content,
  .wrapper-items {
    padding: 0;
  }
  .requests .main-content {
    padding: 0 0 100px !important;
  }
  .title {
    position: relative;
  }
  .title h1 {
    text-align: center;
  }

  .detail-success {
    max-width: 300px;
    margin: 0 auto;
  }

  .default-button-full-with {
    max-width: 300px;
  }

  .list-notice button > span.request-count {
    font-size: 15px;
    top: -5px;
  }
  .list-notice button > span > i:last-of-type {
    left: 16px;

    font-size: 12px;
    top: 7px;
  }
  .list-notice button > span:first-of-type {
    font-size: 23px;
  }
  .list-notice button > span.request-count {
    font-size: 15px;
  }
  .right-side {
    text-align: center !important;
    width: 100%;
  }
  .main-content .buyAd-list-item p {
    margin-bottom: 15px;
    width: 100%;
    font-size: 16px;
  }
  .main-content .buyAd-list-item p.detail-success {
    padding: 11px;
  }

  .buyAd-list-item {
    padding: 20px 10px;
  }
}
</style>
<template>
  <ul
    class="list-unstyled wrapper-items"
    v-if="$parent.buyAds.length != 0 && !$parent.load"
  >
    <li
      v-for="(buyAd, index) in $parent.buyAds"
      :key="index"
      class="buyAd-list-item col-xs-12"
      :class="{
        golden: buyAd.is_golden,
        lock:
          buyAd.is_golden &&
          $parent.currentUser.user_info.active_pakage_type == 0,
      }"
    >
      <span
        v-if="
          buyAd.is_golden &&
          $parent.currentUser.user_info.active_pakage_type == 0
        "
        class="lock-text"
      >
        <span> خریدار </span>
        <span class="brand-text" v-text="buyAd.subcategory_name"></span>
        <span v-if="buyAd.name"> از نوع </span>
        <span v-if="buyAd.name">
          <span class="brand-text" v-if="buyAd.name" v-text="buyAd.name"></span>
        </span>

        <span> هستم </span>
      </span>
      <div class="right-side pull-right">
        <div class="user-information-wrapper">
          <div class="user-information-content">
            <div class="user-content">
              <i class="fa fa-user-circle"></i>
              <span
                class="user-name-link"
                v-text="buyAd.first_name + ' ' + buyAd.last_name"
              >
              </span>
            </div>
          </div>
        </div>
        <p class="list-title">
          <span> خریدار </span>
          <span
            class="red-text"
            v-if="
              buyAd.is_golden &&
              $parent.currentUser.user_info.active_pakage_type == 0
            "
          ></span>
          <span
            class="red-text"
            v-else
            v-text="$parent.getConvertedNumbers(buyAd.requirement_amount)"
          ></span>

          <span
            class="red-text"
            v-if="
              buyAd.is_golden &&
              $parent.currentUser.user_info.active_pakage_type == 0
            "
            v-text="'.از پکیج ویژه استفاده کنید'"
          ></span>
          <span
            v-else
            class="brand-text"
            v-text="buyAd.subcategory_name"
          ></span>
          <span v-if="buyAd.name"> از نوع </span>
          <span
            class="red-text"
            v-if="
              buyAd.is_golden &&
              $parent.currentUser.user_info.active_pakage_type == 0
            "
          ></span>
          <span v-else>
            <span
              class="brand-text"
              v-if="buyAd.name"
              v-text="buyAd.name"
            ></span>
          </span>

          <span> هستم </span>
        </p>
      </div>

      <div v-if="buyAd.has_phone" class="col-sm-5 col-xs-12 pull-left">
        <div class="row">
          <div class="buyAd-buttons-wrapper">
            <button
              class="detail-success hover-effect phone-button"
              :id="'loader-phone-' + buyAd.id"
              v-if="
                buyAd.is_golden &&
                $parent.currentUser.user_info.active_pakage_type == 0
              "
              @click.prevent="openGoldenChatRestrictionModal()"
            >
              <span>
                <span class="fas fa-phone-square-alt"></span>
                اطلاعات تماس
              </span>
              <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
            </button>
            <button
              v-else
              class="detail-success hover-effect phone-button"
              :id="'loader-phone-' + buyAd.id"
              @click.prevent="activePhoneCall(buyAd.myuser_id, buyAd.id)"
            >
              <span>
                <span class="fas fa-phone-square-alt"></span>
                اطلاعات تماس
              </span>
              <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
            </button>
            <button
              v-if="
                buyAd.is_golden &&
                $parent.currentUser.user_info.active_pakage_type == 0
              "
              class="detail-success hover-effect send-message-button"
              :id="'loader-chat-' + buyAd.id"
              @click.prevent="openGoldenChatRestrictionModal()"
            >
              <span>
                <span class="fas fa-comment-alt"></span>
                چت با خریدار
              </span>
              <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
            </button>

            <button
              v-else
              @click="openChat(buyAd)"
              class="buyad-button hover-effect send-message-button"
              :id="'loader-chat-' + buyAd.id"
            >
              <span>
                <span class="fas fa-comment-alt"></span>
                چت با خریدار
              </span>
              <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
            </button>
          </div>
        </div>
        <div class="row">
          <div
            :id="buyAd.id + '-phone-number-wrapper'"
            class="phone-number-wrapper collapse"
          >
            <a class="phone-number">
              <p>
                <i class="fa fa-phone-square-alt"></i>
                <span class="phone"></span>
              </p>
              <p>شماره تماس</p>
            </a>
            <div class="warning-wrapper">
              <p class="warning-title">
                <i class="fa fa-exclamation-circle"></i>

                توصیه باسکول
              </p>
              <p class="warning-text">
                توصیه باسکول همواره به انجام معاملات حضوری است.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="col-sm-5 col-xs-12 pull-left">
        <button
          v-if="
            buyAd.is_golden &&
            $parent.currentUser.user_info.active_pakage_type == 0
          "
          class="
            buyad-button
            single-send-message-button
            detail-success
            hover-effect
          "
          :id="'loader-chat' + buyAd.id"
          @click.prevent="openGoldenChatRestrictionModal()"
        >
          <span>
            <span class="fas fa-comment-alt"></span>
            چت با خریدار
          </span>
          <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
        </button>
        <button
          v-else
          @click="openChat(buyAd)"
          class="buyad-button single-send-message-button detail-success"
          :id="'loader-chat-' + buyAd.id"
        >
          <span>
            <span class="fas fa-comment-alt"></span>
            چت با خریدار
          </span>
          <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
        </button>
      </div>
    </li>
    <li class="col-xs-12 static-item">
      <router-link :to="{ name: 'buyAdRequestsSeller' }">
        سایر درخواست های خرید (مرتبط و غیر مرتبط)
        <i class="fa fa-arrow-left"></i>
      </router-link>
    </li>
  </ul>

  <div
    v-else-if="$parent.buyAds.length == 0 && !$parent.load"
    class="form-contents"
  >
    <div class="col-xs-12">
      <div class="text-input-wrapper">
        <p class="red-text large-text">چه خریدارنی به دنبال محصول شما هستند؟</p>
        <router-link class="green-button" :to="{ name: 'buyAdRequestsSeller' }">
          <span class="bold-text">مشاهده درخواست های خرید</span>
        </router-link>
      </div>
    </div>
  </div>

  <div v-else class="text-center spinner-wrapper">
    <div class="spinner-border">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../../../router/router";
import swal from "../../../../../sweetalert.min.js";

export default {
  methods: {
    openGoldenChatRestrictionModal: function () {
      eventBus.$emit("modal", "goldenBuyAdReplyLimit");

      this.registerComponentStatistics(
        "buyAdReply",
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
    openChat: function (buyAd) {
      var self = this;

      let id = "#loader-chat-" + buyAd.id;
      self.hideReplyBtn(id);

      axios
        .post("/get_user_permission_for_buyAd_reply", {
          buy_ad_id: buyAd.id,
        })
        .then(function (response) {
          self.showReplyBtn(id);

          if (response.data.permission == true) {
            var contact = {
              contact_id: buyAd.myuser_id,
              first_name: buyAd.first_name,
              last_name: buyAd.last_name,
              profile_photo: null,
              user_name: buyAd.user_name,
              buyAd_id: buyAd.id,
            };

            eventBus.$emit("ChatInfo", contact);

            self.registerComponentStatistics(
              "buyAdReply",
              "openChat",
              "click on open chatBox"
            );
          } else {
            eventBus.$emit("modal", "buyAdReplyLimit");
            self.registerComponentStatistics(
              "buyAdReply",
              "openChat",
              "permission denied"
            );
          }
        });
    },
    activePhoneCall: function (buyAdUserId, buyAdId) {
      let id = "#loader-phone-" + buyAdId;

      $(id).prop("disabled", true);
      $(id).addClass("disable");

      this.hideReplyBtn(id);

      axios
        .post("/get_buyer_phone_number", {
          b_id: buyAdUserId,
          ba_id: buyAdId,
          item: "BUYAD",
        })
        .then((response) => {
          this.$nextTick(() => {
            $("#" + buyAdId + "-phone-number-wrapper .phone").text(
              response.data.phone
            );
            $("#" + buyAdId + "-phone-number-wrapper a.phone-number").attr(
              "href",
              "tel:" + response.data.phone
            );
            $("#" + buyAdId + "-phone-number-wrapper").collapse("show");
            this.showReplyBtn(id);
          });
        })
        .catch((error) => {
          this.showReplyBtn(id);
          $(id).prop("disabled", false);
          $(id).removeClass("disable");
          if (error.response.status == 423) {
            swal({
              title: "ارتقا عضویت",
              text: error.response.data.msg,
              icon: "warning",
              className: "custom-swal-with-cancel",
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
                  this.$router.push({ name: "dashboardPricingTableSeller" });
                  break;
              }
            });
          } else {
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
          }
        });
    },
    hideReplyBtn: function (id) {
      let itemFirst = id + " span:first-child";
      let itemLast = id + " span:last-child";
      $(itemFirst).hide();
      $(itemLast).show();
    },
    showReplyBtn: function (id) {
      let itemFirst = id + " span:first-child";
      let itemLast = id + " span:last-child";
      $(itemLast).hide();
      $(itemFirst).show();
    },
  },
};
</script>
