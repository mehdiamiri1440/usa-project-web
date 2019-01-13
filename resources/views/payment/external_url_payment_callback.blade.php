<!DOCTYPE html>
<html lang="fa">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="description" content="Responsive Personal One Page Portfolio">
    <meta name="keywords" content="Responsive, Personal, One Page Portfolio, Freelancers, Template">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- site title -->
    <title>اینکوباک | بازارگاه کشاورزی</title>

    <!-- Bootstrap css -->
    <link rel="stylesheet" href="{{asset('index/css/bootstrap.min.css')}}">

    <!-- Animated css -->
    <link rel="stylesheet" href="{{asset('index/css/animate.css')}}">

    <!-- Font Awesome css -->
    <link rel="stylesheet" href="{{asset('index/css/font-awesome.min.css')}}">

    <!-- Owl Carousel css -->
    <link rel="stylesheet" href="{{asset('index/css/owl.theme.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/owl.carousel.css')}}">

    <!-- Magnific Popup css -->
    <link rel="stylesheet" href="{{asset('index/css/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/particleNetwork.css')}}">
    <!-- Main css -->
    <link rel="stylesheet" href="{{asset('index/css/index_master.css')}}">
    <link rel="stylesheet" href="{{asset('index/css/help.css')}}">
    <script src="{{asset('assets/cdn/vue.js')}}"></script>
    <script src="{{asset('assets/cdn/axios.js')}}"></script>

</head>

<body data-spy="scroll" data-offset="50" data-target=".navbar-collapse">


<!-- =========================
 PRE LOADER
============================== -->

<div class="preloader">
    <div class="sk-spinner sk-spinner-pulse"></div>
</div>


<!-- =========================
 NAVIGATION LINKS
============================== -->

<div class="navbar container-fluid navbar-fixed-top custom-navbar" role="navigation">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-md-6 col-md-offset-3">
                <div class="well" style="margin-top:10%">
                    <h3 class="text-center">تایید پرداخت در اینکوباک</h3>
                    <hr/>
                    <p class="text-right"> مبلغ پرداخت شده : {{$payed_amount}} ریال</p>
                    <p class="text-right"> شناسه ارجاع : {{$reference_id}}</p>
                    <p class="text-right"> شناسه پرداخت : {{$payment_id}}</p>
                    <p class="text-center text-danger">اطلاعات پرداخت خود را نگهداری کنید.</p>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- =========================
INTRO SECTION
============================== -->




<!-- =========================
FOOTER SECTION
============================== -->





    <!-- =========================
     SCRIPTS
    ============================== -->

    <script src="{{asset('index/js/jquery.js')}}"></script>
    <script src="{{asset('index/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('index/js/particleNetwork.js')}}"></script>
    <script src="{{asset('index/js/jquery.magnific-popup.min.js')}}"></script>
    <script src="{{asset('index/js/jquery.parallax.js')}}"></script>
    <script src="{{asset('index/js/owl.carousel.min.js')}}"></script>
    <script src="{{asset('index/js/smoothscroll.js')}}"></script>
    <script src="{{asset('index/js/wow.min.js')}}"></script>
    <script src="{{asset('index/js/custom.js')}}"></script>

    <!--
    <script>
        window.addEventListener('load', function(){
            var allimages= document.getElementsByTagName('img');
            for (var i=0; i<allimages.length; i++) {
                if (allimages[i].getAttribute('data-src')) {
                    allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
                }
            }
        }, false)
    </script>
    -->
</body>

</html>

