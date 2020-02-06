<?php $__env->startSection('header_links'); ?>
    <link rel="stylesheet" href="<?php echo e(asset('index/css/index_master.css')); ?>">
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


    <section id="intro" class="parallax-section">
        <div class="container-fluid main_hero_section col-xs-12">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1 class="wow fadeIn" data-wow-delay="1.2s">
                            ارتباط با ما
                        </h1>
                    </div>


                </div>
            </div>

        </div>


    </section>

    <section id="testimonial" class="parallax-section">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class=" wow bounceIn col-md-12 col-sm-12">
                    <p class="text-right">از هریک از راه های زیر که برایتان راحت تر است با ما در ارتباط باشید.</p>
                    <br/>
                    <ul class="text-right">
                        <li>شماره تماس  :‌09118413054 / 09178928266</li>
                        <li>ایمیل پشتیبانی :‌support@buskool.com</li>
                        <li>ایمیل شخصی مدیر فنی :‌ ali_delkhosh@ymail.com</li>
                        <li></li>
                    </ul>
                    
                    <p class="text-right">
                        سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل support@buskool.com با ما در میان بگذارید.
                    </p>
                </div>
            </div>
        </div>
    </section>


<?php $__env->stopSection(); ?>


<?php $__env->startSection('script_tags'); ?>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('index', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>