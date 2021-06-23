<div class="user-info-section-wrapper">
  @if($product['user_info']->active_pakage_type == 3)
  <div
    class="user-info-wrapper wrapper-bg active">
    @else
    <div
    class="user-info-wrapper wrapper-bg ">
    @endif
  
      <a 
        href="'/profile/' + <?php echo $product['user_info']->user_name ?>"
        class="user-information-link text-rtl"
      >
        <div class="user-information-content-image">
          {{-- <div
            class="user-image"
            v-if="$parent.product.profile_info.profile_photo"
            :style="{
              backgroundImage:
                'url(' +
                base +
                'storage/' +
                $parent.product.profile_info.profile_photo +
                ')',
            }"
          >
            <img
              class="hidden"
              loading="lazy"
              v-bind:src="
                '/storage/' + $parent.product.profile_info.profile_photo
              "
            />
          </div> --}}

          <div class="user-image" v-else>
            <img
              src="../../../../../../img/user-defult.png"
              class="image_defult"
            />
          </div>
          <div
            class="valid-icon"
            v-if="$parent.product.user_info.active_pakage_type == 3"
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
        </div>

        <div class="user-information-content">
          <p v-show="$parent.product.user_info">
           محمدامین دلداری
            {{-- <button
              v-if="$parent.product.user_info.is_verified"
              @click.prevent
              class="verified-user"
              data-container="body"
              data-toggle="popover"
              data-placement="bottom"
              :data-content="$parent.verifiedUserContent"
              title
            >
              <i class="fa fa-certificate"></i>
            </button> --}}
          </p>

          <p
            v-if="$parent.product.user_info.response_rate"
            class="response-rate"
          >
            احتمال پاسخ گویی
            <span v-text="$parent.product.user_info.response_rate + '%'"></span>
          </p>
          <p
            v-if="$parent.product.user_info.active_pakage_type == 3"
            class="user-valid-text"
          >
            فروشنده ویژه
          </p>
          <p v-else class="user-position">فروشنده</p>

            
            <div class="user-info-actions hidden-xs hidden-sm hidden-md">
            <a
                href="'/profile/' + $parent.product.user_info.user_name"
                class="green-button green-button-o"
                >مشاهده پروفایل</a
            >

            <button
                v-if="!$parent.isMyProfile && $parent.currentUser.user_info"
                @click.prevent="$parent.openChatModal($parent.product)"
                class="green-button"
            >
                <i class="fa fa-comment-alt"></i>

                ارسال پیام
            </button>
            {{-- <button
                v-else-if="!$parent.isMyProfile && !$parent.currentUser.user_info"
                @click.prevent="$parent.loginModal()"
                class="green-button"
            >
                <i class="fa fa-comment-alt"></i>

                ارسال پیام
            </button> --}}

          
            </div>
            <span class="more-info hidden-lg">
            مشاهده پروفایل
            <i class="fa fa-angle-left"></i>
            </span>
        </div>
      </a>
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