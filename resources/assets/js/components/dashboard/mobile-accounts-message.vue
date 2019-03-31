<style scoped>

    .main-content {
        padding: 60px 15px;
        direction: rtl;
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


</style>
<template>
    <section class="main-content col-xs-12">
        <div class="col-xs-12 contact-wrapper">
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

