@extends('layout.buyer-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/profile/profile-basic.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/help.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item "><a class="active" href="{{route('profile_complementary')}}">
                    راهنما
                </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">
        <section class="main-content col-xs-12">
            <div class="help">
                <ul>
                    <li class="title_list_help">
                          بازرگانان و خریدارن محترم می توانید طبق راهنمای زیر، نسبت به ثبت سفارش و استعلام قیمت محصولات اقدام کنید:
                        <ol class="list-group">
                            <li>
                                پروفایل خود را تکمیل کرده و منتظر تایید پروفایل خود از سوی کارشناسان اینکوباک باشید.
                            </li>
                            <li>
                                به قسمت ثبت درخواست خرید رفته و اطلاعات لازم جهت خرید محصول مورد نظر خود را وارد کنید.
                            </li>
                            <li>
                                پس از تنظیم و ثبت درخواست خرید، این درخواست ابتدا باید به تایید کارشناسان ما برسد و سپس به تامین کنندگان مرتبط ارسال می شود تا پیشنهادهای خود را برای شما ارسال کنند.
                            </li>
                            <li>
                                در صورت مشاهده پیشنهاد های مختلف، می توانید نسبت به رد یا پذیرش آن پیشنهاد اقدام کنید.
                            </li>
                            <li>
                                درصورت پذیرش هر کدام از پیشنهاد ها، جهت سهولت، کارشناسان اینکوباک با شما و تامین کنندگان مورد نظر جهت توافقات اولیه تماس خواهند گرفت.
                            </li>
                            <li>
                                درصورت ابراز آمادگی دوطرفه برای انجام معامله، در بخش، تراکنش های جاری قراردادی مبنی بر نظرات دو طرف صادر خواهد شد.
                            </li>
                            <li>
                                معاملات مطابق با قرارداد پذیرفته شده و آنچه در پنل خود در بخش تراکنش های جاری مشاهده می کنید، پیش خواهد رفت.
                            </li>
                            <li>
                                پس از انجام کامل معامله، در قسمت تراکنش های انجام شده، می توانید قرارداد پذیرفته شده و خلاصه فاکتورهای مربوطه را مشاهده کنید.
                            </li>
                            <li>
                                در قسمت لیست محصولات می توانید متناسب با نیاز خود محصول و تامین کنندگان مورد نظر را پیدا کرده و نسبت به انجام معامله با وی و کسب اطلاعات بیشتر، با کارشناسان اینکوباک تماس بگیرید.
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </section>
    </main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/dashboard/profile/profile-basic.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/profile/api-basic.js')}}"></script>
@endsection
