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
  left: 0;
  right: 0;
  top: 50px;
  bottom: 60px;
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

.message-wrapper .message-contact-title img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: initial;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.message-wrapper .message-contact-title a {
  float: right;
  display: block;
  max-width: 300px;
  font-size: 15px;
  color: #fff;
}

.message-wrapper .message-contact-title span:first-of-type {
  max-width: 190px;
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
  padding: 20px;

  overflow-x: hidden;

  position: absolute;

  left: 0;

  right: 0;

  bottom: 60px;

  top: 50px;

  transition: 100ms;
}

.message-wrapper .chat-page ul li {
  width: 100%;
  float: right;
}

.message-wrapper .chat-page ul li:last-of-type {
  margin-bottom: 20px;
}

.message-date {
  text-align: center;
  margin: 10px auto;
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
.message-content-wrapper {
  max-width: 455px;
  padding: 5px 10px;
  display: block;
}
.message-wrapper .chat-page .message-item-wrapper.message-receive {
  float: left;
  background: #fff;
  border-radius: 0 8px 8px 8px;
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

.message-wrapper .chat-page .message-item-wrapper.message-send {
  float: right;
  background: #dcf8c6;
  border-radius: 8px 0 8px 8px;
}

.message-wrapper .chat-page .message-send::after {
  content: "";
  display: block;
  position: absolute;
  right: -6px;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 9px 6px 0 0;
  border-color: #dcf8c6 transparent transparent transparent;
  line-height: 0px;
  _border-color: #dcf8c6 #000000 #000000 #000000;
  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
}

.message-wrapper .chat-page span.message-chat-date {
  text-align: right;
  font-size: 11px;
  padding-top: 3px;
  width: 100%;
  direction: ltr;
  display: block;
  color: #b2b2b2;
}

.send-message-form {
  overflow: hidden;
  padding: 10px 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #f0f0f0;
}

.message-input {
  float: left;
  width: calc(100% - 50px);
}

.send-message-form .message-input input {
  border-radius: 50px;
  background: #fff;
  border: none;
  padding: 7px 50px 8px 15px;
  transition: 150ms;
}

.send-message-form .message-input input.padding-default {
  transition: 150ms;
  padding: 7px 15px 8px 15px;
}

.capture-image {
  position: absolute;
  font-size: 21px;
  background: none;
  border: none;
  color: #919191;
  padding: 7px 15px 7px 10px;
}

.button-wrapper {
  float: right;
  line-height: 1.1;
  position: relative;
}

.send-message-form .button-wrapper .item-wrapper {
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);
  border-radius: 35px;
}

.send-message-form .button-wrapper .item-wrapper .send-message-button {
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  height: 40px;
  position: absolute;
  right: calc(50% - 21px);
  padding: 7px 0 0;
}

.send-message-form .button-wrapper .voice-message-button {
  position: absolute;
  right: 0;
  left: 0;
  top: 0px;
  background: none;
  border: none;
  font-size: 19px;
  bottom: 0;
  padding: 4px 13px 0;
}

.button-wrapper .send-message-button svg {
  width: 19px;
  height: 19px;
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

@media screen and (max-width: 1199px) {
  .message-wrapper .message-contact-title {
    position: relative;
    z-index: 5;
  }
}

@media screen and (max-width: 767px) {
  .guide-arrow-item {
    margin-top: 120px;
  }

  .overlay-bg-guide {
    top: -60px;
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
  .message-wrapper .message-contact-title a {
    max-width: 190px;
  }

  .message-wrapper .message-contact-title span:first-of-type {
    max-width: 100px;
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

@media screen and (max-width: 365px) {
  .message-wrapper .message-contact-title a {
    max-width: 180px;
  }

  .message-wrapper .message-contact-title span:first-of-type {
    max-width: 90px;
  }
}

@media screen and (max-width: 355px) {
  .message-wrapper .message-contact-title a {
    max-width: 154px;
  }

  .message-wrapper .message-contact-title span:first-of-type {
    max-width: 66px;
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
          @click.prevent="$parent.selectedContact = !$parent.selectedContact"
          class="back-state hidden-sm hidden-md hidden-lg"
        >
          <i class="fa fa-arrow-right"></i>
        </button>
        <div
          @click.prevent="$parent.selectedContact = !$parent.selectedContact"
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
      <ul
        :class="[
          $parent.isChatMessagesLoaded && $parent.isFirstMessageLoading
            ? 'chat-not-loaded'
            : 'chat-loaded',
        ]"
      >
        <li
          :key="msg.id"
          v-for="(msg, index) in $parent.chatMessages"
          :class="{ 'margin-top-10': checkMessageName(index, index - 1) }"
        >
          <div class="message-date" v-if="msg.isDateShow">
            <span>
              {{ msg.created_at | moment("jYYYY/jMM/jDD") }}
            </span>
          </div>
          <div class="message-item-wrapper message-send">
            <div class="message-content-wrapper">
              <span v-text="msg.text"></span>
              <span class="message-chat-date">
                <span v-if="msg.created_at">{{
                  msg.created_at | moment("HH:mm")
                }}</span>
                <span v-else>{{ Date() | moment("HH:mm") }}</span>
                <span
                  class="check-items"
                  v-if="
                    msg.sender_id === $parent.currentUserId && !msg.created_at
                  "
                >
                  <i class="far fa-clock"></i>
                </span>
                <span
                  class="check-items dual"
                  v-else-if="
                    msg.sender_id === $parent.currentUserId && msg.created_at
                  "
                >
                  <i
                    class="fa fa-check"
                    v-if="msg.is_read"
                    :class="{ 'text-blue': msg.is_read }"
                  ></i>
                  <i class="fa fa-check text-blue"></i>
                </span>
              </span>
            </div>
          </div>
        </li>
        <li
          v-if="$parent.isNoticeActive && !$parent.isChatMessagesLoaded"
          class="messenger-notice"
        >
          <p class="notice-title">
            اطلاعات هویتی این کاربر
            <span class="red-text" v-if="!$parent.isCurrentUserVerified"
              >مانند اطلاعات هویتی شما</span
            >
            نزد باسکول احراز <span class="red-text"> نشده </span> است.
          </p>
          <div class="notice-actions">
            <button @click="$parent.setNoticeCookie()">متوجه شدم</button>
            <router-link tag="button" :to="{ name: 'verificationInfo' }">
              <i class="fa fa-info"></i>
              اطلاعات بیشتر
            </router-link>
          </div>
        </li>
      </ul>
      <div
        class="loading-container"
        v-if="$parent.isChatMessagesLoaded && $parent.isFirstMessageLoading"
      >
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
      <!-- <div class="send-message-form">
        <form @v-on:submit.prevent="$parent.sendMessage()">
          <div class="message-input">
            <input
              class="padding-default"
              type="text"
              placeholder="پیغامی بگذارید "
              v-model="$parent.msgToSend"
            />
          </div>

          <div class="button-wrapper">
            <div class="item-wrapper">
              <button
                type="submit"
                class="send-message-button scale-up-center-full"
                @click.prevent="$parent.sendMessage()"
              >
                @click.prevent="$parent.sendMessage()"
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13.347"
                  height="12.766"
                  viewBox="0 0 13.347 12.766"
                >
                  <path
                    id="send-message-icon"
                    data-name="send-message-icon"
                    d="M2511.158-3909.893l12.347-5.929-12.347-5.837.235,4.51,10.029,1.327-10.029,1.477Z"
                    transform="translate(-2510.658 3922.159)"
                    fill="#fff"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVoiceRecord: false,
      isChat: false,
    };
  },
  methods: {
    init: function () {
      this.hideCollapses();
      this.getChannelPosts();
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
    getChannelPosts() {},
  },
  mounted: function () {
    this.init();
  },
  watch: {
    "$parent.msgToSend"(value) {
      if (value) {
        this.isChat = true;
      } else {
        this.isChat = false;
      }
    },
    "$parent.isGuideActive"(value) {
      if (value) {
        setTimeout(() => {
          this.$parent.setUserGuideCookie();
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
    },
  },
};
</script>
