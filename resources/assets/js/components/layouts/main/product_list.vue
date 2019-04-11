<style scoped>


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
    }

    .search-box button {
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
        background: #28a745;
        height: 3px;
        width: 100%;
    }

    .right-sidebar {
        float: right;
    }

    .right-sidebar > div {
        background: #fff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        display: block;
        margin-top: -64px;
        padding: 8px 15px;
        border-radius: 0 0 5px 5px;
    }

    .title-sidebar {
        font-size: 23px;
        font-weight: bold;
        color: #4c5058;
        text-align: center;
        margin: 15px auto;
    }

    .box-sidebar {
        text-align: center;
        direction: rtl;
        margin-bottom: 30px;

    }

    .content-sidebar {
        margin: 50px auto;
    }

    .content-sidebar i {
        margin-left: 5px;
        font-size: 17px;
    }

    .box-sidebar select {
        border-radius: 3px;
        border: 1px solid #4c5058;
        width: 80%;
        padding: 5px 15px;
    }

    .main-content {
        padding-bottom: 40px;
    }



    .main-content > h4 {
        margin: 30px auto;
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

    .green_bot:hover {
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
    .main-padding-fix {
        padding-top: 72px;
    }
    .sidebar-fix {
        position: fixed;
        right: 0;
        top: 145px;
        z-index: 2;
    }

    .logo {
        text-align: right;
        float: right;
        width: 190px;
        padding-right: 15px;
    }

    .logo img {
        width: 150px;
    }

    li.active a {
        color: #313942;
    }

    li.active a::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #28a745;
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

    @media screen and (max-width: 992px) {

        .title-page {
            text-align: center;
        }

        .right-sidebar {
            display: none;
        }
    }

    @media screen and (max-width: 767px) {
        .main-image {
            padding: 0;
        }
        .main-content > .row {
            margin:0;
        }
        .sub-header {

            background: #f0f3f6;
            padding-top: 80px;

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

        .user-contents > .green_bot {
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

        .user-contents > .green_bot {

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
            padding-left: 3px;
            padding-left: 35px;
            float: left;

        }

        /*.user-contents > p {

            float: none;
            font-size: inherit;
            padding-top: 0;
            padding-right: 0;

        }
        .user-image {

            float: none;
            width: 60px;
            height: 60px;

        }
        .user-contents > .green_bot {

            float: none;
            width: initial;
            padding: 10px 17px;
            margin-top: 11px;

        }*/
    }

</style>
<template>
    <div>
        <header id="header" class="hidden-xs  main-header">
            <h1 class="title-page col-xs-12">
                لیست محصولات
            </h1>
        </header>
        <div class="sub-header container-fluid">

            <div class="search-box col-sm-4 col-xs-12">
                <input type="text" v-model="searchText" placeholder="لطفا محصول مورد نظر خود را جستجو کنید">
                <!--    <input type="text" placeholder="لطفا محصول مورد نظر خود را جستجو کنید" v-model="searchText">-->
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


        <product-aside-categories>
            
        </product-aside-categories>
        <main id="main" class="col-xs-12 col-md-9">
                <section class="main-content col-xs-12" v-if="products.length > 0">
                    <div class="row">

                        <product-article
                                :products="products"
                                :loading_img="loading_img"
                                :defultimg="defultimg"
                                :str="str"
                                :loading="loading"
                                :popUpMsg="popUpMsg"
                        >
                        </product-article>
                        <div class="load-more-button" v-if="searchText == '' && continueToLoadProducts == true ">
                            <div class="col-xs-12 col-sm-6 col-sm-offset-3">
                               <div class="row">
                                   <a href="#" class="btn btn-loader hidden-xs" @click.prevent="feed()">
                                       <div class="btn-content">
<span>                                   مشاهده محصولات بیشتر
</span>
                                           <span class="fa fa-plus-circle"></span>
                                           <img v-show="loadMoreActive" :src="loading_img"
                                                style="width:200px;height:200px">
                                       </div>
                                   </a>
                                   <a href="#" class="btn btn-loader hidden-sm hidden-md hidden-lg" @click.prevent="feed()">
                                       <div class="btn-content">
                                    <span>
                                        بیشتر
                                    </span>
                                           <span class="fa fa-plus-circle"></span>
                                           <img v-show="loadMoreActive" :src="loading_img"
                                                style="width:200px;height:200px">

                                       </div>
                                   </a>

                               </div>
                            </div>
                        </div>
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
                        <a class="green_bot col-xs-4 " @click="registerRequestInSearchNotFoundCase()">درخواست خرید</a>
                    </div>
                    <br/>
                </section>
                <section class="loading_images  col-xs-12" v-else-if="loadMoreActive == true">
                    <img :src="loading_img" style="width:200px;height:200px">

                </section>
                <section class="loading_images  col-xs-12" v-else>
                    <img :src="loading_img" style="width:200px;height:200px">
                </section>


        </main>


    </div>
</template>
<script>
    import productArticle from './product_components/product_article'
    import productAsideCategories from './product_components/product_aside_categories'

    var viz = false;

    export default {
        components:{
            "product-article": productArticle,
            "product-aside-categories": productAsideCategories,

        },
        props: [
            'str',
            'defultimg',
            'loading_img',
        ],
        data: function () {
            return {
                products: {
                    main: '',
                    user_info: '',
                    profile_info: {
                        profile_photo: ''
                    },
                    photos: [],
                },
                searchText: '',
                searchValue:this.$route.params.searchText,
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
            }
        },
        methods: {
            subBut: function (link) {
                var index = ($(link).parents('article').index() + 1);
                var productId = $('article:nth-of-type(' + index + ') .buy_details input#product-id');
                var requirementAmount = $('article:nth-of-type(' + index + ') .buy_details input#requirement-amount');
                var packType = $('article:nth-of-type(' + index + ') .buy_details input#pack-type');
                var description = $('article:nth-of-type(' + index + ') .buy_details textarea#description');
            },


            dropdown: function () {
                $(".profile-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            dropdownList: function () {
                $(".icon-header-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            documentClick(e) {
                if (viz) {
                    $('.profile-list').fadeOut("slow");
                    $('.icon-header-list').fadeOut("slow");
                    viz = false;
                }
            },
            init: function () {
                var self = this;
                var searchValue = this.searchValue;
                var searchValueText = searchValue;

                if (searchValueText) {
                    this.registerComponentStatistics('homePage','search',searchValueText);
                    this.searchText = searchValueText;
                }
                else {
                    self.loading = true;
                    axios.post('/user/get_product_list', {
                        from_record_number: 0,
                        to_record_number: this.productCountInPage,
                    }).then(function (response) {
                        self.products = response.data.products;
                        self.productCountInPage = self.products.length;
                        self.loading = false;
                    });
                }


                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));

                axios.post('/location/get_location_info')
                    .then(response => (this.provinceList = response.data.provinces));
            },

            feed() {
//              var offset = $(window).scrollTop() + $(window).height();
//              var height = $(document).height();

                var self = this;

                if (this.searchText == '' && this.provinceId == '' && this.categoryId == '' && this.continueToLoadProducts) {
                    this.loadMoreActive = true;

                    this.productCountInPage += this.productCountInEachLoad;

                    axios.post('/user/get_product_list', {
                        from_record_number: 0,
                        to_record_number: this.productCountInPage,
                    }).then(function (response) {
                        self.products = response.data.products;

                        if (self.products.length + 1 < self.productCountInPage) {
                            self.continueToLoadProducts = false;
                        }

                        self.loadMoreActive = false;
                    });
                }

            },

            registerRequestInSearchNotFoundCase: function () {
                if (this.currentUser.profile) {
                    if (this.currentUser.user_info.is_buyer) {
                        window.location.href = '/dashboard/#/register-request';
                    }
                    else {
                        this.popUpMsg = 'حساب کاربری شما از نوع خریدار نیست.';
                        $('#myModal').modal('show');
                    }
                }
                else {
                    this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    $('#myModal2').modal('show');
                }
            },
            bottomVisible: function () {
                const scrollY = window.scrollY;
                const visible = document.documentElement.clientHeight;
                const pageHeight = document.documentElement.scrollHeight;
                const bottomOfPage = visible + scrollY >= pageHeight;
                return bottomOfPage || pageHeight < visible;
            },
            registerComponentStatistics:function(categoryName,actionName,labelName){
                gtag('event',actionName,{
                    'event_category' : categoryName,
                    'event_label'    : labelName
                });
            }
        },
        watch: {
            searchText: function () {
                var self = this;
                axios.post('/user/get_product_list')
                    .then(function (response) {
                        self.products = '';
                        self.loading = true;
                        var text = self.searchText.split(' ');
                        self.products = response.data.products.filter(function (product) {
                            return text.every(function (el) {
                                if (product.main.product_name.indexOf(el) > -1 ||
                                    product.main.province_name.indexOf(el) > -1 ||
                                    product.main.city_name.indexOf(el) > -1 ||
                                    product.main.category_name.indexOf(el) > -1 ||
                                    product.main.sub_category_name.indexOf(el) > -1) {
                                    return true;
                                }
                                else return false;
                            });
                        });
                        self.loading = false;
                    });
            },

            bottom(bottom) {
                if (bottom) {
                    this.feed()
                }
            },
        },
        created() {
            document.addEventListener('click', this.documentClick)
            //window.addEventListener('scroll', this.handleScroll);
//        window.addEventListener('scroll', () => {
//          this.bottom = this.bottomVisible();
//            this.feed();
//        });

        },
        destroyed() {
            //window.removeEventListener('scroll', this.handleScroll);
        },
        mounted() {
            this.init();
        },
    }
</script>
