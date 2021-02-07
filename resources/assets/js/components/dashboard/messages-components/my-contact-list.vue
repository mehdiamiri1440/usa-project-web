<style scoped>
.contact-body .contact-search {
  background: #f0f0f0;
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
  padding: 10px 7px;
}

.contact-body .contact-search .contact-search-input-wrapper > i {
  position: absolute;
  right: 20px;
  font-size: 16px;
  color: #919191;
  top: 21px;
}

.contact-body .contact-search .contact-search-input-wrapper input {
  padding: 8px 40px 8px 15px;
  border-radius: 50px;
  background: #fff;
  border: none;
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

.contact-body .contact-image {
  width: 45px;
  height: 45px;
  float: right;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid #f2f2f2;
  position: relative;
}

.contact-body .contact-image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: initial;
  transform: translate(-50%, -50%);
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
}

.contact-body .contact-item span.contact-last-message {
  float: right;
  width: calc(100% - 60px);
  font-weight: lighter;
  font-size: 12px;
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

.contact-body .contact-item .my-contact-info-wrapper {
  float: right;
  padding-top: 6px;
  direction: ltr;
  text-align: left;
  width: calc(100% - 45px);
  padding-right: 15px;
}

.last-message-date {
  display: inline-block;
  height: 17px;
  width: 60px;
  font-size: 10px;
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
.not-found-item {
  text-align: center;
  padding: 100px 15px 0;
}
.not-found-item p {
  font-size: 16px;
  font-weight: bold;
  color: #777;
}
.not-found-item i {
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
  position: absolute;
  left: -18px;
  top: -2px;
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

.user-not-fount img {
  width: 200px;
  display: block;
  margin: 60px auto 20px;
}

.user-not-fount p {
  font-weight: 500;
}
@media screen and (max-width: 991px) {
  .main-content {
    padding: 59px 0 0;
  }
  .main-content.is-fix-alert {
    padding: 89px 0 0;
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

  .main-content {
    padding: 59px 0 0;
  }

  .main-content.is-fix-alert {
    padding: 85px 0 0;
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
  <div class="contact-body my-contacts">
    <div class="contact-search">
      <div class="contact-search-input-wrapper">
        <input
          type="text"
          placeholder="جستجو مخاطب"
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
            <i class="fa fa-user"></i>
            مخاطبین من
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
        <p class="user-not-fount">
          <img src="../../../../img/empty-message.svg" alt="" />
          <span>مخاطب یافت نشد</span>
        </p>
      </div>

      <div v-else-if="$parent.isSearchingContact" class="contact-is-search">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-else-if="$parent.isContactListLoaded">
        <div class="empty-list">
          <i class="fa fa-user"></i>
          <p>در حال حاضر مخاطبی وجود ندارد</p>

          <router-link
            v-if="$parent.userType"
            :to="{ name: 'buyAdRequestsSeller' }"
            tag="button"
            class="user-button"
          >
            شروع چت با خریداران
          </router-link>

          <router-link
            v-else
            :to="{ name: 'productList' }"
            tag="button"
            class="user-button"
          >
            شروع چت با فروشندگان
          </router-link>
        </div>
      </div>
    </div>

    <div
      v-else
      class="contact-items"
      :class="{ 'is-buyer-list': !$parent.userType }"
    >
      <ul>
        <li
          class="contact-item"
          v-for="(contact, index) in $parent.contactList"
          :key="index"
        >
          <a
            href="#"
            @click.prevent="$parent.loadChatHistory(contact, index, false)"
            :class="{
              active: $parent.selectedContact.contact_id == contact.contact_id,
            }"
          >
            <div class="contact-image">
              <img
                v-if="contact.profile_photo"
                :src="$parent.str + '/' + contact.profile_photo"
                :alt="contact.first_name[0]"
              />

              <img v-else src="../../../../img/user-defult.png" />
            </div>
            <div class="my-contact-info-wrapper">
              <span class="contact-name text-rtl">
                {{ contact.first_name + " " + contact.last_name }}
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
              </span>

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
            ادامه مخاطبین
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
  },
};
</script>
