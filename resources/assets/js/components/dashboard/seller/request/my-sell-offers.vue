<style scoped >
    /*start main content style */
    .main-content .list-group-item > div {
        float: right;
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


    .list-title, .needs {
        float: right;
        margin: 10px 30px;
        font-weight: bold;
    }

    .main-content li {
        position: relative;
        overflow: hidden;
    }

    .list-time, .detail-success, .detail-error, .detail-stand {
        float: left;
    }

    .detail-success {
        padding: 10px 30px;
        width: 100%;
        background: #28a745;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
    }

    .detail-stand {
        padding: 10px 30px;
        width: 100%;
        background: #7c7c7c;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
    }

    .detail-error {
        padding: 10px 30px;
        width: 100%;
        background: #e41c38;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
    }
    .main-content .list-group-item .status {
        padding: 0;
    }
    .main-content {
        padding: 90px 35px;
    }

    .list-time {
        margin: 11px 15px;
        text-align: center;
        width:100%;
    }

    @media screen and (max-width: 992px) {
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

    }

    @media screen and (max-width: 768px) {

        .main-content {
            padding: 60px 15px;
        }

    }


    @media screen and (max-width: 345px) {
        .sub-header a {
            font-size: 10px;

        }

    }
</style>

<template>
    <div>
        <section class="main-content col-xs-12" v-if="sellOffers.length > 0">
            <ul class="list-unstyled">
                <li class="list-group-item" v-for="sellOffer in sellOffers">
                    <div class="col-sm-3">
                        <p class="list-title">
                            {{sellOffer.category_name}}
                            <span> | </span>
                            {{sellOffer.subcategory_name}}
                            <span> | </span>
                            {{sellOffer.name}}
                        </p>
                    </div>
                    <div class="col-sm-2">

                        <p class="needs">
                    <span class="static-content">
                        تحویل :
                    </span>
                            {{sellOffer.deliver_at}}
                        </p>
                    </div>
                    <div class="col-sm-2">

                        <p class="needs">
                    <span class="static-content">
                        قیمت :
                    </span>
                            {{sellOffer.price}}
                            <span class="static-content">
تومان
                    </span>
                        </p>
                    </div>
                    <div class="col-sm-3">
                        <p class="list-time">
                            {{sellOffer.valid_from + ' - ' + sellOffer.valid_to}}
                        </p>
                    </div>
                    <div class="col-sm-2 status">
                        <p v-if="sellOffer.status == 'در حال بررسی'" class="detail-stand">
                            {{sellOffer.status}}
                        </p>
                        <p v-if="sellOffer.status == 'تایید شده'" class="detail-success">
                            {{sellOffer.status}}
                        </p>
                        <p v-if="sellOffer.status == 'رد شده'" class="detail-error">
                            {{sellOffer.status}}
                        </p>
                    </div>
                </li>
            </ul>
        </section>
        <section class="main-content col-xs-12" v-if="sellOffers.length == 0 && !load">
            <h4 dir="rtl" class="text-center">پیشنهاد خریدی ثبت نکرده اید.</h4>
        </section>
        <div class="loading_images  col-xs-12" v-show="load">
            <img :src="loading" style="width:200px;height:200px">
        </div>
    </div>

</template>

<script>
    import {eventBus} from "../../../../app";
    export default {
        props: [
            'loading'
        ],
        data: function () {
            return {
                currentUser: {
                    profile: '',
                    user_info: '',
                },
                sellOffers: '',
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
        },
        methods: {
            init: function () {
                this.load = true;

                var self = this;

                axios.post('/get_my_sell_offer_list')
                    .then(function (response) {
                        self.sellOffers = response.data.sell_offers;
                        self.load = false;
                    });
            },
        },
        mounted() {
            this.init();
            eventBus.$emit('subHeader', this.items);
        },
    }
</script>