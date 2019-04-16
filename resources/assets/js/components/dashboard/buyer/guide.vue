<style scoped>
    .main-content {
        padding: 60px 15px;
    }
    .help {
        direction: rtl;
        line-height: 1.618;
    }

    ol {
        list-style: inherit;
        list-style-type: decimal !important;
    }

    ul {
        padding: 0 15px;
        list-style: inherit;

    }

    .help .title_list_help {
        margin: 30px auto;
        font-size: 16px;
        font-weight: 800;
    }

    .help .title_list_help ol {
        margin: 25px 0;
        font-size: 14px;
        font-weight: 400;
        padding: 15px 30px;
        box-shadow: 0 0 9px rgba(0, 0, 0, .075);
    }

    .help .title_list_help li {
        padding: 6px 0;
    }

</style>
<template>
    <section class="main-content col-xs-12">
        <div class="help">
            <ul>
                <li class="title_list_help">
                    بازرگانان و خریدارن محترم می توانید طبق راهنمای زیر، نسبت به ثبت سفارش و استعلام قیمت محصولات اقدام کنید:
                    <ol class="list-group">
                        <li>
                            در صورتی که از طریق گوشی موبایل خود از خدمات وبسایت استفاده می کنید بالای صفحه گوشه سمت راست روی آیکون مربوطه بزنید تا به منو دسترسی پیدا کنید.

                        </li>
                        <li>
                            به قسمت <a href="/dashboard/#/register-request"> ثبت درخواست خرید </a> رفته و اطلاعات لازم جهت خرید محصول مورد نظر خود را وارد کنید.
                        </li>
                        <li>
                            پس از تنظیم و ثبت درخواست خرید، این درخواست ابتدا باید به تایید کارشناسان ما برسد و سپس به تامین کنندگان مرتبط ارسال می شود تا پیشنهادهای خود را برای شما ارسال کنند.
                        </li>
                        <li>
                            لیست درخواست های خرید شما که به تایید کارشناسان رسیده است در صفحه ی <a href="/dashboard/#/my-buyAds">درخواست های من</a> قابل مشاهده است.
                        </li>
                        <li>
                            در صفحه ی جزییات پیشنهاد فروش میتوانید با کلیک روی دکمه ی ارسال پیام با فروشنده چت کنید.
                        </li>
                        <li>
                            در قسمت <a href="/master/#/product-list">لیست محصولات </a> می توانید متناسب با نیاز خود محصول و تامین کنندگان مورد نظر را پیدا کرده و نسبت به انجام معامله با وی و کسب اطلاعات بیشتر، با مراجعه به صفحه ی پروفایل فروشنده و کلیک روی دکمه ی ارسال پیام با او وارد چت شوید.
                        </li>
                        <li>
                            سامانه ی اینکوباک به منظور حفظ حریم خصوصی افراد شماره فروشندگان و خریداران را  به دیگران نمایش نمی دهد. افراد در صورت تمایل میتوانند شماره تماس خود را در پیام رد و بدل کنند.
                        </li>
                        <li>
                            هر گونه بروز رسانی پروفایل، پس از تایید کارشناسان ما برای دیگران قابل مشاهده خواهد بود.تایید پرفایل از طریق پیامک به اطاع شما می رسد.
                        </li>
                        <li>
                            در صورت بروز هرگونه مشکل با خدمتگزاران خود تماس بگیرید.
                        </li>
                    </ol>
                    <p class="text-center text-danger">  پشتیبانی :‌۰۹۱۱۸۴۱۳۰۵۴ </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import {eventBus} from "../../../router/dashboard_router";

    export default {
        data: function () {
            return {
                items: [
                    {
                        message: 'راهنما',
                        url: 'guide'
                    },
                ]
            }
        }, mounted() {
            eventBus.$emit('subHeader', this.items);
        },
    }
</script>
