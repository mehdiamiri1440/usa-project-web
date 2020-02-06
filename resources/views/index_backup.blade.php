<!DOCTYPE html>
<html lang="fa">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="خرید و فروش مستقیم محصولات کشاورزی">
    <meta name="keywords" content="محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,باسکول">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- site title -->
    <title>باسکول | بازارگاه کشاورزی</title>

    <!-- Bootstrap css -->
    <link rel="stylesheet" href="{{asset('index/css/bootstrap.min.css')}}">

    <!-- Animated css -->
    <link rel="stylesheet" href="{{asset('index/css/animate.css')}}">

    <!-- Font Awesome css -->
    <link rel="stylesheet" href="{{asset('index/css/font-awesome.min.css')}}">

    <!-- Owl Carousel css -->
    <link rel="stylesheet" href="{{asset('index/css/owl.theme.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/owl.carousel.css')}}">

    <!-- Magnific Popup css -->
    <link rel="stylesheet" href="{{asset('index/css/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/particleNetwork.css')}}">
    <!-- Main css -->
    <link rel="stylesheet" href="{{asset('index/css/style2.css')}}">
    <script src="{{asset('assets/cdn/vue.js')}}"></script>
    <script src="{{asset('assets/cdn/axios.js')}}"></script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-129398000-1');
    </script>

</head>

<body data-spy="scroll" data-offset="50" data-target=".navbar-collapse">


<!-- =========================
 PRE LOADER
============================== -->

<div class="preloader">
    <div class="sk-spinner sk-spinner-pulse"></div>
</div>


<!-- =========================
 NAVIGATION LINKS
============================== -->
<div id="app">
<div class="navbar container-fluid navbar-fixed-top custom-navbar" role="navigation">
    <div class="container-fluid">
        <!-- navbar header -->
        <div class="navbar-header">
            @if(session('user_id'))
                <div class="user-header-mobile">
                    <div class="profile-menu-header">
                        <a href="#" @click.prevent ="dropdown()">
                            <div class="image-header-profile">
                                @if(session('profile_photo'))
                                    <img src="{{'storage/'  . session('profile_photo')}}">
                                @else
                                    <img src="{{asset('assets/img/user-defult.png')}}">
                                @endif
                            </div>
                            <i aria-hidden="true" class="fa fa-angle-down"></i>
                        </a>
                        <div class="profile-list">
                            <ul class="list-unstyled">
                                <li class="list-item"><a
                                            href="{{route('profile_basic')}}">داشبورد</a></li>
                                <li class="list-item"><a href="/dashboard/password">تغییر کلمه عبور</a></li>
                                <li class="list-item"><a href="{{route('logout')}}">خروج</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            @endif
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
            </button>
            <a class="navbar-brand test" href="">
            </a>
            <p class="logo-des hidden-xs hidden-sm">
                باسکول | بازارگاه آنلاین دنیای کشاورزی
            </p>

        </div>

        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
                @if(!session('user_id'))
                    <li><a href="{{route('login_page')}}" class="smoothScroll">ورود/ثبت نام</a></li>
                @endif
                <li><a href="" class="smoothScroll">صفحه ی اصلی</a></li>
                <li><a href="/about-us" class="smoothScroll">درباره ما</a></li>
                <li><a href="/privacy-and-policy" class="smoothScroll">قوانین و مقررات</a></li>
                <li><a href="http:\\www.blog.buskool.com" class="smoothScroll">وبلاگ</a></li>
                <li><a href="/product-list" class="smoothScroll">لیست محصولات </a></li>


                @if(session('user_id'))

                    <li class="user-header-web">
                        <div class="profile-menu-header"><a href="#" @click.prevent ="dropdown()">
                                <div class="image-header-profile">
                                    @if(session('profile_photo'))
                                        <img src="{{'storage/'  . session('profile_photo')}}">
                                    @else
                                        <img src="{{asset('assets/img/user-defult.png')}}">
                                    @endif
                                </div>
                                <i aria-hidden="true" class="fa fa-angle-down"></i> <span
                                        class="name-header-profile">{{session('full_name')}}</span></a>
                            <div class="profile-list">
                                <ul class="list-unstyled">
                                    <li class="list-item"><a
                                                href="{{route('profile_basic')}}">داشبورد</a></li>
                                    <li class="list-item"><a href="/dashboard/password">تغییر کلمه عبور</a></li>
                                    <li class="list-item"><a href="{{route('logout')}}">خروج</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                @endif
            </ul>
        </div>

    </div>
</div>


<!-- =========================
INTRO SECTION
============================== -->


<section id="intro" class="parallax-section">
    <div class="particle-network-animation"></div>
    <div class="container-fluid main_hero_section col-xs-12">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1 class="wow fadeIn main-logo" data-wow-delay="1s"><img
                                src="{{asset('/index/images/logo_white.png')}}">
                    </h1>
                    <h2 class="wow fadeIn" data-wow-delay="1.2s">باسکول | سامانه خرید و فروش عمده محصولات
                        کشاورزی</h2>
                </div>
                <div class="col-xs-12">

                        <div class="search_input col-xs-12 col-sm-8 col-sm-offset-2">
                            <input type="text" placeholder="محصول مورد نظر خود را جستجو کنید" v-model="mainSearchBoxText">
                            <button class="fa fa-search" @click="search"></button>
                        </div>

                </div>
                <div class="col-xs-12">
                    <a href="{{route('login_page')}}" class="btn btn-purple  smoothScroll wow fadeInUp"
                       data-wow-delay="1.4s">ورود به سامانه</a>
                    <a href="/product-list" class="btn btn-green smoothScroll wow fadeInUp "
                       data-wow-delay="1.4s"> لیست محصولات</a>
                </div>
                <div class="col-xs-12">
                    <div class="mouse-animation">
                        <a href="#detail"> <span class="fa fa-angle-down"></span></a>
                    </div>
                </div>


            </div>
        </div>

    </div>


</section>


<!-- =========================
DETAIL SECTION
============================== -->

<section id="detail" class="parallax-section">
    <div class="container">

        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img src="{{asset('index/images/1.png')}}" class="img-responsive">
                <h4>خرید و فروش بی واسطه</h4>
            </div>
        </div>

        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img src="{{asset('index/images/2.png')}}" class="img-responsive">
                <h4>گسترش ارتباط تجاری</h4>
            </div>
        </div>

        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img src="{{asset('index/images/3.png')}}" class="img-responsive">
                <h4>یافتن شرکای مطمئن</h4>
            </div>
        </div>


        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img src="{{asset('index/images/4.png')}}" class="img-responsive">
                <h4>پرداخت مطمئن و آسوده</h4>
            </div>
        </div>
        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img src="{{asset('index/images/5.png')}}" class="img-responsive">
                <h4>بازرسی و نظارت محصول</h4>
            </div>
        </div>
        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img src="{{asset('index/images/6.png')}}" class="img-responsive">
                <h4>افزایش اعتماد و شفافیت</h4>
            </div>
        </div>
    </div>

</section>

<!-- =========================
SERVICES SECTION
============================== -->

<section id="services" class="parallax-section">
    <div class="container">
        <div class="row">
            <h2>خدمات باسکول</h2>
            <div class="col-xs-12 col-sm-6">
                <div class="title_image_service">
                    <img src="{{asset('index/images/buyer.jpg')}}" alt="">
                </div>
                <div class="contents_service text-center">
                    <h3 class="title_service">
                        خدمات خریداران و تجار
                    </h3>
                    <div class="content_service">
                        <ul>
                            <li><span>استعلام قیمــت از تامیــن کننــدگان و کشــاورزان</span>
                            </li>
                            <li><span>استفـــاده از خدمات نظارت و بازرســی محصـــول</span>
                            </li>
                            <li><span>ساخت پروفایل تجــاری جهــت انجــام معامــلات</span>
                            </li>
                            <li><span>پرداخــت امن، آســوده و نقدی بصورت الکترونیکی</span>
                            </li>
                            <li><span>دستـرسی گستــرده به کشـاورزان و تولیـد کننـدگان</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <div class="title_image_service">
                    <img src="{{asset('index/images/seller.jpg')}}" alt="">
                </div>
                <div class="contents_service text-center">
                    <h3 class="title_service">
                        خدمات تامین کنندگان

                    </h3>
                    <div class="content_service">
                        <ul>
                            <li><span>ساخت پروفایل حرفه ای جهــت فروش محصـولات</span>
                            </li>
                            <li><span>دسترســـی به خریــداران واقعــی جهــت فروش</span>
                            </li>
                            <li><span>امکــان عقـــد قرارداد جهــت فروش محصــولات</span>
                            </li>
                            <li><span>بهره گیری از پرداخت کاملا نقـدی برای معامـــلات</span>
                            </li>
                            <li><span>بهره مندی از مشاوره تخصصی کارشناسان باسکول</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

<!-- =========================
 REQUERS
============================== -->

<section id="request" class="parallax-section">
    <div class="container">
        <div class="row">
            <h3 class="text-center col-xs-12"> محصولات</h3>
            <div class="text-center col-xs-12">
                <a href="/product-list" class="green-bot">
                    مشاهده همه محصولات
                </a>
            </div>
            <div class="owl-carousel col-xs-12">

                <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                    <image-viewer
                        :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                        :img="'storage/' + product.photos[0].file_path"
                        :link="'/product-list/' + product.main.sub_category_name"
                        >
                    </image-viewer>
                </article>

            </div>
        </div>
    </div>
</section>


<!-- =========================
TESTIMONIAL SECTION
============================== -->

<section id="testimonial" class="">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class=" wow bounceIn col-xs-12 col-sm-6">
                <div class="section-title">
                    <figure>
                        <img src="{{asset('index/images/farmer.png')}}" class="img-responsive"
                             alt="feature"></figure>
                    <h3><span>50</span>
                        تامین کننده تایید شده
                    </h3>
                </div>
            </div>
            <div class=" wow bounceIn col-xs-12 col-sm-6">
                <div class="section-title">
                    <figure>
                        <img src="{{asset('index/images/current.png')}}" class="img-responsive"
                             alt="feature"></figure>
                    <h3>
                        <span>10</span>
                        پروژه موفق انجام شده
                    </h3>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- =========================
RECENT BLOG POSTS SECTION
============================== -->
<section id="recent" class="parallax-section">
    <div class="container">
        <div class="row">
            <h2 style="margin: 10px auto 20px ">وبلاگ باسکول</h2>
            <div class=" wow fadeIn  col-sm-4 animated" data-wow-delay="0.9s"
                 style="visibility: visible; animation-delay: 0.9s; animation-name: fadeIn;" v-for="post in posts">
                <div class="detail-thumb">
                    <div class="img-thumb">
                        <img :src="post.img_url">
                    </div>
                    <h3>@{{post.post_title}}</h3>
                    <p v-html="post.post_content.substr(0,150) + '...'"></p>
                    <a :href="post.guid" class="btn-buskool">بیشتر بخوانید ...</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- =========================
FAQ SECTION
============================== -->

<section id="faq" class="parallax-section">
    <div class="container">
        <div class="row">

            <div class="wow bounceIn col-md-12 col-sm-12 text-center">
                <div class="section-title">
                    <h2>سئوالات متداول شما چیست ؟</h2>

                </div>
            </div>

            <div class="wow fadeInUp col-xs-12" data-wow-delay="0.9s">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                   aria-expanded="false" aria-controls="collapseOne">
                                    بازارگاه الکترونیکی چیست؟
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                             aria-labelledby="headingOne">
                            <div class="panel-body">
                                <p> بازارگاه الکترونیکی یک بستر تجارت نوین است که فروشندگان و خریداران را به هم متصل می
                                    کند.
                                    پیش از این بسیاری از خریداران و فروشندگان در پیدا کردن یکدیگر مشکل داشتند، لذا
                                    بازارگاه یک کارایی مهم در یک بازار ناکارآمد را ایجاد می کند. </p>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <h4 class="panel-title">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                                   aria-expanded="false" aria-controls="collapseTwo">
                                    تعرفه های ثبت آگهی در باسکول چگونه است؟
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="headingTwo">
                            <div class="panel-body">
                                <p>تمامی خدمات از جمله ثبت آگهی،ساخت پروفایل شخصی، مشاهده ی اطلاعات افراد و مشاوره ی
                                    خرید و فروش در سامانه باسکول رایگان است.</p>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <h4 class="panel-title">
                                <a class="collapsed" data-toggle="collapse" data-parent="#accordion"
                                   href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    چرا باید پروفایل خود را تکمیل کنم؟
                                </a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="headingThree">
                            <div class="panel-body">
                                <p>تکمیل پروفایل یکی از ارکان مهم اعتماد سازی و ایجاد تمایز نسب به رقبا، در تجارت است.
                                    در باسکول این فضا فراهم شده تا خریداران و تامین کنندگان اطلاعات شخصی و شرکت خود،
                                    سابقه فعالیت و توضیحات مربوط به کسب و کار خود را ارائه دهند. تمامی توضیحات و مواردی
                                    که برای جذب خریداران و فروشندگان بالقوه لازم است را می توانید در صفحه شخصی خود ارائه
                                    دهید.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>



<footer>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <ul class="list-unstyled footer-list">
                    <li>
                        <a href="/privacy-and-policy">قوانین و مقررات</a>
                    </li>
                    <li>
                        <a href="/about-us">درباره ما </a>
                    </li>
                    <li>
                        <a href="#"> ارتباط با ما</a>
                    </li>
<!--
                    <li>
                        <a href="#">پروژه ها </a>
                    </li>
-->
                    <li>
                        <a href="/help"> راهنمای خریدار و فروشنده </a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <p>آدرس</p>
                <p>شیراز ، بلوار جمهوری اسلامی، ساختمان مدیریت دانشگاه شیراز، برج نوآوری ، طبقه نهم
                </p>
                <br/>
                <p>تماس با ما
                </p>
                <p>0713-646-0996 / 09178928245
                </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <img src="https://trustseal.enamad.ir/logo.aspx?id=110135&amp;p=e4AvUmJtRgJZ9BOl" alt="" onclick="window.open(&quot;https://trustseal.enamad.ir/Verify.aspx?id=110135&amp;p=e4AvUmJtRgJZ9BOl&quot;, &quot;Popup&quot;,&quot;toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30&quot;)" style="cursor:pointer" id="e4AvUmJtRgJZ9BOl">
            </div>


        </div>
    </div>
</footer>
<div class="footer-bottom">
    <div class="container">
        <div class="row">
            <div class=" col-xs-12">
                <ul class="social-icon">
                    <li>
                        <a href="#" class="fa fa-facebook wow "></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter wow "></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-linkedin wow "></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus wow " ></a>
                    </li>
                </ul>
                <p class="wow" >تمام حقوق مادی و معنوی سایت متعلق به باسکول است.</p>

            </div>
        </div>
    </div>
</div>

    </div> <!-- end of app tag -->
<!-- Back top -->
<a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a>


<!-- =========================
 SCRIPTS
============================== -->

<script src="{{asset('index/js/jquery.js')}}"></script>
<script src="{{asset('index/js/bootstrap.min.js')}}"></script>
<script src="{{asset('index/js/particleNetwork.js')}}"></script>
<script src="{{asset('index/js/jquery.magnific-popup.min.js')}}"></script>
<script src="{{asset('index/js/jquery.parallax.js')}}"></script>
<script src="{{asset('index/js/owl.carousel.min.js')}}"></script>
<script src="{{asset('index/js/smoothscroll.js')}}"></script>
<script src="{{asset('index/js/wow.min.js')}}"></script>
<script src="{{asset('index/js/custom.js')}}"></script>
<script src="{{asset('index/js/api-index.js')}}"></script>

<!--
<script>
    window.addEventListener('load', function(){
        var allimages= document.getElementsByTagName('img');
        for (var i=0; i<allimages.length; i++) {
            if (allimages[i].getAttribute('data-src')) {
                allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
            }
        }
    }, false)
</script>
-->
</body>

<script>



</script>

</html>
