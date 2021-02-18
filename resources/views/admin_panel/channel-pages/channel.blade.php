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
           
            <!-- /.box-header -->
            <div class="box-body">

                <!--Grid column-->
                <div class="col-xs-12 col-md-8 col-md-offset-2">
                    <form id="contact-form" enctype="multipart/form-data" action="{{route('admin_panel_add_channel_content')}}" method="POST">
                        <!--Grid row-->
                        <div class="row">
        
                            <!--Grid column-->
                            <div class="col-md-12">
        
                                <div class="md-form">
                                    <label for="title">عنوان</label>
                                    <input required type="title" class="form-control" name="title" > 
                                </div>
        
                            </div>
                        </div>
        
                        <!--Grid row-->
                        <div class="row">
        
                            <!--Grid column-->
                            <div class="col-md-12">
        
                                <div class="md-form">
                                    <label for="text">متن ارسالی در کانال</label>
                                    <textarea required type="text" id="text" name="text" rows="8" class="form-control md-textarea"></textarea>
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
                                            <input type="radio" name="is_for_buyer"> پیش فرض
                                          </label>
                                         
                                        <label class="btn btn-default ">
                                          <input type="radio" name="is_for_buyer" value="1"> بلی
                                        </label>
                                        <label class="btn btn-default">
                                          <input type="radio" name="is_for_buyer" value="0" > خیر
                                        </label>
                                       
                                       
                                    </div>        
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="is_for_seller" class="">برای فروشندگان</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                            <input type="radio" name="is_for_seller"> پیش فرض
                                          </label>
                                        <label class="btn btn-default ">
                                            <input type="radio" name="is_for_seller" value="1"> بلی
                                          </label>
                                          <label class="btn btn-default">
                                            <input type="radio" name="is_for_seller" value="0" > خیر
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
                                            <input type="radio" name="is_for_verified"> پیش فرض
                                          </label>
                                        <label class="btn btn-default ">
                                            <input type="radio" name="is_for_verified" value="1"> بلی
                                          </label>
                                          <label class="btn btn-default">
                                            <input type="radio" name="is_for_verified" value="0" > خیر
                                          </label>
                                       
                                    </div>                                
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="" class="">نوع پکیج فعال</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                            <input type="radio" name="active_package_type"> پیش فرض
                                          </label>
                                        <label class="btn btn-default ">
                                          <input type="radio" name="active_package_type" value="0"> رایگان
                                        </label>
                                        <label class="btn btn-default">
                                          <input type="radio" name="active_package_type" value="1" > ماهانه
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

                                    <select  onchange="getSubCategories(this)" class="form-control" id="categories">
                                      <option  selected value="">انتخاب کنید</option>
                                    </select>                             
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="sub_categories" class="">انتخاب زیر دسته</label>

                                    <select  class="form-control" name="sub_category_id" id="sub_categories">
                                        <option  selected value="">انتخاب کنید</option>
                                    </select>                             
                                </div>
                            </div>
                            
                        </div> 

                        <div class="row">

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="register_date_from" class="">تاریخ ثبت نام از</label>

                                    <input class="form-control" type="date" name="register_date_from" id="register_date_from" >
                           
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="register_date_until" class="">تاریخ ثبت نام تا</label>

                                    <input class="form-control" type="date" name="register_date_until" id="register_date_until">
                          
                                </div>
                            </div>
                            
                        </div>

                        <div class="row">

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="last_login_date_from" class="">لاگین شده از</label>

                                    <input class="form-control" type="date" name="last_login_date_from" id="last_login_date_from">
                           
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="last_login_date_until" class="">لاگین شده تا</label>

                                    <input class="form-control" type="date" name="last_login_date_until" id="last_login_date_until" >
                          
                                </div>
                            </div>
                            
                        </div>

                        <div class="row">
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="last_login_client" class="">آخرین دستگاه</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                            <input type="radio" name="last_login_client"> پیش فرض
                                          </label>
                                        <label class="btn btn-default">
                                          <input type="radio" name="last_login_client" value="web"> web
                                        </label>
                                        <label class="btn btn-default">
                                          <input type="radio" name="last_login_client" value="app" > app
                                        </label>
                                       
                                    </div>        
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="is_sharable" class=""> قابلیت اشتراک بودن</label>

                                    <div class="btn-group btn-toggle" data-toggle="buttons">
                                        <label class="btn btn-default active">
                                            <input type="radio" name="is_sharable" checked value="1"> بلی
                                          </label>
                                          <label class="btn btn-default">
                                            <input type="radio" name="is_sharable" value="0" > خیر
                                          </label>
                                       
                                    </div>     
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="myuser_id" class=""> آیدی کاربر</label>
                                    <input type="number" class="form-control" id="myuser_id" name="myuser_id" placeholder="پیش فرض"> 
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 ">
                                <div class="md-form">
                                    <label for="min_contacts_count" class="">حداقل تعداد مخاطبین</label>
                                    <input type="number" class="form-control" id="min_contacts_count" name="min_contacts_count" placeholder="پیش فرض"> 
                                </div>
                            </div>
                        </div>

                        <!--Grid row-->
                        
                        <div class="col-xs-12 col-sm-4">
                           <div class="row">
                            <button type="submit" class="btn btn-success">
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
    var categories = '';

    function getCategories(){
            $.post("/get_category_list",
                {cascade_list:true},
                 function(data, status){
                    categories = data.categories;
                    data.categories.map((item,index)=>{
                        $('#categories').append('<option value="' + index +'">' + item.category_name + '</option>')
                    })
                    // for(let i = 0; data.categories.length > i ; i++){
                    //     $('#categories').append('<option>category</option>')
                    // }
                },
        );
    }  

    function getSubCategories(categoryIndex){
            let getItemFromCategory = categories.filter((item,index)=>{
                return categoryIndex.value == index
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

    getCategories();
    console.log(categories)

    });
    
</script>
@endsection
