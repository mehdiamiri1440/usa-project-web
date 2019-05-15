
<style>
    .main-content {
        padding: 90px 15px;
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
    @media screen and (max-width: 767px) {
      .main-content {
        padding: 90px 0;
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
            <ul class="list-unstyled" v-for="buyAd in buyAds">
                <li class="list-group-item  col-xs-12">
                    <p class="list-title col-sm-3 col-xs-12">
                        {{buyAd.category_name}}
                        <span> | </span>
                        {{buyAd.subcategory_name}}
                        <span v-if="buyAd.name"> | </span>
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
                    <a class="col-sm-3 col-xs-12" href="" @click.prevent=openChat(buyAd)>
                            <p class="detail-success">
                                <span class="fa fa-comment"></span> پیام به خریدار
                            </p>
                    </a>
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
//                {
//                    message: 'پیشنهادات من',
//                    url: 'mySellOffers'
//                },
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
                        console.log(response.data);
                        self.load = false;
                    });
            },
            openChat:function(buyAd){
                
                axios.post('/get_user_last_confirmed_profile_photo',{
                    'user_id' : buyAd.myuser_id
                }).then(function(response){
                    var profile_photo = response.data.profile_photo;
                    
                    var contact = {
                        contact_id:buyAd.myuser_id,
                        first_name:buyAd.first_name,
                        last_name:buyAd.last_name,
                        profile_photo:profile_photo,
                        user_name:buyAd.user_name,
                    }

                    axios.post('/set_last_chat_contact',contact)
                        .then(function(response){
                            window.location.href = '/dashboard/messages';
                        })
                        .catch(function(e){
                            alert('Error');
                        });
                    })
                .catch(function(err){
                    //
                });
            },

        },
        mounted() {
            this.init();
            eventBus.$emit('subHeader', this.items);
        },
        created(){
            gtag('config','UA-129398000-1',{'page_path': '/buyAd-requests'});
        }
    }
</script>
