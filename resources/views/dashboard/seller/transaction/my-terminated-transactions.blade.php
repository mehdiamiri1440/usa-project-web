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
    <my-terminated-transactions
            loading="{{asset('assets/img/gif/loading.gif')}}"
            trans="{{url('/dashboard/transaction-detail')}}"
    ></my-terminated-transactions>

</main>
@endsection


@section('body_script_tags')
    <script src="{{asset('assets/js/dashboard/buyer/my-transactions.js')}}"></script>
{{--    <script src="{{asset('assets/js/dashboard/buyer/api-my-terminated-transactions.js')}}"></script>--}}
@endsection