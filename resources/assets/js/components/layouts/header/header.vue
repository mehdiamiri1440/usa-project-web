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
  min-width: 590px;
  position: relative;
  border-radius: 8px;
}

.search-input input {
  padding: 8px 157px 8px 15px;
  margin: 0;
  float: right;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
}

.search-input > button {
  transition: 150ms;
  border: none;
  margin: 0;
  padding: 8px 17px;
  color: #868686;
  background: none;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 17px;
  font-weight: 500;
}

button.open-categories {
  background: #eee;
  color: #313a43;
  font-weight: 400;
  padding: 9px 15px;
  font-size: 16px;
  border: none;
  border-radius: 0 12px 12px 0;
}

.custom-mega-menu .col-xs-12 {
  padding: 0 10px;
}
/* 
.custom-mega-menu .col-xs-12 > div {
  height: 160px;
  float: right;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
} */

.custom-mega-menu ul {
  position: absolute;
  margin: 0;
  list-style: none;
  z-index: 2;
}

.custom-mega-menu li:hover > ul {
  display: block;
}

.custom-mega-menu li:hover .open-categories {
  border-bottom-right-radius: 0;
}

.custom-mega-menu ul ul {
  position: absolute;
  display: none;
  margin: 0;
  background: #fff;
}
.custom-mega-menu ul ul li {
  display: block;
}

.custom-mega-menu ul ul ul {
  position: absolute;
  top: 0;
  right: 100%;
  width: 452px;
}

.custom-mega-menu .lvl1-wrapper {
  background: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 12px;
}

.custom-mega-menu .lvl2-wrapper {
  box-shadow: 0px 7px 9px rgba(0, 0, 0, 0.05);
  border-radius: 0 0 12px 12px;
  padding-bottom: 25px;
  min-height: calc(100% + 20px);
  max-height: 450px;
  overflow-y: auto;
}

.custom-mega-menu .lvl2-wrapper > li > div > div {
  padding: 0 3px;
}

.custom-mega-menu .lvl1-list > button {
  border: none;
  background: #fafafa;
  padding: 10px 0;
}

.custom-mega-menu .lvl1-list > button:hover {
  background: #eeeeee;
}
.custom-mega-menu .lvl1-list:last-of-type > button {
  border-bottom-right-radius: 12px;
}

.category-name {
  display: flex;
  justify-content: space-around;
  font-size: 15px;
}

.search-input > button.open-categories span {
  margin-left: 22px;
}

.search-input > button i:before {
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
  z-index: 1012;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #ebebeb;
}

nav.navbar.navbar-category {
  border-bottom: none !important;
}

nav.navbar.navbar-category .search-input {
  margin-bottom: 0;
}

.buskool-main-nav {
  border-bottom: 1px solid #fafafa;
  padding: 10px 15px;
}

.nav > li > a.green-button:hover {
  background: #f0f7e7;
  color: #5f6368 !important;
}

.nav > li > a.green-button.router-link-exact-active:hover {
  background: #eee;
}

nav .green-button {
  font-size: 14px;
  background: none;
  color: #5f6368;
  margin-top: 0;
  font-weight: 400;
  padding: 0;
  padding: 5px 10px;
  min-width: 80px;
  border-radius: 12px;
}

nav .green-button .item-icon {
  font-size: 19px;
}

nav .green-button .item-icon.register::before {
  content: "\F067";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 10px;
  position: relative;
  top: -5px;
  color: #21ad93;
}
.user-auth-info-wrapper .navbar-nav > li {
  margin: -5px auto;
  padding: 0 10px;
}

.user-auth-info-wrapper .navbar-nav > li:last-of-type .green-button-alt {
  margin-right: 0;
}

.user-auth-info-wrapper .navbar-nav > li:after {
  content: " ";
  width: 1px;
  height: 35px;
  position: absolute;
  left: 0;
  background: #eee;
  top: 8px;
}
.user-auth-info-wrapper .navbar-nav > li:first-of-type::after {
  display: none;
}

nav .green-button-alt {
  padding: 5px 10px;
  font-size: 14px;
  margin-top: 0;
  margin-right: 15px;
  font-weight: 400;
  border-radius: 12px;
  border: none;
  background: none;
  /* color: #1da1f2; */
  color: #5f6368;
}

.nav > li > a.green-button.green-button-alt:hover {
  color: #fff;
  background: #e6f4f8 !important;
}

.green-button:focus,
.green-button:hover {
  color: #fff !important;
}

.user-auth-info-wrapper .nav > li > a.green-button:focus,
.user-auth-info-wrapper .nav > li > a.router-link-exact-active,
.user-auth-info-wrapper
  .nav
  > li
  > a.router-link-exact-active
  .light-green-text,
.user-auth-info-wrapper
  .nav
  > li
  > a.router-link-exact-active
  .item-icon::before,
.user-auth-info-wrapper .nav > li > a.router-link-exact-active:hover {
  color: #fff !important;
  background: #eee !important;
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

.absolute-position > ul {
  position: absolute;
}

.buskool-sub-menu .navbar-right > li > a + ul {
  max-height: 450px;
  overflow-y: auto;
  display: none;
  height: 0;
  padding-bottom: 30px;
}

.buskool-sub-menu .navbar-right > li > a:hover + ul,
.buskool-sub-menu .navbar-right > li > ul:hover {
  display: block;
  height: initial;
}

.buskool-sub-menu .navbar-right > li > ul {
  position: absolute;
  /* width: 600px; */
  width: 450px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 0 0 12px 12px;
  display: block;
  height: initial;
}

.buskool-sub-menu .navbar-right > li > ul > li > ul {
  /* display: flex;
  flex-flow: column wrap;
  height: 160px; */
}

.buskool-sub-menu {
  transition: 0.3s;
  height: 33px;
  opacity: 1;
  overflow: hidden;
  margin-bottom: -1px;
  background-color: #fafafa;
}

.buskool-sub-menu.scrollUp {
  height: 0;
  opacity: 0;
  transition: 0.3s;
}

.buskool-sub-menu li {
  float: right;
}

.buskool-sub-menu .smoothScroll > a {
  color: #404b55;
  padding: 6px 15px;
  position: relative;
  border-left: 1px solid #eee;
  font-weight: 300;
}

.buskool-sub-menu .smoothScroll > a:focus {
  background: none;
}

button.menu-title {
  font-size: 16px;
  color: #444;
  padding: 25px 0 0;
  font-weight: 500;
  width: 100%;
  /* display: flex;
  justify-content: space-between; */
  background: none;
  border: none;
  text-align: right;
}

button.menu-title hr {
  background: #e0e0e0;
  margin: 7px 0;
  border: none;
  height: 1px;
  position: relative;
}

/* button.menu-title hr::after {
  content: "";
  position: absolute;
  width: 35px;
  background: #00c569;
  height: 2px;
  top: -1px;
  right: 0;
  border-radius: 5px;
} */
a.sub-menu-title {
  font-size: 14px;
  color: #707070;
  display: block;
  padding: 10px 0;
  font-weight: 300;
  transition: 300ms;
  transform: translateX(0);
}

a.sub-menu-title:hover {
  color: #21ad93;
  transform: translateX(-5px);
}

.buskool-sub-menu li:last-of-type a {
  border-left: none;
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
  top: 45px;
  background: #fff;
  width: 100%;
  text-align: right;
  direction: rtl;
  line-height: 1.618;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.05);
  z-index: 6;
  min-width: 160px;
  left: 0;
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
  padding-top: 2px;
}

.mobile-menu-button .message-count {
  padding-top: 0px;
  left: -12px;
  top: -5px;
}
.navbar-toggle {
  margin: 0;
  border: 1px solid;
  border-radius: 8px;
  height: 27px;
  width: 35px;
  padding: 0;
  padding-top: 9px;
  margin-bottom: 2px;
}
.navbar-toggle i {
  font-size: 15px;
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

.message-count.desktop-message-count {
  left: 13px;
  border: 3px solid #fff;
  top: -5px;
  padding-top: 0px;
  font-size: 11px;
  width: 25px;
  height: 25px;
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

@media screen and (max-width: 1245px) {
  .search-input {
    min-width: 545px;
  }
}
@media screen and (max-width: 1199px) {
  .search-input .open-categories {
    display: none;
  }
  .search-input input {
    padding: 8px 15px 8px 15px;
  }
  .search-input {
    min-width: 354px;
  }
}

@media screen and (max-width: 991px) {
  nav .green-button.static-layout {
    padding: 6px 8px 5px;
    font-size: 13px;
    width: initial;
  }

  .search-input {
    min-width: 277px;
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
  .profile-image-wrapper {
    margin-left: 0;
  }
}

@media screen and (max-width: 767px) {
  .user-auth-info-wrapper .navbar-nav > li:after {
    display: none;
  }
  .user-auth-info-wrapper .navbar-nav > li {
    padding: 0;
  }
  .search-input {
    overflow: hidden;
  }

  .search-input input {
    border: none;
    background: #f2f2f2;
  }

  .navbar-nav > li {
    border-right: none;
  }

  a.profile-info-wrapper {
    margin-top: -4px;
  }
  a.profile-info-wrapper .profile-image-wrapper {
    width: 35px;
    height: 35px;
    margin-top: 3px;
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
    border-bottom: none;
    margin: 0 10px;
  }

  .search-input {
    min-width: 100%;
    margin: 10px auto;
    padding: 0 10px;
  }

  .search-input > button {
    font-weight: bold;
    top: 0;
    bottom: 0;
    left: initial;
    right: 10px;
    padding: 9px;
    background: none;
    color: #5f6368;
  }

  .search-input > .location-filter-wrapper {
    position: absolute;
    left: 10px;
    top: 0;
  }

  .search-input > .location-filter-wrapper button {
    border: none;
    color: #7e7e7e;
    padding: 6px 10px;
    background: #f2f2f2;
    border-radius: 8px;
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

    top: 93px;

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
  .mobile-login-link a {
    font-size: 12px;
    color: #fff;
    background: #00c569;
    padding: 4px 9px;
    margin-top: 6px;
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

  .mobile-login-link {
    font-size: 11px;
  }
}

@media screen and (max-width: 360px) {
  .mobile-login-link a {
    padding: 6px 16px 4px;
    font-size: 17px;
    min-width: initial;
  }

  .mobile-login-link span {
    display: none;
  }
}
</style>

<template>
  <div>
    <!-- loading -->
    <div :class="{ 'loader-wrapper': !submiting, 'loader-display': submiting }">
      <div class="main-loader">
        <img v-if="submiting" src="../../../../img/gif/prload.gif" />
        <p dir="rtl">در حال بارگذاری...</p>
      </div>
    </div>
    <!-- Modals -->
    <div class="container">
      <div
        id="deleteModal"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="main_popup_content">
              <a href="#" data-dismiss="modal">
                <i class="fa fa-times"></i>
              </a>
              <p class="main-pop-up" v-text="popUpMsg"></p>

              <a
                href="#"
                class="btn green-button delete"
                data-dismiss="modal"
                @click.prevent="deleteProduct()"
                v-text="deleteButtonText"
              ></a>

              <a
                href="#"
                class="btn green-button"
                data-dismiss="modal"
                v-text="cancelButtonText"
              ></a>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

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
    <nav
      class="navbar text-rtl"
      :class="{
        'navbar-category':
          $route.name == 'productList' || $route.name == 'productCategory',
      }"
    >
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
              v-if="messageCount > 0"
              v-text="messageCount"
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
                  <span
                    class="hidden-xs hidden-sm"
                    v-text="user_full_name"
                  ></span>
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
            <li class="hidden-xs">
              <router-link
                v-if="is_seller == 1"
                class="green-button"
                :to="{ name: 'messagesSeller' }"
              >
                <div class="item-icon">
                  <i class="fas fa-comment-alt"></i>
                </div>
                پیام ها
                <span
                  class="message-count desktop-message-count"
                  v-if="messageCount > 0"
                  v-text="messageCount"
                ></span>
              </router-link>
              <router-link
                v-else
                class="green-button"
                :to="{ name: 'messagesBuyer' }"
              >
                <div class="item-icon">
                  <i class="fas fa-comment-alt"></i>
                </div>
                پیام ها
                <span
                  class="message-count desktop-message-count"
                  v-if="messageCount > 0"
                  v-text="messageCount"
                ></span>
              </router-link>
            </li>

            <li class="hidden-xs">
              <router-link
                v-if="is_seller"
                class="green-button green-button-alt static-layout"
                :to="{ name: 'buyAdRequestsSeller' }"
              >
                <div class="item-icon">
                  <i class="fa fa-users"></i>
                </div>
                خریداران
              </router-link>
              <router-link
                v-else
                class="green-button green-button-alt static-layout"
                :to="{ name: 'specialProducts' }"
              >
                <div class="item-icon">
                  <i class="fa fa-users"></i>
                </div>
                فروشندگان
              </router-link>
            </li>
          </ul>

          <ul v-else class="nav navbar-nav">
            <li class="hidden-xs">
              <router-link class="green-button" :to="{ name: 'register' }">
                <div class="item-icon register">
                  <i class="fa fa-user static-layout light-green-text"></i>
                </div>
                ثبت نام
                <span class="light-green-text"> رایگان </span>
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
                <div class="item-icon">
                  <i class="fa fa-sign-in-alt"></i>
                </div>
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
              <nav class="custom-mega-menu">
                <ul>
                  <li>
                    <button class="open-categories">
                      <span> همه محصولات </span>
                      <i class="fa fa-angle-down"></i>
                    </button>
                    <ul class="w-100 lvl1-wrapper">
                      <li
                        class="w-100 lvl1-list"
                        v-for="(category, index) in categoryList"
                        :key="index"
                      >
                        <button class="w-100">
                          <div class="category-name">
                            <span v-text="category.category_name"></span>
                            <i class="fa fa-angle-left"></i>
                          </div>
                        </button>

                        <ul class="lvl2-wrapper">
                          <li
                            v-for="(
                              subCategory, index
                            ) in category.subcategories"
                            :key="index + 'sub-menu'"
                            class="col-xs-12 pull-right text-right"
                            :class="[setMenuClass(subCategory, false)]"
                          >
                            <router-link
                              :to="{
                                name: 'productCategory',
                                params: {
                                  categoryName: subCategory.category_name,
                                },
                              }"
                              tag="button"
                              class="menu-title"
                            >
                              <span v-text="subCategory.category_name"></span>
                              <hr />
                            </router-link>
                            <div>
                              <div
                                v-for="(
                                  item, index
                                ) in subCategory.subcategories"
                                :key="index + 'last-sub-menu'"
                                class="col-xs-12 pull-right"
                                :class="[setSubMenuClass(subCategory, false)]"
                              >
                                <router-link
                                  :to="getSubCategoryUrl(item)"
                                  class="sub-menu-title"
                                  v-text="item.category_name"
                                >
                                </router-link>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
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
                    v-if="messageCount > 0"
                    v-text="messageCount"
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
                    v-if="messageCount > 0"
                    v-text="messageCount"
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
        <div
          v-if="
            $route.name == 'productList' || $route.name == 'productCategory'
          "
          class="hidden-sm hidden-md hidden-lg location-filter-wrapper"
        >
          <button data-toggle="modal" data-target="#searchFilter">
            <span v-if="selectedCity" v-text="selectedCity.city_name"> </span>
            <span
              v-else-if="selectedProvince"
              v-text="selectedProvince.province_name"
            >
            </span>
            <span v-else> همه ایران </span>
            <i class="fa fa-map-marker-alt"></i>
          </button>
        </div>
      </div>
      <div class="container-fluid buskool-sub-menu absolute-position hidden-xs">
        <ul class="nav navbar-right navbar-nav">
          <li
            v-for="(category, index) in categoryList"
            :key="index"
            class="smoothScroll"
          >
            <a
              href="#"
              class="hidden-lg"
              @click.prevent="openFilterModal(category)"
              v-text="category.category_name"
            >
            </a>
            <a
              href="#"
              class="hidden-md hidden-sm"
              @click.prevent
              v-text="category.category_name"
            >
            </a>
            <ul class="hidden-md hidden-sm">
              <li
                v-for="(subCategory, index) in category.subcategories"
                :key="index + 'sub-menu'"
                class="col-xs-12"
                :class="[setMenuClass(subCategory, true)]"
              >
                <!-- <a
                  href="#"
                  class="menu-title"
                  v-text="subCategory.category_name"
                > -->
                <router-link
                  :to="{
                    name: 'productCategory',
                    params: {
                      categoryName: subCategory.category_name,
                    },
                  }"
                  tag="button"
                  class="menu-title"
                >
                  <span v-text="subCategory.category_name"></span>
                  <hr />
                </router-link>

                <ul>
                  <li
                    v-for="(item, index) in subCategory.subcategories"
                    :key="index + 'last-sub-menu'"
                    class="col-xs-12"
                    :class="[setSubMenuClass(subCategory, true)]"
                  >
                    <router-link
                      :to="getSubCategoryUrl(item)"
                      class="sub-menu-title"
                      v-text="item.category_name"
                    >
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { eventBus } from "../../../router/router";

export default {
  data() {
    return {
      popUpMsg: "",
      submiting: false,
      isLoading: true,
      deleteText: "",
      deleteButtonText: "",
      cancelButtonText: "",
      ProductId: "",
      mainSearchBoxText: "",
      messageCount: 0,
      selectedProvince: "",
      selectedCity: "",
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
    "categoryList",
  ],
  methods: {
    headerMenuStyles() {
      let lvl1 = $(".lvl1-list");
      lvl1
        .mouseenter(() => {
          $(".search-input > input").css("border-bottom-left-radius", "0");
        })
        .mouseleave(() => {
          $(".search-input > input").css("border-bottom-left-radius", "12px");
        });
    },
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
    deleteProduct: function () {
      var self = this;

      axios
        .post("/delete_product_by_id", {
          product_id: self.productId,
        })
        .then(function (response) {
          //show product deleted message
          //code
          self.popUpMsg = "حذف شد.";
          $("#custom-main-modal").modal("show");

          self.registerComponentStatistics(
            "product",
            "product-deleted",
            "product-deleted-successfully"
          );

          setTimeout(function () {
            window.location.reload();
          }, 3000);
        })
        .catch(function (err) {
          self.registerComponentStatistics(
            "product",
            "product-delete-failed",
            "product-delete-failed"
          );
          //show modal
          self.popUpMsg = "خطایی رخ داده است.لطفا دوباره تلاش کنید.";
          $("#custom-main-modal").modal("show");
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

    setMenuClass(categories, bigScreen) {
      // let categoryLength = Object.keys(categories.subcategories).length;
      // if (categoryLength <= 10) {
      //   return "col-sm-6";
      // }
    },
    setSubMenuClass(categories, bigScreen) {
      // let categoryLength = Object.keys(categories.subcategories).length;
      // if (categoryLength <= 10) {
      //   return "col-sm-6";
      // } else {
      return "col-sm-4";
      // }
    },
    handelScroll() {
      // scroll handeling hide in web
      var lastScroll = 0;
      var navbar = $("nav.navbar .buskool-sub-menu");
      $(window).scroll(function () {
        var state = $(window).scrollTop();

        if ($(window).scrollTop() > 60 && state > lastScroll) {
          navbar.removeClass("absolute-position").addClass("scrollUp");
        } else if (
          ($(window).scrollTop() < 60 && state < lastScroll) ||
          ($(window).scrollTop() > 60 && state < lastScroll)
        ) {
          navbar.removeClass("scrollUp");
          setTimeout(() => {
            navbar.addClass("absolute-position");
          }, 300);
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
    },
    getSubCategoryUrl: function (t) {
      let searchElement = $(".lvl1-wrapper");
      let element = $(".buskool-sub-menu .navbar-right > li >  ul");
      searchElement.addClass("hidden");
      element.addClass("hidden");
      setTimeout(() => {
        searchElement.removeClass("hidden");
        element.removeClass("hidden");
      }, 20);
      let url =
        "/product-list/category/" + t.category_name.split(" ").join("-");
      return url;
    },
    checkLocationFilter() {
      const province = localStorage.getItem("selectedProvince");
      const city = localStorage.getItem("selectedCity");
      this.selectedProvince = province ? JSON.parse(province) : "";
      this.selectedCity = city ? JSON.parse(city) : "";
    },
    openFilterModal(category) {
      if (category) {
        this.$parent.modalSubCategory = category;
        $("#categories-modal").modal("show");
      } else {
        this.$parent.modalSubCategory = false;
        $("#categories-modal").modal("show");
      }
    },
  },
  mounted() {
    this.checkLocationFilter();
    if (this.user_id) {
      axios
        .post("/get_total_unread_messages_for_current_user")
        .then(function (response) {
          let messageCount = response.data.msg_count;
          eventBus.$emit("messageCount", messageCount);
        })
        .catch(function (error) {
          console.log("error", error);
        });
    }
    this.handelScroll();

    eventBus.$on("submitSuccess", ($event) => {
      this.popUpMsg = $event;
    });
    eventBus.$on("submiting", ($event) => {
      this.submiting = $event;
    });
    eventBus.$on("isLoading", ($event) => {
      this.isLoading = $event;
    });

    eventBus.$on("deleteButtonText", (event) => {
      this.deleteButtonText = event;
    });

    eventBus.$on("cancelButtonText", (event) => {
      this.cancelButtonText = event;
    });

    eventBus.$on("productId", (event) => {
      this.productId = event;
    });

    eventBus.$on("textSearch", (event) => {
      this.mainSearchBoxText = event;
    });

    eventBus.$on("messageCount", (event) => {
      this.messageCount += event;
    });

    eventBus.$on("selectedProvince", (event) => {
      this.selectedProvince = event;
    });
    eventBus.$on("selectedCity", (event) => {
      this.selectedCity = event;
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
    categoryList() {
      this.$nextTick(() => {
        this.headerMenuStyles();
      });
    },
  },
};
</script>
