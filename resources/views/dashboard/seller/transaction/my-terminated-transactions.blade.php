@extends('layout.seller-dashboard')

@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/buyer/my-transactions.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">

            <li class="list-item"><a href="#" class="active">
                لیست تراکنش ها
            </a>
            </li>

        </ul>
    </div>
@endsection


@section('main_content')
<main id="main">
    <section  class="main-content col-xs-12">
        {{--<ul class="list-unstyled" v-if="transactions.length != 0">--}}
            {{--<!--start title list -->--}}
            {{--<li class="list-group-item title-list">--}}
                {{--<p class="title-list-text col-xs-2">شماره تراکنش</p>--}}
                {{--<p class="time-show  col-xs-2">تاریخ </p>--}}
                {{--<p class="time-show col-xs-5">موضوع فعالیت </p>--}}
            {{--</li>--}}
            {{--<!--end title list -->--}}
            {{--<li class="list-group-item content-list col-xs-12" v-for="transaction in transactions">--}}
                {{--<a :href=" '{{url('/dashboard/transaction-report')}}/' + transaction.transaction_id">--}}
                    {{--<p class="number col-xs-2">--}}
                        {{--@{{transaction.transaction_id}}--}}
                    {{--</p>--}}
                    {{--<p class="date col-xs-2" dir="rtl">--}}
                        {{--@{{transaction.deal_formation_date}}--}}
                    {{--</p>--}}
                    {{--<p class="subject col-xs-5">--}}
                        {{--@{{transaction.product_name}}--}}
                    {{--</p>--}}
                {{--</a>--}}
            {{--</li>--}}
        {{--</ul>--}}
        <div class="loading_images  col-xs-12" v-else-if="isLoading">
            <img src="{{asset('assets/img/gif/loading.gif')}}" style="width:200px;height:200px">
        </div>
        <div class="col-xs-12" v-else>
            <h4 class="text-center" dir="rtl">تراکنشی در این قسمت وجود ندارد.</h4>
        </div>
    </section>
</main>
@endsection


@section('body_script_tags')
    <script src="{{asset('assets/js/dashboard/buyer/my-transactions.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/buyer/api-my-terminated-transactions.js')}}"></script>
@endsection