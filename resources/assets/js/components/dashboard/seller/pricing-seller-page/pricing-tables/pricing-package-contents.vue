<style scoped>
.bg-gradient {
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);
}
.item-action .green-button {
  padding: 10px 35px;
  margin: 0 auto 30px;
  font-size: 16px;
  font-weight: bold;
  width: initial;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
}
.item-action .green-button.bg-gray {
  background-color: #556080 !important;
}

.item-action .green-button i {
  position: relative;
  top: 3px;
  font-size: 19px;
  line-height: 1;
  right: 4px;
}

.item-wrapper {
  position: relative;
  padding: 0;
  float: left;
  width: 100%;
  border: 1px solid #fff;
}

.item-wrapper.pro-version {
  border: 1px solid #21ad93;
}

.item-title {
  margin-top: 10px;
}

.item-title > h2 {
  font-size: 25px;
  color: #556080;
}

.item-wrapper.pro-version .item-title > h2 {
  color: #21ad93;
}

.item-price {
  font-size: 18px;
  font-weight: 500;
  color: #808c9b;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 5px;
}

.item-price span.price {
  color: #1da1f2;
  font-size: 24px;
}

.small-unit {
  font-size: 16px;
  font-weight: normal;
}

.detail-wrapper {
  float: right;
  width: 100%;
  text-align: center;
  margin: 15px auto 12px;
}

.detail-wrapper > p {
  font-size: 20px;
  font-weight: 500;
  color: #1da1f2;
}
.item-price .item-currency {
  font-size: 13px;

  font-weight: 400;

  position: relative;
}

.item-price .item-date {
  color: #777;
  font-weight: 400;
  font-size: 14px;
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
  margin: 0 auto 15px;
  font-size: 16px;
  padding: 12px;
  display: inline-block;
  height: 45px;
  background: #f6f6f6;
  border-radius: 4px;
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
  font-size: 16px;
  color: #777;
  font-weight: 500;
  padding-top: 5px;
}

.item-content-title.disable-text {
  color: #bebebe;
}

.item-content-amount {
  float: left;
  font-weight: bold;
  min-width: 45px;
  text-align: center;
  font-size: 20px;
}

.item-content-amount > i {
  font-size: 20px;
}

.item-content-list {
  float: right;
  width: 100%;
}

.item-content-list li {
  float: left;
  width: 100%;
  padding: 12px 15px;
  position: relative;
}
.item-content-list li:nth-last-of-type(2n + 1) {
  background: #fafafa;
}

.item-content-list li.free-item {
  direction: rtl;
  text-align: center;
  padding: 4px 0 3px;
  background-color: transparent;
}

.pro-version .item-content-list li.free-item {
  background: #eefef6;
}

.item-content-list li.free-item > p {
  font-size: 16px;
  font-weight: 500;
  color: #808c9b;
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
}

.item-title > span {
  font-size: 13px;
}

.wrapper-background {
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 15px;
  line-height: 1.618;
  margin-bottom: 30px;
  overflow: hidden;
}

.header-wrapper {
  text-align: center;
  padding: 15px;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
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
  left: -46px;
  background: #e41c38;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  width: 120px;
  text-align: center;
  padding: 11px 3px 3px;
  -webkit-transform: rotate(-41deg);
  transform: rotate(-41deg);
  top: -4px;
}

.offer-price {
  position: absolute;
  text-align: center;
  top: -23px;
  left: 15px;
  right: 15px;
}

.offer-notice > span {
  background: #e41c38;
  color: #fff;
  border-radius: 4px;
  padding: 0 15px;
}

.offer-item-price-content {
  font-weight: 400;
  -webkit-text-decoration: line-through;
  text-decoration: line-through;
  color: #777;
}

.item-content-wrapper {
  direction: rtl;
  max-width: 680px;
  margin: 0 auto;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #f2f2f2;
  overflow: hidden;
}

.item-content-wrapper > div {
  float: right;
}

.main-text-wrapper {
  color: #38485f;
  font-size: 19px;
  font-weight: bold;
  direction: rtl;
  margin: 5px auto 15px;
  float: right;
  width: 100%;
}

.icon-wrapper {
  float: right;
  font-size: 45px;
  height: 45px;
  width: 45px;
  line-height: 1;
}

.content-wrapper {
  float: right;
  font-size: 16px;
  color: #707070;
  padding-top: 11px;
  padding-right: 15px;
  width: calc(100% - 45px);
}

.content-wrapper > strong {
  color: #313a43;
}

.important-text {
  font-weight: bold;
}
@media screen and (max-width: 991px) {
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
  .item-content-wrapper {
    padding: 15px 0;
  }
  .main-text-wrapper {
    margin: 15px auto;
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

  .content-wrapper {
    font-size: 15px;

    padding-top: 0;
    padding-right: 5px;
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
  .item-content-list li {
    padding: 12px 7px !important;
  }
  .mobile-padding-5 {
    padding: 0 5px !important;
  }
  .mobile-padding-7 {
    padding: 15px 7px !important;
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
        <p class="pricing-loader-text text-rtl">
          در حال انتقال به درگاه پرداخت . . .
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 text-center mobile-padding-5">
        <div class="wrapper-background mobile-padding-7">
          <div class="header-wrapper">
            <div class="header-title">
              <span>آیا میدانستید؟</span>
            </div>

            <div class="item-content-wrapper">
              <div>
                <div class="icon-wrapper">
                  <i class="fa fa-frown-open red-text"></i>
                </div>
                <div class="content-wrapper">
                  متوسط هزینه ارتباط با یک خریدار در
                  <strong> فضای سنتی </strong>
                  <span class="red-text important-text">
                    بيش از چند میلیون تومان در چند روز
                  </span>
                  است.
                </div>
              </div>
            </div>
            <div class="item-content-wrapper">
              <div>
                <div class="icon-wrapper">
                  <i class="fa fa-grin green-text"></i>
                </div>
                <div class="content-wrapper">
                  متوسط هزینه ارتباط با یک خریدار در
                  <strong> بازار باسکول </strong>
                  <span class="green-text important-text">
                    کمتر از ۲ هزار تومان در چند دقیقه
                  </span>
                  است.
                </div>
              </div>
            </div>
          </div>
          <p class="main-text-wrapper">
            حرفه ای ها فرصت ها را از دست نمی دهند!
          </p>
        </div>
      </div>

      <div
        :class="{ 'col-sm-offset-3': justPro == 'true' }"
        class="pull-left mobile-padding-5 col-xs-12 col-sm-6 col-lg-6"
      >
        <div class="item-wrapper pro-version wrapper-background">
          <div class="item-header text-center">
            <span class="special-badge">ویژه</span>
            <div class="item-title">
              <h2>عضویت ویژه</h2>
              <p class="item-price">
                ماهانه
                <span class="price">180,000</span>
                <span class="small-unit"> تومان</span>
              </p>
            </div>
          </div>

          <div class="item-content">
            <ul class="item-content-list">
              <li class="free-item">
                <p>
                  <i class="fa fa-plus-circle"></i>
                  یک ماه رایگان
                </p>
              </li>
              <li v-for="(item, index) in priceItemPro" :key="index">
                <a
                  data-toggle="collapse"
                  :href="'#content-item-pro-' + index"
                  class="item-help"
                  :title="item.helpDescription"
                ></a>

                <p class="item-content-title" v-html="item.title"></p>

                <p class="item-content-amount">
                  <i
                    v-if="!item.contentUnit"
                    class="text-green fa fa-times-circle"
                    style="color: #e41c38"
                  ></i>

                  <i
                    v-else-if="
                      item.contentUnit == true && item.contentUnit != ''
                    "
                    class="text-green fa fa-check-circle"
                    style="color: #00c569"
                  ></i>
                  <span v-else v-text="item.contentUnit"></span>
                </p>
              </li>
            </ul>
          </div>

          <div class="detail-wrapper">
            <p>امکان خرید به صورت سالانه</p>
          </div>

          <div class="item-action">
            <p v-if="statusData.active_pakage_type == 3" class="text-green">
              در حال استفاده
            </p>

            <button
              v-else-if="statusData.active_pakage_type > 3"
              class="green-button btn-disabled text-rtl"
              disabled
            >
              ارتقا عضویت
            </button>

            <a
              v-else-if="offerTime"
              href
              @click.prevent="doPayment(4)"
              class="green-button bg-gradient text-rtl"
            >
              ارتقا عضویت
            </a>

            <a
              v-else
              href
              @click.prevent="doPayment(3)"
              class="green-button bg-gradient text-rtl"
            >
              ارتقا عضویت
            </a>
          </div>
        </div>
      </div>
      <div
        v-if="justPro == 'false'"
        class="pull-right mobile-padding-5 col-xs-12 col-sm-6 col-lg-6"
      >
        <div class="item-wrapper wrapper-background">
          <div class="item-header text-center">
            <div class="item-title">
              <h2>عضویت پایه</h2>
              <p class="item-price">
                ماهانه
                <span class="price">120,000</span>
                <span class="small-unit"> تومان</span>
              </p>
            </div>
          </div>

          <div class="item-content">
            <ul class="item-content-list">
              <li class="free-item hidden-xs">
                <p>
                  <br />
                </p>
              </li>
              <li v-for="(item, index) in priceItemBasic" :key="index">
                <a
                  data-toggle="collapse"
                  :href="'#content-item-pro-' + index"
                  class="item-help"
                  :title="item.helpDescription"
                ></a>

                <p
                  class="item-content-title"
                  :class="{ 'disable-text': !item.contentUnit }"
                  v-html="item.title"
                ></p>

                <p class="item-content-amount">
                  <i
                    v-if="!item.contentUnit"
                    class="text-green fa fa-times-circle"
                    style="color: #e41c38"
                  ></i>

                  <i
                    v-else-if="
                      item.contentUnit == true && item.contentUnit != ''
                    "
                    class="text-green fa fa-check-circle"
                    style="color: #00c569"
                  ></i>
                  <span v-else v-text="item.contentUnit"></span>
                </p>
              </li>
              <li class="empty hidden-xs">
                <a data-toggle="collapse" class="item-help" title=""></a>

                <p class="item-content-title">عنوان</p>

                <p class="item-content-amount">
                  <i
                    class="text-green fa fa-times-circle"
                    style="color: #e41c38"
                  ></i>
                </p>
              </li>
            </ul>
          </div>

          <div class="detail-wrapper">
            <p>امکان خرید به صورت ۳ ماهه</p>
          </div>

          <div class="item-action">
            <p v-if="statusData.active_pakage_type == 1" class="green-text">
              در حال استفاده
            </p>

            <button
              v-else-if="statusData.active_pakage_type > 1"
              class="green-button btn-disabled text-rtl"
              disabled
            >
              ارتقا عضویت
            </button>

            <a
              v-else
              href
              @click.prevent="doPayment(1)"
              class="green-button bg-gray text-rtl"
            >
              ارتقا عضویت
            </a>
          </div>
        </div>
      </div>

      <div class="col-xs-12 text-center mobile-padding-5">
        <div class="wrapper-background">
          <div class="header-wrapper">
            <div class="header-title">
              <span>بسته ی ویژه فروش چیست؟</span>
            </div>

            <p class="header-description">
              <strong>
                این بسته شامل مجموعه امکاناتی مانند اعمال نردبان رایگان، مشاهده
                بدون تاخیر درخواست های خرید، دریافت پیامک درخواست های خرید مرتبط
                و ... است که
                <span class="green-text"
                  >باعث فروش محصولات شما در سریع ترین زمان ممکن می شود</span
                >
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
  props: ["justPro", "offerTime"],
  data: function () {
    return {
      statusData: "",
      doPaymentLoader: false,

      priceItemBasic: [
        {
          title: "تعداد محصولات قابل تبلیغ",
          contentUnit: "3",
          helpDescription:
            " تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. ",
        },
        {
          title: "تعداد روزانه خریداران در دسترس",
          contentUnit: "10",
          helpDescription:
            "بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد",
        },

        {
          title: "امکان ارتباط با خریداران طلایی",
          contentUnit: true,
          helpDescription: "",
        },
        // <i class="text-green fa fa-check-circle" style="color:#00c569"></i>
        {
          title: "بسته ی ویژه فروش",
          contentUnit: false,
          helpDescription:
            "محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود",
        },

        // '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>'
      ],
      priceItemPro: [
        {
          title: "تعداد محصولات قابل تبلیغ",
          contentUnit: "7",
          helpDescription:
            " تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. ",
        },
        {
          title: "تعداد روزانه خریداران در دسترس",
          contentUnit: "30",
          helpDescription:
            "بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد",
        },

        {
          title: "امکان ارتباط با خریداران طلایی",
          contentUnit: true,
          helpDescription: "",
        },

        {
          title: "5 برابر ارتباطات بیشتر با خریداران",
          contentUnit: true,
          helpDescription: "",
        },
        {
          title: "<span class='red-text'>*</span> بسته ی ویژه فروش",
          contentUnit: true,
          helpDescription:
            "محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود",
        },
      ],
    };
  },
  methods: {
    init: function () {
      var self = this;
      axios
        .post("/get_seller_dashboard_required_data")
        .then(function (response) {
          if (response.data.is_valid || response.data.is_valid == false) {
            self.statusData = response.data;
          }
        });
    },
    doPayment: function (packageType) {
      this.doPaymentLoader = true;

      let userId = getUserId();

      this.registerComponentStatistics(
        "payment",
        "type-" + packageType,
        "userId: " + userId
      );

      window.location.href = "/payment/" + packageType;
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
  mounted() {
    this.init();
  },
};
</script>
