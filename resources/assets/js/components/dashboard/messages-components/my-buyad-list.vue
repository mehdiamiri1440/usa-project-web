<style scoped>
.contact-body .contact-search {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #ffffff;
}

.user-information-content {
  display: block;
  float: right;
  width: 100%;
  background: none;
  border: none;
  padding: 10px 0 3px;
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

.contact-items {
  padding-top: 102px;
}

.buyAds-list-wrapper {
  padding: 15px 5px;
  overflow: hidden;
}

li.contact-item {
  border: 1px solid #dddddd;
  float: right;
  width: 100%;
  padding: 10px 0;
  min-height: 230px;
  border-radius: 12px;
  margin-bottom: 15px;
}

li.contact-item:nth-last-of-type(2n + 1) {
  background: #fdfdfd !important;
}

.contact-items.is-buyer-list {
  padding-top: 60px;
}

.contact-body .contact-search .contact-search-input-wrapper {
  position: relative;
  padding: 10px 7px;
}

.contact-body .contact-search .contact-search-input-wrapper > i {
  position: absolute;
  right: 20px;
  font-size: 16px;
  color: #919191;
  top: 21px;
}

.contact-body .contact-search .contact-search-input-wrapper input {
  padding: 6px 35px 5px 15px;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
}

.contact-body .contact-search .contact-search-input-wrapper > button {
  position: absolute;
  left: 7px;
  font-size: 16px;
  color: #919191;
  top: 13px;
  background: none;
  border: none;
  padding: 7px 15px 1px;
}

.contact-body .contact-image {
  width: 45px;
  height: 45px;
  float: right;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid #f2f2f2;
  position: relative;
}

.contact-body .contact-image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: initial;
  transform: translate(-50%, -50%);
}

.contact-body .contact-item a.download-app {
  font-size: 13px;
  color: #595959;
  overflow: hidden;
  padding: 10px 7px;
  border-bottom: 1px solid #b6b6b6;
  display: block;
  transition: 200ms;
}

.contact-body .contact-item a.download-app:hover,
.contact-body .contact-item a.download-app.active {
  background: #f6f6f6;
  transition: 200ms;
}

.contact-body .contact-item:last-of-type a {
  border-bottom: none;
}

.contact-body .contact-item span.contact-name {
  float: right;
  font-weight: bold;
}
.contact-body .contact-item span.contact-last-message {
  float: right;
  width: calc(100% - 60px);
  font-weight: lighter;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: rtl;
  text-align: right;
}

.contact-body .contact-item .contact-date {
  float: left;
  padding-top: 5px;
  width: 50px;
  direction: ltr;
  text-align: center;
}

.last-message-date {
  display: inline-block;
  height: 17px;
  width: 60px;
  font-size: 10px;
  line-height: 2;
  text-align: center;
}

.count-number {
  display: inline-block;
  height: 17px;
  width: 17px;
  background: #00c569;
  color: #fff;
  border-radius: 50px;
  font-size: 10px;
  line-height: 2;
}
.count-number-wrapper {
  width: 60px;
  float: left;
  text-align: center;
}
.wrapper_no_pro {
  margin-top: 115px;
}
.search-not-found {
  margin-top: 0;
}
.load-more {
  margin: 0px 0 0;
  display: inline-block;
  background: #00c569;
  color: #fff;
  padding: 10px 25px;
  border-radius: 0px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  border: none;
  width: 100%;
}

.verified-user::before {
  top: 3px;
  left: 3px;
}

.contacts-switch-buttons-wrapper {
  float: right;
  width: 100%;
}

.contacts-switch-buttons-wrapper .switch-button-item {
  float: right;
  width: 50%;
}

.contacts-switch-buttons-wrapper .contact-button {
  border: none;
  width: 100%;
  font-size: 13px;
  padding: 8px 0;
  position: relative;
  color: #666;
  background: #f0f0f0;
}

.contacts-switch-buttons-wrapper .contact-button .fa-plus {
  position: relative;
  left: -5px;
  top: -9px;
  color: #00c569;
  font-size: 12px;
}

.contacts-switch-buttons-wrapper .contact-button.active,
.contacts-switch-buttons-wrapper .contact-button:hover {
  background-color: #fff;
  border-bottom: 2px solid #00c569;
  margin-bottom: -2px;
  z-index: 1;
}

i.fa-star {
  font-size: 16px;
  background: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  background-clip: border-box;
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: 2px;
}

.total-unread-messages-badge {
  position: absolute;
  top: -6px;
  background: #e41c38;
  height: 16px;
  width: 30px;
  color: #fff;
  border-radius: 4px;
  left: 5px;
  font-size: 11px;
  line-height: 1;
  padding-top: 2px;
}

.contact-button.active {
  border-radius: 4px 4px 0 0;
}
.buyad-lists-wrapper .contact-item > div {
  text-align: center;
}
.buyad-expire {
  color: #556080;
  min-height: 40px;
}
.buyad-notice {
  color: #aeaeae;
}

.buyAd-buttons-wrapper {
  display: flex;
  padding: 0 10px;
}

.buyAd-buttons-wrapper button.phone-button {
  margin-left: 15px;
}

.buyad-info {
  font-size: 15px;
  padding: 5px;
  font-weight: bold;
  color: #777;
  min-height: 68px;
  padding-top: 15px;
  line-height: 1.618;
}
.buyad-notice.red-text {
  padding-top: 15px;
  padding-bottom: 15px;
}
.buyad-info span {
  color: #556080;
}
.buyad-info span.gray-text {
  color: #777;
}

.contact-body .contact-item .my-contact-info-wrapper {
  float: right;
  padding-top: 7px;
  direction: ltr;
  text-align: left;
  width: calc(100% - 45px);
  padding-right: 8px;
}

.buyad-button {
  background: #00c569;
  color: #fff;
  border-radius: 8px;
  padding: 8px 0;
  max-width: 200px;
  margin: 15px auto;
  transition: 300ms;
  display: block;
  border: none;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
}

button.disable {
  background: #e0e0e0 !important;
}

.buyad-button :hover {
  /* background: #00c569; */
  transition: 300ms;
}

.buyad-button.disable {
  background: #dddddd;
  transition: 300ms;
}

li.golden {
  border: 2px solid rgb(199, 168, 79);
  position: relative;
  padding-right: 20px;
}

.golden .buyad-notice {
  display: inline-block;
  margin-bottom: 15px;
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

li.golden:first-of-type {
  border-top: 2px solid rgb(199, 168, 79);
}

/* li.golden .buyad-info {
  margin-top: 15px;
} */

li.golden .buyad-button,
li.golden .buyad-button:hover {
  color: #333;
  background: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
}

li .buyAd-buttons-wrapper .buyad-button.send-message-button {
  background: none;
  border: 1px solid #404b55;
  color: #404b55;
  transition: 300ms;
}

li .buyAd-buttons-wrapper .buyad-button.send-message-button:hover {
  background: #404b55;
  color: #fff;
  transition: 300ms;
}

.hide-reply {
  display: none;
}
.empty-list i {
  color: #777;
  margin-top: 50px;
  font-size: 50px;
  text-align: center;
}
.empty-list p:first-of-type {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.618;
  margin-top: 11px;
}
.empty-list p:last-of-type {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.618;
  margin-top: 11px;
}

.android-wrapper {
  padding: 150px 15px 15px;
  text-align: center;
}
.android-wrapper p {
  font-size: 15px;
  font-weight: bold;
  color: #333;
  line-height: 1.618;
}
.android-wrapper p.section-contents {
  color: #e51c38;
}
.android-wrapper .section-image {
  max-width: 190px;
  margin: 15px auto;
  padding-left: 25px;
}

.android-wrapper a {
  padding: 12px 50px;
  font-size: 16px;
}

.main-background-buyad {
  filter: blur(6px);
  position: absolute;
  top: 18px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10+ and Edge */
  user-select: none; /* Standard syntax */
  z-index: 0;
  width: 100%;
  left: 0;
  text-align: center;
}
.golden-info-text {
  position: relative;
  z-index: 1;
}
.golden-info-text .buyad-info {
  font-size: 18px;
}

li.static-item {
  margin-bottom: 50px;
  margin-top: 20px;
}

li.static-item > i {
  font-size: 55px;
  display: block;
  text-align: center;
  color: #777;
  margin-top: 15px;
}
li.static-item > button {
  font-size: 14px;
  background: #21ad93;
}
li.static-item > button i {
  position: relative;
  top: 2px;
  right: 3px;
}

.phone-number-wrapper {
  padding: 15px 10px;
  margin: 5px 0;
}

@media screen and (max-width: 991px) {
  .main-content {
    padding: 59px 0 0;
  }
  .main-content.is-fix-alert {
    padding: 89px 0 0;
  }
}
@media screen and (max-width: 768px) {
  .contact-body .contact-search .contact-search-input-wrapper {
    background-color: #ffffff;
  }
  .contact-body .contact-search .contact-search-input-wrapper input {
    border-radius: 4px;
    background-color: #f2f2f2;
    border: 0;
  }
  .contact-body .contact-search .contact-search-input-wrapper > button {
    top: 12px;
  }
}
@media screen and (max-width: 767px) {
  .send-message-form .button-wrapper button {
    padding: 12px 13px;
    font-size: inherit;
  }

  .send-message-form .message-input input {
    padding: 13px 15px;
  }

  .main-content {
    padding: 59px 0 0;
  }

  .main-content.is-fix-alert {
    padding: 85px 0 0;
  }

  .hidden_element {
    display: none;
  }

  .message-wrapper .message-contact-title span {
    padding-top: 6px;

    width: 170px;

    overflow: hidden;

    height: 40px;

    line-height: 1.618;

    text-overflow: ellipsis;

    white-space: nowrap;
  }

  .reply-info p {
    width: 100%;
  }
}

@media screen and (max-width: 370px) {
  .message-wrapper .message-contact-title span {
    width: 130px;
  }
}

@media screen and (max-width: 330px) {
  .message-wrapper .message-contact-title-img {
    margin: 0 15px;
  }

  .message-wrapper .message-contact-title span {
    font-size: 13px;
  }
}
</style>

<template>
  <div class="contact-body my-contacts">
    <div class="contact-search">
      <div class="contact-search-input-wrapper">
        <input
          type="text"
          placeholder=" جستجو پیشنهاد"
          v-model="filterBuyAd"
          @blur="showNavigationMenu"
          @focus="hideNavigationMenu"
        />
        <i class="fa fa-search"></i>
        <button v-if="filterBuyAd" @click.prevent="filterBuyAd = ''">
          <i class="fa fa-times"></i>
        </button>
      </div>
      <div v-if="$parent.userType" class="contacts-switch-buttons-wrapper">
        <div class="switch-button-item">
          <button class="contact-button active">
            <i class="fa fa-star"></i>
            خریداران پیشنهادی
          </button>
        </div>

        <div class="switch-button-item">
          <router-link
            :to="{ name: 'messagesSeller' }"
            tag="button"
            class="contact-button"
          >
            <i class="fas fa-comment-alt"></i>
            پیام ها
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="isConditionSatisfied" class="android-wrapper">
      <p class="section-title">لیست خریداران محصول خود را اینجا ببینید</p>
      <p class="section-image">
        <img src="../../../../img/hand-phone-icon-6.jpg" />
      </p>
      <p class="section-contents">
        برای دسترسی به این قسمت لطفا اپلیکیشن موبایل باسکول را نصب کنید.
      </p>
      <a class="green-button download-app" href @click.prevent="doDownload()">
        دانلود اپلیکیشن</a
      >
    </div>
    <div
      class="image-wrapper"
      v-else-if="
        buyAds.length === 0 && buyAdsGoldenFilter.length == 0 && isLoading
      "
    >
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <!-- <span v-text="alt" class="lds-ring-alt"></span> -->
    </div>
    <div
      v-else-if="
        buyAds.length === 0 &&
        buyAdsGoldenFilter.length == 0 &&
        !isLoading &&
        isSearchingBuyAds == false
      "
      class="not-found-item"
    >
      <div class="wrapper_no_pro">
        <div class="content_no_pic">
          <img src="../../../../img/my_requests_not_found.svg" alt="" />
        </div>

        <div class="text_no_pic standard-line text-rtl">
          <p class="text-title_no_pic">خریدار مرتبطی ندارید!</p>
          <p class="text-description_no_pic">
            برای مشاهده خریداران مرتبط، ابتدا محصول خود را ثبت کنید.
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

    <div
      v-else-if="
        isSearchingBuyAds == true &&
        buyAdsFilter.length === 0 &&
        buyAdsGoldenFilter.length == 0
      "
      class="contact-items buyad-lists-wrapper"
    >
      <div>
        <div class="wrapper_no_pro search-not-found">
          <div class="content_no_pic">
            <img src="../../../../img/not_found_search.svg" alt="" />
          </div>

          <div class="text_no_pic standard-line text-rtl">
            <p class="text-title_no_pic">خریداری یافت نشد!</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="contact-items col-xs-12 buyad-lists-wrapper">
      <div class="row">
        <ul class="buyAds-list-wrapper">
          <li
            class="contact-item golden"
            v-for="(buyAd, index) in buyAdsGoldenFilter"
            :key="'golden-' + index"
            :id="'item-' + buyAd.id"
          >
            <div v-if="$parent.currentUser.user_info.active_pakage_type > 0">
              <div class="user-information-wrapper col-xs-12">
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
              <div class="buyad-main col-xs-12">
                <div class="row">
                  <p class="buyad-info">
                    خریدار
                    <span
                      class="red-text"
                      v-if="buyAd.requirement_amount < 1000"
                      v-text="buyAd.requirement_amount + 'کیلوگرم'"
                    ></span>
                    <span
                      class="red-text"
                      v-else-if="buyAd.requirement_amount == 1000"
                      >یک تن</span
                    >
                    <span
                      v-else
                      class="red-text"
                      v-text="
                        getNumberWithCommas(buyAd.requirement_amount / 1000) +
                        ' تن '
                      "
                    ></span>
                    <span v-text="buyAd.subcategory_name"></span>
                    <span v-if="buyAd.name" class="gray-text"> از نوع </span>
                    <span v-if="buyAd.name" v-text="buyAd.name"></span>
                    <span class="gray-text"> هستم </span>
                  </p>
                  <p class="buyad-notice">
                    درصورت داشتن این محصول به من پیام دهید.
                  </p>

                  <div v-if="buyAd.has_phone">
                    <div class="buyAd-buttons-wrapper">
                      <button
                        @click="activePhoneCall(buyAd.buyer_id, buyAd.id)"
                        class="buyad-button golden-button phone-button"
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
                        @click="openChat(buyAd)"
                        class="buyad-button golden-button send-message-button"
                        :id="'loader-chat-' + buyAd.id"
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
                  <button
                    v-else
                    @click="openChat(buyAd)"
                    class="buyad-button golden-button"
                    :id="'loader-chat-' + buyAd.id"
                  >
                    <span>
                      <span class="fas fa-comment-alt"></span>
                      چت با خریدار
                    </span>
                    <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
                  </button>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="user-information-wrapper col-xs-12">
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
              <div class="buyad-main col-xs-12">
                <div class="main-background-buyad">
                  <p class="buyad-info">
                    این درخواست فقط برای
                    <span class="red-text"> کاربران ویژه </span>
                    قابل نمایش است
                  </p>
                  <p class="buyad-notice">
                    برای مشاهده لطفا حساب کاربری خود را ارتقا دهد
                  </p>
                </div>
                <div class="row golden-info-text">
                  <p class="buyad-info">
                    خریدار

                    <span v-text="buyAd.subcategory_name"></span>
                    <span v-if="buyAd.name" class="gray-text"> از نوع </span>
                    <span v-if="buyAd.name" v-text="buyAd.name"></span>
                    <span class="gray-text"> هستم </span>
                  </p>
                  <div class="buyAd-buttons-wrapper" v-if="buyAd.has_phone">
                    <button
                      @click="openGoldenChatRestrictionModal()"
                      class="buyad-button golden-button phone-button"
                      :id="'loader-phone-' + buyAd.id"
                    >
                      <span>
                        <span class="fas fa-phone-square-alt"></span>
                        تماس با خریدار
                      </span>
                      <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
                    </button>
                    <button
                      @click="openGoldenChatRestrictionModal()"
                      class="buyad-button send-message-button"
                    >
                      <i class="fas fa-comment-alt"></i>
                      چت با خریدار
                    </button>
                  </div>
                  <button
                    v-else
                    @click="openGoldenChatRestrictionModal()"
                    class="buyad-button"
                  >
                    <i class="fas fa-comment-alt"></i>
                    چت با خریدار
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li
            class="contact-item"
            v-for="(buyAd, index) in buyAdsFilter"
            :key="index"
            :id="'item-' + buyAd.id"
          >
            <div v-if="!buyAd.expired">
              <div class="user-information-wrapper col-xs-12">
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
              <div class="buyad-main col-xs-12">
                <div class="row">
                  <p class="buyad-info">
                    خریدار
                    <span
                      class="red-text"
                      v-if="buyAd.requirement_amount < 1000"
                      v-text="buyAd.requirement_amount + ' کیلوگرم '"
                    ></span>
                    <span
                      class="red-text"
                      v-else-if="buyAd.requirement_amount == 1000"
                      >یک تن</span
                    >
                    <span
                      v-else
                      class="red-text"
                      v-text="
                        getNumberWithCommas(buyAd.requirement_amount / 1000) +
                        ' تن '
                      "
                    ></span>
                    <span v-text="buyAd.subcategory_name"></span>
                    <span v-if="buyAd.name" class="gray-text"> از نوع </span>
                    <span v-if="buyAd.name" v-text="buyAd.name"></span>
                    <span class="gray-text"> هستم </span>
                  </p>
                  <p class="buyad-expire">
                    <span class="red-text">
                      <i class="fas fa-hourglass-half"></i>
                      <span v-text="buyAd.remaining_time + ' ساعت '"></span>
                    </span>
                    دیگر فرصت پاسخ گویی شما به این خریدار
                  </p>
                  <p class="buyad-notice">
                    درصورت داشتن این محصول به من پیام دهید.
                  </p>
                  <div v-if="buyAd.has_phone">
                    <div class="buyAd-buttons-wrapper">
                      <button
                        @click="activePhoneCall(buyAd.buyer_id, buyAd.id)"
                        class="buyad-button phone-button"
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
                        @click="openChat(buyAd)"
                        class="buyad-button send-message-button"
                        :id="'loader-chat-' + buyAd.id"
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
                  <button
                    v-else
                    @click="openChat(buyAd)"
                    class="buyad-button"
                    :id="'loader-chat-' + buyAd.id"
                  >
                    <span>
                      <span class="fas fa-comment-alt"></span>
                      چت با خریدار
                    </span>
                    <span class="hide-reply text-rtl"> کمی صبر کنید... </span>
                  </button>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="user-information-wrapper col-xs-12">
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
              <div class="buyad-main col-xs-12">
                <div class="row">
                  <p class="buyad-info">
                    خریدار
                    <span
                      class="red-text"
                      v-if="buyAd.requirement_amount < 1000"
                      v-text="buyAd.requirement_amount + ' کیلوگرم '"
                    ></span>
                    <span
                      class="red-text"
                      v-else-if="buyAd.requirement_amount == 1000"
                      >یک تن</span
                    >
                    <span
                      v-else
                      class="red-text"
                      v-text="
                        getNumberWithCommas(buyAd.requirement_amount / 1000) +
                        ' تن '
                      "
                    ></span>
                    <span v-text="buyAd.subcategory_name"></span>
                    <span v-if="buyAd.name" class="gray-text"> از نوع </span>
                    <span v-if="buyAd.name" v-text="buyAd.name"></span>
                    <span class="gray-text"> هستم </span>
                  </p>

                  <p class="buyad-notice red-text">
                    فرصت پاسخ گویی شما به این خریدار به پایان رسیده است
                  </p>
                  <button class="buyad-button disable">
                    <i class="fas fa-comment-alt"></i>
                    چت با خریدار
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li class="col-xs-12 static-item">
            <i class="fa fa-list-alt"></i>
            <router-link
              tag="button"
              class="buyad-button"
              :to="{ name: 'buyAdRequestsSeller' }"
            >
              همه درخواست های خرید
              <i class="fa fa-arrow-left"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script >
import { eventBus } from "../../../router/router";
import swal from "../../../sweetalert.min.js";
import termsVue from "../seller/product/register-product-steps/terms.vue";

export default {
  data: function () {
    return {
      buyAds: "",
      buyAdsGolden: "",
      buyAdsGoldenFilter: "",
      buyAdsFilter: "",
      isLoading: false,
      isConditionSatisfied: false,
      filterBuyAd: "",
      isSearchingBuyAds: false,
    };
  },
  methods: {
    init() {
      this.getBuyAds();
      this.isOsAndroid();
    },
    getBuyAds() {
      this.isLoading = true;
      axios.post("/get_my_buyAd_suggestions").then((response) => {
        this.buyAds = response.data.buyAds;
        this.buyAdsGolden = response.data.golden_buyAds;

        this.buyAdsGoldenFilter = this.buyAdsGolden;
        this.filterBuyAdBySearch();
        this.isLoading = false;
      });
    },
    activeComponentTooltip() {
      $(".verified-user")
        .popover({ trigger: "manual", html: true, animation: false })
        .on("mouseenter", function () {
          var _this = this;
          $(".popover").on("mouseleave", function () {
            $(this).popover("show");
            $(_this).popover("hide");
          });
        })
        .on("mouseleave", function () {
          var _this = this;
          setTimeout(function () {
            if (!$(".popover:hover").length) {
              $(_this).popover("hide");
            }
          }, 300);
        });
    },
    openChat: function (buyAd) {
      var self = this;
      let id = "#loader-0";
      id = "#loader-chat-" + buyAd.id;
      self.hideReplyBtn(id);
      axios
        .post("/get_user_permission_for_buyAd_reply", {
          buy_ad_id: buyAd.id,
        })
        .then(function (response) {
          self.showReplyBtn(id);

          if (response.data.permission == true) {
            var contact = {
              contact_id: buyAd.buyer_id,
              first_name: buyAd.first_name,
              last_name: buyAd.last_name,
              profile_photo: null,
              user_name: buyAd.user_name,
              buyAd_id: buyAd.id,
            };

            eventBus.$emit("ChatInfo", contact);

            self.registerComponentStatistics(
              "suggestedBuyAdReply",
              "openChat",
              "click on open chatBox"
            );
          } else {
            eventBus.$emit("modal", "buyAdReplyLimit");
            self.registerComponentStatistics(
              "suggestedBuyAdReply",
              "openChat",
              "permission denied"
            );
          }
        });
    },
    setScrollToBuyAd(id) {
      var note = document.getElementById("item-" + id);
      var screenPosition = note.getBoundingClientRect();
      $(".contact-body.my-contacts").animate(
        {
          scrollTop:
            $(".contact-body.my-contacts").scrollTop() +
            screenPosition.top -
            159,
        },
        300
      );
    },
    activePhoneCall: function (buyAdUserId, buyAdId) {
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
            $("#" + buyAdId + "-phone-number-wrapper .phone").text(
              response.data.phone
            );
            $("#" + buyAdId + "-phone-number-wrapper a.phone-number").attr(
              "href",
              "tel:" + response.data.phone
            );
            $("#" + buyAdId + "-phone-number-wrapper").collapse("toggle");
            this.setScrollToBuyAd(buyAdId);
            this.showReplyBtn(id);
          });
        })
        .catch((error) => {
          this.showReplyBtn(id);
          $(id).prop("disabled", false);
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
    openGoldenChatRestrictionModal: function () {
      eventBus.$emit("modal", "goldenBuyAdReplyLimit");

      this.registerComponentStatistics(
        "suggestedBuyAdReply",
        "openChat",
        "permission denied"
      );
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

    isOsIOS: function () {
      var userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);
      return ios;
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
    getAndroidVersion: function (ua) {
      ua = (ua || navigator.userAgent).toLowerCase();
      var match = ua.match(/android\s([0-9\.]*)/);
      return match ? match[1] : undefined;
    },
    isOsAndroid: function () {
      let self = this;
      if (this.isDeviceMobile() && !this.isOsIOS()) {
        let androidVersion = this.getAndroidVersion();
        if (parseInt(androidVersion) >= 5) {
          // this.isConditionSatisfied = true;
        }
      }
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    filterBuyAdBySearch: function () {
      this.buyAdsFilter = this.buyAds.filter((buyAd) => {
        var text = this.filterBuyAd.split(" ");
        return text.every(function (el) {
          if (
            buyAd.first_name.indexOf(el) > -1 ||
            buyAd.last_name.indexOf(el) > -1 ||
            buyAd.name.indexOf(el) > -1 ||
            buyAd.subcategory_name.indexOf(el) > -1
          ) {
            return true;
          } else return false;
        });
      });
      this.buyAdsGoldenFilter = this.buyAdsGolden.filter((buyAd) => {
        var text = this.filterBuyAd.split(" ");
        return text.every(function (el) {
          if (
            buyAd.first_name.indexOf(el) > -1 ||
            buyAd.last_name.indexOf(el) > -1 ||
            buyAd.name.indexOf(el) > -1 ||
            buyAd.subcategory_name.indexOf(el) > -1
          ) {
            return true;
          } else return false;
        });
      });
    },
    doDownload: function () {
      //ga
      this.registerComponentStatistics(
        "download",
        "app download btn",
        "download app btn in popUp"
      );
      // code here
      this.createCookie("downloadAppModal", true, 60 * 24);
      window.location.href =
        "https://app-download.s3.ir-thr-at1.arvanstorage.com/buskool.apk";
    },
    createCookie: function (name, value, minutes) {
      if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + minutes * 60 * 1000);
        var expires = "; expires=" + date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name + "=" + value + expires + "; path=/";
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
    showNavigationMenu() {
      if (screen.width < 992) {
        if (document.querySelector(".custom-navigation")) {
          setTimeout(() => {
             document.querySelector(".custom-navigation").style.display = "block";
          }, 50);
        }
      }
    },
    hideNavigationMenu() {
      if (screen.width < 992) {
       
          if (document.querySelector(".custom-navigation")) {
            document.querySelector(".custom-navigation").style.display = "none";
          }
        
      }
    },
  },
  watch: {
    "$parent.contactList": function () {
      if (this.$parent.contactList) {
        setTimeout(() => {
          this.activeComponentTooltip();
        }, 10);
      }
    },
    filterBuyAd: function () {
      if (this.filterBuyAd != "") {
        this.isSearchingBuyAds = true;
        this.filterBuyAdBySearch();
      } else {
        this.buyAdsFilter = this.buyAds;
        this.buyAdsGoldenFilter = this.buyAdsGolden;
        this.isSearchingBuyAds = false;
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>
