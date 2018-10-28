<style>
    #main {
        margin-right: 250px;
        margin-top: 65px;
        background: #eff3f6;
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
    .image-header-profile  img{
        height: 100%;
    }
    .profile-menu-header {
        float: left;
    }

    .right-menu-header {

        padding: 16px;
    }

    .right-menu-header, .content-header {
        float: right;

    }

    .profile-menu-header {
        padding: 7px;
        padding-left: 55px;
    }


    .profile-menu-header i {
        position: absolute;

        left: -90px;

        top: 0px;

        font-size: 20px;
    }

    .content-header {
        background: #28a745;
        color: #fff;
        height: 100%;
        padding: 20px 20px 0;
    }

    .right-menu-header a, .profile-menu-header a {
        color: #7f8c9b;
        margin: 5px;
    }

    .right-menu-header a {
        font-size: 30px;
    }

    .right-menu-header a:hover, .profile-menu-header > a:hover {
        color: #2e353e;
    }

    .profile-menu-header > a {
        position: relative;
        top: 18px;
        left: 10px;
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
</style>

<template>
    <div>
        <header id="header" class="main-header">
            <div class="show-header">
                <button class="fa fa-angle-left"></button>
            </div>
            <div class="content-header">
                <span class="font-big">اینکوباک  </span> | <span> بازارگاه آنلاین کشاورزی</span>
            </div>
            <div class="profile-menu-header">
                <a href="#" onclick="dropdown()">
                    <div class="image-header-profile" v-if="photoLink != null">
                        <img :src="storage + '/' + photoLink">
                    </div>
                    <div class="image-header-profile" v-else>
                        <img :src="def">
                    </div>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    {{username}}
                </a>
                <div class="profile-list">
                    <ul class="list-unstyled">
                        <li class="list-item"><a :href="profilebasic">پروفایل</a></li>
                        <li class="list-item"><router-link :to="{ name : 'password' }">تغییر کلمه عبور</router-link></li>
                        <li class="list-item"><a :href="out">خروج</a></li>
                    </ul>
                </div>
            </div>
            <div class="right-menu-header">
                <ul class="list-inline">
                    <li><a href="#"><i class="fa fa-bars" aria-hidden="true"></i></a></li>
                    <li><a :href="routeHome"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <subMenu></subMenu>
        </header>

    </div>
</template>

<script>
    import subMenu from './sub-menu/sub-menu.vue'
    export default {
        props: [
            'photoLink',
            'profilebasic',
            'storage',
            'def',
            'username',
            'out',
            'routeHome'
        ],
        components:{
            subMenu
        }
    }
</script>