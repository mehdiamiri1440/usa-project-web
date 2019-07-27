<style scoped>

    .text-red {
        color: #e41c38;
    }

    #faq {
        direction: rtl;
        padding-top: 64px;
        padding-bottom: 0;
        background-position: 50% 60px;

    }

    #faq .wrapper-table {
        visibility: visible;
        animation-delay: 0.9s;
        animation-name: fadeInUp;
    }

    .pricing-table {
        background: #fff;
        min-width: 522px;
        margin: 60px auto;

        border-radius: 6px;

        overflow: hidden;

        box-shadow: 0 0 18px #d5d5d5;
    }

    .pricing-table th, .pricing-table td {
        text-align: center;
        padding: 13px;
    }

    .green-check {
        color: #3c9544;
    }

    .red-check {
        color: #e41c38;
    }

    .pricing-table thead .head-package {
        background: #000546;
        padding: 15px 30px 0;
        color: #fff;
    }

    .pricing-table thead .head-secend-package {
        background: #f2f2f2;
        padding: 0 50px 20px;
        color: #333;
    }

    .pricing-table thead {
        font-size: 20px;
    }

    .pricing-table td {
        cursor: pointer;

    }

    .pricing-table > tbody > tr:nth-of-type(2n+1) {
        transition: 300ms;
        border: none;
        position: relative;
        background-color: #f2f2f2;
    }

    .pricing-table > tbody > tr:nth-of-type(4n+1) {
        background: #fff;
    }

    .pricing-table > tbody > tr {
        transition: 300ms;
        border: none;
    }

    #price-tr {
        background: #f2f2f2;
        color: #000546;
    }

    .main-table-item {
        position: relative;
    }

    .pricing-table > tbody > tr:nth-of-type(2n+0) {
        color: #333;
        transition: 300ms;
        box-shadow: inset 0 0 15px #d2d2d2;

    }

    .pricing-table > tbody > tr:last-of-type {
        box-shadow: none;
    }

    .pricing-table > tbody > tr:nth-of-type(2n+1):hover {
        background: #f2f2f2;
        color: #333;
        transition: 300ms;
    }

    .pricing-table > tbody > tr:last-of-type:hover {
        background: #fff;
    }

    .pricing-table > tbody > tr .collapse-icon {
        display: none;
    }

    .main-pricing-icon {
        width: 130px;
        margin: 0 auto;
    }

    .main-pricing-icon img {
        padding: 0 10px;
    }

    .pricing-table > tbody > tr:nth-of-type(2n+1) .collapse-icon {
        display: block;

        content: "\f107";

        width: 20px;

        height: 20px;

        background: #000546;

        position: absolute;

        left: -5px;

        top: 0;

        border-radius: 5px;

        font-family: "fontawesome", sans-serif;

        color: #fff;

        font-size: 18px;

        transition: 300ms;

        padding-right: 0;
    }

    .pricing-table > tbody > tr.changed-angle .collapse-icon {
        content: "\f107";
        transform: rotate(180deg);
        transition: 300ms;
    }

    @media (max-width: 992px) {

        #faq .container {
            width: 100%;

        }

        #faq .container .row {
            margin: 0;
        }

        #faq .container .row > div {
            padding: 0;
        }

        .main-pricing-icon {
            width: 80px;
            margin: 0 auto;
        }

        .pricing-table thead .head-secend-package {
            background: #f2f2f2;
            padding: 0 15px 8px;
            color: #333;
        }

        .main-table-item {
            padding-left: 20px;
        }

        .green-button {
            padding: 12px 20px;
        }
    }

    @media (max-width: 767px) {
        .main-pricing-icon img {
            padding: 0;
        }

        .pricing-table {
            min-width: initial;
        }

        table {
            font-size: 13px;
        }

        .green-button {
            padding: 7px 18px;
        }

        #faq .container {
            padding: 0;

        }

        .pricing-table > tbody > tr:nth-of-type(2n+1) .collapse-icon {
            top: 0;
            font-size: 15px;
            padding-top: 0;
            z-index: 1;
            right: -10px;
        }

        .pricing-table > tbody > tr:nth-of-type(2n+1) .collapse-icon {
            display: block;
            content: "\F107";
            width: 15px;
            height: 15px;
            background: #000546;
            position: absolute;
            left: -5px;
            top: 0;
            border-radius: 5px;
            font-family: "fontawesome", sans-serif;
            color: #fff;
            font-size: 18px;
            -webkit-transition: 300ms;
            transition: 300ms;
            padding-right: 0;
        }

        table thead th {
            font-size: 14px;
        }

        .main-pricing-icon {
            width: 60px;
            margin: 0 auto;
        }

        .pricing-table thead .head-secend-package {
            background: #f2f2f2;
            padding: 0 0 8px;
            color: #333;
        }

        .main-table-item {
            padding-left: 13px;
        }

        .pricing-table {
            background: #fff;
            margin: 20px auto;
            width: 100%;
        }

        .pricing-table td {
            padding: 13px;
        }

    }

    @media (max-width: 562px) {
        .main-table-item {
            padding-left: 0;
        }

        .green-button {
            padding: 7px 13px;
        }

        .pricing-table thead .head-package {
            background: #000546;
            padding: 15px 10px 0;
            color: #fff;
        }
    }

    @media (max-width: 475px) {

        .green-button {
            padding: 7px 7px;
            font-size: 13px;
            margin: 0 2px;
        }

    }

    @media (max-width: 360px) {

        .pricing-table th, .pricing-table td {

            text-align: center;
            padding: 10px;

        }

        .pricing-table > tbody > tr:nth-of-type(2n+1) .collapse-icon {
            left: 5px;
        }
    }


</style>
<template>
    <div>

        <section id="intro" class="parallax-section">
            <div class="container-fluid main_hero_section col-xs-12">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <h1 class="wow fadeIn" data-wow-delay="1.2s">
                                تعرفه ها
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="faq" class="parallax-section">
            <div class="container">
                <div class="row">
                    <div class="wrapper-table col-xs-12 animated hidden-xs">
                        <table class="wow fadeInUp table-striped  pricing-table ">

                            <thead>
                            <tr>
                                <th class="head-package">تعرفه ها</th>

                                <th class="head-secend-package">
                                    <div class="main-pricing-icon">
                                        <img :src="img_pricing_32">

                                        <span class="main-pricing-span">
                                            رایگان
                                        </span>

                                    </div>
                                </th>

                                <th class="head-secend-package">
                                    <div class="main-pricing-icon">
                                        <img :src="img_pricing_34">

                                        <span class="main-pricing-span">
                                            طلایی
                                        </span>

                                        <p class="text-red">یک ساله</p>
                                    </div>
                                </th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#free-package">

                                <td>
                                    <div class="main-table-item">
                                        <div> تعداد آگهی ها</div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>1</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>7</span>
                                        <i class="fa fa-angle-down collapse-icon"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="free-package">
                                <td colspan="5">
                                    تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود.
                                </td>
                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#one-package">

                                <td>
                                    <div class="main-table-item">
                                        <div>
                                            اولویت نمایش
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>2</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>1</span>
                                        <i class="fa fa-angle-down collapse-icon"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="one-package">
                                <td colspan="5">
                                    اولویت نمایش در لیست محصولات و جستجو ها
                                </td>
                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#three-package">

                                <td>
                                    <div class="main-table-item">
                                        <div>
                                            ارسال پیامک به خریداران
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="red-check"><i class="fa fa-close"></i></span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="green-check"><i class="fa fa-check"></i></span>
                                        <i class="fa fa-angle-down collapse-icon"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="three-package">
                                <td colspan="5">
                                    پس از ثبت آگهی فروش به صورت خودکار به خریداران متقاضی آن محصول پیامک ارسال می شود.
                                </td>
                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#four-package">
                                <td>
                                    <div class="main-table-item">
                                        <div>
                                            تایید فوری
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="red-check"><i class="fa fa-close"></i></span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="green-check"><i class="fa fa-check"></i></span>
                                        <i class="fa fa-angle-down collapse-icon"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="four-package">
                                <td colspan="5">
                                    آگهی های فروش ثبت شده بلافاصله پس از ثبت در لیست محصولات نمایش داده می شود.
                                </td>
                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#five-package">
                                <td>
                                    <div class="main-table-item">
                                        <div>
                                            میزان افزایش خوشنامی
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>0</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>350</span>
                                        <i class="fa fa-angle-down collapse-icon"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="five-package">
                                <td colspan="5">
                                    مقدار اعتبار اضافه شده به صفحه پروفایل شما
                                </td>

                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#six-package">
                                <td>
                                    <div class="main-table-item">
                                        <div>
                                            نشان فروشنده معتبر
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="red-check"><i class="fa fa-close"></i></span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="green-check"><i class="fa fa-check"></i></span>
                                        <i class="fa fa-angle-down collapse-icon"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="six-package">
                                <td colspan="5">
                                    این نشان در صفحه پروفایل فروشنده نمایش داده می شود.
                                </td>
                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#seven-package">

                                <td>
                                    <div class="main-table-item">
                                        <div>
                                            تعداد درخواستهای خرید
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>5</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>نامحدود</span>
                                        <i class="fa fa-angle-down collapse-icon"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="seven-package">
                                <td colspan="5">
                                    سقف تعداد درخواست های خریدی که به کاربر نمایش داده می شود.
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div class="main-table-item">
                                        <div>
                                            قیمت
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>رایگان</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>تومان 489,000</span>
                                    </div>
                                </td>

                            </tr>

                            <tr>
                                <td>
                                    <div class="main-table-item">
                                        <div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span> <a href="/register" class="green-button">ثبت نام</a> </span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span> <a href="/payment/3" class="green-button">خرید</a> </span>

                                    </div>
                                </td>
                            </tr>

                            </tbody>

                        </table>
                    </div>

                    <div class="wrapper-table col-xs-12 animated hidden-sm hidden-md hidden-lg">

                        <table class="wow fadeInUp   pricing-table ">
                            <thead>
                            <tr>
                                <th class="head-package">تعرفه ها</th>

                                <th class="head-secend-package">
                                    <div class="main-pricing-icon">
                                        <img :src="img_pricing_32">
                                        <span class="main-pricing-span">رایگان</span>
                                    </div>
                                </th>

                                <th class="head-secend-package">
                                    <div class="main-pricing-icon">
                                        <img :src="img_pricing_34">

                                        <span class="main-pricing-span">
                                            طلایی
                                        </span>

                                        <p class="text-red">یک ساله</p>
                                    </div>
                                </th>
                            </tr>

                            </thead>
                            <tbody>


                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#mobile-free-package">

                                <td>
                                    <div class="main-table-item">
                                        <i class="fa fa-angle-down collapse-icon"></i>

                                        <div> تعداد آگهی ها</div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>1</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>7</span>
                                    </div>
                                </td>

                            </tr>

                            <tr class="collapse" id="mobile-free-package">
                                <td colspan="5">
                                    تعداد آگهی های همزمان شما که در لیست محصولات نمایش داده می شود.
                                </td>

                            </tr>
                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#mobile-one-package">

                                <td>
                                    <div class="main-table-item">
                                        <i class="fa fa-angle-down collapse-icon"></i>
                                        <div>
                                            اولویت نمایش
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>2</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>1</span>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="mobile-one-package">
                                <td colspan="5">
                                    اولویت نمایش در لیست محصولات و جستجو ها
                                </td>
                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#mobile-three-package">
                                <td>
                                    <div class="main-table-item">
                                        <i class="fa fa-angle-down collapse-icon"></i>
                                        <div>
                                            ارسال پیامک به خریداران
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="red-check"><i class="fa fa-close"></i></span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="green-check"><i class="fa fa-check"></i></span>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="mobile-three-package">
                                <td colspan="5">
                                    پس از ثبت آگهی فروش به صورت خودکار به خریداران متقاضی آن محصول پیامک ارسال می شود.
                                </td>
                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#mobile-four-package">
                                <td>
                                    <div class="main-table-item">
                                        <i class="fa fa-angle-down collapse-icon"></i>

                                        <div>
                                            تایید فوری
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="red-check"><i class="fa fa-close"></i></span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="green-check"><i class="fa fa-check"></i></span>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="mobile-four-package">

                                <td colspan="5">
                                    آگهی های فروش ثبت شده بلافاصله پس از ثبت در لیست محصولات نمایش داده می شود.
                                </td>

                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#mobile-five-package">
                                <td>
                                    <div class="main-table-item">
                                        <i class="fa fa-angle-down collapse-icon"></i>

                                        <div>
                                            میزان افزایش خوشنامی
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>0</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>350</span>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="mobile-five-package">

                                <td colspan="5">
                                    مقدار اعتبار اضافه شده به صفحه پروفایل شما
                                </td>

                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#mobile-six-package">
                                <td>
                                    <div class="main-table-item">
                                        <i class="fa fa-angle-down collapse-icon"></i>

                                        <div>
                                            نشان فروشنده معتبر
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="red-check"><i class="fa fa-close"></i></span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span class="green-check"><i class="fa fa-check"></i></span>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="mobile-six-package">
                                <td colspan="5">
                                    این نشان در صفحه پروفایل فروشنده نمایش داده می شود.
                                </td>
                            </tr>

                            <tr class="collapsed" onclick="trElement(this)"
                                data-toggle="collapse"
                                data-target="#mobile-seven-package">
                                <td>
                                    <div class="main-table-item">
                                        <i class="fa fa-angle-down collapse-icon"></i>

                                        <div>
                                            تعداد درخواستهای خرید
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>5</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>نامحدود</span>
                                    </div>
                                </td>
                            </tr>

                            <tr class="collapse" id="mobile-seven-package">
                                <td colspan="5">
                                    سقف تعداد درخواست های خریدی که به کاربر نمایش داده می شود.
                                </td>

                            </tr>

                            <tr>
                                <td>
                                    <div class="main-table-item">
                                        <div>
                                            قیمت
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>رایگان</span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>489,000 تومان</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div class="main-table-item">
                                        <div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">
                                        <span>
                                            <a href="/register" class="green-button">ثبت نام</a>
                                        </span>
                                    </div>
                                </td>

                                <td>
                                    <div class="main-table-item">

                                        <span>
                                            <a href="/payment/3" class="green-button">خرید</a>
                                        </span>

                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
    import {eventBus} from "../../../router/dashboard_router";

    export default {
        props: [
            'img_pricing_38',
            'img_pricing_36',
            'img_pricing_34',
            'img_pricing_32',
        ],
        data: function () {
            return {}
        },
        methods: {
            stopLoader: function () {
                eventBus.$emit('isLoading', false);
            },
            trElement: function (element) {
                var elementClass = $(element).attr('class');
                if (elementClass !== '') {
                    console.log($(element).toggleClass('changed-angle'));
                } else {
                    console.log('false')

                }

            }
        },
        mounted: function () {
            var self = this;
            document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                    self.$nextTick(self.stopLoader());
                }
            }
        },
        updated: function () {
            this.$nextTick(this.stopLoader());
        },
        created() {
            gtag('config', 'UA-129398000-1', {'page_path': '/pricing'});
        }
    }
</script>
