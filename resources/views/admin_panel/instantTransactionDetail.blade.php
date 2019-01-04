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
    
  <link  rel="stylesheet" href="{{asset('assets/css/kamadatepicker.min.css')}}"
  

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
    
        <form>
            <div class="row">
                 <div class="form-group">
                    <div class="col-xs-12">
                        <label>شماره همراه خریدار</label>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <input class="form-control" type="text" id="buyer-phone" placeholder="09123456789">
                    </div>
                    <div class="col-xs-12">
                        <label>شماره همراه فروشنده</label>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <input class="form-control" type="text" id="seller-phone" placeholder="09123456789">
                    </div>
                </div>                
            </div>
            <div class="row">
                <div class="form-group">
                    <div class="col-xs-12">
                        <label>پایان بارگیری</label>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <input class="form-control" type="text" id="loading-dead-line">
                    </div>
                </div>                
            </div>
            <div class="row">
                <div class="form-group">
                    <div class="col-xs-12">
                        <label>درصد کمسیون</label>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <input class="form-control" type="text" id="commission-percentage" placeholder="از ۰ تا ۱۰۰">
                    </div>
                </div>                
            </div>
            <div class="row">
                <div class="form-group">
                    <div class="col-xs-12">
                        <label>توضیحات ادمین</label>
                    </div>
                    <div class="col-xs-12">
                        <textarea class="form-control" type="text" id="admin-notes" rows="15"></textarea>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="form-group">
                    <div class="col-xs-4">
                        <button type="button" class="btn btn-primary" onClick="submitTransactionInitiateForm()">آغاز فرآیند</button>
                    </div>
                </div>
            </div>
            <br/>
        </form>
       
            
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
<script src="{{asset('assets/js/kamadatepicker.js')}}"></script>
<script>
    $(document).ready(function(){
        kamaDatepicker('loading-dead-line', { forceFarsiDigits: true,markHolidays:true,gotoToday:true,markToday:true });
    });
</script>
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
    function toLatinNumbers(num){
            if(num == null){
                return '';
            }
            var numDic = {
                '۰': '0',
                '۱': '1',
                '۲': '2',
                '۳': '3',
                '۴': '4',
                '۵': '5',
                '۶': '6',
                '۷': '7',
                '۸': '8',
                '۹': '9',
            };

            return num    
                .toString()
                .replace(/[۰-۹]/g,function(w){
                    return numDic[w]; 
            });
    }
    function submitTransactionInitiateForm()
    {   
        var data = {
            seller_phone: toLatinNumbers($('#seller-phone').val()),
            buyer_phone: toLatinNumbers($('#buyer-phone').val()),
            loading_dead_line: $('#loading-dead-line').val(),
            admin_notes: $('#admin-notes').val(),
            commission_percentage: toLatinNumbers($('#commission-percentage').val()),
        };
    
        $.ajax({
            url:"{{route('initiate_instant_transaction')}}",
            data: data,
            type:'POST',
            datatype:'json'
        })
        .done(function(json){
            alert('process started!');
            window.location.href = "{{route('admin_panel_waiting_to_initiate_transactions_list')}}";
        })
        .fail(function(xhr,status,errorThrown){
            
        });
    }
    
    function submitFactorForm(actionId)
    { 
        var transactionId = 10;
    
        if(actionId == 4){
            var factorType = 'prepayment';
        }
        else if(actionId == 6){
            var factorType = 'payment';
        }
        else{
            alert('something is wrong!');
            return null;
        }
    
        var data = {
            action_id : actionId,
            transaction_id : transactionId,
            expiration_date:'2018-09-09',
            //factor data
            product_name:$('#product-name').val(),
            quantity: toLatinNumbers($('#product-quantity').val()),
            unit_price: toLatinNumbers($('#unit-price').val()),
            inspection_price: toLatinNumbers($('#inspection-price').val()),
            amount_to_pay: toLatinNumbers($('#price-to-pay').val()),
            type: factorType,
        };
    
        $.ajax({
            url:"{{route('action_controller')}}",
            data:data,
            type: 'POST',
            dataType: 'json',
        })
        .done(function(json){
            alert('submited!');
            if(actionId == 4){
                window.location.href = "{{route('admin_panel_waiting_for_prepayment_factor_issuance_list')}}";
            }
            else if(actionId == 6){
               window.location.href = "{{route('admin_panel_waiting_for_payment_factor_issuance_list')}}"; 
            }
            
        })
        .fail(function(xhr,status,errorThrown){
            //
        });
    }
    
    function submitTransactionTerminationSignal()
    {
        var TransactionId = 10;
    
        $.ajax({
            url:"{{route('action_controller')}}",
            data:{
                action_id: 8 ,
                transaction_id: TransactionId,
            },
            type:'POST',
            dataType:'json',
        })
        .done(function(json){
            alert('submited!');
            
            window.location.href = "{{route('admin_panel_waiting_for_termination_transaction_list')}}" ;
        })
        .fail(function(xhr,status,errorThrown){
           // 
        });
    }
</script>
@endsection
