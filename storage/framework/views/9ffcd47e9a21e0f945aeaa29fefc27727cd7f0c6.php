    <!DOCTYPE html>
    <html lang="fa">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
        <title>باسکول | بازارگاه کشاورزی</title>

        <script src="<?php echo e(asset('assets/js/jquery-3.3.1.min.js')); ?>"></script>
        <script src="<?php echo e(asset('assets/js/jquery-ui.min.js')); ?>"></script>
        <script src="<?php echo e(asset('assets/js/jquery.easing.min.js')); ?>"></script>
        <script src="<?php echo e(asset('assets/js/kamadatepicker.js')); ?>"></script>
        <script src="<?php echo e(asset('assets/cdn/axios.js')); ?>"></script>
        <script>
            window.Laravel = { csrfToken : '<?php echo e(csrf_token()); ?>'}
        </script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
        <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              var userId = "<?php echo session('user_id');?>";

//              gtag('config', 'UA-129398000-1');
              gtag('config', 'UA-129398000-1',{'send_page_view': false });
        </script>

        <link rel="icon" href="<?php echo e(asset('assets/img/logo-Inco-mobile.png')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/fontiran.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/imageuploadify.min.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/all.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap.min.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap-theme.min.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/cropper.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/placeholder-content.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/popup.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/magnific-popup.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/kamadatepicker.min.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl.carousel.min.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl-custom-style.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl-custom-style.css')); ?>">
        <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/custom.css')); ?>">


        <style>
            html {
                overflow-y: scroll;
            }
        </style>
        <style>
            .message-wrapper .chat-page ul{
                background: url(<?php echo e(asset('assets/img/whatsappbg.jpg')); ?>) repeat ;
            }
            .loading_images img {
                display: block;
                margin: 0 auto;
            }

            /* preventing page shifting */
            .modal {
                overflow-y: auto;
            }

            .modal-open {
                overflow: auto;
            }

            .modal-open[style] {
                padding-right: 0 !important;
            }
        </style>

    </head>

    <body>
    <div id="app"></div>
    <div id="appLayouts"></div>
    <div id="appBuyer"></div>
    <div id="appSeller" style="height: 100%">

        <header-dash-seller
                logo="<?php echo e(asset('assets/img/logo-buskool-white-red.png')); ?>"
                storage="<?php echo e(asset('storage/')); ?>"
                defultimg="<?php echo e(asset('assets/img/user-defult.png')); ?>"
                transactroute="<?php echo e(route('my-terminated-transaction-list')); ?>"
                mytrans="<?php echo e(route('my-transaction-list')); ?>"
                selregpro="<?php echo e(route('seller-register-product')); ?>"
                byadreq="<?php echo e(route('seller-buyAd-requests')); ?>"
                logout="<?php echo e(route('logout')); ?>"
                routehome="<?php echo e(url('/')); ?>"
                loading="<?php echo e(asset('assets/img/gif/prload.gif')); ?>"
                guide="<?php echo e(url('privacy_and_policy.vue')); ?>"
        ></header-dash-seller>
            <main id="main">
            <router-view
                    name="seller"
                    pagenotfoundimage = "<?php echo e(url('index/images/def404.png')); ?>"
                    loading_img="<?php echo e(asset('assets/img/gif/loading.gif')); ?>"
                    trans="<?php echo e(url('dashboard/transaction-detail')); ?>"
                    transRep="<?php echo e(url('dashboard/transaction-report')); ?>"
                    str="<?php echo e(asset('storage/')); ?>"
                    defimgitem="<?php echo e(asset('/assets/img/product.jpg')); ?>"
                    defultimg="<?php echo e(asset('assets/img/user-defult.png')); ?>"
            ></router-view>

            </main>

    </div>
    <?php echo $__env->yieldContent('body_script_tags'); ?>
    <script>

    </script>
    <script src="<?php echo e(asset('assets/js/custom.js')); ?>"></script>
    <script src="<?php echo e(asset('js/app.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/idleTimer.js')); ?>"></script>
    <script>
        $(document).ready(function(){
            $(document).idleTimer(7200000);
        });

        $(document).on("idle.idleTimer", function(){
         // function you want to fire when the user goes idle
            window.location.href = '/login'
        });
    </script>
    </body>

    </html>
