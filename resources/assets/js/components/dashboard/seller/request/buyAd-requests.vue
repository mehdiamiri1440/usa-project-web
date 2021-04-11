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
  background: #00c569;
  border: none;
  color: #fff;
  text-align: center;
  border-radius: 8px;
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
.buyAd-phone-buttons-wrapper > .phone-button {
  margin-left: 20px;
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
  z-index: 5;
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
}

.buyAd-phone-buttons-wrapper > .send-message-button:hover {
  background: #404b55;
  color: #fff;
  transition: 300ms;
}

.lock p {
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

.phone-number-wrapper {
  padding: 15px 0 0;
}

.phone-number {
  display: flex;
  justify-content: space-between;
  color: #404b55;
}

.phone-number p {
  font-size: 16px;
  font-weight: bold;
}

.warning-wrapper {
  background: #fffbe5;
  border-radius: 12px;
  direction: rtl;
  padding: 5px 15px 10px;
  margin-top: 15px;
  text-align: right;
  line-height: 1.618;
}

.warning-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.warning-title i {
  font-size: 23px;
  position: relative;
  top: 4px;
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

.banner-wrapper {
  background: linear-gradient(90deg, #060446, #21ad93);
  min-height: 130px;
  position: relative;
  direction: rtl;
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 12px;
}

.banner-wrapper .main-wrapper {
  position: relative;
  padding: 20px 100px;
  overflow: hidden;
  z-index: 1;
  text-align: right;
}

.banner-button {
  width: initial;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 7px;
  background: #1da1f2;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.16);
}

.banner-button i {
  position: relative;
  top: 2px;
  margin-right: 5px;
}

.green-button.banner-button:hover {
  background: #1da1f2;
}

.banner-wrapper .banner-bg-striped {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../../../../img/bg-striped.png") repeat;
  opacity: 0.2;
}

.banner-wrapper p {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: right;
  margin-bottom: 17px;
}

.banner-wrapper .circle-item-wrapper {
  position: absolute;
  left: 100px;
  width: 140px;
  height: 140px;
  background: #fff;
  top: calc(50% - 70px);
  border-radius: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.16);
}

.banner-wrapper .circle-item-wrapper svg {
  flex: 1;
  text-align: center;
  font-size: 89px;
  position: relative;
  left: 9px;
  top: -2px;
  transform: rotate(-8deg);
  color: #595959;
}

.banner-wrapper .circle-item-wrapper::after {
  width: 195px;
  height: 195px;
  content: " ";
  background: #8ca6ec;
  position: absolute;
  top: -163px;
  right: -105px;
  border-radius: 170px;
  opacity: 0.3;
}

.banner-wrapper .circle-item-wrapper::before {
  width: 185px;
  height: 185px;
  content: " ";
  background: rgba(0, 156, 131, 0.5);
  position: absolute;
  bottom: -140px;
  left: -110px;
  border-radius: 170px;
}

@media screen and (max-width: 991px) {
  .fix-request-header-box,
  .title {
    right: 0;
  }
  .default-list-title {
    padding: 4px 15px;
  }
}
@media screen and (max-width: 767px) {
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
    <category-filter v-if="categoryModal" />
    <div
      class="fix-request-bottom hidden-sm hidden-md hidden-lg shadow-content text-center"
    >
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
                  <span class="red-text remove-filter-icon">
                    <i class="fa fa-times"></i>
                  </span>
                  <span
                    v-text="'دسته بندی : ' + filterCategory.category_name"
                  ></span>
                </button>
              </h1>
            </div>
            <div
              class="col-xs-12 col-sm-4 hidden-xs request-update pull-left text-left"
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
          <ul class="list-unstyled wrapper-items">
            <li v-for="(buyAd, index) in buyAds" :key="index">
              <div class="col-xs-12" v-if="index % 9 == 0 && index != 0">
                <div class="row">
                  <div class="banner-wrapper">
                    <div class="banner-bg-striped"></div>
                    <div class="main-wrapper">
                      <p>آیا درخواست مورد نظر خود را پیدا نکرده اید؟</p>
                      <p>محصول خود را ثبت کنید.</p>
                      <router-link
                        :to="{ name: 'registerProductSeller' }"
                        class="btn green-button banner-button hover-effect"
                      >
                        ثبت محصول
                        <i class="fa fa-arrow-left"> </i>
                      </router-link>
                    </div>
                    <div class="circle-item-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="98"
                        height="98"
                        viewBox="0 0 98 98"
                      >
                        <image
                          id="Image_7"
                          data-name="Image 7"
                          width="98"
                          height="98"
                          opacity="0.65"
                          xlink:href="data:image/png;base64,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"
                        />
                      </svg>
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
                <p class="list-notice col-sm-1 col-xs-6 pull-right">
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
                  class="list-time col-sm-2 col-xs-6"
                  v-if="
                    buyAd.is_golden &&
                    currentUser.user_info.active_pakage_type == 0
                  "
                  v-text="'۱۳ تیر , ۱۳۰۴'"
                ></p>
                <p
                  class="list-time col-sm-2 col-xs-6"
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
                      @click.prevent="
                        activePhoneCall(buyAd.myuser_id, buyAd.id)
                      "
                    >
                      <span>
                        <span class="fas fa-phone-square-alt"></span>
                        اطلاعات تماس
                      </span>
                      <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
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

                        اطلاعات تماس
                      </span>
                      <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
                    </button>
                    <button
                      class="detail-success send-message-button hover-effect"
                      @click.prevent="openChat(buyAd)"
                      :id="'loader-chat-' + buyAd.id"
                    >
                      <span>
                        <span class="fas fa-comment-alt"></span>

                        پیام به خریدار
                      </span>
                      <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
                    </button>
                  </div>
                  <div
                    :id="buyAd.id + '-phone-number-wrapper'"
                    class="phone-number-wrapper collapse"
                  >
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

                        هشدار پلیس
                      </p>
                      <p class="warning-text">
                        لطفاً پیش از انجام معامله و هر نوع پرداخت وجه، از صحت
                        کالا یا خدمات ارائه شده، به صورت حضوری اطمینان حاصل
                        نمایید.
                      </p>
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

                        پیام به خریدار
                      </span>
                      <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
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

                        پیام به خریدار
                      </span>
                      <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
                    </span>
                  </button>
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
              <i class="fa fa-list-alt"></i>
            </div>

            <div class="text_no_pic">
              <p>درخواست خرید مرتبط با شما وجود ندارد</p>
            </div>
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
                class="default-list-title pull-right col-sm-9 hidden-xs margin-10-0"
              >
                <span
                  class="placeholder-content content-full-width h-20"
                ></span>
              </p>

              <p
                class="list-title col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm"
              >
                <span
                  class="placeholder-content content-half-width h-20 margin-auto"
                ></span>
              </p>

              <p class="needs col-sm-4 col-xs-12 hidden-md hidden-lg hidden-sm">
                <span
                  class="placeholder-content content-default-width h-20 margin-auto"
                ></span>
              </p>

              <p
                class="list-time col-sm-2 col-xs-12 hidden-md hidden-lg hidden-sm"
              >
                <span
                  class="placeholder-content content-min-width h-20 margin-auto"
                ></span>
              </p>

              <p class="col-sm-3 col-xs-12">
                <span
                  class="placeholder-content default-button-full-with margin-10-auto"
                ></span>
              </p>
            </li>
          </ul>
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
    CategoryFilter,
  },
  data: function () {
    return {
      currentUser: {
        profile: "",
        user_info: "",
      },
      buyAds: "",
      allBuyAds: "",
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
      categoryModal: false,
      filterCategory: "",
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
        .post("/get_related_buyAds_list_to_the_seller")
        .then(function (response) {
          self.allBuyAds = response.data.buyAds;
          self.buyAds = self.allBuyAds;

          self.load = false;
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
    activePhoneCall: function (buyAdUserId, buyAdId) {
      let id = "#loader-phone-" + buyAdId;

      $(id).prop("disabled", true);
      $(id).addClass("disable");

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
            $("#" + buyAdId + "-phone-number-wrapper").collapse("show");
            this.showReplyBtn(id);
          });
        })
        .catch((error) => {
          this.showReplyBtn(id);
          $(id).prop("disabled", false);
          $(id).removeClass("disable");
          swal({
            text: error.response.data.msg,
            icon: "warning",
            className: "custom-swal-with-cancel",
            buttons: {
              close: {
                text: "بستن",
                className: "bg-cancel",
              },
            },
          });
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
      eventBus.$emit("modal", "goldenBuyAdReplyLimit");

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
    openCategoryModal: function () {
      this.categoryModal = true;
      setTimeout(function () {
        $("#fitler-modal").modal("show");
      }, 200);
    },
    filterBuyAdByCategory: function () {
      this.buyAds = "";
      this.isRequests = true;
      if (this.filterCategory.id) {
        let filterBuyAd = this.allBuyAds;
        filterBuyAd = filterBuyAd.filter(
          (buyAd) => buyAd.category_id == this.filterCategory.id
        );
        this.buyAds = filterBuyAd;
      } else {
        this.buyAds = this.allBuyAds;
      }
      setTimeout(function () {
        $(".list-notice button").tooltip();
      }, 100);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.init();
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
