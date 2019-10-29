<style scoped>
    p {
        direction: rtl;
        margin-bottom: 15px;
    }

    li {
        margin-bottom: 15px;
    }

    .panel {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
    }

    .panel-title a {
        background: #ececec;
    }

    .desktop-image, .mobile-image {
        margin-bottom: 15px;
    }

    .mobile-image {
        max-width: 360px;
        text-align: center;
        margin: 0 auto;
        display: none;
    }

    .main-green-button {
        max-width: 360px;
        margin: 0 auto;
    }

    .main-green-button .green-button {
        font-size: 23px;
    }

    .panel-heading, .panel-title {
        padding: 0;
        margin: 0;
    }

    .panel-heading a {
        padding: 15px 20px;
        display: block;
        line-height: 1.618;
    }

    @media screen and (max-width: 768px) {
        .desktop-image {
            display: none;
        }

        .mobile-image {
            display: block;
        }

    }
</style>

<template>
    <div class="main-content-index-pages">

        <section class="parallax-section policy">
            <div class="overlay"></div>
            <div class="container">
                <h3 class="text-right ">اینکوباک چگونه کار می کند؟</h3>

                <div id="accordion" role="tablist" aria-multiselectable="true" class="panel-group">

                    <div class="panel panel-default">
                        <div role="tab" id="headingFirst" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseFirst"
                                aria-expanded="false" aria-controls="collapseFirst" class="collapsed">
                            اینکوباک چیست؟
                        </a></h4></div>
                        <div id="collapseFirst" role="tabpanel" aria-labelledby="headingFirst"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    اینکوباک بازار خرید و فروش عمده محصولات کشاورزی است که خریداران را به فروشندگان دست
                                    اول محصولات کشاورزی متصل کرده و خریدار و فروشنده بدون واسطه می توانند با یکدیگر
                                    ارتباط بر قرار کنند.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingTwo" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                                aria-expanded="false" aria-controls="collapseTwo" class="collapsed">
                            خدمات اینکوباک برای فروشندگان چیست؟
                        </a></h4></div>
                        <div id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    اگر کشاورز، باغدار و تولید کننده محصولات کشاورزی هستید می توانید به عنوان فروشنده در
                                    بازار اینکوباک فعالیت کنید. پس از ثبت محصول خود و تکمیل پروفایل، به جدید ترین
                                    درخواست های خرید که توسط خریداران بر روی اینکوباک قرار گرفته است می توانید پاسخ
                                    دهید.
                                    <br/>
                                    از طریق اینکوباک با خریداران در سراسر کشور آشنا شده و محصولات خود را راحت تر و با
                                    قیمت مناسب تر به فروش برسانید.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingThree" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                                aria-expanded="false" aria-controls="collapseThree" class="collapsed">
                            خدمات اینکوباک برای خریداران چیست؟
                        </a></h4></div>
                        <div id="collapseThree" role="tabpanel" aria-labelledby="headingThree"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    اگر صادر کننده، خریدار عمده و بنکدار هستید می توانید به عنوان خریدار در بازار
                                    اینکوباک فعالیت کنید. شما میتوانید از طریق لیست محصولات، کالای مورد نظر خود را جستجو
                                    کرده و از راه ارسال پیام همچنین استعلام قیمت با فروشندگان به صورت مستقیم و بدون
                                    واسطه ارتباط برقرار کنید.
                                    <br/>

                                    با ثبت درخواست خرید این درخواست برای تمامی فروشندگان کالای مورد نظر ارسال شده و شما
                                    می توانید بهترین قیمت را پیدا کنید.

                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingFour" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
                                aria-expanded="false" aria-controls="collapseFour" class="collapsed">
                            چگونه در سامانه اینکوباک ثبت نام کنم؟
                        </a></h4></div>
                        <div id="collapseFour" role="tabpanel" aria-labelledby="headingFour"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        جهت ثبت نام دکمه ورود به اینکوباک یا
                                        <router-link
                                                :to="{name : 'login'}" target="_blank">ورود/ثبت نام</router-link>
                                        کلیک کنید
                                    </li>
                                    <li>سپس در صفحه ورود روی دکمه ی <router-link :to="{name : 'register'}" target="_blank">ثبت نام در
                                        اینکوباک</router-link> کلیک
                                        کنید.
                                    </li>
                                    <li>

                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/register/web/login.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/register/mobile/login.jpg'"/>
                                        </div>

                                    </li>
                                    <li>
                                        <p>
                                            در صفحه ی ثبت نام ابتدا شماره تلفن همراه خود را وارد کنید سپس دکمه ارسال کد
                                            تایید را بزنید.
                                        </p>


                                        <p class="desktop-image">
                                            <img :src="assets + 'assets/img/help/register/web/1.jpg'"/>
                                        </p>

                                        <p class="mobile-image">
                                            <img :src="assets + 'assets/img/help/register/mobile/1.jpg'"/>
                                        </p>

                                    </li>

                                    <li>
                                        <p>
                                            کد چهار رقمی ارسال شده به تلفن همراه خود را وارد کنید.
                                        </p>


                                        <p class="desktop-image">
                                            <img :src="assets + 'assets/img/help/register/web/2.jpg'"/>
                                        </p>

                                        <p class="mobile-image">
                                            <img :src="assets + 'assets/img/help/register/mobile/2.jpg'"/>
                                        </p>

                                    </li>

                                    <li>
                                        <p>
                                            مشخصات فردی خود را وارد کرده و روی دکمه "مرحله بعد" کلیک کنید
                                        </p>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/register/web/3.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/register/mobile/3.jpg'"/>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            استان و شهر خود را انتخاب کرده و روی دکمه "مرحله بعد" کلیک کنید
                                        </p>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/register/web/4.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/register/mobile/4.jpg'"/>
                                        </div>
                                    </li>

                                    <li>
                                        <p>
                                            یک نام کاربری انگلیسی بدون فاصله برای خود انتخاب کرده و وارد کنید به عنوان
                                            مثال: amiri243
                                        </p>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/register/web/5.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/register/mobile/5.jpg'"/>
                                        </div>
                                    </li>
                                    <li>
                                        <p>
                                            در مرحله ی پایانی نوع کاربری و حوزه فعالیت خود را وارد کرده و دکمه ی ثبت
                                            نهایی را کلیک کنید
                                        </p>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/register/web/6.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/register/mobile/6.jpg'"/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingten" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseten"
                                aria-expanded="false" aria-controls="collapseten" class="collapsed">
                            چگونه پروفایل خود را کامل کنم؟
                        </a></h4></div>
                        <div id="collapseten" role="tabpanel" aria-labelledby="headingten"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        تکمیل پروفایل تجاری کسب و کار شما باعث معرفی شما به دیگر خریداران و فروشندگان
                                        شده و باعث ایجاد اعتماد در مشتریان و افزایش فروش شما خواهد شد.
                                    </li>
                                    <li>
                                        برای تکمیل پروفایل خود ابتدا از نوار داشبورد کنار صفحه گزینه ویرایش پروفایل را
                                        انتخاب کنید.
                                    </li>
                                    <li>
                                        در قسمت اول می توانید نوع کسب و کار خود را مشخص نمایید. اگر در قالب شرکت فعالیت
                                        می کنید گزینه (حقوقی) و اگر در قالب شخصی فعالیت می کنید گزینه (حقیقی) را انتخاب
                                        کنید. در این قسمت یک تصویر برای پروفایل خود بارگذاری کنید. پس از تکمیل اطلاعات
                                        حتما بر روی گزینه ثبت تغییرات در پایین صفحه کلیک کنید.
                                        <br/>
                                        <br/>
                                    </li>
                                    <li>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/edit-profile/web/1.jpg'"/>


                                        </div>
                                    </li>
                                    <li>
                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/edit-profile/mobile/1.jpg'"/>
                                        </div>
                                    </li>
                                    <li>

                                        در قسمت دوم ، می توانید توضیحات و تصاویر مربوط به کسب و کار خود و همچنین مجوز
                                        ها، استاندارد ها و گواهینامه های کسب و کار خود را بار گذاری کنید. توجه کنید که
                                        کامل کردن پروفایل تجاری باعث ایجاد اعتماد و افزایش تعداد مشتریان شما می شود. پس
                                        از تکمیل اطلاعات حتما بر روی گزینه ثبت تغییرات در پایین صفحه کلیک کنید.


                                        <br/>
                                        <br/>
                                    </li>

                                    <li>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/edit-profile/web/2.jpg'"/>
                                        </div>

                                    </li>
                                    <li>
                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/edit-profile/mobile/2.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/edit-profile/mobile/3.jpg'"/>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingFive" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseFive"
                                aria-expanded="false" aria-controls="collapseFive" class="collapsed">
                            چگونه در اینکوباک محصول ثبت کنم؟ (فروشندگان)
                        </a></h4></div>
                        <div id="collapseFive" role="tabpanel" aria-labelledby="headingFive"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        <p>ابتدا وارد پنل کاربری خود شوید.<router-link :to="{name : 'login'}">لینک ورود</router-link>
                                        </p>
                                    </li>
                                    <li>
                                        <p>

                                            در سمت راست منوی داشبورد خود بر روی (ثبت محصول) کلیک کنید.

                                        </p>

                                        <p>

                                            سپس در وسط صفحه بر روی دکمه ی (ثبت محصول) کلیک کنید.

                                        </p>

                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/post-product/web/1.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/post-product/mobile/1.jpg'"/>
                                        </div>
                                        <p>

                                            در مرحله اول دسته بندی و نوع محصول را وارد کرده و روی دکمه "مرحله بعد" کلیک
                                            کنید.

                                        </p>

                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/post-product/web/2.jpg'"/>
                                        </div>


                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/post-product/mobile/2.jpg'"/>
                                        </div>

                                        <p>

                                            در مرحله دوم میزان موجودی و قیمت محصول خود را وارد کنید و روی دکمه "مرحله
                                            بعد" کلیک کنید.

                                        </p>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/post-product/web/3.jpg'"/>
                                        </div>


                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/post-product/mobile/3.jpg'"/>
                                        </div>

                                        <p>

                                            در مرحله سوم مکان محصول خود را انتخاب کنید سپس روی دکمه "مرحله بعد" کلیک
                                            کنید.

                                        </p>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/post-product/web/4.jpg'"/>
                                        </div>


                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/post-product/mobile/4.jpg'"/>
                                        </div>

                                        <p>

                                            در مرحله چهارم تصاویر محصول خود را وارد کنید سپس روی دکمه "مرحله بعد" کلیک
                                            کنید.

                                        </p>

                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/post-product/web/5.jpg'"/>
                                        </div>


                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/post-product/mobile/5.jpg'"/>
                                        </div>

                                        <p>

                                            در مرحله آخر توضیحات مربوط به محصول خود مانند کیفیت، استاندارد، نوع بسته
                                            بندی و ... را وارد کنید سپس روی دکمه "ثبت نهایی" کلیک کنید.

                                        </p>

                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/post-product/web/6.jpg'"/>
                                        </div>


                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/post-product/mobile/6.jpg'"/>
                                        </div>


                                    </li>

                                    <li>
                                        محصول شما پس از تایید ناظران اینکوباک در صفحه ی <router-link :to="{name : 'productList'}"
                                                                                           target="_blank">لیست
                                        محصولات</router-link>
                                        نمایش داده می شود و خریداران می توانند درخواست های خرید خود را برای شما ارسال
                                        کنند.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingSix" class="panel-heading">
                            <h4 class="panel-title">
                                <a
                                        data-toggle="collapse" data-parent="#accordion" href="#collapseSix"
                                        aria-expanded="false" aria-controls="collapseSix" class="collapsed">
                                    چگونه درخواست خرید خود را در اینکوباک ثبت کنم؟ (خریداران)
                                </a>
                            </h4>
                        </div>
                        <div id="collapseSix" role="tabpanel" aria-labelledby="headingSix"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        ابتدا وارد پنل کاربری خود شوید. <router-link :to="{name : 'login'}">لینک ورود</router-link>
                                    </li>
                                    <li>
                                        <p>
                                            در سمت راست پنل خود لینک ثبت درخواست جدید را کلیک کنید(پنل خریداران)
                                        </p>

                                    </li>
                                    <li>

                                        <p>
                                            شما می توانید در قسمت (ثبت درخواست خرید) در منوی داشبورد کنار صفحه، اطلاعات محصول مورد نیاز خود از قبیل نوع محصول، وزن، قیمت و ... را وارد کرده و درخواست خرید خود را ثبت کنید. این درخواست خرید شما برای تمامی فروشندگان محصول مورد نظرتان ارسال شده و شما می توانید بهترین محصول با بهترین قیمت را از میان فروشندگان بیابید.

                                        </p>

                                        <p>

                                            برای شروع روی دکمه "ثبت درخواست خرید" در وسط صفحه کلیک کنید

                                        </p>

                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/buyad/web/1.jpg'"/>
                                        </div>

                                        <p>
                                            در مرحله دوم نوع و میزان محصول مورد نیاز خود را وارد کنید و روی دکمه "ثبت درخواست" کلیک کنید.

                                        </p>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/buyad/web/2.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/buyad/mobile/1.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/buyad/mobile/2.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/buyad/mobile/3.jpg'"/>
                                        </div>


                                    </li>
                                    <li>
                                        درخواست شما پس از تایید ناظران اینکوباک برای تامین کنندگان مربوطه ارسال می شود تا قیمت ، تصاویر و سایر جزییات محصولشان را برایتان ارسال کنند.
                                        <br>
                                        برای مشاهده ی پاسخ فروشندگان به قسمت پیام ها مراجعه کنید.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div role="tab" id="headingeleven" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseEleven"
                                aria-expanded="false" aria-controls="collapseEleven" class="collapsed">
                            چگونه درخواست های خرید را ببینیم؟ (فروشندگان)
                        </a></h4></div>
                        <div id="collapseEleven" role="tabpanel" aria-labelledby="headingeleven"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <ul>
                                    <li>
                                        <p>
                                            فروشندگان محترم می توانند در این قسمت درخواست های خریدی که از سوی خریداران اعلام شده است را ببینند و با خریداران ارتباط برقرار کنند. برای دیدن درخواست های خرید می توانید در منوی کنار صفحه به قسمت (درخواست های خرید) مراجعه کنید.

                                        </p>
                                    </li>

                                    <li>
                                        <div class="desktop-image">
                                            <img :src="assets + 'assets/img/help/buy-ad-list/web/1.jpg'"/>
                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/buy-ad-list/mobile/1.jpg'"/>

                                        </div>

                                        <div class="mobile-image">
                                            <img :src="assets + 'assets/img/help/buy-ad-list/mobile/2.jpg'"/>

                                        </div>


                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingEight" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseEight"
                                aria-expanded="false" aria-controls="collapseEight" class="collapsed">
                            پیام رسان اینکوباک
                        </a></h4></div>
                        <div id="collapseEight" role="tabpanel" aria-labelledby="headingEight"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    خریداران و فروشندگان عزیز می توانند از طریق پیام رسان تجاری اینکوباک در هر لحظه (بدون ایجاد مزاحمت در اثر تعداد زیاد تماس) با یکدیگر ارتباط برقرار کنند، به صورت روزانه استعلام قیمت بگیرند و در صورت صلاح دید نسبت به تبادل شماره ی تماس و برقراری تماس تلفنی اقدام کنند.
                                </p>

                                <div class="desktop-image">
                                    <img :src="assets + 'assets/img/help/messenger/web/1.jpg'"/>
                                </div>
                                <div class="mobile-image">
                                    <img :src="assets + 'assets/img/help/messenger/mobile/1.jpg'"/>

                                </div>
                                <div class="mobile-image">
                                    <img :src="assets + 'assets/img/help/messenger/mobile/2.jpg'"/>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div role="tab" id="headingSeven" class="panel-heading"><h4 class="panel-title"><a
                                data-toggle="collapse" data-parent="#accordion" href="#collapseSeven"
                                aria-expanded="false" aria-controls="collapseSeven" class="collapsed">
                            آیا جهت عضویت در سامانه هزینه ای باید پرداخت شود؟
                        </a></h4></div>
                        <div id="collapseSeven" role="tabpanel" aria-labelledby="headingSeven"
                             class="panel-collapse collapse">
                            <div class="panel-body">
                                <p>
                                    شما با عضویت رایگان می توانید به صورت محدود از خدمات اینکوباک استفاده کنید. برای استفاده نامحدود از خدمات اینکوباک ( ثبت محصولات بیشتر، دیدن همه درخواست های خرید اولویت در نمایش و...) می توانید حساب کاربری خود را به عضویت ویژه ارتقا دهید و به عنوان کاربر ویژه در جمع خریداران و فروشندگان فعالیت کنید.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-xs-12">
                    <div class="row">

                        <h1 class=" main-green-button">

                            <router-link v-if="isUserLogin && userType == 0" :to="{name : 'productList'}" class="green-button">لیست محصولات</router-link>

                            <router-link v-else-if="isUserLogin && userType == 1" :to="{name : 'buyAdRequestsSeller'}" class="green-button">
                                لیست درخواست های خرید
                            </router-link>

                            <router-link v-else :to="{name : 'register'}" class="green-button">ثبت نام در اینکوباک</router-link>

                        </h1>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
    import {eventBus} from "../../../router/router";
    import Route from "../../../router/components/route";

    export default {
        components: {Route},
        props: [
            'assets',
            'isUserLogin',
            'userType'
        ],
        methods: {
            stopLoader: function () {
                eventBus.$emit('isLoading', false);
            },
        },
        mounted: function () {
            var self = this;
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
