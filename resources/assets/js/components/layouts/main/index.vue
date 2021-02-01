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

  font-weight: bold;
}

h2 {
  font-size: 17px;

  font-weight: bold;
}

i {
  position: relative;
  top: 1px;
  padding: 0 2px;
}

#main-content {
  margin-bottom: -60px;
}

#intro::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(25, 102, 142, 0.4);
  background: linear-gradient(
    66deg,
    rgba(25, 102, 142, 0.4) 0%,
    rgba(33, 173, 147, 0.4) 100%
  );
  background: -webkit-linear-gradient(
    66deg,
    rgba(25, 102, 142, 0.4) 0%,
    rgba(33, 173, 147, 0.4) 100%
  );
  background: -moz-linear-gradient(
    66deg,
    rgba(25, 102, 142, 0.4) 0%,
    rgba(33, 173, 147, 0.4) 100%
  );
  background: -o-linear-gradient(
    66deg,
    rgba(25, 102, 142, 0.4) 0%,
    rgba(33, 173, 147, 0.4) 100%
  );
  background: -ms-linear-gradient(
    66deg,
    rgba(25, 102, 142, 0.4) 0%,
    rgba(33, 173, 147, 0.4) 100%
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
  font-size: 17px;
  font-weight: bold;
  color: #4b4b4b;
  margin-bottom: 12px;
}

.title-box a {
  margin: 20px auto 10px;

  width: inherit;

  font-size: 14px;

  font-weight: bold;

  padding: 9px 22px 6px;
}

.title-section {
  direction: rtl;
  margin-bottom: 8px;
}

.title-section h3 {
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

.section-wrapper {
  margin-top: 30px;
}

.section-wrapper .title-box {
  text-align: center;

  margin-top: 35px;
}

/*intro section style */

#intro {
  margin-top: 97px;

  text-align: center;

  padding: 25px 15px;

  direction: rtl;

  position: relative;
}

#intro h1,
#intro h2 {
  color: #fff;

  margin-bottom: 15px;
}

.search-wrapper {
  position: relative;

  max-width: 593px;

  margin: 0 auto;
}

.search-input {
  display: inline-block;

  min-width: 455px;

  overflow: hidden;

  position: relative;

  float: right;
}

.search-input input {
  padding: 9px 15px 8px;

  border-radius: 0 4px 4px 0;

  margin: 0;

  float: right;

  border: none;

  width: calc(100% - 20px);
}

.search-input button {
  transition: 300ms;

  border: none;

  margin: 0;

  padding: 8px 15px 11px;

  color: #fff;

  background: #000546;

  border-radius: 4px 0 0 4px;

  position: absolute;

  left: 0;

  top: 0;
}

.search-input button:hover {
  transition: 300ms;

  background: #00032b;

  padding-left: 18px;

  padding-right: 18px;
}

.search-input button:before {
  position: relative;

  top: 2px;
}

#intro a.green-button {
  font-size: 14px;

  margin: 0 15px 0 0;

  width: initial;

  float: right;

  padding: 9px 15px 8px;
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

.category-item:hover,
.active .category-item {
  color: #00c569;
}

.category-item:hover,
.sub-category-item:hover {
  color: #00c569;
}

.sub-category-item {
  font-size: 14px;

  color: #777;

  display: inline-block;

  line-height: 1.618;

  position: relative;

  font-weight: bold;

  padding: 5px 0;

  width: 100%;
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
  background: #ececec;

  text-align: center;
}

#services-section h3 {
  margin-top: 24px;

  font-size: 23px;

  font-weight: bold;

  color: #4b4b4b;
}

.service-boxs-wrapper {
  padding: 20px 15px 45px;
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
  transition: 200ms;
}

.service-box:hover {
  top: -5px;
  transition: 200ms;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
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
@media screen and (max-width: 767px) {
  #intro {
    margin-top: 57px;
  }
  .search-input {
    width: 100%;

    margin-bottom: 15px;

    min-width: initial;

    overflow: hidden;
  }

  .search-input button {
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

  .service-box {
    margin-top: 30px;
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

    <!-- =========================
        Intro SECTION
    ==============================-->

    <section id="intro" class="container-fluid">
      <!-- <div class="particle-network-animation"></div> -->
      <div class="container">
        <div class="row">
          <u-animate-container>
            <u-animate
              name="fadeIn"
              delay="0.2s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
            >
              <h1 class="intro-site-title" data-wow-delay="1.2s">
                باسکول | بازار خرید و فروش عمده محصولات کشاورزی
              </h1>
            </u-animate>

            <u-animate
              name="fadeIn"
              delay="0.5s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
            >
              <h2 class="intro-site-title" data-wow-delay="1.2s">
                ارتباط مستقیم با خریداران و فروشندگان عمده محصولات کشاورزی
              </h2>
            </u-animate>

            <u-animate
              name="fadeIn"
              delay="0.8s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
              class="search-wrapper"
            >
              <div class="search-input">
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
                >لیست محصولات</router-link
              >
            </u-animate>
          </u-animate-container>
        </div>
      </div>
    </section>

    <!-- =========================
        Secondary Nav SECTION
    ==============================-->
    <section class="secondary-nav-wrapper container-fluid">
      <div class="container">
        <nav class="row">
          <ul class="menu-wrapper list-inline">
            <li
              v-if="categoryList.length"
              v-for="(category, index) in categoryList"
              :id="'menu' + index"
              class="nav-item"
            >
              <h2>
                <a
                  href="#"
                  @click.prevent="dropDownSecondaryMenu($event, index)"
                  class="category-item"
                >
                  <i class="fa fa-angle-down"></i>
                  {{ category.category_name }}
                </a>
              </h2>
              <ul
                class="sub-categories-wrapper list-inline col-xs-12"
                :data-index="index"
              >
                <li
                  v-for="subCategory in category.subcategories"
                  class="col-xs-4 col-sm-3 col-md-4 pull-right"
                >
                  <router-link
                    class="sub-category-item"
                    :to="getSubCategoryUrl(subCategory.category_name)"
                    v-text="subCategory.category_name"
                  ></router-link>
                </li>

                <li class="col-xs-12 button-link-wrapper">
                  <router-link
                    class="product-link green-button"
                    :to="{ name: 'productList' }"
                  >
                    <i class="fa fa-arrow-left"></i>
                    مشاهده همه محصولات
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
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
            <div class="title-section col-xs-12">
              <div class="row">
                <h3>آخرین درخواست های خرید</h3>
                <hr />
              </div>
            </div>

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
            <div
              v-if="isUserLogin && userType == 0"
              class="title-box box-content"
            >
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

            <div
              v-else-if="isUserLogin && userType == 1"
              class="title-box box-content"
            >
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

            <div v-else class="title-box box-content">
              <h3>ثبت نام فروشندگان</h3>
              <p>
                برای فروش بدون واسطه محصولات کشاورزی خود به خریداران مستقیم و
                صادرکنندگان هم اکنون ثبت نام کنید
              </p>
              <router-link
                v-if="!isUserLogin"
                class="green-button"
                :to="{ name: 'register' }"
                >ثبت نام</router-link
              >
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
          <div
            v-if="isUserLogin && userType == 0"
            class="title-box box-content"
          >
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

          <div
            v-else-if="isUserLogin && userType == 1"
            class="title-box box-content"
          >
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

          <div v-else class="title-box box-content">
            <h3>ثبت نام فروشندگان</h3>
            <p>
              برای فروش بدون واسطه محصولات کشاورزی خود به خریداران مستقیم و
              صادرکنندگان هم اکنون ثبت نام کنید
            </p>
            <router-link
              v-if="!isUserLogin"
              class="green-button"
              :to="{ name: 'register' }"
              >ثبت نام</router-link
            >
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
            <div class="title-section col-xs-12">
              <div class="row">
                <h3>آخرین محصولات ثبت شده</h3>
                <hr />
              </div>
            </div>

            <div class="col-xs-12 products-contents">
              <div v-if="lastProducts" class="row">
                <div class="owl-carousel">
                  <ProductCarousel
                    v-for="(product, index) in lastProducts"
                    :key="index"
                    :img="str + '/thumbnails/' + product.photo"
                    :title="product.product_name"
                    :stock="getConvertedNumbers(product.stock)"
                    :link="getProductUrl(product)"
                    column="3"
                  />
                </div>
              </div>

              <div v-else class="row">
                <div
                  v-for="(item, index) in 3"
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
            <div
              v-if="isUserLogin && userType == 0"
              class="title-box box-content"
            >
              <h3>
                محصولات فروشندگان را ببینید و بدون واسطه با آن ها ارتباط برقرار
                کنید
              </h3>

              <router-link class="green-button" :to="{ name: 'productList' }"
                >لیست محصولات</router-link
              >
            </div>

            <div
              v-else-if="isUserLogin && userType == 1"
              class="title-box box-content"
            >
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

            <div v-else class="title-box box-content">
              <h3>ثبت نام خریداران</h3>
              <p>
                برای استعلام قیمت و خرید محصولات کشاورزی از بهترین فروشندگان
                عمده هم اکنون ثبت نام کنید
              </p>

              <router-link class="green-button" :to="{ name: 'register' }"
                >ثبت نام</router-link
              >
            </div>
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
              <div class="col-xs-12 col-sm-4 pull-right">
                <article class="service-box box-content main-incobac-logo">
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

              <div class="col-xs-12 col-sm-4 pull-right">
                <article class="service-box box-content">
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

              <div class="col-xs-12 col-sm-4 pull-right">
                <article class="service-box box-content">
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

    <section class="container" v-if="userType != 1">
      <main-register-request-form wrapper-bg="true" />
    </section>

    <section id="benefit-links" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="links-title col-xs-12">لینک های مفید</div>
          <div class="benefit-links-item col-xs-12">
            <div class="row">
              <!-- loop for wholesale date -->
              <h4
                v-for="item in footerLinks.wholesaleDate"
                class="col-xs-6 col-sm-4 col-md-2 pull-right"
              >
                <router-link
                  :to="getSubCategoryUrl(item.link)"
                  v-text="'فروش عمده' + ' ' + item.name"
                ></router-link>
              </h4>
              <!-- end loop  -->

              <!-- loop for wholesale  -->
              <div
                v-if="categoryList.length"
                v-for="(category, index) in categoryList"
              >
                <h4
                  v-for="subCategory in category.subcategories"
                  class="col-xs-6 col-sm-4 col-md-2 pull-right"
                >
                  <router-link
                    :to="getSubCategoryUrl(subCategory.category_name)"
                    v-text="'فروش عمده' + ' ' + subCategory.category_name"
                  ></router-link>
                </h4>
              </div>
              <!-- end loop  -->

              <!-- loop for wholesale rice -->

              <h4
                v-for="item in footerLinks.wholesaleRise"
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
import VueWow from "vue-wow";
import mainRegisterRequestForm from "./main_components/main-register-request-form";
import { UAnimateContainer, UAnimate } from "vue-wow";

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
    UAnimateContainer,
    UAnimate,
    mainRegisterRequestForm,
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

      // setTimeout(collapseDropDown, 80);
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
  },
  mounted: function () {
    this.init();
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
