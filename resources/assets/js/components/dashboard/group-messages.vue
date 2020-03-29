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

.main-content {
  padding: 65px 250px 0 0;

  direction: rtl;

  border-bottom: 2px solid #f2f2f2;
  height: 100%;
  position: fixed;

  /*right: 0;*/
  background: #fff;

  left: 0;

  bottom: 0;

  top: 0;
}

.little-main .main-content {
  padding: 65px 80px 0 0;
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
  font-size: 14px;
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
  height: calc(100% - 100px);
  float: right;
  width: 100%;
}

@media screen and (max-width: 992px) {
  .main-content {
    padding: 65px 0 0;
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

  .default-main-contents {
    display: none;
  }

  .main-content {
    padding: 65px 0 0;
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

  .contacts-switch-buttons-wrapper .switch-button-item {
    width: 33.3333%;
  }
  .reply-info p {
    width: 100%;
    word-wrap: break-word;
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
  <section class="main-content col-xs-12">
    <div
      class="col-xs-12 contact-wrapper pull-right col-sm-4 col-md-3"
      v-bind:class="{ hidden_element: selectedGroup }"
    >
      <div class="row">
        <div class="contacts-switch-buttons-wrapper">
          <div class="switch-button-item">
            <button class="contact-button" @click="goToContactList()">
              <i class="fa fa-user"></i>
              مخاطبین من
            </button>
          </div>

          <div class="switch-button-item">
            <button
              class="contact-button"
              @click.prevent="$parent.groupStep = 0"
              :class="{ active: $parent.groupStep == 0 }"
            >
              <span class="total-unread-messages-badge">جدید</span>
              <i class="fa fa-users"></i>
              گروه های من
            </button>
          </div>

          <div class="switch-button-item hidden-lg hidden-md hidden-sm">
            <button
              class="contact-button"
              @click.prevent="$parent.groupStep = 1"
              :class="{ active: $parent.groupStep == 1 }"
            >
              <i class="fa fa-plus"></i>
              <i class="fa fa-users"></i>
              افزودن گروه
            </button>
          </div>
        </div>

        <my-group-list v-if="$parent.groupStep == 0" />
        <group-list v-else />
      </div>
    </div>

    <MainChatWrapper />
  </section>
</template>

<script>
import { eventBus } from "../../router/router";
import Push from "push.js";

import MyGroupList from "./group-messages-components/my-group-list";
import MainChatWrapper from "./group-messages-components/group-main-chat-wrapper";
import GroupList from "./group-messages-components/group-list";

export default {
  props: ["defultimg", "str", "loading_img", "getUserId"],
  components: {
    MyGroupList,
    MainChatWrapper,
    GroupList
  },
  data: function() {
    return {
      isImageLoad: false,
      isChatMessagesLoaded: true,
      isFirstMessageLoading: true,
      selectedIndex: -1,
      items: [
        {
          message: "پیام ها",
          url: "messages"
        }
      ],
      isCurrentStep: 0,
      currentUserId: "",
      currentContactUserId: "",
      msgToSend: "",
      isComponentActive: false,
      assets: this.$parent.assets,
      groupList: [],
      isGroupChatMessagesLoaded: true,
      groupChatMessages: [],
      selectedGroup: "",
      isSearchingGroup: false,
      groupNameSearchText: "",
      popUpMsg: "",
      isChatLoadeMore: false,
      groupMessageCount: 50,
      groupMessageLoading: false,
      lastGroupMessage: false,
      UnsubscribeGroups: [],
      reloadGroupList: false,
      allGroupsIsSubscribe: false,
      allGroupsIsUnSubscribe: false,
      allGroupIsload: false,
      replyMessage: "",
      loadReplyData: false,
      messageCount: 0
    };
  },

  methods: {
    init: function() {
      this.currentUserId = this.getUserId;

      this.loadGroupList();
    },
    loadImage: function() {
      this.isImageLoad = false;
    },
    ImageLoaded: function() {
      this.isImageLoad = true;
    },
    loadGroupList: function() {
      var self = this;
      self.allGroupIsload = true;

      axios
        .post("/group/get_groups_list")
        .then(function(response) {
          self.groupList = response.data.groups;
          if (self.groupList.length == 0) {
            self.allGroupsIsUnSubscribe = true;
          } else {
            self.allGroupsIsUnSubscribe = false;
          }

          self.getUnsubscribeGroups();
        })
        .catch(function(e) {
          //
        });
    },
    loadGroupChatHistory: function(group, index) {
      var self = this;

      this.groupMessageCount = 50;
      this.lastGroupMessage = false;
      this.groupMessageLoading = false;
      self.handleBackBtnClickOnDevices();
      self.isChatLoadeMore = false;
      self.isGroupChatMessagesLoaded = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;
      self.selectedGroup = group;
      this.isChatMessagesLoaded = true;

      axios
        .post("/group/get_group_chats", {
          group_id: group.id,
          message_count: self.groupMessageCount
        })
        .then(function(response) {
          self.groupChatMessages = response.data.messages;
          self.isGroupChatMessagesLoaded = false;

          self.scrollToEnd(0);
        })
        .catch(function(e) {
          //
        });

      var index = this.searchForObjectIndexInArray(group.id, this.groupList);

      group.unread_messages = 0;

      // this.groupList.splice(index, 1, group);
    },
    appendMessageToGroupHistory: function(group) {
      var self = this;

      this.groupMessageCount = 50;
      self.isGroupChatMessagesLoaded = false;
      self.selectedGroup = group;

      axios
        .post("/group/get_group_chats", {
          group_id: group.id,
          message_count: self.groupMessageCount
        })
        .then(function(response) {
          self.groupChatMessages = response.data.messages;
          self.isGroupChatMessagesLoaded = false;

          self.scrollToEnd(0);
        })
        .catch(function(e) {
          //
        });
    },
    scrollToEnd: function(time) {
      var chatPageElementList = $(".chat-page ul");
      var self = this;
      setTimeout(function() {
        chatPageElementList.animate(
          { scrollTop: chatPageElementList.prop("scrollHeight") },
          0,
          "swing",
          () => {
            self.isChatMessagesLoaded = false;
          }
        );
      }, time);
    },
    sendMessageToGroup: function() {
      var self = this;
      let tempMsg = self.msgToSend;
      self.msgToSend = "";

      if (tempMsg) {
        let msgObject = {
          text: tempMsg,
          group_id: self.selectedGroup.id
        };

        let tempMsgObject = {
          text: tempMsg,
          is_link: false,
          user_name: "buskool",
          first_name: "نام",
          last_name: "...",
          user_id: self.currentUserId,
          parent_id: null,
          parent_text: null,
          parent_author_first_name: null,
          parent_author_last_name: null
        };

        if (self.replyMessage.id && self.loadReplyData) {
          msgObject.replied_msg_id = self.replyMessage.id;
        }

        self.groupChatMessages.push(tempMsgObject);

        self.scrollToEnd(0);

        axios
          .post("/group/send_message", msgObject)
          .then(function(response) {
            self.isFirstMessageLoading = false;
            self.resetReplyMessage();

            self.loadGroupChatHistory(self.selectedGroup, -10);
          })
          .catch(function(e) {
            //
          });
      }
    },
    pushNotification: function(header, body, link) {
      Push.create(header, {
        body: body,
        timeout: 4000,
        link: link,
        onClick: function() {
          window.focus();
          this.close();
        }
      });
    },
    searchForObjectIndexInArray: function search(contactId, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].contact_id === contactId) {
          return i;
        }
      }
    },
    pageHasBeenReloaded: function() {
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
    parseDateTime: function(dateTimeString) {
      //
    },
    isDeviceMobile: function() {
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
    handleBackBtnClickOnDevices: function() {
      var self = this;

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }

      $(window).on("popstate", function(e) {
        if (self.isDeviceMobile()) {
          if (
            window.location.pathname == "/seller/group-messages" ||
            window.location.pathname == "/buyer/group-messages"
          ) {
            if (self.selectedGroup) {
              self.selectedGroup = "";
            }
          }
        }
      });
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    subscribeUser: function(groupId) {
      this.popUpMsg = "آیا میخواهید در گروه عضو شوید؟";
      eventBus.$emit("joinGroupMessage", this.popUpMsg);
      eventBus.$emit("joinGroupId", groupId);
      $("#join-to-group").modal("show");
    },
    checkMessageName: function(index, prevIndex) {
      var isMessageName = false;
      if (this.groupChatMessages[prevIndex] && prevIndex >= 0) {
        if (
          this.groupChatMessages[index].user_id !=
          this.groupChatMessages[prevIndex].user_id
        ) {
          isMessageName = true;
        }
      } else {
        isMessageName = true;
      }

      return isMessageName;
    },
    groupMessageAutoLoader: function() {
      var self = this;
      $(".message-wrapper.group-messages ul").scroll(function() {
        var scroll = $(this).scrollTop();

        if (
          scroll <= 1000 &&
          !self.groupMessageLoading &&
          !self.lastGroupMessage
        ) {
          self.isChatLoadeMore = true;
          self.loadMoreGroupMessage();
        }
      });
    },

    loadMoreGroupMessage: function() {
      var self = this;
      self.groupMessageLoading = true;
      if (self.groupMessageCount < 2000) {
        self.groupMessageCount = self.groupMessageCount + 50;
      }
      axios
        .post("/group/get_group_chats", {
          group_id: self.selectedGroup.id,
          message_count: self.groupMessageCount
        })
        .then(function(response) {
          var currentDataSize = self.groupChatMessages.length;
          var newDataSize = response.data.messages.length;
          if (currentDataSize == newDataSize) {
            self.groupMessageCount - 50;
            self.lastGroupMessage = true;
          } else {
            self.groupChatMessages = response.data.messages;
            self.lastGroupMessage = false;
          }
          self.isGroupChatMessagesLoaded = false;
          self.groupMessageLoading = false;
          self.isChatLoadeMore = false;

          // self.scrollToEnd(0);
        })
        .catch(function(e) {
          //
        });
    },
    getUnsubscribeGroups: function() {
      var self = this;
      axios.post("/group/get_all_groups").then(function(response) {
        self.checkUserIsSubscribe(response.data.all_groups);
      });
    },
    checkUserIsSubscribe: function(groups) {
      var subscribeGroups = this.groupList;
      var self = this;

      for (var i = 0, len = subscribeGroups.length; i < len; i++) {
        for (var j = 0, len2 = groups.length; j < len2; j++) {
          if (subscribeGroups[i].id === groups[j].id) {
            groups.splice(j, 1);
            len2 = groups.length;
          }
        }
      }
      if (groups == 0) {
        this.allGroupsIsSubscribe = true;
      } else {
        this.allGroupsIsSubscribe = false;
      }
      self.allGroupIsload = false;
      self.UnsubscribeGroups = groups;
    },
    replyMessageData: function(e, msg) {
      if (this.isTargetALink(e.target)) {
        window.open(e.target.href, "_blank");
      } else {
        this.loadReplyData = true;
        this.replyMessage = msg;

        var chatPageElementList = $(".chat-page ul");
        var self = this;
        setTimeout(function() {
          chatPageElementList.animate(
            { scrollTop: chatPageElementList.prop("scrollHeight") },
            100,
            "swing",
            () => {
              self.isChatMessagesLoaded = false;
            }
          );
        }, 0);
      }
    },
    resetReplyMessage() {
      this.loadReplyData = false;

      setTimeout(function() {
        this.replyMessage = "";
      }, 100);
    },
    isTargetALink: function(target) {
      if (target.href) return true;

      return false;
    },
    sendTokenToServer: function(token) {
      axios
        .post("/fcm/register_token_in_groups", {
          token: token
        })
        .then(function(response) {
          let token = response.data.token;

          window.localStorage.setItem("storedToken", JSON.stringify(token));
        });
    },
    goToContactList: function() {
      this.$router.push("contacts");
      this.$parent.groupStep = 0;
    }
  },
  watch: {
    groupNameSearchText: function() {
      var self = this;
      // self.groupList = [];
      if (self.groupNameSearchText !== "") {
        self.isSearchingGroup = true;
        axios
          .post("/group/get_groups_list")
          .then(function(response) {
            self.groupList = response.data.groups;
            var text = self.groupNameSearchText.split(" ");
            self.isSearchingGroup = false;
            self.groupList = self.groupList.filter(function(group) {
              return text.every(function(el) {
                if (group.name.indexOf(el) > -1) {
                  return true;
                } else return false;
              });
            });
          })
          .catch(function(e) {
            //
          });
      } else {
        self.loadGroupList();
      }
    },
    isGroupChatMessagesLoaded: function(event) {
      if (event == false) {
        this.groupMessageAutoLoader();
      }
    },
    reloadGroupList: function(event) {
      this.reloadGroupList = false;
      this.loadGroupList();
    }
  },
  mounted: function() {
    this.init();
    eventBus.$emit("subHeader", this.items);
  },

  created: function() {
    gtag("config", "UA-129398000-1", { page_path: "/group-messages" });

    eventBus.$on("messageCount", event => {
      this.messageCount += event;
    });

    var self = this;

    if (Push.Permission.has() === false) {
      Push.Permission.request(
        function() {},
        function() {}
      );
    }
    eventBus.$on("reloadAllGroupLists", $event => {
      this.reloadGroupList = $event;
    });

    if (messaging) {
      messaging
        .requestPermission()
        .then(function() {
          console.log("Notification permission granted.");
          return messaging.getToken();
        })
        .then(function(currentToken) {
          let sotoredToken = JSON.parse(
            window.localStorage.getItem("storedToken")
          );

          if (sotoredToken != currentToken) {
            self.sendTokenToServer(currentToken);
          }
        })
        .catch(function(err) {
          // Happen if user deney permission
          console.log("Unable to get permission to notify.", err);
        });

      messaging.onMessage(function(payload) {
        console.log(self.selectedContact);
        if (self.selectedGroup) {
          self.appendMessageToGroupHistory(self.selectedGroup);
        } else {
          // eventBus.$emit("messageCount",1);
          self.loadGroupList();
        }
      });
    }

    // Echo.private("testChannel." + self.currentContactUserId).listen(
    //   "newMessage",
    //   e => {
    //     var senderId = e.new_message.sender_id;
    //     //update contact list
    //     self.loadContactList();

    //     if (self.currentContactUserId) {
    //       if (self.currentContactUserId === senderId) {
    //         self.chatMessages.push(e.new_message);
    //         self.scrollToEnd(0);

    //         if (self.isComponentActive == false) {
    //           self.pushNotification(
    //             "پیام جدید",
    //             e.new_message.text,
    //             "/dashboard/messages"
    //           );
    //         }
    //       }
    //     } else {
    //       this.pushNotification(
    //         "پیام جدید",
    //         e.new_message.text,
    //         "/dashboard/messages"
    //       );
    //     }
    //   }
    // );
  },
  activated() {
    this.isComponentActive = true;
  },
  deactivated() {
    this.isComponentActive = false;
  }
};
</script>
