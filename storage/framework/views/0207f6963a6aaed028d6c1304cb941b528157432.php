<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>ورود</title>
    <script src="<?php echo e(asset('assets/js/jquery-3.3.1.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/jquery-ui.min.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/jquery.easing.min.js')); ?>"></script>
    <script>window.Laravel = {csrfToken:'<?php echo e(csrf_token()); ?>}'}</script>
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/fontiran.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/font-awesome.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/bootstrap-theme.min.css')); ?>">
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/login/style.css')); ?>">
    <script src="<?php echo e(asset('assets/cdn/axios.js')); ?>"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>

    </style>
</head>
<div class="bg">
</div>
<body>
<div id="app">
    <login-component logo="<?php echo e(asset('assets/img/logo-buskool.png')); ?>" homeUrl="<?php echo e(url('/')); ?>"></login-component>
</div>
</body>
<script src="<?php echo e(asset('assets/js/login/api.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/login/custom.js')); ?>"></script>
<script src="<?php echo e(asset('js/app.js')); ?>"></script>

</html>
