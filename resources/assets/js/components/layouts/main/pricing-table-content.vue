<style scoped>

    .green-button {
        padding: 10px 35px;
        margin: 5px auto 0;
        font-size: 16px;
        font-weight: bold;
        width: initial;
    }

    .text-red {
        color: #E41C38;
    }

    .text-green {
        color: #00ac5c;
    }

    .wrapper-background {

        background: #fff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        padding: 15px;
        line-height: 1.618;
        margin-bottom: 30px;
        overflow: hidden;

    }

    .header-wrapper {
        text-align: center;
        padding: 15px 50px;
        float: left;
        width: calc(100% - 100px);
    }

    .header-title {
        margin-bottom: 9px;
    }

    .header-title span {
        font-size: 20px;
        color: #333;
        font-weight: bold;
    }

    .header-icon-wrapper {
        float: right;
        width: 100px;
        text-align: center;
    }

    .header-icon-wrapper i {
        font-size: 112px;
        color: #FFBB00;
        position: relative;
        top: 3px;

    }

    .header-icon-wrapper i:after {
        content: "\f00c";
        font-size: 29px;
        text-align: center;
        width: 100%;
        display: block;
        position: absolute;
        top: 24px;
    }

    hr {
        background: #00C569;
        margin: 5px -15px;

        height: 2px;

    }

    .pro-version {
        border: 2px solid #00C569;
    }

    .item-wrapper {
        position: relative;
        padding: 8px 15px 15px;
        float: left;
    }

    .item-title {

        font-size: 18px;
        font-weight: bold;
        text-align: center;

    }

    .item-price {

        font-size: 23px;

        font-weight: bold;

        color: #00c569;

        text-align: center;

    }

    .item-price .item-currency {

        font-size: 13px;

        font-weight: 400;

        color: #777;

        position: relative;

        right: -4px;

    }

    .item-date {

        text-align: center;

        font-size: 18px;

        font-weight: bold;

        margin-top: -4px;

    }

    .item-content {
        position: relative;
        float: left;
    }

    .item-action {
        text-align: center;
    }

    .item-action p {
        margin: 5px auto 0;
        font-size: 16px;
        padding: 12px;
        display: inline-block;
    }

    .item-help i {

        color: #000546;

        font-size: 22px;

    }

    .item-help-content {

        position: absolute;
        right: -9px;
        top: 35px;
        width: 200px;
        color: #fff;
        background: #000546;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        transition: 300ms;
        z-index: 1;
        direction: rtl;
        text-align: right;
    }

    .item-help-content > span {

        display: block;
        padding: 6px 15px;

    }

    /*    .item-help-content::after {

            width: 0;
            height: 0;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid #000546;
            content: "";
            position: absolute;
            right: 10px;
            top: -7px;
            border-radius: 3px;

            }*/

    .item-help {

        transition: 300ms;

        display: block;

        float: right;

        margin-left: 10px;
    }

    .item-content-title {

        float: right;

        font-size: 14px;

        color: #777;

        font-weight: bold;

    }

    .item-content-amount {
        float: left;
        font-weight: bold;
        min-width: 45px;
        text-align: center;
    }

    .item-content-list li {

        float: left;

        width: 100%;

        padding: 5px 0;

        position: relative;
    }

    .wrapper-icon {
        display: inline;
    }

    .header-description {
        color: #777;
    }

    .wrapper-icon svg {
        width: 20px;
        position: relative;
        top: 7px;
        margin-left: 5px;
    }

    .special-badge{
        position: absolute;
        left: -29px;
        background:#e41c38;
        color:#fff;
        font-size: 17px;
        font-weight: bold;
        width: 120px;
        text-align: center;
        padding: 3px;
        transform: rotate(-45deg);
        top: 14px;
    }
    @media screen and (max-width: 992px) {

        .main-content-wrapper > .row > div {

            padding: 0 7px;

        }

        .list-title, .needs, .list-time {
            padding: 15px;
        }

    }

    @media screen and (max-width: 767px) {

        .header-icon-wrapper {
            float: right;
            width: 50px;
            text-align: center;
        }

        .header-icon-wrapper i {
            font-size: 69px;
            color: #FFBB00;
            position: relative;
            top: 16px;
        }

        .header-wrapper {
            text-align: center;
            padding: 15px 50px;
            float: left;
            width: calc(100% - 59px);
        }

        .header-icon-wrapper i::after {
            content: "\F00C";
            font-size: 19px;
            text-align: center;
            width: 100%;
            display: block;
            position: absolute;
            top: 14px;
        }

        .header-description {
            font-size: 13px
        }

        .header-title {
            margin-bottom: 0;
        }

        .header-wrapper {
            padding: 0;
        }

        .item-title, .item-price {
            float: right;
        }

        .detail-wrapper, .item-date {
            float: left;
        }

        .item-header {
            overflow: hidden;
            direction: rtl;
        }

        .item-date {
            padding: 11px 7px 0 0;
        }

        .item-date span {
            padding: 0 0 0 6px;
            display: inline-block;
        }

        .item-content-list li {
            padding: 9px 0;
        }

        .title {
            text-align: center;

        }

        .item-content-title {
            font-size: 17px;
        }

        .item-help i {
            font-size: 30px;
        }

        .item-content-amount {
            font-size: 20px;
        }

        .item-help-content {
            right: 0;
            top: 45px;
        }

        .special-badge{
            padding: 0 3px 3px;
            border-radius: 4px;
            display: inline-block;
            margin-right: 3px;
            position: initial;
            font-size: 14px;
            width: initial;
            transform: rotate(0);
        }
    }

</style>
<template>
    <div class="col-xs-12  ">
        <div class="row">
            <div class="  col-xs-12">
                <div class=" wrapper-background">
                    <div class="header-icon-wrapper">
                        <i class="fas fa-award"></i>
                    </div>
                    <div class="header-wrapper">
                        <div class="header-title">

                                        <span>
                                            ضمانت بازگشت وجه
                                        </span>
                        </div>

                        <p class="header-description">

                            <strong>
                                در صورت ارتقاء به عضویت ویژه اگر پس از سه ماه از نتیجه آن رضایت نداشته باشید

                                <span class="text-green">
                                                  100% مبلغ پرداختی به شما بازگردانده می شود
                                               </span>
                            </strong>

                        </p>
                    </div>
                </div>

            </div>


            <div class="main-content-wrapper  col-xs-12">
                <div class="row">

                    <div class="pull-left col-xs-12 col-sm-6 col-md-4">

                        <div class="item-wrapper pro-version wrapper-background ">

                            <div class="item-header">
                                <span class="special-badge">ویژه</span>
                                <div class="item-title">
                                    عضویت ویژه سالانه
                                </div>

                                <div class="detail-wrapper">

                                    <div class="item-price text-rtl">

                                        <span class="item-price-content">689,000</span>
                                        <span class="item-currency"> تومان </span>

                                    </div>

                                    <!--   <div class="item-date">
                                           <span class="hidden-sm hidden-md hidden-lg">/</span>سالانه
                                       </div>-->
                                </div>

                            </div>

                            <hr/>

                            <div class="item-content">

                                <ul class="item-content-list">

                                    <li v-for="(item, index) in priceItemPro">

                                        <a data-toggle="collapse"
                                           :href="'#content-item-pro-' + index"
                                           @click.prevent="collapseControl($event)"
                                           class="item-help"
                                           :title="item.helpDescription"
                                        >

                                            <i class="fa fa-question-circle"></i>

                                            <div class="item-help-content collapse" :id="'content-item-pro-' + index">

                                                <span v-text="item.helpDescription">  </span>

                                            </div>

                                        </a>

                                        <p class="item-content-title" v-text="item.title">

                                        </p>

                                        <p class="item-content-amount" v-html="item.contentUnit">

                                        </p>

                                    </li>


                                </ul>

                            </div>

                            <div class="item-action">
                                <p v-if="statusData.active_pakage_type == 3" class="text-green">
                                    در حال استفاده
                                </p>

                                <button v-else-if="statusData.active_pakage_type > 3"  class="green-button btn-disabled" disabled>
                                    ارتقاء عضویت
                                </button>

                                <a v-else href="" @click.prevent="doPayment(3)" class="green-button">
                                    ارتقاء عضویت
                                </a>

                            </div>

                        </div>

                    </div>
                    <div class="pull-left col-xs-12 col-sm-6 col-md-4">

                        <div class="item-wrapper  wrapper-background ">

                            <div class="item-header">

                                <div class="item-title">
                                    اشتراک 6 ماهه
                                </div>

                                <div class="detail-wrapper">

                                    <div class="item-price text-rtl">

                                        <span class="item-price-content">649,000</span>
                                        <span class="item-currency"> تومان </span>

                                    </div>

                                  <!--  <div class="item-date">
                                        <span class="hidden-sm hidden-md hidden-lg">/</span>6 ماهه
                                    </div>-->
                                </div>

                            </div>

                            <hr/>

                            <div class="item-content">

                                <ul class="item-content-list">

                                    <li v-for="(item, index) in priceItemSix">

                                        <a data-toggle="collapse"
                                           :href="'#content-item-two-' + index"
                                           @click.prevent="collapseControl($event)"
                                           class="item-help"
                                           :title="item.helpDescription"
                                        >

                                            <i class="fa fa-question-circle"></i>

                                            <div class="item-help-content collapse" :id="'content-item-two-' + index">

                                                <span v-text="item.helpDescription">  </span>

                                            </div>

                                        </a>

                                        <p class="item-content-title" v-text="item.title">

                                        </p>

                                        <p class="item-content-amount" v-html="item.contentUnit">

                                        </p>

                                    </li>


                                </ul>

                            </div>

                            <div class="item-action">
                                <p v-if="statusData.active_pakage_type == 2  " class="text-green">
                                    در حال استفاده
                                </p>

                                <button v-else-if="statusData.active_pakage_type > 2"  class="green-button btn-disabled" disabled>
                                    ارتقاء عضویت
                                </button>

                                <a v-else href="" @click.prevent="doPayment(2)" class="green-button">
                                    ارتقاء عضویت
                                </a>

                            </div>

                        </div>

                    </div>
                    <div class="pull-right col-xs-12 col-sm-6 col-md-4">

                        <div class="item-wrapper  wrapper-background ">

                            <div class="item-header">

                                <div class="item-title">
                                    اشتراک ماهانه
                                </div>

                                <div class="detail-wrapper">

                                    <div class="item-price text-rtl">

                                        <span class="item-price-content">189,000</span>
                                        <span class="item-currency"> تومان </span>

                                    </div>
                                    <!--                                    <div class="item-date">
                                                                            <span class="hidden-sm hidden-md hidden-lg">/</span>1 ماهه
                                                                        </div>-->
                                </div>

                            </div>

                            <hr/>

                            <div class="item-content">

                                <ul class="item-content-list">

                                    <li v-for="(item, index) in priceItemOne">

                                        <a data-toggle="collapse"
                                           :href="'#content-item-one-' + index"
                                           @click.prevent="collapseControl($event)"
                                           class="item-help"
                                           :title="item.helpDescription"
                                        >

                                            <i class="fa fa-question-circle"></i>

                                            <div class="item-help-content collapse" :id="'content-item-one-' + index">

                                                <span v-text="item.helpDescription">  </span>

                                            </div>

                                        </a>

                                        <p class="item-content-title" v-text="item.title">

                                        </p>

                                        <p class="item-content-amount" v-html="item.contentUnit">

                                        </p>

                                    </li>


                                </ul>

                            </div>

                            <div class="item-action">
                                <p v-if="statusData.active_pakage_type == 1" class="text-green">
                                    در حال استفاده
                                </p>

                                <button v-else-if="statusData.active_pakage_type > 1"  class="green-button btn-disabled" disabled>
                                    ارتقاء عضویت
                                </button>

                                <a v-else href="" @click.prevent="doPayment(1)" class="green-button">
                                    ارتقاء عضویت
                                </a>

                            </div>

                        </div>

                    </div>

                 <!--   <div class=" pull-right col-xs-12 col-sm-6">

                        <div class="item-wrapper wrapper-background ">

                            <div class="item-header">

                                <div class="item-title">
                                    عضویت
                                </div>

                                <div class="detail-wrapper">

                                    <div class="item-price text-rtl">

                                        <span class="item-price-content">رایگان</span>
                                        <span class="item-currency"></span>

                                    </div>

                                    <div class="item-date">
                                        نامحدود
                                    </div>

                                </div>

                            </div>

                            <hr/>

                            <div class="item-content">

                                <ul class="item-content-list">

                                    <li v-for="(item, index) in priceItem">

                                        <a data-toggle="collapse"
                                           :href="'#content-item-' + index"
                                           @click.prevent="collapseControl($event)"
                                           class="item-help"
                                           :title="item.helpDescription"
                                        >

                                            <i class="fa fa-question-circle"></i>

                                            <div class="item-help-content collapse" :id="'content-item-' + index">
                                                <span v-text="item.helpDescription">  </span>

                                            </div>

                                        </a>

                                        <p class="item-content-title" v-text="item.title">

                                        </p>

                                        <p class="item-content-amount" v-html="item.contentUnit">

                                        </p>

                                    </li>


                                </ul>

                            </div>

                            <div class="item-action">

                                <p v-if="statusData" class="text-green">
                                    در حال استفاده
                                </p>

                                <router-link v-else :to="{name : 'register'}" class="green-button">
                                    ثبت نام رایگان
                                </router-link>

                            </div>

                        </div>

                    </div>-->


                </div>
            </div>


        </div>
    </div>
</template>


<script>

    export default {
        data: function () {
            return {
                statusData: '',
                priceItemOne: [
                    {
                        title: 'تعداد آگهی ها',
                        contentUnit: '1',
                        helpDescription: ' تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. '
                    },
                    {
                        title: 'تعداد نردبان ',
                        contentUnit: '0',
                        helpDescription: 'بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد'
                    },
                    {
                        title: 'نمایش در لیست محصولات ویژه',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: 'محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود'
                    },
                    {
                        title: 'تایید فوری ',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: ' آگهی های فروش ثبت شده بلافاصله پس از ثبت در لیست محصولات نمایش داده می شود. '
                    },
                    {
                        title: ' میزان افزایش خوشنامی ',
                        contentUnit: '0',
                        helpDescription: ' مقدار اعتبار اضافه شده به صفحه پروفایل شما '
                    },
                    {
                        title: ' نشان فروشنده معتبر ',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: ' این نشان در صفحه پروفایل فروشنده نمایش داده می شود. '
                    },
                    {
                        title: ' سقف روزانه پاسخ به درخواست ها ',
                        contentUnit: '5',
                        helpDescription: 'سقف تعداد روزانه پاسخگویی به درخواست های خرید'
                    },
                    {
                        title: 'مشاهده بلافاصله درخواست خرید ',
                        contentUnit: '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
                        helpDescription: ' درخواست های خرید جدید بدون تاخیر به شما نمایش داده می شود. '
                    },
                    {
                        title: 'تضمین بازگشت وجه ',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: ' اگر پس از سه ماه از نتیجه آن رضایت نداشته باشید 100% مبلغ پرداختی به شما بازگردانده می شود. '
                    }
                ],
                priceItemSix: [
                    {
                        title: 'تعداد آگهی ها',
                        contentUnit: '2',
                        helpDescription: ' تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. '
                    },
                    {
                        title: 'تعداد نردبان ',
                        contentUnit: '1',
                        helpDescription: 'بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد'
                    },
                    {
                        title: 'نمایش در لیست محصولات ویژه',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: 'محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود'
                    },
                    {
                        title: 'تایید فوری ',
                        contentUnit: '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
                        helpDescription: ' آگهی های فروش ثبت شده بلافاصله پس از ثبت در لیست محصولات نمایش داده می شود. '
                    },
                    {
                        title: ' میزان افزایش خوشنامی ',
                        contentUnit: '100',
                        helpDescription: ' مقدار اعتبار اضافه شده به صفحه پروفایل شما '
                    },
                    {
                        title: ' نشان فروشنده معتبر ',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: ' این نشان در صفحه پروفایل فروشنده نمایش داده می شود. '
                    },
                    {
                        title: ' سقف روزانه پاسخ به درخواست ها ',
                        contentUnit: '10',
                        helpDescription: 'سقف تعداد روزانه پاسخگویی به درخواست های خرید'
                    },
                    {
                        title: 'مشاهده بلافاصله درخواست خرید ',
                        contentUnit: '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
                        helpDescription: ' درخواست های خرید جدید بدون تاخیر به شما نمایش داده می شود. '
                    },
                    {
                        title: 'تضمین بازگشت وجه ',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: ' اگر پس از سه ماه از نتیجه آن رضایت نداشته باشید 100% مبلغ پرداختی به شما بازگردانده می شود. '
                    }
                ],
                priceItemPro: [
                    {
                        title: 'تعداد آگهی ها',
                        contentUnit: '7',
                        helpDescription: ' تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. '
                    },
                    {
                        title: 'تعداد نردبان ',
                        contentUnit: '1',
                        helpDescription: 'بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد'
                    },
                    {
                        title: 'نمایش در لیست محصولات ویژه',
                        contentUnit: '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
                        helpDescription: 'محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود'
                    },
                    {
                        title: 'تایید فوری ',
                        contentUnit: '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
                        helpDescription: ' آگهی های فروش ثبت شده بلافاصله پس از ثبت در لیست محصولات نمایش داده می شود. '
                    },
                    {
                        title: ' میزان افزایش خوشنامی ',
                        contentUnit: '350',
                        helpDescription: ' مقدار اعتبار اضافه شده به صفحه پروفایل شما '
                    },
                    {
                        title: ' نشان فروشنده معتبر ',
                        contentUnit: '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
                        helpDescription: ' این نشان در صفحه پروفایل فروشنده نمایش داده می شود. '
                    },
                    {
                        title: ' سقف روزانه پاسخ به درخواست ها ',
                        contentUnit: '30',
                        helpDescription: 'سقف تعداد روزانه پاسخگویی به درخواست های خرید'
                    },
                    {
                        title: 'مشاهده بلافاصله درخواست خرید ',
                        contentUnit: '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
                        helpDescription: ' درخواست های خرید جدید بدون تاخیر به شما نمایش داده می شود. '
                    },
                    {
                        title: 'تضمین بازگشت وجه ',
                        contentUnit: '<i class="text-green fa fa-check-circle" style="color:#00c569"></i>',
                        helpDescription: ' اگر پس از سه ماه از نتیجه آن رضایت نداشته باشید 100% مبلغ پرداختی به شما بازگردانده می شود. '
                    }
                ],

                /*priceItem: [
                    {
                        title: 'تعداد آگهی ها',
                        contentUnit: '1',
                        helpDescription: ' تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود. '
                    },
                    {
                        title: 'تعداد نردبان ',
                        contentUnit: '0',
                        helpDescription: 'بر روی اولین محصول ثبت شده ویژگی نردبان به صورت خودکار اعمال خواهد شد'
                    },
                    {
                        title: 'نمایش در لیست محصولات ویژه',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: 'محصولات ثبت شده شما، در قسمت محصولات ویژه در پنل خریداران به آنها نمایش داده می شود'
                    },
                    {
                        title: 'تایید فوری ',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: ' آگهی های فروش ثبت شده بلافاصله پس از ثبت در لیست محصولات نمایش داده می شود. '
                    },
                    {
                        title: ' میزان افزایش خوشنامی ',
                        contentUnit: '0',
                        helpDescription: ' مقدار اعتبار اضافه شده به صفحه پروفایل شما '
                    },
                    {
                        title: ' نشان فروشنده معتبر ',
                        contentUnit: '<i class="text-green fa fa-times-circle" style="color:#e41c38"></i>',
                        helpDescription: ' این نشان در صفحه پروفایل فروشنده نمایش داده می شود. '
                    },
                    {
                        title: ' تعداد درخواستهای خرید ',
                        contentUnit: '5',
                        helpDescription: ' سقف تعداد درخواست های خریدی که به کاربر نمایش داده می شود. '
                    }
                ]*/
            }
        },
        methods: {
            init: function () {
                var self = this;
                axios.post('/get_seller_dashboard_required_data')
                    .then(function (response) {
                        if (response.data.is_valid || response.data.is_valid == false) {
                            self.statusData = response.data;
                        }

                    });
            },
            collapseControl: function (link) {

                var $myGroup = $('.item-content');
                $myGroup.find('.collapse.in').collapse('hide')
            },
            doPayment: function(packageType){
                let userId = getUserId();

                this.registerComponentStatistics('payment','type-' + packageType,'userId: ' + userId);

                window.location.href = '/payment/' + packageType; 
            },
            registerComponentStatistics: function(categoryName, actionName, labelName) {
                gtag("event", actionName, {
                    event_category: categoryName,
                    event_label: labelName
                });
            },

        },
        mounted() {
            this.init();
            $(document).on('click', function () {
                $('.collapse').collapse('hide');
            })
        }
    }

</script>
