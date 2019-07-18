<template>
    <div id="wrap-footer">
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4">
                        <ul class="list-unstyled footer-list">
                            <li>
                                <a  class="smoothScroll" href="/pricing">تعرفه ها</a>
                            <li>
                            <li>
                                <a  class="smoothScroll" href="#"> قیمت روزانه</a>
                            <li>
                                <a  class="smoothScroll" href="/privacy-and-policy">قوانین و مقررات</a>
                            </li>
                            <li>

                                <a  class="smoothScroll" href="/help">اینکوباک چگونه کار می کند؟ </a>
                            </li>
                            <li>

                                <a  class="smoothScroll" href="/about-us">درباره ما</a>
                            </li>
                            <li>

                                <a  class="smoothScroll" href="/contact-us">ارتباط با ما</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4 contact-us">
                        <p>آدرس</p>
                        <p>
                            شیراز، خیابان ارم کوچه 15 پلاک 264
                        </p>
                        <br/>
                        <p>تماس با ما
                        </p>
                        <p>‌09118413054 / 09178928266</p>
                    </div>

                </div>
            </div>
        </footer>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class=" col-xs-12 col-sm-6">
                        <ul class="social-icon">
                            <li>
                                <a href="https://www.instagram.com/incobac.ir/" class="fa fa-instagram wow "></a>
                            </li>
                            <li>
                                <a href="https://t.me/Incobac" class="fa fa-telegram wow "></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/27058131/ " class="fa fa-linkedin wow "></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/incobac" class="fa fa-twitter wow "></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/incobac/" class="fa fa-facebook wow "></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <p class="wow copy-right">تمام حقوق مادی و معنوی سایت متعلق به اینکوباک است.</p>
                    </div>
                </div>
            </div>
        </div>
        <div itemscope="" itemtype="http://schema.org/Review">
            <span itemprop="itemReviewed" content="اینکوباک"></span>
            <span itemprop="" itemtype="http://schema.org/Rating">4.5</span>
        </div>

        <!-- end of app tag -->
        <!-- Back top -->
        <a href="#back-top" class="go-top"><i class="fa fa-angle-up"></i></a>
    </div>
</template>
<style scoped >

    .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {
        float: right;
    }
    /*---------------------------------------
       Footer section
    -----------------------------------------*/

    #wrap-footer {
        background: #000122;
    }
    #wrap-footer footer {
        padding: 30px 0;
    }
    .footer-bottom{
        background: #000235;
        text-align: center;
        padding: 20px 0;
    }
    .social-icon a{
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
        direction:rtl;
    }
    footer a {
        direction:rtl;
    }
    .footer-list{
        text-align: right;
        line-height: 1.618;
    }
    .footer-list li{
        text-align: right;
        line-height: 1.618;
    }
    .footer-list a{
        color: #fff;
        padding: 7px 0;
        display: inline-block;
    }
    .footer-list a:hover{
        color: #00a65a;
    }
    /* Back top */
    .go-top {
        z-index: 1;
        background-color: #ffffff;
        box-shadow: 1px 1.732px 12px 0 rgba(0, 0, 0, .14), 1px 1.732px 3px 0 rgba(0, 0, 0, .12);
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
        background: #4dc11d;
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
        background: #4dc11d;
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
        border-right: 1px solid #4dc11d;
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

    .enamad  img {
        width: 200px;
        text-align: center;
        background: #fff;
        padding: 9px;
        border-radius: 5px;
        position: relative;
        top: 0;
        transition: 300ms;
    }
    .enamad  img:hover {
        top: -5px;
        box-shadow: 0 0 30px #000;
    }

    @media screen and (max-width : 767px) {
        .contact-us{
            border-top: 2px solid #f8f8f8;
            padding: 15px;
            margin: 15px 0;
        }
    }
</style>
