<?php $__env->startSection('header_links'); ?>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>جدول ها | کنترل پنل</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.7 -->
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
    
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css">
  

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
</head>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('main_content'); ?>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
       جزییات پروفایل  <span> <?php echo e($user_info['first_name'].' '.$user_info['last_name']); ?> </span>
      </h1>
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
                            <td class="col-xs-10"><?php echo e($user_info['first_name'].' '.$user_info['last_name']); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b> شماره تلفن</b></td>
                            <td class="col-xs-10"><?php echo e($user_info['phone']); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>لینک پروفایل</b></td>
                            <td class="col-xs-10"><a href="<?php echo e("/profile/".$user_info['user_name']); ?>" target="_blank">مشاهده ی پروفایل</a></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>جنسیت</b></td>
                            <td class="col-xs-10"><?php echo e($user_info['sex']); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>نوع کاربری</b></td>
                            <td class="col-xs-10"><?php echo e($user_info['is_buyer'] ? 'خریدار' : 'فروشنده'); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>استان</b></td>
                            <td class="col-xs-10"><?php echo e($user_info['province']); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>شهر</b></td>
                            <td class="col-xs-10"><?php echo e($user_info['city']); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>زمان ثبت نام</b></td>
                            <td class="col-xs-10"><?php echo e($user_info['register_date']); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>حوزه ی فعالیت</b></td>
                            <td class="col-xs-10"><?php echo e($profile->activity_domain); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>فعالیت مرتبط</b></td>
                            <td class="col-xs-10"><?php echo e($profile->related_activity_history); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>تعداد نیرو</b></td>
                            <td class="col-xs-10"><?php echo e($profile->human_resource_count); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>شماره تماس عمومی</b></td>
                            <td class="col-xs-10"><?php echo e($profile->public_phone); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>آدرس</b></td>
                            <td class="col-xs-10"><?php echo e($profile->address); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>نام شرکت</b></td>
                            <td class="col-xs-10"><?php echo e($profile->company_name); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>کد ثبت شرکت</b></td>
                            <td class="col-xs-10"><?php echo e($profile->company_register_code); ?></td>
                        </tr>
                  </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="row">
            <div class="col-xs-12">
                <div class="well well-lg">
                    <?php echo e($profile->description); ?>

                </div>
            </div>
        </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="row">
                <?php $__currentLoopData = $related_media; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $media): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            
                       <div class="col-md-4">
                            <a href="<?php echo e(asset('storage/'.$media->file_path)); ?>" data-toggle="lightbox" data-gallery="example-gallery" class="col-sm-4">
                                <img src="<?php echo e(asset('storage/'.$media->file_path)); ?>" class="img-responsive">
                            </a>
                            <button class="btn btn-danger" id="<?php echo e($media->id); ?>" onclick="delete_photo(event)">حذف</button>
                        </div>
                                        
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
    </div>
    <hr/>
    <?php if($profile->confirmed == 0): ?>
        <div class="row">
            <form action="<?php echo e(route('admin_panel_profile_confirmation')); ?>" method="post">
                <div class="col-xs-3 col-xs-offset-1">
                    <input type="hidden" name="type" value="accept">
                    <input type="hidden" name="user_id" value="<?php echo e($user_info['id']); ?>">
                    <input type="hidden" name="profile_id" value="<?php echo e($profile->id); ?>">
                    <button class="btn btn-success btn-block">تایید</button>
                </div> 
            </form>
            <form action="<?php echo e(route('admin_panel_profile_confirmation')); ?>" method="post">
                <div class="col-xs-3">
                    <input type="hidden" name="type" value="reject">
                    <input type="hidden" name="user_id" value="<?php echo e($user_info['id']); ?>">
                    <input type="hidden" name="profile_id" value="<?php echo e($profile->id); ?>">
                    <button class="btn btn-danger btn-block">رد</button>
                </div> 
            </form>    
        </div>
    <?php else: ?>
        <div class="row">
            <div class="col-md-3 col-md-offset-1 col-xs-12">
                <a href="javascript:history.back()">
                     <button class="btn btn-primary btn-block">بازگشت</button>
                </a>
            </div>
        </div>
    <?php endif; ?>
    <br>
  </div>
  <!-- /.content-wrapper -->

  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
 <?php $__env->stopSection(); ?>

<?php $__env->startSection('script_tags'); ?>
<!-- ./wrapper -->
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

    
<script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.js.map"></script>

    
<script>
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
                    event.preventDefault();
                    $(this).ekkoLightbox();
                });
</script>
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
            url:"<?php echo e(route('delete_profile_related_photo_by_id')); ?>",
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