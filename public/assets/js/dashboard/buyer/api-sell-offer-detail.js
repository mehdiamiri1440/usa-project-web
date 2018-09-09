var vm = new Vue({
    el:'#app',
    data:{        
        currentUser:{
            profile:'',
            user_info: '',
        },
        sellOffer : '',
        popUpMsg:'',
    },
    methods:{
        init:function(){
            axios.post('/user/profile_info')
                .then(response => (this.currentUser = response.data));                
        },
        initiateBuy(id){
            var self = this;
            
            axios.post('/accept_sell_offer_by_id',{
                'sell_offer_id' : id,
            })
            .then(function(response){
                if(response.data.status == true){
                    self.popUpMsg = 'جهت تسهیل در ادامه ی فرآیند خرید شما کارشناسان اینکوباک برای هماهنگی های اولیه ی معامله با شما تماس خواهند گرفت.';
                    
                    $('#myModal').modal('show');
                    $('#myModal').on('shown.bs.modal',function(e){
                            $('#close-btn').on('click',function(e){
                                $('#myModal').modal('hide');
                                window.location = '/dashboard/my-buyAds';
                            });
                    });                  
                }
            })
            .catch(function(err){
                self.popUpMsg = 'خطایی رخ داده است.لطفا اتصال به اینترنت خود را بررسی کنید سپس دوباره تلاش کنید.';
                
                $('#myModal').modal('show');
            });
        },
        rejectBuy:function(id){
            var self = this;
            
            axios.post('/reject_sell_offer_by_id',{
                'sell_offer_id' : id,
            })
            .then(function(response){
                if(response.data.status == true){
                    self.popUpMsg = 'شما این پیشنهاد را رد کرده اید.در صورت تغییر تصمیمتان با ما تماس بگیرید.';
                    console.log(self.popUpMsg);
                    $('#myModal').modal('show');
                    $('#myModal').on('shown.bs.modal',function(e){
                            $('#close-btn').on('click',function(e){
                                $('#myModal').modal('hide');
                                window.location = '/dashboard/my-buyAds';
                            });
                    });
                }
            })
            .catch(function(err){
                self.popUpMsg = 'خطایی رخ داده است.لطفا اتصال به اینترنت خود را بررسی کنید سپس دوباره تلاش کنید.';
                
                $('#myModal').modal('show');
            });
        }
    },
    mounted(){
      this.init();  
    },
});
