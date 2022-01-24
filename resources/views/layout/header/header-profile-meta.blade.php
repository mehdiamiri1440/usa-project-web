<!DOCTYPE html>
<html lang="fa">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <link rel="icon" href="{{asset('assets/img/logo/mobile-logo.svg')}}">

    @if(config('app.name') != 'Laravel')
    <meta name="robots" content="noindex" />
    @endif

    
    <title>{{'پروفایل تجاری ' . $profile_info->first_name . ' ' . $profile_info->last_name . ' در باسکول بازار عمده ایران'}}</title>
    <meta name="description" content='{{$profile_info->description}}'>
    <meta name="og:description" content='{{$profile_info->description}}'>
    <meta name="og:site_name" content="باسکول بازارآنلاین خرید و فروش محصولات غذایی و کشاورزی ایران">
    <meta name="og:title" content="{{'پروفایل تجاری ' . $profile_info->first_name . ' ' . $profile_info->last_name . ' در باسکول بازار عمده ایران'}}" >

    <meta property="og:image" content="{{asset('assets/img/logo/512-buskool-logo.jpg')}}" />

    <!-- Bootstrap css -->
    <link rel="stylesheet" href="{{asset('index/css/bootstrap.min.css')}}">


    <!-- Font Awesome css -->
    <link rel="stylesheet" href="{{asset('assets/css/all.css')}}">

    <link rel="stylesheet" href="{{asset('assets/css/product-list/placeholder-content.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/main-loader.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/header-styles.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/footer-styles.css')}}">


 

    


    <!-- Main css -->
    {{-- <script src="{{asset('index/js/jquery.js')}}"></script>

    <script src="{{asset('index/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('assets/js/stickySidebar.js')}}"></script> --}}

    {{-- <script src="{{asset('assets/js/product-list/custom.js')}}"></script> --}}
