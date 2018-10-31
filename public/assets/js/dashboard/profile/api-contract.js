var vm = new Vue({
    el:'#app',
    data:{
        pageStep:1,
        errors:'',
        popUpMsg:'',
        submiting:false,
        contractConfirmed:false,
        currentUser:'',
    },
    methods:{
        init:function(){
            var self = this;
            
            axios.post('/user/profile_info')
                .then(function(response){
                    self.currentUser = response.data;
                    self.contractConfirmed = response.data.user_info.contract_confirmed;
            });
        },
        confirmContract:function(){
            var self = this;
            
            if(this.contractConfirmed == false){
                axios.post('/confirm_initial_contract')
                    .then(function(response){
                        if(response.status == 200){
                            self.popUpMsg = 'تایید قرار داد با موفقیت انجام شد.';
            
                            $('#myModal').modal('show');
                        }
                        else if(response.status == 500){
                            alert('failed');
                        }
                });
            }
            else{
                this.popUpMsg = 'شما قبلا این قرار داد را پذیرفته اید.';
            
                $('#myModal').modal('show');
            }
        },
        goToNextPage: function(){
           if (this.pageStep < 10){
               this.pageStep++;
           }
        },
        goToPrePage: function(){
            if (this.pageStep < 1){
                this.pageStep = 1;
            }else if (this.pageStep > 1){
                this.pageStep--;
            }
        },
    },
    mounted(){
        this.init();
    },
});



