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

    <header id="header" class="main-header">
        <div class="profile-menu-header" v-if="currentUser.profile">
            <a href="#" onclick="dropdown()">
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
                    <li class="list-item"><a href="{{route('profile_basic')}}">داشبورد</a></li>
                    <li class="list-item"><a href="/dashboard/password">تغییر کلمه عبور</a></li>
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
