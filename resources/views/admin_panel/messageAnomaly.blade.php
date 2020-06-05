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
        پیام های غیر نرمال
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
             
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

             <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
             @isset($abnormal_users)
                    <p>افراد مشکوک</p>
                    
                    @foreach($abnormal_users as $user)
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="{{$user->id}}">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="{{'#collapse' . $user->id}}" aria-expanded="false" aria-controls="{{'collapse' . $user->id}}">
                                    {{$user->first_name . ' ' . $user->last_name}}
                                </a>
                                <div class="row">
                                    <div class="col-xs-12">
                                        
                                    </div>
                                </div>
                            </h4>
                            </div>
                            <div id="{{'collapse' . $user->id}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="{{$user->id}}">
                            <div class="panel-body">
                                        <p class="text text-danger">شماره تماس :‌ {{$user->phone}}</p>
                                        <p class="text text-danger">زمان ثبت نام :‌ {{$user->created_at}}</p>
                                        <a class="text" href="{{'/profile/'. $user->user_name}}" target="_blank">مشاهده پروفایل</a>
                                        @if($user->is_blocked == false)
                                            <button class="btn btn-danger" id="{{$user->id}}" onclick="block_user(event)">مسدود کردن حساب کاربر</button>
                                        @else
                                            <button class="btn btn-success" id="{{$user->id}}" onclick="unblock_user(event)">خارج کردن از بلاک</button>
                                        @endif
                            </div>
                            </div>
                        </div>
                    @endforeach
                @endisset
                 @isset($abnormal_messages)
                    <p>پیام های غیر نرمال کشف شده</p>
                    
                    @foreach($abnormal_messages as $msg)
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="{{$msg->id}}">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="{{'#collapse' . $msg->id}}" aria-expanded="false" aria-controls="{{'collapse' . $msg->id}}">
                                    {{$msg->sender_first_name . ' ' . $msg->sender_last_name . '  ------> ' . $msg->receiver_first_name . ' ' . $msg->receiver_last_name}}
                                </a>
                                <div class="row">
                                    <div class="col-xs-12">
                                        
                                    </div>
                                </div>
                            </h4>
                            </div>
                            <div id="{{'collapse' . $msg->id}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="{{$msg->id}}">
                            <div class="panel-body">
                                        <p class="text text-danger">شماره تماس ارسال کننده :‌ {{$msg->sender_phone}}</p>
                                        <p class="text text-danger">زمان ارسال :‌ {{$msg->created_at}}</p>
                                        @if($msg->sender_blocked == false)
                                            <button class="btn btn-danger" id="{{$msg->sender_id}}" onclick="block_user(event)">مسدود کردن حساب کاربر</button>
                                        @else
                                            <button class="btn btn-success" id="{{$msg->sender_id}}" onclick="unblock_user(event)">خارج کردن از بلاک</button>
                                        @endif
                                        <p class="text text-right">{{$msg->text}}</p>
                                        
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
    
    function block_user(event)
    {
        event.preventDefault();
        var e = event.currentTarget;

        var user_id = $(e).attr('id');

        $.ajax({
            url:"{{route('admin_panel_block_operator')}}",
            data:{
                user_id:user_id,
                block:1
            },
            type:"POST",
            datatype:'json'
        })
        .done(function(json){
            alert(json.msg); 
            window.location.reload();          
        })
        .fail(function(xhr,status,errorThrown){

        });   
    }

    function unblock_user(event)
    {
        event.preventDefault();
        var e = event.currentTarget;

        var user_id = $(e).attr('id');

        $.ajax({
            url:"{{route('admin_panel_block_operator')}}",
            data:{
                user_id:user_id,
                block:0
            },
            type:"POST",
            datatype:'json'
        })
        .done(function(json){
            alert(json.msg); 
            window.location.reload();          
        })
        .fail(function(xhr,status,errorThrown){

        });   
    }

</script>
 
@endsection
