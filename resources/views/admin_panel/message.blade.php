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
        پیام ها
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
            <form method="post" action="{{route('admin_panel_load_user_messages')}}">
                     <div class="row">
                        <div class="col-xs-4">
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <label>شماره تلفن به انگلیسی</label>
                                </div>
                                <div class="col-xs-12">
                                    <input class="form-control" type="text" name="phone" placeholder="شماره تلفن">
                                    @if($errors->has('phone'))
                                        <p class="text text-red">{{$errors->phone}}</p>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-3">
                            <br/>
                            <button type="submit" class="btn btn-primary">مشاهده پیام ها</button>
                        </div>    
                    </div>
                    <br/>
                </form> 
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

             <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                 @isset($messages)
                    <p class="text">مخاطبین {{$user_record->first_name.' '.$user_record->last_name}} {{$user_record->is_seller ? 'فروشنده' : 'خریدار' }}</p>  
                    
                    @foreach($messages as $msg)
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="{{$msg['contact_info']->contact_id}}">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="{{'#collapse' . $msg['contact_info']->contact_id}}" aria-expanded="false" aria-controls="{{'collapse' . $msg['contact_info']->contact_id}}">
                                    {{$msg['contact_info']->first_name . ' ' . $msg['contact_info']->last_name}}
                                </a>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <a href="{{'/profile/' . $msg['contact_info']->user_name}}" target="_blank"> <small>&nbsp مشاهده پروفایل &nbsp</small> </a>
                                    </div>
                                </div>
                            </h4>
                            </div>
                            <div id="{{'collapse' . $msg['contact_info']->contact_id}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="{{$msg['contact_info']->contact_id}}">
                            <div class="panel-body">
                                @foreach($msg['messages'] as $msgItem)
                                    @if($msgItem->sender_id == $user_record->id)
                                        <p class="text text-right">{{$msgItem->text}}</p>
                                        <p class="text text-right text-green"><small>{{$msgItem->created_at}} @if($msgItem->is_read)<span class="fa fa-check text text-red"></span>@endif</small></p>
                                    @else
                                        <p class="text text-left">{{$msgItem->text}}</p>
                                        <p class="text text-left text-green"><small>{{$msgItem->created_at}} @if($msgItem->is_read)<span class="fa fa-check text text-red"></span>@endif</small></p>
                                    @endif
                                @endforeach
                            </div>
                            </div>
                        </div>
                    @endforeach
                @endisset
                </div>
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
  @endsection
<!-- ./wrapper -->

@section('script_tags')
<!-- jQuery 3 -->
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
 
@endsection
