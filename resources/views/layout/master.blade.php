<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title') </title>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>
        window.Laravel = { csrfToken : '{{csrf_token()}}'}
    </script>
    <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{asset('assets/cdn/axios.js')}}"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-129398000-1');
    </script>


    @yield('header_links')
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>

        /*---------------------------------------
            Navigation Links section
        -----------------------------------------*/
        .custom-navbar {
            margin-bottom: 0;
            background-color: #ffffff;
            box-shadow: 5px 0 15px rgba(0,0,0,0.3);
        }

        .custom-navbar .navbar-brand {
            width: 140px;

            text-align: center;

            display: block;

            height: 53px;

            background-size: contain;

            margin: 0 auto;

            float: none;
        }
        .navbar-brand {
            margin: 0 15px;
            height: 50px;
            padding: 3px 15px;
            font-size: 18px;
            line-height: 20px;

        }
        .logo-des {
            color: #373737;
            float: left;
            padding: 24px 5px 0;
        }

        .main-logo {
            width: 30%;
            margin: 0 auto;
        }

        .main-logo img {
            width: 100%;
        }

        .custom-navbar .nav li a {
            color: #000;
            font-weight: 400;
            padding: 10px 15px;
            text-transform: uppercase;
            line-height: 20px;
            transition: all 0.4s ease-in-out;
        }

        .top-nav-collapse .nav li a {
            color: black;
            font-weight: 400;
            text-transform: uppercase;
            line-height: 20px;
            transition: all 0.4s ease-in-out;
        }

        .top-nav-collapse .nav .ads {
            color: white;
            font-weight: 400;
        }

        .top-nav-collapse .nav {
            padding-top: 16px;
        }

        .nav.navbar-nav.navbar-left {
            padding: 16px;
            text-align: right;
        }

        .custom-navbar .nav li a:hover {
            background: transparent;
            color: #4dc11d;
        }

        .custom-navbar .navbar-nav > li > a:hover,
        .custom-navbar .navbar-nav > li > a:focus {
            background-color: transparent;
        }

        .custom-navbar .nav li.active > a {
            background-color: transparent;
            color: #4dc11d;
        }

        .navbar-toggle {

            position: relative;
            float: right;
            padding: 9px 10px;
            padding-top: 9px;
            margin-top: 8px;
            margin-left: 15px;
            margin-bottom: 8px;
            background-color: transparent;
            background-image: none;
            border: 1px solid transparent;
            border-radius: 4px;
        }
        .custom-navbar .navbar-toggle {
            border: none;
        }

        .custom-navbar .navbar-toggle {
            background-color: transparent;
        }

        .custom-navbar .navbar-toggle .icon-bar {
            background: #4dc11d;
            border-color: transparent;
        }

        .ads {
            background-color: #46ae1b;
            border-radius: 50px;
            text-align: center;
            color: #fff !important;
            margin: 0 5px;
        }

        .ads:hover {
            background-color: #4dc11d !important;
            border-radius: 50px;
            text-align: center;
        }

        .owl-dot {

    width: 10px;
    height: 10px;
    background: #3c9544b3 !important;
    margin: 0 4px;
    border-radius: 50px;

}
        @media (max-width: 1120px) {
            .logo-des {
                display: none;
            }

        }

        @media (max-width: 992px) {
            .content_service {

                font-size: 15px;

            }

            .content_service {
                font-size: 14px;
            }

        }

        @media (max-width: 880px) {
            .navbar-brand {
                width: 150px;
                background-size: 100%;
            }

            .top-nav-collapse .nav li a {
                padding: 11px 5px;
            }

            .custom-navbar .nav li a {
                padding: 11px 5px;
            }
        }

        @media screen and (max-width: 768px) {
            .profile-menu-header {
    padding: 3px;
    padding-left: 55px;
    float: left;
           }
            
.profile-menu-header i {
    position: absolute;
    color:#333;
    left: -75px;

    top: 29px;

    font-size: 20px;
}

            .main-content-item {
                margin: 63px auto 24px;

            }
            .content_service {
                font-size: 14px;
            }

            .custom-navbar {
                border-bottom: 0;
                background: #fff;
            }

            .custom-navbar.top-nav-collapse {
                background: #ffffff;
                box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.04);
            }

        }

        @media ( max-width: 768px) {
            .content_service {
                text-align: center;
                display: inline-block;
            }

            .ads {
                background-color: #46ae1b;
                border-radius: 50px;
                text-align: center;
                color: #fff !important;
                margin: 0 5px;
            }

            .float_li {

                float: right;
                padding: 0 7px;
                width: 50%;

            }

            .custom-navbar {
                padding: 5px 0;
                border-bottom: 0;
                background: #fff;
            }

            .custom-navbar.top-nav-collapse {
                background: #ffffff;
                box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.04);
                padding: 0;
            }

        }
        @media screen and (max-width: 430px) {

    .profile-menu-header {

    padding: 3px;
        padding-left: 3px;
    padding-left: 35px;
    float: left;

}
    /*.user-contents > p {

        float: none;
        font-size: inherit;
        padding-top: 0;
        padding-right: 0;

    }
    .user-image {

        float: none;
        width: 60px;
        height: 60px;

    }
    .user-contents > .green_bot {

        float: none;
        width: initial;
        padding: 10px 17px;
        margin-top: 11px;

    }*/
}

        .loading_images img{
            display: block;
            margin: 0 auto;
        }

        /*loader*/

        .loader-display {
            position: fixed;
            z-index: 10;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: block;
        }

        .main-loader {
            position: absolute;

            top: 35%;

            text-align: center;

            display: block;

            width: 100%;

            color: #fff;

            font-size: 23px;
        }

        .main-loader img {
            width: 100px;

            background: #fff;

            border-radius: 50px;

            height: 100px;

            display: inline-block;

            margin: 0 auto 22px;
        }

        .loader-wrapper {
            display: none;
        }
        span.min{
            display: none;
        }
    </style>
</head>
<body>

<div id="app">

    <!-- Modal -->
    <div class="container">
        <div class="modal fade" id="myModal" tabindex="-1" ref="myModal" role="dialog"
             aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="main_popup_content">
                        <a href="#" data-dismiss="modal"> <i class="fa fa-close"></i></a>
                        <p class="main_par">
                            @{{popUpMsg}}
                        </p>
                        <button class="btn green_bot " data-dismiss="modal">
                            متوجه شدم
                        </button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
    </div>

    <!-- /.modal -->
    <!-- Modal -->
    <div class="container">
        <div class="modal fade" id="myModal2" tabindex="-1" ref="myModal" role="dialog"
             aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="main_popup_content">
                        <a href="#" data-dismiss="modal"> <i class="fa fa-close"></i></a>
                        <p class="main_par">
                            @{{popUpMsg}}
                        </p>
                        <button class="btn  green_bot" @click="redirectToLogin()">
                            ورود/ثبت نام
                        </button>
                        <br/>
                        <br/>
                        <button class="btn green_bot " data-dismiss="modal">
                            متوجه شدم
                        </button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
    </div>

    <!-- /.modal -->
    <!--loader-->

    <div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">
        <div class="main-loader">
            <img src="{{asset('assets/img/gif/prload.gif')}}">
            <p dir="rtl">کمی صبر کنید...</p>
        </div>
    </div>
    <!--end loader-->

    <header id="header" class="hidden-xs  main-header">
        <div class="profile-menu-header" v-if="currentUser.profile">
            <a href="#" @click.prevent = "dropdown()">
                <div class="image-header-profile" v-if="currentUser.profile.profile_photo">
                    <img  :src=" '{{url('/storage/')}}/' + currentUser.profile.profile_photo">
                </div>
                <div class="image-header-profile" v-else>
                    <img src="{{asset('assets/img/user-defult.png')}}">
                </div>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
                <span class="name-header-profile">@{{currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name}}</span>
            </a>
            <div class="profile-list">
                <ul class="list-unstyled">
                    <li class="list-item"><a href="{{route('profile_basic')}}">پروفایل</a></li>
                    <li class="list-item"><a href="/dashboard#/password">تغییر کلمه عبور</a></li>
                    <li class="list-item"><a href="{{route('logout')}}">خروج</a></li>
                </ul>
            </div>
        </div>
        <div class="logo  ">
            <a href="/"> <img src="{{asset('assets/img/logo-incobac-white-red.png')}}"></a>
        </div>
        <nav class="header-nav">
            <ul class="list-inline">
                <li><a href="http://blog.incobac.com"> وبلاگ</a></li>
                <li><a href="{{route('profile_basic')}}">داشبورد</a></li>
            </ul>
        </nav>

        <h1 class="title-page col-xs-12">
            @yield('page_title')
        </h1>
    </header>

    <!-- =========================
 NAVIGATION LINKS
============================== -->

    <div class="hidden-sm hidden-md hidden-lg navbar navbar-fixed-top custom-navbar" role="navigation">
        <div class="container-fluid">
            <!-- navbar header -->
            <div class="navbar-header">
                @if(session('user_id'))
                    <div class="user-header-mobile">
                        <div class="profile-menu-header"><a href="#" @click.prevent = "dropdown()" >
                                <div class="image-header-profile">
                                    @if(session('profile_photo'))
                                        <img class="image-blur" src="{{url('/storage/')  . '/'. session('profile_photo')}}">
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
                <a class="navbar-brand test" href="/">
                    <img src="{{asset('assets/img/logo_dark.png')}}">
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
                    <li><a href="http://www.blog.incobac.com" class="smoothScroll">وبلاگ</a></li>
                    <li><a href="/product-list" class="smoothScroll cta-bot">لیست محصولات</a></li>
                </ul>
            </div>

        </div>
    </div>

    @yield('main_content')
</div>
@yield('script_tags')
<script src="{{asset('assets/js/idleTimer.js')}}"></script>
<script>
    

    $(document).ready(function(){
        $(document).idleTimer(7200000);
    });

    $(document).on("idle.idleTimer", function(){
        // function you want to fire when the user goes idle
        window.location.href = '/login'
    });
</script>
</body>

</html>
