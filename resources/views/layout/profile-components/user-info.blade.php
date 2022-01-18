        <div class="header-content col-xs-12">
          <div class="image_user_wrapper col-xs-4 col-sm-3 col-lg-2">
            <div v-if="profileOwner.user_info" class="user-image">
              {{--<div
                  v-if="profileOwner.profile.profile_photo"
                  :style="{
                    backgroundImage:
                      'url(' +
                      str +
                      '/' +
                      profileOwner.profile.profile_photo +
                      ')',
                  }"
                ></div> --}}
              <div style="background-image: url('assets/img/user-defult.png')"></div>
            </div>

            <div class="profile-rating-box-wrapper hidden-xs" v-if="profileOwnerStatistics.rating_info.total_count > 0 && !statisticsLoader">
              <div class="profile-rating-box">
                <div class="rating-stars pull-left">
                  <p class="stars-wrapper">
                    <span>
                      <span>1</span>

                      <i class="fa fa-star yellow-text"></i>
                    </span>
                    <span>
                      <span>2</span>

                      <i class="fa fa-star yellow-text"></i>
                    </span>
                    <span>
                      <span>3</span>

                      <i class="fa fa-star yellow-text"></i>
                    </span>
                    <span>
                      <span>4</span>

                      <i class="fa fa-star yellow-text"></i>
                    </span>
                    <span>
                      <span>5</span>

                      <i class="fa fa-star"></i>
                    </span>

                  </p>
                  <p class="review-count-wrapper">
                    <span>10</span>
                    نظر
                  </p>
                </div>
                <span class="rating-score pull-right">
                  <span>4</span>
                </span>
              </div>
            </div>

          </div>
          <div class="content_user_wrapper hidden-xs col-xs-6 col-sm-9 col-lg-10 padding-0">

            <div class="user-contents row">
              <div class="title_content col-xs-12 col-sm-8 col-md-9">


                <h1 v-if="profileOwner.user_info" class="content_title col-xs-12" itemprop="name">
                  <span>
                    {{$profile_info->first_name . ' ' . $profile_info->last_name}}
                    <button v-if="profileOwner.user_info.is_verified" @click.prevent class="verified-user" data-container="body" data-toggle="popover" data-placement="bottom" :data-content="verifiedUserContent" title>
                      <i class="fa fa-certificate"></i>
                    </button>
                  </span>

                  <span class="valid-seller" v-if="profileOwnerStatistics.validated_seller">
                    <i class="fa fa-check-circle"></i>
                    فروشنده ویژه
                  </span>
                  <p v-if="profileOwnerStatistics.response_rate" class="response-rate">
                    احتمال پاسخ گویی
                    <span>70%</span>
                  </p>
                </h1>
                <div class="title_content col-xs-12">

                  <div class="content_user_info col-xs-12">
                    <div class="row">
                      <div class="col-xs-6 pull-right">
                        <p v-if="profileOwner.activity_domain">
                          حوزه ی فعالیت :
                          <span>کشاورزی</span>
                        </p>

                      </div>

                      <div class="col-xs-6">
                        <p v-if="profileOwner.user_info">
                          آدرس :
                          <span itemprop="address">
                            فارس</span>
                        </p>
                      </div>

                      <div class="col-xs-6 margin-15-0 pull-right">
                        <p v-if="profileOwner.profile.is_company">
                          نام شرکت
                          <span>
                            باسکول</span>
                        </p>
                      </div>

                      <div class="col-xs-6 margin-15-0">
                        <p v-if="profileOwner.profile.is_company">
                          شماره ثبت
                          <span>
                            456987</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="back_page first-back col-xs-12 col-sm-4 col-md-3">
                <a href="javascript:history.back()" class="green-button">بازگشت به صفحه قبل</a>
                <button v-else href="#" @click.prevent="openChat()" class="green-button edit">
                  <i class="fa fa-envelope"></i>
                  ارسال پیام
                </button>
                <button class="btn btn-copy">
                  <span class="icon-wrapper">
                    <i class="fa fa-share-alt"></i>
                  </span>
                  اشتراک در واتس آپ
                </button>
              </div>

            </div>
          </div>
          <div class="
                info_user_wrapper_mobile
                hidden-sm hidden-md hidden-lg
                col-xs-8 col-sm-4 col-md-3
              ">
            <div class="row">
              @if(true)
              <div class="col-xs-6 text-center" v-if="
                    profileOwner.user_info.is_seller && profileOwnerStatistics
                  ">
                <div class="info-num">3</div>
                محصولات
              </div>
              @else
              <div class="col-xs-6 text-center" v-else-if="
                    profileOwner.user_info.is_buyer && profileOwnerStatistics
                  ">
                <div class="info-num">2</div>
                درخواست ها
              </div>
              @endif
              <div class="col-xs-6 text-center" v-if="profileOwnerStatistics.reputation_score >= 0">
                <div class="info-num">7</div>
                اعتبار
              </div>
            </div>

            <div class="col-xs-12 padding-0">
              <div>
                <a href="#" class="green-button edit">
                  <i class="fa fa-envelope"></i>
                  ارسال پیام
                </a>
              </div>


            </div>

            <button href="#" class="btn-copy">
              <span class="icon-wrapper">
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" class="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="#333" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
              </span>
              اشتراک در واتس آپ
            </button>
          </div>




          <div class="
                content_user_wrapper_mobile
                hidden-sm hidden-md hidden-lg
                col-xs-12
              ">
            <div class="user-contents row">
              <div class="title_content col-xs-12">
                <div class="back_page col-xs-12 col-sm-4">
                  <button class="btn btn-copy">
                    <i :class="copyLinkClass" aria-hidden="true"></i>
                    <span v-text="copyLinkText"></span>
                  </button>
                </div>

                <h1 v-if="profileOwner.user_info" class="content_title col-xs-12 col-sm-8">
                  <span>
                    نام کاربر
                    {{-- {{
                        profileOwner.user_info.first_name +
                        " " +
                        profileOwner.user_info.last_name
                      }}--}}
                    <button v-if="profileOwner.user_info.is_verified" @click.prevent class="verified-user" data-container="body" data-toggle="popover" data-placement="bottom" :data-content="verifiedUserContent" title>
                      <i class="fa fa-certificate"></i>
                    </button>
                  </span>

                  <span class="valid-seller" v-if="profileOwnerStatistics.validated_seller">
                    <i class="fa fa-check-circle"></i>
                    فروشنده ویژه
                  </span>

                  <p v-if="profileOwnerStatistics.response_rate" class="response-rate">
                    احتمال پاسخ گویی
                    <span>70%</span>
                  </p>
                </h1>

                <div class="
                      profile-rating-box-wrapper
                      hidden-sm hidden-md hidden-lg
                    " v-if="profileOwnerStatistics.rating_info.total_count > 0">
                  <div class="profile-rating-box">
                    <div class="rating-stars pull-left">
                      <p class="stars-wrapper">
                        <span>
                          <span>1</span>

                          <i class="fa fa-star yellow-text"></i>
                        </span>
                        <span>
                          <span>2</span>

                          <i class="fa fa-star yellow-text"></i>
                        </span>
                        <span>
                          <span>3</span>

                          <i class="fa fa-star yellow-text"></i>
                        </span>
                        <span>
                          <span>4</span>

                          <i class="fa fa-star yellow-text"></i>
                        </span>
                        <span>
                          <span>5</span>

                          <i class="fa fa-star"></i>
                        </span>

                      </p>
                      <p class="review-count-wrapper">
                        <span>10</span>
                        نظر
                      </p>
                    </div>
                    <div class="rating-score pull-right">
                      <span>4</span>
                    </div>
                  </div>
                </div>
                <div class="content_user_info col-xs-12 col-sm-8">
                  <div class="row">
                    <div class="col-xs-6 pull-right">
                      <p v-if="profileOwner.activity_domain">
                        حوزه ی فعالیت :
                        <span>کشاورزی</span>
                      </p>
                    </div>

                    <div class="col-xs-6">
                      <p v-if="profileOwner.user_info">
                        آدرس :
                        <span itemprop="address">فارس - شیراز</span>
                      </p>
                    </div>

                    <div class="col-xs-6 pull-right margin-15-0">
                      <p v-if="profileOwner.profile.is_company">
                        نام شرکت :
                        <span>باسکول</span>
                      </p>
                    </div>

                    <div class="col-xs-6 margin-15-0">
                      <p v-if="profileOwner.profile.is_company">
                        شماره ثبت :
                        <span>654789</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sub-header hidden-sm hidden-md hidden-lg col-xs-12">
          <div class="col-xs-12 active">
            <!-- <button @click.prevent="showProfileOwnerDescription()"> -->
            <button>
              <div class="inside-links buskool-icon">
                <i aria-hidden="true">
                  <svg width="21.75" height="21.68" viewBox="0 0 24.965 30.574">
                    <g id="buskool-icon" data-name="buskool" transform="translate(-273.1 -715.025)">
                      <path id="Subtraction_1" class="buscool-icon-item" data-name="Subtraction 1" d="M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z" transform="translate(2237.1 709.808)" fill="#808c9b" />
                      <g id="Group_24" data-name="Group 24">
                        <path id="Rectangle_12" data-name="Rectangle 12" class="buscool-icon-item" d="M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z" transform="translate(282.389 717.5) rotate(45)" fill="#808c9b" />
                        <path id="Rectangle_13" data-name="Rectangle 13" class="buscool-icon-item" d="M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z" transform="translate(294.935 718.561) rotate(135)" fill="#808c9b" />
                      </g>
                    </g>
                  </svg>
                </i>
                <span>اطلاعات پایه</span>
              </div>
            </button>
          </div>


        </div>

        <div class="sub-header hidden-xs col-xs-12">
          <ul class="list-inline">


            <li class="list-item active">
              <button>اطلاعات پایه</button>
            </li>
          </ul>
        </div>
        <div class="contents col-xs-12" v-if="profileDescription === true">
          <div class="description-wrapper col-xs-12">
            <p v-if="profileOwner.profile.description" class="title-content">
              توضیحات
            </p>

            <div v-if="profileOwner.profile.description" class="description" v-text="profileOwner.profile.description">
              تست توضیحات
              {{--{{$profile->description}}--}}
            </div>


            <div class="my-products col-xs-12">
              <p class="title-content">محصولات من</p>

              <section class="row" v-if="products.length > 0">
                <div class="col-xs-12 pull-right" :key="productIndex" v-for="(product, productIndex) in products">

                  <div class=" product-carousel col-xs-6 col-sm-4 col-md-3">
                    <article class="carousel-item box-content">
                      {{--<a href="{{'/product-view/' . 'خرید-عمده-' .  implode(explode(' ',$product_item->subcategory_name),'-') . '/' . $product_item->category_name . '/' . $product_item->id }}" class="carousel-img text-center">--}}
                      <a href="#" class="carousel-img text-center">
                        {{--
                      src="{{url('storage/') . '/' .$product_item->photo}}"}}
                        --}}
                        <img src="https://www.buskool.com/storage/relateds/4px0BJAlxxyOilV587BjerrNQCKISrNqIzFEsARO.jpeg" class="main-image main-image-load" />
                      </a>

                      {{--
                    <a href="{{'/product-view/' . 'خرید-عمده-' .  implode(explode(' ',$product_item->subcategory_name),'-') . '/' . $product_item->category_name . '/' . $product_item->id }}" class="carousel-title">
                      --}}
                      <h4>
                        نام محصول
                        {{-- {{
                      $product_item->product_name
                    }}--}}
                      </h4>

                      </a>
                      <a href="#" class="stock-wrapper">

                        <span>موجودی</span>
                        <span>
                          {{-- {{
                        $product_item->stock
                      }}
                          --}}
                          کیلوگرم
                        </span>

                      </a>
                    </article>
                  </div>
                  <div class=" product-carousel col-xs-6 col-sm-4 col-md-3">
                    <article class="carousel-item box-content">
                      {{--<a href="{{'/product-view/' . 'خرید-عمده-' .  implode(explode(' ',$product_item->subcategory_name),'-') . '/' . $product_item->category_name . '/' . $product_item->id }}" class="carousel-img text-center">--}}
                      <a href="#" class="carousel-img text-center">
                        {{--
                      src="{{url('storage/') . '/' .$product_item->photo}}"}}
                        --}}
                        <img src="https://www.buskool.com/storage/relateds/4px0BJAlxxyOilV587BjerrNQCKISrNqIzFEsARO.jpeg" class="main-image main-image-load" />
                      </a>

                      {{--
                    <a href="{{'/product-view/' . 'خرید-عمده-' .  implode(explode(' ',$product_item->subcategory_name),'-') . '/' . $product_item->category_name . '/' . $product_item->id }}" class="carousel-title">
                      --}}
                      <h4>
                        نام محصول
                        {{-- {{
                      $product_item->product_name
                    }}--}}
                      </h4>

                      </a>
                      <a href="#" class="stock-wrapper">

                        <span>موجودی</span>
                        <span>
                          {{-- {{
                        $product_item->stock
                      }}
                          --}}
                          کیلوگرم
                        </span>

                      </a>
                    </article>
                  </div>
                </div>
              </section>
            </div>

            <div class="cerificates col-xs-12">
              <p class="title-content">تصاویر مرتبط :</p>

              <div v-if="profileOwner.relateds[0]">
                <div class="image-wrapper col-lg-4 col-md-6 col-xs-6">
                  <a href="https://www.buskool.com/storage/relateds/4px0BJAlxxyOilV587BjerrNQCKISrNqIzFEsARO.jpeg">
                    <img src="https://www.buskool.com/storage/relateds/4px0BJAlxxyOilV587BjerrNQCKISrNqIzFEsARO.jpeg">
                  </a>
                </div>

              </div>
            </div>

            <div class="cerificates col-xs-12">
              <p class="title-content">مدارک من :</p>

              <div class="image-wrapper col-lg-4 col-md-6 col-xs-6">
                <a href="https://www.buskool.com/storage/certificates/I6WisMPmwVkfieZTVfkCeOuOkFG3nS32LBjSpM6l.jpeg">
                  <img src="https://www.buskool.com/storage/certificates/I6WisMPmwVkfieZTVfkCeOuOkFG3nS32LBjSpM6l.jpeg">
                </a>
              </div>
              {{--<div v-if="profileOwner.certificates[0]">
                <article
                  v-for="(photo, index) in profileOwner.certificates"
                  class="
                    ceteficate-image
                    col-xs-6
                    hidden-sm hidden-md hidden-lg
                  "
                  :key="index"
                >
                  <a :href="str + '/' + photo">
                    <img :src="str + '/' + photo" />
                  </a>
                </article>

                <div class="owl-carousel product-carousel hidden-xs">
                  <OwlCarousel
                    @click="
                      registerComponentStatistics(
                        'profileView',
                        'CertificateView',
                        'click on certificate photos'
                      )
                    "
                    v-for="photo in profileOwner.certificates"
                    :base="str + '/'"
                    :key="photo.id"
                    :img="photo"
                  />
                </div>
              </div>--}}

            </div>
          </div>