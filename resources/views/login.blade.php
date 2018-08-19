<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml">
<head>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>ورود</title>
    <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
    <script>window.Laravel = {csrfToken:'{{csrf_token()}}}'}</script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/login/style.css')}}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>

    </style>
</head>
<div class="bg">
</div>
<body>
<div id="app">
    <login-com ></login-com>
</div>
</body>
<script src="{{asset('assets/cdn/axios.js')}}"></script>
<script src="{{asset('assets/js/login/api.js')}}"></script>
<script src="{{asset('assets/js/login/custom.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>

</html>