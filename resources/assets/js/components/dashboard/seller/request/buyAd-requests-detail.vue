<template>
<div>
        <section class="main-content col-xs-12">
        <div class="contents col-xs-12">
            <div class="info-contents col-xs-12">
                <div class="top-contentas  col-xs-12">
                    <div class="main-article-content col-md-7">
                      <!--  <h3>
                            {{$buyAd->category_name . ' | ' . $buyAd->subcategory_name . ' | ' .$buyAd->name}}
                        </h3>-->
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
                       <!-- <div class="fields col-xs-12">
                            <input type="hidden" value="{{$buyAd->id}}" ref="buyAdId">
                            <div class="col-sm-6">
                                <label class="content-lable">
                                    محل تحویل
                                </label>
                                <input type="text" v-model="sellOffer.deliver_at">
                                <span v-if="errors.deliver_at"
                                      class="text-danger">@{{ errors.deliver_at[0] }}</span>
                            </div>
                            <div class="col-sm-6">

                                <label class="content-lable">
                                    قیمت پیشنهادی به ازای هر کیلو به تومان
                                </label>
                                <input type="text" v-model="sellOffer.price">
                                <span v-if="errors.price" class="text-danger">@{{ errors.price[0] }}</span>
                            </div>
                            <div class="col-sm-6">
                                <label class="content-lable">
                                    تاریخ موجودی
                                </label>
                                <input readonly="true" type="text" id="first-date-id" ref="validDateFrom">
                                <span v-if="errors.valid_date_to"
                                      class="text-danger">@{{ errors.valid_date_to[0] }}</span>
                            </div>
                            <div class="col-sm-6">

                                <label class="content-lable">
                                    انتهای تاریخ موجودی
                                </label>
                                <input readonly="true" type="text" id="end-date-id" ref="validDateTo">
                                <span v-if="errors.valid_date_from" class="text-danger">@{{ errors.valid_date_from[0] }}</span>
                            </div>
                            <div class="col-xs-12">

                                <label class="content-lable">
                                    توضیحات:
                                </label>
                                <textarea placeholder="" v-model="sellOffer.description"></textarea>
                                <span v-if="errors.description"
                                      class="text-danger">@{{ errors.description[0] }}</span>
                            </div>
                            <div class="image_company col-xs-12">

                                <label class="content-lable">
                                    تصاویر:
                                </label>
                                <input type="file" ref="sellOfferFiles" multiple accept="image/*"
                                       @change="handleSellOfferFileUpload()">
                                <span v-if="errors.photos_count"
                                      class="text-danger">@{{ errors.photos_count[0] }}</span>
                            </div>
                            <div class="col-sm-6">
                                <button type="button" class="col-xs-12 green-bot" @click="submitSellOffer">تایید
                                </button>
                            </div>
                            <div class="col-sm-6">
                                <a href="{{route('seller-buyAd-requests')}}" class="black-bot col-xs-12 col-xs-6">بازگشت
                                    به صفحه قبل</a>
                            </div>

                        </div>
-->
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
