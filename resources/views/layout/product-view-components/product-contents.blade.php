<div  class="wrapper-bg main-product-wrapper">
  
    <!--article modal-->

    <div class="images-wrapper">
      <div class="images">
        <div v-if="$parent.product.photos" class="owl-carousel">
          {{-- <Carousel
            v-for="(photo,index) in $parent.product.photos"
            :index="index"
            :key="photo.id"
            :base="$parent.str + '/'"
            :img="photo.file_path"
            :alt="
              'فروش عمده ی ' +
              $parent.product.main.sub_category_name +
              ' ' +
              $parent.product.main.product_name +
              ' ' +
              $parent.product.main.city_name +
              ' - ' +
              $parent.product.main.province_name
            "
          /> --}}
        </div>
        <svg
          v-else
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
        >
          <path
            fill="#ccc"
            d="M41,42H13c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C45,40.2,43.2,42,41,42z"
          />
          <path
            fill="#ddd"
            d="M35,36H7c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C39,34.2,37.2,36,35,36z"
          />
          <circle fill="#ccc" cx="30" cy="16" r="3" />
          <polygon fill="#bbb" points="17,17.9 8,31 26,31" />
          <polygon fill="#eee" points="28,23.5 22,31 34,31" />
        </svg>
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
            عنوان این محصولا مثلا فلان چی
        </h1>

        <div class="actions">
          <button
            v-if="!$parent.isMyProfile && $parent.currentUser.user_info"
            @click.prevent="$parent.openChat($parent.product)"
            class="hidden-xs hidden-sm"
            :class="{
              'send-message-button':
                $parent.product.user_info.has_phone &&
                $parent.currentUser.user_info.is_buyer,
              'green-button':
                !$parent.product.user_info.has_phone ||
                ($parent.product.user_info.has_phone &&
                  !$parent.currentUser.user_info.is_buyer),
            }"
          >
            چت با فروشنده
            <i class="fas fa-comment-alt"></i>
          </button>
          

          <button
            v-if="
              !$parent.isMyProfile &&
              $parent.currentUser.user_info &&
              $parent.product.user_info.has_phone &&
              $parent.currentUser.user_info.is_buyer
            "
            @click.prevent="$parent.activePhoneCall(false)"
            class="green-button phone-call hidden-xs hidden-sm"
            :class="{ disable: $parent.isActivePhone }"
            :disabled="$parent.isActivePhone"
          >
            اطلاعات تماس
            <i
              class="fas fa-phone-square-alt"
              v-if="!$parent.getPhoneLoader"
            ></i>
        
          </button>
         
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
                <i class="fa fa-folder"></i> دسته بندی
              </span>

              <span v-text="$parent.product.main.sub_category_name"></span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fa fa-map-marker-alt"></i> استان / شهر</span
              >

              <span
                v-text="
                  $parent.product.main.province_name +
                  ' - ' +
                  $parent.product.main.city_name
                "
              ></span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fa fa-box-open"></i> مقدار موجودی</span
              >

              <span
                v-text="getConvertedNumbers($parent.product.main.stock)"
              ></span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fas fa-clipboard-check"></i> حداقل سفارش</span
              >

              <span
                v-text="
                  getConvertedNumbers($parent.product.main.min_sale_amount)
                "
              ></span>
            </li>
            <li v-if="!$parent.isMyProfile">
              <span class="gray-text">
                <i class="fas fa-dollar-sign"></i> قیمت</span
              >

              <span>استعلام بگیرید</span>
            </li>
          </ul>
          <div
            v-if="$parent.product.main.description"
            class="product-description"
          >
            <span class="gray-text">توضیحات</span>
            <p v-html="$parent.product.main.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
