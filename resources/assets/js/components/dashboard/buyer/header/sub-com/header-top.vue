<style scoped>
.list-inline > li {
  padding-left: 0;
  padding-right: 0;
}

.show-header button {
  float: right;
  border: none;
  font-size: 25px;
  padding: 7px 14px 6px;
  display: block;
  background: #151c2e;
  color: #fff;
  border-radius: 12px;
  margin-top: 8px;
  margin-right: 10px;
}

.display-loading {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.placeholder-user-name {
  height: 10px !important;
  width: 60px;
  border-radius: 6px;
}

#main {
  margin-right: 250px;
  margin-top: 65px;
  background: #f6f6f6;
  position: relative;
  min-height: 600px;
}

#main.little-main {
  margin-right: 80px !important;
}

.main-header {
  min-height: 59px;
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

.required-fix-alert {
  background: #e41c38;
  color: #fff;
  text-align: center;
  font-size: 16px;
}

.fix-alert-wrapper > a {
  line-height: 1;
  display: inline-block;
  width: calc(100% - 60px);
  color: #fff;
  padding: 6px 0 8px;
}

.fix-alert-wrapper span.button {
  font-size: 13px;
  background: #fff;
  color: red;
  padding: 0 18px;
  margin: 0 12px;
  border-radius: 4px;
}

.close-required-fix-alert {
  float: right;
  height: 100%;
  background: none;
  border: none;
  line-height: 1;
  padding: 5px 15px;
}

.placeholder-image-header-profile {
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50px;
  float: left;
  margin-left: 10px;
}

.placeholder-image-header-profile img {
  height: 100%;
}

.profile-menu-header {
  float: left;
}

.right-menu-header {
  float: right;
}

.profile-menu-header {
  padding: 7px;
  padding-left: 37px;
}

.profile-menu-header i {
  position: absolute;

  left: -80px;

  top: 20px;

  font-size: 20px;
}

.profile-menu-header span.user_name {
  display: block;

  float: right;

  padding-top: 15px;
}

.right-menu-header .green-button {
  font-size: 17px;
}

.right-menu-header a {
  font-size: 30px;
}

.right-menu-header {
  position: relative;
  padding: 9px;
}

.right-menu-header li ul a {
  font-size: 14px;
  width: 100%;
  display: inline-block;
}

.right-menu-header li ul li {
  margin: 5px;
}

.right-menu-header .green-button {
  font-size: 17px;
}

.right-menu-header a,
.profile-menu-header > a {
  color: #7f8c9b;
  margin: 0 5px;
}

.profile-menu-header > a {
  position: relative;
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

a.home-button {
  display: inline-block;
  color: #fff;
  background: #151c2e;
  padding: 2px 10px 6px;
  border-radius: 12px;
  margin-left: 5px;
}
i.fa-home {
  position: relative;
  top: 4px;
  font-size: 25px;
}

a.product-list-link {
  font-size: 18px;
  padding: 9px 15px 8px;
  background: #4dc0bb;
  border-radius: 12px;
  display: inline-block;
  color: #fff;
}

/* profile info styles */

a.profile-info-wrapper {
  overflow: hidden;
  padding: 0;
  font-size: 14px;
  color: #777;
  font-weight: bold;
}

a.profile-info-wrapper:hover,
a.profile-info-wrapper:focus {
  background: none;
}

.profile-image-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  overflow: hidden;
  float: right;
  margin-left: 10px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #dddddd;
}

.profile-information {
  float: left;
  padding-top: 10px;
  direction: rtl;
}

.profile-information i {
  position: relative;
  top: 3px;
  margin-right: 7px;
}

#web-profile-items {
  position: absolute;
  top: 50px;
  background: #fff;
  width: 100%;
  min-width: 150px;
  text-align: right;
  direction: rtl;
  border-radius: 4px;
  line-height: 1.618;
  -webkit-box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
#web-profile-items > li a {
  background: none;
  color: #777;
  font-size: 13px;
  border: none;
  width: 100%;
  padding: 10px;
  text-align: right;
  -webkit-transition: 200ms;
  transition: 200ms;
  border-bottom: 1px solid #dbdbdb;
  display: block;
}
#web-profile-items > li:last-of-type a {
  border: none;
}
#web-profile-items li a:hover {
  color: #333;
  background: #eee;
}
#web-profile-items li a i {
  margin-left: 6px;
}

.user-auth-info-wrapper {
  margin-top: 6px;
  margin-left: 10px;
  float: left;
}
.user-auth-info-wrapper > ul {
  margin: 0;
}

.header-with-fix-alert {
  top: 83px !important;
}

.upgrade-account {
  color: #556080;
  border: 1px solid;
  padding: 2px 15px;
  border-radius: 12px;
  position: relative;
  margin-left: 20px;
  top: 10px;
  transition: 300ms;
}

.upgrade-account:hover {
  color: #fff;
  background: #556080;
  border-color: #556080;

  transition: 300ms;
}

/*start style sub-header*/
.sub-header {
  position: absolute;
  left: 0;
  background: #eff3f6;
  top: 59px;
  right: 0;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  /* border-top: 1px solid #e6e6e6; */
}

.sub-header ul {
  text-align: center;
}

.sub-header a {
  padding: 16px;

  display: inline-block;

  color: #808c9b;

  font-weight: bold;

  font-size: 14px;

  position: relative;
}

.sub-header a:hover {
  color: #313942;
}

.sub-header a:hover::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

.sub-header a.active {
  color: #313942;
}

.sub-header a.active::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

.search-box {
  position: relative;
  margin: 10px auto;
  border: none;
  padding: 0;
}

.search-box input {
  text-align: right;
  direction: rtl;
  border: 1px solid #777;
  border-radius: 6px;
  padding: 6px 50px 5px 15px;
  background: #fff;
  font-size: 14px;
  float: right;
}

.search-box button.btn-search {
  background: none;
  border: none;
  position: absolute;
  right: 5px;
  top: 7px;
  border-left: 1px solid;
  color: #777;
  padding: 0 7px;
  font-size: 22px;
  height: 20px;
}

.button-height {
  line-height: 1;
}
.header-with-fix-alert {
  top: 83px !important;
}

@media screen and (max-width: 991px) {
  .main-header,
  .little-main-header {
    right: 0 !important;
  }
  a.home-button {
    background: none;
    border: 1px solid #151c2e;
    border-radius: 12px;
    color: #151c2e;
    padding: 2px 10px 4px;
  }
  a.product-list-link {
    background: none;
    color: #4dc0bb;
    border: 1px solid;
  }
  .message-notification {
    top: 4px;
    cursor: pointer;
    right: 45px;
    z-index: 10;
    position: absolute;
    background-color: #e41c38;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    color: #fff;
  }
  .message-notification span {
    flex: 1;
    text-align: center;
  }
}
@media screen and (min-width: 991px) {
  .hide-message-notification {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .mobile-header .green-button {
    margin: 15px 0 0;
  }

  .mobile-header ul a {
    padding: 15px 20px;
  }

  .profile-menu-header {
    padding: 7px;
    padding-left: 36px;
  }
}

@media screen and (max-width: 767px) {
  .fix-alert-wrapper > a {
    line-height: 1;
    display: inline-block;
    width: calc(100% - 21px);
    color: #fff;
    padding: 6px 0 8px;
    font-size: 12px;
  }
  .close-required-fix-alert {
    float: right;
    height: 100%;
    background: none;
    border: none;
    line-height: 1;
    padding: 4px 5px 3px;
  }
  .fix-alert-wrapper span.button {
    font-size: 11px;
    background: #fff;
    color: red;
    padding: 0 5px;
    margin: 0;
    margin-right: 0px;
    border-radius: 4px;
    margin-right: 6px;
  }
}

@media screen and (max-width: 555px) {
  .user_name {
    display: none !important;
  }
  .profile-image-wrapper {
    margin: 0;
  }

  .profile-menu-header .user_name {
    display: none;
  }
  .right-menu-header .green-button {
    padding: 10px 15px;
  }
}
.rotation {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.button-height {
  line-height: 1;
}
</style>

<template>
  <div>
    <header id="header" class="main-header">
      <div class="show-header hidden-md hidden-lg">
        <div
          v-if="messageCount > 0"
          class="message-notification hide-message-notification"
        >
          <span>
            {{ messageCount > 100 ? "+99" : messageCount }}
          </span>
        </div>
        <button class="button-height">
          <span :class="menuClosed ? 'rotation' : ''" class="fa fa-bars"></span>
        </button>
      </div>

      <div class="user-auth-info-wrapper">
        <ul v-if="!isLoading" class="nav navbar-nav">
          <li>
            <a
              class="profile-info-wrapper"
              data-toggle="collapse"
              href="#web-profile-items"
              role="button"
            >
              <div
                v-if="photoLink"
                class="profile-image-wrapper"
                :style="{
                  backgroundImage: 'url(' + storage + '/' + photoLink + ')',
                }"
              ></div>
              <div
                v-else
                class="profile-image-wrapper"
                :style="{
                  backgroundImage:
                    'url(' +
                    $parent.assets +
                    'assets/img/user-defult.png' +
                    ')',
                }"
              ></div>

              <div class="profile-information">
                <span class="user_name" v-text="username"></span>
                <i class="fa fa-angle-down"></i>
              </div>
            </a>

            <ul id="web-profile-items" class="collapse">
              <li class="list-item">
                <router-link
                  data-toggle="collapse"
                  href="#web-profile-items"
                  :to="{ name: 'profileBasicBuyer' }"
                  @click="
                    registerComponentStatistics(
                      'seller-dashboard-header',
                      'profile-link',
                      'click-on-profile-link-in-dashboard'
                    )
                  "
                >
                  <i class="fa fa-user"></i>
                  پروفایل
                </router-link>
              </li>

              <li class="list-item">
                <router-link
                  data-toggle="collapse"
                  href="#web-profile-items"
                  :to="{ name: 'passwordBuyer' }"
                  @click="
                    registerComponentStatistics(
                      'seller-dashboard-header',
                      'change-password',
                      'click-on-change-password-dashboard'
                    )
                  "
                >
                  <i class="fa fa-lock"></i>
                  تغییر کلمه عبور
                </router-link>
              </li>

              <li class="list-item">
                <a :href="out" @click="logUserOut()">
                  <i class="fas fa-sign-out-alt"></i> خروج
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul v-else class="nav navbar-nav">
          <li>
            <div class="col display-loading">
              <div
                class="user_name placeholder-content placeholder-user-name margin-loading"
              ></div>
              <div
                class="placeholder-image-header-profile placeholder-content"
              ></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="right-menu-header">
        <ul class="list-inline">
          <li>
            <router-link
              class="product-list-link"
              :to="{ name: 'productList' }"
              @click="
                registerComponentStatistics(
                  'dashboard-header',
                  'product-list-btn',
                  'click-on-product-list-in-dashboard'
                )
              "
            >
              <span class="hidden-xs hidden-sm"> لیست محصولات </span>
              <span class="hidden-md hidden-lg">
                <i class="fa fa-list-ul"></i>
              </span>
            </router-link>
          </li>

          <li>
            <router-link
              :to="{ name: 'indexPage' }"
              @click="
                registerComponentStatistics(
                  'dashboard-header',
                  'home-page-btn',
                  'click-on-home-page-in-dashboard'
                )
              "
              class="home-button"
            >
              <i class="fa fa-home" aria-hidden="true"></i>
            </router-link>
          </li>
        </ul>
      </div>

      <div
        v-if="$route.path === '/buyer/special-products'"
        class="sub-header col-xs-12"
      >
        <div class="search-box col-sm-6 col-xs-12 col-lg-4 pull-right">
          <input
            type="text"
            v-model="$parent.searchValueText"
            placeholder="اینجا جستجو کنید"
          />

          <button class="btn-search">
            <i class="fa-search fa"></i>
          </button>
        </div>
      </div>
      <SubMenu
        :class="{ 'header-with-fix-alert': $parent.isRequiredFixAlert }"
      />
    </header>
  </div>
</template>


<script>
var visible = false;
import SubMenu from "./sub-menu/sub-menu.vue";
import { eventBus } from "../../../../../router/router";
export default {
  data: function () {
    return {
      messageCount: "",
    };
  },
  components: {
    SubMenu,
  },
  props: [
    "menuClosed",
    "photoLink",
    "storage",
    "username",
    "out",
    "routeHome",
    "isLoading",
  ],
  methods: {
    init: function () {
      this.closeCollapses();
    },
    logUserOut: function () {
      localStorage.removeItem("userRoute");
      this.registerComponentStatistics(
        "seller-dashboard-header",
        "logout",
        "click-on-logout-in-dashboard"
      );
    },
    closeCollapses: function () {
      $(document).on("click", function (e) {
        /* bootstrap collapse js adds "in" class to your collapsible element*/

        var user_menu_opened = $("#web-profile-items").hasClass("in");

        if (
          !$(e.target).closest("#web-profile-items").length &&
          !$(e.target).is("#web-profile-items") &&
          user_menu_opened === true
        ) {
          $("#web-profile-items").collapse("toggle");
        }
      });
    },
  },
  mounted() {
    var self = this;
    this.init();

    // axios
    //   .post("/get_total_unread_messages_for_current_user")
    //   .then(function(response) {
    //     self.messageCount = response.data.msg_count;
    //       if (self.messageCount >= 100) {
    //           self.messageCount = "+99"
    //       }
    //   })
    //   .catch(function(error) {
    //     console.log("error", error);
    //   });
  },
  created() {
    var self = this;
    eventBus.$on("messageCount", (event) => {
      this.messageCount += event;
    });
    eventBus.$on("active", (event) => {
      this.activeElement = event;
    });
    document.addEventListener("click", this.documentClick);
  },
  registerComponentStatistics: function (categoryName, actionName, labelName) {
    gtag("event", actionName, {
      event_category: categoryName,
      event_label: labelName,
    });
  },
};
</script>
