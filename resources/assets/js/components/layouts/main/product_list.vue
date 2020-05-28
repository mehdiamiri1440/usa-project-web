<style scoped>
#main-content {
  padding-top: 122px;
}

.shadow-content {
  background: #fff;
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

#header {
  background: url("../../../../../../public/assets/img/topheader.jpg");
  background-position: 50% 30%;
  color: #fff;
  background-size: cover;
  overflow: hidden;
  padding-top: 64px;
  padding-bottom: 0;
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
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
  background: #000546;
  color: #fff;
  width: 140px;
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

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);

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

.rate-filter-desktop-wrapper,
.rate-filter-mobile-wrapper {
  background: #fff;
  direction: rtl;
  margin: 15px auto 0;
  padding: 7px 15px;
  border-radius: 5px;
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
}

.rate-filter-desktop-wrapper > ul {
  float: right;
  padding: 7px 0;
}

.rate-filter-desktop-wrapper > ul li {
  padding: 0;
}

.rate-filter-desktop-wrapper ul button {
  background: none;

  border: none;
}
.bg-gray {
  background: #777;
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

/* 
.rate-filter-desktop-wrapper .checkbox,
.rate-filter-mobile-wrapper .chekbox {
  margin: 0;
  float: right;
}

.rate-filter-mobile-wrapper .checkbox-slider--b-flat {
  margin: 0 auto 5px;
}

.rate-filter-mobile-wrapper
  .checkbox-slider--b-flat
  input
  + span::before,
.rate-filter-mobile-wrapper
  .checkbox-slider--b-flat
  input
  + span::after {
  top: 0;
}

.rate-filter-mobile-wrapper {
  padding: 7px 15px;
  margin: 0;
  overflow: hidden;
  float: right;
  width: 100%;
  border-radius: 0;
} */

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

/* 
end filter modal styles
---------------------------------------------------------------------------------
*/

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
}

@media screen and (max-width: 767px) {
  .main-content,
  #main {
    padding: 0;
  }

  .main-content {
    padding-top: 52px;
  }

  .sub-header {
    position: fixed;
    z-index: 1;
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

  #article-list > div {
    padding: 0;
  }

  .default-items {
    padding: 0;
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
          v-model="searchText"
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
                دسته ها و فیلتر
                <i class="fa fa-filter"></i>
              </button>
            </div>
          </section>

          <section class="main-content col-xs-12" v-if="products.length > 0">
            <div id="article-list" class="row">
              <div
                class="col-xs-12"
                :key="productIndex"
                v-for="(product, productIndex) in products"
              >
                <ProductArticle
                  :productIndex="productIndex"
                  v-if="products.length >= productIndex"
                  :key="product.main.id"
                  :product="product"
                  :loading_img="loading_img"
                  :defultimg="defultimg"
                  :str="str"
                  :loading="loading"
                  :currentUser="currentUser"
                />
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
                      <img :src="loading_img" />
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
            <div class="row">
              <div
                v-for="(defaultItem, index) in 8"
                :key="index"
                class="default-items col-xs-12"
              >
                <div
                  class="col-xs-12 padding-15 margin-15-0 default-item-wrapper shadow-content"
                >
                  <div class="default-user-contents col-xs-12 padding-0">
                    <div
                      class="placeholder-content default-article-user-image pull-right"
                    ></div>

                    <span
                      class="padding-top-5 placeholder-content margin-15 pull-right content-min-width"
                    ></span>

                    <span
                      class="margin-0 placeholder-content default-button-min-with pull-left mobile-hidden"
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
          </section>
        </div>
      </div>

      <aside
        id="sidebar"
        class="product-sidebar sidebar hidden-xs hidden-sm hidden-md col-lg-3"
      >
        <div class="row">
          <div class="sidebar__inner col-xs-12" style="position: relative;">
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
  </div>
</template>
<script>
import ProductArticle from "./product_components/product_article";
import ProductAsideCategories from "./product_components/sidebar/product_aside_categories";
import searchNotFound from "./main_components/search-not-found";
import { eventBus } from "../../../router/router";
import StickySidebar from "sticky-sidebar";

var visible = false;
export default {
  components: {
    ProductArticle,
    ProductAsideCategories,
    searchNotFound,
  },
  props: ["assets", "str", "defultimg", "loading_img"],
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
      searchValue: "",
      scrolled: false,
      productCountInPage: 10,
      productCountInEachLoad: 10,
      fromProductCount: 0,
      continueToLoadProducts: true,
      searchActive: false,
      errors: "",
      popUpMsg: "",
      submiting: false,
      loading: false,
      bottom: false,
      loadMoreActive: false,
      searchTextTimeout: null,
      sortOption: "BM",
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
      //              return new Promise((resolve,reject)=>{
      var self = this;

      this.scrollToTop();
      if (this.$route.query.s) {
        var searchValue = this.$route.query.s.split("+").join(" ");
      } else {
        var searchValue = "";
      }

      var searchValueText = searchValue;

      axios.post("/user/profile_info").then(function (response) {
        self.currentUser = response.data;

        if (searchValueText) {
          self.registerComponentStatistics(
            "homePage",
            "search-text",
            searchValueText
          );
          self.searchText = searchValueText;
          eventBus.$emit("submiting", false);
        } else {
          self.loading = true;

          self.fromProductCount = 0;
          self.productCountInPage = 10;

          axios
            .post("/user/get_product_list", {
              from_record_number: self.fromProductCount,
              response_rate: self.$parent.productByResponseRate,
              to_record_number: self.productCountInPage,
              sort_by: self.sortOption,
            })
            .then(function (response) {
              self.products = response.data.products;
              //                                localStorage.removeItem('productCountInPage')
              //                                resolve(self.loading = false);
              eventBus.$emit("submiting", false);
              setTimeout(function () {
                self.sidebarScroll();
              }, 500);
            });
        }
        //                    }).catch(error=>reject(error));
      });
    },
    feed() {
      if (this.products.isEmptyObject == true) {
        return false;
      }

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
            from_record_number: self.fromProductCount,
            response_rate: self.$parent.productByResponseRate,
            to_record_number: self.productCountInPage,
            sort_by: self.sortOption,
          })
          .then(function (response) {
            if (self.products && self.products.length) {
              self.products = self.products.concat([...response.data.products]);
            }
            //                      localStorage.productCountInPage=JSON.stringify(self.productCountInPage)
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
      eventBus.$emit("submiting", true);

      $(".box-sidebar option").prop("selected", function () {
        return this.defaultSelected;
      });

      this.searchText = "";
      this.provinceId = "";
      this.categoryId = "";
      this.subCategoryId = "";
      this.cityId = "";

      this.applyFilter();
    },
    applyFilter: function () {
      var self = this;

      eventBus.$emit("submiting", true);

      self.fromProductCount = 0;
      self.productCountInPage = 10;

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
          eventBus.$emit("submiting", false);
          self.scrollToTop();
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
    infiniteScrollHandler: function () {
      let lastOffset = 0;

      window.onscroll = () => {
        if (
          window.location.pathname.includes("product-list") &&
          !window.location.pathname.includes("category")
        ) {
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
    sidebarScroll() {
      var $sticky = $(".sticky");
      var stickyrStopper = $("#wrap-footer");
      var lastScrollTop = 0;

      var sidebarStopper = $("#wrap-footer").height();

      var sidebar = new StickySidebar("#sidebar", {
        containerSelector: "#article-list",
        innerWrapperSelector: ".sidebar__inner",
        topSpacing: 122,
        resizeSensor: true,
      });

      var documentHeight = $(document).height();
      var wHeight = $(window).height();
      var generalSidebarHeight = $sticky.innerHeight();
      var stickyTop = 162;
      var stickOffset = 0;
      var stickPositionToContent = 115;
      var stickyStopperPosition = stickyrStopper.offset().top;
      var stopPoint =
        documentHeight - (wHeight + stickyrStopper.innerHeight() + 130);
      var differences =
        stickyStopperPosition -
        stickPositionToContent -
        (generalSidebarHeight - stickOffset);
      var diff = differences + stickOffset;
      var sidebarHeightToTop = generalSidebarHeight + stickyTop;

      if (generalSidebarHeight > wHeight) {
        if (wHeight < sidebarHeightToTop) {
          $(window).scroll(function () {
            // scroll event
            var windowTop = $(window).scrollTop(); // returns number

            if (windowTop > lastScrollTop) {
              if (dynamicScroll + generalSidebarHeight < windowTop + wHeight) {
                if (stopPoint + 13 < windowTop) {
                  $sticky.css({
                    position: "absolute",
                    top: diff,
                    right: "0",
                  });
                } else if (windowTop + wHeight > sidebarHeightToTop) {
                  $sticky.css({
                    position: "fixed",
                    bottom: stickOffset,
                    top: "initial",
                    right: "0",
                  });
                } else {
                  $sticky.css({
                    position: "absolute",
                    top: "initial",
                    right: "0",
                    bottom: "initial",
                  });
                }
              } else {
                if (stopPoint < windowTop) {
                  $sticky.css({
                    position: "absolute",
                    top: diff,
                    right: "0",
                  });
                } else {
                  $sticky.css({
                    position: "absolute",
                    top: dynamicScroll + stickOffset,
                    right: "0",
                    bottom: "initial",
                  });
                }
              }

              dynamicScroll = $sticky.offset().top;
            } else {
              if (dynamicScroll - stickyTop < windowTop) {
                $sticky.css({
                  position: "absolute",
                  top: dynamicScroll + "px",
                  right: "0",
                  bottom: "initial",
                });
              } else {
                $sticky.css({
                  position: "fixed",
                  bottom: "initial",
                  top: stickyTop,
                  right: "0",
                });
              }
            }
            dynamicScroll = $sticky.offset().top;

            lastScrollTop = windowTop;
          });
        } else {
          $(window).scroll(function () {
            // scroll event
            var windowTop = $(window).scrollTop(); // returns number
            if (windowTop < lastScrollTop) {
              if (stopPoint < windowTop) {
                $sticky.css({
                  position: "absolute",
                  top: diff,
                  right: "0",
                });
              } else {
                $sticky.css({
                  position: "fixed",
                  bottom: "initial",
                  top: stickyTop,
                  right: "0",
                });
              }
            }
            lastScrollTop = windowTop;
          });
        } //end all if
      } else {
        $(window).scroll(function () {
          // scroll event
          var windowTop = $(window).scrollTop(); // returns number'
          var getHeightFooter =
            documentHeight -
            (stickyrStopper.innerHeight() +
              stickPositionToContent +
              stickyTop +
              generalSidebarHeight);
          if (getHeightFooter < windowTop) {
            $sticky.css({
              position: "absolute",
              top: diff,
              right: "0",
            });
          } else {
            $sticky.css({
              position: "fixed",
              bottom: "initial",
              top: stickyTop,
              right: "0",
            });
          }
        });
      }
    },
    openStickyGuide: function () {
      eventBus.$emit("modal", "guide");
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
    bottom(bottom) {
      if (bottom) {
        //this.feed()
      }
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
      title = "لیست محصولات و قیمت عمده محصولات کشاورزی";
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
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی",
        },
        {
          property: "og:site_name",
          content: "باسکول بازارآنلاین خرید و فروش محصولات کشاورزی ایران",
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
