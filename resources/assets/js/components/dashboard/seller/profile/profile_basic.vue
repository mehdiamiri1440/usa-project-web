<style >
        
        .sub-header{
            display: none;
        }

</style>
<style scoped>

    input[type="number"] {
      -moz-appearance: textfield;
    }
    input[type="number"]::-webkit-inner-spin-button, 
    input[type="number"]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
    input, textarea{
        padding: 9px 15px;

    }
    input.disabled{
        color: #fff;
        background: #F6F6F6;
        border: none;
        font-weight: bold;
    }


    input{

        width: 100%;
        background: none;
        border-radius: 4px;
        border: 1px solid;
        color: #BEBEBE;
        transition: 300ms;

    }

    input:focus, textarea:focus{
        color: #333;
        border-color: #333;

    }

    input.active, textarea.active{
        color: #00C569;
    }

    input.active:focus, textarea.active:focus {
        color: #00C569;
    }

    input.error {
        color: #e41c38;
    }

    input.error:focus{
        color: #e41c38;
    }

    textarea{
        background: none;
        min-height: 70px;
        max-height: 80px;
        transition: 300ms
    }

    .error-message{

        text-align: center;

        color: #e41c38;

        font-weight: bold;

        height: 25px;

        margin-bottom: 5px;

        direction: rtl;

    }





    .main-wrapper {
        direction: rtl;
        background: #F6F6F6;
        font-size: 13px;
    }

    .title{
        padding: 13px 15px;
    }

    .title h1{
        font-size: 18px;
        font-weight: bold;
    }

    .title p{
        color: #E41C38;
        padding-top: 4px;
    }

    /*progress styles*/

    .progress-wrapper{

        background: #fff;
        border-radius: 4px;
        position: relative;
        overflow: hidden;

    }

    .custom-progress{

        background: #00C569;
        color: #fff;
        width: 50%;
        text-align: center;
        padding: 3px 0;
        font-weight: bold;

    }

    .custom-progress p{

        display: inline;
        
    }


    /*form styles*/


    .content-wrapper{
        background: #fff;
        box-shadow: 0 0 10px #C5C5C5;
        border-radius: 9px;
        margin: 7px auto 8px;

    }

    .wrapper-section{
        padding: 8px 0 7px;
    }

    /*user image*/

    .user-image-wrapper{
        text-align: center;
    }

    .user-image-wrapper > p{
        margin-bottom:7px;
    }

    .content-wrapper{
        padding: 15px 0;
    }

    .user-image{
        width: 86px;
        height: 86px;
        overflow:hidden;
        margin: 0 auto;
        border-radius: 50px;
        position: relative;
    }

    .user-image img{

        position: absolute;

        width: initial;

        height: 100%;

        left: 50%;

        top: 50%;

        transform: translate(-50%, -50%);

    }

    .submit{
        position: relative;

        max-width: 105px;

        margin: 7px auto 0;

        height: 25px;

        background: #00C569;

        text-align: center;

        color: #fff;

        overflow: hidden;

        border-radius: 4px;
    }

    #imgInp{

        max-width: 100%;
        position: relative;
        opacity: 0;
        height: 100%;
        z-index: 1;

    }

    #imgInp:hover{

        cursor: pointer;

    }
 

    .submit label{

        position: absolute;
        z-index: 0;
        top: 3px;
        margin: 0;
        left: 0;
        right: 0;
        font-weight: normal;

    }


    /*inputs styles*/

    .inputs-wrapper{
        margin-bottom: 10px
    }

    /*redio button styles*/


    .label-radio {

        display: inline-block;

        position: relative;

        cursor: pointer;



        -webkit-user-select: none;

        -moz-user-select: none;

        -ms-user-select: none;

        user-select: none;

        direction: rtl;

        padding: 0 29px 0 15px;

        font-size: 14px;

    }

    .label-radio:nth-of-type(1){
        margin-left: 16px;
    }

    /* Hide the browser's default radio button */
    .label-radio input {
        position: absolute;

        opacity: 0;

        cursor: pointer;

        z-index: 1;

        left: 0;

        right: 0;

        top: 0;

        bottom: 0;

        height: 100%;

        margin: 0;

        width: 100%;

    }

    /* Create a custom radio button */
    .checkmark {
        position: absolute;

        top: 11px;

        right: 13px;

        height: 12px;

        width: 12px;

        background-color: #eee;

        border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    .label-radio:hover input ~ .checkmark {
          background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .label-radio input:checked ~ .checkmark {
          background-color: #00C569;
    }

    .label-radio input:checked ~ label::after{
          border-color: #00C569;
    }


    .label-radio label::after{

        content: "";

        display: block;

        position: absolute;

        left: 0;

        right: 0;

        top: -2px;

        bottom: 0;

        z-index: 0;

        margin: 0;

        padding: 0;

        border-radius: 3px;

        border: 1px solid #BDC4CC;

    }


    .label-radio label i {
        margin: 0 4px;
    }

    .label-text{
        margin-bottom: 10px;
    }

    /*link help style*/

    .link-help{
        text-align: right;
    }

    .link-help a{
        
        color: #00C569;

        padding: 2px 15px;

        border-radius: 4px;

        border: 1px solid;

        display: inline-block;

        font-weight: bold;

        margin-bottom: 5px;

    }

    .link-help a{
        
        color: #00C569;

        padding: 2px 15px;

        border-radius: 4px;

        border: 1px solid;

        display: inline-block;

        font-weight: bold;

    }

    .link-help a:hover{
        
        color: #fff;
        background: #00C569;

    }

    .link-help i{
        
        -ms-transform: matrix(-1, 0, 0, 1, 0, 0); /* Standard syntax */
        -webkit-transform: matrix(-1, 0, 0, 1, 0, 0); /* Standard syntax */
        transform: matrix(-1, 0, 0, 1, 0, 0); /* Standard syntax */

    }

    .link-help p{
                
        color: #BDC4CC;

        font-size: 12px;

        line-height: 19px;

        font-weight: bold;

    }




    @media only  screen and (max-width: 1080px) {

        .label-radio {
            padding: 0 25px 0 11px;
            font-size: 14px;
        }

        .label-radio:nth-of-type(1) {
            margin-left: 10px;
        }

        .checkmark {

            right: 8px;
          
        }
        .link-help a{
   
            padding: 2px 10px;

        }

    }
   

   @media only screen and (max-width: 991px) {

        .radio-wrapper {
            margin-bottom: 10px;
        }

        .label-radio {
            padding: 0 29px 0 15px;
        }

        .label-radio:nth-of-type(1) {
            margin-left: 16px;
        }

        .checkmark {

            right: 13px;
          
        }

        .description {

            margin: 15px auto;

        }

        .description hr{

            margin: 0  auto 15px;

        }

        .link-help a {

            float: right;
            margin-left: 15px;

        }

    }

    @media only screen and (max-width: 767px) {
        .title{
            text-align: center;
            padding: 5px 15px;
        }
        .user-image-wrapper {

            margin-top: 23px;

        }
        .title p, .title h1 {

            padding-top: 0;
            margin: 5px auto;

        }
        .link-help a{

           float: initial;
           margin: 0 auto;

        }

        .link-help{
            text-align: center;
        }

        .main-wrapper {

            padding: 0;

        }
        .content-wrapper{

            border-radius: 0;

        }

    }



</style>

<template>
    <div class="main-wrapper col-xs-12">
           
                <header class="col-xs-12">
        

                          <div class="title col-xs-12">

                              <div class="row">
                                  <div class="col-xs-12 col-sm-4 pull-right"> 
                                    <h1>ویرایش پروفایل</h1>
                                  </div>
                                  <div class="col-xs-12 col-sm-8">
                                      <p>
                                          برای تکمیل فرایند ثبت نام، لطفا اطلاعات خود را کامل کنید
                                      </p>
                                  </div>
                              </div>

                          </div>

                          <div class="progressbar col-xs-12">

                                <div class="progress-wrapper row">
                                    <div class="custom-progress">
                                        <p class="hidden-xs">
                                            میزان تکمیل پروفایل
                                        </p>

                                        <span>50%</span>
                                        
                                    </div>
                                </div>

                          </div>

                </header>

                <main class="col-xs-12">

                    <section class="wrapper-section">
                        
                        <div class="content-wrapper row">

                                

                                <div class="form-wrapper col-xs-12">

                                    <div class="user-image-wrapper col-xs-4 col-sm-2 pull-right">
                                            <p class="hidden-xs">تصویر پروفایل</p>
                                            <div class="user-image">

                                                    <img 
                                                    v-if="currentUser.profile.profile_photo"
                                                    :src="str + '/' + currentUser.profile.profile_photo"
                                                         class="image-preview"
                                                         alt="تصویر پروفایل"
                                                    />

                                                    <img 
                                                    v-else
                                                    :src="defultimg"
                                                     align="تصویر پروفایل" class="image-preview">

                                            </div>
                                            
                                            <div class="submit">

                                                <input type="file" id="imgInp" ref="profilePhoto">

                                                <label>ویرایش تصویر</label>

                                                <br/>

                                                <span v-if="errors.profile_photo"
                                                      class="text-danger tex-left"
                                                      v-text="errors.profile_photo[0]"
                                                >
                                                </span>

                                            </div>

                                    </div>


                                        <div class="user-information col-xs-8 col-sm-10">
                                                
                                                <div class="row">
                                                    
                                                    <div class="col-xs-12 col-md-4 pull-right">
                                                        <p class="label-text">
                                                            نوع کاربری
                                                        </p>
                                                        <div class="radio-wrapper">

                                                            <div class="label-radio">

                                                                  <input
                                                                 
                                                                   type="radio"
                                                                   value="حقیقی" 
                                                                   name="radio"
                                                                   :checked="'p'  == 'p'"
                                                                   />

                                                                  <span class="checkmark"></span>

                                                                  <label>
                                                                  حقیقی
                                                                  </label>

                                                            </div>

                                                            <div class="label-radio">

                                                              <input type="radio" 
                                                            
                                                              value="حقوقی" 
                                                              :checked="'آقا'  == sex"
                                                              name="radio"

                                                              >
                                                              <span class="checkmark"></span>
                                                              <label>
                                                              حقوقی
                                                              </label>
                                                            </div>

                                                        </div>
                                                            

                                                    </div>

                                                    <div class="inputs-wrapper col-xs-12 col-md-8 pull-left">

                                                       <div class="row">

                                                            <div class="col-xs-12 col-sm-6 pull-right">

                                                                <p class="label-text">
                                                                    نام شرکت
                                                                </p>

                                                                <div 
                                                                class="input-wrapper company-name-wrapper"
                                                                >

                                                                <input 
                                                                id="company-name" 
                                                                type="text"
                                                                class="dire disabled"
                                                                placeholder="نام شرکت"
                                                                readonly
                                                                >

                                                                </div>

                                                            </div>

                                                            <div class="col-xs-12 col-sm-6">
                                                                
                                                                <p class="label-text">
                                                                    شماره ثبت شرکت
                                                                </p>

                                                                <div 
                                                                class="input-wrapper company-name-wrapper"
                                                                >
                                                                
                                                                <input 
                                                                id="company-name" 
                                                                type="text"
                                                                class="dire disabled"
                                                                placeholder="شماره ثبت "
                                                                readonly
                                                                >

                                                                </div>

                                                            </div>

                                                       </div>

                                                    </div>

                                                </div>

                                        </div>

                                    <div class="user-form col-xs-12 col-sm-10">
                                            
                                        <div class="row">

                                            <div class="form-wrapper col-xs-12 col-md-8 pull-left">

                                               <div class="row">
                                                    <div class="col-xs-6 pull-right">
                                                          
                                                                <p class="label-text">
                                                                    شماره شما
                                                                </p>

                                                                <div 
                                                                class="input-wrapper company-name-wrapper"
                                                                >
                                                                
                                                                <input 
                                                                    id="phone-number" 
                                                                    type="number"
                                                                    class="dire"
                                                                    placeholder="09123456789"
                                                                    pattern="[0-9]*"
                                                                >

                                                                </div>
                                                    </div>

                                                    <div class="col-xs-6">
                                                        
                                                            <p class="label-text">
                                                                    آدرس
                                                                </p>

                                                                <div 
                                                                class="input-wrapper address-wrapper"
                                                                >
                                                                
                                                                <input 
                                                                id="address" 
                                                                type="text"
                                                                class="dire "
                                                                placeholder="آدرس شما"
                                                                
                                                                >

                                                                </div>


                                                    </div>

                                               </div>   
                                            </div>

                                        </div>

                                    </div>
                                    
                               </div>

                               <div class="form-wrapper col-xs-12 col-md-10 pull-left">

                                    <div class="description col-xs-12 col-md-8">
                                        <hr class="hidden-md hidden-lg">
                                        <p class="label-text">
                                          درباره  کسب و کارتان بنویسید
                                        </p>

                                         <div 
                                         class="input-wrapper address-wrapper"
                                         >
                                                                
                                         <textarea
                                         rows="3"
                                         id="description"
                                         class="dire "
                                         placeholder="آدرس شما"
                                                                
                                         ></textarea> 

                                         </div>


                                    </div>

                                    <div class="link-help col-xs-12  col-md-4">
                                        <a href="#">
                                            نمونه پروفایل تکمیل شده
                                             <i class="fa fa-question"></i>
                                        </a>
                                        <p>
                                            من فروشنده محصولات کشاورزی در سامانه ی اینکوباک هستم. برای ارتباط با من رو دکمه ی ارسال پیام کلیک کنید. 
                                        </p>
                                    </div>

                               </div>

                        </div>

                    </section>

                </main>
    </div>
</template>

<script>
    import {eventBus} from "../../../../router/dashboard_router";


    export default {
        props: [
            'str',
            'defultimg'
        ],
        data: function () {
            return {
                currentUser: {
                    profile: {
                        is_company: '',
                        company_name:'',
                        company_register_code:'',
                        address:'',
                        public_phone:'',
                        profile_photo:'',
                        postal_code:'',
                        shaba_code:'',
                    },
                    user_info: '',
                },
                profileBasicFields: [
                    'is_company',
                    'company_name',
                    'company_register_code',
                    'public_phone',
                    'address',
                    'postal_code',
                    'shaba_code',
                ],
                profilePhoto: '',
                errors: '',
                popUpMsg: '',
                items: [    ],
            }
        },
        methods: {
            init: function () {
                this.isLoaded = true;
                axios.post('/user/profile_info')
                    .then(response => (this.currentUser = response.data));
            },
            RegisterBasicProfileInfo: function () {
                eventBus.$emit('submiting', true);
                this.errors = '';
                var self = this;
                var data = new FormData();

                for (var i = 0, cnt = this.profileBasicFields.length; i < cnt; i++) {
                    if (this.currentUser.profile[this.profileBasicFields[i]] != null){
                        data.append(this.profileBasicFields[i], this.toLatinNumbers(this.currentUser.profile[this.profileBasicFields[i]]));
                    }
                }

                let profilePhoto = this.$refs.profilePhoto.files[0];
                if (profilePhoto) {
                    data.append('profile_photo', profilePhoto);
                }

                axios.post('/user/profile_modification', data)
                    .then(function (response) {
                        if (response.status === 200) {
                            eventBus.$emit('submiting', false);
                            self.popUpMsg = 'تغییرات با موفقیت اعمال شد';
                            eventBus.$emit('submitSuccess', self.popUpMsg);
                            $('#custom-main-modal').modal('show');
                        }
                        self.submiting = false;
                    })
                    .catch(function (err) {
                        self.errors = '';
                        self.errors = err.response.data.errors;
                        eventBus.$emit('submiting', false);
                    });
            },
            toLatinNumbers: function (num) {
                if (num == null) {
                    return null;
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
                    .replace(/[۰-۹]/g, function (w) {
                        return numDic[w];
                    });
            },
            disableForm: function () {
                var companyNumber = $("#company-number");
                var companyName = $("#company-name");

                this.currentUser.profile.company_register_code = null;
                this.currentUser.profile.company_name = null;

                companyNumber.attr('disabled', true);
                companyName.attr('disabled', true);
            },
            enableForm: function () {
                var companyNumber = $("#company-number");
                var companyName = $("#company-name");
                companyName.val('');
                companyNumber.prop('disabled', false);
                companyName.prop('disabled', false);
            }
        },
        mounted(){
            this.init();
            eventBus.$emit('subHeader', this.items);

            function show_image_preview(input) {
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    var image = $('.image-preview');
                    var iconProfile = $('#icon-pro');
                    reader.onload = function (e) {
                        image.attr('src', e.target.result);
                        image.css('display', 'inline');
                        iconProfile.css('display', 'none');
                    };
                    reader.readAsDataURL(input.files[0]);
                }

            }

            function image_checked() {
                var image = $('.image-preview');
                var iconProfile = $('#icon-pro');
                if (image.attr('src') !== "") {
                    image.css('display', 'inline');
                    iconProfile.css('display', 'none');
                }
            }

            image_checked();

            $("#imgInp").change(function () {
                show_image_preview(this);
            })

        },
        created(){
            gtag('config','UA-129398000-1',{'page_path': '/profile-basic'});
        }
    }

</script>
