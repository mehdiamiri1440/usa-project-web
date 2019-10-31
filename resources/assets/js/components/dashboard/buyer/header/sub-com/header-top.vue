<style scoped>

    .show-header button {
        float: right;
        border: none;
        background: none;
        font-size: 25px;
        padding: 19px 30px 19px 24px;
        display: none;
    }

    .show-header button {
        display: block;
        background: #000546;
        color: #fff;
    }

    .display-loading {
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .margin-loading {
        margin: 3%;
    }

    .loading-height {
        height: 10px !important;
        width: 60px;
    }

    #main {
        margin-right: 250px;
        margin-top: 65px;
        background: #f6f6f6;
        position: relative;
        min-height: 600px;
    }

    #main.little-main {
        margin-right: 80px !important;
    }

    .main-header {
        height: 65px;
        position: fixed;
        left: 0;
        right: 250px;
        top: 0;
        background: #fff;
        z-index: 5;
        border-bottom: 2px solid #f6f6f6;
    }

    .little-main-header {
        right: 80px;
    }

    .image-header-profile {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        float: left;
    }

    .image-header-profile img {
        height: 100%;
    }

    .profile-menu-header {
        float: left;
    }

    .right-menu-header,
    .content-header {
        float: right;
    }

    .profile-menu-header {
        padding: 7px;
        padding-left: 37px;
    }

    .profile-menu-header i {
        position: absolute;

        left: -80px;

        top: 20px;

        font-size: 20px;
    }

    .profile-menu-header span.user_name {
        display: block;

        float: right;

        padding-top: 15px;
    }

    .right-menu-header .green-button {
        font-size: 17px;
    }

    .right-menu-header a,
    .profile-menu-header a {
        color: #7f8c9b;
        margin: 5px;
    }

    .right-menu-header a {
        font-size: 30px;
    }

    .content-header {
        background: #00c569;
        color: #fff;
        height: 100%;
        padding: 20px 20px 0;
        display: none;
    }

    /*.content-header span{
      display: block;
      text-align: right;
    }*/

    .right-menu-header {
        position: relative;
        padding: 6px;
    }

    .right-menu-header li ul a {
        font-size: 14px;
        width: 100%;
        display: inline-block;
    }

    .right-menu-header li ul li {

        margin: 5px;

    }

    .right-menu-header .green-button {
        font-size: 17px;
    }

    .right-menu-header a,
    .profile-menu-header a {
        color: #7f8c9b;
        margin: 5px;
    }

    .profile-menu-header > a {
        position: relative;
    }

    .profile-list {
        position: absolute;
        width: 165px;
        background: #fff;
        padding: 8px 10px;
        border-radius: 3px;
        box-shadow: 0 0 3px #313a43;
        text-align: right;
        left: 40px;
        top: 65px;
        display: none;
        z-index: 999;
    }

    .profile-list li {
        margin: 5px;
    }

    .profile-list a {
        width: 100%;
        display: inline-block;
    }

    .font-big {
        font-size: 23px;
        position: relative;
        top: 3px;
    }

    .green-button {
        color: #fafafa !important;
    }

    .green-button:hover {
        color: #fff !important;
        background: #00d614;
    }

    .green-button {
        color: #fafafa !important;
    }

    .green-button:hover {
        color: #fff !important;
        background: #00ac5c;
    }

    i.fa-home {
        position: relative;
        top: 5px;
    }

    .product-list-link {
        font-size: 17px !important;
        padding: 7px 20px !important;
        background: #00c569 !important;
        border-radius: 4px;
        border: 1px solid;
        display: inline-block;
        color: #fff !important;
    }


    @media screen and (max-width: 994px) {
        .content-header {
            display: none;
        }

        .main-header, .little-main-header {
            right: 0 !important;
        }


    }

    @media screen and (max-width: 768px) {

        span.min {
            display: inherit;
        }

        span.full {
            display: none;
        }
        .mobile-header .green-button {
            margin: 15px 0 0;
        }

        .mobile-header ul a {
            padding: 15px 20px;
        }


        .profile-menu-header {
            padding: 7px;
            padding-left: 36px;
        }
    }

    @media screen and (max-width: 555px) {

        .user_name{
            display: none !important;
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


    }
</style>

<template>
    <div>
        <header id="header" class="main-header">
            <div class="show-header hidden-md hidden-lg">
                <button class="fa fa-bars"></button>
            </div>

            <div class="content-header">
                <span class="font-big">اینکوباک</span>
                <span>بازارگاه آنلاین کشاورزی</span>
            </div>

            <div class="profile-menu-header">
                <a v-if="!isLoading" href="#" @click.prevent="collapseDropDown()">
                    <div class="image-header-profile" v-if="photoLink">
                        <img :src="storage + '/' + photoLink"/>
                    </div>

                    <div class="image-header-profile" v-else>
                        <img :src="def"/>
                    </div>

                    <i class="fa fa-angle-down" aria-hidden="true"></i>

                    <span class="user_name" v-text="username"></span>
                </a>
                <div class="col display-loading" v-else>
                    <div class="image-header-profile shadow-content placeholder-content"></div>
                    <div class="user_name shadow-content placeholder-content loading-height margin-loading"></div>
                </div>

                <div class="profile-list">
                    <ul class="list-unstyled">
                        <li class="list-item">
                            <router-link
                                    :to="{name : 'profileBasicBuyer'}"
                                    @click="registerComponentStatistics('seller-dashboard-header','profile-link','click-on-profile-link-in-dashboard')"
                            >پروفایل
                            </router-link>
                        </li>

                        <li class="list-item">
                            <router-link
                                    :to="{name : 'passwordBuyer'}"
                                    @click="registerComponentStatistics('seller-dashboard-header','change-password','click-on-change-password-dashboard')"
                            >تغییر کلمه عبور
                            </router-link>
                        </li>

                        <li class="list-item">
                            <a :href="out" @click="logUserOut()">خروج</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="right-menu-header">
                <ul class="list-inline">
                    <li>
                        <router-link
                                class="product-list-link"
                                :to="{ name : 'productList'}"
                                @click="registerComponentStatistics('dashboard-header','product-list-btn','click-on-product-list-in-dashboard')"
                        >
                            <span class="full">لیست محصولات</span>
                            <span class="min">
                <i class="fa fa-th-list" aria-hidden="true"></i>
              </span>
                        </router-link>
                    </li>

                    <li>
                        <router-link
                                :to="{name : 'indexPage'}"
                                @click="registerComponentStatistics('dashboard-header','home-page-btn','click-on-home-page-in-dashboard')"
                        >
                            <i class="fa fa-home" aria-hidden="true"></i>
                        </router-link>
                    </li>
                </ul>
            </div>

            <SubMenu/>
        </header>
    </div>
</template>


<script>
    var visible = false;
    import SubMenu from "./sub-menu/sub-menu.vue";

    export default {
        components: {
            SubMenu
        },
        props: [
            "photoLink",
            "storage",
            "def",
            "username",
            "out",
            "routeHome",
            "isLoading"
        ],
        methods: {
            logUserOut: function () {
                localStorage.removeItem("userRoute");
                registerComponentStatistics(
                    "seller-dashboard-header",
                    "logout",
                    "click-on-logout-in-dashboard"
                );
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
                    $(".profile-list").fadeOut("slow");
                    $(".icon-header-list").fadeOut("slow");
                    visible = false;
                }
            }
        },
        created() {
            document.addEventListener("click", this.documentClick);
        },
        registerComponentStatistics: function (categoryName, actionName, labelName) {
            gtag("event", actionName, {
                event_category: categoryName,
                event_label: labelName
            });
        }
    };
</script>
