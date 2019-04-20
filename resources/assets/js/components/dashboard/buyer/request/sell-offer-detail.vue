<style scoped>

    /*start main content style */
    .image-content-post {
        width: 30%;
        float: right;
        position: relative;
    }

    .image-content-post img {
        border-radius: 3px;
        transition: 200ms;
        filter: grayscale(30%);
    }

    .image-content-post a:hover img {
        filter: grayscale(0);
        transition: 200ms;
    }

    .image-content-post i {
        display: none;
        position: absolute;
        top: 46%;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 35px;
        color: #fff;
        z-index: 1;

    }

    .image-content-post a:hover i {
        display: block;
    }

    .content-item {
        overflow: hidden;
        text-align: right;
        direction: rtl;
    }

    .main-content {
        padding: 15px;
    }

    .header-lable {
        display: block;
        margin: 13px;
        padding: 0;
    }

    .content-lable {
        font-weight: 400;
    }

    /*end main content style */
    /*custom cods*/
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
        width: 100%;
    }

    .black-bot {
        margin: 15px 0;
        display: inline-block;
        background: #313a43;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }


    .black-bot:hover {

        background: #283039;
        color: #fff;
        transition: 300ms;
    }

    .green-bot:hover {
        color: #fff;
        background: #00d614;
        transition: 300ms;

    }


    .botton-inco {
        margin: 15px 7px;
        display: inline-block;
        color: #313a43;
        padding: 8px 35px;
        border-radius: 3px;
        text-align: center;
    }

    .botton-inco:hover {
        color: #fff;
    }

    .font-big {
        font-size: 23px;
        position: relative;
        top: 3px;
    }

    .little_header {
        width: 80px;
    }

    .little-main-header {
        right: 80px;
    }

    .background_mob_sec {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: -1;
        display: none;
    }

    .contents {
        border-radius: 3px;
        box-shadow: 0 0 10px #e1e1e1;
        padding: 15px;
        margin-top: 50px;
    }

    .user-info {
        border-bottom: 2px solid #eff3f6;
        padding: 0 0 10px;
    }

    .user_image {
        overflow: hidden;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        padding: 0;
        float: right;
        text-align: center;
    }

    .user_image > .user_image img {
        height: 100%;
    }

    .user_name {
        direction: rtl;

        padding: 28px 10px 0;
        width: calc(100% - 70px);
        text-align: right;

        float: right;
    }

    .info_profile {
        float: right;
    }

    .profile_link {
        direction: ltr;
        padding-top: 7px;
        padding-left: 0;
    }

    .profile_link .green-bot {
        font-size: 11px;
        float: left;
        padding: 10px 15px;
        width: calc(50% - 10px);
        margin-right: 10px;
    }
   .profile_link .black-bot {
        font-size: 11px;
        float: left;
        padding: 10px 15px;
       width: calc(50% - 10px);
       margin-right: 10px;
    }
    .info-contents {
        padding: 30px 0;
    }

    .image-article-content {
        padding: 0;
        float: right;
        direction: rtl;
    }

    .main-article-content > .owl-carousel {
        height: 100px;
        overflow: hidden;

    }

    .owl-carousel {
        direction: ltr;
        padding-right: 15px;
    }

    .main-image {
        margin-bottom: 7px;
        padding-left: 15px;
        height: 300px;
        overflow: hidden;
    }

    .main-image img {
        border-radius: 3px;
    }

    .actions {
        direction: rtl;
        margin-top: 120px;
    }

    .actions .black-bot {
        float: left;
    }

    .table {
        direction: rtl;
    }

    .description-text {
        text-align: right;
    }

    @media screen and (max-width: 992px) {
        .owl-carousel {
            direction: ltr;
            padding: 0;
        }

        .image-article-conten {
            padding: 0;
            float: right;
            margin: 0 auto 30px;
        }

        .main-image {
            margin-bottom: 7px;
            padding: 0;
        }

        .right-header.desktop-header {
            display: none;
        }

        .actions {
            margin-top: 20px;
        }

        .actions .black-bot {
            float: left;
        }

        .right-header.mobile-header {
            display: block;
            right: -300px;
        }

        .main-header, .little-main-header {
            right: 0 !important;
        }

        #main, #main.little-main {
            margin-right: 0 !important;
        }

        .post-contents-table {
            width: 100%;
        }

        .copy-right {
            display: none;
        }

        .close_menu {
            display: none;
        }

        .close_menu_mob {
            display: block;
        }

        .show-header button {
            display: block;
        }

        .kind_user > div, .kind_activity > div {
            float: none;

        }

        .img-profile .submit {
            position: relative;
            width: 100%;
            margin: 25px auto;

        }

        .img-profile .submit label {
            width: 40%;
            padding: 12px 0;
        }

        .img-profile {
            float: none;
        }
    }

    @media screen and (max-width: 767px) {
   /*     .user_name {
            direction: rtl;

            padding: 32px 10px;

            text-align: center;
            width: 100%;
            float: none;
        }*/

        .image-content-post, .contents-post {
            width: 100%;
            float: none;
            margin: 10px 0;
            padding: 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            margin: 20px auto;
        }

        .user_image {
            overflow: hidden;
            width: 60px;
            height: 60px;
        }

 /*       .user_image > div, .user_image img {
            height: 100%
        }
*/
        .profile_link {
            padding: 10px;
            text-align: center;
        }

        .main-content {
            padding: 15px 0;
        }

        .name-header-profile {
            display: none;
        }

        .profile-menu-header {
            padding: 7px;
            padding-left: 36px;
        }


        /*.profile_link .green-bot {
            width: 100%;
            margin:7px 0;
        }
        .profile_link .black-bot {
            width: 100%;
            margin:7px 0;
        }
*/
    }


    @media screen and (max-width: 555px) {
        .content-header {
            display: none;
        }

    }

    @media screen and (max-width: 345px) {
        .sub-header a {
            font-size: 10px;

        }

        .sub-header {

            bottom: -44px;

        }
    }
</style>
<template>
    <div id="app">
        <section class="main-content col-xs-12">
            <div class="contents col-xs-12">
                <div class="user-info col-xs-12">
                    <div class="info_profile col-xs-12 col-sm-7">
                        <div class="user_image">
                            <div v-if="sellOfferDetail.profile_photo">
                                <img :src="str + '/' + sellOfferDetail.profile_photo" id="blah"
                                     alt="تصویر پروفایل">
                            </div>
                            <div v-else>
                                <img :src="defultimg" align="تصویر پروفایل">
                            </div>
                        </div>
                        <div class="user_name ">
                            <p>{{sellOfferDetail.sell_offer_user_info.first_name + ' ' +
                                sellOfferDetail.sell_offer_user_info.last_name}}<span> - </span>{{sellOfferDetail.sell_offer_user_info.province
                                + ' | ' + sellOfferDetail.sell_offer_user_info.city }}</p>
                        </div>

                    </div>
                    <div class="profile_link col-xs-12 col-sm-5">
                        <a href="/dashboard/#/my-buyAds" class="black-bot">بازگشت به صفحه قبل</a>
                        <a :href="'/master/#/profile/' + sellOfferDetail.sell_offer_user_info.user_name"
                           class="green-bot">
                            پروفایل تامین کننده
                        </a>
                    </div>
                </div>
                <div class="info-contents col-xs-12">
                    <div class="image-article-content  col-xs-12 col-md-5">
                        <div class="main-image col-xs-12">
                            <a :href="str + '/' + sellOfferDetail.sell_offer.photos[0]"><img
                                    :src="str + '/' + sellOfferDetail.sell_offer.photos[0]" alt=""></a>
                        </div>
                        <div class="owl-carousel col-xs-12">
                            <image-wrapper
                                    v-for="photo in sellOfferDetail.sell_offer.photos"
                                    :key="photo.id"
                                    :img="str + '/' + photo">
                            </image-wrapper>
                        </div>
                    </div>
                    <div class="main-article-content col-xs-12 col-md-7">
                        <table class="table table-striped">
                            <tr>
                                <td>قیمت واحد<span class="">(هر کیلو به تومان)</span> :</td>
                                <td> {{sellOfferDetail.sell_offer.price}} تومان</td>
                            </tr>
                            <tr>
                                <td> محل تحویل کالا:</td>
                                <td> {{sellOfferDetail.sell_offer.deliver_at}}</td>
                            </tr>

                            <tr>
                                <td> زمان موجودی:</td>
                                <td>{{sellOfferDetail.sell_offer.date_from + ' - ' +
                                    sellOfferDetail.sell_offer.date_to}}
                                </td>
                            </tr>
                        </table>
                        <p class="description-text">توضیحات: <span>{{sellOfferDetail.sell_offer.description}}</span></p>
                        <div class="col-xs-12 actions">
                            <div v-show='sellOfferDetail.sell_offer.is_pending'>
                                <!--    <div class="col-xs-12 col-sm-6">
                                    <button type="button" class="green-bot " @click=initiateBuy(sellOfferDetail.sell_offer.id)>آغاز فرآیند خرید</button>
                                    </div>
                                    <div class="col-xs-12 col-sm-6">
                                        <button type="button" class="green-bot" @click=rejectBuy(sellOfferDetail.sell_offer.id)>رد این پیشنهاد</button>
                                 </div>-->
                                <a href="#" @click.prevent="openChat()" class="green-bot"><i class="fa fa-comment"></i> ارسال
                                    پیام </a>
                            </div>
                            <p class='text-success' v-show='sellOfferDetail.sell_offer.is_accepted'>شما قبلا این پیشنهاد
                                را پذیرفته اید.منتظر ارتباط ما باشید.</p>
                            <p class='text-danger'
                               v-show='sellOfferDetail.sell_offer.is_pending == 0 && sellOfferDetail.sell_offer.is_accepted == 0 '>
                                شما قبلا این پیشنهاد را رد کرده اید.درصورت تغییر نظر با ما تماس بگیرید</p>


                        </div>
                    </div>


                </div>
            </div>
        </section>
    </div>

</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";


    var OwlCarousel = {
        data: function () {
            return {
                imgSrcs: '',
            };
        },
        props: ['img'],
        template: '<div class="image-wrapper">' +
            '<a  :href="img">' +
            '<img :src="img">' +
            '</a>' +
            '</div>',
        mounted: function () {
            $(".owl-carousel").owlCarousel({
                loop: false,
                margin: 10,
                nav: false
            });

            $(this.$el).parent().parent().parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                }
            });

        }
    };

    export default {
        props: [
            'str',
            'defultimg'
        ],
        components: {
            'image-wrapper': OwlCarousel,
        },
        data: function () {
            return {
                currentUser: {
                    profile: {
                        is_company: '',
                        company_name: '',
                        company_register_code: '',
                        address: '',
                        public_phone: '',
                        profile_photo: this.storage + '',
                        postal_code: '',
                        shaba_code: '',
                    },
                    user_info: '',
                },
                sellOfferDetail: {
                    sell_offer: {
                        photos: ''
                    },
                    sell_offer_user_info: '',
                    profile_photo: '',
                },
                popUpMsg: '',
                loading: false,
                submiting: false,
                items: [
                    {
                        message: 'جزئیات درخواست ',
                        url: 'myBuyAds'
                    },
                ]
            };
        },
        methods: {
            init: function () {
                this.loading = true;
                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data)
                    );
                var self = this;
                axios.post('/dashboard/sell-offer-detail', {
                    'sell_offer_id': this.$route.params.id,
                })
                    .then(function (response) {
                        self.sellOfferDetail = response.data;
                    });
            },
            initiateBuy(id) {
                var self = this;

                axios.post('/accept_sell_offer_by_id', {
                    'sell_offer_id': id,
                })
                    .then(function (response) {
                        if (response.data.status == true) {
                            self.popUpMsg = 'جهت تسهیل در ادامه ی فرآیند خرید شما کارشناسان اینکوباک برای هماهنگی های اولیه ی معامله با شما تماس خواهند گرفت.';

                            eventBus.$emit('submitSuccess', self.popUpMsg);

                            $('#myModal').modal('show');
                            $('#myModal').on('shown.bs.modal', function (e) {
                                $('#close-btn').on('click', function (e) {
                                    $('#myModal').modal('hide');
                                    window.location.href = '/dashboard/#/my-buyAds';
                                });
                            });
                        }
                    })
                    .catch(function (err) {
                        self.popUpMsg = 'خطایی رخ داده است.لطفا اتصال به اینترنت خود را بررسی کنید سپس دوباره تلاش کنید.';

                        $('#myModal').modal('show');
                    });
            },
            rejectBuy: function (id) {
                var self = this;

                axios.post('/reject_sell_offer_by_id', {
                    'sell_offer_id': id,
                })
                    .then(function (response) {
                        if (response.data.status == true) {
                            self.popUpMsg = 'شما این پیشنهاد را رد کرده اید.در صورت تغییر تصمیمتان با ما تماس بگیرید.';

                            eventBus.$emit('submitSuccess', self.popUpMsg);

                            $('#myModal').modal('show');
                            $('#myModal').on('shown.bs.modal', function (e) {
                                $('#close-btn').on('click', function (e) {
                                    $('#myModal').modal('hide');
                                    window.location.href = '/dashboard/#/my-buyAds';
                                });
                            });
                        }
                    })
                    .catch(function (err) {
                        self.popUpMsg = 'خطایی رخ داده است.لطفا اتصال به اینترنت خود را بررسی کنید سپس دوباره تلاش کنید.';

                        eventBus.$emit('submitSuccess', self.popUpMsg);

                        $('#myModal').modal('show');
                    });
            },
            openChat:function(){
                var contact = {
                    contact_id:this.sellOfferDetail.sell_offer_user_info.id,
                    first_name:this.sellOfferDetail.sell_offer_user_info.first_name,
                    last_name:this.sellOfferDetail.sell_offer_user_info.last_name,
                    profile_photo:this.sellOfferDetail.profile_photo,
                }


                axios.post('/set_last_chat_contact',contact)
                    .then(function(response){
                        window.location.href = '/dashboard/#/messages';
                    })
                    .catch(function(e){
                        alert('Error');
                    });
            },
        },
        mounted() {
            this.init();
            eventBus.$emit('subHeader', this.items);
            $('.main-image').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                }
            });
        },
        created(){
            gtag('config','UA-129398000-1',{'page_path': '/sell-offer-detail'});
        }
    }
</script>
