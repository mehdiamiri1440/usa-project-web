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
        <div class="row">        
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-striped">
                  <thead>
                    <h4>فروشنده : {{$seller_user_info->first_name. ' ' . $seller_user_info->last_name}} &nbsp; <span class="text-danger">{{$seller_user_info->phone}}</span></h4>
                  </thead>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <div class="row">        
          <div class="box">
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered table-striped">
                  <thead>
                    <h4>خریدار : {{$buyer_user_info->first_name. ' ' . $buyer_user_info->last_name}} &nbsp; <span class="text-danger">{{$buyer_user_info->phone}}</span></h4>
                  </thead>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        
        @if($transaction->transaction_status == '0000000000000011' || $transaction->transaction_status == '0000000000000111')
            <h3>فاکتور پیش پرداخت</h3>
            <form>
                 <div class="row">
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="product-name">نام کامل محصول</label>
                            <input class="form-control" type="text" id="product-name">
                        </div> 
                     </div>
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="product-quantity">مقدار محصول به کیلوگرم</label>
                            <input class="form-control" type="text" id="product-quantity" placeholder="به کیلوگرم">
                        </div>
                     </div>
                </div>
                <div class="row">
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="unit-price">قیمت واحد هر کیلو</label>
                            <input class="form-control" type="text" id="unit-price" placeholder="به ریال">
                        </div> 
                     </div>
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="inpection-price">هزینه ی بازرسی</label>
                            <input class="form-control" type="text" id="inspection-price" placeholder="به ریال">
                        </div>
                     </div>
                </div>
                <div class="row">
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="price-to-pay">مقدار پرداخت در این فاکتور</label>
                            <input class="form-control" type="text" id="price-to-pay" placeholder="به ریال">
                        </div> 
                     </div>
                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <button type="button" class="btn btn-primary" onClick="submitFactorForm(3)">صدور فاکتور</button>
                    </div>
                </div>
            </form>
        
        @elseif($transaction->transaction_status == '0000000000011111')
            <h3>اطلاعات فاکتور پیش پرداخت</h3>
                <table class="table table-bordered table-striped">
                  <tbody>
                        <tr>
                            <td class="col-xs-2"><b>نام محصول</b></td>
                            <td class="col-xs-10">
                                {{$prepayment_factor->product_name}}
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>قیمت واحد</b></td>
                            <td class="col-xs-10">
                                {{$prepayment_factor->unit_price}}
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>مقدار محصول</b></td>
                            <td class="col-xs-10">{{$prepayment_factor->quantity}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>هزینه بازرسی</b></td>
                            <td class="col-xs-10">{{$prepayment_factor->inspection_price}}</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>مبلغ پرداخت شده</b></td>
                             <td class="col-xs-10">
                                {{$prepayment_factor->amount_to_pay}}
                            </td>
                      </tr>
                  </tbody>
              </table>
            <h3>فاکتور تسویه</h3>
            <form>
                 <div class="row">
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="product-name">نام کامل محصول</label>
                            <input class="form-control" type="text" id="product-name">
                        </div> 
                     </div>
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="product-quantity">مقدار محصول به کیلوگرم</label>
                            <input class="form-control" type="text" id="product-quantity" placeholder="به کیلوگرم">
                        </div>
                     </div>
                </div>
                <div class="row">
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="unit-price">قیمت واحد هر کیلو</label>
                            <input class="form-control" type="text" id="unit-price" placeholder="به ریال">
                        </div> 
                     </div>
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="inpection-price">هزینه ی بازرسی</label>
                            <input class="form-control" type="text" id="inspection-price" placeholder="به ریال">
                        </div>
                     </div>
                </div>
                <div class="row">
                     <div class="col-xs-12 col-md-6">
                        <div class="form-group">
                            <label for="price-to-pay">مقدار پرداخت در این فاکتور</label>
                            <input class="form-control" type="text" id="price-to-pay" placeholder="به ریال">
                        </div> 
                     </div>
                </div>
                <div class="row">
                    <div class="col-xs-4">
                        <button type="button" class="btn btn-primary" onClick="submitFactorForm(5)">صدور فاکتور</button>
                    </div>
                </div>
            </form>
        @elseif($transaction->transaction_status == '0000000001111111')
        <div class="row">
            <div class="col-xs-4">
                <button type="button" class="btn btn-primary" onClick="submitTransactionTerminationSignal()">ثبت پایان تراکنش</button>
            </div>        
        </div> 
        @elseif($transaction->transaction_status == '0000000011111111')
            <table class="table table-bordered table-striped">
                  <tbody>
                        <tr>
                            <td class="col-xs-2"><b>نام کامل تامین کننده</b></td>
                            <td class="col-xs-10">
                                {{$sell_offer_user_info->first_name . ' ' . $sell_offer_user_info->last_name}}
                            </td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>شماره تماس</b></td>
                            <td class="col-xs-10">
                                {{$sell_offer_user_info->phone}}
                            </td>
                        </tr>                      
                        <tr>
                            <td class="col-xs-2"><b>شماره تراکنش</b></td>
                            <td class="col-xs-10">
                                {{$transaction->id + 100000}}
                            </td>
                        </tr>
                        <tr class="text-danger">
                            <td class="col-xs-2"><b>مقدار طلب</b></td>
                            <td class="col-xs-10">{{(1 - $transaction->commission_persentage * 0.01) * $payment_factor->quantity * $payment_factor->unit_price}} تومان</td>
                        </tr>
                        <tr>
                            <td class="col-xs-2"><b>شماره شبا</b></td>
                            <td class="col-xs-10">
                                {{$sell_offer_user_profile_info->shaba_code}}
                            </td>
                        </tr>
                  </tbody>
              </table>
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
    
    function submitFactorForm(actionId)
    { 
        var transactionId = {{$transaction->id + 100000}};
    
        if(actionId == 3){
            var factorType = 'prepayment';
        }
        else if(actionId == 5){
            var factorType = 'payment';
        }
        else{
            alert('something is wrong!');
            return null;
        }
    
        
        var data = {
            action_id : actionId,
            transaction_id : transactionId,
//            expiration_date:'2018-09-09',
            //factor data
            product_name:$('#product-name').val(),
            quantity: toLatinNumbers($('#product-quantity').val()),
            unit_price: toLatinNumbers($('#unit-price').val()),
            inspection_price: toLatinNumbers($('#inspection-price').val()),
            amount_to_pay: toLatinNumbers($('#price-to-pay').val()),
            type: factorType,
        };

        $.ajax({
            url:"{{route('instant_action_controller')}}",
            data:data,
            type: 'POST',
            dataType: 'json',
        })
        .done(function(json){
            alert('submited!');
            if(actionId == 3){
                window.location.href = "{{route('admin_panel_waiting_for_prepayment_instant_factor_issuance_list')}}";
            }
            else if(actionId == 5){
               window.location.href = "{{route('admin_panel_waiting_for_payment_instant_factor_issuance_list')}}";
            }

        })
        .fail(function(xhr,status,errorThrown){
            //
        });
    
    }
    
    function submitTransactionTerminationSignal()
    {
        var TransactionId = {{$transaction->id + 100000}};
    
        $.ajax({
            url:"{{route('instant_action_controller')}}",
            data:{
                action_id: 7 ,
                transaction_id: TransactionId,
            },
            type:'POST',
            dataType:'json',
        })
        .done(function(json){
            alert('submited!');
            
            window.location.href = "{{route('admin_panel_waiting_for_termination_instant_transaction_list')}}" ;
        })
        .fail(function(xhr,status,errorThrown){
           // 
        });
    }
</script>
@endsection
