@extends('layout.seller-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/profile/profile-complete.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item"><a href="{{route('profile_complementary')}}" class="active">
                    اطلاعات تکمیلی </a>
            </li>
            <li class="list-item"><a href="{{route('profile_basic')}}">
                    اطلاعات پایه
                </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">

        <section class="main-content col-xs-12">
            <form action="#" method="post" enctype="multipart/form-data">

                <div class="company_des col-xs-12">
                    <label>
                        شرح فعالیت من | شرکت:
                    </label>
                    <textarea name="company_name" v-model="currentUser.profile.description"></textarea>
                    <span v-if="errors.description" class="text-danger">@{{ errors.description[0] }}</span>
                </div>
                <div class="image_company col-xs-12 ">
                        <div class="col-xs-12 col-sm-6">
                            <label>
                                تصاویر مربوطه <span>(محصولات | شرکت | کارکنان)</span> </label>

                            <div class="row">
                                <div class="images-content col-xs-12">
                                    <article class="image-item col-xs-4">
                                        <a href="#"><i class="fa fa-close"></i></a>
                                        <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                    </article>

                                    <article class="image-item col-xs-4">
                                        <a href="#"><i class="fa fa-close"></i></a>
                                        <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                    </article>

                                    <article class="image-item col-xs-4">
                                        <a href="#"><i class="fa fa-close"></i></a>
                                        <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                    </article>

                                    <article class="image-item col-xs-4">
                                        <a href="#"><i class="fa fa-close"></i></a>
                                        <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                    </article>

                                    <article class="image-item col-xs-4">
                                        <a href="#"><i class="fa fa-close"></i></a>
                                        <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                    </article>

                                    <article class="image-item col-xs-4">
                                        <a href="#"><i class="fa fa-close"></i></a>
                                        <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                    </article>

                                    <article class="image-item col-xs-4">
                                        <a href="#"><i class="fa fa-close"></i></a>
                                        <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                    </article>

                                    <article class="image-item col-xs-4">
                                        <a href="#"><i class="fa fa-close"></i></a>
                                        <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                    </article>

                                    <article class="image-item col-xs-4">
                                        <a href="#"><i class="fa fa-close"></i></a>
                                        <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                    </article>

                                </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <label>
                            افزودن تصاویر مربوطه <span>(محصولات | شرکت | کارکنان)</span> </label>
                        <input type="file" ref="relatedFiles" id="file" multiple
                               v-on:change="handleRelatedFilesUpload()" accept="image/*">
                    </div>
                </div>
                <div class="image_certif  col-xs-12">
                    <div class="col-xs-12 col-sm-6">
                        <label>
                            تصاویر مربوطه <span>(محصولات | شرکت | کارکنان)</span> </label>

                        <div class="row">
                            <div class="images-content col-xs-12">
                                <article class="image-item col-xs-4">
                                    <a href="#"><i class="fa fa-close"></i></a>
                                    <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                </article>

                                <article class="image-item col-xs-4">
                                    <a href="#"><i class="fa fa-close"></i></a>
                                    <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                </article>

                                <article class="image-item col-xs-4">
                                    <a href="#"><i class="fa fa-close"></i></a>
                                    <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                </article>

                                <article class="image-item col-xs-4">
                                    <a href="#"><i class="fa fa-close"></i></a>
                                    <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                </article>

                                <article class="image-item col-xs-4">
                                    <a href="#"><i class="fa fa-close"></i></a>
                                    <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                </article>

                                <article class="image-item col-xs-4">
                                    <a href="#"><i class="fa fa-close"></i></a>
                                    <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                </article>

                                <article class="image-item col-xs-4">
                                    <a href="#"><i class="fa fa-close"></i></a>
                                    <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                </article>

                                <article class="image-item col-xs-4">
                                    <a href="#"><i class="fa fa-close"></i></a>
                                    <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                </article>

                                <article class="image-item col-xs-4">
                                    <a href="#"><i class="fa fa-close"></i></a>
                                    <img src="{{asset('assets/img/back2.jpg')}}" alt="">
                                </article>

                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <label>
                            گواهی های مربوطه <span>(گواهی های ثبت شرکت | گواهی های استاندارد محصول)</span> </label>

                        <input type="file" multiple ref="certificateFiles" v-on:change="handleCertificateFilesUpload()"
                               accept="image/*">
                    </div>
                </div>
                <input class="green-bot" value="ثبت تغییرات" type="button" @click="RegisterComplementaryProfileInfo">
            </form>

        </section>
    </main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/imageuploadify.min.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/profile/profile-complete.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/profile/api-complementary.js')}}"></script>

@endsection
