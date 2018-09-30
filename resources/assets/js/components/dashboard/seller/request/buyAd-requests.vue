<template>
    <div>
        <section class="main-content col-xs-12" v-if="buyAds.length != 0">
            <ul class="list-unstyled" v-for="buyAd in buyAds">
                <li class="list-group-item">
                    <p class="list-title col-sm-3">
                        {{buyAd.category_name}}
                        <span> | </span>
                        {{buyAd.subcategory_name}}
                        <span> | </span>
                        {{buyAd.name}}
                    </p>
                    <p class="needs col-sm-4">
                    <span class="static-content">
                        میزان نیازمندی :
                    </span>
                        {{buyAd.requirement_amount}}

                        <span class="static-content">
کیلوگرم
                    </span>
                    </p>

                    <p class="list-time col-sm-2">
                        {{buyAd.register_date}}
                    </p>
                    <a class="col-sm-3" :href="byadd + '/' +  buyAd.id ">
                        <!--<a class="col-sm-3" href="#">-->
                        <p class="detail-success">
                            مشاهده ی جزییات
                        </p>
                    </a>
                </li>
            </ul>
        </section>
        <section class="main-content col-xs-12 loading_images" v-else-if="buyAds.length == 0 && !loading">
            <h4 dir="rtl" class="text-center">درخواستی برای شما وجود ندارد.</h4>

        </section>
        <section class="main-content col-xs-12 loading_images" v-show="loading">

            <img :src="loader" style="width:200px;height:200px">
        </section>
    </div>
</template>

<script>
    import {eventBus} from '../../../../app';
    export default {
        props: [
            "byadd",
            "loader",
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
        }
        ,
        methods: {
            init: function () {
                this.loading = true;

                var self = this;

                axios.post('/get_related_buyAds_list_to_the_seller')
                    .then(function (response) {
                        self.buyAds = response.data.buyAds;
                        self.loading = false;
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
