<style scoped>
.wrapper-background {
  background: #fff;
  border: 1px solid #140092;
  border-radius: 4px;
  padding: 15px;
  line-height: 1.618;
  margin-bottom: 30px;
  /* overflow: hidden; */
}

.item-action .main-button.bg-gray {
  background-color: #556080 !important;
}

.item-wrapper {
  position: relative;
  padding: 0;
  float: left;
  width: 100%;
  min-height: 577px;
}

.item-price {
  font-size: 24px;
  font-weight: 700;
  color: #140092;
  text-align: center;
}

.main-price {
  font-size: 20px;
  font-weight: 700;
  color: #3888ff;
}

.main-price.small-price {
  font-weight: 700;
  font-size: 16px;
  color: #3888ff;
}

.small-main-price {
  font-weight: 700;
  font-size: 18px;
}

.item-price.discount-main-price {
  text-decoration: line-through;
}

.item-price span.price {
  color: #1da1f2;
  font-size: 24px;
}

.small-unit {
  font-size: 14px;

  font-weight: 300;
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
  margin-bottom: 30px;
}

.item-content.desktop-contents {
  position: relative;
  float: left;
  width: 100%;
  margin-bottom: 30px;
}

.item-action {
  text-align: center;
  float: right;
  width: 100%;
  padding-bottom: 30px;
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
  color: #000;
  font-weight: 300;
  direction: rtl;
}

.item-content-title.disable-text {
  color: #808080 !important;
}

.item-content-amount {
  float: left;
  font-weight: bold;
  width: 100px;
  text-align: center;
  border-right: 1px solid #d1d1d1;
}

.item-content-amount > i {
  font-size: 12px;
}

.item-content-list {
  float: right;
  width: 100%;
  padding: 0 10px;
}

.item-content-list li {
  float: left;
  width: 100%;
  padding: 0;
  position: relative;
  border-bottom: 1px solid #d1d1d1;
  line-height: 1.618;
}

.item-content-list li.list-header > span {
  padding: 0;
  position: relative;
  background: rgba(189, 216, 226, 0.35);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  line-height: 1.618;
  display: block;
  margin: 0 -10px;
  text-align: right;
  padding: 8px 10px;
  font-weight: 500;
  color: #000;
}

.item-content-list li > p {
  padding: 10px 0;
}
.item-content-list li:last-of-type,
.item-content-list li:first-of-type {
  border: none;
}

.desktop-contents .item-content-list {
  margin-bottom: 16px;
}

.desktop-contents .item-content-list li:first-of-type {
  max-width: 100%;
  text-align: center;
}

.desktop-contents .item-content-list li {
  max-width: 230px;
  margin: 0 auto;
  overflow: hidden;
  float: initial;
  border: none;
}

.desktop-contents .item-content-list li > p {
  padding: 5px 0;
}

.desktop-contents .item-content-list li.list-header > span {
  background: #e7e5f4;
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  box-shadow: none;
}

.desktop-contents .item-content-title {
  float: right;
  border: none;
  max-width: 230px;
  position: relative;
}

.desktop-contents .item-content-title::after {
  content: "";
  width: 150px;
  height: 1px;
  background: #d1d1d1;
  position: absolute;
  bottom: 0px;
  right: 0;
}

.desktop-contents li:last-of-type .item-content-title::after {
  background: none;
}

.desktop-contents .item-content-amount {
  float: right;
  border: none;
  max-width: 25px;
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
  direction: rtl;
  margin-bottom: 40px;
}

.item-title > span {
  font-size: 13px;
}

.save-money {
  background: #140092;
  color: #fff;
  font-size: 16px;
  padding: 4px 0;
  margin: 0 auto 8px;
}
.package-title {
  font-size: 16px;
  color: #000;
  margin-bottom: 16px;
}
.package-title.active {
  color: #140092;
}
.header-wrapper {
  text-align: center;
  padding: 15px;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
}

.price-description {
  color: #515151;
  font-size: 12px;
  padding: 0 30px;
  margin-bottom: 27px;
  min-height: 77px;
  display: flex;
  align-items: center;
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
  /* border-bottom: 1px solid #f2f2f2; */
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

.main-discount-wrapper {
  float: right;
  width: 100%;
  text-align: center;
  direction: rtl;
  margin-bottom: 18px;
}

.discount-item span {
  display: inline-block;
  padding: 8px 15px 5px;
  background: linear-gradient(90deg, #e7d262, #feee98, #e7d262);
  color: #312d1a;
  font-size: 12px;
  border-radius: 25px;
  line-height: 1;
  margin-bottom: 7px;
}

.discount-title {
  font-weight: bold;
  font-size: 17px;
  color: #555;
  margin-top: 10px;
}

.discount-price {
  font-size: 20px;
  font-weight: 500;
  color: #808c9b;
  text-decoration: line-through;
  margin-top: -13px;
}

.discount-time {
  color: #f03738;
  font-size: 12px;
}

.discount-time i {
  font-size: 20px;
  position: relative;
  top: 3px;
  left: 1px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.tab-action-wrapper {
  max-width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px auto 0;
}
.tab-action-wrapper button {
  background: none;
  border: none;
  border-bottom: 2px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  color: #808080;
  padding: 8px;
  min-width: 160px;
  font-weight: 300;
}
.tab-action-wrapper .active button {
  border-bottom: 2px solid #ff6600;
  color: #000;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.15), 2px 4px 8px rgba(0, 0, 0, 0.15);
}
.package-wrapper {
  margin-top: 30px;
  overflow: hidden;
}

.pricing-wrapper {
  margin-bottom: 130px;
}

.panel.panel-default {
  border-radius: 8px;
  background: #c5e1eb;
  padding: 10px 15px;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 4px 8px rgba(151, 151, 151, 0.2);
  margin-bottom: 20px;
}

.panel.panel-default .panel-heading > a {
  color: #000;
  font-size: 16px;
  font-weight: 300;
  display: block;
  direction: rtl;
}

.panel-collapse > p {
  line-height: 20px;
  font-size: 13px;
  direction: rtl;
  padding: 10px;
  color: #2d3031;
}

.phones {
  text-align: right;
}

.phones a {
  color: #000;
}

.phones a:first-of-type {
  margin-right: 30px;
}

.collapse-wrapper {
  padding-bottom: 100px;
}
.panel-heading a:after {
  content: "\f106";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  float: left;
  color: #15313c;
}
.panel-heading a.collapsed:after {
  content: "\f107";
}

@media screen and (max-width: 991px) {
  .package-wrapper > div {
    padding: 0;
  }
  .item-wrapper {
    border: none !important;
  }
  .save-money {
    width: 100%;
    max-width: 500px;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.2);
  }
}

@media screen and (max-width: 767px) {
  .item-wrapper {
    min-height: initial;
  }
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

  .item-content-amount {
    font-size: 17px;
  }
}
</style>
<template>
  <div class="col-xs-12">
    <div class="row">
      <div class="tab-action-wrapper hidden-md hidden-lg">
        <div :class="{ active: packagePage == 1 }">
          <button @click="packagePage = 1">بسته ویژه سالانه</button>
        </div>
        <div :class="{ active: packagePage == 2 }">
          <button @click="packagePage = 2">بسته پایه سه ماهه</button>
        </div>
      </div>
      <transition-group
        name="fade"
        tag="div"
        class="package-wrapper"
        mode="out-in"
      >
        <div
          v-if="packagePage == 1 || !checkIsMobile()"
          key="1"
          :class="{ 'col-sm-offset-3': justPro == 'true' }"
          class="pull-left mobile-padding-5 col-xs-12 col-md-6 col-lg-6"
        >
          <div class="item-wrapper pro-version wrapper-background">
            <div class="item-header text-center">
              <div class="item-title">
                <div class="discount-wrapper">
                  <p class="save-money">٪۲۰ بصرفه تر!</p>
                  <p class="hidden-xs hidden-sm package-title active">
                    بسته ویژه سالانه
                  </p>
                  <p
                    class="item-price"
                    :class="{
                      'discount-main-price': prices['type-3-discount'],
                    }"
                  >
                    سالانه
                    <span
                      v-if="prices['type-3']"
                      v-text="convertToToman(prices['type-3'])"
                    ></span>
                    <span v-else class="price">---,---</span>
                    <span class="small-unit"> تومان</span>
                  </p>
                </div>

                <p
                  class="item-price main-price"
                  v-if="
                    prices['type-3-discount'] &&
                    statusData.active_pakage_type < 3
                  "
                >
                  <span
                    v-if="prices['type-3-discount']"
                    v-text="convertToToman(prices['type-3-discount'])"
                  ></span>
                  <span v-else class="price">---,---</span>
                  <span class="small-unit"> تومان</span>
                </p>
              </div>

              <p class="price-description text-center">
                با این بسته می توانید از تمام امکانات ارتباطی باسکول حداکثر
                استفاده را داشته باشید. بدون محدودیت ! به راحتی با خریدارن
                دلخواه تماس بگیرید و با تبلیغ محصولات متعدد بیشترین تعداد
                خریداران را به خود جذب کنید. این بسته ۲۰% به صرفه تر از بسته سه
                ماهه است.
              </p>

              <div
                class="main-discount-wrapper"
                v-if="
                  prices['type-3-discount'] && statusData.active_pakage_type < 3
                "
              >
                <div class="discount-item">
                  <span>%30 تخفیف عضویت جدید</span>
                </div>
                <div class="item-price main-price small-price">
                  {{ convertToToman(prices["type-3-discount"]) }}
                  <span class="small-unit">تومان</span>
                </div>
                <div class="discount-time" v-if="prices['discount-deadline']">
                  <i class="far fa-clock"></i>
                  <span
                    v-if="prices['discount-deadline'].days"
                    v-text="prices['discount-deadline'].days + ' روز'"
                  ></span>
                  <span
                    v-if="
                      prices['discount-deadline'].days &&
                      prices['discount-deadline'].hours
                    "
                  >
                    و
                  </span>
                  <span
                    v-if="prices['discount-deadline'].hours"
                    v-text="prices['discount-deadline'].hours + ' ساعت'"
                  >
                  </span>
                  تا پایان تخفیف
                </div>
              </div>

              <button
                v-if="statusData.active_pakage_type < 3"
                @click.prevent="doPayment(3)"
                class="
                  main-button
                  button-shadow
                  white-text
                  hover-effect
                  bg-orange
                  text-rtl
                "
              >
                ارتقا عضویت
                <i class="fa fa-angle-left"></i>
              </button>
            </div>

            <div class="item-content hidden-md hidden-lg">
              <ul class="item-content-list">
                <li class="list-header">
                  <span>ویژگی های بسته ویژه</span>
                </li>
                <li v-for="(item, index) in priceItemPro" :key="index">
                  <p class="item-content-title" v-html="item.title"></p>

                  <p class="item-content-amount">
                    <i
                      v-if="!item.contentUnit"
                      class="text-green fa fa-times"
                      style="color: #e41c38"
                    ></i>

                    <i
                      v-else-if="
                        item.contentUnit == true && item.contentUnit != ''
                      "
                      class="text-green fa fa-check"
                      style="color: #00c569"
                    ></i>
                    <span v-else v-text="item.contentUnit"></span>
                  </p>
                </li>
              </ul>
            </div>

            <div class="item-content desktop-contents hidden-xs hidden-sm">
              <ul class="item-content-list">
                <li class="list-header">
                  <span>ویژگی های بسته ویژه</span>
                </li>
                <li v-for="(item, index) in priceItemPro" :key="index">
                  <p class="item-content-amount">
                    <i
                      v-if="!item.contentUnit"
                      class="text-green fa fa-times"
                      style="color: #e41c38"
                    ></i>

                    <i
                      v-else-if="
                        item.contentUnit == true && item.contentUnit != ''
                      "
                      class="text-green fa fa-check"
                      style="color: #00c569"
                    ></i>
                    <span v-else v-text="item.contentUnit"></span>
                  </p>
                  <p class="item-content-title" v-html="item.title"></p>
                </li>
              </ul>
            </div>

            <div
              class="main-discount-wrapper"
              v-if="
                prices['type-3-discount'] && statusData.active_pakage_type < 3
              "
            >
              <p
                class="item-price small-main-price"
                :class="{ 'discount-main-price': prices['type-3-discount'] }"
              >
                سالانه
                <span
                  v-if="prices['type-3']"
                  v-text="convertToToman(prices['type-3'])"
                ></span>
                <span v-else class="price">---,---</span>
                <span class="small-unit"> تومان</span>
              </p>
              <div class="item-price main-price small-price">
                {{ convertToToman(prices["type-3-discount"]) }}
                <span class="small-unit">تومان</span>
              </div>
              <div class="discount-time" v-if="prices['discount-deadline']">
                <i class="far fa-clock"></i>
                <span
                  v-if="prices['discount-deadline'].days"
                  v-text="prices['discount-deadline'].days + ' روز'"
                ></span>
                <span
                  v-if="
                    prices['discount-deadline'].days &&
                    prices['discount-deadline'].hours
                  "
                >
                  و
                </span>
                <span
                  v-if="prices['discount-deadline'].hours"
                  v-text="prices['discount-deadline'].hours + ' ساعت'"
                >
                </span>
                تا پایان تخفیف
              </div>
            </div>

            <div class="item-action">
              <p v-if="statusData.active_pakage_type == 3" class="text-green">
                در حال استفاده
              </p>

              <button
                v-else-if="statusData.active_pakage_type > 3"
                class="main-button btn-disabled text-rtl"
                disabled
              >
                ارتقا عضویت
              </button>

              <a
                v-else-if="offerTime"
                href
                @click.prevent="doPayment(4)"
                class="
                  main-button
                  button-shadow
                  white-text
                  hover-effect
                  bg-orange
                  text-rtl text-rtl
                "
              >
                ارتقا عضویت
              </a>

              <a
                v-else
                href
                @click.prevent="doPayment(3)"
                class="
                  main-button
                  small-button
                  button-shadow
                  white-text
                  hover-effect
                  bg-orange
                  text-rtl text-rtl
                "
              >
                ارتقا عضویت
                <i class="fa fa-angle-left"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          v-if="
            (justPro == 'false' && packagePage == 2) ||
            (justPro == 'false' && !checkIsMobile())
          "
          key="2"
          class="pull-right mobile-padding-5 col-xs-12 col-md-6 col-lg-6"
        >
          <div class="item-wrapper wrapper-background">
            <div class="item-header text-center">
              <div class="item-title">
                <div class="discount-wrapper">
                  <p class="save-money empty">٪۲۰ بصرفه تر!</p>
                  <p class="hidden-xs hidden-sm package-title">
                    بسته پایه سه ماهه
                  </p>
                  <p
                    class="item-price"
                    :class="{
                      'discount-main-price': prices['type-3-discount'],
                    }"
                  >
                    سه ماهه
                    <span
                      v-if="prices['type-1']"
                      v-text="convertToToman(prices['type-1'])"
                    ></span>
                    <span v-else class="price">---,---</span>
                    <span class="small-unit"> تومان</span>
                  </p>
                </div>

                <p
                  class="item-price main-price"
                  v-if="
                    prices['type-1-discount'] &&
                    statusData.active_pakage_type < 1
                  "
                >
                  <span
                    v-if="prices['type-1-discount']"
                    v-text="convertToToman(prices['type-1-discount'])"
                  ></span>
                  <span v-else class="price">---,---</span>
                  <span class="small-unit"> تومان</span>
                </p>
              </div>

              <p class="price-description text-center">
                این بسته شامل مجموعه امکانات پایه باسکول شامل منشی آنلاین ،
                نمایش شماره تماس شما به خریداران و دسترسی به خریداران بیشتر است.
              </p>

              <div
                class="main-discount-wrapper"
                v-if="
                  prices['type-1-discount'] && statusData.active_pakage_type < 1
                "
              >
                <div class="discount-item">
                  <span>%30 تخفیف عضویت جدید</span>
                </div>
                <div class="item-price main-price small-price">
                  {{ convertToToman(prices["type-1-discount"]) }}
                  <span class="small-unit">تومان</span>
                </div>
                <div class="discount-time" v-if="prices['discount-deadline']">
                  <i class="far fa-clock"></i>
                  <span
                    v-if="prices['discount-deadline'].days"
                    v-text="prices['discount-deadline'].days + ' روز'"
                  ></span>
                  <span
                    v-if="
                      prices['discount-deadline'].days &&
                      prices['discount-deadline'].hours
                    "
                  >
                    و
                  </span>
                  <span
                    v-if="prices['discount-deadline'].hours"
                    v-text="prices['discount-deadline'].hours + ' ساعت'"
                  >
                  </span>
                  تا پایان تخفیف
                </div>
              </div>

              <button
                v-if="statusData.active_pakage_type < 1"
                @click.prevent="doPayment(1)"
                class="
                  main-button
                  button-shadow
                  white-text
                  hover-effect
                  bg-orange
                  text-rtl
                "
              >
                ارتقا عضویت
                <i class="fa fa-angle-left"></i>
              </button>
            </div>

            <div class="item-content hidden-md hidden-lg">
              <ul class="item-content-list">
                <li class="list-header">
                  <span>ویژگی های بسته پایه</span>
                </li>
                <li v-for="(item, index) in priceItemBasic" :key="index">
                  <p
                    class="item-content-title"
                    :class="{ 'disable-text': !item.contentUnit }"
                    v-html="item.title"
                  ></p>

                  <p class="item-content-amount">
                    <i
                      v-if="!item.contentUnit"
                      class="text-green fa fa-times"
                      style="color: #e41c38"
                    ></i>

                    <i
                      v-else-if="
                        item.contentUnit == true && item.contentUnit != ''
                      "
                      class="text-green fa fa-check"
                      style="color: #00c569"
                    ></i>
                    <span v-else v-text="item.contentUnit"></span>
                  </p>
                </li>
              </ul>
            </div>
            <div class="item-content desktop-contents hidden-xs hidden-sm">
              <ul class="item-content-list">
                <li class="list-header">
                  <span>ویژگی های بسته پایه</span>
                </li>
                <li v-for="(item, index) in priceItemBasic" :key="index">
                  <p class="item-content-amount">
                    <i
                      v-if="!item.contentUnit"
                      class="text-green fa fa-times"
                      style="color: #e41c38"
                    ></i>

                    <i
                      v-else-if="
                        item.contentUnit == true && item.contentUnit != ''
                      "
                      class="text-green fa fa-check"
                      style="color: #00c569"
                    ></i>
                    <span v-else v-text="item.contentUnit"></span>
                  </p>
                  <p
                    class="item-content-title"
                    :class="{ 'disable-text': !item.contentUnit }"
                    v-html="item.title"
                  ></p>
                </li>
              </ul>
            </div>

            <div
              class="main-discount-wrapper"
              v-if="
                prices['type-1-discount'] && statusData.active_pakage_type < 1
              "
            >
              <p
                class="item-price small-main-price"
                :class="{ 'discount-main-price': prices['type-3-discount'] }"
              >
                سالانه
                <span
                  v-if="prices['type-1']"
                  v-text="convertToToman(prices['type-1'])"
                ></span>
                <span v-else class="price">---,---</span>
                <span class="small-unit"> تومان</span>
              </p>
              <div class="item-price main-price small-price">
                {{ convertToToman(prices["type-1-discount"]) }}
                <span class="small-unit">تومان</span>
              </div>
              <div class="discount-time" v-if="prices['discount-deadline']">
                <i class="far fa-clock"></i>
                <span
                  v-if="prices['discount-deadline'].days"
                  v-text="prices['discount-deadline'].days + ' روز'"
                ></span>
                <span
                  v-if="
                    prices['discount-deadline'].days &&
                    prices['discount-deadline'].hours
                  "
                >
                  و
                </span>
                <span
                  v-if="prices['discount-deadline'].hours"
                  v-text="prices['discount-deadline'].hours + ' ساعت'"
                >
                </span>
                تا پایان تخفیف
              </div>
            </div>

            <div class="item-action">
              <p v-if="statusData.active_pakage_type == 1" class="text-green">
                در حال استفاده
              </p>

              <button
                v-else-if="statusData.active_pakage_type > 1"
                class="main-button btn-disabled text-rtl"
                disabled
              >
                ارتقا عضویت
              </button>

              <a
                v-else
                href
                @click.prevent="doPayment(1)"
                class="
                  main-button
                  small-button
                  button-shadow
                  white-text
                  hover-effect
                  bg-orange
                  text-rtl text-rtl
                "
              >
                ارتقا عضویت
                <i class="fa fa-angle-left"></i>
              </a>
            </div>
          </div>
        </div>
      </transition-group>
      <div class="collapse-wrapper col-xs-12">
        <div class="row">
          <div
            :id="isModal ? isModal + 'accordion' : 'accordion'"
            role="tablist"
            aria-multiselectable="true"
            class="panel-group col-xs-12"
          >
            <div class="panel panel-default">
              <div role="tab" id="headingFirst" class="panel-heading">
                <a
                  data-toggle="collapse"
                  :data-parent="
                    isModal ? '#' + isModal + 'accordion' : '#accordion'
                  "
                  :href="
                    isModal ? '#' + isModal + 'collapse-body' : '#collapse-body'
                  "
                  aria-expanded="false"
                  :aria-controls="
                    isModal ? isModal + 'collapse-body' : 'collapse-body'
                  "
                  class="collapsed"
                >
                  بسته فروش ویژه چیست ؟
                </a>
              </div>
              <div
                :id="isModal ? isModal + 'collapse-body' : 'collapse-body'"
                role="tabpanel"
                aria-labelledby="headingFirst"
                class="panel-collapse collapse"
              >
                <p>
                  این بسته شامل مجموعه امکاناتی مانند اعمال نردبان رایگان ،
                  مشاهده بدون تاخیر درخواست های خرید ، دریافت پیامک درخواست های
                  خرید مرتبط و .. است که باعث فروش محصولات شما در رسیع ترین زمان
                  ممکن می شود.
                </p>
              </div>
            </div>
          </div>
          <div
            :id="isModal ? isModal + 'elevator' : 'elevator'"
            role="tablist"
            aria-multiselectable="true"
            class="panel-group col-xs-12"
          >
            <div class="panel panel-default">
              <div role="tab" id="headingFirst" class="panel-heading">
                <a
                  data-toggle="collapse"
                  :data-parent="
                    isModal ? '#' + isModal + 'elevator' : '#elevator'
                  "
                  :href="
                    isModal ? '#' + isModal + 'elevator-body' : '#elevator-body'
                  "
                  aria-expanded="false"
                  :aria-controls="
                    isModal ? isModal + 'elevator-body' : 'elevator-body'
                  "
                  class="collapsed"
                >
                  نردبان در بسته فروش ویژه چیست؟
                </a>
              </div>
              <div
                :id="isModal ? isModal + 'elevator-body' : 'elevator-body'"
                role="tabpanel"
                aria-labelledby="headingFirst"
                class="panel-collapse collapse"
              >
                <p>
                  با اعمال هربار نردبان محصول شما در صدر لیست محصولات قرار
                  میگیرد.
                </p>
              </div>
            </div>
          </div>
          <div
            :id="isModal ? isModal + 'phones-wrapper' : 'phones-wrapper'"
            role="tablist"
            aria-multiselectable="true"
            class="panel-group col-xs-12"
          >
            <div class="panel panel-default">
              <div role="tab" id="headingFirst" class="panel-heading">
                <a
                  data-toggle="collapse"
                  :data-parent="
                    isModal
                      ? '#' + isModal + 'phones-wrapper'
                      : '#phones-wrapper'
                  "
                  :href="
                    isModal ? '#' + isModal + 'phones-body' : '#phones-body'
                  "
                  aria-expanded="false"
                  :aria-controls="
                    isModal ? isModal + 'phones-body' : 'phones-body'
                  "
                  class="collapsed"
                >
                  رمز دوم برای خرید آنلاین ندارم!
                </a>
              </div>
              <div
                :id="isModal ? isModal + 'phones-body' : 'phones-body'"
                role="tabpanel"
                aria-labelledby="headingFirst"
                class="panel-collapse collapse"
              >
                <p>
                  درصورتی که قادر به خرید مستقیم نیستید ، برلی پرداخت ازطریق
                  کارت به کارت با ما تماس بگیرید.
                </p>
                <div class="phones">
                  <a href="tel:۰۹۱۱۸۴۱۳۰۵۴"
                    ><i class="fa fa-phone"></i>
                    ۰۹۱۱۸۴۱۳۰۵۴
                  </a>
                  <a href="tel:۰۹۱۷۸۹۲۸۲۶۶"
                    ><i class="fa fa-phone"></i>
                    ۰۹۱۷۸۹۲۸۲۶۶
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row"> <div class="switch-actions hidden-md hidden-lg col-xs-12 text-center">
       
        <button v-if="packagePage == 1" @click="packagePage = 2" class="main-button button-shadow white-text" >
          بسته پایه سه ماهه
        </button>
        <button v-else @click="packagePage = 1" class="main-button button-shadow white-text" >
          بسته ویژه سالانه
        </button>
      </div></div>
      </div>

     
    </div>
  </div>
</template>


<script>
import { eventBus } from "../../../../../router/router";
export default {
  props: ["justPro", "offerTime", "isModal"],
  data: function () {
    return {
      packagePage: 1,
      prices: "",
      statusData: "",
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
        {
          title: "دسترسی به شماره تماس خریداران",
          contentUnit: true,
          helpDescription: "",
        },
        {
          title: "استخدام منشی آنلاین (دلسا)",
          contentUnit: true,
          helpDescription: "",
        },

        {
          title: "نمایش شماره تماس به خریداران",
          contentUnit: true,
          helpDescription: "",
        },
        {
          title: "تبلیغ محصول شما در کانال باسکول",
          contentUnit: false,
          helpDescription: "",
        },
        // {
        //   title: "5 برابر ارتباط بیشتر با خریداران",
        //   contentUnit: false,
        //   helpDescription: "",
        // },
        {
          title: "بسته ویژه فروش",
          contentUnit: false,
          helpDescription:
            "محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود",
        },
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
          contentUnit: "نا محدود",
          helpDescription:
            "بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد",
        },
        {
          title: "امکان ارتباط با خریداران طلایی",
          contentUnit: true,
          helpDescription: "",
        },
        {
          title: "دسترسی به شماره تماس خریداران",
          contentUnit: true,
          helpDescription: "",
        },
        {
          title: "استخدام منشی آنلاین (دلسا)",
          contentUnit: true,
          helpDescription: "",
        },
        {
          title: "نمایش شماره تماس به خریداران",
          contentUnit: true,
          helpDescription: "",
        },
        {
          title: "تبلیغ محصول شما در کانال باسکول",
          contentUnit: true,
          helpDescription: "",
        },
        {
          title: "5 برابر ارتباط بیشتر با خریداران",
          contentUnit: true,
          helpDescription: "",
        },
        {
          title: "بسته ی ویژه فروش",
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
      this.getPrices();
    },
    getPrices() {
      axios.post("/payment/get-packages-price").then((response) => {
        this.prices = response.data.prices;
      });
    },
    convertToToman(price) {
      price = price.toString().slice(0, -1);
      let priceWithComma = this.getNumberWithCommas(price);
      return priceWithComma;
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    getTotalPriceForPay(packageType) {
      let price = "";
      switch (packageType) {
        case 1:
          if (this.prices["type-1-discount"]) {
            price = this.prices["type-1-discount"] / 10;
          } else {
            price = this.prices["type-1"] / 10;
          }
          break;
        case 3:
          if (this.prices["type-3-discount"]) {
            price = this.prices["type-3-discount"] / 10;
          } else {
            price = this.prices["type-3"] / 10;
          }
          break;

        default:
          if (this.prices["type-3-discount"]) {
            price = this.prices["type-3-discount"] / 10;
          } else {
            price = this.prices["type-3"] / 10;
          }
          break;
      }

      return price;
    },
    openPaymentModal(packageType) {
      $(".modal").modal("hide");
      let totalPrice = this.getTotalPriceForPay(packageType);
      let userId = getUserId();
      let paymentData = {
        paymentName: "pricingData",
        packageType: packageType,
        userId: userId,
        totalPrice: totalPrice,
      };
      eventBus.$emit("peymentMethodData", paymentData);
      $("#payment-type-modal").modal("show");
    },
    doPayment: function (packageType) {
      this.$parent.doPaymentLoader = true;
      let userId = getUserId();

      this.registerComponentStatistics(
        "payment",
        "type-" + packageType,
        "userId: " + userId
      );
      window.location.href = "/payment/" + packageType;

      // *****  payment width factor  *****

      // let paymentData = {
      //   paymentItems: "",
      //   selectedPackage: "",
      // };
      // paymentData.paymentItems = this.calculateData(packageType);
      // paymentData.selectedPackage = packageType;
      // eventBus.$emit("paymentData", paymentData);
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
    calculateData(payment) {
      let item = "";
      switch (payment) {
        case 1:
          return (item = [
            {
              title: "تعداد ماه های فعال",
              value: "3",
              unit: "ماه",
            },
            {
              title: "تعداد ماه های رایگان",
              value: "0",
              unit: "ماه",
            },
            {
              title: "تعداد ماه های قابل پرداخت",
              value: "3",
              unit: "ماه",
            },
            {
              title: "هزینه هر ماه",
              value: "99,000",
              unit: "تومان",
            },
            {
              title: "مجموع",
              value: "297,000",
              unit: "تومان",
            },
          ]);
          break;
        case 3:
          return (item = [
            {
              title: "تعداد ماه های فعال",
              value: "12",
              unit: "ماه",
            },
            {
              title: "تعداد ماه های رایگان",
              value: "1",
              unit: "ماه",
            },
            {
              title: "تعداد ماه های قابل پرداخت",
              value: "11",
              unit: "ماه",
            },
            {
              title: "هزینه هر ماه",
              value: "89,000",
              unit: "تومان",
            },
            {
              title: "مجموع",
              value: "979,000",
              unit: "تومان",
            },
          ]);
          break;
      }
    },
    checkIsMobile() {
      let pageWidth = window.outerWidth;
      if (pageWidth <= 991) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
