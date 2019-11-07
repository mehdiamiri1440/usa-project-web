<style scoped>
    body {
        background: #F6F6F6;
    }

    #main-content {

        min-height: 600px;
        position: relative;

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

    /*end global styles */

    /*start header styles*/

    .search-input {

        transition: 300ms;

        display: inline-block;

        min-width: 455px;

        overflow: hidden;

        position: relative;

        float: right;


    }

    .search-input input {

        padding: 9px 15px 8px;

        border-radius: 0 4px 4px 0;

        margin: 0;

        float: right;

        border: none;

        width: calc(100% - 20px);

        background: #F8F8F8;

    }

    .search-input button {

        transition: 300ms;

        border: none;

        margin: 0;

        padding: 8px 15px;

        color: #fff;

        background: #000546;

        border-radius: 4px 0 0 4px;

        position: absolute;

        left: 0;

        top: 0;

    }

    .search-input button:hover {

        transition: 300ms;

        background: #00032b;

        padding-left: 18px;

        padding-right: 18px;

    }

    .search-input button:before {

        position: relative;

        top: 2px;

    }

    nav.navbar {
        background: #fff;
        margin: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1010;
        border-radius: 0;
        border: none;
        box-shadow: 0 7px 8px 0 rgba(0,0,0,.04);
    }

    .incobac-main-nav {
        padding: 10px 15px 8px;
        border-bottom: 2px solid #F8F9FA
    }

    .nav > li > a.green-button:hover {
        background: #00c569;
    }

    .nav > li > a.green-button.router-link-exact-active:hover {
        background: #eee;
    }

    nav .green-button {
        font-size: 13px;
        padding: 8px 7px 7px;
        margin-top: 0;
        margin-right: 15px;
    }

    nav .green-button-alt {
        background: #fff;
        color: #00c569 !important;
        border: 2px solid #00c569;
        padding: 6px 7px 5px;

    }

    .green-button-alt:focus,
    .green-button-alt:hover {
        color: #fff !important;
    }

    nav .green-button.router-link-exact-active, nav > li > a.green-button.router-link-exact-active:hover {
        background-color: #eee;
        border-color: #eee;
        color: #fff !important;
    }


    .incobac-logo .navbar-brand {

        overflow: hidden;

        width: 132px;

    }

    .incobac-logo .navbar-brand {

        height: initial;

        margin: 0;

        padding: 0;

    }

    #incobac-nav{
        margin-right: 46px;
    }

    .incobac-sub-menu .navbar-right{
        margin-right: 193px;
    }

    .incobac-sub-menu {
        transition: 0.3s;
        height: 38px;
        overflow: hidden;
    }

    .incobac-sub-menu.scrollUp{
        height: 0;
        transition: 0.3s;
    }

    .incobac-sub-menu  li{
        float: right;
    }

    .incobac-sub-menu a{
       color: #777;
        padding: 9px 15px;
        position: relative;
    }

    .incobac-sub-menu a:hover, .incobac-sub-menu a.router-link-exact-active {
       color: #00C569;
        background:#fbfbfb;
    }

    .incobac-sub-menu a:hover:after, .incobac-sub-menu a.router-link-exact-active:after {
        content:'';
        background: #00C569;
        position: absolute;
        top: 0;
        width: 100%;
        height: 2px;
        right:0;
    }

    a.profile-info-wrapper{

        overflow: hidden;

        padding: 0;

        font-size: 14px;

        color: #777;

        font-weight: bold;

    }

    a.profile-info-wrapper:focus{

        background: none;

    }

    a.profile-info-wrapper:hover{

        background: none;

        color: #00c569;

    }

    .profile-information{

        float: left;

        padding-top: 10px;

    }

    .profile-information i{

        position: relative;

        top: 3px;

        margin-right: 7px;

    }

    .profile-image-wrapper{
        width: 40px;

        height: 40px;

        border-radius: 40px;

        overflow: hidden;

        float: right;

        margin-left: 10px;

    }


    .profile-image-wrapper img{
        width: initial;
        height: 100%;
        position: relative;
        left: -50%;
        transform: translate(50% ,0);
    }

    #web-profile-items{
        position: absolute;

        top: 50px;

        background: #fff;

        width: 100%;

        text-align: right;

        direction: rtl;

        border-radius: 4px;

        line-height: 1.618;

        box-shadow: 0 3px 15px
        rgba(0, 0, 0, 0.2);
    }


    #web-profile-items > li a{
        padding: 7px 15px;
        display: block;
    }



    #web-profile-items a{
        color: #777;
    }

    #web-profile-items a:hover{
        color: #333;
        background: #eee;
    }

    .mobile-menu-button{
        float: right;
    }

    .navbar-toggle{

        margin: 0;

        border:2px solid  #000546;

    }

    .navbar-toggle .icon-bar{

        background: #000546;

    }

    .mobile-background-shadow{

        background: rgb(0,0,0);

        opacity: 0.8;

        display: none;

        transition:300ms;

        position: fixed;

        height: 100%;

        width: 100%;

        z-index: 10;

    }

    @media screen and (min-width: 767px){
        .mobile-background-shadow{
            display: none !important;
        }
    }

    @media screen and (max-width: 992px){

        #incobac-nav{

            margin: 0

        }

        .incobac-sub-menu .navbar-right {

            margin-right: 149px;

        }

        .search-input {

            min-width: 300px;


        }

    }

    @media screen and (max-width: 767px){

        #incobac-nav{
            padding: 0;

            overflow: hidden;

            margin: 0;

            position: absolute;

            background: #fff;

            top: 56px;

            right: -1px;

            left: -1px;

            border-top: 2px solid #00c569;

        }

        #incobac-nav:after{

            width: 0;

            height: 0;

            border-style: solid;

            border-width: 0 10px 10px 10px;

            border-color:  transparent transparent #00c569 transparent;

            content: "";

            position: absolute;

            top: -10px;

            right: 29px;


        }

        #incobac-nav .wrapper-nav{

            padding: 30px 0 0;

        }

        .incobac-logo{

            margin: 0 auto;

            float: right;

            position: relative;

            right: calc(50% - 114px);

        }

        .profile-image-wrapper, .user-auth-info-wrapper, .user-auth-info-wrapper .navbar-nav{
            margin: 0
        }

        .user-auth-info-wrapper{
            float: left;
        }


        #incobac-nav .search-input{

            max-width: 100%;

            width: 100%;

            padding: 0 15px;

            margin-bottom:  15px;

            float: none;

        }

        #incobac-nav .search-input input{

            border:1px solid #E6E6E6;
        }

        .search-input button{

            left: 15px;

            padding: 13px 15px;

            height: 100%;
        }

        #incobac-nav ul.mobile-navigation a{

                color: #777;

                font-weight: bold;

                padding: 15px;

                display: block;

                border-bottom: 1px solid #E6E6E6;

        }

        #incobac-nav ul.mobile-navigation a:hover,
        #incobac-nav ul.mobile-navigation a:focus,
        #incobac-nav ul.mobile-navigation a.router-link-exact-active{

                color: #00c569;

                background: #fbfbfb;

                border-color: #00c569;
        }

        #web-profile-items{

            min-width: 150px;

            left: 0;
        }
    }

    @media screen and (max-width: 550px){
        .incobac-logo{

            margin: 0 auto;

            float: right;

            position: relative;

            right: calc(50% - 95px);

        }

        .incobac-logo .navbar-brand{

            width: 100px;

            margin-top: 5px;

        }


        .profile-image-wrapper, .user-auth-info-wrapper, .user-auth-info-wrapper .navbar-nav{
            margin: 0
        }

        .user-auth-info-wrapper{
            float: left;
        }

        .mobile-login-link a{

            font-size: 11px;

        }


    }


    @media screen and (max-width: 360px){

        .mobile-login-link a{

            margin: 0;

            padding: 8px 16px 7px;

            font-size: 17px;


        }

        .mobile-login-link span{

            display: none;

        }

    }
</style>

<template>
    <div>
        <!-- loading -->
        <div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">
            <div class="main-loader">
                <img :src="loading"/>
                <p dir="rtl">در حال بارگذاری...</p>
            </div>
        </div>
        <!-- Modals -->
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

        <!-- end modals -->


        <!--nav-->
        <div class="mobile-background-shadow"></div>
        <nav class="navbar text-rtl">

            <div class="container-fluid incobac-main-nav">

                <div class="hidden-md hidden-sm hidden-lg mobile-menu-button">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#incobac-nav">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                </div>

                <div class="incobac-logo navbar-header navbar-right">

                    <router-link class="navbar-brand " :to="{name : 'indexPage'}">
                        <img :src="assets + 'assets/img/logo_dark.png'" alt="اینکوباک | بازارگاه آنلاین دنیای کشاورزی">
                    </router-link>
                </div>

                <div class="user-auth-info-wrapper navbar-nav">
                    <ul  v-if="user_id != ''" class="nav navbar-nav ">
                        <li>
                            <a class="profile-info-wrapper" data-toggle="collapse" href="#web-profile-items" role="button" >
                                <div class="profile-image-wrapper">

                                    <img v-if="profile_photo != ''" :src="storage_path + '/' + profile_photo" :alt="user_full_name"/>
                                    <img v-else :src="user_default_image" :alt="user_full_name"/>

                                </div>
                                <div class="profile-information ">
                                    <span class="hidden-xs" v-text="user_full_name"></span>
                                    <i class="fa fa-angle-down"></i>
                                </div>
                            </a>

                              <ul v-if="is_seller == 1" id="web-profile-items" class="collapse ">
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
                                    <ul v-else id="web-profile-items" class="collapse ">
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

                        </li>
                    </ul>
                    <ul v-else class="nav navbar-nav ">
                        <li  class="hidden-xs">
                            <router-link
                                    class="green-button"
                                    :to="{name : 'register'}">
                                <i class="fa fa-user"></i>

                                    ثبت نام رایگان
                            </router-link>
                        </li>


                         <li class="mobile-login-link hidden-sm hidden-md hidden-lg">
                            <router-link
                                    class="green-button"
                                    :to="{name : 'login'}">
                                <i class="fa fa-user"></i>

                                <span>
                                    ورود / ثبت نام

                                </span>
                            </router-link>
                        </li>


                        <li class="hidden-xs">
                            <router-link
                                    class="green-button green-button-alt"
                                    :to="{name : 'login'}">
                                <i class="fa  fa-sign-in-alt "></i>
                                ورود به اینکوباک
                            </router-link>
                        </li>
                    </ul>
                 </div>

                <div class="collapse navbar-collapse navbar-right" id="incobac-nav">

                    <div class="wrapper-nav">
                        <div class="search-input">

                        <input type="text" placeholder="محصول مورد نظر خود را جستجو کنید"
                               v-model="mainSearchBoxText">
                        <button class="hidden-sm hidden-md hidden-lg fa fa-search" @click="search">

                        </button>

                        <button class="hidden-xs " @click="search">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>

                    <ul class="mobile-navigation hidden-lg hidden-sm hidden-md ">
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

                     </ul>

                    </div>
                </div>
            </div>


            <div class="container-fluid incobac-sub-menu hidden-xs">


                <ul class="nav navbar-right navbar-nav">
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

                </ul>
            </div>
        </nav>

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
                ProductId: "",
                mainSearchBoxText: ""
            };
        },
        props: [
            "assets",
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
            },
            search: function () {
                if (this.mainSearchBoxText !== '') {
                    this.$router.push('/product-list/' + this.mainSearchBoxText);
                }
            },
        },
        mounted() {



            // scroll handeling hide in web

             var lastScroll = 0;
             var navbar = $('nav.navbar .incobac-sub-menu');
            $(window).scroll(function(){
                var state = $(window).scrollTop();

                if($(window).scrollTop() > 60 && state > lastScroll)
                {
                     navbar.addClass("scrollUp");

                }else if ($(window).scrollTop() < 60 && state < lastScroll || $(window).scrollTop() > 60 && state < lastScroll){

                    navbar.removeClass("scrollUp");

                }

                lastScroll = state
            });



            $("#incobac-nav").on("hide.bs.collapse", function(){

             $('.mobile-background-shadow').fadeTo(0,0,function(){
                $(this).css('display','none')
             })

            });


            $("#incobac-nav").on("show.bs.collapse", function(){
               $('.mobile-background-shadow').fadeTo(0,0.8)
             });


            $(document).on('click', function (e){
                /* bootstrap collapse js adds "in" class to your collapsible element*/

                var user_menu_opened = $('#web-profile-items').hasClass('in');

                if(!$(e.target).closest('#web-profile-items').length &&
                    !$(e.target).is('#web-profile-items') &&
                    user_menu_opened === true){

                        $('#web-profile-items').collapse('toggle');
                }

                  /* bootstrap collapse js adds "in" class to your collapsible element*/

                var menu_opened = $('#incobac-nav').hasClass('in');

                if(!$(e.target).is('.search-input input') && menu_opened === true){

                        $('#incobac-nav').collapse('toggle');

                }

            });



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

            var self = this;

            window.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    if (self.enterKeyActiveForSearch) {
                        self.search();
                        $('#incobac-nav').collapse('hide');
                        $('#web-profile-items').collapse('hide');

                    }
                }
            });
        },
        watch: {
            mainSearchBoxText: function () {
                this.enterKeyActiveForSearch = this.mainSearchBoxText !== '';
            }
        },
    };
</script>
