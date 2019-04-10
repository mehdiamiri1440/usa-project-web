
<style scoped>

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1.5em;
        font-family: IRANSans, sans-serif;
        font-size: 14px;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img, svg {
        width: 100%;
    }

    a, a:hover, a:visited, a:focus, a:active {
        text-decoration: none;
        transition: 300ms;
    }

    th, td {
        padding: 7px;
        text-align: right;
    }

    .owl-carousel{
        direction: ltr;
    }
    .owl-carousel img{
        border-radius: 3px;
    }

    .header-nav {
        direction: rtl;
        text-align: left;
        padding: 28px 30px;
        font-size: 17px;
    }

    .header-nav a {
        color: #d0d0d0;
    }

    .header-nav a:hover {
        color: #fff;
    }

    .profile-list {
        position: absolute;
        width: 165px;
        background: #fff;
        padding: 8px 10px;
        border-radius: 3px;
        box-shadow: 0 0 3px #313a43;
        text-align: right;
        left: 0;
        top: 57px;
        display: none;
        z-index: 999;
    }

    .profile-list li {
        margin: 5px;
    }

    .profile-list a {
        width: 100%;
        display: inline-block;
        color: #3c3c3c;
    }

    #header {
        background: url("../../../../../../public/assets/img/topheader.jpg");
        background-position: 50% 30%;
        color: #fff;
        background-size: cover;
        overflow: hidden;
        padding-bottom: 30px;
    }

    .title-page {
        text-align: center;
        margin: 30px auto 0;
    }

    .sub-header {
        background: #f0f3f6;
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
        right: 21px;
        top: 8px;
        border-left: 1px solid;
        color: #666;
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
    .right-sidebar{
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
    .main-content{
        margin-bottom: 30px ;
    }
    .main-content > h4{
        margin: 30px auto;
    }
    .main-content-item {
        direction: rtl;
        float: left;
        width: 100%;
        margin: 24px auto;
        border-radius: 5px;
        box-shadow: 0 0 5px #cfcfcf;
        padding: 15px 0;
    }

    .main-article-title {
        margin: 15px auto;
        font-weight: bold;
    }

    .main-article-title a {
        color: #4c5058;
    }

    .main-article-title a:hover {
        color: #444;
    }

    .main-article-content {
        padding: 0 15px;
    }

    .main-article-content p {
        margin-bottom: 15px;
        font-size: 15px;
        font-weight: bold;
    }

    .main-article-content p span {
        font-weight: normal;
    }

    .image-article-content {
        padding: 0;
        padding-top: 10px;
        height: 240px;
        overflow: hidden;
    }
    .image-article-content img{
        height: 100%;
    }
    .image-article-content > div{
        display: none;
    }
    .image-article-content > div:first-of-type{
        display: block;
    }

    .image-article-content a:hover img {
        filter: grayscale(0);
        transition: 300ms;
    }

    .image-article-content img {
        transition: 300ms;
        filter: grayscale(40%);
    }

    .user-contents {
        border-right: 2px solid #f0f3f6;
        text-align: center;
        padding: 0 20px;
    }
    .create_buy{
        position: relative;
    }
    .buy_details{
        border-top: 2px solid #f0f3f6;
        padding: 15px 0;
        margin: 15px auto;
        display: block;
    }
    .buy_details > div{
        margin: 7px auto;
    }
    .user-image {
        width: 135px;
        height: 135px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto 10px;
    }

    .user-image img ,.user-image > div{
        height: 100%;
    }

    .buy_details  .green_bot {
        margin: 5px auto;
        display: inline-block;
        background: #28a745;
        color: #fff;
        border-radius: 3px;
        text-align: center;
        font-size: 12px;
        width: initial;
        line-height: 21px;
        padding: 8px 30px;
    }
    .buy_details   .submit-button {
        text-align: center;
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
        border: none;
    }
    .green_bot:hover {
        background: #279b41;
        color: #fff;
        cursor: pointer;
    }
    .gray_bot {
        margin: 5px auto;
        display: inline-block;
        background: #444444;
        color: #fff;
        padding: 15px 30px;
        border-radius: 3px;
        text-align: center;
        font-size: 12px;
        line-height: 21px;
    }
    .gray_bot:hover {
        background: #222;
        color: #fff;
        cursor: pointer;
    }
    .gray_bot:active ,.gray_bot:focus {
        color: #fff;
    }
    .text-des{
        margin: 15px auto;
        float: left;
        width: 100%;
    }
    .sec-button{
        text-align: center;
    }
    .sub-header-fix{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
    }
    .sidebar-fix{
        position: fixed;
        right: 0;
        top: 64px;
        z-index: 2;
    }

    .logo{
        padding: 10px ;
        text-align: right;
        float: right;
        width: 190px;
    }
    .logo img{
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
    @media screen and (max-width: 1199px) {
        /*.logo {*/
        /*float: none;*/
        /*margin: 0 auto;*/
        /*}*/
        .user-image {
            width: 100px;
            height: 100px;
            overflow: hidden;
            border-radius: 50%;
            margin: 0 auto 10px;
        }
    }
    @media screen and (max-width: 992px) {
        .user-image {
            width: 80px;
            height: 80px;
            overflow: hidden;
            border-radius: 50%;
            margin: 0 auto 10px;
            float: right;
        }
        .user-contents > img {
            display: none;
        }
        .title-page {
            text-align: center;
            margin: 30px auto 0;
        }
        .right-sidebar {
            display: none;
        }
        .main-image {
            padding: 0;
        }
        .sub-header {

            background: #f0f3f6;
            padding-top: 80px;

        }

        .create_buy_mobile {
            display: block;
        }

        .links-sub-header {
            direction: rtl;
            text-align: center;
        }

        .logo img {
            width: 100%;
        }

        .user-contents > p {
            float: right;
            font-size: 18px;
            padding-top: 30px;
            padding-right: 20px;
        }

        .green_bot {
            float: none;
            width: initial;
            padding: 10px 25px;
            margin-top: 20px;
        }
        .create_buy {
            display: none;
        }
        .main-content {
            margin-bottom: 0;
            padding-bottom: 0;
        }
    }
    @media screen and (max-width: 768px) {
        .links-sub-header {
            direction: rtl;
            text-align: center;
        }
        .logo img {
            width: 100%;
        }
        .user-contents > img{
            display: none;
        }
        #main {
            padding-top: 75px;
        }

    }

    @media screen and (max-width: 715px) {
        .name-header-profile{
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
        #main,.main-content,.wrapper-related-products{
            padding-left:0 ;
            padding-right:0 ;
        }
        .logo {
            padding: 6px 10px;
        }
        .user-image {
            width: 60px;
            height: 60px;
            overflow: hidden;
            border-radius: 50%;
            margin: 10px auto 10px;
            float: right;
        }
        .green_bot {
            float: left;
            padding: 10px 5px;
            margin-top: 11px;
            font-size: 10px;
        }
        .user-contents > p {
            float: right;
            font-size: inherit;
            padding-top: 28px;
            padding-right: 5px;
        }

    }

    @media screen and (max-width: 430px) {
        .user-image {
            width: 50px;
            height: 50px;
        }
        .logo {
            padding: 6px 63px;
            width: 100%;
            height: 109px;
        }

    }

</style>
<template>
    <div>
        <header id="header" class="hidden-xs  main-header">
            <h1 class="title-page col-xs-12">
                لیست محصولات
            </h1>
        </header>
        <main id="main" class="container-fluid">
            <section class="main-content col-xs-12">
                <div class="main-content-item">
                    <div class="user-contents  col-sm-3">
                        <img :src="siteLogo">
                        <!--  <div class="user-image" v-if="product.profile_info.profile_photo">
                              <img v-bind:src="str + '/' + product.profile_info.profile_photo">
                          </div>
                          <div class="user-image" v-else>
                              <img :src="defultimg" class="image_defult">
                          </div>
                          <p v-if="product.user_info">سعید رادمنش</p>
                          <a v-bind:href="'profile/' + product.user_info.user_name" class="green_bot">
                              مشاهده پروفایل تامین کننده
                          </a>-->
                    </div>
                    <div class="article-contents  col-sm-9 ">
                        <div class="main-article-content col-sm-7">
                            <h2 class="main-article-title">
                                خشکبار - بادام
                            </h2>

                            <p>نوع محصول: <span>دارابی</span></p>
                            <p> قیمت (هرکیلو به تومان): <span>25000</span></p>
                            <p> میزان موجودی (کیلوگرم): <span>2000</span></p>
                            <p>محل تحویل کالا:
                                <span>گیلان</span></p>

                        </div>
                        <div class="image-article-content col-sm-5">
                            <!-- <popup v-if="product.photos[0]" v-for="photo in product.photos" :base="str + '/'"
                                    :img="photo.file_path"></popup>-->
                        </div>
                        <div class="text-des">
                            <p>توضیحات: <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="sec-button">
                    <a href="#" class="btn gray_bot">نمایش دیگرمحصولات</a>
                </div>

            </section>
        </main>
    </div>
</template>



<script>
    var viz = false;
    var PopupImage =  {
        data:function(){
            return {
                imgSrcs:'',
            };
        },
        props:['img','base'],
        template: '<div>' +
            '<a   :href="base + img">'+
            '<img :src="base + img">'+
            '</a>'+
            '</div>',
        mounted: function(){
            $(this.$el).parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                }
            });

        }
    };
    var OwlCarouselLists =  {
        data:function(){
            return {
                imgSrcs:'',
            };
        },
        props:['img','base'],
        template: '<div class="image-wrapper">' +
            '<a  :href="base + img">'+
            '<img :src="base + img">'+
            '</a>'+
            '</div>',
        mounted: function(){
            $(".owl-carousel").owlCarousel({
                loop:false,
                items:1,
                margin:10,
                nav:false,
                dots:true
            });
            $(this.$el).parent().parent().parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                }
            });
        },
    };
    export default {

        props:[
            'siteLogo',
            'str',
            'defultimg',
            'loading_img',
        ],
        data: function(){
            return{
                currentUser:{
                    profile:'',
                    user_info:''
                },
                products:{
                    main:'',
                    user_info:'',
                    profile_info:{
                        profile_photo:''
                    },
                    photos:[],
                },
                categoryList:'',
                subCategoryList:'',
                provinceList:'',
                cityList:'',
                categoryId:'',
                subCategoryId:'',
                provinceId:'',
                cityId:'',
                searchText:'',
                scrolled:false,
                productCountInPage:6,
                productCountInEachLoad:5,
                continueToLoadProducts:true,
                searchActive:false,
                errors:'',
                popUpMsg:'',
                submiting:false,
                loading:false,
                bottom:false,
                loadMoreActive:false,
            }
        },
        methods:{
            subBut:function(link) {
                var index = ($(link).parents('article').index() + 1);
                var productId = $('article:nth-of-type(' + index + ') .buy_details input#product-id');
                var requirementAmount = $('article:nth-of-type(' + index + ') .buy_details input#requirement-amount');
                var packType = $('article:nth-of-type(' + index + ') .buy_details input#pack-type');
                var description = $('article:nth-of-type(' + index + ') .buy_details textarea#description');
            },
            scrull_css_header:function() {
                var get_with = $(window).width();
                var headerElement = $(".sub-header");
                var sidebarElement = $(".right-sidebar");
                if (get_with > 751) {
                    headerElement.removeClass("sub-header-fix");
                    sidebarElement.removeClass("sidebar-fix");
                }
                $(window).resize(function () {
                    get_with = $(window).width();
                    if (get_with > 751) {
                        headerElement.removeClass("sub-header-fix");
                        sidebarElement.removeClass("sidebar-fix");
                    }
                });
                $(window).scroll(function () {
                    var sc = $(this).scrollTop();
                    $(window).resize(function () {
                        get_with = $(window).width();
                        if (get_with > 751) {
                            headerElement.removeClass("sub-header-fix");
                            sidebarElement.removeClass("sidebar-fix");
                        }
                    });
                    if (sc >= 202) {
                        if (get_with > 751) {
                            headerElement.addClass("sub-header-fix");
                            sidebarElement.addClass("sidebar-fix");

                        } else {
                            headerElement.removeClass("sub-header-fix");
                            sidebarElement.removeClass("sidebar-fix");
                        }
                    } else {
                        headerElement.removeClass("sub-header-fix");
                        sidebarElement.removeClass("sidebar-fix");
                    }
                })
            },
            formBut:function(link) {
                $index = ($(link).parents('article').index() + 1);
                $element = $('article:nth-of-type(' + $index + ') .buy_details');
                $element.slideToggle("125", "swing");
                $('.buy_details').not($element).slideUp();
            },
            dropdown:function() {
                $(".profile-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            dropdownList:function() {
                $(".icon-header-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            documentClick(e){
                if (viz) {
                    $('.profile-list').fadeOut("slow");
                    $('.icon-header-list').fadeOut("slow");
                    viz = false;
                }
            },
            init:function(){
                var self = this;
                var searchValueText = this.searchValue;

                if(searchValueText){
                    this.registerComponentStatistics('homePage','search',searchValueText);
                    this.searchText = searchValueText;
                }
                else{
                    self.loading = true;
                    axios.post('/user/get_product_list',{
                        from_record_number:0,
                        to_record_number:this.productCountInPage,
                    }).then(function(response){
                        self.products = response.data.products;
                        self.productCountInPage = self.products.length;
                        self.loading = false;
                    });
                }


                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));
                axios.post('/get_category_list')
                    .then(response => (this.categoryList = response.data.categories));
                axios.post('/location/get_location_info')
                    .then(response => (this.provinceList = response.data.provinces));
            },
            setCategoryFilter:function(e){
                e.preventDefault;
                var categoryId = $(e.target).val();
                
                this.registerComponentStatistics('product-list','sidebarSearch','category');
                
                var self = this;

                axios.post('/user/get_product_list')
                    .then(function(response){
                        self.products = '';
                        self.products = response.data.products.filter(function(product){
                            if(self.cityId != ''){
                                return product.main.category_id == categoryId && product.main.city_id == self.cityId;
                            }
                            else if(self.provinceId != '' && self.cityId == ''){
                                return product.main.category_id == categoryId && product.main.province_id == self.provinceId;
                            }
                            else{
                                return product.main.category_id == categoryId;
                            }
                        });
                    });

                axios.post('/get_category_list',{
                    parent_id : categoryId
                }).then(response => (this.subCategoryList = response.data.categories));

                this.categoryId = categoryId;
                this.searchText = '';
                this.continueToLoadProducts = false;
                this.searchActive = true;
            },
            setSubCategoryFilter:function(e){
                e.preventDefault;
                var subCategoryId = $(e.target).val();
                
                this.registerComponentStatistics('product-list','sidebarSearch','subCategory');
                
                var self = this;

                axios.post('/user/get_product_list')
                    .then(function(response){
                        self.products = '';
                        self.products = response.data.products.filter(function(product){
                            if(self.cityId != ''){
                                return product.main.sub_category_id == subCategoryId && product.main.city_id == self.cityId;
                            }
                            else if(self.provinceId != '' && self.cityId == ''){
                                return product.main.sub_category_id == subCategoryId && product.main.province_id == self.provinceId;
                            }
                            else{
                                return product.main.sub_category_id == subCategoryId ;
                            }
                        });
                    });

                this.subCategoryId = subCategoryId;
                this.continueToLoadProducts = false;
            },
            setProvinceFilter:function(e){
                e.preventDefault;
                var provinceId = $(e.target).val();
                
                this.registerComponentStatistics('product-list','sidebarSearch','province');
                
                var self = this;

                axios.post('/user/get_product_list')
                    .then(function(response){

                        self.products = '';

                        self.products = response.data.products.filter(function(product){

                            if(self.subCategoryId != ''){
                                return  product.main.province_id == provinceId && product.main.sub_category_id == self.subCategoryId;
                            }
                            else if(self.categoryId != '' &&  self.subCategoryId == ''){
                                return product.main.province_id == provinceId &&
                                    product.main.category_id == self.categoryId;

                            }
                            else{
                                return product.main.province_id == provinceId;
                            }
                        });
                    });

                axios.post('/location/get_location_info',{
                    province_id : provinceId
                }).then(response => (this.cityList = response.data.cities));

                this.provinceId = provinceId;
                this.searchText = '';
                this.continueToLoadProducts = false;
                this.searchActive = true;
            },
            setCityFilter:function(e){
                e.preventDefault;
                var cityId = $(e.target).val();
                this.loading = true;
                
                this.registerComponentStatistics('product-list','sidebarSearch','city');
                
                var self = this;

                axios.post('/user/get_product_list')
                    .then(function(response){
                        self.products = '';

                        self.products = response.data.products.filter(function(product){

                            if(self.subCategoryId != ''){
                                return  product.main.city_id == cityId && product.main.sub_category_id == self.subCategoryId;
                            }
                            else if(self.categoryId != '' &&  self.subCategoryId == ''){
                                return product.main.city_id == cityId &&
                                    product.main.category_id == self.categoryId;

                            }
                            else{
                                return product.main.city_id == cityId;
                            }
                        });
                    });

                this.cityId = cityId;
                this.loading = false;
//            this.continueToLoadProducts = false;
//            self.productCountInPage = self.products.length;
            },
            feed(){
//              var offset = $(window).scrollTop() + $(window).height();
//              var height = $(document).height();

                var self = this;


                if(this.searchText == '' && this.provinceId == '' && this.categoryId == '' && this.continueToLoadProducts){
                    this.loadMoreActive = true;

                    this.productCountInPage += this.productCountInEachLoad ;

                    axios.post('/user/get_product_list',{
                        from_record_number:0,
                        to_record_number:this.productCountInPage,
                    }).then(function(response){
                        self.products = response.data.products;

                        if(self.products.length + 1 < self.productCountInPage){
                            self.continueToLoadProducts = false;
                        }

                        self.loadMoreActive = false;
                    });
                }

            },
            openRequestRegisterBox:function(e){
                if(this.currentUser.profile){
                    e.preventDefault;
                    var event =  $(e.target);
                    
                    this.registerComponentStatistics('product-list','product','request register button');

                    this.errors = '';

                    var index = (event.parents('article').index() + 1);
                    var element =  $('article:nth-of-type(' + index + ') .buy_details');
                    element.slideToggle("125", "swing");
                    $('.buy_details').not(element).slideUp();

                    this.scrollToTheRequestRegisterBox(element);
                }
                else{
                    this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    $('#myModal2').modal('show');
                }

            },
            scrollToTheRequestRegisterBox:function(element){
                var newPosition = $(element).offset();
                console.log(newPosition.top);
                $('html, body').stop().animate({ scrollTop: newPosition.top - 380}, 1000);
            },
            registerRequest:function(e){
                e.preventDefault;
                var event = $(e.target);

                this.submiting = true;

                this.errors = '';

                var index = (event.parents('article').index() + 1);
                var productId =  $('article:nth-of-type(' + index + ') .buy_details input#product-id');
                var requirementAmount =  $('article:nth-of-type(' + index + ') .buy_details input#requirement-amount');
                var packType =  $('article:nth-of-type(' + index + ') .buy_details input#pack-type');
                var description =  $('article:nth-of-type(' + index + ') .buy_details textarea#description');

                description = description.val();
                requirementAmount = this.toLatinNumbers(requirementAmount.val());
                packType = packType.val();
                productId = productId.val();

                var product = this.getProductById(productId);

                var request = {
                    requirement_amount:requirementAmount,
                    category_id:product.main.sub_category_id,
                    pack_type:packType,
                    description:description,
                };

                if(product.main.product_name){
                    request.name = product.main.product_name;
                }

                var self = this;
                //check if product_id there isn't in user product request list
                axios.post('/does_buyer_already_had_requested_the_produtct',{
                    product_id : productId,
                })
                    .then(function(response){

                        if(response.data.status == false){
                            self.RegisterBuyAdRequest(request,productId);
                            self.submiting = false;
                        }
                        else{
                            self.popUpMsg = 'شما قبلا درخواست خرید این محصول را ثبت کرده اید!';
                            console.log(self.popUpMsg);
                            $('#myModal').modal('show');

                            self.submiting = false;

                            return false;
                        }
                    })
                    .catch(function(e){
                        self.popUpMsg = 'حساب کاربری شما از نوع خریداران نیست!';
                        console.log(self.popUpMsg);
                        $('#myModal').modal('show');

                        self.submiting = false;

                        return false;
                    });


            },
            RegisterBuyAdRequest:function(request,productId){
                var self = this;

                axios.post('/user/add_buyAd',request)
                    .then(function(response){
                        self.popUpMsg = 'درخواست خرید شما ثبت شد!';
                        $('#myModal').modal('show');

                        axios.post('/register_buyer_request_for_the_product',{
                            product_id:productId,
                        });
                    })
                    .catch(function(err){
                        self.errors = '';
                        self.errors = err.response.data.errors;
                    });
            },
            toLatinNumbers:function(num){
                if(num == null){
                    return '';
                }
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
                    .replace(/[۰-۹]/g,function(w){
                        return numDic[w];
                    });
            },
            getProductById:function(productId){
                var product = this.products.filter(function(product){
                    if(product.main.id == productId){
                        return true;
                    }
                    else return false;
                });

                return product[0];
            },
            redirectToLogin:function(){
                window.location.href = '/login';
            },
            registerRequestInSearchNotFoundCase:function(){
                if(this.currentUser.profile){
                    if(this.currentUser.user_info.is_buyer){
                        window.location.href = '/dashboard/#/register-request';
                    }
                    else{
                        this.popUpMsg = 'حساب کاربری شما از نوع خریدار نیست.';
                        $('#myModal').modal('show');
                    }
                }
                else{
                    this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    $('#myModal2').modal('show');
                }
            },
            bottomVisible:function(){
                const scrollY = window.scrollY;
                const visible = document.documentElement.clientHeight;
                const pageHeight = document.documentElement.scrollHeight;
                const bottomOfPage = visible + scrollY >= pageHeight ;
                return bottomOfPage || pageHeight < visible ;
            },
            RegisterComponentStatistics:function(categoryName,actionName,labelName){
                gtag('event',actionName,{
                    'event_category' : categoryName,
                    'event_label'    : labelName
                });
            }
        },
        watch:{

            searchText:function(){
                var self = this;

                axios.post('/user/get_product_list')
                    .then(function(response){
                        self.products = '';
                        self.loading = true;

                        var text = self.searchText.split(' ');
                        self.products = response.data.products.filter(function(product){
                            return text.every(function(el){
                                if(product.main.product_name.indexOf(el) > -1 ||
                                    product.main.province_name.indexOf(el) > -1 ||
                                    product.main.city_name.indexOf(el) > -1 ||
                                    product.main.category_name.indexOf(el) > -1 ||
                                    product.main.sub_category_name.indexOf(el) > -1){
                                    return true;
                                }
                                else return false;
                            });
                        });
                        self.loading = false;
                    });
            },

            bottom(bottom){
                if (bottom) {
                    this.feed()
                }
            },
        },
        created(){
            document.addEventListener('click', this.documentClick)
            //window.addEventListener('scroll', this.handleScroll);
//        window.addEventListener('scroll', () => {
//          this.bottom = this.bottomVisible();
//            this.feed();
//        });


        },
        destroyed(){
            //window.removeEventListener('scroll', this.handleScroll);
        },
        components:{
            "popup":PopupImage,
            'image-viewer-list' : OwlCarouselLists,
        },
        mounted(){
            this.init();
            this.scrull_css_header();
        },
    }
</script>

