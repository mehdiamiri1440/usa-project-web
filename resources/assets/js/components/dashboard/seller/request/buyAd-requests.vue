<style scoped>
.requests .main-content {
  padding-top: 50px;
}

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
  text-align: right;
  padding: 13px 15px;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
}

.fix-request-header-box {
  background: #f5f5f5;
  position: fixed;
  right: 250px;
  left: 0;
  z-index: 1;
  border-radius: 0;
  padding: 10px 0;
}

.fix-request-header-box > p {
  display: inline-block;
}

.fix-request-header-box > button {
  margin: 0 5px 0 0;
  padding: 1px 18px 3px;
  max-width: 100px;
}

#main.little-main .fix-request-header-box {
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

.red-button {
  background: #e41c38;
  color: #fff;
  margin: 15px 0;
  display: inline-block;
  padding: 10px 35px;
  border-radius: 3px;
  text-align: center;
  border: none;
  transition: 300ms;
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
@media screen and (max-width: 992px) {
  .default-list-title {
    padding: 4px 0;
  }

  .fix-request-header-box,
  #main.little-main .fix-request-header-box {
    right: 0;
  }
}

@media screen and (max-width: 767px) {
  .main-content {
    padding: 0;
  }

  .green-button {
    width: 100%;
  }

  .red-button {
    width: 100%;
  }

  .title {
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
      <div
        v-if="currentUser.user_info.active_pakage_type == 0"
        class="fix-request-header-box shadow-content text-center text-rtl"
      >
        <p>این درخواست ها کمی قدیمی است</p>
        <button class="red-button" @click="isRequests = !isRequests">بروز رسانی</button>
      </div>
      <section class="main-content col-xs-12" v-if="buyAds.length != 0">
        <div class="title col-xs-12">
          <div class="row">
            <div class="col-xs-12 col-sm-4 pull-right">
              <h1>درخواست های خرید</h1>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="row">
            <ul class="list-unstyled">
              <li v-for="buyAd in buyAds" class="list-group-item col-xs-12">
                <p class="list-title col-sm-3 col-xs-12">
                  <span v-text="buyAd.category_name"></span>

                  <span>|</span>

                  <span v-text="buyAd.subcategory_name"></span>

                  <span v-if="buyAd.name" v-text="' | ' + buyAd.name"></span>
                </p>

                <p class="needs col-sm-3 col-xs-12">
                  <span class="static-content">میزان نیازمندی :</span>

                  <span v-text="buyAd.requirement_amount"></span>

                  <span class="static-content">کیلوگرم</span>
                </p>

                <p class="list-time col-sm-2 col-xs-12" v-text="buyAd.register_date"></p>
                <p class="list-notice col-sm-1 col-xs-12 pull-right">
                  <button
                    class="btn"
                    type="button"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Tooltip on bottom"
                  >
                    <span>
                      <i class="fas fa-comment-alt"></i>
                      <i class="fas fa-exclamation"></i>
                    </span>
                    <span class="request-count red-text">12+</span>
                  </button>
                </p>
                <a class="col-sm-3 col-xs-12 pull-left" href @click.prevent="openChat(buyAd)">
                  <p class="detail-success">
                    <span class="fas fa-comment-alt"></span> پیام به خریدار
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        class="main-content col-xs-12 loading_images"
        v-else-if="buyAds.length === 0 && !load"
      >
        <div class="wrapper_no_pro">
          <div class="content_no_pic">
            <i class="fa fa-list-alt"></i>
          </div>

          <div class="text_no_pic">
            <p>درخواست خرید مرتبط با شما وجود ندارد</p>
          </div>
        </div>
      </section>

      <section class="main-content col-xs-12" v-if="load">
        <div class="title col-xs-12">
          <div class="row">
            <div class="col-xs-12 col-sm-4 pull-right">
              <h1>درخواست ها</h1>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="row">
            <ul class="list-unstyled">
              <li v-for="item in 5" class="list-group-item col-xs-12">
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

export default {
  props: ["loading_img", "storage", "defultimg"],
  data: function() {
    return {
      currentUser: {
        profile: "",
        user_info: ""
      },
      buyAds: "",
      popUpMsg: "",
      load: false,
      textActive: false,
      items: [
        {
          message: "درخواست های جدید",
          url: "buyAdRequests"
        }
      ],
      isRequests: true
    };
  },
  methods: {
    init: function() {
      this.load = true;
      var self = this;

      axios.post("/user/profile_info").then(function(response) {
        self.currentUser = response.data;
      });

      axios
        .post("/get_related_buyAds_list_to_the_seller")
        .then(function(response) {
          self.buyAds = response.data.buyAds;
          self.load = false;
          setTimeout(function() {
            $(".list-notice button").tooltip();
          }, 100);
        });
    },
    openChat: function(buyAd) {
      this.registerComponentStatistics(
        "buyAdReply",
        "openChat",
        "click on open chatBox"
      );
      var self = this;

      axios
        .post("/get_user_last_confirmed_profile_photo", {
          user_id: buyAd.myuser_id
        })
        .then(function(response) {
          var profile_photo = response.data.profile_photo;

          var contact = {
            contact_id: buyAd.myuser_id,
            first_name: buyAd.first_name,
            last_name: buyAd.last_name,
            profile_photo: profile_photo,
            user_name: buyAd.user_name
          };

          eventBus.$emit("ChatInfo", contact);
        })
        .catch(function(err) {
          //
        });
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    openModal(popUpMsg) {
      eventBus.$emit("submitSuccess", popUpMsg);
      $("#modal-buttons").modal("show");
    }
  },
  mounted() {
    this.init();
    eventBus.$emit("subHeader", this.items);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/buyAd-requests" });
  }
};
</script>
