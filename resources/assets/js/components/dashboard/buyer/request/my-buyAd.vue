<style scoped>
    #main {
        margin-right: 250px;
        margin-top: 65px;
        background: #eff3f6;
    }

    #main.little-main {
        margin-right: 80px;
    }
    .main-content {
        padding: 90px 15px;
    }
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

    .kind_user, .kind_activity {
        margin: 7px 0;
        border-bottom: 1px solid #eff3f6;
        padding-bottom: 10px;
    }

    .kind_user > div, .kind_activity > div {
        float: right;
        overflow: hidden;
        padding: 10px;
        font-size: 15px;
    }

    .kind_user input, .kind_activity input {
        cursor: pointer;
        width: 23px;
        height: 23px;
        float: right;
        position: absolute;
        top: 2px;
        right: 65px;
        opacity: 0;
    }

    .kind_user input:checked + i, .kind_activity input:checked + i {
        color: #28a745;
        border: none;
        padding: 4px;
    }

    .kind_user i, .kind_activity i {
        background: none;
        width: 23px;
        height: 23px;
        display: block;
        position: absolute;
        top: 4px;
        right: 65px;
        z-index: -1;
        color: #808c9c;
        border-radius: 50%;
        padding: 2px;
        font-size: 14px;
        border: 2px solid;
    }

    .main-content li {
        overflow: hidden;
    }

    .title-list {
        background: #f5f5f5;
    }

    .title-list .numbers {
        float: right;
        display: inline-block;
        padding-top: 10px;
        background: red;
        border-radius: 50px;
        width: 30px;
        height: 30px;
        text-align: center;
        color: #fff;
    }

    .title-list-text, .price, .city {
        float: right;
        margin: 9px 30px;
        font-weight: bold;
    }

    .time-show {
        float: left;
        margin: 8px 30px;
        font-weight: normal;
        font-size: 16px;
        direction: rtl;
    }
    .show-detail {
        background: #28a745;
        color: #fff;
        display: inline-block;
        padding: 10px 30px;
        border-radius: 5px;
        margin: 0;
    }

    .main-content ul {
        margin-top: 40px;
        border-radius: 3px;
        box-shadow: 0 0 10px #e1e1e1;
    }

    .main-content ul:first-of-type {
        margin-top: 0;

    }

    @media screen and (max-width: 992px) {
        .right-header.desktop-header {
            display: none;
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

    @media screen and (max-width: 768px) {
        .image-content-post, .contents-post {
            width: 100%;
            float: none;
            margin: 10px 0;
            padding: 0;
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
<div>
    <section class="main-content col-xs-12" v-if="buyAds.length > 0">
        <ul class="list-unstyled" v-if="buyAds" v-for="buyAd in buyAds">
            <!--start title list -->
            <li class="list-group-item title-list">
                  <span class="numbers">
                      {{buyAd.sell_offers.length}}
                  </span>
                <p class="title-list-text">{{buyAd.subcategory_name}}<span class="seperator"> | </span>{{buyAd.name}} </p>
                <p class="time-show">{{buyAd.register_date}}</p>
            </li>
            <!--end title list -->

            <div v-if="buyAd.sell_offers.length > 0">
                <li  v-for="sellOffer in buyAd.sell_offers" class="list-group-item content-list">
                    <p class="price">
                        <span class="static-price">
                            قیمت:
                        </span> {{sellOffer.price + 'تومان'}}
                    </p>
                    <p class="city">
                        <span class="static-city">
                            تحویل:
                        </span>{{sellOffer.deliver_at}}
                    </p>
                    <router-link :to="'/sell-offer-detail/' + sellOffer.id" class="show-detail green-bot">
                        جزئیات
                    </router-link>
                </li>
            </div>
            <div v-else>
                <li class="list-group-item content-list">
                    <p class="text-center">
                        تاکنون پیشنهاد فروشی برای این درخواست نیامده است
                    </p>
                </li>
            </div>
        </ul>
    </section>
    <section class="main-content col-xs-12" v-if="buyAds.length == 0 && !loading">
        <h4 dir="rtl" class="text-center">تاکنون درخواست خریدی ثبت نکرده اید.</h4>
    </section>
    <section class="main-content col-xs-12 loading_images" v-show="loading">
        <img :src="loading_img" style="width:200px;height:200px">
    </section>

</div>
</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";

    export default {
        props:[
          'loading_img',
            'defimgitem'
        ],
        data:function(){
            return {
                currentUser:{
                    profile:'',
                    user_info: '',
                },
                buyAds : '',
                popUpMsg:'',
                loading:false,
                submiting:false,
                items: [
                    {
                        message: 'درخواست های خرید من ',
                        url: 'myBuyAds'
                    },
                ]
            };
        },
        methods:{
            init:function(){
                this.loading = true;

                var self = this ;

                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));
                axios.post('/get_my_buyAds_with_related_sell_offers')
                    .then(function(response){
                        self.buyAds = response.data.buyAds;

                        self.loading = false;
                    });
            },
        },
        mounted(){
            this.init();
            eventBus.$emit('subHeader', this.items);
        },
    }
</script>
