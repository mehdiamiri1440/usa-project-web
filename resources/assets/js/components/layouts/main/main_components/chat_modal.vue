<style scoped>
/*main chat modal styles*/
.loading-container,
.image-wrapper {
  height: 100%;
}

.loading-container {
  height: calc(100% + 56px);
  background: #fff;
  z-index: 1;
  position: relative;
}

.chat-modal-wrapper {
  position: fixed;

  background: #fafafa;

  z-index: 1012;

  width: 450px;
  height: 550px;

  bottom: -800px;

  left: 15px;

  border-radius: 12px;

  border: 1px solid #00c569;

  transition: 1s;

  box-shadow: 0 0 22px rgba(0, 0, 0, 0.15);

  overflow: hidden;
}

.open-chat {
  bottom: 15px;
}

/*header chat modal styles */

.header-chat-modal {
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);

  overflow: hidden;

  color: #fff;
}

.header-info-wrapper {
  float: right;
  padding: 7px 18px 7px 0;
  background: none;
  border: none;
}

.header-chat-image {
  width: 35px;
  height: 35px;
  position: relative;
  float: right;
  border-radius: 90px;
  overflow: hidden;
}

.header-chat-image img {
  width: 100%;
  min-height: 100%;
  position: relative;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 50%;
}

.header-chat-content {
  float: right;
  margin-top: 8px;
  margin-right: 10px;
  color: #fff;
  font-weight: bold;
  max-width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: right;
  overflow: hidden;
  height: 30px;
  line-height: 1.618;
  direction: rtl;
}

.close-chat-modal {
  font-size: 18px;
  border: none;
  background: none;
  padding: 15px;
}

/*main chat modal styles*/
.main-modal-chat {
  float: right;
  width: 100%;
  height: calc(100% - 110px);
  background-color: #e5ddd6;
}

.main-modal-chat .bg-wrapper {
  opacity: 0.06;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 60px;
}

.main-modal-chat .bg-wrapper.background-chat {
  background: url("../../../../../img/whatsappbg.png") repeat;
  background-size: 90%;
}

.main-modal-chat ul {
  overflow: auto;
  padding: 20px;
  max-height: 100%;
  height: 100%;
}

.main-modal-chat li {
  float: left;
  position: relative;
  z-index: 1;
  width: 100%;
}

.main-modal-chat li:last-of-type {
  margin-bottom: 10px;
}

.main-modal-chat li > div {
  background: #f7f7f7;

  border-radius: 8px;

  padding: 12px 10px 3px;

  float: left;

  direction: rtl;

  font-size: 12px;

  margin: 3px auto;

  text-align: right;

  max-width: calc(100% - 50px);

  line-height: 1.612;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
}

.main-modal-chat li.sender > div {
  background: #dcf8c6;

  float: right;
}

.message-info {
  font-size: 10px;

  color: #333;

  overflow: hidden;

  padding-top: 5px;

  display: inline-block;

  line-height: 1.618;
}

.message-info span.visited {
  font-size: 11px;

  color: #00c569;

  margin-left: 5px;

  float: right;
}

.message-info span.time {
  float: left;

  margin-top: 3px;

  direction: ltr;
}

/*footer chat modal styles*/
.footer-modal-chat {
  left: 0;
  overflow: hidden;
  padding: 8px 15px;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #f0f0f0;
}

.send-message-button {
  float: right;

  width: 40px;

  height: 40px;

  color: #fff;

  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);

  border: none;

  border-radius: 35px;

  padding: 0 10px;
}

.send-message-button i {
  display: block;
}

.send-message-button svg {
  height: 21px;
  position: relative;
  right: -3px;
  top: 3px;
}

.footer-modal-chat input {
  float: left;

  width: calc(100% - 60px);

  border-radius: 50px;

  background: #fff;

  border: none;

  padding: 7px 15px 8px 15px;

  direction: rtl;

  text-align: right;
}

@media screen and (max-width: 991px) {
  .chat-modal-wrapper {
    left: calc(50% - 230px);

    width: 460px;
  }
}

@media screen and (max-width: 767px) {
  .close-chat-modal span {
    background: #fff;

    color: #00c569;

    padding: 5px 14px;

    border-radius: 5px;

    font-size: 12px;
  }

  .chat-modal-wrapper {
    height: 100%;

    width: 100%;

    left: -2000px;

    bottom: 0;

    border-radius: 0;

    transition: 800ms;

    border: none;
  }

  .open-chat {
    left: 0;
    bottom: 0;
  }
}

@media screen and (max-width: 370px) {
  .header-chat-content {
    max-width: 120px;
  }
}
</style>

<template>
  <!--  #regex Chat Message Modal -->

  <div class="chat-modal-wrapper" :class="{ 'open-chat': openChatBox }">
    <div class="header-chat-modal" v-if="contactInfo">
      <button @click.prevent="routeToProfile" class="header-info-wrapper">
        <span class="header-chat-image" v-if="contactInfo.profile_photo">
          <img :src="$parent.assets + 'storage/' + contactInfo.profile_photo" />
        </span>
        <span class="header-chat-image" v-else-if="!chatMessagesLoader">
          <img :src="$parent.assets + 'assets/img/user-defult.png'" />
        </span>

        <span class="header-chat-content">
          {{ contactInfo.first_name + " " + contactInfo.last_name }}
          <!-- <button
            @click.prevent
            class="verified-user"
            data-container="body"
            data-toggle="popover"
            data-placement="bottom"
            :data-content="$parent.verifiedUserContent"
            title
          >
            <i class="fa fa-certificate"></i>
          </button>-->
        </span>
      </button>

      <button @click.prevent="openChatBox = false" class="close-chat-modal">
        <i class="fa fa-times-circle hidden-xs"></i>
        <i class="fa fa-arrow-left hidden-lg hidden-md hidden-sm"></i>
      </button>
    </div>

    <div class="main-modal-chat">
      <div
        class="bg-wrapper"
        :class="{ 'background-chat': !chatMessagesLoader }"
      ></div>

      <div
        class="loading-container"
        v-show="chatMessagesLoader && isFirstMessageLoading"
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
      <ul v-show="chatMessages">
        <li
          :key="msg.id"
          v-for="msg in chatMessages"
          :class="[msg.sender_id == currentUserId ? 'sender' : 'resiver']"
        >
          <div>
            <p v-text="msg.text"></p>
            <div class="message-info">
              <span class="time" v-if="msg.created_at"
                >{{
                  msg.created_at | moment("jYY/jMM/jDD, h:mm A")
                }}
                &nbsp</span
              >
              <span v-else>{{ Date() | moment("jYY/jMM/jDD, h:mm A") }}</span>
              <span class="visited" v-if="msg.sender_id === currentUserId">
                <i class="fa fa-check" v-if="msg.created_at"></i>
                <i class="far fa-clock" v-else></i>
                <i class="fa fa-check" v-if="msg.is_read"></i>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="footer-modal-chat">
      <form v-on:submit.prevent="sendMessage()">
        <button class="send-message-button" @click.prevent="sendMessage">
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
        <input type="text" v-model="msgToSend" placeholder="پیغامی بگذارید" />
      </form>
    </div>
  </div>

  <!-- end regex Chat Message Modal -->
</template>

<script>
import { eventBus } from "../../../../router/router.js";
import moment from "vue-jalali-moment";

export default {
  data: function () {
    return {
      chatMessagesLoader: true,
      isFirstMessageLoading: true,
      openChatBox: false,
      contactInfo: "",
      chatMessages: "",
      currentContactUserId: "",
      currentUserId: "",
      msgToSend: "",
    };
  },
  methods: {
    setUpChat: function () {
      this.handleBackBtnClickOnDevices();

      this.loadChatHistory(this.contactInfo);
    },
    loadChatHistory: function (contact, index) {
      var self = this;
      self.chatMessagesLoader = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      // self.selectedIndex = index;
      // this.selectedContact = contact;
      this.currentContactUserId = contact.contact_id;

      axios
        .post("/get_user_chat_history", {
          user_id: contact.contact_id,
        })
        .then(function (response) {
          self.chatMessages = response.data.messages;
          self.currentUserId = response.data.current_user_id;
          self.scrollToEnd(0);
        })
        .catch(function (e) {
          //
        });
    },
    scrollToEnd: function (time) {
      var chatPageElementList = $(".main-modal-chat ul");

      var self = this;
      setTimeout(function () {
        chatPageElementList.animate(
          { scrollTop: chatPageElementList.prop("scrollHeight") },
          500,
          "swing",
          function () {
            self.chatMessagesLoader = false;
          }
        );
      }, time);
    },
    sendMessage: function () {
      var self = this;

      let tempMsg = self.msgToSend;
      self.msgToSend = "";

      if (tempMsg) {
        let msgObject = {
          sender_id: self.currentUserId,
          receiver_id: self.currentContactUserId,
          text: tempMsg,
        };

        self.chatMessages.push(msgObject);
        self.scrollToEnd(0);

        if (
          self.contactInfo.buyAd_id !== undefined &&
          self.contactInfo.buyAd_id != null
        ) {
          axios
            .post("/send_reply_to_buyAd", {
              buy_ad_id: self.contactInfo.buyAd_id,
              text: msgObject.text,
            })
            .then(function (response) {
              self.isFirstMessageLoading = false;
              self.loadChatHistory(self.contactInfo, -10);
            })
            .catch(function (e) {
              //
            });
        } else {
          axios
            .post("/messanger/send_message", msgObject)
            .then(function (response) {
              self.isFirstMessageLoading = false;
              self.loadChatHistory(self.contactInfo, -10);
            })
            .catch(function (e) {
              //
            });
        }
      }
    },
    handleInitialMessage: function () {
      let self = this;

      return new Promise((resolve, reject) => {
        self.loadChatHistory(self.contactInfo);
        resolve(true);
      }).then(() => {
        self.sendMessage();
      });
    },
    handleBackBtnClickOnDevices: function () {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function (e) {
        self.openChatBox = false;

        if (self.doesUserComeFromAuthenticationPages()) {
          // if(window.location.pathname == '/login' || window.location.pathname == '/register'){
          window.localStorage.removeItem("comeFromAuthentication");
          window.location.href = window.location.pathname;
          // }
        }
      });
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
    doesUserComeFromAuthenticationPages: function () {
      if (window.localStorage.getItem("comeFromAuthentication")) {
        return true;
      } else {
        return false;
      }
    },
    routeToProfile: function () {
      if (this.contactInfo.user_name) {
        this.openChatBox = false;
        this.$router.push({ path: "/profile/" + this.contactInfo.user_name });
      }
    },
    activeComponentTooltip() {
      $(".verified-user")
        .popover({ trigger: "manual", html: true, animation: false })
        .on("mouseenter", function () {
          var _this = this;
          $(this).popover("show");
          $(".popover").on("mouseleave", function () {
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
  },

  created: function () {
    eventBus.$on("ChatInfo", ($event) => {
      this.contactInfo = $event;
      this.chatMessages = "";
      this.openChatBox = true;
      this.msgToSend = "";
      this.setUpChat();
    });
  },
  watch: {
    openChatBox: function (value) {
      if (value == true) {
        $("body").addClass("overflow-hidden");
        setTimeout(() => {
          this.activeComponentTooltip();
        }, 10);
      } else {
        $("body").removeClass("overflow-hidden");
      }
    },
  },
};
</script>
