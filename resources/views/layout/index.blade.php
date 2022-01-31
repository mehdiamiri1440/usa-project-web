@include('layout.header.header-meta');

<link rel="stylesheet" href="{{asset('assets/css/landing-page/style.css')}}">
<link rel="stylesheet" href="{{asset('assets/css/navigation-menu/style.css')}}" />

@include('layout.header.header');

@include('layout.landing-page-components.main')

@include('layout.footer.footer') 

@include('layout.footer.navigation-mobile-menu')