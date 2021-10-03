<div>
 


    <!-- =========================
        Intro SECTION
    ==============================-->

    <section id="intro" class="container-fluid">
      <!-- <div class="particle-network-animation"></div> -->
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div name="fadeIn">
              <h1 class="intro-site-title">
                باسکول | بازار خرید و فروش عمده محصولات غذایی و کشاورزی
              </h1>
            </div>

            <div
              name="fadeIn"
              delay="0.5s"
              duration="1s"
              :iteration="1"
              :offset="0"
              animateClass="animated"
              :begin="false"
            >
              <h2 class="intro-site-title">
                ارتباط مستقیم با خریداران و فروشندگان عمده محصولات غذایی و
                کشاورزی
              </h2>
            </div>

            <div class="search-wrapper">
              <div class="hero-search-input">
                <nav class="custom-mega-menu hidden-xs">
                  <ul>
                    <li>
                      <button
                        @click.prevent="openFilterModal(false)"
                        class="open-categories hidden-lg"
                      >
                        <span> همه محصولات </span>
                        <i class="fa fa-angle-down"></i>
                      </button>
                      <button class="open-categories hidden-sm hidden-md">
                        <span> همه محصولات </span>
                        <i class="fa fa-angle-down"></i>
                      </button>
                    </li>
                  </ul>
                </nav>
                <input
                  type="text"
                  placeholder="محصول مورد نظر خود را جستجو کنید"
                  v-model="mainSearchBoxText"
                />
                <button
                  class="hidden-sm hidden-md hidden-lg fa fa-search"
                ></button>

                <button class="hidden-xs" >
                  <i class="fa fa-search"></i>
                </button>
              </div>

              <a href="/product-list" class="green-button">
                لیست محصولات
                <i class="fa fa-angle-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
        Secondary Nav SECTION
    ==============================-->
    <section id="categories-banner" class="categories-banner container">
      <div class="web-banner-wrapper hidden-xs hidden-sm col-xs-12">
        <div class="row">
          <div class="banner-item-wrapper">
            <div class="pull-right col-xs-3">
              <a
                href="{{'/product-list/category/'  . str_replace(' ', '-', 'حبوبات')  }}"

                class="banner-item banner-item-1"
              >
              <div class="banner-contents">
                  <p>حبوبات</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="pull-right col-xs-9">
              <a
                href="{{'/product-list/category/'  . str_replace(' ', '-', 'میوه')  }}"

                class="banner-item banner-item-2"
              >
              <div class="banner-contents">
                  <p>میوه</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="pull-right col-xs-3">
              <a
                href="{{'/product-list/category/'  . str_replace(' ', '-', 'ادویه')  }}"

                class="banner-item banner-item-3"
              >
              <div class="banner-contents">
                  <p>ادویه</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="pull-right col-xs-6">
              <a
                href="{{'/product-list/category/'  . str_replace(' ', '-', 'صیفی')  }}"
                class="banner-item banner-item-4"
              >
              <div class="banner-contents">
                  <p>صیفی</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="pull-right col-xs-3">
              <a
                href="{{'/product-list/category/'  . str_replace(' ', '-', 'غلات')  }}"
                class="banner-item banner-item-5"
              >
              <div class="banner-contents">
                  <p>غلات</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="pull-right col-xs-6">
              <a
                href="{{'/product-list/category/'  . str_replace(' ', '-', 'خشکبار')  }}"
                class="banner-item banner-item-6"
              >
              <div class="banner-contents">
                  <p>خشکبار</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="pull-right col-xs-3">
              <a
                href="{{'/product-list/category/'  . str_replace(' ', '-', 'دامپروری')  }}"
                class="banner-item banner-item-7"
              >
              <div class="banner-contents">
                  <p>دامپروری</p>
                  <div>
                    مشاهده همه
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="pull-right col-xs-3">
              <a
                class="banner-more-categories"
                href="/product-list"
              >
                <div class="banner-contents">
                  <p>
                    <i class="fa fa-list"></i>
                  </p>
                  <div>
                    همه دسته ها
                    <i class="fa fa-arrow-left"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-banner-wrapper hidden-md hidden-lg">
        <div class="row">
          <div class="mobile-banner">
            <div class="banner-item-wrapper">
              
              @foreach ($categories as $item)

                  @if($item->category_name == "کشاورزی")
                    @foreach ($item->subcategories as $subcategory) 
                      <div
                      class="col-xs-3 pull-right"
                    >
                      <a
                      href="{{'/product-list/category/'  . str_replace(' ', '-', $subcategory->category_name)  }}"
                        class="banner-item"
                      >
                      <?php
                          $banner_class = '';
                            switch ($subcategory->category_name) {
                              case  'میوه':
                                $banner_class = 'banner-item-2';
                                break;
                              case  'صیفی':
                                $banner_class = 'banner-item-4';
                                break;
                              case  'غلات':
                                $banner_class = 'banner-item-5';
                                break;
                              case  'خشکبار':
                                $banner_class = 'banner-item-6';
                                break;
                              case  'ادیه':
                                $banner_class = 'banner-item-3';
                                break;
                              case  'دامپروری':
                                $banner_class = 'banner-item-7';
                                break;
                              case  'حبوبات':
                                $banner_class = 'banner-item-1';
                                break;

                              default:
                                $banner_class = 'banner-item-2';
                                break;
                            }
                          ?>
                        <div
                          class="item-image <?php echo $banner_class; ?> "
                        ></div>
                        <p class="item-text">
                          {{$subcategory->category_name}}
                        </p>
                      </a>
                    </div>
                    @endforeach
                  @endif

              @endforeach

              
              <div class="col-xs-3 pull-right">
                <a
                href="/product-list"
                  class="banner-item all-banners"
                >
                  <div class="item-image">
                    <i class="fa fa-list"></i>
                  </div>
                  <p class="item-text">همه</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
        Product SECTION
    ==============================-->
    <section
      id="product-section"
      class="section-wrapper container-fluid latest-product"
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 pull-left col-md-9">
            <div class="section-title">آخرین محصولات ثبت شده</div>

            <div class="col-xs-12 products-contents">
              <div v-if="lastProducts" class="row">
                <?php 
                foreach ($sample_products as  $product) {
                ?>
                <div
                class="col-xs-6 grid-list col-sm-4 col-md-3 pull-right"
                >
                      <article
                        class="main-content-item "
                      >
                      <a target="_blank"  rel="nofollow" 
                      href="{{'/product-view/'  . str_replace(' ', '-', 'خرید-عمده-' .$product->subcategory_name) .'/' . str_replace(' ', '-', $product->category_name) . '/' .   $product->id  }}"
                      class="main-article-contents-wrapper pointer-class is-user-valid-content"
                      >
                      <div class="main-article-contents-image-wrapper" >
                      
                        <div class="main-article-image">
                          <div class="image" >
                            <img src="{{url('/storage') . '/thumbnails/' . $product->photo}}"  alt=" {{$product->category_name . ' | ' . $product->subcategory_name . ' ' .  $product->product_name }}" />
                            </div>
                        </div>
                        <h3 class="article-title grid-list-title">
                         <p>
                          {{$product->category_name . ' | ' . $product->subcategory_name  }}
                          <span>
                            {{$product->product_name}}
                          </span>
                         </p>
                        </h3>
                      </div>
                          <a href="#" class="user-information-link">
                              <div
                                class="user-information-content"
                              >
                              <a
                              class="user-name-link"
                              href="#"
                            >
                            <i class="fa fa-user-circle"></i>
                              {{$product->first_name . ' ' . $product->last_name}}
                              </a>
                              @if($product->is_verified) 
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

                                {{$product->province_name . ' - ' . $product->city_name  }}
                              </span>
                                </p>
                                <p>
                                 <i class="fa fa-box-open"></i>
                                <span >
                                  @php 
                                  $stock = $product->stock;
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
                <?php 
              }
              ?>
              </div>
             
            </div>
            
          </div>

          <div class="col-xs-12 col-md-3 pull-right">
            <div  class="title-box">
              <div class="section-title">ثبت نام خریداران</div>
              <p>
                برای استعلام قیمت و خرید محصولات کشاورزی از بهترین فروشندگان
                عمده هم اکنون ثبت نام کنید
              </p>

              <a class="green-button" href="/register"
                >ثبت نام رایگان
                <i class="fa fa-angle-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================
        Request SECTION
    ==============================-->

    <section
      id="requests-section"
      class="section-wrapper container-fluid "
    >
      <div class="container">
        <div class="row">
          <div class="col-xs-12 pull-left col-md-9">
            <div class="section-title">آخرین درخواست های خرید</div>
            
            @foreach ($sample_buyAds as $buyAd)
            <div
            class="col-xs-12 col-sm-6 col-md-4"
          >
          <div class="buyAd-wrapper-item col-xs-12">
            <div class="list-title list-name col-xs-12">
              <div class="user-information-wrapper">
                <div class="user-information-content">
                  <div class="user-content">
                    <i class="fa fa-user-circle"></i>
                    <span
                      class="user-name-link"
                    >
                    {{$buyAd->first_name . ' ' . $buyAd->last_name}}

                    </span>
                  </div>
                </div>
              </div>
              <div class="buyer-text">
                <div>
                  <span> خریدار </span>
                  <span
                    class="red-text"
                  >
                  @php 
                  $requirement_amount = $buyAd->requirement_amount;
                  if($requirement_amount > 1000){
                    $requirement_amount = $requirement_amount / 1000 . ' تن';
                  }else{
                    $requirement_amount = $requirement_amount . ' کیلوگرم';
                  }
                  @endphp
                  {{ $requirement_amount }}
                </span>
                  <span class="brand-text">
                    {{$buyAd->subcategory_name}}
                  </span>
                  @if ($buyAd->name)
                  <span v-if="buyAd.name"> از نوع </span>
                  <span class="brand-text">
                    {{$buyAd->name}}
                  </span>
                  @endif
                  <span> هستم </span>
                </div>
              </div>
            </div>
        
            <p class="list-time" >
              {{$buyAd->register_date}}
            </p>
          </div>
          </div>
            @endforeach
            
          </div>

          <div class="col-xs-12 col-md-3 pull-right">
            <div  class="title-box">
              <div class="section-title">ثبت نام فروشندگان</div>
              <p>
                برای فروش بدون واسطه محصولات کشاورزی خود به خریداران مستقیم و
                صادرکنندگان هم اکنون ثبت نام کنید
              </p>
              <a
              href="/register"
                class="green-button"
                >ثبت نام رایگان <i class="fa fa-angle-left"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="services-section" class="section-wrapper container-fluid">
      <div class="container">
        <div class="row">
          <h3 class="col-xs-12">
            ارتباط مستقیم با خریداران و فروشندگان عمده محصولات کشاورزی
          </h3>

          <div class="service-boxs-wrapper col-xs-12">
            <div class="row">
              <div class="col-xs-12 col-md-4 hidden-md hidden-lg">
                <article class="service-box main-incobac-logo">
                  <a  href="/help">
                    <div class="box-image">
                      <img src="{{asset('assets/img/logo/web-logo.svg')}}" />
                    </div>
                    <h4>باسکول چیست؟</h4>
                    <p>
                      باسکول بازار خرید و فروش عمده محصولات کشاورزی
                      <br />است که خریداران را به فروشندگان عمده متصل کرده
                      <br />و خریداران و فروشندگان بدون واسطه می توانند با
                      یکدیگر ارتباط برقرار کنند
                    </p>
                  </a>
                </article>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
                <article class="service-box">
                  <a href="/help">
                    <div class="box-image">
                      <img src="{{asset('assets/img/seller.jpg')}}" />
                    </div>
                    <h4>خدمات فروشندگان</h4>

                    <p>
                      معرفی محصولات به خریداران عمده
                      <br />دسترسی به درخواست های خرید روزانه <br />گسترش شبکه ی
                      تجاری و مشتریان <br />فروش بدون واسطه و مقرون به صرفه
                      <br />
                    </p>
                  </a>
                </article>
              </div>
              <div
                class="col-xs-12 col-sm-6 col-md-4 pull-right hidden-xs hidden-sm"
              >
                <article class="service-box main-incobac-logo">
                  <a href="/help">
                    <div class="box-image">
                      <img src="{{asset('assets/img/logo/web-logo.svg')}}" />
                    </div>
                    <h4>باسکول چیست؟</h4>
                    <p>
                      باسکول بازار خرید و فروش عمده محصولات کشاورزی
                      <br />است که خریداران را به فروشندگان عمده متصل کرده
                      <br />و خریداران و فروشندگان بدون واسطه می توانند با
                      یکدیگر ارتباط برقرار کنند
                    </p>
                  </a>
                </article>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4 pull-right">
                <article class="service-box">
                  <a href="/help">
                    <div class="box-image">
                      <img src="{{asset('assets/img/seller.jpg')}}" />
                    </div>
                    <h4>خدمات خریداران</h4>

                    <p>
                      استعلام قیمت از فروشندگان و کشاورزان
                      <br />دسترسی بدون واسطه به فروشندگان متنوع <br />صرفه جویی
                      در زمان و هزینه خرید محصول <br />گسترش شبکه تامین کنندگان
                      <br />
                    </p>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="register-request-section"
      class="container"
    >
    <div class="section-wrapper col-xs-12">
      <div class="row">
        <div
          class="text-right col-xs-12 form-contents-wrapper"
        >
        <div class="form-wrapper">
          <div class="section-title">ثبت درخواست خرید</div>

          <div class="form-contents col-xs-12">
            <div class="row">
              <div class="col-xs-12 col-md-4 pull-right">
                <h2 class="title-contents col-xs-12">
                  دسته بندی محصول
                  <span class="red-text"> * </span>
                </h2>
                <label for="category" class="description">
                  مثلا: کشاورزی
                </label>

                <div class="input-wrapper select-items">
                  <select
               
                    id="category"
                  >
                    <option value="" selected disabled>انتخاب دسته بندی</option>
                  </select>
                </div>
     
              </div>
              <div class="col-xs-12 col-md-4 pull-right">
                <h2 class="title-contents col-xs-12">
                  زیر دسته بندی
                  <span class="red-text"> * </span>
                </h2>
                <label for="mainSubcategory" class="description">
                  مثلا: میوه
                </label>

                <div class="input-wrapper select-items">
                  <select
           
                    id="mainSubcategory"
                
                  >
                    <option value="" selected disabled>
                      انتخاب زیر دسته بندی
                    </option>
                  </select>
                </div>
              
              </div>

              <div class="col-xs-12 col-md-4">
                <h2 class="title-contents col-xs-12">
                  نام محصول

                  <span class="red-text"> * </span>
                </h2>
                <label for="sub-category" class="description">
                  مثلا: خرما
                </label>

                <div class="input-wrapper select-items">
                  <select
                    id="sub-category"
                  >
                    <option value="" disabled selected>انتخاب نام محصول</option>
                  </select>
                </div>
                
              </div>

              <div class="col-xs-12 col-md-6 pull-right">
                <h2 class="title-contents col-xs-12">
                  نوع
                  <span
                    class="light-green-text"
                    v-text="' ' + subCategoryName + ' '"
                  >
                  </span>
                  مورد نیاز خود را وارد کنید.
                </h2>
                <label for="product-type" class="description">
                  <span > مثلا: مضافتی</span>
                </label>
                <div class="text-input-wrapper">
                  <input
                    id="product-type"
                    type="text"
                    placeholder="نوع محصول مورد نیاز خود را وارد کنید"
                  />
           
                  <i  class="fa fa-edit"></i>
                </div>
                <div class="input-text-wrapper">
                  <p class="error-message">
                    <span
                      class="red-text"
                    ></span>
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-md-6">
                <h2 class="title-contents col-xs-12">
                  میزان نیازمندی

                  <span class="small-label">(کیلوگرم)</span>

                  <span class="red-text"> * </span>
                </h2>
                <label for="requirement_amount" class="description">
                  مثلا: 50,000
                </label>

                <div class="text-input-wrapper">
                  <input
              
                    id="requirement_amount"
                    type="tel"
              
                    placeholder="میزان نیازمندی را وارد کنید"
                    pattern="[0-9]*"
                  />
                  <i class="fa fa-edit"></i>
                </div>

                <div class="input-text-wrapper">
                  <p
                    class="small-description-text"
                    v-if="!errors.requirement_amount"
                  >
                    <span
                      class="blue-text"
                      v-if="requirement_amount_text"
                      v-text="requirement_amount_text"
                    ></span>
                  </p>
                  <p class="error-message">
                    <span
                      class="red-text"
                      v-if="errors.requirement_amount"
                      v-text="errors.requirement_amount"
                    ></span>
                  </p>
                </div>
              </div>
            </div>

            <div class="submit-button-wrapper col-xs-12">
              <div class="row">
                <button
                  class="submit-button disabled"
                >
                  ثبت درخواست
                  <i class="fa fa-check"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </section>

    <section id="main-contents-section" class="container">
      <div class="col-xs-12">
        <div class="row">
          <article class="main-contents-wrapper">
            <h2 class="section-title">عمده فروشی مواد غذایی</h2>
            <p>
              عمده فروشی مواد غذایی به عنوان یک تجارت پرسود در تمام جهان به حساب
              می آید که به صورت کلی دو حالت دارد، در حالت اول خود تولید کننده
              اقدام به فروش محصولات به مصرف کننده اصلی می کند و در حالت دوم، یک
              سری از افراد به عنوان واسطه بین تولید کننده اصلی و مصرف کننده
              نهایی عمل می کنند که اصطلاحا به این افراد بنکدار یا مراکز پخش عمده
              گفته می شود. خرید از تولید کننده اصلی باعث می شود شما در هزینه
              خودتان صرفه جویی کنید و از پرداخت هزینه های جانبی به واسطه های
              متعدد برای رسیدن به کالا خودداری کنید.
            </p>
            <p>
              در حال حاضر افراد زیادی در زمینه عمده فروشی مواد غذایی فعالیت
              دارند و انواع مواد غذایی را با قیمت های مقرون به صرفه در اختیار
              شما قرار می دهند، سایت باسکول به عنوان یک کانال دو طرفه برای
              برقراری ارتباط بین عمده فروشان و خریداران عمل می کند. بنابراین اگر
              شما عمده فروش مواد غذایی هستید می توانید با ثبت نام در سایت
              باسکول، هزاران خریدار از سراسر ایران را در کمترین زمان ممکن جذب
              کنید.
            </p>
            <h2 class="section-title">خرید عمده مواد غذایی</h2>
            <p>
              خرید عمده مواد غذایی به صورت آنلاین به یک روش راحت و کاربردی در
              سال های اخیر تبدیل شده است و طرفداران بسیار زیادی پیدا کرده است.
              خرید عمده هر محصولی از فروشنده اصلی باعث کم کردن هزینه های جانبی
              شما می شود که این موضوع در خصوص خرید عمده مواد غذایی نیز صدق می
              کند و خرید عمده مواد غذایی از کارخانه، بهترین انتخاب برای شما می
              باشد تا با کمک آن بهترین محصول را با قیمت مناسب خریداری کنید. در
              سایت باسکول این امکان برای شما فراهم شده است که فروشندگان مواد
              غذایی را پیدا کرده، محصولات آنها را به نسبت قیمت و کیفیت مقایسه
              کنید و در نهایت بهترین فروشنده را برای خرید عمده مواد غذایی را
              پیدا کرده و با او معامله کنید.
            </p>
            <p>
              همچنین شما می توانید بعد از ثبت نام در سایت یا اپلیکیشن، یک
              درخواست خرید عمده مواد غذایی با جزئیاتی مانند میزان و نوع محصول
              مورد نظر خودتان، ثبت کنید و منتظر بمانید تا فروشنده مورد نظر با
              شما ارتباط برقرار کند.
            </p>
            <h2 class="section-title">قیمت عمده مواد غذایی</h2>
            <p>
              همانطور که می دانید مواد غذایی شامل اقلام بسیار زیاد و متنوعی است
              که هر یک از آنها دارای قیمت های متفاوتی می باشند. به صورت کلی قیمت
              عمده مواد غذایی به عوامل مختلفی مانند نحوه ارائه، کیفیت، بسته
              بندی، نوع مواد غذایی و غیره بستگی دارد اما این موضوع در خصوص همه
              اقلام مواد غذایی صدق می کند که اگر شما محصول مورد نظر خودتان را از
              تولید کننده اصلی یعنی شرکت های تولیدی، خریداری کنید، واسطه ها را
              از بین خواهید برد و قیمت نهایی محصول بسیار پایین تر از حد انتظار
              خواهد بود. یکی از مهم ترین ویژگی های وب سایت باسکول این است که
              خریدار می تواند با هزاران فروشنده مواد غذایی از سراسر ایران ارتباط
              برقرار کند و از آنها استعلام قیمت بگیرید و در نتیجه به نسبت کیفیت
              و برند مواد غذایی تصمیم به خرید محصول با قیمت مورد نظر خودش بگیرد.
            </p>
            <h2 class="section-title">فروش عمده مواد غذایی</h2>
            <p>
              بازار خرید و فروش مواد غذایی، یکی از پر رونق ترین و فعال ترین
              بازارهای حال حاضر در جهان و ایران است و به علت حضور در چرخه تامین
              غذا فعالیت آن دائمی است و در تمام طول سال مشتریان خاص خودش را
              دارد. برای فروش عمده مواد غذایی می توانید وارد سایت یا اپلیکیشن
              باسکول شوید و محصولات خودتان را بارگذاری کنید تا خریداران عمده
              بتوانند آنها را مشاهده کنند و در صورت تطابق با نیازشان با شما تماس
              برقرار کنند.
            </p>
            <p>
              بنابراین اگر در زمینه فروش عمده مواد غذایی فعالیت دارید، انتخاب
              سایت باسکول به عنوان بستر فروش محصولات خود به صورت آنلاین، می
              تواند بهترین گزینه و انتخاب برای شما باشد و شما را با خریداران
              معتبر آشنا میکند.
            </p>
            <h2 class="section-title">عمده فروش مواد غذایی</h2>
            <p>
              یکی از مشکلاتی که عمده فروش مواد غذایی با آن سروکار دارد، واسطه
              های بسیار زیاد است، در واقع واسطه ها، مواد غذایی را با قیمت خیلی
              پایین خریداری می کند و با قیمتی بالاتر در اختیار خریدار بعدی قرار
              می دهند، که خوشبختانه در سال های اخیر با توجه به اینکه تعداد زیادی
              عمده فروش مواد غذایی با پلتفرم های آنلاین آشنا شدند و به دنبال
              فروش محصول خود به خریدار اصلی با قیمت مناسب و واقعی هستند، این
              مشکلات کمتر شده است. سایت باسکول در همین راستا میتواند شما را با
              خریداران متعددی آشنا کند و روند فروش مواد غذایی را بهبود ببخشد.
            </p>
            <h2 class="section-title">سایت عمده فروشان</h2>
            <p>
              زمانی که حرف از سایت عمده فروشان زده می شود، معمولا یک سوال اساسی
              در ذهن افراد در خصوص میزان امنیت معاملات شکل می گیرد، سایت باسکول
              با استراتژِی های متعدد سعی در این دارد که شما یک معامله کاملا ایمن
              با خریداران و فروشندگان معتبر داشته باشد و در همین راستا سیستم های
              اعتبار سنجی و احراز هویت را به کار برده است تا هر دو طرف معامله با
              امنیت بیشتری با یکدیگر آشنا شوند. باسکول به عنوان سایت عمده فروشان
              شناخته شده است و روزانه هزاران فروشنده عمده در این سایت به فعالیت
              میپردازند.
            </p>
            <h2 class="section-title">فروش عمده محصولات کشاورزی</h2>
            <p>
              فروش عمده محصولات کشاورزی به صورت مستقیم و بدون واسطه باعث می شود
              هر دو طرف معامله، یعنی فروشنده و خریدار سود بیشتری کسب کنند، در
              واقع در این حالت نیازی به پرداخت هزینه به واسطه های متعدد نیست و
              شما میتوانید محصول کشاورزی را با قیمت واقعی خریداری کنید که این
              موضوع در خصوص اقلام کشاورزی نیز صدق می کند و فروشنده یا کشاورز می
              تواند سود بیشتری از فروش محصولات خودش به دست آورد.
            </p>
            <p>
              سایت باسکول این امکان را در اختیار شما قرار داده است که بعد از ثبت
              نام و قرار دادن کالا در سایت، محصول خودتان را با قیمت واقعی و بدون
              دخالت هیچ واسطه ای به فروش برسانید.
            </p>
            <h2 class="section-title">قیمت عمده محصولات کشاورزی</h2>
            <p>
              محصولات کشاورزی به نسبت کیفیت، نوسانات ارز، بسته بندی، نوع محصول و
              نحوه تحویل به صورت فله و بسته بندی، دارای قیمت های بسیار مختلفی می
              باشند و این امکان وجود ندارد که قیمت محصولات کشاورزی به صورت ثابت
              در یک بازه زمانی بماند. بنابراین بهترین راه برای به دست آوردن قیمت
              عمده محصولات کشاورزی برقراری ارتباط با فروشندگان عمده است. در حال
              حاضر هزاران فروشنده محصولات غذایی در سایت باسکول فعالیت دارند که
              شما می توانید برای اطلاع از قیمت عمده انواع محصولات کشاورزی به
              صورت دقیق و به روز، با آنها به صورت مستقیم ارتباط برقرار کرده و از
              آنها استعلام قیمت بگیرید.
            </p>
            <h2 class="section-title">بازار کشاورزی</h2>
            <p>
              همانطور که میدانید بخش کشاورزی یکی مهمترین بخش های تامین نیازهای
              افراد است که شامل بسیاری از مواد غذایی می باشد. در چند سال اخیر
              توجه بسیار زیادی به بازار کشاورزی آنلاین شده است تا جایی که عمده
              خرید و فروش های محصولات کشاورزی به صورت آنلاین صورت می گیرد. در
              حال حاضر پلتفرم های بسیار زیادی در زمینه بازار کشاورزی فعالیت
              دارند و باعث رونق بیشتر بازار خرید و فروش محصولات کشاورزی در جهان
              شده اند.
            </p>
            <p>
              باسکول به عنوان یک پلتفرم که در زمینه بازار کشاورزی آنلاین فعالیت
              دارد، امکان خرید و فروش بدون واسطه و مستقیم را برای شما فراهم می
              کند و شما با کمک آن میتوانید سود بیشتری از خرید و فروش محصولات
              کشاورزی مورد نظر خودتان به دست بیاورید.
            </p>
            <h2 class="section-title">بازار کشاورزی</h2>
            <p>
              باسکول به عنوان یک پلتفرم آنلاین، یک فضای دو طرفه ایجاد کرده و سعی
              دارد با حذف واسطه ها در وقت و هزینه شما تا میزان زیادی صرفه جویی
              کند، عدم دسترسی به فروشندگان و خریداران عمده محصولات کشاورزی باعث
              شده است که بازار خرید آن ها رو به رکود برود و زمینه فعالیت واسطه
              ها را تا حد زیادی گسترش داده است. هدف باسکول این است که یک ارتباط
              مستقیم و بدون واسطه را بین خریدار عمده با فروشنده اصلی ایجاد کند
              تا هر دو طرف، محصول را با قیمت اصلی معامله کنند.
            </p>
            <p>
              در حال حاضر باسکول به عنوان بازارگاه کشاورزی آنلاین، هزاران کشاورز
              یا فروشنده عمده محصولات کشاورزی را در خود جای داده است و شما
              میتوانید به راحتی و با چند کلیک با آنها ارتباط برقرار کنید، در
              صورتی که خود شما فروشنده هستید پیشنهاد می کنیم در سایت باسکول ثبت
              نام کنید و از خدمات متنوع باسکول همچون اطلاع از آخرین درخواست های
              خرید و ارتباط با هزاران خریدار از سراسر کشور برخوردار شوید.
            </p>
            <h2 class="section-title">فروش مستقیم محصولات کشاورزی</h2>
            <p>
              در سال های گذشته فروش مستقیم محصولات کشاورزی برای همه افراد وجود
              نداشت و واسطه گری افراد باعث می شد که کشاورز محصول خود را با هزینه
              کمتر به فروش برساند و از طرف دیگر خریدار قیمت بیشتری برای آن
              پرداخت کند. در حال حاضر سایت ها و پلتفرم هایی وجود دارند که به شما
              امکان فروش مستقیم محصولات کشاورزی را می دهند. سایت باسکول با هدف
              ارتباط دادن تولید کننده اصلی محصولات کشاورزی با خریدار، سعی در
              کاهش هزینه های هر دو طرف دارد و باعث می شود در زمان و هزینه خریدار
              و فروشنده صرفه جویی شود.
            </p>
            <p>
              در حال حاضر هزاران نفر از افرادی که به دنبال فروش مستقیم محصولات
              کشاورزی هستند در سایت باسکول حضور دارند و شما میتوانید محصول مورد
              نظر خودتان را با کیفیت بسیار عالی و قیمت مطلوب از آنها خریداری
              کنید.
            </p>
            <h2 class="section-title">خرید و فروش عمده</h2>
            <p>
              خرید و فروش عمده انواع محصولات به دو صورت حضوری و آنلاین صورت
              میگیرد، که در حال حاضر با توجه به شرایط و مزایای معامله آنلاین،
              بیشتر افراد تمایل به خرید و فروش عمده به صورت آنلاین دارند. شما در
              هر دو صورت محصول خودتان را از بنکدار یا فروشنده عمده، تحویل می
              گیرید با این تفاوت که خرید آنلاین را با چند کلیک ساده انجام می
              دهید و این امکان را دارید که قیمت ها و کیفیت محصولات را مقایسه
              کنید و بهترین انتخاب ممکن را بدون صرف هزینه و هدر رفتن زمان، داشته
              باشید. این موضوع در مورد فروش عمده نیز صدق می کند و بنکدار می
              تواند محصولات مختلفی را در سایت قرار داده و محصول خودش را به افراد
              بیشتری معرفی و در نتیجه با قیمت مناسب به فروش برساند.
            </p>
            <h2 class="section-title">فروش عمده میوه و تره بار</h2>
            <p>
              با توجه به شرایطی همچون عدم دسترسی به بازار های جدید در سطح کشور و
              هزینه های بالای تبلیغات آفلاین، امروزه تلاش کسب و کارهای مختلف
              برای پیشبرد انجام معاملات به صورت آنلاین است که فروش عمده میوه و
              تره بار نیز از این قضیه مستثنی نیست. باسکول به عنوان یک پلتفرم
              برای خریداران و فروشندگان عمده فعالیت دارد و اجتماع بزرگی از
              صادرکنندگان میوه و تره بار به سراسر ایران و خارج از کشور را در خود
              جای داده است، اگر شما هم در زمینه فروش عمده میوه و تره بار فعالیت
              دارید، می توانید محصولات خودتان را با بهترین قیمت به فروش برسانید.
            </p>
            <p>
              از طرف دیگر خریداران میتوانند با صدها سالن سورت و بسته بندی میوه و
              تره بار در سراسر ایران به صورت مستقیم و بدون واسطه ارتباط برقرار
              کرده و محصول مورد نظر خود را از نظر کیفیت و قیمت بررسی کنند و سپس
              اقدام به خرید نمایند.
            </p>
            <h2 class="section-title">فروش عمده میوه و تره بار</h2>
            <p>
              در حال حاضر عمده فروشی آنلاین به یکی از راه های مقرون به صرفه برای
              فروش محصولات به حساب می آید. چند سال پیش کمتر کسی می توانست به
              عمده فروشی آنلاین اعتماد کند و معاملات خودش را به صورت آنلاین
              انجام دهد، اما با گذشت زمان و فعالیت کسب و کارهای مختلف در زمینه ی
              عمده فروشی آنلاین، کم کم افراد به دلیل ویژگی ها و مزیت هایی که
              عمده فروشی آنلاین به نسبت معاملات حضوری داشت، استفاده از این خدمات
              افزایش یافت تا جایی که در حال حاضر بخشی از فروش عمده محصولات مختلف
              مانند مواد غذایی و کشاورزی به صورت آنلاین صورت می گیرد.
            </p>
            <p>
              سایت باسکول در چند سال اخیر توانسته است یک اجتماع از فروشندگان و
              خریداران معتبر از سراسر ایران و جهان در خود تشکیل دهد و باعث رونق
              بیشتر عمده فروشی آنلاین شود. بنابراین اگر شما هم در زمینه خرید و
              فروش عمده فعالیت دارید، پیشنهاد میکنم در سایت باسکول ثبت نام کنید
              و از مزایای آن نهایت استفاده را ببرید.
            </p>
            <h2 class="section-title">فروشگاه عمده</h2>
            <p>
              اگر به دنبال کم کردن هزینه های اضافی و جانبی هنگام خرید عمده
              محصولات مختلف هستید، پیشنهاد میکنم از فروشگاه های عمده آنلاین
              مانند باسکول استفاده کنید و امکان دخالت واسطه ها در معاملات را به
              صفر برسانید. فروشگاه عمده باید دارای یک سری ویژگی ها باشد تا
              اعتماد خریدار و فروشنده را جلب کند و زمینه یک معامله ایمن را برای
              آنها فراهم کند. سایت باسکول امکانات متعددی مانند : مقایسه قیمت و
              کیفیت، اعتبارسنجی فروشنده و خریدار، احراز هویت و غیره را در اختیار
              شما قرار داده است تا از هر گونه سوء استفاده احتمالی جلوگیری کند.
            </p>
            <p>
              بنابراین اگر به دنبال یک فروشگاه عمده معتبر برای فروش محصولات خود
              و یا خرید محصولات از فروشنده اصلی هستید، سایت باسکول بهترین گزینه
              برای شما می باشد.
            </p>
          </article>
        </div>
      </div>
    </section>
    <section id="benefit-links" class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="links-title col-xs-12">لینک های مفید</div>
          <div class="benefit-links-item col-xs-12">
            <div class="row">
              <!-- loop for wholesale date -->

              <?php 

                $rice_names = array(
                  "برنج",
                  "خاطره",
                  "هندی طبیعت",
                  "محسن",
                  "پاکستانی",
                  "طبیعت",
                  "قهوه ای",
                  "شمال",
                  "طارم",
                  "دم سیاه",
                  "هاشمی",
                  "صدری",
                );
                $products_names = array(
                  "خرما",
                  "خرمای مضافتی",
                  "خرمای بم",
                  "خرمای زاهدی",
                  "خرمای بوشهر",
                  "خرمای کبکاب",
                  "خرمای خوزستان",
                  "خرما در مشهد",
                  "خرما در بوشهر",
                  "خرمای مجول",
                  "کشمش",
                  "پسته",
                  "انجیر خشک استهبان",
                  "زعفران",
                );

                foreach ($products_names as $product) {
                ?>


              <h4
                class="col-xs-6 col-sm-4 col-md-2 pull-right"
              >
                  <a
                    href="{{'/product-list/category/'  . str_replace(' ', '-', $product) }}"
                  >
                  <?php echo ' فروش عمده ' . $product ?>
                </a>
              </h4>

              <?php 
              }
              ?>
              <!-- end loop  -->

              <!-- loop for wholesale  -->
              <div
                v-if="categoryList.length"
                v-for="(category, index) in categoryList"
              >
              @foreach ($categories as $master_category)
                @foreach ($master_category->subcategories as $category)
                  @foreach ($category->subcategories as $sub_category)
                    
                    <h4 class="col-xs-6 col-sm-4 col-md-2 pull-right">
                      <a href="{{'/product-list/category/'  . str_replace(' ', '-', $sub_category->category_name) }}"
                        v-text="'فروش عمده' + ' ' + subCategory.category_name" >
                        <?php echo ' فروش عمده ' . $sub_category->category_name ?>
                      </a>
                     </h4>

                  @endforeach
                @endforeach
              @endforeach
                
              </div>
              <!-- end loop  -->

              <!-- loop for wholesale rice -->
              <?php
              foreach ($rice_names as $product) {
                ?>
                <h4
                  class="col-xs-6 col-sm-4 col-md-2 pull-right"
                >
                    <a
                    href="{{'/product-list/category/'  . str_replace(' ', '-', 'برنج') }}"
                    >
                    <?php echo ' فروش عمده ' . $product ?>
                  </a>
                </h4>

              <?php 
                }
              ?>

              <!-- end loop  -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>