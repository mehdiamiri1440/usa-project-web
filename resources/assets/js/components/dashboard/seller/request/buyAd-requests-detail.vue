<style scoped>
    /*custom cods*/
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
    .black-bot {
        margin: 15px 0;
        display: inline-block;
        background: #313a43;
        color: #fff;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }
    .black-bot:hover {

        background: #283039;
        color: #fff;
        transition: 300ms;
    }

    .green-bot:hover {
        color: #fff;
        background: #00d614;
        transition: 300ms;

    }

    .botton-inco {
        margin: 15px 7px;
        display: inline-block;
        color: #313a43;
        padding: 8px 35px;
        border-radius: 3px;
        text-align: center;
    }

    .botton-inco:hover {
        color: #fff;
    }

    .font-big {
        font-size: 23px;
        position: relative;
        top: 3px;
    }

    .little_header {
        width: 80px;
    }

    .little-main-header {
        right: 80px;
    }

    .background_mob_sec {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: -1;
        display: none;
    }

    .contents {
        border-radius: 3px;
        box-shadow: 0 0 10px #e1e1e1;
        padding: 15px ;
        margin-top: 50px;
    }
    .user-info{
        border-bottom: 2px solid #eff3f6;
        padding: 0 0 10px;
    }
    .user_image {
        overflow: hidden;
        width: 85px;
        height: 85px;
        border-radius: 50%;
        padding: 0;
        float: right;
        text-align: center;
    }
    .user_image img{
        height: 100%;
    }
    .info-contents{
        padding: 0;
    }
    .image-article-content{
        padding-right: 0;
    }
    .main-article-content{
        padding-left: 0;
        margin-bottom: 25px;
    }
    .main-image{
        margin-bottom: 7px;
        padding: 0;
    }
    .main-article-content a{
        font-size: 24px;
        margin-bottom: 20px;
        display: inline-block;
        color: #666;
    }
    .main-image img{
        border-radius: 3px;
    }
    .image_company{
        margin: 15px auto ;

    }
    .top-contentas{
        padding: 0;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom:2px solid #ddd;
    }
    .bottom-contents{
        padding: 0;
        padding-top: 10px;
        margin-top: 10px;

    }
    .fields{
        margin: 7px auto;
        padding: 0;
    }
    .fields > div{
        float: right;
    }
    .fields  div textarea{
        height: 110px;
        max-height: 110px;
        min-height: 110px;
        max-width: 100%;
        min-width: 100%;
    }
    .fields .green-bot,.fields .black-bot{
        width: 100%;
    }


    @media screen and (max-width: 992px) {
        .right-header.desktop-header {
            display: none;
        }
        .actions{
            direction: ltr;
            margin-top: 20px;
        }
        .right-header.mobile-header {
            display: block;
            right: -300px;
        }

        .main-header, .little-main-header {
            right: 0 !important;
        }

        #main, #main.little-main {
            margin-right: 0 !important;
        }

        .post-contents-table {
            width: 100%;
        }

        .copy-right {
            display: none;
        }

        .clouse_menu {
            display: none;
        }

        .clouse_menu_mob {
            display: block;
        }

        .show-header button {
            display: block;
        }

        .kind_user > div, .kind_activity > div {
            float: none;

        }

        .img-profile .submit {
            position: relative;
            width: 100%;
            margin: 25px auto;

        }

        .img-profile .submit label {
            width: 40%;
            padding: 12px 0;
        }

        .img-profile {
            float: none;
        }
    }

    /*custom style callander*/
    #bd-main-first-date-id {
        top: 37px;
        border: none;
        border-radius: 3px;
        padding: 10px;
        left: 0;
        z-index: 1;
    }
    .bd-dropdown{
        position: relative;

    }
    .first-date-id{
        font-family: iranyekan, sans-serif;
    }
    select#bd-month-first-date-id option {
        direction: rtl;
        text-indent:5px;
    }
    #bd-main-first-date-id input, #bd-main-first-date-id select {
        padding: 0 0;
        font-size: 16px;
        color: #222;
        text-align: center;
    }

    #bd-year-first-date-id {
        background: none;
        direction: ltr;
    }

    #bd-month-first-date-id {
        background: none;
        top: 0;
        direction: ltr;
    }

    #bd-prev-first-date-id {
        font-family: "FontAwesome", sans-serif;
        font-size: 41px;
        text-align: center;
        position: absolute;
        left: -80px;
        bottom: 110px;
        padding: 0;
        width: 55px;
        height: 55px;
        padding-right: 6px;
        border-radius: 50%;
        background: rgba(0,0,0,0.3);
        transition: 300ms;
        color: #fff;

    }

    #bd-next-first-date-id {
        font-family: "FontAwesome", sans-serif;
        font-size: 41px;
        text-align: center;
        position: absolute;
        right: -80px;
        bottom: 110px;
        padding: 0;
        padding-left: 6px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: rgba(0,0,0,0.3);
        transition: 300ms;
        color: #fff;
    }
    #bd-next-first-date-id:hover,#bd-prev-first-date-id:hover{
        background: rgba(0,0,0,0.7);
        transition: 300ms;
    }

    .bd-table thead tr, .bd-goto-today {
        background: #28a745;
    }
    .bd-dropdown{
        width: 50%;
    }

    .date span:hover,.tags span:hover ,.time span:hover{
        cursor: pointer;
    }
    .bd-calendar, .bd-title {
        margin: 0;
        overflow: hidden;
    }

    #bd-main-end-date-id {
        top: 37px;
        border: none;
        border-radius: 3px;
        padding: 10px;
        left: 0;
    }
    .bd-dropdown{
        position: relative;

    }
    .end-date-id{
        font-family: iranyekan, sans-serif;
    }
    select#bd-month-end-date-id option {
        direction: rtl;
        text-indent:5px;
    }
    #bd-main-end-date-id input, #bd-main-end-date-id select {
        padding: 0 0;
        font-size: 16px;
        color: #222;
        text-align: center;
    }

    #bd-year-end-date-id {
        background: none;
        direction: ltr;
    }

    #bd-month-end-date-id {
        background: none;
        top: 0;
        direction: ltr;
    }

    #bd-prev-end-date-id {
        font-family: "FontAwesome", sans-serif;
        font-size: 41px;
        text-align: center;
        position: absolute;
        left: -80px;
        bottom: 110px;
        padding: 0;
        width: 55px;
        height: 55px;
        padding-right: 6px;
        border-radius: 50%;
        background: rgba(0,0,0,0.3);
        transition: 300ms;
        color: #fff;

    }

    #bd-next-end-date-id {
        font-family: "FontAwesome", sans-serif;
        font-size: 41px;
        text-align: center;
        position: absolute;
        right: -80px;
        bottom: 110px;
        padding: 0;
        padding-left: 6px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: rgba(0,0,0,0.3);
        transition: 300ms;
        color: #fff;
    }
    #bd-next-end-date-id:hover,#bd-prev-end-date-id:hover{
        background: rgba(0,0,0,0.7);
        transition: 300ms;
    }

    .bd-table thead tr, .bd-goto-today {
        background: #28a745;
    }
    .bd-dropdown{
        width: 50%;
    }

    .date span:hover,.tags span:hover ,.time span:hover{
        cursor: pointer;
    }
    .bd-calendar, .bd-title {
        margin: 0;
        overflow: hidden;
    }
    .owl-carousel{
        direction: ltr !important;
    }
    @media screen and (max-width: 768px) {
        .fields > div{
            float: none;
        }
        .image-content-post, .contents-post {
            width: 100%;
            float: none;
            margin: 10px 0;
            padding: 0;
        }

        .main-content {
            padding: 60px 15px;
        }

        .name-header-profile {
            display: none;
        }

        .profile-menu-header {
            padding: 7px;
            padding-left: 36px;
        }


        #bd-prev-end-date-id, #bd-prev-first-date-id  {
            left: 0;
            bottom: inherit;
            top:-55px;
        }

        #bd-next-end-date-id , #bd-next-first-date-id{
            right: 0;
            bottom: inherit;
            top:-55px;
        }
        .imageuploadify-message{
            display: none !important;
        }


    }

    @media screen and (max-width: 555px) {
        .content-header {
            display: none;
        }

    }

    @media screen and (max-width: 345px) {
        .sub-header a {
            font-size: 10px;

        }

        .sub-header {
            bottom: -44px;
        }
    }
</style>


<template>
<div>
    <section class="main-content col-xs-12">
        <div class="contents col-xs-12">
            <div class="info-contents col-xs-12">
                <div class="top-contentas  col-xs-12">
                    <div class="main-article-content col-md-7">
                      <h3>
                          خشکبار | انجیر |
                          <!--{{$buyAd->category_name . ' | ' . $buyAd->subcategory_name . ' | ' .$buyAd->name}}-->
                        </h3>
                        <br/>
                        <table class="table table-striped">
                            <tr>
                                <td>قیمت واحد<span class="">(هر کیلو به تومان)</span> :</td>
                             <!--   <td> {{$buyAd->price or "-" }} تومان</td>-->
                            </tr>
                            <tr>
                                <td> محل تحویل کالا:</td>
                       <!--         <td>{{$buyAd->address}}</td>-->
                            </tr>
                            <tr>
                                <td> میزان نیازمندی</td>
                                <!--<td>{{$buyAd->requirement_amount}} کیلوگرم</td>-->
                            </tr>
                            <tr>
                                <td> زمان ثبت درخواست:</td>
                                <!--<td>{{$buyAd->register_date}}</td>-->
                            </tr>
                        </table>
                        <!--<p>توضیحات: <span>{{$buyAd->description}}</span></p>-->
                        <p>توضیحات: <span> خوب باشه</span></p>
                    </div>
                    <div class="image-article-content col-md-5">
                        <div class="main-image col-xs-12">
                            <!--@if(sizeof($buyAd->photos) > 0)
                            <a href="{{url('storage/'.($buyAd->photos ? $buyAd->photos[0] : ''))}}"><img
                                    src="{{url('storage/'.($buyAd->photos ? $buyAd->photos[0] : ''))}}"
                                    alt=""></a>
                            @else
                            <a href="{{asset('assets/img/product.jpg')}}"><img
                                    src="{{asset('assets/img/product.jpg')}}"></a>
                            @endif-->
                        </div>
                        <div class="owl-carousel col-xs-12">
                        <!--    @foreach($buyAd->photos as $photo)
                            <a href="{{url('storage/'.$photo)}}"><img src="{{url('storage/'.$photo)}}"
                                                                      alt=""></a>
                            @endforeach-->
                        </div>
                    </div>
                </div>
                <div class="bottom-contents  col-xs-12">
                    <form>
                        <label class="header-lable">تمامی موارد خواسته شده را وارد کرده و برای خریدار ارسال
                            نمایید.</label>
                       <div class="fields col-xs-12">
                            <!--<input type="hidden" value="{{$buyAd->id}}" ref="buyAdId">-->
                            <div class="col-sm-6">
                                <label class="content-lable">
                                    محل تحویل
                                </label>
                                <input type="text" v-model="sellOffer.deliver_at">
                                <span v-if="errors.deliver_at"
                                      class="text-danger">{{ errors.deliver_at[0] }}</span>
                            </div>
                            <div class="col-sm-6">

                                <label class="content-lable">
                                    قیمت پیشنهادی به ازای هر کیلو به تومان
                                </label>
                                <input type="text" v-model="sellOffer.price">
                                <span v-if="errors.price" class="text-danger">{{ errors.price[0] }}</span>
                            </div>
                            <div class="col-sm-6">
                                <label class="content-lable">
                                    تاریخ موجودی
                                </label>
                                <input readonly="true" type="text" id="first-date-id" ref="validDateFrom">
                                <span v-if="errors.valid_date_to"
                                      class="text-danger">{{ errors.valid_date_to[0] }}</span>
                            </div>
                            <div class="col-sm-6">

                                <label class="content-lable">
                                    انتهای تاریخ موجودی
                                </label>
                                <input readonly="true" type="text" id="end-date-id" ref="validDateTo">
                                <span v-if="errors.valid_date_from" class="text-danger">{{ errors.valid_date_from[0] }}</span>
                            </div>
                            <div class="col-xs-12">

                                <label class="content-lable">
                                    توضیحات:
                                </label>
                                <textarea placeholder="" v-model="sellOffer.description"></textarea>
                                <span v-if="errors.description"
                                      class="text-danger">{{ errors.description[0] }}</span>
                            </div>
                            <div class="image_company col-xs-12">

                                <label class="content-lable">
                                    تصاویر:
                                </label>
                                <input type="file" ref="sellOfferFiles" multiple accept="image/*"
                                       @change="handleSellOfferFileUpload()">
                                <span v-if="errors.photos_count"
                                      class="text-danger">{{ errors.photos_count[0] }}</span>
                            </div>
                            <div class="col-sm-6">
                                <button type="button" class="col-xs-12 green-bot" @click="submitSellOffer">تایید
                                </button>
                            </div>
                            <div class="col-sm-6">
                                <router-link :to="{name : 'buyAdRequests'}" class="black-bot col-xs-12 col-xs-6">بازگشت
                                    به صفحه قبل</router-link>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
    export default {
        data:function(){
          return{
              currentUser:{
                  profile:'',
                  user_info:'',
              },
              sellOffer:{
                  price:'',
                  deliver_at:'',
                  valid_date_from:'',
                  valid_date_to:'',
                  description:'',
                  buy_ad_id:'',
              },
              sellOfferFields:[
                  'price',
                  'deliver_at',
                  'description',
              ],
              sellOfferFiles:[],
              errors:[],
              popUpMsg:'',
          }
        },
        methods:{
            init:function(){

            },
            submitSellOffer:function(){
                var self = this;

                var formData = this.getSellOfferFormFields();

                axios.post('/add_sell_offer',formData)
                    .then(function(response){
                        if(response.status == 201){
                            window.location.href = '/dashboard/my-sell-offers'
                        }
                    })
                    .catch(function(err){
                        self.errors = '';
                        self.errors = err.response.data.errors;

                        if(err.response.data.msg){
                            self.popUpMsg = err.response.data.msg;

                            $('#myModal').modal('show');
                        }
                    });
            },
            handleSellOfferFileUpload:function(){
                let uploadedFiles = this.$refs.sellOfferFiles.files ;
                /*
                  Adds the uploaded file to the files array
                */
                for( var i = 0; i < uploadedFiles.length; i++ ){
                    this.sellOfferFiles.push(uploadedFiles[i] );
                }
            },
            getSellOfferFormFields:function(){
                let formData = new FormData();
                let cnt = this.sellOfferFields.length;

                for(var i = 0 ; i < cnt ; i++){
                    formData.append(this.sellOfferFields[i],this.toLatinNumbers(this.sellOffer[this.sellOfferFields[i]]));
                }

                formData.append('valid_date_from',this.toLatinNumbers(this.$refs.validDateFrom.value));
                formData.append('valid_date_to',this.toLatinNumbers(this.$refs.validDateTo.value));
                formData.append('buy_ad_id',this.toLatinNumbers(this.$refs.buyAdId.value));

                for(var i = 0; i < this.sellOfferFiles.length; i++ ){
                    let file = this.sellOfferFiles[i];
                    formData.append('img_' + i , file);
                }
                formData.append('photos_count',this.sellOfferFiles.length);

                return formData;
            },
            toLatinNumbers:function(num){
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
        },
        mounted(){
            this.init();
        },
    }
</script>
