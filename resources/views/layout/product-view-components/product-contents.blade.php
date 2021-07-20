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
          class="green-button hidden-xs hidden-sm"
        >
        <i class="fas fa-phone-square-alt" ></i>
          اطلاعات تماس
        </button>
          @endif
          @if($product['user_info']->has_phone)
          <button
            class="hidden-xs hidden-sm send-message-button green-button"
          >
          <i class="fas fa-comment-alt"></i>

            چت با فروشنده
          </button>
          @else
          <button
            class="hidden-xs hidden-sm green-button"
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
                <i class="fa fa-folder"></i> دسته بندی
              </span>

              <span >
                {{$product['main']->sub_category_name}}
              </span>
            </li>
            <li>
              <span class="gray-text">
                <i class="fa fa-map-marker-alt"></i> استان / شهر</span
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
            <li >
              <span class="gray-text">
                <i class="fas fa-dollar-sign"></i> قیمت</span
              >

              <span>استعلام بگیرید</span>
            </li>
          </ul>
          <div
            class="product-description"
          >
            <span class="gray-text">توضیحات</span>
            <p >
              {!! $product['main']->description !!}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
