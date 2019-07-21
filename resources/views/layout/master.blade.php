<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="خرید و فروش مستقیم محصولات کشاورزی">
    <meta name="keywords" content="محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,اینکوباک">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" href="{{asset('assets/img/logo-Inco-mobile.png')}}">

    <title>اینکوباک | بازارگاه کشاورزی </title>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>
        window.Laravel = {csrfToken: '{{csrf_token()}}'}
    </script>
    <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
    {{--<script src="{{asset('assets/js/main.js')}}"></script>--}}
    {{--<script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>--}}
{{--    <script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>--}}
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/particleNetwork.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/animate.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/profile/main-profile.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/master/style.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl-custom-style.css')}}">


    {{--<script src="{{asset('index/js/jquery.js')}}"></script>--}}
    <script src="{{asset('assets/cdn/axios.js')}}"></script>
{{--    <script src="{{asset('index/js/bootstrap.min.js')}}"></script>--}}
{{--    <script src="{{asset('index/js/particleNetwork.js') }}"></script>--}}
    <script src="{{asset('index/js/jquery.magnific-popup.min.js')}}"></script>
    <script src="{{asset('index/js/jquery.parallax.js')}}"></script>
    <script src="{{asset('index/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('index/js/smoothscroll.js')}}"></script>
    <script src="{{asset('index/js/wow.min.js')}}"></script>
{{--    <script src="{{asset('index/js/custom.js')}}"></script>--}}

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
            "url" : "https://www.incobac.com",
            "email": "support@incobac.com",
            "logo":"https://www.incobac.com/assets/img/logo_dark.png",
            "name" : "اینکوباک",
            "foundingDate":"2017-09-14",
            "location" : {
                   "@type" : "Place",
                   "name" : "اینکوباک",
                   "address" : "NO.264 - 15 - Eram Street - Shiraz - IR"
                },
            "description":"خرید و فروش محصولات عمده کشاورزی، برنج و خرما",
            "review":{
                "@type": "Review",
                "itemReviewed": {
                        "@type": "Organization",
                        "image": "https://www.incobac.com/assets/img/logo_dark.png",
                        "name": "اینکوباک",
                        "telephone": "0917-202-1943"
                    },
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "4"
                    },
                    "name": "اینکوباک",
                    "author": {
                        "@type": "Person",
                        "name": "Ali Delkhosh"
                    },
                    "reviewBody": "بازارگاه خرید و فروش محصولات کشاورزی",
                    "publisher": {
                        "@type": "Organization",
                        "name": "اینکوباک"
                    }
            },
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
          "url": "https://www.incobac.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.incobac.com/product-list/{search_term_string}",
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
            user_id="{{session('user_id')}}"
            user_default_image="{{asset('assets/img/user-defult.png')}}"
            profile_photo="{{session('profile_photo')}}"
            user_full_name="{{session('full_name')}}"
            user_logout_path="{{route('logout')}}"
            storage_path="{{url('storage/')}}"
            login_page_path="{{route('logout')}}"
            loading="{{asset('assets/img/gif/prload.gif')}}"
            finish_load_img="{{asset('assets/img/gif/loading.gif')}}"
            incobacicon="{{asset('assets/img/logo-Inco-mobile.png')}}"

    ></header-master-layouts>

    <router-view id="main-content"
                 name="layouts"
                 not_found_image="{{url('assets/img/def404.png')}}"
                 loading_img="{{asset('assets/img/gif/loading.gif')}}"
                 trans="{{url('dashboard/transaction-detail')}}"
                 transRep="{{url('dashboard/transaction-report')}}"
                 str="{{asset('storage/')}}"
                 defimgitem="{{asset('/assets/img/product.jpg')}}"
                 defultimg="{{asset('assets/img/user-defult.png')}}"
                 site_logo="{{asset('assets/img/logo-incobac.png')}}"
                 site_logo_white="{{asset('/index/images/logo_white.png')}}"
                 incobaicon="{{asset('assets/img/lo.png')}}"
                 img_about_us_1="{{asset('assets/img/about-us/1.jpg')}}"
                 img_about_us_2="{{asset('assets/img/about-us/2.jpg')}}"
                 img_about_us_3="{{asset('assets/img/about-us/3.jpg')}}"
                 img_about_us_4="{{asset('assets/img/about-us/4.jpg')}}"
                 img_about_us_5="{{asset('assets/img/about-us/5.jpg')}}"
                 img_about_us_6="{{asset('assets/img/about-us/6.jpg')}}"
                 img_pricing_38="{{asset('index/images/Group_38.png')}}"
                 img_pricing_36="{{asset('index/images/Group_36.png')}}"
                 img_pricing_34="{{asset('index/images/Group_34.png')}}"
                 img_pricing_32="{{asset('index/images/Group_32.png')}}"
                 img_success_project="{{asset('index/images/current.png')}}"
                 img_success_verified="{{asset('index/images/farmer.png')}}"
                 img_seller_services="{{asset('index/images/seller.jpg')}}"
                 img_buyer_services="{{asset('index/images/buyer.jpg')}}"
                 img_six="{{asset('index/images/6.png')}}"
                 img_five="{{asset('index/images/5.png')}}"
                 img_four="{{asset('index/images/4.png')}}"
                 img_three="{{asset('index/images/3.png')}}"
                 img_two="{{asset('index/images/2.png')}}"
                 img_one="{{asset('index/images/1.png')}}"
                 img_2_help_page="{{asset('assets/img/help/2.jpg')}}"
                 img_3_help_page="{{asset('assets/img/help/3.jpg')}}"
                 img_4_help_page="{{asset('assets/img/help/4.jpg')}}"
                 img_5_help_page="{{asset('assets/img/help/5.jpg')}}"
                 img_6_help_page="{{asset('assets/img/help/6.jpg')}}"
                 img_7_help_page="{{asset('assets/img/help/7.jpg')}}"
                 img_8_help_page="{{asset('assets/img/help/8.jpg')}}"
                 img_8_1_help_page="{{asset('assets/img/help/8_1.jpg')}}"
                 img_11_help_page="{{asset('assets/img/help/11.jpg')}}"
                 img_12_help_page="{{asset('assets/img/help/12.jpg')}}"
                 img_13_help_page="{{asset('assets/img/help/13.jpg')}}"
                 img_mobile_2_help_page="{{asset('assets/img/help/mobile_2.jpg')}}"
                 img_mobile_3_help_page="{{asset('assets/img/help/mobile_3.jpg')}}"
                 img_mobile_4_help_page="{{asset('assets/img/help/mobile_4.jpg')}}"
                 img_mobile_5_help_page="{{asset('assets/img/help/mobile_5.jpg')}}"
                 img_mobile_6_help_page="{{asset('assets/img/help/mobile_6.jpg')}}"
                 img_mobile_6_2_help_page="{{asset('assets/img/help/mobile_6_2.jpg')}}"
                 img_mobile_6_3_help_page="{{asset('assets/img/help/mobile_6_3.jpg')}}"
                 img_mobile_7_help_page="{{asset('assets/img/help/mobile_7.jpg')}}"
                 img_mobile_7_1_help_page="{{asset('assets/img/help/mobile_7_1.jpg')}}"
                 img_mobile_11_1_help_page="{{asset('assets/img/help/mobile_11_1.jpg')}}"
                 img_mobile_11_2_help_page="{{asset('assets/img/help/mobile_11_2.jpg')}}"
                 img_mobile_11_3_help_page="{{asset('assets/img/help/mobile_11_3.jpg')}}"
                 img_mobile_11_4_help_page="{{asset('assets/img/help/mobile_11_4.jpg')}}"
                 img_mobile_11_5_help_page="{{asset('assets/img/help/mobile_11_5.jpg')}}"
                 img_mobile_12_help_page="{{asset('assets/img/help/mobile_12.jpg')}}"
                 img_mobile_13_help_page="{{asset('assets/img/help/mobile_13.jpg')}}"
                 img_mobile_13_1_help_page="{{asset('assets/img/help/mobile_13_1.jpg')}}"
    ></router-view>

    <footer-master-layouts></footer-master-layouts>


</div>
<script src="{{asset('js/app.js')}}"></script>
<script src="{{asset('assets/js/idleTimer.js')}}"></script>

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
