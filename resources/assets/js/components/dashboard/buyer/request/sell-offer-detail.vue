<!--
<template>
    <section class="main-content col-xs-12">
        <div class="contents col-xs-12">
            <div class="user-info col-xs-12">
                <div class="info_profile col-xs-12 col-sm-7">
                    <div class="user_image col-md-2">
                        <a href="#">
                            {{&#45;&#45;                        <img src="{{url('storage/'.$profile_photo)}}" alt="">&#45;&#45;}}
                            <img src="{{url('assets/img/user-defult.png')}}" alt="">
                        </a>
                    </div>
                    <div class="user_name col-sm-8">
                        <p >{{$sell_offer_user_info->first_name . ' ' . $sell_offer_user_info->last_name}}<span> - </span>{{$sell_offer_user_info->province . ' | '.$sell_offer_user_info->city }}</p>
                    </div>

                </div>
                <div class="profile_link col-xs-12 col-sm-5">
                    <a href="{{url('/profile/' . $sell_offer_user_info->user_name)}}" class="green-bot">
                        مشاهده پروفایل تامین کننده
                    </a>
                </div>

            </div>
            <div class="info-contents col-xs-12">
                <div class="image-article-content  col-xs-12 col-md-5">
                    <div class="main-image col-xs-12">
                        <a  href="{{url('storage/'.$sell_offer->photos[0])}}"><img src="{{url('storage/'.$sell_offer->photos[0])}}" alt=""></a>
                    </div>
                    <div class="owl-carousel col-xs-12">
                        @foreach($sell_offer->photos as $photo)
                        <a href="{{url('storage/'.$photo)}}"><img src="{{url('storage/'.$photo)}}" alt=""></a>
                        @endforeach
                    </div>
                </div>
                <div class="main-article-content col-xs-12 col-md-7">
                    <table class="table table-striped">
                        <tr>
                            <td>قیمت واحد<span class="">(هر کیلو به تومان)</span> :</td>
                            <td> {{$sell_offer->price}} تومان</td>
                        </tr>
                        <tr>
                            <td>  محل تحویل کالا:</td>
                            <td> {{$sell_offer->deliver_at}}</td>
                        </tr>

                        <tr>
                            <td>  زمان موجودی:</td>
                            <td>{{$sell_offer->date_from . ' - ' . $sell_offer->date_to}}</td>
                        </tr>
                    </table>
                    <p>توضیحات: <span>{{$sell_offer->description}}</span></p>
                    <div class="col-xs-12 actions">
                        <div v-show='{{$sell_offer->is_pending}}'>
                            <button type="button" class="green-bot" @click='{{"initiateBuy($sell_offer->id)"}}'>آغاز فرآیند خرید</button>
                            <button type="button" class="green-bot" @click='{{"rejectBuy($sell_offer->id)"}}'>رد این پیشنهاد</button>
                        </div>
                        <p class='text-success' v-show='{{$sell_offer->is_accepted}}'>شما قبلا این پیشنهاد را پذیرفته اید.منتظر ارتباط ما باشید.</p>
                        <p class='text-danger' v-show='{{$sell_offer->is_pending == 0 && $sell_offer->is_accepted == 0 }}'>شما قبلا این پیشنهاد را رد کرده اید.درصورت تغییر نظر با ما تماس بگیرید</p>

                        <a href="{{route('buyer-my-buyAds')}}" class="black-bot">بازگشت به صفحه قبل</a>
                    </div>
                </div>


            </div>
        </div>
    </section>
</template>
<script>
    export default {

    }
</script>-->
