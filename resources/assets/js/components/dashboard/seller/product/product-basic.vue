<style scoped>

    .image_company {
        margin: 15px auto;

    }

    .sub-des {
        font-size: 11px;
    }

    .company_des > div {
        float: right;
        margin-bottom: 10px;
    }

    .text-danger {
        display: inline-block;
        padding: 4px 0;
    }

    .company_des > div.col-sm-6 {
        height: 85px;
    }


    .main-content {
        padding: 60px 100px;
        direction: rtl;
    }
    .roules-check-inside {
        color: #28a745;
    }

    /*end main content style */
    /*custom cods*/
    .green-bot {
        margin: 15px 0;
        display: inline-block;
        background: #28a745;
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

    .green-bot:hover {
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
        right: 217px;
        opacity: 0;
    }

    .rules input:checked + i {
        background: #28a745;
        color: #fff;
        padding: 4px;
    }

    .rules i {
        background: none;
        width: 23px;
        height: 23px;
        display: block;
        position: absolute;
        top: -5px;
        right: 217px;
        z-index: -1;
        color: #808c9c;
        border-radius: 50%;
        padding: 3px 2px;
        font-size: 14px;
    }

</style>
<template>
    <div>
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
                                    v-bind:value="category.id"> {{category.category_name}}
                            </option>
                        </select>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <label>
                            <span class="text-danger">*</span>زیر دسته ی محصول
                        </label>
                        <select class="profile_select" v-on:change=setCategoryId($event)>
                            <option disabled selected>لطفا انتخاب کنید</option>
                            <option v-for="category in SubCategoryList"
                                    v-bind:value="category.id"> {{category.category_name}}
                            </option>
                        </select>
                        <span v-if="errors.category_id" class="text-danger"> {{ errors.category_id[0] }}</span>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <label>
                            <span class="text-danger">*</span> موجودی <span class="sub-des">(کیلوگرم)</span>
                        </label>
                        <input type="text" placeholder="موجودی" v-model="product.stock">
                        <span v-if="errors.stock" class="text-danger"> {{ errors.stock[0] }}</span>
                    </div>

                    <div class="col-xs-12 col-sm-6">
                        <label>
                            <span class="text-danger">*</span>نوع محصول <span class="sub-des">(مثال:کله قوچی)</span>
                        </label>
                        <input type="text" placeholder="نوع محصول، نوع بذر و ..." v-model="product.product_name">
                        <span v-if="errors.product_name" class="text-danger"> {{ errors.product_name[0] }}</span>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <label>
                            <span class="text-danger">*</span>قیمت واحد از <span
                                class="sub-des">(هر کیلو به تومان)</span>
                        </label>
                        <input type="text" placeholder="حداقل قیمت هر کیلو" v-model="product.max_sale_price">
                        <span v-if="errors.max_sale_price" class="text-danger"> {{ errors.min_sale_price[0] }}</span>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <label>
                            <span class="text-danger">*</span>قیمت واحد تا <span
                                class="sub-des">(هر کیلو به تومان)</span>
                        </label>
                        <input type="text" placeholder="حداکثر قیمت هر کیلو" v-model="product.min_sale_price">
                        <span v-if="errors.min_sale_price" class="text-danger"> {{ errors.max_sale_price[0] }}</span>
                    </div>


                    <div class="col-xs-12 col-sm-6">
                        <label>
                            <span class="text-danger">*</span>استان مبدا
                        </label>
                        <select class="profile_select" v-on:change="loadCityList($event)">
                            <option disabled selected>لطفا انتخاب کنید</option>
                            <option v-for="province in provinces"
                                    v-bind:value="province.id"> {{province.province_name}}
                            </option>
                        </select>
                    </div>


                    <div class="col-xs-12 col-sm-6">
                        <label>
                            <span class="text-danger">*</span> شهرمبدا
                        </label>
                        <select class="profile_select" v-on:change="setCityId($event)">
                            <option disabled selected>لطفا انتخاب کنید</option>
                            <option v-for="city in cities"
                                    v-bind:value="city.id"> {{city.city_name}}
                            </option>
                        </select>
                        <span v-if="errors.city_id" class="text-danger"> {{ errors.city_id[0] }}</span>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <label>
                            <span class="text-danger">*</span> حداقل سفارش <span class="sub-des">(کیلوگرم)</span>
                        </label>
                        <input type="text" placeholder="حداقل میزان سفارش به کیلوگرم" v-model="product.min_sale_amount">
                        <span v-if="errors.stock" class="text-danger"> {{ errors.stock[0] }}</span>
                    </div>
                    <div class="col-xs-12">
                        <label>
                            توضیحات
                        </label>
                        <textarea placeholder="درباره ی محصولتان بنویسید..." v-model="product.description"></textarea>
                        <span v-if="errors.description" class="text-danger"> {{ errors.description[0] }}</span>
                    </div>
                    <div class="image_company col-xs-12">
                        <label>
                            <span class="text-danger">*</span>تصاویر محصول
                        </label>
                        <input type="file" multiple ref="productFiles" v-on:change="handleProductFilesUpload()"
                               accept="image/*">
                        <span v-if="errors.images_count" class="text-danger"> {{ errors.images_count[0] }}</span>
                        <span v-if="errors.image_0" class="text-danger"> {{ errors.image_0[0] }}</span>
                        <span v-if="errors.image_1" class="text-danger"> {{ errors.image_1[0] }}</span>
                        <span v-if="errors.image_2" class="text-danger"> {{ errors.image_2[0] }}</span>
                        <span v-if="errors.image_3" class="text-danger"> {{ errors.image_3[0] }}</span>
                        <span v-if="errors.image_4" class="text-danger"> {{ errors.image_4[0] }}</span>
                        <span v-if="errors.image_5" class="text-danger"> {{ errors.image_5[0] }}</span>
                    </div>

                    <div class="rules col-xs-12">
                        با <span class="roules-check-inside">قوانین و شرایط</span>
                        ثبت آگهی موافقم<input type="checkbox" v-model="product.rules">
                        <i class="fa fa-check"></i>
                    </div>
                    <div class="col-xs-12">
                        <input class="green-bot width-full" value="ثبت محصول" type="button" @click="submitProduct"
                               :disabled="disableSubmit == true">
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>
<script>
    import {eventBus} from "../../../../router/dashboard_router";

    export default {
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
                ]
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
                eventBus.$emit('submitingEvent', true);
                var self = this;

                if (this.product.rules != true) {
                    this.popUpMsg = 'موافقت با قوانین ثبت آگهی الزامی است';
                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    eventBus.$emit('submitingEvent', false);
                    $('#myModal').modal('show');
                }
                else {
                    let formData = this.getProductFormFields();
                    axios.post('/user/add_product', formData)
                        .then(function (response) {
                            if (response.status == 201) {
                                self.disableSubmit = true;
                                self.popUpMsg = 'محصول شما با موفقیت ثبت شد';
                                $('#myModal').modal('show');
                                eventBus.$emit('submitSuccess', self.popUpMsg);
                                eventBus.$emit('submitingEvent', false);
                                $('#myModal').modal('show');
                                setTimeout(function () {
                                    location.reload(true);
                                    eventBus.$emit('submitingEvent', false);
                                }, 3000)
                            }
                        })
                        .catch(function (err) {
                            self.errors = [];
                            self.errors = err.response.data.errors;
                            eventBus.$emit('submitingEvent', false);
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
            }
        },
        mounted() {
            this.init();
            $('input[type="file"]').imageuploadify();
            eventBus.$emit('subHeader', this.items);
        },
    }
</script>
