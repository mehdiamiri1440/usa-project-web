<style scoped>
.main-content {
  direction: rtl;
}

.green-button {
  padding: 10px 15px;
  width: initial;
  border-radius: 8px;
}

.special-button {
  background: #000546;
  position: relative;
}
.badge {
  position: absolute;
  left: -10px;
  background: red;
  top: -10px;
}
.gray-brand-background {
  background: #556080;
}

.blue-brand-background {
  background: #000546;
}

.header-links-wrapper a {
  margin-top: 15px;
  margin-left: 15px;
}
.title {
  text-align: right;
  padding: 15px 0;
  border-bottom: 2px solid #e8e8e8;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
  padding-top: 9px;
}

.boxes {
  margin: 15px auto;
}

.box {
  background: #fff;

  border: 1px solid #e9ecef;

  border-radius: 12px;

  padding: 0;

  overflow: hidden;

  position: relative;

  top: 0;

  transition: 300ms;

  height: 180px;

  margin: 15px 0;
}

.box:hover {
  transition: 300ms;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
  top: -5px;
}

.box:hover .box-icon {
  animation: shake 2.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

.box .box-title {
  font-size: 17px;

  padding: 15px 10px 0;

  line-height: 1.618;
}

.box-main {
  padding: 0 10px;
  margin: 0 auto;
  position: absolute;
  bottom: 60px;
  width: 100%;
}

.content-wrapper {
  font-size: 28px;

  font-weight: bold;
}

.box .box-icon {
  opacity: 0.14;
  font-size: 76px;
  position: absolute;
  left: 10px;
  bottom: 0;
}

.box a {
  width: 100%;
  position: relative;
  border-radius: 0;
  margin: 0;
}

.box-upgrade-link {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
.default-icon {
  position: absolute;
  bottom: 0;
  left: 10px;
}

.header-links-wrapper a.viewers-link {
  margin: 20px auto 5px;
  display: inline-block;
  font-size: 17px;
  font-weight: bold;
  color: #1da1f2;
  transition: 300ms;
}

.header-links-wrapper a.viewers-link:hover {
  transition: 300ms;
  transform: translateX(-5px);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(0, -6px, 0);
  }

  20%,
  80% {
    transform: translate3d(0, 0, 0);
  }
}

@media screen and (max-width: 991px) {
  .list-title,
  .needs,
  .list-time {
    padding: 15px;
  }
}

@media screen and (max-width: 767px) {
  .box-upgrade-link {
    margin-top: 0;
  }

  .green-button {
    padding: 13px 20px;
    font-size: 15px;
    font-weight: bold;
    margin: 9px auto;
  }

  .header-links-wrapper a {
    margin-left: 0;
    width: 100%;
  }

  .title {
    float: right;
  }

  .main-content {
    padding-bottom: 80px;
  }
}
</style>
<template>
  <div>
    <section class="main-content col-xs-12">
      <div class="title col-xs-12">
        <div class="row">
          <div class="col-xs-3 col-sm-4 pull-right">
            <h1>داشبورد</h1>
          </div>
          <div class="col-xs-9 col-sm-4 pull-left text-left">
            <router-link
              :to="{ name: 'dashboardPricingTableSeller' }"
              class="green-button blue-brand-background"
            >
              <i class="fa fa-arrow-up"></i>
              ارتقا عضویت
            </router-link>
          </div>
        </div>
      </div>
      <div class="header-links col-xs-12">
        <div class="header-links-wrapper">
          <div>
            <router-link :to="{ name: 'sellerViewer' }" class="viewers-link">
              <span> خریدارانی که شماره تماس شما را دیده اند </span>
              <i class="fa fa-arrow-left"></i>
            </router-link>
          </div>
          <router-link
            v-for="(link, index) in linkItems"
            :key="index"
            :to="{ name: link.href }"
            class="green-button"
            :class="{ 'special-button': link.badge }"
          >
            <span v-if="link.badge" class="badge"> جدید </span>
            <i :class="link.icon"></i>
            <span v-text="link.text"></span>
          </router-link>
        </div>
      </div>

      <div v-if="statusData" class="boxes col-xs-12">
        <div class="row">
          <div
            v-for="(box, index) in boxes"
            :key="index"
            class="pull-right col-xs-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div class="box">
              <div class="box-title">
                <span v-text="box.title"></span>
              </div>
              <div class="box-main">
                <div class="content-wrapper">
                  <span v-if="box.status" v-text="box.status"></span>
                  <span v-if="box.staticName" v-text="box.staticName"></span>
                </div>
                <i
                  :class="box.icon"
                  class="box-icon"
                  :style="{ color: [box.iconColor] }"
                ></i>
              </div>
              <div v-if="box.button" class="box-upgrade-link">
                <router-link
                  :to="{ name: box.routerName }"
                  class="green-button"
                  :class="{ 'gray-brand-background': index > 0 }"
                >
                  <i v-if="box.linkIcon" :class="box.linkIcon"></i>
                  {{ box.linkName }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="boxes col-xs-12">
        <div class="row">
          <div
            v-for="(items, index) in 6"
            :key="index"
            class="pull-right col-xs-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div class="box">
              <div class="box-title-default">
                <span
                  class="content-full-width placeholder-content margin-15"
                ></span>
                <span
                  class="content-min-width placeholder-content margin-15"
                ></span>
              </div>
              <div class="box-main">
                <div class="content-wrapper">
                  <span class="content-half-width placeholder-content"></span>
                  <!-- <span v-if="box.staticName" v-text="box.staticName"></span> -->
                </div>
                <span class="default-icon pull-left placeholder-content"></span>
              </div>
              <div class="box-upgrade-link">
                <span
                  class="
                    content-full-width
                    placeholder-content
                    default-item-wrapper
                    col-xs-12
                  "
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { eventBus } from "../../../../router/router";

export default {
  data: function () {
    return {
      statusData: "",
      linkItems: [
        {
          href: "registerProductSeller",
          icon: "fa fa-plus",
          text: "افزودن محصول",
          badge: false,
        },
        {
          href: "buyAdRequestsSeller",
          icon: "fa fa-list-alt",
          text: "درخواست های خرید",
          badge: false,
        },
        {
          href: "messagesSeller",
          icon: "fas fa-comment-alt",
          text: "پیام ها",
          badge: false,
        },
        {
          href: "messagesRequestSeller",
          icon: "fas fa-list-ul",
          text: "خریداران پیشنهادی",
          badge: true,
        },
      ],

      boxes: "",
      items: [],
    };
  },
  methods: {
    init: function () {
      eventBus.$emit("subHeader", false);

      var self = this;
      axios
        .post("/get_seller_dashboard_required_data")
        .then(function (response) {
          self.statusData = response.data;

          self.boxes = [
            {
              title: "نوع عضویت فعال شما",
              icon: "fas fa-address-card",
              iconColor: "#19668E",
              staticName: "",
              button: response.data.active_pakage_type < 3 ? true : false,
              routerName: "dashboardPricingTableSeller",
              linkName: "ارتقا عضویت",
              linkIcon: "fa fa-arrow-up",
              status: self.checkPackage(response.data.active_pakage_type),
            },
            {
              title: "تعداد محصولات قابل ثبت",
              icon: "fas fa-list-ol",
              iconColor: "#aa49c8",
              staticName: "",
              button: true,
              routerName: "dashboardProductPricing",
              linkName: "افزایش ظرفیت ثبت محصول",
              linkIcon: "fa fa-plus",
              status:
                response.data.max_allowed_product_register_count == 0
                  ? "صفر"
                  : response.data.max_allowed_product_register_count + " محصول",
            },
            {
              title: "سقف روزانه تعداد پاسخ ها به درخواست های خرید",
              icon: "fas fa-list-alt",
              iconColor: "#D8A679",
              staticName: "",
              button: true,
              routerName: "dashboardBuyAdPricing",
              linkName: "افزایش ظرفیت پاسخ گویی",
              linkIcon: "fa fa-arrow-up",
              status: self.checkRequest(response.data.max_buyAds_reply),
            },
            {
              title: "احراز هویت شده",
              icon: "fas fa-award	",
              iconColor: "#21AD93",
              staticName: "",
              button: response.data.is_verified ? false : true,
              routerName: "profileBasicSellerVeficiation",
              linkName: "احراز هویت کنید",
              linkIcon: "",
              status: response.data.is_verified ? "بله" : "خیر",
            },

            {
              title: "دسترسی به درخواست های خرید طلایی",
              icon: "fas fa-star",
              iconColor: "#FFAC58",
              staticName: "",
              button: response.data.access_to_golden_buyAds ? false : true,
              routerName: "dashboardPricingTableSeller",
              linkName: "دسترسی به درخواست های طلایی",
              linkIcon: "",
              status: response.data.access_to_golden_buyAds ? "بله" : "خیر",
            },

            // {
            //   title: "میزان اعتبار",
            //   icon: "fas fa-star",
            //   iconColor: "#00C5BE",
            //   staticName: "",
            //   button: false,
            //   routerName: "dashboardPricingTableSeller",
            //   linkName: "ارتقا عضویت",
            //   linkIcon: "fa fa-arrow-up",
            //   status: response.data.reputation_score
            //     ? response.data.reputation_score
            //     : "بدون اعتبار",
            // },
            {
              title: "تعداد محصولات ثبت شده",
              icon: "fas fa-list-ol",
              iconColor: "#00C5BE",
              staticName: "",
              button: true,
              routerName: "myProductsSeller",
              linkName: "محصولات من",
              linkIcon: "fas fa-list-ol",
              status:
                response.data.confirmed_products_count == 0
                  ? "صفر"
                  : response.data.confirmed_products_count + " محصول",
            },
            /*					{
								title : 'احتمال پاسخگویی به پیام',
								icon : 'fa fa-chart-line',
								iconColor : '#FF8058',
								staticName : 'درصد',
								upgrade : true,
								status : '20'
							},	*/
          ];
        });
    },
    checkPackage(packageId) {
      var packageName = "";
      switch (packageId) {
        case 0:
          packageName = "عضویت رایگان";
          break;
        case 1:
          packageName = "عضویت پایه";
          break;
        case 2:
          packageName = "اشتراک 6 ماهه";
          break;
        case 3:
          packageName = "عضویت ویژه";
          break;
      }
      return packageName;
    },
    checkRequest(requestNumber) {
      var setRequest = "";

      if (requestNumber >= 2000) {
        setRequest = " نامحدود";
      } else if (requestNumber == 0) {
        setRequest = "بدون درخواست";
      } else {
        setRequest = requestNumber + " پاسخ";
      }
      return setRequest;
    },
  },
  mounted() {
    this.init();
  },
};
</script>
