<style scoped>
body {
  background: #f6f6f6;
}

#main-content {
  min-height: 600px;
  position: relative;
}

#DownloadApp {
  background: #fff;
  padding-left: 0 !important;
}

.green-button:focus,
.green-button:hover {
  color: #fff !important;
}

#DownloadApp .modal-dialog {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}

#DownloadApp .main_popup_content {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0;
  width: calc(100% - 30px);
}

#DownloadApp .main_popup_content > div {
  transform: translate(-50%, -50%);
}

a.close-dialog-popup {
  display: block;

  padding: 15px;

  font-size: 22px;

  color: #e41c38;

  text-align: right;

  background: #000546;
}

.main_popup_content div > a {
  width: 150px;
  border: none;
  padding: 9px 0;
}

.main_popup_content div > a:first-of-type {
  color: #fff;
  background: #00c569;
}

.main-logo-popup {
  text-align: center;
}

.main-logo-popup p.title {
  font-size: 32px;
}

.main-logo-popup img {
  width: 30%;
}

.modal-content .green-button {
  margin: 15px;

  display: inline-block;

  background: #00c569;

  color: #fff;

  padding: 10px 35px;

  border-radius: 3px;

  text-align: center;

  border: none;

  -webkit-transition: 150ms;

  transition: 150ms;

  width: initial;
}

.green-button.delete {
  background: #e41c38;
  color: #fff;
}

/*end global styles */

/*start header styles*/

.search-input {
  transition: 150ms;
  min-width: 480px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}

.search-input input {
  padding: 8px 15px;

  margin: 0;

  float: right;

  border: none;

  background: #f8f8f8;
}

.search-input button {
  transition: 150ms;
  border: none;
  margin: 0;
  padding: 8px 27px;
  color: #fff;
  background: #000546;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 17px;
  font-weight: 500;
}

.search-input button:hover {
  transition: 150ms;

  padding-left: 30px;

  padding-right: 30px;
}

.search-input button i:before {
  position: relative;
  left: 2px;
  top: 3px;
}

nav.navbar {
  background: #fff;
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1010;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ebebeb;
}

.buskool-main-nav {
  padding: 10px 15px;
}

.nav > li > a.green-button:hover {
  background: #00c569;
}

.nav > li > a.green-button.router-link-exact-active:hover {
  background: #eee;
}

nav .green-button {
  font-size: 17px;
  padding: 10px 20px 9px;
  margin-top: 0;
  margin-right: 15px;
  font-weight: 400;
  border-radius: 8px;
}

nav .green-button.static-layout {
  padding: 10px 0 9px;
  width: 167px;
}

nav .green-button-alt {
  font-size: 17px;
  padding: 10px 20px 9px;
  margin-top: 0;
  margin-right: 15px;
  font-weight: 400;
  border-radius: 8px;
  border: none;
  background: none;
  color: #1da1f2;
}

.nav > li > a.green-button.green-button-alt:hover {
  color: #fff;
  background: #1da1f2 !important;
}

.green-button-alt:focus,
.green-button-alt:hover {
  color: #fff !important;
}

nav .green-button.router-link-exact-active,
nav > li > a.green-button.router-link-exact-active:hover {
  background-color: #eee;
  border-color: #eee;
  color: #fff !important;
}

.buskool-logo .navbar-brand {
  overflow: hidden;
  width: 140px;
  height: 28px;
  margin: 6px 15px 6px 0;
  padding: 0;
}

.buskool-logo .navbar-brand img {
  width: 140px;
  height: 28px;
}

#buskool-nav {
  margin-right: 35px;
}

.buskool-sub-menu .navbar-right {
  margin-right: 193px;
}

.buskool-sub-menu {
  transition: 0.3s;
  height: 33px;
  overflow: hidden;
  margin-bottom: -1px;
}

.buskool-sub-menu.scrollUp {
  height: 0;
  transition: 0.3s;
}

.buskool-sub-menu li {
  float: right;
}

.buskool-sub-menu a {
  color: #5f6368;
  padding: 6px 15px;
  position: relative;
}

.buskool-sub-menu a:hover,
.buskool-sub-menu a.router-link-exact-active {
  color: #4dc0bb;
  background: #fff;
  border-bottom: 1px solid;
}

a.profile-info-wrapper {
  overflow: hidden;

  padding: 0;

  font-size: 14px;

  color: #777;

  font-weight: bold;
}

a.profile-info-wrapper:focus {
  background: none;
}

a.profile-info-wrapper:hover {
  background: none;

  color: #00c569;
}

.profile-information {
  float: left;

  padding-top: 10px;
}

.profile-information i {
  position: relative;

  top: 3px;

  margin-right: 7px;
}

.profile-image-wrapper {
  width: 40px;

  height: 40px;

  border-radius: 40px;

  overflow: hidden;

  float: right;

  margin-left: 10px;

  background-position: center;

  background-size: cover;

  background-repeat: no-repeat;

  background-color: #dddddd;
}

#web-profile-items {
  position: absolute;

  top: 50px;

  background: #fff;

  width: 100%;

  text-align: right;

  direction: rtl;

  border-radius: 4px;

  line-height: 1.618;

  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);

  z-index: 6;
}

#web-profile-items a {
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
#web-profile-items a:hover {
  color: #333;
  background: #eee;
}
#web-profile-items li a i {
  margin-left: 6px;
}

.mobile-menu-button {
  float: right;
  position: relative;
}

.mobile-menu-button .message-count {
  padding-top: 0px;
  left: -16px;
  top: -4px;
}
.navbar-toggle {
  margin: 0;
  border: 1px solid;
  border-radius: 8px;
  height: 31px;
  width: 46px;
  padding: 0;
  padding-top: 9px;
  margin-bottom: 2px;
}
.navbar-toggle i {
  font-size: 21px;
  line-height: 1;
  position: relative;
  top: -6px;
}

.mobile-background-shadow {
  background: rgb(0, 0, 0);

  opacity: 0.8;

  display: none;

  transition: 150ms;

  position: fixed;

  height: 100%;

  width: 100%;

  z-index: 10;
}
.message-count {
  background: #e41c39;
  border-radius: 50px;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: inline-block;
  position: absolute;
  top: 0px;
  color: #fff;
  left: -9px;
  padding-top: 1px;
  text-align: center;
  z-index: 1;
}

.star-badge {
  color: rgb(249, 242, 159);
}

.star-badge i {
  background: linear-gradient(
    21deg,
    rgb(199, 168, 79) 0%,
    rgb(249, 242, 159) 51%,
    rgb(199, 168, 79) 100%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mobile-navigation li {
  position: relative;
}
.mobile-navigation li .message-count {
  position: relative;
  top: 0px;
  padding-top: 5px;
}
@media screen and (min-width: 767px) {
  .mobile-background-shadow {
    display: none !important;
  }
}

@media screen and (max-width: 1199px) {
  .search-input button {
    padding: 8px 17px;
  }
  nav .green-button {
    padding: 10px 15px 9px;
  }
  .search-input {
    min-width: 400px;
  }
}

@media screen and (max-width: 991px) {
  nav .green-button.static-layout {
    padding: 6px 8px 5px;
    font-size: 13px;
    width: initial;
  }

  .search-input button:hover {
    padding-left: 19px;

    padding-right: 19px;
  }

  #buskool-nav {
    margin: 0;
  }

  .buskool-sub-menu .navbar-right {
    margin-right: 149px;
  }

  nav .green-button {
    padding: 6px 8px 5px;
    font-size: 13px;
  }

  .search-input {
    min-width: 300px;
  }
}

@media screen and (max-width: 767px) {
  .search-input button:hover {
    transition: 150ms;

    padding-left: 9px;

    padding-right: 9px;
  }

  a.profile-info-wrapper {
    margin-top: -4px;
  }
  a.profile-info-wrapper .profile-image-wrapper {
    width: 35px;
    height: 35px;
  }

  .buskool-logo .navbar-brand {
    width: 100px;
    height: 20px;
    margin-top: 4px;
  }
  .buskool-logo .navbar-brand img {
    width: 100px;
    height: 20px;
  }

  .buskool-logo {
    margin: 0 auto;
    position: absolute;
    right: calc(50% - 50px);
  }

  .buskool-main-nav {
    padding: 6px 0 1px;
    border-bottom: 1px solid #ebebeb;
    margin: 0 10px;
  }

  .search-input {
    min-width: 100%;
    margin: 10px auto;
    padding: 0 10px;
  }

  .search-input button {
    font-weight: bold;
    top: 0;
    bottom: 0;
    left: initial;
    right: 10px;
    padding: 9px;
    background: none;
    color: #5f6368;
  }

  .search-input input {
    padding: 6px 35px 5px 15px;
    border-radius: 8px;
  }

  #buskool-nav {
    padding: 0;

    overflow: hidden;

    margin: 0;

    position: absolute;

    background: #fff;

    top: 97px;

    right: -1px;

    left: -1px;
  }

  #buskool-nav.hidden-search {
    top: 50px;
  }

  #buskool-nav:after {
    width: 0;

    height: 0;

    border-style: solid;

    border-width: 0 10px 10px 10px;

    border-color: transparent transparent #00c569 transparent;

    content: "";

    position: absolute;

    top: -10px;

    right: 29px;
  }

  .profile-image-wrapper,
  .user-auth-info-wrapper,
  .user-auth-info-wrapper .navbar-nav {
    margin: 0;
  }

  .user-auth-info-wrapper {
    float: left;
  }

  #buskool-nav .search-input {
    max-width: 100%;

    width: 100%;

    padding: 0 15px;

    margin-bottom: 15px;

    float: none;
  }

  #buskool-nav .search-input input {
    border: 1px solid #e6e6e6;
  }

  #buskool-nav ul.mobile-navigation a {
    color: #777;

    font-weight: bold;

    padding: 15px;

    display: block;

    border-bottom: 1px solid #e6e6e6;
  }

  #buskool-nav ul.mobile-navigation a:hover,
  #buskool-nav ul.mobile-navigation a:focus,
  #buskool-nav ul.mobile-navigation a.router-link-exact-active {
    color: #00c569;

    background: #fbfbfb;

    border-color: #00c569;
  }

  #web-profile-items {
    min-width: 150px;

    left: 0;
  }
  nav .green-button.router-link-exact-active,
  nav > li > a.green-button.router-link-exact-active:hover {
    display: none;
  }
}

@media screen and (max-width: 550px) {
  .buskool-logo {
    margin: 0 auto;

    float: right;

    position: relative;

    right: calc(50% - 95px);
  }

  .buskool-logo .navbar-brand {
    width: 100px;

    margin-top: 5px;

    margin-right: 0;
  }

  .profile-image-wrapper,
  .user-auth-info-wrapper,
  .user-auth-info-wrapper .navbar-nav {
    margin: 0;
  }

  .user-auth-info-wrapper {
    float: left;
  }

  .mobile-login-link a {
    font-size: 11px;
  }
}

@media screen and (max-width: 360px) {
  .mobile-login-link a {
    margin: 0;
    padding: 6px 16px 4px;
    font-size: 17px;
  }

  .mobile-login-link span {
    display: none;
  }
}
</style>

<template>
  <div>
    <!-- loading -->
    <div
      :class="{
        'loader-wrapper': !$store.state.dashboardStore.submiting,
        'loader-display': $store.state.dashboardStore.submiting,
      }"
    >
      <div class="main-loader">
        <img
          v-if="$store.state.dashboardStore.submiting"
          src="../../../../img/gif/prload.gif"
        />
        <p dir="rtl">در حال بارگذاری...</p>
      </div>
    </div>
    <!-- Modals -->

    <div class="container">
      <div
        id="custom-main-modal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="main_popup_content">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>

              <p class="main-pop-up" v-text="popUpMsg"></p>

              <button class="btn green-button" data-dismiss="modal">
                متوجه شدم
              </button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <div class="container">
      <div
        class="modal fade"
        id="auth-popup"
        tabindex="-1"
        ref="myModal"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="main_popup_content">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>

              <p class="main-pop-up" v-text="popUpMsg"></p>

              <router-link
                data-dismiss="modal"
                :to="{ name: 'register' }"
                class="btn green-button"
                >ورود/ثبت نام</router-link
              >

              <br />
              <br />

              <button class="btn gray-button" data-dismiss="modal">
                متوجه شدم
              </button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <!-- end modals -->

    <!--nav-->
    <div class="mobile-background-shadow"></div>
    <nav class="navbar text-rtl">
      <div class="container-fluid buskool-main-nav">
        <div class="hidden-md hidden-sm hidden-lg mobile-menu-button">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#buskool-nav"
          >
            <span
              class="message-count"
              v-if="$store.state.messageStore.messageCount > 0"
              v-text="$store.state.messageStore.messageCount"
            ></span>
            <i class="fa fa-bars"></i>
          </button>
        </div>

        <div class="buskool-logo navbar-header navbar-right">
          <router-link class="navbar-brand" :to="{ name: 'indexPage' }">
            <img
              src="../../../../img/logo/web-logo.svg"
              alt="باسکول | بازارگاه آنلاین دنیای کشاورزی"
            />
          </router-link>
        </div>

        <div class="user-auth-info-wrapper navbar-nav">
          <ul v-if="user_id != ''" class="nav navbar-nav">
            <li>
              <a
                class="profile-info-wrapper"
                data-toggle="collapse"
                href="#web-profile-items"
                role="button"
              >
                <div
                  class="profile-image-wrapper"
                  v-if="profile_photo"
                  :style="{
                    backgroundImage:
                      'url(' + storage_path + '/' + profile_photo + ')',
                  }"
                ></div>
                <div
                  v-else
                  class="profile-image-wrapper"
                  :style="{
                    backgroundImage:
                      'url(' + assets + 'assets/img/user-defult.png)',
                  }"
                ></div>
                <div class="profile-information">
                  <span class="hidden-xs" v-text="user_full_name"></span>
                  <i class="fa fa-angle-down"></i>
                </div>
              </a>

              <ul v-if="is_seller == 1" id="web-profile-items" class="collapse">
                <li class="list-item">
                  <router-link :to="{ name: 'statusSeller' }">
                    <i class="fa fa-cog"></i>
                    داشبورد
                  </router-link>
                </li>
                <li class="list-item">
                  <router-link :to="{ name: 'passwordSeller' }">
                    <i class="fa fa-lock"></i>
                    تغییر کلمه عبور
                  </router-link>
                </li>
                <li class="list-item">
                  <a href="/logout">
                    <i class="fas fa-sign-out-alt"></i>
                    خروج
                  </a>
                </li>
              </ul>
              <ul v-else id="web-profile-items" class="collapse">
                <li class="list-item">
                  <router-link :to="{ name: 'profileBasicBuyer' }">
                    <i class="fa fa-cog"></i>
                    داشبورد
                  </router-link>
                </li>
                <li class="list-item">
                  <router-link :to="{ name: 'passwordBuyer' }">
                    <i class="fa fa-lock"></i>
                    تغییر کلمه عبور
                  </router-link>
                </li>
                <li class="list-item">
                  <a href="/logout">
                    <i class="fas fa-sign-out-alt"></i>
                    خروج
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul v-else class="nav navbar-nav">
            <li class="hidden-xs">
              <router-link class="green-button" :to="{ name: 'register' }">
                <i class="fa fa-user static-layout"></i>
                ثبت نام رایگان
              </router-link>
            </li>

            <li class="mobile-login-link hidden-sm hidden-md hidden-lg">
              <router-link class="green-button" :to="{ name: 'register' }">
                <i class="fa fa-user"></i>

                <span>ورود / ثبت نام</span>
              </router-link>
            </li>

            <li class="hidden-xs">
              <router-link
                class="green-button green-button-alt static-layout"
                :to="{ name: 'login' }"
              >
                <i class="fa fa-sign-in-alt"></i>
                ورود به باسکول
              </router-link>
            </li>
          </ul>
        </div>

        <div
          class="collapse navbar-collapse navbar-right"
          id="buskool-nav"
          :class="{
            'hidden-search':
              $route.name == 'login' || $route.name == 'register',
          }"
        >
          <div class="wrapper-nav">
            <div class="search-input hidden-xs">
              <input
                type="text"
                placeholder="محصول مورد نظر خود را جستجو کنید"
                v-model="mainSearchBoxText"
              />

              <button class="hidden-xs" @click="search">
                <i class="fa fa-search"></i>
              </button>
            </div>
            <ul class="mobile-navigation hidden-lg hidden-sm hidden-md">
              <li>
                <router-link
                  class="smoothScroll"
                  :to="{ name: 'indexPage' }"
                  @click="
                    registerComponentStatistics(
                      'header',
                      'home-page',
                      'click-on-home-page'
                    )
                  "
                >
                  صفحه نخست
                </router-link>
              </li>
              <li v-if="user_id !== ''">
                <router-link
                  v-if="is_seller == 1"
                  class="smoothScroll"
                  :to="{ name: 'messagesSeller' }"
                  @click="
                    registerComponentStatistics(
                      'header',
                      'dashboard',
                      'click-on-dashboard'
                    )
                  "
                >
                  پیام ها
                  <span
                    class="message-count"
                    v-if="$store.state.messageStore.messageCount > 0"
                    v-text="$store.state.messageStore.messageCount"
                  ></span>
                </router-link>

                <router-link
                  v-else
                  class="smoothScroll"
                  :to="{ name: 'messagesBuyer' }"
                  @click="
                    registerComponentStatistics(
                      'header',
                      'dashboard',
                      'click-on-dashboard'
                    )
                  "
                >
                  پیام ها
                  <span
                    class="message-count"
                    v-if="$store.state.messageStore.messageCount > 0"
                    v-text="$store.state.messageStore.messageCount"
                  ></span>
                </router-link>
              </li>
              <li v-if="user_id !== ''">
                <router-link
                  v-if="is_seller == 1"
                  class="smoothScroll"
                  :to="{ name: 'buyAdRequestsSeller' }"
                  @click="
                    registerComponentStatistics(
                      'header',
                      'dashboard',
                      'click-on-dashboard'
                    )
                  "
                  >درخواست های خرید</router-link
                >
                <router-link
                  v-else
                  class="smoothScroll"
                  :to="{ name: 'registerRequestBuyer' }"
                  @click="
                    registerComponentStatistics(
                      'header',
                      'dashboard',
                      'click-on-dashboard'
                    )
                  "
                  >ثبت درخواست خرید</router-link
                >
              </li>
              <li v-if="user_id !== ''">
                <router-link
                  v-if="is_seller == 1"
                  class="smoothScroll"
                  :to="{ name: 'messagesRequestSeller' }"
                  @click="
                    registerComponentStatistics(
                      'header',
                      'dashboard',
                      'click-on-dashboard'
                    )
                  "
                >
                  <span class="star-badge">
                    <i class="fa fa-star"></i>
                  </span>
                  خریداران پیشنهادی
                </router-link>
              </li>
              <li>
                <router-link
                  class="smoothScroll"
                  :to="{ name: 'productList' }"
                  @click="
                    registerComponentStatistics(
                      'header',
                      'product-list',
                      'click-on-product-list'
                    )
                  "
                >
                  لیست محصولات
                </router-link>
              </li>
              <li>
                <a
                  href="https:\\blog.buskool.com"
                  class="smoothScroll"
                  @click="
                    registerComponentStatistics(
                      'header',
                      'blog',
                      'click-on-blog'
                    )
                  "
                  >وبلاگ</a
                >
              </li>
              <!--  <li>
                            <router-link
                              class="smoothScroll"
                              :to="{ name: 'pricing'}"
                              @click="registerComponentStatistics('header','pricing','click-on-pricing')"
                            >ارتقا عضویت</router-link>
                          </li>
              -->
              <li>
                <router-link
                  class="smoothScroll"
                  :to="{ name: 'aboutUs' }"
                  @click="
                    registerComponentStatistics(
                      'header',
                      'about-us',
                      'click-on-about-us'
                    )
                  "
                >
                  درباره ما
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        v-if="$route.name != 'login' && $route.name != 'register'"
        class="search-input hidden-sm hidden-md hidden-lg"
      >
        <input
          type="text"
          placeholder="محصول مورد نظر خود را جستجو کنید"
          v-model="mainSearchBoxText"
        />
        <button class="fa fa-search" @click="search"></button>

        <button class="hidden-xs" @click="search">
          <i class="fa fa-search"></i>
          <span class="hidden-sm"> جستجو </span>
        </button>
      </div>
      <div class="container-fluid buskool-sub-menu hidden-xs">
        <ul class="nav navbar-right navbar-nav">
          <li>
            <router-link
              class="smoothScroll"
              :to="{ name: 'indexPage' }"
              @click="
                registerComponentStatistics(
                  'header',
                  'home-page',
                  'click-on-home-page'
                )
              "
            >
              صفحه نخست
            </router-link>
          </li>

          <li v-if="user_id !== ''">
            <router-link
              v-if="is_seller == 1"
              class="smoothScroll"
              :to="{ name: 'messagesSeller' }"
              @click="
                registerComponentStatistics(
                  'header',
                  'dashboard',
                  'click-on-dashboard'
                )
              "
            >
              پیام ها
              <span
                class="message-count"
                v-if="$store.state.messageStore.messageCount > 0"
                v-text="$store.state.messageStore.messageCount"
              ></span>
            </router-link>

            <router-link
              v-else
              class="smoothScroll"
              :to="{ name: 'messagesBuyer' }"
              @click="
                registerComponentStatistics(
                  'header',
                  'dashboard',
                  'click-on-dashboard'
                )
              "
            >
              پیام ها
              <span
                class="message-count"
                v-if="$store.state.messageStore.messageCount > 0"
                v-text="$store.state.messageStore.messageCount"
              ></span>
            </router-link>
          </li>
          <li v-if="user_id !== ''">
            <router-link
              v-if="is_seller == 1"
              class="smoothScroll"
              :to="{ name: 'buyAdRequestsSeller' }"
              @click="
                registerComponentStatistics(
                  'header',
                  'dashboard',
                  'click-on-dashboard'
                )
              "
              >درخواست های خرید</router-link
            >
            <router-link
              v-else
              class="smoothScroll"
              :to="{ name: 'registerRequestBuyer' }"
              @click="
                registerComponentStatistics(
                  'header',
                  'dashboard',
                  'click-on-dashboard'
                )
              "
              >ثبت درخواست خرید</router-link
            >
          </li>
          <li v-if="user_id !== ''">
            <router-link
              v-if="is_seller == 1"
              class="smoothScroll"
              :to="{ name: 'messagesRequestSeller' }"
              @click="
                registerComponentStatistics(
                  'header',
                  'dashboard',
                  'click-on-dashboard'
                )
              "
            >
              <span class="star-badge">
                <i class="fa fa-star"></i>
              </span>
              خریداران پیشنهادی
            </router-link>
          </li>
          <li>
            <router-link
              class="smoothScroll"
              :to="{ name: 'productList' }"
              @click="
                registerComponentStatistics(
                  'header',
                  'product-list',
                  'click-on-product-list'
                )
              "
            >
              لیست محصولات
            </router-link>
          </li>
          <li>
            <a
              href="https:\\blog.buskool.com"
              class="smoothScroll"
              @click="
                registerComponentStatistics('header', 'blog', 'click-on-blog')
              "
              >وبلاگ</a
            >
          </li>
          <!--  <li>
                        <router-link
                          class="smoothScroll"
                          :to="{ name: 'pricing'}"
                          @click="registerComponentStatistics('header','pricing','click-on-pricing')"
                        >ارتقا عضویت</router-link>
                      </li>
          -->
          <li>
            <router-link
              class="smoothScroll"
              :to="{ name: 'aboutUs' }"
              @click="
                registerComponentStatistics(
                  'header',
                  'about-us',
                  'click-on-about-us'
                )
              "
            >
              درباره ما
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
var visible = false;

export default {
  data() {
    return {
      popUpMsg: "",
      deleteText: "",
      mainSearchBoxText: "",
    };
  },
  props: [
    "assets",
    "user_id",
    "is_seller",
    "profile_photo",
    "user_full_name",
    "user_logout_path",
    "storage_path",
    "login_page_path",
  ],
  methods: {
    // jQuery
    jqUpdateSize: function () {
      // Get the dimensions of the viewport
      var width = $(window).width();
      if (width < 767) {
        $("#collapseHeader a.smoothScroll").on("click", function () {
          $(".btn-navbar").click(); //bootstrap 2.x
          $(".navbar-toggle").click(); //bootstrap 3.x by Richard
          $(".navbar-toggler").click(); //bootstrap 4.x
        });
      }
    },
    logUserOut: function () {
      localStorage.removeItem("userRoute");
      this.registerComponentStatistics(
        "header",
        "register-login",
        "click-on-register-login"
      );
    },
    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
    search: function () {
      if (this.mainSearchBoxText !== "") {
        let searchValue = this.mainSearchBoxText;
        let queryValue = searchValue.replace(/ /g, "+");

        this.$router.push({
          name: "productList",
          query: {
            s: queryValue,
          },
        });
      }
    },
  },
  mounted() {
    if (this.user_id) {
      axios
        .post("/get_total_unread_messages_for_current_user")
        .then(function (response) {
          let messageCount = response.data.msg_count;
          this.$store.state.messageStore.messageCount = messageCount;
        })
        .catch(function (error) {
          console.log("error", error);
        });
    }
    // scroll handeling hide in web
    var lastScroll = 0;
    var navbar = $("nav.navbar .buskool-sub-menu");
    $(window).scroll(function () {
      var state = $(window).scrollTop();

      if ($(window).scrollTop() > 60 && state > lastScroll) {
        navbar.addClass("scrollUp");
      } else if (
        ($(window).scrollTop() < 60 && state < lastScroll) ||
        ($(window).scrollTop() > 60 && state < lastScroll)
      ) {
        navbar.removeClass("scrollUp");
      }

      lastScroll = state;
    });

    $("#buskool-nav").on("hide.bs.collapse", function () {
      $(".mobile-background-shadow").fadeTo(0, 0, function () {
        $(this).css("display", "none");
      });
    });

    $("#buskool-nav").on("show.bs.collapse", function () {
      $(".mobile-background-shadow").fadeTo(0, 0.8);
    });

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

      /* bootstrap collapse js adds "in" class to your collapsible element*/

      var menu_opened = $("#buskool-nav").hasClass("in");

      if (!$(e.target).is(".search-input input") && menu_opened === true) {
        $("#buskool-nav").collapse("toggle");
      }
    });

    eventBus.$on("textSearch", (event) => {
      this.mainSearchBoxText = event;
    });

    $(window).resize(this.jqUpdateSize); // When the browser changes size
  },
  created() {
    document.addEventListener("click", this.documentClick);

    var self = this;

    window.addEventListener("keydown", function (event) {
      if (
        !window.location.pathname.includes("seller") &&
        !window.location.pathname.includes("buyer") &&
        !window.location.pathname.includes("login")
      ) {
        if (event.keyCode === 13) {
          self.search();
          $("#buskool-nav").collapse("hide");
          $("#web-profile-items").collapse("hide");
        }
      }
    });
  },
  watch: {
    mainSearchBoxText: function (value) {
      eventBus.$emit("textSearch", value);
    },
  },
};
</script>
