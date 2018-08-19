var app = new Vue({
    el: '#app',
    data: {
        currentStep: 1,
        pageStep:1,
        transactionId:'',
        popUpMsg:'',
        transactionInfo:'',
        msg:'',
        step1:{
             
        },
        step2:{
            
        },
        step3:{
            
        },
        step4:{
            
        },
    },
    methods: {        
        init:function(){
            var self = this;
            this.transactionId = transaction_id;
            
            axios.post('/dashboard/get_transaction_info',{
                transaction_id: transaction_id,
            })
            .then(function(response){
                self.currentStep = response.data.step;
                self.transactionInfo = response.data.transaction_info; 
                self.msg = response.data.msg;
            })
            .catch(function(err){
                if(err.response.status == 404){
                    window.location.href = '/404';
                }
            });
        },
        confirmContract:function(){
            var self = this;
            
            axios.post('/action',{
                transaction_id : self.transactionId,
                action_id : 3,
            })
            .then(function(response){
                self.init();
            });  
        },
        payPrepayment:function(){
            var self = this;
            
            axios.post('/action',{
                transaction_id : self.transactionId,
                action_id : 5,
            })
            .then(function(response){
                window.location.href = '/payment';
            });
        },
        finalPayment:function(){
            var self = this;
            
            axios.post('/action',{
                transaction_id : self.transactionId,
                action_id : 7,
            })
            .then(function(response){
                window.location.href = '/payment';
            });
        },
        goToStep: function(step){
            this.currentStep = step;
        },
        goToNextPage: function() {
           if (this.pageStep < 3){
               this.pageStep++;
           }
        },
        goToPrePage: function() {
            if (this.pageStep < 1){
                this.pageStep = 1;
            }else if (this.pageStep > 1){
                this.pageStep--;
            }
        }
    },
    mounted:function(){
        this.init();
    }
});