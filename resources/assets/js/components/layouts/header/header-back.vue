<style scoped>
    body{
        background: #F6F6F6;
    }

    #main-content{

        min-height: 600px;
        position: relative;

    }

    .image-header-profile img {
        height: 100%;
    }

    .header-nav {
        direction: rtl;
        text-align: right;
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
        left: -5px;
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



    .navbar-header{
        float: right;
    }
    .custom-navbar .navbar-brand {
        width: 135px;
        text-align: center;
        margin: 11px auto;
        display: inline-block;
        background-size: contain;
    }
    .navbar-brand {
        float: right;
    }
    .navbar > .container-fluid .navbar-brand {
        margin-right: -15px;
        margin-left: auto;
    }
    .logo-des {
        color: #373737;
        float: left;
        padding: 24px 5px 0;
    }

    .custom-navbar {
        margin-bottom: 0;
        background-color: #ffffff;
        box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);}

    .header-wrapper {
        border-bottom: 0;

        background: #fff;
    }


    .navbar-brand {
        margin: 0 15px;
        height: 50px;
        padding: 3px 15px;
        font-size: 18px;
        line-height: 20px;

    }

    .logo-des {
        color: #373737;
        float: left;
        padding: 24px 5px 0;
    }

    .main-logo {
        width: 30%;
        margin: 0 auto;
    }

    .main-logo img {
        width: 100%;
    }

    .custom-navbar .nav li a {
        color: #000;
        font-weight: 400;
        padding: 10px 15px;
        text-transform: uppercase;
        line-height: 20px;
        transition: all 0.4s ease-in-out;
    }

    .top-nav-collapse .nav li a {
        color: black;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 20px;
        transition: all 0.4s ease-in-out;
    }

    .top-nav-collapse .nav {
        padding-top: 16px;
    }
    .nav.navbar-nav.navbar-left {

        padding-top: 16px;
        text-align: right;
    }

    .navbar-nav, .navbar-nav > li {
        float: right;
    }
    .custom-navbar .nav li a:hover {
        background: transparent;
        color: #00c569;
    }

    .custom-navbar .navbar-nav > li > a:hover,
    .custom-navbar .navbar-nav > li > a:focus {
        background-color: transparent;
    }

    .custom-navbar .nav li.active > a {
        background-color: transparent;
        color: #00c569;
    }


    .custom-navbar .navbar-toggle {
        background-color: transparent;
    }
    .custom-navbar .navbar-toggle {
        border: none;
    }
    .custom-navbar .navbar-toggle .icon-bar {
        background: #00c569;
        border-color: transparent;
    }



    .profile-menu-header i {
        position: absolute;
        left: -75px;
        top: 5px;
        font-size: 20px;
    }
    .profile-menu-header a {
        color: #7f8c9b;
        margin: 5px 0;
        position: relative;
        padding: 3px 15px !important;
    }
    .profile-menu-header {
        padding: 6px 12px 0;
        float: left;
    }
    .profile-menu-header > a {
        border-right: 1px solid #00c569;
    }
    .image-header-profile {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        float: left;
        position: relative;
        top: -13px;
    }
    .user-header-mobile a {
        float: left;
        width: 100%;
    }

    #DownloadApp {
        background: #fff;
        padding-left: 0 !important;
    }

    .green-button:focus,
    .green-button:hover {
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
        background: #00c569;
    }

    .main-logo-popup {
        text-align: center;
    }

    .main-logo-popup p.title {
        font-size: 32px;
    }

    .main-logo-popup img {
        width: 30%;
    }

    .login-button {
        background: #00c569;

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

        background: #00c569;

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
    @media (max-width: 1300px) {
        .logo-des {
            display: none;
        }

    }

    @media (max-width: 992px) {
        .content_service {

            font-size: 15px;

        }

        .content_service {
            font-size: 14px;
        }

    }

    @media (max-width: 1100px) {
        .navbar-brand {
            padding: 0;
            width: 150px;
            background-size: 100%;
        }

    }

    @media (max-width: 850px) {
        .name-header-profile{
            display: none;
        }
    }


    @media screen and ( max-width: 767px) {
        .parallax-section .owl-nav{
            display: none;
        }
        .image-header-profile {
            top: -3px;
        }
        .profile-menu-header > a {
            border-right: none;
        }
        .profile-menu-header {
            padding: 3px;
            padding-left: 55px;
            float: left;
        }
        .navbar > .container-fluid .navbar-brand {
            margin-right: auto;
            margin-left: auto;
        }
        .navbar-header {
            float: none;
            min-height: 80px;
        }
        .profile-menu-header i {
            position: absolute;
            color: #333;
            left: -75px;

            top: 29px;

            font-size: 20px;
        }

        .main-content-item {
            margin: 63px auto 24px;

        }


        .custom-navbar.top-nav-collapse {
            background: #ffffff;
            box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.04);
        }
        .custom-navbar .navbar-brand {
            line-height: 18px;
        }
        .content_service {
            text-align: center;
            display: inline-block;
        }
        .navbar-nav, .navbar-nav > li {
            float: right;
        }
        .custom-navbar .navbar-brand {
            display: block;
            margin: 10px auto;
            float: none;
        }
        .custom-navbar .navbar-toggle {
            float: right;
            text-align: center;
            padding-top: 31px;
            padding-right: 30px;
            margin: 0;
        }

        .float_li {

            float: right;
            padding: 0 7px;
            width: 50%;

        }

        .custom-navbar {
            padding:0;
            border-bottom: 0;
            background: #fff;
        }

        .custom-navbar.top-nav-collapse {
            background: #ffffff;
            box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.04);
            padding: 0;
        }
        .custom-navbar .nav li  {
            float: none;
        }
        .custom-navbar .nav li a {
            padding: 11px 30px;
        }
        .custom-navbar .navbar-nav li a {
            line-height: 25px;
        }
        .user-header-mobile {
            display: block;
            float: left;
            margin-left: 50px;
        }
        .user-header-mobile .profile-menu-header {
            padding: 5px 0 0;
            float: left;
        }
        .user-header-mobile .profile-menu-header i {
            top: 14px;
            left: -10px;
        }
    }

    @media screen and (max-width: 534px) {
        .custom-navbar .navbar-brand {
            line-height: 18px;
        }
    }
    @media screen and (max-width: 432px) {
        .custom-navbar .navbar-brand {
            width: 55%;
            background-size: 50%;
            background-position: 50% 50%;
        }
        .profile-menu-header {

            padding: 3px;
            padding-left: 35px;
            float: left;

        }
        .user-header-mobile {
            display: block;
            float: left;
            margin-left: 30px;
        }

    }

</style>
<template>
    <div>
        <div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">
            <div class="main-loader">
                <img :src="loading"/>
                <p dir="rtl">در حال بارگذاری...</p>
            </div>
        </div>

        <div class="container">
            <div
                    id="deleteModal"
                    class="modal fade"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
            >
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal">
                                <i class="fa fa-times"></i>
                            </a>
                            <p class="main-pop-up" v-text="popUpMsg"></p>

                            <a
                                    href="#"
                                    class="btn green-button delete"
                                    data-dismiss="modal"
                                    @click.prevent="deleteProduct()"
                                    v-text="deleteButtonText"
                            ></a>

                            <a href="#" class="btn green-button" data-dismiss="modal" v-text="cancelButtonText"></a>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
        </div>

        <div class="container">
            <div
                    id="custom-main-modal"
                    class="modal fade"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
            >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal">
                                <i class="fa fa-times"></i>
                            </a>

                            <p class="main-pop-up" v-text="popUpMsg"></p>

                            <button class="btn green-button" data-dismiss="modal">متوجه شدم</button>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
        </div>

        <div class="container">
            <div
                    id="DownloadApp"
                    class="modal fade"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
            >
                <div class="modal-dialog modal-lg" role="document">
                    <a href="#" class="close-dialog-popup" data-dismiss="modal">
                        <i class="fa fa-times"></i>
                    </a>

                    <div class="main_popup_content">
                        <div>
                            <div class="main-logo-popup">
                                <img :src="incobacicon" alt/>
                                <p class="title">اینکوباک</p>
                            </div>

                            <p class="main-pop-up">دانلود اپلیکیشن اندروید اینکوباک</p>

                            <a
                                    href="#"
                                    class="btn green-button"
                                    data-dismiss="modal"
                                    @click.prevent="doDownload()"
                            >دریافت اپلیکیشن</a>

                            <a href="#" class="btn green-button" data-dismiss="modal">متوجه شدم</a>
                        </div>
                    </div>
                </div>
                <!-- /.modal-dialog -->
            </div>
        </div>

        <!-- Modal -->
        <div class="container">
            <div
                    class="modal fade"
                    id="auth-popup"
                    tabindex="-1"
                    ref="myModal"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal">
                                <i class="fa fa-times"></i>
                            </a>

                            <p class="main-pop-up" v-text="popUpMsg"></p>

                            <a href="/login" class="btn green-button">ورود/ثبت نام</a>

                            <br/>
                            <br/>

                            <button class="btn green-button" data-dismiss="modal">متوجه شدم</button>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
        </div>

        <!-- /.modal -->
        <div class="navbar container-fluid navbar-fixed-top custom-navbar" role="navigation">
            <div class="container-fluid">
                <!-- navbar header -->
                <div class="navbar-header">
                    <div v-if="user_id !== ''" class="user-header-mobile hidden-sm hidden-md hidden-lg">
                        <div class="profile-menu-header">
                            <a href="#" @click.prevent="collapseDropDown()">
                                <div class="image-header-profile">
                                    <img v-if="profile_photo !== ''" :src="storage_path + '/' + profile_photo"/>

                                    <img v-else :src="user_default_image"/>
                                </div>
                                <i aria-hidden="true" class="fa fa-angle-down"></i>
                            </a>

                            <div class="profile-list">
                                <ul v-if="is_seller == 1" class="list-unstyled" >
                                    <li  class="list-item">
                                        <router-link :to="{name : 'statusSeller'}">داشبورد</router-link>
                                    </li>
                                    <li class="list-item">
                                        <router-link :to="{name : 'passwordSeller'}">تغییر کلمه عبور</router-link>
                                    </li>
                                    <li class="list-item">
                                        <router-link :to="login_page_path">خروج</router-link>
                                    </li>
                                </ul>

                                <ul v-else class="list-unstyled">
                                    <li  class="list-item">
                                        <router-link :to="{name : 'profileBasicBuyer'}">داشبورد</router-link>
                                    </li>
                                    <li class="list-item">
                                        <router-link :to="{name : 'passwordBuyer'}">تغییر کلمه عبور</router-link>
                                    </li>
                                    <li class="list-item">
                                        <router-link :to="login_page_path">خروج</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <button
                            class="navbar-toggle hidden-md hidden-sm hidden-lg"
                            data-toggle="collapse"
                            href="#collapseHeader"
                            ref="#collapseHeader"
                    >
                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>
                        <span class="icon icon-bar"></span>
                    </button>

                    <router-link class="navbar-brand test" :to="{name: 'indexPage'}"></router-link>


                    <p class="logo-des hidden-xs hidden-sm">اینکوباک | بازارگاه آنلاین دنیای کشاورزی</p>
                </div>


                <div class="collapse navbar-collapse" id="collapseHeader" aria-expanded="false">
                    <ul class="nav navbar-nav navbar-left">
                        <li>
                            <router-link
                                    class="smoothScroll"
                                    :to="{ name: 'indexPage'}"
                                    @click="registerComponentStatistics('header','home-page','click-on-home-page')"
                            >
                                صفحه
                                نخست
                            </router-link>
                        </li>

                        <li v-if="user_id !== ''">
                            <router-link
                                    v-if="is_seller == 1"
                                    class="smoothScroll"
                                    :to="{name : 'statusSeller'}"
                                    @click="registerComponentStatistics('header','dashboard','click-on-dashboard')"
                            >داشبورد
                            </router-link>
                            <router-link
                                    v-else
                                    class="smoothScroll"
                                    :to="{name : 'profileBasicBuyer'}"
                                    @click="registerComponentStatistics('header','dashboard','click-on-dashboard')"
                            >داشبورد
                            </router-link>
                        </li>

                        <li>
                            <router-link
                                    class="smoothScroll"
                                    :to="{ name: 'productList'}"
                                    @click="registerComponentStatistics('header','product-list','click-on-product-list')"
                            >
                                لیست
                                محصولات
                            </router-link>
                        </li>
                        <li>
                            <a
                                    href="http:\\www.blog.incobac.com"
                                    class="smoothScroll"
                                    @click="registerComponentStatistics('header','blog','click-on-blog')"
                            >وبلاگ</a>
                        </li>
                        <!--  <li>
                            <router-link
                              class="smoothScroll"
                              :to="{ name: 'pricing'}"
                              @click="registerComponentStatistics('header','pricing','click-on-pricing')"
                            >تعرفه ها</router-link>
                          </li>
              -->
                        <li>
                            <router-link
                                    class="smoothScroll"
                                    :to="{ name: 'aboutUs'}"
                                    @click="registerComponentStatistics('header','about-us','click-on-about-us')"
                            >
                                درباره
                                ما
                            </router-link>
                        </li>

                        <li v-if="user_id == ''">
                            <router-link
                                    :to="{ name: 'login'}"
                                    class="smoothScroll login-button"
                                    @click="logUserOut()"
                            >
                                ورود/ثبت
                                نام
                            </router-link>
                        </li>

                        <li v-if="user_id != ''" class="user-header-web hidden-xs">
                            <div class="profile-menu-header">
                                <a href="#" @click.prevent="collapseDropDown()">
                                    <div class="image-header-profile">
                                        <img v-if="profile_photo != ''" :src="storage_path + '/' + profile_photo"/>

                                        <img v-else :src="user_default_image"/>
                                    </div>
                                    <i aria-hidden="true" class="fa fa-angle-down"></i>
                                    <span class="name-header-profile">{{user_full_name}}</span>
                                </a>
                                <div class="profile-list">
                                    <ul v-if="is_seller == 1" class="list-unstyled">
                                        <li  class="list-item">
                                            <router-link
                                                    :to="{ name: 'statusSeller'}"
                                            >داشبورد
                                            </router-link>
                                        </li>
                                        <li class="list-item">
                                            <router-link
                                                    :to="{ name: 'passwordSeller'}"
                                            >تغییر کلمه عبور
                                            </router-link>
                                        </li>
                                        <li class="list-item">
                                            <a   href="/logout">خروج</a>
                                        </li>
                                    </ul>
                                    <ul v-else class="list-unstyled">
                                        <li  class="list-item">
                                            <router-link
                                                    :to="{ name: 'profileBasicBuyer'}"
                                            >داشبورد
                                            </router-link>
                                        </li>
                                        <li class="list-item">
                                            <router-link
                                                    :to="{ name: 'passwordBuyer'}"
                                            >تغییر کلمه عبور
                                            </router-link>
                                        </li>
                                        <li class="list-item">
                                            <a   href="/logout">خروج</a>
                                        </li>
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
    import {eventBus} from "../../../router/router";
    import Cookies from "js-cookie";

    export default {
        data() {
            return {
                popUpMsg: "",
                submiting: false,
                isLoading: true,
                deleteText: "",
                deleteButtonText: "",
                cancelButtonText: "",
                ProductId: ""
            };
        },
        props: [
            "incobacicon",
            "user_id",
            "is_seller",
            "user_default_image",
            "profile_photo",
            "user_full_name",
            "user_logout_path",
            "storage_path",
            "login_page_path",
            "loading",
            "finish_load_img"
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
                    $(".profile-list").fadeOut("slow");
                    $(".icon-header-list").fadeOut("slow");
                    visible = false;
                }
            },
            /*redirectToLogin: function () {
                        window.location.href = '/login';
                    },*/
            isDeviceMobile: function () {
                if (
                    navigator.userAgent.match(/Android/i) ||
                    navigator.userAgent.match(/webOS/i) ||
                    navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPad/i) ||
                    navigator.userAgent.match(/iPod/i) ||
                    navigator.userAgent.match(/BlackBerry/i) ||
                    navigator.userAgent.match(/Windows Phone/i)
                ) {
                    return true;
                } else {
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
                    $("#collapseHeader a.smoothScroll").on("click", function () {
                        $(".btn-navbar").click(); //bootstrap 2.x
                        $(".navbar-toggle").click(); //bootstrap 3.x by Richard
                        $(".navbar-toggler").click(); //bootstrap 4.x
                    });
                }
            },
            DownloadApp: function () {
                $("#DownloadApp").modal();
            },
            doDownload: function () {
                //ga
                this.registerComponentStatistics(
                    "download",
                    "app download btn",
                    "download app btn in popUp"
                );
                // code here
                Cookies.set("appDownloaded", true);
                window.location.href = "/storage/download/incobac.apk";
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
                if (this.isDeviceMobile() && !Cookies.get("appDownloaded")) {
                    setTimeout(this.DownloadApp, 5000);
                }
            },
            logUserOut: function () {
                localStorage.removeItem("userRoute");
                registerComponentStatistics('header', 'register-login', 'click-on-register-login')
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag("event", actionName, {
                    event_category: categoryName,
                    event_label: labelName
                });
            },
            deleteProduct: function () {
                var self = this;

                axios
                    .post("/delete_product_by_id", {
                        product_id: self.productId
                    })
                    .then(function (response) {
                        //show product deleted message
                        //code
                        self.popUpMsg = "حذف شد.";
                        $("#custom-main-modal").modal("show");

                        self.registerComponentStatistics(
                            "product",
                            "product-deleted",
                            "product-deleted-successfully"
                        );

                        setTimeout(function () {
                            window.location.reload();
                        }, 3000);
                    })
                    .catch(function (err) {
                        self.registerComponentStatistics(
                            "product",
                            "product-delete-failed",
                            "product-delete-failed"
                        );
                        //show modal
                        self.popUpMsg = "خطایی رخ داده است.لطفا دوباره تلاش کنید.";
                        $("#custom-main-modal").modal("show");
                    });
            }
        },
        mounted() {
            eventBus.$on("submitSuccess", $event => {
                this.popUpMsg = $event;
            });
            eventBus.$on("submiting", $event => {
                this.submiting = $event;
            });
            eventBus.$on("isLoading", $event => {
                this.isLoading = $event;
            });

            eventBus.$on("deleteButtonText", event => {
                this.deleteButtonText = event;
            });

            eventBus.$on("cancelButtonText", event => {
                this.cancelButtonText = event;
            });
            eventBus.$on("productId", event => {
                this.productId = event;
            });

            $(window).resize(this.jqUpdateSize); // When the browser changes size
        },
        created() {
            document.addEventListener("click", this.documentClick);
        }
    };
</script>
