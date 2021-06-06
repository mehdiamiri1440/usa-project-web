<style scoped>
.loading-container {
  display: flex;
  width: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  position: relative;
  align-items: center;
  z-index: 1;
}

.loading-container .lds-ring {
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 50px;
  padding: 4px;
}

.loading-container .lds-ring > div {
  width: 30px;
  height: 30px;
  border-width: 3px;
}

.whatsapp-loading-gif {
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 0%;
  display: flex;
}

.chat-loaded {
  opacity: 1;
}
.chat-loaded.load-more-active {
  padding-top: 80px !important;
}

.contact-is-search img {
  display: block;
  width: 60px;
  margin: 18px auto;
}

.clock-icon {
  font-size: 14px;
}

.check-items {
  padding-left: 10px;
  color: #b2b2b2;
}

.text-blue {
  color: #60caf1;
}

.check-items.dual :last-of-type {
  margin-left: -8px;
}

.message-wrapper .message-contact-title {
  font-size: 16px;
  padding: 7px 15px 8px;
  float: right;
  width: 100%;
  color: #fff;
  background: linear-gradient(-90deg, #21ad93, #4dc0bb);
}

.message-contact-title a {
  color: #fafafa;
  transition: 300ms;
}

.message-contact-title a:hover {
  color: #fff;
  transition: 300ms;
}

.chat-page .bg-wrapper {
  background: url("../../../../img/whatsappbg.png") repeat;
  opacity: 0.06;
  position: absolute;
  z-index: 1;
  left: 15px;
  right: 0;
  top: 50px;
  bottom: 0;
  background-size: contain;
}

.chat-page ul {
  background-color: #e5ddd6;
}

.chat-page ul li {
  position: relative;
  z-index: 1;
}

.message-wrapper .message-contact-title-img {
  width: 35px;
  height: 35px;
  float: right;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  margin-left: 10px;
}

.message-wrapper .message-contact-title-img:hover {
  cursor: pointer;
}

.message-wrapper .message-contact-title a {
  float: right;
  display: block;
  max-width: 300px;
  font-size: 15px;
  color: #fff;
}

.message-wrapper .message-contact-title span:first-of-type {
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 25px;
  overflow: hidden;
  margin-top: 10px;
  float: right;
}

.message-wrapper .message-contact-title span.commetns-link {
  border-radius: 5px;
  padding: 4px 7px;
  margin-right: 12px;
  margin-top: 6px;
  background: #fff;
  color: #23ae94;
  font-size: 13px;
  float: right;
}

.message-wrapper .message-contact-title span.commetns-link i {
  position: relative;
  top: 2px;
  font-size: 12px;
}

.back-state {
  background: none;
  color: #fff;
  border: none;
  font-size: 22px;
  position: relative;
  top: 5px;
  padding: 0 6px;
  float: right;
}

.report-button {
  background: none;
  border: none;
  padding: 7px 0 0px;
  font-size: 13px;
  color: #fff;
}

.message-wrapper .chat-page ul {
  padding: 20px 20px 0;

  overflow-x: hidden;

  position: absolute;

  left: 0;

  right: 0;

  bottom: 50px;

  top: 50px;

  transition: 100ms;
}

.message-wrapper .chat-page ul li {
  width: 100%;
  float: right;
}

.message-wrapper .chat-page ul li:last-of-type {
  margin-bottom: 10px;
}

.message-date {
  text-align: center;
  margin: 20px auto;
  color: #313a43;
  font-size: 14px;
}

.message-date span {
  background: #e1f5fe;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  padding: 3px 10px 0;
  line-height: 1;
}

.message-wrapper .chat-page li > div.message-item-wrapper {
  font-size: 14px;
  line-height: 1.612;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  margin: 0 auto 3px;
  display: inline-block;
  position: relative;
  max-width: 100%;
  min-width: 100px;
}
.message-contents {
  max-width: 455px;
  float: left;
  position: relative;
  margin-top: 20px;
  width: 100%;
}
.message-content-wrapper {
  padding: 5px;
  display: block;
  min-width: 200px;
}
.message-content-wrapper.product-wrapper {
  padding: 5px 10px;
  display: block;
  min-width: 200px;
  border: 2px solid #00c569;
  float: right;
  width: 100%;
  border-radius: 10px;
}
.message-content-wrapper .product-header > p {
  font-size: 17px;
  color: #474747;
  font-weight: 500;
  margin: 13px 0 18px;
}
.message-wrapper .chat-page .message-item-wrapper.message-receive {
  float: left;
  background: #fff;
  border-radius: 0 8px 8px 8px;
  width: 100%;
  position: relative;
  margin-bottom: 5px;
}
.message-wrapper .chat-page .message-receive::after {
  content: "";
  display: block;
  position: absolute;
  left: -6px;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 6px 9px 0;
  border-color: transparent #fff transparent transparent;
  line-height: 0px;
  _border-color: #000000 #fff #000000 #000000;
  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
}
.message-wrapper .chat-page .message-receive.product-item {
  border-radius: 10px;
}
.message-wrapper .chat-page .message-receive.product-item::after {
  display: none;
}

.message-wrapper .chat-page span.message-chat-date {
  text-align: right;
  font-size: 13px;
  padding-top: 3px;
  width: 100%;
  direction: ltr;
  display: block;
  color: #b2b2b2;
}
.product-content-wrapper {
  float: right;
  width: 100%;
  padding: 10px 0;
}
.message-wrapper .chat-page .product-wrapper span.message-chat-date {
  float: right;
  width: 100%;
  border-top: 1px solid #eee;
  margin-top: 2px;
  padding: 5px 0;
}

.product-title {
  font-weight: 500;
  color: #474747;
  padding-top: 3px;
  font-size: 20px;
}

.product-amount i {
  position: relative;
  top: 2px;
}

.product-amount {
  margin-top: 5px;
  font-size: 17px;
  font-weight: 500;
}

.send-message-form {
  overflow: hidden;
  padding: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.send-message-form > button {
  padding: 12px 10px 17px;
  text-align: center;
  width: 100%;
  color: #fff;
  border: none;
  border-top-color: currentcolor;
  border-top-style: none;
  border-top-width: medium;
  border-radius: 0;
  background: #4eb9fb;
  position: relative;
  z-index: 4;
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
}

.send-message-form > button i {
  font-size: 19px;
  position: relative;
  height: 18px;
  line-height: 1;
  top: 2px;
  left: 5px;
}

.send-message-form > button:hover {
  background: #1da1f2;
}

.capture-image {
  position: absolute;
  font-size: 21px;
  background: none;
  border: none;
  color: #919191;
  padding: 7px 15px 7px 10px;
}

#chat-menu-items {
  position: absolute;
  left: 15px;
  z-index: 10;
  width: 170px;
  background: #fff;
  text-align: right;
  direction: rtl;
  border-radius: 4px;
  line-height: 1.618;
  -webkit-box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  top: 48px;
  overflow: hidden;
  padding: 0 !important;
}

#chat-menu-items li:last-of-type button {
  border: none;
}

#chat-menu-items li button i {
  margin-left: 6px;
}

#chat-menu-items li button {
  background: none;
  color: #777;
  font-size: 14px;
  border: none;
  width: 100%;
  padding: 10px;
  text-align: right;
  transition: 200ms;
  border-bottom: 1px solid #dbdbdb;
}
#chat-menu-items li button:hover {
  color: #333;
  background: #eee;
  transition: 200ms;
}

.new-badge {
  position: absolute;
  right: -16px;
  background: #e51c38;
  border-radius: 50px;
  font-size: 12px;
  color: #fff;
  top: -8px;
  line-height: 1;
  padding: 4px 2px;
}

.messenger-notice {
  text-align: center;
  background: #fff8c1;
  padding: 7px;
  border-radius: 8px;
  margin-top: 20px;
  line-height: 1.618;
  color: #777;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
}

.messenger-notice .notice-title {
  font-size: 13px;
}

.message-wrapper .chat-page li > div.notice-actions {
  margin: 3px auto 0;
  box-shadow: none;
}
.messenger-notice .notice-actions button {
  border: none;
  color: #21ad92;
  border-radius: 4px;
  margin: 2px 7px 0;
  background: #fff;
  padding: 2px 15px;
}

.messenger-notice .notice-actions button:hover {
  background: #21ad93;
  border-color: #21ad93;
  color: #fff;
}
.messenger-notice .notice-actions button i {
  margin-left: 7px;
}

.verified-user::before {
  top: 3px;
  left: 3px;
}

.verified-user {
  float: right;
  top: 7px;
  right: 5px;
}

.overlay-bg-guide {
  position: absolute;
  width: 100%;
  z-index: 5;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  bottom: 0;
}
.guide-arrow-item {
  margin-top: 80px;
}

.guide-arrow-item svg {
  max-width: 130px;
  right: 35%;
  position: relative;
}

.guide-text {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 15px;
  line-height: 1.618;
}

.share-button {
  border-radius: 4px;
  border: none;
  width: 100%;
  color: #fff;
  padding: 5px;
  background: rgba(0, 0, 0, 0.4);

  font-size: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  display: block;
  overflow: hidden;
  text-align: center;
}
.share-button i {
  position: relative;
  top: 2px;
  left: 2px;
}

.share-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.share-button.custom-link {
  background: rgba(56, 72, 95, 0.67);

  transition: 0ms;
  padding: 9px;
}

.share-button.custom-link:hover {
  background: rgba(56, 72, 95, 0.9);
  transition: 0ms;
}

.forward-item {
  position: absolute;
  bottom: 0;
  right: -40px;
  background: rgba(0, 0, 0, 0.4);
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 50px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  border: none;
  padding: 0;
  padding-top: 5px;
}

.forward-item:hover {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
}

.chat-spinner-wrapper {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 46px;
  height: 46px;
  background: #fff;
  border-radius: 45px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin: 55px auto 0;
}
.message-text {
  line-height: 1.618;
  white-space: pre-line;
  padding: 0 5px;
  font-size: 16px;
  display: block;
}

.spinner-border {
  color: #00c569;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 3rem;
  height: 3rem;
  border-width: 0.29rem;
}

.valid-user-badge {
  width: 36px;
  height: 38px;
  background: #00c569;
  position: absolute;
  left: 14px;
  top: 0;
  padding: 2px;
  border-top: 3px solid #00b761;
  text-align: center;
  color: #fff !important;
}

.valid-user-badge::after {
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 18px 14px;
  border-color: transparent #00c569 transparent #00c569;
  line-height: 0;
  _border-color: #000000 #000000 #000000 #6980fe;
  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
  content: "";
  position: absolute;
  left: 0;
  bottom: -14px;
}

@media screen and (max-width: 1199px) {
  .message-contents {
    max-width: 423px;
  }

  .message-wrapper .message-contact-title {
    position: relative;
    z-index: 5;
  }
  .message-wrapper .chat-page ul li {
    padding-right: 30px;
  }
}

@media screen and (max-width: 767px) {
  .chat-page .bg-wrapper {
    left: 0;
  }
  #chat-menu-items {
    left: 54px;
  }

  .message-wrapper .message-contact-title {
    padding: 8px;
  }
  .notice-actions {
    width: 100%;
  }
  .messenger-notice .notice-actions button {
    width: 100%;
    text-align: right;
    background: none;
    padding: 5px 0;
  }
  .messenger-notice .notice-actions button:hover {
    background: initial;
    border-color: initial;
    color: #21ad92;
  }
  .message-button-wrapper {
    margin: 0 -10px -5px;
    overflow: hidden;
    border-radius: 0 0 4px 4px;
  }
  .message-button-wrapper button {
    display: block;
    width: 100%;
    background: #21ad93;
    text-align: center;
    color: #fff;
    border: none;
    font-size: 14px;
    padding: 5px;
    margin-top: 8px;
  }
  .message-button-wrapper button i {
    font-size: 11px;
  }
  .is-phone-active-wrapper {
    min-width: 200px;
  }
  .is-phone-active-text {
    font-size: 18px;
  }
}

@media screen and (max-width: 500px) {
  .message-contents {
    max-width: 304px;
  }
  .message-wrapper .message-contact-title a {
    max-width: 190px;
  }

  .message-wrapper .message-contact-title span.commetns-link {
    margin-right: 8px;
    margin-top: 7px;
    padding: 4px;
  }

  .verified-user {
    right: 2px;
  }

  .message-wrapper .message-contact-title-img {
    margin-left: 5px;
  }
}

@media screen and (max-width: 376px) {
  .message-contents {
    max-width: 289px;
  }
}

@media screen and (max-width: 365px) {
  .message-wrapper .message-contact-title a {
    max-width: 180px;
  }
}

@media screen and (max-width: 355px) {
  .message-wrapper .chat-page ul li {
    padding-right: 0;
  }

  .forward-item {
    display: none;
  }

  .message-wrapper .message-contact-title a {
    max-width: 154px;
  }

  .message-wrapper .message-contact-title span.commetns-link {
    margin-right: 6px;
    margin-top: 5px;
  }

  .message-wrapper .message-contact-title-img {
    margin-left: 5px;
  }
  .back-state {
    padding: 0 0px 0 5px;
  }
}
</style>

<template>
  <div class="row">
    <div class="message-contact-title">
      <div class="contact-title-contents pull-right">
        <button
          @click.prevent="$parent.isChanleActive = !$parent.isChanleActive"
          class="back-state hidden-sm hidden-md hidden-lg"
        >
          <i class="fa fa-arrow-right"></i>
        </button>
        <div
          @click.prevent="$parent.isChanleActive = !$parent.isChanleActive"
          class="message-contact-title-img hidden-sm hidden-md hidden-lg"
        >
          <img src="../../../../img/logo/512-buskool-logo.jpg" />
        </div>
        <div tag="div" class="message-contact-title-img hidden-xs">
          <img src="../../../../img/logo/512-buskool-logo.jpg" />
        </div>

        <a href @click.prevent>
          <span> کانال رسمی باسکول </span>
          <button
            @click.prevent
            class="verified-user"
            data-container="body"
            data-toggle="popover"
            data-placement="bottom"
            :data-content="$parent.verifiedUserContent"
            title
          >
            <i class="fa fa-certificate"></i>
          </button>
        </a>
      </div>
    </div>

    <div class="chat-page" v-if="$parent.activeChanel">
      <div class="bg-wrapper"></div>
      <div v-if="loadMoreContacts" class="chat-spinner-wrapper">
        <div class="spinner-border">
          <span class="sr-only"></span>
        </div>
      </div>
      <ul
        :class="[
          isChannelContentLoaded ? 'chat-not-loaded' : 'chat-loaded',
          loadMoreContacts ? 'load-more-active' : '',
        ]"
      >
        <li
          v-if="channelMessages.length == 0 && !isChannelContentLoaded"
          class="messenger-notice"
        >
          <p class="notice-title">
            جدید ترین اخبار و اطلاعیه ها در کانال رسمی باسکول به زودی ارسال
            خواهد شد.
          </p>
        </li>
        <li :key="msg.id" v-for="msg in channelMessages">
          <!-- <div class="message-date" v-if="msg.isDateShow">
            <span>
              {{ msg.created_at | moment("jYYYY/jMM/jDD") }}
            </span>
          </div> -->
          <div class="message-contents">
            <div
              class="message-item-wrapper message-receive"
              :class="{ 'product-item': msg.is_product }"
            >
              <router-link
                target="_blank"
                :to="{ path: getProductUrl(msg) }"
                class="message-content-wrapper product-wrapper"
                v-if="msg.is_product"
              >
                <!-- :to="{ path: getProductUrl(msg) }" -->
                <!-- content image -->
                <div class="product-header">
                  <p>محصول پیشنهادی</p>
                  <div class="valid-user-badge">
                    <div class="wrapper-icon">
                      <svg
                        width="24.965"
                        height="30.574"
                        viewBox="0 0 24.965 30.574"
                      >
                        <g
                          id="buskool-icon"
                          data-name="buskool"
                          transform="translate(-273.1 -715.025)"
                        >
                          <path
                            id="Subtraction_1"
                            data-name="Subtraction 1"
                            d="M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z"
                            transform="translate(2237.1 709.808)"
                            fill="#fff"
                          />
                          <g id="Group_24" data-name="Group 24">
                            <path
                              id="Rectangle_12"
                              data-name="Rectangle 12"
                              d="M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                              transform="translate(282.389 717.5) rotate(45)"
                              fill="#fff"
                            />
                            <path
                              id="Rectangle_13"
                              data-name="Rectangle 13"
                              d="M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z"
                              transform="translate(294.935 718.561) rotate(135)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <message-image
                  :img="msg.file_path"
                  :base="$parent.str"
                  :alt="msg.text"
                  :img-id="msg.id"
                  :is-product="true"
                />
                <div class="product-content-wrapper">
                  <p
                    class="message-text product-title"
                    v-text="getProductInfo(msg.text, true)"
                  ></p>
                  <p class="message-text gray-text product-amount">
                    <span v-text="'موجودی : ' + productAmount(msg.text)"></span>
                  </p>
                </div>
                <span class="message-chat-date">
                  <span v-if="msg.created_at">{{
                    msg.created_at | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                </span>
              </router-link>
              <div class="message-content-wrapper" v-else>
                <!-- content image -->
                <message-image
                  :img="msg.file_path"
                  :base="$parent.str"
                  :alt="msg.text"
                  :img-id="msg.id"
                />
                <span class="message-text" v-text="msg.text"></span>
                <span class="message-chat-date">
                  <span v-if="msg.created_at">{{
                    msg.created_at | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                </span>
              </div>
              <button
                v-if="msg.is_sharable"
                @click.prevent="shareContetn(msg.id)"
                class="forward-item"
              >
                <i class="fa fa-share"> </i>
              </button>
            </div>
            <button
              v-if="msg.is_sharable"
              @click.prevent="shareContetn(msg.id)"
              class="share-button"
            >
              <i class="fa fa-share"></i>
              ارسال برای دوستان
            </button>
            <a
              v-else-if="msg.cta_link"
              :href="msg.cta_link"
              target="_blank"
              class="share-button custom-link"
            >
              <i class="fa fa-link"></i>
              {{ msg.cta_text }}
            </a>
          </div>
        </li>
      </ul>
      <div class="loading-container" v-if="isChannelContentLoaded">
        <div class="image-wrapper">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <!-- <span v-text="alt" class="lds-ring-alt"></span> -->
        </div>
      </div>
      <div class="send-message-form">
        <button class="btn" @click.prevent="shareMyProfile()">
          <i class="fa fa-address-card"> </i>
          ارسال پروفایل تجاری شما به دوستان
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MessageImage from "./messege-image";
import { eventBus } from "../../../router/router";
import magnificPopup from "../../../jquery.magnific-popup.min";
import moment from "vue-jalali-moment";

export default {
  components: {
    MessageImage,
  },
  data() {
    return {
      isImageLoad: false,
      loadMoreContacts: false,
      channelMessages: "",
      channelMessagesTotalCount: 0,
      loadPagesCount: 1,
      listHeight: 0,
      isChannelContentLoaded: false,
    };
  },
  methods: {
    init: function () {
      this.hideCollapses();
      this.getChannelPosts(1);
    },

    hideCollapses: function () {
      $(document).on("click", function (e) {
        /* bootstrap collapse js adds "in" class to your collapsible element*/

        var user_menu_opened = $("#chat-menu-items").hasClass("in");

        if (
          !$(e.target).closest("#chat-menu-items").length &&
          !$(e.target).is("#button-collapse-chat-menu") &&
          user_menu_opened === true
        ) {
          $("#chat-menu-items").collapse("toggle");
        }

        /* bootstrap collapse js adds "in" class to your collapsible element*/
      });
    },
    getChannelPosts() {
      this.isChannelContentLoaded = true;
      axios
        .post("/get_channel_contents", {
          page: this.loadPagesCount,
        })
        .then((response) => {
          this.channelMessagesTotalCount = response.data.total;
          let data = response.data.contents.reverse();
          this.channelMessages = data;
          this.$parent.scrollToEnd(0);
          this.$nextTick(() => {
            this.activeLoadMore();
          });
          this.isChannelContentLoaded = false;
        });
    },
    loadMoreChannelPosts() {
      this.loadPagesCount += 1;
      axios
        .post("/get_channel_contents", {
          page: this.loadPagesCount,
        })
        .then((response) => {
          let data = response.data.contents.reverse();
          if (data.length > 0) {
            this.channelMessages.unshift(...data);
            this.$nextTick(() => {
              this.stopScrollPostition();
            });
          }
        });
    },
    activeLoadMore() {
      let chatPageElementList = $(".chat-page ul");
      this.listHeight = chatPageElementList.prop("scrollHeight");
      chatPageElementList.scroll(() => {
        if (chatPageElementList.scrollTop() == 0 && !this.loadMoreContacts) {
          if (this.channelMessagesTotalCount > this.channelMessages.length) {
            this.loadMoreContacts = true;
            this.loadMoreChannelPosts();
          }
        }
      });

      // loadMoreContacts
    },
    stopScrollPostition() {
      let chatPageElementList = $(".chat-page ul");
      let chatElementHeight = chatPageElementList.prop("scrollHeight");
      chatPageElementList.scrollTop(chatElementHeight - this.listHeight);
      this.listHeight = chatElementHeight;
      this.loadMoreContacts = false;
    },
    shareContetn(contentId) {
      if (this.isDeviceMobile()) {
        let baseUrl = getBase();
        var linkElement = document.createElement("a");
        var Message = baseUrl + "public-channel/" + contentId;
        var messageToWhatsApp = encodeURIComponent(Message);
        var url = "whatsapp://send?text=" + messageToWhatsApp;

        linkElement.setAttribute("href", url);
        linkElement.setAttribute("data-action", "share/whatsapp/share");

        document.body.appendChild(linkElement);

        linkElement.click();

        document.body.removeChild(linkElement);
      } else {
        this.activeShareModal(contentId);
      }
    },
    handleBackKeys: function () {
      this.$parent.isImageOpened = true;
      let self = this;
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $.magnificPopup.close();
      });
      this.$parent.handleBackBtnClickOnDevices();
    },
    resetBackKeys() {
      this.$parent.isImageOpened = false;
      this.$parent.handleBackBtnClickOnDevices();
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
    activeShareModal: function (contentId) {
      let baseUrl = getBase();
      let url = baseUrl + "public-channel/" + contentId;
      eventBus.$emit("shareModalUrl", url);
    },
    getProductInfo(text, isTitle) {
      let splitText = text.split("\n");
      if (isTitle) {
        return splitText[0];
      } else {
        return splitText[1].match(/\d+/)[0];
      }
    },
    productAmount(getAmount) {
      let amount = this.getProductInfo(getAmount, false);
      return this.getConvertedNumbers(amount);
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
    getProductUrl(product) {
      let productName = product.text.split("\n")[0].split("|");
      return (
        "/product-view/خرید-عمده-" +
        productName[1].trim().replace(" ", "-") +
        "/" +
        productName[0].trim().replace(" ", "-") +
        "/" +
        product.product_id
      );
    },

    shareMyProfile() {
      let baseUrl = getBase();

      if (this.isDeviceMobile()) {
        var linkElement = document.createElement("a");
        var Message =
          baseUrl +
          "shared-profile/" +
          this.$parent.currentUser.user_info.user_name;
        var messageToWhatsApp = encodeURIComponent(Message);
        var url = "whatsapp://send?text=" + messageToWhatsApp;

        linkElement.setAttribute("href", url);
        linkElement.setAttribute("data-action", "share/whatsapp/share");

        document.body.appendChild(linkElement);

        linkElement.click();

        document.body.removeChild(linkElement);
      } else {
        let url =
          baseUrl +
          "shared-profile/" +
          this.$parent.currentUser.user_info.user_name;
        eventBus.$emit("shareModalUrl", url);
      }
    },
  },
  mounted: function () {
    this.init();
  },
};
</script>
