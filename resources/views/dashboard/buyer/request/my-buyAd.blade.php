@extends('layout.buyer-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/buyAd/my-buyAd.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
             <li class="list-item"><a href="#"  class="active">
                درخواست های خرید من </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">

    <section class="main-content col-xs-12" v-if="buyAds.length > 0">
        <ul class="list-unstyled" v-if="buyAds" v-for="buyAd in buyAds">
            <!--start title list -->
            <li class="list-group-item title-list">
      <span class="numbers">
          @{{buyAd.sell_offers.length}}
      </span>
                <p class="title-list-text">@{{buyAd.subcategory_name}}<span class="seperator"> | </span>@{{buyAd.name}} </p>
                <p class="time-show">@{{buyAd.register_date}}</p>
            </li>
            <!--end title list -->
            <div  v-for="sellOffer in buyAd.sell_offers">
                <li class="list-group-item content-list">
                    <p class="price">
                        <span class="static-price">
                            قیمت:
                        </span> @{{sellOffer.price}}
                        <span class="static-price">
                            تومان
                        </span>
                    </p>
                    <p class="city">
                        <span class="static-city">
                            تحویل:
                        </span>@{{sellOffer.deliver_at}}
                    </p>
                    <a v-bind:href="'{{url('dashboard/sell-offer-detail')}}' + '/' +  sellOffer.id " class="show-detail green-bot">جزئیات </a>
                </li>
            </div>
        </ul>
    </section>
    <section class="main-content col-xs-12" v-if="buyAds.length == 0 && !loading">
         <h4 dir="rtl" class="text-center">تاکنون درخواست خریدی ثبت نکرده اید.</h4>       
    </section>
    <section class="main-content col-xs-12 loading_images" v-show="loading">
           <img src="{{asset('assets/img/gif/loading.gif')}}" style="width:200px;height:200px">
    </section>
</main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/dashboard/profile/profile-basic.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/buyer/api-my-buyAd.js')}}"></script>
@endsection
