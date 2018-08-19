var vm = new Vue({
    el:'#app',
    data:{
            currentUser:{
                profile:'',
                user_info:'',
            },
            sellOffer:{
                price:'',
                deliver_at:'',
                valid_date_from:'',
                valid_date_to:'',
                description:'',
                buy_ad_id:'',
            },
            sellOfferFields:[
                'price',
                'deliver_at',
                'description',
            ],
            sellOfferFiles:[],
            errors:[],
            popUpMsg:'',
    },
    methods:{
        init:function(){
            
        },
        submitSellOffer:function(){
            var self = this;
            
            var formData = this.getSellOfferFormFields();
            
            axios.post('/add_sell_offer',formData)
                .then(function(response){
                    if(response.status == 201){
                        window.location.href = '/dashboard/my-sell-offers'
                    } 
                })
                .catch(function(err){
                    self.errors = '';
                    self.errors = err.response.data.errors;
                    
                    if(err.response.data.msg){
                        self.popUpMsg = err.response.data.msg;
                        
                        $('#myModal').modal('show');
                    }
            });
        },
        handleSellOfferFileUpload:function(){
            let uploadedFiles = this.$refs.sellOfferFiles.files ;
            /*
              Adds the uploaded file to the files array
            */
            for( var i = 0; i < uploadedFiles.length; i++ ){
              this.sellOfferFiles.push(uploadedFiles[i] ); 
            }
        },
        getSellOfferFormFields:function(){
            let formData = new FormData();
            let cnt = this.sellOfferFields.length;
            
            for(var i = 0 ; i < cnt ; i++){               
                formData.append(this.sellOfferFields[i],this.toLatinNumbers(this.sellOffer[this.sellOfferFields[i]]));
            }
            
            formData.append('valid_date_from',this.toLatinNumbers(this.$refs.validDateFrom.value));
            formData.append('valid_date_to',this.toLatinNumbers(this.$refs.validDateTo.value));
            formData.append('buy_ad_id',this.toLatinNumbers(this.$refs.buyAdId.value));
            
            for(var i = 0; i < this.sellOfferFiles.length; i++ ){
                let file = this.sellOfferFiles[i];
                formData.append('img_' + i , file);
            }
            formData.append('photos_count',this.sellOfferFiles.length);
            
            return formData; 
        },
        toLatinNumbers:function(num){
            var numDic = {
                '۰': '0',
                '۱': '1',
                '۲': '2',
                '۳': '3',
                '۴': '4',
                '۵': '5',
                '۶': '6',
                '۷': '7',
                '۸': '8',
                '۹': '9',
            };

            return num    
                .toString()
                .replace(/[۰-۹]/g,function(w){
                    return numDic[w]; 
            });
        },
    },
    mounted(){
      this.init();  
    },
});



