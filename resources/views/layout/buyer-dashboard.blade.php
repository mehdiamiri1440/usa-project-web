<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <title>اینکوباک | بازارگاه کشاورزی</title>
    <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
    <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('assets/cdn/vue.js')}}"></script>
    <script src="{{asset('assets/js/blurry.load.js')}}"></script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/blurry.load.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/master/style.css')}}">
    <script src="{{asset('assets/cdn/axios.js')}}"></script>
    <script>
        $('img').blurryLoad()
    </script>
    @yield('header_links')
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        html{
            overflow-y: scroll;
        }
    </style>
    <style>
        .loading_images img{
            display: block;
            margin: 0 auto;
        }
        /* preventing page shifting */
        .modal {
            overflow-y: auto;
        }
        .modal-open {
            overflow: auto;
        }
        .modal-open[style] {
            padding-right: 0px !important;
        }
    </style>

</head>
<body>

<div id="app">

    <!-- Modal -->
    <div class="container">
        <div class="modal fade" id="myModal" tabindex="-1" ref="myModal" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true" data-keyboard="false" data-backdrop="static">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="main_popup_content">
                        <a href="#" data-dismiss="modal" > <i class="fa fa-close"></i></a>
                         <p class="main_par" id="popUpMsg">
                            @{{popUpMsg}}
                        </p>
                        <button class="btn green-bot " data-dismiss="modal" id="close-btn">
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
        <div class="modal fade" id="myModal-1" tabindex="-1" ref="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="main_popup_content">
                        <a href="#" data-dismiss="modal" > <i class="fa fa-close"></i></a>
                         <p class="main_par" id="popUpMsg">
                            ابتدا پروفایل خود را کامل کنید.سپس منتظر تایید اطلاعات خود از سمت کارشناسان اینکوباک باشید.
                        </p>
                        <button class="btn green-bot " data-dismiss="modal">
                            متوجه شدم
                        </button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
    </div>
    <!-- /.modal -->
        
    <section class="right-header mobile-header">
        <header class="header-right-header">
            <button class="clouse_menu_mob">
                <i class="fa fa-angle-right"></i>
            </button>
            <button class="clouse_menu">
                <i class="fa fa-angle-right"> </i>
            </button>
            <h1 class="logo"><a href="/"><img class="image-blur" src="{{asset('assets/img/logo-incobac.png')}}"></a></h1>
        </header>
        <section class="main-right-header">
            <div class="profile">
                @if(session('profile_photo'))
                    <div class="profile-img">
                        <img class="image-blur" src="{{asset('/storage/' . session('profile_photo'))}}">
                    </div>
                @else
                    <div class="profile-img">
                        <img class="image-blur"  src="{{asset('assets/img/user-defult.png')}}">
                    </div>
                @endif
                <div class="profile-content">
                    <div class="profile-name">
                        {{session('full_name')}}
                    </div>
                    <div class="profile-city">
                        {{session('province') . ' - ' . session('city')}}
                    </div>
                </div>
                <a href="{{url('profile/' . session('user_name'))}}" class="green-bot">
                    نمایش پروفایل من
                </a> 
            </div>
            <div class="header-menu">
                <ul class="list-unstyled">                   
                    <li class="list-item {{Request::is('dashboard/profile/*') ? 'active' : ''}}">
                        <a href="{{route('profile_basic')}}"> 
                            <span>ویرایش پروفایل</span>
                        </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/register-request') ? 'active' : ''}}">
                        <a href="{{route('register_buyer_request')}}" onClick='checkProfileConfirmation(event)'> 
                            <span>ثبت درخواست جدید</span>
                        </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/my-buyAds') || Request::is('dashboard/sell-offer-detail/*') ? 'active' : ''}}">
                        <a href="{{route('buyer-my-buyAds')}}" onClick='checkProfileConfirmation(event)'> 
                            <span>درخواست های من</span>
                        </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/transaction-list') || Request::is('dashboard/transaction-detail/*') ? 'active' : ''}}">
                        <a href="{{route('my-transaction-list')}}" onClick='checkProfileConfirmation(event)'> 
                            <span>تراکنش های جاری</span>
                        </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/terminated-transaction-list') ? 'active' : ''}}">
                        <a href="{{route('my-terminated-transaction-list')}}" onClick='checkProfileConfirmation(event)'>
                            <span>تراکنش های انجام شده</span>
                         </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/guide') ? 'active' : ''}}">
                        <a href="{{route('dashboard-guide')}}"> 
                            <span>راهنما</span> 
                        </a>
                    </li>
                </ul>
            </div>
            <div class="copy-right">
                <p>
                    تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.
                </p>
            </div>
        </section>
        <div class="background_mob_sec">

        </div>
    </section>
    <section class="right-header desktop-header">
        <header class="header-right-header">
            <button class="clouse_menu_mob">
                <i class="fa fa-angle-right"> </i>
            </button>
            <button class="clouse_menu">
                <i class="fa fa-angle-right"> </i>
            </button>
            <h1 class="logo"><a href="/"><img class="image-blur" src="{{asset('assets/img/logo-incobac.png')}}" ></a></h1>
        </header>
        <section class="main-right-header">
            <div class="profile">
                @if(session('profile_photo'))
                    <div class="profile-img">
                        <img class="image-blur" src="{{asset('storage/' . session('profile_photo'))}}">
                    </div>
                @else
                    <div class="profile-img">
                        <img class="image-blur"  src="{{asset('assets/img/user-defult.png')}}">
                    </div>
                @endif
                <div class="profile-content">
                    <div class="profile-name">
                        {{session('full_name')}}
                    </div>
                    <div class="profile-city">
                        {{session('province') . ' - ' . session('city')}}
                    </div>
                </div>
                <a href="{{url('profile/'.session('user_name'))}}" class="green-bot">
                    نمایش پروفایل من
                </a>
            </div>
            <div class="header-menu">
                <ul class="list-unstyled">                   
                    <li class="list-item {{Request::is('dashboard/profile/*') ? 'active' : ''}}">
                        <a href="{{route('profile_basic')}}"> 
                            <span>ویرایش پروفایل</span>
                        </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/register-request') ? 'active' : ''}}">
                        <a href="{{route('register_buyer_request')}}" onClick='checkProfileConfirmation(event)'> 
                            <span>ثبت درخواست جدید</span>
                         </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/my-buyAds') || Request::is('dashboard/sell-offer-detail/*') ? 'active' : ''}}">
                        <a href="{{route('buyer-my-buyAds')}}" onClick='checkProfileConfirmation(event)'> 
                            <span>درخواست های من</span>
                        </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/transaction-list') || Request::is('dashboard/transaction-detail/*') ? 'active' : ''}}">
                        <a href="{{route('my-transaction-list')}}" onClick='checkProfileConfirmation(event)'>
                            <span>تراکنش های جاری</span>
                        </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/terminated-transaction-list') ? 'active' : ''}}">
                        <a href="{{route('my-terminated-transaction-list')}}" onClick='checkProfileConfirmation(event)'> 
                            <span>تراکنش های انجام شده</span>
                         </a>
                    </li>
                    <li class="list-item {{Request::is('dashboard/guide') ? 'active' : ''}}">
                        <a href="{{route('dashboard-guide')}}"> 
                            <span>راهنما</span> 
                        </a>
                    </li>
                </ul>
            </div>
            <div class="copy-right">
                <p dir="rtl">
                    تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.
                </p>
            </div>
        </section>
    </section>
    <header id="header" class="main-header">

        <div class="show-header">
            <button class="fa fa-angle-left"></button>
        </div>
        <div class="content-header">
            <span class="font-big">اینکوباک  </span> | <span> بازارگاه آنلاین کشاورزی</span>
        </div>
        <div class="profile-menu-header">
            <a href="#" onclick="dropdown()">
                @if(session('profile_photo'))
                    <div class="image-header-profile">
                        <img class="image-blur" src="{{asset('storage/' . session('profile_photo'))}}">
                    </div>
                @else
                    <div class="image-header-profile">
                        <img class="image-blur" src="{{asset('assets/img/user-defult.png')}}">
                    </div>
                @endif
                <i class="fa fa-angle-down" aria-hidden="true"></i>
                <span class="name-header-profile">{{session('full_name')}}</span>
            </a>
            <div class="profile-list">
                <ul class="list-unstyled">
                    <li class="list-item"><a href="{{route('profile_basic')}}">پروفایل</a></li>
                    <li class="list-item"><a href="{{route('logout')}}">خروج</a></li>
                </ul>
            </div>
        </div>
        <div class="right-menu-header">
            <ul class="list-inline">
                {{--<li><a href="#"><i class="fa fa-bars" aria-hidden="true"></i></a></li>--}}
                <li><a href="{{url('/')}}"><i class="fa fa-home" aria-hidden="true"></i></a></li>
            </ul>
        </div>
        @yield('sub_header')
    </header>
    @yield('main_content')
            <!--      end of scope  -->
</div>    
    @yield('body_script_tags')
<script src="{{asset('assets/js/blurry.load.js')}}"></script>
    <script>
        $('img').blurryLoad();
        function checkProfileConfirmation(event){
            event.preventDefault();
            var e = event.currentTarget;
	
            var url = $(e).attr('href');
         
            axios.post('/user/profile_info',{
                confirmed : true
            })
            .then(function(response){
                if(response.data.profile.confirmed == false){
                    $('#myModal-1').modal('show');
                }
                else{
                    window.location.href = url;
                }
            });
        } 
    </script>
</body>

</html>