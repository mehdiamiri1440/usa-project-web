<!DOCTYPE html>
<html lang="fa">

<head>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="description" content="Responsive Personal One Page Portfolio">
	<meta name="keywords" content="Responsive, Personal, One Page Portfolio, Freelancers, Template">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- site title -->
	<title>اینکوباک | قوانین و مقررات</title>
    
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
	<link rel="stylesheet" href="{{asset('index/css/privacy-policy-style.css')}}">


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
						<h2>قوانین و مقررات</h2>
					</div>
                            
                        <p class="text-right">اینکوباک، بستر تجاری آنلاین است که از طریق آن هر کاربر ثبت شده می تواند برای برقراری و حفظ، توسعه کسب و کار با دیگر تولید کنندگان و خریداران همکاری کند. شرایط و مقررات تشکیل شده در این صفحه مشخص می کند که چگونه باید وب سایت و خدمات مورد استفاده قرار گیرد و نهایتا روابط فی مابین اینکوباک و کاربران (ثبت شده یا ثبت نشده) آن را تنظیم میکند. لطفاً شرایط و مقررات حاضر را به دقت مطالعه کنید و در صورتی که قوانین وب سایت برای شما قابل قبول نیست استفاده خود را از وب سایت و یا خدمات اینکوباک به هر نحو متوقف کنید.
در استفاده از خدمات وب سایت اینکوباک فرض بر این است که عملاً این شرایط و مقررات و تغییرات بعدی آن را پذیرفته اید، در این صورت هیچ ادعایی ناشی از استفاده مداوم شما از این سایت و ادعای عدم مطالعه یا آگاهی شما از این مقررات و تغییرات بعدی آن مسموع نخواهد بود.
شرایط درج درخواست خرید یا فروش در سامانه اینکوباک: 
                    </p>
                        <ul class="text-right">
                            <li>درخواست ها باید زیر مجموعه حوزه کشاورزی و دسته بندی های موجود در وبسایت باشند.</li>
                            <li>عدم مغایرت با قوانین جمهوری اسلامی ایران، ناقض حریم خصوصی افراد ، هرگونه توهین به ادیان رسمی کشور، آداب، رسوم، قومیت‌ها، لهجه‌ها و گویش‌های مختلف.</li>
                            <li>عدم درج کالاهای ممنوعه مانند : ماریجوانا و مواد مخدر گیاهی و یا بذر و دانه آنها.</li>
                            <li>عدم درخواست کمک‌های نقدی یا پیش‌پرداخت برای معامله‌های از راه دور ، درج شماره حساب در متن آگهی.</li>
                            <li>نبود جملات نادرست از نظر املائی یا نگارشی در درخواست.</li>
                        </ul>
                    <p>
به منظور بهبود فرآیند تأیید و انتشار درخواست ها، سامانه اینکوباک ممکن است در مواردی بر اساس قوانین، متن درخواست شما را به طور جزئی تغییر دهد.
                        </p>
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
