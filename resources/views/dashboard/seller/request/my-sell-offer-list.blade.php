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

    <section class="main-content col-xs-12" v-if="sellOffers.length > 0" >
        <ul class="list-unstyled">
            <li class="list-group-item" v-for="sellOffer in sellOffers">

                <p class="list-title ">

                <div class="col-sm-3">
                <p class="list-title">
                        @{{sellOffer.category_name}}
                    <span> | </span>
                        @{{sellOffer.subcategory_name}}
                    <span> | </span>
                        @{{sellOffer.name}}
                </p>
                </div>
                <div class="col-sm-2">

                <p class="needs">
                    <span class="static-content">
                        تحویل :
                    </span>
                        @{{sellOffer.deliver_at}}
                </p>
                </div>
                <div class="col-sm-2">

                <p class="needs">
                    <span class="static-content">
                        قیمت :
                    </span>
                    @{{sellOffer.price}}
                    <span class="static-content">
تومان
                    </span>
                </p>
                </div>
                <div class="col-sm-3">
                    <p class="list-time">
                       @{{sellOffer.valid_from + ' - ' + sellOffer.valid_to}}
                    </p>
                </div>
                <div class="col-sm-2 status">
                    <p v-if="sellOffer.status == 'در حال بررسی'" class="detail-stand">
                        @{{sellOffer.status}}
                    </p>
                    <p v-if="sellOffer.status == 'تایید شده'" class="detail-success">
                        @{{sellOffer.status}}
                    </p>
                    <p v-if="sellOffer.status == 'رد شده'" class="detail-error">
                        @{{sellOffer.status}}
                    </p>       
                </div>
            </li>
        </ul>
    </section>
    <section class="main-content col-xs-12" v-if="sellOffers.length == 0 && !loading" >
        <h4 dir="rtl" class="text-center">پیشنهاد خریدی ثبت نکرده اید.</h4>     
    </section>
    <div class="loading_images  col-xs-12" v-show="loading">
        <img src="{{asset('assets/img/gif/loading.gif')}}" style="width:200px;height:200px">
    </div>
</main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/dashboard/seller/buyAd-requests.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/seller/api-my-sell-offer-list.js')}}"></script>
@endsection
