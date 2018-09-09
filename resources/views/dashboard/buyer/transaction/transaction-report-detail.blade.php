@extends('layout.buyer-dashboard')

@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/buyer/transaction-report-detail.css')}}">
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
                <div class="buttons">
                    <div class="main_buttons col-xs-12">
                        <a href="#" class="default_btn" @click.prevent="goToNextPage()">صفحه بعد</a>
                        <a href="#" class="default_btn" @click.prevent="goToPrePage()">صفحه قبل</a>
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
                    شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند
                    خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده
                    سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خسیبشسیبشسیشده و پس از پایان فرایند خرید و تایید نهایی خریدار به
                    فروشنده پرداخت خواهد شد.
                </p>
            </div>
            <div class="factor-detail contents col-xs-12">
                <div class="factor-title">
                    <div class="title-text col-xs-12 col-sm-4">
                        خلاصه گزارش مالی
                    </div>
                    <div class="serial-number col-xs-12 col-sm-4">
                        شماره سریال:  <span>@{{transactionInfo.id + 100000}}</span>
                    </div>
                    <div class="date-init col-xs-12 col-sm-4">
                        تاریخ انعقاد : <span>@{{transactionInfo.loading_end_date}}</span>
                    </div>
                </div>
                <div class="contents-detail col-xs-12">
                    <div class="col-xs-12 col-sm-6">
                        <table class="table table-striped">
                            <tr>
                                <td>مقدار خرید: </td>
                                <td>@{{transactionInfo.quantity}} کیلو گرم </td>
                            </tr>
                            <tr>
                                <td>مبلغ پیش پرداخت:</td>
                                <td> @{{transactionInfo.prepayment_amount}} تومان  </td>
                            </tr>
                            <tr>
                                <td>هزینه خدمات بازرسی: </td>
                                <td> @{{transactionInfo.inspection_price}} تومان </td>
                            </tr>

                        </table>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <table class="table table-striped">
                            <tr>
                                <td> قیمت واحد: </td>
                                <td>@{{transactionInfo.unit_price}} تومان </td>
                            </tr>
                            <tr>
                                <td>  مبلغ پرداخت نهایی: </td>
                                <td> @{{transactionInfo.payment_amount}} تومان </td>
                            </tr>
                            <tr class="green-text">
                                <td>  جمع کل پرداختی: </td>
                                <td>  @{{transactionInfo.prepayment_amount + transactionInfo.payment_amount}} تومان </td>
                            </tr>

                        </table>
                    </div>
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
    <script src="{{asset('assets/js/dashboard/buyer/transaction-report-detail.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/buyer/api-transaction-report-detail.js')}}"></script>
@endsection