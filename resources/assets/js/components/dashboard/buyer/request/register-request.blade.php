@extends('layout.buyer-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/buyer/register-request.css')}}">
    {{--<link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">--}}
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/profile/profile-basic.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
             <li class="list-item">
                 <a href="#"  class="active">
                ثبت درخواست خرید </a>
            </li>
        </ul>
    </div>
@endsection
@section('popup_msg')
    <p class="main_par">
      ابتدا قوانین را تایید کنید
    </p>
    {{--<p class="secend_par">--}}
    {{--جهت ثبت درخواست های خرید یا فروش، ابتدا می بایست  اطلاعات اصلی پروفایل خود را کامل کنید.--}}
    {{--</p>--}}
@endsection
@section('main_content')
    <main id="main">

    <section class="main-content col-xs-12"> 
        <div class="company_des">
           <div clss="col-xs-12 min_cols">
                     <div class="col-sm-6">
                    <label>
                         <span class="text-danger">*</span> دسته ی محصول
                    </label>
                    <select class="profile_select" v-on:change="loadSubCategoryList($event)">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="category in categoryList"
                                v-bind:value="category.id"
                                >@{{category.category_name}}</option>
                    </select>
                </div>
                <div class="col-sm-6">
                    <label>
                        <span class="text-danger">*</span> نام محصول    
                    </label>
                    <select class="profile_select" v-on:change="setCategoryId($event)">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="category in SubCategoryList"
                                v-bind:value="category.id"
                                >@{{category.category_name}}</option>
                    </select>
                    <span v-if="errors.category_id" class="text-danger">فیلد دسته ی محصول الزامی است</span>
                </div>
                <div class="col-sm-6">
                    <label>
                        نوع محصول <span class="sub-des">(مثال:کله قوچی)</span> </label>
                    <input type="text" placeholder="نوع محصول" v-model="buyAd.name">
                    <span v-if="errors.name" class="text-danger" >@{{ errors.name[0] }}</span>
                </div>
                <div class="col-sm-6">
                    <label>
                    <span class="text-danger">*</span> نوع بسته بندی
                    </label>
                    <input type="text" placeholder="نوع بسته بندی" v-model="buyAd.pack_type">
                    <span v-if="errors.pack_type" class="text-danger" >@{{ errors.pack_type[0] }}</span>
                </div>
                  <div class="col-sm-6">
                    <label>
                       <span class="text-danger">*</span> میزان نیازمندی <span class="sub-des">(کیلوگرم)</span> </label>
                    <input type="text" placeholder="میزان نیازمندی" v-model="buyAd.requirement_amount">
                    <span v-if="errors.requirement_amount" class="text-danger" >@{{ errors.requirement_amount[0] }}</span>
                </div>
                <div class="col-sm-6">
                    <label>
                       قیمت <span class="sub-des">(هر کیلو به تومان)</span> </label>
                    <input type="text" placeholder="قیمت" v-model="buyAd.price">
                    <span v-if="errors.price" class="text-danger" >@{{ errors.price[0] }}</span>
                </div>
                <div class="col-sm-6">
                    <label>
                        محل تحویل </label>
                    <input type="text" placeholder="محل تحویل" v-model="buyAd.address">
                    <span v-if="errors.address" class="text-danger" >@{{ errors.address[0] }}</span>
                </div>
                
                </div>
                <div class="col-xs-12">
                    <label>
                       <span class="text-danger">*</span> توضیحات
                    </label>
                    <textarea placeholder="تمام جزییات مورد نظر خود را مطرح کنید..." v-model="buyAd.description"></textarea>
                    <span v-if="errors.description" class="text-danger" >@{{ errors.description[0] }}</span>
                </div>
        
            </div>
            <div class="image_company col-xs-12">
                    <label>
                        تصاویر نمونه محصول، بسته بندی و ...
                    </label>
                    <input type="file" multiple  ref="buyAdFiles" v-on:change="handleBuyAdFilesUpload()" accept="image/*">
            </div>
            <div class="rules col-xs-12">
            با    <span class="roules-check-inside">قوانین و شرایط</span>
                ثبت آگهی موافقم<input type="checkbox" v-model="buyAd.rules">
                  <i class="fa fa-check"></i>
            </div>
            <div class="col-xs-12">
                <input class="green-bot width-full" value="ثبت درخواست" type="button"   @click="submitBuyAd" :disabled="disableSubmit == true">
            </div>
    </section>
<!--
    <section class="main-content col-xs-12" v-else>
        <h4 class="text-center">برای ثبت درخواست ابتدا باید پروفایل شما تایید شود.</h4>
    </section>
-->
</main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/imageuploadify.min.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/buyer/register-request.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/buyer/api-register-request.js')}}"></script>
@endsection
