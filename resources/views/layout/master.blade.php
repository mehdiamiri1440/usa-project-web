<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@yield('title') </title>
    <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/blurry.load.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{asset('assets/cdn/axios.js')}}"></script>
    @yield('header_links')
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .loading_images img{
            display: block;
            margin: 0 auto;
        }

    </style>
</head>
<body>
<div id="app">
    <header id="header" class="main-header">
        <div class="profile-menu-header col-xs-3">
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
                    <li class="list-item"><a href="{{route('profile_basic')}}">پروفایل</a></li>
                    <li class="list-item"><router-link :to="{ name : 'password' }">تغییر کلمه عبور</router-link></li>
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