<style scoped>
ul {
  overflow: hidden;
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
.list-time {
  float: right;
  text-align: center;
  line-height: 1.618;
  font-weight: bold;
  padding-top: 5px;
}

.list-group-item {
  border: 1px solid #ddd;
}

.detail-success {
  padding: 8px 0;
  width: 100%;
  background: #00c569;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
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

.title {
  text-align: right;
  padding: 13px 15px;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
}

.list-placeholder-wrapper {
  border: 1px solid rgb(221, 221, 221);

  position: relative;

  overflow: hidden;

  border-radius: 0 0 3px 3px;

  margin-bottom: 20px;

  border-top: none;

  background: #f6f6f6;
}

.list-placeholder-wrapper ul {
  margin: 0;

  overflow: hidden;

  border: none;
}

.list-placeholder-wrapper li {
  background: none;

  -webkit-filter: blur(8px);

  filter: blur(8px);
}

.list-placeholder::after {
  position: absolute;

  width: 100%;

  height: 100%;

  content: "";

  left: 0;

  top: 0;
}

.list-placeholder-wrapper .link {
  position: absolute;

  width: 100%;

  text-align: center;

  /*top: calc(50% - 82px); if center content */
  
  top: 45px;


  padding: 15px;
}

.list-placeholder-wrapper .link-wrapper-content {
  max-width: 500px;

  background: white;

  padding: 15px;

  border-radius: 4px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  margin: 0 auto;
}

.list-placeholder-wrapper .link p {
  font-size: 19px;

  font-weight: bold;

  color: #333;

  margin-bottom: 4px;

  line-height: 1.618;
}

.list-placeholder-wrapper .link a {
  font-size: 14px;

  font-weight: bold;

  margin-top: 4px;
}

@media screen and (max-width: 992px) {
  .list-title,
  .needs,
  .list-time {
    padding: 15px;
  }

  .default-list-title {
        padding: 4px 0;

  }

  .detail-success{
    margin-top: 9px;
  }

}

@media screen and (max-width: 767px) {
  .main-content {
    padding: 0;
  }
  .green-button {
    width: 100%;
  }

  .title {
    text-align: center;
  }

  .detail-success{
    max-width: 300px;
    margin: 0 auto;
  }

   .default-button-full-with {
    max-width: 300px;
  }
}
</style>
<template>
  <div>
    <section class="main-content col-xs-12" v-if="buyAds.length != 0">
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
            <li v-for="buyAd in buyAds" class="list-group-item col-xs-12">
              <p class="list-title col-sm-3 col-xs-12">
                <span v-text="buyAd.category_name"></span>

                <span>|</span>

                <span v-text="buyAd.subcategory_name"></span>

                <span v-if="buyAd.name" v-text="' | ' + buyAd.name"></span>
              </p>

              <p class="needs col-sm-4 col-xs-12">
                <span class="static-content">میزان نیازمندی :</span>

                <span v-text="buyAd.requirement_amount"></span>

                <span class="static-content">کیلوگرم</span>
              </p>

              <p class="list-time col-sm-2 col-xs-12" v-text="buyAd.register_date"></p>

              <a class="col-sm-3 col-xs-12" href @click.prevent="openChat(buyAd)">
                <p class="detail-success">
                  <span class="fas fa-comment-alt"></span> پیام به خریدار
                </p>
              </a>
            </li>
          </ul>
          <div class="list-placeholder-wrapper" v-if="buyAds.length <= 5">
            <ul class="list-placeholder">
              <li v-for="item in 5" class="list-group-item col-xs-12">
                <p class="list-title col-sm-3 col-xs-12">
                  <span>میوه</span>
                  <span>|</span>
                  <span>خرما</span>
                  <span>| زاهدی</span>
                </p>

                <p class="needs col-sm-4 col-xs-12">
                  <span class="static-content">میزان نیازمندی :</span>
                  <span>1000</span>
                  <span class="static-content">کیلوگرم</span>
                </p>

                <p class="list-time col-sm-2 col-xs-12">۱۲ آبان , ۱۳۹۷</p>

                <a href class="col-sm-3 col-xs-12">
                  <p class="detail-success">
                    <span class="fas fa-comment-alt"></span> پیام به اینکوباک
                  </p>
                </a>
              </li>
            </ul>

            <div class="link">
              <div class="link-wrapper-content">
                <p>
                  سقف تعداد درخواست های خریدی که به شما نمایش داده میشود
                  <span class="text-red">5</span>
                  است
                </p>
                <router-link
                  class="green-button"
                  :to="{ name : 'dashboardPricingTableSeller' }"
                >مشاهده تعرفه ها</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="main-content col-xs-12 loading_images" v-else-if="buyAds.length === 0 && !load">
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

              <p class="list-title col-sm-3 col-xs-12 hidden-md hidden-lg hidden-sm">
                <span class="placeholder-content content-half-width h-20 margin-auto"></span>
              </p>

              <p class="needs col-sm-4 col-xs-12 hidden-md hidden-lg hidden-sm">
                <span class="placeholder-content content-default-width h-20 margin-auto"></span>

              </p>

              <p class="list-time col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm" >
                <span class="placeholder-content content-min-width h-20 margin-auto"></span>

              </p>

              <p class="col-sm-3 col-xs-12" >
                <span class="placeholder-content default-button-full-with margin-10-auto"></span>

              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>

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
      ]
    };
  },
  methods: {
    init: function() {
      this.load = true;
      var self = this;

      axios
        .post("/get_related_buyAds_list_to_the_seller")
        .then(function(response) {
          self.buyAds = response.data.buyAds;
          self.load = false;
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

          eventBus.$emit("ChatInfo",contact);
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
