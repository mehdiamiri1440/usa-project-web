<style scoped>
.contact-body .contact-search {
  padding: 9px 7px;
  background: #eef3f3;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}

.contact-items {
  padding-top: 60px;
}

.contact-body .contact-search .contact-search-input-wrapper {
  position: relative;
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
</style>

<template>
  <div class="contact-body my-contacts">
    <div class="contact-search">
      <div class="contact-search-input-wrapper">
        <input type="text" placeholder="جستجوی مخاطبین" v-model="$parent.contactNameSearchText" />
        <i class="fa fa-search"></i>
      </div>
    </div>
    <div v-if="$parent.contactList.length === 0" class="not-found-item">
      <div
        class="image-wrapper"
        v-if="!$parent.contactNameSearchText && !$parent.isContactListLoaded"
      >
        <div v-show="!$parent.isImageLoad || $parent.isImageLoad" class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <!-- <span v-text="alt" class="lds-ring-alt"></span> -->
      </div>

      <div v-else-if="$parent.contactNameSearchText && !$parent.isSearchingContact">
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

    <div v-else class="contact-items">
      <ul>
        <li class="contact-item" v-for="(contact, index) in $parent.contactList" :key="index">
          <a href="#" @click.prevent="$parent.loadChatHistory(contact, index)">
            <div class="contact-image">
              <img
                v-if="contact.profile_photo"
                :src="$parent.str + '/' + contact.profile_photo"
                :alt="contact.first_name[0]"
              />

              <img v-else src="../../../../img/user-defult.png" />
            </div>
            <div class="my-contact-info-wrapper">
              <span class="contact-name" v-text="contact.first_name + ' ' + contact.last_name"></span>

              <p class="last-message-date">{{ contact.last_msg_time_date | moment("jYY/jMM/jDD") }}</p>
            </div>

            <div class="my-contact-info-wrapper">
              <span class="contact-last-message" v-text="contact.last_msg.last_msg_text"></span>

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
        <li v-if="$parent.showLoadMoreBtn && !$parent.contactNameSearchText" class="contact-item">
          <button class="btn load-more" @click.prevent="$parent.loadMoreContacts()">ادامه مخاطبین</button>
        </li>
      </ul>
    </div>
  </div>
</template>
