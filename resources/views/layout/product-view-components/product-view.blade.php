<div id="main-content" class="container-fluid padding-0-30 main-content-wrapper">


    <main id="main" class="row">
      <div class="col-xs-12 text-rtl text-right bread-crumbs-wrapper hidden-xs">
        <div class="row" v-if="product">
          <?php 

          
?>
          <a 
          href="{{'/product-list'}}"
          >
            همه دسته ها
            <i class="fa fa-angle-left"></i>
          </a>

          <a
          href="{{'/product-list/category/' . str_replace(' ','-',$product['main']->super_category_name)}}"
          >
          {{$product['main']->super_category_name}}
            <i class="fa fa-angle-left"></i>
          </a>
          <a
          href="{{'/product-list/category/' . str_replace(' ','-',$product['main']->category_name)}}"
          >
          {{$product['main']->category_name}}
            <i class="fa fa-angle-left"></i>
          </a>
          <a
          href="{{'/product-list/category/' . str_replace(' ','-',$product['main']->sub_category_name)}}"
          >
          {{$product['main']->sub_category_name}}
            <i class="fa fa-angle-left"></i>
          </a>
          <span>
            {{$product['main']->product_name}}
          </span>
        </div>
      </div>
      <div class="col-xs-12 product-section-wrapper col-lg-8 pull-right">
        <section class="main-content">
          <div class="row">
            @include('layout.product-view-components.product-contents')
          </div>
        </section>
      </div>

      <div class="col-xs-12 col-lg-4
                  hidden-xs hidden-sm hidden-md
                  user-section-wrapper
                  pull-left">
            @include('layout.product-view-components.profile-info')
      </div>


      <div
      class="section-wrapper col-xs-12 related-product"
    >
      <div class="row">
        <h3 class="box-title">محصولات مرتبط</h3>
        <div id="related-products-wrapper" class="products-contents">
          
          @foreach ($related_products as $product_item)
              
          
          <div
            class="col-xs-6 col-sm-4 items-wrapper pull-right col-md-3 col-lg-2"
          >
          <?php// var_dump($product_item)
           ?>
          <article
              class="main-content-item "
            >

              <a target="_blank"  rel="nofollow" href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product_item->subcategory_name) .'/' . str_replace(' ', '-', $product_item->category_name) . '/' .   $product_item->id  }}"
                class="main-article-contents-wrapper pointer-class "
              >

              <div class="main-article-contents-image-wrapper" >
              
                <div class="main-article-image">
                  <div class="image" >
                    <img src="{{url('/storage') . '/thumbnails/' . $product_item->photo}}"  alt=" {{$product_item->category_name . ' | ' . $product_item->subcategory_name . ' ' .  $product_item->product_name }}" />
                    </div>
                </div>
                <h3 class="article-title grid-list-title">
                <p>
                  {{$product_item->category_name . ' | ' . $product_item->subcategory_name  }}
                  <span>
                    {{$product_item->product_name}}
                  </span>
                </p>
                </h3>
              </div>
                  <a href="{{'/profile/' . $product_item->user_name}}" class="user-information-link">
                      
                    
                      <div
                        class="user-information-content"
                      >
                      <a
                      class="user-name-link"
                      href="{{'/profile/' . $product_item->user_name}}"
                    >
                    <i class="fa fa-user-circle"></i>
                      {{$product_item->first_name . ' ' . $product_item->last_name}}
                    
                      </a>
                    </div>
                  </a>
                  <div class="main-article-contents" >
                    
                    <div>
                      <p>
                        <i class="fa fa-map-marker-alt"></i>

                        <span
                        >
                        {{$product_item->province_name . ' - ' . $product_item->city_name  }}
                      </span>
                        </p>
                        <p>
                        <i class="fa fa-box-open"></i>
                        <span >
                          
                          @php 
                          $stock = $product_item->stock;

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
              </a>

            </article>
          </div>
          @endforeach
        </div>
      </div>
    </div>

      <div class="buttons-wrapper col-xs-12">
        <a
          href="{{'/product-list/category/' . implode('-',explode(' ',$product['main']->sub_category_name)) }}"
          class="green-button blue-button"
          >مشاهده همه محصولات</a
        >
      </div>

      <div
        v-if="product.main.product_name && !isMyProfile"
        class="fix-send-message-wrapper hidden-lg hidden-md"
      >
      
      @if($product['user_info']->has_phone)
      <button
          class="green-button"
        >
        <i class="fas fa-phone-square-alt" ></i>

          اطلاعات تماس
        </button>
      @endif

      @if($product['user_info']->has_phone)
          <button
            class=" send-message-button green-button"
          >
          <span
          >
          <i class="fas fa-comment-alt"></i>
            چت
          </span>
          </button>
          @else
          <button
            class=" green-button"
          >
          <span >
            <i class="fas fa-comment-alt"></i>
             چت با فروشنده </span>
          </button>
          @endif

      </div>
      
    </main>
  </div>