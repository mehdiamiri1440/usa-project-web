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
    <section class="main-content col-xs-12" v-if="buyAds.length != 0">
        <ul class="list-unstyled" v-for="buyAd in buyAds">
            <li class="list-group-item">
                <p class="list-title col-sm-3">
                    @{{buyAd.category_name}}
                    <span> | </span>
                    @{{buyAd.subcategory_name}}
                    <span> | </span>
                    @{{buyAd.name}}
                </p>
                <p class="needs col-sm-4">
                    <span class="static-content">
                        میزان نیازمندی :
                    </span>
                    @{{buyAd.requirement_amount}}

                    <span class="static-content">
کیلوگرم
                    </span>
                </p>

                <p class="list-time col-sm-2">
                    @{{buyAd.register_date}}
                </p>
                <a class="col-sm-3" v-bind:href="'{{url('dashboard/buyAd-request-detail')}}' + '/' +  buyAd.id ">
                    <p class="detail-success">
                        مشاهده ی جزییات
                    </p>
                </a>                
            </li>
        </ul>
    </section>
    <section class="main-content col-xs-12 loading_images" v-else-if="buyAds.length == 0 && !loading">
       <h4 dir="rtl" class="text-center">درخواستی برای شما وجود ندارد.</h4>
    </section>
    <section class="main-content col-xs-12 loading_images" v-show="loading">
        <img src="{{asset('assets/img/gif/loading.gif')}}" style="width:200px;height:200px">
    </section>
</main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/dashboard/seller/buyAd-requests.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/seller/api-buyAd-requests.js')}}"></script>
@endsection
