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
  height: 17px;
  width: 17px;
  background: #00c569;
  color: #fff;
  border-radius: 50px;
  font-size: 10px;
  line-height: 2;
  margin: 5px auto;
}

.contact-body .contact-item span.contact-name {
  padding-top: 16px;
}

.contact-item {
  overflow: hidden;
  width: 100%;
  padding: 10px 5px;
  border-bottom: 1px solid #b6b6b6;
}

.contact-item:last-of-type {
  border-bottom: none;
}
.contact-item .green-button {
  margin-top: 8px;
  float: left;
  padding: 2px 15px;
}

.contact-item .green-button i {
  margin-right: 3px;
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
</style>

<template>
  <div class="contact-body add-new-group">
    <div
      class="not-found-item"
      v-if="
        $parent.UnsubscribeGroups.length == 0 && $parent.allGroupsIsSubscribe
      "
    >
      <p>
        <i class="fa fa-users"></i>
        <span>شما در همه گروه ها عضو هستید</span>
      </p>
    </div>

    <div v-else class="contact-items">
      <ul>
        <li class="contact-item" v-for="(group, index) in $parent.UnsubscribeGroups" :key="index">
          <div class="contact-image">
            <img v-if="group.photo" :src="$parent.str + group.photo" :alt="group.name" />
            <img v-else :src="$parent.assets + 'assets/img/group-images/group-category.jpg'" />
          </div>
          <span class="contact-name" v-text="group.name"></span>
          <button class="green-button" @click.prevent="$parent.subscribeUser(group.id)">
            عضویت در گروه
            <i class="fa fa-arrow-left"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
