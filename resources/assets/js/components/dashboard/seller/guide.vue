<style scoped>
    .main-content{
        padding: 60px 15px;
    }
    .help {
        direction: rtl;
        padding: 0 20px;
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
        margin: 25px 15px;
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
                            پروفایل خود را تکمیل کرده و منتظر تایید پروفایل خود از سوی کارشناسان اینکوباک باشید.
                        </li>
                        <li>
                            به قسمت ثبت محصول رفته و اطلاعات محصولات خود را بصورت کامل پر کنید. این محصولات بهمراه
                            جزییات در صفحه پروفایل شخصی شما به خریداران نمایش داده می شود.
                        </li>
                        <li>
                            در صورت دریافت پیشنهاد خرید از سوی خریداران و داشتن آمادگی جهت تامین محصول، قیمت پیشنهادی،
                            عکس محصولات و توضیحات مربوطه را به خریدار ارسال نمایید.
                        </li>
                        <li>
                            در صورت پذیرفته شدن پیشنهاد شما، کارشناسان اینکوباک جهت هماهنگی های اولیه با شما تماس خواهند
                            گرفت.
                        </li>
                        <li>
                            درصورت ابراز آمادگی دوطرفه برای انجام معامله، در قسمت تراکنش های جاری، قراردادی مبنی بر
                            نظرات دو طرف صادر خواهد شد.
                        </li>
                        <li>
                            معاملات مطابق با قرارداد پذیرفته شده و آنچه در پنل خود در بخش تراکش های جاری مشاهده می کنید،
                            پیش خواهد رفت.
                        </li>
                        <li>
                            پس از انجام کامل معامله، در قسمت تراکنش های انجام شده، می توانید قرارداد پذیرفته شده و خلاصه
                            فاکتورهای مربوطه را مشاهده کنید.
                        </li>
                        <li>
                            با تکمیل هرچه بهتر پروفایل خود می توانید نسبت به دیگر تامین کنندگان مزیت ایجاد کرده و اعتماد
                            بیشتری به خریدار ببخشید.
                        </li>
                    </ol>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import {eventBus} from '../../../app';

    export default {
        data: function () {
            return {
                items: [
                    {
                        message: 'قوانین',
                        url: 'guide'
                    },
                ]
            }
        }, mounted() {
            eventBus.$emit('subHeader', this.items);
        },
    }
</script>