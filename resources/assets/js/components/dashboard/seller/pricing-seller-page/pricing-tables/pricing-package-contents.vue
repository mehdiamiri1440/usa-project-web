<style scoped>
.item-action .green-button {
  padding: 10px 35px;
  margin: 0 auto 15px;
  font-size: 16px;
  font-weight: bold;
  width: initial;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.item-action .green-button i {
  position: relative;
  top: 3px;
  font-size: 19px;
  line-height: 1;
  right: 4px;
}

.wrapper-background {
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 15px;
  line-height: 1.618;
  margin-bottom: 30px;
  overflow: hidden;
}

.header-title {
  margin-bottom: 9px;
}

.header-title span {
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

.item-wrapper {
  position: relative;
  padding: 0;
  float: left;
  width: 100%;
}

.item-title {
  font-size: 16px;
  font-weight: bold;
}

.item-title > span {
  font-size: 12px;
}

.item-price {
  font-size: 16px;

  font-weight: bold;
}

.item-price .item-currency {
  font-size: 13px;

  font-weight: 400;

  position: relative;
}

.item-content {
  position: relative;
  float: left;
  width: 100%;
}

.item-action {
  text-align: center;
}

.item-action p {
  margin: 5px auto 0;
  font-size: 16px;
  padding: 12px;
  display: inline-block;
}

.item-help-content > span {
  display: block;
  padding: 6px 15px;
}

.users-review-carousel-wrapper {
  margin: 10px auto 50px;
}

.users-review-carousel-wrapper .title-section {
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  margin: 0 auto 30px;
}

.item-content-title {
  float: right;

  font-size: 14px;

  color: #777;

  font-weight: bold;
}

.item-content-amount {
  float: left;
  font-weight: bold;
  min-width: 45px;
  text-align: center;
}

.item-content-list li {
  float: left;
  width: 100%;
  padding: 12px 0;
  position: relative;
  border-bottom: 1px solid #bdc4cc;
}

.item-content-list li:last-of-type {
  border-bottom: none;
}

.wrapper-icon {
  display: inline;
}

.header-description {
  color: #777;
}

.item-header {
  overflow: hidden;
  direction: rtl;
  background: #556080;
  color: #fff;
}

.item-header.pro-version {
  overflow: hidden;
  direction: rtl;
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);

  color: #fff;
}

.wrapper-background {
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 15px;
  line-height: 1.618;
  margin-bottom: 30px;
  overflow: hidden;
}

.header-wrapper {
  text-align: center;
  padding: 15px 115px;
  float: left;
  width: 100%;
}

.header-title {
  margin-bottom: 9px;
}

.header-title span {
  font-size: 20px;
  color: #333;
  font-weight: bold;
}

.item-wrapper {
  position: relative;
  padding: 0;
  float: left;
}

.special-badge {
  position: absolute;
  left: -29px;
  background: #e41c38;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  width: 120px;
  text-align: center;
  padding: 3px;
  transform: rotate(-45deg);
  top: 14px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 992px) {
  .list-title,
  .needs,
  .list-time {
    padding: 15px;
  }
}

@media screen and (max-width: 767px) {
  .header-icon-wrapper {
    float: right;
    width: 50px;
    text-align: center;
  }

  .header-icon-wrapper i {
    font-size: 69px;
    color: #ffbb00;
    position: relative;
    top: 16px;
  }

  .header-wrapper {
    text-align: center;
    padding: 15px;
    float: left;
    width: 100%;
    padding: 0;
  }

  .header-icon-wrapper i::after {
    content: "\F00C";
    font-size: 19px;
    text-align: center;
    width: 100%;
    display: block;
    position: absolute;
    top: 14px;
  }

  .header-description {
    font-size: 13px;
  }

  .header-title {
    margin-bottom: 0;
  }

  .item-date {
    padding: 11px 7px 0 0;
  }

  .item-date span {
    padding: 0 0 0 6px;
    display: inline-block;
  }

  .item-content-list li {
    padding: 9px 0;
  }

  .title {
    text-align: center;
  }

  .item-content-title {
    font-size: 17px;
  }

  .item-help i {
    font-size: 30px;
  }

  .item-content-amount {
    font-size: 20px;
  }

  .item-help-content {
    right: 0;
    top: 45px;
  }
  .mobile-padding-0 {
    padding: 0 !important;
  }
}
</style>
<template>
  <div class="col-xs-12">
    <div v-if="doPaymentLoader" class="main-loader-content">
      <div class="pricing-loader-icon">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="pricing-loader-text text-rtl">در حال انتقال به درگاه پرداخت . . .</p>
      </div>
    </div>

    <div class="row">
      <div
        v-if="justPro == 'false'"
        class="pull-right mobile-padding-0 col-xs-12 col-sm-6 col-lg-6"
      >
        <div class="item-wrapper wrapper-background">
          <div class="item-header text-center">
            <div class="item-title">
              عضویت پایه
              <span>۳ ماهه</span>
            </div>

            <div class="detail-wrapper">
              <div class="item-price text-rtl">
                <span class="item-price-content">689,000</span>
                <span class="item-currency">تومان</span>
              </div>
            </div>
          </div>

          <div class="item-content">
            <ul class="item-content-list col-xs-12">
              <li v-for="(item, index) in priceItemBasic" :key="index">
                <a
                  data-toggle="collapse"
                  :href="'#content-item-' + index"
                  class="item-help"
                  :title="item.helpDescription"
                ></a>

                <p class="item-content-title" v-text="item.title"></p>

                <p class="item-content-amount" v-html="item.contentUnit"></p>
              </li>
            </ul>
          </div>

          <div class="item-action">
            <p v-if="statusData.active_pakage_type == 2" class="text-green">در حال استفاده</p>

            <button
              v-else-if="statusData.active_pakage_type > 2"
              class="green-button btn-disabled text-rtl"
              disabled
            >
              پرداخت
              <i class="fa fa-angle-left"></i>
            </button>

            <a v-else href @click.prevent="doPayment(1)" class="green-button text-rtl">
              پرداخت
              <i class="fa fa-angle-left"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        :class="{'col-sm-offset-3' : justPro == 'true'}"
        class="pull-left mobile-padding-0 col-xs-12 col-sm-6 col-lg-6"
      >
        <div class="item-wrapper wrapper-background">
          <div class="item-header pro-version text-center">
            <span class="special-badge">ویژه</span>
            <div class="item-title">عضویت ویژه سالانه</div>

            <div class="detail-wrapper">
              <div class="item-price text-rtl">
                <span class="item-price-content">689,000</span>
                <span class="item-currency">تومان</span>
              </div>
            </div>
          </div>

          <div class="item-content">
            <ul class="item-content-list col-xs-12">
              <li v-for="(item, index) in priceItemPro" :key="index">
                <a
                  data-toggle="collapse"
                  :href="'#content-item-pro-' + index"
                  class="item-help"
                  :title="item.helpDescription"
                ></a>

                <p class="item-content-title" v-text="item.title"></p>

                <p class="item-content-amount" v-html="item.contentUnit"></p>
              </li>
            </ul>
          </div>

          <div class="item-action">
            <p v-if="statusData.active_pakage_type == 3" class="text-green">در حال استفاده</p>

            <button
              v-else-if="statusData.active_pakage_type > 3"
              class="green-button btn-disabled text-rtl"
              disabled
            >
              پرداخت
              <i class="fa fa-angle-left"></i>
            </button>

            <a v-else href @click.prevent="doPayment(3)" class="green-button text-rtl">
              پرداخت
              <i class="fa fa-angle-left"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="col-xs-12 text-center mobile-padding-0">
        <div class="wrapper-background">
          <div class="header-wrapper">
            <div class="header-title">
              <span>بسته ی ویژه فروش چیست؟</span>
            </div>

            <p class="header-description">
              <strong>
                این بسته شامل مجموعه امکاناتی مانند اعمال پله رایگان، مشاهده بدون تاخیر درخواست های خرید و ... است که
                <span
                  class="green-text"
                >باعث فروش محصولات شما در سریع ترین زمان ممکن می شود</span>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["justPro"],
  data: function() {
    return {
      statusData: "",
      doPaymentLoader: false,

      priceItemBasic: [
        {
          title: "تعداد آگهی ها",
          contentUnit: "3",
          helpDescription:
            " تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. "
        },
        {
          title: "ظرفیت درخواستهای خرید روزانه",
          contentUnit: "10",
          helpDescription:
            "بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد"
        },
        {
          title: "بسته ی ویژه فروش",
          contentUnit:
            '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
          helpDescription:
            "محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود"
        }
      ],
      priceItemPro: [
        {
          title: "تعداد آگهی ها",
          contentUnit: "7",
          helpDescription:
            " تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. "
        },
        {
          title: "ظرفیت درخواستهای خرید روزانه",
          contentUnit: "30",
          helpDescription:
            "بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد"
        },
        {
          title: "بسته ی ویژه فروش",
          contentUnit:
            '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
          helpDescription:
            "محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود"
        }
      ]
    };
  },
  methods: {
    init: function() {
      var self = this;
      axios
        .post("/get_seller_dashboard_required_data")
        .then(function(response) {
          if (response.data.is_valid || response.data.is_valid == false) {
            self.statusData = response.data;
          }
        });
    },
    doPayment: function(packageType) {
      this.doPaymentLoader = true;

      let userId = getUserId();

      this.registerComponentStatistics(
        "payment",
        "type-" + packageType,
        "userId: " + userId
      );

      window.location.href = "/payment/" + packageType;
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
  }
};
</script>
