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
    <link rel="stylesheet" href="<?php echo e(asset('index/css/bootstrap.min.css')); ?>">

    <!-- Animated css -->
    <link rel="stylesheet" href="<?php echo e(asset('index/css/animate.css')); ?>">

    <!-- Font Awesome css -->
    <link rel="stylesheet" href="<?php echo e(asset('index/css/font-awesome.min.css')); ?>">

    <!-- Owl Carousel css -->
    <link rel="stylesheet" href="<?php echo e(asset('index/css/owl.theme.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('index/css/owl.carousel.css')); ?>">

    <!-- Magnific Popup css -->
    <link rel="stylesheet" href="<?php echo e(asset('index/css/magnific-popup.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('index/css/particleNetwork.css')); ?>">
    <!-- Main css -->
    <link rel="stylesheet" href="<?php echo e(asset('index/css/index_master.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('index/css/projects.css')); ?>">




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
            <?php if(session('user_id')): ?>
                <div class="user-header-mobile">
                    <div class="profile-menu-header"><a href="#" onclick="collapseDropDown()">
                            <div class="image-header-profile">
                                <?php if(session('profile_photo')): ?>
                                    <img src="<?php echo e('storage/'  . session('profile_photo')); ?>">
                                <?php else: ?>
                                    <img src="<?php echo e(asset('assets/img/user-defult.png')); ?>">
                                <?php endif; ?>
                            </div>
                            <i aria-hidden="true" class="fa fa-angle-down"></i>
                        </a>
                        <div class="profile-list">
                            <ul class="list-unstyled">
                                <li class="list-item"><a
                                            href="<?php echo e(route('profile_basic')); ?>">پروفایل</a></li>
                                <li class="list-item"><a href="/dashboard#/password">تغییر کلمه عبور</a></li>
                                <li class="list-item"><a href="<?php echo e(route('logout')); ?>">خروج</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
            <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
                <span class="icon icon-bar"></span>
            </button>
            <a class="navbar-brand test" href="">
            </a>
            <p class="logo-des hidden-xs hidden-sm">
                اینکوباک | بازارگاه آنلاین دنیای کشاورزی
            </p>

        </div>

        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
                <?php if(!session('user_id')): ?>
                    <li><a href="<?php echo e(route('login_page')); ?>" class="smoothScroll">ورود/ثبت نام</a></li>
                <?php endif; ?>
                <li><a href="/" class="smoothScroll">صفحه ی اصلی</a></li>
                <li><a href="/about-us" class="smoothScroll">درباره ما</a></li>
                <li><a href="/privacy-and-policy" class="smoothScroll">قوانین و مقررات</a></li>
                <li><a href="http:\\www.blog.incobac.com" class="smoothScroll">وبلاگ</a></li>


                <?php if(session('user_id')): ?>

                    <li class="user-header-web">
                        <div class="profile-menu-header"><a href="#" onclick="collapseDropDown()">
                                <div class="image-header-profile">
                                    <?php if(session('profile_photo')): ?>
                                        <img src="<?php echo e('storage/'  . session('profile_photo')); ?>">
                                    <?php else: ?>
                                        <img src="<?php echo e(asset('assets/img/user-defult.png')); ?>">
                                    <?php endif; ?>
                                </div>
                                <i aria-hidden="true" class="fa fa-angle-down"></i> <span
                                        class="name-header-profile"><?php echo e(session('full_name')); ?></span></a>
                            <div class="profile-list">
                                <ul class="list-unstyled">
                                    <li class="list-item"><a
                                                href="<?php echo e(route('profile_basic')); ?>">پروفایل</a></li>
                                    <li class="list-item"><a href="/dashboard#/password">تغییر کلمه عبور</a></li>
                                    <li class="list-item"><a href="<?php echo e(route('logout')); ?>">خروج</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                <?php endif; ?>
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
                                <a href="<?php echo e(asset('assets/img/user-defult.png')); ?>">
                                    <img src="<?php echo e(asset('assets/img/user-defult.png')); ?>">
                                </a>
                            </div>
                            <div class="image-wrapper">
                                <a href="<?php echo e(asset('assets/img/user-defult.png')); ?>">
                                    <img src="<?php echo e(asset('assets/img/user-defult.png')); ?>">
                                </a>
                            </div>
                            <div class="image-wrapper">
                                <a href="<?php echo e(asset('assets/img/user-defult.png')); ?>">
                                    <img src="<?php echo e(asset('assets/img/user-defult.png')); ?>">
                                </a>
                            </div>
                            <div class="image-wrapper">
                                <a href="<?php echo e(asset('assets/img/user-defult.png')); ?>">
                                    <img src="<?php echo e(asset('assets/img/user-defult.png')); ?>">
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
</div>

<!-- Back top -->
<a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a>


<!-- =========================
 SCRIPTS
============================== -->

<script src="<?php echo e(asset('index/js/jquery.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/bootstrap.min.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/jquery.magnific-popup.min.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/jquery.parallax.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/owl.carousel.min.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/wow.min.js')); ?>"></script>

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

