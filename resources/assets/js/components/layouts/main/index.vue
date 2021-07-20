<style scoped>
@import url("../../../../css/owl.carousel.min.css");
@import url("../../../../css/magnific-popup.css");
@import url("../../../../css/owl-product-items-style.css");

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
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.4) 100%
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

  margin-top: 85px;
}

.product-hidden {
  display: none;
}

/*intro section style */

#intro {
  margin-top: 93px;

  text-align: center;

  padding: 25px 15px;

  direction: rtl;

  position: relative;
  background-color: #404b55;
  z-index: 2;
}

#intro h1 {
  margin-top: 18px;
  font-size: 30px;
  margin-bottom: 16px;
}

#intro h1,
#intro h2 {
  color: #fff;
  font-weight: bold;
}

#intro h2 {
  margin-bottom: 16px;
  font-size: 15px;
}

.search-wrapper {
  position: relative;

  max-width: 593px;

  margin: 0 auto;
}

.hero-search-input {
  display: block;
  min-width: 455px;
  /* overflow: hidden; */
  position: relative;
  border-radius: 8px;
  margin: 35px auto 0;
  max-width: 670px;
}

.hero-search-input > input {
  padding: 11px 162px 11px 15px;
  border-radius: 12px;
  margin: 0;
  float: right;
  border: none;
  font-size: 16px;
  line-height: 27px;
}

.hero-search-input > button {
  transition: 300ms;
  border: none;
  margin: 0;
  padding: 15px 20px 10px;
  color: #868686;
  background: none;
  border-radius: 8px 0 0 8px;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
}

.main-cta-page {
  font-size: 17px;
  border-radius: 8px;
  padding: 7px 22px 6px;
  direction: rtl;
  font-weight: normal;
  margin: 20px auto 0;
  display: block;
  max-width: 270px;
}

#intro a.green-button {
  font-size: 20px;
  margin: 0 auto;
  width: initial;
  padding: 13px 33px;
  font-weight: 400;
  line-height: 1;
  border-radius: 12px;
  margin-top: 62px;
  margin-bottom: 30px;
}

#intro a.green-button i {
  font-size: 21px;
  top: 3px;
}

/*sub navigation styles*/

.last-buyAds-carousel {
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

.default-item.carousel-item {
  padding: 0;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f0f0f1;
  margin-bottom: 20px;
}

/*requests section style*/

.requests-contents {
  padding: 0;
  margin-top: 20px;
  overflow: hidden;
  padding-bottom: 10px;
}

.buyAds-placeholder {
  border: 1px solid #ddd;
  padding: 8px 11px 10px;
  border-radius: 12px;
  margin-bottom: 20px;
  background: #fdfdfd !important;
  overflow: hidden;
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
  margin-top: 5px;
}

.products-contents .product-placeholder-wrapper {
  margin-top: 15px;
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
  width: 100px;

  height: 80px;
}

.box-image.logo img {
  width: 200px;

  height: 80px;
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
  padding: 25px 0 0;
  overflow: hidden;
}

.mobile-banner .banner-item-wrapper > div > div {
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
  background-color: #fff;
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
  max-height: 400px;
  overflow-y: scroll;
}

.main-contents-wrapper > p {
  margin: 20px auto;
}
.main-contents-wrapper p:last-of-type {
  margin-bottom: 30px;
}

.items-wrapper {
  padding: 0 3px;
}

.custom-mega-menu .col-xs-12 > div {
  /* height: 170px; */
  float: right;
  width: 100%;
  /* display: flex;
  flex-flow: column wrap; */
}
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
  width: 451px;
}

.custom-mega-menu .lvl1-wrapper {
  background: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-bottom-right-radius: 12px;
}

.custom-mega-menu .lvl2-wrapper {
  box-shadow: 0 7px 9px rgba(0, 0, 0, 0.02);
  border-radius: 0 0 12px 12px;
  padding-bottom: 25px;
  min-height: calc(100% + 20px);
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
}

.search-input > button.open-categories span {
  margin-left: 22px;
}

.search-input > button i:before {
  position: relative;
  left: 2px;
  top: 3px;
}

button.open-categories {
  background: #eee;
  color: #313a43;
  font-weight: 400;
  padding: 11px 15px;
  font-size: 16px;
  border: none;
  border-radius: 0 12px 12px 0;
  position: relative;
  line-height: 27px;
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

@media screen and (max-width: 1199px) {
  .title-box a {
    font-size: 15px;
    padding: 7px 15px 6px;
  }
}

@media screen and (max-width: 992px) {
  .title-box a {
    font-size: 17px;
    padding: 7px 22px 6px;
  }
  .product-hidden {
    display: block;
  }
  .section-wrapper .title-box {
    margin-top: 35px;
  }
}
@media screen and (max-width: 767px) {
  .hero-search-input > input {
    padding: 11px 15px;
  }
  .form-check-wrapper li:last-of-type button {
    border: none;
  }
  .modal-body {
    margin-left: 0;
    margin-right: 0;
  }

  .mobile-banner .banner-item-wrapper .banner-item p {
    height: 35px;
  }
  #intro {
    margin-top: 75px;
    padding: 20px 0;
  }
  .hero-search-input {
    width: 100%;

    margin-bottom: 15px;

    min-width: initial;

    overflow: hidden;
  }

  .hero-search-input button {
    padding: 14px 20px 15px;
  }

  .hero-search-input button:hover {
    padding: 14px 20px 15px;
  }

  #intro a.green-button {
    margin: 15px auto;

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

    <!-- =========================
        Intro SECTION
    ==============================-->

    <section
      id="intro"
      class="container-fluid"
      :class="{
        'intro-web': !checkIsMobile(),
        'intro-mobile': checkIsMobile(),
      }"
    >
      <!-- <div class="particle-network-animation"></div> -->
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div name="fadeIn">
              <h1 class="intro-site-title">
                باسکول | بازار خرید و فروش عمده محصولات غذایی و کشاورزی
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
                ارتباط مستقیم با خریداران و فروشندگان عمده محصولات غذایی و
                کشاورزی
              </h2>
            </div>

            <div class="search-wrapper">
              <div class="hero-search-input">
                <nav class="custom-mega-menu hidden-xs">
                  <ul>
                    <li>
                      <button
                        @click.prevent="openFilterModal(false)"
                        class="open-categories hidden-lg"
                      >
                        <span> همه محصولات </span>
                        <i class="fa fa-angle-down"></i>
                      </button>
                      <button class="open-categories hidden-sm hidden-md">
                        <span> همه محصولات </span>
                        <i class="fa fa-angle-down"></i>
                      </button>
                      <ul class="w-100 lvl1-wrapper hidden-sm hidden-md">
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
                              <button class="menu-title">
                                <span v-text="subCategory.category_name"></span>
                                <hr />
                              </button>

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
                                    :to="getSubCategoryUrl(item.category_name)"
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
                <button
                  class="hidden-sm hidden-md hidden-lg fa fa-search"
                  @click="search"
                ></button>

                <button class="hidden-xs" @click="search">
                  <i class="fa fa-search"></i>
                </button>
              </div>

              <router-link :to="{ name: 'productList' }" class="green-button">
                لیست محصولات
                <i class="fa fa-angle-left"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
        Categories Banner
    ==============================-->
    <section id="categories-banner" class="categories-banner container">
      <div class="web-banner-wrapper hidden-xs hidden-sm">
        <div class="row">
          <div class="banner-item-wrapper">
            <div class="pull-right col-xs-3">
              <button
                id="banner-item-1"
                class="banner-item"
                @click.prevent="openCategoriesModal('حبوبات')"
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
                @click.prevent="openCategoriesModal('میوه')"
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
                @click.prevent="openCategoriesModal('ادویه')"
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
                @click.prevent="openCategoriesModal('صیفی')"
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
                @click.prevent="openCategoriesModal('غلات')"
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
                @click.prevent="openCategoriesModal('خشکبار')"
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
                @click.prevent="openCategoriesModal('دامپروری')"
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
      <div
        v-if="checkIsMobile()"
        class="mobile-banner-wrapper hidden-md hidden-lg"
      >
        <div class="row">
          <div class="mobile-banner">
            <div class="banner-item-wrapper">
              <div v-if="mobileCategoryList">
                <div
                  class="col-xs-3 pull-right"
                  v-for="(item, index) in mobileCategoryList"
                  :key="'mobile-banner-category-' + index"
                  :class="{ hidden: index > 6 }"
                >
                  <button
                    class="banner-item"
                    @click.prevent="openCategoriesModal(item.category_name)"
                  >
                    <div
                      class="item-image"
                      :style="{
                        backgroundImage:
                          'url(' + getMobileImageUrl(index + 1) + ')',
                      }"
                    ></div>
                    <p class="item-text" v-text="item.category_name"></p>
                  </button>
                </div>
              </div>
              <div v-else>
                <div
                  class="col-xs-3 pull-right"
                  v-for="(item, index) in 7"
                  :key="'placeholder-mobile-banner-category-' + index"
                  :class="{ hidden: index > 6 }"
                >
                  <button class="banner-item">
                    <div
                      class="item-image"
                      :style="{
                        backgroundColor: '#fff',
                      }"
                    ></div>
                    <p class="item-text" v-text="'---'"></p>
                  </button>
                </div>
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
      class="section-wrapper container latest-product"
    >
      <div class="row">
        <div class="col-xs-12 col-md-9">
          <div class="section-title">آخرین محصولات ثبت شده</div>

          <div class="col-xs-12 products-contents">
            <div v-if="lastProducts" class="row">
              <div class="hidden-sm hidden-md hidden-lg">
                <div class="owl-carousel product-carousel">
                  <div
                    v-for="(product, productIndex) in lastProducts"
                    :key="'products-carousel-' + productIndex"
                  >
                    <ProductGridArticle
                      :productIndex="productIndex"
                      :key="'product-item-' + product.id"
                      :last-product="product"
                      :str="str"
                      :loadedProduct="showLatestProducts"
                    />
                  </div>
                </div>
              </div>

              <div class="hidden-xs">
                <div
                  v-for="(product, productIndex) in lastProducts"
                  :key="'products-' + productIndex"
                  class="col-xs-6 col-sm-4 items-wrapper pull-right col-md-3"
                  :class="{ 'product-hidden': productIndex > 7 }"
                >
                  <ProductGridArticle
                    :productIndex="productIndex"
                    :key="'product-item-' + product.id"
                    :last-product="product"
                    :str="str"
                    :loadedProduct="showLatestProducts"
                  />
                </div>
              </div>
            </div>

            <div v-else class="row product-placeholder-wrapper">
              <div
                v-for="(item, index) in 9"
                :key="'placeholder-product-item-' + index"
                :class="{
                  'product-hidden': index > 7,
                  'hidden-xs': index > 1,
                }"
                class="col-md-3 col-sm-4 items-wrapper col-xs-6 pull-right"
              >
                <article class="carousel-item default-item col-xs-12">
                  <span
                    class="
                      default-index-product-image
                      placeholder-content
                      col-xs-12
                      pull-right
                    "
                  ></span>

                  <span
                    class="
                      content-default-width
                      placeholder-content
                      margin-10
                      col-xs-10 col-xs-offset-1
                      pull-right
                    "
                  ></span>
                  <span
                    class="
                      content-default-width
                      placeholder-content
                      col-xs-8
                      margin-10
                      col-xs-offset-2
                      pull-right
                    "
                  ></span>

                  <span
                    class="
                      content-default-width
                      placeholder-content
                      margin-10
                      col-xs-10 col-xs-offset-1
                      pull-right
                    "
                  ></span>

                  <span class="margin-10"></span>
                </article>
              </div>
            </div>
            <router-link
              class="green-button bg-light-green main-cta-page"
              :to="{ name: 'productList' }"
              >مشاهده همه محصولات
              <i class="fa fa-angle-left"></i>
            </router-link>
          </div>
        </div>

        <div class="col-xs-12 col-md-3 pull-right">
          <div v-if="isUserLogin && userType == 0" class="title-box">
            <div class="section-title">ارتباط با فروشندگان</div>

            <p>
              محصولات فروشندگان را ببینید و بدون واسطه با آن ها ارتباط برقرار
              کنید
            </p>

            <router-link class="green-button" :to="{ name: 'productList' }"
              >لیست محصولات</router-link
            >
          </div>

          <div v-else-if="isUserLogin && userType == 1" class="title-box">
            <div class="section-title">ثبت و معرفی محصول</div>

            <p>
              با ثبت و معرفی محصول خود، بدون واسطه با خریداران عمده ارتباط
              برقرار کنید
            </p>

            <router-link
              class="green-button"
              :to="{ name: 'registerProductSeller' }"
              >ثبت محصول</router-link
            >
          </div>

          <div v-else class="title-box">
            <div class="section-title">ثبت نام خریداران</div>
            <p>
              برای استعلام قیمت و خرید محصولات غذایی و کشاورزی از بهترین
              فروشندگان عمده هم اکنون ثبت نام کنید
            </p>

            <router-link class="green-button" :to="{ name: 'register' }"
              >ثبت نام رایگان
              <i class="fa fa-angle-left"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
        Request SECTION
    ==============================-->

    <section id="requests-section" class="section-wrapper container">
      <div class="row">
        <div class="col-xs-12 col-md-9">
          <div class="section-title">آخرین درخواست های خرید</div>

          <div v-if="lastRequests" class="requests-contents">
            <div class="row hidden-xs">
              <div
                v-for="(buyAd, index) in lastRequests"
                :key="'buyAd-item-' + index"
                class="col-xs-12 col-sm-6 col-md-4"
              >
                <LandingPageBuyAds :buyAd="buyAd" />
              </div>
            </div>

            <div
              class="
                owl-carousel
                hidden-sm hidden-md hidden-lg
                last-buyAds-carousel
              "
            >
              <LandingPageBuyAds
                :buyAd="buyAd"
                v-for="(buyAd, index) in lastRequests"
                :key="'mobile-buyAd-item-' + index"
              />
            </div>
          </div>
          <div v-else class="requests-contents">
            <div
              class="col-xs-12 col-sm-6 col-md-4"
              v-for="(item, index) in 6"
              :key="'default-request-' + index"
              :class="{ 'hidden-xs': index > 0 }"
            >
              <article class="buyAds-placeholder">
                <span
                  class="
                    content-default-width
                    placeholder-content
                    padding-10-0
                    margin-10
                    col-xs-6 col-xs-offset-3
                    pull-right
                  "
                ></span>

                <span
                  class="
                    content-default-width
                    placeholder-content
                    padding-10-0
                    margin-10
                    col-xs-10 col-xs-offset-1
                  "
                ></span>

                <div class="text-center">
                  <span
                    class="
                      content-default-width
                      placeholder-content
                      padding-10-0
                      margin-10
                      col-xs-6 col-xs-offset-3
                    "
                  ></span>
                </div>
              </article>
            </div>
          </div>
          <router-link
            v-if="!isUserLogin || (isUserLogin && userType == 1)"
            class="green-button bg-light-green main-cta-page"
            :to="{ name: 'buyAdRequestsSeller' }"
            >مشاهده همه درخواست ها
            <i class="fa fa-angle-left"></i>
          </router-link>
        </div>

        <div class="col-xs-12 col-md-3 pull-right">
          <div v-if="isUserLogin && userType == 0" class="title-box">
            <div class="section-title">یک درخواست و چندین قیمت</div>
            <p>
              از فروشندگان عمده قیمت بگیرید و با یک درخواست چندین قیمت دریافت
              کنید
            </p>

            <router-link
              class="green-button"
              :to="{ name: 'registerRequestBuyer' }"
              >ثبت درخواست خرید</router-link
            >
          </div>

          <div v-else-if="isUserLogin && userType == 1" class="title-box">
            <div class="section-title">خریداران عمده</div>
            <p>
              درخواست های خریداران عمده را ببینید و بدون واسطه با آن ها ارتباط
              برقرار کنید
            </p>

            <router-link
              class="green-button"
              :to="{ name: 'buyAdRequestsSeller' }"
              >لیست درخواست های خرید</router-link
            >
          </div>

          <div v-else class="title-box">
            <div class="section-title">ثبت نام فروشندگان</div>
            <p>
              برای فروش بدون واسطه محصولات غذایی و کشاورزی خود به خریداران
              مستقیم و صادرکنندگان هم اکنون ثبت نام کنید
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

    <section id="services-section" class="section-wrapper container">
      <div class="row">
        <h3 class="col-xs-12">
          ارتباط مستقیم با خریداران و فروشندگان عمده محصولات غذایی و کشاورزی
        </h3>

        <div class="service-boxs-wrapper col-xs-12">
          <div class="row">
            <div class="col-xs-12 col-md-4 hidden-md hidden-lg">
              <article class="service-box main-incobac-logo">
                <router-link :to="{ name: 'help' }">
                  <div class="box-image logo">
                    <img
                      loading="lazy"
                      src="../../../../img/logo/web-logo.svg"
                    />
                  </div>
                  <h4>باسکول چیست؟</h4>
                  <p>
                    باسکول بازار خرید و فروش عمده محصولات غذایی و کشاورزی
                    <br />است که خریداران را به فروشندگان عمده متصل کرده <br />و
                    خریداران و فروشندگان بدون واسطه می توانند با یکدیگر ارتباط
                    برقرار کنند
                  </p>
                </router-link>
              </article>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
              <article class="service-box">
                <router-link :to="{ name: 'help' }">
                  <div class="box-image">
                    <img loading="lazy" src="../../../../img/seller.jpg" />
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
                  <div class="box-image logo">
                    <img
                      loading="lazy"
                      src="../../../../img/logo/web-logo.svg"
                    />
                  </div>
                  <h4>باسکول چیست؟</h4>
                  <p>
                    باسکول بازار خرید و فروش عمده محصولات غذایی و کشاورزی
                    <br />است که خریداران را به فروشندگان عمده متصل کرده <br />و
                    خریداران و فروشندگان بدون واسطه می توانند با یکدیگر ارتباط
                    برقرار کنند
                  </p>
                </router-link>
              </article>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
              <article class="service-box">
                <router-link :to="{ name: 'help' }">
                  <div class="box-image">
                    <img loading="lazy" src="../../../../img/buyer.jpg" />
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
    </section>

    <section
      id="register-request-section"
      class="container"
      v-if="userType != 1"
    >
      <main-register-request-form
        wrapper-bg="true"
        :is-user-login="isUserLogin"
        :categoryList="categoryList"
      />
    </section>

    <section id="main-contents-section" class="container">
      <div class="col-xs-12">
        <div class="row">
          <article class="main-contents-wrapper">
            <h2 class="section-title">عمده فروشی مواد غذایی</h2>
            <p>
              عمده فروشی مواد غذایی به عنوان یک تجارت پرسود در تمام جهان به حساب
              می آید که به صورت کلی دو حالت دارد، در حالت اول خود تولید کننده
              اقدام به فروش محصولات به مصرف کننده اصلی می کند و در حالت دوم، یک
              سری از افراد به عنوان واسطه بین تولید کننده اصلی و مصرف کننده
              نهایی عمل می کنند که اصطلاحا به این افراد بنکدار یا مراکز پخش عمده
              گفته می شود. خرید از تولید کننده اصلی باعث می شود شما در هزینه
              خودتان صرفه جویی کنید و از پرداخت هزینه های جانبی به واسطه های
              متعدد برای رسیدن به کالا خودداری کنید.
            </p>
            <p>
              در حال حاضر افراد زیادی در زمینه عمده فروشی مواد غذایی فعالیت
              دارند و انواع مواد غذایی را با قیمت های مقرون به صرفه در اختیار
              شما قرار می دهند، سایت باسکول به عنوان یک کانال دو طرفه برای
              برقراری ارتباط بین عمده فروشان و خریداران عمل می کند. بنابراین اگر
              شما عمده فروش مواد غذایی هستید می توانید با ثبت نام در سایت
              باسکول، هزاران خریدار از سراسر ایران را در کمترین زمان ممکن جذب
              کنید.
            </p>
            <h2 class="section-title">خرید عمده مواد غذایی</h2>
            <p>
              خرید عمده مواد غذایی به صورت آنلاین به یک روش راحت و کاربردی در
              سال های اخیر تبدیل شده است و طرفداران بسیار زیادی پیدا کرده است.
              خرید عمده هر محصولی از فروشنده اصلی باعث کم کردن هزینه های جانبی
              شما می شود که این موضوع در خصوص خرید عمده مواد غذایی نیز صدق می
              کند و خرید عمده مواد غذایی از کارخانه، بهترین انتخاب برای شما می
              باشد تا با کمک آن بهترین محصول را با قیمت مناسب خریداری کنید. در
              سایت باسکول این امکان برای شما فراهم شده است که فروشندگان مواد
              غذایی را پیدا کرده، محصولات آنها را به نسبت قیمت و کیفیت مقایسه
              کنید و در نهایت بهترین فروشنده را برای خرید عمده مواد غذایی را
              پیدا کرده و با او معامله کنید.
            </p>
            <p>
              همچنین شما می توانید بعد از ثبت نام در سایت یا اپلیکیشن، یک
              درخواست خرید عمده مواد غذایی با جزئیاتی مانند میزان و نوع محصول
              مورد نظر خودتان، ثبت کنید و منتظر بمانید تا فروشنده مورد نظر با
              شما ارتباط برقرار کند.
            </p>
            <h2 class="section-title">قیمت عمده مواد غذایی</h2>
            <p>
              همانطور که می دانید مواد غذایی شامل اقلام بسیار زیاد و متنوعی است
              که هر یک از آنها دارای قیمت های متفاوتی می باشند. به صورت کلی قیمت
              عمده مواد غذایی به عوامل مختلفی مانند نحوه ارائه، کیفیت، بسته
              بندی، نوع مواد غذایی و غیره بستگی دارد اما این موضوع در خصوص همه
              اقلام مواد غذایی صدق می کند که اگر شما محصول مورد نظر خودتان را از
              تولید کننده اصلی یعنی شرکت های تولیدی، خریداری کنید، واسطه ها را
              از بین خواهید برد و قیمت نهایی محصول بسیار پایین تر از حد انتظار
              خواهد بود. یکی از مهم ترین ویژگی های وب سایت باسکول این است که
              خریدار می تواند با هزاران فروشنده مواد غذایی از سراسر ایران ارتباط
              برقرار کند و از آنها استعلام قیمت بگیرید و در نتیجه به نسبت کیفیت
              و برند مواد غذایی تصمیم به خرید محصول با قیمت مورد نظر خودش بگیرد.
            </p>
            <h2 class="section-title">فروش عمده مواد غذایی</h2>
            <p>
              بازار خرید و فروش مواد غذایی، یکی از پر رونق ترین و فعال ترین
              بازارهای حال حاضر در جهان و ایران است و به علت حضور در چرخه تامین
              غذا فعالیت آن دائمی است و در تمام طول سال مشتریان خاص خودش را
              دارد. برای فروش عمده مواد غذایی می توانید وارد سایت یا اپلیکیشن
              باسکول شوید و محصولات خودتان را بارگذاری کنید تا خریداران عمده
              بتوانند آنها را مشاهده کنند و در صورت تطابق با نیازشان با شما تماس
              برقرار کنند.
            </p>
            <p>
              بنابراین اگر در زمینه فروش عمده مواد غذایی فعالیت دارید، انتخاب
              سایت باسکول به عنوان بستر فروش محصولات خود به صورت آنلاین، می
              تواند بهترین گزینه و انتخاب برای شما باشد و شما را با خریداران
              معتبر آشنا میکند.
            </p>
            <h2 class="section-title">عمده فروش مواد غذایی</h2>
            <p>
              یکی از مشکلاتی که عمده فروش مواد غذایی با آن سروکار دارد، واسطه
              های بسیار زیاد است، در واقع واسطه ها، مواد غذایی را با قیمت خیلی
              پایین خریداری می کند و با قیمتی بالاتر در اختیار خریدار بعدی قرار
              می دهند، که خوشبختانه در سال های اخیر با توجه به اینکه تعداد زیادی
              عمده فروش مواد غذایی با پلتفرم های آنلاین آشنا شدند و به دنبال
              فروش محصول خود به خریدار اصلی با قیمت مناسب و واقعی هستند، این
              مشکلات کمتر شده است. سایت باسکول در همین راستا میتواند شما را با
              خریداران متعددی آشنا کند و روند فروش مواد غذایی را بهبود ببخشد.
            </p>
            <h2 class="section-title">سایت عمده فروشان</h2>
            <p>
              زمانی که حرف از سایت عمده فروشان زده می شود، معمولا یک سوال اساسی
              در ذهن افراد در خصوص میزان امنیت معاملات شکل می گیرد، سایت باسکول
              با استراتژِی های متعدد سعی در این دارد که شما یک معامله کاملا ایمن
              با خریداران و فروشندگان معتبر داشته باشد و در همین راستا سیستم های
              اعتبار سنجی و احراز هویت را به کار برده است تا هر دو طرف معامله با
              امنیت بیشتری با یکدیگر آشنا شوند. باسکول به عنوان سایت عمده فروشان
              شناخته شده است و روزانه هزاران فروشنده عمده در این سایت به فعالیت
              میپردازند.
            </p>
            <h2 class="section-title">فروش عمده محصولات غذایی و کشاورزی</h2>
            <p>
              فروش عمده محصولات غذایی و کشاورزی به صورت مستقیم و بدون واسطه باعث
              می شود هر دو طرف معامله، یعنی فروشنده و خریدار سود بیشتری کسب
              کنند، در واقع در این حالت نیازی به پرداخت هزینه به واسطه های متعدد
              نیست و شما میتوانید محصول کشاورزی را با قیمت واقعی خریداری کنید که
              این موضوع در خصوص اقلام کشاورزی نیز صدق می کند و فروشنده یا کشاورز
              می تواند سود بیشتری از فروش محصولات خودش به دست آورد.
            </p>
            <p>
              سایت باسکول این امکان را در اختیار شما قرار داده است که بعد از ثبت
              نام و قرار دادن کالا در سایت، محصول خودتان را با قیمت واقعی و بدون
              دخالت هیچ واسطه ای به فروش برسانید.
            </p>
            <h2 class="section-title">قیمت عمده محصولات غذایی و کشاورزی</h2>
            <p>
              محصولات غذایی و کشاورزی به نسبت کیفیت، نوسانات ارز، بسته بندی، نوع
              محصول و نحوه تحویل به صورت فله و بسته بندی، دارای قیمت های بسیار
              مختلفی می باشند و این امکان وجود ندارد که قیمت محصولات غذایی و
              کشاورزی به صورت ثابت در یک بازه زمانی بماند. بنابراین بهترین راه
              برای به دست آوردمحصولات غذایی و کشاورزیولات کشاورزی برقراری ارتباط
              با فروشندگان عمده است. در حال حاضر هزاران فروشنده محصولات غذایی در
              سایت باسکول فعالیت دارند که شما می توانید برای اطلاع از قیمت عمده
              انواع محصولات غذایی و کشاورزی به صورت دقیق و به روز، با آنها به
              صورت مستقیم ارتباط برقرار کرده و از آنها استعلام قیمت بگیرید.
            </p>
            <h2 class="section-title">بازار کشاورزی</h2>
            <p>
              همانطور که میدانید بخش کشاورزی یکی مهمترین بخش های تامین نیازهای
              افراد است که شامل بسیاری از مواد غذایی می باشد. در چند سال اخیر
              توجه بسیار زیادی به بازار کشاورزی آنلاین شده است تا جایی که عمده
              خرید و فروش های محصولات غذایی و کشاورزی به صورت آنلاین صورت می
              گیرد. در حال حاضر پلتفرم های بسیار زیادی در زمینه بازار کشاورزی
              فعالیت دارند و باعث رونق بیشتر بازار خرید محصولات غذایی و
              کشاورزیکشاورزی در جهان شده اند.
            </p>
            <p>
              باسکول به عنوان یک پلتفرم که در زمینه بازار کشاورزی آنلاین فعالیت
              دارد، امکان خرید و فروش بدون واسطه و مستقیم را برای شما فراهم می
              کند و شما با کمک آن میتوانید سود بیشتری از خرید و فروش محصولات
              کشاورزی مورد نظر خودتان به دست بیاورید.
            </p>
            <h2 class="section-title">بازار کشاورزی</h2>
            <p>
              باسکول به عنوان یک پلتفرم آنلاین، یک فضای دو طرفه ایجاد کرده و سعی
              دارد با حذف واسطه ها در وقت و هزینه شما تا میزان زیادی صرفه جویی
              کند، عدم دسترسی به فروشندگان و خریداران عمده محصولات غذایی و
              کشاورزی باعث شده است که بازار خرید آن ها رو به رکود برود و زمینه
              فعالیت واسطه ها را تا حد زیادی گسترش داده است. هدف باسکول این است
              که یک ارتباط مستقیم و بدون واسطه را بین خریدار عمده با فروشنده
              اصلی ایجاد کند تا هر دو طرف، محصول را با قیمت اصلی معامله کنند.
            </p>
            <p>
              در حال حاضر باسکول به عنوان بازارگاه کشاورزی آنلاین، هزاران کشاورز
              یا فروشنده عمده محصولات غذایی و کشاورزی را در خود جای داده است و
              شما میتوانید به راحتی و با چند کلیک با آنها ارتباط برقرار کنید، در
              صورتی که خود شما فروشنده هستید پیشنهاد می کنیم در سایت باسکول ثبت
              نام کنید و از خدمات متنوع باسکول همچون اطلاع از آخرین درخواست های
              خرید و ارتباط با هزاران خریدار از سراسر کشور برخوردار شوید.
            </p>
            <h2 class="section-title">فروش مستقیم محصولات غذایی و کشاورزی</h2>
            <p>
              در سال های گذشته فروش مستقیم محصولات غذایی و کشاورزی برای همه
              افراد وجود نداشت و واسطه گری افراد باعث می شد که کشاورز محصول خود
              را با هزینه کمتر به فروش برساند و از طرف دیگر خریدار قیمت بیشتری
              برای آن پرداخت کند. در حال حاضر سایت ها و پلتفرم هایی وجود دارند
              که به شما امکان فرمحصولات غذایی و کشاورزیات کشاورزی را می دهند.
              سایت باسکول با هدف ارتباط دادن تولید کننده محصولات غذایی و
              کشاورزیاورزی با خریدار، سعی در کاهش هزینه های هر دو طرف دارد و
              باعث می شود در زمان و هزینه خریدار و فروشنده صرفه جویی شود.
            </p>
            <p>
              در حال حاضر هزاران نفر از افرادی که به دنبال فروش مستقیم محصولات
              کشاورزی هستند در سایت باسکول حضور دارند و شما میتوانید محصول مورد
              نظر خودتان را با کیفیت بسیار عالی و قیمت مطلوب از آنها خریداری
              کنید.
            </p>
            <h2 class="section-title">خرید و فروش عمده</h2>
            <p>
              خرید و فروش عمده انواع محصولات به دو صورت حضوری و آنلاین صورت
              میگیرد، که در حال حاضر با توجه به شرایط و مزایای معامله آنلاین،
              بیشتر افراد تمایل به خرید و فروش عمده به صورت آنلاین دارند. شما در
              هر دو صورت محصول خودتان را از بنکدار یا فروشنده عمده، تحویل می
              گیرید با این تفاوت که خرید آنلاین را با چند کلیک ساده انجام می
              دهید و این امکان را دارید که قیمت ها و کیفیت محصولات را مقایسه
              کنید و بهترین انتخاب ممکن را بدون صرف هزینه و هدر رفتن زمان، داشته
              باشید. این موضوع در مورد فروش عمده نیز صدق می کند و بنکدار می
              تواند محصولات مختلفی را در سایت قرار داده و محصول خودش را به افراد
              بیشتری معرفی و در نتیجه با قیمت مناسب به فروش برساند.
            </p>
            <h2 class="section-title">فروش عمده میوه و تره بار</h2>
            <p>
              با توجه به شرایطی همچون عدم دسترسی به بازار های جدید در سطح کشور و
              هزینه های بالای تبلیغات آفلاین، امروزه تلاش کسب و کارهای مختلف
              برای پیشبرد انجام معاملات به صورت آنلاین است که فروش عمده میوه و
              تره بار نیز از این قضیه مستثنی نیست. باسکول به عنوان یک پلتفرم
              برای خریداران و فروشندگان عمده فعالیت دارد و اجتماع بزرگی از
              صادرکنندگان میوه و تره بار به سراسر ایران و خارج از کشور را در خود
              جای داده است، اگر شما هم در زمینه فروش عمده میوه و تره بار فعالیت
              دارید، می توانید محصولات خودتان را با بهترین قیمت به فروش برسانید.
            </p>
            <p>
              از طرف دیگر خریداران میتوانند با صدها سالن سورت و بسته بندی میوه و
              تره بار در سراسر ایران به صورت مستقیم و بدون واسطه ارتباط برقرار
              کرده و محصول مورد نظر خود را از نظر کیفیت و قیمت بررسی کنند و سپس
              اقدام به خرید نمایند.
            </p>
            <h2 class="section-title">فروش عمده میوه و تره بار</h2>
            <p>
              در حال حاضر عمده فروشی آنلاین به یکی از راه های مقرون به صرفه برای
              فروش محصولات به حساب می آید. چند سال پیش کمتر کسی می توانست به
              عمده فروشی آنلاین اعتماد کند و معاملات خودش را به صورت آنلاین
              انجام دهد، اما با گذشت زمان و فعالیت کسب و کارهای مختلف در زمینه ی
              عمده فروشی آنلاین، کم کم افراد به دلیل ویژگی ها و مزیت هایی که
              عمده فروشی آنلاین به نسبت معاملات حضوری داشت، استفاده از این خدمات
              افزایش یافت تا جایی که در حال حاضر بخشی از فروش عمده محصولات مختلف
              مانند مواد غذایی و کشاورزی به صورت آنلاین صورت می گیرد.
            </p>
            <p>
              سایت باسکول در چند سال اخیر توانسته است یک اجتماع از فروشندگان و
              خریداران معتبر از سراسر ایران و جهان در خود تشکیل دهد و باعث رونق
              بیشتر عمده فروشی آنلاین شود. بنابراین اگر شما هم در زمینه خرید و
              فروش عمده فعالیت دارید، پیشنهاد میکنم در سایت باسکول ثبت نام کنید
              و از مزایای آن نهایت استفاده را ببرید.
            </p>
            <h2 class="section-title">فروشگاه عمده</h2>
            <p>
              اگر به دنبال کم کردن هزینه های اضافی و جانبی هنگام خرید عمده
              محصولات مختلف هستید، پیشنهاد میکنم از فروشگاه های عمده آنلاین
              مانند باسکول استفاده کنید و امکان دخالت واسطه ها در معاملات را به
              صفر برسانید. فروشگاه عمده باید دارای یک سری ویژگی ها باشد تا
              اعتماد خریدار و فروشنده را جلب کند و زمینه یک معامله ایمن را برای
              آنها فراهم کند. سایت باسکول امکانات متعددی مانند : مقایسه قیمت و
              کیفیت، اعتبارسنجی فروشنده و خریدار، احراز هویت و غیره را در اختیار
              شما قرار داده است تا از هر گونه سوء استفاده احتمالی جلوگیری کند.
            </p>
            <p>
              بنابراین اگر به دنبال یک فروشگاه عمده معتبر برای فروش محصولات خود
              و یا خرید محصولات از فروشنده اصلی هستید، سایت باسکول بهترین گزینه
              برای شما می باشد.
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
                :key="'wholesale-date-item-' + index"
                class="col-xs-6 col-sm-4 col-md-2 pull-right"
              >
                <router-link
                  :to="getSubCategoryUrl(item.link)"
                  v-text="'فروش عمده' + ' ' + item.name"
                ></router-link>
              </h4>
              <!-- end loop  -->

              <!-- loop for wholesale  -->
              <div v-if="mobileCategoryList">
                <div
                  v-for="(category, index) in mobileCategoryList"
                  :key="'wholesale-categories-item-' + index"
                >
                  <h4
                    v-for="(subCategory, subIndex) in category.subcategories"
                    :key="'wholesale-sub-categories-item-' + subIndex"
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
                :key="'wholesale-rise-item-' + index"
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
import MainRegisterRequestForm from "./main_components/main-register-request-form";
import LandingPageBuyAds from "./main_components/landing-page-buyAds";
import ProductGridArticle from "./product_components/landing_page_product_grid_article";
import owlCarousel from "../../../owl.carousel.min.js";
import Route from "../../../router/components/route";

var visible = false;

export default {
  components: {
    Route,
    LandingPageBuyAds,
    MainRegisterRequestForm,
    ProductGridArticle,
  },
  props: [
    "isUserLogin",
    "userType",
    "assets",
    "str",
    "verifiedUserContent",
    "categoryList",
  ],
  data: function () {
    return {
      mainSearchBoxText: "",
      enterKeyActiveForSearch: false,
      lastRequests: "",
      lastProducts: "",
      isLoading: false,
      mobileCategoryList: "",
      isCollapse: false,
      categoryModalList: "",
      showLatestProducts: false,
      footerLinks: {
        wholesaleDate: [
          {
            name: "خرما",
            link: "خرما",
          },
          {
            name: "خرمای مضافتی",
            link: "خرمای-مضافتی",
          },
          {
            name: "خرمای بم",
            link: "خرمای-مضافتی",
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
            link: "خرما-کبکاب",
          },
          {
            name: "خرما خاصویی",
            link: "خرما-خاصویی",
          },
          {
            name: "خرما ربی",
            link: "خرما-ربی",
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
          {
            name: "پسته اکبری",
            link: "پسته-اکبری",
          },
          {
            name: "پسته فندقی",
            link: "پسته-فندقی",
          },
          {
            name: "پسته احمد آقایی",
            link: "پسته-احمد-آقایی",
          },
          {
            name: "پسته کله قوچی",
            link: "پسته-کله-قوچی",
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
            link: "برنج-شمال",
          },
          {
            name: "طارم",
            link: "برنج-طارم",
          },
          {
            name: "دم سیاه",
            link: "برنج",
          },
          {
            name: "هاشمی",
            link: "برنج-هاشمی",
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
      this.setMobileCategories();
      this.productInViewPort();
      this.headerMenuStyles();
      var self = this;
      $("#categories-modal").on("show.bs.modal", (e) => {
        this.handleBackKeys();
      });

      window.scrollTo(0, 0);

      axios.post("/get_sample_products", {}).then(function (response) {
        self.lastProducts = response.data.products;
        self.$nextTick(() => {
          self.productOwlCarouselEnabled();
        });
      });

      axios.post("/get_sample_buyAds", {}).then(function (response) {
        self.lastRequests = response.data.buyAds;
        self.$nextTick(() => {
          self.buyAdsOwlCarouselEnabled();
        });
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
    getMobileImageUrl(index) {
      return this.assets + "assets/img/banners/mobile/banner-" + index + ".jpg";
    },
    imageParallax() {
      var parallax = -0.13;
      var staticHeight = -80;

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
            "50% " + ((dy - ot) * parallax + staticHeight) + "px"
          );
        });
        $bg_image2.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + staticHeight) + "px"
          );
        });
        $bg_image3.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + staticHeight) + "px"
          );
        });
        $bg_image4.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + staticHeight) + "px"
          );
        });
        $bg_image5.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * parallax + staticHeight) + "px"
          );
        });
        $bg_image6.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * 0.1 + staticHeight) + "px"
          );
        });
        $bg_image7.each(function (i, el) {
          var ot = offset_tops[i];
          $(el).css(
            "background-position",
            "50% " + ((dy - ot) * 0.03 + -20) + "px"
          );
        });
      });
    },
    closeModal() {
      $(".modal").modal("hide");
    },
    handleBackKeys: function () {
      if (window.history.state) {
        history.pushState(null, null, window.location);
      }
      $(window).on("popstate", () => {
        this.closeModal();
      });
    },
    openCategoriesModal(categoryname) {
      if (categoryname) {
        for (let i = 0; i < this.categoryList.length; i++) {
          if (this.categoryList[i].category_name == "کشاورزی") {
            this.$parent.modalSubCategory = this.categoryList[i];
            let subCategories = Object.values(
              this.categoryList[i].subcategories
            );
            let subcategoryItems = subCategories.find((item) => {
              return item.category_name == categoryname;
            });
            this.$parent.mainSubCategories = subcategoryItems;
          }
        }
      }
      this.$nextTick(() => {
        $("#categories-modal").modal("show");
      });
    },
    productOwlCarouselEnabled() {
      $(".latest-product .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        loop: false,
        rewind: true,
        nav: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        mouseDrag: true,
        margin: 6,
        dots: true,
        stagePadding: 6,
        rtl: true,
        responsive: {
          0: {
            items: 1,
            navText: false,
            dots: true,
          },
          370: {
            items: 2,
            navText: false,
            dots: true,
          },
          992: {
            items: 3,
          },
        },
      });
    },
    buyAdsOwlCarouselEnabled() {
      $(".last-buyAds-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        nav: true,
        navText: false,
        items: 1,
        mouseDrag: true,
        margin: 3,
        dots: true,
        stagePadding: 3,
      });
    },
    checkIsMobile() {
      let pageWidth = window.outerWidth;
      if (pageWidth <= 991) {
        return true;
      } else {
        return false;
      }
    },
    productInViewPort() {
      $(window).scroll((scroll) => {
        if ($("body").has("#product-section").length) {
          if (
            100 + $(window).scrollTop() + $(window).height() >=
            this.isElementOutViewport($("#product-section"))
          ) {
            this.showLatestProducts = true;
          }
        }
      });
    },
    isElementOutViewport(el) {
      return el.offset().top;
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
    headerMenuStyles() {
      let lvl1 = $(".lvl1-list");
      lvl1
        .mouseenter(() => {
          $(".hero-search-input > input").css("border-bottom-left-radius", "0");
        })
        .mouseleave(() => {
          $(".hero-search-input > input").css(
            "border-bottom-left-radius",
            "12px"
          );
        });
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
    setMobileCategories() {
      let categories = this.categoryList;
      if (categories) {
        let mainCategories = categories.find((item) => {
          return item.category_name == "کشاورزی";
        });
        mainCategories = Object.values(mainCategories.subcategories);
        this.mobileCategoryList = mainCategories;
      }
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
    categoryList(categories) {
      if (categories) {
        this.setMobileCategories();
      }

      this.$nextTick(() => {
        this.headerMenuStyles();
      });
    },
  },
  metaInfo() {
    return {
      title:
        " بازار خرید و فروش عمده محصولات غذایی و کشاورزی ایران بدون واسطه ",
      titleTemplate: "باسکول | %s",
      meta: [
        {
          name: "description",
          content:
            "خرید و فروش عمده مواد غذایی و کشاورزی ایران ☀️☀️☀️ قیمت عمده مواد غذایی و محصولات غذایی و کشاورزی - ارتباط مستقیم با صادرکنندگان خریداران فروشندگان عمده",
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
            "باسکول بازارآنلاین خرید و فروش عمده محصولات غذایی و کشاورزی ایران",
        },
        {
          property: "og:title",
          content: " باسکول | بازار خرید و فروش عمده محصولات غذایی و کشاورزی ",
        },
      ],
    };
  },
};
</script>
