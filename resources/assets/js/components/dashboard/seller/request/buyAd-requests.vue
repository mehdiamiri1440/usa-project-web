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
.golden {
  border: 2px solid transparent;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  -moz-border-image: -moz-linear-gradient(left, #3acfd5 0%, #3a4ed5 100%);
  -webkit-border-image: -webkit-linear-gradient(left, #3acfd5 0%, #3a4ed5 100%);
  border-image: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  border-image-slice: 100%;
  border-image-slice: 1;
  position: relative;
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

@media screen and (max-width: 994px) {
  .fix-request-header-box,
  .title {
    right: 0;
  }
}
@media screen and (max-width: 992px) {
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
    <category-filter v-if="categoryModal" />
    <div class="fix-request-bottom hidden-sm hidden-md hidden-lg shadow-content text-center">
      <div class="col-xs-12 text-right">
        <button
          type="button"
          @click.prevent="openCategoryModal()"
          class="green-button bg-gray w-100 margin-0 hover-effect"
        >
          دسته بندی ها
          <i class="fas fa-filter"></i>
        </button>
      </div>
    </div>
    <div class="requests" v-show="isRequests">
      <!-- <div
        v-if="currentUser.user_info.active_pakage_type == 0"
        class="fix-request-header-box request-update shadow-content text-center text-rtl"
      >
        <span>این درخواست ها کمی قدیمی است</span>
        <button
          class="green-button bg-red hover-effect"
          @click="isRequests = !isRequests"
        >بروز رسانی</button>
      </div>-->
      <!-- :class="{'padding-0-15' : currentUser.user_info.active_pakage_type != 0}" -->
      <section class="main-content col-xs-12 padding-0-15'">
        <div class="title">
          <div class="row">
            <div class="col-xs-12 text-rtl text-right col-sm-8 pull-right">
              <h1>
                درخواست های خرید
                <button
                  v-if="filterCategory"
                  class="green-button remove-filter-button"
                  @click.prevent="filterCategory = ''"
                >
                  <span class="text-red remove-filter-icon">
                    <i class="fa fa-times"></i>
                  </span>
                  <span v-text=" 'دسته بندی : ' + filterCategory.category_name"></span>
                </button>
              </h1>
            </div>
            <div class="col-xs-12 col-sm-4 hidden-xs request-update pull-left text-left">
              <button
                type="button"
                @click.prevent="openCategoryModal()"
                class="green-button bg-gray hover-effect"
              >
                دسته بندی ها
                <i class="fas fa-filter"></i>
              </button>
            </div>
          </div>
        </div>
        <div v-if="buyAds.length != 0">
          <ul class="list-unstyled wrapper-items">
            <li
              v-for="(buyAd,index) in buyAds"
              :key="index"
              class="list-group-item col-xs-12"
              :class="{'golden' : buyAd.is_golden, 'lock' :  buyAd.is_golden && currentUser.user_info.active_pakage_type != 3}"
            >
              <span
                v-if="buyAd.is_golden && currentUser.user_info.active_pakage_type != 3"
                class="lock-text"
                v-text="buyAd.subcategory_name"
              ></span>
              <p class="list-title col-sm-3 col-xs-12">
                <span v-text="buyAd.category_name"></span>

                <span>|</span>

                <span v-text="buyAd.subcategory_name"></span>

                <span
                  v-if="buyAd.name"
                  v-text="' | ' + buyAd.name"
                ></span>
                <!-- <span v-else v-text="' | ' + buyAd.name"></span> -->
              </p>

              <p class="needs col-sm-3 col-xs-12">
                <span class="static-content">میزان نیازمندی :</span>

                <span
                  v-if="buyAd.is_golden && currentUser.user_info.active_pakage_type != 3"
                  v-text="'0000'"
                ></span>
                <span v-else v-text="getNumberWithCommas(buyAd.requirement_amount)"></span>

                <span class="static-content">کیلوگرم</span>
              </p>

              <p
                class="list-time col-sm-2 col-xs-12"
                v-if="buyAd.is_golden && currentUser.user_info.active_pakage_type != 3"
                v-text="'۱۳ تیر , ۱۳۰۴'"
              ></p>
              <p class="list-time col-sm-2 col-xs-12" v-else v-text="buyAd.register_date"></p>

              <p class="list-notice col-sm-1 col-xs-12 pull-right">
                <button
                  v-if="buyAd.is_golden && currentUser.user_info.active_pakage_type != 3"
                  class="btn"
                  type="button"
                >
                  <span>
                    <i class="fas fa-comment-alt"></i>
                    <i class="fas fa-exclamation"></i>
                  </span>
                  <span class="request-count red-text">{{'0+'}}</span>
                </button>
                <button
                  v-else
                  class="btn"
                  type="button"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="ظرفیت باقی مانده برای ارسال پیام به خریدار این محصول"
                >
                  <span>
                    <i class="fas fa-comment-alt"></i>
                    <i class="fas fa-exclamation"></i>
                  </span>
                  <span class="request-count red-text">{{buyAd.reply_capacity + '+'}}</span>
                </button>
              </p>

              <a
                v-if="buyAd.is_golden && currentUser.user_info.active_pakage_type < 3"
                class="col-sm-3 col-xs-12 pull-left"
                href
                @click.prevent="openGoldenChatRestrictionModal()"
              >
                <p class="detail-success hover-effect">
                  <span class="fas fa-comment-alt"></span> پیام به خریدار
                </p>
                <p class="detail-success hide-reply" :id="'loader-' + buyAd.id">کمی صبر کنید...</p>
              </a>
              <a
                v-else
                class="col-sm-3 col-xs-12 pull-left"
                href
                @click.prevent="openChat(buyAd,$event)"
              >
                <p class="detail-success hover-effect">
                  <span class="fas fa-comment-alt"></span> پیام به خریدار
                </p>
                <p class="detail-success hide-reply" :id="'loader-' + buyAd.id">کمی صبر کنید...</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 wrapper-items" v-else-if="buyAds.length === 0 && !load">
          <div class="wrapper_no_pro">
            <div class="content_no_pic">
              <i class="fa fa-list-alt"></i>
            </div>

            <div class="text_no_pic">
              <p>درخواست خرید مرتبط با شما وجود ندارد</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 wrapper-items" v-else-if="load">
          <ul class="list-unstyled">
            <li v-for="(item,index) in 5" :key="index" class="list-group-item col-xs-12">
              <p class="default-list-title pull-right col-sm-9 hidden-xs margin-10-0">
                <span class="placeholder-content content-full-width h-20"></span>
              </p>

              <p class="list-title col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm">
                <span class="placeholder-content content-half-width h-20 margin-auto"></span>
              </p>

              <p class="needs col-sm-4 col-xs-12 hidden-md hidden-lg hidden-sm">
                <span class="placeholder-content content-default-width h-20 margin-auto"></span>
              </p>

              <p class="list-time col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm">
                <span class="placeholder-content content-min-width h-20 margin-auto"></span>
              </p>

              <p class="col-sm-3 col-xs-12">
                <span class="placeholder-content default-button-full-with margin-10-auto"></span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <div class="request-detail" v-show="!isRequests">
      <section class="main-content col-xs-12">
        <div class="detail-contents shadow-content text-center text-rtl">
          <div>
            <p>
              <b>
                درخواست های خرید با
                <span class="red-text">۲ ساعت تاخیر</span> به اطلاع شما می رسد.
                <br />برای اطلاع آنی از درخواست ها و افزایش 5 برابری احتمال فروش محصولاتتان نوع عضویت خود را ارتقا دهید.
              </b>
            </p>
            <router-link
              class="green-button"
              :to="{ name : 'dashboardPricingTableSeller' }"
            >ارتقا عضویت</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
import CategoryFilter from "./category-filter";
export default {
  props: ["storage"],
  components: {
    CategoryFilter
  },
  data: function() {
    return {
      currentUser: {
        profile: "",
        user_info: ""
      },
      buyAds: "",
      allBuyAds: "",
      popUpMsg: "",
      load: false,
      textActive: false,
      items: [
        {
          message: "درخواست های جدید",
          url: "buyAdRequests"
        }
      ],
      isRequests: true,
      categoryModal: false,
      filterCategory: ""
    };
  },
  methods: {
    init: function() {
      this.load = true;
      var self = this;
      this.filterBuyAdByCategory();
      axios.post("/user/profile_info").then(function(response) {
        self.currentUser = response.data;
      });

      axios
        .post("/get_related_buyAds_list_to_the_seller")
        .then(function(response) {
          self.allBuyAds = response.data.buyAds;
          self.buyAds = self.allBuyAds;

          self.load = false;
          setTimeout(function() {
            $(".list-notice button").tooltip();
          }, 100);
        });
    },
    openChat: function(buyAd, event) {
      var self = this;

      let id = "#loader-" + buyAd.id;
      self.hideReplyBtn(event, id);

      axios
        .post("/get_user_permission_for_buyAd_reply", {
          buy_ad_id: buyAd.id
        })
        .then(function(response) {
          self.showReplyBtn(event, id);

          if (response.data.permission == true) {
            var contact = {
              contact_id: buyAd.myuser_id,
              first_name: buyAd.first_name,
              last_name: buyAd.last_name,
              profile_photo: null,
              user_name: buyAd.user_name,
              buyAd_id: buyAd.id
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
    hideReplyBtn: function(e, id) {
      return new Promise((resolve, reject) => {
        $(e.target).hide();
        resolve(true);
      }).then(() => {
        $(id).show();
      });
    },
    showReplyBtn: function(e, id) {
      return new Promise((resolve, reject) => {
        $(id).hide();
        resolve(true);
      }).then(() => {
        $(e.target).show();
      });
    },
    openGoldenChatRestrictionModal: function(){
        eventBus.$emit("modal", "goldenBuyAdReplyLimit");

        self.registerComponentStatistics(
          "buyAdReply",
          "openChat",
          "permission denied"
        );
    },
    getNumberWithCommas: function(number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    openCategoryModal: function() {
      this.categoryModal = true;
      setTimeout(function() {
        $("#fitler-modal").modal("show");
      }, 200);
    },
    filterBuyAdByCategory: function() {
      this.buyAds = "";
      this.isRequests = true;
      if (this.filterCategory.id) {
        let filterBuyAd = this.allBuyAds;
        filterBuyAd = filterBuyAd.filter(
          buyAd => buyAd.category_id == this.filterCategory.id
        );
        this.buyAds = filterBuyAd;
      } else {
        this.buyAds = this.allBuyAds;
      }
      setTimeout(function() {
        $(".list-notice button").tooltip();
      }, 100);
    }
  },
  mounted() {
    this.init();
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/buyAd-requests" });
  },
  watch: {
    filterCategory: function() {
      this.filterBuyAdByCategory();
    }
  }
};
</script>
