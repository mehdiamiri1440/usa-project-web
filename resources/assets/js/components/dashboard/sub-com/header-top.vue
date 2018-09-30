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