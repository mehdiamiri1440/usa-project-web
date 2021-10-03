<!DOCTYPE html>
<html lang="fa">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta property="og:title" content="{{$profile->first_name . ' ' . $profile->last_name}}" />
    <meta property="og:description" content="پروفایل تجاری {{$profile->first_name . ' ' . $profile->last_name}} در باسکول، بزرگترین سامانه خرید و فروش عمده مواد غذایی کشور" />
    @if($profile->profile_photo)
    <meta property="og:image" content="{{asset('/storage/' . $profile->profile_photo)}}" />
    @else
    <meta property="og:image" content="{{asset('assets/img/logo/512-buskool-logo.jpg')}}" />
    @endif
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />
    <meta property="og:type" content="profile"/>
    <meta property="og:profile:first_name" content="{{$profile->first_name}}"/>
    <meta property="og:profile:last_name" content="{{$profile->last_name}}"/>
    <meta property="og:url" content="{{url('/shared-profile/' . $profile->user_name)}}"/>

    <meta name="csrf-token" content="{{csrf_token()}}">

    <link rel="icon" href="{{asset('assets/img/logo/mobile-logo.svg')}}">

    <title>پروفایل تجاری {{$profile->first_name . ' ' . $profile->last_name}} | باسکول</title>
    <!-- Bootstrap css -->
    <link rel="stylesheet" href="{{asset('index/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/main-loader.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/shared-profile-style.css')}}">
    
    <!-- Main css -->
    <script src="{{asset('index/js/jquery.js')}}"></script>

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
<div class="header-page-wrapper">
</div>
   <div class="main-page-wrapper ">   
        <div class="main-content container">
            <p class="logo-section">
                <a href="/">
                    <img src="{{asset('assets/img/logo/web-logo.svg')}}" alt="باسکول">
                </a>
            </p>
            <div class="user-data">
                <div class="user-image">
                    @if($profile->profile_photo)
                        <img src="{{asset('/storage/' . $profile->profile_photo)}}" alt="باسکول">
                    @else
                        <img src="{{asset('assets/img/user-defult.png')}}" alt="باسکول">
                    @endif
                </div>
                <p class="user-name">
                    {{$profile->first_name . ' ' . $profile->last_name}}
                </p>
            </div>
            <p class="description">
                برای مشاهده پروفایل تجاری 
                <span class="light-green-text">{{$profile->first_name . ' ' . $profile->last_name}}</span>
                روی دکمه زیر کلیک کنید.
            </p>
            <a class="share-button" href="{{'/profile/' . $profile->user_name}}">
                مشاهده پروفایل
            </a>
        </div>
  </div> 



<script>
    $(document).ready(function(){
      $('.main-loader-wrapper').css('display','none');     
    })
  </script>
</body>
</html>
