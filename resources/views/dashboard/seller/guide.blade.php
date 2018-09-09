@extends('layout.seller-dashboard')
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
                        کشاورزان و تامین کنندگان محترم، می توانید نسبت به فروش مستقیم و ثبت محصولات خود و طبق راهنمای زیر اقدام کنید:                        <ol class="list-group">
                            <li>
                                پروفایل خود را تکمیل کرده و منتظر تایید پروفایل خود از سوی کارشناسان اینکوباک باشید.
                            </li>  
                            <li>
                                 به قسمت ثبت محصول رفته و اطلاعات محصولات خود را بصورت کامل پر کنید. این محصولات بهمراه جزییات در صفحه پروفایل شخصی شما به خریداران نمایش داده می شود.
                            </li>  
                            <li>
                                در صورت دریافت پیشنهاد خرید از سوی خریداران و داشتن آمادگی جهت تامین محصول، قیمت پیشنهادی، عکس محصولات و توضیحات مربوطه را به خریدار ارسال نمایید.
                            </li>  
                            <li>
                                در صورت پذیرفته شدن پیشنهاد شما، کارشناسان اینکوباک جهت هماهنگی های اولیه با شما تماس خواهند گرفت.
                            </li>  
                            <li>
                                درصورت ابراز آمادگی دوطرفه برای انجام معامله، در قسمت تراکنش های جاری، قراردادی مبنی بر نظرات دو طرف صادر خواهد شد.
                            </li>  
                            <li>
                                معاملات مطابق با قرارداد پذیرفته شده و آنچه در پنل خود در بخش تراکش های جاری مشاهده می کنید، پیش خواهد رفت.
                            </li>  
                            <li>
                                پس از انجام کامل معامله، در قسمت تراکنش های انجام شده، می توانید قرارداد پذیرفته شده و خلاصه فاکتورهای مربوطه را مشاهده کنید.
                            </li> 
                            <li>
                                با تکمیل هرچه بهتر پروفایل خود می توانید نسبت به دیگر تامین کنندگان مزیت ایجاد کرده و اعتماد بیشتری به خریدار ببخشید.
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
