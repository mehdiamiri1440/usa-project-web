<style>
.footer-note-wrapper h1,
.footer-note-wrapper h2,
.footer-note-wrapper h3,
.footer-note-wrapper h4,
.footer-note-wrapper p,
.footer-note-wrapper div,
.footer-note-wrapper span {
  font-size: 14px;
  line-height: 1.618;
  margin: 10px auto;
}
</style>

<style scoped>
#main-content {
  padding-top: 122px;
}

#main {
  padding-top: 32px;
}

@media screen and (min-width: 1200px) {
  #main-content {
    padding-top: 122px;
  }
}

.shadow-content {
  background: #fff;
}

.default-main-wrapper {
  border: 1px solid #e9ecef;
  border-radius: 12px;
  overflow: hidden;
}

.sidebar {
  will-change: min-height;
}

.sidebar__inner {
  transform: translate(0, 0); /* For browsers don't support translate3d. */
  transform: translate3d(0, 0, 0);
  will-change: position, transform;
}

#wrap-footer {
  display: none;
}

.loading_images {
  padding-top: 115px;
}

#searchFilter {
  background: #fff;
  padding-left: 0 !important;
}

#searchFilter .modal-dialog {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}

#searchFilter .main_popup_content {
  padding: 0;
}

a.close-dialog-popup {
  display: block;

  padding: 15px;

  font-size: 22px;

  color: #e41c38;

  text-align: right;

  background: #000546;
}

.filter-mobile-sidebar {
  max-width: 500px;
  margin: 0 auto;
}

.flat-plust-icon {
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 2;
}

.flat-plust-icon a {
  background: #e41c38;
  width: 50px;
  height: 50px;
  display: block;
  border-radius: 50px;
  color: #fff;
  -webkit-box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  padding-top: 15px;
  font-size: 23px;
}

.owl-carousel img {
  border-radius: 3px;
}

.image-header-profile img {
  height: 100%;
}

.header-nav {
  direction: rtl;
  text-align: right;
  padding: 20px 30px;
  font-size: 17px;
}

.header-nav a {
  color: #777;
}

.header-nav a:hover {
  color: #333;
}

.title-page {
  text-align: center;

  margin: 40px auto 35px;
}

.sub-header {
  background: #f0f3f6;
  padding: 0 15px;
}

.search-box {
  position: relative;
  margin-top: 14px;
  border: none;
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
  right: 18px;
  top: 15px;
  border-left: 1px solid;
  color: #777;
  padding: 0 7px;
  font-size: 22px;
  height: 20px;
}

button.btn-filter {
  float: left;
  padding: 6px 10px 7px;
  border-radius: 3px;
  border: none;
  background: #000546;
  color: #fff;
  width: 140px;
  margin-right: 15px;
  border-radius: 8px;
}

.links-sub-header {
  direction: rtl;
}

.links-sub-header a {
  padding: 25px 15px;
  display: inline-block;
  color: #808c9b;
  font-weight: bold;
  font-size: 14px;
  position: relative;
}

.links-sub-header a:hover {
  color: #313942;
}

.links-sub-header a:hover:after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

#main {
  position: relative;
}

.main-content > h4 {
  margin: 30px auto;
}

.green-button {
  margin: 5px 0;
  display: inline-block;
  background: #00c569;
  color: #fff;
  padding: 10px 0;
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  width: 100%;
  line-height: 21px;
}

.red_bot {
  background: #e41c38;
  color: #fff;
}

.green-button:hover {
  background: #279b41;
  color: #fff;
  cursor: pointer;
}

.sub-header-fix {
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  z-index: 2;
  background: #f0f3f6;
  padding: 0;
}

/*  .main-padding-fix {
          padding-top: 72px;
      }*/

li.active a {
  color: #313942;
}

li.active a::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

.image-wrapper {
  height: 300px;
  overflow: hidden;
}

.main-image {
  float: right;
}

.load-more-button {
  text-align: center;

  margin: 15px auto;
}

.load-more-button button {
  border: 2px solid;

  padding: 15px 30px;

  height: initial;

  background: #fff;

  position: relative;

  top: 0;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0, 0.2);

  transition: 200ms;

  color: #00c569;
}

.load-more-button button:hover {
  top: -3px;

  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  transition: 200ms;
}

.btn-loader {
  overflow: hidden;
}

.btn-loader-active-wrapper {
  height: 26px;
}

.btn-loader img {
  width: 56px;
  margin-top: -15px;
}

.rate-filter {
  float: right;
}

.static-sort-item {
  color: #999;
}

.rate-filter-desktop-wrapper,
.rate-filter-mobile-wrapper {
  background: #fff;
  direction: rtl;
  margin: 15px auto 0;
  padding: 7px 15px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
}

.rate-filter-desktop-wrapper > ul {
  float: right;
  padding: 4px 0;
}

.rate-filter-desktop-wrapper > ul li {
  padding: 0;
}

.rate-filter-desktop-wrapper ul button {
  background: none;

  border: none;
}

.rate-filter label {
  float: right;
  margin-left: 7px;
}

.rate-filter > button {
  padding: 8px 0;

  font-size: 14px;

  margin: 0;

  font-weight: 400;

  width: 140px;

  border-radius: 8px;
}

.filter-select-input-wrapper {
  float: right;
  max-width: 138px;
  position: relative;
}

.filter-select-input-wrapper:after {
  content: "\F107";

  color: #777;

  position: absolute;

  display: inline-block;

  top: 9px;

  font-family: "Font Awesome 5 Free", sans-serif;

  font-weight: 900;

  left: 6px;

  font-size: 20px;

  z-index: 0;
}
.filter-select-input-wrapper select {
  width: 100%;

  border-radius: 4px;

  border: 1px solid;

  padding: 6px 3px 6px 22px;

  position: relative;

  z-index: 1;

  color: #777777;

  direction: rtl;

  transition: 200ms;

  background: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
}
.text-green {
  color: #00c569 !important;
}

.show-list-items {
  float: left;
  padding-top: 2px;
}
.show-list-items button {
  background: #eee;
  border: 1px solid #999;
  border-radius: 5px;
  padding: 3px 14px 0;
  transition: 300ms;
}
.show-list-items button:hover {
  background: #556080;
  color: #fff;
  border-color: #556080;
  transition: 300ms;
}
.show-list-items button.active {
  background: #556080;
  color: #fff;
  border-color: #556080;
  transition: 300ms;
}

.footer-note-wrapper {
  background: #fff;
  direction: rtl;
  margin: 15px auto;
  padding: 7px 15px;
  border-radius: 5px;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  max-height: 220px;

  overflow-y: auto;

  line-height: 1.628;
}

.wrapper-contents {
  margin-bottom: 20px;
}

.footer-note-wrapper h3 {
  font-size: 15px;
  margin: 8px auto;
}

.title-section {
  direction: rtl;
  margin: 50px auto 10px;
}

.title-section h1 {
  font-size: 16px;
  color: #00c569;
  float: right;
}

.title-section hr {
  margin: 15px 15px 10px auto;
  position: relative;
}

.title-section hr::after {
  content: " ";
  height: 3px;
  width: 50px;
  background: #00c569;
  position: absolute;
  top: -4px;
  right: 0;
}

.guide-button {
  height: 32px;
  border: solid 1px white;
  background: #e41c38;
  width: 100px;
  line-height: 32px;
  -webkit-transform: rotate(-90deg);
  font-weight: 500;
  color: white;
  transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  text-align: center;
  font-size: 17px;
  position: fixed;
  left: -40px;
  top: 50%;
  z-index: 999;
}

/* 
---------------------------------------------------------------------------------

filter modal styles
*/

.modal-content {
  overflow: hidden;
  border-radius: 12px;
}
.close-modal {
  font-size: 20px;

  color: #777;

  position: absolute;

  right: 0;

  padding: 8px 15px 2px;

  top: 0;
}

.modal-title {
  font-size: 16px;

  font-weight: 800;

  color: #474747;

  text-align: center;
}

.modal-header {
  padding: 9px 15px 10px;
}

.modal-body {
  padding: 0 15px;
}
.form-check-wrapper button {
  width: 100%;

  border: none;

  background: none;

  border-bottom: 1px solid #eee;

  text-align: right;

  padding: 12px 15px 13px;
}
.form-check-wrapper button.active {
  color: #00c569;
}
.form-check-wrapper button.active + i {
  color: #00c569;
  content: "\f00c";
}
.form-check-wrapper button.active + i:before {
  content: "\f00c";
}
.form-check-wrapper button:hover {
  background: #fafafa;
  cursor: pointer;
}

.form-check-wrapper li {
  position: relative;
}

.form-check-wrapper li:last-of-type button {
  border: none;
}
.form-check-wrapper li i {
  position: absolute;

  top: 15px;

  left: 20px;

  font-size: 18px;

  color: #777;
}

.default-grid {
  padding: 0 3px;
}

.default-grid .default-main-article-content {
  width: 100%;
}
.default-grid .default-wrapper-main-image {
  width: 100%;
  height: 160px;
}
.default-grid > div {
  padding: 0;
}

.default-grid .default-article-contents {
  padding: 15px;
}
/* 
end filter modal styles
---------------------------------------------------------------------------------
*/

.banner-wrapper {
  background: linear-gradient(90deg, #060446, #21ad93);
  min-height: 130px;
  position: relative;
  direction: rtl;
  overflow: hidden;
  border-radius: 12px;
  margin: 15px auto;
}

.banner-wrapper .main-wrapper {
  position: relative;
  padding: 20px 100px;
  overflow: hidden;
  z-index: 1;
}

.banner-button {
  width: initial;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 7px;
  background: #1da1f2;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.16);
}

.banner-button i {
  position: relative;
  top: 2px;
  margin-right: 5px;
}

.green-button.banner-button:hover {
  background: #1da1f2;
}

.banner-wrapper .banner-bg-striped {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../../../img/bg-striped.png") repeat;
  opacity: 0.2;
}

.banner-wrapper p {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: right;
  margin-bottom: 17px;
}

.banner-wrapper .circle-item-wrapper {
  position: absolute;
  left: 100px;
  width: 140px;
  height: 140px;
  background: #fff;
  top: calc(50% - 70px);
  border-radius: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.16);
}

#article-list.grid-items-wrapper {
  margin-right: -3px;
  margin-left: -3px;
}

div.items-wrapper {
  padding: 0 3px;
}

.banner-wrapper .circle-item-wrapper svg {
  flex: 1;
  text-align: center;
  font-size: 89px;
  position: relative;
  left: 9px;
  top: -2px;
  transform: rotate(-8deg);
  color: #595959;
}

.banner-wrapper .circle-item-wrapper::after {
  width: 195px;
  height: 195px;
  content: " ";
  background: #8ca6ec;
  position: absolute;
  top: -163px;
  right: -105px;
  border-radius: 170px;
  opacity: 0.3;
}

.banner-wrapper .circle-item-wrapper::before {
  width: 185px;
  height: 185px;
  content: " ";
  background: rgba(0, 156, 131, 0.5);
  position: absolute;
  bottom: -140px;
  left: -110px;
  border-radius: 170px;
}

@media screen and (max-width: 1199px) {
  .search-box input {
    width: 100%;
  }
}

@media screen and (max-width: 991px) {
  .title-page {
    text-align: center;
  }

  .right-sidebar {
    display: none;
  }

  .filter-mobile-sidebar .right-sidebar {
    display: block;
  }
}
@media screen and (max-width: 768px) {
  #filter-modal > div {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  #filter-modal .modal-content {
    min-height: 100%;

    border-radius: 0;

    border: none;

    float: right;

    width: 100%;
  }
  .main_popup_content > div {
    padding: 0;
  }
  .main_popup_content {
    padding: 0;
  }
  .banner-wrapper .main-wrapper {
    padding: 20px 15px;
  }

  .banner-wrapper .circle-item-wrapper {
    left: 15px;
  }
}

@media screen and (max-width: 767px) {
  #article-list.grid-items-wrapper {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .rate-filter-desktop-wrapper,
  .rate-filter-mobile-wrapper {
    background: #fbfbfb;
    border: none;
    border-radius: 0;
  }

  .main-content,
  #main,
  .category-footer {
    padding: 0;
  }

  #main {
    padding-top: 52px;
  }

  .sub-header {
    position: fixed;
    z-index: 2;
    width: 100%;
  }

  .search-box {
    margin: 0 auto;
    padding: 7px 15px;
    background: #fbfbfb;
  }

  .main-image {
    padding: 0;
  }

  .main-content > .row {
    margin: 0;
  }

  .sub-header {
    background: #f0f3f6;
  }

  .links-sub-header {
    direction: rtl;
    text-align: center;
  }

  .logo img {
    width: 100%;
  }

  .user-image {
    float: right;

    width: 100px;

    height: 100px;
  }

  .user-contents > p {
    float: right;

    font-size: 18px;

    padding-top: 40px;

    padding-right: 20px;
  }

  .user-contents > .green-button {
    float: left;

    width: initial;
    padding: 10px 25px;

    margin-top: 28px;
  }

  .create_buy {
    display: none;
  }
}

@media screen and (max-width: 715px) {
  .name-header-profile {
    display: none;
  }

  .profile-menu-header i {
    position: absolute;
    left: -75px;
    top: 22px;
    font-size: 20px;
  }
}

@media screen and (max-width: 555px) {
  .user-image {
    float: right;

    width: 60px;

    height: 60px;
  }

  .user-contents > .green-button {
    float: left;
    width: initial;
    padding: 10px;
    margin-top: 11px;
  }

  .user-contents > p {
    float: right;
    font-size: inherit;
    padding-top: 18px;
    padding-right: 5px;
  }

  .logo {
    padding: 6px 10px;
  }

  #article-list > div > div {
    padding: 0;
  }

  .default-items {
    padding: 0;
  }

  .banner-wrapper .circle-item-wrapper {
    left: 20px;
    width: 110px;
    height: 110px;
    top: calc(50% - 55px);
  }

  .banner-wrapper .circle-item-wrapper svg {
    left: 5px;
    top: -2px;
    font-size: 65px;
  }

  .banner-wrapper .circle-item-wrapper::before {
    width: 115px;
    height: 115px;
    bottom: -80px;
    left: -50px;
  }

  .banner-wrapper .circle-item-wrapper::after {
    top: -170px;
    right: -75px;
    opacity: 0.5;
  }
}

@media screen and (max-width: 430px) {
  .logo {
    padding: 6px 63px;
    width: 100%;
    height: 109px;
  }

  .profile-menu-header {
    padding: 3px;
    padding-left: 35px;
    float: left;
  }
  .banner-wrapper p {
    font-size: 16px;
  }
}

@media screen and (max-width: 370px) {
  .mobile-hidden {
    display: none;
  }
  .default-wrapper-main-image {
    width: 90px;

    height: 90px;
  }
  .default-main-article-content {
    width: calc(100% - 90px);
  }
  .default-button-min-with {
    width: 100%;
  }
}

@media screen and (min-width: 370px) {
  .hidden-afetr-mobile-hidden {
    display: none;
  }
}
</style>
<template>
  <div>
    <!--modal-->

    <div class="container">
      <div
        class="modal"
        id="searchFilter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="searchFilter"
      >
        <div class="modal-dialog">
          <div class="modal-header">
            <a href="#" class="close-modal" @click.prevent="closeFilterModal()">
              <i class="fa fa-times"></i>
            </a>
            <div class="modal-title">
              <span>دسته ها و فیلتر</span>
            </div>
          </div>
          <div class="main_popup_content">
            <div class="col-xs-12">
              <div class="filter-mobile-sidebar">
                <ProductAsideCategories
                  :productsInfo="products"
                  :categoryId="categoryId"
                  :subCategoryId="subCategoryId"
                  :provinceId="provinceId"
                  :cityId="cityId"
                  v-on:productsToParent="filterProducts($event)"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>
    <div class="container">
      <div
        id="filter-modal"
        class="filter-modal modal fade"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <a href="#" class="close-modal" @click.prevent="closeSortModal()">
                <i class="fa fa-times"></i>
              </a>
              <div class="modal-title">
                <span>مرتب سازی بر اساس</span>
              </div>
            </div>

            <div class="modal-body col-xs-12">
              <ul class="form-check-wrapper">
                <li>
                  <button
                    @click="setSortOption('RR')"
                    class="default-button-list"
                    :class="{ active: sortOption == 'RR' }"
                  >
                    احتمال پاسخگویی
                  </button>
                  <i class="fa fa-angle-left"></i>
                </li>
                <li>
                  <button
                    @click="setSortOption('RT')"
                    class="default-button-list"
                    :class="{ active: sortOption == 'RT' }"
                  >
                    سرعت پاسخگویی
                  </button>
                  <i class="fa fa-angle-left"></i>
                </li>
                <li>
                  <button
                    @click="setSortOption('RD')"
                    class="default-button-list"
                    :class="{ active: sortOption == 'RD' }"
                  >
                    جدیدترین ها
                  </button>
                  <i class="fa fa-angle-left"></i>
                </li>
              </ul>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
    </div>

    <div
      v-if="!currentUser.user_info"
      class="flat-plust-icon hidden-lg hidden-md"
    >
      <a href="#" @click.prevent="openStickyGuide()">
        <i class="fa fa-exclamation"></i>
      </a>
    </div>

    <div v-if="!currentUser.user_info">
      <button
        class="guide-button hidden-sm hidden-xs"
        @click.prevent="openStickyGuide()"
      >
        راهنما
      </button>
    </div>

    <div
      class="sub-header-fix sub-header hidden-lg hidden-md hidden-sm container-fluid"
    >
      <div class="search-box col-sm-8 col-xs-12 col-lg-5 pull-right">
        <input
          type="text"
          v-model="headerSearchText"
          placeholder="اینجا جستجو کنید"
        />

        <button class="btn-search">
          <i class="fa-search fa"></i>
        </button>
      </div>
      <div class="rate-filter-mobile-wrapper">
        <div class="rate-filter">
          <button class="green-button bg-gray" @click.prevent="openSortModal()">
            <i class="fas fa-sort-amount-down-alt"></i>
            مرتب سازی
          </button>
        </div>
        <button class="btn-filter hidden-lg" @click.prevent="openFilterModal()">
          <i class="fa fa-filter"></i>
          دسته ها و فیلتر
        </button>
      </div>
    </div>

    <main id="main" class="container">
      <div class="col-xs-12 col-lg-9">
        <div class="row">
          <section class="hidden-xs col-xs-12">
            <div class="rate-filter-desktop-wrapper">
              <ul class="list-unstiled list-inline">
                <li class="static-sort-item">
                  <p>
                    <i class="fa fa-sort-amount-down-alt"> </i>
                    مرتب سازی بر اساس :
                  </p>
                </li>
                <li>
                  <button
                    @click="setSortOption('RR')"
                    :class="{ 'text-green': sortOption == 'RR' }"
                  >
                    احتمال پاسخگویی
                  </button>
                </li>
                <li>
                  <button
                    @click="setSortOption('RT')"
                    :class="{ 'text-green': sortOption == 'RT' }"
                  >
                    سرعت پاسخگویی
                  </button>
                </li>
                <li>
                  <button
                    @click="setSortOption('RD')"
                    :class="{ 'text-green': sortOption == 'RD' }"
                  >
                    جدیدترین ها
                  </button>
                </li>
              </ul>
              <button
                class="btn-filter hidden-lg"
                data-toggle="modal"
                data-target="#searchFilter"
              >
                <i class="fa fa-filter"></i>
                دسته ها و فیلتر
              </button>
              <div class="show-list-items hidden-xs hidden-sm">
                <button
                  @click.prevent="listIsGrid = true"
                  :class="{ active: listIsGrid }"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="نمایش ستونی"
                >
                  <i class="fas fa-grip-horizontal"></i>
                </button>

                <button
                  @click.prevent="listIsGrid = false"
                  :class="{ active: !listIsGrid }"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="نمایش لیستی"
                >
                  <i class="fa fa-list"></i>
                </button>
              </div>
            </div>
          </section>

          <section class="main-content col-xs-12" v-if="products.length > 0">
            <div
              id="article-list"
              class="row"
              :class="{ 'grid-items-wrapper': listIsGrid }"
            >
              <div v-if="!listIsGrid">
                <div
                  class="col-xs-12"
                  :key="productIndex"
                  v-for="(product, productIndex) in products"
                >
                  <div
                    v-if="
                      (productIndex % 9 == 0 &&
                        productIndex != 0 &&
                        currentUser.user_info &&
                        currentUser.user_info.is_buyer) ||
                      (productIndex % 9 == 0 &&
                        productIndex != 0 &&
                        !currentUser.user_info)
                    "
                    class="banner-wrapper"
                  >
                    <div class="banner-bg-striped"></div>
                    <div class="main-wrapper">
                      <p>آیا محصول مورد نظر خود را پیدا نکرده اید؟</p>
                      <p>درخواست خرید ثبت کنید.</p>
                      <router-link
                        :to="{ name: 'registerRequestBuyer' }"
                        class="btn green-button banner-button hover-effect"
                        :class="{ 'hidden-xs': !currentUser.user_info }"
                      >
                        ثبت درخواست خرید
                        <i class="fa fa-arrow-left"> </i>
                      </router-link>
                      <router-link
                        :to="{ name: 'register' }"
                        v-if="!currentUser.user_info"
                        class="btn green-button banner-button hover-effect hidden-sm hidden-md hidden-lg"
                      >
                        ثبت درخواست خرید
                        <i class="fa fa-arrow-left"> </i>
                      </router-link>
                    </div>
                    <div class="circle-item-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="98"
                        height="98"
                        viewBox="0 0 98 98"
                      >
                        <image
                          id="Image_7"
                          data-name="Image 7"
                          width="98"
                          height="98"
                          opacity="0.65"
                          xlink:href="data:image/png;base64,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"
                        />
                      </svg>
                    </div>
                  </div>

                  <ProductArticle
                    :productIndex="productIndex"
                    v-if="products.length >= productIndex"
                    :key="product.main.id"
                    :product="product"
                    :str="str"
                    :currentUser="currentUser"
                  />
                </div>
              </div>
              <div v-else>
                <div
                  :key="productIndex"
                  v-for="(product, productIndex) in products"
                >
                  <div
                    class="col-xs-12"
                    v-if="
                      (productIndex % 12 == 0 &&
                        productIndex != 0 &&
                        currentUser.user_info &&
                        currentUser.user_info.is_buyer) ||
                      (productIndex % 12 == 0 &&
                        productIndex != 0 &&
                        !currentUser.user_info)
                    "
                  >
                    <div class="row">
                      <div class="banner-wrapper">
                        <div class="banner-bg-striped"></div>
                        <div class="main-wrapper">
                          <p>آیا محصول مورد نظر خود را پیدا نکرده اید؟</p>
                          <p>درخواست خرید ثبت کنید.</p>
                          <router-link
                            v-if="!currentUser.user_info"
                            :to="{ name: 'register' }"
                            class="btn green-button banner-button hover-effect"
                          >
                            ثبت درخواست خرید
                            <i class="fa fa-arrow-left"> </i>
                          </router-link>
                          <router-link
                            v-else
                            :to="{ name: 'registerRequestBuyer' }"
                            class="btn green-button banner-button hover-effect"
                          >
                            ثبت درخواست خرید
                            <i class="fa fa-arrow-left"> </i>
                          </router-link>
                        </div>
                        <div class="circle-item-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="98"
                            height="98"
                            viewBox="0 0 98 98"
                          >
                            <image
                              id="Image_7"
                              data-name="Image 7"
                              width="98"
                              height="98"
                              opacity="0.65"
                              xlink:href="data:image/png;base64,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"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xs-6 col-sm-4 items-wrapper pull-right col-md-3"
                  >
                    <ProductGridArticle
                      :productIndex="productIndex"
                      v-if="products.length >= productIndex"
                      :key="product.main.id"
                      :product="product"
                      :str="str"
                      :currentUser="currentUser"
                    />
                  </div>
                </div>
              </div>
              <div
                class="load-more-button col-xs-12"
                v-if="continueToLoadProducts === true"
              >
                <button class="btn btn-loader" @click.prevent="feed()">
                  <div class="btn-content">
                    <span class="hidden-xs text-rtl" v-show="!loadMoreActive">
                      مشاهده محصولات بیشتر
                      <i class="fa fa-plus"></i>
                    </span>

                    <span
                      class="hidden-sm hidden-md hidden-lg text-rtl"
                      v-show="!loadMoreActive"
                    >
                      محصولات بیشتر
                      <i class="fa fa-plus"></i>
                    </span>

                    <div
                      v-show="loadMoreActive"
                      class="btn-loader-active-wrapper"
                    >
                      <img src="../../../../img/gif/loading.gif" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </section>
          <!-- test -->

          <search-not-found
            v-else-if="products.length === 0 && searchActive === true"
          />
          <search-not-found
            v-else-if="products.length === 0 && searchText !== ''"
          />
          <search-not-found
            v-else-if="products.length === 0 && searchText === ''"
          />

          <section v-else class="main-content col-xs-12">
            <div class="row" v-if="!listIsGrid">
              <div
                v-for="(defaultItem, index) in 8"
                :key="index"
                class="default-items col-xs-12"
              >
                <div
                  class="col-xs-12 padding-15 margin-15-0 default-item-wrapper default-main-wrapper"
                >
                  <div class="default-user-contents col-xs-12 padding-0">
                    <div
                      class="placeholder-content default-article-user-image pull-right"
                    ></div>

                    <span
                      class="padding-top-5 placeholder-content margin-15 pull-right content-min-width"
                    ></span>
                  </div>

                  <div
                    class="default-article-contents padding-0 margin-top-10 col-xs-12"
                  >
                    <div class="default-wrapper-main-image pull-right">
                      <span
                        class="default-main-image placeholder-content"
                      ></span>
                    </div>
                    <div class="default-main-article-content">
                      <span
                        class="content-half-width placeholder-content"
                      ></span>

                      <span
                        class="content-default-width placeholder-content"
                      ></span>

                      <span
                        class="content-min-width placeholder-content mobile-hidden"
                      ></span>

                      <span
                        class="content-half-width placeholder-content"
                      ></span>
                    </div>
                    <span
                      class="margin-top-10 placeholder-content default-button-min-with pull-left hidden-afetr-mobile-hidden"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div
                v-for="(defaultItem, index) in 12"
                :key="index"
                class="default-items col-sm-4 col-md-3 default-grid"
              >
                <div
                  class="col-xs-12 margin-15-0 default-item-wrapper default-main-wrapper"
                >
                  <div class="default-wrapper-main-image pull-right">
                    <span class="default-main-image placeholder-content"></span>
                  </div>

                  <div
                    class="default-article-contents padding-0 margin-top-10 col-xs-12"
                  >
                    <div class="default-main-article-content">
                      <span
                        class="content-half-width placeholder-content"
                      ></span>

                      <span
                        class="content-default-width placeholder-content"
                      ></span>
                      <span
                        class="margin-top-10 placeholder-content default-button-min-with pull-left hidden-afetr-mobile-hidden"
                      ></span>
                      <span
                        class="placeholder-content default-button-full-with pull-left mobile-hidden"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <aside
        id="sidebar"
        class="product-sidebar sidebar hidden-xs hidden-sm hidden-md col-lg-3"
      >
        <div class="row">
          <div class="sidebar__inner col-xs-12" style="position: relative">
            <ProductAsideCategories
              :productsInfo="products"
              :categoryId="categoryId"
              :subCategoryId="subCategoryId"
              :provinceId="provinceId"
              :cityId="cityId"
              v-on:productsToParent="filterProducts($event)"
            />
          </div>
        </div>
      </aside>
    </main>
    <footer
      class="category-footer container"
      v-if="categoryMetaData.length > 0 && categoryMetaData[0]"
    >
      <div class="col-xs-12">
        <div data-v-c5ebe4ce class="title-section col-xs-12">
          <div data-v-c5ebe4ce class="row">
            <h1 data-v-c5ebe4ce>
              خرید عمده
              <span v-text="this.getCategoryName()"></span>
            </h1>
            <hr data-v-c5ebe4ce />
          </div>
        </div>

        <div class="footer-note-wrapper main-box-shadow">
          <div class="wrapper-contents">
            <div
              class="contents"
              v-for="categoryMeta in categoryMetaData"
              :key="categoryMeta.id"
            >
              <div v-html="categoryMeta.header"></div>
              <div v-html="categoryMeta.content"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import ProductArticle from "./product_components/product_article";
import ProductGridArticle from "./product_components/Product_grid_article";
import ProductAsideCategories from "./product_components/sidebar/product_aside_categories";
import searchNotFound from "./main_components/search-not-found";
import { eventBus } from "../../../router/router";

var visible = false;
export default {
  components: {
    ProductArticle,
    ProductGridArticle,
    ProductAsideCategories,
    searchNotFound,
  },
  props: ["assets", "str"],
  data: function () {
    return {
      currentUser: {
        profile: "",
        user_info: "",
      },
      products: {
        main: "",
        user_info: "",
        profile_info: {
          profile_photo: "",
        },
        photos: [],
      },
      searchText: "",
      provinceId: "",
      categoryId: "",
      subCategoryId: "",
      cityId: "",
      categoryMetaData: "",
      searchValue: this.$route.params.searchText,
      scrolled: false,
      productCountInPage: 12,
      productCountInEachLoad: 12,
      continueToLoadProducts: true,
      fromProductCount: 0,
      searchActive: false,
      errors: "",
      popUpMsg: "",
      submiting: false,
      loading: false,
      bottom: false,
      loadMoreActive: false,
      searchTextTimeout: null,
      headerSearchText: "",
      jsonLDObject: "",
      sortOption: "BM",
      verifiedUserContent: this.$parent.verifiedUserContent,
      listIsGrid: true,
    };
  },
  methods: {
    filterProducts: function (productsFilter) {
      this.products = productsFilter;
    },
    collapseDropDown: function () {
      $(".profile-list").fadeIn("slow", function () {
        visible = true;
      });
    },
    collapseDropDownList: function () {
      $(".icon-header-list").fadeIn("slow", function () {
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
    init: function () {
      this.products = {};
      this.scrollToTop();
      $(".show-list-items button").tooltip();
      this.swithToListOnMobile();
      this.cehckPageWidth();
      var self = this;
      var searchValue = this.searchValue;
      var searchValueText = searchValue;
      let categoryName = this.getCategoryName();

      axios
        .post("/get_category_meta_data", {
          category_name: categoryName,
        })
        .then(function (response) {
          self.categoryMetaData = response.data.category_info;
          self.jsonLDObject = response.data.schema_object;
        });
      axios.post("/user/profile_info").then(function (response) {
        self.currentUser = response.data;
        if (searchValueText) {
          self.registerComponentStatistics(
            "homePage",
            "search-text",
            searchValueText
          );
          self.searchText = searchValueText;
          setTimeout(function () {
            self.sidebarScroll();
          }, 500);
        } else {
          self.loading = true;

          self.fromProductCount = 0;
          self.productCountInPage = 12;

          axios
            .post("/user/get_product_list", {
              from_record_number: self.fromProductCount,
              response_rate: self.$parent.productByResponseRate,
              to_record_number: self.productCountInPage,
              search_text: categoryName,
              sort_by: self.sortOption,
            })
            .then(function (response) {
              self.products = response.data.products;
              self.loading = false;
              if (self.products.length < self.productCountInPage) {
                self.continueToLoadProducts = false;
              } else {
                self.continueToLoadProducts = true;
              }
              setTimeout(function () {
                self.sidebarScroll();
              }, 500);
              eventBus.$emit("submiting", false);
            });
        }
      });
    },
    feed() {
      var self = this;

      if (
        this.searchText === "" &&
        this.provinceId === "" &&
        this.categoryId === "" &&
        this.continueToLoadProducts
      ) {
        this.loadMoreActive = true;
        this.fromProductCount = this.productCountInPage;
        this.productCountInPage += this.productCountInEachLoad;
        axios
          .post("/user/get_product_list", {
            from_record_number: this.fromProductCount,
            response_rate: self.$parent.productByResponseRate,
            to_record_number: this.productCountInPage,
            search_text: this.getCategoryName(),
            sort_by: self.sortOption,
          })
          .then(function (response) {
            self.products = self.products.concat(response.data.products);

            eventBus.$emit("submiting", false);
            if (self.products.length + 1 < self.productCountInPage) {
              self.continueToLoadProducts = false;
            }

            self.loadMoreActive = false;
            setTimeout(function () {
              self.sidebarScroll();
            }, 500);
          });
      } else {
        let self = this;

        this.loadMoreActive = true;

        var searchObject = {};

        if (self.$parent.productByResponseRate) {
          searchObject.response_rate = self.$parent.productByResponseRate;
        }
        if (this.categoryId) {
          searchObject.category_id = this.categoryId;
        }
        if (this.subCategoryId) {
          searchObject.sub_category_id = this.subCategoryId;
        }
        if (this.provinceId) {
          searchObject.province_id = this.provinceId;
        }
        if (this.cityId) {
          searchObject.city_id = this.cityId;
        }

        searchObject.search_text = this.getCategoryName();

        searchObject.from_record_number = self.productCountInPage;
        self.productCountInPage += self.productCountInEachLoad;
        searchObject.to_record_number = self.productCountInPage;
        searchObject.sort_by = self.sortOption;

        axios
          .post("/user/get_product_list", searchObject)
          .then(function (response) {
            self.products = self.products.concat(response.data.products);

            self.loadMoreActive = false;

            setTimeout(function () {
              self.sidebarScroll();
            }, 500);
          })
          .catch(function (err) {
            alert("خطایی رخ داده است. دوباره تلاش کنید.");
          });
      }
    },
    registerRequestInSearchNotFoundCase: function () {
      if (this.currentUser.profile) {
        if (this.currentUser.user_info.is_buyer) {
          window.location.href = "/buyer/register-request";
        } else {
          this.popUpMsg = "حساب کاربری شما از نوع خریدار نیست.";
          eventBus.$emit("submitSuccess", this.popUpMsg);
          $("#custom-main-modal").modal("show");
        }
      } else {
        this.popUpMsg =
          "تنها کاربران تایید شده ی باسکول مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.";
        eventBus.$emit("submitSuccess", this.popUpMsg);
        $("#auth-popup").modal("show");
      }
    },
    bottomVisible: function () {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    addProductOrRequest: function () {
      if (this.currentUser.user_info) {
        if (this.currentUser.user_info.is_seller) {
          this.registerComponentStatistics(
            "product-list",
            "register-product",
            "seller clicks on plus button"
          );

          window.location.href = "/seller/register-product";
        } else if (this.currentUser.user_info.is_buyer) {
          this.registerComponentStatistics(
            "product-list",
            "register-request",
            "seller clicks on plus button"
          );

          window.location.href = "/buyer/register-request";
        }
      } else {
        this.registerComponentStatistics(
          "product-list",
          "unauthorized-user-clicks-on-plus-btn",
          "unauthorized-user-clicks-on-plus-btn"
        );

        eventBus.$emit("modal", "guide");
      }
    },
    resetFilter: function () {
      eventBus.$emit("submiting", true);

      $(".box-sidebar option").prop("selected", function () {
        return this.defaultSelected;
      });

      this.searchText = "";
      this.provinceId = "";
      this.categoryId = "";
      this.subCategoryId = "";
      this.cityId = "";

      this.init();
    },
    applyFilter: function () {
      var self = this;

      eventBus.$emit("submiting", true);

      self.fromProductCount = 0;
      self.productCountInPage = 12;

      var searchObject = {};

      if (self.$parent.productByResponseRate) {
        searchObject.response_rate = self.$parent.productByResponseRate;
      }
      if (this.categoryId) {
        searchObject.category_id = this.categoryId;
      }
      if (this.subCategoryId) {
        searchObject.sub_category_id = this.subCategoryId;
      }
      if (this.provinceId) {
        searchObject.province_id = this.provinceId;
      }
      if (this.cityId) {
        searchObject.city_id = this.cityId;
      }

      searchObject.search_text = this.getCategoryName();

      searchObject.from_record_number = self.fromProductCount;
      searchObject.to_record_number = self.productCountInPage;
      searchObject.sort_by = self.sortOption;

      axios
        .post("/user/get_product_list", searchObject)
        .then(function (response) {
          self.products = response.data.products;
          eventBus.$emit("submiting", false);

          self.scrollToTop();

          setTimeout(function () {
            self.sidebarScroll();
          }, 500);
        })
        .catch(function (err) {
          alert("خطایی رخ داده است. دوباره تلاش کنید.");
        });
    },
    setSortOption: function (sortOption) {
      $("#filter-modal").modal("hide");
      if (this.isDeviceMobile()) {
        history.go(-1);
      }

      if (this.sortOption != sortOption) {
        this.registerComponentStatistics(
          "product-category",
          "apply-sort",
          sortOption
        );

        this.sortOption = sortOption;
        this.init();
      }
    },
    isDeviceMobile: function () {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    stopLoader: function () {
      eventBus.$emit("isLoading", false);
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
    registerComponentExceptions: function (description, fatal = false) {
      gtag("event", "exception", {
        description: description,
        fatal: fatal,
      });
    },
    sidebarScroll() {
      let sidebarHeight = $("#sidebar").outerHeight();
      $("#main .main-content").css("min-height", sidebarHeight);
      $("#sidebar").StickySidebar({
        // Settings
        additionalMarginTop: 120,
      });
    },
    getCategoryName: function () {
      let name = this.$route.params.categoryName;

      return name.split("-").join(" ");
    },
    infiniteScrollHandler: function () {
      let lastOffset = 0;

      window.onscroll = () => {
        if (window.location.pathname.includes("product-list/category")) {
          var bottom =
            document.documentElement.scrollTop + window.innerHeight >
            document.documentElement.offsetHeight -
              document.documentElement.scrollTop / 2;

          let newOffset = document.documentElement.offsetHeight;

          if (bottom) {
            if (newOffset > lastOffset + 100) {
              lastOffset = document.documentElement.offsetHeight;
              this.feed();
            }
          }
        }
      };
    },
    openSortModal() {
      $("#filter-modal").modal("show");

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $("#filter-modal").modal("hide");
      });
    },
    closeSortModal: function () {
      $("#filter-modal").modal("hide");
      history.go(-1);
    },
    openFilterModal() {
      $("#searchFilter").modal("show");

      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $("#searchFilter").modal("hide");
      });
    },
    closeFilterModal: function () {
      $("#searchFilter").modal("hide");
      history.go(-1);
    },
    createJsonLDObject: function () {
      var fullName =
        this.product.user_info.first_name +
        " " +
        this.product.user_info.last_name;

      var productOwnerProfilePageUrl =
        "https://www.buskool.com/profile/" + this.product.user_info.user_name;

      let jsonDL = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: this.product.main.product_name,
        image: this.product.photos.map(function (photo) {
          return "https://www.buskool.com/storage/" + photo.file_path;
        }),
        description: this.product.main.description,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.4",
          reviewCount: "3",
        },
        offers: {
          "@type": "Offer",
          url: "https://www.buskool.com" + this.getProductUrl(),
          priceCurrency: "IRR",
          price: this.product.main.min_sale_price * 10,
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Person",
            name: fullName,
            url: productOwnerProfilePageUrl,
          },
        },
      };

      return jsonDL;
    },
    openStickyGuide: function () {
      eventBus.$emit("modal", "guide");
    },
    swithToListOnMobile() {
      window.addEventListener("resize", (event) => {
        this.cehckPageWidth();
      });
    },
    cehckPageWidth() {
      let pageWidth = window.outerWidth;
      if (pageWidth <= 991) {
        this.listIsGrid = false;
      } else {
        this.listIsGrid = true;
      }
    },
  },
  watch: {
    "$route.params.categoryName": function (name) {
      this.init();
    },

    headerSearchText: function (value) {
      var self = this;

      clearTimeout(this.searchTextTimeout);

      this.searchTextTimeout = setTimeout(function () {
        self.registerComponentStatistics(
          "product-list",
          "search-text",
          self.searchText
        );

        eventBus.$emit("textSearch", value);

        self.$router.replace({
          name: "productList",
          query: {
            s: self.headerSearchText.replace(/ /g, "+"),
          },
        });
      }, 1500);
    },
    "$parent.productByResponseRate": function () {
      this.products = {};

      this.infiniteScrollHandler();

      if (this.searchText) {
        this.applyFilter();
      } else {
        this.init();
      }
    },

    bottom(bottom) {
      if (bottom) {
        this.feed();
      }
    },
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/product-list" });

    document.addEventListener("click", this.documentClick);
  },
  mounted() {
    this.scrollToTop();

    this.infiniteScrollHandler();

    this.init();

    this.stopLoader();
  },
  metaInfo() {
    let categoryName = this.getCategoryName();

    let canonicalLink =
      window.location.host +
      "/product-list/category/" +
      categoryName.split(" ").join("-");

    return {
      title: "خرید و فروش عمده " + categoryName + " - " + "قیمت " + categoryName + " عمده صادراتی - خرید و فروش مستقیم",
      titleTemplate: "%s | باسکول",
      meta: [
        {
          name: "description",
          content:
            "خرید و فروش عمده " +
            categoryName +
            " به صورت مستقیم و بدون واسطه از بهترین کشاورزان و تامین کنندگان ☀️☀️ آخرین قیمت " +
            categoryName +
            " عمده ☀️☀️ بازار باسکول ",
        },
        {
          name: "author",
          content: "باسکول",
        },
        {
          property: "og:description",
          content:
            "خرید و فروش عمده " +
            categoryName +
            " به صورت مستقیم و بدون واسطه از بهترین کشاورزان و تامین کنندگان ☀️☀️ آخرین قیمت " +
            categoryName +
            " عمده ☀️☀️ بازار باسکول ",
        },
        {
          property: "og:site_name",
          content: "باسکول بازارآنلاین خرید و فروش محصولات کشاورزی ایران",
        },
        {
          property: "og:title",
          content: "باسکول | خرید و فروش عمده و قیمت " + categoryName,
        },
      ],
      link: [{ rel: "canonical", href: canonicalLink }],
    };
  },
};
</script>
