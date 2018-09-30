@extends('layout.seller-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/product/sell-offer-list.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item"><a href="{{route('my-sell-offers')}}">
                    پیشنهادات من </a>
            </li>
            <li class="list-item"><a href="{{route('seller-buyAd-requests')}}" class="active">
                    درخواست های جدید
                </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">
            {{--<buy-ad-request
                    byadd="{{url('dashboard/buyAd-request-detail')}}"
                    loader="{{asset('assets/img/gif/loading.gif')}}"
            ></buy-ad-request>--}}
    </main>
@endsection

@section('body_script_tags')
        <script src="{{asset('assets/js/dashboard/seller/buyAd-requests.js')}}"></script>
    {{--    <script src="{{asset('assets/js/dashboard/seller/api-buyAd-requests.js')}}"></script>--}}
@endsection
