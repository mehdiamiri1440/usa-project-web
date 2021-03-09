{{-- <div
      class="flat-plust-icon hidden-lg hidden-md"
    >
      <a href="#" >
        <i class="fa fa-exclamation"></i>
      </a>
    </div>

      <button
        class="guide-button hidden-sm hidden-xs"
      >
        راهنما
      </button> --}}


    <div
      class="sub-header-fix sub-header hidden-lg hidden-md hidden-sm container-fluid"
    >
      <div class="search-box col-sm-8 col-xs-12 col-lg-5 pull-right">
        <input
          type="text"
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
      <div class="col-xs-12 pull-left col-lg-9">
        <div class="row">
          {{-- <section class="hidden-xs col-xs-12">
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
          </section> --}}

          <section class="main-content col-xs-12" >
            <div id="article-list" class="row">
              <div >
                <div
                  class="col-xs-12"
            
                >

                @for ($i = 0; $i < 7; $i++)

                    <article
                    class="main-content-item"
                    :class="{ 'is-user-valid': product.user_info.active_pakage_type == 3 }"
                  >
                    <!--article modal-->
                
                
                    <!--end article modal-->
                
                    <div class="user-information-wrapper row">
                        <div class="user-information-contents">
                          <a href="'/profile/' + user_name" class="user-information-link">
                            <div class="user-information-content-image">
                              <div class="user-image" v-else>
                                <img
                                  src="../../../../../../img/user-defult.png"
                                  class="image_defult"
                                />
                              </div>
                            </div>
                    
                            {{-- <div
                              v-if="user_info.response_rate && user_info.response_rate != '0'"
                              class="user-information-content"
                            >
                              <router-link
                                class="user-name-link"
                                :to="'/profile/' + user_name"
                                v-if="user_info"
                              >
                              user_full_name
                                <button
                                  v-if="user_info.is_verified"
                                  @click.prevent
                                  class="verified-user"
                                  data-container="body"
                                  data-toggle="popover"
                                  data-placement="bottom"
                                  :data-content="$parent.verifiedUserContent"
                                  title
                                >
                                  <i v-if="user_info.is_verified" class="fa fa-certificate"></i>
                                </button>
                              </router-link>
                    
                              <p v-if="user_info" class="response-rate">
                                احتمال پاسخ گویی
                                <span v-text="'%' + user_info.response_rate"></span>
                              </p>
                            </div> --}}
                    
                            <div v-else class="user-information-content default">
                              <a
                                class="user-name-link"
                                href="#"
                                v-if="user_info"
                              >
                              محمدامین دلداری
                                <button
                                  v-if="user_info.is_verified"
                                  @click.prevent
                                  class="verified-user"
                                  data-container="body"
                                  data-toggle="popover"
                                  data-placement="bottom"
                                  :data-content="$parent.verifiedUserContent"
                                  title
                                >
                                  <i class="fa fa-certificate"></i>
                                </button>
                              </a>
                            </div>
                          </a>
                    
                          <a
                            v-if="!is_my_profile_status"
                            href="#"
                            :class="{
                              default: !user_info.response_rate || user_info.response_rate == '0',
                            }"
                            @click="
                              registerComponentStatistics(
                                'product',
                                'showUserProfile',
                                'show profile'
                              )
                            "
                            class="user-action-link green-text"
                            >مشاهده پروفایل</a
                          >
                      
                        </div>
                        <div class="article-action-buttons">
                          <button
                            v-if="!is_my_profile_status"
                            @click.prevent="$parent.openChat($parent.product)"
                            class="green-button"
                          >
                            <i class="fa fa-envelope"></i>
                            استعلام قیمت
                          </button>
                        </div>
                      </div>
                
                    <div
                        class="main-article-contents-wrapper pointer-class"
                        :class="{
                        'is-user-valid-content':
                            $parent.product.user_info.active_pakage_type != 3,
                        }"
                    >
                        <div class="main-article-contents-image-wrapper" @click="setScroll()">
                    
                            <div class="main-article-image">
                                <router-link v-show="isImageLoad" :to="productUrl">
                                <img :src="base + 'thumbnails/' +  img" @load="ImageLoaded" :alt="alt" />
                                </router-link>
                            
                                <div v-show="!isImageLoad" class="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                </div>
                            
                                <div v-if="imageCount" class="image-count-item">
                                <i class="fas fa-images"></i>
                                <span v-text="imageCount"></span>
                                </div>
                            </div>
                        </div>
                        <div class="main-article-contents" @click="setScroll()">
                        <div
                            class="valid-user-badge"
                            v-if="$parent.product.user_info.active_pakage_type == 3"
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
                        <div>
                            <h3 class="article-title">
                            <router-link
                                :to="this.$parent.productUrl"
                                v-html="getProductName()"
                            ></router-link>
                            </h3>

                            <p>
                            استان / شهر:
                            <span
                                v-text="
                                $parent.product.main.province_name +
                                ' - ' +
                                $parent.product.main.city_name
                                "
                            ></span>
                            </p>

                            <p v-if="$parent.product.main.description" class="product-description">
                            توضیحات
                            <router-link
                                v-if="$parent.product.main.description < 100"
                                :to="this.$parent.productUrl"
                                v-html="$parent.product.main.description"
                            ></router-link>

                            <router-link
                                v-else
                                :to="this.$parent.productUrl"
                                v-html="$parent.product.main.description.substring(0, 100)"
                            ></router-link>
                            </p>

                            <p>
                            مقدار موجودی:
                            <span v-text="getConvertedNumbers($parent.product.main.stock)"></span>
                            </p>
                        </div>

                        <router-link
                            to="#"
                            @click.prevent="$parent.copyProductLinkToClipBoard"
                            class="share-link hidden"
                        >
                            <i class="fa fa-share"></i>
                            <span>اشتراک گذاری</span>
                        </router-link>
                        </div>
                    </div>
                
                    <div class="footer-article">
                      <div
                        class="article-features pull-left"
                        v-if="product.main.is_elevated == 1 || isMyProfile"
                      >
                        <button
                          v-if="product.main.is_elevated == 1"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="نردبان اعمال شده است"
                          class="elevator-event active disable"
                        >
                          <i class="fas fa-chart-line"></i>
                        </button>
                      </div>
                      <div
                        class="article-action-buttons pull-right"
                        :class="[
                          {
                            'full-width-button': product.main.is_elevated == 0 && !isMyProfile,
                          },
                          {
                            'calc-width-button': product.main.is_elevated == 1 && !isMyProfile,
                          },
                        ]"
                      >
                        <button
                          class="green-button"
                        >
                          <i class="fa fa-envelope"></i>
                          استعلام قیمت
                        </button>
                      </div>
                    </div>
                    <!--google codes-->
                    <script v-html="jsonLDObject" type="application/ld+json"></script>
                    <!--end google codes-->
                  </article>
              
                @endfor


                  </div>
              </div>
              <div
                class="load-more-button col-xs-12"
              >
                <button class="btn btn-loader" @click.prevent="feed()">
                  <div class="btn-content text-rtl">
                    <span class="hidden-xs text-rtl" >
                      <i class="fa fa-plus"></i>
                      مشاهده محصولات بیشتر
                      
                    </span>

                    <span
                      class="hidden-sm hidden-md hidden-lg text-rtl"
                    >
                    <i class="fa fa-plus"></i>  
                    محصولات بیشتر
                    </span>

                    {{-- <div
                      class="btn-loader-active-wrapper"
                    >
                      <img src="{{asset('assets/img/gif/loading.gif')}}" />
                    </div>
                  </div> --}}
                </button>
              </div>
            </div>
          </section>
          <!-- test -->
{{-- 
          <search-not-found
            v-else-if="products.length === 0 && searchActive === true"
          /> --}}


        </div>
      </div>

      <aside
        id="sidebar"
        class="product-sidebar sidebar hidden-xs hidden-sm hidden-md col-lg-3"
      >
        <div class="row">
          <div class="sidebar__inner col-xs-12" style="position: relative">
            @include('layout.product-list-components.sidebar')
          </div>
        </div>
      </aside>
    </main>