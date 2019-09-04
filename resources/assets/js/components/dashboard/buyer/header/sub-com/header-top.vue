<style>
#main {
  margin-right: 250px;
  margin-top: 65px;
  background: #fff;
  position: relative;
  min-height: 600px;
}

#main.little-main {
  margin-right: 80px !important;
}

.main-header {
  height: 65px;
  position: fixed;
  left: 0;
  right: 250px;
  top: 0;
  background: #fff;
  z-index: 5;
  border-bottom: 2px solid #f6f6f6;
}

.little-main-header {
  right: 80px;
}

.image-header-profile {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  float: left;
}

.image-header-profile img {
  height: 100%;
}

.profile-menu-header {
  float: left;
}

.right-menu-header,
.content-header {
  float: right;
}

.profile-menu-header {
  padding: 7px;
  padding-left: 55px;
}

.profile-menu-header i {
  position: absolute;

  left: -90px;

  top: 0;

  font-size: 20px;
}

.content-header {
  background: #28a745;
  color: #fff;
  height: 100%;
  padding: 20px 20px 0;
}
.right-menu-header .green-button {
  font-size: 17px;
}
.right-menu-header a,
.profile-menu-header a {
  color: #7f8c9b;
  margin: 5px;
}

.right-menu-header a {
  font-size: 30px;
}

.content-header {
  background: #00c569;
  color: #fff;
  height: 100%;
  padding: 20px 20px 0;
}
.right-menu-header .green-button {
  font-size: 17px;
}
.right-menu-header a,
.profile-menu-header a {
  color: #7f8c9b;
  margin: 5px;
}

.profile-menu-header > a {
  position: relative;
  top: 18px;
  left: 10px;
}

.profile-list {
  position: absolute;
  width: 165px;
  background: #fff;
  padding: 8px 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #313a43;
  text-align: right;
  left: 40px;
  top: 65px;
  display: none;
  z-index: 999;
}

.profile-list li {
  margin: 5px;
}

.profile-list a {
  width: 100%;
  display: inline-block;
}

.font-big {
  font-size: 23px;
  position: relative;
  top: 3px;
}

.green-button {
  color: #fafafa !important;
}

.green-button:hover {
  color: #fff !important;
  background: #00d614;
}

.green-button {
  color: #fafafa !important;
}

.green-button:hover {
  color: #fff !important;
  background: #00ac5c;
}

i.fa-home {
  position: relative;
  top: 5px;
}
</style>

<template>
  <div>
    <header id="header" class="main-header">
      <div class="show-header">
        <button class="fa fa-bars"></button>
      </div>

      <div class="content-header">
        <span class="font-big">اینکوباک</span> |
        <span>بازارگاه آنلاین کشاورزی</span>
      </div>

      <div class="profile-menu-header">
        <a v-if="!isLoading" href="#" @click.prevent="collapseDropDown()">
          <div class="image-header-profile" v-if="photoLink">
            <img :src="storage + '/' + photoLink" />
          </div>
          <div class="image-header-profile" v-else>
            <img :src="def" />
          </div>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
          <span class="user_name" v-text="username"></span>
        </a>
        <div class="col display-loading" v-else>
          <div class="image-header-profile shadow-content placeholder-content"></div>
          <div class="user_name shadow-content placeholder-content loading-height margin-loading"></div>
        </div>
        <div class="profile-list">
          <ul class="list-unstyled">
            <li class="list-item">
              <a :href="'/dashboard/profile'">پروفایل</a>
            </li>
            <li class="list-item">
              <a :href="'/dashboard/password'">تغییر کلمه عبور</a>
            </li>
            <li class="list-item">
              <a :href="out">خروج</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="right-menu-header">
        <ul class="list-inline">
          <li>
            <a
              class="green-button"
              href="/product-list"
              style="font-size: 17px"
              @click="registerComponentStatistics('product-list-btn','click','product-list in dashboard')"
            >
              <span class="full">لیست محصولات</span>
              <span class="min">
                <i class="fa fa-th-list" aria-hidden="true"></i>
              </span>
            </a>
          </li>
          <li>
            <a :href="routeHome">
              <i class="fa fa-home" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <SubMenu />
    </header>
  </div>
</template>

<script>
import SubMenu from "./sub-menu/sub-menu.vue";

export default {
  components: {
    SubMenu
  },
  props: [
    "photoLink",
    "profilebasic",
    "storage",
    "def",
    "username",
    "out",
    "routeHome",
    "isLoading"
  ],
  methods: {
    collapseDropDown: function() {
      $(".profile-list").fadeIn("slow", function() {
        visible = true;
      });
    },
    collapseDropDownList: function() {
      $(".icon-header-list").fadeIn("slow", function() {
        visible = true;
      });
    },
    documentClick(e) {
      if (visible) {
        $(".profile-list").fadeOut("slow");
        $(".icon-header-list").fadeOut("slow");
        visible = false;
      }
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    }
  },
  created() {
    document.addEventListener("click", this.documentClick);
  }
};
</script>
