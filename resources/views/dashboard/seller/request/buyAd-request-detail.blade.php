@extends('layout.seller-dashboard')
@section('header_links')
    <script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <script src="{{asset('assets/js/imageuploadify.min.js')}}"></script>
    <script src="{{asset('assets/js/kamadatepicker.js')}}"></script>
    <script src="{{asset('assets/js/imageuploadify.min.js')}}"></script>
    <link href="{{asset('assets/css/kamadatepicker.min.css')}}" type="text/css" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/seller/buyAd-request-detail.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item">
                <a href="">درخواست من </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">
        <buy-ad-request-detail></buy-ad-request-detail>
    </main>
@endsection

@section('body_script_tags')
{{--    <script src="{{asset('assets/js/dashboard/seller/buyAd-request-detail.js')}}"></script>--}}
{{--    <script src="{{asset('assets/js/dashboard/seller/api-buyAd-request-detail.js')}}"></script>--}}
@endsection
