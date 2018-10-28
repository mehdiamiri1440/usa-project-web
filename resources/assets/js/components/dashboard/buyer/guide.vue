<style scoped>
    .main-content {
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
                    بازرگانان و خریدارن محترم می توانید طبق راهنمای زیر، نسبت به ثبت سفارش و استعلام قیمت محصولات اقدام کنید:
                    <ol class="list-group">
                        <li>
                            پروفایل خود را تکمیل کرده و منتظر تایید پروفایل خود از سوی کارشناسان اینکوباک باشید.
                        </li>
                        <li>
                            به قسمت ثبت درخواست خرید رفته و اطلاعات لازم جهت خرید محصول مورد نظر خود را وارد کنید.
                        </li>
                        <li>
                            پس از تنظیم و ثبت درخواست خرید، این درخواست ابتدا باید به تایید کارشناسان ما برسد و سپس به تامین کنندگان مرتبط ارسال می شود تا پیشنهادهای خود را برای شما ارسال کنند.
                        </li>
                        <li>
                            در صورت مشاهده پیشنهاد های مختلف، می توانید نسبت به رد یا پذیرش آن پیشنهاد اقدام کنید.
                        </li>
                        <li>
                            درصورت پذیرش هر کدام از پیشنهاد ها، جهت سهولت، کارشناسان اینکوباک با شما و تامین کنندگان مورد نظر جهت توافقات اولیه تماس خواهند گرفت.
                        </li>
                        <li>
                            درصورت ابراز آمادگی دوطرفه برای انجام معامله، در بخش، تراکنش های جاری قراردادی مبنی بر نظرات دو طرف صادر خواهد شد.
                        </li>
                        <li>
                            معاملات مطابق با قرارداد پذیرفته شده و آنچه در پنل خود در بخش تراکنش های جاری مشاهده می کنید، پیش خواهد رفت.
                        </li>
                        <li>
                            پس از انجام کامل معامله، در قسمت تراکنش های انجام شده، می توانید قرارداد پذیرفته شده و خلاصه فاکتورهای مربوطه را مشاهده کنید.
                        </li>
                        <li>
                            در قسمت لیست محصولات می توانید متناسب با نیاز خود محصول و تامین کنندگان مورد نظر را پیدا کرده و نسبت به انجام معامله با وی و کسب اطلاعات بیشتر، با کارشناسان اینکوباک تماس بگیرید.
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