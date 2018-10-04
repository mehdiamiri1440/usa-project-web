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
      <h1>
       آگهی فروش  <span> {{$sellAd->product_name}} </span>
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <form action="{{route($sellAd->confirmed ? 'admin_panel_sellAd_edit' :'admin_panel_sellAd_confirmation')}}" method="post">
      <div class="row">        
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-striped">
                  <thead></thead>
                  <tbody>
                        <tr>
                            <td class="col-xs-2"><b>نام محصول</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="product_name" class="form-control" value="{{$sellAd->product_name}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>میزان موجودی</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="stock" class="form-control" value="{{$sellAd->stock}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>زمان ثبت آگهی</b></td>
                            <td class="col-xs-10">{{$sellAd->created_at}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>حداقل قیمت سفارش</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="min_sale_price" class="form-control" value="{{$sellAd->min_sale_price}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>حداقل میزان سفارش</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="min_sale_amount" class="form-control" value="{{$sellAd->min_sale_amount}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>توضیحات</b></td>
                             <td class="col-xs-10">
                                <div class="form-group">
                                    <textarea type="text" name="description" class="form-control" rows="4">{{$sellAd->description}}</textarea>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>آدرس</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="address" class="form-control" value="{{$sellAd->address}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>استان</b></td>
                            <td class="col-xs-10">{{$sellAd->province_name}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>شهر</b></td>
                            <td class="col-xs-10">{{$sellAd->city_name}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>دسته بندی</b></td>
                            <td class="col-xs-10">{{$category_name}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>زیر دسته بندی</b></td>
                            <td class="col-xs-10">{{$sellAd->subcategory_name}}</td>
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
                        @foreach($related_media as $media)
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
                        <input type="hidden" name="type" value="accept">
                        <input type="hidden" name="sellAd_id" value="{{$sellAd->id}}">
                        <button type="submit" class="btn btn-success btn-block">{{$sellAd->confirmed ? 'ویرایش/بازگشت':'تایید'}}</button>
                    </div>                 
            </div>  
        </form>
        <br/>
        @if($sellAd->confirmed == 0)
            <div class="row">
                <form action="{{route('admin_panel_sellAd_confirmation')}}" method="post">
                        <div class="col-xs-3 col-xs-offset-1">
                            <input type="hidden" name="type" value="reject">
                            <input type="hidden" name="sellAd_id" value="{{$sellAd->id}}">
                            <button class="btn btn-danger btn-block">رد</button>
                        </div>
                    </form>
            </div>
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
            url:"{{route('delete_sellAd_photo_by_id')}}",
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
</script>
@endsection
