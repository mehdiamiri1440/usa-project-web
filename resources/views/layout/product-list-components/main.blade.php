
    <main id="main" class="container">
      <div class="col-xs-12 pull-left col-lg-9">
        <div class="row">


          <section class="main-content col-xs-12" >
            <div id="article-list" class="row">
              
                <div
                  class="col-xs-12"
            
                >
                <div class="row">

                @foreach ($products as $product)

                @if($product['user_info']->active_pakage_type == 3)
                  <article
                    class="main-content-item is-user-valid"
                  >
                  @else
                  <article
                    class="main-content-item "
                  >
                  @endif
                    <div class="user-information-wrapper row">
                        <div class="user-information-contents">
                          <a href="{{'/profile/' . $product['user_info']->user_name}}" class="user-information-link">
                            <div class="user-information-content-image">
                              <div class="user-image" >
                                {{-- <img
                                  src=""
                                  class="image_defult"
                                  alt="{{$product['user_info']->first_name . ' ' . $product['user_info']->last_name}}"
                                /> --}}
                                <img
                                  src="{{asset('assets/img/user-defult.png')}}"
                                  class="image_defult"
                                  alt="{{$product['user_info']->first_name . ' ' . $product['user_info']->last_name}}"
                                />
                              </div>
                            </div>

                            <div class="user-information-content default">
                              <a
                                class="user-name-link"
                                href="{{'/profile/' . $product['user_info']->user_name}}"
                              >
                              {{$product['user_info']->first_name . ' ' . $product['user_info']->last_name}}
                              @if($product['user_info']->is_verified) 
                                <button
                                    class="verified-user"
                                    data-container="body"
                                    data-toggle="popover"
                                    data-placement="bottom"
                                  >
                                    <i class="fa fa-certificate"></i>
                                  </button>
                                  @endif
                              </a>
                            </div>
                          </a>
                    
                          <a
                            href="href="{{'/profile/' . $product['user_info']->user_name}}"
                            class="user-action-link default green-text"
                            >مشاهده پروفایل</a
                          >
                      
                        </div>
                        <div class="article-action-buttons">
                          <button
                            class="green-button"
                          >
                            <i class="fa fa-envelope"></i>
                            استعلام قیمت
                          </button>
                        </div>
                      </div>
                      
                    @if($product['user_info']->active_pakage_type != 3)
                    <div
                        class="main-article-contents-wrapper pointer-class "
                    >
                    @else
                    <div
                    class="main-article-contents-wrapper pointer-class is-user-valid-content"
                >
                    @endif
                        <div class="main-article-contents-image-wrapper" >
                    
                            <div class="main-article-image">
                              <a target="_blank" href="{{'/product-view/' . $product['main']->id . '/' . str_replace(' ', '-', 'خرید-عمده-' .$product['main']->sub_category_name) .'/'. str_replace(' ', '-', $product['main']->category_name)  }}">
                                <img src="{{url('/storage') . '/thumbnails/' . $product['photos'][0]->file_path}}"  :alt="alt" />
                                </a>
                            
                                <div class="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                </div>
                            
                                <div  class="image-count-item">
                                <i class="fas fa-images"></i>
                                <span >
                                  {{$product['main']->photos_count}}
                                </span>
                                </div>
                            </div>
                        </div>
                        <div class="main-article-contents" >
                          @if($product['user_info']->active_pakage_type == 3)
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
                          @endif
                        
                        <div>
                            <h3 class="article-title">
                              <a target="_blank" href="{{'/product-view/' . $product['main']->id . '/' . str_replace(' ', '-', 'خرید-عمده-' .$product['main']->sub_category_name) .'/'. str_replace(' ', '-', $product['main']->category_name)  }}">
                                
                                  {{$product['main']->category_name . ' | ' . $product['main']->sub_category_name  }}
                                  <span>
                                    {{$product['main']->product_name}}
                                  </span>
                              </a>
                            </h3>

                            <p>
                            استان / شهر:
                            <span
                            >
                            {{$product['main']->province_name . ' - ' . $product['main']->city_name  }}
                          </span>
                            </p>

                            <p  class="product-description">
                            توضیحات
                            <a target="_blank" href="{{'/product-view/' . $product['main']->id . '/' . str_replace(' ', '-', 'خرید-عمده-' .$product['main']->sub_category_name) .'/'. str_replace(' ', '-', $product['main']->category_name)  }}">
                            {{$product['main']->description  }}
                          </a>
                            </p>

                            <p>
                            مقدار موجودی:
                            <span >
                              {{$product['main']->stock  }} کیلوگرم
                            </span>
                            </p>
                        </div>

                        </div>
                    </div>
                
                    <div class="footer-article">
                      @if($product['main']->is_elevated)
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
                      @endif
                      
                      @if($product['main']->is_elevated)
                      <div
                        class="article-action-buttons calc-width-button pull-right"
                      >
                      @else
                      <div
                        class="article-action-buttons full-width-button pull-right"
                      >
                      @endif
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
              
                @endforeach


                  </div>
              </div>
              <div
                class="load-more-button col-xs-12"
              >
                <button class="btn btn-loader" >
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