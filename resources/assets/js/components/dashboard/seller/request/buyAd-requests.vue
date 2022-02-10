<style scoped>
/* .requests .main-content {
  padding-top: 50px;
} */

.user-information-wrapper {
  float: right;
  width: 100%;
  margin-bottom: 4px;
}

.user-information-content {
  display: block;
  float: right;
  width: 100%;
  background: none;
  border: none;
  padding-bottom: 3px;
}
.user-image {
  width: 25px;
  height: 25px;
  float: right;
  margin-left: 10px;
}
.user-content {
  display: block;
  max-width: 170px;
  overflow: hidden;
  font-size: 13px;
  font-weight: 400;
  color: #adadad;
  height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
}

.user-content i {
  margin-left: 1px;
  position: relative;
  top: 3px;
  font-size: 15px;
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
.buyAd-wrapper-item {
  border: 1px solid #ddd;
  padding: 11px 5px 15px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.buyAd-wrapper-item.golden {
  padding: 11px 15px 15px 0;
}

.buyAd-wrapper-item:nth-last-of-type(2n + 1) {
  background: #fdfdfd !important;
}

.buyAd-phone-buttons-wrapper {
  display: flex;
  flex-direction: row-reverse;
}

.detail-success {
  padding: 10px 0;
  width: 100%;
  background: #ff9828;
  border: none;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  display: block;
  max-width: 250px;
  margin: 13px auto 0;
  direction: rtl;
}

button.disable {
  background: #e0e0e0 !important;
}

.main-content > ul {
  border-radius: 3px;
  box-shadow: 0 0 10px #e1e1e1;
  overflow: hidden;
}

.main-content .buyAd-wrapper-item > p {
  text-align: center;
  direction: rtl;
  padding-top: 25px;
  font-size: 15px;
  font-weight: bold;
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

.request-detail .green-button {
  font-size: 16px;
  padding: 8px 30px;
}
.title {
  background: #f6f6f6;
  position: fixed;
  right: 250px;
  left: 0;
  z-index: 4;
  border-radius: 0;
  padding: 13px 15px;
}

.placeholder-title h1,
.title h1 {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.9;
}
.title button.mobile-category-item {
  display: none;
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
  bottom: 59px;
  left: 0;
  z-index: 5;
  width: 100%;
  background: #fff;
  border-radius: 0;
  padding: 10px 0;
}
.request-update button {
  margin: 0;
  padding: 3px 14px;
  margin-right: 6px;
  border-radius: 8px;
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

  color: #556080;

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
  padding-top: 75px;
  overflow: hidden;
}
.remove-filter-button {
  position: absolute;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e41c39;
  color: #e41c39;
  margin: 3px 10px 0;
  padding: 3px 15px;
  font-size: 1.5rem;
  font-weight: 400;
}
.remove-filter-icon {
  position: relative;
  top: 2px;
  right: -6px;
}
.golden {
  border: 2px solid #c5a75b;
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
  border-radius: 0 10px 10px 0;
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

.buyAd-phone-buttons-wrapper > .send-message-button {
  background: none;
  border: 1px solid #404b55;
  color: #404b55;
  transition: 300ms;
  margin-right: 20px;
}

.buyAd-phone-buttons-wrapper > .send-message-button:hover {
  background: #404b55;
  color: #fff;
  transition: 300ms;
}

.lock p,
.lock .list-name .buyer-text {
  filter: blur(10px);
}

.lock span.lock-text {
  position: absolute;
  left: 0;
  text-align: right;
  right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #7e7e7e;
  top: 45px;
}
.list-title.list-name {
  text-align: right;
  padding: 5px 15px;
  direction: rtl;
  color: #7e7e7e;
}
.list-title.list-name div.buyer-text {
  text-align: right;
  font-size: 18px;
}

.phone-number-content {
  padding: 15px 0 0;
  margin: 35px 0;
}
.phone-number-wrapper {
  margin: 0;
  padding: 0;
}

.guide-button {
  height: 32px;
  border: solid 1px white;
  background: #e41c38;
  width: 100px;
  line-height: 32px;
  -webkit-transform: rotate(-90deg);
  font-weight: 500;
  color: white;
  transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  text-align: center;
  font-size: 17px;
  position: fixed;
  left: -40px;
  top: 50%;
  z-index: 999;
}

.green-banner .banner-wrapper {
  background: linear-gradient(76.93deg, #44a08d 0%, #093637 100%);
  border-radius: 4px;
  min-height: 130px;
  position: relative;
  direction: rtl;
  overflow: hidden;
  margin-bottom: 15px;
}
.green-banner .banner-wrapper::before {
  content: "";
  width: 150px;
  height: 150px;
  background: url("../../../../../img/half-circle-small-right.svg");
  background-position: top, 2px 0;
  background-repeat: no-repeat;
  position: absolute;
  right: -35px;
}

.green-banner .banner-wrapper::after {
  content: "";
  width: 197px;
  height: 150px;
  background: url("../../../../../img/half-circle-large-left.svg"),
    url("../../../../../img/half-circle-small-left.svg");
  background-position: top, 2px 26px;
  background-repeat: no-repeat;
  position: absolute;
  margin-top: -56px;
  margin-right: -195px;
}

.green-banner .banner-wrapper .main-wrapper {
  position: relative;
  padding: 24px 47px;
  overflow: hidden;
  z-index: 2;
  text-align: right;
}

.green-banner .banner-wrapper .banner-bg-striped {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
}
.green-banner .banner-wrapper-title {
  font-size: 1.8rem;
  font-weight: 500;
  text-align: right;
  margin-bottom: 17px;
  color: #ffffff;
}
.green-banner .banner-wrapper-description {
  font-size: 1.6rem;
  color: #ffffff;
  text-align: right;
  margin-bottom: 17px;
}
.green-banner .green-banner-button-wrapper {
  display: grid;
  justify-items: center;
}
.banner-button {
  width: initial;
  font-size: 1.4rem;
  padding: 8px 36px;
  background: #f0f3f5;
  color: #ff6600;
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.green-banner .banner-button i {
  position: relative;
  top: 2px;
  margin-right: 5px;
}

.green-banner .green-button.banner-button:hover {
  background: #1da1f2;
}
.green-banner .banner-wrapper .circle-item-wrapper {
  position: absolute;
  left: 100px;
  width: 200px;
  height: 200px;
  background: #fff;
  top: calc(50% - 70px);
  border-radius: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.16);
}

.green-banner .banner-wrapper .circle-item-wrapper img {
  position: relative;
  top: -20px;
}

.green-banner .banner-wrapper .circle-item-wrapper::after {
  width: 315px;
  height: 195px;
  content: " ";
  background: #8ca6ec;
  position: absolute;
  top: -163px;
  right: -105px;
  border-radius: 170px;
  opacity: 0.3;
  z-index: 1;
}

.green-banner .banner-wrapper .circle-item-wrapper::before {
  width: 295px;
  height: 185px;
  content: " ";
  background: rgba(0, 156, 131, 0.5);
  position: absolute;
  bottom: -110px;
  left: -180px;
  border-radius: 170px;
  z-index: 1;
}
/*----------------------------- orange banner ---------*/
.promotional-orange-banner {
  cursor: pointer;
  max-height: 170px;
}
.promotional-orange-banner .banner-wrapper::before {
  content: "";
  width: 300px;
  height: 125px;
  background: url("../../../../../img/promotional_card_launcher_bg.svg");
  background-repeat: no-repeat;
  background-position: right 17px;
  background-size: 300px 110px;
  position: absolute;
  bottom: 0;
  right: -35px;
}
.promotional-orange-banner .banner-wrapper {
  background-color: #ffc985;
  border-radius: 4px;
  min-height: 120px;
  position: relative;
  direction: rtl;
  overflow: hidden;
  margin-bottom: 15px;
}
.promotional-orange-banner .banner-wrapper .main-wrapper {
  position: relative;
  padding: 10px 190px;
  overflow: hidden;
  z-index: 2;
  text-align: right;
}
.promotional-orange-banner .banner-wrapper-title {
  font-weight: 500;
  font-size: 2rem;
  line-height: 20px;
  margin: 14px 0 20px 0;
  color: #004f46;
}
.promotional-orange-banner .banner-wrapper-description {
  font-size: 1.8rem;
  line-height: 20px;
  color: #004f46;
}
.promotional-orange-banner .orange-banner-button-wrapper {
  display: grid;
  justify-items: left;
}
.promotional-orange-banner .banner-button {
  width: 200px;
  font-size: 1.4rem;
  padding: 10px 0;
  margin: 14px 0 10px;
  background: #128c7e;
  color: #ffffff;
  -webkit-box-shadow: 0px 4px 8px rgb(0 0 0 / 15%);
  box-shadow: 0px 4px 8px rgb(0 0 0 / 15%);
  border-radius: 4px;
}
.more-buyAds-wrapper {
  float: right;
  width: 100%;
  min-height: 96px;
  position: relative;
}

.more-buyAds-wrapper .spinner-border {
  top: 10px;
  width: 4rem;
  height: 4rem;
  color: #999;
  border-width: 3px;
  left: calc(50% - 25px);
}

.more-buyAds-wrapper p {
  margin-top: 25px;
  color: #999;
}
/*---------------*/
.text-center {
  text-align: center !important;
}

@media screen and (max-width: 991px) {
  .fix-request-header-box,
  .title {
    right: 0;
  }
  .default-list-title {
    padding: 4px 15px;
  }
  .promotional-orange-banner .banner-wrapper::before {
    background: url("../../../../../img/promotional_mobile_card_launcher_bg.svg");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 165px 95px;
    right: 0;
    height: 95px;
  }
  .promotional-orange-banner .banner-wrapper .main-wrapper {
    padding: 10px 65px 10px 5px;
  }
  .green-banner .banner-wrapper::before {
    content: "";
    width: 150px;
    height: 150px;
    background: url("../../../../../img/half-circle-small-right.svg");
    background-position: top, 2px 0;
    background-repeat: no-repeat;
    position: absolute;
    top: -20px;
    right: -35px;
  }
  .green-banner .banner-wrapper::after {
    background: url("../../../../../img/half-circle-large-left-mobile.svg"),
      url("../../../../../img/half-circle-small-left-mobile.svg");
    background-position: 43px 0px, 38px 14px;
    background-repeat: no-repeat;
    position: absolute;
    margin-top: -50px;
    margin-right: -154px;
  }
  .green-banner .banner-wrapper .main-wrapper {
    padding: 7px 16px;
  }
  .green-banner .green-banner-button-wrapper {
    justify-items: right;
  }

  .title h1 span.title-text {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .promotional-orange-banner .banner-wrapper-title {
    font-size: 1.6rem;
    line-height: 24px;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 767px) {
  .title {
    background-color: #ffffff;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 20px;
  }
  .title button.mobile-category-item {
    flex-shrink: 0;
    border: 1px solid #ededed;
    background: #fafafa;
    border-radius: 12px;
    font-size: 1.5rem;
    font-weight: 400;
    color: #707070;
    padding: 3px 15px;
    display: inline-flex;
    height: 32px;
    margin-left: 10px;
  }
  .title button.mobile-category-item i {
    position: relative;
    top: 4px;
    margin-left: 5px;
  }
  .banner-wrapper .main-wrapper {
    padding: 20px 10px;
  }
  .promotional-orange-banner .banner-wrapper-description {
    font-size: 1.4rem;
    line-height: 20px;
  }
  .promotional-orange-banner .orange-banner-button-wrapper {
    justify-items: left;
  }
  .promotional-orange-banner .banner-button {
    width: 127px;
    font-size: 1.4rem;
    padding: 3px 0;
    line-height: 24px;
    margin-top: 16px;
    margin-left: 27px;
  }
  .green-banner .banner-wrapper-title {
    font-size: 1.6rem;
    line-height: 24px;
    margin-bottom: 5px;
  }
  .green-banner .banner-wrapper-description {
    font-size: 1.4rem;
    line-height: 20px;
  }
  .banner-button {
    margin-right: 26px;
  }
  .green-banner .banner-wrapper .circle-item-wrapper {
    left: -20px;
    width: 190px;
    height: 190px;
    top: calc(50% - 48px);
  }

  .buyAd-phone-buttons-wrapper {
    margin-top: 15px;
  }

  .list-title.list-name div.buyer-text {
    text-align: center;
    min-height: 83px;
    display: flex;
    width: 100%;
    align-items: center;
  }

  .list-title.list-name div.buyer-text > div {
    flex: 1;
  }

  .button-wrapper {
    margin: 10px auto;
  }

  .main-content .buyAd-wrapper-item > p {
    padding-top: 10px;
  }
  .lock span.lock-text {
    text-align: center;
    right: 0;
    top: 90px;
  }

  .main-content,
  .wrapper-items {
    padding: 0;
  }
  .list-unstyled {
    padding: 0 15px;
  }
  .requests .main-content {
    padding: 0 0 100px !important;
  }
  .title {
    position: relative;
    z-index: 0;
  }
  .detail-success {
    max-width: 300px;
    margin: 13px auto 0;
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
  .list-title.list-name {
    text-align: center !important;
  }

  .main-content .buyAd-wrapper-item > p.list-notice {
    text-align: left;
    padding-left: 30px;
  }

  .main-content .buyAd-wrapper-item > p.list-time {
    text-align: right;
    padding-right: 30px;
    padding-top: 6px;
  }
}
</style>
<template>
  <div>
    <CategoriesModal :categoryList="categoryList" />
    <div class="requests" v-show="isRequests">
      <section class="main-content col-xs-12 padding-0-15'">
        <div class="title">
          <div class="row">
            <div class="col-xs-12 text-rtl text-right col-sm-8 pull-right">
              <h1>
                <span class="title-text">درخواست های خرید</span>
                <button
                  class="mobile-category-item"
                  @click.prevent="openCategoryModal()"
                >
                  <i class="fa fa-list"></i>
                  دسته ها
                </button>
                <button
                  v-if="filterCategory"
                  class="green-button remove-filter-button"
                  @click.prevent="filterCategory = ''"
                >
                  <span class="red-text remove-filter-icon">
                    <i class="fa fa-times"></i>
                  </span>
                  <span v-text="filterCategory.category_name"></span>
                </button>
              </h1>
            </div>
            <div
              class="
                col-xs-12 col-sm-4
                hidden-xs
                request-update
                pull-left
                text-left
              "
            >
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
          <DownloadAppCard v-if="checkDownloadAppCard()" className="margin-top--10 margin-bottom-10" text="با استفاده از اپلیکیشن باسکول راحت تر به خریداران دسترسی پیدا کنید."/>
          <ul class="list-unstyled wrapper-items">
            <li v-for="(buyAd, index) in buyAds" :key="index">
              <div v-if="buyAd.has_msg || buyAd.has_phone">
                <div
                  class="col-xs-12 green-banner"
                  v-if="index % 9 == 0 && index != 0"
                >
                  <div class="row">
                    <div class="banner-wrapper">
                      <div class="main-wrapper">
                        <p class="banner-wrapper-title">
                          هنوز خریدار محصول خود را پیدا نکرده اید؟!
                        </p>
                        <p class="banner-wrapper-description">
                          با ثبت محصول به لیست خریداران پیشنهادی مخصوص خود ،
                          دسترسی پیدا کنید.
                        </p>
                        <div class="row green-banner-button-wrapper">
                          <router-link
                            :to="{ name: 'registerProductSeller' }"
                            class="btn banner-button hover-effect"
                          >
                            ثبت محصول و یافتن خریدار
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-xs-12 promotional-orange-banner"
                  v-if="
                    index == 3 && currentUser.user_info.active_pakage_type == 0
                  "
                  @click="$router.push({ name: 'dashboardPricingTableSeller' })"
                >
                  <div class="row">
                    <div class="banner-wrapper">
                      <div class="main-wrapper">
                        <p class="banner-wrapper-title">
                          کاربر ویژه باسکول شوید!
                        </p>
                        <p class="banner-wrapper-description">
                          برای دسترسی به خریداران طلایی و شماره های تماس ، حساب
                          کاربری خود را ارتقا دهید.
                        </p>
                        <div class="row orange-banner-button-wrapper">
                          <router-link
                            :to="{ name: 'dashboardPricingTableSeller' }"
                            class="btn banner-button hover-effect"
                          >
                            ارتقا عضویت
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="buyAd-wrapper-item col-xs-12"
                  :class="{
                    golden: buyAd.is_golden,
                    lock:
                      buyAd.is_golden &&
                      currentUser.user_info.active_pakage_type == 0,
                  }"
                >
                  <span
                    v-if="
                      buyAd.is_golden &&
                      currentUser.user_info.active_pakage_type == 0
                    "
                    class="lock-text"
                  >
                    <span> خریدار </span>
                    <span
                      class="brand-text"
                      v-text="buyAd.subcategory_name"
                    ></span>
                    <span> هستم </span>
                  </span>
                  <div class="list-title list-name col-sm-5 col-xs-12">
                    <div class="user-information-wrapper">
                      <div class="user-information-content">
                        <div class="user-content">
                          <i class="fa fa-user-circle"></i>
                          <span
                            class="user-name-link"
                            v-text="buyAd.first_name + ' ' + buyAd.last_name"
                          >
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="buyer-text">
                      <div>
                        <span> خریدار </span>
                        <span
                          class="red-text"
                          v-if="
                            buyAd.is_golden &&
                            currentUser.user_info.active_pakage_type == 0
                          "
                          v-text="'0000'"
                        ></span>
                        <span
                          class="red-text"
                          v-else
                          v-text="getConvertedNumbers(buyAd.requirement_amount)"
                        ></span>

                        <span
                          class="brand-text"
                          v-text="buyAd.subcategory_name"
                        ></span>
                        <span v-if="buyAd.name"> از نوع </span>
                        <span
                          class="brand-text"
                          v-if="buyAd.name"
                          v-text="buyAd.name"
                        ></span>

                        <span> هستم </span>
                      </div>
                    </div>
                  </div>
                  <p
                    v-if="buyAd.reply_capacity > 0"
                    class="list-notice col-sm-1 col-xs-6 pull-right"
                  >
                    <button
                      v-if="
                        buyAd.is_golden &&
                        currentUser.user_info.active_pakage_type == 0
                      "
                      class="btn"
                      type="button"
                    >
                      <span class="gray-text">
                        <i class="fas fa-comment-alt"></i>
                        <i class="fas fa-exclamation"></i>
                      </span>
                      <span class="request-count">{{ "0+" }}</span>
                    </button>
                    <button
                      v-else
                      class="btn"
                      type="button"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="ظرفیت باقی مانده برای ارسال پیام به خریدار این محصول"
                    >
                      <span class="gray-text">
                        <i class="fas fa-comment-alt"></i>
                        <i class="fas fa-exclamation"></i>
                      </span>
                      <span class="request-count">{{
                        buyAd.reply_capacity + "+"
                      }}</span>
                    </button>
                  </p>
                  <p
                    class="list-time"
                    :class="[
                      buyAd.reply_capacity > 0
                        ? 'col-sm-2 col-xs-6'
                        : 'col-sm-3 col-xs-12',
                    ]"
                    v-if="
                      buyAd.is_golden &&
                      currentUser.user_info.active_pakage_type == 0
                    "
                    v-text="'۱۳ تیر , ۱۳۰۴'"
                  ></p>
                  <p
                    class="list-time"
                    :class="[
                      buyAd.reply_capacity > 0
                        ? 'col-sm-2 col-xs-6'
                        : 'col-sm-3 col-xs-12 text-center',
                    ]"
                    v-else
                    v-text="buyAd.register_date"
                  ></p>

                  <div
                    v-if="buyAd.has_phone"
                    class="col-sm-4 col-xs-12 pull-left"
                  >
                    <div class="buyAd-phone-buttons-wrapper">
                      <button
                        v-if="
                          buyAd.is_golden &&
                          currentUser.user_info.active_pakage_type == 0
                        "
                        class="detail-success hover-effect phone-button"
                        :id="'loader-phone-' + buyAd.id"
                        @click.prevent="openGoldenChatRestrictionModal()"
                      >
                        <span>
                          <span class="fas fa-phone-square-alt"></span>
                          تماس با خریدار
                        </span>
                        <span class="hide-reply text-rtl">
                          کمی صبر کنید...
                        </span>
                      </button>
                      <button
                        v-else
                        class="detail-success hover-effect phone-button"
                        @click.prevent="
                          activePhoneCall(buyAd.myuser_id, buyAd.id)
                        "
                        :id="'loader-phone-' + buyAd.id"
                      >
                        <span>
                          <span class="fas fa-phone-square-alt"></span>
                          تماس با خریدار
                        </span>
                        <span class="hide-reply text-rtl">
                          کمی صبر کنید...
                        </span>
                      </button>
                      <button
                        class="detail-success send-message-button hover-effect"
                        @click.prevent="openGoldenChatRestrictionModal()"
                        :id="'loader-chat-' + buyAd.id"
                        v-if="
                          buyAd.is_golden &&
                          currentUser.user_info.active_pakage_type == 0 &&
                          buyAd.has_msg
                        "
                      >
                        <span>
                          <span class="fas fa-comment-alt"></span>
                          چت با خریدار
                        </span>
                        <span class="hide-reply text-rtl">
                          کمی صبر کنید...
                        </span>
                      </button>
                      <button
                        class="detail-success send-message-button hover-effect"
                        @click.prevent="openChat(buyAd)"
                        :id="'loader-chat-' + buyAd.id"
                        v-else-if="buyAd.has_msg"
                      >
                        <span>
                          <span class="fas fa-comment-alt"></span>
                          چت با خریدار
                        </span>
                        <span class="hide-reply text-rtl">
                          کمی صبر کنید...
                        </span>
                      </button>
                    </div>
                    <div
                      :id="buyAd.id + '-phone-number-wrapper'"
                      class="phone-number-wrapper collapse"
                    >
                      <div class="phone-number-content">
                        <a class="phone-number">
                          <p>
                            <i class="fa fa-phone-square-alt"></i>
                            <span class="phone"></span>
                          </p>
                          <p>شماره تماس</p>
                        </a>
                        <div class="warning-wrapper">
                          <p class="warning-title">
                            <i class="fa fa-exclamation-circle"></i>

                            توصیه باسکول
                          </p>
                          <p class="warning-text">
                            توصیه باسکول همواره به انجام معاملات حضوری است.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else class="col-sm-4 col-xs-12 pull-left">
                    <button
                      v-if="
                        buyAd.is_golden &&
                        currentUser.user_info.active_pakage_type == 0
                      "
                      class="detail-success hover-effect"
                      @click.prevent="openGoldenChatRestrictionModal()"
                    >
                      <span :id="'loader-chat-' + buyAd.id">
                        <span>
                          <span class="fas fa-comment-alt"></span>

                          چت با خریدار
                        </span>
                        <span class="hide-reply text-rtl">
                          کمی صبر کنید...
                        </span>
                      </span>
                    </button>
                    <button
                      v-else
                      href
                      class="detail-success hover-effect"
                      @click.prevent="openChat(buyAd)"
                    >
                      <span :id="'loader-chat-' + buyAd.id">
                        <span>
                          <span class="fas fa-comment-alt"></span>

                          چت با خریدار
                        </span>
                        <span class="hide-reply text-rtl">
                          کمی صبر کنید...
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          class="col-xs-12 wrapper-items"
          v-else-if="buyAds.length === 0 && !load"
        >
          <div class="wrapper_no_pro">
            <div class="content_no_pic">
              <img src="../../../../../img/not_found_search.svg" alt="" />
            </div>

            <div class="text_no_pic standard-line text-rtl">
              <p>خریداری یافت نشد!</p>
              <p class="text-description_no_pic">
                درصورتی که این محصول را برای فروش دارید، آن را ثبت کنید.
              </p>
            </div>
            <router-link
              :to="{ name: 'registerProductSeller' }"
              tag="button"
              class="btn-orange-empty-state text-rtl"
            >
              <i class="fas fa-plus"></i> ثبت محصول
            </router-link>
          </div>
        </div>
        <div class="col-xs-12 wrapper-items" v-else-if="load">
          <ul class="list-unstyled">
            <li
              v-for="(item, index) in 5"
              :key="index"
              class="buyAd-wrapper-item col-xs-12"
            >
              <p
                class="
                  default-list-title
                  pull-right
                  col-sm-9
                  hidden-xs
                  margin-10-0
                "
              >
                <span
                  class="placeholder-content content-full-width h-20"
                ></span>
              </p>

              <p
                class="
                  list-title
                  col-sm-2 col-xs-12
                  hidden-md hidden-lg hidden-sm
                "
              >
                <span
                  class="
                    placeholder-content
                    content-half-width
                    h-20
                    margin-auto
                  "
                ></span>
              </p>

              <p class="needs col-sm-4 col-xs-12 hidden-md hidden-lg hidden-sm">
                <span
                  class="
                    placeholder-content
                    content-default-width
                    h-20
                    margin-auto
                  "
                ></span>
              </p>

              <p
                class="
                  list-time
                  col-sm-2 col-xs-12
                  hidden-md hidden-lg hidden-sm
                "
              >
                <span
                  class="placeholder-content content-min-width h-20 margin-auto"
                ></span>
              </p>

              <p class="col-sm-3 col-xs-12">
                <span
                  class="
                    placeholder-content
                    default-button-full-with
                    margin-10-auto
                  "
                ></span>
              </p>
            </li>
          </ul>
        </div>
        <div class="more-buyAds-wrapper" v-if="loadMoreActive">
          <div>
            <div class="spinner-border">
              <span class="sr-only"></span>
            </div>
            <p class="text-center text-rtl">درحال دریافت اطلاعات ...</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../../../router/router";
import swal from "../../../../sweetalert.min.js";
import CategoriesModal from "../../../layouts/main/main_components/categories-modal.vue";
import DownloadAppCard from "../../../layouts/main/download-app-card";

export default {
  props: ["storage"],
  components: {
    CategoriesModal,
    DownloadAppCard,
  },
  data: function () {
    return {
      currentUser: {
        profile: "",
        user_info: "",
      },
      buyAds: "",
      allBuyAds: "",
      filteredBuyAds: "",
      popUpMsg: "",
      load: false,
      textActive: false,
      items: [
        {
          message: "درخواست های جدید",
          url: "buyAdRequests",
        },
      ],
      isRequests: true,
      filterCategory: "",
      emptyItem: 0,
      categoryList: "",
      buyAdPostCount: 20,
      buyAdPostFilterCount: 20,
      loadMoreActive: false,
      continueToLoadProducts: true,
      categoryId: 0,
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
      axios
        .post("/get_category_list", {
          cascade_list: true,
        })
        .then(function (response) {
          self.categoryList = response.data.categories;
        });

      axios
        .post("/get_related_buyAds_list_to_the_seller", {
          from_record_number: self.buyAdPostCount - 20,
          to_record_number: self.buyAdPostCount,
        })
        .then(function (response) {
          self.allBuyAds = response.data.buyAds;
          self.buyAds = self.allBuyAds;

          self.load = false;
          self.infiniteScrollHandler();
          setTimeout(function () {
            $(".list-notice button").tooltip();
          }, 100);
        });
    },
    openChat: function (buyAd) {
      var self = this;

      let id = "#loader-chat-" + buyAd.id;
      self.hideReplyBtn(id);

      axios
        .post("/get_user_permission_for_buyAd_reply", {
          buy_ad_id: buyAd.id,
        })
        .then(function (response) {
          self.showReplyBtn(id);

          if (response.data.permission == true) {
            var contact = {
              contact_id: buyAd.myuser_id,
              first_name: buyAd.first_name,
              last_name: buyAd.last_name,
              profile_photo: null,
              user_name: buyAd.user_name,
              buyAd_id: buyAd.id,
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
    setScrollTo(x, y) {
      window.scrollTo(x, y);
    },
    setScrollToBuyAd(id) {
      let element = $(id);
      let elementTop = element.offset().top;
      let elementHeight = element.height();
      let windowHeight = $(window).height();
      $("html, body").animate(
        {
          scrollTop: elementTop - (windowHeight - elementHeight) / 2,
        },
        300
      );
    },
    /*--------------------------------*/
    infiniteScrollHandler() {
      $(window).scroll(() => {
        if (
          this.$route.name == "buyAdRequestsSeller" &&
          this.continueToLoadProducts
        ) {
          if (
            $(window).scrollTop() + $(window).height() ==
              $(document).height() &&
            !this.loadMoreActive &&
            this.continueToLoadProducts
          ) {
            this.feed();
          }
        }
      });
    },
    disableScroll() {
      window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
      window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
      window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
      window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    },
    feed() {
      this.continueToLoadProducts = true;
      this.loadMoreActive = true;
      let self = this;
      // use 20 because from start as 1 and get 20 item
      if (this.continueToLoadProducts) {
        this.load = true;
      }
      let data = {};
      if (!this.filterCategory) {
        this.buyAdPostCount += 20;
        data = {
          from_record_number: this.buyAdPostCount - 20,
          to_record_number: this.buyAdPostCount,
        };

        axios
          .post("/get_related_buyAds_list_to_the_seller", data)
          .then((response) => {
            if (response.data.buyAds.length > 0) {
              this.allBuyAds = this.allBuyAds.concat(response.data.buyAds);

              this.buyAds = this.allBuyAds;
              this.load = false;
            } else {
              self.continueToLoadProducts = false;
              this.load = false;
            }

            this.loadMoreActive = false;
          });
      } else {
        this.buyAdPostFilterCount += 20;
        axios
          .post("/get_related_buyAds_list_to_the_seller", {
            from_record_number: self.buyAdPostFilterCount - 20,
            to_record_number: self.buyAdPostFilterCount,
            category_id: self.filterCategory.id,
          })
          .then((response) => {
            if (response.data.buyAds.length > 0) {
              self.filteredBuyAds = self.filteredBuyAds.concat(response.data.buyAds);
              self.buyAds = self.filteredBuyAds;
              self.load = false;
              
            } else {
              self.continueToLoadProducts = false;
              self.load = false;
            }
             self.loadMoreActive = false;
          });
      }
    },

    /*------------------------------------*/
    activePhoneCall(buyAdUserId, buyAdId) {
      let id = "#loader-phone-" + buyAdId;

      if ($(id).hasClass("disable")) {
        $(id).removeClass("disable");
      } else {
        $(id).addClass("disable");
      }

      this.hideReplyBtn(id);
      axios
        .post("/get_buyer_phone_number", {
          b_id: buyAdUserId,
          ba_id: buyAdId,
          item: "BUYAD",
        })
        .then((response) => {
          this.$nextTick(() => {
            // this.userPhone = response.data.phone;
            $("#" + buyAdId + "-phone-number-wrapper .phone").text(
              response.data.phone
            );
            $("#" + buyAdId + "-phone-number-wrapper a.phone-number").attr(
              "href",
              "tel:" + response.data.phone
            );
            $("#" + buyAdId + "-phone-number-wrapper").collapse("toggle");
            this.setScrollToBuyAd(id);
            this.showReplyBtn(id);
          });
        })
        .catch((error) => {
          this.showReplyBtn(id);

          $(id).removeClass("disable");
          if (error.response.status == 423) {
            eventBus.$emit(
              "noAccessToBuyerPhone423Error",
              error.response.data.msg
            );
          } else {
            eventBus.$emit(
              "noAccessToBuyerPhoneOtherError",
              error.response.data.msg
            );
          }
        });
    },
    hideReplyBtn: function (id) {
      let itemFirst = id + " span:first-child";
      let itemLast = id + " span:last-child";
      $(itemFirst).hide();
      $(itemLast).show();
    },
    showReplyBtn: function (id) {
      let itemFirst = id + " span:first-child";
      let itemLast = id + " span:last-child";
      $(itemLast).hide();
      $(itemFirst).show();
    },
    openGoldenChatRestrictionModal: function () {
      $("#no-access-to-golden-buyers-modal").modal("show");

      this.registerComponentStatistics(
        "buyAdReply",
        "openChat",
        "permission denied"
      );
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    getConvertedNumbers: function (number) {
      if (number || typeof number === "number") {
        let data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
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
    openCategoryModal() {
      $("#categories-modal").modal("show");
    },
    filterBuyAdByCategory: function () {
      this.scrollToTop();
      let self = this;
      this.load = true;
      this.isRequests = true;
      if (this.filterCategory.id) {
        this.continueToLoadProducts = true;
        this.buyAds = "";
        self.buyAdPostFilterCount = 20;
        axios
          .post("/get_related_buyAds_list_to_the_seller", {
            from_record_number: self.buyAdPostFilterCount - 20,
            to_record_number: self.buyAdPostFilterCount,
            category_id: self.filterCategory.id,
          })
          .then(function (response) {
            if (response.data.buyAds.length > 0) {
              self.filteredBuyAds = response.data.buyAds;
              self.buyAds = self.filteredBuyAds;
              self.load = false;
              self.infiniteScrollHandler();
              setTimeout(function () {
                $(".list-notice button").tooltip();
              }, 100);
            } else {
              self.continueToLoadProducts = false;
              self.buyAds = "";
              self.load = false;
            }
          });
      } else {
        this.buyAds = "";
        this.buyAds = this.allBuyAds;
        this.continueToLoadProducts= true;
      }
      setTimeout(function () {
        $(".list-notice button").tooltip();
      }, 100);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    selectCategoryItem(category, url) {
      this.filterCategory = category;
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
    isOsIOS: function () {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);
      return ios;
    },
    getAndroidVersion: function (ua) {
      ua = (ua || navigator.userAgent).toLowerCase();
      var match = ua.match(/android\s([0-9\.]*)/);
      return match ? match[1] : undefined;
    },
    getCookie: function (cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    checkCurrentUser() {
      if (this.currentUser.user_info) {
        
        return true;
      }
    },
    checkDownloadAppCard() {
      let androidVersion =
          parseInt(this.getAndroidVersion()) >= 5 ? true : false;
        if (
          !this.isOsIOS() &&
          this.isDeviceMobile() &&
          androidVersion &&
          !this.getCookie("downloadAppCard") 
        ) {
          return true;
        } else {
          return false;
        }
    },
  },
  mounted() {
    this.init();

    this.scrollToTop();

    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/buyAd-requests" });
  },
  watch: {
    filterCategory: function () {
      this.filterBuyAdByCategory();
    },
  },
};
</script>