<template>
    <div class="user-contents col-xs-12  col-sm-3">
        <div class="user-image" v-if="profile_photo">
            <img v-bind:src=" '/storage/' + profile_photo">
        </div>
        <div class="user-image" v-else>
            <img :src="defultimg" class="image_defult">
        </div>
        <p v-if="user_info">{{user_full_name}}</p>
<!--        <a v-bind:href="'/master/#/profile/' + user_name" class="green_bot">
            مشاهده پروفایل
        </a>-->
        <a :href=" '/master/#/profile/'+ user_name" class="green_bot" @click="registerComponentStatistics('product','showUserProfile','show profile')">مشاهده پروفایل</a>
        <div class="create_buy  hidden-xs" >
            <a class="green_bot" href="#" @click.prevent="openRequestRegisterBox($event)">
                درخواست خرید
            </a>
        </div>
    </div>
</template>
<style scoped>


    .user-image {
        width: 135px;
        height: 135px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto 10px;
    }

    .user-image img, .user-image > div {
        height: 100%;
    }
    .user-contents {
        border-right: 2px solid #f0f3f6;
        text-align: center;
        padding: 0 20px;
    }

    .user-contents h1 {
        padding: 14px 0;
    }

    .create_buy {
        position: relative;
    }
    @media screen and (max-width: 768px) {

        .logo img {
            width: 100%;
        }

        .user-contents {
            border-right: none;
            overflow: hidden;
            margin-bottom: 6px;
        }

        .user-contents h1 {
            float: none;

            text-align: right;

            overflow: hidden;

            font-size: 18px;
            padding: 15px 0 0;
        }
        .user-contents p {
            margin: 22px 8px;
            font-size: 12px;
            font-weight: 800;
            float: right;
        }


        .user-image {
            width: 65px;
            height: 65px;
            overflow: hidden;
            border-radius: 50%;
            margin: 0;
            float: right;
        }

        .user-contents a.green_bot{
            float: left;
            width: initial;
            padding: 5px;
            margin: 15px auto;
        }
    }



</style>
<script>
    export default {
        props:[
            'profile_photo',
            'user_info',
            'user_full_name',
            'user_name',
            'defultimg',
            ''
            'current_user'
        ],
        methods:{
            openRequestRegisterBox: function (e) {
                if (this.current_user.profile) {
                    e.preventDefault;
                    var event = $(e.target);

                    this.registerComponentStatistics('product','click','request register button');

                    this.errors = '';

                    var index = (event.parents('article').index() + 1);
                    var element = $('article:nth-of-type(' + index + ') .buy_details');
                    element.slideToggle("125", "swing");
                    $('.buy_details').not(element).slideUp();

                    this.scrollToTheRequestRegisterBox(element);
                }
                else {
                    this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    ebentBus.$emit('submitSuccess',this.popUpMsg)
                    $('#myModal2').modal('show');
                }

            },
            scrollToTheRequestRegisterBox: function (element) {
                var newPosition = $(element).offset();
                $('html, body').stop().animate({scrollTop: newPosition.top - 380}, 1000);
            },
            registerComponentStatistics:function(categoryName,actionName,labelName){
                gtag('event',actionName,{
                    'event_category' : categoryName,
                    'event_label'    : labelName
                });
            }
        }
    }
</script>
