@extends('layout.seller-dashboard')
@section('header_links')
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/dashboard/product/product-basic.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('assets/css/imageuploadify.min.css')}}">
@endsection

@section('sub_header')
    <div class="sub-header">
        <ul class="list-inline">
             <li class="list-item active">
                 <a href="#">
                    ثبت محصول    
                  </a>
            </li>
        </ul>
    </div>
@endsection

@section('main_content')
    <main id="main">
<product-basic></product-basic>

</main>
@endsection

@section('body_script_tags')
    <script src="{{asset('assets/js/imageuploadify.min.js')}}"></script>
    <script src="{{asset('assets/js/dashboard/product/custom.js')}}"></script>
{{--    <script src="{{asset('assets/js/dashboard/product/api-product-basic.js')}}"></script>--}}
@endsection
