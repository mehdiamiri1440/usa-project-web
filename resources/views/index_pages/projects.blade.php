@extends('index')

@section('header_links')
    <link rel="stylesheet" href="{{asset('index/css/index_master.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/projects.css')}}">
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

    <!-- =========================
INTRO SECTION
============================== -->


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


    <section class="main-content projects container">
        <div class="row">

            <article class="main-content-item">
                <div class="article-contents col-xs-12 ">
                    <div class="row">
                        <div class="main-image col-xs-12 col-sm-5">
                            <div class="owl-carousel">
                                <div class="image-wrapper">
                                    <a href="{{asset('assets/img/user-defult.png')}}">
                                        <img src="{{asset('assets/img/user-defult.png')}}">
                                    </a>
                                </div>
                                <div class="image-wrapper">
                                    <a href="{{asset('assets/img/user-defult.png')}}">
                                        <img src="{{asset('assets/img/user-defult.png')}}">
                                    </a>
                                </div>
                                <div class="image-wrapper">
                                    <a href="{{asset('assets/img/user-defult.png')}}">
                                        <img src="{{asset('assets/img/user-defult.png')}}">
                                    </a>
                                </div>
                                <div class="image-wrapper">
                                    <a href="{{asset('assets/img/user-defult.png')}}">
                                        <img src="{{asset('assets/img/user-defult.png')}}">
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div class="main-article-content col-xs-12 col-sm-7">
                            <h2 class="main-article-title">
                                فلفل دلمه رنگی - نجف آباد

                            </h2>

                            <h3 class="main-article-title">
                                جهت صادرات به روسیه
                            </h3>
                            <p>
                                انجام پروژه صادراتی فلفل دلمه رنگی انجام پروژه صادراتی فلفل دلمه رنگی انجام پروژه صادراتی
                                فلفل دلمه رنگی انجام پروژه صادراتی فلفل دلمه رنگی انجام پروژه صادراتی فلفل دلمه رنگی انجام
                                پروژه صادراتی فلفل دلمه رنگی انجام پروژه صادراتی فلفل دلمه رنگی انجام پروژه صادراتی فلفل
                                دلمه رنگی انجام پروژه صادراتی فلفل دلمه رنگی انجام پروژه صادراتی فلفل دلمه رنگی انجام پروژه
                                صادراتی
                            </p>

                        </div>

                    </div>

                </div>
            </article>

        </div>
    </section>


@endsection


@section('script_tags')
    <script>
        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                loop: false,
                items: 1,
                margin: 10,
                nav: false,
                dots: true
            });

            $('.projects .owl-carousel a').parents('.owl-stage').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                }
            });
            $('.preloader').fadeOut(1000); // set duration in brackets

        });

    </script>
@endsection
