<!DOCTYPE html>
<html lang="en" xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>ثبت نام</title>
    <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery-ui.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.easing.min.js')}}"></script>
    <script src="{{asset('assets/js/jquery.multiselect.min.js')}}"></script>
    <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('assets/js/prettify.js')}}"></script>
    <script src="{{asset('assets/cdn/vue.js')}}"></script>
    <script src="{{asset('assets/cdn/axios.js')}}"></script>
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/fontiran.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/bootstrap-theme.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/css/jquery.multiselect.css')}}"/>
        <link type="text/css" rel="stylesheet" href="{{asset('assets/css/popup.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/register/style.css')}}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
            html {
                transform: rotate(-90deg);
                transform-origin: left top;
                width: 100vh;
                overflow-x: hidden;
                position: absolute;
                top: 100%;
                left: 0;
            }
        }
    </style>
</head>
<body>
<div class="bg">

</div>
<div id='app'>
    <!-- Modal -->
    <div class="container">
        <div class="modal fade" id="myModal" tabindex="-1" ref="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="main_popup_content">
                        <a href="#" data-dismiss="modal" > <i class="fa fa-close"></i></a>
                         <p class="main_par">
                            @{{popUpMsg}}
                        </p>
                        <button class="btn green-bot " data-dismiss="modal">
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
                                    @{{errors.phone[0]}}
                            </span>
                            <div class="col-xs-12"> <button class="green_but" type="button"  @click="send_verification_code">ارسال پیام کوتاه
                            </button></div>

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
                                    @{{errors.verification_code[0]}}
                            </span>

                            <div class="bouttons col-xs-12">
                            <button class=" green_but" type="button" @click="verify_code"> بررسی کد</button>
                            <button class="danger_border_but" type="button" @click.prevent="goToStep(1)" :disabled="step2.reSendCode == false"> کد را دریافت
                            نکردم
                            </button>
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
                                    @{{errors.first_name[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" name="city" v-model="step3.last_name" placeholder="نام خانوادگی">
                                <span v-if="errors.last_name" class="error_msg">
                                    @{{errors.last_name[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6 input_contents">
                                <span class="after_icon search-icon"></span>
                                <input class="pad" type="text" name="city" v-model="step3.user_name"
                                       placeholder="نام کاربری به انگلیسی">
                                <span v-if="errors.user_name" class="error_msg">
                                    @{{errors.user_name[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" name="city" v-model="step3.national_code" placeholder="کد ملی">
                                 <span v-if="errors.national_code" class="error_msg">
                                    @{{errors.national_code[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
                                {{--<input type="text" name="city" v-model="step3.province" placeholder="استان">--}}
                               <select  v-on:change="setProvinceName($event)">
                                    <option selected disabled>استان را انتخاب کنید</option>
                                    <option
                                        v-for="province in step3.provinceList"
                                        v-bind:value="province.province_name"
                                    >
                                        @{{province.province_name}}
                                    </option>
                                </select>
                                <span v-if="errors.province" class="error_msg">
                                    @{{errors.province[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
                                {{--<input type="text" name="city" v-model="step3.city" placeholder="شهر">--}}
                                <select v-on:change="setCityName($event)">
                                    <option selected disabled>شهر را انتخاب کنید</option>
                                    <option v-for="city in step3.cityList"
                                            v-bind:value="city.city_name"
                                            >@{{city.city_name}}</option>
                                </select>
                                <span v-if="errors.city" class="error_msg">
                                    @{{errors.city[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <input type="password" name="city" v-model="step3.password" placeholder="رمز عبور">
                                <span v-if="errors.password" class="error_msg">
                                    @{{errors.password[0]}}
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <input type="password" name="city" v-model="step3.re_password" placeholder="تکرار رمز عبور">
                                <span v-if="errors.password_conf" class="error_msg">
                                    @{{errors.password_conf[0]}}
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
                                        @{{category.category_name }}
                                      </option>
                                </select>
                                <span v-if="errors.category_id" class="error_msg">
                                    @{{errors.category_id[0]}}
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
</body>
<script src="{{asset('assets/js/register/custom.js')}}"></script>
</html>