<div id="main-content" class="container-fluid  main-content-wrapper">


    <main id="main" class="row">
      <div class="col-xs-12 text-rtl text-right bread-crumbs-wrapper">
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


      <section
      id="product-section"
      class="section-wrapper col-xs-12 latest-product"
    >
      <div class="row">
        <h3 class="box-title">محصولات مرتبط</h3>

        <div class="products-contents">
            @php 
            $i = 0
            @endphp
            @foreach ($related_products as $product_item)
              
              <div class=" product-carousel col-xs-6 col-sm-4 col-md-3"
              >
                <article class="carousel-item box-content">
                  <a href="{{'/product-view/' . 'خرید-عمده-' .  implode(explode(' ',$product_item->subcategory_name),'-') . '/' . $product_item->category_name . '/' . $product_item->id }}" class="carousel-img text-center">
                    <img

                      src="{{url('storage/') . '/' .$product_item->photo}}"
                      class="main-image main-image-load"
                    />
                  </a>
                  
                  <a href="{{'/product-view/' . 'خرید-عمده-' .  implode(explode(' ',$product_item->subcategory_name),'-') . '/' . $product_item->category_name . '/' . $product_item->id }}" class="carousel-title">
                    
                  <h4 >
                    {{
                      $product_item->product_name
                    }}
                  </h4>
                
                </a>
                <a href="#" class="stock-wrapper">

                    <span>موجودی</span>
                    <span >
                      {{
                        $product_item->stock
                      }} کیلوگرم
                    </span>
                
                </a>
                </article>
              </div>

              @php
              $i++
              @endphp
            @endforeach
          
        </div>
      </div>
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
    </section>

      <div class="buttons-wrapper col-xs-12">
        <a
          href="{{'/product-list/category/' . implode('-',explode(' ',$product['main']->sub_category_name)) }}"
          class="green-button blue-button all-products-button"
          >مشاهده همه محصولات</a
        >
      </div>

      <div
        v-if="product.main.product_name && !isMyProfile"
        class="fix-send-message-wrapper hidden-lg hidden-md"
      >
      
      @if($product['user_info']->has_phone)
      <button
          class="main-button bg-orange white-text"
        >
        <i class="fas fa-phone-alt" ></i>

          تماس با فروشنده
        </button>
      @endif

      @if($product['user_info']->has_phone)
          <button
            class=" send-message-button main-button button-shadow bg-soft-orange orange-text"
          >
          <span
          >
          <i class="fas fa-comment-alt"></i>
            چت با فروشنده
          </span>
          </button>
          @else
          <button
            class="main-button bg-orange white-text"
          >
          <span >
            <i class="fas fa-comment-alt"></i>
             چت با فروشنده </span>
          </button>
          @endif

      </div>
      
    </main>
  </div>