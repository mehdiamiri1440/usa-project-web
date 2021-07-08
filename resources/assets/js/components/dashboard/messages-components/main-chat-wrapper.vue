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
  margin-top: 25%;
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
  background: linear-gradient(-90deg, #21ad93, #4dc0bb);
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
  left: 15px;
  right: 0;
  top: 50px;
  bottom: 60px;
  background-size: contain;
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

.message-wrapper .message-contact-title-img:hover {
  cursor: pointer;
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

.message-wrapper .message-contact-title a {
  float: right;
  display: block;
  max-width: 300px;
  font-size: 15px;
  color: #fff;
}

.message-wrapper .message-contact-title span:first-of-type {
  max-width: 190px;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 25px;
  overflow: hidden;
  margin-top: 10px;
  float: right;
}

.message-wrapper .message-contact-title span.commetns-link {
  border-radius: 5px;
  padding: 4px 7px;
  margin-right: 12px;
  margin-top: 6px;
  background: #fff;
  color: #23ae94;
  font-size: 13px;
  float: right;
}

.message-wrapper .message-contact-title span.commetns-link i {
  position: relative;
  top: 2px;
  font-size: 12px;
}

.back-state {
  background: none;
  color: #fff;
  border: none;
  font-size: 22px;
  position: relative;
  top: 5px;
  padding: 0 6px;
  float: right;
}

.report-button {
  background: none;
  border: none;
  padding: 7px 0 0px;
  font-size: 13px;
  color: #fff;
}

.message-wrapper .chat-page ul {
  padding: 20px 20px 0;

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
  margin-bottom: 10px;
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

.message-text {
  white-space: pre-line;
}

.message-wrapper .chat-page .message-item-wrapper.message-receive {
  float: left;
  background: #fff;
  border-radius: 0 8px 8px 8px;
  min-width: 150px;
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
  font-size: 13px;
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
  width: calc(100% - 50px);
}

.send-message-form .message-input input {
  border-radius: 50px;
  background: #fff;
  border: none;
  padding: 7px 50px 8px 15px;
  transition: 150ms;
}

.send-message-form .message-input input.padding-default {
  transition: 150ms;
  padding: 7px 15px 8px 15px;
}

.capture-image {
  position: absolute;
  font-size: 21px;
  background: none;
  border: none;
  color: #919191;
  padding: 7px 15px 7px 10px;
}

.button-wrapper {
  float: right;
  line-height: 1.1;
  position: relative;
}

.send-message-form .button-wrapper .item-wrapper {
  width: 40px;
  height: 40px;
  background: linear-gradient(90deg, #00c569 0%, #21ad93 100%);
  border-radius: 35px;
}

.send-message-form .button-wrapper .item-wrapper .send-message-button {
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  height: 40px;
  position: absolute;
  right: calc(50% - 21px);
  padding: 7px 0 0;
}

.send-message-form .button-wrapper .voice-message-button {
  position: absolute;
  right: 0;
  left: 0;
  top: 0px;
  background: none;
  border: none;
  font-size: 19px;
  bottom: 0;
  padding: 4px 13px 0;
}

.button-wrapper .send-message-button svg {
  width: 19px;
  height: 19px;
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

.mobile-like-user {
  position: absolute;
  z-index: 1;
  background: #e8f4f8;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);
  padding: 25px 0;
  margin-top: 20px;
}

.mobile-like-user.delsa-info-box {
  background: #edf8e6;
  padding: 23px 0;
  max-width: 460px;
  margin-left: auto;
  float: initial !important;
  overflow: hidden;
  margin-right: auto;
  position: relative;
  top: 17px;
}

.mobile-like-user.delsa-info-box .title-item {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.mobile-like-user.delsa-info-box .green-button {
  margin: 20px 0 0;
  background: #4dc0bb;
  border-radius: 8px;
  padding: 7px 25px;
}

.mobile-like-user.success {
  background: #f2f6e7;
  padding: 20px 0 0;
}

.mobile-like-user .close-rating {
  position: absolute;
  right: 0;
  background: none;
  border: none;
  color: #777;
  padding: 5px 15px;
  top: 0px;
}

.mobile-like-user .title-item {
  color: #313a43;
  font-size: 18px;
  font-weight: bold;
  margin: 0 auto 15px;
  line-height: 1.618;
}

.mobile-like-user.success .title-item {
  margin: 17px auto 23px;
}

.mobile-like-user.success .likes-wrapper > div {
  font-size: 45px;
  background: #fff;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 55px;
  padding-top: 19px;
  color: #50a791;
}

.mobile-like-user .likes-wrapper {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
}

.mobile-like-user.success .likes-wrapper {
  display: block;
}

.mobile-like-user .likes-wrapper > button {
  flex: 1;
  max-width: 120px;
  background: none;
  border: none;
  color: #21ad93;
}

.mobile-like-user .likes-wrapper > button.dislike {
  color: #e41c38;
}

.mobile-like-user .likes-wrapper > button.dislike i {
  background: #e41c38;
  transform: rotate(-180deg);
}

.mobile-like-user .likes-wrapper > button i {
  display: block;
  font-size: 25px;
  background: #21ad93;
  color: #fff;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  border-radius: 50px;
  padding-top: 11px;
}

.messenger-notice {
  text-align: center;
  background: #fff8c1;
  padding: 7px;
  border-radius: 8px;
  margin-top: 20px;
  line-height: 1.618;
  color: #777;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.16);
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

.verified-user {
  float: right;
  top: 7px;
  right: 5px;
}

.overlay-bg-guide {
  position: absolute;
  width: 100%;
  z-index: 5;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  bottom: 0;
}
.guide-arrow-item {
  margin-top: 80px;
}

.guide-arrow-item svg {
  max-width: 130px;
  right: 35%;
  position: relative;
}

.guide-text {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 15px;
  line-height: 1.618;
}

.review-loader {
  padding: 15px 0;
}

.spinner-border {
  width: 4.1rem;
  height: 4.1rem;
  top: -5px;
  position: relative;
  left: 2px;
  border-width: 3px;
  color: #23ae95;
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
  border-radius: 0 0 8px 8px;
}
.message-button-wrapper button {
  display: block;
  width: 100%;
  background: #21ad93;
  text-align: center;
  color: #fff;
  border: none;
  font-size: 13px;
  padding: 5px 15px;
  margin-top: 8px;
}
.message-button-wrapper button i {
  width: 15px;
  transform: translateX(0);
  transition: 300ms;
}

.message-button-wrapper.link-button button {
  background: #5d9fd8;
}

.message-button-wrapper.link-button button.edit-button {
  background: #556080;
}

.message-button-wrapper.link-button button i.angle-icon {
  position: relative;
  top: 2px;
  margin-right: 6px;
}

.message-button-wrapper.link-button button:hover i.angle-icon {
  transform: translateX(-3px);
  transition: 300ms;
}

.message-button-wrapper.link-button button.delsa-button {
  background: linear-gradient(-90deg, #21ad93, #4dc0bb);
  transition: 300ms;
}

.message-button-wrapper.link-button button.delsa-button {
  background: linear-gradient(-45deg, #00c569, #23d5ab, #21ad93, #23a6d5);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  color: #fff !important;
  border: none;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.modal-dialog {
  width: 400px;
}
.modal-content {
  overflow: hidden;
  border-radius: 12px;
}
.close-modal {
  font-size: 20px;

  color: #777;

  position: absolute;

  right: 0;

  padding: 8px 15px 2px;

  top: 0;
}

.modal-title {
  font-size: 16px;

  font-weight: 800;

  color: #474747;

  text-align: center;
}

.modal-header {
  padding: 9px 15px 10px;
}

.modal-body {
  padding: 0 15px;
}

@media screen and (max-width: 1199px) {
  .message-wrapper .message-contact-title {
    position: relative;
    z-index: 5;
  }
}

@media screen and (max-width: 768px) {
  #fitler-modal > div {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .modal-content {
    min-height: 100%;

    border-radius: 0;

    border: none;

    float: right;

    width: 100%;
  }
}

@media screen and (max-width: 767px) {
  .chat-page .bg-wrapper {
    left: 0;
  }
  .guide-arrow-item {
    margin-top: 120px;
  }

  .overlay-bg-guide {
    top: -60px;
  }

  #chat-menu-items {
    left: 54px;
  }

  .message-wrapper .message-contact-title {
    padding: 8px;
  }
  .notice-actions {
    width: 100%;
  }

  .message-button-wrapper button i {
    font-size: 12px;
  }
  .is-phone-active-wrapper {
    min-width: 200px;
  }
  .is-phone-active-text {
    font-size: 18px;
  }
}

@media screen and (max-width: 500px) {
  .message-wrapper .message-contact-title a {
    max-width: 190px;
  }

  .message-wrapper .message-contact-title span:first-of-type {
    max-width: 100px;
  }

  .message-wrapper .message-contact-title span.commetns-link {
    margin-right: 8px;
    margin-top: 7px;
    padding: 4px;
  }

  .verified-user {
    right: 2px;
  }

  .message-wrapper .message-contact-title-img {
    margin-left: 5px;
  }
}

@media screen and (max-width: 365px) {
  .message-wrapper .message-contact-title a {
    max-width: 180px;
  }

  .message-wrapper .message-contact-title span:first-of-type {
    max-width: 90px;
  }
}

@media screen and (max-width: 355px) {
  .message-wrapper .message-contact-title a {
    max-width: 154px;
  }

  .message-wrapper .message-contact-title span:first-of-type {
    max-width: 66px;
  }

  .message-wrapper .message-contact-title span.commetns-link {
    margin-right: 6px;
    margin-top: 5px;
  }

  .message-wrapper .message-contact-title-img {
    margin-left: 5px;
  }
  .back-state {
    padding: 0 0px 0 5px;
  }
}
</style>

<template>
  <div class="row">
    <div v-show="$parent.isGuideActive" class="overlay-bg-guide hidden-lg">
      <div class="guide-arrow-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="122.37"
          height="122.37"
          viewBox="0 0 122.37 122.37"
        >
          <defs>
            <pattern
              id="pattern"
              width="1"
              height="1"
              patternTransform="matrix(1, 0, 0, -1, 0, 196)"
              viewBox="-0.674 -0.587 98 98"
            >
              <image
                preserveAspectRatio="none"
                width="98"
                height="98"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDItMDZUMTA6Mzg6MTArMDM6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAyLTA2VDEwOjM4OjQzKzAzOjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAyLTA2VDEwOjM4OjQzKzAzOjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjllZGU0Nzg2LTY2Y2Yt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"
              />
            </pattern>
          </defs>
          <rect
            id="arrow-up-icon"
            width="98"
            height="98"
            transform="translate(28.652 122.37) rotate(-107)"
            fill="url(#pattern)"
          />
        </svg>
      </div>
      <div class="guide-text text-rtl">
        در مورد این کاربر نظر دهید و نظرات دیگران را ببینید.
      </div>
    </div>
    <div class="message-contact-title">
      <div class="contact-title-contents pull-right">
        <button
          @click.prevent="$parent.selectedContact = !$parent.selectedContact"
          class="back-state hidden-sm hidden-md hidden-lg"
        >
          <i class="fa fa-arrow-right"></i>
        </button>
        <div
          @click.prevent="$parent.selectedContact = !$parent.selectedContact"
          class="message-contact-title-img hidden-sm hidden-md hidden-lg"
        >
          <img
            v-if="$parent.selectedContact.profile_photo"
            :src="$parent.str + '/' + $parent.selectedContact.profile_photo"
            :alt="$parent.selectedContact.first_name[0]"
          />

          <img v-else src="../../../../img/user-defult.png" />
        </div>
        <router-link
          :to="{ path: '/profile/' + $parent.selectedContact.user_name }"
          tag="div"
          class="message-contact-title-img hidden-xs"
        >
          <img
            v-if="$parent.selectedContact.profile_photo"
            :src="$parent.str + '/' + $parent.selectedContact.profile_photo"
            :alt="$parent.selectedContact.first_name[0]"
          />

          <img v-else src="../../../../img/user-defult.png" />
        </router-link>

        <router-link
          :to="{ path: '/profile/' + $parent.selectedContact.user_name }"
        >
          <span>
            {{
              $parent.selectedContact.first_name +
              " " +
              $parent.selectedContact.last_name
            }}
          </span>
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
          <span class="commetns-link"> نظر کاربران </span>
        </router-link>
      </div>
      <div class="head-action-buttons pull-left">
        <div class="head-action-buttons pull-left">
          <button
            type="button"
            class="report-button hidden-lg"
            @click.prevent="
              $parent.activeReportModal($parent.selectedContact.contact_id)
            "
          >
            <i class="fas fa-exclamation-circle"></i>
            گزارش تخلف
          </button>
        </div>
      </div>
    </div>

    <div class="chat-page" v-if="$parent.selectedContact">
      <div class="bg-wrapper"></div>
      <ul
        @scroll="myFunction()"
        id="chat-list"
        :class="[
          $parent.chatMessagesLoader && $parent.isFirstMessageLoading
            ? 'chat-not-loaded'
            : 'chat-loaded',
        ]"
      >
        <li
          :key="msg.id"
          v-for="(msg, index) in $parent.chatMessages"
          :class="{ 'margin-top-10': checkMessageName(index, index - 1) }"
        >
          <!-- <div class="message-date" v-if="msg.isDateShow">
            <span>
              {{ msg.created_at | moment("jYYYY/jMM/jDD") }}
            </span>
          </div> -->
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
                    msg.created_at | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                  <span v-else>{{
                    Date() | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                  <div class="message-button-wrapper">
                    <button>
                      تماس
                      <i class="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </span>
              </a>
              <div class="hidden-xs">
                <span class="message-text" v-text="msg.text"></span>
                <span class="message-chat-date">
                  <span v-if="msg.created_at">{{
                    msg.created_at | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                  <span v-else>{{
                    Date() | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                </span>
              </div>
            </div>
            <div
              v-else-if="msg.p_id && !checkMessageListClass(msg.sender_id)"
              class="message-content-wrapper is-phone-active-wrapper"
            >
              <!--msg.created_at | moment("jYY/jMM/jDD, HH:mm") -->
              <div>
                <span class="message-text" v-text="msg.text"></span>

                <span class="message-chat-date">
                  <span v-if="msg.created_at">{{
                    msg.created_at | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                  <span v-else>{{
                    Date() | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                  <div class="message-button-wrapper link-button">
                    <button @click.prevent="openProduct(msg.p_id)">
                      <i class="fa fa-angle-left angle-icon"></i>
                      جزییات و تصاویر محصول
                      <i
                        v-if="!openProductLoader"
                        class="fas fa-clipboard-check"
                      ></i>
                      <i v-else class="fas fa-circle-notch fa-spin"></i>
                    </button>
                  </div>
                </span>
              </div>
            </div>
            <div
              v-else-if="
                msg.p_id &&
                checkMessageListClass(msg.sender_id) &&
                $parent.currentUser.user_info.is_seller
              "
              class="message-content-wrapper is-phone-active-wrapper"
            >
              <!--msg.created_at | moment("jYY/jMM/jDD, HH:mm") -->
              <div>
                <span class="message-text" v-text="msg.text"></span>

                <span class="message-chat-date">
                  <span v-if="msg.created_at">{{
                    msg.created_at | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                  <span v-else>{{
                    Date() | moment("jYYYY/jMM/jDD, HH:mm")
                  }}</span>
                  <div class="message-button-wrapper link-button">
                    <button
                      class="edit-button"
                      v-if="
                        $parent.currentUser.user_info.active_pakage_type > 0
                      "
                      @click.prevent="openEditPriceModal(msg.p_id)"
                    >
                      <i class="fa fa-angle-left angle-icon"></i>
                      ویرایش قیمت
                      <i v-if="!editPriceLoader" class="fa fa-edit"></i>
                      <i v-else class="fas fa-circle-notch fa-spin"></i>
                    </button>
                    <button
                      v-else
                      class="delsa-button"
                      @click.prevent="openDelasModal()"
                    >
                      <i class="fa fa-angle-left angle-icon"></i>
                      استخدام منشی آنلاین
                      <i class="fas fa-chess-queen"></i>
                    </button>
                  </div>
                </span>
              </div>
            </div>

            <div v-else class="message-content-wrapper">
              <span class="message-text" v-text="msg.text"></span>

              <span class="message-chat-date">
                <span v-if="msg.created_at">{{
                  msg.created_at | moment("jYYYY/jMM/jDD, HH:mm")
                }}</span>
                <span v-else>{{
                  Date() | moment("jYYYY/jMM/jDD, HH:mm")
                }}</span>
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
        <li
          v-if="$parent.isNoticeActive && !$parent.chatMessagesLoader"
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
        <li
          v-if="checkDelsaInfoBoxIsActive()"
          class="mobile-like-user delsa-info-box"
        >
          <button class="close-rating" @click="$parent.delsaInfo = false">
            <i class="fa fa-times"></i>
          </button>
          <p class="title-item">منشی آنلاین خود را استخدام کنید.</p>
          <button class="green-button" @click.prevent="openDelasModal()">
            <i class="fa fa-info-circle"></i>
            اطلاعات بیشتر
          </button>
        </li>
        <li
          v-else-if="checkMobileWidth() && checkReviewIsActive()"
          class="mobile-like-user"
          :class="{ success: $parent.isReviewSubmited }"
        >
          <div v-if="!$parent.isReviewSubmited">
            <button class="close-rating" @click="$parent.setLikeBoxCookie()">
              <i class="fa fa-times"></i>
            </button>
            <p class="title-item">
              <span class="gray-text"> از ارتباط با </span>
              <span>
                {{
                  $parent.selectedContact.first_name +
                  " " +
                  $parent.selectedContact.last_name
                }}
              </span>
            </p>
            <div class="likes-wrapper" v-if="!$parent.reviewSubmitLoader">
              <button class="like" @click="$parent.registerReview(5)">
                <i class="fa fa-thumbs-up"></i>
                <span> راضی هستم </span>
              </button>

              <button class="dislike" @click="$parent.registerReview(1)">
                <i class="fa fa-thumbs-up"></i>
                <span> راضی نیستم </span>
              </button>
            </div>
            <div class="review-loader" v-else>
              <div class="spinner-border">
                <span class="sr-only"></span>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="likes-wrapper">
              <div>
                <i class="fa fa-check"></i>
              </div>
              <p class="title-item">از ثبت نظر شما سپاسگزاریم.</p>
            </div>
          </div>
        </li>
      </ul>
      <div
        class="loading-container"
        v-if="$parent.chatMessagesLoader && $parent.isFirstMessageLoading"
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
        <form @v-on:submit.prevent="$parent.sendMessage()">
          <div class="message-input">
            <input
              class="padding-default"
              type="text"
              placeholder="پیغامی بگذارید "
              v-model="$parent.msgToSend"
            />
          </div>

          <div class="button-wrapper">
            <div class="item-wrapper">
              <button
                type="submit"
                class="send-message-button scale-up-center-full"
                @click.prevent="$parent.sendMessage()"
              >
                <!-- @click.prevent="$parent.sendMessage()" -->
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
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import swal from "../../../sweetalert.min.js";
import { eventBus } from "../../../router/router";
export default {
  data() {
    return {
      isVoiceRecord: false,
      isChat: false,
      openProductLoader: false,
      editPriceLoader: false,
    };
  },
  methods: {
    myFunction() {
      let listWrapper = $("#chat-list");
      let scrollPosition = listWrapper.scrollTop();
      let totalHeight = listWrapper[0].scrollHeight;
      let position = {
        scrollPosition,
        wrapperHeight: listWrapper.height() + 20,
        totalHeight,
      };
      if (scrollPosition <= 150 && !this.$parent.chatMessagesLoader) {
        this.$parent.getMoreChat(position);
      }
    },

    init: function () {
      this.userGuide();
      this.hideCollapses();
      this.$parent.userHasNotice();
      this.$parent.userHasLikeBox();
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
    checkMobileWidth() {
      if ($(window).width() <= 1199) {
        return true;
      } else {
        return false;
      }
    },
    recordVoice() {
      console.log("voice");
    },
    userGuide() {
      $(".overlay-bg-guide").on("click", () => {
        this.$parent.setUserGuideCookie();
        $(".overlay-bg-guide").fadeOut("fast");
      });
      if (this.$parent.isGuideActive) {
        setTimeout(() => {
          this.$parent.setUserGuideCookie();
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
    },
    openProduct(productId) {
      this.openProductLoader = true;
      axios
        .post("/get_product_by_id", { product_id: productId })
        .then((response) => {
          var anchor = document.createElement("a");
          anchor.href = this.getProductUrl(response.data.product);
          anchor.target = "_blank";
          anchor.click();
          this.openProductLoader = false;
        });
    },
    getProductUrl(product) {
      return (
        "/product-view/خرید-عمده-" +
        product.main.sub_category_name.replace(" ", "-") +
        "/" +
        product.main.category_name.replace(" ", "-") +
        "/" +
        product.main.id
      );
    },
    checkDelsaInfoBoxIsActive() {
      if (
        this.$parent.delsaInfo &&
        this.$parent.chatMessages.length == 1 &&
        this.$parent.chatMessages[0].p_id &&
        !this.$parent.isLatestMessage &&
        this.$parent.currentUser.user_info.is_seller &&
        this.$parent.currentUser.user_info.active_pakage_type == 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkReviewIsActive() {
      if (
        this.$parent.userAllowedReview &&
        this.$parent.isLikeBoxActive &&
        !this.$parent.isLatestMessage &&
        !this.$parent.chatMessagesLoader
      ) {
        return true;
      } else {
        return false;
      }
    },
    openDelasModal() {
      $("#delsa-promotion-modal").modal("show");
    },
    openEditPriceModal(productId) {
      this.editPriceLoader = true;

      axios
        .post("/get_product_by_id", { product_id: productId })
        .then((response) => {
          eventBus.$emit("editProductData", response.data.product);
          $("#edit-price-modal").modal("show");
          this.editPriceLoader = false;
        });
    },
  },
  mounted: function () {
    this.init();
  },
  watch: {
    "$parent.msgToSend"(value) {
      if (value) {
        this.isChat = true;
      } else {
        this.isChat = false;
      }
    },
    "$parent.isGuideActive"(value) {
      if (value) {
        setTimeout(() => {
          this.$parent.setUserGuideCookie();
          $(".overlay-bg-guide").fadeOut();
        }, 1000);
      }
    },
  },
};
</script>
