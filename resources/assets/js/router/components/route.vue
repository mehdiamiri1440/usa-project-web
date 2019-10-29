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

    </div>
</template>


<script>

    import router from '../router.js'

    export default {

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

    }
</script>

