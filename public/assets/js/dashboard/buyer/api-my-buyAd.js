var vm = new Vue({
    el:'#app',
    data:function(){
        return {
            currentUser:{
                profile:'',
                user_info: '',
            },
            buyAds : '',
            popUpMsg:'',
            loading:false,
        };
    },
    methods:{
        init:function(){
            this.loading = true;
            
            var self = this ;
            
            axios.post('/user/profile_info')
                .then(response => (this.currentUser = response.data));
            axios.post('/get_my_buyAds_with_related_sell_offers')
                .then(function(response){
                    self.buyAds = response.data.buyAds;
                
                    self.loading = false;
            });
        },
    },
    mounted(){
      this.init();  
    },
});
