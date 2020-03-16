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

.message-wrapper {
  border-right: 2px solid #f2f2f2;
  position: relative;
  height: 100%;
}

.message-wrapper .message-contact-title {
  font-size: 16px;
  padding: 7px 0 8px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#00c569),
    to(#21ad93)
  );
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);
  overflow: hidden;
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
  margin: 0 22px 0 17px;
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
  padding-top: 9px;
}

.back-state .green-button {
  background: #fff;
  color: #00c569;
  padding: 5px 14px;
  border-radius: 5px;
  font-size: 12px;
  margin: 6px 0 0 25px;
}

.back-state {
  display: none;
}

.message-wrapper .chat-page ul {
  padding: 20px;

  overflow-x: hidden;

  position: absolute;

  left: 0;

  right: 0;

  bottom: 57px;

  top: 50px;
}

.message-wrapper .chat-page ul li {
  overflow: hidden;
}

.message-wrapper .chat-page li div {
  max-width: 455px;
  font-size: 14px;
  line-height: 1.612;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 5px 10px;
  margin: 0 auto 3px;
  display: inline-block;
}
.message-wrapper .chat-page div p {
  font-size: 16px;
  font-weight: bold;
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

.default-message-wrapper {
  position: relative;
  height: 100%;
  background: #f6f6f6;
}

.default-message-wrapper .default-main-contents {
  width: 250px;

  height: 250px;

  background: #fff;

  border-radius: 250px;

  position: absolute;

  left: 50%;

  top: 50%;

  transform: translate(-50%, -50%);

  text-align: center;

  padding-top: 60px;
  box-shadow: 0 0 10px #ebebeb;
}

.default-message-wrapper .default-main-contents i {
  font-size: 55px;
}

.default-message-wrapper .default-main-contents p {
  font-size: 16px;

  margin: 20px 0;
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

.group-message-wrapper {
  background: #f6f6f6;
  height: 100%;
}

.main-group-message {
  margin: 30px 15px;

  overflow: hidden;

  background: #fff;

  border-radius: 5px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  padding: 15px;
}

.main-group-message .group-item {
  padding: 15px 0 13px;

  display: block;

  transition: 300ms;

  border-bottom: 2px solid #fff;
}

.main-group-message .group-item:hover {
  transition: 300ms;
  border-bottom: 2px solid #00a65a;
}

.contact-wrapper .contact-items {
  position: relative;
  overflow-y: scroll;
  height: calc(100% + 40px);
}

.contact-wrapper .contact-items > ul {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}

.contact-item .green-button {
  margin-top: 8px;
  float: left;
  padding: 2px 15px;
}

.contact-item .green-button i {
  margin-right: 3px;
}

.group-item img {
  width: 45px;
  float: right;
  margin-left: 10px;
  border-radius: 50px;
}
.group-item p {
  margin-top: 15px;
  font-weight: bold;
  color: #707070;
}

.loade-more-messages {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 65px;
  background: #fff;
  z-index: 1;
  border-radius: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  left: calc(50% - 30px);
}

@media screen and (max-width: 992px) {
  .main-content {
    padding: 65px 0 0;
  }
}

@media screen and (max-width: 768px) {
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

  .back-state {
    display: block;
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
      v-bind:class="{ hidden_element: selectedContact }"
    >
      <div class="row">
        <!-- <div class="contact-title">
                  <i class="fa fa-user-circle"></i>
                  <span>لیست مخاطبین</span>
        </div>-->

        <div class="contacts-switch-buttons-wrapper">
          <div class="switch-button-item">
            <button
              class="contact-button"
              :class="{ active: isCurrentStep == 0 }"
              @click.prevent="switchStep(0)"
            >
              <i class="fa fa-user"></i>
              مخاطبین من
            </button>
          </div>

          <div class="switch-button-item">
            <button
              class="contact-button"
              :class="{ active: isCurrentStep == 1 }"
              @click.prevent="switchStep(1)"
            >
              <i class="fa fa-users"></i>
              گروه های من
            </button>
          </div>

          <div class="switch-button-item hidden-lg hidden-md hidden-sm">
            <button
              class="contact-button"
              :class="{ active: isCurrentStep == 2 }"
              @click.prevent="switchStep(2)"
            >
              <i class="fa fa-plus"></i>
              <i class="fa fa-users"></i>
              افزودن گروه
            </button>
          </div>
        </div>

        <my-contact-list v-if="isCurrentStep == 0" />
        <my-group-list v-else-if="isCurrentStep == 1" />
        <group-list v-else-if="isCurrentStep == 2" />
      </div>
    </div>

    <div
      class="col-xs-12 message-wrapper col-sm-8 col-md-9"
      v-bind:class="{ hidden_element: !selectedContact }"
      v-if="selectedContact"
    >
      <div class="row">
        <div class="message-contact-title">
          <div class="contact-title-contents pull-right">
            <div class="message-contact-title-img">
              <img
                v-if="selectedContact.profile_photo"
                :src="str + '/' + selectedContact.profile_photo"
                :alt="selectedContact.first_name[0]"
              />

              <img v-else :src="defultimg" />
            </div>

            <router-link :to="{ path: '/profile/' + selectedContact.user_name }">
              <span
                v-text="
                  selectedContact.first_name + ' ' + selectedContact.last_name
                "
              ></span>
            </router-link>
          </div>
          <div class="back-state pull-left">
            <a
              href="#"
              @click.prevent="selectedContact = !selectedContact"
              class="green-button"
            >بازگشت</a>
          </div>
        </div>

        <div class="chat-page" v-if="selectedContact">
          <ul
            :class="[
              isChatMessagesLoaded && isFirstMessageLoading
                ? 'chat-not-loaded'
                : 'chat-loaded'
            ]"
          >
            <li :key="msg.id" v-for="msg in chatMessages">
              <div
                :class="[
                  msg.sender_id == currentUserId
                    ? 'message-send'
                    : 'message-receive'
                ]"
              >
                <span v-text="msg.text"></span>
                <span class="message-chat-date">
                  <span v-if="msg.created_at">
                    {{
                    msg.created_at | moment("jYY/jMM/jDD, h:mm A")
                    }}
                  </span>
                  <span v-else>
                    {{
                    Date() | moment("jYY/jMM/jDD, h:mm A")
                    }}
                  </span>
                  <span class="check-items" v-if="msg.sender_id === currentUserId">
                    <i class="fa fa-check" v-if="msg.created_at"></i>
                    <i class="far fa-clock" v-else></i>
                    <i class="fa fa-check" v-if="msg.is_read"></i>
                  </span>
                </span>
              </div>
            </li>
          </ul>
          <div class="loading-container" v-if="isChatMessagesLoaded && isFirstMessageLoading">
            <div class="image-wrapper">
              <a v-show="isImageLoad">
                <transition>
                  <img src @load="ImageLoaded" alt="alt" />
                </transition>
              </a>

              <div v-show="!isImageLoad" class="lds-ring">
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
                <input type="text" placeholder="پیغامی بگذارید " v-model="msgToSend" />
              </div>

              <div class="button-wrapper">
                <button type="submit" @click.prevent="sendMessage()">
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
    </div>

    <!-- #rigex group message wrapper -->

    <div
      class="col-xs-12 message-wrapper col-sm-8 col-md-9"
      v-bind:class="{ hidden_element: !selectedGroup }"
      v-if="selectedGroup"
    >
      <div class="row">
        <div class="message-contact-title">
          <div class="contact-title-contents pull-right">
            <div class="message-contact-title-img">
              <!-- <img
                v-if="selectedGroup.photo"
                :src="str + '/' + selectedContact.profile_photo"
                :alt="selectedContact.first_name[0]"
              />-->

              <img :src="defultimg" />
            </div>

            <!-- <router-link :to="{ path: '/profile/' + selectedContact.user_name }"> -->
            <span v-if="selectedGroup.name" v-text="selectedGroup.name"></span>
            <!-- </router-link> -->
          </div>
          <div class="back-state pull-left">
            <a href="#" @click.prevent="selectedGroup = !selectedGroup" class="green-button">بازگشت</a>
          </div>
        </div>

        <div class="chat-page" v-if="selectedGroup">
          <div v-if="this.isChatLoadeMore" class="loade-more-messages">
            <div v-show="!$parent.isImageLoad" class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul
            :class="[
              isGroupChatMessagesLoaded && isFirstMessageLoading
                ? 'chat-not-loaded'
                : 'chat-loaded'
            ]"
          >
            <li
              v-for="(msg, index) in groupChatMessages"
              :class="{ 'margin-top-10': checkMessageName(index, index - 1) }"
              :key="msg.id"
              v-if="msg.id"
            >
              <div
                :class="[
                  msg.user_id == currentUserId
                    ? 'message-send'
                    : 'message-receive'
                ]"
              >
                <router-link
                  v-if="checkMessageName(index, index - 1)"
                  :to="{ path: '/profile/' + msg.user_name }"
                >
                  <p v-text="msg.first_name + ' ' + msg.last_name"></p>
                </router-link>
                <span v-text="msg.text"></span>
                <span class="message-chat-date">
                  <span v-if="msg.created_at">
                    {{
                    msg.created_at | moment("jYY/jMM/jDD, h:mm A")
                    }}
                  </span>
                  <span v-else>
                    {{
                    Date() | moment("jYY/jMM/jDD, h:mm A")
                    }}
                  </span>
                  <span class="check-items" v-if="msg.sender_id === currentUserId">
                    <i class="fa fa-check" v-if="msg.created_at"></i>
                    <i class="far fa-clock" v-else></i>
                    <i class="fa fa-check" v-if="msg.is_read"></i>
                  </span>
                </span>
              </div>
            </li>
          </ul>

          <div class="loading-container" v-if="isGroupChatMessagesLoaded && isFirstMessageLoading">
            <div class="image-wrapper">
              <a v-show="isImageLoad">
                <transition>
                  <img src @load="ImageLoaded" alt="alt" />
                </transition>
              </a>

              <div v-show="!isImageLoad" class="lds-ring">
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
                <input type="text" placeholder="پیغامی بگذارید " v-model="msgToSend" />
              </div>

              <div class="button-wrapper">
                <button type="submit" @click.prevent="sendMessageToGroup()">
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
    </div>
    <!-- #end rigex group message wrapper -->

    <!-- <div class="col-xs-12 default-message-wrapper col-sm-8 col-md-9" v-if="!selectedContact">
      <div class="default-main-contents">
        <i class="fa fa-users"></i>
        <p>برای شروع چت لطفا یک مخاطب انتخاب کنید</p>
      </div>
    </div>-->

    <div class="col-xs-12 group-message-wrapper col-sm-8 col-md-9" v-if="!selectedContact">
      <div class="main-group-message">
        <a
          href="#"
          @click.prevent="subscribeUser(1)"
          class="group-item col-xs-4 col-lg-3 pull-right"
        >
          <img :src="$parent.assets + 'assets/img/group-category.jpg'" alt />
          <p>گروه خرما</p>
        </a>
        <a
          href="#"
          @click.prevent="subscribeUser(2)"
          class="group-item col-xs-4 col-lg-3 pull-right"
        >
          <img :src="$parent.assets + 'assets/img/group-category.jpg'" alt />
          <p>گروه خرما</p>
        </a>
        <a
          href="#"
          @click.prevent="subscribeUser(3)"
          class="group-item col-xs-4 col-lg-3 pull-right"
        >
          <img :src="$parent.assets + 'assets/img/group-category.jpg'" alt />
          <p>گروه خرما</p>
        </a>
        <a
          href="#"
          @click.prevent="subscribeUser(4)"
          class="group-item col-xs-4 col-lg-3 pull-right"
        >
          <img :src="$parent.assets + 'assets/img/group-category.jpg'" alt />
          <p>گروه خرما</p>
        </a>
        <a
          href="#"
          @click.prevent="subscribeUser(5)"
          class="group-item col-xs-4 col-lg-3 pull-right"
        >
          <img :src="$parent.assets + 'assets/img/group-category.jpg'" alt />
          <p>گروه خرما</p>
        </a>
        <a
          href="#"
          @click.prevent="subscribeUser(1)"
          class="group-item col-xs-4 col-lg-3 pull-right"
        >
          <img :src="$parent.assets + 'assets/img/group-category.jpg'" alt />
          <p>گروه خرما</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../router/router";
import Push from "push.js";

import myContactList from "./message-components/myContactList";
import myGroupList from "./message-components/myGroupList";
import groupList from "./message-components/groupList";

export default {
  props: ["defultimg", "str", "loading_img"],
  components: {
    myContactList,
    myGroupList,
    groupList
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
      isSearchingContact: false,
      contactList: [],
      chatMessages: "",
      selectedContact: "",
      currentUserId: "",
      currentContactUserId: "",
      msgToSend: "",
      isComponentActive: false,
      contactNameSearchText: "",
      isContactListLoaded: false,
      isCurrentStep: 0,
      assets: this.$parent.assets,
      groupList: [],
      isGroupChatMessagesLoaded: true,
      groupChatMessages: "",
      selectedGroup: "",
      isSearchingGroup: false,
      groupNameSearchText: "",
      popUpMsg: "",
      isChatLoadeMore: false
    };
  },
  methods: {
    init: function() {
      this.loadContactList();
      this.loadGroupList();
    },
    loadImage: function() {
      this.isImageLoad = false;
    },
    ImageLoaded: function() {
      this.isImageLoad = true;
    },
    loadContactList: function() {
      var self = this;

      this.isContactListLoaded = false;

      axios
        .post("/get_contact_list")
        .then(function(response) {
          self.contactList = response.data.contact_list;
          self.currentUserId = response.data.user_id;
          self.isContactListLoaded = true;
        })
        .catch(function(e) {
          //
        });
    },
    loadGroupList: function() {
      var self = this;
      axios
        .post("/group/get_groups_list")
        .then(function(response) {
          self.groupList = response.data.groups;
        })
        .catch(function(e) {
          //
        });
    },
    loadChatHistory: function(contact, index) {
      var self = this;
      self.isChatLoadeMore = false;
      self.handleBackBtnClickOnDevices();
      self.isChatMessagesLoaded = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;
      self.selectedGroup = "";

      this.selectedContact = contact;
      this.currentContactUserId = contact.contact_id;

      axios
        .post("/get_user_chat_history", {
          user_id: contact.contact_id
        })
        .then(function(response) {
          self.chatMessages = response.data.messages;
          self.currentUserId = response.data.current_user_id;
          self.scrollToEnd(0);
        })
        .catch(function(e) {
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
    loadGroupChatHistory: function(group, index) {
      var self = this;

      self.handleBackBtnClickOnDevices();
      self.isChatLoadeMore = false;
      self.isGroupChatMessagesLoaded = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;
      self.selectedContact = "";
      self.selectedGroup = group;
      axios
        .post("/group/get_group_chats", {
          group_id: group.id,
          message_count: 50
        })
        .then(function(response) {
          self.groupChatMessages = response.data.messages;
          self.isGroupChatMessagesLoaded = false;
          self.scrollToEnd(0);
        })
        .catch(function(e) {
          //
        });

      // var index = this.searchForObjectIndexInArray(
      //   contact.contact_id,
      //   this.contactList
      // );

      eventBus.$emit("messageCount", -1 * group.unread_msgs_count);

      // contact.unread_msgs_count = 0;

      // this.contactList.splice(index, 1, contact);
    },
    scrollToEnd: function(time) {
      var chatPageElementList = $(".chat-page ul");
      var self = this;
      setTimeout(function() {
        chatPageElementList.animate(
          { scrollTop: chatPageElementList.prop("scrollHeight") },
          500,
          "swing",
          () => {
            self.isChatMessagesLoaded = false;
          }
        );
      }, time);
    },
    sendMessage: function() {
      var self = this;

      let tempMsg = self.msgToSend;
      self.msgToSend = "";

      if (tempMsg) {
        let msgObject = {
          sender_id: self.currentUserId,
          receiver_id: self.currentContactUserId,
          text: tempMsg
        };

        self.chatMessages.push(msgObject);
        self.scrollToEnd(0);

        axios
          .post("/messanger/send_message", msgObject)
          .then(function(response) {
            self.isFirstMessageLoading = false;
            self.loadChatHistory(self.selectedContact, -10);
          })
          .catch(function(e) {
            //
          });
      }
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

        self.groupChatMessages.push(msgObject);
        self.scrollToEnd(0);

        axios
          .post("/group/send_message", msgObject)
          .then(function(response) {
            self.isFirstMessageLoading = false;
            self.loadGroupChatHistory(self.selectedGroup, -10);
          })
          .catch(function(e) {
            //
          });
      }
    },
    keepChatUpdated: function(contact) {
      var self = this;
      setTimeout(function() {
        self.loadChatHistory(contact);
      }, 20000);
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
    goToButtomOfChat: function() {
      $(".chat-page ul").animate(
        { scrollTop: $(".chat-page ul").prop("scrollHeight") },
        1000
      );
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
            window.location.pathname == "/seller/messages" ||
            window.location.pathname == "/buyer/messages"
          ) {
            if (self.selectedContact) {
              self.selectedContact = "";
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
      var self = this;

      axios
        .post("/group/subscribe_user", {
          group_id: groupId
        })
        .then(function(response) {
          self.popUpMsg = response.data.msg;
          eventBus.$emit("submitSuccess", self.popUpMsg);
          $("#custom-main-modal").modal("show");
          self.loadGroupList();
        });
    },
    checkMessageName: function(index, prevIndex) {
      var isMessageName = false;
      if (this.groupChatMessages && prevIndex >= 0) {
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
    switchStep: function(step) {
      this.isCurrentStep = step;

      this.contactList = [];
      this.groupList = [];
      this.contactNameSearchText = "";
      this.groupNameSearchText = "";
      this.init();
    },
    messageAutoLoader: function() {
      var self = this;
      $(".message-wrapper ul").scroll(function() {
        var scroll = $(this).scrollTop();
        console.log(scroll);
        if (scroll <= 1000) {
          console.log("true");
          self.isChatLoadeMore = true;
          self.loadMoreGroupMessage();
        }
      });
    },
    loadMoreGroupMessage: function() {}
  },
  watch: {
    contactNameSearchText: function() {
      var self = this;
      if (self.contactNameSearchText !== "") {
        self.isSearchingContact = true;
        axios
          .post("/get_contact_list")
          .then(function(response) {
            self.contactList = response.data.contact_list;
            self.currentUserId = response.data.user_id;

            var text = self.contactNameSearchText.split(" ");
            self.contactList = self.contactList.filter(function(contact) {
              return text.every(function(el) {
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
          .catch(function(e) {
            //
          });
      } else {
        self.loadContactList();
      }
    },
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
    isChatMessagesLoaded: function(event) {
      if (event == false) {
        this.messageAutoLoader();
      }
    }
  },

  mounted: function() {
    this.init();
    eventBus.$emit("subHeader", this.items);
  },

  created: function() {
    gtag("config", "UA-129398000-1", { page_path: "/messages" });

    var self = this;

    if (Push.Permission.has() === false) {
      Push.Permission.request(
        function() {},
        function() {}
      );
    }

    Echo.private("testChannel." + self.currentContactUserId).listen(
      "newMessage",
      e => {
        var senderId = e.new_message.sender_id;
        //update contact list
        self.loadContactList();

        if (self.currentContactUserId) {
          if (self.currentContactUserId === senderId) {
            self.chatMessages.push(e.new_message);
            self.scrollToEnd(0);

            if (self.isComponentActive == false) {
              self.pushNotification(
                "پیام جدید",
                e.new_message.text,
                "/dashboard/messages"
              );
            }
          }
        } else {
          this.pushNotification(
            "پیام جدید",
            e.new_message.text,
            "/dashboard/messages"
          );
        }
      }
    );
  },
  activated() {
    this.isComponentActive = true;
  },
  deactivated() {
    this.isComponentActive = false;
  }
};
</script>
