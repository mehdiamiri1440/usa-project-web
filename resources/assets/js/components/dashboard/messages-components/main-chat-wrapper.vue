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
  font-size: 14px;
  line-height: 1.612;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  margin: 0 auto 3px;
  display: inline-block;
  position: relative;
  max-width: 100%;
}

.image-details {
  float: right;
  width: 100%;
}

.message-content-wrapper {
  max-width: 455px;
  padding: 5px 10px;
}

.message-content-wrapper span {
  white-space: pre-wrap;
}

.message-content-wrapper .chat-image {
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 5px;
  float: right;
  margin-left: 10px;
}

.message-content-wrapper .chat-image img {
  width: initial;
  height: 100%;
  transform: translate(50%, 50%);
  position: relative;
  top: -50%;
  left: -50%;
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
  position: relative;
}

.message-input .add-image-button {
  width: 50px;

  position: absolute;

  height: 50px;

  overflow: hidden;

  left: 0;
}
.message-input .add-image-button i {
  background: none;
  border: none;
  padding: 11px 15px;
  font-size: 23px;
  color: #777;
}

.message-input .add-image-button input[type="file"] {
  position: absolute;

  top: 0;

  right: 0;

  width: 100%;

  height: 100%;

  opacity: 0;
}

.send-message-form .message-input textarea {
  border-radius: 25px;
  background: #fff;
  border: none;
  max-width: 100%;
  min-width: 100%;
  max-height: 98px;
  height: 50px;
  box-sizing: border-box;
  resize: none;
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

          <img v-else :src="$parent.defultImg" />
        </div>

        <router-link :to="{ path: '/profile/' + $parent.selectedContact.user_name }">
          <span
            v-text="
              $parent.selectedContact.first_name +
                ' ' +
                $parent.selectedContact.last_name
            "
          ></span>
        </router-link>
      </div>
      <div class="back-state hidden-sm hidden-md hidden-lg pull-left">
        <a
          href="#"
          @click.prevent="$parent.selectedContact = !$parent.selectedContact"
          class="green-button"
        >بازگشت</a>
      </div>
    </div>

    <div class="chat-page" v-if="$parent.selectedContact">
      <ul
        :class="[
          $parent.isChatMessagesLoaded && $parent.isFirstMessageLoading
            ? 'chat-not-loaded'
            : 'chat-loaded'
        ]"
      >
        <li :key="msg.id" v-for="msg in $parent.chatMessages">
          <div
            :class="[
              msg.sender_id == $parent.currentUserId
                ? 'message-send'
                : 'message-receive'
            ]"
          >
            <div class="message-content-wrapper">
              <span v-html="msg.text"></span>
              <span class="message-chat-date">
                <span v-if="msg.created_at">
                  {{
                  msg.created_at | moment("jYY/jMM/jDD, h:mm A")
                  }}
                </span>
                <span v-else>{{ Date() | moment("jYY/jMM/jDD, h:mm A") }}</span>
                <span class="check-items" v-if="msg.sender_id === $parent.currentUserId">
                  <i class="fa fa-check" v-if="msg.created_at"></i>
                  <i class="far fa-clock" v-else></i>
                  <i class="fa fa-check" v-if="msg.is_read"></i>
                </span>
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div
        class="loading-container"
        v-if="$parent.isChatMessagesLoaded && $parent.isFirstMessageLoading"
      >
        <div class="image-wrapper">
          <div v-show="!$parent.isImageLoad || $parent.isImageLoad" class="lds-ring">
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
            <div class="add-image-button">
              <span class="send-file-icon">
                <i class="fas fa-paperclip"></i>
              </span>
              <input type="file" @change="$parent.previewImage" multiple accept="image/*" />
            </div>
            <textarea
              data-autoresize
              rows="1"
              placeholder="پیغامی بگذارید "
              v-model="$parent.msgToSend"
            ></textarea>
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
    init: function() {
      var self = this;

      var caret = "";
      $("textarea").keydown(function(event) {
        if ($(this).val().length === 0 && event.keyCode == 13) {
          event.preventDefault();
        } else {
          if (event.keyCode == 13 && event.shiftKey) {
            var content = this.value;
            caret = self.getCaret(this);
            self.textareaAutoSize($("textarea"));

            event.stopPropagation();
          } else if (event.keyCode == 13) {
            self.$parent.sendMessage();
            $("button").focus();
            setTimeout(function() {
              $("textarea").focus();
            }, 100);
          }
        }
      });
    },
    getCaret: function(el) {
      if (el.selectionStart) {
        return el.selectionStart;
      } else if (document.selection) {
        el.focus();

        var r = document.selection.createRange();
        if (r == null) {
          return 0;
        }

        var re = el.createTextRange(),
          rc = re.duplicate();
        re.moveToBookmark(r.getBookmark());
        rc.setEndPoint("EndToStart", re);

        return rc.text.length;
      }
      return 0;
    },
    textareaAutoSize: function(element) {
      var self = this;
      $.each(element, function() {
        var offset = this.offsetHeight - this.clientHeight;
        var resizeTextarea = function(el) {
          $(el)
            .css("height", "auto")
            .css("height", el.scrollHeight + offset);
          if (el.scrollHeight + 8 < 106) {
            $(".message-wrapper .chat-page ul").css(
              "bottom",
              +(el.scrollHeight + 8)
            );
          } else {
            $(".message-wrapper .chat-page ul").css("bottom", 106);
          }
          self.$parent.scrollToEnd(0);
        };
        $(this)
          .on("keyup input", function() {
            resizeTextarea(this);
          })
          .removeAttr("data-autoresize");
      });
    }
  },
  mounted: function() {
    this.init();
  }
};
</script>

<style></style>
