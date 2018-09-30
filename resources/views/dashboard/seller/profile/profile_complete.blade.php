@extends('layout.seller-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">
{{--    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/profile/profile-complete.css')}}">--}}
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
            <li class="list-item"><a href="{{route('profile_complementary')}}" class="active">
                    اطلاعات تکمیلی </a>
            </li>
            <li class="list-item"><a href="{{route('profile_basic')}}">
                    اطلاعات پایه
                </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">
     <profile-complete></profile-complete>
    </main>
@endsection

@section('body_script_tags')
{{--    <script src="{{asset('assets/js/dashboard/profile/profile-complete.js')}}"></script>--}}
@endsection
