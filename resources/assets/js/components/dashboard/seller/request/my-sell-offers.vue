<style scoped >
    /*start main content style */
    .main-content li {
        position: relative;
        overflow: hidden;
    }
    .main-content .list-group-item > div {
        float: right;
    }
    .main-content .list-group-item p {
        text-align: center;
    }
    .main-content {
        padding: 90px 35px;
    }
    .main-content ul {
        border-radius: 3px;
        box-shadow: 0 0 10px #e1e1e1;
    }
    .list-title, .needs {
        float: right;
        text-align: center;
        line-height: 1.618;
        font-weight: bold;
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
    .detail-stand {
        padding: 10px 0;
        width: 100%;
        background: #7c7c7c;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
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
    .main-content .list-group-item .status {
        padding: 0;
    }


    @media screen and (max-width: 768px) {
        .list-group-item > div {
            padding: 7px 0;
        }
    }
</style>

<template>
    <div>
        <section class="main-content col-xs-12" v-if="sellOffers.length > 0">
            <ul class="list-unstyled">
                <li class="list-group-item" v-for="sellOffer in sellOffers">
                    <div class="col-sm-3 col-xs-12">
                        <p class="list-title">
                            {{sellOffer.category_name}}
                            <span> | </span>
                            {{sellOffer.subcategory_name}}
                            <span> | </span>
                            {{sellOffer.name}}
                        </p>
                    </div>
                    <div class="col-sm-2 col-xs-3">

                        <p class="needs">
                    <span class="static-content">
                        تحویل :
                    </span>
                            {{sellOffer.deliver_at}}
                        </p>
                    </div>
                    <div class="col-sm-2 col-xs-3">

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
                    <div class="col-sm-3 col-xs-6">
                        <p class="list-time">
                            {{sellOffer.valid_from + ' - ' + sellOffer.valid_to}}
                        </p>
                    </div>
                    <div class="col-sm-2 status col-xs-12">
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
       <section class="main-content col-xs-12" v-if="sellOffers.length == 0 && !loading">
            <h4 dir="rtl" class="text-center">پیشنهاد خریدی ثبت نکرده اید.</h4>
        </section>
         <div class="loading_images  col-xs-12" v-show="loading">
              <img :src="loader" style="width:200px;height:200px">
          </div>-->
    </div>

</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";
    export default {
        props: [
            'loader'
        ],
        data: function () {
            return {
                currentUser: {
                    profile: '',
                    user_info: '',
                },
                sellOffers: '',
                popUpMsg: '',
                loading: false,
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
                this.loading = true;

                var self = this;

                axios.post('/get_my_sell_offer_list')
                    .then(function (response) {
                        self.sellOffers = response.data.sell_offers;
                        self.loading = false;
                    });
            },
        },
        mounted() {
            this.init();
            eventBus.$emit('subHeader', this.items);
            $(".owl-carousel").owlCarousel({
                loop:false,
                margin:10,
                nav:true
            });
            $(this.$el).parent().parent().parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                }
            });

        },
    }
</script>
