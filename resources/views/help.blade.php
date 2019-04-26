<!DOCTYPE html>
<html lang="fa">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="Responsive Personal One Page Portfolio">
    <meta name="keywords" content="Responsive, Personal, One Page Portfolio, Freelancers, Template">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- site title -->
    <title>اینکوباک | بازارگاه کشاورزی</title>

    <!-- Bootstrap css -->
    <link rel="stylesheet" href="{{asset('index/css/bootstrap.min.css')}}">

    <!-- Animated css -->
    <link rel="stylesheet" href="{{asset('index/css/animate.css')}}">

    <!-- Font Awesome css -->
    <link rel="stylesheet" href="{{asset('index/css/font-awesome.min.css')}}">

    <!-- Owl Carousel css -->
    <link rel="stylesheet" href="{{asset('index/css/owl.theme.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/owl.carousel.css')}}">

    <!-- Magnific Popup css -->
    <link rel="stylesheet" href="{{asset('index/css/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/particleNetwork.css')}}">
    <!-- Main css -->
    <link rel="stylesheet" href="{{asset('index/css/index_master.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/help.css')}}">
    <script src="{{asset('assets/cdn/vue.js')}}"></script>
    <script src="{{asset('assets/cdn/axios.js')}}"></script>

</head>

<body data-spy="scroll" data-offset="50" data-target=".navbar-collapse">


<!-- =========================
 PRE LOADER
============================== -->

<div class="preloader">
    <div class="sk-spinner sk-spinner-pulse"></div>
</div>


<!-- =========================
 NAVIGATION LINKS
============================== -->

<div class="navbar container-fluid navbar-fixed-top custom-navbar" role="navigation">
    <div class="container-fluid">
        <!-- navbar header -->
        <div class="navbar-header">
            @if(session('user_id'))
                <div class="user-header-mobile">
                    <div class="profile-menu-header"><a href="#" onclick="dropdown()">
                            <div class="image-header-profile">
                                @if(session('profile_photo'))
                                    <img src="{{'storage/'  . session('profile_photo')}}">
                                @else
                                    <img src="{{asset('assets/img/user-defult.png')}}">
                                @endif
                            </div>
                            <i aria-hidden="true" class="fa fa-angle-down"></i>
                        </a>
                        <div class="profile-list">
                            <ul class="list-unstyled">
                                <li class="list-item"><a
                                            href="{{route('profile_basic')}}">پروفایل</a></li>
                                <li class="list-item"><a href="/dashboard/password">تغییر کلمه عبور</a></li>
                                <li class="list-item"><a href="{{route('logout')}}">خروج</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            @endif
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
            </button>
            <a class="navbar-brand test" href="/">
            </a>
            <p class="logo-des hidden-xs hidden-sm">
                اینکوباک | بازارگاه آنلاین دنیای کشاورزی
            </p>

        </div>

        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
                @if(!session('user_id'))
                    <li><a href="{{route('login_page')}}" class="smoothScroll">ورود/ثبت نام</a></li>
                @endif
                <li><a href="/" class="smoothScroll">صفحه ی اصلی</a></li>
                <li><a href="/about-us" class="smoothScroll">درباره ما</a></li>
                <li><a href="/privacy-and-policy" class="smoothScroll">قوانین و مقررات</a></li>
                <li><a href="http:\\www.blog.incobac.com" class="smoothScroll">وبلاگ</a></li>


                @if(session('user_id'))

                    <li class="user-header-web">
                        <div class="profile-menu-header"><a href="#" onclick="dropdown()">
                                <div class="image-header-profile">
                                    @if(session('profile_photo'))
                                        <img src="{{'storage/'  . session('profile_photo')}}">
                                    @else
                                        <img src="{{asset('assets/img/user-defult.png')}}">
                                    @endif
                                </div>
                                <i aria-hidden="true" class="fa fa-angle-down"></i> <span
                                        class="name-header-profile">{{session('full_name')}}</span></a>
                            <div class="profile-list">
                                <ul class="list-unstyled">
                                    <li class="list-item"><a
                                                href="{{route('profile_basic')}}">پروفایل</a></li>
                                    <li class="list-item"><a href="/dashboard/password">تغییر کلمه عبور</a></li>
                                    <li class="list-item"><a href="{{route('logout')}}">خروج</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                @endif
            </ul>
        </div>

    </div>
</div>


<!-- =========================
INTRO SECTION
============================== -->


<section id="intro" class="parallax-section">
    <div class="container-fluid main_hero_section col-xs-12">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1 class="wow fadeIn" data-wow-delay="1.2s">
                        راهنما
                    </h1>
                </div>


            </div>
        </div>

    </div>


</section>
<section id="faq" class="parallax-section" style="background-position: 50% 60px;">
    <div class="container">
        <div class="row">
            <div data-wow-delay="0.9s" class="wow fadeInUp col-xs-12 animated"
                 style="visibility: visible; animation-delay: 0.9s; animation-name: fadeInUp;">
                <div id="accordion" role="tablist" aria-multiselectable="true" class="panel-group">
                    <div class="panel panel-default">
                        <div role="tab" id="headingOne" class="panel-heading"><h4 class="panel-title"><a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                        aria-expanded="false" aria-controls="collapseOne" class="collapsed">
                                    اینکوباک چیست؟
                                </a></h4></div>
                        <div id="collapseOne" role="tabpanel" aria-labelledby="headingOne"
                             class="panel-collapse collapse in">
                            <div class="panel-body">
                                <p>
                                    اینکوباک بستر هوشمند و الکترونیکی خرید و فروش عمده محصولات کشاورزی (میوه-تره بار-خشکبار) است که خدمات پرداخت امن، قراردادهای حقوقی و بازرسی و کنترل کیفی را به خریداران و تامین کنندگان ارائه میدهد
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingTwo" class="panel-heading"><h4 class="panel-title"><a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo" class="collapsed">
                                    خدمات اینکوباک برای تامین کنندگان چیست؟
                                </a></h4></div>
                        <div id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    در سامانه اینکوباک کشاورزان، باغداران، گلخانه داران، صاحبان سالن های سورت، بسته بندی و سردخانه بعنوان فروشنده می توانند ایفای نقش کنند. اینکوباک به فروشندگان جهت فروش بهینه و بدون واسطه کمک میکند. فروشندگان می توانند در سامانه اینکوباک، پروفایل شخصی خود را بسازند و محصولات خود را نیز ثبت کنند تا از این طریق به خریداران گسترده ای در سراسر کشور دست پیدا کنند. از دیگر مزیت های اینکوباک برای فروشندگان شیوه پرداخت امانی و نقد می باشد که از این طریق از کلاهبرداری ها جلوگیری می شود.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingThree" class="panel-heading"><h4 class="panel-title"><a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree" class="collapsed">
                                    خدمات اینکوباک برای خریداران چیست؟
                                </a></h4></div>
                        <div id="collapseThree" role="tabpanel" aria-labelledby="headingThree"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    تجار، خریداران عمده و بنکداران به عنوان خریدار می توانند در سامانه اینکوباک ثبت نام کرده و فعالیت کنند. اینکوباک به خریداران امکان ساخت پروفایل تجاری، ثبت درخواست خرید و استعلام قیمت، پرداخت امانی و بازرسی محصول جهت کنترل کیفی را ارائه میدهد. خریداران در سامانه اینکوباک با لیست متعددی از محصولات و تامین کنندگان تایید شده مواجه می شوند که به راحتی می توانند به مقایسه بپردازند.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingFour" class="panel-heading"><h4 class="panel-title"><a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour" class="collapsed">
                                    چگونه در سامانه اینکوباک ثبت نام کنم؟
                                </a></h4></div>
                        <div id="collapseFour" role="tabpanel" aria-labelledby="headingFour"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>ابتدا به سایت incobac.com مراجعه کرده و جهت ثبت نام دکمه ورود به سامانه یا <a href="{{route('login_page')}}" target="_blank">ورود/ثبت نام</a> کلیک کنید</li>
                                    <li>سپس در صفحه ورود روی دکمه ی <a href="{{route('register_page')}}" target="_blank">ثبت نام</a> کلیک کنید.</li>
                                    <li><p>
                                           در صفحه ی ثبت نام  ابتدا شماره تلفن همراه خود را وارد کنید سپس دکمه ی ارسال پیامک را بزنید.
                                        </p>
                                        <img src="{{asset('assets/img/help/2.jpg')}}">
                                        <br/><br/>
                                    </li>
                                    <li><p>
                                           کد تایید ارسال شده به تلفن همراهتان را وارد کنید سپس دکمه ی بررسی کد را بزنید.
                                        </p>
                                        <img src="{{asset('assets/img/help/3.jpg')}}">
                                        <br/><br/>
                                    </li>
                                    <li><p>
                                            مشخصات کاربری خود را وارد کنید و دکمه ی ثبت مشخصات را بزنید.
                                        </p>
                                        <img src="{{asset('assets/img/help/4.jpg')}}">
                                        <br/><br/>
                                    </li>
                                    <li><p>
                                            درپایان نوع کاربری و حوزه فعالیت خود را وارد کرده و دکمه ی ثبت نام را کلیک کنید
                                        </p>
                                        <img src="{{asset('assets/img/help/5.jpg')}}">
                                        <br/><br/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingFive" class="panel-heading"><h4 class="panel-title"><a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseFive"
                                        aria-expanded="false" aria-controls="collapseFive" class="collapsed">
                                    چگونه در اینکوباک محصول ثبت کنم؟
                                </a></h4></div>
                        <div id="collapseFive" role="tabpanel" aria-labelledby="headingFive"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        <p>ابتدا وارد سامانه شوید.<a href="{{route('login_page')}}">لینک ورود</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>درصورتی که تاکنون اطلاعات پروفایل خود را ارسال نکرده اید در قسمت ویرایش پروفایل موارد خواسته شده را پر کنید و ارسال نمایید. سپس منتظر تایید اطلاعات خود از سمت ناظران اینکوباک باشید. مادامیکه اطلاعات شما احراز نشود قادر به ثبت محصول یا آگهی فروش نیستید.
                                        </p>
                                        <img src="{{asset('assets/img/help/6.jpg')}}">
                                        <br/><br/>
                                    </li>
                                    <li>
                                        <p>در سمت راست پنل خود لینک ثبت محصول را کلیک کنید.(در پنل فروشندگان)</p>
                                        <img src="{{asset('assets/img/help/8.jpg')}}">
                                        <br/><br/>
                                    </li>
                                    <li>
                                        اطلاعات محصول خود را وارد کرده و دکمه ی ثبت محصول را کلیک کنید.
                                    </li>
                                    <li>
                                         محصول شما پس از تایید ناظران اینکوباک در صفحه ی <a href="{{route('product-list')}}" target="_blank">لیست محصولات</a> نمایش داده می شود و خریداران میتوانند درخواست های خرید خود را برای شما ارسال کنند.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingSix" class="panel-heading"><h4 class="panel-title"><a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseSix"
                                        aria-expanded="false" aria-controls="collapseSix" class="collapsed">
                                   چگونه درخواست خرید خود را در اینکوباک ثبت کنم؟
                                </a></h4></div>
                        <div id="collapseSix" role="tabpanel" aria-labelledby="headingSix"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        ابتدا وارد سامانه شوید.<a href="{{route('login_page')}}">لینک ورود</a>
                                    </li>
                                    <li>
                                        <p>درصورتی که تاکنون اطلاعات پروفایل خود را ارسال نکرده اید در قسمت ویرایش پروفایل موارد خواسته شده را پر کنید و ارسال نمایید. سپس منتظر تایید اطلاعات خود از سمت ناظران اینکوباک باشید. مادامیکه اطلاعات شما احراز نشود قادر به ثبت درخواست خرید نیستید.
                                        </p>
                                        <img src="{{asset('assets/img/help/11.jpg')}}">
                                        <br/>
                                        <br/>
                                    </li>
                                    <li>
                                        <p>
                                            در سمت راست پنل خود لینک ثبت درخواست جدید را کلیک کنید(پنل خریداران)
                                        </p>
                                        <img src="{{asset('assets/img/help/12.jpg')}}">
                                        <br/>
                                        <br/>
                                    </li>
                                    <li>موارد مورد نظر خود را در فرم مربوطه وارد کرده و درخواست خود را ارسال کنید.</li>
                                    <li>
                                        درخواست شما پس از تایید ناظران اینکوباک برای تامین کنندگان مربوطه ارسال میشود تا قیمت ، تصاویر و سایر جزییات محصولشان را برایتان ارسال کنند.برای مشاهده ی پاسخ ها قسمت درخواست های من را کلیک کنید
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingSeven" class="panel-heading"><h4 class="panel-title"><a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseSeven"
                                        aria-expanded="false" aria-controls="collapseSeven" class="collapsed">
                                    آیا جهت عضویت در سامانه هزینه ای باید پرداخت شود؟
                                </a></h4></div>
                        <div id="collapseSeven" role="tabpanel" aria-labelledby="headingSeven"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    عضویت در سامانه اینکوباک و استفاده از خدمات سیستمی سامانه اینکوباک (ساخت پروفایل، ثبت محصول، ثبت درخواست خرید و استعلام قیمت) کاملا رایگان می باشد. در صورت انجام موفق معاملات بین خریداران و تامین کنندگان، اینکوباک بعنوان حق بازاریابی و فروش، حدود 4 درصد از حجم تراکنش را از تامین کننده  و 2 درصد از حجم تراکنش را بعنوان حق بازرسی و کنترل کیفی در صورت درخواست، از خریدار دریافت می کند. درصدهای فوق الذکر با توجه به حجم معاملات، نوع محصول و پیچیدگی فرایند خرید و فروش بر اساس مذاکره با دو طرف می تواند متغیر باشد
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingEight" class="panel-heading"><h4 class="panel-title"><a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseEight"
                                        aria-expanded="false" aria-controls="collapseEight" class="collapsed">
                                    شیوه پرداخت در معاملات به چه صورت است ؟
                                </a></h4></div>
                        <div id="collapseEight" role="tabpanel" aria-labelledby="headingEight"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    پی باک در جهت سهولت و کاهش ریسک کلاهبرداری پرداخت ها شکل گرفته است. پی باک به عنوان شخص ثالث، وجه تراکنش را از خریدار دریافت کرده و پس از ارسال بار به خریدار و تایید توسط وی، وجه به فروشنده پرداخت می گردد
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingNine" class="panel-heading"><h4 class="panel-title"><a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseNine"
                                        aria-expanded="false" aria-controls="collapseNine" class="collapsed">
                                    کنترل کیفی و نظارت بر روی بار به چه صورت است؟
                                </a></h4></div>
                        <div id="collapseNine" role="tabpanel" aria-labelledby="headingNine"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    اینکوباک جهت تسهیل فعالیت خریداران، صرفه جویی در هزینه ها و زمان، مکانیزم کنترل کیفی بر مبنای درخواست خریدار را طراحی کرده است. اینکوباک بنا بر نیاز خریداران خدمات نظارت بر آماده سازی بار، سورت و بسته بندی را جهت کنترل کیفی ارائه میدهد. همچنین در صورتی که نیاز به گواهی های بازرسی باشد، اینکوباک از طریق شرکتهای بازرسی که جزو همکاران ویژه اینکوباک هستند اقدام می نماید.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- =========================
FOOTER SECTION
============================== -->

<footer>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <ul class="list-unstyled footer-list">
                    <li>
                        <a href="/privacy-and-policy">قوانین و مقررات</a>
                    </li>
                    <li>
                        <a href="/about-us">درباره ما </a>
                    </li>
                    <li>
                        <a href="#"> ارتباط با ما</a>
                    </li>
                    <li>
                        <a href="#">پروژه ها </a>
                    </li>
                    <li>
                        <a href="#"> راهنمای خریدار و فروشنده </a>
                    </li>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <p>آدرس</p>
                <p>شیراز ، بلوار جمهوری اسلامی، ساختمان مدیریت دانشگاه شیراز، برج نوآوری ، طبقه نهم
                </p>
                <br/>
                <p>تماس با ما
                </p>
                <p>0713-646-0996 / 09178928245
                </p>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 enamad">
                <img src="https://trustseal.enamad.ir/logo.aspx?id=100286&amp;p=yBEoWWMXqCeIkdjL" alt=""
                     onclick="window.open(&quot;https://trustseal.enamad.ir/Verify.aspx?id=100286&amp;p=yBEoWWMXqCeIkdjL&quot;, &quot;Popup&quot;,&quot;toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30&quot;)"
                     style="cursor:pointer" id="yBEoWWMXqCeIkdjL">
            </div>
        </div>
    </div>
</footer>
<div class="footer-bottom">
    <div class="container">
        <div class="row">
            <div class=" col-xs-12">
                <ul class="social-icon">
                    <li>
                        <a href="#" class="fa fa-facebook wow "></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-twitter wow "></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-linkedin wow "></a>
                    </li>
                    <li>
                        <a href="#" class="fa fa-google-plus wow "></a>
                    </li>
                </ul>
                <p class="wow">تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.</p>

            </div>
        </div>
    </div>


    <!-- Back top -->
    <a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a>


    <!-- =========================
     SCRIPTS
    ============================== -->

    <script src="{{asset('index/js/jquery.js')}}"></script>
    <script src="{{asset('index/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('index/js/particleNetwork.js')}}"></script>
    <script src="{{asset('index/js/jquery.magnific-popup.min.js')}}"></script>
    <script src="{{asset('index/js/jquery.parallax.js')}}"></script>
    <script src="{{asset('index/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('index/js/smoothscroll.js')}}"></script>
    <script src="{{asset('index/js/wow.min.js')}}"></script>
    <script src="{{asset('index/js/custom.js')}}"></script>

    <!--
    <script>
        window.addEventListener('load', function(){
            var allimages= document.getElementsByTagName('img');
            for (var i=0; i<allimages.length; i++) {
                if (allimages[i].getAttribute('data-src')) {
                    allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
                }
            }
        }, false)
    </script>
    -->
</body>

</html>

