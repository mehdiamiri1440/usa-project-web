<template>
    <div>

        <div class="user-contents col-xs-12  col-sm-3">
            <div class="user-image" v-if="profile_photo">
                <img v-bind:src=" '/storage/' + profile_photo">
            </div>
            <div class="user-image" v-else>
                <img :src="defultimg" class="image_defult">
            </div>
            <p v-if="user_info">{{user_full_name}}</p>


            <div class="create_buy hidden-xs ">
                <a href="#" @click.prevent="$parent.copyProductLinkToClipBoard" class="btn btn-copy"><i aria-hidden="true" class="fa fa-clipboard"></i> کپی آدرس
                </a>
            </div>
            <div v-if="!is_my_profile_status" class="create_buy  ">
                <a :href=" '/profile/'+ user_name" class="green_bot"
                   @click="registerComponentStatistics('product','showUserProfile','show profile')">مشاهده پروفایل</a>
                <a class="green_bot hidden-xs" href="#" @click.prevent="openChat()">
                    <span class="fa fa-comment"></span> ارسال پیام
                </a>
            </div>

            <div v-else class="create_buy">
                <a href="" class="green_bot delete-product"
                   @click.prevent="deleteProduct()"> <span class="fa fa-trash"></span> حذف </a>

                <a class="green_bot edit-product hidden-xs" href="#" @click.prevent="$parent.openEditBox($event)">
                    <span class="fa fa-pencil"></span> ویرایش
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .btn-copy {
        background: #eff2f5;
        color: #333333;
        padding:5px;
        width:100%;
        border: 1px solid;
        margin: 5px auto;
    }
    .btn-copy:hover {
        background: #e8ebee;
    }

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
        padding: 0 20px;
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
        margin: 5px auto;
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
        data() {
            return {
                popUpMsg: '',
                deleteButtonText: '',
                cancelButtonText: ''
            }
        },
        props: [
            'profile_photo',
            'user_info',
            'user_full_name',
            'user_name',
            'defultimg',
            'current_user',
            'product_id',
            'is_my_profile_status'
        ],
        methods: {
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
            deleteProduct: function (){
                var self = this;
                //show modal
                this.popUpMsg = 'آیا محصول حذف شود؟';
                this.deleteButtonText = 'حذف';
                this.cancelButtonText = 'انصراف';


                eventBus.$emit('submitSuccess', this.popUpMsg);
                eventBus.$emit('deleteButtonText', this.deleteButtonText);
                eventBus.$emit('cancelButtonText', this.cancelButtonText);

                eventBus.$emit('productId', this.product_id);
                $('#deleteModal').modal('show');
                
                this.registerComponentStatistics('product', 'delete-product', 'click on delete product-btn');

            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
            registerComponentExceptions:function(description,fatal = false){
                gtag('event','exception',{
                    'description': description,
                    'fatal': fatal
                });
            },
        },
    }
</script>
