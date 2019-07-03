<template>
    <div class="user-contents col-xs-12  col-sm-3">
        <div class="user-image" v-if="profile_photo">
            <img v-bind:src=" '/storage/' + profile_photo">
        </div>
        <div class="user-image" v-else>
            <img :src="defultimg" class="image_defult">
        </div>
        <p v-if="user_info">{{user_full_name}}</p>

<!--
        <a v-if="!isMyProfileStatus" :href=" '/profile/'+ user_name" class="green_bot"
           @click="registerComponentStatistics('product','showUserProfile','show profile')">مشاهده پروفایل</a>

-->
        <div v-if="!isMyProfileStatus" class="create_buy  hidden-xs">
            <a  :href="'/profile/' + user_name" class="green_bot"
                         @click="registerComponentStatistics('product','showUserProfile','show profile')">
                مشاهده پروفایل
            </a>
            <div  class="create_buy  hidden-xs">
                <a class="green_bot" href="#" @click.prevent="openChat()">
                    <span class="fa fa-comment"></span> ارسال پیام
                </a>
            </div>
        </div>
        <div v-else class="create_buy  hidden-xs">
              <a  href="" class="green_bot delete-product"
           @click.prevent="deleteProduct()"> <span class="fa fa-trash"></span> حذف </a>

        <a class="green_bot edit-product hidden-xs"  href="#" @click.prevent="openEditBox($event)" >
            <span class="fa fa-pencil"></span> ویرایش
        </a>

        </div>
    </div>
</template>
<style scoped>
    .green_bot.delete-product {
        background: #e41c38;
    }

    .green_bot.delete-product:hover {
        background: #d81b35;
    }

    .green_bot.edit-product {
        background: #000546;
    }

    .green_bot.edit-product:hover {
        background: #000430;
    }

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
        padding: 0 20px 20px;
    }

    .user-contents h1 {
        padding: 14px 0;
    }

    .create_buy {
        position: relative;
    }
    .user-contents a.green_bot {
        float: left;
        padding: 5px 25px;
        margin: 15px auto;
        font-size: 14px;
        font-weight: bold;
    }
    @media screen and (max-width: 767px) {

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

        .user-contents a.green_bot {
            float: left;
            width: initial;
            padding: 7px 20px;
            margin: 15px auto;
        }
    }


</style>
<script>
    import {eventBus} from "../../../../../js/router/dashboard_router";

    export default {
        data(){
          return{
              isMyProfile:false
          }
        },
        props: [
            'profile_photo',
            'user_info',
            'user_full_name',
            'user_name',
            'defultimg',
            'current_user',
            'isMyProfileStatus',
            'product_id'
        ],
        methods: {
            openEditBox:function(e){
                this.$parent.openEditBox(e);
            },
            openChat: function () {

                this.registerComponentStatistics('product', 'openChat', 'click on open chatBox');

                var contact = {
                    contact_id: this.user_info.id,
                    first_name: this.user_info.first_name,
                    last_name: this.user_info.last_name,
                    profile_photo: this.profile_photo,
                    user_name: this.user_info.user_name,
                }

                if (this.current_user.user_info) {
                    if (this.current_user.user_info.id != this.user_info.id) {
                        axios.post('/set_last_chat_contact', contact)
                            .then(function (response) {
                                window.location.href = '/dashboard/messages';
                            })
                            .catch(function (e) {
                                alert('Error');
                            });
                    }
                    else {
                        this.popUpMsg = 'شما نمیتوانید به خودتان پیام دهید.';
                        eventBus.$emit('submitSuccess', this.popUpMsg);
                        $('#myModal').modal('show');
                    }
                }
                else {
                    this.popUpMsg = 'اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    $('#myModal2').modal('show');
                }
            },
            scrollToTheRequestRegisterBox: function (element) {
                var newPosition = $(element).offset();
                $('html, body').stop().animate({scrollTop: newPosition.top - 380}, 1000);
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
            deleteProduct:function(){
                var self = this;
                //show modal


                axios.post('/delete_product_by_id',{
                    product_id : self.product_id
                })
                .then(function(response){
                    //show product deleted message
                    //code

                    window.location.reload();
                })
                .catch(function(err){
                    //show modal
                });
            }
        },
        mounted(){

        }
    }
</script>
