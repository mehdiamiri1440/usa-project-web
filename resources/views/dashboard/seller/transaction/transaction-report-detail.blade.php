@extends('layout.seller-dashboard')

@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/seller/transaction-report-detail.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item">
                <a href="#" class="active">
                لیست تراکنش ها    
                </a>
            </li>

        </ul>
    </div>
@endsection


@section('main_content')
<main id="main">

    <section class="main-content col-xs-12">
        <!--part 1-->
        <div id="step1" v-if="currentStep == 1">
            <div class="contents col-xs-12">
                <div class="buttons ">
                    <div class="main_buttons col-xs-12">
                        <a href="#" class="default_btn" @click.prevent="goToNextPage()">صفحه بعد</a>
                        <a href="#" class="default_btn" @click.prevent="goToPrePage()">صفحه قبل</a>
                    </div>
                </div>
                <h2>عنوان قرارداد</h2>
                <p id="step1S1" v-if="pageStep == 1">
                    شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند
                    خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده
                    سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خرasdsafsdfdsvdsvsdvdاهد
                    شد. شرح: این مبلغ صرفا جهت انجام به
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
                    شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند
                    خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده
                    سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خسیبشسیبشسیشده و پس از
                    پایان فرایند خرید و تایید نهایی خریدار به
                    فروشنده پرداخت خواهد شد.
                </p>

            </div>
            <div class="factor-detail contents col-xs-12">
                <div class="factor-title">
                    <div class="title-text col-xs-12 col-sm-4">
                        خلاصه گزارش مالی
                    </div>
                    <div class="serial-number col-xs-12 col-sm-4">
                        شماره سریال: <span>@{{transactionInfo.id + 100000}}</span>
                    </div>
                    <div class="date-init col-xs-12 col-sm-4">
                        تاریخ انعقاد: <span>@{{transactionInfo.deal_formation_date}}</span>
                    </div>
                </div>
                <div class="contents-detail col-xs-12">
                    <div class="  col-xs-12 col-sm-6">
                        <table class="table table-striped">
                            <tr>
                                <td>میزان فروش:</td>
                                <td> @{{transactionInfo.quantity}} کیلو گرم</td>
                            </tr>
                            <tr>
                                <td>مبلغ  کل معامله:</td>
                                <td> @{{transactionInfo.unit_price * transactionInfo.quantity }} تومان</td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <table class="table table-striped">
                            <tr>
                                <td> قیمت واحد:</td>
                                <td>@{{transactionInfo.unit_price}} تومان</td>
                            </tr>
                            <tr class="green-text">
                                <td>    مبلغ کل پس از کسر حق معامله:</td>
                                <td> @{{( 1 - transactionInfo.commission_persentage  * 0.01) * transactionInfo.unit_price * transactionInfo.quantity}} تومان</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="rating-detail contents col-xs-12">
                <div class="rating">
                        <label for="tex_rate" class="col-xs-12"> نظر ثبت شده برای شما</label>
                        <p id="tex_rate" class="col-xs-12">
                            شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد.
                        </p>
                </div>

            </div>

        </div>

        <!--end part 1-->

    </section>
</main>
@endsection


@section('body_script_tags')
    <script>
        var transactionId = {{$transaction_id}} ;
    </script>
    <script src="{{asset('assets/js/dashboard/seller/transaction-report-detail.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/buyer/api-transaction-report-detail.js')}}"></script>
@endsection