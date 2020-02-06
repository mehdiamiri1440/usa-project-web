<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>جدول ها | کنترل پنل</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="{{asset('admin-panel/dist/css/bootstrap-theme.css')}}">
  <!-- Bootstrap rtl -->
  <link rel="stylesheet" href="{{asset('admin-panel/dist/css/rtl.css')}}">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{asset('admin-panel/bower_components/font-awesome/css/font-awesome.min.css')}}">
  <!-- Ionicons -->
  <link rel="stylesheet" href="{{asset('admin-panel/bower_components/Ionicons/css/ionicons.min.css')}}">
  <!-- DataTables -->
  <link rel="stylesheet" href="{{asset('admin-panel/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css')}}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{asset('admin-panel/dist/css/AdminLTE.css')}}">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="{{asset('admin-panel/dist/css/skins/_all-skins.min.css')}}">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
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
            <li>
                    <a href="{{route('admin_panel_load_user_list')}}"><i class="fa fa-envelope"></i><span> لیست کاربران</span></a>      
            </li>
            <li>
                <a href="{{route('admin_panel_profile')}}"><i class="fa fa-envelope"></i><span>پروفایل ها</span></a>      
            </li>
            <li>
                <a href="{{route('admin_panel_buyAd')}}"><i class="fa fa-envelope"></i><span>درخواست ها ی خرید</span></a>      
            </li>
            <li>
                <a href="{{route('admin_panel_sellAd')}}">
                    <i class="fa fa-envelope"></i><span>آگهی های فروش</span></a>      
            </li>
            <li>
                <a href="{{route('admin_panel_profile_list')}}"><i class="fa fa-envelope"></i><span>لیست پروفایل ها</span></a>      
            </li>
            <li>
                <a href="{{route('admin_panel_buyAd_list')}}"><i class="fa fa-envelope"></i><span>درخواست های خرید تایید شده</span></a>      
            </li>
            <li>
                <a href="{{route('admin_panel_sellAd_list')}}"><i class="fa fa-envelope"></i><span>آگهی های فروش تایید شده</span></a>      
            </li>
            <li>
                <a href="{{route('admin_panel_sell_offer_list')}}"><i class="fa fa-envelope"></i><span>پیشنهادات فروش</span></a>     
            </li>
            <li>
                <a href="{{route('admin_panel_accepted_sell_offer_list')}}"><i class="fa fa-envelope"></i><span>در انتظار تماس</span></a>
            </li>
            <li class="active">
                <a href="{{route('admin_panel_farmer_list')}}"><i class="fa fa-envelope"></i><span>لیست تامین کنندگان</span></a>
            </li>
            <li>
              <a href="">
                <i class="fa fa-envelope"></i> <span>ایمیل ها</span>
                <span class="pull-left-container">
                  <small class="label pull-left bg-yellow">۱۲</small>
                </span>
              </a>
            </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        لیست تامین کنندگان
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">        
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">جدول داده ها</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>#</th>
                  <th>نام و نام خانوادگی</th>
                  <th>تلفن</th>
                  <th>حوزه فعالیت</th>
                  <th>آدرس</th>
                  <th>جزییات</th>
                </tr>
                </thead>
                <tbody>
                @foreach($farmers as $farmer)
                <tr>
                    <td>{{$loop->iteration}}</td>
                    <td>{{$farmer->full_name}}</td>
                    <td>{{$farmer->phone}}</td>
                    <td>{{$farmer->activity_domain}}</td>                    
                    <td>{{$farmer->city}}</td>                    
                    <td><a href="{{route('admin_panel_farmer_product_list',['farmer_id' => $farmer->id])}}">مشاهده ی محصولات</a></td>
                </tr>
                @endforeach
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>
</div>
<!-- ./wrapper -->

<script src="{{asset('admin-panel/bower_components/jquery/dist/jquery.min.js')}}"></script>
<!-- Bootstrap 3.3.7 -->
<script src="{{asset('admin-panel/bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
<!-- DataTables -->
<script src="{{asset('admin-panel/bower_components/datatables.net/js/jquery.dataTables.min.js')}}"></script>
<script src="{{asset('admin-panel/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js')}}"></script>
<!-- SlimScroll -->
<script src="{{asset('admin-panel/bower_components/jquery-slimscroll/jquery.slimscroll.min.js')}}"></script>
<!-- FastClick -->
<script src="{{asset('admin-panel/bower_components/fastclick/lib/fastclick.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{asset('admin-panel/dist/js/adminlte.min.js')}}"></script>
<!-- AdminLTE for demo purposes -->
<script src="{{asset('admin-panel/dist/js/demo.js')}}"></script>
<!-- page script -->
<script>
  $(function () {
    $('#example1').DataTable()
    $('#example2').DataTable({
      'paging'      : true,
      'lengthChange': false,
      'searching'   : false,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    })
  })
</script>

</body>
</html>
