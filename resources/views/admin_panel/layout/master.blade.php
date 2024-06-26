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
      <span class="logo-lg"><b>پنل مدیریت باسکول</b></span>
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
        @if(in_array('admin_panel_load_statistics_chart',session('allowed_routes')))
        <li class="{{Request::is('admin/statisticsCharts') ? 'active':''}}">
                <a href="{{route('admin_panel_load_statistics_chart')}}"><i class="fa fa-envelope"></i><span>نمودارها</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_load_user_list',session('allowed_routes')))
        <li class="{{Request::is('admin/user-list') || Request::is('admin/user-list-detail/*') ? 'active':''}}">
                <a href="{{route('admin_panel_load_user_list')}}"><i class="fa fa-envelope"></i><span> لیست کاربران</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_profile',session('allowed_routes')))
        <li class="{{Request::is('admin/profile')  ? 'active':''}}">
            <a href="{{route('admin_panel_profile')}}"><i class="fa fa-envelope"></i><span>پروفایل ها</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_buyAd',session('allowed_routes')))
        <li class="{{Request::is('admin/buyAd') || Request::is('admin/buyAd-detail/*') ? 'active':''}}">
            <a href="{{route('admin_panel_buyAd')}}"><i class="fa fa-envelope"></i><span>درخواست ها ی خرید</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_sellAd',session('allowed_routes')))
        <li class="{{Request::is('admin/sellAd') || Request::is('admin/sellAd-detail/*')  ? 'active':''}}">
            <a href="{{route('admin_panel_sellAd')}}">
                <i class="fa fa-envelope"></i><span>آگهی های فروش</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_profile_list',session('allowed_routes')))
        <li class="{{Request::is('admin/profile-list') ? 'active':''}}">
            <a href="{{route('admin_panel_profile_list')}}"><i class="fa fa-envelope"></i><span>لیست پروفایل ها</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_buyAd_list',session('allowed_routes')))
        <li class="{{Request::is('admin/buyAd-list') || Request::is('admin/buyAd-list-detail/*') ? 'active':''}}">
            <a href="{{route('admin_panel_buyAd_list')}}"><i class="fa fa-envelope"></i><span>درخواست های خرید تایید شده</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_sellAd_list',session('allowed_routes')))
        <li class="{{Request::is('admin/sellAd-list') || Request::is('admin/sellAd-list-detail/*') ? 'active':''}}">
            <a href="{{route('admin_panel_sellAd_list')}}"><i class="fa fa-envelope"></i><span>آگهی های فروش تایید شده</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_message_list',session('allowed_routes')))
        <li class="{{Request::is('admin/messages') ? 'active':''}}">
            <a href="{{route('admin_panel_message_list')}}"><i class="fa fa-envelope"></i><span>پیام ها</span></a>      
        </li>
        @endif
        @if(in_array('load_users_unconfirmed_comments',session('allowed_routes')))
        <li class="{{Request::is('admin/user-comment-list') || Request::is('admin/user-comment-detail/*')? 'active':''}}">
            <a href="{{route('load_users_unconfirmed_comments')}}"><i class="fa fa-envelope"></i><span>کامنت های تایید نشده</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_load_messaging_anomaly',session('allowed_routes')))
        <li class="{{Request::is('admin/suspicious-messages-list') ? 'active':''}}">
            <a href="{{route('admin_panel_load_messaging_anomaly')}}"><i class="fa fa-envelope"></i><span>آنومالی در پیام ها</span></a>      
        </li>
        @endif
        @if(in_array('admin_load_unverified_documents',session('allowed_routes')))
        <li class="{{Request::is('admin/unverified-user-list') ? 'active':''}}">
            <a href="{{route('admin_load_unverified_documents')}}"><i class="fa fa-envelope"></i><span>اطلاعات احراز هویت</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_payment_list',session('allowed_routes')))
        <li class="{{Request::is('admin/payment-list') ? 'active':''}}">
            <a href="{{route('admin_panel_payment_list')}}"><i class="fa fa-envelope"></i><span>وضعیت تراکنش ها</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_submit_to_channel',session('allowed_routes')))
        <li class="{{Request::is('admin/submit-to-channel') ? 'active':''}}">
            <a href="{{route('admin_panel_submit_to_channel')}}"><i class="fa fa-envelope"></i><span>ارسال در کانال</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_channel_content_list',session('allowed_routes')))
        <li class="{{Request::is('admin/admin_panel_channel_content_list') ? 'active':''}}">
            <a href="{{route('admin_panel_channel_content_list')}}"><i class="fa fa-envelope"></i><span>همه پست های کانال</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_load_meta_contents_list',session('allowed_routes')))
        <li class="{{Request::is('admin/categories-meta-data-list') ? 'active':''}}">
            <a href="{{route('admin_panel_load_meta_contents_list')}}"><i class="fa fa-envelope"></i><span>اطلاعات دسته بندی ها</span></a>      
        </li>
        @endif
        @if(in_array('load_admin_users_list',session('allowed_routes')))
        <li class="{{Request::is('admin/admin-users-list') ? 'active':''}}">
            <a href="{{route('load_admin_users_list')}}"><i class="fa fa-envelope"></i><span>کاربران ادمین</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_get_potential_paying_users_list',session('allowed_routes')))
        <li class="{{Request::is('admin/potential-paying-users-list') ? 'active':''}}">
            <a href="{{route('admin_panel_get_potential_paying_users_list')}}"><i class="fa fa-envelope"></i><span>لیست پرداخت نکرده ها</span></a>      
        </li>
        @endif
        @if(in_array('admin_panel_get_package_expiring_customers_list',session('allowed_routes')))
        <li class="{{Request::is('admin/package-expiring-custormers') ? 'active':''}}">
            <a href="{{route('admin_panel_get_package_expiring_customers_list')}}"><i class="fa fa-envelope"></i><span>عضویت های در حال اتمام</span></a>      
        </li>
        @endif
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