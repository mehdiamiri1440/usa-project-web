@extends('layout.seller-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/product/sell-offer-list.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
             <li class="list-item"><a href="{{route('my-sell-offers')}}" class="active">
                پیشنهادات من </a>
            </li>
            <li class="list-item"><a href="{{route('seller-buyAd-requests')}}">
                درخواست های جدید
            </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
   <main id="main">
 {{--      <my-sell-offers
       loading="{{asset('assets/img/gif/loading.gif')}}"
       ></my-sell-offers>--}}
</main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/dashboard/seller/buyAd-requests.js')}}"></script>
{{--    <script src="{{asset('assets/js/dashboard/seller/api-my-sell-offer-list.js')}}"></script>--}}
@endsection
