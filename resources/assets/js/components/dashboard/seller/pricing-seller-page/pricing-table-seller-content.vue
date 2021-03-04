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

.text-green {
  color: #00ac5c;
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
  font-size: 15px;
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
  .item-content-list li {
    padding: 12px 7px !important;
  }
  .mobile-padding-5 {
    padding: 0 5px !important;
  }
  .mobile-padding-7 {
    padding: 15px 7px !important;
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
    <!-- payment loader -->
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
      <div class="main-content-wrapper col-xs-12 col-lg-10 col-lg-offset-1">
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
                      شما سالانه
                      <span class="red-text important-text">
                        10 ها میلیون تومان پول
                      </span>
                      را به دلیل دسترسی نداشتن به خریدار ها از دست می دهید.
                    </div>
                  </div>
                </div>
                <div class="item-content-wrapper">
                  <div>
                    <div class="icon-wrapper">
                      <i class="fa fa-grin green-text"></i>
                    </div>
                    <div class="content-wrapper">
                      برای ارتباط با هزاران
                      <span class="green-text important-text">
                        خریدار واقعی
                      </span>
                      از سراسر کشور به جمع
                      <strong> فروشندگان ویژه باسکول </strong>
                      بپیوندید.
                    </div>
                  </div>
                </div>
              </div>
              <p class="main-text-wrapper">
                حرفه ای ها فرصت ها را از دست نمی دهند!
              </p>
            </div>
          </div>
          <!-- show pricing items -->
          <pricing-contents justPro="false" :offer-time="this.offerTime" />

          <!-- after pricing items  -->
          <div class="col-xs-12 text-center mobile-padding-5">
            <div class="wrapper-background">
              <div class="header-wrapper">
                <div class="header-title">
                  <span>بسته ی ویژه فروش چیست؟</span>
                </div>

                <p class="header-description">
                  <strong>
                    این بسته شامل مجموعه امکاناتی مانند اعمال نردبان رایگان،
                    مشاهده بدون تاخیر درخواست های خرید، دریافت پیامک درخواست های
                    خرید مرتبط و ... است که
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

      <div class="users-review-carousel-wrapper col-xs-12">
        <div class="title-section">تعدادی از اعضای ویژه در باسکول</div>
        <div class="owl-carousel">
          <pricing-user-carousel
            v-for="(userItem, index) in $parent.activeUsers"
            :key="index"
            parent-class=".users-review-carousel-wrapper .owl-carousel"
            :img="
              userItem.profile_photo
                ? $parent.str + '/' + userItem.profile_photo
                : ''
            "
            :title="userItem.first_name + ' ' + userItem.last_name"
            :city="userItem.province + ' - ' + userItem.city"
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
  data: function () {
    return {
      // statusData: "",
      doPaymentLoader: false,
    };
  },
  methods: {
    init: function () {},
  },
  mounted() {
    this.init();
  },
};
</script>
