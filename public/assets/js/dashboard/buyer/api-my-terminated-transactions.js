var vm = new Vue({
    el:'#app',
    data:{
        transactions:'',
        isLoading:true,
    },
    methods:{
        init:function(){
            var self = this;
            
            axios.post('/get_terminated_transactions')
            .then(function(response){
                self.transactions = response.data.transactions; 
                self.isLoading = false;
            })
            .catch(function(err){
                if(err.response.status == 404){
                    window.location.href = '/404';
                }
            });
        },
    },
    mounted:function(){
        this.init();
    }
});