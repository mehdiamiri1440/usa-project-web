<style scoped>
    .sidebar-buttons a {

        width: 100%;
        border: none;
        padding: 9px 0;
    }

    .sidebar-buttons div > a:first-of-type {
        color: #fff;
        background: #28a745;
    }
    .green_bot {
        margin: 5px 0;
        display: inline-block;
        background: #28a745;
        color: #fff;
        padding: 10px 0;
        border-radius: 3px;
        text-align: center;
        font-size: 12px;
        width: 100%;
        line-height: 21px;
    }

    .red_bot {
        background: #e41c38;
        color: #fff;
    }
    @media screen and (max-width: 992px){
        .sidebar-buttons a {
            width: 150px;
            border: none;
            padding: 9px 0;
        }
    }
</style>
<template>
           <div>
               <div class="content-sidebar">
                   <div class="box-sidebar">
                       <i class="fa-archive fa"></i>
                       <select v-on:change="setCategoryFilter($event)">
                           <option disabled selected>دسته محصولات</option>
                           <option v-for="category in categoryList"
                                   v-bind:value="category.id">{{category.category_name}}
                           </option>
                       </select>
                   </div>
                   <div class="box-sidebar">
                       <i class="fa-tags fa"></i>
                       <select v-on:change="setSubCategoryFilter($event)">
                           <option disabled selected>نام محصول</option>
                           <option v-for="category in subCategoryList"
                                   v-bind:value="category.id">{{category.category_name}}
                           </option>
                       </select>
                   </div>
                   <div class="box-sidebar">
                       <i class="fa-building  fa"></i>
                       <select v-on:change="setProvinceFilter($event)">
                           <option disabled selected>استان</option>
                           <option v-for="province in provinceList"
                                   v-bind:value="province.id">{{province.province_name}}
                           </option>

                       </select>
                   </div>
                   <div class="box-sidebar">
                       <i class="fa-home fa"></i>
                       <select v-on:change="setCityFilter($event)">
                           <option disabled selected>شهر</option>
                           <option v-for="city in cityList"
                                   v-bind:value="city.id">{{city.city_name}}
                           </option>
                       </select>
                   </div>
               </div>
               <div class="sidebar-buttons col-xs-12">
                   <a href="#" class="btn green_bot hidden-md hidden-lg" data-dismiss="modal">
                       جستجو
                   </a>
                   <a href="#" @click.prevent="resetFilter()" data-dismiss="modal" class="btn  red_bot" >
                       حذف فیلتر ها
                   </a>
               </div>
           </div>

</template>

<script>
    export default {
        props:[
            'productsInfo',
            'categoryId',
            'subCategoryId',
            'provinceId',
            'cityId',
        ],
        data(){
            return{
                categoryList: '',
                subCategoryList: '',
                provinceList: '',
                cityList: '',
                categoryId: this.categoryId,
                subCategoryId: this.subCategoryId,
                provinceId: this.provinceId,
                cityId: this.cityId,
                products: this.productsInfo,
            }
        },
        methods:{
            init:function(){
                axios.post('/get_category_list')
                    .then(response => (this.categoryList = response.data.categories));
                axios.post('/location/get_location_info')
                    .then(response => (this.provinceList = response.data.provinces));
            },
            setCategoryFilter: function (e) {
                e.preventDefault;
                var categoryId = $(e.target).val();

                this.registerComponentStatistics('product-list','sidebarSearch','category');

                var self = this;

                axios.post('/user/get_product_list')
                    .then(function (response) {
                        self.products = '';
                        self.products = response.data.products.filter(function (product) {
                            if (self.cityId != '') {
                                return product.main.category_id == categoryId && product.main.city_id == self.cityId;
                            }
                            else if (self.provinceId != '' && self.cityId == '') {
                                return product.main.category_id == categoryId && product.main.province_id == self.provinceId;
                            }
                            else {
                                return product.main.category_id == categoryId;
                            }
                        });
                        self.$emit('productsToParent', self.products);
                    });

                axios.post('/get_category_list', {
                    parent_id: categoryId
                }).then(response => (this.subCategoryList = response.data.categories));

                this.categoryId = categoryId;
                this.searchText = '';
                this.continueToLoadProducts = false;
                this.searchActive = true;
            },
            setSubCategoryFilter: function (e) {
                e.preventDefault;
                var subCategoryId = $(e.target).val();

                this.registerComponentStatistics('product-list','sidebarSearch','subCategory');

                var self = this;

                axios.post('/user/get_product_list')
                    .then(function (response) {
                        self.products = '';
                        self.products = response.data.products.filter(function (product) {
                            if (self.cityId != '') {
                                return product.main.sub_category_id == subCategoryId && product.main.city_id == self.cityId;
                            }
                            else if (self.provinceId != '' && self.cityId == '') {
                                return product.main.sub_category_id == subCategoryId && product.main.province_id == self.provinceId;
                            }
                            else {
                                return product.main.sub_category_id == subCategoryId;
                            }
                        });
                        self.$emit('productsToParent', self.products);

                    });

                this.subCategoryId = subCategoryId;
                this.continueToLoadProducts = false;
            },
            setProvinceFilter: function (e) {
                e.preventDefault;
                var provinceId = $(e.target).val();

                this.registerComponentStatistics('product-list','sidebarSearch','province');

                var self = this;

                axios.post('/user/get_product_list')
                    .then(function (response) {

                        self.products = '';
                        self.products = response.data.products.filter(function (product) {

                            if (self.subCategoryId != '') {
                                return product.main.province_id == provinceId && product.main.sub_category_id == self.subCategoryId;
                            }
                            else if (self.categoryId != '' && self.subCategoryId == '') {
                                return product.main.province_id == provinceId &&
                                    product.main.category_id == self.categoryId;

                            }
                            else {
                                return product.main.province_id == provinceId;
                            }
                        });
                        self.$emit('productsToParent', self.products);
                    });

                axios.post('/location/get_location_info', {
                    province_id: provinceId
                }).then(response => (this.cityList = response.data.cities));

                this.provinceId = provinceId;
                this.searchText = '';
                this.continueToLoadProducts = false;
                this.searchActive = true;
            },
            setCityFilter: function (e) {
                e.preventDefault;
                var cityId = $(e.target).val();
                this.loading = true;

                this.registerComponentStatistics('product-list','sidebarSearch','city');

                var self = this;

                axios.post('/user/get_product_list')
                    .then(function (response) {
                        self.products = '';

                        self.products = response.data.products.filter(function (product) {

                            if (self.subCategoryId != '') {
                                return product.main.city_id == cityId && product.main.sub_category_id == self.subCategoryId;
                            }
                            else if (self.categoryId != '' && self.subCategoryId == '') {
                                return product.main.city_id == cityId &&
                                    product.main.category_id == self.categoryId;

                            }
                            else {
                                return product.main.city_id == cityId;
                            }
                        });
                        self.$emit('productsToParent', self.products);
                    });

                this.cityId = cityId;
                this.loading = false;
//            this.continueToLoadProducts = false;
//            self.productCountInPage = self.products.length;
            },
            scrull_css_header: function () {
                var get_with = $(window).width();
                var headerElement = $(".sub-header");
                var sidebarElement = $(".right-sidebar");
                var mainElement = $("#main");

                if (get_with > 751) {
                   // headerElement.removeClass("sub-header-fix");
                   // sidebarElement.removeClass("sidebar-fix");
                    mainElement.removeClass("main-padding-fix");

                }
                $(window).resize(function () {
                    get_with = $(window).width();
                    if (get_with > 751) {
                    //    headerElement.removeClass("sub-header-fix");
                       // sidebarElement.removeClass("sidebar-fix");
                        mainElement.removeClass("main-padding-fix");
                    }
                });
                $(window).scroll(function () {
                    var sc = $(this).scrollTop();
                    $(window).resize(function () {
                        get_with = $(window).width();
                        if (get_with > 751) {
                            //headerElement.removeClass("sub-header-fix");
                          //  sidebarElement.removeClass("sidebar-fix");
                            mainElement.removeClass("main-padding-fix");
                        }
                    });
                    if (sc >= 106) {
                        if (get_with > 751) {
                           // headerElement.addClass("sub-header-fix");
                          //  sidebarElement.addClass("sidebar-fix");
                            mainElement.addClass("main-padding-fix");
                        } else {
                          //  headerElement.removeClass("sub-header-fix");
                          //  sidebarElement.removeClass("sidebar-fix");
                            mainElement.removeClass("main-padding-fix");
                        }
                    } else {
                      //  headerElement.removeClass("sub-header-fix");
                      //  sidebarElement.removeClass("sidebar-fix");
                        mainElement.removeClass("main-padding-fix");
                    }
                })
            },
            resetFilter: function () {
                this.$parent.resetFilter();
            },
            registerComponentStatistics:function(categoryName,actionName,labelName){
                gtag('event',actionName,{
                    'event_category' : categoryName,
                    'event_label'    : labelName
                });
            }
        },
        mounted() {
            this.init();
            this.scrull_css_header();
        },
    }
</script>
