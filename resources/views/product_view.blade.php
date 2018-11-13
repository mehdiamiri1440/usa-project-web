
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>محصولات </title>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>
        window.Laravel = {csrfToken: '{{csrf_token()}}'}
    </script>
    <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/buyer/product-view.css')}}">
    <script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{asset('assets/cdn/axios.js')}}"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .loading_images img {
            display: block;
            margin: 0 auto;
        }

        /*loader*/

        .loader-display {
            position: fixed;
            z-index: 10;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: block;
        }

        .main-loader {
            position: absolute;

            top: 35%;

            text-align: center;

            display: block;

            width: 100%;

            color: #fff;

            font-size: 23px;
        }

        .main-loader img {
            width: 100px;

            background: #fff;

            border-radius: 50px;

            height: 100px;

            display: inline-block;

            margin: 0 auto 22px;
        }

        .loader-wrapper {
            display: none;
        }

        span.min {
            display: none;
        }
    </style>
</head>
<body>
<header id="header" class="main-header">
    <div class="logo  ">
        <a href="/"> <img src="{{asset('assets/img/logo-incobac-white-red.png')}}"></a>
    </div>
    <nav class="header-nav">
        <ul class="list-inline">
            @if(!session('user_id'))
                <li><a href="{{route('login_page')}}" class="smoothScroll">ورود/ثبت نام</a></li>
            @endif
            <li><a href="" class="smoothScroll">صفحه ی اصلی</a></li>
        </ul>
    </nav>

    <h1 class="title-page col-xs-12">
       محصولات
    </h1>
</header>
@section('main_content')
    <main id="main" class="container">
        <section class="main-content col-xs-12">
            <div class="main-content-item">
                <div class="user-contents  col-sm-3">
                    <img src="{{asset('assets/img/logo-incobac.png')}}">
                   {{-- <div class="user-image" v-if="product.profile_info.profile_photo">
                        <img v-bind:src=" '{{url('storage') }}/' + product.profile_info.profile_photo">
                    </div>--}}
                    <div class="user-image" v-else>
                        <img src="{{asset('assets/img/user-defult.png')}}" class="image_defult">
                    </div>
                    <p v-if="product.user_info">سعید رادمنش</p>
                    <a v-bind:href="'{{url('profile')}}/' + product.user_info.user_name" class="green_bot">
                        مشاهده پروفایل تامین کننده
                    </a>
                </div>
                <div class="article-contents  col-sm-9 ">
                    <div class="main-article-content col-sm-7">
                        <h2 class="main-article-title">
                            خشکبار - بادام
                        </h2>

                        <p>نوع محصول: <span>دارابی</span></p>
                        <p> قیمت (هرکیلو به تومان): <span>25000</span></p>
                        <p> میزان موجودی (کیلوگرم): <span>2000</span></p>
                        <p>محل تحویل کالا:
                            <span>گیلان</span></p>

                    </div>
                    <div class="image-article-content col-sm-5">
                        {{--       <popup v-if="product.photos[0]" v-for="photo in product.photos" base="{{url('storage')}}/"
                                      :img="photo.file_path"></popup>--}}
                        <img src="{{asset('assets/img/badam.jpg')}}">
                    </div>
                    <div class="text-des">
                        <p>توضیحات: <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="sec-button">
                <a href="#" class="btn gray_bot">نمایش دیگرمحصولات</a>
            </div>

        </section>
    </main>


@show
</body>

</html>
