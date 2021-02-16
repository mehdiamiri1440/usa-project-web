@extends('admin_panel.layout.master')

@section('header_links')
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>ثبت در کانال</title>
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
  
  {{-- custom styles --}}
  <link rel="stylesheet" href="{{asset('admin-panel/dist/css/custom.css')}}">

  <link  rel="stylesheet" href="{{asset('assets/css/kamadatepicker.min.css')}}">

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
        ارسال در کانال
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

                <!--Grid column-->
                <div class="col-xs-12 col-md-8 col-md-offset-2">
                    <form id="contact-form" name="contact-form" action="" method="POST">
        
                     
        
                        <!--Grid row-->
                        <div class="row">
        
                            <!--Grid column-->
                            <div class="col-md-12">
        
                                <div class="md-form">
                                    <label for="title">عنوان</label>
                                    <input type="title" class="form-control" name="title" > 
                                </div>
        
                            </div>
                        </div>
        
                        <!--Grid row-->
                        <div class="row">
        
                            <!--Grid column-->
                            <div class="col-md-12">
        
                                <div class="md-form">
                                    <label for="text">متن ارسالی در کانال</label>
                                    <textarea type="text" id="text" name="text" rows="4" class="form-control md-textarea"></textarea>
                                </div>
        
                            </div>
                        </div>
                        <!--Grid row-->
        
                        <!--Grid row-->
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form">
                                    <label for="media" class="">تصویر</label>

                                    <input type="file" id="media" name="media" >
                                    <hr />

                                </div>
                            </div>
                        </div>
                        <!--Grid row-->
        
                        <!--Grid row-->
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="is_for_buyer" class="">برای خریداران</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                          <input type="radio" name="is_for_buyer" value="1"> بلی
                                        </label>
                                        <label class="btn btn-default">
                                          <input type="radio" name="is_for_buyer" value="0" checked=""> خیر
                                        </label>
                                       
                                    </div>        
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="is_for_seller" class="">برای فروشندگان</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                            <input type="radio" name="is_for_seller" value="1"> بلی
                                          </label>
                                          <label class="btn btn-default">
                                            <input type="radio" name="is_for_seller" value="0" checked=""> خیر
                                          </label>
                                       
                                    </div>     
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="is_for_verified" class="">برای احراز هویت شده ها</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                            <input type="radio" name="is_for_verified" value="1"> بلی
                                          </label>
                                          <label class="btn btn-default">
                                            <input type="radio" name="is_for_verified" value="0" checked=""> خیر
                                          </label>
                                       
                                    </div>                                
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="active_package_type" class="">نوع پکیج فعال</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                          <input type="radio" name="active_package_type" value="0"> رایگان
                                        </label>
                                        <label class="btn btn-default">
                                          <input type="radio" name="active_package_type" value="1" checked=""> ماهانه
                                        </label>
                                        <label class="btn btn-default ">
                                            <input type="radio" name="active_package_type" value="3"> سالانه
                                          </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="categories" class="">انتخاب دسته بندی</label>

                                    <select class="form-control" id="categories">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                    </select>                             
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="sub_categories" class="">انتخاب زیر دسته</label>

                                    <select class="form-control" class="sub_categories">
                                        <option value="1">1</option>
                                        <option value="1">2</option>
                                    </select>                             
                                </div>
                            </div>
                            
                        </div>

                        <div class="row">

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="register_date_from" class="">تاریخ ثبت نام از</label>

                                    <input class="form-control" type="text" name="register_date_from" id="register_date_from" >
                           
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="register_date_until" class="">تاریخ ثبت نام تا</label>

                                    <input class="form-control" type="text" name="register_date_until" id="register_date_until">
                          
                                </div>
                            </div>
                            
                        </div>

                        <div class="row">

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="last_login_date_from" class="">لاگین شده از</label>

                                    <input class="form-control" type="text" name="last_login_date_from" id="last_login_date_from">
                           
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="last_login_date_until" class="">لاگین شده تا</label>

                                    <input class="form-control" type="text" name="last_login_date_until" id="last_login_date_until" value="{{session('start_date')}}">
                          
                                </div>
                            </div>
                            
                        </div>

                        <div class="row">
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="last_login_client" class="">آخرین دستگاه</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                          <input type="radio" name="last_login_client" value="web"> web
                                        </label>
                                        <label class="btn btn-default">
                                          <input type="radio" name="last_login_client" value="app" checked=""> app
                                        </label>
                                       
                                    </div>        
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="is_shareable" class=""> قابلیت اشتراک بودن</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                            <input type="radio" name="is_shareable" checked value="1"> بلی
                                          </label>
                                          <label class="btn btn-default">
                                            <input type="radio" name="is_shareable" value="0" > خیر
                                          </label>
                                       
                                    </div>     
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="is_shareable" class=""> آیدی کاربر</label>
                                    <input type="number" class="form-control" name="is_shareable" checked value="1"> 
                                </div>
                            </div>
                        </div>

                        <!--Grid row-->
                        
                        <div class="col-xs-12 col-sm-4">
                           <div class="row">
                            <button class="btn btn-success">
                                ثبت در کانال
                            </button>
                           </div>
                        </div>
                    </form>
        
                    <div class="status"></div>
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

<script src="{{asset('assets/js/kamadatepicker.js')}}"></script>

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

    $(document).ready(function() {
      kamaDatepicker('register_date_from', { forceFarsiDigits: true,markHolidays:true,gotoToday:true,markToday:true });
      kamaDatepicker('register_date_until', { forceFarsiDigits: true,markHolidays:true,gotoToday:true,markToday:true });
      kamaDatepicker('last_login_date_from', { forceFarsiDigits: true,markHolidays:true,gotoToday:true,markToday:true });
      kamaDatepicker('last_login_date_until', { forceFarsiDigits: true,markHolidays:true,gotoToday:true,markToday:true });
        // run the first time; all subsequent calls will take care of themselves
       setTimeout(notif, 5000);
    });
    
</script>
@endsection
