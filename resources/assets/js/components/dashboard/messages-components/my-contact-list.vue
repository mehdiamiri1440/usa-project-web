<style scoped>
.contact-body .contact-search {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
}

.contact-items {
  padding-top: 102px;
}

.contact-items.is-buyer-list {
  padding-top: 60px;
}

.contact-body .contact-search .contact-search-input-wrapper {
  position: relative;
  min-width: 100%;
  margin: 10px auto;
  padding: 0 10px;
}

.contact-body .contact-search .contact-search-input-wrapper > i {
  position: absolute;
  right: 20px;
  font-size: 16px;
  color: #5f6368;
  top: 10px;
}

.contact-body .contact-search .contact-search-input-wrapper input {
  padding: 6px 35px 5px 15px;
  border-radius: 8px;
}

.contact-body .contact-search .contact-search-input-wrapper > button {
  position: absolute;
  left: 7px;
  font-size: 16px;
  color: #919191;
  top: 12px;
  background: none;
  border: none;
  padding: 7px 15px 1px;
}

.contact-body .contact-image,
.contact-body .channel-image {
  width: 45px;
  height: 45px;
  float: right;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #dddddd;
}

.contact-body .channel-image img {
  width: 100%;
  height: 100%;
}

.contact-body .contact-item a {
  font-size: 13px;
  color: #666;
  overflow: hidden;
  padding: 10px 7px;
  border-bottom: 1px solid #ededed;
  display: block;
  transition: 200ms;
  border-left: 2px solid #fff;
}

.contact-body .contact-item a:hover,
.contact-body .contact-item a.active {
  background: #fafafa;
  transition: 200ms;
  border-left: 2px solid #00c569;
}

.contact-body .contact-item:last-of-type a {
  border-bottom: none;
}

.contact-body .contact-item span.contact-name {
  float: right;
  position: relative;
  font-size: 14px;
  max-width: calc(100% - 85px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
  font-weight: 500;
}

.contact-body .contact-item span.contact-last-message {
  float: right;
  width: calc(100% - 60px);
  font-weight: lighter;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: rtl;
  text-align: right;
}

.contact-body .contact-item .contact-date {
  float: left;
  padding-top: 5px;
  width: 50px;
  direction: ltr;
  text-align: center;
}

.contact-body .contact-item .my-contact-info-wrapper,
.contact-body .contact-item .my-channel-name-wraopper {
  float: right;
  padding-top: 6px;
  direction: ltr;
  text-align: left;
  width: calc(100% - 45px);
  padding-right: 15px;
}

.contact-body .contact-item .my-channel-name-wraopper {
  padding-top: 15px;
}

.contact-body .contact-item .my-channel-name-wraopper .icon-wrapper {
  font-size: 16px;
  color: #999;
  float: left;
  margin-left: 15px;
}

.last-message-date {
  display: inline-block;
  height: 17px;
  width: 70px;
  font-size: 12px;
  line-height: 2;
  text-align: center;
}

.count-number {
  display: inline-block;
  height: 17px;
  width: 17px;
  background: #00c569;
  color: #fff;
  border-radius: 50px;
  font-size: 10px;
  line-height: 2;
}
.count-number-wrapper {
  width: 60px;
  float: left;
  text-align: center;
}
.empty-list {
  text-align: center;
  padding: 10px 15px 0;
}
.empty-list p {
  font-size: 16px;
  font-weight: bold;
  color: #777;
}
.empty-list i {
  margin: 5px;
}

.load-more {
  margin: 0px 0 0;
  display: inline-block;
  background: #00c569;
  color: #fff;
  padding: 10px 25px;
  border-radius: 0px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  border: none;
  width: 100%;
}

.verified-user {
  line-height: 1;
  font-size: 15px;
  position: relative;
  right: 3px;
  top: -2px;
  float: right;
}

.verified-user::before {
  top: 4px;
  left: 3px;
  font-size: 9px;
}

.contacts-switch-buttons-wrapper {
  float: right;
  width: 100%;
}

.contacts-switch-buttons-wrapper .switch-button-item {
  float: right;
  width: 50%;
}

.contacts-switch-buttons-wrapper .contact-button {
  border: none;
  width: 100%;
  font-size: 13px;
  padding: 8px 0;
  position: relative;
  color: #666;
  background: #f0f0f0;
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

i.fa-star {
  font-size: 16px;
  background: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  background-clip: border-box;
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  top: 2px;
}

.contact-button.active {
  border-radius: 4px 4px 0 0;
}
.buyad-lists-wrapper .contact-item > button {
  background: #fff;
  border: none;
  border-bottom: 2px solid #dddddd;
  padding: 0;
  text-align: center;
}
.buyad-expier {
  color: #556080;
}
.buyad-notice {
  color: #aeaeae;
}
.request-contact-image {
  width: 30px;
  height: 30px;
  float: right;
}
.buyad-info {
  font-size: 15px;
  padding: 5px 0;
  font-weight: bold;
  color: #777;
}
.buyad-info span {
  color: #556080;
}
.buyad-header {
  padding: 8px 5px;
  float: right;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
}
.contact-body .contact-item .my-contact-info-wrapper {
  float: right;
  padding-top: 2px;
  direction: ltr;
  text-align: left;
  width: calc(100% - 45px);
  padding-right: 8px;
}
.contact-body .contact-item .my-contact-info-wrapper:last-of-type {
  padding-top: 6px;
}

.empty-list i {
  color: #777;
  margin-top: 50px;
  font-size: 50px;
  text-align: center;
  margin-bottom: 10px;
  display: block;
}

.empty-list p:first-of-type {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.618;
  margin-top: 11px;
}

.user-button {
  background: #00c569;
  color: #fff;
  border-radius: 4px;
  padding: 8px 0;
  max-width: 200px;
  margin: 15px auto;
  transition: 300ms;
  display: block;
  border: none;
  width: 100%;
  font-size: 17px;
  font-weight: bold;
}

.user-button :hover {
  /* background: #00c569; */
  transition: 300ms;
}
.wrapper-no-message
{
  margin-top:115px;
}
@media screen and (max-width: 991px) {
  .contact-items {
    padding-bottom: 42px;
  }
}
@media (max-width: 768px) {
  .contact-body .contact-search .contact-search-input-wrapper input {
    border: none;
    background: #f2f2f2;
    border-radius: 4px;
  }
}
</style>

<template>
  <div class="contact-body my-contacts">
    <div class="contact-search">
      <div class="contact-search-input-wrapper">
        <input
          type="text"
          placeholder="جستجو پیام"
          v-model="$parent.contactNameSearchText"
        />
        <i class="fa fa-search"></i>
        <button
          v-if="$parent.contactNameSearchText"
          @click.prevent="$parent.contactNameSearchText = ''"
        >
          <i class="fa fa-times"></i>
        </button>
      </div>
      <div v-if="$parent.userType" class="contacts-switch-buttons-wrapper">
        <div class="switch-button-item">
          <router-link
            :to="{ name: 'messagesRequestSeller' }"
            tag="button"
            class="contact-button"
          >
            <i class="fa fa-star"></i>

            خریداران پیشنهادی
          </router-link>
        </div>

        <div class="switch-button-item">
          <button class="contact-button active">
            <i class="fas fa-comment-alt"></i>
            پیام ها
          </button>
        </div>
      </div>
    </div>

    <div v-if="$parent.contactList.length === 0" class="not-found-item">
      <div
        class="image-wrapper"
        v-if="!$parent.contactNameSearchText && !$parent.isContactListLoaded"
      >
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

      <div
        v-else-if="$parent.contactNameSearchText && !$parent.isSearchingContact"
      >
        <div class="wrapper-no-message">
          <div class="wrapper_no_pro">
            <div class="content_no_pic">
              <img src="../../../../img/messages_not_found.svg" alt="" />
            </div>

            <div class="text_no_pic standard-line text-rtl">
              <p>هیچ پیام جدیدی ندارید!</p>
              <p class="text-description_no_pic">
                برای شروع گفتگو با خریداران و فروشندگان باسکول، پیام ارسال کنید.
              </p>
            </div>
            <router-link
              v-if="$parent.userType"
              :to="{ name: 'buyAdRequestsSeller' }"
              tag="button"
              class="btn-orange-empty-state text-rtl"
            >
              <i class="fas fa-user-friends"></i> مشاهده خریداران
            </router-link>
            <router-link
              v-else
              :to="{ name: 'productList' }"
              tag="button"
              class="btn-orange-empty-state text-rtl"
            >
              <i class="fas fa-user-friends"></i> شروع چت با فروشندگان
            </router-link>
          </div>
        </div>
      </div>

      <div v-else-if="$parent.isSearchingContact" class="contact-is-search">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div
        v-else-if="$parent.isContactListLoaded"
        class="contact-items"
        :class="{ 'is-buyer-list': !$parent.userType }"
      >
        <ul>
          <li class="contact-item">
            <a
              href="#"
              @click.prevent="$parent.openChannel()"
              :class="{
                active: $parent.isChanleActive,
              }"
            >
              <div class="channel-image">
                <img src="../../../../img/logo/512-buskool-logo.jpg" />
              </div>
              <div
                v-if="$parent.channelInfo.unread_contents == 0"
                class="my-channel-name-wraopper"
              >
                <span class="contact-name text-rtl"> کانال رسمی باسکول </span>
                <button
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
                <p class="icon-wrapper">
                  <i class="fa fa-bullhorn"></i>
                </p>
              </div>
              <div v-else class="my-contact-info-wrapper">
                <span class="contact-name text-rtl"> کانال رسمی باسکول </span>

                <button
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
                <p class="last-message-date">
                  {{
                    $parent.channelInfo.last_content_date
                      | moment("jYYYY/jMM/jDD")
                  }}
                </p>
              </div>

              <div class="my-contact-info-wrapper">
                <span
                  class="contact-last-message"
                  v-text="$parent.channelInfo.last_content_title"
                ></span>

                <div class="count-number-wrapper">
                  <p
                    class="count-number"
                    v-if="$parent.channelInfo.unread_contents !== 0"
                    v-text="$parent.channelInfo.unread_contents"
                  ></p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <div class="wrapper_no_pro">
              <div class="content_no_pic">
                <img src="../../../../img/messages_not_found.svg" alt="" />
              </div>

              <div class="text_no_pic standard-line text-rtl">
                <p>هیچ پیام جدیدی ندارید!</p>
                <p class="text-description_no_pic">
                  برای شروع گفتگو با خریداران و فروشندگان باسکول، پیام ارسال
                  کنید.
                </p>
              </div>
              <router-link
                v-if="$parent.userType"
                :to="{ name: 'buyAdRequestsSeller' }"
                tag="button"
                class="btn-orange-empty-state text-rtl"
              >
                <i class="fas fa-user-friends"></i> مشاهده خریداران
              </router-link>
              <router-link
                v-else
                :to="{ name: 'productList' }"
                tag="button"
                class="btn-orange-empty-state text-rtl"
              >
                <i class="fas fa-user-friends"></i> شروع چت با فروشندگان
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div
      v-else
      class="contact-items"
      :class="{ 'is-buyer-list': !$parent.userType }"
    >
      <ul>
        <li class="contact-item">
          <a
            href="#"
            @click.prevent="$parent.openChannel()"
            :class="{
              active: $parent.isChanleActive,
            }"
          >
            <div class="channel-image">
              <img src="../../../../img/logo/512-buskool-logo.jpg" />
            </div>
            <div
              v-if="$parent.channelInfo.unread_contents == 0"
              class="my-channel-name-wraopper"
            >
              <span class="contact-name text-rtl"> کانال رسمی باسکول </span>
              <button
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
              <p class="icon-wrapper">
                <i class="fa fa-bullhorn"></i>
              </p>
            </div>
            <div v-else class="my-contact-info-wrapper">
              <span class="contact-name text-rtl"> کانال رسمی باسکول </span>

              <button
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
              <p class="last-message-date">
                {{
                  $parent.channelInfo.last_content_date
                    | moment("jYYYY/jMM/jDD")
                }}
              </p>
            </div>

            <div class="my-contact-info-wrapper">
              <span
                class="contact-last-message"
                v-text="$parent.channelInfo.last_content_title"
              ></span>

              <div class="count-number-wrapper">
                <p
                  class="count-number"
                  v-if="$parent.channelInfo.unread_contents !== 0"
                  v-text="$parent.channelInfo.unread_contents"
                ></p>
              </div>
            </div>
          </a>
        </li>
        <li
          class="contact-item"
          v-for="(contact, index) in $parent.contactList"
          :key="index"
        >
          <a
            href="#"
            @click.prevent="$parent.loadChatHistory(contact, index, false)"
            :class="{
              active:
                $parent.selectedContact.contact_id == contact.contact_id &&
                !$parent.isChanleActive,
            }"
          >
            <div
              v-if="contact.profile_photo"
              class="contact-image"
              :style="{
                backgroundImage:
                  'url(' + $parent.str + '/' + contact.profile_photo + ')',
              }"
            ></div>
            <div
              v-else
              class="contact-image"
              :style="{
                backgroundImage:
                  'url(' + $parent.assets + 'assets/img/user-defult.png' + ')',
              }"
            ></div>
            <div class="my-contact-info-wrapper">
              <span class="contact-name text-rtl">
                {{ contact.first_name + " " + contact.last_name }}
              </span>
              <button
                v-if="contact.is_verified"
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
              <p class="last-message-date">
                {{ contact.last_msg_time_date | moment("jYYYY/jMM/jDD") }}
              </p>
            </div>

            <div class="my-contact-info-wrapper">
              <span
                class="contact-last-message"
                v-text="contact.last_msg.last_msg_text"
              ></span>

              <div class="count-number-wrapper">
                <p
                  class="count-number"
                  v-if="contact.unread_msgs_count !== 0"
                  v-text="contact.unread_msgs_count"
                ></p>
              </div>
            </div>
          </a>
        </li>
        <li
          v-if="$parent.showLoadMoreBtn && !$parent.contactNameSearchText"
          class="contact-item"
        >
          <button
            class="btn load-more"
            @click.prevent="$parent.loadMoreContacts()"
          >
            ادامه پیام ها
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>


<script >
export default {
  data: function () {
    return {
      is_contact: true,
    };
  },
  methods: {
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
  watch: {
    "$parent.contactList": function () {
      if (this.$parent.contactList) {
        setTimeout(() => {
          this.activeComponentTooltip();
        }, 10);
      }
    },
    "$parent.isChanleActive": function () {
      if (this.$parent.isChanleActive) {
        setTimeout(() => {
          this.activeComponentTooltip();
        }, 10);
      }
    },
  },
};
</script>
