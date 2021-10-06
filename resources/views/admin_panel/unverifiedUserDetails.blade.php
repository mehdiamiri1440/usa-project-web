@extends('admin_panel.layout.master')

@section('header_links')
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>جدول ها | کنترل پنل</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
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
      
    </section>

    <!-- Main content -->
    <section class="content">
        
      <div class="row">        
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-striped">
                  <thead></thead>
                  <tbody>
                        <tr>
                            <td class="col-xs-2"><b>نام و نام خانوادگی</b></td>
                            <td class="col-xs-10">
                                {{$user->first_name . ' ' . $user->last_name}}
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>تاریخ ثبت نام</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <p>{{$user->created_at}}</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>نام شرکت</b></td>
                            <td class="col-xs-10">{{$user->company_name}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>شماره ثبت شرکت</b></td>
                            <td class="col-xs-10">{{$user->company_name}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>شهر و استان</b></td>
                            <td class="col-xs-10">{{$user->province . ' - ' . $user->city}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b> توضیحات</b></td>
                             <td class="col-xs-10">{{$user->description}}</td>
                        </tr>
                  </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="row">
                        @foreach($photos as $media)
                        <div class="col-md-4">
                            <a href="{{asset('storage/'.$media->file_path)}}" target="_blank" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                                <img src="{{asset('storage/'.$media->file_path)}}" class="img-responsive">
                            </a>
                            <button class="btn btn-danger" id="{{$media->id}}" onclick="delete_photo(event)">حذف</button>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row">             
                    <div class="col-xs-3 col-xs-offset-1">
                        <button  class="btn btn-success btn-block" id="{{$user->id}}" onclick="verify_account(event)">{{$user->is_verified ? 'ویرایش/بازگشت':'تایید'}}</button>
                    </div>                 
            </div>  
        <!-- /.col -->
      <!-- /.row -->
    </section>
    <!-- /.content -->
    
    <br>
  </div>
  <!-- /.content-wrapper -->

  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
@endsection
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
<script>
    function delete_photo(event)
    {
        event.preventDefault();
        var e = event.currentTarget;

        var photo_id = $(e).attr('id');

        $.ajax({
            url:"{{route('delete_verification_photo_by_id')}}",
            xhrFields: {
                withCredentials: true
            },
            data:{
                photo_id:photo_id,
            },
            type:"DELETE",
            datatype:'json'
        })
        .done(function(json){
            if(json.status == true)
            {
                $(e).parent().hide();            
            }
            alert(json.msg);           
        })
        .fail(function(xhr,status,errorThrown){

        });   
    }

    function verify_account(event)
    {
        event.preventDefault();
        let e = event.currentTarget;

        let user_id = $(e).attr('id');

        $.ajax({
            url:"{{route('verify_user_account_by_id')}}",
            data:{
                user_id:user_id,
            },
            type:"POST",
            datatype:'json'
        })
        .done(function(json){
            alert('کاربر تایید شد');          
        })
        .fail(function(xhr,status,errorThrown){
            alert('خطایی رخ داده است. دوباره تلاش کنید.')
        });   
    }
</script>
@endsection
