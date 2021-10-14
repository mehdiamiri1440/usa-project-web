<style scoped>
/* .requests .main-content {
  padding-top: 50px;
} */

.wrapper_no_pro {
  text-align: center;
  font-size: 23px;
  padding: 15px 0;
}

.content_no_pic {
  font-size: 70px;
  margin: 20px auto;
  color: #bdbdbd;
}

.text_no_pic {
  margin: 30px auto;
  color: #bdbdbd;
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
}

.list-group-item {
  border: 1px solid #ddd;
  padding: 11px 0;
}
.list-group-item:nth-last-of-type(2n + 1) {
  background: #fdfdfd !important;
}

.detail-success {
  padding: 8px 0;
  width: 100%;
  background: #00c569;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bold;
}

.main-content > ul {
  border-radius: 3px;
  box-shadow: 0 0 10px #e1e1e1;
  overflow: hidden;
}

.main-content .list-group-item p {
  text-align: center;
  direction: rtl;
}

#main.little-main {
  margin-right: 80px;
}

.message-list {
  padding: 19px;
  text-align: center;
  background: #eff3f6;
  line-height: 1.618;
}

.text-red {
  color: #e41c38;
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

.buyAds-wrapper {
  padding-top: 80px;
  overflow: hidden;
  max-width: 992px;
  margin: 0 auto;
}

.delete-button {
  font-size: 18px;
  text-align: center;
  padding: 15px;
  background: none;
  border: none;
}

.item-wrapper {
  border-radius: 12px;
  border: 1px solid #e9ecef;
  min-height: 150px;
  direction: rtl;
  margin-bottom: 30px;
  text-align: center;
}

table {
  width: 100%;
}

.table-wrapper {
  min-height: 227px;
}

td {
  padding: 15px;
}

tr:nth-child(even) {
  background-color: #f6fbff;
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

.android-wrapper {
  padding: 100px 15px;
  text-align: center;
  background: #fff;
  direction: rtl;
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
  .buyAds-wrapper {
    padding-top: 10px;
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
}
</style>
<template>
  <div>
    <div class="requests" v-show="isRequests">
      <section class="main-content col-xs-12 padding-0-15'">
        <div class="title hidden-xs hidden-sm">
          <div class="row">
            <div class="col-xs-12 text-rtl text-right col-sm-8 pull-right">
              <h1>درخواست های من</h1>
            </div>
          </div>
        </div>
        <div v-if="isConditionSatisfied" class="android-wrapper">
          <p class="section-title">
            لیست درخواست های خود را از این قسمت ببینید
          </p>
          <p class="section-image">
            <img src="../../../../../img/hand-phone-icon-6.jpg" />
          </p>
          <p class="section-contents">
            برای دسترسی به این قسمت لطفا اپلیکیشن موبایل باسکول را نصب کنید.
          </p>
          <!-- <a class="green-button" href @click.prevent="doDownload()">
            دانلود اپلیکیشن</a
          > -->
        </div>
        <!-- <div v-else-if="buyAds.length != 0"> -->
        <div v-if="buyAds.length != 0 && !load" class="buyAds-wrapper">
          <div
            class="col-xs-12 col-md-6 pull-right"
            v-for="(buyAd, index) in buyAds"
            :key="index"
          >
            <article class="item-wrapper bg-white">
              <div class="table-wrapper">
                <table>
                  <tr>
                    <td class="gray-text">دسته بندی</td>
                    <td v-text="buyAd.subcategory_name"></td>
                  </tr>
                  <tr v-if="buyAd.name">
                    <td class="gray-text">نوع محصول</td>
                    <td v-text="buyAd.name"></td>
                  </tr>
                  <tr>
                    <td class="gray-text">میزان نیاز مندی</td>
                    <td
                      v-text="getConvertedNumbers(buyAd.requirement_amount)"
                    ></td>
                  </tr>
                  <tr>
                    <td class="gray-text">زمان ثبت</td>
                    <td>
                      {{ buyAd.created_at | moment("jYYYY/jMM/jDD") }}
                    </td>
                  </tr>
                  <tr>
                    <td class="gray-text">تعداد پاسخ های دریافتی</td>
                    <td v-text="buyAd.reply_capacity"></td>
                  </tr>
                  <!-- <tr>
                    <td>وضعیت</td>
                    <td>بد نیست</td>
                  </tr> -->
                </table>
              </div>
              <button
                @click="deleteBuyAd(buyAd.id)"
                class="red-text delete-button"
              >
                <i class="fa fa-trash"></i>
                حذف این درخواست
              </button>
            </article>
          </div>
        </div>
        <!-- <div
          class="col-xs-12 wrapper-items"
          v-else-if="buyAds.length === 0 && !load"
        > -->
        <div class="buyAds-wrapper" v-else-if="buyAds.length === 0 && !load">
          <div class="wrapper_no_pro">
            <div class="content_no_pic">
              <i class="fa fa-list-alt"></i>
            </div>

            <div class="text_no_pic text-rtl">
              <p>شما درخواست خریدی را ثبت نکرده اید یا در انتظار تایید است.</p>
            </div>

            <router-link
              class="green-button"
              :to="{ name: 'registerRequestBuyer' }"
            >
              ثبت درخواست خرید
            </router-link>
          </div>
        </div>
        <div v-if="buyAds.length === 0 && load" class="buyAds-wrapper">
          <!-- <div v-if="load" class="buyAds-wrapper"> -->
          <div
            class="col-xs-12 col-md-6 pull-right"
            v-for="(buyAd, index) in 6"
            :key="index"
          >
            <article class="item-wrapper padding-bottom-15 bg-white">
              <div class="table-wrapper">
                <table>
                  <tr>
                    <td>
                      <p class="placeholder-content content-half-width"></p>
                    </td>
                    <td>
                      <p class="placeholder-content content-half-width"></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="placeholder-content content-default-width"></p>
                    </td>
                    <td>
                      <p class="placeholder-content content-min-width"></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="placeholder-content content-half-width"></p>
                    </td>
                    <td>
                      <p class="placeholder-content content-default-width"></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="placeholder-content content-default-width"></p>
                    </td>
                    <td>
                      <p class="placeholder-content content-half-width"></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p class="placeholder-content content-half-width"></p>
                    </td>
                    <td>
                      <p class="placeholder-content content-default-width"></p>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="margin-top-10">
                <p
                  class="
                    placeholder-content
                    padding-15-0
                    margin-auto
                    content-half-width
                  "
                ></p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";

export default {
  props: ["storage"],
  data: function () {
    return {
      buyAds: "",
      isConditionSatisfied: false,
      load: false,
      isRequests: true,
    };
  },
  methods: {
    init: function () {
      this.load = true;
      var self = this;
      axios.post("/get_my_buyAds").then(function (response) {
        self.buyAds = response.data.buyAds;
        self.load = false;
      });
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    getConvertedNumbers: function (number) {
      if (number || typeof number === "number") {
        let data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
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
          this.isConditionSatisfied = false;
        }
      }
    },
    deleteBuyAd(id) {
      eventBus.$emit("buyAdId", id);

      eventBus.$emit("modal", "deleteBuyAdModal");

      this.registerComponentStatistics(
        "buyAd",
        "delete-buyAd",
        "click on delete buyAd-btn"
      );
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
  },
  mounted() {
    this.isOsAndroid();
    this.init();
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/buyAd-requests" });
  },
};
</script>
