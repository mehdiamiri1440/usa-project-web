@extends('index')

@section('header_links')
    <link rel="stylesheet" href="{{asset('index/css/index_master.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/pricing_table.css')}}">
    <style>
        .policy ul li {
            line-height: 1.618;
            margin: 15px 0;
        }
    </style>
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
                          تعرفه ها
                        </h1>
                    </div>


                </div>
            </div>

        </div>


    </section>
    <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! -->
    <div id="generic_price_table">
        <section>
            <div class="container">

                <!--BLOCK ROW START-->
                <div class="row">
                    <div class="wow fadeIn col-xs-12 col-sm-6 col-lg-3"  data-wow-delay="1s">

                        <!--PRICE CONTENT START-->
                        <div class="generic_content active   clearfix">

                            <!--HEAD PRICE DETAIL START-->
                            <div class="generic_head_price clearfix">
                                <h2 class="head-price">
                                    رایگان
                                </h2>

                                <!--PRICE START-->
                                <div class="generic_price_tag clearfix">
                                 <span class="price">

                                    <span class="currency">0</span>
                                       <span class="sign">تومان</span>
                                    <span class="month">/سال</span>
                                </span>
                                </div>
                                <!--//PRICE END-->

                            </div>
                            <!--//HEAD PRICE DETAIL END-->

                            <!--FEATURE LIST START-->
                            <div class="generic_feature_list">
                                <ul>
                                    <li><span>2GB</span> پهنای باند</li>
                                    <li><span>150GB</span> حافظه</li>
                                    <li><span>12</span> حساب کاربری</li>
                                    <li><span>7</span> تعداد درخواست ها</li>
                                    <li><span>24/7</span> پشتیبانی</li>
                                </ul>
                            </div>
                            <!--//FEATURE LIST END-->

                            <!--BUTTON START-->
                          {{--  <div class="generic_price_btn clearfix">
                                <a class="" href="">Sign up</a>
                            </div>--}}
                            <!--//BUTTON END-->

                        </div>
                        <!--//PRICE CONTENT END-->

                    </div>
                    <div class="wow fadeIn col-xs-12 col-sm-6 col-lg-3"  data-wow-delay="1s">

                        <!--PRICE CONTENT START-->
                        <div class="generic_content active clearfix">

                            <!--HEAD PRICE DETAIL START-->
                            <div class="generic_head_price clearfix">
                                <h2 class="head-price">
                                    رایگان
                                </h2>


                                <!--PRICE START-->
                                <div class="generic_price_tag clearfix">
                                  <span class="price">

                                    <span class="currency">0</span>
                                       <span class="sign">تومان</span>
                                    <span class="month">/سال</span>
                                </span>
                                </div>
                                <!--//PRICE END-->

                            </div>
                            <!--//HEAD PRICE DETAIL END-->

                            <!--FEATURE LIST START-->
                            <div class="generic_feature_list">
                                <ul>
                                    <li><span>2GB</span> پهنای باند</li>
                                    <li><span>150GB</span> حافظه</li>
                                    <li><span>12</span> حساب کاربری</li>
                                    <li><span>7</span> تعداد درخواست ها</li>
                                    <li><span>24/7</span> پشتیبانی</li>
                                </ul>
                            </div>
                            <!--//FEATURE LIST END-->

                            <!--BUTTON START-->
                            <div class="generic_price_btn clearfix">
                                <a class="" href="">پرداخت</a>
                            </div>
                            <!--//BUTTON END-->

                        </div>
                        <!--//PRICE CONTENT END-->

                    </div>
                    <div class="wow fadeIn col-xs-12 col-sm-6 col-lg-3"  data-wow-delay="1s">

                        <!--PRICE CONTENT START-->
                        <div class="generic_content active  clearfix">

                            <!--HEAD PRICE DETAIL START-->
                            <div class="generic_head_price clearfix">
                                <h2 class="head-price">
                                    رایگان
                                </h2>


                                <!--PRICE START-->
                                <div class="generic_price_tag clearfix">
                                <span class="price">

                                    <span class="currency">0</span>
                                       <span class="sign">تومان</span>
                                    <span class="month">/سال</span>
                                </span>
                                </div>
                                <!--//PRICE END-->

                            </div>
                            <!--//HEAD PRICE DETAIL END-->

                            <!--FEATURE LIST START-->
                            <div class="generic_feature_list">
                                <ul>
                                    <li><span>2GB</span> پهنای باند</li>
                                    <li><span>150GB</span> حافظه</li>
                                    <li><span>12</span> حساب کاربری</li>
                                    <li><span>7</span> تعداد درخواست ها</li>
                                    <li><span>24/7</span> پشتیبانی</li>
                                </ul>
                            </div>
                            <!--//FEATURE LIST END-->

                            <!--BUTTON START-->
                            <div class="generic_price_btn clearfix">
                                <a class="" href="">پرداخت</a>
                            </div>
                            <!--//BUTTON END-->

                        </div>
                        <!--//PRICE CONTENT END-->

                    </div>
                    <div class="wow fadeIn col-xs-12 col-sm-6 col-lg-3"  data-wow-delay="1s">

                        <!--PRICE CONTENT START-->
                        <div class="generic_content active  clearfix">

                            <!--HEAD PRICE DETAIL START-->
                            <div class="generic_head_price clearfix">
                                <h2 class="head-price">
                                    رایگان
                                </h2>

                                <!--PRICE START-->
                                <div class="generic_price_tag clearfix">
                                <span class="price">

                                    <span class="currency">0</span>
                                       <span class="sign">تومان</span>
                                    <span class="month">/سال</span>
                                </span>
                                </div>
                                <!--//PRICE END-->

                            </div>
                            <!--//HEAD PRICE DETAIL END-->

                            <!--FEATURE LIST START-->
                            <div class="generic_feature_list">
                                <ul>
                                    <li><span>2GB</span> پهنای باند</li>
                                    <li><span>150GB</span> حافظه</li>
                                    <li><span>12</span> حساب کاربری</li>
                                    <li><span>7</span> تعداد درخواست ها</li>
                                    <li><span>24/7</span> پشتیبانی</li>
                                </ul>
                            </div>
                            <!--//FEATURE LIST END-->

                            <!--BUTTON START-->
                            <div class="generic_price_btn clearfix">
                                <a class="" href="">پرداخت</a>
                            </div>
                            <!--//BUTTON END-->

                        </div>
                        <!--//PRICE CONTENT END-->

                    </div>
                </div>
                <!--//BLOCK ROW END-->

            </div>
        </section>

    </div>





@endsection


@section('script_tags')

@endsection
