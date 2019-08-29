<style>
     .wrapper_no_pro {
        text-align: center;
        font-size: 23px;
        padding: 15px 0;
    }

    .content_no_pic {
        font-size: 70px;
        margin: 20px auto;
        color: #bdbdbd;
    }

    .text_no_pic {
        margin: 30px auto;
        color: #bdbdbd;
    }
    
    .list-title, .needs, .list-time {
        float: right;
        text-align: center;
        line-height: 1.618;
        font-weight: bold;
        padding-top: 5px;
    }

    .list-group-item {
        border: 1px solid #ddd;
    }

    .detail-success {
        padding: 8px 0;
        width: 100%;
        background: #00c569;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
    }

    .main-content > ul {
        border-radius: 3px;
        box-shadow: 0 0 10px #e1e1e1;
        overflow: hidden;
    }

    .main-content .list-group-item p {
        text-align: center;
        direction: rtl;
    }

    #main.little-main {
        margin-right: 80px;
    }

    .message-list {
        padding: 19px;
        text-align: center;
        background: #eff3f6;
        line-height: 1.618;

    }

    .message-list .text-red {
        color: #e41c38;
    }

    .title {
        text-align: right;
        padding: 13px 15px;

    }

    .title h1 {

        font-size: 18px;
        font-weight: bold;

    }

    @media screen and (max-width: 992px) {

        .list-title, .needs, .list-time {
            padding: 15px;
        }

    }

    @media screen and (max-width: 767px) {

        .green-button {
            width: 100%;
        }

        .title {
            text-align: center;

        }

        .detail-success {
            max-width: 300px;
            margin: 0 auto;
        }
    }

</style>
<template>
    <div>



        <section class="main-content col-xs-12" v-if="buyAds.length != 0">
            <div  class="title col-xs-12">
                <div  class="row">
                    <div  class="col-xs-12 col-sm-4 pull-right">
                        <h1>
                            درخواست ها
                        </h1>
                    </div> 
                </div>
            </div>
            <div class="col-xs-12">

                <ul class="list-unstyled">
                    <li v-for="buyAd in buyAds" class="list-group-item  col-xs-12">
                        <p class="list-title col-sm-3 col-xs-12">
                            <span v-text="buyAd.category_name"></span>

                            <span> | </span>

                            <span v-text="buyAd.subcategory_name"></span>

                            <span v-if="buyAd.name" v-text="' | ' + buyAd.name"></span>

                        </p>

                        <p class="needs col-sm-4 col-xs-12">
                            <span class="static-content">
                                میزان نیازمندی :
                            </span>

                            <span v-text="buyAd.requirement_amount"></span>

                            <span class="static-content">
                                کیلوگرم
                            </span>

                        </p>

                        <p class="list-time col-sm-2 col-xs-12" v-text="buyAd.register_date"></p>

                        <a class="col-sm-3 col-xs-12" href="" @click.prevent=openChat(buyAd)>
                            <p class="detail-success">
                                <span class="fa fa-comment"></span> پیام به خریدار
                            </p>
                        </a>
                    </li>

                    <li class="message-list col-xs-12">
                        <p>
                            سقف تعداد درخواست های خریدی که به شما نمایش داده میشود
                            <span class="text-red"> 5 </span>
                            است
                        </p>

                        <a class="green-button" href="/pricing">تعرفه ها</a>
                    </li>
                </ul>

            </div>

        </section>

        <section class="main-content col-xs-12 loading_images"
                 v-else-if="buyAds.length === 0 && !load"
        >
                    <div class="wrapper_no_pro">
                        <div class="content_no_pic">
                            <i class="fa fa-list-alt"></i>
                        </div>

                        <div class="text_no_pic">
                            <p>درخواست خرید مرتبط با شما وجود ندارد</p>
                        </div>
                    </div>

        </section>

        <section class="main-content col-xs-12 loading_images" v-show="load">
            <img :src="loading_img" style="width:200px;height:200px">
        </section>
    </div>
</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";

    export default {
        props: [
            "loading_img",
            "storage",
            "defultimg"
        ],
        data: function () {
            return {
                currentUser: {
                    profile: '',
                    user_info: '',
                },
                buyAds: '',
                popUpMsg: '',
                load: false,
                textActive: false,
                items: [
                    {
                        message: 'درخواست های جدید',
                        url: 'buyAdRequests'
                    }
                ]
            }
        }
        ,
        methods: {
            init: function () {
                this.load = true;
                var self = this;

                axios.post('/get_related_buyAds_list_to_the_seller')
                    .then(function (response) {
                        self.buyAds = response.data.buyAds;
                        self.load = false;
                    });
            },
            openChat: function (buyAd) {
                this.registerComponentStatistics('buyAdReply', 'openChat', 'click on open chatBox');

                axios.post('/get_user_last_confirmed_profile_photo', {
                    'user_id': buyAd.myuser_id
                }).then(function (response) {
                    var profile_photo = response.data.profile_photo;

                    var contact = {
                        contact_id: buyAd.myuser_id,
                        first_name: buyAd.first_name,
                        last_name: buyAd.last_name,
                        profile_photo: profile_photo,
                        user_name: buyAd.user_name,
                    };

                    axios.post('/set_last_chat_contact', contact)
                        .then(function (response) {
                            window.location.href = '/dashboard/messages';
                        })
                        .catch(function (e) {
                            alert('Error');
                        });
                })
                    .catch(function (err) {
                        //
                    });
            },
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag('event', actionName, {
                    'event_category': categoryName,
                    'event_label': labelName
                });
            },
        },
        mounted() {
            this.init();
            eventBus.$emit('subHeader', this.items);
        },
        created() {
            gtag('config', 'UA-129398000-1', {'page_path': '/buyAd-requests'});
        }
    }
</script>
