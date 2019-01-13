<template>
<div>
    <!-- Modal -->
    <div class="container">
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
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div>
    </div>
    <!-- /.modal -->
    <main id="main">
        <div class="main-form">
            <div class="left-section col-xs-8">
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
                            <div class="col-sm-12 input_contents">
                                <span class="after_icon numbers"></span>
                                <input class="pad number" type="text" name="name" v-model="step1.phone"
                                       placeholder="09123456789">
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
                                       placeholder="0101">
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
                            <div class="col-sm-6">
                                <input type="text" name="city" v-model="step3.first_name" placeholder="نام">
                                <span v-if="errors.first_name" class="error_msg">
                                    {{errors.first_name[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" name="city" v-model="step3.last_name" placeholder="نام خانوادگی">
                                <span v-if="errors.last_name" class="error_msg">
                                    {{errors.last_name[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6 input_contents">
                                <span class="after_icon search-icon"></span>
                                <input class="pad" type="text" name="city" v-model="step3.user_name"
                                       placeholder="نام کاربری به انگلیسی">
                                <span v-if="errors.user_name" class="error_msg">
                                    {{errors.user_name[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" name="city" v-model="step3.national_code" placeholder="کد ملی(اختیاری)">
                                <span v-if="errors.national_code" class="error_msg">
                                    {{errors.national_code[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
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
                            <div class="col-sm-6">
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
                            <div class="col-sm-6">
                                <input type="password" name="city" v-model="step3.password" placeholder="رمز عبور">
                                <span v-if="errors.password" class="error_msg">
                                    {{errors.password[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
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
                                <label>
                                    قوانین
                                </label>
                                <textarea disabled>اینکوباک، بستر تجاری آنلاین است که از طریق آن هر کاربر ثبت شده می تواند برای برقراری و حفظ، توسعه کسب و کار با دیگر تولید کنندگان و خریداران همکاری کند. شرایط و مقررات تشکیل شده در این صفحه مشخص می کند که چگونه باید وب سایت و خدمات مورد استفاده قرار گیرد و نهایتا روابط فی مابین اینکوباک و کاربران (ثبت شده یا ثبت نشده) آن را تنظیم میکند. لطفاً شرایط و مقررات حاضر را به دقت مطالعه کنید و در صورتی که قوانین وب سایت برای شما قابل قبول نیست استفاده خود را از وب سایت و یا خدمات اینکوباک به هر نحو متوقف کنید.
در استفاده از خدمات وب سایت اینکوباک فرض بر این است که عملاً این شرایط و مقررات و تغییرات بعدی آن را پذیرفته اید، در این صورت هیچ ادعایی ناشی از استفاده مداوم شما از این سایت و ادعای عدم مطالعه یا آگاهی شما از این مقررات و تغییرات بعدی آن مسموع نخواهد بود.
شرایط درج آگهی در سامانه اینکوباک:
● آگهی ها باید زیر مجموعه حوزه کشاورزی و دسته بندی های موجود در وبسایت باشند.
● عدم مغایرت با قوانین جمهوری اسلامی ایران، ناقض حریم خصوصی افراد ، هرگونه توهین به ادیان رسمی کشور، آداب، رسوم، قومیت‌ها، لهجه‌ها و گویش‌های مختلف.
● عدم درج کالاهای ممنوعه مانند : ماریجوانا و مواد مخدر گیاهی و یا بذر و دانه آنها.
● عدم درخواست کمک‌های نقدی یا پیش‌پرداخت برای معامله‌های از راه دور ، درج شماره حساب در متن آگهی.
● نبود جملات نادرست از نظر املائی یا نگارشی در آگهی.
به منظور بهبود فرآیند تأیید و انتشار آگهی‌ها، سامانه اینکوباک ممکن است در مواردی بر اساس قوانین، متن یا آگهی شما را به طور جزئی تغییر دهد.
مسئولیت استفاده از آگهی‌های این سایت بر عهده شماست و اینکوباک هیچ تعهدى در قبال خسارات مستقیم، اتفاقى، تبعى، غیرمستقیم و کیفرى، ناشى از دسترسى و استفاده شما از این سایت را ندارد.
اینکوباک هیچ قرارداد، تعهدنامه یا سندی را با آگهی‌دهندگان حقیقی یا حقوقی منعقد نمی‌کند. کاربران اینکوباک در هر لحظه قادر به ویرایش آگهی خود هستند، بنابراین اینکوباک، هیچ‌گونه مسئولیتی را در قبال هر نوع آگهی درج شده در سایت نمی‌پذیرد و صرفاً مطالب درج شده توسط کاربران را نمایش می‌دهد.
مسئولیت استفاده از هرگونه متن، پیام، توضیح، اطلاعات، عکس، مشخصات تماس و موارد مشابه که به اینکوباک ارسال می‌شود یا در آن قرار می‌گیرد، شامل بازتولید، افشاء، مخابره، نشر و پخش آن بر عهده فرستنده اطلاعات است.
                        </textarea>
                                <div class="rules col-sm-12">
                                    با <span class="roules-check-inside">قوانین و شرایط</span>
                                    موافقم<input type="checkbox" v-model='step4.rules' value="1">
                                    <i class="fa fa-check"></i>
                                </div>
                                <div class="buttons">
                                    <button class="green_but"  type="button" @click="submitForm">ثبت نهایی</button>
                                </div>
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
            <div class="col-sm-4 right-section">
                <h1>
                    اینکوباک
                </h1>
                <ul>
                    <li>
                        فرصت های جدیدی را خلق کنید.
                    </li>
                    <li>
                        در زمان و هزینه صرفه جویی کنید.
                    </li>
                    <li>
                        با شرکای  قابل اعتماد ارتباط برقرار کنید.
                    </li>
                    <li>
                        بیشتر از یک سایت خدمات بگیرید.
                    </li>
                </ul>
            </div>
        </div>
    </main>
</div>

</template>

<script>
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
                   timeCounterDown:60,
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
                   activity_type:0,
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
               popUpMsg:'',
           }
        },
        ready: function(){
            console.log('ready');
        },
        methods:{
            goToStep: function(step){
                this.currentStep = step;
            },
            send_verification_code:function(){
                this.step2.reSendCode = false;
                this.step1.sendCode = false;
                
                var self = this;
                
                this.step2.now = new Date().getTime();
                this.step2.showTimer = true;
                this.step2.timeCounterDown = 59;
                
                
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
                    },60000);
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

                if(this.step4.rules != 1){
                    this.popUpMsg = 'پذیرش قوانین ثبت آگهی الزامی است.';

                    $('#myModal').modal('show');
                    return ;
                }

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
                console.log('test : '+ categoryId);
                if(categoryId === ''){
                    this.errors.category_id.push('انتخاب حوزه ی فعالیت الزامی است.');
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
                
                var seconds =  59 - Math.floor((distance % (1000 * 60)) / 1000) + 1;
                
                setTimeout(function(){
                    self.updateCounterDownTimer(seconds);
                },1000);
                
                
            },
            'step3.user_name':function(){
                var self = this;
                if(this.step3.user_name.length > 0){
                    axios.post('user/is_user_name_unique',{
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
        }
    }
</script>