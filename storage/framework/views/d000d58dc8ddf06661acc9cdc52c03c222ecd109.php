<?php $__env->startSection('header_links'); ?>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>جدول ها | کنترل پنل</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="stylesheet" href="<?php echo e(asset('admin-panel/dist/css/bootstrap-theme.css')); ?>">
  <!-- Bootstrap rtl -->
  <link rel="stylesheet" href="<?php echo e(asset('admin-panel/dist/css/rtl.css')); ?>">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo e(asset('admin-panel/bower_components/font-awesome/css/font-awesome.min.css')); ?>">
  <!-- Ionicons -->
  <link rel="stylesheet" href="<?php echo e(asset('admin-panel/bower_components/Ionicons/css/ionicons.min.css')); ?>">
  <!-- DataTables -->
  <link rel="stylesheet" href="<?php echo e(asset('admin-panel/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css')); ?>">
  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo e(asset('admin-panel/dist/css/AdminLTE.css')); ?>">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="<?php echo e(asset('admin-panel/dist/css/skins/_all-skins.min.css')); ?>">
  

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

<?php $__env->stopSection(); ?>

<?php $__env->startSection('main_content'); ?>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
       آگهی خرید  <span> <?php echo e($buyAd->name); ?> </span>
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <form action="<?php echo e(route($buyAd->confirmed ? 'admin_panel_buyAd_edit' :'admin_panel_buyAd_confirmation')); ?>" method="post">
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
                                    <input type="text" name="name" class="form-control" value="<?php echo e($buyAd->name); ?>">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>میزان نیازمندی</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="requirement_amount" class="form-control" value="<?php echo e($buyAd->requirement_amount); ?>">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>زمان ثبت آگهی</b></td>
                            <td class="col-xs-10"><?php echo e($buyAd->created_at); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>قیمت</b></td>
                            <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="price" class="form-control" value="<?php echo e($buyAd->price); ?>">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>محل تحویل</b></td>
                             <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="address" class="form-control" value="<?php echo e($buyAd->address); ?>">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>نوع بسته بندی</b></td>
                             <td class="col-xs-10">
                                <div class="form-group">
                                    <input type="text" name="pack_type" class="form-control" value="<?php echo e($buyAd->pack_type); ?>">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>توضیحات</b></td>
                             <td class="col-xs-10">
                                <div class="form-group">
                                    <textarea type="text" name="description" class="form-control" rows="4" ><?php echo e($buyAd->description); ?></textarea>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>دسته بندی</b></td>
                            <td class="col-xs-10"><?php echo e($category_name); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>زیر دسته بندی</b></td>
                            <td class="col-xs-10"><?php echo e($buyAd->subcategory_name); ?></td>
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
                        <?php $__currentLoopData = $related_media; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $media): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-md-4">
                            <a href="<?php echo e(asset('storage/'.$media->file_path)); ?>" target="_blank" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                                <img src="<?php echo e(asset('storage/'.$media->file_path)); ?>" class="img-responsive">
                            </a>
                            <button class="btn btn-danger" id="<?php echo e($media->id); ?>" onclick="delete_photo(event)">حذف</button>
                        </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row">                
                    <div class="col-xs-3 col-xs-offset-1">
                        <input type="hidden" name="type" value="accept">
                        <input type="hidden" name="buyAd_id" value="<?php echo e($buyAd->id); ?>">
                        <button type="submit" class="btn btn-success btn-block"><?php echo e($buyAd->confirmed ? 'بازگشت/ویرایش' : 'تایید'); ?></button>
                    </div>                 
            </div>  
        </form>
        <br/>
        <?php if($buyAd->confirmed != 1): ?>
            <div class="row">
                <form action="<?php echo e(route('admin_panel_buyAd_confirmation')); ?>" method="post">
                        <div class="col-xs-3 col-xs-offset-1">
                            <input type="hidden" name="type" value="reject">
                            <input type="hidden" name="buyAd_id" value="<?php echo e($buyAd->id); ?>">
                            <button class="btn btn-danger btn-block">رد</button>
                        </div>
                    </form>
            </div>
        <?php endif; ?>
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
<?php $__env->stopSection(); ?>
<!-- ./wrapper -->
<?php $__env->startSection('script_tags'); ?>
<script src="<?php echo e(asset('admin-panel/bower_components/jquery/dist/jquery.min.js')); ?>"></script>
<!-- Bootstrap 3.3.7 -->
<script src="<?php echo e(asset('admin-panel/bower_components/bootstrap/dist/js/bootstrap.min.js')); ?>"></script>
<!-- DataTables -->
<script src="<?php echo e(asset('admin-panel/bower_components/datatables.net/js/jquery.dataTables.min.js')); ?>"></script>
<script src="<?php echo e(asset('admin-panel/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js')); ?>"></script>
<!-- SlimScroll -->
<script src="<?php echo e(asset('admin-panel/bower_components/jquery-slimscroll/jquery.slimscroll.min.js')); ?>"></script>
<!-- FastClick -->
<script src="<?php echo e(asset('admin-panel/bower_components/fastclick/lib/fastclick.js')); ?>"></script>
<!-- AdminLTE App -->
<script src="<?php echo e(asset('admin-panel/dist/js/adminlte.min.js')); ?>"></script>
<!-- AdminLTE for demo purposes -->
<script src="<?php echo e(asset('admin-panel/dist/js/demo.js')); ?>"></script>

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
            url:"<?php echo e(route('delete_buyAd_photo_by_id')); ?>",
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin_panel.layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>