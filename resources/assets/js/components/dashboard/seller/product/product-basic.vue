<style scoped>

    .image_company {
        margin: 15px auto;

    }

    .form-wrapper .row > div{
        float: right;
    }

    .sub-des {
        font-size: 11px;
    }

    .form-wrapper > div {
        float: right;
        margin-bottom: 10px;
    }

    .text-danger {
        display: inline-block;
        padding: 4px 0;
    }

    .form-wrapper > div.col-sm-6 {
        height: 85px;
    }

    .main-content {
        direction: rtl;
    }

    .roules-check-inside {
        color: #00c569;
    }

    /*end main content style */
    /*custom cods*/
    .green-button {
        margin: 15px 0;
        display: inline-block;
        background: #00c569;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }

    .width-full {
        width: 100%;
    }

    .green-button:hover {
        color: #fff;
        background: #29A045;
        transition: 300ms;

    }

    #main.little-main {
        margin-right: 80px;
    }

    .little_header {
        width: 80px;
    }

    .little-main-header {
        right: 80px;
    }

    .rules {
        margin: 7px 0;
        padding-bottom: 10px;
    }

    .rules > div, .kind_activity > div {
        float: right;
        overflow: hidden;
        padding: 10px;
        font-size: 15px;
    }

    .rules input {
        cursor: pointer;
        width: 23px;
        height: 23px;
        float: right;
        position: absolute;
        top: -5px;
        right: 270px;
        opacity: 0;
    }

    .rules input:checked + i {
        background: #00c569;
        color: #fff;
        border: none;
        padding: 4px;
    }

    .rules i {
        background: none;
        width: 23px;
        height: 23px;
        display: block;
        position: absolute;
        top: -5px;
        right: 270px;
        z-index: -1;
        color: #808c9c;
        border-radius: 50%;
        padding: 2px;
        font-size: 14px;
        border: 2px solid;
    }

    .title {
        text-align: right;
        padding: 13px 15px;

    }

    .title h1 {

        font-size: 18px;
        font-weight: bold;

    }

    @media screen and (max-width: 767px) {

        .title {
            text-align: center;

        }

        .detail-success {
            max-width: 300px;
            margin: 0 auto;
        }
    }
</style>
<template>
    <div>
        <section class="main-content col-xs-12">

                <div  class="title col-xs-12">
                    <div  class="row">
                        <div  class="col-xs-12 col-sm-4 pull-right">
                            <h1>
                                ثبت محصول
                            </h1>
                        </div> 
                    </div>
                </div>

                <div class="form-wrapper col-xs-12">

                    <div class="row">
                    
                        <div class="col-xs-12 col-sm-6">

                            <label>
                                <span class="text-danger">*</span>دسته ی محصول
                            </label>

                            <select class="profile-select" v-on:change="loadSubCategoryList($event)">
                                <option disabled selected>لطفا انتخاب کنید</option>
                                <option v-for="category in categoryList"
                                        v-bind:value="category.id"
                                        v-text="category.category_name"
                                >
                                </option>
                            </select>
                        </div>
                        <div class="col-xs-12 col-sm-6">
                            <label>
                                <span class="text-danger">*</span>زیر دسته ی محصول
                            </label>

                            <select class="profile-select" v-on:change=setCategoryId($event)>
                                <option disabled selected>لطفا انتخاب کنید</option>
                                <option v-for="category in SubCategoryList"
                                        v-bind:value="category.id"
                                        v-text="category.category_name"
                                >
                                </option>
                            </select>
                            <span v-if="errors.category_id"
                                  class="text-danger"
                                  v-text="errors.category_id[0]"
                            >
                            </span>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <label>
                                <span class="text-danger">*</span> موجودی <span class="sub-des">(کیلوگرم)</span>
                            </label>
                            <input type="text" placeholder="موجودی" v-model="product.stock">
                            <span v-if="errors.stock"
                                  class="text-danger"
                                  v-text="errors.stock[0]"
                            >
                            </span>

                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <label>
                                <span class="text-danger">*</span>
                                نوع محصول
                                <span class="sub-des">
                                    (مثال:کله قوچی)
                                </span>

                            </label>

                            <input type="text"
                                   placeholder="نوع محصول، نوع بذر و ..."
                                   v-model="product.product_name"
                            >
                            <span v-if="errors.product_name"
                                  class="text-danger"
                                  v-text="errors.product_name[0]"
                            >

                            </span>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <label>
                                <span class="text-danger">*</span>قیمت واحد از <span
                                    class="sub-des">(هر کیلو به تومان)</span>
                            </label>
                            <input type="text"
                                   placeholder="حداقل قیمت هر کیلو"
                                   v-model="product.max_sale_price"
                            >

                            <span v-if="errors.max_sale_price"
                                  class="text-danger"
                                  v-text="errors.min_sale_price[0] "
                            >
                            </span>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <label>
                                <span class="text-danger">*</span>قیمت واحد تا <span
                                    class="sub-des">(هر کیلو به تومان)</span>
                            </label>
                            <input type="text"
                                   placeholder="حداکثر قیمت هر کیلو"
                                   v-model="product.min_sale_price"
                            >
                            <span v-if="errors.min_sale_price"
                                  class="text-danger"
                                  v-text="errors.max_sale_price[0]"
                            >
                            </span>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <label>
                                <span class="text-danger">*</span>استان مبدا
                            </label>

                            <select class="profile-select" v-on:change="loadCityList($event)">
                                <option disabled selected>لطفا انتخاب کنید</option>
                                <option v-for="province in provinces"
                                        v-bind:value="province.id"
                                        v-text="province.province_name"
                                >
                                </option>
                            </select>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <label>
                                <span class="text-danger">*</span> شهرمبدا
                            </label>

                            <select class="profile-select" v-on:change="setCityId($event)">
                                <option disabled selected>لطفا انتخاب کنید</option>
                                <option v-for="city in cities"
                                        v-bind:value="city.id"
                                        v-text="city.city_name"
                                >
                                </option>
                            </select>
                            <span v-if="errors.city_id"
                                  class="text-danger"
                                  v-text="errors.city_id[0]"
                            >
                            </span>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <label>
                                <span class="text-danger">*</span>
                                حداقل سفارش
                                <span class="sub-des">
                                    (کیلوگرم)
                                </span>

                            </label>

                            <input type="text"
                                   placeholder="حداقل میزان سفارش به کیلوگرم"
                                   v-model="product.min_sale_amount"
                            >
                            <span v-if="errors.min_sale_amount"
                                  class="text-danger"
                                  v-text="errors.min_sale_amount[0]"
                            >
                            </span>
                        </div>

                        <div class="col-xs-12">
                            <label>
                                توضیحات
                            </label>
                            <textarea placeholder="درباره ی محصولتان بنویسید..."
                                      v-model="product.description"
                            ></textarea>

                            <span v-if="errors.description"
                                  class="text-danger"
                                  v-text="errors.description[0]"
                            >
                            </span>
                        </div>

                        <div class="image_company col-xs-12">
                            <label>
                                <span class="text-danger">*</span>تصاویر محصول
                            </label>

                            <UploadFile
                                    uploadName="product_files"
                                    uploadAccept="image/*"
                                    :uploadMinSize="1024"
                                    :uploadSize="1024 * 1024 * 10"
                                    :uploadMultiple="true"
                                    :uploadDrop="true"
                                    :uploadDropDirectory="true"
                                    :uploadAddIndex="false"
                                    :uploadThread="3"
                                    :uploadOCompress="1024 * 1024"
                                    :uploadUploadAuto="false"
                                    :uploadRef="productFiles"
                            />

                            <span v-if="errors.images_count"
                                  class="text-danger" v-text="errors.images_count[0]"
                            ></span>

                            <span v-if="errors.image_0"
                                  class="text-danger"
                                  v-text="errors.image_0[0]"
                            ></span>

                            <span v-if="errors.image_1"
                                  class="text-danger"
                                  v-text="errors.image_1[0]"
                            ></span>

                            <span v-if="errors.image_2"
                                  class="text-danger"
                                  v-text="errors.image_2[0]"
                            ></span>

                            <span v-if="errors.image_3"
                                  class="text-danger"
                                  v-text="errors.image_3[0]"
                            ></span>

                            <span v-if="errors.image_4"
                                  class="text-danger"
                                  v-text="errors.image_4[0]"
                            ></span>

                            <span v-if="errors.image_5"
                                  class="text-danger"
                                  v-text="errors.image_5[0]"
                            ></span>

                        </div>

                        <div class="rules col-xs-12">
                            با
                            <span class="roules-check-inside">
                                <a href='/privacy-and-policy' target="_blank">قوانین و شرایط</a>
                            </span>
                            ثبت محصول موافق هستم
                            <input type="checkbox" v-model="product.rules">

                            <i class="fa fa-check"></i>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <input class="green-button width-full" value="ثبت محصول" type="button" @click="submitProduct"
                                   :disabled="disableSubmit === true">
                        </div>

                    </div>

                </div>

        </section>
    </div>
</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";
    import UploadFile from '../../upload-image'

    export default {
        components: {
            UploadFile
        },
        data: function () {
            return {
                currentUser: {
                    profile: '',
                    user_info: '',
                },
                product: {
                    product_name: '',
                    stock: '',
                    min_sale_price: '',
                    max_sale_price: '',
                    min_sale_amount: '',
                    description: '',
                    address: '',
                    category_id: '',
                    city_id: '',
                    rules: false,
                },
                productFields: [
                    'product_name',
                    'stock',
                    'min_sale_price',
                    'max_sale_price',
                    'min_sale_amount',
                    'description',
                    'address',
                    'category_id',
                    'city_id',
                ],
                categoryList: '',
                SubCategoryList: '',
                categorySelected: '',
                provinces: '',
                cities: '',
                productFiles: [],
                popUpMsg: '',
                errors: '',
                disableSubmit: false,
                items: [
                    {
                        message: ' ثبت محصول',
                        url: 'registerProduct'
                    },
                ],
                uploadPercentage: 0,
            };
        },
        methods: {
            init: function () {
                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));
                axios.post('/get_category_list')
                    .then(response => (this.categoryList = response.data.categories));
                axios.post('/location/get_location_info')
                    .then(response => (this.provinces = response.data.provinces));
            },
            loadSubCategoryList: function (e) {
                e.preventDefault();

                var categoryId = $(e.target).val();

                axios.post('/get_category_list', {
                    parent_id: categoryId,
                }).then(response => (this.SubCategoryList = response.data.categories));
            },
            loadCityList: function (e) {
                e.preventDefault();

                var provinceId = $(e.target).val();

                axios.post('/location/get_location_info', {
                    province_id: provinceId,
                }).then(response => (this.cities = response.data.cities));
            },
            submitProduct: function () {
                eventBus.$emit('submiting', true);
                var self = this;

                if (this.product.rules !== true) {
                    this.popUpMsg = 'موافقت با قوانین ثبت آگهی الزامی است';

                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    eventBus.$emit('submiting', false);

                    $('#custom-main-modal').modal('show');
                }
                else {
                    let formData = this.getProductFormFields();
                    axios.post('/user/add_product', formData,{
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                            'Content-Type': 'application/json',
                        },
                        onUploadProgress: function(progressEvent) {
                            this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) );
                        }.bind(this)
                    })
                        .then(function (response) {
                            if (response.status === 201) {
                                self.disableSubmit = true;
                                self.popUpMsg = self.getProductRegisterSuccessMessage();
                                eventBus.$emit('submitSuccess', self.popUpMsg);
                                eventBus.$emit('submiting', false);
                                $('#custom-main-modal').modal('show');

                                self.registerComponentStatistics('product-register','product-registered-successfully','product-registered-successfully');

                                setTimeout(function () {
                                    // location.reload(true);
                                                            $('#modal-buttons').modal('show');
                                                window.location.replace(
                               '/dashboard/my-products'

)
                                    eventBus.$emit('submiting', false);
                                }, 4000);
                            }
                            else if(response.status === 200){
                                self.popUpMsg = response.data.msg;
                                eventBus.$emit('submitSuccess', self.popUpMsg);
                                eventBus.$emit('submiting', false);
}
                        })
                        .catch(function (err) {
                            self.errors = [];
                            self.errors = err.response.data.errors;
                            eventBus.$emit('submiting', false);

                            self.registerComponentExceptions('Validation error in product register');
                        });
                }
            },
            getProductFormFields: function () {
                let formData = new FormData();
                let cnt = this.productFields.length;

                for (var i = 0; i < cnt; i++) {
                    formData.append(this.productFields[i], this.toLatinNumbers(this.product[this.productFields[i]]));
                }
                for (var i = 0; i < this.productFiles.length; i++) {
                    let file = this.productFiles[i];
                    formData.append('image_' + i, file);
                }
                formData.append('images_count', this.productFiles.length);

                return formData;
            },
            setCategoryId: function (e) {
                e.preventDefault();
                var categoryId = $(e.target).val();

                this.product.category_id = categoryId;
            },
            setCityId: function (e) {
                e.preventDefault();
                var cityId = $(e.target).val();

                this.product.city_id = cityId;
            },
            handleProductFilesUpload: function () {
                let uploadedFiles = this.$refs.productFiles.files;
                /*
                  Adds the uploaded file to the files array
                */
                for (var i = 0; i < uploadedFiles.length; i++) {
                    this.productFiles.push(uploadedFiles[i]);
                }
            },
            toLatinNumbers: function (num) {
                var numDic = {
                    '۰': '0',
                    '۱': '1',
                    '۲': '2',
                    '۳': '3',
                    '۴': '4',
                    '۵': '5',
                    '۶': '6',
                    '۷': '7',
                    '۸': '8',
                    '۹': '9',
                };

                return num
                    .toString()
                    .replace(/[۰-۹]/g, function (w) {
                        return numDic[w];
                    });
            },
            getProductRegisterSuccessMessage:function(){
                let msg = '';

                if(this.currentUser.user_info.active_pakage_type == 0){
                    msg = 'محصول شما با موفقیت ثبت شد و پس از تایید کارشناسان در لیست محصولات نمایش داده میشود.';
                }
                else{
                    msg = 'محصول شما با موفقیت ثبت شد.';
                }

                return msg;
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
            registerComponentExceptions:function(description,fatal = false){
                gtag('event','exception',{
                    'description': description,
                    'fatal': fatal
                });
            },
        },
        mounted() {
            this.init();
            $('input[type="file"]').imageuploadify();
            eventBus.$emit('subHeader', this.items);
        },
        created(){
            gtag('config','UA-129398000-1',{'page_path': '/register-product'});
        },
        watch:{
            uploadPercentage:function(){
                eventBus.$emit('uploadPercentage', this.uploadPercentage);
            }
        }
    }
</script>
