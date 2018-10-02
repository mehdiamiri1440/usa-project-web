@extends('layout.seller-dashboard')
@section('header_links')
{{--    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/profile/profile-basic.css')}}">--}}
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">
{{--    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/profile/profile-complete.css')}}">--}}
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item"><a href="{{route('profile_complementary')}}">
                    اطلاعات تکمیلی </a>
            </li>
            <li class="list-item"><a href="{{route('profile_basic')}}" class="active">
                    اطلاعات پایه
                </a>
            </li>
        </ul>
    </div>
@endsection

@section('popup_msg')
    <p class="main_par">
        تغییرات با موفقییت اعمال شد
    </p>
    {{--<p class="secend_par">--}}
    {{--جهت ثبت درخواست های خرید یا فروش، ابتدا می بایست  اطلاعات اصلی پروفایل خود را کامل کنید.--}}
    {{--</p>--}}
@endsection

@section('main_content')

        <profile-base
                storage="{{asset('storage/')}}"
                defultimg="{{asset('assets/img/user-defult.png')}}"
                ></profile-base>
        {{--<router-view--}}
                {{--storage="{{asset('storage/')}}"--}}
                {{--defultimg="{{asset('assets/img/user-defult.png')}}"--}}
                {{--></router-view>--}}

@endsection

@section('body_script_tags')

{{--        <script src="{{asset('assets/js/dashboard/profile/profile-basic.js')}}"></script>--}}
{{--        <script src="{{asset('assets/js/dashboard/profile/profile-complete.js')}}"></script>--}}
{{--        <script src="{{asset('assets/js/dashboard/profile/api-basic.js')}}"></script>--}}
@endsection
