<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="خرید و فروش مستقیم محصولات کشاورزی">
    <meta name="keywords" content="محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,باسکول">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" href="<?php echo e(asset('assets/img/logo-Inco-mobile.png')); ?>">

    <title>باسکول | بازارگاه کشاورزی </title>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <script>
        window.Laravel = {csrfToken: '<?php echo e(csrf_token()); ?>'}
    </script>
    <script src="<?php echo e(asset('assets/js/jquery-3.3.1.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/jquery-ui.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/ResizeSensor.js')); ?>"></script>

    
    <script src="<?php echo e(asset('assets/js/jquery.easing.min.js')); ?>"></script>

    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/placeholder-content.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/fontiran.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/font-awesome.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap-theme.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl.carousel.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl.theme.default.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/popup.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/magnific-popup.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('index/css/particleNetwork.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('index/css/animate.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/profile/main-profile.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/master/style.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl-custom-style.css')); ?>">


<<<<<<< HEAD
<<<<<<< HEAD
=======
    <script src="<?php echo e(asset('index/js/jquery-ui.min.js')); ?>"></script>
>>>>>>> 3-redesign-register-form-to-be-more-user-friendly-and-exploratory
=======
    <script src="<?php echo e(asset('index/js/jquery-ui.min.js')); ?>"></script>
=======
>>>>>>> 5-redesign-complete-profile-form-to-be-more-user-friendly-and-exploratory-2
>>>>>>> 14-youtube-like-loaders-in-all-pages-if-possible
    <script src="<?php echo e(asset('assets/cdn/axios.js')); ?>"></script>

    <script src="<?php echo e(asset('index/js/jquery.magnific-popup.min.js')); ?>"></script>
    <script src="<?php echo e(asset('index/js/jquery.parallax.js')); ?>"></script>
    <script src="<?php echo e(asset('index/js/owl.carousel.min.js')); ?>"></script>
    <script src="<?php echo e(asset('index/js/smoothscroll.js')); ?>"></script>
    <script src="<?php echo e(asset('index/js/wow.min.js')); ?>"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        //        gtag('config', 'UA-129398000-1');
        gtag('config', 'UA-129398000-1', {'send_page_view': false});
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script type="application/ld+json">
        {
            "@context" : "http://schema.org/",
            "@type" : "Organization",
            "url" : "https://www.buskool.com",
            "email": "support@buskool.com",
            "logo":"https://www.buskool.com/assets/img/logo_dark.png",
            "name" : "باسکول",
            "foundingDate":"2017-09-14",
            "location" : {
                   "@type" : "Place",
                   "name" : "باسکول",
                   "address" : "NO.264 - 15 - Eram Street - Shiraz - IR"
                },
            "description":"خرید و فروش محصولات عمده کشاورزی، برنج و خرما",
            "contactPoint" : [
                  {
                    "@type" : "ContactPoint",
                    "telephone" : "+98-917-202-1943",
                    "contactType" : "customer service"
                  }
                ]
        }
    </script>
    <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://www.buskool.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.buskool.com/product-list/{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
    </script>

</head>
<body>
<div id="app"></div>
<div id="appBuyer"></div>
<div id="appSeller"></div>
<div id="appLayouts">


    <!-- =========================
 NAVIGATION LINKS
============================== -->
    <header-master-layouts
            user_id="<?php echo e(session('user_id')); ?>"
            user_default_image="<?php echo e(asset('assets/img/user-defult.png')); ?>"
            profile_photo="<?php echo e(session('profile_photo')); ?>"
            user_full_name="<?php echo e(session('full_name')); ?>"
            user_logout_path="<?php echo e(route('logout')); ?>"
            storage_path="<?php echo e(url('storage/')); ?>"
            login_page_path="<?php echo e(route('logout')); ?>"
            loading="<?php echo e(asset('assets/img/gif/prload.gif')); ?>"
            finish_load_img="<?php echo e(asset('assets/img/gif/loading.gif')); ?>"
            buskoolicon="<?php echo e(asset('assets/img/logo-Inco-mobile.png')); ?>"

    ></header-master-layouts>

    <router-view id="main-content"
                 name="layouts"
                 not_found_image="<?php echo e(url('assets/img/def404.png')); ?>"
                 loading_img="<?php echo e(asset('assets/img/gif/loading.gif')); ?>"
                 trans="<?php echo e(url('dashboard/transaction-detail')); ?>"
                 transRep="<?php echo e(url('dashboard/transaction-report')); ?>"
                 str="<?php echo e(asset('storage/')); ?>"
                 defimgitem="<?php echo e(asset('/assets/img/product.jpg')); ?>"
                 defultimg="<?php echo e(asset('assets/img/user-defult.png')); ?>"
                 site_logo="<?php echo e(asset('assets/img/logo-buskool.png')); ?>"
                 site_logo_white="<?php echo e(asset('/index/images/logo_white.png')); ?>"
                 incobaicon="<?php echo e(asset('assets/img/lo.png')); ?>"
                 img_about_us_1="<?php echo e(asset('assets/img/about-us/1.jpg')); ?>"
                 img_about_us_2="<?php echo e(asset('assets/img/about-us/2.jpg')); ?>"
                 img_about_us_3="<?php echo e(asset('assets/img/about-us/3.jpg')); ?>"
                 img_about_us_4="<?php echo e(asset('assets/img/about-us/4.jpg')); ?>"
                 img_about_us_5="<?php echo e(asset('assets/img/about-us/5.jpg')); ?>"
                 img_about_us_6="<?php echo e(asset('assets/img/about-us/6.jpg')); ?>"
                 img_pricing_38="<?php echo e(asset('index/images/Group_38.png')); ?>"
                 img_pricing_36="<?php echo e(asset('index/images/Group_36.png')); ?>"
                 img_pricing_34="<?php echo e(asset('index/images/Group_34.png')); ?>"
                 img_pricing_32="<?php echo e(asset('index/images/Group_32.png')); ?>"
                 img_success_project="<?php echo e(asset('index/images/current.png')); ?>"
                 img_success_verified="<?php echo e(asset('index/images/farmer.png')); ?>"
                 img_seller_services="<?php echo e(asset('index/images/seller.jpg')); ?>"
                 img_buyer_services="<?php echo e(asset('index/images/buyer.jpg')); ?>"
                 img_six="<?php echo e(asset('index/images/6.png')); ?>"
                 img_five="<?php echo e(asset('index/images/5.png')); ?>"
                 img_four="<?php echo e(asset('index/images/4.png')); ?>"
                 img_three="<?php echo e(asset('index/images/3.png')); ?>"
                 img_two="<?php echo e(asset('index/images/2.png')); ?>"
                 img_one="<?php echo e(asset('index/images/1.png')); ?>"
                 img_2_help_page="<?php echo e(asset('assets/img/help/2.jpg')); ?>"
                 img_3_help_page="<?php echo e(asset('assets/img/help/3.jpg')); ?>"
                 img_4_help_page="<?php echo e(asset('assets/img/help/4.jpg')); ?>"
                 img_5_help_page="<?php echo e(asset('assets/img/help/5.jpg')); ?>"
                 img_6_help_page="<?php echo e(asset('assets/img/help/6.jpg')); ?>"
                 img_7_help_page="<?php echo e(asset('assets/img/help/7.jpg')); ?>"
                 img_8_help_page="<?php echo e(asset('assets/img/help/8.jpg')); ?>"
                 img_8_1_help_page="<?php echo e(asset('assets/img/help/8_1.jpg')); ?>"
                 img_11_help_page="<?php echo e(asset('assets/img/help/11.jpg')); ?>"
                 img_12_help_page="<?php echo e(asset('assets/img/help/12.jpg')); ?>"
                 img_13_help_page="<?php echo e(asset('assets/img/help/13.jpg')); ?>"
                 img_mobile_2_help_page="<?php echo e(asset('assets/img/help/mobile_2.jpg')); ?>"
                 img_mobile_3_help_page="<?php echo e(asset('assets/img/help/mobile_3.jpg')); ?>"
                 img_mobile_4_help_page="<?php echo e(asset('assets/img/help/mobile_4.jpg')); ?>"
                 img_mobile_5_help_page="<?php echo e(asset('assets/img/help/mobile_5.jpg')); ?>"
                 img_mobile_6_help_page="<?php echo e(asset('assets/img/help/mobile_6.jpg')); ?>"
                 img_mobile_6_2_help_page="<?php echo e(asset('assets/img/help/mobile_6_2.jpg')); ?>"
                 img_mobile_6_3_help_page="<?php echo e(asset('assets/img/help/mobile_6_3.jpg')); ?>"
                 img_mobile_7_help_page="<?php echo e(asset('assets/img/help/mobile_7.jpg')); ?>"
                 img_mobile_7_1_help_page="<?php echo e(asset('assets/img/help/mobile_7_1.jpg')); ?>"
                 img_mobile_11_1_help_page="<?php echo e(asset('assets/img/help/mobile_11_1.jpg')); ?>"
                 img_mobile_11_2_help_page="<?php echo e(asset('assets/img/help/mobile_11_2.jpg')); ?>"
                 img_mobile_11_3_help_page="<?php echo e(asset('assets/img/help/mobile_11_3.jpg')); ?>"
                 img_mobile_11_4_help_page="<?php echo e(asset('assets/img/help/mobile_11_4.jpg')); ?>"
                 img_mobile_11_5_help_page="<?php echo e(asset('assets/img/help/mobile_11_5.jpg')); ?>"
                 img_mobile_12_help_page="<?php echo e(asset('assets/img/help/mobile_12.jpg')); ?>"
                 img_mobile_13_help_page="<?php echo e(asset('assets/img/help/mobile_13.jpg')); ?>"
                 img_mobile_13_1_help_page="<?php echo e(asset('assets/img/help/mobile_13_1.jpg')); ?>"
    ></router-view>

    <footer-master-layouts></footer-master-layouts>


</div>
<script src="<?php echo e(asset('js/app.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/idleTimer.js')); ?>"></script>

<script>
    $(document).ready(function () {
        $(document).idleTimer(7200000);
    });

    $(document).on("idle.idleTimer", function () {
        // function you want to fire when the user goes idle
        window.location.href = '/login'
    });
</script>
</body>

</html>
