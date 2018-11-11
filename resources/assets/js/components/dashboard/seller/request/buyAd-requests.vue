
<style>
    .main-content {
        padding: 90px 35px;
    }
    .list-title, .needs,.list-time {
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
        background: #28a745;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
    }
    .main-content > ul {
        border-radius: 3px;
        box-shadow: 0 0 10px #e1e1e1 ;
        overflow: hidden;
    }
    .main-content .list-group-item p {
        text-align: center;
        direction: rtl;
    }
    #main.little-main {
        margin-right: 80px;
    }
    @media screen and (max-width: 992px) {
        .list-title, .needs,.list-time {
           padding: 15px;
        }
    }


</style>
<template>
    <div>
        <section class="main-content col-xs-12" v-if="buyAds.length != 0">
            <ul class="list-unstyled" v-for="buyAd in buyAds">
                <li class="list-group-item  col-xs-12">
                    <p class="list-title col-sm-3 col-xs-12">
                        {{buyAd.category_name}}
                        <span> | </span>
                        {{buyAd.subcategory_name}}
                        <span> | </span>
                        {{buyAd.name}}
                    </p>
                    <p class="needs col-sm-4 col-xs-12">
                      <span class="static-content">
                        میزان نیازمندی :
                    </span>
                        {{buyAd.requirement_amount}}

                        <span class="static-content">
کیلوگرم
                    </span>
                    </p>

                    <p class="list-time col-sm-2 col-xs-12">
                        {{buyAd.register_date}}
                    </p>
                    <router-link class="col-sm-3 col-xs-12" :to="'/buyAd-request-detail/' +  buyAd.id">
                            <p class="detail-success">
                                مشاهده ی جزییات
                            </p>
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="main-content col-xs-12 loading_images" v-else-if="buyAds.length == 0 && !load">
            <h4 dir="rtl" class="text-center">درخواستی برای شما وجود ندارد.</h4>
        </section>
        <section class="main-content col-xs-12 loading_images" v-show="load">

            <img :src="loading" style="width:200px;height:200px">
        </section>
    </div>
</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";
    export default {
        props: [
            "loading",
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
                items: [
                {
                    message: 'پیشنهادات من',
                    url: 'mySellOffers'
                },
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
            }
            ,

        }
        ,
        mounted() {
            this.init();
            eventBus.$emit('subHeader', this.items);
        }
        ,
    }
</script>
