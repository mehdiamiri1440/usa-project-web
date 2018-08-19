var vm = new Vue({
    el:'#app',
    data:{
        currentUser:{
            profile:'',
            user_info:'',
        },
        buyAds:'',
        popUpMsg:'',
        loading:false,
        
    },
    methods:{
        init:function(){
            this.loading = true;
            
            var self = this;
            
            axios.post('/get_related_buyAds_list_to_the_seller')
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



