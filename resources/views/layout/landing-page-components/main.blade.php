<div>
 

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
          <div class="col-xs-12 pull-left col-md-9">
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

              <a :to="{ name: 'productList' }" class="green-button"
                >شروع خرید و فروش عمده
                <i class="fa fa-angle-left"></i>
              </a>
            </div>
          </div>
          <div class="col-xs-12 hidden-xs hidden-sm col-md-3">
            <div class="web-category-wrapper">
              <div class="section-title">دسته بندی ها</div>
              <ul  id="web-categories">
                <li
                >
                  <ul class="sub-categories-wrapper" :data-index="index">
                    <li
                      class="col-md-3 pull-right"
                    >
                      <a
                      class="sub-category-item"
                      >
                    سیب
                    </a>
                    </li>
                    <li
                      class="col-md-3 pull-right"
                    >
                      <a
                      class="sub-category-item"
                      >
                    خیار
                    </a>
                    </li>
                    <li
                      class="col-md-3 pull-right"
                    >
                      <a
                      class="sub-category-item"
                      >
                    هویج
                    </a>
                    </li>
                  </ul>
                  <button>
                    <span >
                      میوه
                    </span>

                    <i class="fa fa-angle-left"></i>
                  </button>
                </li>
                <li
                >
                  <ul class="sub-categories-wrapper" :data-index="index">
                    <li
                      class="col-md-3 pull-right"
                    >
                      <a
                      class="sub-category-item"
                      >
                    سیب
                    </a>
                    </li>
                    <li
                      class="col-md-3 pull-right"
                    >
                      <a
                      class="sub-category-item"
                      >
                    خیار
                    </a>
                    </li>
                    <li
                      class="col-md-3 pull-right"
                    >
                      <a
                      class="sub-category-item"
                      >
                    هویج
                    </a>
                    </li>
                  </ul>
                  <button>
                    <span >
                      صیفی
                    </span>

                    <i class="fa fa-angle-left"></i>
                  </button>
                </li>
              </ul>
              <button
                class="load-more-categories"
              >
                <span>دسته های بیشتر</span>
                <i
                  class="fa fa-angle-down"
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
      <div class="web-banner-wrapper hidden-xs hidden-sm col-xs-12">
        <div class="row">
          <div class="banner-item-wrapper">
            <div class="pull-right col-xs-3">
              <button
                id="banner-item-1"
                class="banner-item"
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
          <div class="col-xs-12 pull-left col-md-9">
            <div class="section-title">آخرین محصولات ثبت شده</div>

            <div class="col-xs-12 products-contents">
              <div v-if="lastProducts" class="row">
                <?php 
                for ($i=0; $i < 8; $i++) { 
                  
                ?>
                <div
                class="col-xs-6 grid-list col-sm-4 col-md-3 pull-right <?php echo $i > 1 ? 'hidden-xs' : '' ?> "
                >
                
                    {{-- @if($product['user_info']->active_pakage_type == 3) --}}
                      <article
                        class="main-content-item is-user-valid"
                      >
                    {{-- @else --}}
                      {{-- <article
                        class="main-content-item "
                      > --}}
                    {{-- @endif --}}
  
                      {{-- @if($product['user_info']->active_pakage_type != 3) --}}
                      {{-- <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product['main']->sub_category_name) .'/' . str_replace(' ', '-', $product['main']->category_name) . '/' .   $product['main']->id  }}"
                        class="main-article-contents-wrapper pointer-class "
                      > --}}
                      {{-- @else --}}
                      {{-- <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product['main']->sub_category_name) .'/' . str_replace(' ', '-', $product['main']->category_name) . '/' .   $product['main']->id  }}" --}}
                      <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-خرما')  }}"
                      class="main-article-contents-wrapper pointer-class is-user-valid-content"
                      >
                      {{-- @endif --}}
                      <div class="main-article-contents-image-wrapper" >
                      
                        <div class="main-article-image">
                          <div class="image" >
                            {{-- <img src="{{url('/storage') . '/thumbnails/' . $product['photos'][0]->file_path}}"  alt=" {{$product['main']->category_name . ' | ' . $product['main']->sub_category_name . ' ' .  $product['main']->product_name }}" /> --}}
                            </div>
                            <div  class="image-count-item">
                            <i class="fas fa-images"></i>
                            <span >
                              {{-- {{$product['main']->photos_count}} --}}
                              5
                            </span>
                            </div>
                        </div>
                        <h3 class="article-title grid-list-title">
                         <p>
                          {{-- {{$product['main']->category_name . ' | ' . $product['main']->sub_category_name  }} --}}
                          خرما | مضافتی
                          <span>
                            {{-- {{$product['main']->product_name}} --}}
                          </span>
                         </p>
                        </h3>
                        {{-- @if($product['user_info']->active_pakage_type == 3) --}}
                              <div
                                class="valid-user-badge"
                              >
                                <div class="wrapper-icon">
                                <svg width="24.965" height="30.574" viewBox="0 0 24.965 30.574">
                                    <g
                                    id="buskool-icon"
                                    data-name="buskool"
                                    transform="translate(-273.1 -715.025)"
                                    >
                                    <path
                                        id="Subtraction_1"
                                        data-name="Subtraction 1"
                                        d="M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z"
                                        transform="translate(2237.1 709.808)"
                                        fill="#fff"
                                    />
                                    <g id="Group_24" data-name="Group 24">
                                        <path
                                        id="Rectangle_12"
                                        data-name="Rectangle 12"
                                        d="M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
                                        transform="translate(282.389 717.5) rotate(45)"
                                        fill="#fff"
                                        />
                                        <path
                                        id="Rectangle_13"
                                        data-name="Rectangle 13"
                                        d="M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z"
                                        transform="translate(294.935 718.561) rotate(135)"
                                        fill="#fff"
                                        />
                                    </g>
                                    </g>
                                </svg>
                                </div>
                              </div>
                            {{-- @endif --}}
                      </div>
                          {{-- <a href="{{'/profile/' . $product['user_info']->user_name}}" class="user-information-link"> --}}
                          <a href="#" class="user-information-link">
                              
                            
                              <div
                                class="user-information-content"
                              >
                              <a
                              class="user-name-link"
                              {{-- href="{{'/profile/' . $product['user_info']->user_name}}" --}}
                              href="#"
                            >
                            <i class="fa fa-user-circle"></i>
                              {{-- {{$product['user_info']->first_name . ' ' . $product['user_info']->last_name}} --}}
                              محمدامین دلداری
                              </a>
                              {{-- @if($product['user_info']->is_verified) 
                              <button
                                  class="verified-user"
                                  data-container="body"
                                  data-toggle="popover"
                                  data-placement="bottom"
                                >
                                  <i class="fa fa-certificate"></i>
                                </button>
                                @endif --}}
                              {{-- @if( $product['user_info']->response_rate) --}}
                              <div class="response-rate-wrapper pull-left">
                                <button
                                  data-toggle="tooltip"
                                  data-placement="right"
                                  title="احتمال پاسخ گویی"
                                  class="response-rate"
                                >
                                  <i class="fa fa-exchange-alt"></i>
                                  {{-- {{ $product['user_info']->response_rate }} --}}
                                  85%
                                </button>
                              </div>
                              {{-- @endif --}}
                            </div>
                          </a>
                          <div class="main-article-contents" >
                            
                            <div>
                              <p>
                                <i class="fa fa-map-marker-alt"></i>
  
                                <span
                                >
                                فارس - شیراز
                                {{-- {{$product['main']->province_name . ' - ' . $product['main']->city_name  }} --}}
                              </span>
                                </p>
                                <p>
                                 <i class="fa fa-box-open"></i>
                                <span >
                                  500
                                  {{-- @php 
                                  $stock = $product['main']->stock;
  
                                  if($stock > 1000){
                                    $stock = $stock / 1000 . ' تن';
                                  }else{
                                    $stock = $stock . ' کیلوگرم';
                                  }
  
                                  @endphp
   --}}
                                  {{-- {{ $stock }} --}}
                                  </span>
                                </p>
                            </div>
                        </div>
                        {{-- @if($product['main']->is_elevated)
                        <div
                            class="article-features pull-left"
                          >
                            <button
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="نردبان اعمال شده است"
                              class="elevator-event active disable"
                            >
                              <i class="fas fa-chart-line"></i>
                            </button>
                          </div>
                        @endif --}}
                      </a>
  
                    </article>
                </div>
                <?php 
              }
              ?>
              </div>
             
            </div>
            
          </div>

          <div class="col-xs-12 col-md-3 pull-right">
            <div  class="title-box">
              <div class="section-title">ثبت نام خریداران</div>
              <p>
                برای استعلام قیمت و خرید محصولات کشاورزی از بهترین فروشندگان
                عمده هم اکنون ثبت نام کنید
              </p>

              <a class="green-button" :to="{ name: 'register' }"
                >ثبت نام رایگان
                <i class="fa fa-angle-left"></i>
              </a>
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
      class="section-wrapper container-fluid "
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 pull-left col-md-9">
            <div class="section-title">آخرین درخواست های خرید</div>

            <div
                class="col-xs-12 col-sm-6 col-md-4"
              >
              <div class="buyAd-wrapper-item col-xs-12">
                <div class="list-title list-name col-xs-12">
                  <div class="user-information-wrapper">
                    <div class="user-information-content">
                      <div class="user-content">
                        <i class="fa fa-user-circle"></i>
                        <span
                          class="user-name-link"
                        >
                        محمدامین دلداری
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="buyer-text">
                    <div>
                      <span> خریدار </span>
                      <span
                        class="red-text"
                      >
                      ۵۰۰ تن
                    </span>
                      <span class="brand-text">
                        گوجه
                      </span>
                      <span v-if="buyAd.name"> از نوع </span>
                      <span class="brand-text">
                        صادراتی
                      </span>
            
                      <span> هستم </span>
                    </div>
                  </div>
                </div>
            
                <p class="list-time" >
                  ۱۹ اردیبهشت، ۱۳۹۹
                </p>
              </div>
              </div>
          </div>

          <div class="col-xs-12 col-md-3 pull-right">
            <div  class="title-box">
              <div class="section-title">ثبت نام فروشندگان</div>
              <p>
                برای فروش بدون واسطه محصولات کشاورزی خود به خریداران مستقیم و
                صادرکنندگان هم اکنون ثبت نام کنید
              </p>
              <a
                v-if="!isUserLogin"
                class="green-button"
                :to="{ name: 'register' }"
                >ثبت نام رایگان <i class="fa fa-angle-left"></i
              ></a>
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
              <div class="col-xs-12 col-md-4 hidden-md hidden-lg">
                <article class="service-box main-incobac-logo">
                  <a :to="{ name: 'help' }">
                    <div class="box-image">
                      <img src="{{asset('assets/img/logo/web-logo.svg')}}" />
                    </div>
                    <h4>باسکول چیست؟</h4>
                    <p>
                      باسکول بازار خرید و فروش عمده محصولات کشاورزی
                      <br />است که خریداران را به فروشندگان عمده متصل کرده
                      <br />و خریداران و فروشندگان بدون واسطه می توانند با
                      یکدیگر ارتباط برقرار کنند
                    </p>
                  </a>
                </article>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
                <article class="service-box">
                  <a :to="{ name: 'help' }">
                    <div class="box-image">
                      <img src="{{asset('assets/img/seller.jpg')}}" />
                    </div>
                    <h4>خدمات فروشندگان</h4>

                    <p>
                      معرفی محصولات به خریداران عمده
                      <br />دسترسی به درخواست های خرید روزانه <br />گسترش شبکه ی
                      تجاری و مشتریان <br />فروش بدون واسطه و مقرون به صرفه
                      <br />
                    </p>
                  </a>
                </article>
              </div>
              <div
                class="col-xs-12 col-sm-6 col-md-4 pull-right hidden-xs hidden-sm"
              >
                <article class="service-box main-incobac-logo">
                  <a :to="{ name: 'help' }">
                    <div class="box-image">
                      <img src="{{asset('assets/img/logo/web-logo.svg')}}" />
                    </div>
                    <h4>باسکول چیست؟</h4>
                    <p>
                      باسکول بازار خرید و فروش عمده محصولات کشاورزی
                      <br />است که خریداران را به فروشندگان عمده متصل کرده
                      <br />و خریداران و فروشندگان بدون واسطه می توانند با
                      یکدیگر ارتباط برقرار کنند
                    </p>
                  </a>
                </article>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
                <article class="service-box">
                  <a :to="{ name: 'help' }">
                    <div class="box-image">
                      <img src="{{asset('assets/img/seller.jpg')}}" />
                    </div>
                    <h4>خدمات خریداران</h4>

                    <p>
                      استعلام قیمت از فروشندگان و کشاورزان
                      <br />دسترسی بدون واسطه به فروشندگان متنوع <br />صرفه جویی
                      در زمان و هزینه خرید محصول <br />گسترش شبکه تامین کنندگان
                      <br />
                    </p>
                  </a>
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
    >
    <div class="section-wrapper col-xs-12">
      <div class="row">
        <div
          class="text-right col-xs-12 form-contents-wrapper"
        >
          <div class="form-wrapper">
            <div class="section-title">ثبت درخواست خرید</div>
  
            <div class="form-contents col-xs-12">
              <div class="row">
                <div class="col-xs-12 col-md-6 pull-right">
                  <h2 class="title-contents col-xs-12">
                    دسته بندی محصول
                    <span class="red-text"> * </span>
                  </h2>
                  <label for="category" class="description"> مثلا: میوه </label>
  
                  <div class="input-wrapper select-items">
                    <select
                      id="category"
                    >
                      <option value="" selected disabled>انتخاب دسته بندی</option>
                    </select>
                  </div>
                </div>
  
                <div class="col-xs-12 col-md-6">
                  <h2 class="title-contents col-xs-12">
                    نام محصول
  
                    <span class="red-text"> * </span>
                  </h2>
                  <label for="sub-category" class="description">
                    مثلا: خرما
                  </label>
  
                  <div class="input-wrapper select-items">
                    <select
                      id="sub-category"
                    >
                      <option value="" disabled selected>
                        انتخاب زیر دسته بندی
                      </option>
                    </select>
                  </div>
                </div>
  
                <div class="col-xs-12 col-md-6 pull-right">
                  <h2 class="title-contents col-xs-12">
                    نوع
                    <span
                      class="light-green-text"
                    >
                    محصول
                    </span>
                    مورد نیاز خود را وارد کنید.
                  </h2>
                  <label for="product-type" class="description">
                    <span > مثلا: مضافتی</span>
                  </label>
                  <div class="text-input-wrapper">
                    <input
                      id="product-type"
                      type="text"
                      placeholder="نوع محصول مورد نیاز خود را وارد کنید"
                      pattern="[0-9]*"
                    />
                  </div>
                </div>
  
                <div class="col-xs-12 col-md-6">
                  <h2 class="title-contents col-xs-12">
                    میزان نیازمندی
  
                    <span class="small-label">(کیلوگرم)</span>
  
                    <span class="red-text"> * </span>
                  </h2>
                  <label for="requirement_amount" class="description">
                    مثلا: 50,000
                  </label>
  
                  <div class="text-input-wrapper">
                    <input
                      id="requirement_amount"
                      type="tel"
                      placeholder="میزان نیازمندی را وارد کنید"
                      pattern="[0-9]*"
                    />
                  </div>
  
                </div>
              </div>
  
              <div class="submit-button-wrapper col-xs-12">
                <div class="row">
                  <button
                    class="submit-button disabled"
                  >
                    ثبت درخواست
                    <i class="fa fa-check"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            <h2 class="section-title">فروش عمده محصولات کشاورزی</h2>
            <p>
              فروش عمده محصولات کشاورزی به صورت مستقیم و بدون واسطه باعث می شود
              هر دو طرف معامله، یعنی فروشنده و خریدار سود بیشتری کسب کنند، در
              واقع در این حالت نیازی به پرداخت هزینه به واسطه های متعدد نیست و
              شما میتوانید محصول کشاورزی را با قیمت واقعی خریداری کنید که این
              موضوع در خصوص اقلام کشاورزی نیز صدق می کند و فروشنده یا کشاورز می
              تواند سود بیشتری از فروش محصولات خودش به دست آورد.
            </p>
            <p>
              سایت باسکول این امکان را در اختیار شما قرار داده است که بعد از ثبت
              نام و قرار دادن کالا در سایت، محصول خودتان را با قیمت واقعی و بدون
              دخالت هیچ واسطه ای به فروش برسانید.
            </p>
            <h2 class="section-title">قیمت عمده محصولات کشاورزی</h2>
            <p>
              محصولات کشاورزی به نسبت کیفیت، نوسانات ارز، بسته بندی، نوع محصول و
              نحوه تحویل به صورت فله و بسته بندی، دارای قیمت های بسیار مختلفی می
              باشند و این امکان وجود ندارد که قیمت محصولات کشاورزی به صورت ثابت
              در یک بازه زمانی بماند. بنابراین بهترین راه برای به دست آوردن قیمت
              عمده محصولات کشاورزی برقراری ارتباط با فروشندگان عمده است. در حال
              حاضر هزاران فروشنده محصولات غذایی در سایت باسکول فعالیت دارند که
              شما می توانید برای اطلاع از قیمت عمده انواع محصولات کشاورزی به
              صورت دقیق و به روز، با آنها به صورت مستقیم ارتباط برقرار کرده و از
              آنها استعلام قیمت بگیرید.
            </p>
            <h2 class="section-title">بازار کشاورزی</h2>
            <p>
              همانطور که میدانید بخش کشاورزی یکی مهمترین بخش های تامین نیازهای
              افراد است که شامل بسیاری از مواد غذایی می باشد. در چند سال اخیر
              توجه بسیار زیادی به بازار کشاورزی آنلاین شده است تا جایی که عمده
              خرید و فروش های محصولات کشاورزی به صورت آنلاین صورت می گیرد. در
              حال حاضر پلتفرم های بسیار زیادی در زمینه بازار کشاورزی فعالیت
              دارند و باعث رونق بیشتر بازار خرید و فروش محصولات کشاورزی در جهان
              شده اند.
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
              کند، عدم دسترسی به فروشندگان و خریداران عمده محصولات کشاورزی باعث
              شده است که بازار خرید آن ها رو به رکود برود و زمینه فعالیت واسطه
              ها را تا حد زیادی گسترش داده است. هدف باسکول این است که یک ارتباط
              مستقیم و بدون واسطه را بین خریدار عمده با فروشنده اصلی ایجاد کند
              تا هر دو طرف، محصول را با قیمت اصلی معامله کنند.
            </p>
            <p>
              در حال حاضر باسکول به عنوان بازارگاه کشاورزی آنلاین، هزاران کشاورز
              یا فروشنده عمده محصولات کشاورزی را در خود جای داده است و شما
              میتوانید به راحتی و با چند کلیک با آنها ارتباط برقرار کنید، در
              صورتی که خود شما فروشنده هستید پیشنهاد می کنیم در سایت باسکول ثبت
              نام کنید و از خدمات متنوع باسکول همچون اطلاع از آخرین درخواست های
              خرید و ارتباط با هزاران خریدار از سراسر کشور برخوردار شوید.
            </p>
            <h2 class="section-title">فروش مستقیم محصولات کشاورزی</h2>
            <p>
              در سال های گذشته فروش مستقیم محصولات کشاورزی برای همه افراد وجود
              نداشت و واسطه گری افراد باعث می شد که کشاورز محصول خود را با هزینه
              کمتر به فروش برساند و از طرف دیگر خریدار قیمت بیشتری برای آن
              پرداخت کند. در حال حاضر سایت ها و پلتفرم هایی وجود دارند که به شما
              امکان فروش مستقیم محصولات کشاورزی را می دهند. سایت باسکول با هدف
              ارتباط دادن تولید کننده اصلی محصولات کشاورزی با خریدار، سعی در
              کاهش هزینه های هر دو طرف دارد و باعث می شود در زمان و هزینه خریدار
              و فروشنده صرفه جویی شود.
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

              <?php 

                $rice_names = array(
                  "برنج",
                  "خاطره",
                  "هندی طبیعت",
                  "محسن",
                  "پاکستانی",
                  "طبیعت",
                  "قهوه ای",
                  "شمال",
                  "طارم",
                  "دم سیاه",
                  "هاشمی",
                  "صدری",
                );
                $products_names = array(
                  "خرما",
                  "خرمای مضافتی",
                  "خرمای بم",
                  "خرمای زاهدی",
                  "خرمای بوشهر",
                  "خرمای کبکاب",
                  "خرمای خوزستان",
                  "خرما در مشهد",
                  "خرما در بوشهر",
                  "خرمای مجول",
                  "کشمش",
                  "پسته",
                  "انجیر خشک استهبان",
                  "زعفران",
                );

                foreach ($products_names as $product) {
                ?>


              <h4
                class="col-xs-6 col-sm-4 col-md-2 pull-right"
              >
                  <a
                    :to="getSubCategoryUrl(item.link)"
                  >
                  <?php echo ' فروش عمده ' . $product ?>
                </a>
              </h4>

              <?php 
              }
              ?>
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
                  <a
                    :to="getSubCategoryUrl(subCategory.category_name)"
                    v-text="'فروش عمده' + ' ' + subCategory.category_name"
                  ></a>
                </h4>
              </div>
              <!-- end loop  -->

              <!-- loop for wholesale rice -->
              <?php
              foreach ($rice_names as $product) {
                ?>
                <h4
                  class="col-xs-6 col-sm-4 col-md-2 pull-right"
                >
                    <a
                      :to="getSubCategoryUrl(item.link)"
                    >
                    <?php echo ' فروش عمده ' . $product ?>
                  </a>
                </h4>

              <?php 
                }
              ?>

              <!-- end loop  -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>