    <!DOCTYPE html>
    <html lang="fa">
    <head>
        <meta charset="UTF-8">


        <title>اینکوباک | بازارگاه کشاورزی</title>
        <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
        <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
        <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
        <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
        {{--<script src="{{asset('assets/cdn/vue.js')}}"></script>--}}
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/blurry.load.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/master/style.css')}}">
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


        <header-dash
                logo="{{asset('assets/img/logo-incobac.png')}}"
                storage="{{asset('storage/')}}"
                defultimg="{{asset('assets/img/user-defult.png')}}"
                profileroute=""


        ></header-dash>

        @yield('main_content')
                <!--      end of scope  -->
    </div>

    @yield('body_script_tags')
{{--    <script src="{{asset('assets/js/custom.js')}}"></script>--}}
    <script src="{{asset('js/app.js')}}"></script>
    <script>


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
    </script>

    </body>

    </html>