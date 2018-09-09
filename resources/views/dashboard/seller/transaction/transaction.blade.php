@extends('layout.seller-dashboard')

@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/seller/transaction.css')}}">
@endsection


@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item active" >
                <a href="#">
                    فرآیند فروش
                </a>
            </li>
        </ul>
    </div>
@endsection


@section('main_content')
<main id="main">
    <section  class="main-content col-xs-12" v-if="transactionInfo">
        <!--part 1-->
        <div id="step1" v-if="currentStep == 1">
                <nav class="main-content-nav col-xs-12">
                    <ul class="list-inline">
                        <li class="list-item "><a href="#"> تسویه حساب </a></li>
                        <li class="list-item "><a href="#">بارگیری محصول</a></li>
                        <li class="list-item active"><a @click.prevent="goToStep(1)" href="#">تایید مفاد قرارداد </a></li>
                    </ul>
                </nav>
            <div v-if="msg == ''">
                <div class="contents col-xs-12">
                   <div class="content-show">
                               <div class="buttons ">
                        <div class="main_buttons col-xs-12 col-sm-8 col-md-9">
                            <a href="#" class="default_btn" @click.prevent="goToNextPage()">صفحه بعد</a>
                            <a href="#" class="default_btn" @click.prevent="goToPrePage()">صفحه قبل</a>
                        </div>
                        <div class="continue_but col-xs-12 col-sm-4 col-md-3">
                            <a href="#" @click.prevent="confirmContract" class="green-bot">تایید قرارداد</a>
                        </div>

                    </div>
                    <h2>عنوان قرارداد</h2>
                    <p id="step1S1" v-if="pageStep == 1" >
                        شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند
                        خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده
                        سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خرasdsafsdfdsvdsvsdvdاهد شد. شرح: این مبلغ صرفا جهت انجام به
                        موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به
                        فروشنده پرداخت خواهد شد.
                    </p>
                    <p id="step1S2" v-if="pageStep == 2">
                        شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند
                        خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده
                        سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به فروشنده پرداخت
                        خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از
                        پایان فرایند خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به
                        موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به
                        فروشنده پرداخت خواهد شد.
                    </p>
                    <p id="step1S3" v-if="pageStep == 3">
                        @{{transactionInfo.loading_dead_line + ' ' + transactionInfo.admin_notes}}
                    </p>
                    </div>
                </div>
            </div>
            <div class="alert-message" v-else>
                    @{{msg}}
            </div>
        </div>

        <!--end part 1-->


        <!--part 2-->

        <div id="step2" v-if="currentStep == 2">
                <nav class="main-content-nav col-xs-12">
                    <ul class="list-inline">
                        <li class="list-item "><a href="#"> تسویه حساب </a></li>
                        <li class="list-item active"><a href="#">بارگیری محصول</a></li>
                        <li class="list-item"><a  href="#">تایید مفاد قرارداد </a></li>
                    </ul>
                </nav>
                
                <div class="alert-message">
                    <div class="alert-danger col-xs-12">
                        بارگیری محصول را با شرایط زیر انجام دهید
                    </div>
                    <div class="contents col-xs-12">
                        
                   <div class="content-show">
                        
                    <p class="title-p">توضیحات اینکوباک</p>
                    <p  style="white-space:pre-wrap">
                        @{{transactionInfo.admin_notes}}
                    </p>
                    <p class="title-p">توضیحات خریدار</p>
                    <p  style="white-space:pre-wrap">
                        @{{transactionInfo.description}}
                    </p>
                    
                    </div>
                </div>
        </div>
        <!--end part 2-->


        <!--part 3-->

        <div id="step3" v-if="currentStep == 3">
            <nav class="main-content-nav col-xs-12">
                <ul class="list-inline">
                        <li class="list-item active"><a href="#"> تسویه حساب </a></li>
                        <li class="list-item "><a href="#">بارگیری محصول</a></li>
                        <li class="list-item"><a @click.prevent="goToStep(1)" href="#">تایید مفاد قرارداد </a></li>
                </ul>
            </nav>
            <div>
                step 3
            </div>
        </div>
        <!--end part 3-->
        
        <!--part 3-->


        <!--end part 3-->
    </section>
    <div class="loading_images  col-xs-12" v-else>
        <img src="{{asset('assets/img/gif/loading.gif')}}" style="width:200px;height:200px">
    </div>
</main>
@endsection


@section('body_script_tags')
    <script>
        var transaction_id = {{$transaction_id}};
    </script>
    <script src="{{asset('assets/js/dashboard/seller/transaction.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/seller/api-transaction.js')}}"></script>
    
@endsection