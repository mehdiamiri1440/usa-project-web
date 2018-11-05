
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
        padding: 40px 100px 10px;
    }

    .header-lable {
        display: block;
        margin: 13px;
        padding: 0;
    }
    .content-lable{
        font-weight:400 ;
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
        padding: 15px 30px;
        margin-top: 50px;
    }
    .user-info{
        border-bottom: 2px solid #eff3f6;
        padding: 0 0 10px;
    }
    .user_image {
        overflow: hidden;
        width: 85px;
        height: 85px;
        border-radius: 50%;
        padding: 0;
        float: right;
        text-align: center;
    }
    .user_image img{
        height: 100%;
    }
    .user_name{
        direction: rtl;
        padding: 32px 0;
        text-align: right;
    }
    .info_profile{
        float: right;
    }
    .profile_link{
        direction: ltr;
        padding-top: 7px;
        padding-left: 0;
    }
    .profile_link .green-bot{
        border-radius: 5px;
    }
    .info-contents{
        padding: 30px 0;
    }
    .image-article-content{
        padding: 0;
        float: right;
    }
    .main-article-content{
        padding: 0;
        direction: rtl;
    }
    .owl-carousel{
        direction: ltr;
        padding-right: 15px;
    }
    .main-image{
        margin-bottom: 7px;
        padding-left: 15px;
    }
    .main-image img{
        border-radius: 3px;
    }
    .actions{
        direction: rtl;
        margin-top: 120px;
    }
    .actions .black-bot{
        float: left;
    }

    @media screen and (max-width: 992px) {
        .owl-carousel {
            direction: ltr;
            padding:0;
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
        .actions{
            margin-top: 20px;
        }
        .actions .black-bot{
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

        .clouse_menu {
            display: none;
        }

        .clouse_menu_mob {
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

    @media screen and (max-width: 768px) {
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
            width: 120px;
            height: 120px;
            border-radius: 50%;
            float: none;
            margin: 0 auto;
        }
        .profile_link{
            padding: 10px;
            text-align: center;
        }
        .main-content {
            padding: 60px 15px;
        }

        .name-header-profile {
            display: none;
        }

        .profile-menu-header {
            padding: 7px;
            padding-left: 36px;
        }

    }

    @media screen and (max-width: 831px) {
        .user_name{
            text-align: center;
        }
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
                        <div class="user_image col-md-2">
                            <div v-if="sellOfferDetail.profile_photo">
                                <img :src="str + '/' +  sellOfferDetail.profile_photo" id="blah"
                                     alt="تصویر پروفایل">
                            </div>
                            <div v-else>
                                <img :src="defultimg" align="تصویر پروفایل">
                            </div>
                        </div>
                        <div class="user_name col-sm-8">
                            <p>{{sellOfferDetail.sell_offer_user_info.first_name + ' ' +
                                sellOfferDetail.sell_offer_user_info.last_name}}
                                <span> - </span>
                                {{sellOfferDetail.sell_offer_user_info.province + ' | ' + sellOfferDetail.sell_offer_user_info.city }}
                            </p>
                        </div>

                    </div>
                    <div class="profile_link col-xs-12 col-sm-5">
                              <a :href="'/profile/' + sellOfferDetail.sell_offer_user_info.user_name" class="green-bot">
                                  مشاهده پروفایل تامین کننده
                              </a>
                    </div>
                </div>
                     <div class="info-contents col-xs-12">
                          <div class="image-article-content  col-xs-12 col-md-5">
                              <div class="main-image col-xs-12">
                                  <a  :href="str + '/' + sellOfferDetail.profile_photo"><img :src="str + '/' + sellOfferDetail.profile_photo" alt=""></a>
                              </div>
                              <div class="owl-carousel col-xs-12">
                                  <a for="photo in sellOfferDetail.sell_offer.photos" href=" str+ photo"><img src=" str + photo" alt=""></a>
                              </div>
                          </div>
                          <div class="main-article-content col-xs-12 col-md-7">
                              <table class="table table-striped">
                                  <tr>
                                      <td>قیمت واحد<span class="">(هر کیلو به تومان)</span> :</td>
                                      <td> {{sellOfferDetail.sell_offer.price}} تومان</td>
                                  </tr>
                                  <tr>
                                      <td>  محل تحویل کالا:</td>
                                      <td> {{sellOfferDetail.sell_offer.deliver_at}}</td>
                                  </tr>
                                  <tr>
                                      <td>  زمان موجودی:</td>
                                      <td>{{sellOfferDetail.sell_offer.date_from + ' - ' + sellOfferDetail.sell_offer.date_to}}</td>
                                  </tr>
                              </table>
                              <p>توضیحات: <span>{{sellOfferDetail.sell_offer.description}}</span></p>
                              <div class="col-xs-12 actions">
                                  <div v-show='sellOfferDetail.sell_offer.is_pending'>
                                      <button type="button" class="green-bot" @click=initiateBuy(sellOfferDetail.sell_offer.id)>آغاز فرآیند خرید</button>
                                      <button type="button" class="green-bot" @click=rejectBuy(sellOfferDetail.sell_offer.id)>رد این پیشنهاد</button>
                                  </div>
                                  <p class='text-success' v-show='sellOfferDetail.sell_offer.is_accepted'>شما قبلا این پیشنهاد را پذیرفته اید.منتظر ارتباط ما باشید.</p>
                                  <p class='text-danger' v-show='sellOfferDetail.sell_offer.is_pending == 0 && sellOfferDetail.sell_offer.is_accepted == 0'>شما قبلا این پیشنهاد را رد کرده اید.درصورت تغییر نظر با ما تماس بگیرید</p>

                                  <a href="" class="black-bot">بازگشت به صفحه قبل</a>
                              </div>
                          </div>


                      </div>
            </div>
        </section>
    </div>

</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";

    export default {
        props: [
            'str',
            'defultimg'
        ],
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
                sellOfferDetail:{
                    sell_offer_user_info:'',
//                    sell_offer:'',
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
                
                var self = this;
                
                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data)
                );
                
                axios.post('/dashboard/sell-offer-detail', {
                    sell_offer_id: this.$route.params.id,
                })
                .then(function (response) {
                    self.sellOfferDetail = response.data;
                
                    self.loading = false ;
                });
            },
        },
        mounted() {
            this.init();
            eventBus.$emit('subHeader', this.items);
        },
    }
</script>
