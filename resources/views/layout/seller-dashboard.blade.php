    <!DOCTYPE html>
    <html lang="fa">
    <head>
        <meta charset="UTF-8">
        <title>اینکوباک | بازارگاه کشاورزی</title>
        <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
        <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
        <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
        <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
        <script src="{{asset('assets/js/kamadatepicker.js')}}"></script>
        <script src="{{asset('assets/js/kamadatepicker.js')}}"></script>
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/cropper.css')}}">

        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/kamadatepicker.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">

        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/custom.css')}}">
        <script src="{{asset('assets/cdn/axios.js')}}"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <script>
            window.Laravel = { csrfToken : '{{csrf_token()}}'}
        </script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-129398000-1');

          var userId = '<?php echo session('user_id');?>';

          gtag('set', {'user_id': '<?php echo session('user_id');?>'});
          //console.log('selle dashboard');
        </script>



        <style>
            html {
                overflow-y: scroll;
            }
        </style>
        <style>
            .loading_images img {
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
                padding-right: 0 !important;
            }
        </style>

    </head>

    <body>
    <div id="app"></div>
    <div id="appLayouts"></div>
    <div id="appBuyer"></div>
    <div id="appSeller">

        <header-dash-seller
                logo="{{asset('assets/img/logo-incobac.png')}}"
                storage="{{asset('storage/')}}"
                defultimg="{{asset('assets/img/user-defult.png')}}"
                transactroute="{{route('my-terminated-transaction-list')}}"
                mytrans="{{route('my-transaction-list')}}"
                selregpro="{{route('seller-register-product')}}"
                byadreq="{{route('seller-buyAd-requests')}}"
                logout="{{route('logout')}}"
                routehome="{{url('/')}}"
                loading="{{asset('assets/img/gif/prload.gif')}}"
                guide="{{url('privacy_and_policy.vue')}}"
        ></header-dash-seller>
            <main id="main">
            <router-view
                    name="seller"
                    pagenotfoundimage = "{{url('index/images/def404.png')}}"
                    loading="{{asset('assets/img/gif/loading.gif')}}"
                    trans="{{url('dashboard/transaction-detail')}}"
                    transRep="{{url('dashboard/transaction-report')}}"
                    str="{{asset('storage/')}}"
                    defimgitem="{{asset('/assets/img/product.jpg')}}"
                          defultimg="{{asset('assets/img/user-defult.png')}}"
            ></router-view>

            </main>

    </div>
    @yield('body_script_tags')
    <script>
             
    </script>
    <script src="{{asset('assets/js/custom.js')}}"></script>
    <script src="{{asset('js/app.js')}}"></script>
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
