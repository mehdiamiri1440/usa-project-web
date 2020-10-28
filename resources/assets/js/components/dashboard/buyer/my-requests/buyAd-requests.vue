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
  z-index: 1;
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

.wrapper-items {
  padding-top: 60px;
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

.lock > p {
  filter: blur(7px);
}

.lock > span.lock-text {
  position: absolute;
  left: 0;
  text-align: right;
  right: 90px;
  font-size: 20px;
  font-weight: bold;
  top: 14px;
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
  .lock > span.lock-text {
    text-align: center;
    right: 0;
    top: 60px;
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
}
</style>
<template>
  <div>
    <div class="requests" v-show="isRequests">
      <section class="main-content col-xs-12 padding-0-15'">
        <div class="title">
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
          <a class="green-button" href @click.prevent="doDownload()">
            دانلود اپلیکیشن</a
          >
        </div>
        <div v-else-if="buyAds.length != 0">
          <ul class="list-unstyled wrapper-items">
            <li
              v-for="(buyAd, index) in buyAds"
              :key="index"
              class="list-group-item col-xs-12"
            >
              <p class="list-title col-sm-3 col-xs-12">
                <span v-text="buyAd.category_name"></span>

                <span>|</span>

                <span v-text="buyAd.subcategory_name"></span>

                <span v-if="buyAd.name" v-text="' | ' + buyAd.name"></span>
              </p>

              <p class="needs col-sm-3 col-xs-12">
                <span class="static-content">میزان نیازمندی :</span>
                <span
                  v-text="getNumberWithCommas(buyAd.requirement_amount)"
                ></span>

                <span class="static-content">کیلوگرم</span>
              </p>
              <p
                class="list-time col-sm-2 col-xs-12"
                v-text="buyAd.register_date"
              ></p>

              <a
                class="col-sm-3 col-xs-12 pull-left"
                href
                @click.prevent="openChat(buyAd, $event)"
              >
                <p class="detail-success hover-effect">
                  <span class="fas fa-comment-alt"></span> پیام به خریدار
                </p>
                <p class="detail-success hide-reply" :id="'loader-' + buyAd.id">
                  کمی صبر کنید...
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div
          class="col-xs-12 wrapper-items"
          v-else-if="buyAds.length === 0 && !load"
        >
          <div class="wrapper_no_pro">
            <div class="content_no_pic">
              <i class="fa fa-list-alt"></i>
            </div>

            <div class="text_no_pic">
              <p>در حال حاظر شما درخواستی ثبت نکرده اید</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 wrapper-items" v-else-if="load">
          <ul class="list-unstyled">
            <li
              v-for="(item, index) in 5"
              :key="index"
              class="list-group-item col-xs-12"
            >
              <p
                class="default-list-title pull-right col-sm-9 hidden-xs margin-10-0"
              >
                <span
                  class="placeholder-content content-full-width h-20"
                ></span>
              </p>

              <p
                class="list-title col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm"
              >
                <span
                  class="placeholder-content content-half-width h-20 margin-auto"
                ></span>
              </p>

              <p class="needs col-sm-4 col-xs-12 hidden-md hidden-lg hidden-sm">
                <span
                  class="placeholder-content content-default-width h-20 margin-auto"
                ></span>
              </p>

              <p
                class="list-time col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm"
              >
                <span
                  class="placeholder-content content-min-width h-20 margin-auto"
                ></span>
              </p>

              <p class="col-sm-3 col-xs-12">
                <span
                  class="placeholder-content default-button-full-with margin-10-auto"
                ></span>
              </p>
            </li>
          </ul>
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
      currentUser: {
        profile: "",
        user_info: "",
      },
      buyAds: [
        {
          id: 84,
          name: "سیب سبز",
          created_at: "2020-10-24 19:09:34",
          updated_at: "2020-10-24 19:09:34",
          category_id: 3,
          requirement_amount: 10000202,
          confirmed: 1,
          myuser_id: 1,
          reply_capacity: 10,
          first_name: "علی",
          last_name: "قاسمی",
          is_golden: false,
          score: 5,
          category_name: "میوه",
          subcategory_name: "سیب",
          register_date: "۳  آبان , ۱۳۹۹",
        },
        {
          id: 84,
          name: "سیب سبز",
          created_at: "2020-10-24 19:09:34",
          updated_at: "2020-10-24 19:09:34",
          category_id: 3,
          requirement_amount: 10000202,
          confirmed: 1,
          myuser_id: 1,
          reply_capacity: 10,
          first_name: "علی",
          last_name: "قاسمی",
          is_golden: false,
          score: 5,
          category_name: "میوه",
          subcategory_name: "سیب",
          register_date: "۳  آبان , ۱۳۹۹",
        },
        {
          id: 84,
          name: "سیب سبز",
          created_at: "2020-10-24 19:09:34",
          updated_at: "2020-10-24 19:09:34",
          category_id: 3,
          requirement_amount: 10000202,
          confirmed: 1,
          myuser_id: 1,
          reply_capacity: 10,
          first_name: "علی",
          last_name: "قاسمی",
          is_golden: false,
          score: 5,
          category_name: "میوه",
          subcategory_name: "سیب",
          register_date: "۳  آبان , ۱۳۹۹",
        },
      ],
      isConditionSatisfied: false,
      load: false,
      items: [],
      isRequests: true,
    };
  },
  methods: {
    init: function () {
      this.load = true;
      var self = this;
      this.filterBuyAdByCategory();
      axios.post("/user/profile_info").then(function (response) {
        self.currentUser = response.data;
      });

      // axios
      //   .post("/get_related_buyAds_list_to_the_seller")
      //   .then(function (response) {
      //     self.allBuyAds = response.data.buyAds;
      //     self.buyAds = self.allBuyAds;

      //     self.load = false;
      //     setTimeout(function () {
      //       $(".list-notice button").tooltip();
      //     }, 100);
      //   });
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
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
          this.isConditionSatisfied = true;
        }
      }
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
