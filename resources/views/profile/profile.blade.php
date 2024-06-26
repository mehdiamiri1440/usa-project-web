@extends('layout.master3')

@section('header_links')
    <script src="{{asset('assets/js/owl.carousel.min.js')}}" xmlns:v-bind="http://www.w3.org/1999/xhtml"
            xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml"
            xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml"></script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/profile/main-profile.css')}}">
    <meta name="description"
          content="صفحه ی شخصی پروفایل کاربران باسکول. محصولات کشاورزی و تصاویر محصولات من را در این صفحه مشاهده کنید">

    <meta property="og:site_name" content="باسکول">
    <meta property="og:title" content="{{$full_name}}"/>
    <meta property="og:description" content="صفحه ی شخصی پروفایل کاربران باسکول"/>

    @if($profile_photo)
        <meta property="og:image" itemprop="image" content="{{asset('storage/'.$profile_photo)}}">
        <meta property="og:image:secure_url" itemprop="image" content="{{asset('storage/'.$profile_photo)}}">
    @else
        <meta property="og:image" itemprop="image" content="{{asset('assets/img/logo-inco-mobile.png')}}">
        <meta property="og:image:secure_url" itemprop="image" content="{{asset('assets/img/logo-inco-mobile.png')}}">
    @endif

    <meta property="og:image:type" content="image/jpeg"/>
    <meta property="og:image:width" content="256"/>
    <meta property="og:image:height" content="256"/>
    <meta property="og:url" content="{{'https://www.buskool.com/profile/' . $user_name}}"/>
    <meta property="og:type" content="profile"/>
    <meta property="og:profile:first_name" content="{{$full_name}}"/>

@endsection

@section('title')
    نمایش پروفایل
@endsection
@section('page_title')
    نمایش پروفایل
@endsection

@section('main_content')

    <main id="main" class="col-sm-12">
        <section class="main-content container">
            <div class="main-content-item" v-if="profileOwner.user_info">
                <div class="header-content col-xs-12">
                    <div class="image_user_wrapper col-xs-4">
                        <div class="user-image">
                            <div v-if="profileOwner.profile.profile_photo">
                                <img v-bind:src=" '{{url('storage')}}/' + profileOwner.profile.profile_photo">
                            </div>
                            <div v-else>
                                <img src="{{asset('assets/img/user-defult.png')}}" class="image_defult">
                            </div>
                        </div>
                    </div>
                    <div class="info_user_wrapper_mobile  hidden-sm hidden-md hidden-lg col-xs-8 col-sm-4">
                        <div class="row" v-if="profileOwnerStatistics">
                            <div class="col-xs-6 text-center">
                                <div class="info-num">
                                    @{{profileOwnerStatistics.transaction_count}}
                                </div>
                                معاملات
                            </div>
                            <div class="col-xs-6 text-center" v-if="profileOwner.user_info.is_seller">
                                <div class="info-num">
                                    @{{profileOwnerStatistics.product_count}}
                                </div>
                                محصولات
                            </div>
                            <div class="col-xs-6 text-center" v-else-if="profileOwner.user_info.is_buyer">
                                <div class="info-num">
                                    @{{profileOwnerStatistics.buyAd_count}}
                                </div>
                                درخواست ها
                            </div>
                            <div class="col-xs-12">
                                <div v-if="currentUser.user_info">
                                    <a href="/dashboard" class="green_bot edit" v-if="currentUser.user_info.id == profileOwner.user_info.id">
                                    <i class="fa fa-pencil-alt"></i>
                                    ویرایش پروفایل
                                </a>
                                </div>

                                <a href="#" class="green_bot " @click="copyProfileLinkToClipBoard"><i
                                            class="fa fa-whatsapp"></i> اشتراک در واتس آپ </a>
                            </div>
                        </div>
                    </div>
                    <div class="content_user_wrapper hidden-xs col-xs-6 col-sm-8">
                        <div class="user-contents ">
                            <div class="title_content col-xs-12">
                                <div class="back_page col-xs-12 col-sm-4">
                                    <a href="javascript:history.back()" class="green_bot">بازگشت به صفحه قبل</a>

                                </div>

                                <h1 class="content_title col-xs-12 col-sm-8">@{{profileOwner.user_info.first_name + ' '
                                    + profileOwner.user_info.last_name}}</h1>

                            </div>
                            <div class="title_content col-xs-12">

                                <div class="back_page col-xs-12 col-sm-4">
                                        <a href="/dashboard" class="green_bot edit" v-if="currentUser.user_info && currentUser.user_info.id == profileOwner.user_info.id">
                                        <i class="fa fa-pencil-alt"></i>
                                        ویرایش پروفایل
                                    </a>

                                    <button class="btn btn-copy" @click="copyProfileLinkToClipBoard"
                                            :value="copyLinkText"> <i :class="copyLinkClass"
                                                                                        aria-hidden="true"></i>  @{{copyLinkText}}</button>
                                </div>

                                <div class="content_user_info col-xs-12 col-sm-8">
                                    <p>
                                        حوزه ی فعالیت : <span>
                                    @{{profileOwner.activity_domain}}
                            </span>
                                    </p>
                                    <p>
                                        آدرس : <span>
                               @{{profileOwner.user_info.province + ' - ' + profileOwner.user_info.city}}
                                </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_user_wrapper_mobile hidden-sm hidden-md hidden-lg col-xs-12">
                        <div class="user-contents ">
                            <div class="title_content col-xs-12">

                                <div class="back_page col-xs-12 col-sm-4">
                                    <button class="btn btn-copy" @click="copyProfileLinkToClipBoard"
                                            :value="copyLinkText"> <i :class="copyLinkClass"
                                                                                        aria-hidden="true"></i> @{{copyLinkText}} </button>
                                    <a href="#" class="green_bot edit" @click="copyProfileLinkToClipBoard"><i
                                                class="fa fa-pencil-alt"></i> ویرایش پروفایل </a>
                                </div>
                                <h1 class="content_title col-xs-12 col-sm-8">@{{profileOwner.user_info.first_name + ' '
                                    + profileOwner.user_info.last_name}}</h1>

                                <div class="content_user_info col-xs-12 col-sm-8">
                                    <p>
                                        حوزه ی فعالیت : <span>
                                    @{{profileOwner.activity_domain}}
                            </span>
                                    </p>
                                    <p>
                                        آدرس : <span>
                               @{{profileOwner.user_info.province + ' - ' + profileOwner.user_info.city}}
                                </span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="info-section hidden-xs col-xs-12">
                    <div class="contents-info-num  col-sm-3">
                        <p>
                            021-71053525 </p>
                    </div>
                    <div class="contents-info col-sm-9">
                        <p>
                            جهت برقراری ارتباط با این فرد لطفا با کارشناسان باسکول تماس بگیرید.
                        </p>
                    </div>
                </div>
                <div class="sub-header hidden-sm hidden-md hidden-lg  col-xs-12">
                    <div class="col-xs-6" :class="{'active':profileDescription}">
                        <a @click="
                            showProfileOwnerDescription($event)" href="">
                            <div class="inside-links">

                                <i class="fa fa-edit" aria-hidden="true"></i> توضیحات من

                            </div>
                        </a>
                    </div>
                    <div v-if="profileOwner.user_info.is_seller == 1" class="col-xs-6"
                         :class="{'active':!profileDescription}"><a @click="
                            showProfileOwnerProducts($event)" href="">
                            <div class="inside-links">

                                <i class="buskool-icon" aria-hidden="true"><img
                                            src="{{asset('assets/img/lo.png')}}"></i> محصولات من
                            </div>
                        </a>
                    </div>
                </div>
                <div class="sub-header hidden-xs col-xs-12">
                    <ul class="list-inline">
                        <li v-if="profileOwner.user_info.is_seller == 1" class="list-item"
                            :class="{'active':!profileDescription}"><a @click="
                            showProfileOwnerProducts($event)" href="">
                                محصولات من </a>
                        </li>

                        <li class="list-item" :class="{'active':profileDescription}"><a @click="
                            showProfileOwnerDescription($event)" href="">
                                توضیحات من
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="contents col-xs-12" v-if="profileDescription == true">
                    <div class="des col-xs-12">
                        <p class="title-content">
                            توضیحات
                        </p>
                        <div class="description"
                             style="white-space:pre-wrap">@{{profileOwner.profile.description}}
                        </div>
                    </div>
                    <div class="cerificates col-xs-12">
                        <p class="title-content">
                            عکس های مرتبط :
                        </p>
                        <div v-if="profileOwner.relateds[0]">

                            <popup-certificate
                                    v-for="photo in profileOwner.relateds"
                                    class="ceteficate-image col-xs-6 hidden-sm hidden-md hidden-lg"
                                    base="{{url('storage')}}/"
                                    :img="photo">
                            </popup-certificate>

                            <div class="owl-carousel hidden-xs">
                                <image-viewer
                                        v-for="photo in profileOwner.relateds"
                                        base="{{url('storage')}}/"
                                        :img="photo">
                                </image-viewer>
                            </div>
                        </div>
                        <div class="wrapper_no_pic" v-else>
                            <div class="content_no_pic"><i class="fa fa-picture-o"></i></div>
                            <div class="text_no_pic"><p>تصویری ثبت نشده است</p></div>
                        </div>
                    </div>
                    <div class="cerificates col-xs-12">
                        <p class="title-content">
                            مدارک من :
                        </p>
                        <div v-if="profileOwner.certificates[0]">
                            <article v-for="photo in profileOwner.certificates"
                                     class="ceteficate-image col-xs-6 hidden-sm hidden-md hidden-lg">
                                <a :href="'/storage/' + photo"> <img :src="'/storage/' + photo"/></a>
                            </article>
                            <div class="owl-carousel hidden-xs">
                                <image-viewer v-for="photo in profileOwner.certificates"
                                              base="{{url('storage')}}/"
                                              :img="photo">
                                </image-viewer>
                            </div>
                        </div>
                        <div class="wrapper_no_pic" v-else>
                            <div class="content_no_pic"><i class="fa fa-picture-o"></i></div>
                            <div class="text_no_pic"><p>مدارکی ثبت نشده است</p></div>
                        </div>
                    </div>

                </div>
                <div class="contents" v-else>
                    <div v-if="products.length > 0">
                        <article class="article-contents   col-xs-12" v-for="product in products" :key="product.main.id">
                            <div class="image_user_wrapper hidden-sm hidden-md hidden-lg col-xs-12">
                                <div class="user-image-content">
                                    <div v-if="profileOwner.profile.profile_photo">
                                        <img v-bind:src=" '{{url('storage')}}/' + profileOwner.profile.profile_photo">
                                    </div>
                                    <div v-else>
                                        <img src="{{asset('assets/img/user-defult.png')}}" class="image_defult">
                                    </div>
                                </div>
                                <h3 class="content_title_mobile ">@{{profileOwner.user_info.first_name + ' '
                                    + profileOwner.user_info.last_name}} <span class="zone_content_title">
                                    @{{profileOwner.activity_domain}}
                            </span></h3>
                            </div>
                            <div class="image-article-content col-xs-12 col-md-5">
                                <div class="main-image col-xs-12" v-if="product.photos.length > 0">

                                    <div class="owl-carousel" v-if="product.photos.length > 0">
                                        <image-viewer-list
                                                v-for="photo in product.photos"
                                                base="{{url('storage')}}/"
                                                :img="photo.file_path">
                                        </image-viewer-list>
                                    </div>
                                </div>
                            </div>
                            <div class="main-article-content col-xs-12 col-md-7">
                                <div class="main-article-title-content">
                                    <h2 class="main-article-title">
                                        <a href="#">@{{product.main.category_name + ' - ' +
                                            product.main.sub_category_name}}</a>
                                    </h2>
                                    <div v-if="currentUser.user_info">
                                        <button v-if="product.main.myuser_id == currentUser.user_info.id"
                                                class="main-green-button" @click="refreshProduct(product.main.id)">
                                            بروزرسانی <i class="fa fa-refresh"></i></button>
                                    </div>
                                </div>
                                <table class="table table-striped">
                                    <tr>
                                        <td>نوع محصول:</td>
                                        <td>@{{product.main.product_name}}</td>
                                    </tr>
                                    <tr>
                                        <td>موجودی<span class="">(کیلوگرم)</span> :</td>
                                        <td>@{{product.main.stock}}</td>
                                    </tr>
                                    <tr>
                                        <td>قیمت واحد<span class="">(هر کیلو به تومان)</span> :</td>
                                        <td> @{{product.main.min_sale_price + ' - ' + product.main.max_sale_price}}</td>
                                    </tr>
                                    <tr>
                                        <td> حداقل سفارش<span class="">(کیلوگرم)</span> :</td>
                                        <td> @{{product.main.min_sale_amount}}</td>
                                    </tr>
                                    <tr>
                                </table>
                                <p>توضیحات: <span>@{{product.main.description}}</span></p>
                            </div>

                        </article>
                    </div>
                    <div class="col-xs-12" v-if="products.length == 0 && !loading">
                        <div class="col-xs-12" v-if="products.length == 0 && !loading">
                            <div class="wrapper_no_pro">
                                <div class="content_no_pic"><i class="fa fa-list-alt"></i></div>
                                <div class="text_no_pic"><p>محصولی ثبت نشده است</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="loading_images  col-xs-12" v-show="loading">
                        <img src="{{asset('assets/img/gif/loading.gif')}}" style="width:200px;height:200px">
                    </div>
                </div>

            </div>

        </section>
    </main>


@endsection

@section('script_tags')
    <script>
        var userName = "{{$user_name}}";
    </script>
    <script src="{{asset('assets/js/profile/main-profile.js')}}"></script>
    <script src="{{asset('assets/js/profile/api-main-profile.js')}}"></script>
@endsection

