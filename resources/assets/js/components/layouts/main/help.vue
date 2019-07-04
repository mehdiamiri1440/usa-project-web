<template>
    <div class="main-content-index-pages">

        <section class="parallax-section policy">
            <div class="overlay"></div>
            <div class="container">
                <h3 class="text-right ">اینکوباک چگونه کار می کند</h3>
                <div id="accordion" role="tablist" aria-multiselectable="true" class="panel-group">

                    <div class="panel panel-default">
                        <div role="tab" id="headingFirst" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseFirst"
                                aria-expanded="false" aria-controls="collapseFirst" class="collapsed">
                            اینکوباک چیست؟
                        </a></h4></div>
                        <div id="collapseFirst" role="tabpanel" aria-labelledby="headingFirst"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    اینکوباک بستر هوشمند و الکترونیکی خرید و فروش عمده محصولات کشاورزی (میوه - تره بار -خشکبار) است که خدمات دسترسی به خرید(ان و فروشندگان مختلف،)درخواست خرید و اطلاع از
                                    قیمت های بازار را به خریداران و تامین کنندگان ارائه میدهد.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingTwo" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                                aria-expanded="false" aria-controls="collapseTwo" class="collapsed">
                            خدمات اینکوباک برای تامین کنندگان چیست؟
                        </a></h4></div>
                        <div id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    در سامانه اینکوباک کشاورزان، باغداران، گلخانه داران، صاحبان سالن های سورت، بسته بندی
                                    و سردخانه بعنوان فروشنده می توانند ایفای نقش کنند. اینکوباک به فروشندگان جهت فروش
                                    بهینه و بدون واسطه کمک میکند. فروشندگان می توانند در سامانه اینکوباک، پروفایل شخصی
                                    خود را بسازند و محصولات خود را نیز ثبت کنند تا از این طریق به خریداران گسترده ای در
                                    سراسر کشور دست پیدا کنند.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingThree" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                                aria-expanded="false" aria-controls="collapseThree" class="collapsed">
                            خدمات اینکوباک برای خریداران چیست؟
                        </a></h4></div>
                        <div id="collapseThree" role="tabpanel" aria-labelledby="headingThree"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    تجار، خریداران عمده و بنکداران به عنوان خریدار می توانند در سامانه اینکوباک ثبت نام
                                    کرده و فعالیت کنند. اینکوباک به خریداران امکان ساخت پروفایل تجاری، ثبت درخواست خرید
                                    و استعلام قیمت را ارائه میدهد. خریداران در سامانه اینکوباک با لیست متعددی از محصولات
                                    و تامین کنندگان تایید شده مواجه می شوند که به راحتی می توانند به مقایسه بپردازند.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingFour" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
                                aria-expanded="false" aria-controls="collapseFour" class="collapsed">
                            چگونه در سامانه اینکوباک ثبت نام کنم؟
                        </a></h4></div>
                        <div id="collapseFour" role="tabpanel" aria-labelledby="headingFour"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>ابتدا به سایت incobac.com مراجعه کرده و جهت ثبت نام دکمه ورود به سامانه یا <a
                                            href="/login" target="_blank">ورود/ثبت نام</a> کلیک کنید
                                    </li>
                                    <li>سپس در صفحه ورود روی دکمه ی <a href="/register" target="_blank">ثبت نام</a> کلیک
                                        کنید.
                                    </li>
                                    <li><p>
                                        در صفحه ی ثبت نام ابتدا شماره تلفن همراه خود را وارد کنید سپس دکمه ی ارسال پیامک
                                        را بزنید.
                                    </p>
                                        <div class="desktop-image">
                                            <img :src="img_2_help_page">
                                        </div>
                                        <br/><br/>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_2_help_page">
                                        </div>
                                    </li>
                                    <li><p>
                                        کد تایید ارسال شده به تلفن همراهتان را وارد کنید سپس دکمه ی بررسی کد را بزنید.
                                    </p>
                                        <div class="desktop-image">
                                            <img :src="img_3_help_page">
                                        </div>
                                        <br/><br/>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_3_help_page">
                                        </div>
                                    </li>
                                    <li><p>
                                        مشخصات کاربری خود را وارد کنید و دکمه ی ثبت مشخصات را بزنید.
                                    </p>
                                        <div class="desktop-image">
                                            <img :src="img_4_help_page">
                                        </div>
                                        <br/><br/>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_4_help_page">
                                        </div>
                                    </li>
                                    <li><p>
                                        درپایان نوع کاربری و حوزه فعالیت خود را وارد کرده و دکمه ی ثبت نام را کلیک کنید
                                    </p>
                                        <div class="desktop-image">
                                            <img :src="img_5_help_page">
                                        </div>
                                        <br/><br/>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_5_help_page">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingten" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseten"
                                aria-expanded="false" aria-controls="collapseten" class="collapsed">
                            چگونه پروفایل خود را کامل کنم؟
                        </a></h4></div>
                        <div id="collapseten" role="tabpanel" aria-labelledby="headingten"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        تکمیل پروفایل تجاری کسب و کار شما باعث معرفی شما به دیگر خریداران و فروشندگان
                                        شده و باعث ایجاد اعتماد در مشتریان و افزایش فروش شما خواهد شد.
                                    </li>
                                    <li>
                                        برای تکمیل پروفایل خود ابتدا از نوار داشبورد کنار صفحه گزینه ویرایش پروفایل را
                                        انتخاب کنید.
                                    </li>
                                    <li>

                                        در قسمت اطلاعات پایه می توانید نوع کسب و کار خود را مشخص نمایید.
                                        اگر در قالب شرکت فعالیت می کنید گزینه (حقوقی) و اگر در قالب شخصی فعالیت می کنید
                                        گزینه (حقیقی) را انتخاب کنید.
                                        در این قسمت یک تصویر برای پروفایل خود بارگذاری کنید.
                                        پس از تکمیل اطلاعات حتما بر روی گزینه ثبت تغییرات در پایین صفحه کلیک کنید.
                                        <br/>
                                        <br/>
                                    </li>
                                    <li>
                                        <div class="desktop-image">
                                            <img :src="img_8_help_page">
                                            <br/><br/>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_11_3_help_page">
                                        </div>
                                    </li>
                                    <li>

                                        در قسمت اطلاعات تکمیلی، می توانید توضیحات و تصاویر مربوط به کسب و کار خود و
                                        همچنین مجوز ها، استاندارد ها و گواهینامه های کسب و کار خود را بار گذاری کنید.
                                        توجه کنید که کامل کردن پروفایل تجاری باعث ایجاد اعتماد و افزایش تعداد مشتریان
                                        شما می شود.
                                        پس از تکمیل اطلاعات حتما بر روی گزینه ثبت تغییرات در پایین صفحه کلیک کنید.


                                        <br/>
                                        <br/>
                                    </li>

                                    <li>
                                        <div class="desktop-image">
                                            <img :src="img_8_1_help_page">
                                        </div>
                                        <br/><br/>
                                    </li>
                                    <li>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_11_4_help_page">
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingFive" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseFive"
                                aria-expanded="false" aria-controls="collapseFive" class="collapsed">
                            چگونه در اینکوباک محصول ثبت کنم؟
                        </a></h4></div>
                        <div id="collapseFive" role="tabpanel" aria-labelledby="headingFive"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        <p>ابتدا وارد سامانه شوید.<a href="/login">لینک ورود</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>در سمت راست پنل خود بر روی لینک (ثبت محصول)  کلیک کنید.</p>
                                        <p>

                                            اطلاعات محصول خود را وارد کرده و بر روی دکمه ی )ثبت محصول( کلیک کنید.

                                        </p>
                                        <div class="desktop-image">
                                        <img :src="img_6_help_page">
                                        </div>
                                        <br/><br/>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_6_help_page">
                                        </div>

                                        <br/><br/>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_6_2_help_page">
                                        </div>
                                    </li>

                                    <li>
                                        محصول شما پس از تایید ناظران اینکوباک در صفحه ی <a href="/product-list"
                                                                                           target="_blank">لیست
                                        محصولات</a> نمایش داده می شود و خریداران میتوانند درخواست های خرید خود را برای
                                        شما ارسال کنند.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingSix" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseSix"
                                aria-expanded="false" aria-controls="collapseSix" class="collapsed">
                            چگونه درخواست خرید خود را در اینکوباک ثبت کنم؟
                        </a></h4></div>
                        <div id="collapseSix" role="tabpanel" aria-labelledby="headingSix"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        ابتدا وارد سامانه شوید.<a href="/login">لینک ورود</a>
                                    </li>
                                    <li>
                                        <p>
                                            در سمت راست پنل خود لینک ثبت درخواست جدید را کلیک کنید(پنل خریداران)
                                        </p>
                                        <p>


                                            شما می توانید در قسمت (ثبت درخواست خرید) در نوار داشبورد
                                            کنار صفحه اطلاعات محصول مورد نیاز خود از قبیل نوع محصول، وزن، قیمت و ... را
                                            وارد و درخواست خرید خود را ثبت کنند.
                                            این درخواست خرید برای تمامی فروشندگان آن محصول ارسال شده و خریدار میتواند
                                            بهترین محصول با بهترین قیمت را از میان فروشندگان آن محصول بیابد.


                                        </p>
                                    </li>
                                    <li>
                                        <img :src="img_11_help_page">

                                        <br/><br/>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_11_1_help_page">
                                        </div>
                                        <br/><br/>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_11_2_help_page">
                                        </div>
                                        <br/><br/>

                                    </li>
                                    <li>
                                        درخواست شما پس از تایید ناظران اینکوباک برای تامین کنندگان مربوطه ارسال میشود تا
                                        قیمت ، تصاویر و سایر جزییات محصولشان را برایتان ارسال کنند.برای مشاهده ی پاسخ ها
                                        قسمت درخواست های من را کلیک کنید
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingeleven" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseEleven"
                                aria-expanded="false" aria-controls="collapseEleven" class="collapsed">
                            چگونه درخواست های خرید را ببینیم؟ (فروشندگان)
                        </a></h4></div>
                        <div id="collapseEleven" role="tabpanel" aria-labelledby="headingeleven"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        <p>

                                            فروشندگان محترم می توانند در این قسمت درخواست های خریدی که از سوی خریداران
                                            اعلام شده است را ببینند و با خریداران ارتباط برقرار کنند.
                                            برای دیدن درخواست های خرید می توانید در نوار داشبورد کنار صفحه به قسمت
                                            (درخواست ها) مراجعه کنید.

                                        </p>
                                    </li>

                                    <li>
                                        <div class="desktop-image">
                                        <img :src="img_7_help_page">
                                        <br/><br/>
                                        </div>
                                        <div class="mobile-image">
                                            <img :src="img_mobile_7_1_help_page">
                                            <br/><br/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="img_mobile_7_help_page">
                                            <br/><br/>
                                        </div>


                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingEight" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseEight"
                                aria-expanded="false" aria-controls="collapseEight" class="collapsed">
                            پیام رسان اینکوباک
                        </a></h4></div>
                        <div id="collapseEight" role="tabpanel" aria-labelledby="headingEight"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    خریداران و فروشندگان عزیز می توانند از طریق پیام رسان تجاری اینکوباک در هر لحظه
                                    (بدون ایجاد مزاحمت در اثر تعداد زیاد تماس) با یکدیگر ارتباط برقرار کنند، به صورت
                                    روزانه استعلام قیمت بگیرند و در صورت صلاح دید نسبت به برقراری تماس تلفنی اقدام کنند.
                                </p>

                                <br/><br/>
                                <img :src="img_13_help_page">

                                <br/><br/>
                                <div class="mobile-image">
                                    <img :src="img_mobile_13_help_page">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingSeven" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseSeven"
                                aria-expanded="false" aria-controls="collapseSeven" class="collapsed">
                            آیا جهت عضویت در سامانه هزینه ای باید پرداخت شود؟
                        </a></h4></div>
                        <div id="collapseSeven" role="tabpanel" aria-labelledby="headingSeven"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    عضویت در سامانه اینکوباک و استفاده از خدمات سیستمی سامانه اینکوباک (ساخت پروفایل،
                                    ثبت محصول، ثبت درخواست خرید و استعلام قیمت) در پکیج نوع اول رایگان است و برای ارتقای
                                    جایگاه خود، افزایش تعداد مشتریان و فروش خود میتوانید از دیگر پکیج های اینکوباک
                                    استفاده نمایید.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-xs-12">
                    <div class="row">

                        <h1 class="main-green-button">
                            <a href="/register" class="green_bot">ثبت نام در سامانه</a>
                        </h1>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>
<style scoped>

    .mobile-image {
        max-width: 360px;
        text-align: center;
        margin: 0 auto;
        display: none;
    }

    .main-green-button {
        max-width: 360px;
        margin: 0 auto;
    }

    .main-green-button .green_bot {
        font-size: 23px;
    }

    .panel-heading, .panel-title {
        padding: 0;
        margin: 0;
    }

    .panel-heading a {
        padding: 15px 20px;
        display: block;
        line-height: 1.618;
    }
    @media screen and (max-width: 768px){
        .desktop-image{
            display: none;
        }
        .mobile-image {
            display: block;
        }

    }
</style>
<script>
    import {eventBus} from "../../../router/dashboard_router";

    export default {
        props: [
            'img_2_help_page',
            'img_3_help_page',
            'img_4_help_page',
            'img_5_help_page',
            'img_6_help_page',
            'img_7_help_page',
            'img_8_help_page',
            'img_8_1_help_page',
            'img_11_help_page',
            'img_12_help_page',
            'img_13_help_page',
            'img_mobile_2_help_page',
            'img_mobile_3_help_page',
            'img_mobile_4_help_page',
            'img_mobile_5_help_page',
            'img_mobile_6_help_page',
            'img_mobile_6_2_help_page',
            'img_mobile_6_3_help_page',
            'img_mobile_7_help_page',
            'img_mobile_7_1_help_page',
            'img_mobile_11_1_help_page',
            'img_mobile_11_2_help_page',
            'img_mobile_11_3_help_page',
            'img_mobile_11_4_help_page',
            'img_mobile_11_5_help_page',
            'img_mobile_12_help_page',
            'img_mobile_13_help_page',
        ],
        methods: {
            loader: function () {
                console.log('is loader');
                this.$nextTick(function () {
                    eventBus.$emit('finishLoad', false);
                });
            }
        },
        mounted: function () {
            this.loader();
        },
        updated: function () {
            this.loader();
        }
    }
</script>
