<style scoped>
    #DownloadApp {
        background: #fff;
        padding-left:0 !important;
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
        padding:0;
        width: calc(100% - 30px);
    }
    #DownloadApp .main_popup_content > div {
        transform: translate(-50% ,-50%);
    }
    a.close-dialog-popup{
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
        color:#fff;
        background:#28a745;
    }
    .main-logo-popup {
        text-align:center;
    }
    .main-logo-popup img{
        width:30%;
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
            <div class="modal fade" id="myModal" tabindex="-1" ref="myModal" role="dialog"
                 aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal"> <i class="fa fa-close"></i></a>
                            <p class="main_par">
                                {{this.popUpMsg}}
                            </p>
                            <button class="btn green_bot " data-dismiss="modal">
                                متوجه شدم
                            </button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>

        <div class="container">
            <div class="modal fade" id="DownloadApp" tabindex="-1" ref="myModal" role="dialog"
                 aria-labelledby="myModalLabel"
                 aria-hidden="false">

                <div class="modal-dialog">

                    <a href="#"  class="close-dialog-popup" data-dismiss="modal"> <i class="fa fa-close"></i></a>

                    <div class="main_popup_content">

                        <div>
                            <div class="main-logo-popup">
                                <img :src="incobacicon" alt="">
                                <h1>اینکوباک</h1>
                            </div>
                            <p class="main_par">
                               دانلود اپلیکیشن اندروید اینکوباک
                            </p>
                            <a href="#" class="btn green_bot " data-dismiss="modal" @click.prevent="doDownload()">
                                دریافت اپلیکیشن
                            </a>
                            <a href="#" class="btn green_bot " data-dismiss="modal">
                                متوجه شدم
                            </a>

                        </div>
                    </div>
                </div><!-- /.modal-dialog -->
            </div>
        </div>


        <!-- Modal -->
        <div class="container">
            <div class="modal fade" id="myModal2" tabindex="-1" ref="myModal" role="dialog"
                 aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal"> <i class="fa fa-close"></i></a>
                            <p class="main_par">
                                {{this.popUpMsg}}
                            </p>
                            <button class="btn  green_bot" @click="redirectToLogin()">
                                ورود/ثبت نام
                            </button>
                            <br/>
                            <br/>
                            <button class="btn green_bot " data-dismiss="modal">
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
                    <div v-if="user_id != ''" class="user-header-mobile hidden-sm hidden-md hidden-lg ">
                        <div class="profile-menu-header">
                            <a href="#" @click.prevent="dropdown()">
                                <div class="image-header-profile">

                                    <img v-if="profile_photo != ''" :src="storage_path + '/' + profile_photo">

                                    <img v-else :src="user_default_image">

                                </div>
                                <i aria-hidden="true" class="fa fa-angle-down"></i>
                            </a>
                            <div class="profile-list">
                                <ul class="list-unstyled">
                                    <li class="list-item">
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
                    <button class="navbar-toggle" data-toggle="collapse" href="#collapseOne">
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

                <div class="collapse navbar-collapse" id="collapseOne" aria-expanded="false">
                    <ul class="nav navbar-nav navbar-left">
                        <li v-if="user_id != ''"><a class="smoothScroll" :href="'/dashboard/profile'">داشبورد</a></li>
                        <li><a href="/master/product-list" class="smoothScroll">لیست محصولات </a></li>
                        <li><a href="http:\\www.blog.incobac.com" class="smoothScroll">وبلاگ</a></li>
                        <li><a href="/privacy-and-policy" class="smoothScroll">قوانین و مقررات</a></li>
                        <li><a href="/about-us" class="smoothScroll">درباره ما</a></li>

                        <li v-if="user_id == ''"><a :href=" login_page_path" class="smoothScroll">ورود/ثبت نام</a></li>


                        <li v-if="user_id != ''" class="user-header-web hidden-xs">
                            <div class="profile-menu-header "><a href="#" @click.prevent="dropdown()">
                                <div class="image-header-profile">
                                    <img v-if="profile_photo != ''" :src="storage_path + '/' + profile_photo">

                                    <img v-else :src="user_default_image">

                                </div>
                                <i aria-hidden="true" class="fa fa-angle-down"></i> <span
                                    class="name-header-profile">{{user_full_name}}</span></a>
                                <div class="profile-list">
                                    <ul class="list-unstyled">
                                        <li class="list-item">
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
    var viz = false;
    import {eventBus} from "../../../../js/router/dashboard_router";
    import Cookies from "js-cookie";

    export default {
        data() {
            return {
                popUpMsg: '',
                submiting: false
            }
        },
        props: [
            'incobacicon',
            'user_id',
            'user_default_image',
            'profile_photo',
            'user_full_name',
            'user_logout_path',
            'storage_path',
            'login_page_path',
            'loading'
        ],
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
            redirectToLogin: function () {
                window.location.href = '/login';
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
            getAndroidVersion:function(ua) {
                ua = (ua || navigator.userAgent).toLowerCase();
                var match = ua.match(/android\s([0-9\.]*)/);
                return match ? match[1] : undefined;
            },
            // jQuery
            jqUpdateSize:function() {
                // Get the dimensions of the viewport
                var width = $(window).width();
                if (width < 767) {
                    $('#collapseOne a.smoothScroll').on('click', function () {
                        $('.btn-navbar').click(); //bootstrap 2.x
                        $('.navbar-toggle').click(); //bootstrap 3.x by Richard
                        $('.navbar-toggler').click(); //bootstrap 4.x
                    });
                }
            },
            DownloadApp:function(){
                $('#DownloadApp').modal()
            },
            doDownload:function(){
                //ga
                this.registerComponentStatistics('download','app download btn','download app btn in popUp');
                // code here
                Cookies.set('appDownloaded',true);
                window.location.href = '/storage/download/incobac.apk';
            },
            isOsIOS:function(){
                var userAgent = window.navigator.userAgent.toLowerCase(),
                safari = /safari/.test( userAgent ),
                ios = /iphone|ipod|ipad/.test( userAgent );

                if( ios ) {
                    return true
                } else {
                    return false;
                };
            },
            isUserFromWebView:function(){
                var self = this;

                var androidVersion = parseInt(this.getAndroidVersion(), 10);

                if( !this.isOsIOS() && androidVersion >= 5 ){
                    axios.post('/is_user_from_webview')
                        .then(function(response){
                            if(response.data.is_webview == false){
                                self.activateDownloadAppPopUp();
                            }
                            else{
                                //
                            }
                    });
                }

//                if( ! IsWebview(window.navigator.userAgent)){
//                    this.activateDownloadAppPopUp();
//                }
            },
            activateDownloadAppPopUp:function(){
                this.jqUpdateSize();
                if(this.isDeviceMobile() && !Cookies.get('appDownloaded')){
                   setTimeout(this.DownloadApp, 5000);
                }
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
        },
        mounted() {
            var self = this;

            eventBus.$on("submitSuccess", ($event) => {
                this.popUpMsg = $event;
            });
            eventBus.$on("submiting", ($event) => {
                this.submiting = $event;
            });

            $(document).ready(function(){
                    self.isUserFromWebView();
            });    // When the page first loads
            $(window).resize(this.jqUpdateSize);     // When the browser changes size
        },
        created() {
            document.addEventListener('click', this.documentClick);
        },
    }
</script>
