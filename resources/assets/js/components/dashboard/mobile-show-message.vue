
<style scoped>
    .chat-page ul, .contact-body {
        overflow-y: scroll;

        position: absolute;

        left: 0;

        bottom: 75px;

        right: 0;

        top: 70px;
    }
    .green-bot{
        margin: 14px 0 0 25px;

        display: inline-block;

        background: #28a745;

        color: #fff;

        padding: 5px 18px;

        border-radius: 3px;

        text-align: center;

        border: none;

        -webkit-transition: 300ms;

        transition: 300ms;

        font-size: 12px;
    }
    .main-content {
        padding: 0;

        direction: rtl;

        position: absolute;

        top: 110px;

        left: 0;

        right: 0;

        bottom: 0;

        overflow: hidden;
    }
    .message-wrapper{
        height: 100%;

        padding: 0;
    }
    .contact-title {
        font-size: 16px;
        padding: 18px 0 23px;
        border-bottom: 2px solid #F2F2F2;
    }

    .contact-title i {
        font-size: 26px;
        position: relative;
        top: 5px;
    }

    .contact-title span {
        font-size: 16px;
        padding-right: 4px;
    }

    .contact-body .contact-search {
        padding: 9px 7px;

        background: #EEF3F3;
    }

    .contact-body .contact-search .contact-search-input-wrapper {
        position: relative;

    }

    .contact-body .contact-search .contact-search-input-wrapper i {
        position: absolute;

        left: 12px;

        font-size: 20px;

        color: #C1C1C1;

        top: 8px;
    }

    .contact-body .contact-search .contact-search-input-wrapper input {
        padding: 9px 15px;
        border-radius: 50px;
        background: #fff;
        border: none;
    }

    .contact-body .contact-image {
        width: 45px;
        height: 45px;
        float: right;
        border-radius: 50px;
        overflow: hidden;
        border: 1px solid #B5B5B5;
        position: relative;
    }

    .contact-body .contact-image img {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100%;
        width: initial;
        transform: translate(-50%, -50%);
    }

    .contact-body .contact-item a{
        font-size: 13px;
        color: #595959;
        overflow: hidden;
        padding: 9px 7px;
        border-bottom: 1px solid #F2F2F2;
        display:block;
        transition:200ms;
    }

    .contact-body .contact-item a:hover{
        background: #f6f6f6;
        transition:200ms;
    }

    .contact-body .contact-item:last-of-type a{

        border-bottom: none;
    }

    .contact-body .contact-item span.contact-name {
        float: right;

        padding-right: 15px;
        width: calc(100% - 95px);
        padding-top: 16px;
    }

    .contact-body .contact-item span.contact-date {
        float: left;
        font-size: 10px;
        padding-top: 20px;
        width: 50px;
        direction: ltr;
    }


    .message-wrapper .message-contact-title {
        overflow: hidden;
        font-size: 16px;
        padding: 7px 0 6px;
        border-bottom: 2px solid #F2F2F2;
    }

    .message-wrapper .message-contact-title-img {
        width: 55px;
        height: 55px;
        float: right;
        border-radius: 50px;
        overflow: hidden;
        border: 1px solid #B5B5B5;
        position: relative;
        margin: 0 22px 0 17px;

    }

    .message-wrapper .message-contact-title img {
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100%;
        width: initial;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .message-wrapper .message-contact-title span {
        float: right;
        display: block;
        padding-top: 17px;
    }

    .message-wrapper .chat-page ul {
        padding: 0 20px;
    }
    .message-wrapper .chat-page ul li{
        overflow: hidden;
    }

    .message-wrapper .chat-page li div {

        max-width: 455px;
        font-size: 12px;
        line-height: 1.612;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
        border-radius: 8px;
        padding: 12px 10px 3px;
        margin: 12px auto;
        display: inline-block;
    }

    .message-wrapper .chat-page .message-receive {
        float: right;
        background: #E7FAFA;
    }

    .message-wrapper .chat-page .message-send {
        float: left;
        background: #F7F7F7;
    }

    .message-wrapper .chat-page span.message-chat-date {
        text-align: left;
        font-size: 10px;
        padding-top: 15px;
        width: 100%;
        direction: ltr;
        display: block;
    }

    .send-message-form {
        background: #EEF3F3;

        overflow: hidden;

        padding: 12px 25px 13px;

        position: fixed;

        bottom: 0;

        left: 0;

        right: 0;
    }

    .message-input{
        float: left;
        width: calc(100% - 60px);
    }
    .send-message-form .message-input input {
        padding: 17px 20px;
        border-radius: 50px;
        background: #fff;
        border: none;
    }
    .button-wrapper{
        float: right;
    }
    .send-message-form .button-wrapper button {
        border: none;
        background: #fff;
        border-radius: 50px;
        width: 50px;
        height: 50px;
        font-size: 25px;

    }

    .send-message-form .button-wrapper button i {
        position: relative;
        top: 2px;
        left: -1px;
    }
</style>
<template>

    <section class="main-content col-xs-12">

        <div class=" message-wrapper">
            <div class="row">
                <div class="message-contact-title">
                    <div class="contact-title-contents  pull-right">
                        <div class="message-contact-title-img">
                            <img src="../../../../../public/assets/img/fig.jpg" alt="">

                        </div>
                        <span>لیست مخاطبین</span>
                    </div>
                    <div class="back-state pull-left">
                        <a href="#" class="green-bot">بازگشت</a>
                    </div>
                </div>
                <div class="chat-page">
                    <ul>
                        <li>
                            <div class="message-receive">
                                کشور روسیه با جمعیت تقریبی ۱۴۴ میلیون نفر، یکی از کشورهایی می‌باشد که می‌تواند برای
                                صادرات
                                کالاهای ایرانی مقصد خوبی به حساب بیاید. این کشور به دلیل قرار گرفتن در حاشیه‌ی‌ دریاچه‌ی
                                خزر
                                و نزدیک بودن به ایران از نظر مسافت، ظرفیت مناسبی برای صادرات، خصوصاً صادرات مواد غذایی،
                                محصولات کشاورزی و خشکبار برخوردار است.
                                <span class="message-chat-date">18:24 PM</span>
                            </div>
                        </li>
                        <li>
                            <div class="message-send">
                                کشور روسیه با جمعیت تقریبی ۱۴۴ میلیون نفر، یکی از کشورهایی می‌باشد که می‌تواند برای
                                <span class="message-chat-date">18:24 PM</span>
                            </div>
                        </li>

                        <li>
                            <div class="message-send">
                                کشور روسیه با جمعیت تقریبی ۱۴۴ میلیون نفر، یکی از کشورهایی می‌باشد که می‌تواند برای
                                صادرات
                                کالاهای ایرانی مقصد خوبی به حساب بیاید. این کشور به دلیل قرار گرفتن در حاشیه‌ی‌ دریاچه‌ی
                                خزر
                                و نزدیک بودن به ایران از نظر مسافت، ظرفیت مناسبی برای صادرات، خصوصاً صادرات مواد غذایی،
                                محصولات کشاورزی و خشکبار برخوردار است.
                                <span class="message-chat-date">18:24 PM</span>
                            </div>
                        </li>
                        <li>
                            <div class="message-receive">
                                کشور روسیه با جمعیت تقریبی ۱۴۴ میلیون نفر، یکی از کشورهایی می‌باشد که می‌تواند برای
                                <span class="message-chat-date">18:24 PM</span>
                            </div>
                        </li>

                    </ul>
                    <div class="send-message-form">
                        <form action="#">
                            <div class="message-input">
                                <input type="text" placeholder="پیغامی بگذارید "/>
                            </div>
                            <div class="button-wrapper">
                                <button type="submit"><i class="fa fa-send"></i></button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import {eventBus} from "../../router/dashboard_router";

    export default {
        data: function () {
            return {
                items: [
                    {
                        message: 'پیام ها',
                        url: 'messages',
                    }
                ],
            }
        },
        mounted:function () {
            eventBus.$emit('subHeader', this.items);
        }
    }
</script>

