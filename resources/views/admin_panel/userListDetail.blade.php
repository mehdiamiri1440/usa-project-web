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
          <span>{{$user->first_name . ' ' . $user->last_name}}</span>(<a href="{{'/profile/'.$user->user_name}}" target="_blank">مشاهده پروفایل</a>)
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
            <form action="{{route('admin_panel_edit_user_info')}}" method="post">
                <div class="col-xs-3 col-xs-offset-1 form-group">
                    <label for="first_name">نام</label>
                    <input type="text" name="first_name" placeholder='نام...'  value="{{$user->first_name}}" class="form-control"/>
                </div>
                <div class="col-xs-3 col-xs-offset-1 form-group">
                    <label for="last_name">نام خانوادگی</label>
                    <input type="text" name="last_name" placeholder='نام خانوادگی...' value="{{$user->last_name}}" class="form-control"/>
                </div>
                <div class="col-xs-3 col-xs-offset-1 form-group">
                    <label for="active_pakage_type">نوع عضویت</label>
                    <select  class="form-control" name="active_pakage_type">
                        @if($user->active_pakage_type == 0)
                          <option  selected value="0">عضویت رایگان</option>
                        @else
                          <option  value="0">عضویت رایگان</option>
                        @endif

                        @if($user->active_pakage_type == 1)
                          <option selected value="1">عضویت سه ماهه</option>
                        @else
                          <option value="1">عضویت سه ماهه</option>
                        @endif

                        @if($user->active_pakage_type == 3)
                          <option selected value="3">عضویت سالانه</option>
                        @else
                          <option  value="3">عضویت سالانه</option>
                        @endif
                    </select>  
                </div>
                
                <div class="col-xs-3 col-xs-offset-1 form-group">
                    <label for="extra_product_capacity">ظرفیت ثبت محصول</label>
                    <input type="number" name="extra_product_capacity"  value="{{$user->extra_product_capacity}}" class="form-control"/>
                </div>


                <div class="col-xs-3 col-xs-offset-1 form-group">
                    <label for="extra_buyAd_reply_capacity">ظرفیت پاسخگویی به درخواست ها</label>
                    <input type="number" name="extra_buyAd_reply_capacity"  value="{{$user->extra_buyAd_reply_capacity}}" class="form-control"/>
                </div>


                <div class="col-xs-3 col-xs-offset-1 form-group">
                    <label for="wallet_balance">شارژ کیف پول</label>
                    <input type="number" name="wallet_balance"  value="{{$user->wallet_balance}}" class="form-control"/>
                </div>

                <div class="col-xs-3 col-xs-offset-1 form-group">
                    <label><input type="checkbox" name="is_verified" value="{{$user->is_verified}}" id="is-verified"   
                                                @if($user->is_verified == 1)
                                                    checked 
                                                @endif 
                                            > تایید احراز هویت </label>
                </div>
               
                <input type="hidden" name="user_id" value="{{$user->id}}">
                <div class="col-xs-2 col-xs-offset-9" dir="ltr">
                    <button type="submit" class="btn btn-danger btn-block">ویرایش اطلاعات</button>
                </div>
            </form>
        </div>
        <br/>
        <div class="row">
            <form action="{{route('admin_panel_register_note_for_user')}}" method="post">
                <div class="col-xs-10 col-xs-offset-1 form-group">
                    <label for="comment">نت برای این کاربر:</label>
                    <textarea rows="7" name="note" class="form-control"></textarea>
                </div>
                <input type="hidden" name="user_id" value="{{$user->id}}">
                <div class="col-xs-2 col-xs-offset-9" dir="ltr">
                    <button type="submit" class="btn btn-success btn-block">ثبت</button>
                </div>
            </form>
        </div>
        <br/>
        <div class="row">
            @foreach($notes as $note)
                <div class="col-xs-10 col-xs-offset-1">
                    <p class='text-right'>تاریخ : <span style="background-color:orange">{{$note->date}}</span></p>
                    <div class="well well-lg" style="background-color:white">
                        {{$note->note}}
                    </div>
                </div>
            @endforeach
        </div>
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
    function push_notification(data)
    {
        if (!window.Notification){
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
      $(document).on('click','#is-verified:checked',function(e){
          $('#is-verified').attr('value',1);
      });

      setTimeout(notif, 5000);
    });
    
</script>
@endsection
