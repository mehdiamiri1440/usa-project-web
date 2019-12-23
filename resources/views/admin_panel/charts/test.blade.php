@extends('admin_panel.layout.master')

@section('header_links')
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
        
      <link  rel="stylesheet" href="{{asset('assets/css/kamadatepicker.min.css')}}">

      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <![endif]-->

      <!-- Google Font -->
    
    </head>
@endsection

@section('main_content')
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        نمودارها
      </h1>
     <div class="row">
                <form method="post" action="{{route('admin_panel_load_statistics_chart')}}">
                     <div class="row">
                        <div class="col-xs-6">
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <label>از تاریخ</label>
                                </div>
                                <div class="col-xs-4">
                                    <input class="form-control" type="text" name="start_date" id="start-date" value="{{session('start_date')}}">
                                </div>
                            </div>
                        </div>
                         <div class="col-xs-6">
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <label>تا تاریخ</label>
                                </div>
                                <div class="col-xs-4">
                                    <input class="form-control" type="text" name="end_date" id="end-date" value="{{session('end_date')}}">
                                </div>
                            </div>
                        </div>

                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-xs-6">
                                <div class="form-group">
                                    <div class="col-xs-12">
                                        <label>بازه ی بازگشت کاربران به روز</label>
                                    </div>
                                    <div class="col-xs-4">
                                        <input class="form-control" type="number" name="retention_period"  value="{{session('retention_period')}}">
                                    </div>
                                </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="form-group">
                                <input type="radio" name="user_type" value="seller" {{session('myuser_type')=="seller" ? 'checked' : ''}}>فروشنده
                                <br/>
                                <input type="radio" name="user_type" value="buyer" {{session('myuser_type')=="buyer" ? 'checked' : ''}}>خریدار
                                <br/>
                                <input type="radio" name="user_type" value="" {{session('myuser_type')=="" ? 'checked' : ''}}>هر دو
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="row">
                        <div class="col-xs-4 col-xs-offset-4">
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary" >مشاهده آمار</button>
                            </div>
                        </div>
                    </div>
                    <br/>
                </form>  
        
              </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">        
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
                {!! $UMSChart->container() !!}
                <hr/><br/>
                {!! $UMRChart->container() !!}
                <hr/><br/>
                {!! $signUpChart->container() !!}
                <hr/><br/>
                {!! $productPostingChart->container() !!}
                <hr/><br/>
                {!! $activeUsersChart->container() !!}
                <!-- <hr/><br/> -->
                <hr/><br/>
                {!! $buyAdPostingChart->container() !!}
                <hr/><br/>
                {!! $productElevatorChart->container() !!}
                
               
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
@endsection
  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->

<!-- ./wrapper -->
@section('script_tags')
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
<script src="{{asset('assets/js/kamadatepicker.js')}}"></script>
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
  });
    
  $(document).ready(function() {
      kamaDatepicker('start-date', { forceFarsiDigits: true,markHolidays:true,gotoToday:true,markToday:true });
        
      kamaDatepicker('end-date', { forceFarsiDigits: true,markHolidays:true,gotoToday:true,markToday:true });
    });
    
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highcharts/6.0.6/highcharts.js" charset="utf-8"></script>
{!! $UMSChart->script() !!}
{!! $UMRChart->script() !!}
{!! $signUpChart->script() !!}
{!! $productPostingChart->script() !!}
{!! $activeUsersChart->script() !!}
{!! $buyAdPostingChart->script() !!}
{!! $productElevatorChart->script() !!}


@endsection

