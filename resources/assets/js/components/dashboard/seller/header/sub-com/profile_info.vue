<template>
    <div>
        <div class="profile">
            <div class="profile-img" v-if="photoLink">
                <img :src="storage + '/' + photoLink">
            </div>

            <div class="profile-img" v-else>
                <img :src="def">
            </div>

            <div class="profile-content">
                <div class="profile-name" v-text="username"></div>
                <div class="profile-city" v-text="usercity"></div>
            </div>

            <a :href="'/profile/'+ userprof" class="green-button">
                نمایش پروفایل من
            </a>
        </div>
    </div>
</template>
<script>
    export default{
        props: [
            'photoLink',
            'storage',
            'def',
            'username',
            'usercity',
            'userprof',

        ],

    }

</script>
