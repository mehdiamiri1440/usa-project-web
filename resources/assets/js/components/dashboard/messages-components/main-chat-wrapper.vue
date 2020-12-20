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

/* Hide scrollbar for Chrome, Safari and Opera */
.chat-loaded::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.chat-loaded {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
  background: #f0f0f0;
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
  background-size: 50%;
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

.message-wrapper .message-contact-title img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: initial;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.message-wrapper .message-contact-title span {
  float: right;
  display: block;
  margin-top: 7px;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 25px;
  overflow: hidden;
  max-width: 135px;
  font-size: 15px;
  color: #919191;
}

.back-state {
  background: none;
  color: #fff;
  border: none;
  font-size: 22px;
  position: relative;
  top: 5px;
  padding: 0;
  padding-right: 10px;
}

.report-button {
  background: #fff;
  color: #777;
  padding: 3px 12px 0px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  position: relative;
  top: 3px;
}

.message-wrapper .chat-page ul {
  padding: 20px 70px;

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
  width: calc(100% - 60px);
}

.send-message-form .message-input input {
  border-radius: 50px;
  background: #fff;
  border: none;
  padding: 8px 15px;
}

.button-wrapper {
  float: right;
  line-height: 1.1;
}

.button-wrapper svg {
  height: 21px;
  position: relative;
  right: -2px;
  top: 4px;
}

.send-message-form .button-wrapper button {
  float: right;

  width: 40px;

  height: 40px;

  color: #fff;

  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);

  border: none;

  border-radius: 35px;

  padding: 0 10px;
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

.img-wrapper {
  margin: auto -5px;
  border-radius: 4px;
  overflow: hidden;
  max-height: 330px;
}

@media screen and (max-width: 767px) {
  #chat-menu-items {
    left: 54px;
  }

  .messenger-notice {
    margin: 20px -20px;
    border-radius: 0;
    background: #fcfaf8;
    text-align: right;
    padding: 7px 15px;
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
@media screen and (max-width: 345px) {
  .message-wrapper .message-contact-title-img {
    margin-left: 10px;
  }

  .message-wrapper .message-contact-title span {
    width: 115px;
  }
}
</style>

<template>
  <div class="row">
    <div class="message-contact-title">
      <div class="contact-title-contents pull-right">
        <div class="message-contact-title-img">
          <img
            v-if="$parent.selectedContact.profile_photo"
            :src="$parent.str + '/' + $parent.selectedContact.profile_photo"
            :alt="$parent.selectedContact.first_name[0]"
          />

          <img v-else src="../../../../img/user-defult.png" />
        </div>

        <router-link
          :to="{ path: '/profile/' + $parent.selectedContact.user_name }"
        >
          <span>
            {{
              $parent.selectedContact.first_name +
              " " +
              $parent.selectedContact.last_name
            }}
            <button
              v-if="$parent.selectedContact.is_verified"
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
          </span>
        </router-link>
      </div>
      <div class="head-action-buttons pull-left">
        <div class="head-action-buttons pull-left">
          <button
            type="button"
            class="report-button hover-effect"
            data-toggle="collapse"
            id="button-collapse-chat-menu"
            href="#chat-menu-items"
            role="button"
          >
            <i class="fa fa-ellipsis-h"></i>
            <!-- <i class="new-badge">جدید</i> -->
          </button>
          <button
            @click.prevent="$parent.selectedContact = !$parent.selectedContact"
            class="back-state hidden-sm hidden-md hidden-lg"
          >
            <i class="fa fa-arrow-left"></i>
          </button>

          <ul id="chat-menu-items" class="collapse">
            <li class="list-item">
              <button
                type="button"
                @click.prevent="
                  $parent.activeReportModal($parent.selectedContact.contact_id)
                "
              >
                <i class="fas fa-exclamation-circle"></i>
                گزارش تخلف
              </button>
            </li>
            <li v-if="$parent.userAllowedReview" class="list-item">
              <button
                type="button"
                @click.prevent="$parent.activeReviewModal()"
              >
                <i class="fas fa-star"></i>
                ثبت نظر
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="chat-page" v-if="$parent.selectedContact">
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
          <div
            class="message-item-wrapper"
            :class="[
              checkMessageListClass(msg.sender_id)
                ? 'message-send'
                : 'message-receive',
            ]"
          >
            <div
              v-if="msg.is_phone && !checkMessageListClass(msg.sender_id)"
              class="message-content-wrapper is-phone-active-wrapper"
            >
              <!--msg.created_at | moment("jYY/jMM/jDD, HH:mm") -->
              <a
                :href="'tel:' + msg.text"
                class="hidden-sm hidden-md hidden-lg"
              >
                <span class="is-phone-active-text">
                  {{ msg.text }}
                </span>
                <span class="message-chat-date">
                  <span v-if="msg.created_at">{{
                    msg.created_at | moment("HH:mm")
                  }}</span>
                  <span v-else>{{ Date() | moment("HH:mm") }}</span>
                  <div class="message-button-wrapper">
                    <button>
                      <i class="fa fa-phone-alt"></i>
                      تماس
                    </button>
                  </div>
                </span>
              </a>
              <div class="message-content-wrapper hidden-xs">
                <span v-text="msg.text"></span>
                <span class="message-chat-date">
                  <span v-if="msg.created_at">{{
                    msg.created_at | moment("HH:mm")
                  }}</span>
                  <span v-else>{{ Date() | moment("HH:mm") }}</span>
                </span>
              </div>
            </div>

            <div v-else class="message-content-wrapper">
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
        <li class="margin-top-10">
          <div class="message-item-wrapper message-receive">
            <div class="message-content-wrapper is-phone-active-wrapper">
              <!--msg.created_at | moment("jYY/jMM/jDD, HH:mm") -->

              <ChatImage />
              <span> عکس </span>
              <span class="message-chat-date">
                <span> 13:04 </span>
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
      <div class="send-message-form">
        <form>
          <div class="message-input">
            <input
              type="text"
              placeholder="پیغامی بگذارید "
              v-model="$parent.msgToSend"
            />
          </div>

          <div class="button-wrapper">
            <button type="submit" @click.prevent="$parent.sendMessage()">
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
        </form>
      </div>
    </div>
  </div>
</template>

<script>


import ChatImage from './chat-image';

export default {
  components:{
    ChatImage
  },
  methods: {
    init: function () {
      this.hideCollapses();
      this.$parent.userHasNotice();
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
    checkMessageName: function (index, prevIndex) {
      var isMessageName = false;

      if (this.$parent.chatMessages[prevIndex] && prevIndex >= 0) {
        if (
          this.$parent.chatMessages[index].sender_id !=
          this.$parent.chatMessages[prevIndex].sender_id
        ) {
          isMessageName = true;
        }
      } else {
        isMessageName = true;
      }

      return isMessageName;
    },
    checkMessageListClass(senderId) {
      let myMessage = false;
      if (this.$parent.selectedContact.is_verified == true) {
        this.$parent.isNoticeActive = false;
      }
      if (senderId == this.$parent.currentUserId) {
        this.$parent.isNoticeActive = false;
        myMessage = true;
      } else {
        myMessage = false;
      }
      return myMessage;
    },
  },
  mounted: function () {
    this.init();
  },
};
</script>
