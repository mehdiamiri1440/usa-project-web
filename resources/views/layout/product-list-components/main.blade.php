    <div
      class="
        sub-header-fix sub-header
        hidden-lg hidden-md hidden-sm
        container-fluid
      "
    >
      <div class="rate-filter-mobile-wrapper">
        <button
          class="mobile-category-item"
        >
          <i class="fa fa-list"></i>
          دسته ها
        </button>
        <button
          class="mobile-category-item"
        >
          <i class="fas fa-sort-amount-down-alt"></i>
          مرتب سازی
        </button>
        <button
          class="mobile-category-item"
        >
          کشاورزی
        </button>
        <button
          class="mobile-category-item"
        >
        فرآورده های غذایی
        </button>
      </div>
    </div>
   
    <main id="main" class="container">
      <div class="col-xs-12 pull-left col-lg-9">
        <div class="row">
          <section class="hidden-xs col-xs-12">
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
                    >
                      احتمال پاسخگویی
                    </button>
                  </li>
                  <li>
                    <button
                    >
                      سرعت پاسخگویی
                    </button>
                  </li>
                  <li>
                    <button
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
                    class="active"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="نمایش ستونی"
                  >
                    <i class="fas fa-grip-horizontal"></i>
                  </button>
  
                  <button
                    data-toggle="tooltip"
                    data-placement="top"
                    title="نمایش لیستی"
                  >
                    <i class="fa fa-list"></i>
                  </button>
                </div>
              </div>
          </section>
          <section class="main-content col-xs-12" >
            <div id="article-list" >
              
          @foreach ($products as $product)

              <div
              class="col-xs-6 grid-list col-sm-4 col-md-3 pull-right  "
            >
              
                  @if($product['user_info']->active_pakage_type == 3)
                    <article
                      class="main-content-item is-user-valid"
                    >
                  @else
                    <article
                      class="main-content-item "
                    >
                  @endif

                    @if($product['user_info']->active_pakage_type != 3)
                    <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product['main']->sub_category_name) .'/' . str_replace(' ', '-', $product['main']->category_name) . '/' .   $product['main']->id  }}"
                      class="main-article-contents-wrapper pointer-class "
                    >
                    @else
                    <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product['main']->sub_category_name) .'/' . str_replace(' ', '-', $product['main']->category_name) . '/' .   $product['main']->id  }}"
                    class="main-article-contents-wrapper pointer-class is-user-valid-content"
                    >
                    @endif
                    <div class="main-article-contents-image-wrapper" >
                    
                      <div class="main-article-image">
                        <div class="image" >
                          <img src="{{url('/storage') . '/thumbnails/' . $product['photos'][0]->file_path}}"  alt=" {{$product['main']->category_name . ' | ' . $product['main']->sub_category_name . ' ' .  $product['main']->product_name }}" />
                          </div>
                          <div  class="image-count-item">
                          <i class="fas fa-images"></i>
                          <span >
                            {{$product['main']->photos_count}}
                          </span>
                          </div>
                      </div>
                      <h3 class="article-title grid-list-title">
                       <p>
                        {{$product['main']->category_name . ' | ' . $product['main']->sub_category_name  }}
                        <span>
                          {{$product['main']->product_name}}
                        </span>
                       </p>
                      </h3>
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
                    </div>
                    <a href="{{'/profile/' . $product['user_info']->user_name}}" class="user-information-link">
                            
                          
                            <div
                              class="user-information-content"
                            >
                            <a
                            class="user-name-link"
                            href="{{'/profile/' . $product['user_info']->user_name}}"
                          >
                          <i class="fa fa-user-circle"></i>
                            {{$product['user_info']->first_name . ' ' . $product['user_info']->last_name}}
                           
                            </a>
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
                            @if( $product['user_info']->response_rate)
                            <div class="response-rate-wrapper pull-left">
                              <button
                                data-toggle="tooltip"
                                data-placement="right"
                                title="احتمال پاسخ گویی"
                                class="response-rate"
                              >
                                <i class="fa fa-exchange-alt"></i>
                                {{ $product['user_info']->response_rate }}
                              </button>
                            </div>
                            @endif
                          </div>
                        </a>
                        <div class="main-article-contents" >
                          
                          <div>
                            <p>
                              <i class="fa fa-map-marker-alt"></i>

                              <span
                              >
                              {{$product['main']->province_name . ' - ' . $product['main']->city_name  }}
                            </span>
                              </p>
                              <p>
                               <i class="fa fa-box-open"></i>
                              <span >
                                
                                @php 
                                $stock = $product['main']->stock;

                                if($stock > 1000){
                                  $stock = $stock / 1000 . ' تن';
                                }else{
                                  $stock = $stock . ' کیلوگرم';
                                }

                                @endphp

                                {{ $stock }}
                                </span>
                              </p>
                          </div>
                      </div>
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
                      <div class="has-action">
                        <button  class="green-button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 20 20"
                          >
                            <path
                              class="svg-1"
                              d="M19.388.405a.605.605 0 0 0-1.141.399c.929 2.67-.915 4.664-2.321 5.732l-.568-.814c-.191-.273-.618-.5-.95-.504l-3.188.014a2.162 2.162 0 0 0-1.097.338L.729 12.157a1.01 1.01 0 0 0-.247 1.404l4.269 6.108c.32.455.831.4 1.287.082l9.394-6.588c.27-.191.582-.603.692-.918l.998-3.145c.11-.314.043-.793-.148-1.066l-.346-.496c1.888-1.447 3.848-4.004 2.76-7.133zm-4.371 9.358a1.608 1.608 0 0 1-2.24-.396a1.614 1.614 0 0 1 .395-2.246a1.607 1.607 0 0 1 1.868.017c-.272.164-.459.26-.494.275a.606.606 0 0 0 .259 1.153c.086 0 .174-.02.257-.059c.194-.092.402-.201.619-.33a1.615 1.615 0 0 1-.664 1.586z"
                            />
                          </svg>
                  
                          استعلام قیمت
                        </button>
                      </div>
                    </a>
                    
                  </article>
            </div>

            @endforeach

              {{-- default list article  --}}
            <div
              class="col-xs-12 hidden-sm hidden-xs hidden-md hidden-lg">
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
                                  @if ($product['profile_info']->profile_photo)
                                      <img
                                    src="{{url('storage/' . $product['profile_info']->profile_photo)}}"
                                    class="image_defult"
                                    alt="{{$product['user_info']->first_name . ' ' . $product['user_info']->last_name}}"
                                  />
                                  @else
                                  <img
                                    src="{{asset('assets/img/user-defult.png')}}"
                                    class="image_defult"
                                    alt="{{$product['user_info']->first_name . ' ' . $product['user_info']->last_name}}"
                                  />
                                  @endif
                                </div>
                              </div>
                              @if ($product['user_info']->response_rate)
                              <div
                                class="user-information-content"
                              >
                              <p
                              class="user-name-link"
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
                                </p>

                                <p  class="response-rate">
                                  احتمال پاسخ گویی
                                  <span>
                                    {{
                                      '%' . $product['user_info']->response_rate
                                    }}
                                  </span>
                                </p>
                            </div>
                            @else
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
                            @endif
                            <a
                              href="{{'/profile/' . $product['user_info']->user_name}}"
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
                      <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product['main']->sub_category_name) .'/' . str_replace(' ', '-', $product['main']->category_name) . '/' .   $product['main']->id  }}"
                        class="main-article-contents-wrapper pointer-class "
                      >
                      @else
                      <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product['main']->sub_category_name) .'/' . str_replace(' ', '-', $product['main']->category_name) . '/' .   $product['main']->id  }}"
                      class="main-article-contents-wrapper pointer-class is-user-valid-content"
                      >
                      @endif
                          <div class="main-article-contents-image-wrapper" >
                      
                              <div class="main-article-image">
                                <div class="image" >
                                  <img src="{{url('/storage') . '/thumbnails/' . $product['photos'][0]->file_path}}"  alt=" {{$product['main']->category_name . ' | ' . $product['main']->sub_category_name . ' ' .  $product['main']->product_name }}" />
                                  </div>
                              
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
                                  <p>
                                    
                                      {{$product['main']->category_name . ' | ' . $product['main']->sub_category_name  }}
                                      <span>
                                        {{$product['main']->product_name}}
                                      </span>
                                    </p>
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

                                <span>
                                  {{$product['main']->description  }}
                                </span>

                                </p>

                                <p>
                                مقدار موجودی:
                                <span >
                                  {{$product['main']->stock  }} کیلوگرم
                                </span>
                                </p>
                            </div>
                        </div>
                      </a>
                  
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
      @if(isset($related_categories))
          <div class="col-xs-12" >
            <div class="data-tag-wrapper text-rtl">
              @foreach ($related_categories as $item)
              <a
                class="tag-item"
                href="{{'/product-list/category/'  . str_replace(' ', '-', $item)}}"
              >
                {{$item}}
              </a>
              @endforeach
              
            </div>
          </div>
        @endif
    </main>
  
     <footer
      class="category-footer container"
      >
      @if($categoryMetaData['category_info'])
        <div class="col-xs-12">
          <h1>خرید {{$category_name}} عمده </h1>
          <div class="footer-note-wrapper main-box-shadow">
            <div class="wrapper-contents">
              <div
                class="contents"
              >
              @foreach($categoryMetaData['category_info'] as $categoryMeta)
                  <div>{!! $categoryMeta['header'] ?? $categoryMeta[0]['header'] !!}</div>
                  <div>{!! $categoryMeta['content'] ?? $categoryMeta[0]['content'] !!}</div>
              @endforeach
              </div>
            </div>
          </div>
        </div>
      @endif

      @if($categoryMetaData['schema_object'])
      <script
        type="application/ld+json"
      >{!! $categoryMetaData["schema_object"] !!}</script>
      @endif
      </footer>