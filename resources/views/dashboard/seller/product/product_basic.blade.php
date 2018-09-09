@extends('layout.seller-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/product/product-basic.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
             <li class="list-item active">
                 <a href="#">
                    ثبت محصول    
                  </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">

    <section class="main-content col-xs-12">
        <form>
            <div class="company_des col-xs-12">
                <div class="col-xs-12 col-sm-6">
                    <label>
                        <span class="text-danger">*</span>دسته ی محصول
                    </label>
                    <select class="profile_select" v-on:change="loadSubCategoryList($event)">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="category in categoryList"  
                                v-bind:value="category.id">@{{category.category_name}}</option>
                    </select>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <label>
                        <span class="text-danger">*</span>زیر دسته ی محصول
                    </label>
                    <select class="profile_select" v-on:change=setCategoryId($event)>
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="category in SubCategoryList"
                                v-bind:value="category.id">@{{category.category_name}}</option>
                    </select>
                    <span v-if="errors.category_id" class="text-danger">@{{ errors.category_id[0] }}</span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <label>
                       <span class="text-danger">*</span> موجودی <span class="sub-des">(کیلوگرم)</span> 
                    </label>
                    <input type="text" placeholder="موجودی" v-model="product.stock">
                    <span v-if="errors.stock" class="text-danger">@{{ errors.stock[0] }}</span>
                </div>

                <div class="col-xs-12 col-sm-6">
                    <label>
                        <span class="text-danger">*</span>نوع محصول <span class="sub-des">(مثال:کله قوچی)</span> 
                    </label>
                    <input type="text" placeholder="نوع محصول، نوع بذر و ..." v-model="product.product_name">
                    <span v-if="errors.product_name" class="text-danger">@{{ errors.product_name[0] }}</span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <label>
                        <span class="text-danger">*</span>قیمت واحد از <span class="sub-des">(هر کیلو به تومان)</span>
                    </label>
                    <input type="text" placeholder="حداقل قیمت هر کیلو" v-model="product.max_sale_price">
                    <span v-if="errors.max_sale_price" class="text-danger">@{{ errors.min_sale_price[0] }}</span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <label>
                       <span class="text-danger">*</span>قیمت واحد تا <span class="sub-des">(هر کیلو به تومان)</span>
                    </label>
                    <input type="text" placeholder="حداکثر قیمت هر کیلو" v-model="product.min_sale_price">
                    <span v-if="errors.min_sale_price" class="text-danger">@{{ errors.max_sale_price[0] }}</span>
                </div>
                

                
                <div class="col-xs-12 col-sm-6">
                    <label>
                      <span class="text-danger">*</span>استان مبدا
                    </label>
                    <select class="profile_select" v-on:change="loadCityList($event)">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="province in provinces" 
                                    v-bind:value="province.id">@{{province.province_name}}</option>
                    </select>
                </div>
                

                
                <div class="col-xs-12 col-sm-6">
                    <label>
                       <span class="text-danger">*</span> شهرمبدا 
                    </label>
                    <select class="profile_select" v-on:change="setCityId($event)">
                        <option disabled selected>لطفا انتخاب کنید</option>
                        <option v-for="city in cities" 
                                v-bind:value="city.id">@{{city.city_name}}</option>
                    </select>
                    <span v-if="errors.city_id" class="text-danger">@{{ errors.city_id[0] }}</span>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <label>
                        <span class="text-danger">*</span> حداقل سفارش <span class="sub-des">(کیلوگرم)</span> 
                    </label>
                    <input type="text" placeholder="حداقل میزان سفارش به کیلوگرم" v-model="product.min_sale_amount">
                    <span v-if="errors.stock" class="text-danger">@{{ errors.stock[0] }}</span>
                </div>
                <div class="col-xs-12">
                    <label>
                        توضیحات
                    </label>
                    <textarea placeholder="درباره ی محصولتان بنویسید..." v-model="product.description"></textarea>
                    <span v-if="errors.description" class="text-danger">@{{ errors.description[0] }}</span>
                </div>
                <div class="image_company col-xs-12">
                    <label>
                        <span class="text-danger">*</span>تصاویر محصول
                    </label>
                    <input type="file" multiple  ref="productFiles" v-on:change="handleProductFilesUpload()" accept="image/*">
                    <span v-if="errors.images_count" class="text-danger">@{{ errors.images_count[0] }}</span>
                    <span v-if="errors.image_0" class="text-danger">@{{ errors.image_0[0] }}</span>
                    <span v-if="errors.image_1" class="text-danger">@{{ errors.image_1[0] }}</span>
                    <span v-if="errors.image_2" class="text-danger">@{{ errors.image_2[0] }}</span>
                    <span v-if="errors.image_3" class="text-danger">@{{ errors.image_3[0] }}</span>
                    <span v-if="errors.image_4" class="text-danger">@{{ errors.image_4[0] }}</span>
                    <span v-if="errors.image_5" class="text-danger">@{{ errors.image_5[0] }}</span>
                </div>

                <div class="rules col-xs-12">
                با    <span class="roules-check-inside">قوانین و شرایط</span>
                    ثبت آگهی موافقم<input type="checkbox" v-model="product.rules">
                      <i class="fa fa-check"></i>
                </div>
                <div class="col-xs-12">
                    <input class="green-bot width-full" value="ثبت محصول" type="button" @click="submitProduct" :disabled="disableSubmit == true">
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
