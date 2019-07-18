<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>ثبت نام</title>
    <link rel="icon" href="<?php echo e(asset('assets/img/logo-Inco-mobile.png')); ?>">
    <script>window.Laravel = {csrfToken:'<?php echo e(csrf_token()); ?>}'}</script>
    <script src="<?php echo e(asset('assets/js/jquery-3.3.1.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/jquery-ui.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/jquery.easing.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/jquery.multiselect.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/bootstrap.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/prettify.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/cdn/axios.js')); ?>"></script>
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/fontiran.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/font-awesome.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap-theme.min.css')); ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/jquery.multiselect.css')); ?>"/>
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/popup.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/register/style.css')); ?>">
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129398000-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

//        gtag('config', 'UA-129398000-1');
        gtag('config', 'UA-129398000-1',{'send_page_view': false });
    </script>

</head>
<body>
<div class="bg">

</div>
<div id='app'>
<register-component></register-component>
</div>
</body>

<script src="<?php echo e(asset('js/app.js')); ?>"></script>
</html>
