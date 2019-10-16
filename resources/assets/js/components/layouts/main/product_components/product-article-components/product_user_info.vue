<style scoped>

    .user-information-wrapper, .article-action-buttons a{

        font-size: 12px;

        font-weight: bold;

        padding: 4px 7px 5px;

        margin: 0;

        margin-top: 3px;
        
        line-height: 1.618;
    }

    .green-text {
        color: #00c569;
    }

    .green-text:hover {
        color: #279b41;
    }

    .red-text {
        color: #e41c38;
    }

    .red-text:hover {
        color: #d81b35;
    }

    .blue-background {
        color: #000546;
    }

    .blue-background:hover {
        color: #000430;
    }

    .blue-button {
    margin: 15px 0;
    display: inline-block;
    background: #150e47;
    color: #fff;
    padding: 5px 0;
    width: 100%;
    border-radius: 3px;
    text-align: center;
    border: none;
    transition: 300ms;
    }

    .blue-button:hover, .blue-button:focus {
        color:#fff;
        background: #1d1060;
    }
    .user-image {
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0;
        margin-left: 10px;
    }

    .user-information-content-image{
        float: right;
    }

    .user-information-wrapper {
        padding: 8px 10px;
        border-bottom: 2px solid #EEEEEE;
    }

    .user-information-wrapper > div, .user-information-content, .user-action-link,.user-information-link{
        float: right;
        display: block;
        overflow: hidden;
    }

    .article-action-buttons{
        float: left !important;
    }

    .user-action-link{

        padding-top: 9px;

        padding-right: 8px;

        font-size: 11px;

    }

    .user-information-contents p {

        max-width: 120px;

        overflow: hidden;

        font-size: 14px;

        font-weight: bold;

        color: #777;

        height: 28px;

        padding-top: 5px;

        white-space: nowrap;

        text-overflow: ellipsis;
    }

    .user-image img, .user-image > div {
        height: 100%;
    }


    @media screen and (max-width: 400px) {
        .user-information-contents p {

            max-width: 100px;
            font-size: 13px;

        }
        .user-action-link{
            padding-right: 3px;
        }
    }


    @media screen and (max-width: 340px) {

        .article-action-buttons{
            float: none !important;

            width: 100%;
        }
    }
</style>

<template>

        <div class="user-information-wrapper row">
              <div class="user-information-contents">
                  <a :href="'/profile/'+ user_name"  class="user-information-link">
                      <div class="user-information-content-image">
                          <div class="user-image" v-if="profile_photo">
                              <img v-bind:src=" '/storage/' + profile_photo">
                          </div>

                          <div class="user-image" v-else>
                              <img :src="defultimg" class="image_defult">
                          </div>
                      </div>

                      <div class="user-information-content">
                          <p v-if="user_info" v-text="user_full_name"></p>
                      </div>
                  </a>

                  <a v-if="!is_my_profile_status" :href="'/profile/'+ user_name" @click="registerComponentStatistics('product','showUserProfile','show profile')" class="user-action-link green-text">
                        مشاهده پروفایل
                  </a>
                  <a v-else href="#"
                     @click.prevent="deleteProduct()"
                     class="user-action-link red-text">
                      حذف محصول
                  </a>
              </div>
                <div class="article-action-buttons">
                    <a v-if="!is_my_profile_status" href="#"  @click.prevent="$parent.openChat($parent.product)" class="green-button">
                        استعلام قیمت
                    </a>

                    <a v-else="!is_my_profile_status" href="#" class="blue-button" data-toggle="modal" :data-target="'#article-modal' + $parent.product.main.id">
                        ویرایش
                    </a>
                </div>
           <!--   <p v-if="user_info" v-text="user_full_name"></p>


              <div v-if="!is_my_profile_status" class="create_buy  ">
                  <a :href=" '/profile/'+ user_name" class="green-button"
                     @click="registerComponentStatistics('product','showUserProfile','show profile')">
                      مشاهده پروفایل
                  </a>
                  <a class="green-button hidden-xs" href="#" @click.prevent="openChat()">
                      <span class="fas fa-comment-alt"></span> استعلام قیمت
                  </a>
              </div>

              <div v-else class="create_buy">
                  <a href="" class="green-button delete-product"
                     @click.prevent="deleteProduct()"> <span class="fa fa-trash"></span> حذف </a>

                  <a class="green-button edit-product hidden-xs" href="#" @click.prevent="$parent.openEditBox($event)">
                      <span class="fa fa-pencil-alt"></span> ویرایش
                  </a>
              </div>-->
          <!--</div>-->
        </div>

</template>

<script>
    import {eventBus} from "../../../../../../js/router/dashboard_router";

    export default {
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
        data() {
            return {
                popUpMsg: '',
                deleteButtonText: '',
                cancelButtonText: ''
            }
        },
        methods: {
            openChat: function () {

                this.registerComponentStatistics('product', 'openChat', 'click on open chatBox');

                var contact = {
                    contact_id: this.user_info.id,
                    first_name: this.user_info.first_name,
                    last_name: this.user_info.last_name,
                    profile_photo: this.profile_photo,
                    user_name: this.user_info.user_name,
                };

                if (this.current_user.user_info) {
                    if (this.current_user.user_info.id !== this.user_info.id) {
                        axios.post('/set_last_chat_contact', contact)
                            .then(function (response) {
                                window.location.href = '/dashboard/messages';
                            })
                            .catch(function (e) {
                                alert('Error');
                            });
                    }
                    else {
                        this.popUpMsg = 'شما نمی توانید به خودتان پیام دهید.';
                        eventBus.$emit('submitSuccess', this.popUpMsg);
                        $('#custom-main-modal').modal('show');
                    }
                }
                else {
                    this.popUpMsg = 'اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                    eventBus.$emit('submitSuccess', this.popUpMsg);
                    $('#auth-popup').modal('show');
                }
            },
            scrollToTheRequestRegisterBox: function (element) {
                var newPosition = $(element).offset();
                $('html, body').stop().animate({scrollTop: newPosition.top - 380}, 1000);
            },
            deleteProduct: function () {

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
            registerComponentExceptions: function (description, fatal = false) {
                gtag('event', 'exception', {
                    'description': description,
                    'fatal': fatal
                });
            },
        },
    }
</script>
