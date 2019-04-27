<style scoped>
    .main-content-item{
        box-shadow: none;
    }
    @media screen and (max-width: 767px){
        .main-content-item {
            padding: 0;
        }
        .user-contents .user-image,.user-contents p{
            float: right;
        }
        .user-contents p {
            padding: 15px;
            margin: 0;
            font-size: 14px;
            font-weight: 800;
        }
        .user-contents p:first-of-type {
           padding-right: 0;
        }
        .user-contents .green_bot{
            float: left;
            width: initial;
            padding: 15px;
        }
    }
    @media screen and (max-width: 500px){
        .user-contents .user-image {
            width: 50px;
            height: 50px;
        }
        .user-contents p {
            padding: 5px 0;
            width: 100%;
        }
        .user-contents .green_bot{
            float: left;
            width: initial;
            padding: 15px;
        }
    }
</style>
<template>
    <div>
        <header id="header" class="hidden-xs  main-header">
            <h1 class="title-page col-xs-12">
                پروفایل
            </h1>
        </header>
        <main id="main" class="col-sm-12">
            <section class="main-content container">
                <div class="main-content-item" v-if="profileOwner.user_info">
                    <div class="header-content col-xs-12">
                        <div class="image_user_wrapper col-xs-4">
                            <div class="user-image">
                                <div v-if="profileOwner.profile.profile_photo">
                                    <img v-bind:src=" str + '/' + profileOwner.profile.profile_photo">
                                </div>
                                <div v-else>
                                    <img :src="defultimg" class="image_defult">
                                </div>
                            </div>
                        </div>
                        <div class="info_user_wrapper_mobile  hidden-sm hidden-md hidden-lg col-xs-8 col-sm-4">
                            <div class="row" v-if="profileOwnerStatistics">
                                <div class="col-xs-6 text-center">
                                    <div class="info-num">
                                        {{profileOwnerStatistics.transaction_count}}
                                    </div>
                                    معاملات
                                </div>
                                <div class="col-xs-6 text-center" v-if="profileOwner.user_info.is_seller">
                                    <div class="info-num">
                                        {{profileOwnerStatistics.product_count}}
                                    </div>
                                    محصولات
                                </div>
                                <div class="col-xs-6 text-center" v-else-if="profileOwner.user_info.is_buyer">
                                    <div class="info-num">
                                        {{profileOwnerStatistics.buyAd_count}}
                                    </div>
                                    درخواست ها
                                </div>
                                <div class="col-xs-12">
                                    <div v-if="currentUser.user_info">
                                        <a href="/dashboard/profile" class="green_bot edit"
                                           v-if="currentUser.user_info.id == profileOwner.user_info.id">
                                            <i class="fa fa-pencil"></i>
                                            ویرایش پروفایل
                                        </a>
                                        <a  v-else href="#" @click.prevent="openChat()" class="green_bot edit">
                                            <i class="fa fa-comment"></i>
                                                ارسال پیام
                                        </a>
                                    </div>
                                    <div v-else>
                                        <a  href="#" @click.prevent="openChat()" class="green_bot edit">
                                            <i class="fa fa-comment"></i>
                                                ارسال پیام
                                        </a>
                                    </div>


                                    <a href='#' class="green_bot " @click.prevent="copyProfileLinkToClipBoard"><i
                                            class="fa fa-whatsapp"></i>
                                        اشتراک در واتس آپ </a>
                                </div>
                            </div>
                        </div>
                        <div class="content_user_wrapper hidden-xs col-xs-6 col-sm-8">
                            <div class="user-contents ">
                                <div class="title_content col-xs-12">
                                    <div class="back_page col-xs-12 col-sm-4">
                                        <a href="javascript:history.back()" class="green_bot" @click="registerComponentStatistics('profileView','BackButton','click on back button');">بازگشت به صفحه قبل</a>

                                    </div>

                                    <h1 class="content_title col-xs-12 col-sm-8">{{profileOwner.user_info.first_name +
                                        ' '
                                        + profileOwner.user_info.last_name}}</h1>

                                </div>
                                <div class="title_content col-xs-12">

                                    <div class="back_page col-xs-12 col-sm-4">
                                        <a href="/dashboard/profile" class="green_bot edit"
                                           v-if="currentUser.user_info && currentUser.user_info.id == profileOwner.user_info.id"
                                           @click="registerComponentStatistics('profileView','editProfile','click on edit profile');">
                                            <i class="fa fa-pencil"></i>
                                            ویرایش پروفایل
                                        </a>
                                        <a href="" @click.prevent="openChat()" class="green_bot edit"
                                           v-else>
                                            <i class="fa fa-pencil"></i>
                                            ارسال پیام
                                        </a>

                                        <button class="btn btn-copy" @click="copyProfileLinkToClipBoard"
                                                :value="copyLinkText"><i :class="copyLinkClass"
                                                                         aria-hidden="true"></i> {{copyLinkText}}
                                        </button>
                                    </div>

                                    <div class="content_user_info col-xs-12 col-sm-8">
                                        <p>
                                            حوزه ی فعالیت : <span>
                                    {{profileOwner.activity_domain}}
                            </span>
                                        </p>
                                        <p>
                                            آدرس : <span>
                               {{profileOwner.user_info.province + ' - ' + profileOwner.user_info.city}}
                                </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content_user_wrapper_mobile hidden-sm hidden-md hidden-lg col-xs-12">
                            <div class="user-contents ">
                                <div class="title_content col-xs-12">

                                    <div class="back_page col-xs-12 col-sm-4">
                                        <button class="btn btn-copy" @click="copyProfileLinkToClipBoard"
                                                :value="copyLinkText"><i :class="copyLinkClass"
                                                                         aria-hidden="true"></i> {{copyLinkText}}
                                        </button>
                                        <a href="#" class="green_bot edit" @click="copyProfileLinkToClipBoard"><i
                                                class="fa fa-pencil"></i> ویرایش پروفایل </a>
                                    </div>
                                    <h1 class="content_title col-xs-12 col-sm-8">{{profileOwner.user_info.first_name +
                                        ' '
                                        + profileOwner.user_info.last_name}}</h1>

                                    <div class="content_user_info col-xs-12 col-sm-8">
                                        <p>
                                            حوزه ی فعالیت : <span>
                                    {{profileOwner.activity_domain}}
                            </span>
                                        </p>
                                        <p>
                                            آدرس : <span>
                               {{profileOwner.user_info.province + ' - ' + profileOwner.user_info.city}}
                                </span>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                  <!--  <div class="info-section hidden-xs col-xs-12">
                        <div class="contents-info-num  col-sm-3">
                            <a href="#" class="btn btn-copy">
                                <i class="fa fa-comment"></i> ارسال پیام
                            </a>
                        </div>
                        <div class="contents-info col-sm-9">
                            <p>
                                جهت برقراری ارتباط با این فرد لطفا با کارشناسان اینکوباک تماس بگیرید.
                            </p>
                        </div>
                    </div>-->
                    <div class="sub-header hidden-sm hidden-md hidden-lg  col-xs-12">
                        <div class="col-xs-6" :class="{'active':profileDescription}">
                            <a @click="
                            showProfileOwnerDescription($event)" href="">
                                <div class="inside-links">

                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i> توضیحات من

                                </div>
                            </a>
                        </div>
                        <div v-if="profileOwner.user_info.is_seller == 1" class="col-xs-6"
                             :class="{'active':!profileDescription}"><a @click="
                            showProfileOwnerProducts($event)" href="">
                            <div class="inside-links">

                                <i class="incobac-icon" aria-hidden="true"><img
                                        :src="incobaicon"></i> محصولات من
                            </div>
                        </a>
                        </div>
                    </div>
                    <div class="sub-header hidden-xs col-xs-12">
                        <ul class="list-inline">
                            <li v-if="profileOwner.user_info.is_seller == 1" class="list-item"
                                :class="{'active':!profileDescription}"><a @click="
                            showProfileOwnerProducts($event)" href="">
                                محصولات من </a>
                            </li>

                            <li class="list-item" :class="{'active':profileDescription}"><a @click="
                            showProfileOwnerDescription($event)" href="">
                                توضیحات من
                            </a>
                            </li>
                        </ul>
                    </div>
                    <div class="contents col-xs-12" v-if="profileDescription == true">
                        <div class="des col-xs-12">
                            <p class="title-content">
                                توضیحات
                            </p>
                            <div class="description"
                                 style="white-space:pre-wrap">{{profileOwner.profile.description}}
                            </div>
                        </div>
                        <div class="cerificates col-xs-12">
                            <p class="title-content">
                                عکس های مرتبط :
                            </p>
                            <div v-if="profileOwner.relateds[0]">

                                    <popup-certificate
                                            v-for="photo in profileOwner.relateds"
                                            :key="photo.id"
                                            class="ceteficate-image col-xs-6 hidden-sm hidden-md hidden-lg"
                                            :base="str + '/'"
                                            :img="photo">
                                    </popup-certificate>

                                <div class="owl-carousel hidden-xs">
                                     <image-viewer @click="registerComponentStatistics('profileView','RelatedView','click on related photos');"
                                             v-for="photo in profileOwner.relateds"
                                             :key="photo.id"
                                             :base="str + '/'"
                                             :img="photo">
                                     </image-viewer>-
                                </div>
                            </div>
                            <div class="wrapper_no_pic" v-else>
                                <div class="content_no_pic"><i class="fa fa-picture-o"></i></div>
                                <div class="text_no_pic"><p>تصویری ثبت نشده است</p></div>
                            </div>
                        </div>
                        <div class="cerificates col-xs-12">
                            <p class="title-content">
                                مدارک من :
                            </p>
                            <div v-if="profileOwner.certificates[0]">
                                <article v-for="photo in profileOwner.certificates"
                                         class="ceteficate-image col-xs-6 hidden-sm hidden-md hidden-lg">
                                    <a :href="'/' + str + '/' + photo"> <img :src="'/' + str + '/' + photo"/></a>
                                </article>
                                <div class="owl-carousel hidden-xs">
                                           <image-viewer @click="registerComponentStatistics('profileView','CertificateView','click on certificate photos');"
                                                         v-for="photo in profileOwner.certificates"
                                                         :base="str + '/'"
                                                         :key="photo.id"
                                                         :img="photo">
                                           </image-viewer>
                                </div>
                            </div>
                            <div class="wrapper_no_pic" v-else>
                                <div class="content_no_pic"><i class="fa fa-picture-o"></i></div>
                                <div class="text_no_pic"><p>مدارکی ثبت نشده است</p></div>
                            </div>
                        </div>

                    </div>


                    <div class="contents" v-else>

                        <div v-if="products.length > 0">
                            <product-article
                                    :products="products"
                                    :loading_img="loading_img"
                                    :defultimg="defultimg"
                                    :str="str"
                                    :loading="loading"
                            >

                            </product-article>
                        </div>
                        <div class="col-xs-12" v-if="products.length == 0 && !loading">
                            <div class="col-xs-12" v-if="products.length == 0 && !loading">
                                <div class="wrapper_no_pro">
                                    <div class="content_no_pic"><i class="fa fa-list-alt"></i></div>
                                    <div class="text_no_pic"><p>محصولی ثبت نشده است</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="loading_images  col-xs-12" v-show="loading">
                            <img :src="loading_img" style="width:200px;height:200px">
                        </div>
                    </div>

                </div>

            </section>
        </main>
    </div>
</template>

<script>
    import productArticle from './product_components/product_article';
    import {eventBus} from "../../../../js/router/dashboard_router";

    var viz = false;
    var PopupImage = {
        data: function () {
            return {
                imgSrcs: '',
            };
        },
        props: ['img', 'base'],
        template: '<div class="image-wrapper">' +
            '<a   :href="base + img">' +
            '<img :src="base + img">' +
            '</a>' +
            '</div>',
        mounted: function () {
            $(this.$el).parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                }
            });

        }
    };
    var PopupImageCertificate = {

        props: ['img', 'base'],
        template:
            '<a   :href="base + img">' +
            '<img :src="base + img">' +
            '</a>'
        ,
        mounted: function () {
            $('.cerificates > div').each(function () { // the containers for all your galleries
                $(this).magnificPopup({
                    delegate: 'a', // the selector for gallery item
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
            });


        }
    };
    var OwlCarouselLists = {
        data: function () {
            return {
                imgSrcs: '',
            };
        },
        props: ['img', 'base'],
        template: '<div class="image-wrapper">' +
            '<a  :href="base + img">' +
            '<img :src="base + img">' +
            '</a>' +
            '</div>',
        mounted: function () {
            $(".owl-carousel").owlCarousel({
                loop: false,
                items: 1,
                margin: 10,
                nav: false,
                dots: true
            });
            $(this.$el).parent().parent().parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                }
            });

        }
    };
    var OwlCarousel = {
        data: function () {
            return {
                imgSrcs: '',
            };
        },
        props: ['img', 'base'],
        template: '<div class="image-wrapper">' +
            '<a  :href="base + img">' +
            '<img :src="base + img">' +
            '</a>' +
            '</div>',
        mounted: function () {
            $(".owl-carousel").owlCarousel({
                loop: false,
                margin: 10,
                nav: true,
                dots: false
            });
            $(this.$el).parent().parent().parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                }
            });

        }
    };
    export default {
        props: [
            'defultimg',
            'incobaicon',
            'str',
            'loading_img'
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
                currentUser: {
                    profile: '',
                    user_info: '',
                },
                profileOwner: {
                    profile: '',
                    user_info: '',
                    certificates: '',
                    relateds: '',
                    activity_domain: '',
                    is_buyer: '',
                },
                profileDescription: true,
                noProductMsgSignal: false,
                loading: false,
                popUpMsg: '',
                submiting: '',
                copyLinkText: '',
                copyLinkClass: '',
                profileOwnerStatistics: {
                    transaction_count: '',
                    product_count: '',
                    buyAd_count: '',
                },
                getUserName: this.$route.params.user_name

            }
        },

        methods: {
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
            addMetaTag:function(){

                var imgMeta;
                if (this.profileOwner.profile.profile_photo){
                    imgMeta = '<meta property="og:image" itemProp="image" content="' + this.str + '/' + this.profileOwner.profile.profile_photo + ' "/>';
                }else {
                    imgMeta = '<meta v-else  property="og:image" itemProp="image" content="' + this.defultimg + '"/>';
                }

                document.head.append('<meta property="og:type" content="website"/>' +
                    '<meta property="og:image:height" content="256"/>' +
                    '<meta property="og:image:width" content="256"/>' +
                    '<meta property="og:image:type" content="image/jpeg"/>' +
                    '<meta property="og:description" content="صفحه ی شخصی پروفایل کاربران اینکوباک"/>' +
                    ' <meta property="og:site_name" content="اینکوباک">' +
                    '<meta name="description" content="صفحه ی شخصی پروفایل کاربران اینکوباک. محصولات کشاورزی و تصاویر محصولات من را در این صفحه مشاهده کنید">' +
                    '<meta property="og:url" content="\'https://www.incobac.com/master/profile/' + this.getUserName  +'"/>' +
                    '<meta property="og:title" content="' + this.profileOwner.user_info.first_name +
                    ' '
                    + this.profileOwner.user_info.last_name + '"/>'
                    + imgMeta);
                
                    document.title = this.profileOwner.user_info.first_name + ' ' + this.profileOwner.user_info.last_name;  
                    document.head.querySelector('meta[name=description]').content = this.profileOwner.profile.description;

            },
            init: function () {
                var self = this;

                if (this.isDeviceMobile()) {
                    this.copyLinkText = ' اشتراک در واتساپ';
                    this.copyLinkClass = 'fa fa-whatsapp fa-2x';
                }
                else {
                    this.copyLinkText = 'کپی آدرس';
                    this.copyLinkClass = 'fa fa-clipboard';
                }

                axios.post('/get_user_statistics_by_user_name', {
                    user_name: this.$route.params.user_name,

                })
                    .then(function (response) {
                        self.profileOwnerStatistics = response.data.statistics;

                    })
                    .catch(function (err) {
                        //
                    });

                axios.post('/user/profile_info')
                    .then(
                        response => (this.currentUser = response.data));
                axios.post('/load_profile_by_user_name', {
                    user_name: this.$route.params.user_name
                })
                    .then(function (response) {
                        self.profileOwner = response.data;
                        //self.addMetaTag();
                    })
                    .catch(function (err) {
                        if (err.response.status == 404) {
                            window.location.href = '/404'
                        }
                    });
            },
            showProfileOwnerProducts: function (e) {

                this.registerComponentStatistics('profileView','showUserProducts','click on show products');

                e.preventDefault();
                this.profileDescription = false;

                this.loading = true;

                var self = this;
                axios.post('/get_product_list_by_user_name', {
                    user_name: this.$route.params.user_name
                }).then(function (response) {
                    self.products = response.data.products;

                    self.loading = false;
                });
            },
            showProfileOwnerDescription: function (e) {

                this.registerComponentStatistics('profileView','profileDescription','click on profile description');

                e.preventDefault();
                this.profileDescription = true;

                this.profileOwner.profile = '';

                axios.post('/load_profile_by_user_name', {
                    user_name: this.$route.params.user_name
                })
                    .then(response => (this.profileOwner = response.data))
                    .catch(function (err) {
                        if (err.response.status == 404) {
                            window.location.href = '/404'
                        }
                    });

            },
            refreshProduct: function (productId) {

                this.registerComponentStatistics('profileView','RefreshProduct','refresh product');

                var self = this;
                axios.post('/refresh_my_product_by_id', {
                    product_id: productId
                })
                    .then(function (response) {
                        if (response.data.status == true) {
                            self.popUpMsg = 'محصول شما بروز رسانی شد و در صدر لیست محصولات قرار گرفت.';
                            eventBus.$emit('submitSuccess',self.popUpMsg);
                            $('#myModal').modal('show');
                        }
                        else {
                            self.popUpMsg = 'هم اکنون قادر به انجام عملیات نیستیم.دوباره تلاش کنید.';
                            eventBus.$emit('submitSuccess',self.popUpMsg);
                            $('#myModal').modal('show');
                        }
                    })
                    .catch(function (err) {
                        self.popUpMsg = 'هم اکنون قادر به انجام عملیات نیستیم.دوباره تلاش کنید.';
                        eventBus.$emit('submitSuccess',self.popUpMsg);
                        $('#myModal').modal('show');
                    });
            },
            copyProfileLinkToClipBoard: function () {
                console.log('copy');
                this.registerComponentStatistics('profileView','CopyProfileLink','click on copy profile link');

                if (this.isDeviceMobile()) {

                    var linkElement = document.createElement('a');
                    var Message = "https://incobac.com/master/profile/" + this.profileOwner.user_info.user_name;
                    var messageToWhatsApp = encodeURIComponent(Message);
                    var url = "whatsapp://send?text=" + messageToWhatsApp;
                    linkElement.setAttribute('href', url);
                    linkElement.setAttribute('data-action', 'share/whatsapp/share');
                    document.body.appendChild(linkElement);

                    linkElement.click();

                    document.body.removeChild(linkElement);

                }
                else {
                    var input = document.createElement('input');
                    input.setAttribute('value', 'https://incobac.com/master/profile/' + this.profileOwner.user_info.user_name);
                    document.body.appendChild(input);
                    input.select();
                    var result = document.execCommand('copy');
                    document.body.removeChild(input);
                    if (result) {
                        this.popUpMsg = 'آدرس پروفایل کاربر کپی شد.';
                        eventBus.$emit('submitSuccess',this.popUpMsg);
                        $('#myModal').modal('show');
                    }
                }

            },
            isDeviceMobile: function () {
                if (navigator.userAgent.match(/Android/i)
                    || navigator.userAgent.match(/webOS/i)
                    || navigator.userAgent.match(/iPhone/i)
                    || navigator.userAgent.match(/iPad/i)
                    || navigator.userAgent.match(/iPod/i)
                    || navigator.userAgent.match(/BlackBerry/i)
                    || navigator.userAgent.match(/Windows Phone/i)
                ) {
                    return true;
                }
                else {
                    return false;
                }
            },
            openChat:function(){

                this.registerComponentStatistics('profileView','openChat','click on open chatBox');

                var contact = {
                    contact_id:this.profileOwner.user_info.id,
                    first_name:this.profileOwner.user_info.first_name,
                    last_name:this.profileOwner.user_info.last_name,
                    profile_photo:this.profileOwner.profile.profile_photo,
                    user_name:this.profileOwner.user_info.user_name,
                }

                if(this.currentUser){
                    axios.post('/set_last_chat_contact',contact)
                            .then(function(response){
                                window.location.href = '/dashboard/messages';
                            })
                            .catch(function(e){
                                alert('Error');
                    });
                }
                else{
                    alert('ابتدا لاگین کنید');
                }
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

        },
        components: {
            'image-viewer': OwlCarousel,
            'image-viewer-list': OwlCarouselLists,
            "popup": PopupImage,
            "popup-certificate": PopupImageCertificate,
            "product-article": productArticle,
        },
        created() {
            gtag('config','UA-129398000-1',{'page_path': '/profile'});
            
            document.addEventListener('click', this.documentClick);
        },
        metaInfo(){
            let fullName = this.profileOwner.user_info.first_name + ' ' + this.profileOwner.user_info.last_name;
            
            let url = 'https://incobac.com/master/profile/' + this.profileOwner.user_info.user_name;
            
            let profilePhoto = '';
            if(this.profileOwner.profile.profile_photo){
                profilePhoto = this.str + '/' + this.profileOwner.profile.profile_photo;
            }
            else{
                profilePhoto = this.defultimg;
            }
            
            return {
                title: fullName,
                titleTemplate:'اینکوباک | %s',
                meta:[
                    {name:'description', content:' محصولات کشاورزی و تصاویر محصولات من را در این صفحه مشاهده کنید'},
                    {
                        'property': 'og:type',
                        'content' : 'website',
                    },
                    {
                        'property':'og:image:height',
                        'content' : '256',
                    },
                    {
                        'property':'og:image:width',
                        'content' : '256',
                    },
                    {
                        'property':'og:image:type',
                        'content' : 'image/jpeg',
                    },
                    {
                        'property':'og:description',
                        'content' : 'صفحه ی پروفایل کاربران اینکوباک'
                    },
                    {
                        'property':'og:site_name',
                        'content' : 'اینکوباک'
                    },
                    {
                        'property':'og:url',
                        'content' : url
                    },
                    {
                        'property':'og:title',
                        'content' : fullName
                    },
                    {
                        'property':'og:image',
                        'content' : profilePhoto
                    }

                ]

            }
        }
    };


</script>
