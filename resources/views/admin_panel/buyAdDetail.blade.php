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
    <section class="content-header">
      <h1>
       آگهی خرید  <span> {{$buyAd->name}} </span>
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <form action="{{route($buyAd->confirmed ? 'admin_panel_buyAd_edit' :'admin_panel_buyAd_confirmation')}}" method="post">
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
                                    <input type="text" name="name" class="form-control" value="{{$buyAd->name}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>میزان نیازمندی</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="requirement_amount" class="form-control" value="{{$buyAd->requirement_amount}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>زمان ثبت آگهی</b></td>
                            <td class="col-xs-10">{{$buyAd->created_at}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>قیمت</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="price" class="form-control" value="{{$buyAd->price}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>محل تحویل</b></td>
                             <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="address" class="form-control" value="{{$buyAd->address}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>نوع بسته بندی</b></td>
                             <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="pack_type" class="form-control" value="{{$buyAd->pack_type}}">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>توضیحات</b></td>
                             <td class="col-xs-10">
                                <div class="form-group">
                                    <textarea type="text" name="description" class="form-control" rows="4" >{{$buyAd->description}}</textarea>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td class="col-xs-2">
                                <label for="super_categories" class="">سر دسته بندی</label>
                            </td>
                            <td class="col-xs-10">
                                <div class="md-form">
                                    

                                    <select  onchange="getCategories(this)" class="form-control" id="super_categories">
                                        <option  selected value="{{$super_category_record->id}}">{{$super_category_record->category_name}}</option>
                                    </select>                             
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td class="col-xs-2">
                                <label for="categories" class="">دسته بندی</label>
                            </td>
                            <td class="col-xs-10">
                                <div class="md-form">
                                    
                                    <select  onchange="getSubCategories(this)" class="form-control" id="categories">
                                        <option  selected value="{{$category_record->id}}">{{$category_record->category_name}}</option>
                                    </select>                             
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2">
                                <label for="sub_categories" class="">زیر دسته بندی</label>
                            </td>
                            <td class="col-xs-10">
                                <div class="md-form">
                                    <select  class="form-control" name="category_id" id="sub_categories">
                                        <option  selected value="">{{$buyAd->subcategory_name}}</option>
                                    </select>                             
                                </div>
                            </td>
                            
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
                        <input type="hidden" name="buyAd_id" value="{{$buyAd->id}}">
                        <button type="submit" class="btn btn-success btn-block">{{$buyAd->confirmed ? 'بازگشت/ویرایش' : 'تایید'}}</button>
                    </div>                 
            </div>  
        </form>
        <br/>
        @if($buyAd->confirmed != 1)
            <div class="row">
                <form action="{{route('admin_panel_buyAd_confirmation')}}" method="post">
                        <div class="col-xs-3 col-xs-offset-1">
                            <input type="hidden" name="type" value="reject">
                            <input type="hidden" name="buyAd_id" value="{{$buyAd->id}}">
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
    }

    let superCategories = '';
    let categories = '';

    function getSuperCategories(){
            $.post("/get_category_list",
                {cascade_list:true},
                 function(data, status){
                    superCategories = data.categories;
                    data.categories.map((item)=>{
                        $('#super_categories').append('<option value="' + item.id +'">' + item.category_name + '</option>')
                    })
                    // for(let i = 0; data.categories.length > i ; i++){
                    //     $('#categories').append('<option>category</option>')
                    // }
                },
        );
    }  

    function getCategories(categoryIndex){
            $('#categories').find('option').remove();

            let getItemFromCategory = superCategories.filter((item)=>{
                return categoryIndex.value == item.id;
            })

            // convert obj to array 
            categories = $.map(getItemFromCategory[0].subcategories, function(value, index) {
                return [value];
            });

            categories.map((item)=>{
                $('#categories').append('<option value="' + item.id +'">' + item.category_name + '</option>')
            })
            
    } 

    function getSubCategories(categoryIndex){
            $('#sub_categories').find('option').remove();

            let getItemFromCategory = categories.filter((item)=>{
                return categoryIndex.value == item.id;
            })

            // convert obj to array 
            let subCategories = $.map(getItemFromCategory[0].subcategories, function(value, index) {
                return [value];
            });

            subCategories.map((item)=>{
                $('#sub_categories').append('<option value="' + item.id +'">' + item.category_name + '</option>')
            })
            
    } 


    $(document).ready(function() {

        getSuperCategories();

    });
</script>
@endsection
