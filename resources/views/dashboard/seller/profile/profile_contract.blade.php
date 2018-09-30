@extends('layout.seller-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/profile/profile-contract.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item"><a href="{{route('profile_contract')}}" class="active">
                    قرارداد </a>
            </li>
            <li class="list-item"><a href="{{route('profile_complementary')}}">
                    اطلاعات تکمیلی </a>
            </li>
            <li class="list-item"><a href="{{route('profile_basic')}}">
                    اطلاعات پایه
                </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">
        <section  class="main-content col-xs-12">
        <!--part 1-->
            <div id="step1">
                <div class="contents col-xs-12">
                   <div class="content-show">
                    <div class="buttons">
                        <div class="main_buttons col-xs-12 col-sm-8 col-md-9">
                            <a href="#" class="default_btn" @click.prevent="goToNextPage()">صفحه بعد</a>
                            <a href="#" class="default_btn" @click.prevent="goToPrePage()">صفحه قبل</a>
                        </div>
                        <div class="continue_but col-xs-12 col-sm-4 col-md-3">
                            <a href="#" @click.prevent="confirmContract" class="green-bot">تایید قرارداد</a>
                        </div>
                    </div>
                    <h2>عنوان قرارداد</h2>
                    <p id="step1S1" v-if="pageStep == 1">
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
                    </div>
                </div>
            </div>
        </section>

        <!--end part 1-->
    </main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/imageuploadify.min.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/profile/api-contract.js')}}"></script>
@endsection
