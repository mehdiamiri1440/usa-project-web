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
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/kamadatepicker.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/custom.css')}}">

        <script src="{{asset('assets/cdn/axios.js')}}"></script>

        @yield('header_links')
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <script>
            window.Laravel = { csrfToken : '{{csrf_token()}}'}
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
    <div id="app">

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
                guide="{{url('dashboard/guide')}}"
        ></header-dash-seller>
        @section('main_content')
            <main id="main">
            <router-view
                    name="seller"
                    pagenotfoundimage = "{{url('index/images/def404.png')}}"
                    loading="{{asset('assets/img/gif/loading.gif')}}"
                    trans="{{url('dashboard/transaction-detail')}}"
                    transRep="{{url('dashboard/transaction-report')}}"
                    str="{{asset('storage/')}}"
                    defimgitem="{{asset('/assets/img/product.jpg')}}"
            ></router-view>

            </main>
            @show

    </div>

    @yield('body_script_tags')
    <script src="{{asset('assets/js/custom.js')}}"></script>
    <script src="{{asset('js/app.js')}}"></script>
{{--    <script>
        function checkProfileConfirmation(event) {
            event.preventDefault();
            var e = event.currentTarget;
            var url = $(e).attr('href');

            axios.post('/user/profile_info', {
                        confirmed: true
                    })
                    .then(function (response) {
                        if (response.data.profile.confirmed == false) {
                            $('#myModal-1').modal('show');
                        }
                        else {
                            window.location.href = url;
                        }
                    });
        }
    </script>--}}

    </body>

    </html>