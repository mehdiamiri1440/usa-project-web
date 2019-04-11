<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="خرید و فروش مستقیم محصولات کشاورزی">
    <meta name="keywords" content="محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,اینکوباک">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>اینکوباک | بازارگاه کشاورزی </title>
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
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/profile/main-profile.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/master/style.css')}}">

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
<div id="app"></div>
<div id="appBuyer"></div>
<div id="appSeller"></div>
<div id="appLayouts">

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
                            ali
                            {{--@{{popUpMsg}}--}}
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

    <!--loader-->

    {{--<div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">--}}
        {{--<div class="main-loader">--}}
            {{--<img src="{{asset('assets/img/gif/prload.gif')}}">--}}
            {{--<p dir="rtl">کمی صبر کنید...</p>--}}
        {{--</div>--}}
    {{--</div>--}}
    <!--end loader-->


    <!-- =========================
 NAVIGATION LINKS
============================== -->
        <header-master-layouts
                user_id="{{session('user_id')}}"
                user_default_image="{{asset('assets/img/user-defult.png')}}"
                profile_photo="{{session('profile_photo')}}"
                user_full_name="{{session('full_name')}}"
                user_logout_path="{{route('logout')}}"
                storage_path="{{url('storage/')}}"
                login_page_path="{{route('logout')}}"
        ></header-master-layouts>
        <router-view
                name="layouts"
                loading_img="{{asset('assets/img/gif/loading.gif')}}"
                trans="{{url('dashboard/transaction-detail')}}"
                transRep="{{url('dashboard/transaction-report')}}"
                str="{{asset('storage/')}}"
                defimgitem="{{asset('/assets/img/product.jpg')}}"
                defultimg="{{asset('assets/img/user-defult.png')}}"
                siteLogo="{{asset('assets/img/logo-incobac.png')}}"
                incobaicon="{{asset('assets/img/lo.png')}}"
        ></router-view>

</div>
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('assets/js/idleTimer.js')}}"></script>
<script>


    $(document).ready(function () {
             $(document).idleTimer(7200000);
    });

    $(document).on("idle.idleTimer", function () {
        // function you want to fire when the user goes idle
        window.location.href = '/login'
    });
</script>
</body>

</html>
