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

        <div class="header-chat-modal" v-if="contactInfo">

            <a href="#" class="header-info-wrapper">
                <div class="header-chat-image" v-if="contactInfo.profile_photo">
                    <img :src="contactInfo.profile_photo">
                </div>
                <div class="header-chat-image" v-else>
                    <img src="http://localhost:8000/assets/img/user-defult.png">
                </div>

                <router-link :to="{path:'/profile/' + contactInfo.user_name}">
                    <p class="header-chat-content">
                        {{contactInfo.first_name + ' ' + contactInfo.last_name}}
                    </p>
                </router-link>
            </a>

            <button @click.prevent="openChatBox = false" class="close-chat-modal ">
                <i class="fa fa-times-circle hidden-xs "></i>
                <span class="hidden-lg hidden-md hidden-sm">بازگشت</span>
            </button>

        </div>


        <div class="main-modal-chat">
            <ul v-if="chatMessages">
                    <li :key="msg.id" v-for="msg in chatMessages" :class="[msg.sender_id == currentUserId ? 'sender' : 'resiver']">
                        <div> 
                        <p v-text="msg.text"></p>
                        <div class="message-info">
                            <span class="time">
                                    {{msg.created_at | moment("jYY/jMM/jDD, h:mm A") }} &nbsp
                            </span>
                            <span class="visited" v-if="msg.sender_id === currentUserId">
                                <i class="fa fa-check"></i>
                                <i class="fa fa-check" v-if="msg.is_read"></i>
                            </span>

                        </div>
                        </div>
                    </li>
                

                <!-- <li class="resiver">
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
                </li> -->

            </ul>
        </div>


        <div class="footer-modal-chat">

            <button class="send-message-button" @click.prevent="sendMessage">
                <i class="fa fa-paper-plane"></i>
            </button>
            <input type="text"  v-model="msgToSend" placeholder="پیغامی بگذارید">
        </div>

    </div>


    <!-- end regex Chat Message Modal -->
</template>

<script>
    import {eventBus} from '../../../../router/router.js'
    export default {
        data: function () {
            return {
                openChatBox: false,
                contactInfo:"",
                chatMessages:"",
                currentContactUserId:"",
                currentUserId:"",
                msgToSend:"",
            }

        },
        methods:{
            setUpChat:function(){
                this.handleBackBtnClickOnDevices();

                this.loadChatHistory(this.contactInfo);
            },
            loadChatHistory: function(contact) {
                var self = this;
                // self.isChatMessagesLoaded = true;
                // if (index !== -10) self.isFirstMessageLoading = true;
                // self.selectedIndex = index;
                // this.selectedContact = contact;
                this.currentContactUserId = contact.contact_id;

                axios
                    .post("/get_user_chat_history", {
                        user_id: contact.contact_id
                    })
                    .then(function(response) {
                        self.chatMessages = response.data.messages;
                        self.currentUserId = response.data.current_user_id;
                        // self.scrollToEnd(0);
                    })
                    .catch(function(e) {
                    //
                    });
            },
            sendMessage: function() {
                var self = this;

                axios
                    .post("/messanger/send_message", {
                        sender_id: self.currentUserId,
                        receiver_id: self.currentContactUserId,
                        text: self.msgToSend
                    })
                    .then(function(response) {
                        self.msgToSend = "";
                        self.chatMessages.push(response.data.message);
                        // self.isFirstMessageLoading = false;
                        self.loadChatHistory(self.contactInfo);
                    })
                    .catch(function(e) {
                        //
                    });
            },
            handleBackBtnClickOnDevices:function(){
                var self = this;

                if (window.history.state) {
                    history.pushState(null, null,window.location.pathname);
                }
                
                $(window).on('popstate', function (e) {
                    self.openChatBox = false;

                    if(self.doesUserComeFromAuthenticationPages()){
                        
                        console.log(window.location.pathname);
                        if(window.location.pathname == '/login' || window.location.pathname == '/register'){
                            window.localStorage.removeItem('comeFromAuthentication');
                            window.location.href = "/login";
                        }
                    }
                });
            },
            isDeviceMobile: function () {
                if (
                    navigator.userAgent.match(/Android/i) ||
                    navigator.userAgent.match(/webOS/i) ||
                    navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPad/i) ||
                    navigator.userAgent.match(/iPod/i) ||
                    navigator.userAgent.match(/BlackBerry/i) ||
                    navigator.userAgent.match(/Windows Phone/i)
                ) {
                    return true;
                } else {
                    return false;
                }
            },
            doesUserComeFromAuthenticationPages:function(){
                if(window.localStorage.getItem('comeFromAuthentication')){
                    return true;
                }
                else{
                    return false;
                }
            }
        },
        created: function () {
            eventBus.$on("ChatInfo", $event => {
                this.contactInfo = $event;
                this.chatMessages = "";
                this.openChatBox = true;
                this.setUpChat();
            });
        },
    }
</script>


