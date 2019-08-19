<style scoped>



    .sidebar{
    will-change: min-height;
    }

    .sidebar__inner{
        transform: translate(0, 0); /* For browsers don't support translate3d. */
        transform: translate3d(0, 0, 0);
        will-change: position, transform;
    }
    #article-list{
        /*overflow: hidden;*/
    }

    #wrap-footer {
        display: none;
    }

    .loading_images {
        padding-top: 115px;
    }

    #searchFilter {
        background: #fff;
        padding-left: 0 !important;
    }

    #searchFilter .modal-dialog {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    #searchFilter .main_popup_content {
        padding: 0;

    }

    a.close-dialog-popup {
        display: block;

        padding: 15px;

        font-size: 22px;

        color: #e41c38;

        text-align: right;

        background: #000546;
    }

    .filter-mobile-sidebar {
        max-width: 500px;
        margin: 0 auto;
    }

    .flat-plust-icon {
        position: fixed;
        right: 15px;
        bottom: 15px;
        z-index: 2;
    }

    .flat-plust-icon a {
        background: #e41c38;

        width: 50px;
        height: 50px;
        display: block;
        border-radius: 50px;
        color: #fff;
        box-shadow: 0 0 20px #838383;
        text-align: center;
        padding-top: 15px;
        font-size: 23px;
    }

    .owl-carousel img {
        border-radius: 3px;
    }

    .image-header-profile img {
        height: 100%;

    }

    .header-nav {
        direction: rtl;
        text-align: right;
        padding: 20px 30px;
        font-size: 17px;
    }

    .header-nav a {
        color: #777;
    }

    .header-nav a:hover {
        color: #333;
    }

    #header {
        background: url("../../../../../../public/assets/img/topheader.jpg");
        background-position: 50% 30%;
        color: #fff;
        background-size: cover;
        overflow: hidden;
        padding-top: 64px;
        padding-bottom: 0;
    }

    .title-page {
        text-align: center;

        margin: 40px auto 35px;
    }

    .sub-header {
        background: #f0f3f6;
        padding: 0 15PX;
    }

    .search-box {
        position: relative;
        margin-top: 14px;
    }

    .search-box input {
        width: 100%;
        text-align: right;
        direction: rtl;
        border: 1px solid #666666;
        border-radius: 6px;
        padding: 10px 40px 9px 15px;
        background: #f8f8f8;
        font-size: 12px;
        float: right;
    }

    .search-box button.btn-search {
        background: none;
        border: none;
        position: absolute;
        right: 2px;
        top: 6px;
        border-left: 1px solid;
        color: #666;
        height: 77%;
        padding: 5px 8px;
        font-size: 18px;
    }

    .search-box button.btn-filter {
        float: left;
        padding: 10px 14px;
        border-radius: 5px;
        border: none;
        background: #000546;
        color: #fff;
    }

    .links-sub-header {
        direction: rtl;
    }

    .links-sub-header a {
        padding: 25px 15px;
        display: inline-block;
        color: #808c9b;
        font-weight: bold;
        font-size: 14px;
        position: relative;
    }

    .links-sub-header a:hover {
        color: #313942;
    }

    .links-sub-header a:hover:after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #00c569;
        height: 3px;
        width: 100%;
    }

    #main {

        padding-top: 165px;
        position:relative;

    }
    .main-content{
          min-height: 900px;
          transition: 200ms;
    }

    .main-content > h4 {
        margin: 30px auto;
    }

    .green-button {
        margin: 5px 0;
        display: inline-block;
        background: #00c569;
        color: #fff;
        padding: 10px 0;
        border-radius: 3px;
        text-align: center;
        font-size: 12px;
        width: 100%;
        line-height: 21px;
    }

    .#e41c38_bot {
        background: #e41c38;
        color: #fff;
    }

    .green-button:hover {
        background: #279b41;
        color: #fff;
        cursor: pointer;
    }

    .sub-header-fix {
        position: fixed;
        top: 73px;
        left: 0;
        right: 0;
        z-index: 2;
    }

    /*  .main-padding-fix {
          padding-top: 72px;
      }*/

    li.active a {
        color: #313942;
    }

    li.active a::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #00c569;
        height: 3px;
        width: 100%;
    }

    .image-wrapper {

        height: 300px;
        overflow: hidden;

    }

    .main-image {
        float: right;

    }

    .load-more-button a {
        direction: rtl;
        color: #666;
        font-size: 18px;
        width: 100%;
        box-shadow: 0 0 5px #bfbfbf;
        background: #f0f3f6 !important;
        overflow: hidden;
        border-radius: 5px;
        position: relative;
        transition: 300ms;
        border: none;
        top: 0;
    }

    .load-more-button a:hover {
        top: -6px;
        color: #333333;
        box-shadow: 0 0 5px #a5a5a5;
        transition: 300ms;
        position: relative;
    }

    .btn-loader {
        height: 38px;

        overflow: hidden;
    }

    .btn-loader img {
        width: 56px;
        margin-top: -15px;
    }

    @media screen and (max-width: 991px) {
        .search-box input {
            width: calc(100% - 75px);
        }

        .title-page {
            text-align: center;
        }

        .right-sidebar {
            display: none;
        }

        .filter-mobile-sidebar .right-sidebar {
            display: block;
        }
    }

    @media screen and (max-width: 767px) {

        .sub-header {
            position: fixed;
            z-index: 1;
            width: 100%;
        }

        .search-box {
            margin: 4px auto 13px;
        }

        .main-image {
            padding: 0;
        }

        .main-content > .row {
            margin: 0;
        }

        .sub-header {

            background: #f0f3f6;
            padding-top: 20px;

        }

        .links-sub-header {
            direction: rtl;
            text-align: center;
        }

        .logo img {
            width: 100%;
        }

        .user-image {
            float: right;

            width: 100px;

            height: 100px;
        }

        .user-contents > p {
            float: right;

            font-size: 18px;

            padding-top: 40px;

            padding-right: 20px;
        }

        .user-contents > .green-button {
            float: left;

            width: initial;
            padding: 10px 25px;

            margin-top: 28px;
        }

        .create_buy {
            display: none;
        }
    }

    @media screen and (max-width: 715px) {
        .name-header-profile {
            display: none;
        }

        .profile-menu-header i {
            position: absolute;
            left: -75px;
            top: 22px;
            font-size: 20px;
        }
    }

    @media screen and (max-width: 555px) {
        .user-image {
            float: right;

            width: 60px;

            height: 60px;
        }

        .user-contents > .green-button {

            float: left;
            width: initial;
            padding: 10px;
            margin-top: 11px;

        }

        .user-contents > p {
            float: right;
            font-size: inherit;
            padding-top: 18px;
            padding-right: 5px;
        }

        .logo {
            padding: 6px 10px;
        }
    }

    @media screen and (max-width: 430px) {
        .logo {
            padding: 6px 63px;
            width: 100%;
            height: 109px;
        }

        .profile-menu-header {

            padding: 3px;
            padding-left: 35px;
            float: left;

        }

    }

</style>
<template>

    <div>
        <!--modal-->

        <div class="container">
            <div class="modal"
                 id="searchFilter"
                 tabindex="-1" role="dialog"
                 aria-labelledby="searchFilter">

                <div class="modal-dialog">

                    <a href="#" class="close-dialog-popup" data-dismiss="modal">
                        <i class="fa fa-close"></i>
                    </a>

                    <div class="main_popup_content">

                        <div class="col-xs-12">
                            <div class="filter-mobile-sidebar ">
                                <ProductAsideCategories
                                        :productsInfo="products"
                                        :categoryId="categoryId"
                                        :subCategoryId="subCategoryId"
                                        :provinceId="provinceId"
                                        :cityId="cityId"
                                        v-on:productsToParent="filterProducts($event)"/>

                            </div>
                        </div>
                    </div>
                </div><!-- /.modal-dialog -->
            </div>
        </div>

        <div class="flat-plust-icon hidden-lg hidden-md">
            <a href="#" @click.prevent="addProductOrRequest()"><i class="fa fa-plus"></i> </a>
        </div>

        <div class="sub-header-fix sub-header container-fluid">

            <div class="search-box col-sm-8 col-xs-12 col-md-5">
                <input type="text" v-model="searchText" placeholder="اینجا جستجو کنید">

                <button class="btn-search">
                    <i class="fa-search fa"></i>
                </button>

                <button class="btn-filter  hidden-lg hidden-md"
                        data-toggle="modal" data-target="#searchFilter">
                    فیلتر
                    <i class="fa fa-filter"></i>
                </button>

            </div>

            <div class="links-sub-header   hidden-xs col-sm-4 col-xs-7 ">
                <ul class="list-inline">
                    <li class="list-item active">
                        <a href="">
                            لیست محصولات
                        </a>
                    </li>
                </ul>
            </div>
        </div>


        <main id="main" class="container-fluid ">
            <div class="row">
                <div class="col-xs-12 col-md-9">
                    <section class="main-content col-xs-12" v-if="products.length > 0  ">
                        <div class="row">
                           <div id="article-list">

                             <ProductArticle v-for="(product,productIndex) in products"
                                            v-if="products.length >= productIndex"
                                            :key="product.main.id"
                                            :product="product"
                                            :loading_img="loading_img"
                                            :defultimg="defultimg"
                                            :str="str"
                                            :loading="loading"
                                            :currentUser="currentUser"
                            />


                           </div>
                            <div class="load-more-button"
                                 v-if="searchText === '' && continueToLoadProducts === true ">
                                <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                                    <div class="row">
                                        <a href="#" class="btn btn-loader hidden-xs" @click.prevent="feed()">
                                            <div class="btn-content">
                                        <span v-show="!loadMoreActive">
                                            مشاهده محصولات بیشتر
                                        </span>

                                                <span v-show="!loadMoreActive"
                                                      class="fa fa-plus-circle"></span>

                                                <img v-show="loadMoreActive" :src="loading_img">
                                            </div>
                                        </a>

                                        <a href="#" class="btn btn-loader hidden-sm hidden-md hidden-lg"
                                           @click.prevent="feed()">
                                            <div class="btn-content">

                                    <span v-show="!loadMoreActive">
                                        بیشتر
                                    </span>

                                                <span v-show="!loadMoreActive"
                                                      class="fa fa-plus-circle"></span>

                                                <img v-show="loadMoreActive" :src="loading_img">

                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="main-content  col-xs-12"
                             v-else-if="products.length === 0 && searchActive === true">
                        <p></p>

                        <h4 class="text-center" dir="rtl">جستجو نتیجه ای نداشت.</h4>

                        <p>شما میتوانید درخواست خرید خود را در اینجا ثبت کنید.</p>

                        <br/>

                        <div class="text-center">
                            <button class="btn btn-success">درخواست خرید</button>
                        </div>

                    </section>

                    <section class="main-content  col-xs-12 "
                             v-else-if="products.length === 0 && searchText !== '' ">
                        <p></p>

                        <h4 class="text-center" dir="rtl">جستجو نتیجه ای نداشت.</h4>

                        <p class="text-center" dir="rtl">شما میتوانید درخواست خرید خود را در اینجا ثبت کنید.</p>
                        <br/>

                        <div class="text-center">
                            <a class="green-button col-xs-4 " @click.prevent="registerRequestInSearchNotFoundCase()">درخواست
                                خرید
                            </a>
                            <br/>

                            <a class="green-button col-xs-4 " @click="resetFilter()">نمایش همه محصولات</a>

                        </div>

                        <br/>
                    </section>

                    <section class="main-content  col-xs-12 "
                             v-else-if="products.length === 0 && searchText === '' ">
                        <p></p>

                        <h4 class="text-center" dir="rtl">جستجو نتیجه ای نداشت.</h4>

                        <p class="text-center" dir="rtl">شما میتوانید درخواست خرید خود را در اینجا ثبت کنید.</p>

                        <br/>

                        <div class="text-center">
                            <a class="green-button col-xs-4 " @click.prevent="registerRequestInSearchNotFoundCase()">
                                درخواست
                                خرید
                            </a>

                            <br/>
                            <a class="green-button col-xs-4 " @click.prevent="resetFilter()">نمایش همه محصولات</a>
                        </div>

                        <br/>
                    </section>




                    <section v-else style="padding-top:0; "  class="padding-15-0  col-xs-12"

                             >

                             <div class="margin-15-0 default-item-wrapper shadow-content row">

                                 <div class="default-user-contents col-xs-12  col-sm-3">

                                     <div class=" default-boxing-size placeholder-content default-article-user-image"></div>

                                     <div class="text-center xs-text-right">

                                         <span class="placeholder-content default-boxing-size content-half-width "></span>

                                     </div>

                                        <span class="xs-default-user-button placeholder-content default-boxing-size default-button-full-with margin-0"></span>

                                         <span class="hidden-xs placeholder-content default-boxing-size default-button-full-with margin-0"></span>


                                 </div>

                                 <div class="default-article-contents col-xs-12  col-sm-9">

                                     <div class="default-wrapper-main-image pull-right  col-xs-12 col-sm-5">

                                         <span class="default-main-image  placeholder-content"></span>

                                     </div>

                                      <br/>

                                    <div class=" default-main-article-content col-xs-12 col-sm-7">
                                            <span class="content-half-width placeholder-content default-input-boxing-size"></span>

                                            <span class="default-boxing-size content-full-width placeholder-content "></span>

                                            <span class="default-boxing-size content-half-width placeholder-content "></span>

                                             <span class="default-boxing-size content-default-width placeholder-content "></span>

                                            <span class="default-boxing-size content-half-width placeholder-content "></span>

                                         </div>
                                 </div>
                             </div>


                          <div class="margin-15-0 default-item-wrapper shadow-content row">

                                 <div class="default-user-contents col-xs-12  col-sm-3">

                                     <div class=" default-boxing-size placeholder-content default-article-user-image"></div>

                                     <div class="text-center xs-text-right">

                                         <span class="placeholder-content default-boxing-size content-half-width "></span>

                                     </div>

                                        <span class="xs-default-user-button placeholder-content default-boxing-size default-button-full-with margin-0"></span>

                                         <span class="hidden-xs placeholder-content default-boxing-size default-button-full-with margin-0"></span>


                                 </div>

                                 <div class="default-article-contents col-xs-12  col-sm-9">

                                     <div class="default-wrapper-main-image pull-right  col-xs-12 col-sm-5">

                                         <span class="default-main-image  placeholder-content"></span>

                                     </div>

                                      <br/>

                                    <div class=" default-main-article-content col-xs-12 col-sm-7">
                                            <span class="content-half-width placeholder-content default-input-boxing-size"></span>

                                            <span class="default-boxing-size content-full-width placeholder-content "></span>

                                            <span class="default-boxing-size content-half-width placeholder-content "></span>

                                             <span class="default-boxing-size content-default-width placeholder-content "></span>

                                            <span class="default-boxing-size content-half-width placeholder-content "></span>

                                         </div>
                                 </div>
                             </div>




                                 <div class="margin-15-0 default-item-wrapper shadow-content row">

                                 <div class="default-user-contents col-xs-12  col-sm-3">

                                     <div class=" default-boxing-size placeholder-content default-article-user-image"></div>

                                     <div class="text-center xs-text-right">

                                         <span class="placeholder-content default-boxing-size content-half-width "></span>

                                     </div>

                                        <span class="xs-default-user-button placeholder-content default-boxing-size default-button-full-with margin-0"></span>

                                         <span class="hidden-xs placeholder-content default-boxing-size default-button-full-with margin-0"></span>


                                 </div>

                                 <div class="default-article-contents col-xs-12  col-sm-9">

                                     <div class="default-wrapper-main-image pull-right  col-xs-12 col-sm-5">

                                         <span class="default-main-image  placeholder-content"></span>

                                     </div>

                                      <br/>

                                    <div class=" default-main-article-content col-xs-12 col-sm-7">
                                            <span class="content-half-width placeholder-content default-input-boxing-size"></span>

                                            <span class="default-boxing-size content-full-width placeholder-content "></span>

                                            <span class="default-boxing-size content-half-width placeholder-content "></span>

                                             <span class="default-boxing-size content-default-width placeholder-content "></span>

                                            <span class="default-boxing-size content-half-width placeholder-content "></span>

                                         </div>
                                 </div>
                             </div>


                    </section>
                </div>


                <aside id="sidebar" class=" product-sidebar sidebar hidden-xs  hidden-sm col-md-3">

                    <div class="row">

                        <div class="sidebar__inner col-xs-12" style="position: relative;">


                            <ProductAsideCategories
                                    :productsInfo="products"
                                    :categoryId="categoryId"
                                    :subCategoryId="subCategoryId"
                                    :provinceId="provinceId"
                                    :cityId="cityId"
                                    v-on:productsToParent="filterProducts($event)"
                            />


                     </div>

                    </div>

                </aside>


            </div>

        </main>

    </div>
</template>
<script>
    import ProductArticle from './product_components/product_article'
    import ProductAsideCategories from './product_components/sidebar/product_aside_categories'
    import {eventBus} from "../../../../js/router/dashboard_router";
    import StickySidebar from 'sticky-sidebar';

    var visible = false;
    export default {
        components: {
            ProductArticle,
            ProductAsideCategories,
        },
        props: [
            'str',
            'defultimg',
            'loading_img',
        ],
        data: function () {
            return {
                currentUser: {
                    profile: '',
                    user_info: ''
                },
                products: {
                    main: '',
                    user_info: '',
                    profile_info: {
                        profile_photo: ''
                    },
                    photos: [],
                },
                searchText: '',
                provinceId: '',
                categoryId: '',
                subCategoryId: '',
                cityId: '',
                searchValue: this.$route.params.searchText,
                scrolled: false,
                productCountInPage: 6,
                productCountInEachLoad: 5,
                continueToLoadProducts: true,
                searchActive: false,
                errors: '',
                popUpMsg: '',
                submiting: false,
                loading: false,
                bottom: false,
                loadMoreActive: false,
                searchTextTimeout: null,
            }
        },
        methods: {
            filterProducts: function (productsFilter) {
                this.products = productsFilter;
            },
            collapseDropDown: function () {
                $(".profile-list").fadeIn("slow", function () {
                    visible = true;
                });
            },
            collapseDropDownList: function () {
                $(".icon-header-list").fadeIn("slow", function () {
                    visible = true;
                });
            },
            documentClick(e) {
                if (visible) {
                    $('.profile-list').fadeOut("slow");
                    $('.icon-header-list').fadeOut("slow");
                    visible = false;
                }
            },
            init: function () {
                this.scrollToTop();
                var self = this;
                var searchValue = this.searchValue;
                var searchValueText = searchValue;
                let categoryName = this.getCategoryName();
                

                axios.post('/user/profile_info')
                    .then(function (response) {
                        self.currentUser = response.data;
                        if (searchValueText) {
                            self.registerComponentStatistics('homePage', 'search-text', searchValueText);
                            self.searchText = searchValueText;
                             setTimeout(function(){
                                    self.sidebarScroll();
                                },500)
                        }
                        else {
                            self.loading = true;
                            axios.post('/user/get_product_list', {
                                from_record_number: 0,
                                to_record_number: self.productCountInPage,
                                search_text:categoryName

                            }).then(function (response) {
                                self.products = response.data.products;
                                self.loading = false;
                                setTimeout(function(){
                                    self.sidebarScroll();
                                },500)
                                eventBus.$emit('submiting', false);

                            });
                        }
                    });

            },
            feed() {

                var self = this;
                if (this.searchText === '' && this.provinceId === '' && this.categoryId === '' && this.continueToLoadProducts) {
                    this.loadMoreActive = true;

                    this.productCountInPage += this.productCountInEachLoad;

                    axios.post('/user/get_product_list', {
                        from_record_number: 0,
                        to_record_number: this.productCountInPage,
                        search_text:this.getCategoryName()
                    }).then(function (response) {
                        self.products = response.data.products;

                        if (self.products.length + 1 < self.productCountInPage) {
                            self.continueToLoadProducts = false;
                        }

                        self.loadMoreActive = false;

                        setTimeout(function(){
                            self.sidebarScroll();
                        },500)
                    });

                  eventBus.$emit('submiting', false);

                }

            },
            registerRequestInSearchNotFoundCase: function () {

                if (this.currentUser.profile) {
                    if (this.currentUser.user_info.is_buyer) {
                        window.location.href = '/dashboard/register-request';
                    }
                    else {
                        this.popUpMsg = 'حساب کاربری شما از نوع خریدار نیست.';
                        eventBus.$emit('submitSuccess', this.popUpMsg);
                        $('#custom-main-modal').modal('show');
                    }
                }
                else {
                    this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    $('#auth-popup').modal('show');
                }
            },
            bottomVisible: function () {
                const scrollY = window.scrollY;
                const visible = document.documentElement.clientHeight;
                const pageHeight = document.documentElement.scrollHeight;
                const bottomOfPage = visible + scrollY >= pageHeight;
                return bottomOfPage || pageHeight < visible;
            },
            addProductOrRequest: function () {
                if (this.currentUser.user_info) {
                    if (this.currentUser.user_info.is_seller) {
                        this.registerComponentStatistics('product-list', 'register-product', 'seller clicks on plus button');

                        window.location.href = '/dashboard/register-product';
                    }
                    else if (this.currentUser.user_info.is_buyer) {
                        this.registerComponentStatistics('product-list', 'register-request', 'seller clicks on plus button');

                        window.location.href = '/dashboard/register-request';
                    }
                }
                else {
                    this.registerComponentStatistics('product-list', 'unauthorized-user-clicks-on-plus-btn', 'unauthorized-user-clicks-on-plus-btn');

                    this.popUpMsg = 'برای ثبت آگهی خرید یا فروش  ابتدا وارد سامانه شوید یا ثبت نام کنید.';
                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    $('#auth-popup').modal('show');
                }
            },
            resetFilter: function () {


                eventBus.$emit('submiting', true);

                $('.box-sidebar option').prop('selected', function () {
                    return this.defaultSelected;
                });

                this.searchText = '';
                this.provinceId = '';
                this.categoryId = '';
                this.subCategoryId = '';
                this.cityId = '';

                this.init();

            },
            applyFilter: function () {
                var self = this;

                eventBus.$emit('submiting', true);

                var searchObject = {};

                if (this.categoryId) {
                    searchObject.category_id = this.categoryId;
                }
                if (this.subCategoryId) {
                    searchObject.sub_category_id = this.subCategoryId;
                }
                if (this.provinceId) {
                    searchObject.province_id = this.provinceId;
                }
                if (this.cityId) {
                    searchObject.city_id = this.cityId;
                }
             
                searchObject.search_text = this.getCategoryName();
                

                if (jQuery.isEmptyObject(searchObject)) {
                    searchObject.from_record_number = 0;
                    searchObject.to_record_number = 5;
                }

                axios.post('/user/get_product_list', searchObject)
                    .then(function (response) {
                        self.products = response.data.products;
                        eventBus.$emit('submiting', false);
                        self.scrollToTop();

                        setTimeout(function () {
                            self.sidebarScroll()
                        },500)
                    })
                    .catch(function (err) {
                        alert('error');
                    });

            },
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            stopLoader: function () {
                eventBus.$emit('isLoading', false);
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
            registerComponentExceptions: function (description, fatal = false) {
                gtag('event', 'exception', {
                    'description': description,
                    'fatal': fatal
                });
            },
            sidebarScroll() {


                var sidebarStopper = $('#wrap-footer').height();

                   var sidebar = new StickySidebar('#sidebar', {
                        containerSelector: '#article-list',
                        innerWrapperSelector: '.sidebar__inner',
                        topSpacing: 160,
                        resizeSensor: true,

                    });

            },
            getCategoryName:function(){
                let name = this.$route.params.categoryName;
                
                return name.replace('-',' ');
            }
        },
        watch: {
            searchText: function () {
                var self = this;

                clearTimeout(this.searchTextTimeout);

                this.searchTextTimeout = setTimeout(function () {
                self.registerComponentStatistics('product-list', 'search-text', self.searchText);

                    self.applyFilter();

                }, 1500);

            },

            bottom(bottom) {
                if (bottom) {
                    this.feed()
                }
            },
        },
        created() {
            gtag('config', 'UA-129398000-1', {'page_path': '/product-list'});

            document.addEventListener('click', this.documentClick);
        },
        mounted() {
            this.init();

            this.stopLoader();

        }
    }

</script>
