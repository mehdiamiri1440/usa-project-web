<style scoped>
#main-content {
  padding-top: 122px;
}
#main {
  max-width: 1280px;
}

#main .main-product-wrapper {
  position: relative;
}

.fade-opacity {
  opacity: 0.1;
}
.spinner-border {
  width: 5rem;
  height: 5rem;
  color: #999;
  border-width: 3px;
  top: 170px;
  left: calc(50% - 25px);
}

.more-product-wrapper {
  float: right;
  width: 100%;
  position: relative;
}

.more-product-wrapper .spinner-border {
  top: 30px;
  width: 4rem;
  height: 4rem;
}

.more-product-wrapper p {
  margin-top: 40px;
  color: #999;
}

.filter-loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
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

#searchFilter .main_popup_content > div {
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
  bottom: 70px;
  z-index: 3;
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
  padding-top: 12px;
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
  background: #fff;
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
  border-radius: 8px;
  margin-right: 15px;
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
  top: 83px;
  left: 0;
  right: 0;
  z-index: 2;
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

.static-sort-item {
  color: #999;
}

.rate-filter-desktop-wrapper {
  background: #fff;
  direction: rtl;
  margin: 15px auto 0;
  padding: 5px 15px 4px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  margin-bottom: 5px;
}

.rate-filter-mobile-wrapper {
  direction: rtl;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  border-bottom: 1px solid #ebebeb;
  padding: 10px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.rate-filter-mobile-wrapper.desktop-filter-items {
  border-bottom: none;
  padding: 5px 0 10px;
}

.rate-filter-mobile-wrapper::-webkit-scrollbar {
  display: none;
}

.rate-filter-mobile-wrapper > button {
  flex-shrink: 0;
  border: 1px solid #ededed;
  background: #fff;
  border-radius: 12px;
  font-size: 15px;
  color: #707070;
  padding: 3px 15px;
  display: inline-flex;
  height: 32px;
  margin-left: 10px;
}

.rate-filter-mobile-wrapper > button.mobile-category-item.filter-item {
  border-color: #fa8888;
  color: #e41c38;
  background: #fcf6f6;
}

.rate-filter-mobile-wrapper > button i {
  position: relative;
  top: 2px;
  margin-left: 5px;
}
.rate-filter-mobile-wrapper > button i.fa-times {
  position: relative;
  top: 2px;
  margin-left: 0;
  margin-right: 10px;
  font-size: 11px;
  top: 6px;
}

.rate-filter-mobile-wrapper > button:first-of-type {
  background: #fafafa;
}

.rate-filter-mobile-wrapper > button:last-of-type {
  margin-left: 0;
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
  background: none;
  border: 1px solid #556080;
  border-radius: 12px;
  padding: 4px 9px 0px;
  -webkit-transition: 300ms;
  transition: 300ms;
  color: #556080;
  font-size: 16px;
  min-width: 36px;
}
.show-list-items button .fa-grip-horizontal {
  font-size: 16px;
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
  padding: 0;
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
  padding: 0 7px;
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
  border-radius: 12px;
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
  width: 180px;
  height: 180px;
  background: #fff;
  top: calc(50% - 70px);
  border-radius: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.16);
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

#article-list.grid-items-wrapper {
  margin-right: -3px;
  margin-left: -3px;
}

div.items-wrapper {
  padding: 0 7px;
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
  .modal-content {
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
  #article-list {
    padding-bottom: 70px;
  }
  #article-list.grid-items-wrapper {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .rate-filter-desktop-wrapper {
    background: #fbfbfb;
    border: none;
    border-radius: 0;
  }
  .main-content,
  #main {
    padding: 0;
  }

  .main-content {
    padding-top: 18px;
  }

  .sub-header {
    position: fixed;
    z-index: 1011;
    width: 100%;
    background: #fff;
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
  .banner-wrapper p {
    font-size: 16px;
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
        class="modal fade"
        id="searchFilter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="searchFilter"
      >
        <div class="modal-dialog">
          <div class="modal-header">
            <a href="#" class="close-modal" data-dismiss="modal">
              <i class="fa fa-times"></i>
            </a>
            <div class="modal-title">
              <!-- <span class="hidden-xs">دسته ها و فیلتر</span> -->
              <span>فیلتر مکان</span>
            </div>
          </div>

          <div class="main_popup_content">
            <div class="col-xs-12">
              <div class="filter-mobile-sidebar">
                <ProductAsideCategories
                  :productsInfo="products"
                  :categoryId="categoryId"
                  :subCategoryId="subCategoryId"
                  :categories="categoryList"
                  :resetLocation="resetLocation"
                  :provinceList="$parent.provinceList"
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
      class="
        sub-header-fix sub-header
        hidden-lg hidden-md hidden-sm
        container-fluid
      "
    >
      <div class="rate-filter-mobile-wrapper">
        <button
          class="mobile-category-item"
          @click.prevent="openFilterModal(false)"
        >
          <i class="fa fa-list"></i>
          دسته ها
        </button>
        <button
          v-if="sortOption == 'BM'"
          class="mobile-category-item"
          @click.prevent="openSortModal()"
        >
          <i class="fas fa-sort-amount-down-alt"></i>
          مرتب سازی
        </button>
        <button
          v-else
          class="mobile-category-item filter-item"
          @click.prevent="sedOptionAsDefault()"
        >
          <i class="fa fa-sort-amount-down-alt"></i>
          {{ getSortOptionName() }}
          <i class="fa fa-times"></i>
        </button>
        <button
          v-if="city || province"
          class="mobile-category-item filter-item"
          @click.prevent="resetLocation = !resetLocation"
        >
          <i class="fa fa-map-marker-alt"></i>
          <span v-if="city" v-text="city.city_name"> </span>
          <span v-else-if="province" v-text="province.province_name"> </span>
          <i class="fa fa-times"></i>
        </button>
        <button
          v-if="$route.query.s && searchText"
          tag="button"
          @click.prevent="searchText = ''"
          class="mobile-category-item filter-item"
        >
          {{ searchText }}
          <i class="fa fa-times"></i>
        </button>
        <button
          v-for="(category, index) in categoryList"
          :key="index + '-sub-header-category'"
          class="mobile-category-item"
          @click.prevent="openFilterModal(category)"
        >
          {{ category.category_name }}
        </button>
      </div>
    </div>

    <main id="main" class="container-fluid">
      <div class="col-xs-12 main-product-wrapper col-lg-9">
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
                    :class="{ 'light-green-text': sortOption == 'RR' }"
                  >
                    احتمال پاسخگویی
                  </button>
                </li>
                <li>
                  <button
                    @click="setSortOption('RT')"
                    :class="{ 'light-green-text': sortOption == 'RT' }"
                  >
                    سرعت پاسخگویی
                  </button>
                </li>
                <li>
                  <button
                    @click="setSortOption('RD')"
                    :class="{ 'light-green-text': sortOption == 'RD' }"
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
                <i class="fa fa-map-marker-alt"></i>
                <!-- دسته ها و فیلتر -->
                فیلتر مکان
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
            <div class="rate-filter-mobile-wrapper desktop-filter-items">
              <button
                v-if="sortOption != 'BM'"
                class="mobile-category-item filter-item"
                @click.prevent="sedOptionAsDefault()"
              >
                <i class="fa fa-sort-amount-down-alt"></i>
                {{ getSortOptionName() }}
                <i class="fa fa-times"></i>
              </button>
              <button
                v-if="city || province"
                class="mobile-category-item filter-item"
                @click.prevent="resetLocation = !resetLocation"
              >
                <i class="fa fa-map-marker-alt"></i>
                <span v-if="city" v-text="city.city_name"> </span>
                <span v-else-if="province" v-text="province.province_name">
                </span>
                <i class="fa fa-times"></i>
              </button>
              <button
                v-if="$route.query.s && searchText"
                tag="button"
                @click.prevent="searchText = ''"
                class="mobile-category-item filter-item"
              >
                {{ searchText }}
                <i class="fa fa-times"></i>
              </button>
            </div>
          </section>
          <div class="filter-loader-wrapper" v-if="submiting">
            <div class="spinner-border">
              <span class="sr-only"></span>
            </div>
          </div>
          <div :class="{ 'fade-opacity': submiting }">
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
                          class="
                            btn
                            green-button
                            banner-button
                            hover-effect
                            hidden-sm hidden-md hidden-lg
                          "
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
                      :isMyProfile="
                        currentUser.user_info &&
                        currentUser.user_info.id == product.main.myuser_id
                          ? true
                          : false
                      "
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
                              class="
                                btn
                                green-button
                                banner-button
                                hover-effect
                              "
                            >
                              ثبت درخواست خرید
                              <i class="fa fa-arrow-left"> </i>
                            </router-link>
                            <router-link
                              v-else
                              :to="{ name: 'registerRequestBuyer' }"
                              class="
                                btn
                                green-button
                                banner-button
                                hover-effect
                              "
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
                      class="
                        col-xs-6 col-sm-4
                        items-wrapper
                        pull-right
                        col-md-3
                      "
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
                <div class="more-product-wrapper" v-if="loadMoreActive">
                  <div class="spinner-border">
                    <span class="sr-only"></span>
                  </div>
                  <p class="text-center text-rtl">درحال دریافت اطلاعات ...</p>
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
                    class="
                      col-xs-12
                      padding-15
                      margin-15-0
                      default-item-wrapper default-main-wrapper
                    "
                  >
                    <div class="default-user-contents col-xs-12 padding-0">
                      <div
                        class="
                          placeholder-content
                          default-article-user-image
                          pull-right
                        "
                      ></div>

                      <span
                        class="
                          padding-top-5
                          placeholder-content
                          margin-15
                          pull-right
                          content-min-width
                        "
                      ></span>
                    </div>

                    <div
                      class="
                        default-article-contents
                        padding-0
                        margin-top-10
                        col-xs-12
                      "
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
                          class="
                            content-min-width
                            placeholder-content
                            mobile-hidden
                          "
                        ></span>

                        <span
                          class="content-half-width placeholder-content"
                        ></span>
                      </div>
                      <span
                        class="
                          margin-top-10
                          placeholder-content
                          default-button-min-with
                          pull-left
                          hidden-afetr-mobile-hidden
                        "
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
                    class="
                      col-xs-12
                      margin-15-0
                      default-item-wrapper default-main-wrapper
                    "
                  >
                    <div class="default-wrapper-main-image pull-right">
                      <span
                        class="default-main-image placeholder-content"
                      ></span>
                    </div>

                    <div
                      class="
                        default-article-contents
                        padding-0
                        margin-top-10
                        col-xs-12
                      "
                    >
                      <div class="default-main-article-content">
                        <span
                          class="content-half-width placeholder-content"
                        ></span>

                        <span
                          class="content-default-width placeholder-content"
                        ></span>
                        <span
                          class="
                            margin-top-10
                            placeholder-content
                            default-button-min-with
                            pull-left
                            hidden-afetr-mobile-hidden
                          "
                        ></span>
                        <span
                          class="
                            placeholder-content
                            default-button-full-with
                            pull-left
                            mobile-hidden
                          "
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
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
              :categories="categoryList"
              :resetLocation="resetLocation"
              :provinceList="$parent.provinceList"
            />
          </div>
        </div>
      </aside>
    </main>
  </div>
</template>
<script>
import ProductArticle from "./product_components/product_article";
import ProductGridArticle from "./product_components/Product_grid_article";
import ProductAsideCategories from "./product_components/sidebar/product_aside_categories";
import searchNotFound from "./main_components/search-not-found";
import { eventBus } from "../../../router/router";
import StickySidebar from "../../../stickySidebar.js";
var visible = false;
export default {
  components: {
    ProductArticle,
    ProductGridArticle,
    ProductAsideCategories,
    searchNotFound,
  },
  props: ["assets", "str", "user_id", "categoryList"],
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
      province: "",
      city: "",
      resetLocation: false,
      categoryId: "",
      subCategoryId: "",
      searchValue: "",
      scrolled: false,
      productCountInPage: 16,
      productCountInEachLoad: 16,
      fromProductCount: 0,
      continueToLoadProducts: true,
      searchActive: false,
      errors: "",
      popUpMsg: "",
      submiting: false,
      loading: false,
      loadMoreActive: false,
      searchTextTimeout: null,
      sortOption: "BM",
      verifiedUserContent: this.$parent.verifiedUserContent,
      listIsGrid: true,
      isMyProfile: false,
      modalSubCategory: false,
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
      if (!this.$parent.provinceList) {
        this.getLocations();
      }
      $(".modal").on("show.bs.modal", () => {
        this.handleBackKeys();
      });
      this.checkSortOption();
      this.checkLocationFilter();
      //              return new Promise((resolve,reject)=>{
      var self = this;
      $(".show-list-items button").tooltip();
      this.swithToListOnMobile();
      this.cehckPageWidth();

      this.scrollToTop();
      if (this.$route.query.s) {
        var searchValue = this.$route.query.s.split("+").join(" ");
      } else {
        var searchValue = "";
      }

      var searchValueText = searchValue;
      self.checkCurrentUser();

      if (searchValueText) {
        self.registerComponentStatistics(
          "homePage",
          "search-text",
          searchValueText
        );
        self.searchText = searchValueText;
        self.submiting = false;
      } else {
        self.loading = true;

        self.fromProductCount = 0;
        self.productCountInPage = 16;

        let getProductsData = {
          from_record_number: self.fromProductCount,
          response_rate: self.$parent.productByResponseRate,
          to_record_number: self.productCountInPage,
          sort_by: self.sortOption,
        };
        if (self.province.id) {
          getProductsData.province_id = self.province.id;
        }
        if (self.city.id) {
          getProductsData.city_id = self.city.id;
        }

        axios
          .post("/user/get_product_list", getProductsData)
          .then(function (response) {
            self.products = response.data.products;
            //                                localStorage.removeItem('productCountInPage')
            //                                resolve(self.loading = false);
            self.submiting = false;
            setTimeout(function () {
              self.sidebarScroll();
            }, 500);
          });
      }
      //                    }).catch(error=>reject(error));
    },
    checkCurrentUser() {
      if (this.$parent.currentUser.user_info) {
        this.currentUser = this.$parent.currentUser;
      }
    },
    feed() {
      if (this.products.isEmptyObject == true) {
        return false;
      }

      var self = this;
      if (
        this.searchText === "" &&
        this.province.id === "" &&
        this.categoryId === "" &&
        this.continueToLoadProducts
      ) {
        this.loadMoreActive = true;
        this.fromProductCount = this.productCountInPage;
        this.productCountInPage += this.productCountInEachLoad;
        axios
          .post("/user/get_product_list", {
            from_record_number: self.fromProductCount,
            response_rate: self.$parent.productByResponseRate,
            to_record_number: self.productCountInPage,
            sort_by: self.sortOption,
          })
          .then(function (response) {
            if (!response.data.products.length) {
              self.continueToLoadProducts = false;
            }
            if (self.products && self.products.length) {
              self.products = self.products.concat([...response.data.products]);
            }
            self.submiting = false;
            if (self.products.length + 1 < self.productCountInPage) {
              self.continueToLoadProducts = false;
            }

            self.loadMoreActive = false;
            setTimeout(function () {
              self.sidebarScroll();
            }, 500);
          });
      } else {
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
        if (this.province.id) {
          searchObject.province_id = this.province.id;
        }
        if (this.city.id) {
          searchObject.city_id = this.city.id;
        }
        if (this.searchText) {
          this.$router.replace({
            name: "productList",
            query: {
              s: this.searchText.replace(/ /g, "+"),
            },
          });
          searchObject.search_text = this.searchText;
        }

        if (jQuery.isEmptyObject(searchObject)) {
          if (this.searchText == "") {
            this.$router.push({
              name: "productList",
            });
          }
        }

        searchObject.from_record_number = self.productCountInPage;
        self.productCountInPage += self.productCountInEachLoad;
        searchObject.to_record_number = self.productCountInPage;
        searchObject.sort_by = self.sortOption;

        axios
          .post("/user/get_product_list", searchObject)
          .then(function (response) {
            if (!response.data.products.length) {
              self.continueToLoadProducts = false;
            }
            if (Array.isArray(self.products)) {
              self.products = self.products.concat(response.data.products);
            }
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
          this.$router.push({ name: "registerRequestBuyer" });
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

          this.$router.push({ name: "registerProductSeller" });
        } else if (this.currentUser.user_info.is_buyer) {
          this.registerComponentStatistics(
            "product-list",
            "register-request",
            "seller clicks on plus button"
          );

          this.$router.push({ name: "registerProductSeller" });
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
      this.submiting = true;

      $(".box-sidebar option").prop("selected", function () {
        return this.defaultSelected;
      });

      this.searchText = "";
      this.province = "";
      this.categoryId = "";
      this.subCategoryId = "";
      this.city = "";

      this.applyFilter();
    },
    applyFilter: function () {
      var self = this;

      this.submiting = true;

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
      if (this.province.id) {
        searchObject.province_id = this.province.id;
      }
      if (this.city.id) {
        searchObject.city_id = this.city.id;
      }
      if (this.searchText) {
        this.$router.replace({
          name: "productList",
          query: {
            s: this.searchText.replace(/ /g, "+"),
          },
        });
        searchObject.search_text = this.searchText;
      }

      if (jQuery.isEmptyObject(searchObject)) {
        if (this.searchText == "") {
          this.$router.push({
            name: "productList",
          });
        }
      }

      searchObject.from_record_number = self.fromProductCount;
      searchObject.to_record_number = self.productCountInPage;
      searchObject.sort_by = self.sortOption;

      axios
        .post("/user/get_product_list", searchObject)
        .then(function (response) {
          self.products = response.data.products;
          self.submiting = false;
          self.scrollToTop();
        })
        .catch(function (err) {
          alert("خطایی رخ داده است. دوباره تلاش کنید.");
        });
    },
    setSortOption: function (sortOption) {
      localStorage.setItem("sortOption", sortOption);
      $("#filter-modal").modal("hide");
      if (this.isDeviceMobile()) {
        history.go(-1);
      }

      if (this.sortOption != sortOption) {
        this.registerComponentStatistics(
          "product-list",
          "apply-sort",
          sortOption
        );

        this.sortOption = sortOption;
        this.applyFilter();
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
    infiniteScrollHandler() {
      $(window).scroll(() => {
        if (this.$route.name == "productList") {
          if (
            $(window).scrollTop() >=
              ($(document).height() - $(window).height() - 100) / 2 &&
            !this.loadMoreActive &&
            this.continueToLoadProducts
          ) {
            this.feed();
          }
        }
      });
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
    getSortOptionName() {
      switch (this.sortOption) {
        case "BM":
          return "پیش فرض";
          break;
        case "RR":
          return "احتمال پاسخگویی";
          break;
        case "RT":
          return "سرعت پاسخگویی";
          break;
        case "RD":
          return "جدیدترین ها";
          break;

        default:
          return "پیش فرض";

          break;
      }
    },
    closeSortModal: function () {
      $("#filter-modal").modal("hide");
      history.go(-1);
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
    closeFilterModal: function () {
      $(".modal").modal("hide");
      history.go(-1);
    },
    sidebarScroll() {
      let sidebarHeight = $("#sidebar").outerHeight();
      $("#main .main-content").css("min-height", sidebarHeight);
      $("#sidebar").StickySidebar({
        // Settings
        additionalMarginTop: 120,
      });
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
    checkSortOption() {
      const sortOption = localStorage.getItem("sortOption");
      if (sortOption) {
        this.sortOption = sortOption;
      }
    },
    sedOptionAsDefault() {
      this.sortOption = "BM";
      localStorage.removeItem("sortOption");
      this.applyFilter();
    },
    checkLocationFilter() {
      const province = localStorage.getItem("selectedProvince");
      const city = localStorage.getItem("selectedCity");
      this.province = province ? JSON.parse(province) : "";
      this.city = city ? JSON.parse(city) : "";
    },
    handleBackKeys: function () {
      let self = this;
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", function (e) {
        $(".modal").modal("hide");
      });
    },
    getLocations() {
      axios
        .post("/location/get_location_info", { cascade_list: true })
        .then(
          (response) => (this.$parent.provinceList = response.data.provinces)
        );
    },
  },
  watch: {
    searchText: function (value) {
      var self = this;

      eventBus.$emit("textSearch", value);

      clearTimeout(this.searchTextTimeout);

      this.searchTextTimeout = setTimeout(function () {
        self.registerComponentStatistics(
          "product-list",
          "search-text",
          self.searchText
        );

        self.applyFilter();
      }, 1500);
    },
    $route: function () {
      if (this.$route.query.s) {
        this.searchText = this.$route.query.s.split("+").join(" ");
      }
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
    "$parent.currentUser"(user) {
      this.checkCurrentUser();
    },
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/product-list" });
    eventBus.$on("textSearch", (event) => {
      this.searchText = event;
    });

    // document.addEventListener('click', this.documentClick);
  },
  mounted() {
    let self = this;

    this.scrollToTop();

    this.infiniteScrollHandler();

    this.init(); //.then(loading=>{
    //              if(!loading){
    //                   let scrollPosition=(localStorage.getItem('scroll'))||{x:0,y:0};
    //                   window.scrollTo(0,scrollPosition);
    //                   localStorage.removeItem('scroll')
    //                   }
    //            });
    this.stopLoader();
  },
  metaInfo() {
    let canonicalLink = window.location.host + "/product-list";

    let title = "";
    let description = "";

    if (this.searchText) {
      title = "لیست محصولات و قیمت عمده " + this.searchText;
      description = "خرید و قیمت عمده " + title;
    } else {
      title = "لیست محصولات و قیمت عمده محصولات غذایی و کشاورزی";
      description =
        "خرید عمده و قیمت میوه | خرید عمده و قیمت غلات | خرید عمده و قیمت صیفی جات | خرید و قیمت عمده خشکبار";
    }

    return {
      title: title,
      titleTemplate: "%s | باسکول",
      meta: [
        {
          name: "description",
          content: description,
        },
        {
          name: "author",
          content: "باسکول",
        },
        {
          property: "og:description",
          content:
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات غذایی و کشاورزی ایران | صادرات محصولات غذایی و کشاورزی",
        },
        {
          property: "og:site_name",
          content:
            "باسکول بازارآنلاین خرید و فروش محصولات غذایی و کشاورزی ایران",
        },
        {
          property: "og:title",
          content: "باسکول | لیست محصولات و قیمت " + title,
        },
      ],
      link: [{ rel: "canonical", href: canonicalLink }],
    };
  },
};
</script>
