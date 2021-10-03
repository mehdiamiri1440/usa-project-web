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

    @if(isset($category_name))
    <title>{{'قیمت ' . $category_name . ' - خرید و فروش ' . $category_name . ' عمده - بهترین قیمت روز | باسکول ' }}</title>
    <meta name="description" content='{{"قیمت امروز " . $category_name . " - خرید و فروش " . $category_name . " عمده بدون واسطه از بهترین تامین کنندگان ☀️☀️ آخرین قیمت " . $category_name . " ☀️☀️ بازار باسکول"}}'>
    <meta name="og:description" content='{{"قیمت امروز " . $category_name . " - خرید و فروش " . $category_name . " عمده بدون واسطه از بهترین تامین کنندگان ☀️☀️ آخرین قیمت " . $category_name . " ☀️☀️ بازار باسکول"}}'>
    <meta name="og:site_name" content="باسکول بازارآنلاین خرید و فروش محصولات غذایی و کشاورزی ایران">
    <meta name="og:title" content="{{'قیمت ' . $category_name . ' - خرید و فروش ' . $category_name . ' عمده - بهترین قیمت روز | باسکول ' }}" >
    <link rel="canonical" href="{{url('/product-list/category/' . implode(explode(' ',$category_name),'-'))}}">

    @else
    <title>لیست محصولات و قیمت عمده محصولات کشاورزی | باسکول</title>
    <meta name="description" content="خرید عمده و قیمت میوه | خرید عمده و قیمت غلات | خرید عمده و قیمت صیفی جات | خرید و قیمت عمده خشکبار">
    <meta name="og:description" content="مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی">
    <meta name="og:site_name" content="باسکول بازارآنلاین خرید و فروش محصولات کشاورزی ایران">
    <meta name="og:title" content="لیست محصولات و قیمت عمده محصولات کشاورزی | باسکول">
    @endif

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
