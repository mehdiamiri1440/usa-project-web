@extends('layout.master')

@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/buyer/product-list.css')}}">
    <script src="{{asset('assets/js/jquery.magnific-popup.min.js')}}"></script>
@endsection

@section('page_title')
    لیست محصولات
@endsection

@section('title')
    لیست محصولات
@endsection

@section('main_content')
    <div class="sub-header container-fluid">

        <div class="search-box col-sm-4 col-xs-12">
            <input type="text" placeholder="لطفا محصول مورد نظر خود را جستجو کنید" v-model="searchText">
            <button><i class="fa-search fa"></i></button>
        </div>
        <div class="links-sub-header col-xs-12 col-sm-8 col-md-5">
            <ul class="list-inline">
                <li class="list-item active"><a href="">
                        لیست محصولات
                    </a>
                </li>
            </ul>
        </div>
        <div class="space col-sm-3">

        </div>

    </div>

    <aside class="right-sidebar col-sm-3">
        <div class="col-sm-12">
            <h2 class="title-sidebar">دسته بندی محصولات </h2>
            <div class="content-sidebar">
                <div class="box-sidebar">
                    <i class="fa-archive fa"></i>
                    <select v-on:change="setCategoryFilter($event)">
                        <option disabled selected>دسته محصولات</option>
                        <option v-for="category in categoryList"
                                v-bind:value="category.id">@{{category.category_name}}
                        </option>
                    </select>
                </div>
                <div class="box-sidebar">
                    <i class="fa-tags fa"></i>
                    <select v-on:change="setSubCategoryFilter($event)">
                        <option disabled selected>نام محصول</option>
                        <option v-for="category in subCategoryList"
                                v-bind:value="category.id">@{{category.category_name}}
                        </option>
                    </select>
                </div>
                <div class="box-sidebar">
                    <i class="fa-building  fa"></i>
                    <select v-on:change="setProvinceFilter($event)">
                        <option disabled selected>استان</option>
                        <option v-for="province in provinceList"
                                v-bind:value="province.id">@{{province.province_name}}
                        </option>

                    </select>
                </div>
                <div class="box-sidebar">
                    <i class="fa-home fa"></i>
                    <select v-on:change="setCityFilter($event)">
                        <option disabled selected>شهر</option>
                        <option v-for="city in cityList"
                                v-bind:value="city.id">@{{city.city_name}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </aside>

    <main id="main" class="col-xs-12 col-md-9">

        <div class="row">
            <section class="main-content col-xs-12" v-if="products.length > 0">
                <div class="row">

                    <article class="main-content-item" v-for="(product,productIndex) in products" :key="product.main.id">

                        <div class="user-contents col-xs-12  col-sm-3">
                            <div class="user-image" v-if="product.profile_info.profile_photo">
                                <img v-bind:src=" '/storage/' + product.profile_info.profile_photo">
                            </div>
                            <div class="user-image" v-else>
                                <img src="{{asset('assets/img/user-defult.png')}}" class="image_defult">
                            </div>
                            <p v-if="product.user_info">@{{product.user_info.first_name + ' ' +
                                product.user_info.last_name}}</p>
                            <a v-bind:href="'{{url('profile')}}/' + product.user_info.user_name" class="green_bot">
                                مشاهده پروفایل
                            </a>
                            <div class="create_buy" @click="openRequestRegisterBox($event)">
                                <a class="green_bot">
                                    درخواست خرید
                                </a>
                            </div>
                        </div>
                        <div class="article-contents col-xs-12  col-sm-9 ">
                            <div class="row">
                                <div class="main-image col-xs-12 col-sm-5">
                                         <div class="owl-carousel" v-if="product.photos.length > 0">
                                               <image-viewer-list
                                                       v-for="photo in product.photos"
                                                       base="{{url('storage')}}/"
                                                       :img="photo.file_path">
                                               </image-viewer-list>
                                          </div>
                                </div>
                                <div class="main-article-content col-xs-12 col-sm-7">
                                    <h2 class="main-article-title">
                                        <a href="#">@{{product.main.category_name + ' | ' +
                                            product.main.sub_category_name}}</a>
                                    </h2>

                                    <p>نوع محصول: <span>@{{product.main.product_name}}</span></p>
                                    <p>استان / شهر:
                                        <span>@{{product.main.province_name + ' - ' + product.main.city_name}}</span>
                                    </p>
                                    <p>مقدار موجودی: <span>@{{product.main.stock}} کیلوگرم</span></p>
                                    <p>قیمت: <span>@{{product.main.min_sale_price + ' - ' + product.main.max_sale_price}}
                                    تومان</span></p>
                                    <p>توضیحات: <span>@{{product.main.description}}</span></p>
                                </div>
                                <div class="create_buy_mobile" @click="openRequestRegisterBox($event)">
                                    <a class="green_bot">
                                        درخواست خرید
                                    </a>

                                </div>
                            </div>

                        </div>
                        <div class="buy_details form-group  col-xs-12">
                            <input type="hidden" id="product-id" :value="product.main.id">
                            <div class="col-xs-12 col-sm-6">
                                <label for="company" class="content-lable">
                                    مقدار مورد نیاز (کیلوگرم):
                                </label>
                                <input id="requirement-amount" placeholder="مقدار مورد نیاز" type="text"
                                       class=" form-control">
                                <span class="text-danger" v-if="errors.requirement_amount">@{{errors.requirement_amount[0]}}</span>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <label for="company" class="content-lable">
                                    نوع بسته بندی:
                                </label>
                                <input id="pack-type" placeholder=" نوع بسته بندی" type="text" class=" form-control">
                                <span class="text-danger" v-if="errors.pack_type">@{{errors.pack_type[0]}}</span>
                            </div>
                            <div class="col-xs-12 ">
                                <label for="company" class="content-lable">
                                    توضیحات:
                                </label>
                                <textarea id="description" rows="5" placeholder="ویژگی های لازم محصول را توضیح دهید..."
                                          class=" form-control"></textarea>
                                <span class="text-danger" v-if="errors.description">@{{errors.description[0]}}</span>
                            </div>
                            <div class="hidden-xs col-sm-8">
                            </div>
                            <div class="col-xs-12 col-sm-4">
                                <button @click="registerRequest($event)" type="submit" style="border:none"
                                        class="green_bot">ثبت درخواست
                                </button>
                            </div>

                        </div>
                        <div class="loading_images  col-xs-12"
                             v-if="loading">
                            <img src="{{asset('assets/img/gif/loading.gif')}}" style="width:200px;height:200px">
                        </div>
                    </article>

                </div>
            </section>
            <section class="main-content  col-xs-12 " v-else-if="products.length == 0 && searchActive == true">
                <p></p>
                <h4 class="text-center" dir="rtl">جستجو نتیجه ای نداشت.</h4>
                <p>شما میتوانید درخواست خرید خود را در اینجا ثبت کنید.</p>
                <br/>
                <div class="text-center">
                    <button class="btn btn-success">درخواست خرید</button>
                </div>
            </section>
            <section class="main-content  col-xs-12 " v-else-if="products.length == 0 && searchText != '' ">
                <p></p>
                <h4 class="text-center" dir="rtl">جستجو نتیجه ای نداشت.</h4>
                <p class="text-center" dir="rtl">شما میتوانید درخواست خرید خود را در اینجا ثبت کنید.</p>
                <br/>
                <div class="text-center">
                    <a class="green_bot col-xs-4" @click="registerRequestInSearchNotFoundCase()">درخواست خرید</a>
                </div>
                <br/>
            </section>
            <section class="loading_images  col-xs-12" v-else>
                <img src="{{asset('assets/img/gif/loading.gif')}}" style="width:200px;height:200px">
            </section>

        </div>
    </main>

@endsection


@section('script_tags')
    <script>
        var searchValue = "<?php echo $searchText; ?>";
    </script>

    <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('assets/js/imageuploadify.min.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/buyer/product-list.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/buyer/api-product-list.js')}}"></script>

@endsection
