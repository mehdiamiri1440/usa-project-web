<!DOCTYPE html>
<html lang="fa">

<head>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="description" content="Responsive Personal One Page Portfolio">
	<meta name="keywords" content="Responsive, Personal, One Page Portfolio, Freelancers, Template">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- site title -->
	<title>اینکوباک | درباره ما</title>
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118872652-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-118872652-1');
        
      <?php if(isset($_SESSION['user_id'])) : ?>
            gtag('set', {'user_id': $_SESSION['user_id']});
      <?php endif; ?>
    </script>

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

	<!-- Main css -->
	<link rel="stylesheet" href="{{asset('index/css/about-us-style.css')}}">


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

	<div class="navbar navbar-fixed-top custom-navbar" role="navigation">
		<div class="container">

			<!-- navbar header -->
			<div class="navbar-header">
				<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="icon icon-bar"></span>
					<span class="icon icon-bar"></span>
					<span class="icon icon-bar"></span>
				</button>
				<a class="navbar-brand test" href="">
	
				</a>
			</div>

			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-left">
					<li><a href="{{route('login_page')}}" class="smoothScroll">ورود/ثبت نام</a></li>
                    <li><a href="/" class="smoothScroll">صفحه ی اصلی</a></li>
					<li><a href="/about-us" class="">درباره ما</a></li>
					<li><a href="/privacy-and-policy" class="smoothScroll">قوانین و مقررات</a></li>
					<li><a href="http:\\www.blog.incobac.com" class="smoothScroll">وبلاگ</a></li>
				</ul>
			</div>

		</div>
	</div>



	<!-- =========================
    INTRO SECTION
============================== -->

<!--
	<section id="intro" class="parallax-section">
		<div class="gradient-overlay"></div>
		<div class="container">
			<div class="row">
                <div class="col-xs-12">
                    <p class="panel">تست</p>
                </div>
			</div>
		</div>
	
	</section>
-->





    <!-- =========================
    TESTIMONIAL SECTION
============================== -->

	<section id="testimonial" class="parallax-section">
		<div class="overlay"></div>
		<div class="container">
			<div class="row">
				<div class=" wow bounceIn col-md-12 col-sm-12">
					<div class="section-title">
						<h2>درباره ی ما</h2>
					</div>
                    <p class="text-right">با توجه به تحقیقات و مطالعات صورت گرفته در بازار و حضور در نمایشگاه های داخلی و بین المللی حوزه محصولات کشاورزی و سابقه ی حضور در بازار صادرات ایران شاهد مشکلات عدیده‌ای از قبیل : عدم دسترسی مناسب به محصولات با کیفیت، فقدان شبکه دسترسی برای قیمت‌گذاری، وجود واسطه های بسیار زیاد و افزایش قیمت در تبع آن و هدر رفت سرمایه بودیم. لذا برآن شدیم تا با ایجاد ساختاری تکنولوژی محور در راستای حل و تسهیل این مشکلات گام برداریم.</p>
                    <br/>
                    <p class="text-right">اینکوباک، بازارگاه آنلاین محصولات کشاورزی با هدف گردهم آوردن بهترین تولیدکنندگان و بازرگانان حوزه کشاورزی در جهت افزایش بهره‌وری شروع به کار کرده است. در این راستا اینکوباک خدمات زیر را ارائه می‌دهد :</p>
                    <br/>
                    <ul class="text-right">
                        <li>ایجاد پروفایل تجاری در فضایی کاملاً حرفه‌ای</li>
                        <li>امکان بازدید و ایجاد نمایشگاه مجازی رایگان</li>
                        <li>امکان ثبت درخواست خرید و فروش محصولات خود</li>
                        <li>دسترسی آسان به تامین کنندگان محصولات مختلف در اقصی نقاط ایران</li>
                        <li>امکان مقایسه کیفیت و قیمت محصولات</li>
                        <li>امکان بازرسی و نظارت در هنگام بار گیری محصول توسط کارشناسان اینکوباک</li>
                        <li>پرداخت الکترونیکی</li>
                    </ul>
				</div>
			</div>
		</div>
	</section>


	
	


	<!-- =========================
    CONTACT SECTION
============================== -->

	<section id="contact" class="parallax-section">
		<div class="container">
			<div class="row">

				<div class="wow bounceIn col-md-12 col-sm-12">
					<div class="section-title text-center">
						<h2>با ما در تماس باشید</h2>
					</div>
				</div>

				<div class="wow fadeInUp col-md-6 col-sm-7" data-wow-delay="0.9s">
					<div class="contact_detail">
						<div class="section-title">
							<h3>یک پیام برای مابفرستید</h3>
						</div>
						<form action="http://themes.khaitawng.com/Branded/contact.php" method="post">
							<input type="text" class="form-control" placeholder="نام" required>
							<input type="email" class="form-control" placeholder="ایمیل" required>
							<textarea class="form-control" placeholder="پیام" rows="5" required></textarea>
							<div class="col-md-6 col-sm-10">
								<input type="submit" class="form-control" value="ارسال">
							</div>
						</form>
					</div>
				</div>

				<div class="wow fadeInUp col-md-offset-1 col-md-4 col-sm-5" data-wow-delay="0.9s">
					<div class="contact_detail">
						<div class="addr">
							<h3> آدرس</h3>
							<p>شیراز ، بلوار جمهوری اسلامی، ساختمان مدیریت دانشگاه شیراز، برج نوآوری ، طبقه نهم</p>
						</div>
						<div class="ph">
                            <h3>تماس با ما</h3>
                            <p>0713-646-0996 / 09178928245</p>
                        </div>
                        <div class="email">
                            <h3>ایمیل بفرستید</h3>
                            <p>s.radmanesh95@gmail.com</p>
                        </div>
					</div>
				</div>

			</div>
		</div>
	</section>



	<!-- =========================
    FOOTER SECTION
============================== -->

	<footer>
		<div class="container">
			<div class="row">

				<div class="col-md-12 col-sm-12">
					<p class="wow fadeInUp" data-wow-delay="0.6s">تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.</p>

<!--
					<ul class="social-icon">
						<li>
							<a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a>
						</li>
						<li>
							<a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a>
						</li>
						<li>
							<a href="#" class="fa fa-telegram wow fadeInUp" data-wow-delay="1.6s"></a>
						</li>
						<li>
							<a href="#" class="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a>
						</li>
						<li>
							<a href="#" class="fa fa-google-plus wow fadeInUp" data-wow-delay="2s"></a>
						</li>
					</ul>
-->

				</div>

			</div>
		</div>
	</footer>


	<!-- Back top -->
	<a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a>



	<!-- =========================
     SCRIPTS
============================== -->

	<script src="{{asset('index/js/jquery.js')}}"></script>
	<script src="{{asset('index/js/bootstrap.min.js')}}"></script>
	<script src="{{asset('index/js/jquery.magnific-popup.min.js')}}"></script>
	<script src="{{asset('index/js/jquery.parallax.js')}}"></script>
	<script src="{{asset('index/js/owl.carousel.min.js')}}"></script>
	<script src="{{asset('index/js/smoothscroll.js')}}"></script>
	<script src="{{asset('index/js/wow.min.js')}}"></script>
	<script src="{{asset('index/js/custom.js')}}"></script>
    
    <script>
        $(document).ready(function(){
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
                (function(l,i,v,e,c,h,a,t){l['DenaLiveChatObject']=h;l[h]=l[h]||function(){
                    (l[h].q=l[h].q||[]).push(arguments)},l[h].l=1*new Date(),l[h].b=e;a=i.createElement(v),
                    t=i.getElementsByTagName(v)[0];a.async=1;a.src=e+c;t.parentNode.insertBefore(a,t);
                    })(window,document,'script','https://www.telegram.chat','/chat/loader.js','dlc');
                    dlc('create', '6f1c98a9754b4b9f8862189db4ebc790', {"bottom":"0px","right":"0px"});
            }
        });
    </script>

</body>

</html>
