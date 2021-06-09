<!DOCTYPE html>
<html lang="fa">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="keywords" content="محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,باسکول">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <meta name="csrf-token" content="{{csrf_token()}}">

    <link rel="icon" href="{{asset('assets/img/logo/mobile-logo.svg')}}">


    <!-- fonts -->
    <link rel="preload" href="{{asset('assets/fonts/woff2/IRANSansWeb(FaNum)_Bold.woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('assets/fonts/woff2/IRANSansWeb(FaNum).woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('assets/fonts/woff2/IRANSansWeb(FaNum)_Medium.woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('assets/webfonts/fa-solid-900.woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('assets/webfonts/fa-regular-400.woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('assets/webfonts/fa-brands-400.woff2')}}" as="font" type="font/woff2" crossorigin>
    
    
    <!-- Main Styles -->
    <link rel="stylesheet" href="{{asset('assets/css/fontiran.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('assets/css/all.min.css')}}" type="text/css">
    <link rel="stylesheet" href="{{asset('css/app.css')}}" type="text/css">

    <title>باسکول | بازارگاه کشاورزی </title>




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

    <style>

      /* @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-display: swap;
        font-weight: bold;
        src: url("../../assets/fonts/woff2/IRANSansWeb(FaNum)_Bold.woff2");
        src: url("../../assets/fonts/eot/IRANSansWeb(FaNum)_Bold.eot?#iefix")
          format("embedded-opentype"),
             url("../../assets/fonts/woff2/IRANSansWeb(FaNum)_Bold.woff2")
          format("woff2"),

          url("../../assets/fonts/woff/IRANSansWeb(FaNum)_Bold.woff") format("woff"),

          url("../../assets/fonts/ttf/IRANSansWeb(FaNum)_Bold.ttf") format("truetype");
      }
      @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-display: swap;
        font-weight: 500;

        src: url("../../assets/fonts/woff2/IRANSansWeb(FaNum)_Medium.woff2");
        src: url("../../assets/fonts/eot/IRANSansWeb(FaNum)_Medium.eot?#iefix")
            format("embedded-opentype"),
             url("../../assets/fonts/woff2/IRANSansWeb(FaNum)_Medium.woff2")
            format("woff2"),

            url("../../assets/fonts/woff/IRANSansWeb(FaNum)_Medium.woff") format("woff"),

            url("../../assets/fonts/ttf/IRANSansWeb(FaNum)_Medium.ttf") format("truetype");
      }
      @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-display: swap;
        font-weight: 300;

        src: url("../../assets/fonts/woff2/IRANSansWeb(FaNum)_Light.woff2");
        src: url("../../assets/fonts/eot/IRANSansWeb(FaNum)_Light.eot?#iefix")
            format("embedded-opentype"),
             url("../../assets/fonts/woff2/IRANSansWeb(FaNum)_Light.woff2")
            format("woff2"),

            url("../../assets/fonts/woff/IRANSansWeb(FaNum)_Light.woff") format("woff"),

            url("../../assets/fonts/ttf/IRANSansWeb(FaNum)_Light.ttf") format("truetype");
      }
      @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-display: swap;
        font-weight: 200;

        src: url("../../assets/fonts/woff2/IRANSansWeb(FaNum)_UltraLight.woff2");
        src: url("../../assets/fonts/eot/IRANSansWeb(FaNum)_UltraLight.eot?#iefix")
            format("embedded-opentype"),
             url("../../assets/fonts/woff2/IRANSansWeb(FaNum)_UltraLight.woff2")
            format("woff2"),

            url("../../assets/fonts/woff/IRANSansWeb(FaNum)_UltraLight.woff") format("woff"),

            url("../../assets/fonts/ttf/IRANSansWeb(FaNum)_UltraLight.ttf") format("truetype");
      }
      @font-face {
        font-family: IRANSans;
        font-style: normal;
        font-display: swap;
        font-weight: normal;

        src: url("../../assets/fonts/woff2/IRANSansWeb(FaNum).woff2");
        src: url("../../assets/fonts/eot/IRANSansWeb(FaNum).eot?#iefix")
            format("embedded-opentype"),
             url("../../assets/fonts/woff2/IRANSansWeb(FaNum).woff2") format("woff2"),
             url("../../assets/fonts/woff/IRANSansWeb(FaNum).woff")
            format("woff"),

            url("../../assets/fonts/ttf/IRANSansWeb(FaNum).ttf") format("truetype");
      } */
      .main-loader-wrapper {
        
        position: fixed;

        bottom: 20px;

        z-index: 1030;

        background: #fff;

        width: 100%;

        height: 100%;

        left: 0;

        top: 0;
        }

        .logo-main-loader {
        display: inline-block;

        position: absolute;

        left: 50%;

        top: 45%;

        transform: translate(-50%, -50%);

        text-align: center;

        line-height: 1.618;

        width: 100%;

        padding: 0 15px;
        }

        .logo-main-loader svg {
            width: 60px;
            height: 70px;
        }

        .logo-main-loader p {
        font-size: 16px;
        font-weight: bold;
        line-height: 2;
        }

        .main-loader-shape-wrapper {
        position: absolute;
        padding: 40px 0;
        bottom: 80px;
        left: 50%;
        }


        /* preloader image style*/
        .lds-ring {
        display: inline-block;

        position: absolute;

        width: 64px;

        height: 64px;

        left: 50%;

        top: 50%;

        transform: translate(-50%, -50%);
        }

        .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 5px solid #28a745;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #28a745 transparent transparent transparent;
        }

        .lds-ring-alt {
        display: block;
        margin-top: 50px;
        direction: rtl;
        text-align: center;
        }

        .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
        }

        .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
        }

        .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
        }

        @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
        }
    </style>
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

<script src="{{asset('js/app.js')}}"></script>

 {{-- <script async src="{{asset('js/sw/app.js')}}"></script> 
 <script src="{{asset('assets/js/idleTimer.js')}}"></script>  --}}

<script>
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
    function getBase(){
        let base = {!! json_encode(url('/')) !!}
        return base + '/';
    }

   
    //     addEvent(window, "load", function (e) {
            
    //         });
    //     });
</script>


</body>

</html>
