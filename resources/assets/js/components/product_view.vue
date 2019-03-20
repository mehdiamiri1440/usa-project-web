<template>
    <div>
        <main id="main" class="container-fluid">
            <section class="main-content col-xs-12 col-sm-8 col-lg-9">
                <div class="main-content-item">
                   <div class="user-contents  col-xs-12 col-md-3">
                        <img :src="incobacLogo">
                        <!-- <div class="user-image" v-if="product.profile_info.profile_photo">
                        <img v-bind:src=" '{{url('storage') }}/' + product.profile_info.profile_photo">-->
                        <div class="user-image">
                            <img :src="defaultImage" class="image_defult">
                        </div>
                      <!--  <p v-if="product.user_info">سعید رادمنش</p>
                        <a v-bind:href="'{{url('profile')}}/' + product.user_info.user_name" class="green_bot">
                            مشاهده پروفایل تامین کننده
                        </a>-->
                        <p >سعید رادمنش</p>
                        <a class="green_bot">
                            مشاهده پروفایل تامین کننده
                        </a>
                    </div>
                    <div class="article-contents  col-xs-12 col-md-9 ">
                        <div class="image-article-content col-xs-12 col-md-5 pull-right">
                            <!--      <popup v-if="product.photos[0]" v-for="photo in product.photos" base="{{url('storage')}}/"
                                              :img="photo.file_path"></popup>-->
                            <img src="http://localhost:8000/assets/img/topheader.jpg">
                        </div>
                        <div class="main-article-content col-xs-12 col-md-7">
                            <h2 class="main-article-title">
                                خشکبار - بادام
                            </h2>

                            <p>نوع محصول: <span>دارابی</span></p>
                            <p> قیمت (هرکیلو به تومان): <span>25000</span></p>
                            <p> میزان موجودی (کیلوگرم): <span>2000</span></p>
                            <p>محل تحویل کالا:
                                <span>گیلان</span></p>

                        </div>
                        <div class="text-des">
                            <p>توضیحات: <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</span>
                            </p>
                        </div>
                        <div class="buy_details form-group  col-xs-12">
                            <input type="hidden" id="product-id" >
                            <div class="col-xs-12 col-sm-6">
                                <label for="requirement-amount" class="content-lable">
                                    مقدار مورد نیاز (کیلوگرم):
                                </label>
                                <input id="requirement-amount" placeholder="مقدار مورد نیاز" type="text"  class=" form-control">

                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <label for="pack-type" class="content-lable">
                                    نوع بسته بندی:
                                </label>
                                <input id="pack-type"  placeholder=" نوع بسته بندی" type="text"  class=" form-control">

                            </div>
                            <div class="col-xs-12 ">
                                <label for="description" class="content-lable">
                                    توضیحات:
                                </label>
                                <textarea id="description"  rows="5" placeholder="ویژگی های لازم محصول را توضیح دهید..." class=" form-control"></textarea>
                            </div>

                            <div class=" col-xs-12 submit-button">
                                <button type="submit" class="green_bot">ثبت درخواست</button>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <aside class="wrapper-related-products col-xs-12 col-sm-4 col-lg-3">
                <div class="related-products bg-shadow">
                    <h2 class="title-related-prodcts">پست های مرتبط</h2>

                    <article class="related-item">
                        <a href="#">
                            <div class="image-related-item">
                                <img src="http://localhost:8000/assets/img/topheader.jpg">
                            </div>
                            <div class="content-related-item">
                                <div class="related-title-content">گرجه خار خاری</div>
                                <div class="related-describtion-content">شیراز ایران</div>
                            </div>
                        </a>
                    </article>
                    <article class="related-item">
                        <a href="#">
                            <div class="image-related-item">
                                <img src="http://localhost:8000/assets/img/topheader.jpg">
                            </div>
                            <div class="content-related-item">
                                <div class="related-title-content">گرجه خار خاری</div>
                                <div class="related-describtion-content">شیراز ایران</div>
                            </div>
                        </a>
                    </article>
                    <article class="related-item">
                        <a href="#">
                            <div class="image-related-item">
                                <img src="http://localhost:8000/assets/img/topheader.jpg">
                            </div>
                            <div class="content-related-item">
                                <div class="related-title-content">گرجه خار خاری</div>
                                <div class="related-describtion-content">شیراز ایران</div>
                            </div>
                        </a>
                    </article>
                </div>
            </aside>
        </main>
    </div>
</template>
<style>
    .wrapper-related-products{
        margin-top:24px;

    }
    .related-products{
        overflow: hidden;
        padding: 15px;
    }
    .wrapper-related-products article{
        padding: 15px 0;
        float: right;
        width: 100%;
        text-align: right;
        direction: rtl;
        border-bottom: 2px solid #f0f3f6;
        transition:300ms;
    }
    .wrapper-related-products article:hover{
        padding-right:5px;
        transition:200ms;
    }
    .wrapper-related-products article:hover a{
        color:#28a745;
    }
    .wrapper-related-products article a{
        color:#333;
    }
    .wrapper-related-products article:last-of-type{
        border-bottom: none;
    }


    .wrapper-related-products .image-related-item{
        width: 80px;

        float: right;

        height: 80px;

        position: relative;

        overflow: hidden;

        border-radius: 3px;
    }
    .wrapper-related-products .image-related-item img{
        height: 100%;
        display: inline-block;
        width: initial;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .wrapper-related-products .content-related-item{
        float: right;
        padding: 15px 15px 0 0;
        width: calc(100% - 100px);
    }
    .title-related-prodcts{
        text-align: center;
        font-size: 23px;
        padding-bottom: 13px;

    }
    .related-title-content{
        font-size: 16px;
        font-weight: bold;
        margin: 0 0 8px;
    }
    .bg-shadow{
        background:#fff;
        border-radius: 5px;
        box-shadow: 0 0 15px #dbdbdb;
    }
</style>
<script>
    export default {
        props:[
            'defaultImage',
            'incobacLogo'
        ],

    }
</script>
