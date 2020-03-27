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

  transition: 100ms;
}

.message-wrapper .chat-page ul li {
  overflow: hidden;
}

.message-wrapper .chat-page li > div {
  max-width: 455px;
  font-size: 14px;
  line-height: 1.612;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 5px 10px;
  margin: 0 auto 3px;
  display: inline-block;
  position: relative;
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
  height: 100%;
}

.group-message-wrapper h2 {
  margin: 30px 15px;

  overflow: hidden;

  background: #fff;

  border-radius: 5px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  padding: 15px;
  text-align: center;
  font-size: 23px;
}

.main-group-message {
  position: relative;
}

.main-group-message .group-item {
  margin-bottom: 20px;
}

.main-group-message .group-item button {
  padding: 5px 6px;
  display: block;
  -webkit-transition: 300ms;
  transition: 300ms;
  border: none;
  border-bottom: 2px solid #fff;
  text-align: right;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.main-group-message .group-item:hover button {
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

.group-item-icon {
  color: #00c569;
  padding-top: 15px;
  padding-left: 5px;
}

.reply-icon {
  display: none;
  padding: 5px;
  padding-top: 5px;
  background: #fff;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  font-size: 14px;
  text-align: center;
  padding-top: 6px;
  color: #00c569;
  position: absolute;
  top: 11px;
}

.message-send .reply-icon {
  left: -45px;
}

.message-receive .reply-icon {
  right: -45px;
}

.group-chat-list-item > div:hover {
  cursor: pointer;
}

.group-chat-list-item > div:hover .reply-icon {
  display: inline-block;
}

.reply-message-wrapper {
  transition: 100ms;
  overflow: hidden;
  height: 0;
}

.reply-message-wrapper.reply-active {
  height: 55px;
}

.reply-message-wrapper .cancle-reply button {
  background: none;
  border: none;
  padding: 14px 19px;
  font-size: 18px;
  color: #666;
}

.cancle-reply {
  width: 50px;

  height: 50px;

  float: right;
}

.reply-info {
  width: calc(100% - 58px);

  float: left;

  border-right: 3px solid #00c569;

  background: #fff;

  border-radius: 5px;

  padding: 7px 15px;
}
.reply-info p {
  height: 15px;
}
.reply-info p,
.replied-message-item-wrapper p {
  width: calc(100% - 15px);

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  font-size: 12px;
}
.reply-info p:first-of-type,
.replied-message-item-wrapper p:first-of-type {
  margin-bottom: 4px;
  color: #00c569;
  font-size: 13px;
}

.message-wrapper .chat-page ul.reply-is-true {
  bottom: 113px;
}

.replied-message-item-wrapper {
  border-radius: 5px;

  font-size: 13px;
  padding: 5px;

  border-right: 3px solid #00c569;

  margin-bottom: 5px;
}

.message-send .replied-message-item-wrapper {
  background: #cfe9ba;
}
.message-receive .replied-message-item-wrapper {
  background: #f0f0f0;
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
  <section class="main-content col-xs-12">
    <div
      class="col-xs-12 contact-wrapper pull-right col-sm-4 col-md-3"
      v-bind:class="{ hidden_element: selectedContact || selectedGroup }"
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

            <router-link
              :to="{ path: '/profile/' + selectedContact.user_name }"
            >
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
              >بازگشت</a
            >
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
                  <span v-if="msg.created_at">{{
                    msg.created_at | moment("jYY/jMM/jDD, h:mm A")
                  }}</span>
                  <span v-else>{{
                    Date() | moment("jYY/jMM/jDD, h:mm A")
                  }}</span>
                  <span
                    class="check-items"
                    v-if="msg.sender_id === currentUserId"
                  >
                    <i class="fa fa-check" v-if="msg.created_at"></i>
                    <i class="far fa-clock" v-else></i>
                    <i class="fa fa-check" v-if="msg.is_read"></i>
                  </span>
                </span>
              </div>
            </li>
          </ul>
          <div
            class="loading-container"
            v-if="isChatMessagesLoaded && isFirstMessageLoading"
          >
            <div class="image-wrapper">
              <div v-show="!isImageLoad || isImageLoad" class="lds-ring">
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
                  v-model="msgToSend"
                />
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
      class="col-xs-12 message-wrapper group-messages col-sm-8 col-md-9"
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
            <span
              v-if="selectedGroup.name"
              v-text="'گروه ' + selectedGroup.name"
            ></span>
            <!-- </router-link> -->
          </div>
          <div class="back-state pull-left">
            <a
              href="#"
              @click.prevent="selectedGroup = !selectedGroup"
              class="green-button"
              >بازگشت</a
            >
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
                : 'chat-loaded',
              { 'reply-is-true': loadReplyData }
            ]"
          >
            <li
              v-for="(msg, index) in groupChatMessages"
              class="group-chat-list-item"
              :class="{ 'margin-top-10': checkMessageName(index, index - 1) }"
              :key="msg.id"
            >
              <div
                :class="[
                  msg.user_id == currentUserId
                    ? 'message-send'
                    : 'message-receive'
                ]"
              >
                <span class="reply-icon">
                  <i class="fa fa-reply"></i>
                </span>
                <div v-if="msg.parent_id" class="replied-message-item-wrapper">
                  <p
                    v-text="
                      msg.parent_author_first_name +
                        ' ' +
                        msg.parent_author_last_name
                    "
                  ></p>
                  <p v-text="msg.parent_text"></p>
                </div>
                <router-link
                  v-if="checkMessageName(index, index - 1)"
                  :to="{ path: '/profile/' + msg.user_name }"
                >
                  <p v-text="msg.first_name + ' ' + msg.last_name"></p>
                </router-link>
                <span v-if="msg.is_link" v-html="msg.text"></span>
                <span
                  v-else
                  v-text="msg.text"
                  @click.prevent="replyMessageData(msg)"
                ></span>
                <span class="message-chat-date">
                  <span v-if="msg.created_at">{{
                    msg.created_at | moment("jYY/jMM/jDD, h:mm A")
                  }}</span>
                  <span v-else>{{
                    Date() | moment("jYY/jMM/jDD, h:mm A")
                  }}</span>
                  <span
                    class="check-items"
                    v-if="msg.user_id === currentUserId"
                  >
                    <i class="fa fa-check" v-if="msg.created_at"></i>
                    <i class="far fa-clock" v-else></i>
                  </span>
                </span>
              </div>
            </li>
          </ul>

          <div
            class="loading-container"
            v-if="isGroupChatMessagesLoaded && isFirstMessageLoading"
          >
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
            <div
              class="reply-message-wrapper"
              :class="{ 'reply-active': this.loadReplyData }"
            >
              <div class="cancle-reply">
                <button @click.prevent="resetReplyMessage()">
                  <i class="fa fa-times"></i>
                </button>
              </div>
              <div class="reply-info">
                <p
                  v-text="
                    replyMessage.first_name + ' ' + replyMessage.last_name
                  "
                ></p>
                <p v-text="replyMessage.text"></p>
              </div>
            </div>
            <form>
              <div class="message-input">
                <input
                  type="text"
                  placeholder="پیغامی بگذارید "
                  v-model="msgToSend"
                />
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

    <div
      class="col-xs-12 default-message-wrapper col-sm-8 col-md-9"
      v-if="!selectedContact && isCurrentStep == 0"
    >
      <div class="default-main-contents">
        <i class="fa fa-user"></i>
        <p>برای شروع چت لطفا یک مخاطب انتخاب کنید</p>
      </div>
    </div>

    <div
      class="col-xs-12 default-message-wrapper col-sm-8 col-md-9"
      v-if="
        !selectedGroup &&
          isCurrentStep == 1 &&
          UnsubscribeGroups.length == 0 &&
          allGroupsIsSubscribe
      "
    >
      <div class="default-main-contents">
        <i class="fa fa-users"></i>
        <p>شما در همه گروه ها عضو شده اید</p>
      </div>
    </div>
    <div
      class="col-xs-12 group-message-wrapper col-sm-8 col-md-9"
      v-if="!selectedGroup && isCurrentStep == 1"
    >
      <h2>برای عضویت در گروه کلیک کنید</h2>
      <div class="main-group-message">
        <div
          v-if="UnsubscribeGroups.length == 0 && !allGroupsIsSubscribe"
          class="loade-more-messages"
        >
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          class="group-item col-xs-4 pull-right"
          v-else
          v-for="(group, index) in UnsubscribeGroups"
          :key="index"
        >
          <button @click.prevent="subscribeUser(group.id)">
            <img
              v-if="group.photo"
              :src="$parent.str + group.photo"
              :alt="'گروه ' + group.name"
            />
            <img
              v-else
              :src="$parent.assets + 'assets/img/group-category.jpg'"
              alt
            />

            <p class="pull-right" v-text="'گروه ' + group.name"></p>
            <span class="group-item-icon pull-left">
              <i class="fa fa-arrow-left"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from "../../router/router";
import Push from "push.js";

import myContactList from "./message-components/my-contact-list";
import myGroupList from "./message-components/my-group-list";
import groupList from "./message-components/group-list";

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
      loadReplyData: false
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

      this.groupMessageCount = 50;
      this.lastGroupMessage = false;
      this.groupMessageLoading = false;
      self.handleBackBtnClickOnDevices();
      self.isChatLoadeMore = false;
      self.isGroupChatMessagesLoaded = true;
      if (index !== -10) self.isFirstMessageLoading = true;
      self.selectedIndex = index;
      self.selectedContact = "";
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

      this.groupList.splice(index, 1, group);
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

        let tempMsgObject = {
          text: tempMsg,
          is_link: false,
          user_name: "test",
          first_name: "kjlk",
          last_name: "family",
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
    switchStep: function(step) {
      this.isCurrentStep = step;

      this.contactList = [];
      this.groupList = [];
      this.contactNameSearchText = "";
      this.groupNameSearchText = "";
      this.init();
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
    replyMessageData: function(msg) {
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
    },
    resetReplyMessage() {
      this.loadReplyData = false;

      setTimeout(function() {
        this.replyMessage = "";
      }, 100);
    }
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
    gtag("config", "UA-129398000-1", { page_path: "/messages" });

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
