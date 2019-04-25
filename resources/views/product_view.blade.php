<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>صفحه محصول</title>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>
        window.Laravel = {csrfToken: '{{csrf_token()}}'}
    </script>
    <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
    <script src="{{asset('assets/js/main.js')}}"></script>
    <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/master/style.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/buyer/product-list.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/buyer/product-view.css')}}">
    <style>
        .main-loader{
            display: none;
        }
    </style>

    <script src="{{asset('assets/cdn/axios.js')}}"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-129398000-1');
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>

<div id="app">

    <!-- /.modal -->
    <!--loader-->
    <header id="header" class="hidden-xs  main-header">
        <h1 class="title-page col-xs-12">
          صفحه محصول
        </h1>
    </header>

    <!-- =========================
 NAVIGATION LINKS
============================== -->
    <div class="navbar container-fluid navbar-fixed-top custom-navbar" role="navigation">
        <div class="container-fluid">
            <!-- navbar header -->
            <div class="navbar-header">
                @if(session('user_id'))
                    <div class="user-header-mobile hidden-sm hidden-md hidden-lg ">
                        <div class="profile-menu-header">
                            <a href="#" @click.prevent ="dropdown()">
                                <div class="image-header-profile">
                                    @if(session('profile_photo'))
                                        <img src="{{url('storage/'  . session('profile_photo'))}}">
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
                                    <li class="list-item"><a href="/dashboard/password">تغییر کلمه عبور</a></li>
                                    <li class="list-item"><a href="{{route('logout')}}">خروج</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                @endif
                <button class="navbar-toggle"  data-toggle="collapse" href="#collapseOne">
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                    <span class="icon icon-bar"></span>
                </button>
                <a class="navbar-brand test" href="/">
                </a>
                <p class="logo-des hidden-xs hidden-sm">
                    اینکوباک | بازارگاه آنلاین دنیای کشاورزی
                </p>

            </div>

            <div class="collapse navbar-collapse" id="collapseOne" aria-expanded="false">
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

                        <li class="user-header-web hidden-xs">
                            <div class="profile-menu-header "><a href="#" @click.prevent ="dropdown()">
                                    <div class="image-header-profile">
                                        @if(session('profile_photo'))
                                            <img src="{{url('storage/'  . session('profile_photo'))}}">
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

    <product-vue default-image="{{asset('assets/img/user-defult.png')}}" incobac-logo="{{asset('assets/img/logo-incobac.png')}}"></product-vue>
</div>

<script src="{{asset('js/app.js')}}"></script>

<script>

</script>
</body>

</html>
