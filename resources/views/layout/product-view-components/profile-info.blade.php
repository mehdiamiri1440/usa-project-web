<div class="user-info-section-wrapper">
  
  @if($product['user_info']->active_pakage_type == 3)
  <div
    class="user-info-wrapper wrapper-bg active">
    @else
    <div
    class="user-info-wrapper wrapper-bg ">
    @endif


    <div class="user-link-wrapper">
      <a 
        href="/profile/<?php echo $product['user_info']->user_name ?>"
        class="user-information-link text-rtl"
      >
        <div class="user-information-content-image">
          @if($product['profile_info']->profile_photo)
          <div
            class="user-image"
            style="
              background-image: url( {{url('storage/') . '/'.$product['profile_info']->profile_photo}})
            "
          >
          </div>
          @else
          <div class="user-image" >
            <img
              src="{{asset('assets/img/user-defult.png')}}"
              class="image_defult"
            />
          </div>
          @endif
          
          @if($product['user_info']->active_pakage_type == 3)
            <div
              class="valid-icon"
            >
              <svg width="21.75" height="21.68" viewBox="0 0 24.965 30.574">
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
          @endif
        </div>

      
  

        <div class="user-information-content">
          <p >
            {{
               $product['user_info']->first_name . ' ' . $product['user_info']->last_name
            }}
          </p>
          @if($product['user_info']->active_pakage_type == 3)
          <p
              class="user-valid-text"
            >
              فروشنده ویژه
            </p>
            @else
            <p  class="user-position">فروشنده</p>
            @endif
        </div>

      </a>
      <div class="user-data-wrapper text-rtl col-xs-12">
        <ul>
          <li>
            <div class="icon-wrapper">
              <i class="fa fa-star"> </i>
            </div>
            <div class="content-wrapper rating-section">
              <span
                class="pull-right"
              >4.5</span>
              <div class="rating-stars pull-right">
                <p class="stars-wrapper">
                  <span >
                    <span>1</span>

                    <i
                      class="fa fa-star yellow-text"
                    ></i>
                  </span>
                  <span >
                    <span>2</span>

                    <i
                      class="fa fa-star yellow-text"
                    ></i>
                  </span>
                  <span >
                    <span>3</span>

                    <i
                      class="fa fa-star yellow-text"
                    ></i>
                  </span>
                  <span >
                    <span>4</span>

                    <i
                      class="fa fa-star yellow-text"
                    ></i>
                  </span>
                  <span >
                    <span>5</span>

                    <i
                      class="fa fa-star yellow-text"
                    ></i>
                  </span>
                </p>
              </div>
              <span
                class="pull-right brand-text"
              >
              (10 نظر)
              </span>
            </div>
          </li> 
          
          @if($product['user_info']->response_rate)
          <li>
            <div class="icon-wrapper">
              <i class="fa fa-exchange-alt"> </i>
            </div>
            <div class="content-wrapper rating-section">
              <p
                class="info-text"
              >
                احتمال پاسخ گویی
                <span
                  class="red-text"
                >
                {{
                  $product['user_info']->response_rate . '%'
                }}</span>
              </p>
            </div>
          </li>
          @endif
          <li>
            <div class="icon-wrapper ">
              @if($product['user_info']->is_verified)

            
              <button class="verified-user blue-text"
                @else
              <button class="verified-user gray-text"
                @endif
                class="verified-user"
                data-container="body"
                data-toggle="popover"
                data-placement="bottom"
                :data-content="$parent.verifiedUserContent"
              >
                <i class="fa fa-certificate"></i>
              </button>
            </div>
            <div class="content-wrapper rating-section">
              @if($product['user_info']->is_verified)
              <span
                class="blue-text"
                v-text="'احراز هویت شده'"
              ></span>
              @else
              <span >
                احراز هویت نشده
              </span>
              @endif
            </div>
          </li>
        </ul>
      </div>
      <div class="user-info-actions text-rtl ">
        <button
          class="green-button green-button-alt"
        >
          <i class="fa fa-comment-alt"></i>

          ارسال پیام
        </button>
        

      </div>
      @if($product['profile_info']->profile_description)
      <div  class="user-description-wrapper text-right">
        <p class="description-title">توضیحات فروشنده</p>
        <p
          id="user-description"
          class="user-description"
          aria-expanded="false"
        >
          <span>
            {{$product['profile_info']->profile_description}}
          </span>
        </p>
        <a
          role="button"
          class="collapsed"
          id="note-close"
          data-toggle="collapse"
          href="#user-description"
          aria-expanded="false"
        ></a>
      </div>
      @endif
    </div>
  

    </div>

    
    <a
      href="https://blog.buskool.com/%d8%b1%d8%a7%d9%87%d9%86%d9%85%d8%a7%db%8c-%d8%ae%d8%b1%db%8c%d8%af-%d8%a7%d9%85%d9%86/"
      target="_blank"
      class="warning-wrapper col-xs-12 info-wrapper hidden-md hidden-lg"
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