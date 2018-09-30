<style scoped >


    .col-xs-1,
    .col-xs-2,
    .col-xs-3,
    .col-xs-4,
    .col-xs-5,
    .col-xs-6,
    .col-xs-7,
    .col-xs-8,
    .col-xs-9,
    .col-xs-10,
    .col-xs-11,
    .col-xs-12,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12{
        float: right;
    }

    /*start main content style */
    .image-content-post {
        width: 30%;
        float: right;
        position: relative;
    }

    .image-content-post img {
        border-radius: 3px;
        transition: 200ms;
        filter: grayscale(30%);
    }

    .image-content-post a:hover img {
        filter: grayscale(0);
        transition: 200ms;
    }

    .image-content-post i {
        display: none;
        position: absolute;
        top: 46%;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 35px;
        color: #fff;
        z-index: 1;

    }

    .image-content-post a:hover i {
        display: block;
    }

    .content-item {
        overflow: hidden;
        text-align: right;
        direction: rtl;
    }

    .main-content {
        padding: 60px 15px;
    }

    .header-lable {
        display: block;
        margin: 13px;
        padding: 0;
    }

    /*end main content style */
    /*custom cods*/
    .green-bot {
        margin: 15px 0;
        display: inline-block;
        background: #28a745;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }
    .green-bot:focus,.gray-bot:focus {
        color: #fff;
    }
    .default_btn{
        margin: 15px 0;
        display: inline-block;
        background: #eee;
        color: #444;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }
    .gray-bot {
        margin: 15px 0;
        display: inline-block;
        background: #85888d;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }
    .default_btn:hover {
        color: #444;
        background: #ddd;
        transition: 300ms;
    }
    .green-bot:hover {
        color: #fff;
        background: #00d614;
        transition: 300ms;

    }
    .gray-bot:hover {
        color: #fff;
        background: #72757a;
        transition: 300ms;

    }

    .botton-inco {
        margin: 15px 7px;
        display: inline-block;
        color: #313a43;
        padding: 8px 35px;
        border-radius: 3px;
        text-align: center;
    }

    .botton-inco:hover {
        color: #fff;
    }

    .font-big {
        font-size: 23px;
        position: relative;
        top: 3px;
    }

    .little_header {
        width: 80px;
    }

    .little-main-header {
        right: 80px;
    }

    .background_mob_sec {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: -1;
        display: none;
    }

    .kind_user, .kind_activity {
        margin: 7px 0;
        border-bottom: 1px solid #eff3f6;
        padding-bottom: 10px;
    }

    .kind_user > div, .kind_activity > div {
        float: right;
        overflow: hidden;
        padding: 10px;
        font-size: 15px;
    }

    .kind_user input, .kind_activity input {
        cursor: pointer;
        width: 23px;
        height: 23px;
        float: right;
        position: absolute;
        top: 2px;
        right: 65px;
        opacity: 0;
    }

    .kind_user input:checked + i, .kind_activity input:checked + i {
        color: #28a745;
        border: none;
        padding: 4px;
    }

    .kind_user i, .kind_activity i {
        background: none;
        width: 23px;
        height: 23px;
        display: block;
        position: absolute;
        top: 4px;
        right: 65px;
        z-index: -1;
        color: #808c9c;
        border-radius: 50%;
        padding: 2px;
        font-size: 14px;
        border: 2px solid;
    }

    .user-form {
        padding: 0;
    }
    .alert-message{
        padding: 20px;

        text-align: right;
    }
    .user-form input[type="text"] {
        width: 100%;
        border: 1px solid #e9e9e9;
        padding: 15px 20px;
        margin: 7px auto;
        border-radius: 4px;
        transition: 300ms;
    }

    .user-form input[type="button"] {
        width: 100%;

    }

    .user-form input[type="text"]:focus {
        border: 1px solid #28a745;
        transition: 500ms;
    }

    .img-profile {
        float: right;
    }

    #icon-pro {
        width: 150px;
        height: 150px;
        display: inline-block;
    }

    #icon-pro svg {
        height: 150px;
    }

    .main-content-nav {
        margin: 20px auto;

        width: 80%;

        float: none;
    }
    .main-content-nav ul {
        text-align: center;
        margin-right: -25px;
    }

    .main-content-nav li {
        padding: 14px 50px;
        position: relative;
        background: #fbfbfb;
        font-size: 18px;
    }
    .main-content-nav li a{
        color: #999;
    }
    .main-content-nav li.active a{
        color: #333;
    }
    .main-content-nav li:after {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-right: 20px solid #fff;
        border-top: 26px solid transparent;
        border-bottom: 20px solid transparent;
    }

    .main-content-nav li:before {
        content: "";
        position: absolute;
        left: -20px;
        bottom: 0;
        width: 0;
        height: 0;
        border-right: 20px solid #fbfbfb;
        border-top: 26px solid transparent;
        border-bottom: 20px solid transparent;
        z-index: 1;
    }
    .main-content-nav li.active {
        background: #f7f7f7;
        color: #333;
    }
    .main-content-nav li.active:before {
        border-right-color: #f7f7f7;
    }
    #main .contents{
        text-align: center;

        background: #f7f7f7;

        width: 80%;

        margin: 0 auto;

        float: none;

        overflow: hidden;

        border-radius: 3px;

        line-height: 1.618;

        direction: rtl;
    }
    #main .contents p{
        text-align: right;
    }
    #main .contents h2{
        margin: 20px auto;
    }

    #main .continue_but{
        float: right;
    }

    #main .main_buttons{
        float: right;

    }

    #step1 .main_buttons{
        text-align: right;
    }
    /*part 2*/
    .main-content-texts{
        background: #fff;

        border-radius: 3px;
    }
    .header-contents{
        background: #fff;
        margin: 15px auto;
        border-radius: 3px;
        padding: 10px;
        text-align: left;
    }

    .header-contents .title-contents{
        text-align: right;
    }

    .contents h2{
        font-size: 22px;
    }
    .description-text{
        font-size: 12px;
        padding: 5px 0;
        border-top:1px solid #ddd;

    }
    .services td {
        color: #00d613;
    }

    .pre-pay td {
        color: #e41c38;
    }

    @media screen and (max-width: 992px) {
        .right-header.desktop-header {
            display: none;
        }

        .right-header.mobile-header {
            display: block;
            right: -300px;
        }

        .main-header, .little-main-header {
            right: 0 !important;
        }

        #main, #main.little-main {
            margin-right: 0 !important;
        }

        .post-contents-table {
            width: 100%;
        }

        .copy-right {
            display: none;
        }

        .clouse_menu {
            display: none;
        }

        .clouse_menu_mob {
            display: block;
        }

        .show-header button {
            display: block;
        }

        .kind_user > div, .kind_activity > div {
            float: none;

        }

        .img-profile .submit {
            position: relative;
            width: 100%;
            margin: 25px auto;

        }

        .img-profile .submit label {
            width: 40%;
            padding: 12px 0;
        }

        .img-profile {
            float: none;
        }
    }

    @media screen and (max-width: 768px) {
        .image-content-post, .contents-post {
            width: 100%;
            float: none;
            margin: 10px 0;
            padding: 0;
        }

        .name-header-profile {
            display: none;
        }

        .profile-menu-header {
            padding: 7px;
            padding-left: 36px;
        }
    }

    @media screen and (max-width: 555px) {
        .content-header {
            display: none;
        }

    }

    @media screen and (max-width: 345px) {
        .sub-header a {
            font-size: 10px;

        }

        .sub-header {

            bottom: -44px;

        }
    }
</style>

<template>
    <section  class="main-content col-xs-12">
        <!--part 1-->
        <div id="step1">
            <div class="contents col-xs-12">
                <div class="content-show">
                    <div class="buttons">
                        <div class="main_buttons col-xs-12 col-sm-8 col-md-9">
                            <a href="#" class="default_btn" @click.prevent="goToNextPage()">صفحه بعد</a>
                            <a href="#" class="default_btn" @click.prevent="goToPrePage()">صفحه قبل</a>
                        </div>
                        <div class="continue_but col-xs-12 col-sm-4 col-md-3">
                            <a href="#" @click.prevent="confirmContract" class="green-bot">تایید قرارداد</a>
                        </div>
                    </div>
                    <h2>عنوان قرارداد</h2>
                    <p id="step1S1" v-if="pageStep == 1">
                        شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند
                        خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده
                        سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خرasdsafsdfdsvdsvsdvdاهد شد. شرح: این مبلغ صرفا جهت انجام به
                        موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به
                        فروشنده پرداخت خواهد شد.
                    </p>
                    <p id="step1S2" v-if="pageStep == 2">
                        شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند
                        خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده
                        سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به فروشنده پرداخت
                        خواهد شد. شرح: این مبلغ صرفا جهت انجام به موقع آماده سازی محصولات از فروشنده دریافت شده و پس از
                        پایان فرایند خرید و تایید نهایی خریدار به فروشنده پرداخت خواهد شد. شرح: این مبلغ صرفا جهت انجام به
                        موقع آماده سازی محصولات از فروشنده دریافت شده و پس از پایان فرایند خرید و تایید نهایی خریدار به
                        فروشنده پرداخت خواهد شد.
                    </p>
                </div>
            </div>
        </div>
    </section>


</template>

<script>
    import {eventBus} from '../../../../app';
    export default {
        data(){
            return{
                pageStep:1,
                errors:'',
                popUpMsg:'',
                submiting:false,
                contractConfirmed:false,
            }
        },
        methods:{
            init:function(){
                var self = this;

                axios.post('/user/profile_info')
                    .then(function(response){
                        self.contractConfirmed = response.data.user_info.contract_confirmed;
                    });
            },
            confirmContract:function(){
                var self = this;

                if(this.contractConfirmed == false){
                    axios.post('/confirm_initial_contract')
                        .then(function(response){
                            if(response.status == 200){
                                self.popUpMsg = 'تایید قرار داد با موفقیت انجام شد.';
                                eventBus.$emit('submitSuccess',self.popUpMsg);

                                $('#myModal').modal('show');
                            }
                            else if(response.status == 500){
                                alert('failed');
                            }
                        });
                }
                else{
                    this.popUpMsg = 'شما قبلا این قرار داد را پذیرفته اید.';
                    eventBus.$emit('submitSuccess',self.popUpMsg);
                    $('#myModal').modal('show');
                }
            },
            goToNextPage: function(){
                if (this.pageStep < 3){
                    this.pageStep++;
                }
            },
            goToPrePage: function(){
                if (this.pageStep < 1){
                    this.pageStep = 1;
                }else if (this.pageStep > 1){
                    this.pageStep--;
                }
            },
        },
        mounted(){
            this.init();
        },
    }





</script>

