<style>

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

    a, a:focus, a:active, a:visited, input, input:focus, input:active {
        outline: none;
    }

    body {
        line-height: 1.1;
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

    .green-button {
        margin: 15px 0 0;
        display: inline-block;
        background: #28a745;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        -webkit-transition: 300ms;
        transition: 300ms;
    }
    .green-button:hover {
        background: #279b41;
        color: #fff;
    }
    .green-button:focus,.gray-bot:focus {
        color: #fff;
    }
    .green-button:focus, .green-button:hover {
        color: #fff !important;
    }

    /*start style right header*/
    .logo {
        height: 64px;

        display: block;

        float: right;

        width: 70%;
    }

    .logo_hide {
        display: none;
    }

    .logo a {
        display: inline-block;
        margin-top: -11px;
        height: 75px;
        padding: 0 10px;
    }

    .right-header {
        width: 250px;
        right: 0;
        bottom: 0;
        position: fixed;
        top: 0;
        overflow: hidden;
        z-index: 9;
    }

    .little_header {
        width: 80px;
    }

    .right-header.mobile-header {
        display: none;
        box-shadow: 0 0 20px;
    }

    .right-header > header {
        overflow: hidden;
        background: #fff;
    }

    .close_menu, .close_menu_mob {
        float: left;
        width: 30%;
        border: none;
        background: none;
        font-size: 35px;
        top: 0;
        position: relative;
        padding: 11px;
    }

    .close_menu_mob {
        display: none;
    }

    .main-right-header {
        background: #313a43;
        height: 100%;
        text-align: right;
        color: #fff;
        position: relative;

    }

    .show-header button {
        float: right;
        border: none;
        background: none;
        font-size: 25px;
        padding: 19px 30px 19px 24px;
        display: none;
    }

    .profile {
        padding: 20px 20px 10px;
        border-bottom: 2px solid #2e353e;
    }

    .profile-img {
        overflow: hidden;
        border-radius: 50%;
        height: 85px;
        width: 85px;
        margin: 0 auto;
        margin-left: 10px;
        border: 2px solid #fff;
        float: right;
    }
    .dark-profile-img {
        overflow: hidden;
        border-radius: 50%;
        height: 85px;
        width: 85px;
        margin: 0 auto;
        margin-left: 10px;
        border: 2px solid #5B5C5D;
        float: right;
    }
    .profile-img img {
        height: 100%;
    }

    .profile-content {
        float: right;
        padding-top: 15px;
    }

    .profile-name {
        margin: 8px 0;
        font-size: 17px;
    }

    .profile-city {
        font-size: 14px;
        font-weight: 200;
    }

    .profile-city {
        font-size: 14px;
        font-weight: 200;
    }

    .header-menu a {
        color: #b1b1b1;
        padding: 5px 20px;
        display: inline-block;
        position: relative;
        width: 100%;
    }

    .header-menu {
        padding: 0;
    }

    .header-menu a:hover {
        color: #fff;
        background: #637484;
    }

    .header-menu a:hover::before {
        content: " ";
        height: 100%;
        width: 2px;
        background: #00d614;
        position: absolute;
        right: 0;
        top: 0;
        display: block;
    }

    .header-menu li.active a {
        color: #fff;
        background: #637484;
    }

    .header-menu li.active a:before {
        content: " ";
        height: 100%;
        width: 2px;
        background: #00d614;
        position: absolute;
        right: 0;
        top: 0;
        display: block;
    }

    .copy-right {
        text-align: center;
        font-size: 12px;
        font-weight: 200;
        line-height: 1.3em;
        padding: 20px;
        position: absolute;
        bottom: 76px;
        direction: rtl;
    }

    label {
        display: block;
        margin: 9px auto;
    }

    input[type="text"], select, input[type="button"], textarea {
        width: 100% !important;
    }

    input[type="text"], select, textarea {
        background: #eff3f6;
        border: 1px solid #cfcfcf;
        border-radius: 3px;
        width: 100% !important;
    }

    input[type="text"], textarea {
        padding: 13px 15px;
        width: 100% !important;
    }

    select {
        padding: 7px 15px;
    }

    .image-header-profile img {
        height: 100%;
    }

    .right-menu-header {
        position: relative;
        padding: 6px 16px;
    }

    .right-menu-header li ul a {
        font-size: 14px;
        width: 100%;
        display: inline-block;
    }

    .right-menu-header li ul li {

        margin: 5px;

    }

    .icon-header-list {
        position: absolute;
        width: 165px;
        background: #fff;
        padding: 8px 10px;
        border-radius: 3px;
        box-shadow: 0 0 3px #313a43;
        text-align: right;
        right: 75px;
        top: 65px;
        display: none;
        z-index: 999;

    }

    .background_mob_sec {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: -1;
        display: none;
    }

    /*end style right header*/

    /*loader*/

    .loader-display {
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: block;
    }

    .main-loader {
        position: absolute;

        top: 35%;

        text-align: center;

        display: block;

        width: 100%;

        color: #fff;

        font-size: 23px;
    }

    .main-loader img {
        width: 100px;

        background: #fff;

        border-radius: 50px;

        height: 100px;

        display: inline-block;

        margin: 0 auto 22px;
    }

    .loader-wrapper {
        display: none;
    }

    span.min {
        display: none;
    }

    .choose-file {
        background: #fff;
    }

    .sub-header a.router-link-exact-active {
        color: #313942;
    }

    .sub-header a.router-link-exact-active::after {
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background: #28a745;
        height: 3px;
        width: 100%;
    }

    .header-menu a.router-link-exact-active::before, a.active::before {
        content: " ";
        height: 100%;
        width: 2px;
        background: #00d614;
        position: absolute;
        right: 0;
        top: 0;
        display: block;
    }

    .header-menu a.router-link-exact-active, a.active {
        color: #fff;
        background: #637484;
    }

    @media screen and (max-width: 994px) {
        .content-header {
            display: none;
        }

        .img-profile {
            padding-top: 20px;
        }

        .right-header.desktop-header {
            display: none;
        }

        .right-header.mobile-header {
            display: block;
            right: -300px;
        }

        .main-header, .little-main-header {
            right: 0 !important;
        }

        #main, #main.little-main {
            margin-right: 0 !important;
        }

        .post-contents-table {
            width: 100%;
        }

        .copy-right {
            display: none;
        }

        .close_menu {
            display: none;
        }

        .close_menu_mob {
            display: block;
        }

        .show-header button {
            display: block;
        }

        .img-profile .submit {
            position: relative;
            width: 100%;
            margin: 25px auto;

        }

        .img-profile .submit label {
            width: 40%;
            padding: 12px 0;
        }

        .img-profile {
            float: none;
        }
    }

    @media screen and (max-width: 768px) {
        .mobile-header .green-button {
            margin: 15px 0 0;
        }

        .mobile-header ul a {
            padding: 15px 20px;
        }

        .image-content-post, .contents-post {
            width: 100%;
            float: none;
            margin: 10px 0;
            padding: 0;
        }

        #step1 .main_buttons {
            text-align: center !important;
        }

        .name-header-profile {
            display: none;
        }

        .profile-menu-header {
            padding: 7px;
            padding-left: 36px;
        }
    }

    @media screen and (max-width: 555px) {
        span.min {
            display: inherit;
        }

        span.full {
            display: none;
        }

        .right-menu-header {
            padding: 6px;
            border-right: 1px solid #eff3f6;
        }

        .profile-menu-header .user_name {
            display: none;
        }

        .content-header {
            display: none;
        }

        .right-menu-header .green-button {
            padding: 10px 15px;
        }

    }

    @media screen and (max-width: 345px) {
        .sub-header a {
            font-size: 10px;

        }

        .show-header button {
            padding: 19px 26px 19px 19px;
        }

        .right-menu-header {
            padding: 6px;
        }

        .sub-header {

            bottom: -44px;

        }
    }

    /*end loader*/
</style>

<template>
    <div>
        <!-- Modal -->
        <div class="container">
            <div class="modal fade"
                 id="custom-main-modal"
                 tabindex="-1"
                 ref="custom-main-modal"
                 role="dialog"
                 aria-labelledby="custom-main-modal-label"
                 aria-hidden="true">

                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal">
                                <i class="fa fa-close"></i>
                            </a>

                            <p class="main-pop-up" v-text="popUpMsg"></p>

                            <button class="btn green-button " data-dismiss="modal" id="close-btn">
                                متوجه شدم
                            </button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>

        <div class="container">
            <div class="modal fade"
                 id="confirmation-modal"
                 tabindex="-1"
                 ref="confirmation-modal"
                 role="dialog"
                 aria-labelledby="confirmation-modal-label"
                 aria-hidden="true">

                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal"> <i class="fa fa-close"></i></a>
                            <p class="main-pop-up" id="popUpMsg">
                                لطفا پس از تکمیل اطلاعات پروفایل خود، منتظر تماس کارشناسان اینکوباک جهت تکمیل اطلاعات
                                باشید. از شکیبایی شما سپاسگزاریم.
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
            <div class="modal fade" id="contract-modal-wrapper" tabindex="-1" ref="contract-modal-wrapper" role="dialog"
                 aria-labelledby="contract-modal-wrapper-label"
                 aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="main_popup_content">
                            <a href="#" data-dismiss="modal"> <i class="fa fa-close"></i></a>
                            <p class="main-pop-up" id="contractModal">

                                برای شروع استفاده از خدمات اینکوباک ابتدا در قسمت ویرایش پروفایل، قرارداد همکاری را
                                مطالعه و تایید کنید.
                            </p>
                            <button class="btn green-button " data-dismiss="modal">
                                متوجه شدم
                            </button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div>
        </div>
        <!-- /.modal -->
        <!--loader-->
        <!--loading upload-->

        <div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">
            <div class="main-loader">
                <p dir="rtl">{{uploadPercentage}}%</p>
                <progress max="100" :value="uploadPercentage"></progress>
                <p dir="rtl">در حال بارگذاری...</p>
            </div>
        </div>

    <!--    <div :class="{'loader-wrapper': !submiting , 'loader-display' : submiting }">
            <div class="main-loader">
                <img :src="loading">
                <p dir="rtl">در حال بارگذاری...</p>
            </div>
        </div>-->
        <!--end loader-->

        <section class="right-header mobile-header">
            <header class="header-right-header">
                <button class="close_menu_mob">
                    <i class="fa fa-angle-right"></i>
                </button>

                <button class="close_menu">
                    <i class="fa fa-angle-right"> </i>
                </button>

                <span class="logo">
                    <a href="/">
                        <img :src="logo" alt="incoboc">
                    </a>
                </span>

            </header>


            <section class="main-right-header">
                <ProfileInfo
                :isLoading='isLoading'
                        :photoLink="currentUser.profile.profile_photo"
                        :storage="storage"
                        :def="defultimg"
                        :username="currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name"
                        :usercity="currentUser.user_info.province + ' - ' + currentUser.user_info.city"
                        :userprof="currentUser.user_info.user_name"
                />

                <HeaderMenuList
                        :profilebasic="profilebasic"
                        :byadreq="byadreq"
                        :selregpro="selregpro"
                        :transactroute="transactroute"
                        :mytrans="mytrans"
                />

                <!-- <div class="copy-right">

                      <p dir="rtl">
                          تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.
                      </p>
                 </div>-->

            </section>

            <div class="background_mob_sec"></div>

        </section>

        <section class="right-header desktop-header">
            <header class="header-right-header">
                <button class="close_menu_mob">
                    <i class="fa fa-angle-right"> </i>
                </button>

                <button class="close_menu">
                    <i class="fa fa-angle-right"> </i>
                </button>

                <span class="logo">
                    <a href="/">
                        <img :src="logo" alt="incoboc">
                    </a>
                </span>

            </header>

            <section class="main-right-header">
                <ProfileInfo
                :isLoading='isLoading'               
                        :photoLink="currentUser.profile.profile_photo"
                        :storage="storage"
                        :def="defultimg"
                        :username="currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name"
                        :usercity="currentUser.user_info.province + ' - ' + currentUser.user_info.city"
                        :userprof="currentUser.user_info.user_name"
                />

                <HeaderMenuList
                        :profilebasic="profilebasic"
                        :byadreq="byadreq"
                        :selregpro="selregpro"
                        :transactroute="transactroute"
                        :mytrans="mytrans"
                        :guide="guide"
                />

            </section>

        </section>

        <HeaderTop
                :isLoading='isLoading'
                :photoLink="currentUser.profile.profile_photo"
                :storage="storage"
                :def="defultimg"
                :username="currentUser.user_info.first_name + ' ' + currentUser.user_info.last_name"
                :out="logout"
                :routeHome="routehome"
        />
    </div>

</template>

<script>
    import ProfileInfo from './sub-com/profile_info.vue'
    import HeaderMenuList from './sub-com/header-menu-list.vue'
    import HeaderTop from './sub-com/header-top.vue'
    import {eventBus} from "../../../../router/dashboard_router";

    export default {
        components: {
            ProfileInfo,
            HeaderMenuList,
            HeaderTop
        },
        props: [
            'defultimg',
            'logo',
            'loading',
            'storage',
            'transactroute',
            'mytrans',
            'selregpro',
            'byadreq',
            'profilebasic',
            'logout',
            'routehome',
            'guide'
        ],
        data: function () {
            return {
                isLoading:true,
                currentUser: {
                    profile: {
                        is_company: '',
                        company_name: '',
                        company_register_code: '',
                        address: '',
                        public_phone: '',
                        profile_photo: this.storage + '',
                        postal_code: '',
                        shaba_code: ''
                    },
                    user_info: ''
                },
                profileBasicFields: [
                    'is_company',
                    'company_name',
                    'company_register_code',
                    'public_phone',
                    'address',
                    'postal_code',
                    'shaba_code',
                ],
                profilePhoto: '',
                errors: '',
                popUpMsg: '',
                submiting: false,
                uploadPercentage: 0
            }
        },
        methods: {

            init: function () {

                this.isLoaded = true;
                axios.post('/user/profile_info')
                    .then(response => {this.isLoading=false;return this.currentUser = response.data;}
                    );

            },
            RegisterBasicProfileInfo: function () {
                this.submiting = true;
                this.errors = '';
                var self = this;
                var data = new FormData();

                for (var i = 0, cnt = this.profileBasicFields.length; i < cnt; i++) {
                    if (this.currentUser.profile[this.profileBasicFields[i]] != null) {
                        data.append(this.profileBasicFields[i], this.toLatinNumbers(this.currentUser.profile[this.profileBasicFields[i]])
                        );
                    }
                }

                let profilePhoto = this.$refs.profilePhoto.files[0];

                if (profilePhoto) {
                    data.append('profile_photo', profilePhoto);
                }

                axios.post('/user/profile_modification', data)
                    .then(function (response) {
                        if (response.status == 200) {
                            self.submiting = false;
                            eventBus.$emit('submitSuccess', self.popUpMsg);

                            self.popUpMsg = 'تغییرات با موفقیت اعمال شد';
                            $('#custom-main-modal').modal('show');
                        }
                        self.submiting = false;
                    })
                    .catch(function (err) {
                        self.errors = '';
                        self.errors = err.response.data.errors;
                        self.submiting = false;

                    });
            },
            toLatinNumbers: function (num) {
                if (num == null) {
                    return null;
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
                    .replace(/[۰-۹]/g, function (w) {
                        return numDic[w];
                    });
            },
            toggleHeader() {
                var menuCloseButton = $(".close_menu");
                var menuCloseButtonIcon = $(".close_menu i");
                var profile = $(".profile");
                var headerMenu = $(".header-menu span");
                var headerMenuLink = $(".header-menu a");
                var logo = $(".logo");
                var copyRight = $(".copy-right");
                var rightHeaderDesktop = $(".right-header.desktop-header");
                var littleMainHeader = $(".main-header");
                var main = $("#main");
                var nextMove = "shrink";
                menuCloseButton.click(function () {
                    if (nextMove == "expand") {
                        $(this).css({
                            width: "30%"
                        });
                        headerMenuLink.css({
                            "text-align": "right"
                        });
                        copyRight.css('display', 'block');
                        headerMenu.css('display', 'inline');

                        menuCloseButtonIcon.addClass('fa-angle-right', 200).removeClass('fa-angle-left');

                        rightHeaderDesktop.removeClass("little_header", 200);
                        littleMainHeader.removeClass("little-main-header", 200);
                        main.removeClass("little-main", 200);

                        nextMove = "shrink";

                        profile.fadeIn();
                        logo.fadeIn();


                    } else {
                        $(this).css({
                            width: "100%"
                        });
                        profile.css('display', 'none');
                        headerMenu.css('display', 'none');
                        copyRight.css('display', 'none');
                        logo.css('display', 'none');
                        headerMenuLink.css({
                            "text-align": "center"
                        });

                        menuCloseButtonIcon.addClass('fa-angle-left', 200).removeClass('fa-angle-right', 200);

                        rightHeaderDesktop.addClass("little_header", 200);
                        littleMainHeader.addClass("little-main-header", 200);
                        main.addClass("little-main", 200);

                        nextMove = "expand";

                    }
                });
            },
            toggleShowHeader() {
                var showHeaderButtonElement = $('.show-header button');
                var closeHeaderButtonMobile = $('.close_menu_mob ');
                var flag = true;
                var rightHeader = $(".right-header.mobile-header");
                var back = $(".background_mob_sec");
                var closeHeaderButtonMobileLinks = $('.mobile-header .header-menu a');
                showHeaderButtonElement.on('click', function () {
                    if (flag === true) {
                        rightHeader.animate({
                            right: '0'
                        }, 300);

                        back.fadeIn();

                        flag = false;

                    } else {
                        rightHeader.animate({
                            right: '-300px'
                        }, 300);

                        flag = true;

                    }
                });
                closeHeaderButtonMobile.on('click', function () {
                    if (flag === true) {
                        rightHeader.animate({
                            right: '0'
                        }, 300);

                        flag = false;

                    } else {
                        rightHeader.animate({
                            right: '-300px'
                        }, 300);

                        back.fadeOut();

                        flag = true;

                    }
                });
                closeHeaderButtonMobileLinks.on('click', function () {
                    if (flag === true) {
                        rightHeader.animate({
                            right: '0'
                        }, 300);

                        flag = false;

                    } else {
                        rightHeader.animate({
                            right: '-300px'
                        }, 300);

                        back.fadeOut();

                        flag = true;
                    }
                });
                back.on('click', function () {
                    if (flag === true) {
                        rightHeader.animate({
                            right: '0'
                        }, 300);

                        flag = false;

                    } else {
                        rightHeader.animate({
                            right: '-300px'
                        }, 300);

                        back.fadeOut();

                        flag = true;

                    }
                })
            },

        },
        mounted() {
            this.init();
            this.toggleHeader();
            this.toggleShowHeader();

        },
        created() {
            eventBus.$on('submiting', (event) => {
                this.submiting = event;
            });
            eventBus.$on('submitSuccess', (event) => {
                this.popUpMsg = event;
            });
            eventBus.$on('uploadPercentage', (event) => {
                this.uploadPercentage = event;
            });

        },
        metaInfo() {
            return {
                title: 'بازارگاه کشاورزی',
                titleTemplate: 'اینکوباک | %s',
            }

        }
    }
</script>
