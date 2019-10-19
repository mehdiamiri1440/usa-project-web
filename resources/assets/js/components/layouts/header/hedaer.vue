<style scoped>
    #DownloadApp {
        background: #fff;
        padding-left: 0 !important;
    }

    .green-button:focus, .green-button:hover {
        color: #fff !important;
    }

    #DownloadApp .modal-dialog {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0;
    }

    #DownloadApp .main_popup_content {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 0;
        width: calc(100% - 30px);
    }

    #DownloadApp .main_popup_content > div {
        transform: translate(-50%, -50%);
    }

    a.close-dialog-popup {
        display: block;

        padding: 15px;

        font-size: 22px;

        color: #e41c38;

        text-align: right;

        background: #000546;
    }

    .main_popup_content div > a {

        width: 150px;
        border: none;
        padding: 9px 0;
    }

    .main_popup_content div > a:first-of-type {
        color: #fff;
        background: #00C569;
    }

    .main-logo-popup {
        text-align: center;
    }


    .main-logo-popup p.title{
        font-size: 32px;
    }


    .main-logo-popup img {
        width: 30%;
    }

    .login-button {
        background: #00C569;

        border-radius: 3px;
        transition: 300ms;
        color: #fff !important;
    }

    .login-button:hover {
        background: #279b41 !important;
        transition: 300ms;

    }

    .custom-navbar .navbar-nav > li > a.login-button:focus {
        background: #279b41 !important;
        transition: 300ms;
    }

    .modal-content .green-button {
        margin: 15px;

        display: inline-block;

        background: #00C569;

        color: #fff;

        padding: 10px 35px;

        border-radius: 3px;

        text-align: center;

        border: none;

        -webkit-transition: 300ms;

        transition: 300ms;

        width: initial;
    }

    .green-button.delete {
        background: #e41c38;
        color: #fff;
    }

    @media screen and (max-width: 767px) {
        ul.nav {
            width: 100%;
            text-align: center !important;
            margin: 0;
        }

        #collapseHeader {
            padding: 0;
        }
    }
</style>
<template>
    <div>


        <div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">
            <div class="main-loader">
                <img :src="loading">
                <p dir="rtl">در حال بارگذاری...</p>
            </div>
        </div>

        <div class="container">
            <div id="deleteModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal">
                                <i class="fa fa-times"></i>
                            </a>
                            <p class="main-pop-up" v-text="popUpMsg"></p>

                            <a href="#" class="btn green-button delete " data-dismiss="modal"
                               @click.prevent="deleteProduct()" v-text="deleteButtonText">

                            </a>

                            <a href="#" class="btn green-button"
                               data-dismiss="modal" v-text="cancelButtonText">
                            </a>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>


        <div class="container">
            <div id="custom-main-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal">
                                <i class="fa fa-times"></i>
                            </a>

                            <p class="main-pop-up" v-text="popUpMsg">
                            </p>

                            <button class="btn green-button " data-dismiss="modal">
                                متوجه شدم
                            </button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>

        <div class="container">
            <div id="DownloadApp" class="modal fade"
                 tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">

                <div class="modal-dialog modal-lg" role="document">
                    <a href="#" class="close-dialog-popup"
                       data-dismiss="modal">
                        <i class="fa fa-times"></i>
                    </a>

                    <div class="main_popup_content">

                        <div>
                            <div class="main-logo-popup">
                                <img :src="incobacicon" alt="">
                                <p class="title">اینکوباک</p>
                            </div>

                            <p class="main-pop-up">
                                دانلود اپلیکیشن اندروید اینکوباک
                            </p>

                            <a href="#" class="btn green-button "
                               data-dismiss="modal" @click.prevent="doDownload()">
                                دریافت اپلیکیشن
                            </a>

                            <a href="#" class="btn green-button " data-dismiss="modal">
                                متوجه شدم
                            </a>
                        </div>
                    </div>
                </div><!-- /.modal-dialog -->
            </div>
        </div>


        <!-- Modal -->
        <div class="container">
            <div class="modal fade" id="auth-popup" tabindex="-1" ref="myModal" role="dialog"
                 aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal">
                                <i class="fa fa-times"></i>
                            </a>

                            <p class="main-pop-up" v-text="popUpMsg">
                            </p>

                            <a href="/login" class="btn  green-button">
                                ورود/ثبت نام
                            </a>

                            <br/>
                            <br/>

                            <button class="btn green-button" data-dismiss="modal">
                                متوجه شدم
                            </button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>

        <!-- /.modal -->
        <div class="navbar container-fluid navbar-fixed-top custom-navbar" role="navigation">
            <div class="container-fluid">
                <!-- navbar header -->
                <div class="navbar-header">
                    <div v-if="user_id !== ''" class="user-header-mobile hidden-sm hidden-md hidden-lg ">
                        <div class="profile-menu-header">
                            <a href="#" @click.prevent="collapseDropDown()">
                                <div class="image-header-profile">

                                    <img v-if="profile_photo !== ''" :src="storage_path + '/' + profile_photo">

                                    <img v-else :src="user_default_image">

                                </div>
                                <i aria-hidden="true" class="fa fa-angle-down"></i>
                            </a>

                            <div class="profile-list">
                                <ul class="list-unstyled">
                                    <li v-if="is_seller == 1" class="list-item">
                                            <a :href="'/dashboard/status'">داشبورد</a>
                                        </li>
                                        <li v-else class="list-item">
                                            <a :href="'/dashboard/profile'">داشبورد</a>
                                        </li>
                                    <li class="list-item">
                                        <a :href="'/dashboard/password'">تغییر کلمه عبور</a>
                                    </li>
                                    <li class="list-item"><a :href="login_page_path">خروج</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <button class="navbar-toggle" data-toggle="collapse" href="#collapseHeader" ref="#collapseHeader">

                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>

                    </button>

                    <a class="navbar-brand test" href="/">
                    </a>

                    <p class="logo-des hidden-xs hidden-sm">
                        اینکوباک | بازارگاه آنلاین دنیای کشاورزی
                    </p>
                </div>

                <div class="collapse navbar-collapse" id="collapseHeader" aria-expanded="false">
                    <ul class="nav navbar-nav navbar-left ">
                        <li>
                            <a class="smoothScroll" href="/"
                               @click="registerComponentStatistics('header','home-page','click-on-home-page')">صفحه
                                نخست</a>

                        </li>

                        <li v-if="user_id !== ''">
                            <a v-if="is_seller == 1" class="smoothScroll" href="/dashboard/status"
                               @click="registerComponentStatistics('header','dashboard','click-on-dashboard')">داشبورد</a>
                             <a v-else class="smoothScroll" href="/dashboard/profile"
                               @click="registerComponentStatistics('header','dashboard','click-on-dashboard')">داشبورد</a>
                        </li>

                        <li>
                            <a class="smoothScroll" href="/product-list"
                               @click="registerComponentStatistics('header','product-list','click-on-product-list')">لیست
                                محصولات</a>
                        </li>
                        <li>
                            <a href="http:\\www.blog.incobac.com" class="smoothScroll"
                               @click="registerComponentStatistics('header','blog','click-on-blog')">وبلاگ</a>
                        </li>
                        <li>
                            <a class="smoothScroll" href="/pricing"
                               @click="registerComponentStatistics('header','pricing','click-on-pricing')">تعرفه ها</a>
                        </li>
                        <li>

                            <a class="smoothScroll" href="/about-us"
                               @click="registerComponentStatistics('header','about-us','click-on-about-us')">درباره
                                ما</a>
                        </li>

                        <li v-if="user_id == ''"><a href="/login" class="smoothScroll login-button"
                                                    @click="registerComponentStatistics('header','register-login','click-on-register-login')">ورود/ثبت
                            نام</a>
                        </li>


                        <li v-if="user_id != ''" class="user-header-web hidden-xs">
                            <div class="profile-menu-header "><a href="#" @click.prevent="collapseDropDown()">
                                <div class="image-header-profile">
                                    <img v-if="profile_photo != ''" :src="storage_path + '/' + profile_photo">

                                    <img v-else :src="user_default_image">

                                </div>
                                <i aria-hidden="true" class="fa fa-angle-down"></i> <span
                                    class="name-header-profile">{{user_full_name}}</span></a>
                                <div class="profile-list">
                                    <ul class="list-unstyled">
                                        <li v-if="is_seller == 1" class="list-item">
                                            <a :href="'/dashboard/status'">داشبورد</a>
                                        </li>
                                        <li v-else class="list-item">
                                            <a :href="'/dashboard/profile'">داشبورد</a>
                                        </li>
                                        <li class="list-item">
                                            <a :href="'/dashboard/password'">تغییر کلمه عبور</a>
                                        </li>
                                        <li class="list-item"><a :href="login_page_path">خروج</a></li>
                                    </ul>
                                </div>

                            </div>

                        </li>

                    </ul>

                </div>

            </div>

        </div>
    </div>
</template>
<script>
    var visible = false;
    import {eventBus} from "../../../../js/router/dashboard_router";
    import Cookies from "js-cookie";

    export default {
        data() {
            return {
                popUpMsg: '',
                submiting: false,
                isLoading: true,
                deleteText: '',
                deleteButtonText: '',
                cancelButtonText: '',
                ProductId: ''

            }
        },
        props: [
            'incobacicon',
            'user_id',
            'is_seller',
            'user_default_image',
            'profile_photo',
            'user_full_name',
            'user_logout_path',
            'storage_path',
            'login_page_path',
            'loading',
            'finish_load_img'
        ],
        methods: {
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
            /*redirectToLogin: function () {
                window.location.href = '/login';
            },*/
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
            getAndroidVersion: function (ua) {
                ua = (ua || navigator.userAgent).toLowerCase();
                var match = ua.match(/android\s([0-9\.]*)/);
                return match ? match[1] : undefined;
            },
            // jQuery
            jqUpdateSize: function () {
                // Get the dimensions of the viewport
                var width = $(window).width();
                if (width < 767) {
                    $('#collapseHeader a.smoothScroll').on('click', function () {
                        $('.btn-navbar').click(); //bootstrap 2.x
                        $('.navbar-toggle').click(); //bootstrap 3.x by Richard
                        $('.navbar-toggler').click(); //bootstrap 4.x
                    });
                }
            },
            DownloadApp: function () {
                $('#DownloadApp').modal()
            },
            doDownload: function () {
                //ga
                this.registerComponentStatistics('download', 'app download btn', 'download app btn in popUp');
                // code here
                Cookies.set('appDownloaded', true);
                window.location.href = '/storage/download/incobac.apk';
            },
            isOsIOS: function () {
                var userAgent = window.navigator.userAgent.toLowerCase(),
                    safari = /safari/.test(userAgent),
                    ios = /iphone|ipod|ipad/.test(userAgent);

                // simplify condition if
                /*if (ios) {
                    return true
                } else {
                    return false;
                };*/
                return ios;
            },
            activateDownloadAppPopUp: function () {
                this.jqUpdateSize();
                if (this.isDeviceMobile() && !Cookies.get('appDownloaded')) {
                    setTimeout(this.DownloadApp, 5000);
                }
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
            deleteProduct: function () {
                var self = this;

                axios.post('/delete_product_by_id', {
                    product_id: self.productId
                })
                    .then(function (response) {
                        //show product deleted message
                        //code
                        self.popUpMsg = 'حذف شد.';
                        $('#custom-main-modal').modal('show');

                        self.registerComponentStatistics('product', 'product-deleted', 'product-deleted-successfully');

                        setTimeout(function () {
                            window.location.reload();
                        }, 3000);
                    })
                    .catch(function (err) {
                        self.registerComponentStatistics('product', 'product-delete-failed', 'product-delete-failed');
                        //show modal
                        self.popUpMsg = 'خطایی رخ داده است.لطفا دوباره تلاش کنید.';
                        $('#custom-main-modal').modal('show');
                    });
            }
        },
        mounted() {

            eventBus.$on("submitSuccess", ($event) => {
                this.popUpMsg = $event;
            });
            eventBus.$on("submiting", ($event) => {
                this.submiting = $event;
            });
            eventBus.$on("isLoading", ($event) => {
                this.isLoading = $event;
            });

            eventBus.$on('deleteButtonText', (event) => {
                this.deleteButtonText = event;
            });

            eventBus.$on('cancelButtonText', (event) => {
                this.cancelButtonText = event;
            });
            eventBus.$on('productId', (event) => {
                this.productId = event;
            });

            $(window).resize(this.jqUpdateSize);     // When the browser changes size
        },
        created() {
            document.addEventListener('click', this.documentClick);
        }
    }
</script>
