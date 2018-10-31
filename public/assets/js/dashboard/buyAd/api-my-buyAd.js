var vm = new Vue({
    el:'#app',
    data:function(){
        return {
            currentUser:{
                profile:'',
                user_info: '',
            },
            buyAds : '',
        };
    },
    methods:{
        init:function(){
            axios.post('/user/profile_info')
                .then(response => (this.currentUser = response.data));
            axios.post('/get_my_buyAds_with_related_sell_offers')
                .then(response => (this.buyAds = response.data.buyAds));
        },
    },
    mounted(){
      this.init();  
    },
});
