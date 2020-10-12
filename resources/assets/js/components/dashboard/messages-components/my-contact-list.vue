<style scoped>
.contact-body .contact-search {
  padding: 9px 7px 0;
  background: #eef3f3;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 2;
}

.contact-items {
  padding-top: 95px;
}

.contact-items.is-buyer-list {
  padding-top: 60px;
}

.contact-body .contact-search .contact-search-input-wrapper {
  position: relative;
  margin-bottom: 5px;
}

.contact-body .contact-search .contact-search-input-wrapper i {
  position: absolute;
  left: 12px;
  font-size: 20px;
  color: #c1c1c1;
  top: 8px;
}

.contact-body .contact-search .contact-search-input-wrapper input {
  padding: 9px 15px;
  border-radius: 50px;
  background: #fff;
  border: none;
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
  color: #595959;
  overflow: hidden;
  padding: 10px 7px;
  border-bottom: 1px solid #b6b6b6;
  display: block;
  transition: 200ms;
}

.contact-body .contact-item a:hover,
.contact-body .contact-item a.active {
  background: #f6f6f6;
  transition: 200ms;
}

.contact-body .contact-item:last-of-type a {
  border-bottom: none;
}

.contact-body .contact-item span.contact-name {
  float: right;
  font-weight: bold;
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

.verified-user::before {
  top: 3px;
  left: 3px;
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
  padding: 8px 0;
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
  top: -3px;
  background: red;
  height: 20px;
  width: 29px;
  color: #fff;
  border-radius: 10px;
  left: 5px;
  font-size: 11px;
  line-height: 1;
  padding-top: 4px;
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

.buyad-button p {
  background: #00c569;
  color: #fff;
  border-radius: 4px;
  padding: 3px;
  max-width: 150px;
  margin: 7px auto 15px;
  transition: 300ms;
}

.buyad-button p:hover {
  background: #00c569;
  transition: 300ms;
}

.buyad-button.disable p {
  background: #dddddd;
  transition: 300ms;
}

@media screen and (max-width: 992px) {
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
          placeholder="جستجوی مخاطبین"
          v-model="$parent.contactNameSearchText"
        />
        <i class="fa fa-search"></i>
      </div>
      <div
        v-if="$parent.contactIsSeller"
        class="contacts-switch-buttons-wrapper"
      >
        <div class="switch-button-item">
          <button
            class="contact-button"
            @click.prevent="is_contact = false"
            :class="{ active: !is_contact }"
          >
            <span class="total-unread-messages-badge">جدید</span>
            <i class="fa fa-list-alt"></i>
            درخواست ها
          </button>
        </div>

        <div class="switch-button-item">
          <button
            class="contact-button"
            @click.prevent="is_contact = true"
            :class="{ active: is_contact }"
          >
            <i class="fa fa-user"></i>
            مخاطبین من
          </button>
        </div>
      </div>
    </div>

    <div v-if="is_contact">
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
          v-else-if="
            $parent.contactNameSearchText && !$parent.isSearchingContact
          "
        >
          <p>
            <i class="fa fa-user"></i>
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
          <p>
            <i class="fa fa-user"></i>
            <span>مخاطب یافت نشد</span>
          </p>
        </div>
      </div>

      <div
        v-else
        class="contact-items"
        :class="{ 'is-buyer-list': !$parent.contactIsSeller }"
      >
        <ul>
          <li
            class="contact-item"
            v-for="(contact, index) in $parent.contactList"
            :key="index"
          >
            <a
              href="#"
              @click.prevent="$parent.loadChatHistory(contact, index)"
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
                  {{ contact.last_msg_time_date | moment("jYY/jMM/jDD") }}
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

    <div v-else>
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
          v-else-if="
            $parent.contactNameSearchText && !$parent.isSearchingContact
          "
        >
          <p>
            <i class="fa fa-user"></i>
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
          <p>
            <i class="fa fa-user"></i>
            <span>مخاطب یافت نشد</span>
          </p>
        </div>
      </div>

      <div v-else class="contact-items buyad-lists-wrapper">
        <ul>
          <li class="contact-item" v-for="(contact, index) in 1" :key="index">
            <button>
              <div class="buyad-header">
                <div class="request-contact-image">
                  <img
                    v-if="contact.profile_photo"
                    :src="$parent.str + '/' + contact.profile_photo"
                    :alt="contact.first_name[0]"
                  />

                  <img v-else src="../../../../img/user-defult.png" />
                </div>
                <div class="my-contact-info-wrapper">
                  <span class="contact-name text-rtl">
                    محمدامین دلداری
                    <button
                      @click.prevent
                      class="verified-user"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="bottom"
                      title
                    >
                      <i class="fa fa-certificate"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="buyad-main col-xs-12">
                <div class="row">
                  <p class="buyad-info">
                    خریدار
                    <span>۲۰ تن</span>
                    <span>خرما</span>
                    از نوع
                    <span>مضافتی</span>
                  </p>
                  <p class="buyad-expier">
                    <span class="red-text">
                      <i class="fas fa-hourglass-half"></i> ۵ ساعت
                    </span>
                    دیگر فرصت پاسخ گویی شما به این درخواست
                  </p>
                  <p class="buyad-notice">
                    درصورت داشتن این محصول به من پیام بده
                  </p>
                  <div class="buyad-button">
                    <p>پیام به خریدار</p>
                  </div>
                </div>
              </div>
            </button>
          </li>
          <li class="contact-item" v-for="(contact, index) in 1" :key="index">
            <button>
              <div class="buyad-header">
                <div class="request-contact-image">
                  <img
                    v-if="contact.profile_photo"
                    :src="$parent.str + '/' + contact.profile_photo"
                    :alt="contact.first_name[0]"
                  />

                  <img v-else src="../../../../img/user-defult.png" />
                </div>
                <div class="my-contact-info-wrapper">
                  <span class="contact-name text-rtl">
                    محمدامین دلداری
                    <button
                      @click.prevent
                      class="verified-user"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="bottom"
                      title
                    >
                      <i class="fa fa-certificate"></i>
                    </button>
                  </span>
                </div>
              </div>
              <div class="buyad-main col-xs-12">
                <div class="row">
                  <p class="buyad-expier">
                    <br />
                  </p>
                  <p class="buyad-info">
                    خریدار
                    <span>۲۰ تن</span>
                    <span>خرما</span>
                    از نوع
                    <span>مضافتی</span>
                  </p>

                  <p class="buyad-notice red-text">
                    دیگر فرصت پاسخ گویی شما به این درخواست
                  </p>
                  <div class="buyad-button disable">
                    <p>پیام به خریدار</p>
                  </div>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>
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
