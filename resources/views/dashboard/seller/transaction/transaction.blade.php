@extends('layout.seller-dashboard')

@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/seller/transaction.css')}}">
@endsection


@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item active">
                <a href="#">
                    فرآیند فروش
                </a>
            </li>
        </ul>
    </div>
@endsection


@section('main_content')
    <main id="main">

        <transition-seller
                trans="{{$transaction_id}}"
                loading="{{asset('assets/img/gif/loading.gif')}}"
        ></transition-seller>

    </main>
@endsection


@section('body_script_tags')
    <script src="{{asset('assets/js/dashboard/seller/transaction.js')}}"></script>

@endsection