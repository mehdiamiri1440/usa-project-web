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
    <script src="<?php echo e(asset('assets/js/ResizeSensor.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/bootstrap.min.js')); ?>"></script>

    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/placeholder-content.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/fontiran.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/all.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap-theme.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl.carousel.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl.theme.default.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/popup.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/magnific-popup.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('index/css/particleNetwork.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('index/css/animate.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/owl-custom-style.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/imageuploadify.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/cropper.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/master/style.css')); ?>">


    <script src="<?php echo e(asset('assets/cdn/axios.js')); ?>"></script>

    <script src="<?php echo e(asset('index/js/jquery.magnific-popup.min.js')); ?>"></script>
    <script src="<?php echo e(asset('index/js/owl.carousel.min.js')); ?>"></script>


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
<body >

<div id="app">

            <route-component
                    user-id = "<?php echo e(session('user_id')); ?>"
                    is-seller = "<?php echo e(session('is_seller')); ?>"
                    assets = "<?php echo e(asset('')); ?>"
                    storage-path = "<?php echo e(url('storage/')); ?>"
                    profile-photo="<?php echo e(session('profile_photo')); ?>"
                    user-full-name="<?php echo e(session('full_name')); ?>"
                    user-logout-path="<?php echo e(route('logout')); ?>"
            />
</div>

<script src="<?php echo e(asset('js/app.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/idleTimer.js')); ?>"></script>

<script>
    $(document).ready(function () {
        $(document).idleTimer(7200000);
    });

    $(document).on("idle.idleTimer", function () {
        window.location.href = '/login'
    });

    function getUserId(){
        let userId = <?php if(session('user_id')){echo session('user_id');} else echo -1; ?>;
        return userId;
    }
</script>
</body>

</html>
