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
    <link rel="stylesheet" href="<?php echo e(asset('index/css/bootstrap.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('index/css/all.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('index/css/style.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/css/503.css')); ?>"> 

</head>

<body >

    <div class="container-fluid text-center page-wrapper">
        <div class="container">
            
            <div class="header-section">
                <h1 >
                    بروز رسانی
                </h1>
                <p>
                  <?php echo e(json_decode(file_get_contents(storage_path('framework/down')), true)['message']); ?>

                </p>
            </div>
            <div class="main-content-wrapper">
    
                <div class="text-center text-rtl main-text-wrapper">
                        <p>
                        5<span>0</span>3
                        </p>
                </div>   
                <div class="text-center logo-wrapper">
                    <img src="<?php echo e(url('assets/img/plug.png')); ?>">
                </div>
            </div>
        
        </div>
    </div>
    <div class="footer-section text-center">
        <p class="contact-us">
            تماس با پشتیبانی باسکول
                    </p>
        <div class="phone-section">
            ‌09118413054 / 09178928266
        </div>
        <ul class="social-icon">
            <li>
              <a
                href="https://www.instagram.com/buskool.ir/"
                class="fab fa-instagram wow"
              ></a>
            </li>

            <li>
              <a
                href="https://t.me/buskool"
                class="fab fa-telegram wow"
              ></a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/company/27058131/ "
                class="fab fa-linkedin wow"
              ></a>
            </li>

            <li>
              <a
                href="https://twitter.com/buskool_BS"
                class="fab fa-twitter wow"
              ></a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/buskool1/"
                class="fab fa-facebook wow"
              ></a>
            </li>
          </ul>
    </div>

</body>

</html>
