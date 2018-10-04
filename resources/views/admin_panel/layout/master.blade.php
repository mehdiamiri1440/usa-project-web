<!DOCTYPE HTML>
<html>
@yield('header_links')

<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">
    <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">پنل</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>پنل مدیریت اینکوباک</b></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          
          <!-- Notifications: style can be found in dropdown.less -->
         
          <!-- Tasks: style can be found in dropdown.less -->
          
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <span class="hidden-xs">{{session('admin_full_name')}}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <p>
                  {{session('admin_full_name')}}
                </p>
              </li>
              <!-- Menu Body -->
             
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">پروفایل</a>
                </div>
                <div class="pull-left">
                  <a href="{{route('admin_panel_logout')}}" class="btn btn-default btn-flat">خروج</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
        </ul>
      </div>
    </nav>
  </header>
  <!-- right side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- search form -->
<!--
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="جستجو">
          <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
-->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">منو</li>
        <li class="{{Request::is('admin/user-list') || Request::is('admin/user-list-detail/*') ? 'active':''}}">
                <a href="{{route('admin_panel_load_user_list')}}"><i class="fa fa-envelope"></i><span> لیست کاربران</span></a>      
        </li>
        <li class="{{Request::is('admin/profile')  ? 'active':''}}">
            <a href="{{route('admin_panel_profile')}}"><i class="fa fa-envelope"></i><span>پروفایل ها</span></a>      
        </li>
        <li class="{{Request::is('admin/buyAd') || Request::is('admin/buyAd-detail/*') ? 'active':''}}">
            <a href="{{route('admin_panel_buyAd')}}"><i class="fa fa-envelope"></i><span>درخواست ها ی خرید</span></a>      
        </li>
        <li class="{{Request::is('admin/sellAd') || Request::is('admin/sellAd-detail/*')  ? 'active':''}}">
            <a href="{{route('admin_panel_sellAd')}}">
                <i class="fa fa-envelope"></i><span>آگهی های فروش</span></a>      
        </li>
        <li class="{{Request::is('admin/profile-list') ? 'active':''}}">
            <a href="{{route('admin_panel_profile_list')}}"><i class="fa fa-envelope"></i><span>لیست پروفایل ها</span></a>      
        </li>
        <li class="{{Request::is('admin/buyAd-list') || Request::is('admin/buyAd-list-detail/*') ? 'active':''}}">
            <a href="{{route('admin_panel_buyAd_list')}}"><i class="fa fa-envelope"></i><span>درخواست های خرید تایید شده</span></a>      
        </li>
        <li class="{{Request::is('admin/sellAd-list') || Request::is('admin/sellAd-list-detail/*') ? 'active':''}}">
            <a href="{{route('admin_panel_sellAd_list')}}"><i class="fa fa-envelope"></i><span>آگهی های فروش تایید شده</span></a>      
        </li>
        <li class="{{Request::is('admin/sell-offers') || Request::is('admin/sell-offer-detail/*') ? 'active':''}}">
            <a href="{{route('admin_panel_sell_offer_list')}}"><i class="fa fa-envelope"></i><span>پیشنهادات فروش</span></a>     
        </li>
        <hr/>
        <li class="{{Request::is('admin/pending-list') ? 'active':''}}">
            <a href="{{route('admin_panel_waiting_to_initiate_transactions_list')}}"><i class="fa fa-envelope"></i><span>در انتظار تماس</span></a>
        </li>
        <li class="{{Request::is('admin/prepayment-factor-list') ? 'active':''}}">
            <a href="{{route('admin_panel_waiting_for_prepayment_factor_issuance_list')}}"><i class="fa fa-envelope"></i><span>در انتظار فاکتور پیش پرداخت</span></a>
        </li>
        <li class="{{Request::is('admin/payment-factor-list') ? 'active':''}}">
            <a href="{{route('admin_panel_waiting_for_payment_factor_issuance_list')}}"><i class="fa fa-envelope"></i><span>در انتظار فاکتور تسویه</span></a>
        </li>
        <li class="{{Request::is('admin/transaction-termination-list') ? 'active':''}}">
            <a href="{{route('admin_panel_waiting_for_termination_transaction_list')}}"><i class="fa fa-envelope"></i><span>در انتظاراتمام تراکنش</span></a>
        </li>
        <li class="{{Request::is('admin/transaction-checkout-list') ? 'active':''}}">
            <a href="{{route('admin_panel_waiting_for_checkout_transaction_list')}}"><i class="fa fa-envelope"></i><span>درانتظار تسویه با اینکوباک</span></a>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
    @yield('main_content')
    <div class="control-sidebar-bg"></div>
</div> 
    @yield('script_tags')
</body>
</html>