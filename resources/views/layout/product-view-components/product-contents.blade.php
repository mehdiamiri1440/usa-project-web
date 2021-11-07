<div  class="wrapper-bg main-product-wrapper">
  
    <!--article modal-->

    <div class="images-wrapper">
      <div class="images">
        <div  class="owl-carousel">
          <div  class="image-wrapper">
            <!-- this is work for preload images and improve google analytics -->
            <a  href="{{url('storage/') . '/' . $product['photos'][0]->file_path}}">
              <img src="{{url('storage/') . '/' . $product['photos'][0]->file_path}}"  />
            </a>
          </div>
        </div>
        
      </div>
      <div class="share hidden-xs hidden-sm">
        <button
          @click.prevent="$parent.copyProductLinkToClipBoard"
          class="share-button"
        >
          <span>اشتراک گذاری</span>
          <i class="fa fa-share"></i>
        </button>
      </div>

      <a
        href="https://blog.buskool.com/%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%d8%ae%d8%b1%db%8c%d8%af-%d8%a7%d9%85%d9%86/"
        target="_blank"
        class="warning-wrapper info-wrapper hidden-xs hidden-sm"
      >
        <p class="warning-title">
          <i class="fa fa-question-circle"></i>

          راهنمای خرید امن
        </p>
        <p class="warning-text">
          باسکول هیچ‌گونه منفعت و مسئولیتی در قبال معامله شما ندارد. با مطالعه‌ی
          راهنمای خرید امن ، آسوده‌تر معامله کنید.
        </p>
      </a>
    </div>

    <div class="main-contents-wrapper">
      <div class="main-contents">
        <h1 >
          {{$product['main']->product_name}}
        </h1>

        <div class="actions">
         
          @if($product['user_info']->has_phone)
          <button
          class=" main-button bg-orange white-text hidden-xs hidden-sm"
        >
        <i class="fas fa-phone-alt" ></i>
          تماس با فروشنده
        </button>
          @endif
          @if($product['user_info']->has_phone)
          <button
            class="hidden-xs hidden-sm send-message-button main-button button-shadow bg-soft-orange orange-text"
          >
          <i class="fas fa-comment-alt"></i>

            چت با فروشنده
          </button>
          @else
          <button
            class="hidden-xs hidden-sm main-button bg-orange white-text"
          >
          <i class="fas fa-comment-alt"></i>

            چت با فروشنده
          </button>
          @endif
          <div class="share hidden-md hidden-lg pull-left">
            <button
              @click.prevent="$parent.copyProductLinkToClipBoard"
              class="share-button"
            >
              <i class="fa fa-share-alt"></i>
            </button>
          </div>
        </div>
        
        <div class="product-info-table">
          <ul class="product-info-list">
            <li>
              <span class="gray-text">
                <i class="fa fa-users"></i> 
                فروشنده
              </span>

              <span >
                {{$product['user_info']->first_name . ' ' . $product['user_info']->last_name}}
              </span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fa fa-map-marker-alt"></i> آدرس</span
              >

              <span
              >
              {{$product['main']->province_name . ' - ' . $product['main']->city_name }}
            </span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fa fa-box-open"></i> مقدار موجودی</span
              >

              <span
              >
              {{$product['main']->stock}} 
              کیلوگرم
            </span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fas fa-clipboard-check"></i> حداقل سفارش</span
              >

              <span
              >
              {{$product['main']->min_sale_amount}}
              کیلوگرم

            </span>
            </li>
          </ul>
          <div
            class="show-button-wrapper text-rtl text-center"
          >
            <button
              class="main-button-alt orange-text"
            >
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
          <div
            class="product-description show"
          >
            <span class="gray-text">توضیحات</span>
            <p>
              {!! $product['main']->description !!}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


  @if($product["user_info"]->comments)
  <section
        id="reviews-section"
        class="section-wrapper col-xs-12 reviews-product"
      >
        <div class="row">
          <h3 class="box-title">نظرات کاربران</h3>
  
          <div
            class="reviews-wrapper"
            v-if="reviews.comments.length > 0 && !reviewsLoader"
          >
            @foreach($product["user_info"]->comments as $comment)
            <div class="col-xs-12">
              <div class="row">
                <article class="review-item-wrapper">
                  <div
                    class="
                      reviewer-information-wrapper
                      text-center
                      col-xs-12 col-sm-2
                      pull-right
                    "
                  >
                    <div class="reviewer-information">
                      <p class="user-name" >
                        {{$comment->first_name . ' ' . $comment->last_name}}
                      </p>
                      <p
                        class="user-city"
                      >
                      {{$comment->province . ' - ' . $comment->city}}
  
                    </p>
                      <p class="comment-date hidden-sm hidden-md hidden-lg">
                        {{ $comment->created_at}}
                      </p>
                    </div>
                  </div>
                  <div class="review-message col-xs-12 col-sm-8 pull-right">
                    <div class="rate-stars" v-if="review.rating_score > 0">
                      <p class="stars-wrapper text-right">
                        @for($i = 0; $i < 5;$i++)
                        <span  >
                          <span>{{$i + 1}}</span>
                          <i
                          @if( $comment->rating_score > $i)
                            class="fa fa-star yellow-text"
                            @else
                            class="fa fa-star"
                            @endif
                          ></i>
                        </span>
                        @endfor
                      </p>
                    </div>
                    <p v-text="review.text">
                      {{$comment->text}}
                    </p>
                  </div>
                  <div class="review-rate text-center col-xs-12 col-sm-2 pull-right">
                    <p class="comment-date hidden-xs">
                      {{ $comment->created_at}}
                    </p>
                    <div
                      class="review-likes-wrapper text-center"                  >
                      <button
                        @click.prevent="doLike()"
                        class="review-likes"
                      >
                        <span class="like-icon">
                          <span >
                            {{ $comment->likes}}
                          </span>
                          <i class="fa fa-thumbs-up"></i>
                        </span>
                        <span >می پسندم</span>
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            @endforeach
          </div>
        </div>
      </section>
  
      @endif
      

  <section
  id="product-section"
  class="section-wrapper col-xs-12 latest-product"
>
  <div class="row">
    <h3 class="box-title">محصولات  {{
      $product['user_info']->first_name . ' ' . $product['user_info']->last_name
   }}</h3>
  
    <div class="products-contents">
        @php 

        $i = 0
        @endphp

        @foreach ($product["products"] as $product_item)

        <div
        class="col-xs-6 grid-list col-sm-4 col-md-3 pull-right"
        >

           
            <article
              class="main-content-item "
            >

              @if($product_item['user_info']->active_pakage_type != 3)
              <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product_item['main']->sub_category_name) .'/' . str_replace(' ', '-', $product_item['main']->category_name) . '/' .   $product_item['main']->id  }}"
                class="main-article-contents-wrapper pointer-class "
              >
              @else
              <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product_item['main']->sub_category_name) .'/' . str_replace(' ', '-', $product_item['main']->category_name) . '/' .   $product_item['main']->id  }}"
              class="main-article-contents-wrapper pointer-class is-user-valid-content"
              >
              @endif
              <div class="main-article-contents-image-wrapper" >
              
                <div class="main-article-image">
                  <div class="image" >
                    <img src="{{url('/storage') . '/thumbnails/' . $product_item['photos'][0]->file_path}}"  alt=" {{$product_item['main']->category_name . ' | ' . $product_item['main']->sub_category_name . ' ' .  $product_item['main']->product_name }}" />
                    </div>
                </div>
                <h3 class="article-title grid-list-title">
                <p>
                  {{$product_item['main']->category_name . ' | ' . $product_item['main']->sub_category_name  }}
                  <span>
                    {{$product_item['main']->product_name}}
                  </span>
                </p>
                </h3>
                @if($product_item['user_info']->active_pakage_type == 3)
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
                  <a href="{{'/profile/' . $product_item['user_info']->user_name}}" class="user-information-link">
                      
                    
                      <div
                        class="user-information-content"
                      >
                      <a
                      class="user-name-link"
                      href="{{'/profile/' . $product_item['user_info']->user_name}}"
                    >
                    <i class="fa fa-user-circle"></i>
                      {{$product_item['user_info']->first_name . ' ' . $product_item['user_info']->last_name}}
                    
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
                    </div>
                  </a>
                  <div class="main-article-contents" >
                    
                    <div>
                      <p>
                        <i class="fa fa-map-marker-alt"></i>

                        <span
                        >
                        {{$product_item['main']->province_name . ' - ' . $product_item['main']->city_name  }}
                      </span>
                        </p>
                        <p>
                        <i class="fa fa-box-open"></i>
                        <span >
                          
                          @php 
                          $stock = $product_item['main']->stock;

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
                @if($product_item['main']->is_elevated)
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
              </a>

            </article>
        </div>

        @endforeach
      
    </div>
  </div>
</section>


