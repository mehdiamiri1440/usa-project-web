@extends('layout.master')

@section('header_links')
    <script src="{{asset('assets/js/owl.carousel.min.js')}}" xmlns:v-bind="http://www.w3.org/1999/xhtml"
            xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml"></script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/profile/main-profile.css')}}">
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
                <div class="header-content col-sm-12">
                    <div class="image_user_wrapper col-xs-12 col-sm-4">
                        <div class="user-image">
                            <div v-if="profileOwner.profile.profile_photo">
                                <img v-bind:src=" '{{url('storage')}}/' + profileOwner.profile.profile_photo">
                            </div>
                            <div v-else>
                                <img src="{{asset('assets/img/user-defult.png')}}" class="image_defult">
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="user-contents ">
                            <div class="title_content col-xs-12">
                                <div class="back_page col-xs-12 col-sm-4">
                                    <a href="javascript:history.back()" class="green_bot">بازگشت به صفحه قبل</a>
                                </div>

                                <h1 class="content_title col-xs-12 col-sm-8">@{{profileOwner.user_info.first_name + ' ' + profileOwner.user_info.last_name}}</h1>

                            </div>

                            <div class="title_content col-xs-12">

                                <div class="back_page col-xs-12 col-sm-4">
                                    <button  class="btn btn-copy">    کپی آدرس   <i class="fa fa-clipboard" aria-hidden="true"></i> </button>
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

                </div>
                <div class="info-section col-xs-12">
                    <div class="contents-info-num  col-sm-3">
                        <p>
                            021-71053525 </p>
                    </div>
                    <div class="contents-info col-sm-9">
                        <p>
                            جهت برقراری ارتباط با این فرد لطفا با کارشناسان اینکوباک تماس بگیرید.
                        </p>
                    </div>
                </div>
                <div class="sub-header col-xs-12">
                    <ul class="list-inline">
                        <li v-if="profileOwner.user_info.is_seller == 1" class="list-item" :class="{'active':!profileDescription}"><a @click="
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
                             style="white-space:pre-wrap">@{{profileOwner.profile.description}}</div>
                    </div>
                    <div class="cerificates col-xs-12">
                        <p class="title-content">
                            عکس های مرتبط :
                        </p>
                        <div v-if="profileOwner.relateds[0]">
                            <div class="owl-carousel">
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
                            <div class="owl-carousel">
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
                        <article class="article-contents  col-xs-12" v-for="product in products">
                            <div class="main-article-content col-md-7">
                                <div class="main-article-title-content">
                                    <h2 class="main-article-title">
                                        <a href="#">@{{product.main.category_name + ' - ' + product.main.sub_category_name}}</a>
                                    </h2>
                                    <div v-if="currentUser.user_info">
                                         <button  v-if="product.main.myuser_id == currentUser.user_info.id" class="main-green_but" @click="refreshProduct(product.main.id)"> بروزرسانی <i class="fa fa-refresh"></i></button>
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
                                        <td> @{{product.main.min_sale_amount}} </td>
                                    </tr>
                                    <tr>
                                </table>
                                <p>توضیحات: <span>@{{product.main.description}}</span></p>
                            </div>
                            <div class="image-article-content col-md-5">
                                <div class="main-image col-xs-12" v-if="product.photos.length > 0">
                                    <popup v-if="product.photos[0]" v-for="photo in product.photos"
                                           base="{{url('storage')}}/" :img="photo.file_path">
                                    </popup>
                                </div>
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

