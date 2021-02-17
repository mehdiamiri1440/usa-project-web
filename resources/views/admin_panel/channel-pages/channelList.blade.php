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
@section('main_content')
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        لیست مطالب کانال
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">        
          <div class="box">

            <div class="box-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>#</th>
                  <th>نام و نام خانوادگی</th>
                  <th>نوع کاربری</th>
                  <th>استان-شهر</th>
                  <th>تاریخ ثبت نام</th>
                  <th>تلفن</th>
                  <th>نوع عضوبت</th>
                  <th>آی دی</th>
                  <th>بلاک</th>
                </tr>
                </thead>
                <tbody>
                    @foreach($users as $user)
                    <tr>
                        <td>{{$loop->iteration}}</td>
                        <td>{{$user->first_name . ' ' . $user->last_name}}</td>
                        <td>{{$user->is_seller ? "فروشنده" : "خریدار"}}</td>
                        <td>{{$user->province}} | {{$user->city}}</td>                    
                        <td>{{$user->register_date}}</td>
                        <td>{{$user->phone}}</td>
                        @if($user->active_pakage_type == 0)
                          <td>رایگان</td>
                        @elseif($user->active_pakage_type == 1)
                          <td>سه ماهه</td>
                        @elseif($user->active_pakage_type == 2)
                          <td>نوع دو</td>
                        @elseif($user->active_pakage_type == 3)
                          <td>ویژه</td>
                        @endif
                        <td>{{$user->id}}</td>
                        <td>
                            @if($user->is_blocked == false)
                                <button class="btn btn-danger" id="{{$user->id}}" onclick="block_user(event)">بلاک کردن</button>
                            @else
                                <button class="btn btn-success" id="{{$user->id}}" onclick="unblock_user(event)">رفع بلاک</button>
                            @endif
                        </td>
                    </tr>
                    @endforeach
              </table>
              <div align="center">
                {{ $users->appends($_GET)->render("pagination::default")}}
              </div>
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
  $(function () {
    // $('#example1').DataTable()
    $('#example1').DataTable({
      'paging'      : false,
      'lengthChange': true,
      'searching'   : false,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    })
  })
</script>
    <script>
    function push_notification(data)
    {
        if (!window.Notification) {
                alert("Sorry, Notification Not supported in this Browser!");
        } else {
            if (Notification.permission === 'default') {
                  Notification.requestPermission(function(p) {
                        if (p === 'denied')
                              alert('You have denied Notification from Team Abhivyakti');
                        else {
                              notify = new Notification(data.title, {
                                    body: data.msg,
                                    icon: "{{asset('images/logo-Inco-mobile.png')}}",
                              });
                        }
                  });
            } else {
                  notify = new Notification(data.title, {
                        body: data.msg,
                        icon: "{{asset('images/logo-Inco-mobile.png')}}",  
                        // You Can give image Link to change notification Icon.
                  });
            }
      }
    }
    function notif(){
            $.ajax({
                url: "{{route('admin_notify')}}",
                method:'POST',
                success: function(data){
                    if(data.notify){
                         push_notification(data);
                        setTimeout(notif,300000);
                    }
                },
        });
    }
        
    $(document).ready(function() {
      // run the first time; all subsequent calls will take care of themselves
      setTimeout(notif, 5000);
    });
    
</script>

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
