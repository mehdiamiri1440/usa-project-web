<style scoped>

    /*main chat modal styles*/

    .chat-modal-wrapper {

        position: fixed;

        background: #fafafa;

        z-index: 1012;

        width: 365px;

        height: 450px;

        bottom: -800px;

        left: 15px;

        border-radius: 4px;

        border: 2px solid #00c569;

        transition: 1s;

        box-shadow: 0 0 22px rgba(0, 0, 0, 0.15);

    }

    .open-chat {

        bottom: 15px;

    }

    /*header chat modal styles */

    .header-chat-modal {

        background: linear-gradient(90deg, #00C569 0%, #21AD93 100%);

        overflow: hidden;

        color: #fff;

    }

    .header-info-wrapper {
        float: right;
        padding: 7px 18px 7px 0;
    }

    .header-chat-image {
        width: 35px;
        height: 35px;
        position: relative;
        float: right;
        border-radius: 90px;
        overflow: hidden;
    }

    .header-chat-image img {
        width: 100%;
        min-height: 100%;
        position: relative;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        top: 50%;
    }

    .header-chat-content {
        float: right;
        padding: 7px 10px;
        color: #fff;
        font-weight: bold;
        max-width: 200px;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: right;
        overflow: hidden;
        height: 30px;
        line-height: 1.618;
        direction: rtl;
    }

    .close-chat-modal {
        font-size: 18px;
        border: none;
        background: none;
        padding: 15px;
    }

    /*main chat modal styles*/

    .main-modal-chat ul {
        overflow-x: scroll;

        height: 350px;

        padding: 20px;
    }

    .main-modal-chat li {
        float: left;

        width: 100%;
    }

    .main-modal-chat li > div {

        background: #EEF3F6;

        border-radius: 5px;

        padding: 10px 15px;

        float: left;

        direction: rtl;

        font-size: 14px;

        margin-bottom: 15px;

        text-align: right;

    }

    .main-modal-chat li.sender > div {

        background: #D1F2E3;

        float: right;

    }

    .message-info {

        font-size: 10px;

        color: #AAA;

        overflow: hidden;

        padding-top: 5px;

    }

    .message-info span.visited {

        font-size: 14px;

        color: #00C569;

        float: right;

    }

    .message-info span.time {

        float: left;

        margin-top: 3px;

        direction: ltr;

    }

    /*footer chat modal styles*/
    .footer-modal-chat {

        position: absolute;

        bottom: 0;

        left: 0;

        right: 0;

        background: #fff;

        box-shadow: -3px 0 6px rgba(0, 0, 0, 0.15);

        padding: 10px 20px;
    }

    .send-message-button {
        float: right;

        width: 35px;

        height: 35px;

        color: #fff;

        background: linear-gradient(90deg, #00C569 0%, #21AD93 100%);

        border: none;

        border-radius: 35px;
    }

    .footer-modal-chat input {
        float: left;

        width: calc(100% - 40px);

        border-radius: 4px;

        background: #FAFAFA;

        border: none;

        padding: 6px 15px;

        direction: rtl;

        text-align: right;
    }

    @media screen and (max-width: 991px) {

        .chat-modal-wrapper {

            left: calc(50% - 230px);

            width: 460px;
        }

    }

    @media screen and (max-width: 767px) {

        .close-chat-modal span {

            background: #fff;

            color: #00c569;

            padding: 5px 14px;

            border-radius: 5px;

            font-size: 12px;

        }

        .chat-modal-wrapper {

            height: 100%;

            width: 100%;

            left: -2000px;

            bottom: 0px;

            border-radius: 0;

            transition: 800ms;

            border: none;

        }

        .open-chat {
            left: 0;
            bottom: 0;

        }

    }

    @media screen and (max-width: 370px) {

        .header-chat-content {

            max-width: 120px;

        }
    }


</style>


<template>
    <!--  #regex Chat Message Modal -->


    <div class="chat-modal-wrapper" :class="{'open-chat' : openChatBox}">

        <div class="header-chat-modal">

            <a href="#" class="header-info-wrapper">
                <div class="header-chat-image">
                    <img src="http://localhost:8000/assets/img/user-defult.png">
                </div>

                <p class="header-chat-content">

                    محمدامین دلداری

                </p>
            </a>

            <button @click.prevent="openChatBox = false" class="close-chat-modal ">
                <i class="fa fa-times-circle hidden-xs "></i>
                <span class="hidden-lg hidden-md hidden-sm">بازگشت</span>
            </button>

        </div>


        <div class="main-modal-chat">
            <ul>

                <li class="sender">
                    <div>
                        <p>
                            سلام، بله در حال حاظر وجود دارد
                        </p>
                        <div class="message-info">
                                    <span class="time">
                                         98/09/27, 2:09 PM
                                    </span>
                            <span class="visited">
                                        <i class="fa fa-check"></i>
                                        <i class="fa fa-check"></i>
                                    </span>

                        </div>
                    </div>
                </li>

                <li class="resiver">
                    <div>
                        <p>
                            سلام، بله در حال حاظر وجود دارد
                        </p>
                        <div class="message-info">
                                    <span class="time">
                                         98/09/27, 2:09 PM
                                    </span>

                        </div>
                    </div>
                </li>

            </ul>
        </div>


        <div class="footer-modal-chat">

            <button class="send-message-button">
                <i class="fa fa-paper-plane"></i>
            </button>
            <input type="text" placeholder="پیغامی بگارید">
        </div>

    </div>


    <!-- end regex Chat Message Modal -->
</template>

<script>
    import {eventBus} from '../../../../router/router.js'
    export default {
        data: function () {
            return {
                openChatBox: false
            }

        },
        created: function () {

            eventBus.$on("openChat", $event => {
                this.openChatBox = $event;
            });
        },
    }
</script>


