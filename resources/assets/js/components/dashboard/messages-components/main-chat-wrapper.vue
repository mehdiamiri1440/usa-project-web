<style scoped>
.loading-container {
  display: flex;
  width: 100%;
  min-height: 86vh;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  background: #fff;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  position: relative;
  align-items: center;
  z-index: 1;
}

.whatsapp-loading-gif {
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 0%;
  display: flex;
}

.chat-not-loaded {
  opacity: 0;
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
  color: #00a65a;
}

.message-wrapper .message-contact-title {
  font-size: 16px;
  padding: 7px 15px 8px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#00c569),
    to(#21ad93)
  );
  background: linear-gradient(-90deg, #00c569 0%, #21ad93 100%);
  float: right;
  width: 100%;
  color: #fff;
}

.message-contact-title a {
  color: #fafafa;
  transition: 300ms;
}

.message-contact-title a:hover {
  color: #fff;
  transition: 300ms;
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
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 30px;
  overflow: hidden;
  max-width: 135px;
}

.back-state {
  background: none;
  color: #fff;
  border: none;
  font-size: 22px;
  position: relative;
  top: 5px;
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
  padding: 20px;

  overflow-x: hidden;

  position: absolute;

  left: 0;

  right: 0;

  bottom: 57px;

  top: 50px;

  transition: 100ms;
}

.message-wrapper .chat-page ul li {
  overflow: hidden;
}

.message-wrapper .chat-page li > div {
  font-size: 14px;
  line-height: 1.612;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  margin: 0 auto 3px;
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.message-content-wrapper {
  max-width: 455px;
  padding: 5px 10px;
}
.message-wrapper .chat-page .message-receive {
  float: left;
  background: #f7f7f7;
}

.message-wrapper .chat-page .message-send {
  float: right;
  background: #dcf8c6;
}

.message-wrapper .chat-page span.message-chat-date {
  text-align: left;
  font-size: 10px;
  padding-top: 3px;
  width: 100%;
  direction: ltr;
  display: block;
}

.send-message-form {
  overflow: hidden;
  padding: 4px 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.message-input {
  float: left;
  width: calc(100% - 60px);
}

.send-message-form .message-input input {
  border-radius: 50px;
  background: #fff;
  border: none;
}

.button-wrapper {
  float: right;
  line-height: 1.1;
}

.button-wrapper svg {
  height: 21px;
  position: relative;
  right: -3px;
  top: 3px;
}

.send-message-form .button-wrapper button {
  border: none;
  background: #00c569;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  font-size: 22px;
  color: #fff;
  padding-left: 5px;
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
            <i class="new-badge">جدید</i>
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
          <div
            :class="[
              checkMessageListClass(msg.sender_id)
                ? 'message-send'
                : 'message-receive',
            ]"
          >
            <div class="message-content-wrapper">
              <span v-text="msg.text"></span>
              <span class="message-chat-date">
                <span v-if="msg.created_at">{{
                  msg.created_at | moment("jYY/jMM/jDD, h:mm A")
                }}</span>
                <span v-else>{{ Date() | moment("jYY/jMM/jDD, h:mm A") }}</span>
                <span
                  class="check-items"
                  v-if="msg.sender_id === $parent.currentUserId"
                >
                  <i class="fa fa-check" v-if="msg.created_at"></i>
                  <i class="far fa-clock" v-else></i>
                  <i class="fa fa-check" v-if="msg.is_read"></i>
                </span>
              </span>
            </div>
          </div>
        </li>
        <li v-if="$parent.isNoticeActive" class="messenger-notice">
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
          <div
            v-show="!$parent.isImageLoad || $parent.isImageLoad"
            class="lds-ring"
          >
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
export default {
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
