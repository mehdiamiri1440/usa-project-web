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
   

    <!-- Main content -->
    <section class="content">
        <h3>کامنت کاربر</h3>
        <div class="row">        
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-striped">
                  <thead>
                    <h4>کامنت</span></h4>
                  </thead>
                  <tbody>
                        <tr>
                            <td class="col-xs-2"><b>نویسنده کامنت</b></td>
                            <td class="col-xs-10"><?php echo e($comment->commenter_f_name . ' ' . $comment->commenter_l_name); ?> <a href="<?php echo e('/profile/'.$comment->commenter_user_name); ?>" target="_blank">مشاهده پروفایل</a></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>کامنت گیرنده</b></td>
                            <td class="col-xs-10"><?php echo e($comment->f_name . ' ' . $comment->l_name); ?> <a href="<?php echo e('/profile/'.$comment->user_name); ?>" target="_blank">مشاهده پروفایل</a></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>تاریخ ثبت</b></td>
                            <td class="col-xs-10"><?php echo e($comment->created_at); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>امنیاز داده شده :</b></td>
                            <td class="col-xs-10"><?php echo e($comment->rating_score); ?></td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>توضیحات</b></td>
                            <td class="col-xs-10"><?php echo e($comment->text); ?></td>
                        </tr>
                  </tbody>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        
                <div class="row">                
                    <div class="col-xs-3 col-xs-offset-1">
                        <button type="button" class="btn btn-success btn-block" id="<?php echo e($comment->id); ?>" onclick="confirmComment(event)">تایید</button>
                    </div>                 
                </div> 
            <!-- <br/> -->
           
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
    
    function confirmComment(event)
    {
        event.preventDefault();
        var e = event.currentTarget;
        
        let commentId = $(e).attr('id');
        
        $.ajax({
            url:"<?php echo e(route('admin_panel_confirm_user_comment_by_id')); ?>",
            data:{
                comment_id : commentId,
            },
            type:'POST',
            datatype:'json'
        })
        .done(function(json){
            if(json.status == true){
                window.location = '<?php echo e(route('load_users_unconfirmed_comments')); ?>';
            }
        })
        .fail(function(xhr,status,errorThrown){
            
        });
    }
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin_panel.layout.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>