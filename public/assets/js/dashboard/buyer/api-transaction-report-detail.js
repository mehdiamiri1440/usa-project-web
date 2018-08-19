 var app = new Vue({
    el: '#app',
    data: {
        currentStep: 1,
        pageStep:1,
        transactionId : '',
        popUpMsg:'',
        transactionInfo:'',
    },
    methods:{
        init:function(){
            var self = this;
            
            this.transactionId = transactionId ;
        
            axios.post('/get_terminated_transaction_info',{
                transaction_id : this.transactionId,
            })
            .then(function(response){
                self.transactionInfo = response.data.transaction_info;
            });
        },
        goToNextPage: function(){
           if (this.pageStep < 3){
               this.pageStep++;
           }
        },
        goToPrePage: function(){
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

Vue.component('step1', {
    template: '#step1',
    props: [
        'currentStep',
        'step1'
    ]
});
Vue.component('step1S1', {
    template: '#step1S1'
});

Vue.component('step1S2', {
    template: '#step1S2'
});

Vue.component('step1S3', {
    template: '#step1S3'
});