<!DOCTYPE html>
<html lang="fa">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta property="og:title" content="{{$profile->first_name . ' ' . $profile->last_name}}" />
    <meta property="og:description" content="پروفایل تجاری {{$profile->first_name . ' ' . $profile->last_name}} در باسکول، بزرگترین سامانه خرید و فروش عمده مواد غذایی کشور" />
    <meta property="og:image" content="{{asset('/storage/profile_photos/' . $profile->profile_photo)}}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />

    <meta name="csrf-token" content="{{csrf_token()}}">

    <link rel="icon" href="{{asset('assets/img/logo/mobile-logo.svg')}}">

    <title>پروفایل تجاری {{$profile->first_name . ' ' . $profile->last_name}} | باسکول</title>
    <!-- Bootstrap css -->
    <link rel="stylesheet" href="{{asset('index/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/shared-profile-style.css')}}">


</head>
<body >

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
                    <img src="{{asset('assets/img/user-defult.png')}}" alt="">
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


</body>

</html>
