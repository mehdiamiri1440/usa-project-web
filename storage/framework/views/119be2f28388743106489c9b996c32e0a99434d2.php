<?php $__env->startSection('header_links'); ?>
    <link type="text/css" rel="stylesheet" href="<?php echo e(asset('assets/css/dashboard/profile/profile-basic.css')); ?>">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('sub_header'); ?>
    <div class="sub-header">
        <ul class="list-inline">
             <li class="list-item"><a href="<?php echo e(route('profile_complementary')); ?>">
                اطلاعات تکمیلی </a>
            </li>
            <li class="list-item"><a href="<?php echo e(route('profile_basic')); ?>" class="active">
                اطلاعات پایه
            </a>
            </li>

        </ul>
        
            
        
    </div>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('main_content'); ?>
    <main id="main">
    <section class="main-content col-xs-12">
        <form action="#" method="post" enctype="multipart/form-data">
            <div class="img-profile col-md-3">
                <div class="image-input">
                    <div v-if="currentUser.profile.profile_photo">
                        <img v-bind:src=" '<?php echo e(url('/storage/')); ?>/' + currentUser.profile.profile_photo" id="blah" alt="تصویر پروفایل">
                    </div>
                    <div v-else>
                        <img src="<?php echo e(asset('assets/img/user-defult.png')); ?>" id="blah">
                    </div>  

                    <div class="submit">
                        <input type="file" id="imgInp" ref="profilePhoto">
                        <label>ویرایش تصویر</label>
                        <br/>
                        <span v-if="errors.profile_photo" class="text-danger tex-left" >{{ errors.profile_photo[0] }}</span>
                    </div>
                </div>
            </div>

            <div class="main-profile col-md-9">
                <div class="kind_user col-xs-12">
                    <label class="header-lable  ">
                        نوع کاربری 
                    </label>
                    <div class="col-md-4 col-xs-6 ">
                        حقیقی <input class="check_box_en" onclick="disable_form();" type="radio" name="kind_user" value="0" v-model="currentUser.profile.is_company">
                        <i class="fa fa-check"></i>
                    </div>
                    <div class="col-md-4 col-xs-6 ">
                        حقوقی <input class="check_box_en" onclick="enable_form();" type="radio" name="kind_user" value="1" v-model="currentUser.profile.is_company">
                        <i class="fa fa-check"></i>
                    </div>
                    <span v-if="errors.is_company" class="text-danger" >{{ errors.is_company[0] }}</span>
                </div>
                <div class="user-form col-xs-12">

                    <label class="header-lable">
                        مشخصات کاربری
                    </label>

                    <div class="col-sm-6">
                        <label for="co-num" class="content-lable">
                            شماره ثبت شرکت:
                        </label>
                        <input type="text" id="co-num" name="company-number" placeholder="شماره ثبت شرکت" v-model="currentUser.profile.company_register_code" disabled="disabled">
                        <span v-if="errors.company_register_code" class="text-danger">{{ errors.company_register_code[0] }}</span>
                    </div>
                    <div class="col-sm-6">
                        <label for="company" class="content-lable">
                            نام شرکت:
                        </label>
                        <input type="text" id="company" name="company" placeholder="نام شرکت" v-model="currentUser.profile.company_name" disabled>
                        <span v-if="errors.company_name" class="text-danger" >{{ errors.company_name[0] }}</span>
                    </div>

                    <div class="col-sm-6">

                        <label for="company" class="content-lable">
                            شماره تماس:
                        </label>
                        <input type="text" name="tel" placeholder="شماره تماس" v-model="currentUser.profile.public_phone">
                        <span v-if="errors.public_phone" class="text-danger" >{{ errors.public_phone[0] }}</span>
                    </div>
                    <div class="col-sm-6">

                        <label for="company" class="content-lable">
                            آدرس:
                        </label>
                        <input type="text" name="address" placeholder="آدرس" v-model="currentUser.profile.address">
                        <span v-if="errors.address" class="text-danger" >{{ errors.address[0] }}</span>
                    </div>
                    <div class="col-xs-12">
                        <input type="button" class="green-bot" name="submit" value="ثبت تغییرات" v-on:click="RegisterBasicProfileInfo">
                    </div>
                </div>
            </div>

        </form>
    </section>
</main>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('body_script_tags'); ?>
    <script src="<?php echo e(asset('assets/js/dashboard/profile/profile-basic.js')); ?>"></script>
    <script src="<?php echo e(asset('assets/js/dashboard/profile/api-basic.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.buyer-dashboard', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>