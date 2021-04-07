<!DOCTYPE html>
<html lang="fa">
    <head>
        <meta charset="UTF-8">
        <title>باسکول | بازارگاه کشاورزی</title>
        <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
        <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div class="containter-fluid">
            <div class="row">
                ...
            </div>
            <div class="row">
                <div class="col-xs-8 col-xs-offset-2">
                    <div class="alert alert-danger" role="alert" dir="rtl">
                        <h3>خطا</h3>
                        {{$error_msg}}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2 col-xs-offset-5">
                    <a class="btn btn-primary" href="{{route('show-transaction-detail',$id)}}">بازگشت به باسکول</a>    
                </div>
            </div>
        </div>
    </body>
    
</html>