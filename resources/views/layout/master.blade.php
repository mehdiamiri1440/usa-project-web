<!DOCTYPE html>
<html lang="fa">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="keywords" content="محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,باسکول">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">

    <link rel="icon" href="{{asset('assets/img/logo/mobile-logo.svg')}}">
    <link rel="apple-touch-icon" sizes="57x57" href="{{asset('assets/img/favicon/apple-icon-57x57.png')}}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{asset('assets/img/favicon/apple-icon-60x60.png')}}" >
    <link rel="apple-touch-icon" sizes="72x72" href="{{asset('assets/img/favicon/apple-icon-72x72.png')}}" >
    <link rel="apple-touch-icon" sizes="76x76" href="{{asset('assets/img/favicon/apple-icon-76x76.png')}}" >
    <link rel="apple-touch-icon" sizes="114x114" href="{{asset('assets/img/favicon/apple-icon-114x114.png')}}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{asset('assets/img/favicon/apple-icon-120x120.png')}}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{asset('assets/img/favicon/apple-icon-144x144.png')}}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{asset('assets/img/favicon/apple-icon-152x152.png')}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('assets/img/favicon/apple-icon-180x180.png')}}">
    <link rel="icon" type="image/png" sizes="192x192"  href="{{asset('assets/img/favicon/android-icon-192x192.png')}}" href="">
    <link rel="icon" type="image/png" sizes="32x32" href="{{asset('assets/img/favicon/favicon-32x32.png')}}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{asset('assets/img/favicon/favicon-96x96.png')}}" >
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('assets/img/favicon/favicon-16x16.png')}}" >
   

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="بازار باسکول" />
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{asset('assets/img/favicon//ms-icon-144x144.png')}}">
    <meta name="theme-color" content="#ffffff">

    <link rel="manifest" href="{{asset('assets/img/favicon/manifest.json')}}">

    <title>باسکول | بازارگاه کشاورزی </title>

    <link rel="stylesheet" href="{{asset('assets/css/addtohomescreen.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/main-loader.css')}}">



     <script>
        window.Laravel = {csrfToken: '{{csrf_token()}}'}
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        //        gtag('config', 'UA-129398000-1');
        gtag('config', 'UA-129398000-1', {'send_page_view': false});
    </script>


</head>
<body >

 <!-- #regex main loader -->
 <div class="main-loader-wrapper">
   
    <div class="logo-main-loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="92.818"
        height="113.671"
        viewBox="0 0 92.818 113.671"
      >
        <g id="Group_23" data-name="Group 23" transform="translate(-273.1 -703.931)">
          <path
            id="Subtraction_1"
            data-name="Subtraction 1"
            d="M46.473,84.764A46.472,46.472,0,0,1,0,38.291,45.955,45.955,0,0,1,5.124,17.06,46.892,46.892,0,0,1,18.8.952l11.8,11.8A29.746,29.746,0,1,0,75.91,42.2l8.124-7.99,8.7,8.557a46.481,46.481,0,0,1-46.262,42ZM92.818,34.8l-.007-.007-8.777-8.661-8.065,7.957A29.849,29.849,0,0,0,60.905,11.907L72.812,0a46.252,46.252,0,0,1,20,34.786Z"
            transform="translate(273.1 732.838)"
            fill="#e51b35"
          />
          <g id="Group_24" data-name="Group 24" transform="translate(293.176 703.931)">
            <path
              id="Rectangle_12"
              data-name="Rectangle 12"
              d="M3,0H35.32a0,0,0,0,1,0,0V20.448a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
              transform="translate(14.459 9.201) rotate(45)"
              fill="#00c569"
            />
            <path
              id="Rectangle_13"
              data-name="Rectangle 13"
              d="M0,0H50.191a0,0,0,0,1,0,0V18.589a0,0,0,0,1,0,0H4a4,4,0,0,1-4-4V0A0,0,0,0,1,0,0Z"
              transform="translate(61.103 13.145) rotate(135)"
              fill="#00c569"
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="main-loader-shape-wrapper">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>

  <!-- end regex main loader -->

  <div id="app">

            <route-component
                    user-id = "{{session('user_id')}}"
                    is-seller = "{{session('is_seller')}}"
                    assets = "{{asset('')}}"
                    storage-path = "{{url('storage/')}}"
                    profile-photo="{{session('profile_photo')}}"
                    user-full-name="{{session('full_name')}}"
                    user-logout-path="{{route('logout')}}"
            />
  </div>

<script src="https://www.gstatic.com/firebasejs/7.13.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.13.0/firebase-messaging.js"></script> 

<script>

    var firebaseConfig = {
        apiKey: "AIzaSyDHAonYamODsV034KRTjzd4_C_z4YpzaRo",
        authDomain: "incobac-64ec9.firebaseapp.com",
        databaseURL: "https://incobac-64ec9.firebaseio.com",
        projectId: "incobac-64ec9",
        storageBucket: "incobac-64ec9.appspot.com",
        messagingSenderId: "946346601127",
        appId: "1:946346601127:web:74e870ed6dd09f369bc982",
        measurementId: "G-ZXCG6RTHC7"
    };
    // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        const messaging = firebase.messaging();
</script>
<script src="{{asset('assets/js/addtohomescreen.min.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>

 {{-- <script async src="{{asset('js/sw/app.js')}}"></script> 
 <script src="{{asset('assets/js/idleTimer.js')}}"></script>  --}}

<script>
  if(
      (("standalone" in window.navigator) && !window.navigator.standalone) // ios
      ||
      (!window.matchMedia('display-mode:standalone').matches) // android
    ){
      addToHomescreen();
    }

    $(document).ready(function () {
        // $(document).idleTimer(7200000);
        
        $('.main-loader-wrapper').css('display','none');
    });
    
    $(document).on("idle.idleTimer", function () {
        window.location.href = '/login'
    });

    function getUserId(){
        let userId = <?php if(session('user_id')){echo session('user_id');} else echo -1; ?>;
        return userId;
    }

   
    //     addEvent(window, "load", function (e) {
            
    //         });
    //     });
</script>


</body>

</html>
