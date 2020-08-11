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

.text-red {
  color: #e41c38;
}

.text-green {
  color: #00ac5c;
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

.item-date {
  text-align: center;

  font-size: 18px;

  font-weight: bold;

  margin-top: -4px;
}

.item-content {
  position: relative;
  float: left;
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

.item-help i {
  color: #000546;

  font-size: 22px;
}

.item-help-content {
  position: absolute;
  right: -9px;
  top: 35px;
  width: 200px;
  color: #fff;
  background: #000546;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  transition: 300ms;
  z-index: 1;
  direction: rtl;
  text-align: right;
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

.item-help {
  transition: 300ms;

  display: block;

  float: right;

  margin-left: 10px;
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

.wrapper-icon svg {
  width: 20px;
  position: relative;
  top: 7px;
  margin-left: 5px;
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

  .special-badge {
    padding: 0 3px 3px;
    border-radius: 4px;
    display: inline-block;
    margin-right: 3px;
    position: initial;
    font-size: 14px;
    width: initial;
    transform: rotate(0);
  }
}
</style>
<template>
  <div class="col-xs-12">
    <div class="row">
      <div class="main-content-wrapper col-xs-12 col-lg-10 col-lg-offset-1">
        <div class="row">
          <pricing-contents justPro="false" :offer-time="this.offerTime" />
        </div>
      </div>

      <div class="users-review-carousel-wrapper col-xs-12">
        <div class="title-section">تعدادی از اعضای ویژه در باسکول</div>
        <div class="owl-carousel">
          <pricing-user-carousel
            v-for="(userItem,index) in $parent.activeUsers"
            :key="index"
            parent-class=".users-review-carousel-wrapper .owl-carousel"
            :img="userItem.profile_photo ? $parent.str + '/' + userItem.profile_photo : ''"
            :title="userItem.first_name + ' ' + userItem.last_name"
            :city="userItem.province + ' - ' + userItem.city "
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import pricingUserCarousel from "./pricing-user-carousel";
import pricingContents from "./pricing-tables/pricing-package-contents";
export default {
  props: ["offerTime"],
  components: { pricingUserCarousel, pricingContents },
  data: function() {
    return {
      // statusData: "",
      // doPaymentLoader: false
      //  priceItemSix: [
      //   {
      //     title: "تعداد آگهی ها",
      //     contentUnit: "2",
      //     helpDescription:
      //       " تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. "
      //   },
      //   {
      //     title: "تعداد نردبان ",
      //     contentUnit: "1",
      //     helpDescription:
      //       "بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد"
      //   },
      //   {
      //     title: "نمایش در لیست محصولات ویژه",
      //     contentUnit:
      //       '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
      //     helpDescription:
      //       "محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود"
      //   },
      //   {
      //     title: "تایید فوری ",
      //     contentUnit:
      //       '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
      //     helpDescription:
      //       " آگهی های فروش ثبت شده بلافاصله پس از ثبت در لیست محصولات نمایش داده می شود. "
      //   },
      //   {
      //     title: " میزان افزایش خوشنامی ",
      //     contentUnit: "100",
      //     helpDescription: " مقدار اعتبار اضافه شده به صفحه پروفایل شما "
      //   },
      //   {
      //     title: " نشان فروشنده معتبر ",
      //     contentUnit:
      //       '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
      //     helpDescription:
      //       " این نشان در صفحه پروفایل فروشنده نمایش داده می شود. "
      //   },
      //   {
      //     title: " سقف روزانه پاسخ به درخواست ها ",
      //     contentUnit: "10",
      //     helpDescription: "سقف تعداد روزانه پاسخگویی به درخواست های خرید"
      //   },
      //   {
      //     title: "مشاهده بلافاصله درخواست خرید ",
      //     contentUnit:
      //       '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
      //     helpDescription:
      //       " درخواست های خرید جدید بدون تاخیر به شما نمایش داده می شود. "
      //   },
      //   {
      //     title: "تضمین بازگشت وجه ",
      //     contentUnit:
      //       '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
      //     helpDescription:
      //       " اگر پس از سه ماه از نتیجه آن رضایت نداشته باشید 100% مبلغ پرداختی به شما بازگردانده می شود. "
      //   }
      // ],
    };
  },
  methods: {
    init: function() {}
  },
  mounted() {
    this.init();
  }
};
</script>
