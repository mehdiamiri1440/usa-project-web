<!DOCTYPE html>
<html lang="fa">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="Responsive Personal One Page Portfolio">
    <meta name="keywords" content="Responsive, Personal, One Page Portfolio, Freelancers, Template">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- site title -->
    <title>اینکوباک | بازارگاه کشاورزی</title>

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
    <link rel="stylesheet" href="{{asset('index/css/style.css')}}">
    <script src="{{asset('assets/cdn/vue.js')}}"></script>
    <script src="{{asset('assets/cdn/axios.js')}}"></script>
    
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-129398000-1');
    </script>

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

<div class="navbar navbar-fixed-top custom-navbar" role="navigation">
    <div class="container-fluid">
        <!-- navbar header -->
        <div class="navbar-header">
            @if(session('user_id'))
                <div class="user-header-mobile">
                    <div class="profile-menu-header"><a href="#" onclick="dropdown()">
                            <div class="image-header-profile">
                                @if(session('profile_photo'))
                                    <img class="image-blur" src="{{'storage/'  . session('profile_photo')}}">
                                @else
                                    <img class="image-blur" src="{{asset('assets/img/user-defult.png')}}">
                                @endif
                            </div>
                            <i aria-hidden="true" class="fa fa-angle-down"></i>
                        </a>
                        <div class="profile-list">
                            <ul class="list-unstyled">
                                <li class="list-item"><a
                                            href="{{route('profile_basic')}}">پروفایل</a></li>
                                <li class="list-item"><a href="/dashboard#/password">تغییر کلمه عبور</a></li>
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
                اینکوباک | بازارگاه آنلاین دنیای کشاورزی
            </p>

        </div>

        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
                <li><a href="/product-list" class="smoothScroll cta-bot cta-bot-mobile">لیست محصولات</a></li>
                @if(!session('user_id'))
                    <li><a href="{{route('login_page')}}" class="smoothScroll">ورود/ثبت نام</a></li>
                @endif
                <li><a href="" class="smoothScroll">صفحه ی اصلی</a></li>
                <li><a href="/about-us" class="smoothScroll">درباره ما</a></li>
                <li><a href="/privacy-and-policy" class="smoothScroll">قوانین و مقررات</a></li>
                <li><a href="http:\\www.blog.incobac.com" class="smoothScroll">وبلاگ</a></li>
                <li><a href="/product-list" class="smoothScroll cta-bot">لیست محصولات</a></li>

                @if(session('user_id'))

                    <li class="user-header-web">
                        <div class="profile-menu-header"><a href="#" onclick="dropdown()">
                                <div class="image-header-profile">
                                    @if(session('profile_photo'))
                                        <img class="image-blur" src="{{'storage/'  . session('profile_photo')}}">
                                    @else
                                        <img class="image-blur" src="{{asset('assets/img/user-defult.png')}}">
                                    @endif
                                </div>
                                <i aria-hidden="true" class="fa fa-angle-down"></i> <span
                                        class="name-header-profile">{{session('full_name')}}</span></a>
                            <div class="profile-list">
                                <ul class="list-unstyled">
                                    <li class="list-item"><a
                                                href="{{route('profile_basic')}}">پروفایل</a></li>
                                    <li class="list-item"><a href="/dashboard#/password">تغییر کلمه عبور</a></li>
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
                <div class="col-md-12 col-sm-12">
                    <h1 class="wow fadeIn main-logo" data-wow-delay="1s"><img class="image-blur"
                                                                              src="{{asset('/index/images/logo_white.png')}}"></h1>
                    <h2 class="wow fadeIn" data-wow-delay="1.2s">اینکوباک | سامانه آنلاین خرید و فروش محصولات
                        کشاورزی</h2>
                    <br/>
                    <a href="{{route('login_page')}}" class="btn btn-purple  smoothScroll wow fadeInUp"
                       data-wow-delay="1.4s">ورود به سامانه</a>
                    <a href="#detail" class="btn btn-green smoothScroll wow fadeInUp "
                       data-wow-delay="1.4s">بیشتر بخوانید</a>
                    <div class="mouse-animation">
                        <span></span>
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
                <img class="image-blur" src="{{asset('index/images/1.png')}}" class="img-responsive">
                <h4>خرید و فروش بی واسطه</h4>
            </div>
        </div>

        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img class="image-blur" src="{{asset('index/images/2.png')}}" class="img-responsive">
                <h4>گسترش ارتباط تجاری</h4>
            </div>
        </div>

        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img class="image-blur" src="{{asset('index/images/3.png')}}" class="img-responsive">
                <h4>یافتن شرکای مطمئن</h4>
            </div>
        </div>


        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img class="image-blur" src="{{asset('index/images/4.png')}}" class="img-responsive">
                <h4>پرداخت مطمئن و آسوده</h4>
            </div>
        </div>
        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img class="image-blur" src="{{asset('index/images/5.png')}}" class="img-responsive">
                <h4>بازرسی و نظارت محصول</h4>
            </div>
        </div>
        <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
            <div class="detail-thumb">
                <img class="image-blur" src="{{asset('index/images/6.png')}}" class="img-responsive">
                <h4>افزایش اعتماد و شفافیت</h4>
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
            <h3 class="text-center">ثبت سفارش خرید یا ثبت محصول</h3>
            <div class=" wow fadeIn  col-sm-4" data-wow-delay="0.9s">
                <div class="detail-thumb">
                    <div class="img-thumb">
                        <div class="background-layout">

                        </div>
                        <img class="image-blur"  src="{{asset('assets/img/vegetable.jpg')}}">
                    </div>
                    @if(session('is_seller'))
                        <a href="/dashboard/#/register-product" class="btn-incobac">سفارش / ثبت  صیفی</a>
                    @elseif(session('is_buyer'))
                        <a href="/dashboard/#/register-request" class="btn-incobac">سفارش / ثبت  صیفی</a>
                    @else
                        <a href="{{route('login_page')}}" class="btn-incobac">سفارش / ثبت  صیفی</a>
                    @endif
                </div>
            </div>

            <div class="wow fadeIn  col-sm-4" data-wow-delay="0.9s">
                <div class="detail-thumb">
                    <div class="img-thumb">
                        <div class="background-layout">

                        </div>
                        <img class="image-blur" src="{{asset('assets/img/nuts-and-dried-fruits.jpg')}}">
                    </div>
                    @if(session('is_seller'))
                        <a href="/dashboard/#/register-product" class="btn-incobac">سفارش / ثبت  خشکبار</a>
                    @elseif(session('is_buyer'))
                        <a href="/dashboard/#/register-request" class="btn-incobac">سفارش / ثبت  خشکبار</a>
                    @else
                        <a href="{{route('login_page')}}" class="btn-incobac">سفارش / ثبت  خشکبار</a>
                    @endif
                </div>
            </div>
            <div class="wow fadeIn col-sm-4" data-wow-delay="0.9s">
                <div class="detail-thumb">
                    <div class="img-thumb">
                        <div class="background-layout">

                        </div>
                        <img class="image-blur" src="{{asset('assets/img/fruits.jpg')}}">
                    </div>
                    @if(session('is_seller'))
                        <a href="/dashboard/#/register-product" class="btn-incobac">سفارش / ثبت  میوه</a>
                    @elseif(session('is_buyer'))
                        <a href="/dashboard/#/register-request" class="btn-incobac">سفارش / ثبت  میوه</a>
                    @else
                        <a href="{{route('login_page')}}" class="btn-incobac">سفارش / ثبت  میوه</a>
                    @endif
                </div>
            </div>

        </div>
    </div>
</section>


<!-- =========================
FEATURE SECTION
============================== -->

<section id="feature" class="parallax-section">
    <div class="container">
        <div class="row">
            <div class="wow fadeInUp col-md-6 col-md-offset-0 col-sm-offset-1 col-sm-10" data-wow-delay="0.6s">
                <h2>برخی از ویژگی های ما</h2>
                <p> با اینکوباک به صورت <b style="color:green"> رایگان </b>از مزایای زیر بهره مند می شوید </p>
                <div class="media">
                    <div class="media-body">
                        <h3 class="media-heading"> مدیریت خرید و فروش</h3>
                        <p>در فضایی حرفه ای عرضه و تقاضای خود را مطرح کنید. در فضایی امن به تجارت بپردازید و در هزینه ها
                            و زمان خود صرفه جویی کنید.</p>
                    </div>
                </div>
                <div class="media">
                    <div class="media-body">
                        <h3 class="media-heading">توسعه ی ارتباطات تجاری</h3>
                        <p>افراد تایید شده را بعنوان شرکای مطمئن خود پیدا کنید و شبکه تجاری خود را گسترش دهید.
                        </p>
                    </div>
                </div>

            </div>

            <div class="wow fadeInUp col-md-5 col-sm-10" data-wow-delay="0.3s">
                <img class="image-blur" src="{{asset('index/images/new-feature-img.png')}}" class="img-responsive" alt="feature">
            </div>


        </div>
    </div>
</section>


<!-- =========================
VIDEO SECTION
============================== -->


{{--<section id="video" class="parallax-section">--}}
{{--<div class="overlay"></div>--}}
{{--<div class="container">--}}
{{--<div class="row">--}}

{{--<div class="col-md-offset-2 col-md-8 col-sm-12">--}}
{{--<a class="popup-youtube" href="https://www.aparat.com/video/video/embed/videohash/TjQpz/vt/frame"><i class="fa fa-play"></i></a>--}}
{{--<h2 class="wow fadeInUp" data-wow-delay="0.9s">تماشای ویدیو</h2>--}}
{{--<p class="wow fadeInUp" data-wow-delay="1s"></p>--}}
{{--</div>--}}

{{--</div>--}}
{{--</div>--}}
{{--</section>--}}


<!-- =========================
TEAM SECTION
============================== -->


{{--<section id="team" class="parallax-section">--}}
{{--<div class="container">--}}
{{--<div class="row">--}}

{{--<div class=" wow bounceIn col-md-12 col-sm-12">--}}
{{--<div class="section-title">--}}
{{--<h2>با بهترینهای تیم آشنا بشید </h2>--}}
{{--<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</p>--}}
{{--</div>--}}
{{--</div>--}}

{{--<div id="owl-team" class="owl-carousel">--}}

{{--<div class="item wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.9s">--}}
{{--<div class="team-thumb">--}}
{{--<img class="image-blur" src="images/team-img1.jpg" class="img-responsive" alt="Team">--}}
{{--<div class="team-overlay">--}}
{{--<div class="team-item">--}}
{{--<ul class="social-icon">--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-facebook"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-twitter"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-google-plus"></a>--}}
{{--</li>--}}
{{--</ul>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--<h3>کامران جاوید</h3>--}}
{{--<h6>طراح UI</h6>--}}
{{--</div>--}}

{{--<div class="item wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">--}}
{{--<div class="team-thumb">--}}
{{--<img class="image-blur" src="images/team-img2.jpg" class="img-responsive" alt="Team">--}}
{{--<div class="team-overlay">--}}
{{--<div class="team-item">--}}
{{--<ul class="social-icon">--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-facebook"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-twitter"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-google-plus"></a>--}}
{{--</li>--}}
{{--</ul>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--<h3>محمد جواد دایی</h3>--}}
{{--<h6>کارگردان خلاق</h6>--}}
{{--</div>--}}

{{--<div class="item wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.9s">--}}
{{--<div class="team-thumb">--}}
{{--<img class="image-blur" src="images/team-img3.jpg" class="img-responsive" alt="Team">--}}
{{--<div class="team-overlay">--}}
{{--<div class="team-item">--}}
{{--<ul class="social-icon">--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-facebook"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-twitter"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-google-plus"></a>--}}
{{--</li>--}}
{{--</ul>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--<h3>مریم حیدری</h3>--}}
{{--<h6>متخصص وب</h6>--}}
{{--</div>--}}

{{--<div class="item wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">--}}
{{--<div class="team-thumb">--}}
{{--<img class="image-blur" src="images/team-img4.jpg" class="img-responsive" alt="Team">--}}
{{--<div class="team-overlay">--}}
{{--<div class="team-item">--}}
{{--<ul class="social-icon">--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-facebook"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-twitter"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-google-plus"></a>--}}
{{--</li>--}}
{{--</ul>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--<h3>جهانگیر الوندی</h3>--}}
{{--<h6>ظاهر برنامه نویس</h6>--}}
{{--</div>--}}

{{--<div class="item wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">--}}
{{--<div class="team-thumb">--}}
{{--<img class="image-blur" src="images/team-img5.jpg" class="img-responsive" alt="Team">--}}
{{--<div class="team-overlay">--}}
{{--<div class="team-item">--}}
{{--<ul class="social-icon">--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-facebook"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-twitter"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-google-plus"></a>--}}
{{--</li>--}}
{{--</ul>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--<h3>حمید علومی</h3>--}}
{{--<h6>بازاریابی گروه</h6>--}}
{{--</div>--}}

{{--<div class="item wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">--}}
{{--<div class="team-thumb">--}}
{{--<img class="image-blur" src="images/team-img6.jpg" class="img-responsive" alt="Team">--}}
{{--<div class="team-overlay">--}}
{{--<div class="team-item">--}}
{{--<ul class="social-icon">--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-facebook"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-twitter"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-google-plus"></a>--}}
{{--</li>--}}
{{--</ul>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--<h3>مهرداد نظری</h3>--}}
{{--<h6>بازاریابی گروه</h6>--}}
{{--</div>--}}

{{--<div class="item wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">--}}
{{--<div class="team-thumb">--}}
{{--<img class="image-blur" src="images/team-img7.jpg" class="img-responsive" alt="Team">--}}
{{--<div class="team-overlay">--}}
{{--<div class="team-item">--}}
{{--<ul class="social-icon">--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-facebook"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-twitter"></a>--}}
{{--</li>--}}
{{--<li>--}}
{{--<a href="#" class="fa fa-google-plus"></a>--}}
{{--</li>--}}
{{--</ul>--}}
{{--</div>--}}
{{--</div>--}}
{{--</div>--}}
{{--<h3>زهره بینا</h3>--}}
{{--<h6>بازاریابی گروه</h6>--}}
{{--</div>--}}

{{--</div>--}}

{{--</div>--}}
{{--</div>--}}
{{--</section>--}}


<!-- =========================
TESTIMONIAL SECTION
============================== -->

<section id="testimonial" class="parallax-section">
    <div class="overlay"></div>
    {{--<video autoplay muted loop id="video-bg">--}}
    {{--<source src="{{asset('assets/video/testimonialsBg.mp4')}}" type="video/mp4">--}}
    {{--Your browser does not support HTML5 video.--}}
    {{--</video>--}}
    <div class="container">
        <div class="row">
            <div class=" wow bounceIn col-sm-12">
                <div class="section-title">
                    <h2>اهداف ما در اینکوباک</h2>
                    <p> اینکوباک، بازارگاه الکترونیکی بخش کشاورزی است که با هدف توسعه زیرساخت تجارت در این حوزه شروع به
                        فعالیت کرده است. اینکوباک در نظر دارد تا کشاورزان و تولیدکنندگان فعال و درستکار را به بازرگانان
                        و خریدارن موفق متصل کند تا از این طریق گام موثری در حذف واسطه های خرید و فروش، توسعه صادرات
                        و استاندارد سازی محصول بردارد</p>
                    <br/>
                    <p>اینکوباک، به کشاورزان و تولیدکنندگان کمک می کند تا محصولات خود را به قیمت واقعی خود و بدون واسطه،
                        به افراد مطمئن بفروشند. همچنین به بازرگانان و خریداران کمک میکند تا بهترین محصولات و مطمئن ترین
                        افراد را شناسایی کنند. اینکوباک کمک میکند تا بیشتر دیده شوید، در زمان و هزینه ها صرفه جویی کنید
                        و فرصت های بیشتری خلق کنید.</p>
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
            <h2 style="margin: 10px auto 20px ">وبلاگ اینکوباک</h2>
            <div class=" wow fadeIn  col-sm-4 animated" data-wow-delay="0.9s"
                 style="visibility: visible; animation-delay: 0.9s; animation-name: fadeIn;" v-for="post in posts">
                <div class="detail-thumb">
                    <div class="img-thumb">
                        <img class="image-blur" :src="post.img_url">
                    </div>
                    <h3>@{{post.post_title}}</h3>
                    <p v-html="post.post_content.substr(0,150) + '...'"></p>
                    <a :href="post.guid" class="btn-incobac">بیشتر بخوانید ...</a>
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

            <div class="wow fadeInUp col-md-offset-1 col-md-10 col-sm-12" data-wow-delay="0.9s">
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
                                    تعرفه های ثبت آگهی در اینکوباک چگونه است؟
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="headingTwo">
                            <div class="panel-body">
                                <p>تمامی خدمات از جمله ثبت آگهی،ساخت پروفایل شخصی، مشاهده ی اطلاعات افراد و مشاوره ی
                                    خرید و فروش در سامانه اینکوباک رایگان است.</p>
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
                                    در اینکوباک این فضا فراهم شده تا خریداران و تامین کنندگان اطلاعات شخصی و شرکت خود،
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


<!-- =========================
PRICING SECTION
============================== -->
<!--

	<section id="pricing" class="parallax-section">
		<div class="container">
			<div class="row">

				<div class=" wow bounceIn col-md-12 col-sm-12">
					<div class="section-title">
						<h2>قیمت گذاری بسته های ما</h2>
						<p>لورم ایپسوم متن ساختگی با تولید سادگی.</p>
					</div>
				</div>

				<div class="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.3s">
					<div class="pricing-thumb">
						<div class="pricing-title">
							<h3>طرح استاندارد</h3>
						</div>
						<div class="pricing-month">
							<h2>ریال 400</h2>
							<h6>ماهیانه</h6>
						</div>
						<p>24 حساب ها</p>
						<p>5گیگابایت حافظه خالی</p>
						<p>به روز رسانی مادام العمر</p>
						<p>صفحه فرود</p>
					</div>
				</div>

				<div class="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.3s">
					<div class="pricing-thumb">
						<div class="pricing-title">
							<h3>طرح کسب و کار</h3>
						</div>
						<div class="pricing-month">
							<h2>ریال 650</h2>
							<h6>ماهیانه</h6>
						</div>
						<p>40 حساب ها</p>
						<p>5گیگابایت حافظه خالی</p>
						<p>به روز رسانی مادام العمر</p>
						<p>صفحه فرود</p>
					</div>
				</div>

				<div class="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.3s">
					<div class="pricing-thumb">
						<div class="pricing-title">
							<h3>طرح حرفه ای</h3>
						</div>
						<div class="pricing-month">
							<h2>ریال 840</h2>
							<h6>ماهیانه</h6>
						</div>
						<p>100 حساب ها</p>
						<p>40 گیگابایت حافظه خالی</p>
						<p>به روز رسانی مادام العمر</p>
						<p>صفحه فرود</p>
					</div>
					</div>
				</div>

			</div>
		</div>
	</section>
-->


<!-- =========================
CONTACT SECTION
============================== -->

<section id="contact" class="parallax-section">
    <div class="container">
        <div class="row">

            <div class="wow bounceIn col-md-12 col-sm-12">
                <div class="section-title text-center">
                    <h2>با ما در تماس باشید</h2>
                </div>
            </div>
            <div class="wow fadeInUp col-md-6 col-sm-7" data-wow-delay="0.9s">
                <div class="contact_detail">
                    <div class="section-title">
                        <h3>یک پیام برای مابفرستید</h3>
                    </div>
                    <form action="http://themes.khaitawng.com/Branded/contact.php" method="post">
                        <input type="text" class="form-control" placeholder="نام" required>
                        <input type="email" class="form-control" placeholder="ایمیل" required>
                        <textarea class="form-control" placeholder="پیام" rows="5" required></textarea>
                        <div class="col-md-6 col-sm-10">
                            <input type="submit" class="form-control" value="ارسال">
                        </div>
                    </form>
                </div>
            </div>

            <div class="wow fadeInUp col-md-offset-1 col-md-4 col-sm-5" data-wow-delay="0.9s">
                <div class="contact_detail">
                    <div class="addr">
                        <h3> آدرس</h3>
                        <p>شیراز ، بلوار جمهوری اسلامی، ساختمان مدیریت دانشگاه شیراز، برج نوآوری ، طبقه نهم</p>
                    </div>
                    <div class="ph">
                        <h3>تماس با ما</h3>
                        <p>0713-646-0996 / 09178928245</p>
                    </div>
                    <div class="email">
                        <h3>ایمیل بفرستید</h3>
                        <p>s.radmanesh95@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<!-- =========================
FOOTER SECTION
============================== -->


<footer>
    <div class="container">
        <div class="row">
            <div class=" enamad col-xs-12">
                <div>
                    <img src="https://trustseal.enamad.ir/logo.aspx?id=100286&amp;p=yBEoWWMXqCeIkdjL" alt="" onclick="window.open(&quot;https://trustseal.enamad.ir/Verify.aspx?id=100286&amp;p=yBEoWWMXqCeIkdjL&quot;, &quot;Popup&quot;,&quot;toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30&quot;)" style="cursor:pointer" id="yBEoWWMXqCeIkdjL">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <p class="wow fadeInUp" data-wow-delay="0.6s">تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.</p>

                <!--
                                    <ul class="social-icon">
                                        <li>
                                            <a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a>
                                        </li>
                                        <li>
                                            <a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a>
                                        </li>
                                        <li>
                                            <a href="#" class="fa fa-telegram wow fadeInUp" data-wow-delay="1.6s"></a>
                                        </li>
                                        <li>
                                            <a href="#" class="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a>
                                        </li>
                                        <li>
                                            <a href="#" class="fa fa-google-plus wow fadeInUp" data-wow-delay="2s"></a>
                                        </li>
                                    </ul>
                -->

            </div>

        </div>
    </div>
</footer>


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
    var vm = new Vue({
        el:'#recent',
        data:{
            posts:'',
        },
        methods:{
            init:function(){
                var self = this;
                console.log('test');
                axios.post('/get_wp_posts')
                    .then(function(response){
                        console.log(response.data);
                        self.posts = response.data.posts;
                    });
            }
        },
        mounted:function(){
            this.init();
        }
    })
</script>

</html>
