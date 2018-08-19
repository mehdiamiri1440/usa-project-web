var vm = new Vue({
    el:'#app',
    data:{
        currentUser:{
            profile:'',
            user_info:'',
        },
        sellOffers:'',
        popUpMsg:'',
        loading:false,            
    },
    methods:{
        init:function(){
            this.loading = true;
            
            var self = this;
            
            axios.post('/get_my_sell_offer_list')
                .then(function(response){
                    self.sellOffers = response.data.sell_offers;
                    self.loading = false;
            });
        },        
    },
    mounted(){
      this.init();  
    },
});



