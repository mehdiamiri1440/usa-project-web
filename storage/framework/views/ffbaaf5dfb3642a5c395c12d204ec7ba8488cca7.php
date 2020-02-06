<?php $__env->startSection('header_links'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('index/css/style2.css')); ?>">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('meta_description'); ?>
    خرید و فروش مستقیم محصولات کشاورزی
<?php $__env->stopSection(); ?>

<?php $__env->startSection('meta_keywords'); ?>
    محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,باسکول
<?php $__env->stopSection(); ?>
<?php $__env->startSection('title'); ?>
    باسکول | بازارگاه کشاورزی
<?php $__env->stopSection(); ?>

<?php $__env->startSection('main_content'); ?>

    <!-- =========================
    INTRO SECTION
    ============================== -->


    <section id="intro" class="parallax-section">
        <div class="particle-network-animation"></div>
        <div class="container-fluid main_hero_section col-xs-12">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="wow fadeIn main-logo" data-wow-delay="1s"><img
                                    src="<?php echo e(asset('/index/images/logo_white.png')); ?>">
                        </h1>
                        <h2 class="wow fadeIn" data-wow-delay="1.2s">باسکول | سامانه خرید و فروش عمده محصولات
                            کشاورزی</h2>
                    </div>
                    <div class="col-xs-12">

                        <div class="search_input col-xs-12 col-sm-8 col-sm-offset-2">
                            <input type="text" placeholder="محصول مورد نظر خود را جستجو کنید" v-model="mainSearchBoxText">
                            <button class="fa fa-search" @click="search"></button>
                        </div>

                    </div>
                    <div class="col-xs-12">
                        <a href="<?php echo e(route('login_page')); ?>" class="btn btn-purple  smoothScroll wow fadeInUp"
                           data-wow-delay="1.4s">ورود به سامانه</a>
                        <a href="/product-list" class="btn btn-green smoothScroll wow fadeInUp "
                           data-wow-delay="1.4s"> لیست محصولات</a>
                    </div>
                    <div class="col-xs-12">
                        <div class="mouse-animation">
                            <a href="#detail"> <span class="fa fa-angle-down"></span></a>
                        </div>
                    </div>


                </div>
            </div>

        </div>


    </section>


    <!-- =========================
   mobile sliders
    ============================== -->

    
    <section class="parallax-section hidden-sm hidden-md hidden-lg">
        <div class="container">
            <div class="row">
                <h3 class="text-center col-xs-12"> خرما</h3>
                <div class="text-center col-xs-12">
                    <a href="/product-list" class="green-bot">
                        مشاهده همه محصولات
                    </a>
                </div>
                <div class="owl-carousel col-xs-12">

                    <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                        <image-viewer
                                :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                :img="'storage/' + product.photos[0].file_path"
                                :link="'/product-list/' + product.main.sub_category_name"
                        >
                        </image-viewer>
                    </article>

                </div>
            </div>
        </div>
    </section>
    



    
    <section class="parallax-section hidden-sm hidden-md hidden-lg">
        <div class="container">
            <div class="row">
                <h3 class="text-center col-xs-12"> برنج</h3>
                <div class="text-center col-xs-12">
                    <a href="/product-list" class="green-bot">
                        مشاهده همه محصولات
                    </a>
                </div>
                <div class="owl-carousel col-xs-12">

                    <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                        <image-viewer
                                :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                :img="'storage/' + product.photos[0].file_path"
                                :link="'/product-list/' + product.main.sub_category_name"
                        >
                        </image-viewer>
                    </article>

                </div>
            </div>
        </div>
    </section>
    









    <!-- =========================
    DETAIL SECTION
    ============================== -->

    <section id="detail" class="parallax-section">
        <div class="container">

            <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                <div class="detail-thumb">
                    <img src="<?php echo e(asset('index/images/1.png')); ?>" class="img-responsive">
                    <h4>خرید و فروش بی واسطه</h4>
                </div>
            </div>

            <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                <div class="detail-thumb">
                    <img src="<?php echo e(asset('index/images/2.png')); ?>" class="img-responsive">
                    <h4>گسترش ارتباط تجاری</h4>
                </div>
            </div>

            <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                <div class="detail-thumb">
                    <img src="<?php echo e(asset('index/images/3.png')); ?>" class="img-responsive">
                    <h4>یافتن شرکای مطمئن</h4>
                </div>
            </div>


            <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                <div class="detail-thumb">
                    <img src="<?php echo e(asset('index/images/4.png')); ?>" class="img-responsive">
                    <h4>پرداخت مطمئن و آسوده</h4>
                </div>
            </div>
            <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                <div class="detail-thumb">
                    <img src="<?php echo e(asset('index/images/5.png')); ?>" class="img-responsive">
                    <h4>بازرسی و نظارت محصول</h4>
                </div>
            </div>
            <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                <div class="detail-thumb">
                    <img src="<?php echo e(asset('index/images/6.png')); ?>" class="img-responsive">
                    <h4>افزایش اعتماد و شفافیت</h4>
                </div>
            </div>
        </div>

    </section>

    <!-- =========================
    SERVICES SECTION
    ============================== -->

    <section id="services" class="parallax-section">
        <div class="container">
            <div class="row">
                <h2>خدمات باسکول</h2>
                <div class="col-xs-12 col-sm-6">
                    <div class="title_image_service">
                        <img src="<?php echo e(asset('index/images/buyer.jpg')); ?>" alt="">
                    </div>
                    <div class="contents_service text-center">
                        <h3 class="title_service">
                            خدمات خریداران و تجار
                        </h3>
                        <div class="content_service">
                            <ul>
                                <li><span>استعلام قیمــت از تامیــن کننــدگان و کشــاورزان</span>
                                </li>
                                <li><span>استفـــاده از خدمات نظارت و بازرســی محصـــول</span>
                                </li>
                                <li><span>ساخت پروفایل تجــاری جهــت انجــام معامــلات</span>
                                </li>
                                <li><span>پرداخــت امن، آســوده و نقدی بصورت الکترونیکی</span>
                                </li>
                                <li><span>دستـرسی گستــرده به کشـاورزان و تولیـد کننـدگان</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="title_image_service">
                        <img src="<?php echo e(asset('index/images/seller.jpg')); ?>" alt="">
                    </div>
                    <div class="contents_service text-center">
                        <h3 class="title_service">
                            خدمات تامین کنندگان

                        </h3>
                        <div class="content_service">
                            <ul>
                                <li><span>ساخت پروفایل حرفه ای جهــت فروش محصـولات</span>
                                </li>
                                <li><span>دسترســـی به خریــداران واقعــی جهــت فروش</span>
                                </li>
                                <li><span>امکــان عقـــد قرارداد جهــت فروش محصــولات</span>
                                </li>
                                <li><span>بهره گیری از پرداخت کاملا نقـدی برای معامـــلات</span>
                                </li>
                                <li><span>بهره مندی از مشاوره تخصصی کارشناسان باسکول</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <!-- =========================
     WEB RICE AND DATE SLIDER
    ============================== -->

    <section id="request"  class="parallax-section  hidden-xs">
        <div class="container">
            <div class="row">
                <h3 class="text-center col-xs-12"> خرما</h3>
                <div class="text-center col-xs-12">
                    <a href="/product-list" class="green-bot">
                        مشاهده همه محصولات
                    </a>
                </div>
                <div class="owl-carousel col-xs-12">

                    <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                        <image-viewer
                                :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                :img="'storage/' + product.photos[0].file_path"
                                :link="'master/product-list/' + product.main.sub_category_name"
                        >
                        </image-viewer>
                    </article>

                </div>
            </div>
        </div>
    </section>

    <section  class="parallax-section  hidden-xs">
        <div class="container">
            <div class="row">
                <h3 class="text-center col-xs-12"> برنج</h3>
                <div class="text-center col-xs-12">
                    <a href="/product-list" class="green-bot">
                        مشاهده همه محصولات
                    </a>
                </div>
                <div class="owl-carousel col-xs-12">

                    <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                        <image-viewer
                                :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                :img="'storage/' + product.photos[0].file_path"
                                :link="'/product-list/' + product.main.sub_category_name"
                        >
                        </image-viewer>
                    </article>

                </div>
            </div>
        </div>
    </section>

    <section  class="parallax-section  hidden-xs">
        <div class="container">
            <div class="row">
                <h3 class="text-center col-xs-12"> برنج</h3>
                <div class="text-center col-xs-12">
                    <a href="/product-list" class="green-bot">
                        مشاهده همه محصولات
                    </a>
                </div>
                <div class="owl-carousel col-xs-12">

                    <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                        <image-viewer
                                :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                :img="'storage/' + product.photos[0].file_path"
                                :link="'/product-list/' + product.main.sub_category_name"
                        >
                        </image-viewer>
                    </article>

                </div>
            </div>
        </div>
    </section>


    <!-- =========================
    TESTIMONIAL SECTION
    ============================== -->

    <section id="testimonial" class="">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class=" wow bounceIn col-xs-12 col-sm-6">
                    <div class="section-title">
                        <figure>
                            <img src="<?php echo e(asset('index/images/farmer.png')); ?>" class="img-responsive"
                                 alt="feature"></figure>
                        <h3><span>50</span>
                            تامین کننده تایید شده
                        </h3>
                    </div>
                </div>
                <div class=" wow bounceIn col-xs-12 col-sm-6">
                    <div class="section-title">
                        <figure>
                            <img src="<?php echo e(asset('index/images/current.png')); ?>" class="img-responsive"
                                 alt="feature"></figure>
                        <h3>
                            <span>10</span>
                            پروژه موفق انجام شده
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- =========================
    RECENT BLOG POSTS SECTION
    ============================== -->
    <section  class="parallax-section ">
        <div class="container">
            <div class="row">
                <h2 class="text-center col-xs-12"> وبلاگ باسکول</h3>
                <div class="owl-carousel col-xs-12">

                    <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                        <image-viewer
                                :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                :img="'storage/' + product.photos[0].file_path"
                                :link="'/product-list/' + product.main.sub_category_name"
                        >
                        </image-viewer>
                    </article>

                </div>
            </div>
        </div>
    </section>


<?php $__env->stopSection(); ?>


<?php $__env->startSection('script_tags'); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('index', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>