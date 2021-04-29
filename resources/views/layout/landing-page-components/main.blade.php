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
      class="section-wrapper container-fluid hidden-xs"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 pull-left col-md-9">
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
                    <a
                      class="green-button"
                      :to="{ name: 'buyAdRequestsSeller' }"
                    >
                      همه درخواست های خرید
                      <i class="fa fa-arrow-left"></i>
                    </a>
                  </li>
                </ul>

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
              <ul class="list-unstyled wrapper-items">
                <li >
                    <div
                      class="buyAd-wrapper-item col-xs-12"
                      :class="{
                        golden: buyAd.is_golden,
                        lock:
                          buyAd.is_golden &&
                          currentUser.user_info.active_pakage_type == 0,
                      }"
                    >
                      <span
                        v-if="
                          buyAd.is_golden &&
                          currentUser.user_info.active_pakage_type == 0
                        "
                        class="lock-text"
                      >
                        <span> خریدار </span>
                        <span
                          class="brand-text"
                          v-text="buyAd.subcategory_name"
                        ></span>
                        <span> هستم </span>
                      </span>
                      <div class="list-title list-name col-sm-5 col-xs-12">
                        <div class="user-information-wrapper">
                          <div class="user-information-content">
                            <div class="user-content">
                              <i class="fa fa-user-circle"></i>
                              <span
                                class="user-name-link"
                                v-text="buyAd.first_name + ' ' + buyAd.last_name"
                              >
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="buyer-text">
                          <div>
                            <span> خریدار </span>
                            <span
                              class="red-text"
                              v-if="
                                buyAd.is_golden &&
                                currentUser.user_info.active_pakage_type == 0
                              "
                              v-text="'0000'"
                            ></span>
                            <span
                              class="red-text"
                              v-else
                              v-text="getConvertedNumbers(buyAd.requirement_amount)"
                            ></span>
    
                            <span
                              class="brand-text"
                              v-text="buyAd.subcategory_name"
                            ></span>
                            <span v-if="buyAd.name"> از نوع </span>
                            <span
                              class="brand-text"
                              v-if="buyAd.name"
                              v-text="buyAd.name"
                            ></span>
    
                            <span> هستم </span>
                          </div>
                        </div>
                      </div>
                      <p
                        v-if="buyAd.reply_capacity > 0"
                        class="list-notice col-sm-1 col-xs-6 pull-right"
                      >
                        <button
                          v-if="
                            buyAd.is_golden &&
                            currentUser.user_info.active_pakage_type == 0
                          "
                          class="btn"
                          type="button"
                        >
                          <span class="gray-text">
                            <i class="fas fa-comment-alt"></i>
                            <i class="fas fa-exclamation"></i>
                          </span>
                          <span class="request-count">{{ "0+" }}</span>
                        </button>
                        <button
                        v-else
                          class="btn"
                          type="button"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="ظرفیت باقی مانده برای ارسال پیام به خریدار این محصول"
                        >
                          <span class="gray-text">
                            <i class="fas fa-comment-alt"></i>
                            <i class="fas fa-exclamation"></i>
                          </span>
                          <span class="request-count">{{
                            buyAd.reply_capacity + "+"
                          }}</span>
                        </button>
                      </p>
                      <p
                        class="list-time"
                        :class="[
                          buyAd.reply_capacity > 0
                            ? 'col-sm-2 col-xs-6'
                            : 'col-sm-3 col-xs-12',
                        ]"
                        v-if="
                          buyAd.is_golden &&
                          currentUser.user_info.active_pakage_type == 0
                        "
                        v-text="'۱۳ تیر , ۱۳۰۴'"
                      ></p>
                      <p
                        class="list-time"
                        :class="[
                          buyAd.reply_capacity
                            ? 'col-sm-2 col-xs-6'
                            : 'col-sm-3 col-xs-12 text-center',
                        ]"
                        v-else
                        v-text="buyAd.register_date"
                      ></p>
    
                      <div
                        v-if="buyAd.has_phone"
                        class="col-sm-4 col-xs-12 pull-left"
                      >
                        <div class="buyAd-phone-buttons-wrapper">
                          <button
                            v-if="
                              buyAd.is_golden &&
                              currentUser.user_info.active_pakage_type == 0
                            "
                            class="detail-success hover-effect phone-button"
                            :id="'loader-phone-' + buyAd.id"
                            @click.prevent="openGoldenChatRestrictionModal()"
                          >
                            <span>
                              <span class="fas fa-phone-square-alt"></span>
                              اطلاعات تماس
                            </span>
                            <span class="hide-reply text-rtl">
                              کمی صبر کنید...
                            </span>
                          </button>
                          <button
                            v-else
                            class="detail-success hover-effect phone-button"
                            @click.prevent="
                              activePhoneCall(buyAd.myuser_id, buyAd.id)
                            "
                            :id="'loader-phone-' + buyAd.id"
                          >
                            <span>
                              <span class="fas fa-phone-square-alt"></span>
                              اطلاعات تماس
                            </span>
                            <span class="hide-reply text-rtl">
                              کمی صبر کنید...
                            </span>
                          </button>
                          <button
                            class="detail-success send-message-button hover-effect"
                            @click.prevent="openGoldenChatRestrictionModal()"
                            :id="'loader-chat-' + buyAd.id"
                            v-if="
                              buyAd.is_golden &&
                              currentUser.user_info.active_pakage_type == 0 &&
                              buyAd.has_msg
                            "
                          >
                            <span>
                              <span class="fas fa-comment-alt"></span>
                              چت با خریدار
                            </span>
                            <span class="hide-reply text-rtl">
                              کمی صبر کنید...
                            </span>
                          </button>
                          <button
                            class="detail-success send-message-button hover-effect"
                            @click.prevent="openChat(buyAd)"
                            :id="'loader-chat-' + buyAd.id"
                            v-else-if="buyAd.has_msg"
                          >
                            <span>
                              <span class="fas fa-comment-alt"></span>
                              چت با خریدار
                            </span>
                            <span class="hide-reply text-rtl">
                              کمی صبر کنید...
                            </span>
                          </button>
                        </div>
                        <div
                          :id="buyAd.id + '-phone-number-wrapper'"
                          class="phone-number-wrapper collapse"
                        >
                          <a class="phone-number">
                            <p>
                              <i class="fa fa-phone-square-alt"></i>
                              <span class="phone"></span>
                            </p>
                            <p>شماره تماس</p>
                          </a>
                          <div class="warning-wrapper">
                            <p class="warning-title">
                              <i class="fa fa-exclamation-circle"></i>
    
                              توصیه باسکول
                            </p>
                            <p class="warning-text">
                              توصیه باسکول همواره به انجام معاملات حضوری است.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div v-else class="col-sm-4 col-xs-12 pull-left">
                        <button
                          v-if="
                            buyAd.is_golden &&
                            currentUser.user_info.active_pakage_type == 0
                          "
                          class="detail-success hover-effect"
                          @click.prevent="openGoldenChatRestrictionModal()"
                        >
                          <span :id="'loader-chat-' + buyAd.id">
                            <span>
                              <span class="fas fa-comment-alt"></span>
    
                              چت با خریدار
                            </span>
                            <span class="hide-reply text-rtl">
                              کمی صبر کنید...
                            </span>
                          </span>
                        </button>
                        <button
                          v-else
                          href
                          class="detail-success hover-effect"
                          @click.prevent="openChat(buyAd)"
                        >
                          <span :id="'loader-chat-' + buyAd.id">
                            <span>
                              <span class="fas fa-comment-alt"></span>
    
                              چت با خریدار
                            </span>
                            <span class="hide-reply text-rtl">
                              کمی صبر کنید...
                            </span>
                          </span>
                        </button>
                      </div>
                    </div>
                </li>
              </ul>
            </div>
            <div
              class="text-center text-rtl"
              v-if="!isUserLogin || userType == 1"
            >
              <a
                class="mobile-requests-buttons green-button"
                :to="{ name: 'buyAdRequestsSeller' }"
              >
                همه درخواست های خرید
                <i class="fa fa-arrow-left"></i>
              </a>
            </div>
          </div>

        </div>

        <div class="container">

          <div class="title-box">
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