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
                    window.location = '/dashboard/my-buyAds';
                }
            })
            .catch(function(err){
                self.popUpMsg = 'خطایی رخ داده است.لطفا اتصال به اینترنت خود را بررسی کنید سپس دوباره تلاش کنید.';
                
                $('#myModal').modal('show');
            });
        },
        rejectBuy:function(id){
            axios.post('/reject_sell_offer_by_id',{
                'sell_offer_id' : id,
            })
            .then(function(response){
                if(response.data.status == true){
                    window.location = '/dashboard/my-buyAds';
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
