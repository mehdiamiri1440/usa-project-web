<style scoped>
.contact-body .contact-search {
  padding: 9px 7px;
  background: #eef3f3;
}

.contact-body .contact-search .contact-search-input-wrapper {
  position: relative;
}

.contact-body .contact-search .contact-search-input-wrapper i {
  position: absolute;
  left: 15px;
  font-size: 20px;
  color: #c1c1c1;
  top: 11px;
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
  padding: 9px 7px;
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
  padding-right: 15px;
  padding-top: 6px;
  font-weight: bold;
}

.contact-body .contact-item span.contact-last-message {
  float: right;
  padding-right: 15px;
  width: calc(100% - 95px);
  padding-top: 10px;
  font-weight: lighter;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.contact-body .contact-item .contact-date {
  float: left;
  padding-top: 5px;
  width: 50px;
  direction: ltr;
  text-align: center;
}

.contact-body .contact-item .my-contact-date {
  float: left;
  padding-top: 3px;
  width: 50px;
  direction: ltr;
  text-align: left;
}

.last-message-date {
  display: inline-block;
  height: 17px;
  width: 100px;
  font-size: 10px;
  line-height: 2;
}

.count-number {
  display: inline-block;
  height: 22px;
  width: 22px;
  background: #00c569;
  color: #fff;
  border-radius: 50px;
  font-size: 12px;
  line-height: 2;
  margin: 5px auto;
}

.contact-body .contact-item span.contact-name {
  padding-top: 16px;
}

.not-found-item {
  text-align: center;
  padding: 40px 15px;
}
.not-found-item p {
  font-size: 16px;
  font-weight: bold;
  color: #777;
}
.not-found-item i {
  margin: 5px;
}

li.add-group-button-wrapper {
  padding: 10px 5px;
}

.add-group-button.green-button {
  width: 100%;
  margin: 0;
  padding: 7px 5px;
}
</style>

<template>
  <div class="contact-body my-groups">
    <div class="contact-search">
      <form action>
        <div class="contact-search-input-wrapper">
          <input
            type="text"
            placeholder="جستجوی گروه"
            v-model="$parent.groupNameSearchText"
            @blur="$parent.showNavigationMenu"
            @focus="$parent.hideNavigationMenu"
          />

          <i class="fa fa-search"></i>
        </div>
      </form>
    </div>

    <div
      v-if="$parent.groupList.length === 0 && $parent.allGroupsIsUnSubscribe"
      class="not-found-item"
    >
      <p>
        <i class="fa fa-user"></i>
        <span>شما هنوز در گروهی عضو نیستید</span>
      </p>
    </div>

    <div v-else-if="$parent.groupList.length === 0" class="not-found-item">
      <div
        class="image-wrapper"
        v-if="!$parent.groupNameSearchText && !$parent.isSearchingGroup"
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

      <div v-else-if="$parent.groupNameSearchText && !$parent.isSearchingGroup">
        <p class>
          <i class="fa fa-user"></i>
          <span>گروهی یافت نشد</span>
        </p>
      </div>

      <div v-else-if="$parent.isSearchingGroup" class="contact-is-search">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-else-if="$parent.isSearchingGroup">
        <p>
          <i class="fa fa-user"></i>
          <span>گروهی یافت نشد</span>
        </p>
      </div>
    </div>

    <div v-else class="contact-items">
      <ul>
        <li
          class="add-group-button-wrapper hidden-xs"
          v-if="$parent.selectedGroup || $parent.selectedContact"
        >
          <button
            class="add-group-button green-button"
            @click.prevent="
              ($parent.selectedGroup = ''), ($parent.selectedContact = '')
            "
          >
            <i class="fa fa-plus"></i>
            <i class="fa fa-users"></i>
            افزودن گروه
          </button>
        </li>
        <li
          class="contact-item"
          v-for="(group, index) in $parent.groupList"
          :key="index"
        >
          <a
            href="#"
            @click.prevent="$parent.loadGroupChatHistory(group, index)"
          >
            <div class="contact-image">
              <!-- <img
                v-if="group.photo"
                :src="$parent.assets + 'assets/img/group-images/'+ group.photo"
                :alt="'گروه ' + group.name"
              />
              <img
                v-else
                :src="$parent.assets + 'assets/img/group-images/group-category.jpg'"
                :alt="'گروه ' + group.name"
              />-->
            </div>
            <span class="contact-name" v-text="'گروه ' + group.name"></span>
            <!-- <div class="my-contact-date">
              <p class="last-message-date">{{ group.last_msg_time_date | moment("jYY/jMM/jDD") }}</p>
            </div>-->
            <div class="contact-date">
              <p
                class="count-number"
                v-if="group.unread_messages !== 0"
                v-text="group.unread_messages"
              ></p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
