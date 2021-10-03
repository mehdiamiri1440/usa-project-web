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

    <?php
        $content = $product['user_info']->first_name . ' ' . 
        $product['user_info']->last_name . ' ' . 
        "خرید و فروش عمده و قیمت " . 
        $product['main']->product_name . ' ' . 
        $product['main']->city_name . ' ' . 
        $product['main']->province_name . ' ' . 
        "موجودی :‌ " . 
        $product['main']->stock . 'کیلوگرم ' . 
        implode(' ', explode('<hr/>',$product['main']->description));
    ?>

    <title>{{'خرید و قیمت ' . $product['main']->sub_category_name .' '. $product['main']->product_name .  ' عمده '  . $product['main']->city_name . ' ' . $product['main']->province_name . ' ' . $product['user_info']->first_name . ' ' . $product['user_info']->last_name . ' | باسکول' }}</title>
    <meta name="description" content='{{$content}}'>
    <meta name="og:description" content='{{$content}}'>
    <meta name="og:site_name" content="باسکول بازارآنلاین خرید و فروش محصولات کشاورزی ایران">
    <meta name="og:title" content="{{'خرید و قیمت ' . $product['main']->sub_category_name .' '. $product['main']->product_name .  ' عمده '  . $product['main']->city_name . ' ' . $product['main']->province_name . ' ' . $product['user_info']->first_name . ' ' . $product['user_info']->last_name . ' | باسکول' }}" >
    <link rel="canonical" href="{{url('/product-view/' . 'خرید-عمده-' .  implode(explode(' ',$product['main']->sub_category_name),'-') . '/' . $product['main']->category_name . '/' . $product['main']->id)}}">

    <meta property="og:image" content="{{asset('/storage/' . $product['photos'][0]->file_path)}}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="400" />
    <meta property="og:image:height" content="300" />
    <meta property="og:url" content="{{url('/product-view/' . 'خرید-عمده-' .  implode(explode(' ',$product['main']->sub_category_name),'-') . '/' . $product['main']->category_name . '/' . $product['main']->id)}}"/>

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
