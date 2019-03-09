<template>
    <div class="user-contents col-xs-12  col-sm-3">
        <div class="user-image" v-if="profile_photo">
            <img v-bind:src=" '/storage/' + profile_photo">
        </div>
        <div class="user-image" v-else>
            <img :src="defultimg" class="image_defult">
        </div>
        <p v-if="user_info">{{user_full_name}}</p>
<!--        <a v-bind:href="'profile/' + user_name" class="green_bot">
            مشاهده پروفایل
        </a>-->
        <router-link :to="{ path: '/profile/'+ user_name}" class="green_bot">مشاهده پروفایل</router-link>
        <div class="create_buy  hidden-xs" >
            <a class="green_bot" href="#" @click="openRequestRegisterBox($event)">
                درخواست خرید
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        props:[
            'profile_photo',
            'user_info',
            'user_full_name',
            'user_name',
            'defultimg',
            'current_user'
        ],
        methods:{
            openRequestRegisterBox: function (e) {
                if (this.current_user.profile) {
                    e.preventDefault;
                    var event = $(e.target);

                    this.errors = '';

                    var index = (event.parents('article').index() + 1);
                    var element = $('article:nth-of-type(' + index + ') .buy_details');
                    element.slideToggle("125", "swing");
                    $('.buy_details').not(element).slideUp();

                    this.scrollToTheRequestRegisterBox(element);
                }
                else {
                    this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    $('#myModal2').modal('show');
                }

            },
            scrollToTheRequestRegisterBox: function (element) {
                var newPosition = $(element).offset();
                console.log(newPosition.top);
                $('html, body').stop().animate({scrollTop: newPosition.top - 380}, 1000);
            },
        }
    }
</script>
