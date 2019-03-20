<!DOCTYPE html>
<html lang="fa">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="@yield('meta_description')">
    <meta name="keywords" content="@yield('meta_keywords')">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- site title -->
    <title>@yield('title') </title>

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

    @yield('header_links')
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
<div id="app">
    <!-- =========================
NAVIGATION LINKS
============================== -->

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
                    @if(!session('user_id'))
                        <li><a href="{{route('login_page')}}" class="smoothScroll">ورود/ثبت نام</a></li>
                    @endif
                    <li><a href="/" class="smoothScroll">صفحه ی اصلی</a></li>
                    <li><a href="/about-us" class="smoothScroll">درباره ما</a></li>
                    <li><a href="/privacy-and-policy" class="smoothScroll">قوانین و مقررات</a></li>
                    <li><a href="http:\\www.blog.incobac.com" class="smoothScroll">وبلاگ</a></li>
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

    @yield('main_content')
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
            <div class="col-xs-12 col-sm-6 col-md-4 enamad">
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
                <p class="wow" >تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.</p>

            </div>
        </div>
    </div>
</div>

<!-- end of app tag -->
<!-- Back top -->
<a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a>

</div>
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
@yield('script_tags')
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



</html>
