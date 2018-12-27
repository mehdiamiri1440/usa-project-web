<style scoped>


    /*start main content style */

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



    .main-content {
        padding: 60px 15px;
    }



    /*end main content style */
    /*custom cods*/


    .green-sbot {
        display: block;
        color: #28a745;
        padding: 10px 0;
        border-radius: 3px;
        text-align: center;
        transition: 300ms;
        border: 2px solid;

    }

    .number,.date,.subject{
        padding: 8px 15px;
    }

    #icon-pro svg{
        height: 150px;
    }


    .main-content > ul {
        margin-top: 0;
        text-align: center;
        box-shadow: 0 0 9px rgba(0, 0, 0, .075);
        padding: 0;
    }
    .list-group-item{
        padding: 0;
    }
    .list-group-item a{
        padding: 15px 0;
        display: block;
        overflow: hidden;
    }
    .main-content  .title-list  {
        overflow: hidden;
        padding: 15px 0;
        background: #313942;
        color: #fff;
        text-align: center;
    }

    .main-content  p {
        float: right;
        text-align: center;
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
    @media screen and (max-width: 555px) {

        .main-content ul p {
            font-size: 11px;
            padding: 0;
        }
        .main-content .subject ,.main-content p {
            padding: 0;
        }
        .main-content {
            padding: 60px 5px;

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
        <section class="main-content col-xs-12">
              <ul class="list-unstyled" v-if="transactions.length != 0">
                  <!--start title list -->
                  <li class="list-group-item title-list">
                      <p class="title-list-text col-xs-2">   شماره تراکنش</p>
                      <p class="time-show  col-xs-2">تاریخ </p>
                      <p class="time-show col-xs-5">موضوع فعالیت </p>
                      <p class="time-show  col-xs-3"> وضعیت </p>
                  </li>
                  <!--end title list -->
                  <li class="list-group-item content-list col-xs-12" v-for="transaction in transactions">
                      <!--{{this.transactionInfo['id']}}-->
                      <router-link :to="'/transaction-detail/' + transaction.transaction_id" >
                          <p class="number col-xs-2">
                              {{transaction.transaction_id}}
                          </p>
                          <p class="date col-xs-2" dir="rtl">
                              {{transaction.deal_formation_date}}
                          </p>
                          <p class="subject col-xs-5">
                              {{transaction.product_name}}
                          </p>
                          <p class="col-xs-3">
                              <span class="green-sbot"> {{transaction.short_status}}</span>
                          </p>
                      </router-link>
                   <!--   <a :href="trans + '/' + transaction.transaction_id">
                          <p class="number col-xs-2">
                               {{transaction.transaction_id}}
                          </p>
                          <p class="date col-xs-2" dir="rtl">
                               {{transaction.deal_formation_date}}
                          </p>
                          <p class="subject col-xs-5">
                               {{transaction.product_name}}
                          </p>
                          <p class="col-xs-3">
                              <span class="green-sbot"> {{transaction.short_status}}</span>
                          </p>
                      </a>-->
                  </li>
              </ul>
              <ul class="list-unstyled col-xs-12" v-if="instantTransactions.length != 0">
                  <!--start title list -->
                  <li class="list-group-item title-list">
                      <p class="title-list-text col-xs-2">   شماره تراکنش</p>
                      <p class="time-show  col-xs-2">تاریخ </p>
                      <p class="time-show col-xs-5">موضوع فعالیت </p>
                      <p class="time-show  col-xs-3"> وضعیت </p>
                  </li>
                  <!--end title list -->
                  <li class="list-group-item content-list col-xs-12" v-for="transaction in instantTransactions">
                      <!--{{this.transactionInfo['id']}}-->
                      <router-link :to="'/instant-transaction-detail/' + transaction.transaction_id" >
                          <p class="number col-xs-2">
                              {{transaction.transaction_id}}
                          </p>
                          <p class="date col-xs-2" dir="rtl">
                              {{transaction.deal_formation_date}}
                          </p>
                          <p class="subject col-xs-5">
                              {{transaction.product_name}}
                          </p>
                          <p class="col-xs-3">
                              <span class="green-sbot"> {{transaction.short_status}}</span>
                          </p>
                      </router-link>
                  </li>
              </ul>
              <div class="loading_images  col-xs-12" v-else-if="isLoading">
                  <img :src="loading" style="width:200px;height:200px">
              </div>
              <div class="col-xs-12" v-else>
                  <h4 class="text-center" dir="rtl">تراکنشی در این قسمت وجود ندارد.</h4>
              </div>
        </section>
    </div>
</template>
<script>
    import {eventBus} from "../../../../router/dashboard_router";
    export default {
        props: [
            'loading',
            'trans'
        ],
        data: function () {
            return {
                transactions:'',
                instantTransactions:'',
                isLoading:true,
                popUpMsg:'',
                submiting:false,
                items: [
                    {
                        message: 'لیست تراکنش ها',
                        url: 'myTransactions'
                    }
                ]
            }
        },
        methods: {
            init: function () {
                var self = this;

                axios.post('/get_user_transaction_list')
                    .then(function (response) {
                        self.transactions = response.data.transactions;
                        self.isLoading = false;
                    })
                    .catch(function (err) {
                        if (err.response.status == 404) {
                            window.location.href = '/404'
                        }
                        self.isLoading = false;
                });
                
                axios.post('/get_user_instant_transaction_list')
                    .then(function (response) {
                        self.instantTransactions = response.data.transactions;
                        self.isLoading = false;
                    })
                    .catch(function (err) {
                        if (err.response.status == 404) {
                            window.location.href = '/404'
                        }
                        self.isLoading = false;
                });
            },
        },
        mounted: function () {
            eventBus.$emit('subHeader', this.items);
            this.init();
        }
    }
</script>
