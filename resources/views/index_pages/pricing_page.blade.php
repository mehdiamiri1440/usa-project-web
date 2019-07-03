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

    <section id="faq" class="parallax-section" style="background-position: 50% 60px;">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 animated"
                     style="visibility: visible; animation-delay: 0.9s; animation-name: fadeInUp;">

                    <table class="wow fadeInUp   pricing-table ">
                        <thead>
                        <tr>
                            <th class="head-package">تعرفه ها</th>
                            <th class="head-secend-package">
                                <div class="main-pricing-icon">
                                    <img src="{{asset('index/images/Group_32.png')}}">
                                    <span class="main-pricing-span">رایگان</span>
                                </div>

                            </th>
                            <th class="head-secend-package">
                                <div class="main-pricing-icon">
                                    <img src="{{asset('index/images/Group_38.png')}}">
                                    <span class="main-pricing-span">برنزی</span>
                                </div>

                            </th>
                            <th class="head-secend-package">
                                <div class="main-pricing-icon">
                                    <img src="{{asset('index/images/Group_36.png')}}">
                                    <span class="main-pricing-span">نقره ای</span>
                                </div>

                            </th>
                            <th class="head-secend-package">
                                <div class="main-pricing-icon">
                                    <img src="{{asset('index/images/Group_34.png')}}">
                                    <span class="main-pricing-span">طلایی</span>
                                </div>

                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        {{--تمدید آگهی--}}
                        <tr class="collapsed" onclick="trElement(this)" data-toggle="collapse" data-target="#free-package">
                            <td>
                                <div class="main-table-item">
                                    <div> تعداد آگهی ها</div>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>1</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>3</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>5</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>7</span>
                                      <i class="fa fa-angle-down collapse-icon"></i>
                                </div>
                            </td>
                        </tr>
                        <tr class="collapse" id="free-package">
                            <td colspan="5">
                                با پرداخت مبلغ مشخص شده، آگهی شما به مدت 30 روز فعال خواهد بود
                            </td>

                        </tr>
                        {{--پایان تمدید آگهی--}}

                        {{--اولویت نمایش--}}
                        <tr class="collapsed" onclick="trElement(this)" data-toggle="collapse" data-target="#one-package">
                            <td>
                                <div class="main-table-item">
                                    <div>
                                        اولویت نمایش
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>4</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>3</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>2</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>1</span>
                                      <i class="fa fa-angle-down collapse-icon"></i>
                                </div>
                            </td>
                        </tr>
                        <tr class="collapse" id="one-package">
                            <td colspan="5">
                                پس از انقضای آگهی، تا ۷ روز می‌توانید همان آگهی را به مدت ۳۰ روز دیگر (بدون پرداخت وجه)
                                تمدید نمایید.
                            </td>

                        </tr>
                        {{--پایان اولویت نمایش--}}


                        {{--ارسال پیامک به خریداران--}}
                        <tr class="collapsed" onclick="trElement(this)" data-toggle="collapse" data-target="#three-package">
                            <td>
                                <div class="main-table-item">
                                    <div>
                                        ارسال پیامک به خریداران
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="red-check"><i class="fa fa-close"></i></span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="green-check"><i class="fa fa-check"></i></span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="green-check"><i class="fa fa-check"></i></span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="green-check"><i class="fa fa-check"></i></span>
                                      <i class="fa fa-angle-down collapse-icon"></i>
                                </div>
                            </td>
                        </tr>
                        <tr class="collapse" id="three-package">
                            <td colspan="5">
                                تعداد عکس هایی که در آگهی شما قابل نمایش می باشند.
                            </td>

                        </tr>
                        {{-- پایان ارسال پیامک به خریداران--}}

                        {{--تایید فوری--}}
                        <tr class="collapsed" onclick="trElement(this)" data-toggle="collapse" data-target="#four-package">
                            <td>
                                <div class="main-table-item">
                                    <div>
                                        تایید فوری
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="red-check"><i class="fa fa-close"></i></span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="green-check"><i class="fa fa-check"></i></span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="green-check"><i class="fa fa-check"></i></span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="green-check"><i class="fa fa-check"></i></span>
                                      <i class="fa fa-angle-down collapse-icon"></i>
                                </div>
                            </td>
                        </tr>
                        <tr class="collapse" id="four-package">
                            <td colspan="5">
                                تعداد عکس هایی که در آگهی شما قابل نمایش می باشند.
                            </td>

                        </tr>
                        {{--پایان تایید فوری--}}

                        {{--میزان افزایش خوشنامی--}}
                        <tr class="collapsed" onclick="trElement(this)" data-toggle="collapse" data-target="#five-package">
                            <td>
                                <div class="main-table-item">
                                    <div>
                                        میزان افزایش خوشنامی
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>0</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">

                                    <span>80</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>200</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>350</span>
                                      <i class="fa fa-angle-down collapse-icon"></i>
                                </div>
                            </td>
                        </tr>
                        <tr class="collapse" id="five-package">
                            <td colspan="5">
                                تعداد عکس هایی که در آگهی شما قابل نمایش می باشند.
                            </td>

                        </tr>
                        {{--پایان میزان افزایش خوشنامی--}}


                        {{--نشان فروشنده معتبر--}}
                        <tr class="collapsed" onclick="trElement(this)" data-toggle="collapse" data-target="#six-package">
                            <td>
                                <div class="main-table-item">
                                    <div>
                                        نشان فروشنده معتبر
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="red-check"><i class="fa fa-close"></i></span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="red-check"><i class="fa fa-close"></i></span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="red-check"><i class="fa fa-close"></i></span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span class="green-check"><i class="fa fa-check"></i></span>
                                      <i class="fa fa-angle-down collapse-icon"></i>
                                </div>
                            </td>
                        </tr>
                        <tr class="collapse" id="six-package">
                            <td colspan="5">
                                تعداد عکس هایی که در آگهی شما قابل نمایش می باشند.
                            </td>

                        </tr>
                        {{--پایان نشان فروشنده معتبر--}}

                        {{-- مشاهده درخواست های خرید--}}
                        <tr class="collapsed" onclick="trElement(this)" data-toggle="collapse" data-target="#seven-package">
                            <td>
                                <div class="main-table-item">
                                    <div>
                                        تعداد درخواستهای خرید
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>5</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">

                                    <span>12</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>30</span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span>نامحدود</span>
                                      <i class="fa fa-angle-down collapse-icon"></i>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div class="main-table-item">
                                    <div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span> <a href="/register" class="green-bot">ثبت نام</a> </span>
                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">

                                    <span> <a href="/payment/1" class="green-bot">خرید</a> </span>

                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span> <a href="/payment/2" class="green-bot">خرید</a> </span>

                                </div>
                            </td>
                            <td>
                                <div class="main-table-item">
                                    <span> <a href="/payment/3" class="green-bot">خرید</a> </span>

                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </section>

@endsection


@section('script_tags')
<script src="{{asset('index/js/pricing.js')}}"></script>
@endsection
