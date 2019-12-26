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
        پیام ها
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
            <form method="post" action="<?php echo e(route('admin_panel_load_user_messages')); ?>">
                     <div class="row">
                        <div class="col-xs-4">
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <label>شماره تلفن به انگلیسی</label>
                                </div>
                                <div class="col-xs-12">
                                    <input class="form-control" type="text" name="phone" placeholder="شماره تلفن">
                                    <?php if($errors->has('phone')): ?>
                                        <p class="text text-red"><?php echo e($errors->phone); ?></p>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-3">
                            <br/>
                            <button type="submit" class="btn btn-primary">مشاهده پیام ها</button>
                        </div>    
                    </div>
                    <br/>
                </form> 
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

             <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                 <?php if(isset($messages)): ?>
                    <p class="text">مخاطبین <?php echo e($user_record->first_name.' '.$user_record->last_name); ?> <?php echo e($user_record->is_seller ? 'فروشنده' : 'خریدار'); ?></p>  
                    
                    <?php $__currentLoopData = $messages; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $msg): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="<?php echo e($msg['contact_info']->contact_id); ?>">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="<?php echo e('#collapse' . $msg['contact_info']->contact_id); ?>" aria-expanded="false" aria-controls="<?php echo e('collapse' . $msg['contact_info']->contact_id); ?>">
                                    <?php if($msg['contact_info']->profile_photo): ?>
                                        <img src="<?php echo e(asset('storage/' . $msg['contact_info']->profile_photo)); ?>">
                                    <?php endif; ?>
                                    <?php echo e($msg['contact_info']->first_name . ' ' . $msg['contact_info']->last_name); ?>

                                </a>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <a href="<?php echo e('/profile/' . $msg['contact_info']->user_name); ?>" target="_blank"> <small>&nbsp مشاهده پروفایل &nbsp</small> </a>
                                    </div>
                                </div>
                            </h4>
                            </div>
                            <div id="<?php echo e('collapse' . $msg['contact_info']->contact_id); ?>" class="panel-collapse collapse" role="tabpanel" aria-labelledby="<?php echo e($msg['contact_info']->contact_id); ?>">
                            <div class="panel-body">
                                <?php $__currentLoopData = $msg['messages']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $msgItem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <?php if($msgItem->sender_id == $user_record->id): ?>
                                        <p class="text text-right"><?php echo e($msgItem->text); ?></p>
                                        <p class="text text-right text-green"><small><?php echo e($msgItem->created_at); ?> <?php if($msgItem->is_read): ?><span class="fa fa-check text text-red"></span><?php endif; ?></small></p>
                                    <?php else: ?>
                                        <p class="text text-left"><?php echo e($msgItem->text); ?></p>
                                        <p class="text text-left text-green"><small><?php echo e($msgItem->created_at); ?> <?php if($msgItem->is_read): ?><span class="fa fa-check text text-red"></span><?php endif; ?></small></p>
                                    <?php endif; ?>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </div>
                            </div>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php endif; ?>
                </div>
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
  <?php $__env->stopSection(); ?>
<!-- ./wrapper -->

<?php $__env->startSection('script_tags'); ?>
<!-- jQuery 3 -->
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
 
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin_panel.layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>