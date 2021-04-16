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
  z-index: 2;
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

.banner-wrapper .circle-item-wrapper img {
  position: relative;
  top: -20px;
}

.banner-wrapper .circle-item-wrapper::after {
  width: 315px;
  height: 195px;
  content: " ";
  background: #8ca6ec;
  position: absolute;
  top: -163px;
  right: -105px;
  border-radius: 170px;
  opacity: 0.3;
  z-index: 1;
}

.banner-wrapper .circle-item-wrapper::before {
  width: 295px;
  height: 185px;
  content: " ";
  background: rgba(0, 156, 131, 0.5);
  position: absolute;
  bottom: -110px;
  left: -180px;
  border-radius: 170px;
  z-index: 1;
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
    z-index: 3;
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
    padding: 3px;
  }
  .banner-wrapper .main-wrapper {
    padding: 20px 10px;
  }

  .banner-wrapper .circle-item-wrapper {
    left: -20px;
    width: 190px;
    height: 190px;
    top: calc(50% - 48px);
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
                      <img src="../../../../img/request.svg" alt="" />
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
                          <img src="../../../../img/request.svg" alt="" />
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
                class="default-items col-xs-6 col-sm-4 col-md-3 default-grid"
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

      <script
        v-if="jsonLDObject"
        v-html="jsonLDObject"
        type="application/ld+json"
      ></script>
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
      productCountInPage: 16,
      productCountInEachLoad: 16,
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
        if (response.data.user_info.id) {
          self.currentUser = response.data;
        }
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
          self.productCountInPage = 16;

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
      this.listIsGrid = true;
      // let pageWidth = window.outerWidth;
      // if (pageWidth <= 555) {
      //   this.listIsGrid = true;
      // } else if (pageWidth <= 991) {
      //   this.listIsGrid = false;
      // } else {
      //   this.listIsGrid = true;
      // }
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
      title:
        "خرید و فروش عمده " +
        categoryName +
        " - " +
        "قیمت " +
        categoryName +
        " عمده صادراتی - خرید و فروش مستقیم",
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
