<style scoped>
span,
p,
div {
  word-break: break-all;
}
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

.reply-info p,
.replied-message-item-wrapper p {
  width: calc(100% - 15px);

  overflow: hidden;

  text-overflow: ellipsis;

  word-break: break-all;

  height: 21px;

  font-size: 12px;
}
.reply-info p:last-of-type {
  height: 12px;
}
.reply-info p:first-of-type,
.replied-message-item-wrapper p:first-of-type {
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

.group-message-wrapper-component {
  height: 100%;
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
</style>

<template>
  <div class="group-message-wrapper-component">
    <!-- #rigex group message wrapper -->

    <div
      class="col-xs-12 message-wrapper group-messages col-sm-8 col-md-9"
      v-bind:class="{ hidden_element: !$parent.selectedGroup }"
      v-if="$parent.selectedGroup"
    >
      <div class="row">
        <div class="message-contact-title">
          <div class="contact-title-contents pull-right">
            <div class="message-contact-title-img">
              <img
                v-if="$parent.selectedGroup.photo"
                :src="$parent.str + '/' + $parent.selectedGroup.photo"
                :alt="$parent.selectedGroup.name"
              />

              <img v-else :src="$parent.assets + 'assets/img/group-images/group-category.jpg'" />
            </div>

            <span v-if="$parent.selectedGroup.name" v-text="'گروه ' + $parent.selectedGroup.name"></span>
          </div>
          <div class="back-state hidden-sm hidden-md hidden-lg pull-left">
            <a
              href="#"
              @click.prevent="$parent.selectedGroup = !$parent.selectedGroup"
              class="green-button"
            >بازگشت</a>
          </div>
        </div>

        <div class="chat-page" v-if="$parent.selectedGroup">
          <div v-if="$parent.isChatLoadeMore" class="loade-more-messages">
            <div v-show="!$parent.isImageLoad" class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul
            :class="[
              $parent.isGroupChatMessagesLoaded && $parent.isFirstMessageLoading
                ? 'chat-not-loaded'
                : 'chat-loaded',
              { 'reply-is-true': $parent.loadReplyData }
            ]"
          >
            <li
              v-for="(msg, index) in $parent.groupChatMessages"
              class="group-chat-list-item"
              :class="[
            
                $parent.checkMessageName(index, index - 1) ? 'margin-top-10' : ''
              ]"
              :key="msg.id"
            >
              <div
                @click.prevent="$parent.replyMessageData($event,msg)"
                :class="[
                 msg.user_id == $parent.currentUserId
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
                  v-if="$parent.checkMessageName(index, index - 1)"
                  :to="{ path: '/profile/' + msg.user_name }"
                >
                  <p v-text="msg.first_name + ' ' + msg.last_name"></p>
                </router-link>
                <span class="message-has-link" v-if="msg.is_link" v-html="msg.text"></span>
                <span v-else v-html="msg.text"></span>
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
                  <span class="check-items" v-if="msg.user_id === $parent.currentUserId">
                    <i class="fa fa-check" v-if="msg.created_at"></i>
                    <i class="far fa-clock" v-else></i>
                  </span>
                </span>
              </div>
            </li>
          </ul>

          <div
            class="loading-container"
            v-if="
              $parent.isGroupChatMessagesLoaded && $parent.isFirstMessageLoading
            "
          >
            <div class="image-wrapper">
              <a v-show="$parent.isImageLoad">
                <transition>
                  <img src @load="$parent.ImageLoaded" alt="alt" />
                </transition>
              </a>

              <div v-show="!$parent.isImageLoad" class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <!-- <span v-text="alt" class="lds-ring-alt"></span> -->
            </div>
          </div>
          <div class="send-message-form">
            <div class="reply-message-wrapper" :class="{ 'reply-active': $parent.loadReplyData }">
              <div class="cancle-reply">
                <button @click.prevent="$parent.resetReplyMessage()">
                  <i class="fa fa-times"></i>
                </button>
              </div>
              <div class="reply-info">
                <p
                  v-text="
                    $parent.replyMessage.first_name +
                      ' ' +
                      $parent.replyMessage.last_name
                  "
                ></p>
                <p v-text="$parent.replyMessage.text"></p>
              </div>
            </div>
            <form>
              <div class="message-input">
                <input type="text" placeholder="پیغامی بگذارید " v-model="$parent.msgToSend" />
              </div>

              <div class="button-wrapper">
                <button type="submit" @click.prevent="$parent.sendMessageToGroup()">
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
      v-if="
        !$parent.selectedGroup &&
          $parent.UnsubscribeGroups.length == 0 &&
          $parent.allGroupsIsSubscribe
      "
    >
      <div class="default-main-contents">
        <i class="fa fa-users"></i>
        <p>شما در همه گروه ها عضو شده اید</p>
      </div>
    </div>

    <div class="col-xs-12 group-message-wrapper col-sm-8 col-md-9" v-if="!$parent.selectedGroup">
      <h2>برای عضویت در گروه کلیک کنید</h2>
      <div class="main-group-message">
        <div
          v-if="
            $parent.UnsubscribeGroups.length == 0 &&
              !$parent.allGroupsIsSubscribe
          "
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
          class="group-item col-sm-6 col-md-4 pull-right"
          v-else
          v-for="(group, index) in $parent.UnsubscribeGroups"
          :key="index"
        >
          <button @click.prevent="$parent.subscribeUser(group.id)">
            <img v-if="group.photo" :src="$parent.str + group.photo" :alt="'گروه ' + group.name" />
            <img v-else :src="$parent.assets + 'assets/img/group-images/group-category.jpg'" />

            <p class="pull-right" v-text="'گروه ' + group.name"></p>
            <span class="group-item-icon pull-left">
              <i class="fa fa-arrow-left"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
