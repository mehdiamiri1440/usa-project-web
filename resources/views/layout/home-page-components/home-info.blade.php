
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
                  @blur="showNavigationMenu"
                  @focus="hideNavigationMenu"
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
                class="col-xs-12 col-sm-6 col-md-4 pull-right"
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
            :to="{ name: 'mainBuyAdRequests' }"
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
              :to="{ name: 'mainBuyAdRequests' }"
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