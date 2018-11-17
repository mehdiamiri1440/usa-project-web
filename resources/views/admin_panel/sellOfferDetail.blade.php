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
<!--
  <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
-->
</head>

@endsection


@section('main_content')
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
   

    <!-- Main content -->
    <section class="content">
        <h3>درخواست خرید</h3>
        <div class="row">        
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-striped">
                  <thead>
                    <h4>خریدار :  {{$buyAd_user_info->first_name. ' ' . $buyAd_user_info->last_name}} &nbsp; <span class="text-danger">{{$buyAd_user_info->phone}}</span></h4>
                  </thead>
                  <tbody>
                        <tr>
                            <td class="col-xs-2"><b>نام محصول</b></td>
                            <td class="col-xs-10">{{$buyAd->name}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>میزان نیازمندی</b></td>
                            <td class="col-xs-10">{{$buyAd->requirement_amount}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>قیمت</b></td>
                            <td class="col-xs-10">{{$buyAd->price}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>نوع بسته بندی</b></td>
                            <td class="col-xs-10">{{$buyAd->pack_type}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>توضیحات</b></td>
                            <td class="col-xs-10">{{$buyAd->description}}</td>
                        </tr>
                  </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <h3>پیشنهاد فروش</h3>
      <div class="row">        
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-striped">
                  <thead>
                    <h4>فروشنده : {{$sell_offer_user_info->first_name. ' ' . $sell_offer_user_info->last_name}} &nbsp; <span class="text-danger">{{$sell_offer_user_info->phone}}</span></h4>
                  </thead>
                  <tbody>
                        <tr>
                            <td class="col-xs-2"><b>قیمت پیشنهادی</b></td>
                            <td class="col-xs-10">
                                {{$sell_offer->price}}
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>محل تحویل</b></td>
                            <td class="col-xs-10">
                                {{$sell_offer->deliver_at}}
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>تاریخ شروع موجودی</b></td>
                            <td class="col-xs-10">{{$sell_offer->date_from}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>تاریخ پایان موجودی</b></td>
                            <td class="col-xs-10">{{$sell_offer->date_to}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>توضیحات</b></td>
                             <td class="col-xs-10">
                                {{$sell_offer->description}}
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>دسته بندی</b></td>
                            <td class="col-xs-10">{{$buyAd->category_name}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>زیر دسته بندی</b></td>
                            <td class="col-xs-10">{{$buyAd->subcategory_name}}</td>
                        </tr>
                  </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        @if($sell_offer->is_accepted == false)
            <div class="row justify-content-center">
                    <div class="col-md-12">
                        <div class="row">
                            @foreach($sell_offer->photos as $media)
                            <div class="col-md-4">
                                <a href="{{asset('storage/'.$media['file_path'])}}" target="_blank" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                                    <img src="{{asset('storage/'.$media['file_path'])}}" class="img-responsive">
                                </a>
                                <button class="btn btn-danger" id="{{$media['id']}}" onclick="delete_photo(event)">حذف</button>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="row">                
                    <div class="col-xs-3 col-xs-offset-1">
                        <button type="button" class="btn btn-success btn-block" id="{{$sell_offer->id}}" onclick="confirmSellOffer(event)">تایید</button>
                    </div>                 
                </div> 
            <br/>
            @if($sell_offer->confirmed != 1)
                <div class="row">                
                    <div class="col-xs-3 col-xs-offset-1">
                        <a href="javascript:history.back()" class="btn btn-danger btn-block">رد</a>
                    </div>                
                </div>
            @endif
        @endif
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
            url:"",
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
    
    function confirmSellOffer(event)
    {
        event.preventDefault();
        var e = event.currentTarget;
        
        var sellOfferId = $(e).attr('id');
        
        $.ajax({
            url:"{{route('admin_panel_confirm_sell_offer_by_id')}}",
            data:{
                sell_offer_id : sellOfferId,
            },
            type:'POST',
            datatype:'json'
        })
        .done(function(json){
            if(json.status == true){
                window.location = '{{route('admin_panel_sell_offer_list')}}';
            }
        })
        .fail(function(xhr,status,errorThrown){
            
        });
    }
</script>
@endsection
