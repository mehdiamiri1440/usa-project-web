<style>

    body{
        background: #f9f9f9;
    }

    #main-content {
        margin-bottom: -60px;
    }

    .owl-dots {
        position: absolute;
        left: 50px;
        z-index: 1;
        padding-top: 18px;
        display: block;
        text-align: center;
        width: calc(100% - 100px);
        bottom: -10px;
    }

   .owl-carousel .owl-stage-outer{
        padding-bottom: 15px;
    }

    .owl-nav span{

        color: #777;

        background: #fff;

        width: 50px;

        height: 50px;

        display: inline-block;

        border-radius: 50%;

        padding-top: 16px;

        font-size: 19px;

        box-shadow: 0 3px 6px rgba(0,0,0,0.16);

         transition: 200ms;
    }

    .owl-nav .owl-prev {

        left: -5px;

    }

    .owl-nav .owl-next {

        right: -5px;

    }

    .owl-nav > button , .owl-nav > button span, {

        transition: 200ms;

    }
    .owl-nav > button:hover, .owl-nav > button:hover span{

        transition: 200ms;
        color: #00c569;

    }

    .owl-nav > button span{
        position: relative;
        top: 0;
    }

    .owl-nav > button span:hover{

        top: -2px;

        box-shadow: 0 4px 10px rgba(0,0,0,0.2);

    }

    .request-carousel-content{
        padding: 5px 15px 20px;
    }

    .request-carousel-content p{

        text-align: center;
        font-weight: bold;
        margin-top: 10px;
        direction: rtl;
    }

    .request-carousel-content a{

        font-size: 14px;
        font-weight: bold;
        width: initial;
        direction: rtl;
        padding: 4px 20px 7px 15px;

    }

    .request-carousel-content a:before{

        position: relative;
        top: 2px;
        left: 5px;
     
    }

    .request-carousel-content div{

        text-align: center;

    }



</style>
<style scoped>
    
    /*general styles*/

    h1,h2,h3,h4,p,div,span{

        line-height: 1.618

    }
    p{
        font-size: 14px;
    }
    h1{

        font-size: 26px;

        font-weight: bold;

    }

    h2{

        font-size: 17px;

        font-weight: bold;

    }

    .box-content{
        overflow: hidden;
        background: #fff;
        padding: 15px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16);
        border-radius: 4px;
    }


    .title-box {
        text-align: center;
    }

    .title-box h3{
        font-size: 17px;
        font-weight: bold;
        color: #4b4b4b;
        margin-bottom: 12px;
    }

    .title-box a{

        margin: 20px auto 10px;

        width: inherit;

        font-size: 14px;

        font-weight: bold;

        padding: 9px 22px 6px;

    }

    .title-section{
        direction: rtl;
        margin-bottom: 8px;
    }

    .title-section h3{
        font-size: 16px;
        color: #00c569;
        float: right;
    }

    .title-section hr{
        margin: 15px 15px 10px auto;
        position: relative;
    }

    .title-section hr::after {

        content: ' ';
        height: 3px;
        width: 50px;
        background: #00c569;
        position: absolute;
        top: -4px;
        right: 0;

    }

    .section-wrapper{
        margin-top: 30px;
    }


    .section-wrapper .title-box{

        text-align: center;

        margin-top: 35px;

    }
    /*intro section style */


    #intro{
        margin-top: 73px;

        text-align: center;

        padding: 25px 15px;

        direction: rtl;

    }

    #intro h1, #intro h2 {

        color: #fff;

        margin-bottom: 15px;

    }

    .search-wrapper{
        position: relative;

        max-width: 593px;

        margin: 0 auto;
    }

    .search-input{

        display: inline-block;
        
        min-width: 455px;
        
        overflow: hidden;

        position: relative;

        float: right;

    }

    .search-input  input{

        padding: 9px 15px 8px;

        border-radius: 0 4px 4px 0;

        margin: 0;

        float: right;

        border:none;

        width: calc(100% - 20px);

    }

    .search-input  button{

        transition: 300ms;

        border: none;

        margin: 0;

        padding: 11px 15px 14px;

        color: #fff;

        background: #000546;

        border-radius: 4px 0 0 4px;

        position: absolute;

        left: 0;

        top: 0;

    }    

    .search-input  button:hover{

        transition: 300ms;

        background: #00032b;

        padding-left: 18px;

        padding-right: 18px;


    }    

    .search-input  button:before{

       position: relative;

       top: 2px;

    }    


    #intro a.green-button{

       font-size: 14px;

        margin: 0 15px 0 0;

        width: initial;

        float: right;

        padding: 9px 15px 8px;

    }








/*sub navigation styles*/

.requests-carousel {
    z-index: 0;
}

.secondary-nav-wrapper{

        background: #fff;

        color: #4b4b4b;

        -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);

        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07);

        direction: rtl;

        text-align: center;

}

.category-item {

    font-size: 16px;

    color: #777;

    padding: 7px 50px 13px;

    display: inline-block;

    line-height: 1.618;

    position: relative;

    font-weight: bold;
}

.category-item i:before {

    position: relative;

    right: 5px;

    top: 2px;


}

.category-item:hover, .active .category-item {

    color:#00c569;

}

.category-item:hover, .sub-category-item:hover {

    color:#00c569;

}



.sub-category-item {

    font-size: 14px;

    color: #777;

    display: inline-block;

    line-height: 1.618;

    position: relative;

    font-weight: bold;

    padding: 5px 0;

    width: 100%;
}


.product-link.green-button{
    width: initial;

    margin: 0;

    font-size: 14px;

    font-weight: bold;
}

.product-link.green-button i{
    
    position: relative;
    top: 3px;
    right: 5px;
}

nav{

    position: relative;

}

nav li {

   opacity:0;

   cursor:pointer;


}

nav li.active > h2 a:before {
    content: " ";

    background: #00c569;

    width: 100%;

    display: block;

    position: absolute;

    left: 0;

    bottom: 0;

    height: 3px;
}

nav li.active > h2 a:after {

        content: " ";

        display: inline-block;

        width: 0;

        height: 0;

        border-style: solid;

        border-width: 8px 8px 0 8px;

        border-color: #00c569 transparent transparent transparent;

        position: absolute;

        bottom: -8px;

        left: calc(50% - 8px);

        z-index: 2;

}

nav li > ul {
   position: absolute;
   
   pointer-events:none;
  
   left: 0;
   
   opacity: 0;
  
   transition: 500ms;
   
   border: 1px solid #f1f1f1;

}

nav > ul > li {
 
   opacity:1; 

   padding: 0;

   direction: ltr;

   transition: 500ms;

}

li.active > ul {

    opacity: 1;

    pointer-events: initial;

    background: #fff;

    border-radius: 0 0 4px 4px;

    box-shadow: 0 5px 6px rgba(0,0,0,0.07);

    padding: 20px 15px;
    
    z-index: 1;
}

li.active > ul > li,
ul:hover > li{
   opacity:1;
}

nav > ul > li li ul {
   transform:translateX(100%);
   top:0; right:0;
}


nav > ul > li > ul > li{
   transition: transform 0.4s, opacity 0.4s;
   transform:translateY(150%);
   opacity:0;
}

nav > ul > li.active > ul > li{
   transform:translateY(0%);
   opacity: 1;
}

li > ul > li > ul > li{
   transition: transform 0.4s, opacity 0.4s;
   transform:translateX(195px) translateY(0%);
   opacity: 0;
} 
li > ul > li.active > ul > li{  
   transform:translateX(0) translateY(0%);
   opacity: 1;
}



/*requests section style*/
   
    .carousel-item{
        padding: 0
    }

    .requests-contents{
        padding: 0 15px;
    }


    .wrapper_no_pro {
        text-align: center;
        font-size: 23px;
        padding: 15px 0;
    }

    .content_no_pic {
        font-size: 70px;
        margin: 20px auto;
        color: #bdbdbd;
    }

    .text_no_pic {
        margin: 30px auto;
        color: #bdbdbd;
    }

    .list-title, .needs, .list-time {
        float: right;
        text-align: center;
        line-height: 1.618;
        font-weight: bold;
        padding: 0;
        padding-top: 5px;

    }

    .list-group-item {

        border: 1px solid #ddd;

        padding: 7px 0;

    }

    .list-group-item a{

        margin: 0;

        width: initial;

        padding: 6px 15px 9px;

        direction: rtl;

        font-size: 14px;

        font-weight: bold;

    }

    .list-group-item a::before {
        position: relative;
        top: 3px;
        left: 3px;
    }

    .main-content > ul {
        border-radius: 3px;
        box-shadow: 0 0 10px #e1e1e1;
        overflow: hidden;
    }

    .main-content .list-group-item p {
        text-align: center;
        direction: rtl;
    }

    #main.little-main {
        margin-right: 80px;
    }

    .message-list {
        padding: 19px;
        text-align: center;
        background: #eff3f6;
        line-height: 1.618;

    }

    .text-red {
        color: #e41c38;
    }

    .title {
        text-align: right;
        padding: 13px 15px;

    }

    .title h1 {

        font-size: 18px;
        font-weight: bold;

    }

    .list-placeholder-wrapper{

        border : 1px solid rgb(221, 221, 221);

        position: relative;

        overflow: hidden;

        border-radius: 0 0 3px 3px;

        margin-bottom: 20px;

        border-top: none;

        background: #f6f6f6;
    }

    .list-placeholder-wrapper ul{
        margin: 0;

        overflow: hidden;

        border:none;
    }

    .list-placeholder-wrapper li{

        background: none;

        -webkit-filter: blur(8px);

        filter: blur(8px);

    }


    .list-placeholder::after{

        position: absolute;

        width: 100%;

        height: 100%;

        content: "";

        left: 0;

        top: 0;

    }

    .list-placeholder-wrapper .link{

        position: absolute;

        width: 100%;

        text-align: center;

        top: calc(50% - 82px);

        padding: 15px;

    }

    .list-placeholder-wrapper .link-wrapper-content{

        max-width: 500px;

        background: white;

        padding: 15px;

        border-radius: 4px;

        box-shadow: 0 3px 6px rgba(0,0,0,0.16);

        margin: 0 auto;

    }    

    .list-placeholder-wrapper .link p{

        font-size: 19px;

        font-weight: bold;

        color: #4b4b4b;

        margin-bottom: 4px;

        line-height: 1.618;

    }

    .list-placeholder-wrapper .link a{

        font-size: 14px;

        font-weight: bold;

        margin-top: 4px;

    }



    /*product section style*/


    .carousel-item {
        padding: 0;
        text-align: center;
    }
    .products-contents{
        padding:0;
    }






    /*services section*/


    #services-section{

        background: #ECECEC;

        text-align: center;

    }  

    #services-section h3{

        margin-top: 24px;

        font-size: 23px;

        font-weight: bold;

        color: #4b4b4b;
    }

    .service-boxs-wrapper{
        padding: 20px 15px 45px;
    }

    .box-image{

      height: 85px;  

    }

    .box-image img{

        width: initial;

        height: 100%; 

    }

    .service-box{
        padding: 0;
        position: relative;
        top: 0;
        transition: 200ms;
    }  

    .service-box:hover{
        top: -5px;
        transition: 200ms;
        box-shadow: 0 6px 10px rgba(0,0,0,0.2)
    }

    .service-box a{
        padding: 15px;
        display: block;
        color: #4b4b4b;
       
    }
    .service-box a h4{

        font-size: 17px;

        font-weight: bold;

    }

    .service-box p{

        margin-top: 5px;

    }



    /*links section styles */

    #benefit-links{

        background: #fff;
        
        text-align: right;
        padding-top: 
    }

    .links-title{

        color: #777;

        font-size: 16px;

        font-weight: bold;

        margin-top: 24px;

    }

    .benefit-links-item{
        line-height: 1.4;
        margin-top: 6px;
        direction: rtl;
        margin-bottom: 50px;
    }

    .benefit-links-item h4{
        line-height: 1.4;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .benefit-links-item a{
        font-size: 10px;
        color: #BDC4CC;
        transition: 200ms;
    }

    .benefit-links-item a:hover{
        color: #00c569;
        transition: 200ms;

    }   

    @media screen and (max-width: 767px){

        .search-input{

            width: 100%;

            margin-bottom: 15px;

            min-width: initial;

            overflow: hidden;
        }

        .search-input button {

            padding: 13px 15px 15px;

        }

        #intro a.green-button{

            margin: 0 auto;

            float: none !important;

        }
        .secondary-nav-wrapper{
            padding: 0;
        }
        .category-item{
            padding: 7px 15px 13px;
        }

        .category-item i::before {

            position: relative;
            right: 1px;
            top: 4px;

        }

        li.active > ul {

            left: 0;

            right: 0;

        }

        .product-link.green-button{

            margin: 15px 0 0;

        }   
        .service-box{
            margin-top: 30px;
        }

    }
</style>

<template>
    <div>
         <div :class="{'loader-wrapper': isLoading , 'finish-loader-show' : !isLoading }">
             <div class="main-loader">
                 <img :src="loading_img">
             </div>
         </div>



        <!-- =========================
        Intro SECTION
        ============================== -->

        <section id="intro" class="container-fluid" >
            <!-- <div class="particle-network-animation"></div> -->
                <div class="container">
                    <div class="row">
                         <u-animate-container>

                            <u-animate
                              name="fadeIn"
                              delay="0.2s"
                              duration="1s"
                              :iteration="1"
                              :offset="0"
                              animateClass="animated"
                              :begin="false" 
                            >
                              <h1 class=" intro-site-title" data-wow-delay="1.2s">
                                اینکوباک | بازار خرید و فروش عمده محصولات کشاورزی 
                              </h1>
                            </u-animate>


                            <u-animate
                              name="fadeIn"
                              delay="0.5s"
                              duration="1s"
                              :iteration="1"
                              :offset="0"
                              animateClass="animated"
                              :begin="false" 
                            >
                        

                              <h2 class="intro-site-title" data-wow-delay="1.2s">
                                ارتباط مستقیم با خریداران و فروشندگان دست اول محصولات کشاورزی

                              </h2>

                          </u-animate>

                          <u-animate
                              name="fadeIn"
                              delay="0.8s"
                              duration="1s"
                              :iteration="1"
                              :offset="0"
                              animateClass="animated"
                              :begin="false"
                              class="search-wrapper" 
                            >

                             <div class="search-input">

                                <input type="text" placeholder="محصول مورد نظر خود را جستجو کنید"
                                       v-model="mainSearchBoxText">
                                <button class="hidden-sm hidden-md hidden-lg fa fa-search" @click="search">
                                
                                </button>

                                <button class="hidden-xs fa fa-search" @click="search">
                                    جستجو
                                </button>
                            </div>

                           <a href="/product-list" class=" green-button "> لیست محصولات</a>
                         </u-animate>

                          </u-animate-container>
                    </div>
                </div>
        </section>


        <!-- =========================
        Secondary Nav SECTION
        ============================== -->
        <section class="secondary-nav-wrapper container-fluid">
        <div class="container">
                <nav class=" row">
                   
                    <ul class="menu-wrapper list-inline">
                        <li
                            v-if="categoryList.length"
                            v-for="(category , index) in categoryList"
                            @click.prevent="dropDownSecondaryMenu($event, index)"
                            :id="'menu' + index"
                            class="nav-item"
                            >
                                <h2>
                                   <a href="#" class="category-item" >
                                    <i class="fa fa-angle-down "></i>
                                    {{category.category_name}}
                                   </a>
                                </h2>
                                <ul class="sub-categories-wrapper list-inline col-xs-12">

                                    <li  v-for="subCategory in category.subcategories" class="col-xs-4 col-sm-3 col-md-4 pull-right">

                                        <a 
                                         class="sub-category-item"
                                         :href="getSubCategoryUrl(subCategory.category_name) "
                                         v-text="subCategory.category_name">
                                             
                                         </a>

                                    </li>

                                    <li class="col-xs-12 button-link-wrapper">
                                        <a class="product-link green-button fa fa-arrow-left" href="/product-list">
                                       
                                            مشاهده همه محصولات 
                                         </a>
                                    </li>

                                </ul>

                        </li>
                    </ul>
                </nav> 
            </div>
       </section>
        <!-- =========================
        Request SECTION
        ============================== -->

        <section id="requests-section" class="section-wrapper container-fluid"> 
            <div class=" container"> 
                <div class="row">
                    
                    <div class=" col-xs-12 col-md-9">
                        
                            <div class="title-section col-xs-12">
                                  <div class="row">
                                    
                                    <h3>
                                        
                                        آخرین درخواست های خرید

                                    </h3>
                                    <hr/>

                                  </div>
                            </div>

                            <div class="col-xs-12  requests-contents box-content ">
                                <div class="row hidden-xs ">
                                     <ul class="list-unstyled">
                                        <li v-for="buyAd in 4" class="list-group-item  col-xs-12">
                                            <p class="list-title col-sm-3 col-xs-12">
                                                <span>
                                                    
                                                    میوه 

                                                </span>

                                                <span> | </span>

                                                <span>
                                                    خرما 
                                                </span>

                                                <span>
                                                    
                                                    | پیارم
                                                </span>

                                            </p>

                                            <p class="needs col-sm-4 col-xs-12">
                                                <span class="static-content">
                                                    میزان نیازمندی :
                                                </span>

                                                <span >
                                                    3000 
                                                </span>

                                                <span class="static-content">
                                                    کیلوگرم
                                                </span>

                                            </p>

                                            <p class="list-time col-sm-2 col-xs-12">
                                                ۳۰ شهریور , ۱۳۹۸
                                            </p>
                                            <div class="col-sm-3 col-xs-12">
                                                 <a class=" fas fa-comment-alt green-button" href="">
                                                پیام به خریدار
                                                 </a>
                                            </div>
                                           
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        <div style="padding:0" class="requests-carousel hidden-sm hidden-md hidden-lg  col-xs-12 ">

                            <div class="row">
                                    <div class="owl-carousel">  
                                         <RequestCarousel  v-for="(item, index) in 5" :key="index"  />
                                    </div>
                            </div>

                        </div>

                


                    </div>

                    <div class=" col-xs-12 col-md-3 pull-right ">

                        <div class="title-box box-content">
                            <h3>

                              ثبت نام  خریداران 

                            </h3>
                            <p>
                               برای استعلام قیمت و خرید محصولات کشاورزی از بهترین فروشندگان دست اول هم اکنون ثبت نام کنید
                            </p>
                            <a class="green-button" href="#">
                                
                                ثبت نام

                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- =========================
        Product SECTION
        ============================== -->
        <section id="product-section" class="section-wrapper container-fluid"> 
            <div class=" container"> 
                <div class="row">
                    <div class=" col-xs-12 col-md-9">
                        
                            <div class="title-section col-xs-12">
                                  <div class="row">
                                    
                                    <h3>
                                        
                                      آخرین محصولات ثبت شده

                                    </h3>
                                    <hr/>

                                  </div>
                            </div>

                            <div class="col-xs-12 products-contents ">
                                <div class="row">
                                    <div class="owl-carousel">

                                          <ProductCarousel
                                         v-for="(items , index) in 10"
                                         :key="index"
                                         img="https://www.incobac.com/storage/products/9sPZCpAD5S4QJWSxoHjKXbJHXp33okkRavn6HoZP.jpeg"
                                         title="خرمای مضافتی اصل"
                                         price="3000"
                                         link='/'
                                         /> 
                                        
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div class=" col-xs-12 col-md-3 pull-right ">

                        <div class="title-box box-content">
                            <h3>

                                ثبت نام  فروشندگان 

                            </h3>
                            <p>
                              

برای فروش بدون واسطه محصولات کشاورزی خود به خریداران مستقیم و صادرکنندگان هم اکنون ثبت نام کنید 
                            </p>
                            <a class="green-button" href="#">
                                
                                ثبت نام

                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section id="services-section" class="section-wrapper container-fluid">

            <div class="container">
                <div class="row">
                    
                    <h3 class="col-xs-12">
                         ارتباط مستقیم با خریداران و فروشندگان دست اول محصولات کشاورزی 
                    </h3>

                    <div class="service-boxs-wrapper col-xs-12">
                            
                        <div class="row" >

                            <div v-for="(item , index) in 3" :key="index" class=" col-xs-12 col-sm-4 "> 

                                <article class="service-box  box-content">
                                    <a href="#">
                                        <div class="box-image">
                                            <img :src="site_logo"/>
                                        </div>
                                        <h4>
                                            اینکوباک چیست؟
                                        </h4>
                                        <p>
                                            لورم ایپسوم متن ساختگی در زمینه طراحی صفحات وب ومحتوای اینترنتی لورم ایپسوم متن ساختگی در زمینه طراحی صفحات وب ومحتوای اینترنتی 
                                        </p>
                                    </a>
                                </article>
                            </div>       
                        </div>

                    </div>
                </div>

            </div>

         </section>
         <section id="benefit-links" class="container-fluid " >
             <div class="container">
                 <div class="row">
                     <div class="links-title col-xs-12">
                         لینک های مفید
                     </div>
                     <div class="benefit-links-item col-xs-12">
                        
                        <div class="row">
                            <!-- loop for wholesale date -->
                            <h4 v-for="item in footerLinks.wholesaleDate"   class="col-xs-4 col-sm-3 col-md-2  pull-right">
                                 <a :href="getSubCategoryUrl(item.link)" v-text="'فروش عمده' + ' ' +item.name">
                                     
                                 </a>
                             </h4>  
                             <!-- end loop  -->

                            <!-- loop for wholesale  -->
                            <div  v-if="categoryList.length"
                            v-for="(category , index) in categoryList">
                                <h4
                                 v-for="subCategory in category.subcategories" 
                                 class="col-xs-4 col-sm-3 col-md-2  pull-right"
                                >
                                   
                                    <a     
                                             :href="getSubCategoryUrl(subCategory.category_name)"
                                             v-text="'فروش عمده' + ' ' + subCategory.category_name">
                                                 
                                    </a>  

                               </h4>
                            </div>
                             <!-- end loop  -->

                            <!-- loop for wholesale rice -->

                              <h4 v-for="item in footerLinks.wholesaleRise"   class="col-xs-4 col-sm-3 col-md-2  pull-right">
                                 <a :href="getSubCategoryUrl(item.link)" 
                                  v-text="'فروش عمده برنج' + ' ' + item.name">
                                     
                                 </a>
                             </h4> 

                            <!-- end loop  --> 


                        </div>
                     </div>
                 </div>
             </div>
         </section>
    </div>

</template>

<script>
    import {eventBus} from "../../../router/dashboard_router";
    import VueWow from 'vue-wow';
    import {UAnimateContainer, UAnimate} from 'vue-wow'
    var visible = false;


    var ProductCarousel = {

        props: ['img', 'title', 'link', 'price'],
        template: "<article class='carousel-item box-content'>"
            +
            "<div class='carousel-img' style='height: 135px;overflow: hidden;position: relative;'><a :href='link' ><img style='position: absolute;top: 50%;left: 50%;transition: 300ms;transform: translate(-50%, -50%);' :src='img' class='img-responsive'></a></div>"
            + "<a style='font-size: 16px;direction: rtl;font-weight: bold;color: #4b4b4b;' :href='link' v-if='title.length>=20'><h4 style='text-overflow: ellipsis;overflow: hidden;white-space: nowrap;padding: 0 10px;margin-top: 10px;margin-bottom: 9px;'>{{title.substring(0,15) + ' ...'}}</h4></a>"
            + "<a style='font-size: 16px;direction: rtl;font-weight: bold;color: #4b4b4b;' :href='link'  v-else><h4 style='text-overflow: ellipsis;overflow: hidden;white-space: nowrap;padding: 0 10px;margin-top: 10px;margin-bottom: 9px;'>{{title }}</h4></a>"
            + "<a style='font-size: 14px;direction: rtl;font-weight: bold;color: #00c569;margin-bottom: 5px;display:inline-block' :href='link' class='price' >"
            + "<span>  هر کیلو : </span>"
            + "<span v-text='price'></span>"
            + "<span> تومان </span>"
            + "</a>"
            + "</article>",
        mounted: function () {
            $("#product-section .owl-carousel").owlCarousel({
                autoplay: true,
                autoplayTimeout: 4000,
                loop: true,
                nav: true,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                items: 6,
                mouseDrag: true,
                margin: 30,
                dots:false,
                stagePadding: 15,
                responsive: {
                    0: {
                        items: 1,
                        stagePadding: 15,
                        navText:false,
                        dots:true
                    },
                    450: {
                        items: 2,
                        stagePadding: 15,
                        navText:false,
                         dots:true
                    },
                    767: {
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


    var RequestCarousel = {

        props: ['title', 'need', 'date', 'link'],
        template: '<article class="box-content col-xs-12 request-carousel-content ">'
        + '<div class="row">'
        + '<p class="list-title">'
        + '<span>'
        + 'میوه'
        + '</span>'
        + '<span> | </span>'
        + '<span>'
        + 'خرما'
        + '</span>'
        + '<span>'
        + '| پیارم'
        + '</span>'
        + '</p>'
        + '<p class="needs col-sm-4 col-xs-12">'
        + '<span class="static-content">'
        + 'میزان نیازمندی :'
        + '</span>'
        + '<span >'
        + '3000'
        + '</span>'
        + '<span class="static-content">'
        + 'کیلوگرم' 
        + '</span>' 
        + '</p>'
        + '<p class="list-time col-sm-2 col-xs-12">'
        + '۳۰ شهریور , ۱۳۹۸'
        + '</p>'
        +'<div class="col-xs-12">'
        + '<a class=" fas fa-comment-alt green-button" href="">'
        + 'پیام به خریدار'
        + '</a>'
        + '</div>'
        + '</div>'
        + '</article>',

        mounted: function () {
            $("#requests-section .owl-carousel").owlCarousel({
                autoplay: true,
                autoplayTimeout: 4000,
                loop: true,
                nav: true,
                navText: false,
                items: 1,
                mouseDrag: true,
                margin: 30,
                dots:true,
                stagePadding: 15,
            });
        }
    };



    export default {
        components: {
            ProductCarousel,
            RequestCarousel,
            UAnimateContainer,
            UAnimate
        },
        props: [
            'img_success_project',
            'img_success_verified',
            'img_seller_services',
            'img_buyer_services',
            'site_logo',
            'loading_img'
        ],
        data: function () {
            return {
                mainSearchBoxText: '',
                enterKeyActiveForSearch: false,
                homePageDates: '',
                homePageRice: '',
                isLoading : false,
                categoryList: '',
                subCategoryList: '',
                footerLinks:{
                    wholesaleDate : 
                    [
                        {
                            name : 'خرما',
                            link : 'خرما'
                        },
                        {
                            name : 'خرمای مضافتی',
                            link : 'خرما'
                        },
                        {
                            name : 'خرمای بم',
                            link : 'خرما'
                        },
                        {
                            name : 'خرمای زاهدی',
                            link : 'خرما'
                        },
                        {
                            name : 'خرمای بوشهر',
                            link : 'خرما'
                        },
                        {
                            name : 'خرمای کبکاب',
                            link : 'خرما'
                        },
                        {
                            name : 'خرمای خوزستان',
                            link : 'خرما'
                        },
                        {
                            name : 'خرما در مشهد',
                            link : 'خرما'
                        },
                        {
                            name : 'خرما در بوشهر',
                            link : 'خرما'
                        },
                        {
                            name : 'خرمای مجول',
                            link : 'خرما'
                        },
                        {
                            name : 'کشمش',
                            link : 'کشمش'
                        },
                        {
                            name : 'پسته',
                            link : 'پسته'
                        },
                        {
                            name : 'انجیر خشک استهبان',
                            link : 'انجیر'
                        },
                        {
                            name : 'زعفران',
                            link : 'زعفران'
                        }

                    ],
                    wholesaleRise : [
                        {
                            name : 'برنج',
                            link : 'برنج'
                        },
                        {
                            name : 'خاطره',
                            link : 'برنج'
                        },
                        {
                            name : 'هندی طبیعت',
                            link : 'برنج'
                        },
                        {
                            name : 'محسن',
                            link : 'برنج'
                        },
                        {
                            name : 'پاکستانی',
                            link : 'برنج'
                        },
                        {
                            name : 'طبیعت',
                            link : 'برنج'
                        },
                        {
                            name : 'قهوه ای',
                            link : 'برنج'
                        },
                        {
                            name : 'شمال',
                            link : 'برنج'
                        },
                        {
                            name : 'طارم',
                            link : 'برنج'
                        },
                        {
                            name : 'دم سیاه',
                            link : 'برنج'
                        },
                        {
                            name : 'هاشمی',
                            link : 'برنج'
                        },
                        {
                            name : 'صدری',
                            link : 'برنج'
                        },

                    ],
                    
                }
            }
        },
        methods: {
            stopLoader: function () {
                eventBus.$emit('isLoading', false);
            },
            collapseDropDown: function () {
                $(".profile-list").fadeIn("slow", function () {
                    visible = true;
                });
            },
            collapseDropDownList: function () {
                $(".icon-header-list").fadeIn("slow", function () {
                    visible = true;
                });
            },
            documentClick(e) {
                if (visible) {
                    $('.profile-list').fadeOut("slow");
                    $('.icon-header-list').fadeOut("slow");
                    visible = false;

                }
            },
            init: function () {
                var self = this;
                window.scrollTo(0, 0);
                
             axios.post('/get_category_list', {
                    cascade_list: true
                })
                    .then(function (response) {
                        self.categoryList = response.data.categories;
                    });
            },
            search: function () {
                if (this.mainSearchBoxText !== '') {
                    window.location.href = '/product-list/' + this.mainSearchBoxText;
                }
            },
            generateProductLink:function(product){
                var id = product.main.id;
                var categoryName = product.main.category_name;
                var subCategoryName = product.main.sub_category_name;

                 return '/product-view/خرید-عمده-'
                    + subCategoryName.replace(' ', '-')
                    + '/'
                    + categoryName.replace(' ', '-')
                    + '/'
                    + id;
            },
            getSubCategoryUrl: function(name){

                let url = '/product-list/category/'
                    + name.replace(' ', '-')
                ;
               
                return url;
            },
            dropDownSecondaryMenu:function(event,index){

              
               if ($(event.target).attr('class') == 'col-xs-12 button-link-wrapper') {
                    return
               }else{
                this.dropDownClose(index);
               }
                console.log($(event.target).attr('class'));
                if ($(event.target).attr('href')) {
                    window.location.href = $(event.target).attr('href');
                }

                function collapseDropDown() {

                   document.getElementById('menu' + index)
                      .classList.toggle('active')
                   
                }

                setTimeout(collapseDropDown, 80);
            },
            dropDownClose:function(index){
                var indexValue = index;
                window.onclick = function(event) {
                    var dropdowns = $('.menu-wrapper > li');
                    var dropdownLinks = $('.menu-wrapper > li > a');
                    var dropdownActive = $('.menu-wrapper > li.active');
                    
                         dropdowns.each(function( index ) {
                           if (index == indexValue && $(event.target).attr('class') == dropdowns.find('a.category-item').attr('class') ) {

                                 return

                           }else{

                                $( this ).removeClass('active')

                           }

                         });
          
                } 
            }

        },
        mounted: function () {
            this.init();
            this.isLoading = true;
        },
        updated() {
            this.$nextTick(this.stopLoader());
        },
        created() {
            gtag('config', 'UA-129398000-1', {'page_path': '/home-page'});

            document.addEventListener('click', this.documentClick);

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
                this.enterKeyActiveForSearch = this.mainSearchBoxText !== '';
            }
        },
        metaInfo() {

            return {
                title:  'سامانه خرید و فروش عمده محصولات کشاورزی',
                titleTemplate: 'اینکوباک | %s',
                meta: [
                    {
                        name: 'description', 
                        content: 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
                    },
                    {
                        name: 'author',
                        content: 'اینکوباک'
                    },
                    {
                        'property': 'og:description',
                        'content': 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
                    },
                    {
                        'property': 'og:site_name',
                        'content': 'اینکوباک بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران'
                    },
                    {
                        'property': 'og:title',
                        'content': 'اینکوباک | سامانه خرید و فروش عمده محصولات کشاورزی'
                    },

                ]

            }
        }
    }
</script>
