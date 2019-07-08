<?php $__env->startSection('header_links'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('index/css/style2.css')); ?>">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('meta_description'); ?>
    خرید و فروش مستقیم محصولات کشاورزی
<?php $__env->stopSection(); ?>

<?php $__env->startSection('meta_keywords'); ?>
    محصولات کشاورزی,خرید مستقیم صیفی,فروشگاه آنلاین کشاورزی,اینکوباک
<?php $__env->stopSection(); ?>
<?php $__env->startSection('title'); ?>
    اینکوباک | بازارگاه کشاورزی
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
                        <h2 class="wow fadeIn" data-wow-delay="1.2s">اینکوباک | سامانه خرید و فروش عمده محصولات
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
                        <a href="master/#/product-list" class="btn btn-green smoothScroll wow fadeInUp "
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
                <h2>خدمات اینکوباک</h2>
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
                                <li><span>بهره مندی از مشاوره تخصصی کارشناسان اینکوباک</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <!-- =========================
     REQUERS
    ============================== -->

    <section id="request" class="parallax-section">
        <div class="container">
            <div class="row">
                <h3 class="text-center col-xs-12"> محصولات</h3>
                <div class="text-center col-xs-12">
                    <a href="master/#/product-list" class="green-bot">
                        مشاهده همه محصولات
                    </a>
                </div>
                <div class="owl-carousel col-xs-12">

                    <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                        <image-viewer
                                :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                :img="'storage/' + product.photos[0].file_path"
                                :link="'master/#/product-list/' + product.main.sub_category_name"
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
    <section id="recent" class="parallax-section">
        <div class="container">
            <div class="row">
                <h2 style="margin: 10px auto 20px ">وبلاگ اینکوباک</h2>
                <div class=" wow fadeIn  col-sm-4 animated" data-wow-delay="0.9s"
                     style="visibility: visible; animation-delay: 0.9s; animation-name: fadeIn;" v-for="post in posts">
                    <div class="detail-thumb">
                        <div class="img-thumb">
                            <img :src="post.img_url">
                        </div>
                        <h3>{{post.post_title}}</h3>
                        <p v-html="post.post_content.substr(0,150) + '...'"></p>
                        <a :href="post.guid" class="btn-incobac">بیشتر بخوانید ...</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- =========================
    FAQ SECTION
    ============================== -->

    <section id="faq" class="parallax-section">
        <div class="container">
            <div class="row">

                <div class="wow bounceIn col-md-12 col-sm-12 text-center">
                    <div class="section-title">
                        <h2>سئوالات متداول شما چیست ؟</h2>

                    </div>
                </div>

                <div class="wow fadeInUp col-xs-12" data-wow-delay="0.9s">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                       aria-expanded="false" aria-controls="collapseOne">
                                        بازارگاه الکترونیکی چیست؟
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                                 aria-labelledby="headingOne">
                                <div class="panel-body">
                                    <p> بازارگاه الکترونیکی یک بستر تجارت نوین است که فروشندگان و خریداران را به هم متصل می
                                        کند.
                                        پیش از این بسیاری از خریداران و فروشندگان در پیدا کردن یکدیگر مشکل داشتند، لذا
                                        بازارگاه یک کارایی مهم در یک بازار ناکارآمد را ایجاد می کند. </p>
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                                       aria-expanded="false" aria-controls="collapseTwo">
                                        تعرفه های ثبت آگهی در اینکوباک چگونه است؟
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                                 aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <p>تمامی خدمات از جمله ثبت آگهی،ساخت پروفایل شخصی، مشاهده ی اطلاعات افراد و مشاوره ی
                                        خرید و فروش در سامانه اینکوباک رایگان است.</p>
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion"
                                       href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        چرا باید پروفایل خود را تکمیل کنم؟
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                                 aria-labelledby="headingThree">
                                <div class="panel-body">
                                    <p>تکمیل پروفایل یکی از ارکان مهم اعتماد سازی و ایجاد تمایز نسب به رقبا، در تجارت است.
                                        در اینکوباک این فضا فراهم شده تا خریداران و تامین کنندگان اطلاعات شخصی و شرکت خود،
                                        سابقه فعالیت و توضیحات مربوط به کسب و کار خود را ارائه دهند. تمامی توضیحات و مواردی
                                        که برای جذب خریداران و فروشندگان بالقوه لازم است را می توانید در صفحه شخصی خود ارائه
                                        دهید.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>


<?php $__env->stopSection(); ?>


<?php $__env->startSection('script_tags'); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('index', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>