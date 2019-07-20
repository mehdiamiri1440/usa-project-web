<style scoped>

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1.1;
        font-family: IRANSans, sans-serif;
        font-size: 14px;

        direction: rtl;

    }
    p{
        color: #333;
    }
    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    img {
        width: 100%;
    }

    a, a:hover, a:visited, a:focus, a:active {
        text-decoration: none;
        transition: 300ms;
    }

    th, td {
        padding: 7px;
        text-align: right;
    }

    h1, h2, h3 {
        color: #565657;
    }
    label{
        font-size: 12px;
        padding: 6px 0;
        display: block;
    }
    input[type="text"],input[type="password"],input[type="email"]{
        border: 2px solid #818d9b;
        border-radius: 5px;
        width: 100%;
        padding: 5px 15px;
        line-height: 1.1;
        direction: rtl;
    }
    select{
        width: 100%;

        padding: 0 10px;

        border-radius: 3px;

        border: 1px solid;
        margin: 7px auto 0;
    }
    .input-forms > div{
        margin: 3px auto;
        float: right;
        height: 50px;
    }
    .input-forms .radio_btn{
        height: 24px;
    }
    .error_msg{
        color: #ff0000;
        font-size: 11px;
        display: block;
        text-align: center;
        padding: 2px;
    }
    #step1 .content_section, #step2 .content_section {
        padding: 5px 66px;
        overflow: hidden;
        padding-top: 40px;
    }
    #step4 .header_list,#step3 .header_list{
        margin-bottom: 5px;
    }

    .ui-corner-all {
        margin: 7px 0;

        padding-bottom: 10px;

    }
    .ui-corner-all input{
        cursor: pointer;
        width: 23px;
        height: 23px;
        position: absolute !important;
        top: 2px;
        opacity: 0;
        left: 15px;
    }

    .ui-corner-all  input[type="checkbox"]:checked + .fa {
        color: #28a745;
        background: red;
        width: 100px;
        height: 100px;
    }
    input[type="text"], input[type="password"], input[type="email"] {
        -webkit-appearance: none;
        border: 1px solid #818d9b;
        border-radius: 5px;
        width: 100%;
        padding: 8px 15px;
    }
    .ui-corner-all i {
        background: none;
        width: 23px;
        height: 23px;
        display: block;
        position: absolute;
        top: 4px;
        left: 15px;
        color: #808c9c;
        border: 2px solid;
        border-radius: 50%;
        padding: 3px 2px;
        font-size: 14px;
    }
    .radio-wrapper{
        margin-bottom: 12px;
    }
    .radio-wrapper input {
        cursor: pointer;
        width: 23px;
        height: 23px;
        float: right;
        position: absolute;
        top: -5px;
        right: 65px;
        opacity: 0;
        z-index: 1;
    }

    .radio-wrapper input:checked + i, .radio-wrapper input:checked + i {
        background: #28a745;
        color: #fff;
        padding: 4px;
    }
    .radio-wrapper input {
        cursor: pointer;
        width: 23px;
        height: 23px;
        float: right;
        position: absolute;
        top: -5px;
        right: 65px;
        opacity: 0;
        z-index: 1;
    }
    .radio-wrapper i, .radio-wrapper i {
        background: none;
        width: 23px;
        height: 23px;
        display: block;
        position: absolute;
        top: -5px;
        right: 65px;
        color: #808c9c;
        border-radius: 50%;
        padding: 3px 2px;
        font-size: 14px;
    }

    .bouttons {

        margin: 60px auto;

    }
    .bg.register{

        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        position: absolute;
        overflow: hidden;
    }
    #main{
        width: 680px;
        margin: 160px auto 110px;
        direction: rtl;

    }
    .green_but{
        width: 100%;

        background: #28a745;

        border: none;

        border-radius: 3px;

        color: #fff;

        padding: 8px;

        margin: 5px auto;
    }
    .danger_border_but{
        width: 100%;
        border-radius: 3px;
        padding: 12px;
        background: #030947;
        color: #fff;
        margin: 5px auto;
    }
    .sub-des{
        color: #909aa6;
        font-size: 9px;
        margin: 8px 0 50px;
        display: inline-block;
    }

    .input_contents{
        position: relative;
    }
    input.pad{
        padding: 13px 47px 9px 15px;
    }

    .forget_pass{
        color: #28a745;
        float: left;
        font-size: 12px;

        border-bottom: 1px solid;

        padding-bottom: 5px;

        margin: 14px 0;
    }
    .after_icon:after{
        position: absolute;
        content: " ";
        bottom: 9px;
        right: 23px;
        font-family: "fontawesome",sans-serif;
        font-size: 22px;
        color: #818d9b;
        border-left: 1px solid;
        padding-left: 11px;
    }
    .after_icon.numbers:after{
        content: "\f098";
    }
    .after_icon.unlock-alt:after{
        content: "\f13e";
    }
    .after_icon.search-icon:after{
        content: "\f002";
    }
    #input-user-name .after_icon:after{
        bottom: 19px;
    }
    .left-section {
        padding: 0;
        height: 100%;
        position: relative;
        background: #fff;
    }

    .main-form {
        min-width: 250px;
        margin: 0 auto;
        height: 550px;
        overflow: hidden;
        border-radius: 5px;
        box-shadow: 0 0 44px rgba(0,0,0,0.6);
    }

    .left-section h1 {
        font-size: 24px;
        text-align: center;
        padding: 20px ;
    }

    ul.header_list {
        text-align: center;
        width: 100%;
        border-top: 1px solid #e6e6e6;
        background: #ededed;
        font-size: 13px;
        color: #818d9b;
    }
    ul.header_list a{
        font-size: 13px;
        color: #818d9b;
    }
    ul.header_list li {
        padding: 10px 12px;
    }
    ul.header_list li.active {
        color: #313a43;
        border-bottom:2px solid #28a745;
    }
    .content_section{
        padding: 5px 25px;
    }

    .dots-step{
        position: absolute;
        left: calc(50% - 50px);
        bottom: 8px;
        direction: rtl;
    }

    .dots-step span {
        width: 12px;
        height: 12px;
        border: 2px solid #818d9b;
        border-radius: 50%;
        display: inline-block;
        margin: 5px;
        position: relative;

    }
    .dots-step span.active{
        background: #28a745;

    }

    .dots-step span:after{
        position: absolute;
        content: " ";
        top: 3px;
        background: #a0a9b3;
        right: 10px;
        color: #818d9b;
        width: 15px;
        height: 3px;
    }

    .dots-step span:last-of-type:after{
        display: none;
    }
    .dropdown {
        position: absolute;
        top:50%;
        transform: translateY(-50%);
    }

    a {
        color: #fff;
    }

    .dropdown dd,
    .dropdown dt {
        margin: 0;
        padding: 0;
    }

    .dropdown ul {
        margin: -1px 0 0 0;
    }

    .dropdown dd {
        position: relative;
    }

    .dropdown a,
    .dropdown a:visited {
        color: #fff;
        text-decoration: none;
        outline: none;
        font-size: 12px;
    }

    .dropdown dt a {
        background-color: #4F6877;
        display: block;
        padding: 8px 20px 5px 10px;
        min-height: 25px;
        line-height: 24px;
        overflow: hidden;
        border: 0;
        width: 272px;
    }

    .dropdown dt a span,
    .multiSel span {
        cursor: pointer;
        display: inline-block;
        padding: 0 3px 2px 0;
    }

    .dropdown dd ul {
        background-color: #4F6877;
        border: 0;
        color: #fff;
        display: none;
        left: 0px;
        padding: 2px 15px 2px 5px;
        position: absolute;
        top: 2px;
        width: 280px;
        list-style: none;
        height: 100px;
        overflow: auto;
    }

    .dropdown span.value {
        display: none;
    }

    .dropdown dd ul li a {
        padding: 5px;
        display: block;
    }

    .dropdown dd ul li a:hover {
        background-color: #fff;
    }




    button {
        background-color: #6BBE92;
        width: 302px;
        border: 0;
        padding: 10px 0;
        margin: 5px 0;
        text-align: center;
        color: #fff;
        font-weight: bold;
    }
    @media screen and (max-width: 996px) {
        body{
            line-height: 1.1em;
        }
        .content_section {
            padding: 15px !important; ;
        }
        .dots-step{

        }
    }
    @media screen and (max-width: 768px) {
        #main {
            margin: 160px auto 80px;
            left: 15px;
            transform: inherit;
            width: calc(100% - 30px);
        }
    }


    @media screen and (max-width: 447px) {
        .content_section {
            padding: 0 15px !important;
        }
        .dots-step[data-v-5abd7116] {
            bottom: -2px;
        }
    }



</style>
<template>
<div>
    <!-- Modal -->
   <!-- <div class="container">
        <div class="modal fade" id="myModal" tabindex="-1" ref="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="main_popup_content">
                        <a href="#" data-dismiss="modal" > <i class="fa fa-close"></i></a>
                        <p class="main_par">
                            {{popUpMsg}}
                        </p>
                        <button class=" green-bot " data-dismiss="modal">
                            متوجه شدم
                        </button>
                    </div>
                </div>&lt;!&ndash; /.modal-content &ndash;&gt;
            </div>&lt;!&ndash; /.modal-dialog &ndash;&gt;
        </div>
    </div>-->
    <!-- /.modal -->
    <div class="bg register"> </div>


    <main id="main">
        <div class="main-form">
            <div class="left-section col-sm-8">
                <h1>ثبت نام در سامانه </h1>
                <div id="step1" v-show="currentStep == 1">
                    <template>
                        <ul class="header_list list-inline">
                            <li class="active">ثبت موبایل</li>
                            <li>تایید موبایل</li>
                            <li>ثبت مشخصات فردی</li>
                            <li> ثبت نهایی</li>
                        </ul>
                        <div class="content_section">
                            <label class="col-xs-12">
                                لطفا شماره موبایل خود را وارد کنید
                            </label>
                            <div class="col-xs-12 input_contents">
                                <span class="after_icon numbers"></span>
                                <input class="pad number" type="text" name="name" v-model="step1.phone"
                                       placeholder="شماره موبایل">
                            </div>
                            <span class="sub-des col-xs-12">
                               پس از وارد کردن شماره موبایل ما یک کد برای شما ارسال میکنیم تا از صحت شماره وارد شده اطمینان حاصل کنیم
                           </span>
                            <span v-if="errors.phone" class="error_msg">
                                    {{errors.phone[0]}}
                            </span>
                            <div class="col-xs-12">
                                <button class="green_but" type="button"  @click.prevent="send_verification_code" :disabled="step1.sendCode == false">
                                    ارسال پیام کوتاه
                                </button>
                            </div>

                        </div>

                        <div class="dots-step">
                            <span class="dots active"></span>
                            <span class="dots"></span>
                            <span class="dots"></span>
                            <span class="dots"></span>
                        </div>
                    </template>
                </div>
                <div id="step2" v-show="currentStep == 2">
                    <template>
                        <ul class="header_list list-inline">
                            <li class="back_step" @click="goToStep(1)">ثبت موبایل</li>
                            <li class="active">تایید موبایل</li>
                            <li>ثبت مشخصات فردی</li>
                            <li> ثبت نهایی</li>
                        </ul>
                        <div class="content_section">
                            <label class="col-xs-12">
                                کد ارسال شده به تلفن همراهتان را وارد کنید.
                            </label>
                            <div class="col-xs-12 input_contents">
                                <span class="after_icon search-icon"></span>
                                <input class="pad " type="text" name="name" v-model="step2.verification_code"
                                       placeholder="کد تایید">
                            </div>
                            <span v-if="errors.verification_code" class="error_msg">
                                    {{errors.verification_code[0]}}
                            </span>

                            <div class="bouttons col-xs-12">
                                <button class=" green_but" type="button" @click="verify_code"> بررسی کد</button>
                                <div v-if="step2.showTimer">
                                    <button class="danger_border_but" type="button"         @click.prevent="goToStep(1)" :disabled="step2.reSendCode == false" :value="step2.timeCounterDown">
                                        {{step2.timeCounterDown}} ثانیه تا ارسال مجدد
                                    </button>
                                </div>
                                <div v-else>
                                    <button class="danger_border_but" type="button" @click.prevent="goToStep(1)" :disabled="step2.reSendCode == false">
                                        کد را دریافت نکردم
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="dots-step">
                            <span class="dots active back_step" @click="goToStep(1)"></span>
                            <span class="dots active"></span>
                            <span class="dots"></span>
                            <span class="dots"></span>
                        </div>
                    </template>
                </div>
                <div id="step3" v-show="currentStep == 3">
                    <template>
                        <ul class="header_list list-inline">
                            <li class="back_step" @click="goToStep(1)">ثبت موبایل</li>
                            <li class="back_step" @click="goToStep(2)">تایید موبایل</li>
                            <li class="active">ثبت مشخصات فردی</li>
                            <li> ثبت نهایی</li>
                        </ul>
                        <div class="input-forms content_section">
                            <label class="col-xs-12">
                                جنسیت
                            </label>

                            <div class="col-xs-6 radio_btn">
                                <div class="radio-wrapper"><input v-model="step3.sex" type="radio" name="sex"
                                                                  value="خانم">خانم
                                    <i class="fa fa-check"></i>
                                </div>
                            </div>
                            <div class="col-xs-6 radio_btn">
                                <div class="radio-wrapper"><input v-model="step3.sex" type="radio" sname="sex"
                                                                  value="آقا">آقا
                                    <i class="fa fa-check"></i>
                                </div>
                            </div>
                            <label class="col-xs-12">
                                اطلاعات شخصی خود را وارد کنید. </label>
                            <div class="col-xs-6">
                                <input type="text" name="city" v-model="step3.first_name" placeholder="نام">
                                <span v-if="errors.first_name" class="error_msg">
                                    {{errors.first_name[0]}}
                                </span>
                            </div>
                            <div class="col-xs-6">
                                <input type="text" name="city" v-model="step3.last_name" placeholder="نام خانوادگی">
                                <span v-if="errors.last_name" class="error_msg">
                                    {{errors.last_name[0]}}
                                </span>
                            </div>
                            <div id="input-user-name" class="col-xs-12  input_contents">
                                <span class="after_icon search-icon"></span>
                                <input class="pad" type="text" name="city" v-model="step3.user_name"
                                       placeholder="نام کاربری به انگلیسی">
                                <span v-if="errors.user_name[0]" class="error_msg">
                                    {{errors.user_name[0]}}
                                </span>
                                <span v-else class="error_msg">
                                    بدون فاصله
                                </span>
                            </div>
<!--
                            <div class="col-xs-6">
                                <input type="text" name="city" v-model="step3.national_code" placeholder="کد ملی(اختیاری)">
                                <span v-if="errors.national_code" class="error_msg">
                                    {{errors.national_code[0]}}
                                </span>
                            </div>
-->
                            <div class="col-xs-6">
                                <!--<input type="text" name="city" v-model="step3.province" placeholder="استان">-->
                                <select  v-on:change="setProvinceName($event)">
                                    <option selected disabled>استان را انتخاب کنید</option>
                                    <option
                                            v-for="province in step3.provinceList"
                                            v-bind:value="province.province_name"
                                    >
                                        {{province.province_name}}
                                    </option>
                                </select>
                                <span v-if="errors.province" class="error_msg">
                                    {{errors.province[0]}}
                                </span>
                            </div>
                            <div class="col-xs-6">
                                <!--<input type="text" name="city" v-model="step3.city" placeholder="شهر">-->
                                <select v-on:change="setCityName($event)">
                                    <option selected disabled>شهر را انتخاب کنید</option>
                                    <option v-for="city in step3.cityList"
                                            v-bind:value="city.city_name"
                                    >{{city.city_name}}</option>
                                </select>
                                <span v-if="errors.city" class="error_msg">
                                    {{errors.city[0]}}
                                </span>
                            </div>
                            <div class="col-xs-6">
                                <input type="password" name="city" v-model="step3.password" placeholder="رمز عبور">
                                <span v-if="errors.password" class="error_msg">
                                    {{errors.password[0]}}
                                </span>
                            </div>
                            <div class="col-xs-6">
                                <input type="password" name="city" v-model="step3.re_password" placeholder="تکرار رمز عبور">
                                <span v-if="errors.password_conf" class="error_msg">
                                    {{errors.password_conf[0]}}
                                </span>
                            </div>
                            <div class="buttons col-xs-12">
                                <button  class="green_but" type="button" @click="register_details">ثبت مشخصات</button>
                            </div>
                        </div>
                        <div class="dots-step">
                            <span class="dots active back_step" @click="goToStep(1)"></span>
                            <span class="dots active back_step" @click="goToStep(2)"></span>
                            <span class="dots active"></span>
                            <span class="dots"></span>
                        </div>
                    </template>
                </div>
                <div id="step4" v-show="currentStep == 4">
                    <template>
                        <ul class="header_list list-inline">
                            <li  class="back_step" @click="goToStep(1)">ثبت موبایل</li>
                            <li  class="back_step" @click="goToStep(2)">تایید موبایل</li>
                            <li  class="back_step" @click="goToStep(3)">ثبت مشخصات فردی</li>
                            <li class="active"> ثبت نهایی</li>
                        </ul>
                        <div class="content_section ">
                            <label class="col-xs-12">
                                نوع فعالیت
                            </label>
                            <div class="col-xs-6">
                                <div class="radio-wrapper"><input v-model="step4.activity_type" type="radio" name="kind"
                                                                  value="1">خریدار
                                    <i class="fa fa-check"></i>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="radio-wrapper"><input v-model="step4.activity_type" type="radio" name="kind"
                                                                  value="0">فروشنده
                                    <i class="fa fa-check"></i>
                                </div>
                            </div>

                            <span v-if="errors.activity_type" class="error_msg">
                                    {{errors.activity_type[0]}}
                            </span>

                            <div class="col-xs-12">
                                <label>
                                    حوزه فعالیت خود را مشخص کنید. </label>
                                <select v-on:change="setCategoryId($event)">
                                    <option disabled selected>
                                        انتخاب کنید
                                    </option>
                                    <option
                                            v-for="category in step4.categoryList"
                                            v-bind:value="category.id"
                                    >
                                        {{category.category_name }}
                                    </option>
                                </select>
                                <span v-if="errors.category_id" class="error_msg">
                                    {{errors.category_id[0]}}
                                </span>

<!--
                                <div class="rules col-xs-12">
                                    با <span class="roules-check-inside">قوانین و شرایط</span>
                                    موافقم<input type="checkbox" v-model='step4.rules' value="1">
                                    <i class="fa fa-check"></i>
                                </div>
-->
                                <br/>
                                <div class="buttons">
                                    <button class="green_but"  type="button" @click="submitForm">ثبت نهایی</button>
                                </div>
                                <br/>
                                <p class="text-center">
                                    با تشکر ازحُسن انتخاب شما
                                </p>
                            </div>

                        </div>

                        <div class="dots-step">
                            <span class="dots active back_step" @click="goToStep(1)"></span>
                            <span class="dots active back_step" @click="goToStep(2)"></span>
                            <span class="dots active back_step" @click="goToStep(3)"></span>
                            <span class="dots active"></span>
                        </div>
                    </template>
                </div>

            </div>
            <RightSection></RightSection>
        </div>
    </main>
</div>

</template>

<script>
    import {eventBus} from "../../router/dashboard_router";
    import RightSection from './RightSection.vue'
    export default {
        data:function(){
           return{
               currentStep: 1,
               step1: {
                   phone: '',
                   sendCode:true,
               },
               step2: {
                   verification_code:'',
                   reSendCode:false,
                   timeCounterDown:120,
                   showTimer:false,
                   now:null,
               },
               step3:{
                   first_name:'',
                   last_name:'',
                   password:'',
                   re_password:'',
                   user_name:'',
                   sex:'آقا',
                   province:'',
                   city:'',
                   national_code:'',
                   provinceList:'',
                   cityList:'',
               },
               step4:{
                   activity_type:'',
                   rules:0,
                   categoryList:'',
                   categoryId:'',
               },
               errors:{
                   first_name:[],
                   last_name:[],
                   province:[],
                   city:[],
                   user_name:[],
                   national_code:[],
                   password:[],
                   password_conf:[],
                   sex:[],
                   verification_code:[],
                   phone:[],
                   category_id:[],
               },
               errorFlag:false,
               userNameUnique:true,
               nationalCodeUnique:true,
               popUpMsg:'شیر کلفت',
           }
        },
        components:{
            RightSection
        },
        methods:{
            stopLoader: function () {
                eventBus.$emit('isLoading', false);
            },
            goToStep: function(step){
                this.currentStep = step;
            },
            send_verification_code:function(){
                this.step2.reSendCode = false;
                this.step1.sendCode = false;

                var self = this;

                this.step2.now = new Date().getTime();
                this.step2.showTimer = true;
                this.step2.timeCounterDown = 119;
                axios.post("/send_verification_code",{
                    phone : this.toLatinNumbers(this.step1.phone)
                })
                .then(function(response){
                    self.goToStep(2);
                    self.step1.sendCode = true;

                    self.step2.verification_code = '';
                    self.errors.verification_code = [];

                    setTimeout(function(){
                        self.step2.reSendCode = true;
                    },120000);
                })
                .catch(function(err){
                    self.errors.phone = err.response.data.errors.phone;
                    self.step1.sendCode = true;
                });
            },
            verify_code:function(){
                var self = this;

                axios.post('/verify_code',{
                    verification_code:this.toLatinNumbers(this.step2.verification_code)
                }).then(function (response){

                    if (response.data.status == true){
                        self.goToStep(3);
                        self.getProvinceList();
                    }else if(response.data.status == false){
                        self.goToStep(2);
                        self.errors.verification_code = [];
                        self.errors.verification_code.push('کد وارد شده درست نیست');
                    }
                }).catch(function(error){
                    self.goToStep(2);
                    self.errors.verification_code = [];
                    self.errors.verification_code.push('وارد کردن کد الزامی است.');
                });

            },
            register_details:function(){
                this.errorFlag = false;

                this.checkStep3();

                if(this.errorFlag == false && this.userNameUnique == true && this.nationalCodeUnique == true){
                    this.goToStep(4);
                    this.getCategory();
                }
            },
            submitForm:function(){
                var self = this;

                this.errorFlag = false;

                this.checkStep4();

//                if(this.step4.rules != 1){
//                    this.popUpMsg = 'پذیرش قوانین ثبت آگهی الزامی است.';
//
//                    $('#myModal').modal('show');
//                    return ;
//                }

                var object = {
                    phone:this.toLatinNumbers(this.step1.phone),
                    first_name:this.step3.first_name,
                    last_name:this.step3.last_name,
                    password:this.step3.password,
                    user_name:this.step3.user_name,
                    sex:this.step3.sex,
                    province:this.step3.province,
                    city:this.step3.city,
                    activity_type:this.step4.activity_type,
                    national_code:this.toLatinNumbers(this.step3.national_code),
                    category_id:this.step4.categoryId
                };

                if(this.errorFlag == false){
                    axios.post('api/v1/users',object)
                        .then(function (response){
                            if(response.status == 201){

                                self.popUpMsg = 'ثبت نام با موفقیت انجام شد.در حال انتقال به صفحه ی ورود...';
                                eventBus.$emit('submitSuccess', self.popUpMsg);
                                $('#myModal').modal('show');

                                setTimeout(function(){
                                    window.location.href = '/login';
                                },3000);
                            }
                        })
                        .catch(function(err){

                        });
                }
            },
            setCategoryId:function(e){
                e.preventDefault();

                this.step4.categoryId = $(e.target).val();
            },
            checkStep3:function(){
                this.userNameValidator(this.step3.user_name);
                this.firstNameValidator(this.step3.first_name);
                this.lastNameValidator(this.step3.last_name);
                this.provinceValidator(this.step3.province);
                this.cityValidator(this.step3.city);
                this.nationalCodeValidator(this.step3.national_code);
                this.passwordValidator(this.step3.password,this.step3.re_password);
                this.sexValidator(this.step3.sex);
            },
            checkStep4:function(){
                this.activityTypeValidator(this.step4.activity_type);
                this.categoryIdValidator(this.step4.categoryId);
            },
            firstNameValidator:function(name){
                this.errors.first_name = [];

                if(name === ''){
                    this.errors.first_name.push('فیلد الزامی است');
                    this.errorFlag = true;
                }
                if( ! this.validateRegx(name,/^[\u0600-\u06FF\s]+$/)){
                    this.errors.first_name.push('فیلد باید فارسی باشد');
                    this.errorFlag = true;
                }
            },
            lastNameValidator:function(name){
                this.errors.last_name = [];

                if(name === ''){
                    this.errors.last_name.push('فیلد الزامی است');
                    this.errorFlag = true;
                }
                if( ! this.validateRegx(name,/^[\u0600-\u06FF\s]+$/)){
                    this.errors.last_name.push('فیلد باید فارسی باشد');
                    this.errorFlag = true;
                }
            },
            provinceValidator:function(province){
                this.errors.province = [];

                if(province === ''){
                    this.errors.province.push('فیلد استان الزامی است');
                    this.errorFlag = true;
                }
                if( ! this.validateRegx(province,/^[\u0600-\u06FF\s]+$/)){
                    this.errors.province.push('استان باید فارسی باشد');
                    this.errorFlag = true;
                }
            },
            cityValidator:function(city){
                this.errors.city = [];

                if(city === ''){
                    this.errors.city.push('فیلد شهر الزامی است');
                    this.errorFlag = true;
                }
                if( ! this.validateRegx(city,/^[\u0600-\u06FF\s]+$/)){
                    this.errors.city.push('شهر باید فارسی باشد');
                    this.errorFlag = true;
                }
            },
            userNameValidator:function(userName){
                if(this.userNameUnique == true){
                    this.errors.user_name = [];
                }

                if(userName == ''){
                    this.errors.user_name.push('نام کاربری الزامی است');

                    this.errorFlag = true;
                }
                if( ! this.validateRegx(userName,/^\w+$/)){
                    this.errors.user_name.push(' شامل حروف غیر مجاز است');
                    this.errorFlag = true;
                }
            },
            nationalCodeValidator:function(code){
                code = this.toLatinNumbers(code);

                if(this.nationalCodeUnique == true){
                    this.errors.national_code = [];
                }

//                if(code === ''){
//                    this.errors.national_code.push('کد ملی الزامی است');
//                    this.errorFlag = true;
//                }
                if( code !== '' && (! this.isIrNationalCode(code))){
                    this.errors.national_code.push('کد ملی معتبر نیست');
                    this.errorFlag = true;
                }
            },
            isIrNationalCode:function(input){
                if (!/^\d{10}$/.test(input)){
                    return false;
                }

                var check = parseInt(input[9]);
                var sum = [0, 1, 2, 3, 4, 5, 6, 7, 8]
                    .map(function (x) { return parseInt(input[x]) * (10 - x); })
                    .reduce(function (x, y) { return x + y; }) % 11;

                return sum < 2 && check == sum || sum >= 2 && check + sum == 11;
            },
            passwordValidator:function(pass,passConf){
                this.errors.password = [];
                this.errors.password_conf = [];

                if(pass === ''){
                    this.errors.password.push('رمز عبور الزامی است');
                    this.errorFlag = true;
                }
                if(pass.length < 8){
                    this.errors.password.push('رمز عبور حداقل ۸ کاراکتر باشد');
                    this.errorFlag = true;
                }
                if(passConf === ''){
                    this.errors.password_conf.push('تکرار رمز عبور الزامی است');
                    this.errorFlag = true;
                }
                if(passConf != pass){
                    this.errors.password_conf.push('رمز عبور مطابقت ندارد');
                    this.errorFlag = true;
                }
            },
            sexValidator:function(sex){
                this.errors.sex = [];

                if(sex === ''){
                    this.errors.sex.push('جنسیت الزامی است');
                    this.errorFlag = true;
                }
            },
            categoryIdValidator:function(categoryId){
                this.errors.category_id = [];
                if(categoryId === ''){
                    this.errors.category_id.push('انتخاب حوزه ی فعالیت الزامی است.');
                    this.errorFlag = true;
                }
            },
            activityTypeValidator:function(activityType){
                this.errors.activity_type = [];
                if(activityType == ''){
                    this.errors.activity_type.push('انتخاب نوع کاربری الزامی است.');
                    this.errorFlag = true;
                }
            },
            validateRegx:function(input,regx){
                return regx.test(input);
            },
            getCategory:function(){
                axios.post('/get_category_list').then(response => (this.step4.categoryList = response.data.categories));
            },
            getCategoryId:function (categoryId){
                this.step4.categoryId = categoryId;
            },
            getProvinceList:function(){
                axios.post('/location/get_location_info')
                    .then(response => (this.step3.provinceList = response.data.provinces));
            },
            getCityList:function(provinceId){
                axios.post('/location/get_location_info',{
                    province_id : provinceId
                })
                .then(response => (this.step3.cityList = response.data.cities));
            },
            setProvinceName:function(e){
                e.preventDefault();

                this.step3.province = $(e.target).val();

                var provinceId = '';

                for(var i = 0 ; i < this.step3.provinceList.length ; i++){
                    if(this.step3.province == this.step3.provinceList[i].province_name){
                        provinceId = this.step3.provinceList[i].id ;
                        break;
                    }
                }

                this.getCityList(provinceId);
            },
            setCityName:function(e){
                e.preventDefault();

                this.step3.city = $(e.target).val();
            },
            toLatinNumbers:function(num){
                if(num == null){
                    return '';
                }
                var numDic = {
                    '۰': '0',
                    '۱': '1',
                    '۲': '2',
                    '۳': '3',
                    '۴': '4',
                    '۵': '5',
                    '۶': '6',
                    '۷': '7',
                    '۸': '8',
                    '۹': '9',
                };

                return num
                    .toString()
                    .replace(/[۰-۹]/g,function(w){
                        return numDic[w];
                    });
            },
            updateCounterDownTimer:function(seconds){

                if(seconds != 1){
                    this.step2.timeCounterDown = seconds;
                }
                else this.step2.showTimer = false;
            }
        },
        watch:{
            'step2.timeCounterDown':function(){
                var self = this;
                var now = new Date().getTime();

                var distance =  now - this.step2.now;

                var seconds =  119 - Math.floor((distance % (1000 * 120)) / 1000) + 1;

                setTimeout(function(){
                    self.updateCounterDownTimer(seconds);
                },1000);
            },
            'step3.user_name':function(){
                var self = this;
                if(this.step3.user_name.length > 0){
                    axios.post('/user/is_user_name_unique',{
                        user_name : this.step3.user_name,
                    })
                        .then(function(response){
                            if(response.data.status == true){
                                self.errors.user_name = [];
                                self.userNameUnique = true;
                            }
                        })
                        .catch(function(err){
                            self.errors.user_name = [];
                            self.errors.user_name.push('نام کاربری قبلا گرفته شده');

                            self.errorFlag = true;
                            self.userNameUnique = false;
                        });
                }
            },
            'step3.national_code':function(){
                var self = this;

                this.step3.national_code = this.toLatinNumbers(this.step3.national_code);

                if(this.step3.national_code.length > 0 && this.step3.national_code < 10){
                    this.errors.national_code = [];
                    this.errors.national_code.push('کد ملی ۱۰ رقمی است');

                    this.errorFlag = true;
                }
                else if(this.step3.national_code.length == 10){
                    axios.post('user/is_national_code_unique',{
                        national_code: this.toLatinNumbers(this.step3.national_code),
                    })
                        .then(function(response){
                            if(response.data.status == true){
                                self.errors.national_code = [];
                                self.nationalCodeUnique = true;
                            }
                        })
                        .catch(function(err){
                            self.errors.national_code = [];
                            self.errors.national_code.push('کد ملی قبلا گرفته شده');

                            self.errorFlag = true;
                            self.nationalCodeUnique = false;
                        });
                }

            }
        },
        created(){
            gtag('config','UA-129398000-1',{'page_path': '/register'});
        },
        mounted:function(){
              document.onreadystatechange = () => { 
                if (document.readyState == "complete") { 
                    self.$nextTick(this.stopLoader());
                } 
            } 
        },
        updated: function () {
             this.$nextTick(this.stopLoader());
        },
//        beforeCreate:function(){
//            var self = this;
//            window.addEventListener("load", function(event) {
//                    self.stopLoader();
//            });
//        }
    }
</script>
