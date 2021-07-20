<style scoped>
.col-md-4 {
  float: right;
}

/*---------------------------------------
           Footer section
        -----------------------------------------*/

#wrap-footer {
  margin-top: 60px;
  position: relative;
}

#wrap-footer footer {
  background: #000122;
  padding: 30px 0;
}

.footer-bottom {
  background: #000235;
  text-align: center;
  padding: 20px 0;
}

.social-icon a {
  border: 1px solid;
  margin: 7px;
  padding: 0;
}

.footer-bottom p {
  padding-top: 20px;
  display: block;
  color: #fff;
  direction: rtl;
}

footer p {
  text-align: right;
  color: white;
  direction: rtl;
}

footer a {
  direction: rtl;
}

.footer-list {
  text-align: right;
  line-height: 1.618;
}

.footer-list li {
  text-align: right;
  line-height: 1.618;
}

.footer-list a {
  color: #fff;
  padding: 7px 0;
  display: inline-block;
}

.footer-list a:hover {
  color: #00a65a;
}

/* Back top */
.go-top {
  z-index: 1;
  background-color: #ffffff;
  box-shadow: 1px 1.732px 12px 0 rgba(0, 0, 0, 0.14),
    1px 1.732px 3px 0 rgba(0, 0, 0, 0.12);
  transition: all 1s ease;
  bottom: 2em;
  left: 2em;
  color: #333;
  font-size: 24px;
  display: none;
  position: fixed;
  text-decoration: none;
  width: 40px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  border-radius: 100%;
}

.go-top:hover {
  background: #00c569;
  color: #ffffff;
}

/*---------------------------------------
           Social icon
        -----------------------------------------*/

.social-icon {
  position: relative;
  padding: 0;
  margin: 0;
}

.social-icon li {
  display: inline-block;
  list-style: none;
}

.social-icon li a {
  color: #666;
  border-radius: 100px;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
}

.social-icon li a svg {
  max-width: 17px;
  margin-top: 15px;
}

.social-icon li a:hover {
  background: #00c569;
  color: #ffffff;
}

.user-header-mobile {
  display: none;
}

.profile-menu-header {
  padding: 12px;
  float: left;
}

.profile-menu-header > a {
  border-right: 1px solid #00c569;
}

.profile-menu-header a {
  color: #7f8c9b;
  margin: 5px 0;
  position: relative;
  padding: 3px 15px !important;
}

.user-header-mobile a {
  float: left;
  width: 100%;
}

.user-header-mobile .profile-menu-header i {
  top: 5px;
  left: -10px;
}

.profile-menu-header i {
  position: absolute;
  left: -75px;
  top: 5px;
  font-size: 20px;
}

.image-header-profile {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  float: left;
  margin-top: -15px;
}

.image-header-profile img {
  height: 100%;
}

.profile-list {
  position: absolute;
  width: 156px;
  background: #fff;
  padding: 8px 10px;
  border-radius: 3px;
  box-shadow: 0 0 3px #313a43;
  text-align: right;
  left: -12px;
  top: 59px;
  display: none;
  z-index: 999;
}

.profile-list li {
  padding: 5px 0;
}

.profile-list li:last-of-type {
  border-bottom: none;
}

.user-header-web {
  position: relative;
}

img.image-blur {
  transition: 300ms;
}

img.image-blur:hover {
  transform: scale(1.05);
  transition: 300ms;
}

.enamad {
  text-align: center;
}

.enamad img {
  width: 120px;
  text-align: center;
  background: #eceff8;
  padding: 9px;
  border-radius: 5px;
  position: relative;
  top: 0;
  transition: 300ms;
}

.enamad img:hover {
  top: -5px;
  box-shadow: 0 0 30px #000;
}

.vertical-padding {
  padding-top: 10px !important;
}

.footer-note {
  padding: 30px 15px;
  text-align: right;
  color: #f1f1f1;
  line-height: 1.618;
  border-top: 2px solid #000235;
}

#note-text.collapse[aria-expanded="false"] {
  display: block;
  height: 44px !important;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  direction: rtl;
  color: #f1f1f1;
}

#note-text.collapsing[aria-expanded="false"] {
  height: 44px !important;
}

.content-wrapper a.collapsed {
  color: #fff;
}

.content-wrapper a.collapsed:after {
  content: "مشاهده بیشتر +";
}

.content-wrapper a#note-close:not(.collapsed):after {
  content: "بستن -";
}

@media screen and (max-width: 767px) {
  .contact-us {
    border-top: 2px solid #000111;
    padding: 15px;
    margin: 15px 0;
  }
}
</style>

<template>
  <div id="wrap-footer">
    <footer id="footer">
      <div class="container">
        <div class="row">
          <!-- <div class="col-xs-12 col-sm-6 col-md-4 pull-left">
            <ul class="list-unstyled footer-list">
              <li>
                <div class="enamad">
                  <a
                    target="_blank"
                    href="https://trustseal.enamad.ir/?id=129504&amp;Code=I3flHhEiFZPLWVe9vTFK"
                  >
                    <img src="../../../../img/enamad.jpg" alt /> -->
          <!--                                        <img-->
          <!--                                                src="https://Trustseal.eNamad.ir/logo.aspx?id=129504&amp;Code=I3flHhEiFZPLWVe9vTFK"-->
          <!--                                                alt-->
          <!--                                                style="cursor:pointer"-->
          <!--                                                id="I3flHhEiFZPLWVe9vTFK"-->
          <!--                                        />-->
          <!-- </a>
                </div>
              </li>
            </ul>
          </div> -->

          <div class="col-xs-12 col-sm-6 col-md-4">
            <ul class="list-unstyled footer-list">
              <!--   <li>
                                 <router-link
                                   class="smoothScroll"
                                   to="/pricing"
                                   @click="registerComponentStatistics('footer','pricing','click-on-pricing')"
                                 >
                                   ارتقا عضویت
                                 </router-link>
              </li>-->
              <li>
                <router-link class="smoothScroll" to="#"
                  >قیمت روزانه</router-link
                >
              </li>
              <li>
                <router-link
                  class="smoothScroll"
                  to="/privacy-and-policy"
                  @click="
                    registerComponentStatistics(
                      'footer',
                      'privacy-and-policy',
                      'click-on-privacy-policy'
                    )
                  "
                >
                  قوانین و مقررات
                </router-link>
              </li>
              <li>
                <router-link
                  class="smoothScroll"
                  to="/help"
                  @click="
                    registerComponentStatistics(
                      'footer',
                      'help',
                      'click-on-help'
                    )
                  "
                >
                  باسکول چگونه کار می کند؟
                </router-link>
              </li>
              <li>
                <router-link
                  class="smoothScroll"
                  to="/about-us"
                  @click="
                    registerComponentStatistics(
                      'footer',
                      'about-us',
                      'click-on-about-us'
                    )
                  "
                >
                  درباره ما
                </router-link>
              </li>
              <li>
                <router-link
                  class="smoothScroll"
                  to="/contact-us"
                  @click="
                    registerComponentStatistics(
                      'footer',
                      'contact-us',
                      'click-on-contact-us'
                    )
                  "
                >
                  ارتباط با ما
                </router-link>
              </li>
            </ul>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-4 contact-us">
            <p>آدرس</p>
            <p class="vertical-padding">شیراز، خیابان ارم کوچه 15 پلاک 264</p>
            <br />
            <!-- <p>تماس با پشتیبانی باسکول</p>
            <p class="vertical-padding">‌09118413054 / 09178928266</p> -->
          </div>
        </div>
      </div>
      <div class="footer-note">
        <div class="container">
          <div class="content-wrapper">
            <div id="note-text" class="collapse" aria-expanded="false">
              باسکول، بازار عمده خرید و فروش عمده محصولات غذایی و کشاورزی ایران،
              فضایی برای دسترسی مستقیم به تولیدکنندگان عمده محصولات غذایی و
              کشاورزی است. اگر خریدار عمده و صادرکننده هستید می توانید با
              استفاده از خدمات باسکول از قیمت روز محصولات اطلاع پیدا کنید، به
              صورت مستقیم و بدون واسطه با فروشندگان ارتباط بگیرید، سابقه
              فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید.
              باسکول با گردآوری انواع محصولات غذایی و کشاورزی و فروشنده های آن
              امکان مقایسه و بررسی موقعیت های خرید را برای فعالین این حوزه فراهم
              کرده است. در بازار باسکول می توانید محصولات گوناگون را با هم
              مقایسه کرده با ثبت درخواست خرید، بهترین فروشنده و بهترین قیمت عمده
              را از میان هزاران محصول با قیمت های مختلف بیابید. باسکول بازاری
              برای خرید و فروش عمده انواع
              <a
                href="https://www.buskool.com/product-list/category/%D8%A8%D8%B1%D9%86%D8%AC"
                >برنج ایرانی و خارجی</a
              >
              و انواع
              <a
                href="https://www.buskool.com/product-list/category/%D8%AE%D8%B1%D9%85%D8%A7"
                >خرما</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D9%BE%D8%B3%D8%AA%D9%87"
                >پسته</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D8%B2%D8%B9%D9%81%D8%B1%D8%A7%D9%86"
                >زعفران</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%DA%A9%D8%B4%D9%85%D8%B4"
                >کشمش</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D8%A7%D9%86%D8%AC%DB%8C%D8%B1"
                >انجیر خشک</a
              >
              درجه یک صادراتی و همچنین انواع
              <a
                href="https://www.buskool.com/product-list/category/%D8%B3%DB%8C%D8%A8"
                >سیب</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D9%BE%D8%B1%D8%AA%D9%82%D8%A7%D9%84"
                >پرتقال</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D8%A7%D9%86%DA%AF%D9%88%D8%B1-"
                >انگور</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D8%A7%D9%86%D8%A7%D8%B1"
                >انار</a
              >
              و
              <a
                href="https://www.buskool.com/product-list/category/%D9%84%DB%8C%D9%85%D9%88-%D8%AA%D8%B1%D8%B4"
                >لیموترش</a
              >
              درجه یک صادراتی به همراه
              <a
                href="https://www.buskool.com/product-list/category/%DA%AF%D9%88%D8%AC%D9%87"
                >گوجه فرنگی</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D8%B3%DB%8C%D8%A8-%D8%B2%D9%85%DB%8C%D9%86%DB%8C"
                >سیب زمینی</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D9%81%D9%84%D9%81%D9%84-%D8%AF%D9%84%D9%85%D9%87%20%D8%A7%DB%8C"
                >فلفل دلمه ای</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D9%87%D9%88%DB%8C%D8%AC"
                >هویج</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%DA%A9%D9%84%D9%85"
                >کلم</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D8%AE%DB%8C%D8%A7%D8%B1"
                >خیار سبز</a
              >،
              <a
                href="https://www.buskool.com/product-list/category/%D8%B3%DB%8C%D8%B1"
                >سیر</a
              >
              درجه یک صادراتی را از بهترین فروشندگان و کشاورزان فراهم کرده است.
              باسکول مرجع تخصصی خرید و فروش محصولات غذایی و کشاورزی ایران به
              خصوص محصولات صادراتی می باشد و خریدارانی که قصد
              <a
                href="https://blog.buskool.com/%da%86%da%af%d9%88%d9%86%da%af%db%8c-%d9%88-%d9%86%d8%ad%d9%88%d9%87-%d8%b5%d8%a7%d8%af%d8%b1%d8%a7%d8%aa-%da%a9%d8%a7%d9%84%d8%a7/"
                >صادرات کالا</a
              >
              را دارند می توانند با استفاده از بازار باسکول بهترین فروشندگان
              کالای صادراتی ایران را پیدا کنند. باسکول محیطی برای معاملات عمده
              فراهم کرده است تا تولیدکنندگان یکی از دغدغه های اصلی یعنی فروش
              محصولات خود را به راحتی حل کنند. اگر فروشنده هستید می توانند با
              ثبت محصول خود و دسترسی به درخواست های خرید، محصول خود را به راحتی
              به فروش برسانید و مشتریان جدیدی پیدا کنید. با مراجعه به بخش
              درخواست های خرید به صورت روزانه می توانید به صورت مستقیم با خریدار
              عمده ارتباط داشته باشید و با اطلاع از بازار با قیمت و شرایط بهتر
              محصول خود را به فروش برسانید. به راحتی فضای کاری خود را به دنیای
              دیجیتال گسترش دهید تا همه با برند و نام شما آشنا شوند و محصولات
              خود را به خریداران در سراسر ایران معرفی کنید.
            </div>
            <a
              role="button"
              class="collapsed"
              id="note-close"
              data-toggle="collapse"
              href="#note-text"
              aria-expanded="false"
              aria-controls="collapseExample"
            ></a>
          </div>
        </div>
      </div>
    </footer>

    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <ul class="social-icon">
              <li>
                <a
                  href="https://www.instagram.com/buskool.ir/"
                  class="footer-icon instagram"
                  @click="
                    registerComponentStatistics(
                      'footer',
                      'instagram',
                      'click-on-instagram'
                    )
                  "
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    class="svg-inline--fa fa-instagram fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#fff"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://t.me/buskool"
                  class="footer-icon telegram"
                  @click="
                    registerComponentStatistics(
                      'footer',
                      'telegram',
                      'click-on-telegram'
                    )
                  "
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="telegram"
                    class="svg-inline--fa fa-telegram fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="#fff"
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/27058131/ "
                  class="footer-icon linkedin"
                  @click="
                    registerComponentStatistics(
                      'footer',
                      'linked-in',
                      'click-on-linked-in'
                    )
                  "
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin"
                    class="svg-inline--fa fa-linkedin fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#fff"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com/buskool_BS"
                  class="footer-icon twitter"
                  @click="
                    registerComponentStatistics(
                      'footer',
                      'twitter',
                      'click-on-twitter'
                    )
                  "
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    class="svg-inline--fa fa-twitter fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fff"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/buskool1/"
                  class="footer-icon facebook"
                  @click="
                    registerComponentStatistics(
                      'footer',
                      'facebook',
                      'click-on-facebook'
                    )
                  "
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-square"
                    class="svg-inline--fa fa-facebook-square fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#fff"
                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-xs-12 col-sm-6">
            <p class="wow copy-right">
              تمام حقوق مادی و معنوی سایت متعلق به باسکول است.
            </p>
          </div>
        </div>
      </div>
    </div>

    <a href="#back-top" class="go-top">
      <i class="fa fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
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
  },
};
</script>
