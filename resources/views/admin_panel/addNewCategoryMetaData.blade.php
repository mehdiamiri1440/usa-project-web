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
       جزییات
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <form action="{{route('admin_panel_add_meta_content_to_a_category')}}" method="post">
      <div class="row">        
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-striped">
                  <thead></thead>
                  <tbody>
                        <tr>
                            <td class="col-xs-2"><b>عنوان (دسته بندی های اصلی داخل تگ و دسته بندی های غیر اصلی فقط متن)</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="header" class="form-control" placeholder="عنوان با تگ در صورت لزوم..">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>متن توضیحات (باید تگ ها داخلش بیاد)</b></td>
                            <td class="col-xs-10">
                            <div class="form-group">
                                <textarea type="text" name="content" class="form-control" rows="40" placeholder="محتوای اصلی با تگ های مربوطه...."></textarea>
                            </div>
                        </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>اسکیما (هر دسته بندی حداکثر یک اسکیما باید داشته باشد2)</b></td>
                             <td class="col-xs-10">
                                <div class="form-group">
                                    <textarea type="text" name="schema" class="form-control" rows="10" placeholder="اسکیما در صورت وجود ...."></textarea>
                                </div>
                            </td>
                        </tr>

                        <tr>
                           

                                <td class="col-xs-12 col-sm-4 ">
                                    <div class="md-form">
                                        <label for="super_categories" class="">انتخاب سر دسته </label>

                                        <select  onchange="setCategories(this)" class="form-control" id="super_categories">
                                        <option  selected value="">انتخاب کنید</option>
                                        </select>                             
                                    </div>
                                </td>

                                <td class="col-xs-12 col-sm-4 ">
                                    <div class="md-form">
                                        <label for="categories" class="">انتخاب دسته بندی</label>

                                        <select onchange="setSubCategories(this)"  class="form-control"  id="categories">
                                            <option  selected value="">انتخاب کنید</option>
                                        </select>                             
                                    </div>
                                </td>
                               
                                
                            
                        </tr>
                        <tr>
                            <td class="col-xs-12 col-sm-4 ">
                                <div class="md-form">
                                    <label for="sub_categories" class="">انتخاب زیر دسته</label>

                                    <select  class="form-control" name="category_id" id="sub_categories">
                                        <option  selected value="">انتخاب کنید</option>
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
            <hr/>
            <div class="row">             
                    <div class="col-xs-3 col-xs-offset-1">
                        <button type="submit" class="btn btn-success btn-block">ثبت</button>
                    </div>                 
            </div>  
        </form>
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
    var superCategories = '';
    var categories = '';
    function getCategories(){
            $.post("/get_category_list",
                {cascade_list:true},
                 function(data, status){
                    superCategories = data.categories;
                    data.categories.map((item,index)=>{
                        $('#super_categories').append('<option value="' + index +'">' + item.category_name + '</option>')
                    })
                },
        );
    }  

    function setCategories(categoryIndex){
            let getItemFromCategory = superCategories.filter((item,index)=>{
                return categoryIndex.value == index
            })
            
            // convert obj to array 
            categories = $.map(getItemFromCategory[0].subcategories, function(value, index) {
                return [value];
            });

            // reset select options
            resetSelect('#categories');

            categories.map((item,index)=>{
                $('#categories').append('<option value="' + index +'">' + item.category_name + '</option>')
            })
            
    }  

    function setSubCategories(categoryIndex){
            let getItemFromCategory = categories.filter((item,index)=>{
                return categoryIndex.value == index
            })

          
            
            // convert obj to array 
            let subCategories = $.map(getItemFromCategory[0].subcategories, function(value, index) {
                return [value];
            });
            
            // reset select options 
            resetSelect('#sub_categories');
            
            subCategories.map((item)=>{
                $('#sub_categories').append('<option value="' + item.id +'">' + item.category_name + '</option>')
            })
            
    }  

    function resetSelect(element){
        $(element).empty();
        $(element).append('<option  selected value="">انتخاب کنید</option>')
    }

    $(document).ready(function() {

    getCategories();

    });
    
</script>
@endsection
