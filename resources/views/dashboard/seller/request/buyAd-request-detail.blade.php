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

    <section class="main-content col-xs-12">
        <div class="contents col-xs-12">
            <div class="info-contents col-xs-12">
                <div class="top-contentas  col-xs-12">
                    <div class="main-article-content col-md-7">
                        <h3>
                            {{$buyAd->category_name . ' | ' . $buyAd->subcategory_name . ' | ' .$buyAd->name}}
                        </h3>
                        <br/>
                        <table class="table table-striped">
                            <tr>
                                <td>قیمت واحد<span class="">(هر کیلو به تومان)</span> :</td>
                                <td> {{$buyAd->price or "-" }} تومان</td>
                            </tr>
                            <tr>
                                <td> محل تحویل کالا:</td>
                                <td>{{$buyAd->address}}</td>
                            </tr>
                            <tr>
                                <td> میزان نیازمندی</td>
                                <td>{{$buyAd->requirement_amount}} کیلوگرم</td>
                            </tr>
                            <tr>
                                <td> زمان ثبت درخواست:</td>
                                <td>{{$buyAd->register_date}}</td>
                            </tr>
                        </table>
                        <p>توضیحات: <span>{{$buyAd->description}}</span></p>
                    </div>
                    <div class="image-article-content col-md-5">
                        <div class="main-image col-xs-12">
                            @if(sizeof($buyAd->photos) > 0)
                                <a  href="{{url('storage/'.($buyAd->photos ? $buyAd->photos[0] : ''))}}"><img src="{{url('storage/'.($buyAd->photos ? $buyAd->photos[0] : ''))}}" alt=""></a>
                            @else
                                <a href="{{asset('assets/img/product.jpg')}}"><img src="{{asset('assets/img/product.jpg')}}"></a>
                            @endif
                        </div>
                        <div class="owl-carousel col-xs-12">
                            @foreach($buyAd->photos as $photo)
                                <a href="{{url('storage/'.$photo)}}"><img src="{{url('storage/'.$photo)}}" alt=""></a>
                            @endforeach
                        </div>
                    </div>
                </div>
                <div class="bottom-contents  col-xs-12">
                    <form>
                        <label class="header-lable">تمامی موارد خواسته شده را وارد کرده و برای خریدار ارسال نمایید.</label>
                        <div class="fields col-xs-12">
                            <input type="hidden" value="{{$buyAd->id}}" ref="buyAdId">
                            <div class="col-sm-6">
                                <label class="content-lable">
                                    محل تحویل
                                </label>
                                <input type="text" v-model="sellOffer.deliver_at" >
                                <span v-if="errors.deliver_at" class="text-danger" >@{{ errors.deliver_at[0] }}</span>
                            </div>
                            <div class="col-sm-6">

                                <label class="content-lable">
                                     قیمت پیشنهادی به ازای هر کیلو به تومان
                                </label>
                                <input type="text" v-model="sellOffer.price"  >
                                <span v-if="errors.price" class="text-danger" >@{{ errors.price[0] }}</span>
                            </div>
                            <div class="col-sm-6">
                                <label class="content-lable">
                                    تاریخ موجودی
                                </label>
                                <input readonly="true" type="text" id="first-date-id" ref="validDateFrom">
                                <span v-if="errors.valid_date_to" class="text-danger" >@{{ errors.valid_date_to[0] }}</span>
                            </div>
                            <div class="col-sm-6">

                                <label class="content-lable">
                                    انتهای تاریخ موجودی
                                </label>
                                <input readonly="true" type="text" id="end-date-id" ref="validDateTo">
                                <span v-if="errors.valid_date_from" class="text-danger" >@{{ errors.valid_date_from[0] }}</span>
                            </div>
                            <div class="col-xs-12">

                                <label class="content-lable">
                                    توضیحات:
                                </label>
                                <textarea placeholder="" v-model="sellOffer.description"></textarea>
                                <span v-if="errors.description" class="text-danger" >@{{ errors.description[0] }}</span>
                            </div>
                            <div class="image_company col-xs-12">

                                <label class="content-lable">
                                    تصاویر:
                                </label>
                                <input type="file" ref="sellOfferFiles" multiple accept="image/*" @change="handleSellOfferFileUpload()">
                                <span v-if="errors.photos_count" class="text-danger" >@{{ errors.photos_count[0] }}</span>
                            </div>
                            <div class="col-sm-6">
                                <button type="button" class="col-xs-12 green-bot" @click="submitSellOffer">تایید</button>
                            </div>
                            <div class="col-sm-6">
                                <a href="{{route('seller-buyAd-requests')}}" class="black-bot col-xs-12 col-xs-6">بازگشت به صفحه قبل</a>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/dashboard/seller/buyAd-request-detail.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/seller/api-buyAd-request-detail.js')}}"></script>
@endsection
