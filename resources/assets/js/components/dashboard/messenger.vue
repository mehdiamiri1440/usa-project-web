<style scoped>
.message-wrapper {
  border-right: 1px solid #e4e4e4;
  position: relative;
  height: 100%;
}
.main-content {
  padding: 59px 250px 0 0;
  direction: rtl;
  height: 100%;
  position: fixed;
  background: #fff;
  left: 0;
  bottom: 0;
  top: 0;
}
.main-content.is-fix-alert {
  padding: 85px 250px 0 0;
}

.little-main .main-content {
  padding: 59px 80px 0 0;
}

.lds-ring {
  display: inline-block;

  position: absolute;

  width: 64px;

  height: 64px;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -50%);
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 5px solid #00c569;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #00c569 transparent transparent transparent;
}

.lds-ring-alt {
  display: block;
  margin-top: 50px;
  direction: rtl;
  text-align: center;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

.loade-more-messages .lds-ring {
  width: 50px;

  height: 50px;
}

.loade-more-messages .lds-ring > div {
  width: 36px;

  height: 36px;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*preloader image style*/

.contact-title {
  font-size: 16px;
  padding: 18px 8px 23px;
  border-bottom: 2px solid #f2f2f2;
}

.contact-title i {
  font-size: 26px;
  position: relative;
  top: 5px;
}

.contact-title span {
  font-size: 16px;
  padding-right: 4px;
}

.contact-wrapper,
.contact-wrapper > div {
  height: 100%;
}

.contact-wrapper .contact-body {
  height: 100%;
  overflow-y: scroll;
  float: right;
  width: 100%;
  border-left: 1px solid #e0e0e0;
}

.default-message-wrapper {
  position: relative;
  height: 100%;
  overflow: auto;
}

.default-message-wrapper .default-main-contents {
  background: #fff;
  border-radius: 250px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding-top: 70px;
  padding-bottom: 30px;
}

.default-message-wrapper .default-main-contents > img {
  max-width: 260px;
}

.default-message-wrapper .default-main-contents.delsa-box {
  width: 100%;
  max-width: 585px;
  min-height: 550px;
}

.default-message-wrapper .default-main-contents.delsa-box .delsa-image {
  max-width: 455px;
  margin: 0 auto 30px;
  min-height: 254px;
}

.default-message-wrapper .default-main-contents .delsa-title {
  font-size: 29px;
  color: #222222;
  font-weight: 400;
  margin: 18px auto 20px;
}

.default-message-wrapper .default-main-contents .delsa-title-active {
  font-size: 29px;
  font-weight: 400;
  margin: 33px auto 30px;
}

small {
  font-size: 16px;
}

.default-message-wrapper .default-main-contents .check-icon-title {
  width: 80px;
  height: 80px;
  font-size: 50px;
  background: #edf8e6;
  border-radius: 50px;
  padding-top: 15px;
  margin-top: 14px;
}

.default-message-wrapper .title-item {
  font-size: 18px;
  color: #222222;
  font-weight: 400;
  margin: 33px auto 30px;
}

.default-message-wrapper .default-main-contents .delsa-text {
  color: #777;
  line-height: 1.618;
  font-size: 15px;
}

.default-message-wrapper .default-main-contents.delsa-box .green-button {
  background-image: linear-gradient(to left, #21ad93, #4dc0bb);
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 40px;
  margin-top: 26px;
}

.default-message-wrapper .default-main-contents i {
  font-size: 26px;
}

.contact-not-found {
  text-align: center;
  margin: 15px auto;
}

.contact-not-found i {
  font-size: 26px;
}

.contact-not-found p {
  margin-bottom: 7px;
}

.contacts-switch-buttons-wrapper {
  float: right;
  width: 100%;
  background: #eef3f3;
  border-bottom: 3px solid #e3e3e3;
}

.contacts-switch-buttons-wrapper .switch-button-item {
  float: right;
  width: 50%;
}

.contacts-switch-buttons-wrapper .contact-button {
  border: none;
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  padding: 15px 0;
  position: relative;
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

.total-unread-messages-badge {
  position: absolute;
  top: 1px;
  background: red;
  height: 23px;
  width: 33px;
  color: #fff;
  border-radius: 10px;
  left: 5px;
  font-size: 12px;
}

@media screen and (max-width: 991px) {
  .main-content {
    padding: 0;
    top: 42px;
    padding-bottom: 59px;
  }
  .main-content.is-fix-alert {
    padding: 0;
    top: 89px;
    padding-bottom: 89px;
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
  .main-content.is-fix-alert {
    padding: 0;
    top: 85px;
  }

  .hidden_element {
    display: none;
  }

  .contacts-switch-buttons-wrapper .switch-button-item {
    width: 33.3333%;
  }
  .reply-info p {
    width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .is-guide-active {
    z-index: 1011 !important;
    background: transparent !important;
    top: 0;
    padding-bottom: 0;
  }
}
</style>

<template>
  <section
    class="main-content col-xs-12"
    :class="{
      'is-fix-alert': isRequiredFixAlert,
      'is-guide-active': selectedContact || isChanleActive,
    }"
  >
    <div
      class="col-xs-12 contact-wrapper pull-right col-sm-4 col-lg-3"
      v-bind:class="[
        {
          hidden_element: selectedContact || isChanleActive,
        },
      ]"
    >
      <div class="row">
        <router-view name="messenger-list" />
      </div>
    </div>

    <div
      class="col-xs-12 pull-right message-wrapper col-sm-8"
      v-bind:class="[
        {
          'col-lg-6': !isChanleActive,
          'col-lg-9': isChanleActive,
        },
      ]"
      v-if="selectedContact || isChanleActive"
    >
      <main-channel-wrapper v-if="isChanleActive" />
      <main-chat-wrapper v-else />
    </div>
    <div
      class="col-xs-12 default-message-wrapper hidden-xs col-sm-8 col-lg-9"
      v-if="!selectedContact && isCurrentStep == 0 && !isChanleActive"
    >
      <div v-if="userType" class="default-main-contents delsa-box">
        <div class="delsa-image">
          <img src="../../../img/delsa-messenger.svg" alt="" />
        </div>
        <div
          v-if="currentUser.user_info.active_pakage_type > 0"
          class="col-xs-12"
        >
          <i class="fa fa-check light-green-text check-icon-title"></i>
          <p class="delsa-title-active light-green-text">
            منشی آنلاین شما (دلسا) فعال است.
          </p>
        </div>
        <div v-else class="col-xs-12">
          <p class="delsa-text text-right">سلام</p>
          <p class="delsa-title text-right">
            <i class="fas fa-chess-queen light-green-text"></i>
            من دلسا هستم
            <small> (ربات خودکار باسکول) </small>
          </p>
          <p class="delsa-text text-right">
            کار اصلی من بازاریابی برای محصولات شماست. اگر مایل هستید بازاریابی
            بیشتری برای محصولات شما انجام بدهم کافی است نوع عضویت خود را ارتقا
            دهید.
          </p>
          <router-link
            :to="{ name: 'dashboardPricingTableSeller' }"
            class="green-button hover-effect"
          >
            ارتقا عضویت
          </router-link>
        </div>
      </div>
      <div v-else class="default-main-contents">
        <img src="../../../img/empty-message.svg" alt="" />
        <p class="title-item">برای شروع چت لطفا یک مخاطب انتخاب کنید</p>
      </div>
    </div>

    <div
      class="contact-wrapper pull-left hiiden-sm hidden-xs col-lg-3"
      v-bind:class="{ hidden_element: !selectedContact }"
      v-if="selectedContact && !isChanleActive"
    >
      <div class="row">
        <chat-user-info
          v-if="selectedContact"
          :selected-contact="selectedContact"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../router/router";
import Push from "push.js";

import myContactList from "./messages-components/my-contact-list";
import chatUserInfo from "./messages-components/chat-user-info";
import MainChatWrapper from "./messages-components/main-chat-wrapper";
import MainChannelWrapper from "./messages-components/main-channel-wrapper";

export default {
  props: ["isRequiredFixAlert", "userType", "currentUser", "str", "assets"],
  components: {
    myContactList,
    chatUserInfo,
    MainChatWrapper,
    MainChannelWrapper,
  },
  data: function () {
    return {
      isImageLoad: false,
      isImageOpened: false,
      chatMessagesLoader: true,
      isFirstMessageLoading: false,
      selectedIndex: -1,
      items: [
        {
          message: "پیام ها",
          url: "messages",
        },
      ],
      isSearchingContact: false,
      contactList: [],
      channelInfo: {
        unread_contents: 0,
        last_content_title: "",
        last_content_date: "",
      },
      chatMessages: "",
      isNoticeActive: true,
      isLikeBoxActive: true,
      isLatestMessage: false,
      isGuideActive: false,
      selectedContact: "",
      currentUserId: "",
      currentContactUserId: "",
      msgToSend: "",
      isComponentActive: true,
      contactNameSearchText: "",
      isContactListLoaded: false,
      isCurrentStep: 0,
      fromContact: 0,
      toContact: 15,
      contactsCountInEachLoad: 20,
      showLoadMoreBtn: false,
      verifiedUserContent: this.$parent.verifiedUserContent,
      isCurrentUserVerified: false,
      isChatUpdate: true,
      userDataLoader: true,
      isChanleActive: false,
      userAllowedReview: false,
      isReviewSubmited: false,
      reviewSubmitLoader: false,
      totalChatCount: "",
      initialLoadChatCount: 30,
      LoadChatCount: "",
      delsaInfo: true,
    };
  },

  methods: {
    init: function () {
      this.loadContactList();
    },
    loadImage: function () {
      this.isImageLoad = false;
    },
    ImageLoaded: function () {
      this.isImageLoad = true;
    },
    loadContactList: function () {
      var self = this;
      this.isContactListLoaded = false;

      axios
        .post("/get_contact_list", {
          from: self.fromContact,
          to: self.toContact,
        })
        .then(function (response) {
          self.contactList = response.data.contact_list;
          self.channelInfo = response.data.channel_info;
          self.currentUserId = response.data.user_id;
          self.isCurrentUserVerified = response.data.is_verified;
          self.isContactListLoaded = true;

          if (self.contactList.length >= self.toContact) {
            self.showLoadMoreBtn = true;
          } else {
            self.showLoadMoreBtn = false;
          }
        })
        .catch(function (e) {
          //
        });
    },
    loadMoreContacts: function () {
      this.toContact = this.toContact + this.contactsCountInEachLoad;

      this.loadContactList();
    },
    openChannel() {
      this.channelInfo.unread_contents = 0;
      this.channelInfo.last_content_title = "";
      this.channelInfo.last_content_date = "";
      this.handleBackBtnClickOnDevices();
      this.isChanleActive = true;

      this.registerComponentStatistics(
        "messenger",
        "openChannel",
        "clickOnChannel"
      );
    },
    loadChatHistory: function (contact, index, isUpdate) {
      this.isChanleActive = false;
      if (!isUpdate) {
        this.selectedContact = "";
        this.selectedContact = contact;
        this.chatMessages = "";
        this.userDataLoader = true;
      }
      var self = this;

      // enable loader for user info component

      self.isChatLoadeMore = false;
      self.handleBackBtnClickOnDevices();
      self.chatMessagesLoader = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;
      this.setUserGuideCookie();

      this.currentContactUserId = contact.contact_id;

      axios
        .post("/get_user_chat_history", {
          user_id: contact.contact_id,
          from: 0,
          to: this.initialLoadChatCount,
        })
        .then(function (response) {
          self.isNoticeActive = true;
          let data = response.data.messages.reverse();
          self.totalChatCount = response.data.total_count;
          // convert to time to new design

          // let itemDate = "";
          // data = data.map((item) => {
          //   let date = item.created_at.substr(0, 10);
          //   item.isDateShow = true;
          //   if (itemDate == date) {
          //     item.isDateShow = false;
          //   }
          //   itemDate = date;
          //   return item;
          // });

          self.chatMessages = data;
          if (!self.chatMessages.length) {
            self.isNoticeActive = false;
          }
          self.userHasNotice();
          self.currentUserId = response.data.current_user_id;
          self.isLatestMessage = self.lastMessageMins(
            10,
            data[data.length - 1].created_at
          );
          self.chatMessagesLoader = false;
          self.$nextTick(() => {
            self.scrollToEnd(0);
          });
        })
        .catch(function (e) {
          //
        });

      var index = this.searchForObjectIndexInArray(
        contact.contact_id,
        this.contactList
      );

      eventBus.$emit("messageCount", -1 * contact.unread_msgs_count);

      contact.unread_msgs_count = 0;

      this.contactList.splice(index, 1, contact);
    },
    getMoreChat(position) {
      let contact = this.selectedContact;
      let tempCount = this.LoadChatCount + this.initialLoadChatCount;
      let chatWrapper = $("#chat-list");

      if (this.totalChatCount > this.chatMessages.length) {
        this.chatMessagesLoader = true;

        axios
          .post("/get_user_chat_history", {
            user_id: contact.contact_id,
            from: this.LoadChatCount,
            to: tempCount,
          })
          .then((response) => {
            this.LoadChatCount = tempCount;
            let data = response.data.messages.reverse();
            this.chatMessages.unshift(...data);

            this.$nextTick(() => {
              chatWrapper.scrollTop(
                chatWrapper[0].scrollHeight - position.totalHeight
              );
              this.chatMessagesLoader = false;
            });
          });
      }
    },

    cookieHasUser(userId) {
      return userId == this.selectedContact.contact_id;
    },
    setUserGuideCookie() {
      let contactUserId = this.selectedContact.contact_id;
      let cookie = this.getCookie("userGuideData");

      if (cookie) {
        let getAllGuidDataCookies = JSON.parse(cookie).userSelected;
        if (!getAllGuidDataCookies.find(this.cookieHasUser)) {
          getAllGuidDataCookies.push(contactUserId);
          this.createCookie(
            "userGuideData",
            JSON.stringify({ userSelected: getAllGuidDataCookies }),
            5400 * 365 // 2400 * 365 this time may 5 years
          );
          if (getAllGuidDataCookies.length > 20) {
            this.isGuideActive = false;
          } else {
            this.isGuideActive = true;
          }
        } else {
          this.isGuideActive = false;
        }
      } else {
        this.createCookie(
          "userGuideData",
          JSON.stringify({ userSelected: [contactUserId] }),
          5400 * 365 // 2400 * 365 this time may 2 years
        );
        this.isGuideActive = true;
      }
      if (this.isGuideActive == true) {
        $(".overlay-bg-guide").css("display", "block");
        setTimeout(() => {
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
    },
    setNoticeCookie() {
      let contactUserId = this.selectedContact.contact_id;
      let cookie = this.getCookie("messengerNoticeData");
      if (cookie) {
        let getAllCookies = JSON.parse(cookie).userNoticeCloed;
        if (!getAllCookies.find(this.cookieHasUser)) {
          getAllCookies.push(contactUserId);
          this.createCookie(
            "messengerNoticeData",
            JSON.stringify({ userNoticeCloed: getAllCookies }),
            1000
          );
        }
      } else {
        this.createCookie(
          "messengerNoticeData",
          JSON.stringify({ userNoticeCloed: [contactUserId] }),
          1000
        );
      }
      this.isNoticeActive = false;
    },
    setLikeBoxCookie() {
      let contactUserId = this.selectedContact.contact_id;
      let cookie = this.getCookie("closeLikeBox");
      if (cookie) {
        let getAllCookies = JSON.parse(cookie).userCloseLikeBox;
        if (!getAllCookies.find(this.cookieHasUser)) {
          getAllCookies.push(contactUserId);
          this.createCookie(
            "closeLikeBox",
            JSON.stringify({ userCloseLikeBox: getAllCookies }),
            60 * 24
          );
        }
      } else {
        this.createCookie(
          "closeLikeBox",
          JSON.stringify({ userCloseLikeBox: [contactUserId] }),
          60 * 24
        );
      }
      this.isLikeBoxActive = false;
    },
    userHasLikeBox() {
      let cookie = this.getCookie("closeLikeBox");
      if (cookie) {
        let getAlCookies = JSON.parse(cookie).userCloseLikeBox;
        if (getAlCookies.find(this.cookieHasUser)) {
          this.isLikeBoxActive = false;
        }
      }
    },
    userHasNotice() {
      let cookie = this.getCookie("messengerNoticeData");
      if (cookie) {
        let getAlCookies = JSON.parse(cookie).userNoticeCloed;
        if (getAlCookies.find(this.cookieHasUser)) {
          this.isNoticeActive = false;
        }
      }
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
    checkCookie: function () {
      if (
        this.active_pakage_type == 3 ||
        this.getCookie("closeSellerFixModal") == "false" ||
        this.checkPricingRoute()
      ) {
        this.isRequiredFixAlert = false;
      } else {
        this.isRequiredFixAlert = true;
      }
    },
    appendMessageToChatHistory: function (contact) {
      var self = this;
      self.isLatestMessage = true;

      self.chatMessagesLoader = false;
      this.selectedContact = contact;
      this.currentContactUserId = contact.contact_id;

      axios
        .post("/get_user_chat_history", {
          user_id: contact.contact_id,
        })
        .then(function (response) {
          self.chatMessages = response.data.messages;
          self.isLatestMessage = self.lastMessageMins(
            10,
            self.chatMessages[self.chatMessages.length - 1].created_at
          );

          self.currentUserId = response.data.current_user_id;
          self.scrollToEnd(0);
        })
        .catch(function (e) {
          //
        });
    },
    scrollToEnd: function (time) {
      var chatPageElementList = $(".chat-page ul");
      var self = this;
      setTimeout(function () {
        chatPageElementList.animate(
          { scrollTop: chatPageElementList.prop("scrollHeight") },
          0,
          "swing",
          () => {
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
        self.isLatestMessage = true;
        let msgObject = {
          sender_id: self.currentUserId,
          receiver_id: self.currentContactUserId,
          text: tempMsg,
        };

        self.chatMessages.push(msgObject);

        self.scrollToEnd(0);

        axios
          .post("/messanger/send_message", msgObject)
          .then(function (response) {
            self.isFirstMessageLoading = false;
            self.loadChatHistory(self.selectedContact, -10, true);
          })
          .catch(function (e) {
            //
          });
      }
    },
    keepChatUpdated: function (contact) {
      var self = this;
      setTimeout(function () {
        self.loadChatHistory(contact, -10, true);
      }, 20000);
    },
    pushNotification: function (header, body, link) {
      Push.create(header, {
        body: body,
        timeout: 4000,
        link: link,
        onClick: function () {
          window.focus();
          this.close();
        },
      });
    },
    goToButtomOfChat: function () {
      $(".chat-page ul").animate(
        { scrollTop: $(".chat-page ul").prop("scrollHeight") },
        0
      );
    },
    searchForObjectIndexInArray: function search(contactId, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].contact_id === contactId) {
          return i;
        }
      }
    },
    pageHasBeenReloaded: function () {
      if (window.performance) {
        //                  TYPE_BACK_FORWARD
        if (
          performance.navigation.type === performance.navigation.TYPE_RELOAD
        ) {
          return true;
        } else {
          return false;
        }
      }
    },
    parseDateTime: function (dateTimeString) {
      //
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
    handleBackKeys: function () {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $(".modal").modal("hide");
      });
    },
    handleBackBtnClickOnDevices: function () {
      var self = this;
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        let delsaModal = $("#delsa-promotion-modal").hasClass("in");

        if (self.isDeviceMobile() && !delsaModal) {
          if (
            window.location.pathname == "/seller/messenger/contacts" ||
            window.location.pathname == "/buyer/messenger/contacts"
          ) {
            if (!self.isImageOpened) {
              if (self.selectedContact) {
                self.selectedContact = "";
              } else if (self.isChanleActive) {
                self.isChanleActive = false;
              }
            }
          }
        }
      });
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
    sendTokenToServer: function (token) {
      axios
        .post("/fcm/register_token", {
          token: token,
        })
        .then(function (response) {
          let token = response.data.token;

          window.localStorage.setItem("storedToken", token);
        });
    },
    goToGroupList: function () {
      this.$router.push("group-messages");
      this.$parent.groupStep = 1;
    },
    activeReportModal: function (reportedUserId) {
      eventBus.$emit("reoprtModal", reportedUserId);
    },
    activeReviewModal: function () {
      let userImage = "";

      let selectedUserData = {
        id: this.selectedContact.contact_id,
        name:
          this.selectedContact.first_name +
          " " +
          this.selectedContact.last_name,
      };

      if (this.selectedContact.profile_photo) {
        userImage = this.str + "/" + this.selectedContact.profile_photo;
        selectedUserData.img = userImage;
      }

      eventBus.$emit("reviewUserData", selectedUserData);
    },
    registerReview: function (reviewScore) {
      this.reviewSubmitLoader = true;

      let reviewObg = {
        user_id: this.selectedContact.contact_id,
        rating_score: reviewScore,
      };

      let self = this;

      axios.post("/profile/add-comment", reviewObg).then(function (response) {
        self.reviewSubmitLoader = false;
        if (response.data.status == true) {
          self.isReviewSubmited = true;

          setTimeout(() => {
            if (self.isReviewSubmited) {
              $(".mobile-like-user").fadeOut();
              setTimeout(() => {
                self.userAllowedReview = false;
              }, 1500);
            }
          }, 3000);
        }
      });
    },
    activeChanel() {
      // this.isChanleActive = true
    },
    lastMessageMins(mins, time) {
      const currentTime = new Date();
      const diffInMins = (currentTime - Date.parse(time)) / (1000 * 60);
      return diffInMins < mins;
    },
    openDelasModal() {
      $("#delsa-promotion-modal").modal("show");
      $("#delsa-promotion-modal").on("shown.bs.modal", (e) => {
        this.handleBackKeys();
      });
    },
  },

  mounted: function () {
    this.init();
    eventBus.$emit("subHeader", false);
  },

  created: function () {
    gtag("config", "UA-129398000-1", { page_path: "/messages" });

    var self = this;

    if (Push.Permission.has() === false) {
      Push.Permission.request(
        function () {},
        function () {}
      );
    }

    if (messaging) {
      messaging
        .requestPermission()
        .then(function () {
          return messaging.getToken();
        })
        .then(function (currentToken) {
          let storedToken = window.localStorage.getItem("storedToken");

          if (storedToken != currentToken) {
            self.sendTokenToServer(currentToken);
          }
        })
        .catch(function (err) {
          // Happen if user deney permission
          console.log("Unable to get permission to notify.", err);
        });

      eventBus.$on("contanctMessageReceived", ($event) => {
        if (self.selectedContact) {
          self.appendMessageToChatHistory(self.selectedContact);
        } else if (self.isComponentActive) {
          self.loadContactList();
        }
      });
    }
  },
  watch: {
    contactNameSearchText: function (value) {
      var self = this;
      if (self.contactNameSearchText !== "") {
        self.isSearchingContact = true;
        axios
          .post("/get_contact_list")
          .then(function (response) {
            self.contactList = response.data.contact_list;
            self.currentUserId = response.data.user_id;

            var text = self.contactNameSearchText.split(" ");
            self.contactList = self.contactList.filter(function (contact) {
              return text.every(function (el) {
                if (
                  contact.first_name.indexOf(el) > -1 ||
                  contact.last_name.indexOf(el) > -1
                ) {
                  return true;
                } else return false;
              });
            });

            self.isSearchingContact = false;
          })
          .catch(function (e) {
            //
          });
      } else {
        self.contactList = [];
        self.loadContactList();
      }
    },
    selectedContact: function (value) {
      this.delsaInfo = true;
      // reset like message datas
      this.isReviewSubmited = false;
      this.userAllowedReview = false;
      this.isLikeBoxActive = true;
      this.LoadChatCount = this.initialLoadChatCount;

      // check like message active box
      this.userHasLikeBox();

      eventBus.$emit("activeContactId", value.contact_id);
    },
    isChanleActive(isChanel) {
      if (isChanel) {
        this.activeChanel();
      }
    },
    userAllowedReview() {
      this.$nextTick(() => {
        this.scrollToEnd(0);
      });
    },
  },

  activated() {
    this.isComponentActive = true;
  },
  deactivated() {
    this.isComponentActive = false;
  },
  beforeDestroy() {
    this.isComponentActive = false;
    this.selectedContact = "";
    eventBus.$emit("activeContactId", "");
  },
};
</script>
