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
  margin-left: 20px;
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
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 30px;
  overflow: hidden;
  width: 135px;
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
  padding: 0px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-top: 5px;
}

.report-button:hover {
  color: #00c569;
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
.message-content-wrapper > span:first-of-type {
  white-space: pre-wrap;
  overflow-wrap: break-word;
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

/* .send-message-form .message-input input {
  border-radius: 50px;
  background: #fff;
  border: none;
} */

.send-message-form .message-input textarea {
  border-radius: 25px;
  background: #fff;
  border: none;
  max-width: 100%;
  min-width: 100%;
  max-height: 98px;
  min-height: 50px;
  height: 50px;
  box-sizing: border-box;
  resize: none;
  -webkit-transition: height 0.1s;
  -moz-transition: height 0.1s;
  transition: height 0.1s;
  padding: 9px 15px;
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

        <router-link
          :to="{ path: '/profile/' + $parent.selectedContact.user_name }"
        >
          <span
            v-text="
              $parent.selectedContact.first_name +
              ' ' +
              $parent.selectedContact.last_name
            "
          ></span>
        </router-link>
      </div>
      <div class="head-action-buttons pull-left">
        <button
          type="button"
          class="green-button report-button"
          @click.prevent="
            $parent.activeReportModal($parent.selectedContact.contact_id)
          "
        >
          گزارش تخلف
        </button>
        <button
          @click.prevent="$parent.selectedContact = !$parent.selectedContact"
          class="back-state hidden-sm hidden-md hidden-lg"
        >
          <i class="fa fa-arrow-left"></i>
        </button>
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
              msg.sender_id == $parent.currentUserId
                ? 'message-send'
                : 'message-receive',
            ]"
          >
            <div class="message-content-wrapper">
              <span v-text="msg.text"></span>
              <span class="message-chat-date">
                <span v-if="msg.created_at">
                  {{ msg.created_at | moment("jYY/jMM/jDD, h:mm A") }}
                </span>
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
          <!-- <div class="message-input">
            <input
              type="text"
              placeholder="پیغامی بگذارید "
              v-model="$parent.msgToSend"
            />
          </div> -->

          <div class="message-input">
            <textarea
              class="txta"
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
    init: function () {
      var self = this;
      this.textareaAutoSize();
      $("textarea").keydown(function (event) {
        if ($(this).val().length === 0 && event.keyCode == 13) {
          event.preventDefault();
        }
      });
      $("textarea").keyup(function (event) {
        if ($(this).val().length === 0 && event.keyCode == 13) {
          event.preventDefault();
        } else {
          if (event.keyCode == 13 && event.shiftKey) {
          } else if (event.keyCode == 13) {
            console.log("send");

            self.$parent.sendMessage();
            $("textarea").css("height", "50px");
          }
        }
      });
    },
    textareaAutoSize: function () {
      let textareas = document.querySelectorAll(".txta"),
        hiddenDiv = document.createElement("div"),
        content = null;

      // Adds a class to all textareas
      for (let j of textareas) {
        j.classList.add("txtstuff");
      }

      // Build the hidden div's attributes

      // The line below is needed if you move the style lines to CSS
      // hiddenDiv.classList.add('hiddendiv');

      // Add the "txta" styles, which are common to both textarea and hiddendiv
      // If you want, you can remove those from CSS and add them via JS
      hiddenDiv.classList.add("txta");

      // Add the styles for the hidden div
      // These can be in the CSS, just remove these three lines and uncomment the CSS
      hiddenDiv.style.display = "none";
      hiddenDiv.style.whiteSpace = "pre-wrap";
      hiddenDiv.style.wordWrap = "break-word";
      hiddenDiv.style.lineHeight = "1.618";

      // Loop through all the textareas and add the event listener
      for (let i of textareas) {
        (function (i) {
          // Note: Use 'keyup' instead of 'input'
          // if you want older IE support
          i.addEventListener("input", function () {
            // Append hiddendiv to parent of textarea, so the size is correct
            i.parentNode.appendChild(hiddenDiv);

            // Remove this if you want the user to be able to resize it in modern browsers
            i.style.resize = "none";

            // This removes scrollbars
            i.style.overflow = "hidden";

            // Every input/change, grab the content
            content = i.value;

            // Add the same content to the hidden div

            // This is for old IE
            content = content.replace(/\n/g, "<br>");

            // The <br ..> part is for old IE
            // This also fixes the jumpy way the textarea grows if line-height isn't included
            hiddenDiv.innerHTML = content + "<br/>";

            // Briefly make the hidden div block but invisible
            // This is in order to read the height
            hiddenDiv.style.visibility = "hidden";
            hiddenDiv.style.display = "block";
            i.style.height = hiddenDiv.offsetHeight + 27 + "px";

            // Make the hidden div display:none again
            hiddenDiv.style.visibility = "visible";
            hiddenDiv.style.display = "none";
          });
        })(i);
      }
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
  },
  mounted: function () {
    this.init();
  },
};
</script>
