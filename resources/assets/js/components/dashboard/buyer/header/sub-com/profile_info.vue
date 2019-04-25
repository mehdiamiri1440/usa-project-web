<style>
    .green-bot {
        margin: 15px 0;
        display: inline-block;
        background: #28a745;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }
    .green-bot:focus,.gray-bot:focus {
        color: #fff;
    }
</style>
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
                <div class="profile-name">
                    {{username}}
                </div>
                <div class="profile-city">
                    {{usercity}}
                </div>
            </div>
            <a :href="'/master/profile/'+ userprof" class="green-bot">
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
