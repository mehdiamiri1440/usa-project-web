<style scoped>
    .check-items{
        padding-left: 10px;
        color: #00a65a;
    }
    .chat-page ul, .contact-body {
        overflow-y: scroll;
        height: 320px;
    }

    .main-content {
        padding: 60px 0 0;

        direction: rtl;

        border-bottom: 2px solid #F2F2F2;
    }

    .contact-title {
        font-size: 16px;
        padding: 18px 8px 23px;
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
        border: 1px solid #F2F2F2;
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
        border-bottom: 1px solid #B6B6B6;
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
    .contact-body .contact-item .contact-date {
        float: left;
        font-size: 10px;
        padding-top: 5px;
        width: 50px;
        direction: ltr;
        text-align:center;
    }
    .count-number{
        display: inline-block;

        height: 17px;

        width: 17px;

        background: #28a745;

        color: #fff;

        border-radius: 50px;

        margin: 5px auto;

        padding-top: 5px;
    }



    .message-wrapper{
        border-right: 2px solid #F2F2F2;
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
        padding:  20px;
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
        float: left;
        background: #F7F7F7;

    }

    .message-wrapper .chat-page .message-send {
        float: right;
        background: #E7FAFA;

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
    }

    .message-input{
        float: right;
        width: calc(100% - 60px);
    }
    .send-message-form .message-input input {
        padding: 17px 20px;
        border-radius: 50px;
        background: #fff;
        border: none;
    }
    .button-wrapper{
        float: left;
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
        <div class="col-xs-12 contact-wrapper pull-right col-sm-4 col-md-3">
            <div class="row">
                <div class="contact-title">
                    <i class="fa fa-user-circle"></i>
                    <span>لیست مخاطبین</span>
                </div>
                <div class="contact-body">
                    <div class="contact-search">
                        <form action="">
                            <div class="contact-search-input-wrapper">
                                <input type="text" placeholder="جستجوی مخاطبین"/>
                                <i class="fa fa-search"></i>
                            </div>
                        </form>
                    </div>
                    <div class="contact-items">
                        <ul>
                            <li class="contact-item">
                                <a href="#">
                                    <div class="contact-image">
                                        <img src="../../../../../public/assets/img/fig.jpg" alt="">
                                    </div>
                                    <span class="contact-name">جواد ظریف</span>
                                    <div class="contact-date">
                                        <p class="count-number">1</p>
                                        <p>18:24 PM</p>
                                    </div>
                                </a>
                            </li>
                            <li class="contact-item">
                                <a href="#">
                                    <div class="contact-image">
                                        <img src="../../../../../public/assets/img/nuts-and-dried-fruits.jpg" alt="">
                                    </div>
                                    <span class="contact-name"> حسن روحانی</span>
                                    <div class="contact-date">
                                        <p class="count-number">3</p>
                                        <p>18:24 PM</p>
                                    </div>
                                </a>
                            </li>
                            <li class="contact-item">
                                <a href="#">
                                    <div class="contact-image">
                                        <img src="../../../../../public/assets/img/back3.jpg" alt="">
                                    </div>
                                    <span class="contact-name"> سید علی جون</span>
                                    <div class="contact-date">
                                        <p class="count-number">5</p>
                                        <p>18:24 PM</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xs-12 message-wrapper col-sm-8 col-md-9">
            <div class="row">
                <div class="message-contact-title">
                    <div class="message-contact-title-img">
                        <img src="../../../../../public/assets/img/fig.jpg" alt="">

                    </div>
                    <span>لیست مخاطبین</span>

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
                                <span class="message-chat-date">18:24 PM  </span>
                            </div>
                        </li>
                        <li>
                            <div class="message-send">
                                کشور روسیه با جمعیت تقریبی ۱۴۴ میلیون نفر، یکی از کشورهایی می‌باشد که می‌تواند برای
                                <span class="message-chat-date">18:24 PM <span class="check-items"><i class="fa fa-check"></i><i class="fa fa-check"></i></span></span>
                            </div>
                        </li>

                        <li>
                            <div class="message-receive">
                                کشور روسیه با جمعیت تقریبی ۱۴۴ میلیون نفر، یکی از کشورهایی می‌باشد که می‌تواند برای
                                صادرات
                                کالاهای ایرانی مقصد خوبی به حساب بیاید. این کشور به دلیل قرار گرفتن در حاشیه‌ی‌ دریاچه‌ی
                                خزر
                                و نزدیک بودن به ایران از نظر مسافت، ظرفیت مناسبی برای صادرات، خصوصاً صادرات مواد غذایی،
                                محصولات کشاورزی و خشکبار برخوردار است.
                                <span class="message-chat-date">18:24 PM </span>
                            </div>
                        </li>
                        <li>
                            <div class="message-send">
                                کشور روسیه با جمعیت تقریبی ۱۴۴ میلیون نفر، یکی از کشورهایی می‌باشد که می‌تواند برای
                                <span class="message-chat-date">18:24 PM <span class="check-items"><i class="fa fa-check"></i><i class="fa fa-check"></i></span></span>
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

