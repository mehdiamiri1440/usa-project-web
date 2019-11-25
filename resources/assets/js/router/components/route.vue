<style scoped>

    .android-download-alert-wrapper{

        position: fixed;

        bottom: 0;

        width: 100%;

        background: #e41c38;

        text-align: center;

        color: #fff;

        direction: rtl;
        
        z-index: 1020;

    }

    .android-apk-download{
        
        padding: 15px;

        background: none;

        border: none;

        width: 100%;

        height: 100%;

    }

    .close-android-download-alert-wrapper{

        background: none;

        border: none;

        font-size: 20px;

        position: absolute;

        right: 15px;

        top: 13px;

        z-index: 1021;

    }

</style>

<template>
    <div>

        <router-view
                :user-id="userId"
                :is-seller="isSeller"
                :assets="assets"
                :storage-path="storagePath"
                :profile-photo="profilePhoto"
                :user-full-name="userFullName"
                :user-logout-path="userLogoutPath"
        />


        <router-view
                name="buyer"
                :user-id="userId"
                :is-seller="isSeller"
                :assets="assets"
                :storage-path="storagePath"

        />

        <router-view
                name="seller"
                :user-id="userId"
                :is-seller="isSeller"
                :assets="assets"
                :storage-path="storagePath"

        />

        <!-- add android app download  -->

<!--
        <div v-if="isConditionSatisfied"  class="android-download-alert-wrapper hidden-lg hidden-md">

            <button class="close-android-download-alert-wrapper" @click.prevent="isConditionSatisfied = false">
                <i class="fa fa-times-circle"></i>
            </button>

            <button class="android-apk-download" @click.prevent="doDownload">
                <i class="fas fa-download"></i>
            دانلود اپلیکیشن اینکوباک
            
        
            </button>
        </div>
-->


    </div>
</template>


<script>

    import router from '../router.js'
    import Cookies from "js-cookie";
    import IsWebview from "is-webview";

    export default {
        data:function(){

            return{
                iswebview : navigator.userAgent == "webView" ? true : false, 
                isConditionSatisfied : false
            }

        },
        props: [
            'userId',
            'isSeller',
            'assets',
            'storagePath',
            'profilePhoto',
            'userFullName',
            'userLogoutPath',
        ],
        created:function () {
            window.localStorage.setItem('userId', this.userId);
            window.localStorage.setItem('userType', this.isSeller);
        },
        router,
        methods:{
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
            doDownload: function () {
                //ga
                this.registerComponentStatistics(
                    "download",
                    "app download btn",
                    "download app btn in popUp"
                );
                // code here
                Cookies.set("appDownloaded", true);
                window.location.href = '/download/app';
            },
            isOsIOS: function () {
                var userAgent = window.navigator.userAgent.toLowerCase(),
                    safari = /safari/.test(userAgent),
                    ios = /iphone|ipod|ipad/.test(userAgent);
                return ios;
            },
            activateDownloadApp: function () {

               if (!this.iswebview &&  this.isDeviceMobile() && !this.isOsIOS()) {
                    if(this.getAndroidVersion() >= 4.4){

                         this.isConditionSatisfied = true;

                    }


                }
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag("event", actionName, {
                    event_category: categoryName,
                    event_label: labelName
                });
            },
        },
        mounted(){
            this.activateDownloadApp();
        }

    }
</script>

