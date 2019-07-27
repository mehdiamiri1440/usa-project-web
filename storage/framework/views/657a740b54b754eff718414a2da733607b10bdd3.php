<!DOCTYPE html>
<html lang="fa">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="<?php echo $__env->yieldContent('meta_description'); ?>">
    <meta name="keywords" content="<?php echo $__env->yieldContent('meta_keywords'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" href="<?php echo e(asset('assets/img/logo-Inco-mobile.png')); ?>">

    <!-- site title -->
    <title><?php echo $__env->yieldContent('title'); ?> </title>

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
    <script src="<?php echo e(asset('index/js/jquery.js')); ?>"></script>
    <script src="<?php echo e(asset('index/js/bootstrap.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/cdn/vue.js')); ?>"></script>
    <?php echo $__env->yieldContent('header_links'); ?>
    <script src="<?php echo e(asset('assets/cdn/axios.js')); ?>"></script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-129398000-1');
    </script>

</head>

<body data-spy="scroll" data-offset="50" data-target=".navbar-collapse">


<!-- =========================
 PRE LOADER
============================== -->

<div class="preloader">
    <div class="sk-spinner sk-spinner-pulse"></div>
</div>
<div id="app">
    <!-- =========================
NAVIGATION LINKS
============================== -->
    <div class="navbar container-fluid navbar-fixed-top custom-navbar" role="navigation">
        <div class="container-fluid">
            <!-- navbar header -->
            <div class="navbar-header">
                <?php if(session('user_id')): ?>
                    <div class="user-header-mobile">
                        <div class="profile-menu-header">
                            <a href="#" @click.prevent="collapseDropDown()">
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
                                                href="/dashboard/profile">داشبورد</a></li>
                                    <li class="list-item"><a href="/dashboard/password">تغییر کلمه عبور</a></li>
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
                <a class="navbar-brand test" href="/">
                </a>
                <p class="logo-des hidden-xs hidden-sm">
                    اینکوباک | بازارگاه آنلاین دنیای کشاورزی
                </p>

            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-left">
                    <?php if(!session('user_id')): ?>
                        <li><a href="<?php echo e(route('login_page')); ?>" class="smoothScroll">ورود/ثبت نام</a></li>
                    <?php else: ?>
                        <li><a href="/dashboard/profile" class="smoothScroll">داشبورد</a></li>
                    <?php endif; ?>
                <!--                    <li><a href="/" class="smoothScroll">صفحه ی اصلی</a></li>-->

                    <li><a href="/product-list" class="smoothScroll">لیست محصولات </a></li>

                    <li><a href="http:\\www.blog.incobac.com" class="smoothScroll">وبلاگ</a></li>
                    <li><a href="/privacy-and-policy" class="smoothScroll">قوانین و مقررات</a></li>
                    <li><a href="/about-us" class="smoothScroll">درباره ما</a></li>
                    <?php if(session('user_id')): ?>
                        <li class="user-header-web">
                            <div class="profile-menu-header"><a href="#" @click.prevent="collapseDropDown()">
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
                                                    href="/dashboard/profile">داشبورد</a></li>
                                        <li class="list-item"><a href="/dashboard/password">تغییر کلمه عبور</a></li>
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


    <?php echo $__env->yieldContent('main_content'); ?>
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
                            <a href="/contact-us"> ارتباط با ما</a>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <p>آدرس</p>
                    <p>
                        شیراز، خیابان ارم کوچه 15 پلاک 264
                    </p>
                    <br/>
                    <p>تماس با ما
                    </p>
                    <p>0911-841-3054 / 0917-892-8266
                    </p>
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
                            <a href="https://www.instagram.com/incobac.ir/" class="fa fa-instagram wow "></a>
<<<<<<< HEAD
                        </li>
                        <li>
                            <a href="https://t.me/Incobac" class="fa fa-telegram wow "></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/27058131/ " class="fa fa-linkedin wow "></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/incobac" class="fa fa-twitter wow "></a>
                        </li>
                        <li>
=======
                        </li>
                        <li>
                            <a href="https://t.me/Incobac" class="fa fa-telegram wow "></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/27058131/ " class="fa fa-linkedin wow "></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/incobac" class="fa fa-twitter wow "></a>
                        </li>
                        <li>
>>>>>>> b3a08d78daa77c0dfd874bcd4bf8af887840d95d
                            <a href="https://www.facebook.com/incobac/" class="fa fa-facebook wow "></a>
                        </li>
                    </ul>
                    <p class="wow">تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.</p>

                </div>
            </div>
        </div>
    </div>

    <!-- end of app tag -->
    <!-- Back top -->
    <a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a>

</div>
<!-- =========================
 SCRIPTS
============================== -->


<script src="<?php echo e(asset('index/js/particleNetwork.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/jquery.magnific-popup.min.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/jquery.parallax.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/owl.carousel.min.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/smoothscroll.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/wow.min.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/custom.js')); ?>"></script>
<script src="<?php echo e(asset('index/js/api-index.js')); ?>"></script>
<?php echo $__env->yieldContent('script_tags'); ?>
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
