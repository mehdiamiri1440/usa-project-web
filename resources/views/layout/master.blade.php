<!DOCTYPE html>
<html lang="fa">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="keywords" content="محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,باسکول">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="csrf-token" content="{{csrf_token()}}">
    @if(config('app.name') != 'Laravel')
    <meta name="robots" content="noindex" />
    @endif

    <link rel="icon" href="{{asset('assets/img/logo/mobile-logo.svg')}}">
    
    <!-- fonts -->
    <link rel="preload" href="{{asset('assets/fonts/woff2/IRANSansWeb(FaNum)_Bold.woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('assets/fonts/woff2/IRANSansWeb(FaNum).woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('assets/fonts/woff2/IRANSansWeb(FaNum)_Medium.woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('assets/webfonts/fa-solid-900.woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('assets/webfonts/fa-regular-400.woff2')}}" as="font" type="font/woff2" crossorigin>
  
    <!-- Main Styles
    // improve for blocking request for preload
    -->
    <link rel="preload" href="{{asset('assets/css/fontiran.min.css')}}" as="style" onload="this.rel='stylesheet'" crossorigin>
    <link rel="preload" href="{{asset('assets/css/all.min.css')}}" as="style" onload="this.rel='stylesheet'" crossorigin>
    {{-- <link rel="preload" href="{{asset('assets/css/bootstrap.min.css')}}" as="style" onload="this.rel='stylesheet'" crossorigin> --}}
    <link  href="{{asset('assets/css/bootstrap.min.css')}}" rel="stylesheet">
    <link rel="preload" href="{{asset('css/app.css')}}" as="style" onload="this.rel='stylesheet'" crossorigin>
    <title>باسکول | بازار خرید و فروش عمده محصولات غذایی و کشاورزی ایران بدون واسطه</title>

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
        gtag('config', 'UA-129398000-1', {'send_page_view': false});
    </script>
  <style>
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
      top: 40%;
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
    .main-loader-shape-wrapper {
      position: absolute;
      /* height: 70px !important; */
      bottom: 20%;
      left: calc(50% - 23px);
      padding: 0;
    }
    /* preloader image style*/
    /*spinner and animation styles*/
  #master-loader-wrapper  .spinner-border {
    display: inline-block;
    vertical-align: text-bottom;
    border: 0.25rem solid currentColor;
    border-right-color: currentcolor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: spinner-border 1s linear infinite;
    animation: spinner-border 1s linear infinite;
  }
  #master-loader-wrapper  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  @keyframes spinner-border {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
    #master-loader-wrapper .spinner-border{
      width: 45px;
      height: 45px;
      color: #bbb;
      border-width: 3px;
      box-sizing: border-box;
      top: 0;
      position: relative;
    }

  </style>
</head>
<body >

 <!-- #regex main loader -->
 <div id="master-loader-wrapper" class="main-loader-wrapper">
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
      <div class="spinner-border" >
        <span class="sr-only"></span>
      </div>
    </div>
  </div>

  <!-- end regex main loader -->

  <div id="app">
    <route-component
      user-id = "{{session('user_id')}}"
      is-seller = "{{session('is_seller')}}"
      assets = "{{asset('')}}"
      storage-path = "{{url('/storage')}}"
      profile-photo="{{session('profile_photo')}}"
      user-full-name="{{session('full_name')}}"
      user-logout-path="{{route('logout')}}"
    />
  </div>

<script  src="https://www.gstatic.com/firebasejs/7.13.0/firebase-app.js"></script>
<script  src="https://www.gstatic.com/firebasejs/7.13.0/firebase-messaging.js"></script> 

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

<script src="{{asset('js/app.js')}}" async></script>

<script>
    document.addEventListener('DOMContentLoaded', (event) => {
      var x = document.getElementById("master-loader-wrapper");
      x.style.display = "none";
    })
    function getUserId(){
        let userId = <?php if(session('user_id')){echo session('user_id');} else echo -1; ?>;
        return userId;
    }
    function getBase(){
        let base = {!! json_encode(url('/')) !!}
        return base + '/';
    }

</script>
</body>
</html>
