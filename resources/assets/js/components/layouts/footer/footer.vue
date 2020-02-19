<style scoped>
    .col-md-4 {
        float: right;
    }

    /*---------------------------------------
           Footer section
        -----------------------------------------*/

    #wrap-footer {

        margin-top: 60px;
        position: relative;
    }

    #wrap-footer footer {
        background: #000122;
        padding: 30px 0;
    }

    .footer-bottom {
        background: #000235;
        text-align: center;
        padding: 20px 0;
    }

    .social-icon a {
        border: 1px solid;
        margin: 7px;
        padding: 0;
    }

    .footer-bottom p {
        padding-top: 20px;
        display: block;
        color: #fff;
        direction: rtl;
    }

    footer p {
        text-align: right;
        color: white;
        direction: rtl;
    }

    footer a {
        direction: rtl;
    }

    .footer-list {
        text-align: right;
        line-height: 1.618;
    }

    .footer-list li {
        text-align: right;
        line-height: 1.618;
    }

    .footer-list a {
        color: #fff;
        padding: 7px 0;
        display: inline-block;
    }

    .footer-list a:hover {
        color: #00a65a;
    }

    /* Back top */
    .go-top {
        z-index: 1;
        background-color: #ffffff;
        box-shadow: 1px 1.732px 12px 0 rgba(0, 0, 0, 0.14),
        1px 1.732px 3px 0 rgba(0, 0, 0, 0.12);
        transition: all 1s ease;
        bottom: 2em;
        left: 2em;
        color: #333;
        font-size: 24px;
        display: none;
        position: fixed;
        text-decoration: none;
        width: 40px;
        height: 40px;
        line-height: 38px;
        text-align: center;
        border-radius: 100%;
    }

    .go-top:hover {
        background: #00c569;
        color: #ffffff;
    }

    /*---------------------------------------
           Social icon
        -----------------------------------------*/
    .social-icon {
        position: relative;
        padding: 0;
        margin: 0;
    }

    .social-icon li {
        display: inline-block;
        list-style: none;
    }

    .social-icon li a {
        color: #666;
        border-radius: 100px;
        font-size: 16px;
        text-decoration: none;
        transition: all 0.4s ease-in-out;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        vertical-align: middle;
    }

    .social-icon li a:hover {
        background: #00c569;
        color: #ffffff;
    }

    .user-header-mobile {
        display: none;
    }

    .profile-menu-header {
        padding: 12px;
        float: left;
    }

    .profile-menu-header > a {
        border-right: 1px solid #00c569;
    }

    .profile-menu-header a {
        color: #7f8c9b;
        margin: 5px 0;
        position: relative;
        padding: 3px 15px !important;
    }

    .user-header-mobile a {
        float: left;
        width: 100%;
    }

    .user-header-mobile .profile-menu-header i {
        top: 5px;
        left: -10px;
    }

    .profile-menu-header i {
        position: absolute;
        left: -75px;
        top: 5px;
        font-size: 20px;
    }

    .image-header-profile {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        float: left;
        margin-top: -15px;
    }

    .image-header-profile img {
        height: 100%;
    }

    .profile-list {
        position: absolute;
        width: 156px;
        background: #fff;
        padding: 8px 10px;
        border-radius: 3px;
        box-shadow: 0 0 3px #313a43;
        text-align: right;
        left: -12px;
        top: 59px;
        display: none;
        z-index: 999;
    }

    .profile-list li {
        padding: 5px 0;
    }

    .profile-list li:last-of-type {
        border-bottom: none;
    }

    .user-header-web {
        position: relative;
    }

    img.image-blur {
        transition: 300ms;
    }

    img.image-blur:hover {
        transform: scale(1.05);
        transition: 300ms;
    }

    .enamad {
        text-align: center;
    }

    .enamad img {
        width: 120px;
        text-align: center;
        background: #eceff8;
        padding: 9px;
        border-radius: 5px;
        position: relative;
        top: 0;
        transition: 300ms;
    }

    .enamad img:hover {
        top: -5px;
        box-shadow: 0 0 30px #000;
    }

    .vertical-padding {
        padding-top: 10px !important;
    }

    .footer-note {
        padding: 30px 15px;
        text-align: right;
        color: #f1f1f1;
        line-height: 1.618;
        border-top: 2px solid #000235;
    }


    #note-text.collapse[aria-expanded="false"] {
        display: block;
        height: 44px !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        direction: rtl;
        color: #f1f1f1;
    }

    #note-text.collapsing[aria-expanded="false"] {
        height: 44px !important;
    }

    .content-wrapper a.collapsed {
        color: #fff;
    }

    .content-wrapper a.collapsed:after {
        content: 'مشاهده بیشتر +';
    }

    .content-wrapper a#note-close:not(.collapsed):after {
        content: 'بستن -';
    }

    @media screen and (max-width: 767px) {
        .contact-us {
            border-top: 2px solid #000111;
            padding: 15px;
            margin: 15px 0;
        }
    }

</style>

<template>
    <div id="wrap-footer">


        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4 pull-left">
                        <ul class="list-unstyled footer-list">
                            <li>
                                <div class="enamad">
                                    <a
                                            target="_blank"
                                            href="https://trustseal.enamad.ir/?id=129504&amp;Code=I3flHhEiFZPLWVe9vTFK"
                                    >
                                        <img :src="$parent.assets + 'assets/img/enamad.jpg'" alt="">
<!--                                        <img-->
<!--                                                src="https://Trustseal.eNamad.ir/logo.aspx?id=129504&amp;Code=I3flHhEiFZPLWVe9vTFK"-->
<!--                                                alt-->
<!--                                                style="cursor:pointer"-->
<!--                                                id="I3flHhEiFZPLWVe9vTFK"-->
<!--                                        />-->
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <ul class="list-unstyled footer-list">
                            <!--   <li>
                                 <router-link
                                   class="smoothScroll"
                                   to="/pricing"
                                   @click="registerComponentStatistics('footer','pricing','click-on-pricing')"
                                 >
                                   ارتقا عضویت
                                 </router-link>
                               </li>-->
                            <li>
                                <router-link class="smoothScroll" to="#">قیمت روزانه</router-link>
                            </li>
                            <li>
                                <router-link
                                        class="smoothScroll"
                                        to="/privacy-and-policy"
                                        @click="registerComponentStatistics('footer','privacy-and-policy','click-on-privacy-policy')"
                                >
                                    قوانین
                                    و مقررات
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                        class="smoothScroll"
                                        to="/help"
                                        @click="registerComponentStatistics('footer','help','click-on-help')"
                                >
                                    باسکول چگونه
                                    کار می کند؟
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                        class="smoothScroll"
                                        to="/about-us"
                                        @click="registerComponentStatistics('footer','about-us','click-on-about-us')"
                                >
                                    درباره
                                    ما
                                </router-link>
                            </li>
                            <li>
                                <router-link
                                        class="smoothScroll"
                                        to="/contact-us"
                                        @click="registerComponentStatistics('footer','contact-us','click-on-contact-us')"
                                >
                                    ارتباط
                                    با ما
                                </router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4 contact-us">
                        <p>آدرس</p>
                        <p class="vertical-padding">شیراز، خیابان ارم کوچه 15 پلاک 264</p>
                        <br/>
                        <p>تماس با پشتیبانی باسکول</p>
                        <p class="vertical-padding">‌09118413054 / 09178928266</p>
                    </div>
                </div>
            </div>
            <div class="footer-note ">
                <div class="container">
                    <div class="content-wrapper">
                        <div id="note-text" class="collapse " aria-expanded="false">
                            باسکول، بازار عمده خرید و فروش عمده محصولات کشاورزی ایران، فضایی برای دسترسی مستقیم به تولیدکنندگان عمده محصولات کشاورزی است. اگر خریدار عمده و صادرکننده هستید می توانید با استفاده از خدمات باسکول از قیمت روز محصولات اطلاع پیدا کنید، به صورت مستقیم و بدون واسطه با فروشندگان ارتباط بگیرید، سابقه فروشندگان و اعتبار آنها را ببینید و با حرفه ای ها معامله کنید. باسکول با گردآوری انواع محصولات کشاورزی و فروشنده های آن امکان مقایسه و بررسی موقعیت های خرید را برای فعالین این حوزه فراهم کرده است.  در بازار باسکول می توانید محصولات گوناگون را با هم مقایسه کرده با ثبت درخواست خرید، بهترین فروشنده و بهترین قیمت عمده را از میان هزاران محصول با قیمت های مختلف بیابید. باسکول بازاری برای خرید و فروش عمده انواع<a href="https://www.buskool.com/product-list/category/%D8%A8%D8%B1%D9%86%D8%AC"> برنج ایرانی و خارجی</a> و انواع<a href="https://www.buskool.com/product-list/category/%D8%AE%D8%B1%D9%85%D8%A7"> خرما</a>،<a href="https://www.buskool.com/product-list/category/%D9%BE%D8%B3%D8%AA%D9%87"> پسته</a>،<a href="https://www.buskool.com/product-list/category/%D8%B2%D8%B9%D9%81%D8%B1%D8%A7%D9%86"> زعفران</a>،<a href="https://www.buskool.com/product-list/category/%DA%A9%D8%B4%D9%85%D8%B4"> کشمش</a>،<a href="https://www.buskool.com/product-list/category/%D8%A7%D9%86%D8%AC%DB%8C%D8%B1"> انجیر خشک</a> درجه یک صادراتی و همچنین انواع<a href="https://www.buskool.com/product-list/category/%D8%B3%DB%8C%D8%A8"> سیب</a>،<a href="https://www.buskool.com/product-list/category/%D9%BE%D8%B1%D8%AA%D9%82%D8%A7%D9%84"> پرتقال</a>،<a href="https://www.buskool.com/product-list/category/%D8%A7%D9%86%DA%AF%D9%88%D8%B1-"> انگور</a>،<a href="https://www.buskool.com/product-list/category/%D8%A7%D9%86%D8%A7%D8%B1"> انار</a> و<a href="https://www.buskool.com/product-list/category/%D9%84%DB%8C%D9%85%D9%88-%D8%AA%D8%B1%D8%B4"> لیموترش</a> درجه یک صادراتی به همراه<a href="https://www.buskool.com/product-list/category/%DA%AF%D9%88%D8%AC%D9%87"> گوجه فرنگی</a>،<a href="https://www.buskool.com/product-list/category/%D8%B3%DB%8C%D8%A8-%D8%B2%D9%85%DB%8C%D9%86%DB%8C"> سیب زمینی</a>،<a href="https://www.buskool.com/product-list/category/%D9%81%D9%84%D9%81%D9%84-%D8%AF%D9%84%D9%85%D9%87%20%D8%A7%DB%8C"> فلفل دلمه ای</a>،<a href="https://www.buskool.com/product-list/category/%D9%87%D9%88%DB%8C%D8%AC"> هویج</a>،<a href="https://www.buskool.com/product-list/category/%DA%A9%D9%84%D9%85"> کلم</a>،<a href="https://www.buskool.com/product-list/category/%D8%AE%DB%8C%D8%A7%D8%B1"> خیار سبز</a>،<a href="https://www.buskool.com/product-list/category/%D8%B3%DB%8C%D8%B1"> سیر</a> درجه یک صادراتی را از بهترین فروشندگان و کشاورزان فراهم کرده است. باسکول مرجع تخصصی خرید و فروش محصولات کشاورزی ایران به خصوص محصولات صادراتی می باشد و خریدارانی که قصد<a href="https://blog.buskool.com/%da%86%da%af%d9%88%d9%86%da%af%db%8c-%d9%88-%d9%86%d8%ad%d9%88%d9%87-%d8%b5%d8%a7%d8%af%d8%b1%d8%a7%d8%aa-%da%a9%d8%a7%d9%84%d8%a7/"> صادرات کالا</a> را دارند می توانند با استفاده از بازار باسکول بهترین فروشندگان کالای صادراتی ایران را پیدا کنند. باسکول محیطی برای معاملات عمده فراهم کرده است تا تولیدکنندگان یکی از دغدغه های اصلی یعنی فروش محصولات خود را به راحتی حل کنند. اگر فروشنده هستید می توانند با ثبت محصول خود و دسترسی به درخواست های خرید، محصول خود را به راحتی به فروش برسانید و مشتریان جدیدی پیدا کنید. با مراجعه به بخش درخواست های خرید به صورت روزانه می توانید به صورت مستقیم با خریدار عمده ارتباط داشته باشید و با اطلاع از بازار با قیمت و شرایط بهتر محصول خود را به فروش برسانید. به راحتی فضای کاری خود را به دنیای دیجیتال گسترش دهید تا همه با برند و نام شما آشنا شوند و محصولات خود را به خریداران در سراسر ایران معرفی کنید.
                        </div>
                        <a role="button" class="collapsed" id="note-close" data-toggle="collapse" href="#note-text"
                           aria-expanded="false" aria-controls="collapseExample">

                        </a>
                    </div>
                </div>
            </div>
        </footer>

        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <ul class="social-icon">
                            <li>
                                <a
                                        href="https://www.instagram.com/buskool.ir/"
                                        class="fab fa-instagram wow"
                                        @click="registerComponentStatistics('footer','instagram','click-on-instagram')"
                                ></a>
                            </li>

                            <li>
                                <a
                                        href="https://t.me/buskool"
                                        class="fab fa-telegram wow"
                                        @click="registerComponentStatistics('footer','telegram','click-on-telegram')"
                                ></a>
                            </li>

                            <li>
                                <a
                                        href="https://www.linkedin.com/company/27058131/ "
                                        class="fab fa-linkedin wow"
                                        @click="registerComponentStatistics('footer','linked-in','click-on-linked-in')"
                                ></a>
                            </li>

                            <li>
                                <a
                                        href="https://twitter.com/buskool_BS"
                                        class="fab fa-twitter wow"
                                        @click="registerComponentStatistics('footer','twitter','click-on-twitter')"
                                ></a>
                            </li>

                            <li>
                                <a
                                        href="https://www.facebook.com/buskool1/"
                                        class="fab fa-facebook wow"
                                        @click="registerComponentStatistics('footer','facebook','click-on-facebook')"
                                ></a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-xs-12 col-sm-6">
                        <p class="wow copy-right">تمام حقوق مادی و معنوی سایت متعلق به باسکول است.</p>
                    </div>
                </div>
            </div>
        </div>

        <a href="#back-top" class="go-top">
            <i class="fa fa-angle-up"></i>
        </a>
    </div>
</template>

<script>
    export default {
        methods: {
            registerComponentStatistics: function (categoryName, actionName, labelName) {
                gtag("event", actionName, {
                    event_category: categoryName,
                    event_label: labelName
                });
            }
        }
    };
</script>
