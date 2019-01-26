@extends('index')

@section('header_links')
    <link rel="stylesheet" href="{{asset('index/css/index_master.css')}}">
@endsection

@section('meta_description')
    خرید و فروش مستقیم محصولات کشاورزی
@endsection

@section('meta_keywords')
    محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,اینکوباک
@endsection
@section('title')
    اینکوباک | بازارگاه کشاورزی
@endsection

@section('main_content')


    <section id="intro" class="parallax-section">
        <div class="container-fluid main_hero_section col-xs-12">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="wow fadeIn" data-wow-delay="1.2s">
                            درباره ی ما
                        </h1>
                    </div>


                </div>
            </div>

        </div>


    </section>

    <section id="testimonial" class="parallax-section">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class=" wow bounceIn col-md-12 col-sm-12">
                    <p class="text-right">با توجه به تحقیقات و مطالعات صورت گرفته در بازار و حضور در نمایشگاه های داخلی و بین المللی حوزه محصولات کشاورزی و سابقه ی حضور در بازار صادرات ایران شاهد مشکلات عدیده‌ای از قبیل : عدم دسترسی مناسب به محصولات با کیفیت، فقدان شبکه دسترسی برای قیمت‌گذاری، وجود واسطه های بسیار زیاد و افزایش قیمت در تبع آن و هدر رفت سرمایه بودیم. لذا برآن شدیم تا با ایجاد ساختاری تکنولوژی محور در راستای حل و تسهیل این مشکلات گام برداریم.</p>
                    <br/>
                    <p class="text-right">اینکوباک، بازارگاه آنلاین محصولات کشاورزی با هدف گردهم آوردن بهترین تولیدکنندگان و بازرگانان حوزه کشاورزی در جهت افزایش بهره‌وری شروع به کار کرده است. در این راستا اینکوباک خدمات زیر را ارائه می‌دهد :</p>
                    <br/>
                    <ul class="text-right">
                        <li>ایجاد پروفایل تجاری در فضایی کاملاً حرفه‌ای</li>
                        <li>امکان بازدید و ایجاد نمایشگاه مجازی رایگان</li>
                        <li>امکان ثبت درخواست خرید و فروش محصولات خود</li>
                        <li>دسترسی آسان به تامین کنندگان محصولات مختلف در اقصی نقاط ایران</li>
                        <li>امکان مقایسه کیفیت و قیمت محصولات</li>
                        <li>امکان بازرسی و نظارت در هنگام بار گیری محصول توسط کارشناسان اینکوباک</li>
                        <li>پرداخت الکترونیکی</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


@endsection


@section('script_tags')

@endsection
