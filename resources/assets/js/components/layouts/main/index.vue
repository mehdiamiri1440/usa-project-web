<style scoped>
/*general styles*/

h1,
h2,
h3,
h4,
p,
div,
span {
  line-height: 1.618;
}

p {
  font-size: 14px;
}

h1 {
  font-size: 26px;

  font-weight: 500;
}

h2 {
  font-size: 17px;

  font-weight: normal;
}

i {
  position: relative;
  top: 1px;
  padding: 0 2px;
}

#main-content {
  margin-bottom: -60px;
}

.hidden {
  display: none !important;
}

#intro::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(25, 102, 142, 0.4);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 0;
}

#intro > div {
  position: relative;
  z-index: 1;
}

.box-content {
  overflow: hidden;
  background: #fff;
  padding: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
}

.title-box {
  text-align: center;
}

.title-box h3 {
  font-size: 16px;
  font-weight: 500;
  color: #4b4b4b;
  margin-bottom: 12px;
}

.title-box a {
  margin: 20px auto 10px;
  width: inherit;
  font-size: 17px;
  border-radius: 8px;
  padding: 7px 22px 6px;
  direction: rtl;
  font-weight: normal;
}

.title-box a i {
  top: 3px;
}

.title-box p {
  margin-top: 20px;
  font-size: 15px;
  text-align: right;
  line-height: 28px;
}

.section-wrapper {
  margin-top: 30px;
}

.section-wrapper .title-box {
  text-align: right;

  margin-top: 35px;
}

/*intro section style */

#intro {
  margin-top: 93px;

  text-align: center;

  padding: 25px 15px;

  direction: rtl;

  position: relative;
  background-color: #404b55;
}

#intro h1 {
  margin-top: 18px;
  margin-bottom: 6px;
}

#intro h1,
#intro h2 {
  color: #fff;
}

#intro h2 {
  margin-bottom: 16px;
}

.search-wrapper {
  position: relative;

  max-width: 593px;

  margin: 0 auto;
}

.hero-search-input {
  display: inline-block;
  min-width: 455px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}

.hero-search-input input {
  padding: 9px 15px 8px;
  border-radius: 0 4px 4px 0;
  margin: 0;
  float: right;
  border: none;
  width: calc(100% - 20px);
}

.hero-search-input button {
  transition: 300ms;

  border: none;

  margin: 0;

  padding: 8px 15px 11px;

  color: #fff;

  background: #1da1f2;

  border-radius: 4px 0 0 4px;

  position: absolute;

  left: 0;

  top: 0;
}

.hero-search-input button:hover {
  transition: 300ms;
  padding-left: 18px;
  padding-right: 18px;
}

.hero-search-input button:before {
  position: relative;

  top: 2px;
}

#intro a.green-button {
  font-size: 17px;
  margin: 0 auto;
  width: initial;
  padding: 6px 33px 11px;
  font-weight: 400;
  line-height: 1;
  border-radius: 8px;
  margin-top: 62px;
  margin-bottom: 30px;
}

#intro a.green-button i {
  font-size: 21px;
  top: 3px;
}

/*sub navigation styles*/

.requests-carousel {
  z-index: 0;
}

.secondary-nav-wrapper {
  background: #fff;

  color: #4b4b4b;

  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);

  direction: rtl;

  text-align: center;
}

.category-item {
  font-size: 16px;

  color: #777;

  padding: 7px 50px 13px;

  display: inline-block;

  line-height: 1.618;

  position: relative;

  font-weight: bold;
}

.category-item i:before {
  position: relative;

  right: 5px;

  top: 2px;
}

.sub-category-item:hover {
  background: #00c569;
  border-color: #00c569;
  color: #fff;
}

.sub-category-item {
  font-size: 15px;
  color: #5f6368;
  display: inline-block;
  line-height: 1.618;
  position: relative;
  padding: 5px 0px;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  margin-top: 20px;
  border: 1px solid #ddd;
  transition: 150ms;
}

.product-link.green-button {
  width: initial;

  margin: 0;

  font-size: 14px;

  font-weight: bold;
}

.product-link.green-button i {
  position: relative;
  top: 3px;
  right: 5px;
}

nav {
  position: relative;
}

nav li {
  opacity: 0;

  cursor: pointer;
}

nav li.active > h2 a:before {
  content: " ";

  background: #00c569;

  width: 100%;

  display: block;

  position: absolute;

  left: 0;

  bottom: 0;

  height: 3px;
}

nav li.active > h2 a:after {
  content: " ";

  display: inline-block;

  width: 0;

  height: 0;

  border-style: solid;

  border-width: 8px 8px 0 8px;

  border-color: #00c569 transparent transparent transparent;

  position: absolute;

  bottom: -8px;

  left: calc(50% - 8px);

  z-index: 1001;
}

nav li > ul {
  position: absolute;

  pointer-events: none;

  left: 0;

  opacity: 0;

  transition: 500ms;

  border: 1px solid #f1f1f1;
}

nav > ul > li {
  opacity: 1;

  padding: 0;

  direction: ltr;

  transition: 500ms;
}

li.active > ul {
  opacity: 1;

  pointer-events: initial;

  background: #fff;

  border-radius: 0 0 4px 4px;

  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.07);

  padding: 20px 15px;

  z-index: 1000;
}

li.active > ul > li,
ul:hover > li {
  opacity: 1;
}

nav > ul > li li ul {
  transform: translateX(100%);
  top: 0;
  right: 0;
}

nav > ul > li > ul > li {
  transition: transform 0.4s, opacity 0.4s;
  transform: translateY(150%);
  opacity: 0;
}

nav > ul > li.active > ul > li {
  transform: translateY(0%);
  opacity: 1;
}

li > ul > li > ul > li {
  transition: transform 0.4s, opacity 0.4s;
  transform: translateX(195px) translateY(0%);
  opacity: 0;
}

li > ul > li.active > ul > li {
  transform: translateX(0) translateY(0%);
  opacity: 1;
}

/*requests section style*/

.carousel-item {
  padding: 0;
}

.requests-contents {
  padding: 0 15px;
}

.requests-contents p {
  font-size: 13px;
}

.requests-contents .buttons-action {
  text-align: center;
}

.wrapper_no_pro {
  text-align: center;
  font-size: 23px;
  padding: 15px 0;
}

.content_no_pic {
  font-size: 70px;
  margin: 20px auto;
  color: #bdbdbd;
}

.text_no_pic {
  margin: 30px auto;
  color: #bdbdbd;
}

.list-time {
  direction: rtl;
}

.list-title,
.needs,
.list-time {
  float: right;
  text-align: center;
  line-height: 1.618;
  font-weight: bold;
  padding: 0;
  padding-top: 5px;
}

.list-group-item {
  border: 1px solid #ddd;

  padding: 7px 0;
}

.list-group-item a {
  margin: 0;

  width: initial;

  padding: 6px 15px 9px;

  direction: rtl;

  font-size: 14px;

  font-weight: bold;
}

.main-content > ul {
  border-radius: 3px;
  box-shadow: 0 0 10px #e1e1e1;
  overflow: hidden;
}

.main-content .list-group-item p {
  text-align: center;
  direction: rtl;
}

#main.little-main {
  margin-right: 80px;
}

.message-list {
  padding: 19px;
  text-align: center;
  background: #eff3f6;
  line-height: 1.618;
}

.title {
  text-align: right;
  padding: 13px 15px;
}

.title h1 {
  font-size: 18px;
  font-weight: bold;
}

.list-placeholder-wrapper {
  border: 1px solid rgb(221, 221, 221);

  position: relative;

  overflow: hidden;

  border-radius: 0 0 3px 3px;

  margin-bottom: 20px;

  border-top: none;

  background: #f6f6f6;
}

.list-placeholder-wrapper ul {
  margin: 0;

  overflow: hidden;

  border: none;
}

.list-placeholder-wrapper li {
  background: none;

  -webkit-filter: blur(8px);

  filter: blur(8px);
}

.list-placeholder::after {
  position: absolute;

  width: 100%;

  height: 100%;

  content: "";

  left: 0;

  top: 0;
}

.list-placeholder-wrapper .link {
  position: absolute;

  width: 100%;

  text-align: center;

  top: calc(50% - 82px);

  padding: 15px;
}

.list-placeholder-wrapper .link-wrapper-content {
  max-width: 500px;

  background: white;

  padding: 15px;

  border-radius: 4px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  margin: 0 auto;
}

.list-placeholder-wrapper .link p {
  font-size: 19px;

  font-weight: bold;

  color: #4b4b4b;

  margin-bottom: 4px;

  line-height: 1.618;
}

.list-placeholder-wrapper .link a {
  font-size: 14px;

  font-weight: bold;

  margin-top: 4px;
}

/*product section style*/

.carousel-item {
  padding: 0;
  text-align: center;
}

.products-contents {
  padding: 0;
}

/*services section*/

#services-section {
  text-align: center;
}

#services-section h3 {
  margin-top: 24px;
  font-size: 21px;
  font-weight: 500;
  color: #404b55;
  margin-bottom: 26px;
}

.box-image {
  height: 85px;
}

.box-image img {
  width: initial;

  height: 100%;
}

.service-box {
  padding: 0;
  position: relative;
  top: 0;
  -webkit-transition: 200ms;
  transition: 200ms;
  border-radius: 12px;
  border: 1px solid #f0f0f1;
  margin-bottom: 30px;
}

.service-box:hover {
  top: -5px;
  transition: 200ms;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
}

.service-box a {
  padding: 15px;
  display: block;
  color: #4b4b4b;
}

.service-box a h4 {
  font-size: 17px;

  font-weight: bold;
}

.service-box p {
  margin-top: 5px;
}

/*links section styles */

#benefit-links {
  background: #fff;

  text-align: right;
}

.links-title {
  color: #777;

  font-size: 16px;

  font-weight: bold;

  margin-top: 24px;
}

.benefit-links-item {
  line-height: 1.4;
  margin-top: 6px;
  direction: rtl;
  margin-bottom: 50px;
}

.benefit-links-item h4 {
  line-height: 1.4;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.benefit-links-item a {
  font-size: 10px;
  color: #bdc4cc;
  transition: 200ms;
}

.benefit-links-item a:hover {
  color: #00c569;
  transition: 200ms;
}

/*mobile responsive styles*/

.mobile-requests-contents {
  background: #fff;
  border: 1px solid #ddd;
  margin-bottom: 30px;
  padding: 5px 0 20px;
}

.mobile-requests-buttons {
  font-size: 14px;
  width: initial;
  font-weight: bold;
  margin: 25px 0 0;
}

.main-incobac-logo img {
  width: 200px;
}

.web-category-wrapper {
  background: #fff;
  position: absolute;
  right: 15px;
  left: 15px;
  border-radius: 12px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
  padding: 8px 0 0;
}

.web-category-wrapper > .section-title {
  margin: 0 14px;
}

.web-category-wrapper > ul {
  margin-top: 10px;
  height: 267px;
  transition: 300ms;
  overflow: hidden;
}

/* .web-category-wrapper > ul > li {
  position: relative;
} */

.web-category-wrapper > ul > li:hover .sub-categories-wrapper {
  display: block;
}

.web-category-wrapper > ul > li button {
  width: 100%;
  background: none;
  border: none;
  padding: 8px 20px 9px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.web-category-wrapper > ul > li span,
.web-category-wrapper > ul > li i {
  position: relative;
  z-index: 1;
  font-size: 16px;
  color: #5f6368;
}

.web-category-wrapper > ul > li span {
  font-weight: 500;
}

.web-category-wrapper > ul > li:hover button::after {
  width: 100%;
  transition: 150ms;
}

.web-category-wrapper > ul > li button::after {
  content: " ";
  transition: 150ms;
  background-color: #00c569;
  position: absolute;
  bottom: 0;
  right: 0;
  top: 0;
  width: 0%;
  z-index: 0;
  background: #fbfbfb;
}

.web-category-wrapper .sub-categories-wrapper {
  position: absolute;
  right: 100%;
  background: #fbfbfb;
  /* top: 0; */
  width: 600px;
  border-radius: 12px 0 12px 12px;
  overflow: hidden;
  display: none;
  min-height: 90px;
  padding: 15px 20px 30px;
  box-shadow: -4px 5px 10px rgba(0, 0, 0, 0.16);
}

.web-banner-wrapper {
  margin-top: 70px;
}

.load-more-categories {
  width: 100%;
  background: #f2f2f2;
  border: none;
  border-radius: 0 0 12px 12px;
  font-size: 17px;
  font-weight: 500;
  color: #556080;
  padding: 8px 0px;
  margin-top: 0;
}

.rotate-icon {
  transform: rotate(180deg);
}

.web-banner-wrapper .banner-item {
  height: 160px;
  background-size: cover;
  border-radius: 12px;
  background-color: #404b55;
  background-position: 50% 0;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  margin-top: 20px;
  border: none;
  width: 100%;
  z-index: 0;
}
.web-banner-wrapper .banner-contents {
  position: relative;
  z-index: 1;
  height: 100%;
  text-align: right;
  color: #fff;
  direction: rtl;
}

.web-banner-wrapper .banner-contents p {
  font-size: 40px;
  padding: 0 20px;
}

.web-banner-wrapper .banner-contents > div {
  position: absolute;
  left: 20px;
  bottom: 15px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  font-size: 18px;
  padding: 5px 17px;
}

.web-banner-wrapper .banner-item::after {
  content: " ";
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
.web-banner-wrapper .banner-more-categories {
  height: 160px;
  background-color: #f0f7e7;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
  margin-top: 20px;
  border: none;
  width: 100%;
}
.web-banner-wrapper .banner-more-categories .banner-contents {
  text-align: center;
  color: #404b55;
}
.web-banner-wrapper .banner-more-categories .banner-contents p {
  font-size: 32px;
  padding: 9px 0 0;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50px;
  margin: 18px auto 0;
}

.web-banner-wrapper .banner-more-categories .banner-contents div {
  position: relative;
  bottom: initial;
  left: initial;
  background: #fff;
  display: inline-block;
  margin-top: 16px;
}

.web-banner-wrapper .banner-more-categories .banner-contents div i {
  color: #1da1f2;
}

/* mobile categories styles 
******************************************/

.mobile-banner {
  padding: 20px 15px;
}

.mobile-banner .banner-item-wrapper {
  background: #f2f2f2;
  border-radius: 12px;
  padding: 20px 0;
  overflow: hidden;
}

.mobile-banner .banner-item-wrapper > div {
  padding: 0 7px;
  text-align: center;
}

.mobile-banner .banner-item {
  text-align: center;
  display: block;
  background: none;
  border: none;
  padding: 0;
  width: 100%;
  margin-bottom: 20px;
}

.mobile-banner .banner-item-wrapper .banner-item .item-image {
  height: 45px;
  width: 45px;
  border-radius: 50px;
  background-size: cover;
  margin: 0 auto;
  background-position: center;
}

.mobile-banner .banner-item-wrapper .banner-item.all-banners .item-image {
  background-color: #fff;
  padding-top: 7px;
  font-size: 22px;
}

.mobile-banner .banner-item-wrapper .banner-item p {
  font-size: 16px;
  font-weight: 500;
  color: #313a43;
  margin-top: 5px;
}

/* categories modal styles 
******************************************/

.modal-dialog {
  width: 400px;
}
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

.form-check-wrapper {
  direction: rtl;
}

.report-form textarea {
  max-width: 600px;

  margin: 0px auto;

  height: 110px;

  max-height: 170px;

  border-radius: 5px;

  direction: rtl;
}

.main-text {
  text-align: center;
  /* margin: 20px 0 40px; */
}
.form-check-wrapper button {
  width: 100%;

  border: none;

  background: none;

  border-bottom: 1px solid #eee;

  text-align: right;

  padding: 12px 15px 13px;
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

.loading-list {
  padding: 90px 0 130px;
}

.main-contents-wrapper {
  padding: 20px;
  position: relative;
  border-radius: 12px;
  border: 1px solid #f0f0f1;
  margin: 30px auto;
  direction: rtl;
}

.main-contents-wrapper > p {
  margin-top: 20px;
}

@media screen and (max-width: 767px) {
  #intro {
    margin-top: 75px;
  }
  .hero-search-input {
    width: 100%;

    margin-bottom: 15px;

    min-width: initial;

    overflow: hidden;
  }

  .hero-search-input button {
    padding: 13px 15px 15px;
  }

  #intro a.green-button {
    margin: 0 auto;

    float: none !important;
  }

  .secondary-nav-wrapper {
    padding: 0;
  }

  .category-item {
    padding: 7px 15px 13px;
  }

  .category-item i::before {
    position: relative;
    right: 1px;
    top: 4px;
  }

  li.active > ul {
    left: 0;

    right: 0;
  }

  .product-link.green-button {
    margin: 15px 0 0;
  }

  #categories-modal > div {
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
  .title-box p {
    text-align: center;
  }

  .section-wrapper .title-box {
    text-align: center;
  }
}
</style>

<template>
  <div>
    <div
      :class="{ 'loader-wrapper': isLoading, 'finish-loader-show': !isLoading }"
    >
      <div class="main-loader">
        <img src="../../../../img/gif/loading.gif" />
      </div>
    </div>

    <div class="container">
      <div
        id="categories-modal"
        class="categories-modal modal fade"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <a class="close-modal" @click.prevent="closeModal()">
                <i class="fa fa-times"></i>
              </a>

              <div class="modal-title">
                <span> دسته بندی ها </span>
              </div>
            </div>
            <div class="modal-body col-xs-12">
              <ul class="form-check-wrapper" v-if="!isCategories">
                <li v-for="(item, index) in categoryModalList" :key="index">
                  <button
                    @click.prevent="routeCategories(item.category_name)"
                    class="default-button-list"
                    v-text="item.category_name"
                  ></button>
                  <i class="fa fa-angle-left"></i>
                </li>
              </ul>
              <ul class="form-check-wrapper" v-else>
                <li v-for="(item, index) in categoryModalList" :key="index">
                  <button
                    class="default-button-list"
                    @click.prevent="activeSubCategories(item.id)"
                    v-text="item.category_name"
                  ></button>
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

    <!-- =========================
        Intro SECTION
    ==============================-->

    <section id="intro" class="container-fluid">
      <!-- <div class="particle-network-animation"></div> -->
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-9">
            <div name="fadeIn">
              <h1 class="intro-site-title">
                باسکول | بازار خرید و فروش عمده محصولات کشاورزی
              </h1>
            </div>

            <div
              name="fadeIn"
              delay="0.5s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
            >
              <h2 class="intro-site-title">
                ارتباط مستقیم با خریداران و فروشندگان عمده محصولات کشاورزی
              </h2>
            </div>

            <div class="search-wrapper">
              <div class="hero-search-input">
                <input
                  type="text"
                  placeholder="محصول مورد نظر خود را جستجو کنید"
                  v-model="mainSearchBoxText"
                />
                <button
                  class="hidden-sm hidden-md hidden-lg fa fa-search"
                  @click="search"
                ></button>

                <button class="hidden-xs" @click="search">
                  <i class="fa fa-search"></i>
                  جستجو
                </button>
              </div>

              <router-link :to="{ name: 'productList' }" class="green-button"
                >شروع خرید و فروش عمده
                <i class="fa fa-angle-left"></i>
              </router-link>
            </div>
          </div>
          <div class="col-xs-12 hidden-xs hidden-sm col-md-3">
            <div class="web-category-wrapper">
              <div class="section-title">دسته بندی ها</div>
              <ul v-if="categoryList.length" id="web-categories">
                <li
                  v-for="(category, index) in categoryList"
                  :id="'menu-' + index"
                  :key="index"
                >
                  <ul class="sub-categories-wrapper" :data-index="index">
                    <li
                      class="col-md-3 pull-right"
                      v-for="(
                        subCategory, subCategoryIndex
                      ) in category.subcategories"
                      :key="subCategoryIndex"
                    >
                      <router-link
                        class="sub-category-item"
                        :to="getSubCategoryUrl(subCategory.category_name)"
                        v-text="subCategory.category_name"
                      ></router-link>
                    </li>
                  </ul>
                  <button>
                    <span v-text="category.category_name"></span>

                    <i class="fa fa-angle-left"></i>
                  </button>
                </li>
              </ul>
              <ul v-else>
                <li v-for="(category, index) in 6" :key="index">
                  <button>
                    <span class="placeholder-content content-full-width"></span>
                  </button>
                </li>
              </ul>
              <button
                v-if="categoryList.length > 6"
                @click.prevent="collapseMenu()"
                class="load-more-categories"
              >
                <span v-if="!this.isCollapse">دسته های بیشتر</span>
                <span v-else>بستن</span>
                <i
                  class="fa fa-angle-down"
                  :class="{ 'rotate-icon': this.isCollapse }"
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
        Secondary Nav SECTION
    ==============================-->
    <section id="categories-banner" class="categories-banner container">
      <div class="web-banner-wrapper hidden-xs hidden-sm">
        <div class="row">
          <div class="banner-item-wrapper">
            <div class="pull-right col-xs-3">
              <button
                id="banner-item-1"
                class="banner-item"
                @click.prevent="openCategoriesModal(50)"
                :style="{ backgroundImage: 'url(' + getImageUrl(7) + ')' }"
              >
                <div class="banner-contents">
                  <p>حبوبات</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </button>
            </div>
            <div class="pull-right col-xs-9">
              <button
                id="banner-item-2"
                class="banner-item"
                @click.prevent="openCategoriesModal(1)"
                :style="{ backgroundImage: 'url(' + getImageUrl(1) + ')' }"
              >
                <div class="banner-contents">
                  <p>میوه</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </button>
            </div>
            <div class="pull-right col-xs-3">
              <button
                id="banner-item-3"
                class="banner-item"
                @click.prevent="openCategoriesModal(45)"
                :style="{ backgroundImage: 'url(' + getImageUrl(5) + ')' }"
              >
                <div class="banner-contents">
                  <p>ادویه</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </button>
            </div>
            <div class="pull-right col-xs-6">
              <button
                id="banner-item-4"
                class="banner-item"
                @click.prevent="openCategoriesModal(2)"
                :style="{ backgroundImage: 'url(' + getImageUrl(2) + ')' }"
              >
                <div class="banner-contents">
                  <p>صیفی</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </button>
            </div>
            <div class="pull-right col-xs-3">
              <button
                id="banner-item-5"
                class="banner-item"
                @click.prevent="openCategoriesModal(42)"
                :style="{ backgroundImage: 'url(' + getImageUrl(3) + ')' }"
              >
                <div class="banner-contents">
                  <p>غلات</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </button>
            </div>
            <div class="pull-right col-xs-6">
              <button
                id="banner-item-6"
                class="banner-item"
                @click.prevent="openCategoriesModal(44)"
                :style="{ backgroundImage: 'url(' + getImageUrl(4) + ')' }"
              >
                <div class="banner-contents">
                  <p>خشکبار</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </button>
            </div>
            <div class="pull-right col-xs-3">
              <button
                id="banner-item-7"
                class="banner-item"
                @click.prevent="openCategoriesModal(46)"
                :style="{ backgroundImage: 'url(' + getImageUrl(6) + ')' }"
              >
                <div class="banner-contents">
                  <p>دامپروری</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </button>
            </div>
            <div class="pull-right col-xs-3">
              <button
                class="banner-more-categories"
                @click.prevent="openCategoriesModal(false)"
              >
                <div class="banner-contents">
                  <p>
                    <i class="fa fa-list"></i>
                  </p>
                  <div>
                    همه دسته ها
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-banner-wrapper hidden-md hidden-lg">
        <div class="row">
          <div class="mobile-banner">
            <div class="banner-item-wrapper">
              <div
                class="col-xs-3 pull-right"
                v-for="(item, index) in categoryList"
                :key="index"
                :class="{ hidden: index > 6 }"
              >
                <button
                  class="banner-item"
                  @click.prevent="openCategoriesModal(item.id)"
                >
                  <div
                    class="item-image"
                    :style="{
                      backgroundImage: 'url(' + getImageUrl(index + 1) + ')',
                    }"
                  ></div>
                  <p class="item-text" v-text="item.category_name"></p>
                </button>
              </div>
              <div class="col-xs-3 pull-right">
                <button
                  class="banner-item all-banners"
                  @click.prevent="openCategoriesModal(false)"
                >
                  <div class="item-image">
                    <i class="fa fa-list"></i>
                  </div>
                  <p class="item-text">همه</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
        Product SECTION
    ==============================-->
    <section
      id="product-section"
      class="section-wrapper container-fluid latest-product"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-9">
            <div class="section-title">آخرین محصولات ثبت شده</div>

            <div class="col-xs-12 products-contents">
              <div v-if="lastProducts" class="row">
                <!-- <div class="owl-carousel">
                  <ProductCarousel
                    v-for="(product, index) in lastProducts"
                    :key="index"
                    :img="str + '/thumbnails/' + product.photo"
                    :title="product.product_name"
                    :stock="getConvertedNumbers(product.stock)"
                    :link="getProductUrl(product)"
                    column="3"
                  />
                </div> -->

                <div
                  class="col-xs-6 col-sm-4 items-wrapper pull-right col-md-3"
                  :key="productIndex"
                  v-for="(product, productIndex) in lastProducts"
                >
                  <!-- <ProductGridArticle
                    :productIndex="productIndex"
                    v-if="lastProducts.length >= productIndex"
                    :key="product.id"
                    :product="product"
                    :str="str"
                    :currentUser="$parent.currentUser"
                  /> -->
                </div>
              </div>

              <div v-else class="row">
                <div
                  v-for="(item, index) in 3"
                  :key="index"
                  :class="{ 'hidden-xs': index >= 2 }"
                  class="col-md-4 col-sm-4 col-xs-6"
                >
                  <article class="carousel-item box-content col-xs-12">
                    <span
                      class="default-index-product-image placeholder-content col-xs-12"
                    ></span>

                    <span
                      class="content-default-width placeholder-content margin-10 col-xs-10 col-xs-offset-1"
                    ></span>

                    <span
                      class="content-default-width placeholder-content col-xs-8 col-xs-offset-2"
                    ></span>

                    <span class="margin-10"></span>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-3 pull-right">
            <div v-if="isUserLogin && userType == 0" class="title-box">
              <h3>
                محصولات فروشندگان را ببینید و بدون واسطه با آن ها ارتباط برقرار
                کنید
              </h3>

              <router-link class="green-button" :to="{ name: 'productList' }"
                >لیست محصولات</router-link
              >
            </div>

            <div v-else-if="isUserLogin && userType == 1" class="title-box">
              <h3>
                با ثبت و معرفی محصول خود، بدون واسطه با خریداران عمده ارتباط
                برقرار کنید
              </h3>

              <router-link
                class="green-button"
                :to="{ name: 'registerProductSeller' }"
                >ثبت محصول</router-link
              >
            </div>

            <div v-else class="title-box">
              <div class="section-title">ثبت نام خریداران</div>
              <p>
                برای استعلام قیمت و خرید محصولات کشاورزی از بهترین فروشندگان
                عمده هم اکنون ثبت نام کنید
              </p>

              <router-link class="green-button" :to="{ name: 'register' }"
                >ثبت نام رایگان
                <i class="fa fa-angle-left"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
        Request SECTION
    ==============================-->

    <section
      id="requests-section"
      class="section-wrapper container-fluid hidden-xs"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-9">
            <div class="section-title">آخرین درخواست های خرید</div>

            <div class="col-xs-12 requests-contents box-content">
              <div class="row hidden-xs">
                <ul v-if="lastRequests" class="list-unstyled">
                  <li
                    v-for="(buyAd, index) in lastRequests"
                    :key="index"
                    class="list-group-item col-xs-12"
                  >
                    <p class="list-title col-sm-4 col-xs-12">
                      <span
                        v-if="buyAd.category_name"
                        v-text="buyAd.category_name"
                      ></span>

                      <span v-if="buyAd.subcategory_name">|</span>

                      <span
                        v-if="buyAd.subcategory_name"
                        v-text="buyAd.subcategory_name"
                      ></span>

                      <span v-if="buyAd.name" v-text="'| ' + buyAd.name"></span>
                    </p>

                    <p class="needs col-sm-4 col-xs-12">
                      <span class="static-content">میزان نیازمندی :</span>

                      <span
                        v-text="getConvertedNumbers(buyAd.requirement_amount)"
                      ></span>
                    </p>

                    <p
                      class="list-time col-sm-4 col-xs-12"
                      v-text="buyAd.register_date"
                    ></p>
                  </li>

                  <li
                    v-if="!isUserLogin || userType == 1"
                    class="buttons-action list-group-item col-xs-12"
                  >
                    <router-link
                      class="green-button"
                      :to="{ name: 'buyAdRequestsSeller' }"
                    >
                      همه درخواست های خرید
                      <i class="fa fa-arrow-left"></i>
                    </router-link>
                  </li>
                </ul>

                <ul v-else class="list-unstyled">
                  <li
                    v-for="(item, index) in 3"
                    class="list-group-item col-xs-12"
                  >
                    <span
                      class="margin-10 content-full-width placeholder-content"
                    ></span>
                  </li>

                  <li class="list-group-item col-xs-12 text-center">
                    <span
                      class="default-button margin-10 content-min-width placeholder-content"
                    ></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-3 pull-right">
            <div v-if="isUserLogin && userType == 0" class="title-box">
              <h3>
                از فروشندگان عمده قیمت بگیرید و با یک درخواست چندین قیمت دریافت
                کنید
              </h3>

              <router-link
                class="green-button"
                :to="{ name: 'registerRequestBuyer' }"
                >ثبت درخواست خرید</router-link
              >
            </div>

            <div v-else-if="isUserLogin && userType == 1" class="title-box">
              <h3>
                درخواست های خریداران عمده را ببینید و بدون واسطه با آن ها ارتباط
                برقرار کنید
              </h3>

              <router-link
                class="green-button"
                :to="{ name: 'buyAdRequestsSeller' }"
                >لیست درخواست های خرید</router-link
              >
            </div>

            <div v-else class="title-box">
              <div class="section-title">ثبت نام فروشندگان</div>
              <p>
                برای فروش بدون واسطه محصولات کشاورزی خود به خریداران مستقیم و
                صادرکنندگان هم اکنون ثبت نام کنید
              </p>
              <router-link
                v-if="!isUserLogin"
                class="green-button"
                :to="{ name: 'register' }"
                >ثبت نام رایگان <i class="fa fa-angle-left"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="mobile-requests-section"
      class="section-wrapper container-fluid hidden-sm hidden-md hidden-lg"
    >
      <div class="row">
        <div class="title-section col-xs-12">
          <h3>آخرین درخواست های خرید</h3>
          <hr />
        </div>

        <div class="col-xs-12 mobile-requests-contents">
          <div v-if="lastRequests">
            <div class="owl-carousel requests-carousel">
              <RequestCarousel
                v-for="(buyAd, index) in lastRequests"
                :key="index"
                :name="buyAd.name"
                :title="buyAd.category_name + ' | ' + buyAd.subcategory_name"
                :need="getConvertedNumbers(buyAd.requirement_amount)"
                :date="buyAd.register_date"
              />
            </div>
            <div
              class="text-center text-rtl"
              v-if="!isUserLogin || userType == 1"
            >
              <router-link
                class="mobile-requests-buttons green-button"
                :to="{ name: 'buyAdRequestsSeller' }"
              >
                همه درخواست های خرید
                <i class="fa fa-arrow-left"></i>
              </router-link>
            </div>
          </div>

          <div v-else>
            <article class="col-xs-6 col-xs-offset-3">
              <br />
              <span class="margin-15"></span>
              <span
                class="content-default-width placeholder-content padding-10-0 margin-10 col-xs-6 col-xs-offset-3"
              ></span>

              <span
                class="content-default-width placeholder-content padding-10-0 margin-10 col-xs-10 col-xs-offset-1"
              ></span>

              <span
                class="content-default-width placeholder-content padding-10-0 margin-10 col-xs-8 col-xs-offset-2"
              ></span>

              <div class="text-center">
                <span class="default-button placeholder-content"></span>
              </div>
            </article>
          </div>
        </div>

        <div class="container">
          <div v-if="isUserLogin && userType == 0" class="title-box">
            <h3>
              از فروشندگان عمده قیمت بگیرید و با یک درخواست چندین قیمت دریافت
              کنید
            </h3>

            <router-link
              class="green-button"
              :to="{ name: 'registerRequestBuyer' }"
              >ثبت درخواست خرید</router-link
            >
          </div>

          <div v-else-if="isUserLogin && userType == 1" class="title-box">
            <h3>
              درخواست های خریداران عمده را ببینید و بدون واسطه با آن ها ارتباط
              برقرار کنید
            </h3>

            <router-link
              class="green-button"
              :to="{ name: 'buyAdRequestsSeller' }"
              >لیست درخواست های خرید</router-link
            >
          </div>

          <div v-else class="title-box">
            <div class="section-title">ثبت نام فروشندگان</div>
            <p>
              برای فروش بدون واسطه محصولات کشاورزی خود به خریداران مستقیم و
              صادرکنندگان هم اکنون ثبت نام کنید
            </p>
            <router-link
              v-if="!isUserLogin"
              class="green-button"
              :to="{ name: 'register' }"
              >ثبت نام رایگان <i class="fa fa-angle-left"></i
            ></router-link>
          </div>
        </div>
      </div>
    </section>

    <section id="services-section" class="section-wrapper container-fluid">
      <div class="container">
        <div class="row">
          <h3 class="col-xs-12">
            ارتباط مستقیم با خریداران و فروشندگان عمده محصولات کشاورزی
          </h3>

          <div class="service-boxs-wrapper col-xs-12">
            <div class="row">
              <div class="col-xs-12 col-md-4 hidden-md hidden-lg">
                <article class="service-box main-incobac-logo">
                  <router-link :to="{ name: 'help' }">
                    <div class="box-image">
                      <img src="../../../../img/logo/web-logo.svg" />
                    </div>
                    <h4>باسکول چیست؟</h4>
                    <p>
                      باسکول بازار خرید و فروش عمده محصولات کشاورزی
                      <br />است که خریداران را به فروشندگان عمده متصل کرده
                      <br />و خریداران و فروشندگان بدون واسطه می توانند با
                      یکدیگر ارتباط برقرار کنند
                    </p>
                  </router-link>
                </article>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
                <article class="service-box">
                  <router-link :to="{ name: 'help' }">
                    <div class="box-image">
                      <img src="../../../../img/seller.jpg" />
                    </div>
                    <h4>خدمات فروشندگان</h4>

                    <p>
                      معرفی محصولات به خریداران عمده
                      <br />دسترسی به درخواست های خرید روزانه <br />گسترش شبکه ی
                      تجاری و مشتریان <br />فروش بدون واسطه و مقرون به صرفه
                      <br />
                    </p>
                  </router-link>
                </article>
              </div>
              <div
                class="col-xs-12 col-sm-6 col-md-4 pull-right hidden-xs hidden-sm"
              >
                <article class="service-box main-incobac-logo">
                  <router-link :to="{ name: 'help' }">
                    <div class="box-image">
                      <img src="../../../../img/logo/web-logo.svg" />
                    </div>
                    <h4>باسکول چیست؟</h4>
                    <p>
                      باسکول بازار خرید و فروش عمده محصولات کشاورزی
                      <br />است که خریداران را به فروشندگان عمده متصل کرده
                      <br />و خریداران و فروشندگان بدون واسطه می توانند با
                      یکدیگر ارتباط برقرار کنند
                    </p>
                  </router-link>
                </article>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
                <article class="service-box">
                  <router-link :to="{ name: 'help' }">
                    <div class="box-image">
                      <img src="../../../../img/buyer.jpg" />
                    </div>
                    <h4>خدمات خریداران</h4>

                    <p>
                      استعلام قیمت از فروشندگان و کشاورزان
                      <br />دسترسی بدون واسطه به فروشندگان متنوع <br />صرفه جویی
                      در زمان و هزینه خرید محصول <br />گسترش شبکه تامین کنندگان
                      <br />
                    </p>
                  </router-link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="register-request-section"
      class="container"
      v-if="userType != 1"
    >
      <main-register-request-form wrapper-bg="true" />
    </section>

    <section id="main-contents-section" class="container">
      <div class="col-xs-12">
        <div class="row">
          <article class="main-contents-wrapper">
            <div class="section-title">متن سئو</div>

            <p>
              معرفی محصولات به خریداران عمده دسترسی به درخواست های خرید روزانه
              گسترش شبکه ی تجاری و مشتریان فروش بدون واسطه و مقرون به صرفه معرفی
              محصولات به خریداران عمده دسترسی به درخواست های خرید روزانه گسترش
              شبکه ی تجاری و مشتریان فروش بدون واسطه و مقرون به صرفه معرفی
              محصولات به خریداران عمده دسترسی به درخواست های خرید روزانه گسترش
              شبکه ی تجاری و مشتریان فروش بدون واسطه و مقرون به صرفه معرفی
              محصولات به خریداران عمده دسترسی به درخواست های خرید روزانه گسترش
              شبکه ی تجاری و مشتریان فروش بدون واسطه و مقرون به صرفه
            </p>
          </article>
        </div>
      </div>
    </section>
    <section id="benefit-links" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="links-title col-xs-12">لینک های مفید</div>
          <div class="benefit-links-item col-xs-12">
            <div class="row">
              <!-- loop for wholesale date -->
              <h4
                v-for="(item, index) in footerLinks.wholesaleDate"
                :key="index"
                class="col-xs-6 col-sm-4 col-md-2 pull-right"
              >
                <router-link
                  :to="getSubCategoryUrl(item.link)"
                  v-text="'فروش عمده' + ' ' + item.name"
                ></router-link>
              </h4>
              <!-- end loop  -->

              <!-- loop for wholesale  -->
              <div v-if="categoryList.length">
                <div v-for="(category, index) in categoryList" :key="index">
                  <h4
                    v-for="(subCategory, subIndex) in category.subcategories"
                    :key="subIndex"
                    class="col-xs-6 col-sm-4 col-md-2 pull-right"
                  >
                    <router-link
                      :to="getSubCategoryUrl(subCategory.category_name)"
                      v-text="'فروش عمده' + ' ' + subCategory.category_name"
                    ></router-link>
                  </h4>
                </div>
              </div>

              <!-- end loop  -->

              <!-- loop for wholesale rice -->

              <h4
                v-for="(item, index) in footerLinks.wholesaleRise"
                :key="index"
                class="col-xs-6 col-sm-4 col-md-2 pull-right"
              >
                <router-link
                  :to="getSubCategoryUrl(item.link)"
                  v-text="'فروش عمده برنج' + ' ' + item.name"
                ></router-link>
              </h4>

              <!-- end loop  -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { eventBus } from "../../../router/router";
import mainRegisterRequestForm from "./main_components/main-register-request-form";
import ProductGridArticle from "./product_components/Product_grid_article";

var visible = false;

import ProductCarousel from "./main_components/product-list-carousel";
import Route from "../../../router/components/route";

var RequestCarousel = {
  props: ["name", "title", "need", "date", "link"],
  template:
    '<article class=" request-carousel-content col-xs-12  ">' +
    '<div class="row">' +
    '<p class="list-title">' +
    '<span v-text="title"></span>' +
    '<span v-if= "name" v-text="\' | \' + name"></span>' +
    "</p>" +
    '<p class="needs col-sm-4 col-xs-12">' +
    '<span class="static-content">' +
    "میزان نیازمندی :" +
    "</span>" +
    '<span v-text="need"></span>' +
    '<span class="static-content">' +
    // "کیلوگرم" +
    "</span>" +
    "</p>" +
    '<p class="list-time col-sm-4 col-xs-12" v-text="date"></p>' +
    "</div>" +
    "</article>",

  mounted: function () {
    $("#mobile-requests-section .owl-carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      loop: true,
      nav: true,
      navText: false,
      items: 1,
      mouseDrag: true,
      margin: 30,
      dots: true,
      stagePadding: 15,
    });
  },
};

export default {
  components: {
    Route,
    ProductCarousel,
    RequestCarousel,
    mainRegisterRequestForm,
    ProductGridArticle,
  },
  props: ["isUserLogin", "userType", "assets", "str"],
  data: function () {
    return {
      mainSearchBoxText: "",
      enterKeyActiveForSearch: false,
      lastRequests: "",
      lastProducts: "",
      isLoading: false,
      categoryList: "",
      subCategoryList: "",
      isCollapse: false,
      isCategories: false,
      categoryModalList: "",
      footerLinks: {
        wholesaleDate: [
          {
            name: "خرما",
            link: "خرما",
          },
          {
            name: "خرمای مضافتی",
            link: "خرما",
          },
          {
            name: "خرمای بم",
            link: "خرما",
          },
          {
            name: "خرمای زاهدی",
            link: "خرما",
          },
          {
            name: "خرمای بوشهر",
            link: "خرما",
          },
          {
            name: "خرمای کبکاب",
            link: "خرما",
          },
          {
            name: "خرمای خوزستان",
            link: "خرما",
          },
          {
            name: "خرما در مشهد",
            link: "خرما",
          },
          {
            name: "خرما در بوشهر",
            link: "خرما",
          },
          {
            name: "خرمای مجول",
            link: "خرما",
          },
          {
            name: "کشمش",
            link: "کشمش",
          },
          {
            name: "پسته",
            link: "پسته",
          },
          {
            name: "انجیر خشک استهبان",
            link: "انجیر",
          },
          {
            name: "زعفران",
            link: "زعفران",
          },
        ],
        wholesaleRise: [
          {
            name: "برنج",
            link: "برنج",
          },
          {
            name: "خاطره",
            link: "برنج",
          },
          {
            name: "هندی طبیعت",
            link: "برنج",
          },
          {
            name: "محسن",
            link: "برنج",
          },
          {
            name: "پاکستانی",
            link: "برنج",
          },
          {
            name: "طبیعت",
            link: "برنج",
          },
          {
            name: "قهوه ای",
            link: "برنج",
          },
          {
            name: "شمال",
            link: "برنج",
          },
          {
            name: "طارم",
            link: "برنج",
          },
          {
            name: "دم سیاه",
            link: "برنج",
          },
          {
            name: "هاشمی",
            link: "برنج",
          },
          {
            name: "صدری",
            link: "برنج",
          },
        ],
      },
    };
  },
  methods: {
    stopLoader: function () {
      eventBus.$emit("isLoading", false);
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
      var self = this;
      window.scrollTo(0, 0);

      axios
        .post("/get_category_list", {
          cascade_list: true,
        })
        .then(function (response) {
          self.categoryList = response.data.categories;
        });

      axios.post("/get_sample_products", {}).then(function (response) {
        self.lastProducts = response.data.products;
      });

      axios.post("/get_sample_buyAds", {}).then(function (response) {
        self.lastRequests = response.data.buyAds;
      });
    },
    search: function () {
      if (this.mainSearchBoxText !== "") {
        eventBus.$emit("textSearch", this.mainSearchBoxText);

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
    generateProductLink: function (product) {
      var id = product.main.id;
      var categoryName = product.main.category_name;
      var subCategoryName = product.main.sub_category_name;

      return (
        "/product-view/خرید-عمده-" +
        subCategoryName.replace(" ", "-") +
        "/" +
        categoryName.replace(" ", "-") +
        "/" +
        id
      );
    },
    getSubCategoryUrl: function (name) {
      let url = "/product-list/category/" + name.replace(" ", "-");
      return url;
    },
    dropDownSecondaryMenu: function (event, index) {
      function collapseDropDown(eventItem) {
        var dropdowns = $(".menu-wrapper > li");
        var targetClass = $(eventItem.target).attr("class");
        var activeItemIndex = $(".active .sub-categories-wrapper ").data(
          "index"
        );

        if (
          (index != activeItemIndex && targetClass == "category-item") ||
          (index != activeItemIndex && targetClass == "fa fa-angle-down ")
        ) {
          dropdowns.each(function (index) {
            $(this).removeClass("active");
          });
          document.getElementById("menu" + index).classList.toggle("active");
        } else {
          dropdowns.each(function (index) {
            $(this).removeClass("active");
          });
        }
      }

      window.onclick = function (event) {
        var eventItem = event;
        setTimeout(collapseDropDown(eventItem), 80);
      };
    },

    getProductUrl: function (product) {
      return (
        "/product-view/خرید-عمده-" +
        product.subcategory_name.replace(" ", "-") +
        "/" +
        product.category_name.replace(" ", "-") +
        "/" +
        product.id
      );
    },
    getNumberWithCommas: function (number) {
      if (number || typeof number === "number")
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      else return "";
    },
    getConvertedNumbers: function (number) {
      if (number || typeof number === "number") {
        let data = number / 1000;
        if (number < 1000) {
          return number + " " + "کیلوگرم";
        } else {
          data = this.getNumberWithCommas(data);
          return data + " " + "تن";
        }
      } else return "";
    },
    collapseMenu() {
      if (!this.isCollapse) {
        let fullHeight = 10 + this.categoryList.length * 42.8833;
        fullHeight = Math.round(fullHeight);
        $("#web-categories").height(fullHeight);
        this.isCollapse = true;
      } else {
        $("#web-categories").height(267);
        this.isCollapse = false;
      }
    },
    getImageUrl(index) {
      return this.assets + "assets/img/banners/banner-" + index + ".jpg";
    },
    imageParallax() {
      var parallax = -0.1;

      var $bg_image1 = $("#banner-item-1");
      var $bg_image2 = $("#banner-item-2");
      var $bg_image3 = $("#banner-item-3");
      var $bg_image4 = $("#banner-item-4");
      var $bg_image5 = $("#banner-item-5");
      var $bg_image6 = $("#banner-item-6");
      var $bg_image7 = $("#banner-item-7");

      var offset_tops = [];

      $bg_image1.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image2.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image3.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image4.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image5.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image6.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });
      $bg_image7.each(function (i, el) {
        offset_tops.push($(el).offset().top);
      });

      $(window).scroll(function () {
        var dy = $(this).scrollTop();
        $bg_image1.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + -50) + "px"
          );
        });
        $bg_image2.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + -50) + "px"
          );
        });
        $bg_image3.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + -50) + "px"
          );
        });
        $bg_image4.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + -50) + "px"
          );
        });
        $bg_image5.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + -50) + "px"
          );
        });
        $bg_image6.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + -50) + "px"
          );
        });
        $bg_image7.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + -50) + "px"
          );
        });
      });
    },
    closeModal() {
      $(".modal").modal("hide");
    },
    routeCategories(categoryName) {
      this.closeModal();
      this.$router.push(this.getSubCategoryUrl(categoryName));
    },
    openCategoriesModal(categoryId) {
      $("#categories-modal").modal("show");
      if (categoryId) {
        for (let i = 0; i < this.categoryList.length; i++) {
          if (this.categoryList[i].id == categoryId) {
            this.categoryModalList = this.categoryList[i].subcategories;
          }
        }
      } else {
        this.isCategories = true;
        this.categoryModalList = this.categoryList;
      }
    },
    activeSubCategories(categoryId) {
      for (let i = 0; i < this.categoryList.length; i++) {
        if (this.categoryList[i].id == categoryId) {
          this.categoryModalList = this.categoryList[i].subcategories;
        }
      }

      this.isCategories = false;
    },
  },
  mounted: function () {
    this.init();
    this.imageParallax();
    this.isLoading = true;
  },
  updated() {
    this.$nextTick(this.stopLoader());
  },
  created() {
    eventBus.$on("textSearch", (event) => {
      this.mainSearchBoxText = event;
    });

    gtag("config", "UA-129398000-1", { page_path: "/home-page" });

    document.addEventListener("click", this.documentClick);

    var self = this;

    window.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        if (self.enterKeyActiveForSearch) {
          self.search();
        }
      }
    });
  },
  watch: {
    mainSearchBoxText: function (value) {
      this.enterKeyActiveForSearch = this.mainSearchBoxText !== "";
      eventBus.$emit("textSearch", value);
    },
  },
  metaInfo() {
    return {
      title: " بازار خرید و فروش عمده محصولات کشاورزی ",
      titleTemplate: "باسکول | %s",
      meta: [
        {
          name: "description",
          content:
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی",
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
          content: "باسکول بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران",
        },
        {
          property: "og:title",
          content: " باسکول | بازار خرید و فروش عمده محصولات کشاورزی ",
        },
      ],
    };
  },
};
</script>
