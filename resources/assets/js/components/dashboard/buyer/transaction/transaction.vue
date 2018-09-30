
<template>
    <div>
        <section class="main-content col-xs-12" v-if="transactionInfo">
            <!--part 1-->
            <div id="step1" v-if="currentStep == 1">
                <nav class="main-content-nav col-xs-12">
                    <ul class="list-inline">
                        <li class="list-item"><a href="#">نظر سنجی</a></li>
                        <li class="list-item "><a href="#"> تسویه حساب </a></li>
                        <li class="list-item "><a href="#"> پرداخت ودیعه</a></li>
                        <li class="list-item active"><a @click.prevent="goToStep(1)" href="#">تایید مفاد قرارداد </a>
                        </li>
                    </ul>
                </nav>
                <div class="contents col-xs-12" v-if="msg == ''">
                    <div class="content-show">
                        <div class="buttons ">
                            <div class="main_buttons col-xs-12 col-sm-8 col-md-9">
                                <a href="#" class="default_btn" @click.prevent="goToNextPage()">صفحه بعد</a>
                                <a href="#" class="default_btn" @click.prevent="goToPrePage()">صفحه قبل</a>
                            </div>
                            <div class="continue_but col-xs-12 col-sm-4 col-md-3">
                                <a href="#" @click.prevent="confirmContract" class="green-bot">تایید قرارداد</a>
                            </div>

                        </div>
                        <h2>عنوان قرارداد</h2>
                        <p id="step1S1" v-if="pageStep == 1">
                            شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند
                            خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده
                            سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خرasdsafsdfdsvdsvsdvdاهد شد. شرح: این مبلغ صرفا جهت انجام به
                            موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به
                            فروشنده پرداخت خواهد شد.
                        </p>
                        <p id="step1S2" v-if="pageStep == 2">
                            شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند
                            خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده
                            سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به فروشنده پرداخت
                            خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از
                            پایان فرایند خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به
                            موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به
                            فروشنده پرداخت خواهد شد.
                        </p>
                        <p id="step1S3" v-if="pageStep == 3">
                            {{transactionInfo.loading_dead_line + ' ' + transactionInfo.admin_notes}}
                        </p>
                    </div>
                </div>
                <div class="alert-message" v-else>
                    {{msg}}
                </div>
            </div>

            <!--end part 1-->


            <!--part 2-->

            <div id="step2" v-if="currentStep == 2">
                <nav class="main-content-nav col-xs-12">
                    <ul class="list-inline">
                        <li class="list-item"><a href="#">نظر سنجی</a></li>
                        <li class="list-item "><a href="#"> تسویه حساب </a></li>
                        <li class="list-item active"><a href="#" @click.prevent="goToStep(2)"> پرداخت ودیعه</a></li>
                        <li class="list-item "><a href="#" @click.prevent="goToStep(1)">تایید مفاد قرارداد </a></li>
                    </ul>
                </nav>
                <div class="contents col-xs-12">
                    <div class="content-show" v-if="msg == ''">
                        <div class="header-contents col-xs-12">
                            <div class="title-contents col-xs-12 col-sm-4">
                                فاکتور پرداخت نهایی
                            </div>
                            <div class="content col-xs-12 col-sm-8">
                                <div class="col-xs-6">
                                    شماره سریال: <span>{{transactionId}}</span>
                                </div>
                                <div class="col-xs-6">
                                    تاریخ صدور: <span>{{transactionInfo.issue_date}}</span>
                                </div>
                            </div>


                        </div>
                        <div class="main-content-texts col-xs-12">
                            <h2>
                                عنوان: <span>{{transactionInfo.product_name}}</span>
                            </h2>
                            <div class="right-side-main-texts col-xs-12 col-sm-6">
                                <table class="table table-striped ">
                                    <tbody>
                                    <tr>
                                        <td>میزان درخواست:</td>
                                        <td> {{transactionInfo.quantity}} کیلو گرم</td>
                                    </tr>
                                    <tr>
                                        <td>مبلغ کل (تقریبی):</td>
                                        <td> {{transactionInfo.quantity * transactionInfo.unit_price}} تومان</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="left-side-main-texts col-xs-12 col-sm-6 ">
                                <table class="table table-striped ">

                                    <tbody>
                                    <tr>
                                        <td> قیمت واحد:</td>
                                        <td> {{transactionInfo.unit_price}} تومان</td>
                                    </tr>
                                    <tr>
                                        <td>مبلغ پیش پرداخت:</td>
                                        <td>{{transactionInfo.amount_to_pay}} تومان</td>
                                    </tr>

                                    </tbody>
                                </table>

                            </div>
                            <p class="description-text col-xs-12">
                                مبلغ پیش پرداخت 20 درصد از حجم کل تراکنش بوده و پس از پرداخت این مبلغ، فرایند آماده سازی بار
                                توسط تامین کننده و بازرسی و نظارت آغاز خواهد شد.
                            </p>
                        </div>
                        <div class="buttons">
                            <div class="main_buttons col-xs-12">
                                <a href="#" @click.prevent="payPrepayment" class="green-bot">پرداخت آنلاین</a>
                            </div>
                        </div>
                    </div>
                    <div class="alert-message" v-else>
                        {{msg}}
                    </div>
                </div>
            </div>
            <!--end part 2-->


            <!--part 3-->

            <div id="step3" v-if="currentStep == 3">
                <nav class="main-content-nav col-xs-12">
                    <ul class="list-inline">
                        <li class="list-item"><a href="#">نظر سنجی</a></li>
                        <li class="list-item active"><a @click.prevent="goToStep(3)" href="#"> تسویه حساب </a></li>
                        <li class="list-item "><a href="#" @click.prevent="goToStep(2)"> پرداخت ودیعه</a></li>
                        <li class="list-item "><a href="#" @click.prevent="goToStep(1)">تایید مفاد قرارداد </a></li>
                    </ul>
                </nav>
                <div class="contents col-xs-12">
                    <div class="content-show" v-if="msg == ''">
                        <div class="header-contents col-xs-12">
                            <div class="title-contents col-xs-12 col-sm-4">
                                فاکتور پرداخت نهایی
                            </div>
                            <div class="content col-xs-12 col-sm-8">
                                <div class="col-xs-6">
                                    شماره سریال: <span>{{transactionId}}</span>
                                </div>
                                <div class="col-xs-6">
                                    تاریخ صدور: <span>{{transactionInfo.issue_date}}</span>
                                </div>
                            </div>


                        </div>
                        <div class="main-content-texts col-xs-12">
                            <h2>
                                عنوان: <span>{{transactionInfo.product_name}}</span>
                            </h2>
                            <div class="right-side-main-texts col-xs-12 col-sm-6">
                                <table class="table table-striped ">
                                    <tbody>
                                    <tr>
                                        <td>میزان درخواست:</td>
                                        <td> {{transactionInfo.quantity}} کیلو گرم</td>
                                    </tr>
                                    <tr>
                                        <td>مبلغ کل :</td>
                                        <td> {{transactionInfo.quantity * transactionInfo.unit_price}} تومان</td>
                                    </tr>
                                    <tr class="services">
                                        <td>هزینه خدمات:</td>
                                        <td> {{transactionInfo.inspection_price}} تومان</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="left-side-main-texts col-xs-12 col-sm-6 ">
                                <table class="table table-striped">
                                    <tbody>
                                    <tr>
                                        <td> قیمت واحد:</td>
                                        <td> {{transactionInfo.unit_price}} تومان</td>
                                    </tr>
                                    <tr class="pre-pay">
                                        <td>مبلغ پیش پرداخت:</td>
                                        <td>20،000،000 تومان</td>
                                    </tr>

                                    <tr>
                                        <td> مبلغ قابل پرداخت:</td>
                                        <td> {{transactionInfo.amount_to_pay}} تومان</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                            <p class="description-text col-xs-12">
                                مبلغ پیش پرداخت 20 درصد از حجم کل تراکنش بوده و پس از پرداخت این مبلغ، فرایند آماده سازی بار
                                توسط
                                تامین کننده و بازرسی و نظارت آغاز خواهد شد.
                            </p>
                        </div>
                        <div class="buttons">
                            <div class="main_buttons col-xs-12 ">
                                <a href="#" class="green-bot" @click.prevent="finalPayment">پرداخت آنلاین</a>
                            </div>
                        </div>
                    </div>
                    <div class="alert-message" v-else>
                        {{msg}}

                    </div>
                </div>

            </div>
            <!--end part 3-->
            <div id="step4" v-if="currentStep == 4">
                <nav class="main-content-nav col-xs-12">
                    <ul class="list-inline">
                        <li class="list-item active"><a href="#" @click.prevent="goToStep(4)">نظر سنجی</a></li>
                        <li class="list-item "><a href="#" @click.prevent="goToStep(3)"> تسویه حساب </a></li>
                        <li class="list-item "><a href="#" @click.prevent="goToStep(2)"> پرداخت ودیعه</a></li>
                        <li class="list-item "><a href="#" @click.prevent="goToStep(1)">تایید مفاد قرارداد </a></li>
                    </ul>
                </nav>
            </div>
            <!--part 3-->


            <!--end part 3-->
        </section>
        <div class="loading_images  col-xs-12" v-else>
            <!--<img :src="loading" style="width:200px;height:200px">-->
        </div>
        <p></p>

    </div>
</template>

<script>

    export default {
        props: [
            'trans',
            'loading'
        ],
        data: function () {
            return {
                currentStep: 1,
                pageStep: 1,
                transactionId: '',
                popUpMsg: '',
                transactionInfo: '',
                msg: '',
                step1: {},
                step2: {},
                step3: {},
                step4: {}

            }
        },
        methods: {
            init: function () {

                var self = this;
                self.transactionId = self.trans;

                axios.post('/dashboard/get_transaction_info', {
                    transaction_id:  self.trans,
                })
                    .then(function (response) {
                        self.currentStep = response.data.step;
                        self.transactionInfo = response.data.transaction_info;
                        self.msg = response.data.msg;
                    })
                    .catch(function (err) {
                        if (err.response.status == 404) {
                            window.location.href = '/404';
                        }
                    });
            },
            confirmContract: function () {
                var self = this;

                axios.post('/action', {
                    transaction_id: self.transactionId,
                    action_id: 3,
                })
                    .then(function (response) {
                        self.init();
                    });
            },
            payPrepayment: function () {
                var self = this;

                axios.post('/action', {
                    transaction_id: self.transactionId,
                    action_id: 5,
                })
                    .then(function (response) {
                        window.location.href = '/payment';
                    });
            },
            finalPayment: function () {
                var self = this;

                axios.post('/action', {
                    transaction_id: self.transactionId,
                    action_id: 7,
                })
                    .then(function (response) {
                        window.location.href = '/payment';
                    });
            },
            goToStep: function (step) {
                this.currentStep = step;
            },
            goToNextPage: function () {
                if (this.pageStep < 3) {
                    this.pageStep++;
                }
            },
            goToPrePage: function () {
                if (this.pageStep < 1) {
                    this.pageStep = 1;
                } else if (this.pageStep > 1) {
                    this.pageStep--;
                }
            }
        },
        mounted: function () {
            this.init();
        }
    }
</script>
