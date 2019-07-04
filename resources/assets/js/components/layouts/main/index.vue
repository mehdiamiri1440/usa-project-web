<style scoped>

    h1 {
        font-size: 60px;
    }

    h2 {
        font-size: 40px;
    }

    h3 {
        font-size: 32px;
        text-align: center;
        font-weight: bold;
        margin: 0;
    }

    h5 {
        color: #ddd;
        padding-top: 10px;
    }

    h6 {
        color: #666;
        font-weight: 500;

    }

    .owl-carousel .owl-stage-outer {
        padding: 10px 0 40px;
        direction: ltr;
    }

    .owl-nav {
        text-align: center;
        font-size: 45px;
    }

    .owl-prev {
        width: 50px;

        height: 50px;

        background: rgba(255, 255, 255, 0.7) !important;
        box-shadow: 0 0 5px #a5a5a5;
        overflow: hidden;
        margin: 0 20px;
        border-radius: 50px;
    }

    .owl-prev:hover {
        background: rgba(255, 255, 255, 1) !important;
        transition: 300ms;
        box-shadow: 0 0 25px #a5a5a5;
    }

    .owl-prev span {
        display: inline-block;

        top: -7px;

        position: relative;
    }

    .owl-next {
        width: 50px;

        height: 50px;
        box-shadow: 0 0 5px #a5a5a5;
        background: rgba(255, 255, 255, 0.7) !important;

        overflow: hidden;

        border-radius: 50px;
        margin: 0 20px;
    }

    .owl-next:hover {
        background: rgba(255, 255, 255, 1) !important;
        transition: 300ms;
        box-shadow: 0 0 25px #a5a5a5;
    }

    .owl-next span {
        display: inline-block;

        top: -7px;

        position: relative;
    }

    .section-title {
        margin-bottom: 32px;
        direction: rtl;
    }

    #request,
    #blog,
    #rice,
    #mobile-rice,
    #mobile-date,
    #testimonial
    {
        padding-top: 60px;
        padding-bottom: 60px;
    }

    #detail {
        padding-top: 20px;
        padding-bottom: 40px;
    }

    #request,
    #blog,
    #rice,
    #mobile-rice,
    #mobile-date,
    #testimonial {
        text-align: center;
    }
    #rice {
        background-color: #f0f0f0;
    }
    .parallax-section {
        background-attachment: fixed !important;
        background-size: cover !important;
    }

    /*---------------------------------------
        Preloader section
    -----------------------------------------*/
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99999;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        background: none repeat scroll 0 0 #ffffff;
    }

    .sk-spinner-pulse {
        width: 100px;
        height: 100px;
        background-color: #1abc9c;
        border-radius: 100%;
        -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;
        animation: sk-pulseScaleOut 1s infinite ease-in-out;
    }

    @-webkit-keyframes sk-pulseScaleOut {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 0;
        }
    }

    @keyframes sk-pulseScaleOut {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 0;
        }
    }

    /*---------------------------------------
        Navigation Links section
    -----------------------------------------*/
    .custom-navbar {
        margin-bottom: 0;
        background-color: #ffffff;
    }

    .custom-navbar .navbar-brand {
        width: 135px;
        text-align: center;
        margin: 10px auto;
        display: inline-block;

        background-size: contain;
    }

    .logo-des {
        color: #373737;
        float: left;
        padding: 24px 5px 0;
    }

    .main-logo {
        width: 30%;
        margin: 0 auto;
    }

    .main-logo img {
        width: 100%;
    }

    .custom-navbar .nav li a {
        color: #000;
        font-weight: 400;
        padding: 10px 15px;
        text-transform: uppercase;
        line-height: 20px;
        transition: all 0.4s ease-in-out;
    }

    .top-nav-collapse .nav li a {
        color: black;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 20px;
        transition: all 0.4s ease-in-out;
    }

    .top-nav-collapse .nav .ads {
        color: white;
        font-weight: 400;
    }

    .top-nav-collapse .nav {
        padding-top: 16px;
    }

    .nav.navbar-nav.navbar-left {
        padding-top: 16px;
    }

    .custom-navbar .nav li a:hover {
        background: transparent;
        color: #4dc11d;
    }

    .custom-navbar .navbar-nav > li > a:hover,
    .custom-navbar .navbar-nav > li > a:focus {
        background-color: transparent;
    }

    .custom-navbar .nav li.active > a {
        background-color: transparent;
        color: #4dc11d;
    }

    .custom-navbar .navbar-toggle {
        border: none;
        padding-top: 10px;
    }

    .custom-navbar .navbar-toggle {
        background-color: transparent;
    }

    .custom-navbar .navbar-toggle .icon-bar {
        background: #4dc11d;
        border-color: transparent;
    }

    .ads {
        background-color: #46ae1b;
        border-radius: 50px;
        text-align: center;
        color: #fff !important;
        margin: 0 5px;
    }

    .ads:hover {
        background-color: #4dc11d !important;
        border-radius: 50px;
        text-align: center;
    }

    @media (max-width: 1120px) {
        .logo-des {
            display: none;
        }

    }

    @media (max-width: 992px) {
        .content_service {

            font-size: 15px;

        }

        .content_service {
            font-size: 14px;
        }

    }

    @media (max-width: 880px) {
        .navbar-brand {
            padding: 0;
            width: 150px;
            background-size: 100%;
        }

        .top-nav-collapse .nav li a {
            padding: 11px 30px;
        }

        .custom-navbar .nav li a {
            padding: 11px 30px;
        }
    }

    @media (min-width: 768px) {
        .content_service {
            font-size: 14px;
        }

        .custom-navbar {
            border-bottom: 0;
            background: #fff;
        }

        .custom-navbar.top-nav-collapse {
            background: #ffffff;
            box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.04);
        }

    }

    @media ( max-width: 768px) {
        .content_service {
            text-align: center;
            display: inline-block;
        }

        .ads {
            background-color: #46ae1b;
            border-radius: 50px;
            text-align: center;
            color: #fff !important;
            margin: 0 5px;
        }

        .float_li {

            float: right;
            padding: 0 7px;
            width: 50%;

        }

        .custom-navbar {
            padding: 0;
            border-bottom: 0;
            background: #fff;
        }

        .custom-navbar.top-nav-collapse {
            background: #ffffff;
            box-shadow: 0 2px 8px 0 rgba(50, 50, 50, 0.04);
            padding: 0;
        }

    }

    /*---------------------------------------
        Intro section
    -----------------------------------------*/

    #intro {
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center center;
        color: #ffffff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 110px 0 30px;
        text-align: center;
        position: relative;
        overflow: hidden;
        direction: rtl;
    }

    #intro h2 {
        font-size: 32px;
    }

    #intro .gradient-overlay {
        /*background: rgba(00, 00, 00, 0.1);*/
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
    }

    #intro .btn {
        background: transparent;
        border: 3px solid #ffffff;
        border-radius: 8px;
        color: #ffffff;
        font-size: 15px;
        font-weight: 500;
        padding: 10px 60px;
        margin-right: 12px;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        margin-bottom: 10px;
    }

    #intro .btn-purple {
        background: rgba(0, 0, 85, 0.7);
    }

    #intro .btn-green {
        background: rgba(20, 139, 0, 0.7);
    }

    #intro .btn-purple:hover {
        background: rgba(0, 0, 85, 1);
    }

    #intro .btn-green:hover {
        background: rgba(20, 139, 0, 1);
    }

    .btn-incobac {
        background: #3c9544;
        border-radius: 3px;
        color: #ffffff;
        font-size: 15px;
        font-weight: 500;
        padding: 10px;
        display: block;
        transition: 200ms;
    }

    .btn-incobac:hover {
        background: #52ba27;;
        color: #fff;
        transition: 200ms;
    }

    .mouse-animation {
        margin: 110px 0 10px -14px;
    }

    .mouse-animation > a {
        display: inline-block;
        border: 2px solid;
        color: #fff;
        width: 50px;
        height: 50px;
        padding-top: 6px;
        border-radius: 50px;
        transition: 300ms;
    }

    .mouse-animation > a:hover {
        background: #ffffff;
        color: #333333;
        transition: 300ms;
        border-color: #fff;

    }

    .mouse-animation span {
        font-size: 40px;
        animation: animationFrames linear 4s;
        animation-iteration-count: infinite;
        transform-origin: 50% 50%;
        -webkit-animation: animationFrames linear 4s;
        -webkit-animation-iteration-count: infinite;
        -webkit-transform-origin: 50% 50%;
        -moz-animation: animationFrames linear 4s;
        -moz-animation-iteration-count: infinite;
        -moz-transform-origin: 50% 50%;
        -o-animation: animationFrames linear 4s;
        -o-animation-iteration-count: infinite;
        -o-transform-origin: 50% 50%;
        -ms-animation: animationFrames linear 4s;
        -ms-animation-iteration-count: infinite;
        -ms-transform-origin: 50% 50%;
    }

    /*animation mouse*/

    @keyframes animationFrames {
        0% {
            transform: translate(0px, 0px);
        }
        10% {
            transform: translate(0px, 10px);
        }
        21% {
            transform: translate(0px, 0px);
        }
        30% {
            transform: translate(0px, 10px);
        }
        40% {
            transform: translate(0px, 0px);
        }
        100% {
            transform: translate(0px, 0px);
        }
    }

    @-moz-keyframes animationFrames {
        0% {
            -moz-transform: translate(0px, 0px);
        }
        10% {
            -moz-transform: translate(0px, 10px);
        }
        21% {
            -moz-transform: translate(0px, 0px);
        }
        30% {
            -moz-transform: translate(0px, 10px);
        }
        40% {
            -moz-transform: translate(0px, 0px);
        }
        100% {
            -moz-transform: translate(0px, 0px);
        }
    }

    @-webkit-keyframes animationFrames {
        0% {
            -webkit-transform: translate(0px, 0px);
        }
        10% {
            -webkit-transform: translate(0px, 10px);
        }
        21% {
            -webkit-transform: translate(0px, 0px);
        }
        30% {
            -webkit-transform: translate(0px, 10px);
        }
        40% {
            -webkit-transform: translate(0px, 0px);
        }
        100% {
            -webkit-transform: translate(0px, 0px);
        }
    }

    @-o-keyframes animationFrames {
        0% {
            -o-transform: translate(0px, 0px);
        }
        10% {
            -o-transform: translate(0px, 10px);
        }
        21% {
            -o-transform: translate(0px, 0px);
        }
        30% {
            -o-transform: translate(0px, 10px);
        }
        40% {
            -o-transform: translate(0px, 0px);
        }
        100% {
            -o-transform: translate(0px, 0px);
        }
    }

    @-ms-keyframes animationFrames {
        0% {
            -ms-transform: translate(0px, 0px);
        }
        10% {
            -ms-transform: translate(0px, 10px);
        }
        21% {
            -ms-transform: translate(0px, 0px);
        }
        30% {
            -ms-transform: translate(0px, 10px);
        }
        40% {
            -ms-transform: translate(0px, 0px);
        }
        100% {
            -ms-transform: translate(0px, 0px);
        }
    }

    /*end*/
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

    .green-bot:focus, .gray-bot:focus {
        color: #fff;
    }


    .green-bot:hover {
        color: #fff;
        background: #00d614;
        transition: 300ms;

    }

    .blue-bot:hover {
        color: #fff;
        background: #160F55;
        transition: 300ms;

    }

    #intro .btn-danger {
        background: #4dc11d;
        border-color: #4dc11d;
        color: #ffffff
    }

    #intro .btn-danger:hover {
        background: transparent;
        border-color: #ffffff;
        color: #ffffff;
    }

    #intro .btn-default:hover {
        background: #4dc11d;
        color: #ffffff;
        border-color: transparent;
    }

    .search_input {
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        padding: 0;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .search_input button {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 85, 0.7);
        border: none;
        padding: 0 30px;
        bottom: 0;
        transition: 250ms;
    }

    .search_input button:hover {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 85, 1);
        border: none;
        padding: 0 30px;
        bottom: 0;
        transition: 250ms;
    }

    .search_input input {
        width: 100%;
        padding: 10px 15px;
        border: none;
        background: rgba(255, 255, 255, 0.8);
        color: #333;
        direction: rtl;
    }

    /*---------------------------------------
        request section
    -----------------------------------------*/
    #services {
        padding-bottom: 50px;
    }

    #services .row > h2 {
        text-align: center;

        margin: 45px auto -25px;
    }

    .title_image_service img {
        padding: 30px 50px;
        padding-bottom: 0;
    }

    .title_service {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .content_service {
        font-size: 16px;
        text-align: justify;
        color: #3B3B3B;
        line-height: 1.618em;
        display: inline-block;
    }

    .content_service ul {
        color: #15CBBD;
        direction: rtl;
        list-style: disc;
    }

    .content_service ul li span {
        color: #333333;
    }

    /*---------------------------------------
        request section
    -----------------------------------------*/

    .detail-thumb {
        border-radius: 7px;
        text-align: center;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        padding: 15px;
    }
    /*

        .request_image {
            height: 170px;
            width: 100%;
            overflow: hidden;
        }

        .request_image {
            height: 190px;
            width: 100%;
            overflow: hidden;
        }
    */

    .request_image img {
        width: 100%;
        min-height: 190px;
    }

    #request h3 {
        color: #fff;
    }
    .detail-thumb h4 {
        height: 28px;
    }

    /*  #request .detail-thumb .img-thumb {
          width: 100%;
          height: 250px;
          margin-bottom: 20px;
          overflow: hidden;
      }*/

    #request .detail-thumb .img-thumb img {
        height: 100%;

    }


    /*---------------------------------------
        recent section
    -----------------------------------------*/
    #recent .detail-thumb {
        border-radius: 7px;
        text-align: center;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        padding: 15px;
    }

    /*---------------------------------------
        Detail section
    -----------------------------------------*/

    #detail {
        background: #f0f0f0;
    }
    #detail h2 {
        padding-bottom: 10px;
    }

    #detail hr {
        border-bottom: 2px solid #4dc11d;
        width: 42px;
    }

    #request .img-responsive {
        height: 190px;
    }

    .detail-thumb {
        border-radius: 4px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(90, 91, 95, 0.15);
        transition: all 0.3s ease-in-out;
        position: relative;
        top: 0;
        padding: 20px 10px;
        margin-top: 15px;
    }

    .detail-thumb:hover {
        box-shadow: 0 16px 22px 0 rgba(90, 91, 95, 0.3);
        top: -5px;
    }

    .detail-thumb .fa {
        font-size: 42px;
    }

    .detail-thumb h4 {
        font-size: 14px;
    }

    /*---------------------------------------
        Feature section
    -----------------------------------------*/

    #feature .media {
        padding-top: 22px;
    }

    #feature .media:last-child {
        padding-top: 6px;
    }

    #feature h2,
    #feature h3 {
        padding-bottom: 4px;
    }

    #feature .media .fa {
        background-color: #4dc11d;
        border-radius: 2px;
        color: #ffffff;
        font-size: 22px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        vertical-align: middle;
        margin-left: 12px;
    }

    /*---------------------------------------
        Video section
    -----------------------------------------*/
    /*

        #video {
            background: url('../images/feature-img1.jpg') 50% 0 repeat-y fixed;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: center center;
            position: relative;
            color: #999;
        }
    */

    #video .overlay {
        background: rgba(03, 03, 03, 0.7);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }

    #video h2 {
        color: #ffffff;
        padding-top: 20px;
        padding-bottom: 16px;
    }

    #video .fa {
        position: relative;
        background-color: #4dc11d;
        border-radius: 100%;
        color: #ffffff;
        font-size: 38px;
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        vertical-align: middle;
        padding-left: 12px;
        margin-top: 22px;
    }

    #video p {
        font-size: 20px;

        line-height: 32px;
    }

    /*---------------------------------------
       Team section
    -----------------------------------------*/

    #team img {
        border-radius: 2px;
        width: 100%;
        max-width: 100%;
        height: auto;
    }

    #team .col-md-4 {
        display: block;
        width: 100%;
        padding-top: 30px;
        padding-bottom: 20px;
        margin-bottom: 22px;
    }

    #team .social-icon li a {
        border-radius: 0;
    }

    #team .team-thumb {
        margin-bottom: 42px;
        position: relative;
    }

    #team .team-thumb .team-overlay {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: all 0.4s ease-in-out;
        opacity: 0;
    }

    #team .team-thumb .team-overlay .team-item {
        background-color: #ffffff;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    #team .team-thumb:hover .team-overlay {
        opacity: 0.9;
    }

    /*---------------------------------------
       Faq section
    -----------------------------------------*/

    #faq {
        background: #f9f9f9;
        padding-top: 8rem;
        padding-bottom: 8rem;
    }

    #faq .panel-group {
        margin-top: 32px;
    }

    #faq .panel-group .panel {
        margin-bottom: 8px;
    }

    #faq .panel-default {
        border: none;
    }

    #faq .panel-default > .panel-heading {
        background: #f0f0f0;
        color: #505050;
    }

    #faq .panel-heading {
        border: none;
        padding-top: 8px;
        padding-bottom: 6px;
    }

    #faq .panel-default > .panel-heading + .panel-collapse > .panel-body {
        border-top: none;
        padding-top: 22px;
        padding-left: 32px;
        padding-bottom: 22px;
    }

    #faq .panel-heading .panel-title a[data-toggle="collapse"] {
        font-size: 18px;
        font-weight: 300;
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        padding: 10px 15px;
    }

    #faq .panel-heading .panel-title a[data-toggle="collapse"]::after {
        content: "-";
        display: block;
        position: absolute;
        line-height: 1;
        left: 1em;
        top: 50%;
        transform: translateY(-50%);
    }

    #faq .panel-heading .panel-title a[data-toggle="collapse"].collapsed::after {
        content: "+";
    }

    /*---------------------------------------
        Pricing section
    -----------------------------------------*/

    #pricing .pricing-thumb {
        border: 2px solid #f9f9f9;
        padding: 40px 34px;
        margin-top: 32px;
    }

    #pricing .pricing-title h3 {
        color: #666;
    }

    #pricing .pricing-month {
        padding: 20px;
    }

    #pricing .pricing-month h2 {
        color: #4dc11d;
    }

    #pricing .pricing-thumb p {
        border-bottom: 1px solid #f9f9f9;
        padding-bottom: 10px;
    }

    /*---------------------------------------
       Testimonial section
    -----------------------------------------*/

    #testimonial {

        -webkit-background-size: cover;
        background-size: cover;
        background-position: center center;
        color: #ffffff;
        position: relative;
        padding-top: 35px;
        padding-bottom: 15px;
    }

    #testimonial .wow.bounceIn.col-md-6.col-sm-12.animated {
        float: left;
    }

    #video-bg {
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        width: 100%;
    }

    #testimonial .overlay {
        background: black;
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }

    #testimonial img {
        display: inline-block;
        padding: 8px;
        width: 135px;
    }

    #testimonial h3 {
        color: rgba(250, 250, 250, 0.8);
        line-height: 38px;
        font-weight: 300;
    }

    #testimonial .section-title h3 {
        font-size: 25px;

    }

    #testimonial .section-title h3 span {
        font-size: 45px;
        font-weight: bold;

    }

    #testimonial p {
        color: #ffffff;
        font-size: 18px;
        font-weight: 400;
    }

    #testimonial .owl-theme .owl-controls .owl-page span {
        background: #ffffff;
    }

    /*---------------------------------------
       Contact section
    -----------------------------------------*/

    #contact .contact_detail {
        padding-top: 40px;
    }

    #contact .addr,
    #contact .ph {
        padding-bottom: 6px;
    }

    #contact .form-control {
        background: transparent;
        border: none;
        border-bottom: 1px solid #f0f0f0;
        border-radius: 0;
        box-shadow: none;
        font-size: 18px;
        margin-bottom: 16px;
        transition: all 0.4s ease-in-out;
    }

    #contact .form-control:focus {
        border-bottom-color: #999;
    }

    #contact input {
        height: 45px;
    }

    #contact input[type="submit"] {
        background: #4dc11d;
        border-radius: 100px;
        border: none;
        color: #ffffff;
        font-size: 20px;

        height: 50px;
        margin-top: 12px;
        transition: all 0.4s ease-in-out;
    }

    #contact input[type="submit"]:hover {
        background: #242424;
    }

    /*---------------------------------------
       Footer section
    -----------------------------------------*/

    footer {
        background: #000122;
    }

    .footer-bottom {
        background: #000235;
        text-align: center;
        padding: 20px 0;
    }

    .social-icon a {
        border: 1px solid;
        margin: 7px;
    }

    .social-icon, .footer-bottom p {
        display: inline;
        margin: 30px;
    }

    footer p {
        text-align: right;
        color: white;
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

    .enamad img {
        width: 200px;
        text-align: center;
        background: #fff;
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

    /*---------------------------------------
       Responsive styles
    -----------------------------------------*/
    @media screen and (max-width: 1249px) {
        #video-bg {
            width: inherit;
            height: 100%;
        }
    }

    @media screen and (max-width: 1200px) {
        .content_service {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 992px) {
        .content_service {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 980px) {
        .main_hover {
            position: absolute;
            top: 40%;
            left: 0;
            right: 0;
            width: 80%;
            margin: 0 auto;
        }

        .main_hover a {
            width: 100%;
            padding: 10px;
            margin: 10px auto;
            font-size: 14px;
            font-weight: 800;
        }

        .main_hover p {
            color: #fff !important;
            font-size: 16px;
            line-height: 1.618;
        }
    }

    @media screen and (max-width: 768px) {
        footer p {
            text-align: center;
            color: white;
        }

        .footer-list li {
            text-align: center;
        }

        .content_service {
            font-size: 20px;
        }

        .main-logo {
            display: none;
        }

        #intro {
            padding: 85px 0 30px;
        }

        .main_hero_section {
            padding: 0;
            margin-top: 20px;
        }

        .mouse-animation {
            margin: 40px 0 10px -14px;
        }

        .user-header-mobile .profile-menu-header {
            padding: 20px 0 0;
            float: left;
        }

        .user-header-mobile .profile-list {
            left: 30px;
            top: 70px;
        }

        h1 {
            font-size: 41px;
        }

        h2 {
            font-size: 31px;
        }

        h3 {
            font-size: 20px;
        }

        h5 {
            line-height: 24px;
        }

        .custom-navbar .navbar-brand {
            line-height: 18px;
        }

        .custom-navbar .navbar-nav li a {
            line-height: 25px;
        }

        /*    #intro {
                height: 485px;
            }*/
        #video p {
            font-size: 18px;
        }

        .custom-navbar .navbar-toggle {
            float: right;
            width: 20%;
            text-align: center;
            padding-top: 31px;
            padding-right: 30px;
            margin: 0;
        }

        .cta-bot {
            display: none !important;
        }

        .cta-bot.cta-bot-mobile {
            display: inline-block !important;
        }
    }

    @media screen and (max-width: 767px) {

        .user-header-mobile {
            display: block;
            float: left;
            margin-left: 30px;
        }

        .user-header-web {
            display: none !important;
        }

        .profile-menu-header > a {
            border-right: none;
        }

        .custom-navbar .navbar-brand {
            display: block;
            margin: 8px auto;
            float: none;
        }

        .image-header-profile {
            margin-top: -15px;
        }

    }

    @media screen and (max-width: 534px) {
        .content_service {
            font-size: 16px;
        }

        .custom-navbar .navbar-brand {
            line-height: 18px;
        }

        #video-bg {
            right: -70px;
        }

        #intro .btn {
            border: 3px solid #ffffff;
            border-radius: 8px;
            color: #ffffff;
            font-size: 15px;
            font-weight: 500;
            padding: 10px 60px;
            width: 100%;

            margin: 10px auto;

        }
    }

    @media screen and (max-width: 432px) {
        .title_service {
            font-size: 16px;
            line-height: 1.618;
        }

        .content_service {
            text-align: right;
            font-size: 14px;
            line-height: 1.618;
        }

        .custom-navbar .navbar-brand {
            width: 55%;
            background-size: 50%;
            background-position: 50% 50%;
            background-repeat: no-repeat;

        }

        .user-header-mobile {
            display: block;
            float: left;
            margin-left: 30px;
        }

        #video-bg {
            right: -200px;
        }
    }

    @media screen and (max-width: 338px) {
        .custom-navbar .navbar-brand {
            width: 55%;
        }

    }

    @media screen and (max-width: 313px) {
        /*  #intro {
              height: 470px;
          }*/
        .custom-navbar .navbar-toggle {
            float: right;
            width: 20%;
            text-align: center;
            padding-top: 31px;
            padding-right: 17px;
            margin: 0;
        }

        .user-header-mobile {
            display: block;
            float: left;
            margin-left: 32px;
        }

    }

    @media screen and (max-width: 293px) {
        .main_hero_section {
            padding: 0;
            margin-top: 83px;
        }

        /*    #intro {
                height: 391px;
            }*/
    }


</style>

<template>
    <div>

        <!-- =========================
        INTRO SECTION
        ============================== -->


        <section id="intro" class="parallax-section">
            <div class="particle-network-animation"></div>
            <div class="container-fluid main_hero_section col-xs-12">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <h1 class="wow fadeIn main-logo" data-wow-delay="1s"><img
                                    :src="site_logo_white">
                            </h1>
                            <h2 class="wow fadeIn" data-wow-delay="1.2s">اینکوباک | سامانه خرید و فروش عمده محصولات
                                کشاورزی</h2>
                        </div>
                        <div class="col-xs-12">

                            <div class="search_input col-xs-12 col-sm-8 col-sm-offset-2">
                                <input type="text" placeholder="محصول مورد نظر خود را جستجو کنید"
                                       v-model="mainSearchBoxText">
                                <button class="fa fa-search" @click="search"></button>
                            </div>

                        </div>
                        <div class="col-xs-12">
                            <a href="/login" class="btn btn-purple  smoothScroll wow fadeInUp"
                               data-wow-delay="1.4s">ورود به سامانه</a>
                            <a href="/product-list" class="btn btn-green smoothScroll wow fadeInUp "
                               data-wow-delay="1.4s"> لیست محصولات</a>
                        </div>
                        <div class="col-xs-12">
                            <div class="mouse-animation">
                                <a href="#detail"> <span class="fa fa-angle-down"></span></a>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </section>


        <!-- =========================
       mobile sliders
        ============================== -->

        <!--{{اسلایدر خرما}}-->
        <section id="mobile-date" class="parallax-section hidden-sm hidden-md hidden-lg">
            <div class="container">
                <div class="row">
                    <h3 class="text-center col-xs-12"> خرما</h3>
                    <div class="text-center col-xs-12">
                        <a href="/product-list" class="green-bot">
                            مشاهده همه محصولات
                        </a>
                    </div>
                    <div class="owl-carousel col-xs-12">

                        <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                            <image-viewer
                                    :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                    :img="'storage/' + product.photos[0].file_path"
                                    :link="'/product-list/' + product.main.sub_category_name"
                            >
                            </image-viewer>
                        </article>

                    </div>
                </div>
            </div>
        </section>
        <!--{{پایان اسلایدر خرما }}-->


        <!--{{اسلایدر برنج }}-->
        <section id="mobile-rice" class="parallax-section hidden-sm hidden-md hidden-lg">
            <div class="container">
                <div class="row">
                    <h3 class="text-center col-xs-12"> برنج</h3>
                    <div class="text-center col-xs-12">
                        <a href="/product-list" class="green-bot">
                            مشاهده همه محصولات
                        </a>
                    </div>
                    <div class="owl-carousel col-xs-12">

                        <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                            <image-viewer
                                    :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                    :img="'storage/' + product.photos[0].file_path"
                                    :link="'/product-list/' + product.main.sub_category_name"
                            >
                            </image-viewer>
                        </article>

                    </div>
                </div>
            </div>
        </section>
        <!--{{ پایان اسلایدر برنج }}-->


        <!-- =========================
        DETAIL SECTION
        ============================== -->

        <section id="detail" class="parallax-section">
            <div class="container">

                <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                    <div class="detail-thumb">
                        <img :src="img_one" class="img-responsive">
                        <h4>خرید و فروش بی واسطه</h4>
                    </div>
                </div>

                <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                    <div class="detail-thumb">
                        <img :src="img_two" class="img-responsive">
                        <h4>گسترش ارتباط تجاری</h4>
                    </div>
                </div>

                <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                    <div class="detail-thumb">
                        <img :src="img_three" class="img-responsive">
                        <h4>یافتن شرکای مطمئن</h4>
                    </div>
                </div>


                <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                    <div class="detail-thumb">
                        <img :src="img_four" class="img-responsive">
                        <h4>دسترسی مستقیم به افراد </h4>
                    </div>
                </div>
                <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                    <div class="detail-thumb">
                        <img :src="img_five" class="img-responsive">
                        <h4> اعتبار سنجی اعضا </h4>
                    </div>
                </div>
                <div class="wow fadeIn col-md-2 col-sm-4 col-xs-6" data-wow-delay="0.9s">
                    <div class="detail-thumb">
                        <img :src="img_six" class="img-responsive">
                        <h4>افزایش اعتماد و شفافیت</h4>
                    </div>
                </div>
            </div>

        </section>

        <!-- =========================
        SERVICES SECTION
        ============================== -->

        <section id="services" class="parallax-section">
            <div class="container">
                <div class="row">
                    <h2>خدمات اینکوباک</h2>
                    <div class="col-xs-12 col-sm-6">
                        <div class="title_image_service">
                            <img :src="img_buyer_services" alt="">
                        </div>
                        <div class="contents_service text-center">
                            <h3 class="title_service">
                                خدمات خریداران و تجار
                            </h3>
                            <div class="content_service">
                                <ul>
                                    <li><span>استعلام قیمــت از تامیــن کننــدگان و کشــاورزان</span>
                                    </li>
                                    <li><span>استفـــاده از خدمات نظارت و بازرســی محصـــول</span>
                                    </li>

                                    <li><span>دستـرسی گستــرده به کشـاورزان و تولیـد کننـدگان</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6">
                        <div class="title_image_service">
                            <img :src="img_seller_services" alt="">
                        </div>
                        <div class="contents_service text-center">
                            <h3 class="title_service">
                                خدمات تامین کنندگان

                            </h3>
                            <div class="content_service">
                                <ul>
                                    <li><span>ساخت پروفایل حرفه ای جهــت فروش محصـولات</span>
                                    </li>
                                    <li><span>دسترســـی به خریــداران واقعــی جهــت فروش</span>
                                    </li>
                                    <li><span>بهره مندی از مشاوره تخصصی کارشناسان اینکوباک</span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <!-- =========================
         WEB RICE AND DATE SLIDER
        ============================== -->

        <section id="request" class="parallax-section  hidden-xs">
            <div class="container">
                <div class="row">
                    <h3 class="text-center col-xs-12"> خرما</h3>
                    <div class="text-center col-xs-12">
                        <a href="/product-list" class="green-bot">
                            مشاهده همه محصولات
                        </a>
                    </div>
                    <div class="owl-carousel col-xs-12">

                        <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                            <image-viewer
                                    :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                    :img="'storage/' + product.photos[0].file_path"
                                    :link="'/product-list/' + product.main.sub_category_name"
                            >
                            </image-viewer>
                        </article>

                    </div>
                </div>
            </div>
        </section>

        <section id="rice" class="parallax-section  hidden-xs">
            <div class="container">
                <div class="row">
                    <h3 class="text-center col-xs-12"> برنج</h3>
                    <div class="text-center col-xs-12">
                        <a href="/product-list" class="green-bot">
                            مشاهده همه محصولات
                        </a>
                    </div>
                    <div class="owl-carousel col-xs-12">

                        <article class="wow fadeIn " data-wow-delay="0.4s" v-for="product in homePageProducts">
                            <image-viewer
                                    :title="product.main.sub_category_name + ' - ' + product.main.product_name"
                                    :img="'storage/' + product.photos[0].file_path"
                                    :link="'/product-list/' + product.main.sub_category_name"
                            >
                            </image-viewer>
                        </article>

                    </div>
                </div>
            </div>
        </section>


        <!-- =========================
        TESTIMONIAL SECTION
        ============================== -->

        <section id="testimonial" class="">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class=" wow bounceIn col-xs-12 col-sm-6">
                        <div class="section-title">
                            <figure>
                                <img :src=" img_success_verified" class="img-responsive"
                                     alt="feature"></figure>
                            <h3><span>50</span>
                                تامین کننده تایید شده
                            </h3>
                        </div>
                    </div>
                    <div class=" wow bounceIn col-xs-12 col-sm-6">
                        <div class="section-title">
                            <figure>
                                <img :src="img_success_project" class="img-responsive"
                                     alt="feature"></figure>
                            <h3>
                                <span>10</span>
                                پروژه موفق انجام شده
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- =========================
        RECENT BLOG POSTS SECTION
        ============================== -->
        <section id="blog" class="parallax-section ">
            <div class="container">
                <div class="row">
                    <h3 class="text-center col-xs-12"> وبلاگ اینکوباک</h3>
                    <div class="owl-carousel col-xs-12">

                        <article class="wow fadeIn " data-wow-delay="0.4s" v-for="post in posts">
                            <image-viewer
                                    :title="post.post_title"
                                    :img="post.img_url"
                                    :link="post.guid"
                                    :content="post.post_content.substr(0,150) + '...'"
                            >
                            </image-viewer>
                        </article>

                    </div>
                </div>
            </div>
        </section>


    </div>

</template>

<script>
    import {eventBus} from "../../../router/dashboard_router";
    var viz = false;
    var OwlCarousel = {
        data: function () {
            return {
                imgSrcs: '',
            };
        },
        props: ['img', 'title', 'link','content'],
        template: "<div class='detail-thumb'>"
            +
            "<img :src='img' class='img-responsive'>"
            + "<h4>{{title}}</h4>"
            + "<p v-if='content'>{{content}}</p>"
            + "<a v-if='!content' :href='link' class='blue-bot'>مشاهده محصول</a>"
            + "<a v-else :href='link' class='blue-bot'>بیشتر بخوانید</a>"
            + "</div>",
        mounted: function () {
            $(".owl-carousel").owlCarousel({
                autoplay: true,
                autoplayTimeout: 2000,
                loop: true,
                nav: true,
                navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
                items: 4,
                mouseDrag: true,
                margin: 30,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 15
                    },
                    450: {
                        items: 2,
                        stagePadding: 15
                    },
                    600: {
                        items: 3,
                        stagePadding: 15
                    },
                    992: {
                        items: 4,
                    }
                }
            });
        }
    };
    export default {
        props: [
            'img_success_project',
            'img_success_verified',
            'img_seller_services',
            'img_buyer_services',
            'img_six',
            'img_five',
            'img_four',
            'img_three',
            'img_two',
            'img_one',
            'site_logo_white',
        ],
        components: {
            'image-viewer': OwlCarousel,
        },
        data: function () {
            return {
                posts: '',
                mainSearchBoxText: '',
                enterKeyActiveForSearch: false,
                homePageProducts: '',

            }
        },
        methods: {
            loader:function(){
                this.$nextTick(function () {
                    eventBus.$emit('finishLoad', false);
                });
            },
            dropdown: function () {
                $(".profile-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            dropdownList: function () {
                $(".icon-header-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            documentClick(e) {
                if (viz) {
                    $('.profile-list').fadeOut("slow");
                    $('.icon-header-list').fadeOut("slow");
                    viz = false;

                }
            },
            init: function () {
                var self = this;

                axios.post('/get_wp_posts')
                    .then(function (response) {
                        self.posts = response.data.posts;
                    });

                axios.post('/user/get_product_list', {
                    from_record_number: 0,
                    to_record_number: 5,
                }).then(function (response) {
                    self.homePageProducts = response.data.products;
                });
            },
            search: function () {
                if (this.mainSearchBoxText != '') {
                    //redirect to product-list with
                    window.location.href = '/product-list/' + this.mainSearchBoxText;
                }
            },
        },
        mounted: function () {
            this.init();
        },
        updated: function(){
            this.loader();
        },
        created() {
            document.addEventListener('click', this.documentClick)
            var self = this;
            window.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    if (self.enterKeyActiveForSearch) {
                        self.search();
                    }
                }
            });
        },
        watch: {
            mainSearchBoxText: function () {
                if (this.mainSearchBoxText != '') {
                    this.enterKeyActiveForSearch = true;
                }
                else {
                    this.enterKeyActiveForSearch = false;
                }
            }
        }

    }
</script>
