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
                                <input type="text" placeholder="جستجوی مخاطبین" v-model="contactNameSearchText"/>
                                <i class="fa fa-search"></i>
                            </div>
                        </form>
                    </div>
                    <div class="contact-items">
                        <ul>
                            <li class="contact-item" v-for="contact in contactList">
                                <a href="" @click.prevent="loadChatHistory(contact)">
                                    <div class="contact-image">
                                        <img v-if="contact.profile_photo" :src="str + '/' + contact.profile_photo" :alt="contact.first_name[0]">
                                        <img v-else :src="defimgitem" :alt="contact.first_name[0]">
                                    </div>
                                    <span class="contact-name">{{contact.first_name + ' ' + contact.last_name}}</span>
                                    <div class="contact-date">
                                        <p class="count-number" v-if="contact.unread_msgs_count != 0">{{contact.unread_msgs_count}}</p>
<!--                                        <p>18:24 PM</p>-->
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
                <div class="message-contact-title" v-if="selectedContact">
                    <div class="message-contact-title-img">
                        <img :src="str + '/' + selectedContact.profile_photo" alt="">

                    </div>
                    <span>{{selectedContact.first_name + ' ' + selectedContact.last_name}}</span>

                </div>
                <div class="chat-page">
                    <ul>
                        <li v-for="msg in chatMessages">
                            <div :class="[msg.sender_id == currentUserId ? 'message-send' : 'message-receive']">
                                    {{msg.text}}
                                <span class="message-chat-date">{{msg.created_at}}
                                    <span class="check-items" v-if="msg.sender_id == currentUserId">
                                        <i class="fa fa-check"></i>
                                            <i class="fa fa-check" v-if="msg.is_read"></i>
                                    </span>
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div class="send-message-form">
                        <form>
                            <div class="message-input">
                                <input type="text" placeholder="پیغامی بگذارید " v-model="msgToSend">
                            </div>
                            <div class="button-wrapper">
                                <button type="submit" @click.prevent="sendMessage()"><i class="fa fa-send"></i></button>
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
    
    import Push from "push.js";

    export default {
        props:[
            'defimgitem',
            'str'
        ],
        data: function () {
            return {
                items: [
                    {
                        message: 'پیام ها',
                        url: 'messages',
                    }
                ],
                contactList:'',
                chatMessages:'',
                selectedContact:'',
                currentUserId:'',
                currentContactUserId:'',
                msgToSend:'',
                isComponentActive:false,
                contactNameSearchText:'',
            }
        },
        methods:{
            init:function(){
                var self = this;
                
                this.loadContactList();
            },
            loadContactList:function(){
                var self = this;
                
                axios.post('/get_contact_list')
                    .then(function(response){
                        self.contactList = response.data.contact_list;
                        self.currentUserId = response.data.user_id;

                        axios.post('/get_last_chat_contact_info_from_session')
                        .then(function(response){
                            var contact = response.data.contact;
                            
                            if(contact != null){
                                self.contactList.unshift(contact);
                                //removing duplicate contacts
                                self.contactList = self.contactList.filter((thing, index, self) =>
                                  index === self.findIndex((t) => (
                                    t.contact_id === thing.contact_id
                                    ))
                                );
                                self.loadChatHistory(contact);
                            }
                            
                            
                        })
                        .catch(function(e){
                            alert('error');
                        });
                        
                        
                })
                .catch(function(e){
                    //
                });  
            },
            loadChatHistory:function(contact){
                var self = this;
                
                this.selectedContact = contact;
                this.currentContactUserId = contact.contact_id;
                
                axios.post('/get_user_chat_history',{
                    user_id:contact.contact_id
                })
                .then(function(response){
                    self.chatMessages = response.data.messages;
                    self.currentUserId = response.data.current_user_id;
                })
                .catch(function(e){
                    //
                });
            },
            sendMessage:function(){
                var self = this;
                
                axios.post('/messanger/send_message',{
                    sender_id:self.currentUserId,
                    receiver_id:self.currentContactUserId,
                    text:self.msgToSend,
                })
                .then(function(response){
                    self.msgToSend = '';
                    self.loadChatHistory(self.selectedContact);
                    self.loadContactList();
                })
                .catch(function(e){
                    
                });
            },
            keepChatUpdated:function(contact){
                var self = this;
                setTimeout(function(){
                    self.loadChatHistory(contact);
                },20000);
            },
            pushNotification:function(header,body,link){
                Push.create(header, {
                    body: body,
                    //icon: str + '/' ,
                    timeout: 4000,
                    link: link,
                    onClick: function () {
                        window.focus();
                        this.close();
                    }
                });
            },
        },
        watch:{            
            contactNameSearchText:function(){
                  var self = this;
                if(self.contactNameSearchText != ''){
                    
                  axios.post('/get_contact_list')
                    .then(function(response){
                        self.contactList = response.data.contact_list;
                        self.currentUserId = response.data.user_id;
                        axios.post('/get_last_chat_contact_info_from_session')
                            .then(function(response){
                                var contact = response.data.contact;
                                self.contactList.unshift(contact);
                                //removing duplicate contacts
                                self.contactList = self.contactList.filter((thing, index, self) =>
                                  index === self.findIndex((t) => (
                                    t.contact_id === thing.contact_id
                                    ))
                                );
                                
                                var text = self.contactNameSearchText.split(' ');
                                self.contactList = self.contactList.filter(function(contact){
                                    return text.every(function(el){
                                        if(contact.first_name.indexOf(el) > -1 ||
                                            contact.last_name.indexOf(el) > -1){
                                            return true;
                                        }
                                        else return false;
                                    });
                                });
                            })
                            .catch(function(e){
                                alert('error');
                            });
                    })
                    .catch(function(e){
                        //
                    }); 
                }
                else{
                    self.loadContactList();
                }
                     
                 
            }
        },
        mounted:function () {
            this.init();
            eventBus.$emit('subHeader', this.items);
        },
        created:function(){
            var self = this;
            
            Echo.private('testChannel.' + userId)
                .listen('newMessage', (e) => {
                    var senderId = e.new_message.sender_id;
                    //update contact list
                    self.loadContactList();
                
                    if(self.currentContactUserId){
                        if(self.currentContactUserId == senderId){
                            
                            self.chatMessages.push(e.new_message);
                            
                            if(self.isComponentActive == false){
                                self.pushNotification("پیام جدید",e.new_message.text,'/dashboard/#/messages');
                            }
                        }
                    }
                    else{
                        this.pushNotification("پیام جدید",e.new_message.text,'/dashboard/#/messages');
                    }
                    
            });  
        },
        activated() {
            this.isComponentActive = true;
        },
        deactivated() {
            this.isComponentActive = false;
        },
    }
</script>

