<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="خرید و فروش مستقیم محصولات کشاورزی">
    <meta name="keywords" content="محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,اینکوباک">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="icon" href="<?php echo e(asset('assets/img/logo-Inco-mobile.png')); ?>">

    <title>اینکوباک | بازارگاه کشاورزی </title>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <script>
        window.Laravel = {csrfToken: '<?php echo e(csrf_token()); ?>'}
    </script>
    <script src="<?php echo e(asset('assets/js/jquery-3.3.1.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/jquery-ui.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/main.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/jquery.easing.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/jquery.magnific-popup.min.js')); ?>"></script>
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/fontiran.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/font-awesome.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap-theme.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl.carousel.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl.theme.default.min.css')); ?>">    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/popup.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/magnific-popup.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/profile/main-profile.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/master/style.css')); ?>">

    <script src="<?php echo e(asset('assets/cdn/axios.js')); ?>"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-129398000-1');
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>
<div id="app"></div>
<div id="appBuyer"></div>
<div id="appSeller"></div>
<div id="appLayouts">
    <!--loader-->

    
        
            
            
        
    
    <!--end loader-->


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
        ></header-master-layouts>
        <router-view
                name="layouts"
                loading_img="<?php echo e(asset('assets/img/gif/loading.gif')); ?>"
                trans="<?php echo e(url('dashboard/transaction-detail')); ?>"
                transRep="<?php echo e(url('dashboard/transaction-report')); ?>"
                str="<?php echo e(asset('storage/')); ?>"
                defimgitem="<?php echo e(asset('/assets/img/product.jpg')); ?>"
                defultimg="<?php echo e(asset('assets/img/user-defult.png')); ?>"
                siteLogo="<?php echo e(asset('assets/img/logo-incobac.png')); ?>"
                incobaicon="<?php echo e(asset('assets/img/lo.png')); ?>"
        ></router-view>

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
