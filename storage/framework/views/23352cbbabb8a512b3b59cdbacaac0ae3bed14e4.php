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
          بررسی آمار سایت
      </h1>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">
            <div class="col-xs-12">
                <div class="panel panel-default">
                      <!-- Default panel contents -->
                      <div class="panel-heading">آمار ها در ماه اخیر</div>

                      <!-- Table -->
                      <table class="table">
                            <tr>
                                <th>شاخص</th>
                                <th>تعداد</th>
                            </tr>
                            <tr>
                                <td>تعداد تراکنش ها</td>
                                <td><?php echo e($transactions_count); ?></td>
                            </tr>
                            <tr>
                                <td>تعداد درخواست های خرید</td>
                                <td><?php echo e($buyAds_count); ?></td>
                            </tr>
                            <tr>
                                <td>تعداد محصولات</td>
                                <td><?php echo e($products_count); ?></td>
                            </tr>
                            <tr>
                                <td>تعداد پیشنهادات فروش</td>
                                <td><?php echo e($sell_offers_count); ?></td>
                            </tr>
                            <tr>
                                <td>تعداد ثبت نام ها</td>
                                <td><?php echo e($new_users_count); ?></td>
                            </tr>
                            <tr>
                                <td>تعداد کاربرانی که پروفایل آپدیت کرده اند</td>
                                <td><?php echo e($new_profiles_count); ?></td>
                            </tr>
                      </table>
                </div>
            </div>
        </div>
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
                                    icon: "<?php echo e(asset('images/logo-Inco-mobile.png')); ?>",
                              });
                        }
                  });
            } else {
                  notify = new Notification(data.title, {
                        body: data.msg,
                        icon: "<?php echo e(asset('images/logo-Inco-mobile.png')); ?>",  
                        // You Can give image Link to change notification Icon.
                  });
            }
      }
    }
    function notif(){
            $.ajax({
                url: "<?php echo e(route('admin_notify')); ?>",
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
    
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin_panel.layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>