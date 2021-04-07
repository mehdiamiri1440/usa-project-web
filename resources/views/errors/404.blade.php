<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="Responsive Personal One Page Portfolio">
    <meta name="keywords" content="Responsive, Personal, One Page Portfolio, Freelancers, Template">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- site title -->
    <title>باسکول | بازارگاه کشاورزی</title>

    <!-- Bootstrap css -->
    <link rel="stylesheet" href="{{asset('index/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/style.css')}}">
    <style>
        body, html {
            background-image: url("{{asset('images/login_back_03.jpg')}}");
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        img {
            width: 31%;
            margin: 50px auto 20px;
            display: block;
        }

        .green-bot {
            margin: 15px 0;
            display: inline-block;
            background: #00C569;
            color: #f5f5f5;
            padding: 10px 35px;
            border-radius: 3px;
            text-align: center;
            border: none;
            transition: 300ms;
        }

        .green-bot:hover {
            color: #fff;
            background: #11a028;
            transition: 300ms;
        }

        .botton-inco {
            margin: 15px 0;
            display: inline-block;
            background: #313a43;
            color: #f5f5f5;
            padding: 10px 35px;
            border-radius: 3px;
            text-align: center;
            border: none;
            transition: 300ms;
        }

        .botton-inco:hover {
            color: #fff;
            background: #283743;
        }

        .buttons {
            width: 55%;
            margin: 0 auto;
            text-align: center;
        }

        .buttons div {
            width: 50%;
            padding: 0 15px;
            float: right;
        }

        .buttons div a {
            width: 100%;
        }

        @media screen and (max-width: 992px) {
            .buttons {
                width: 40%;
                margin: 0 auto;
                text-align: center;
            }

            .buttons div {
                width: 100%;
                padding: 0 15px;
                float: right;
            }

        }

        @media screen and (max-width: 768px) {
            .buttons {
                width: 50%;
                margin: 0 auto;
                text-align: center;
            }

            img {

                width: 40%;
                margin: 50px auto 20px;
                display: block;

            }
        }

        @media screen and (max-width: 500px) {
            .buttons {
                width: 70%;
                margin: 0 auto;
                text-align: center;
            }

            img {

                width: 60%;
                margin: 50px auto 20px;
                display: block;

            }
        }

        @media screen and (max-width: 380px) {
            .buttons {
                width: 100%;
                margin: 0 auto;
                text-align: center;
            }

            img {

                width: 60%;
                margin: 50px auto 20px;
                display: block;

            }
        }
    </style>
</head>

<body>

<div class="container-fluid">
    <div class="container">
        <img src="{{asset('images/def404.png')}}">
        <div class="buttons">
            <div>
                <a href="/" class="green-bot">
                    صفحه نخست
                </a>
            </div>
            <div>
                <a href="{{url()->previous()}}" class="botton-inco">
                    بازگشت به صفحه قبل
                </a>
            </div>
        </div>
    </div>
</div>


<!-- =========================
     SCRIPTS
============================== -->

<script src="{{asset('index/js/jquery.js')}}"></script>
<script src="{{asset('index/js/bootstrap.min.js')}}"></script>

</body>

</html>
