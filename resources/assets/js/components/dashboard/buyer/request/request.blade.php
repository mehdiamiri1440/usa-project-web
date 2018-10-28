@extends('layout.buyer-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/product/product-basic.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">
@endsection
@section('mobile_profile')
    <div class="profile">
            <div class="profile-img">
                <img src="assets/img/saeed.jpg" alt="saeed">
            </div>
            <div class="profile-content">
                <div class="profile-name">
                    سعید رادمنش
                </div>
                <div class="profile-city">
                    شیراز - فارس
                </div>
            </div>
            <a href="#" class="green-bot">
                نمایش پروفایل من
            </a>
        </div>
@endsection

@section('desktop_profile')
    <div class="profile">
            <div class="profile-img">
                <img src="assets/img/saeed.jpg" alt="saeed">
            </div>
            <div class="profile-content">
                <div class="profile-name">
                    سعید رادمنش
                </div>
                <div class="profile-city">
                    شیراز - فارس
                </div>
            </div>
            <a href="#" class="green-bot">
                نمایش پروفایل من
            </a>
    </div>
@endsection

@section('header_profile')
    <a href="#" onclick="dropdown()">
            <div class="image-header-profile">
                <img src="assets/img/saeed.jpg" alt="سعید رادمنش">
            </div>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            <span class="name-header-profile">سعید رادمنش</span>
    </a>
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
             <li class="list-item"><a href="#">
                اطلاعات تکمیلی </a>
            </li>
            <li class="list-item"><a href="#" class="active">
                اطلاعات پایه
            </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">

    <section class="main-content col-xs-12">
        <form>
            <div class="company_des">
                <div class="col-sm-6">
                    <label>
                        دسته ی محصول </label>
                    <select class="profile_select">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="category in SubCategoryList" @click="setCategoryId(category.id)">@{{category.category_name}}</option>
                    </select>
                </div>
                <div class="col-sm-6">
                    <label>
                        نام محصول
                    </label>
                    <select class="profile_select">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="category in categoryList" @click="loadSubCategoryList(category.id)">@{{category.category_name}}</option>
                    </select>
                </div>
                
                <div class="col-sm-6">
                    <label>
                        موجودی <span class="sub-des">(کیلوگرم)</span> </label>
                    <input type="text" v-model="product.stock">
                </div>

                <div class="col-sm-6">
                    <label>
                        نوع محصول <span class="sub-des">(مثال:کله قوچی)</span> </label>
                    <input type="text" v-model="product.product_name">
                </div>
                
                <div class="col-sm-6">
                    <label>
                       قیمت واحد تا <span class="sub-des">(هر کیلو به تومان)</span> </label>
                    <input type="text" v-model="product.min_sale_price">
                </div>
                
                <div class="col-sm-6">
                    <label>
                        قیمت واحد از <span class="sub-des">(هر کیلو به تومان)</span> </label>
                    <input type="text" v-model="product.max_sale_price">
                </div>
                
                <div class="col-sm-6">
                    <label>
                        استان محل تحویل کالا
                    </label>
                    <select class="profile_select">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="province in provinces" @click="loadCityList(province.id)">@{{province.province_name}}</option>
                    </select>
                </div>
                
                <div class="col-sm-6">
                    <label>
                        حداقل سفارش <span class="sub-des">(کیلوگرم)</span> </label>
                    <input type="text" v-model="product.min_sale_amount">
                </div>
                
                <div class="col-sm-6">
                    <label>
                        شهر تحویل کالا
                    </label>
                    <select class="profile_select">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="city in cities" value="city.id" @click="setCityId(city.id)">@{{city.city_name}}</option>
                    </select>
                </div>
                <div class="col-sm-12">
                    <label>
                        توضیحات
                    </label>
                    <textarea v-model="product.description"></textarea>
                </div>
                <div class="image_company col-sm-12">
                    <label>
                        تصاویر محصول
  </label>
                    <input type="file" multiple  ref="productFiles" v-on:change="handleProductFilesUpload()" accept="image/*">
                </div>

                <div class="rules col-sm-12">
                با    <span class="roules-check-inside">قوانین و شرایط</span>
                    ثبت آگهی موافقم<input type="checkbox" v-model="product.rules">
                    <i class="fa fa-check"></i>
                </div>

                    <div class="col-sm-12">
                    <input class="green-bot width-full" value="ثبت تغییرات" type="button" @click="submitProduct">
                </div>

            </div>

        </form>
    </section>
</main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/imageuploadify.min.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/product/custom.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/product/api-product-basic.js')}}"></script>
@endsection
