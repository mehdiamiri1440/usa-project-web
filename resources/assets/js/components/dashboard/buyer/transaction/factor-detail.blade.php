@extends('layout.buyer-dashboard')

@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/buyer/transaction-report-detail.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item">
                <a href="#" class="active">
                    جزییات فاکتور    
                </a>
            </li>

        </ul>
    </div>
@endsection


@section('main_content')
<main id="main">
    <section class="main-content col-xs-12">
        <div class="factor-detail contents col-xs-12">
                <div class="factor-title">
                    <div class="title-text col-xs-12 col-sm-4">
                        خلاصه ی فاکتور
                    </div>
                    <div class="serial-number col-xs-12 col-sm-4">
                        شماره سریال:  <span>@{{factorInfo.sell_offer_id + 100000}}</span>
                    </div>
                    <div class="date-init col-xs-12 col-sm-4">
                        تاریخ پرداخت : <span>@{{factorInfo.persian_date}}</span>
                    </div>
                </div>
                <div class="contents-detail col-xs-12">
                    <div class="col-xs-12">
                        <table class="table table-striped">
                            <tr>
                                <td>نام محصول: </td>
                                <td>@{{factorInfo.product_name}} </td>
                            </tr>
                            <tr>
                                <td>مبلغ  پرداختی:</td>
                                <td> @{{factorInfo.amount_to_pay}} تومان  </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
    </section>
</main>
@endsection


@section('body_script_tags')
    <script>
        var factorId = {{$factor_id}} ;
    </script>
    <script src="{{asset('assets/js/dashboard/buyer/transaction-report-detail.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/buyer/api-factor-detail.js')}}"></script>
@endsection