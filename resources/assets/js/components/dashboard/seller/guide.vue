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
                    کشاورزان و تامین کنندگان محترم، می توانید نسبت به فروش مستقیم و ثبت محصولات خود و طبق راهنمای زیر
                    اقدام کنید:
                    <ol class="list-group">
                        <li>
                            در صورتی که از طریق گوشی موبایل خود از خدمات وبسایت استفاده می کنید بالای صفحه گوشه سمت راست روی آیکون مربوطه بزنید تا به منو دسترسی پیدا کنید.

                        </li>
                        <li>
                            تکمیل کردن هر چه بیشتر پرفایل سبب رغبت بیشتر خریداران با شما می شود. شما میتواننید در دو قسمت <a href="/dashboard/#/profile"> اطلاعات پایه </a> و <a href="/dashboard/#/complementry"> اطلاعات تکمیلی </a> نسبت به تکمیل و به روز رسانی پروفایل خود اقدام کنید.
                        </li>
                        <li>
                            به قسمت <a href="/dashboard/#/register-product"> ثبت محصول </a> رفته و اطلاعات محصولات خود را بصورت کامل پر کنید. این محصولات بهمراه
                            جزییات در صفحه پروفایل شخصی شما به خریداران نمایش داده می شود.
                        </li>
                        <li>
                             پیشنهاد های خرید از سوی خریداران را میتوانید در قسمت <a href="/dashboard/#/buyAd-requests"> درخواست ها </a> مشاهده کنیدو در صورت داشتن آمادگی جهت تامین محصول، قیمت پیشنهادی،
                            عکس محصولات و توضیحات مربوطه را به خریدار ارسال نمایید.
                        </li>
                        <li>
                            خریداران در صورت رغبت از طریق پیام با شما در ارتباط خواهند بود. لیست پیام های شما در قسمت <a href="/dashboard/#/messages"> پیام ها </a> قرار دارد.
                        </li>
                        <li>
                            سامانه ی اینکوباک به منظور حفظ حریم خصوصی افراد شماره فروشندگان و خریداران را  به دیگران نمایش نمی دهد. افراد در صورت تمایل میتوانند شماره تماس خود را در پیام رد و بدل کنند.
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
