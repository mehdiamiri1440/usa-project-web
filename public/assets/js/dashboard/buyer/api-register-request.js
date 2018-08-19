var vm = new Vue({
    el:'#app',
    data:function(){
        return {
            currentUser:{
                profile:'',
                user_info: '',
            },
            buyAd : {
                name:'',
                requirement_amount:'',
                price:'',
                pack_type:'',
                description:'',
                address:'',
                pack_type:'',
                category_id:'',
                rules:false,
            },
            buyAdFields:[
                'name',
                'stock',
                'requirement_amount',
                'price',
                'pack_type',
                'description',
                'address',
                'pack_type',
                'category_id',
            ],
            categoryList:'',
            SubCategoryList:'',
            categorySelected:'',
            cities:'',
            buyAdFiles:[],
            errors:'',
            popUpMsg:'',
            profileConfirmed:false,
            disableSubmit:false,
        };
    },
    methods:{
        init:function(){
            axios.post('/user/profile_info')
                .then(response => (this.currentUser = response.data));
            axios.post('/get_category_list')
                .then(response => (this.categoryList = response.data.categories));
        },
        loadSubCategoryList:function(e){
            e.preventDefault();
            var categoryId = $(e.target).val();
    
            axios.post('/get_category_list',{
                parent_id : categoryId,
            }).then(response => (this.SubCategoryList = response.data.categories));
        },
        submitBuyAd:function(){
            this.errors = '';
            var self = this;
            
            if(this.buyAd.rules != true){
                this.popUpMsg = 'ابتدا تیک با قوانین موافق هستم را بزنید.';
            
                $('#myModal').modal('show');
            }
            else{
                let formData = this.getBuyAdFormFields();
            
                axios.post('/user/add_buyAd',formData)
                    .then(function(response){
                        if(response.status == 201){
                            self.disableSubmit = true;
                            window.location.href = '/dashboard/my-buyAds';
                        } 
                    })
                    .catch(function(err){
                        self.errors = err.response.data.errors;  
                });
            }
            
        },
        getBuyAdFormFields:function(){
            let formData = new FormData();
            let cnt = this.buyAdFields.length;
            
            for(var i = 0 ; i < cnt ; i++){
                formData.append(this.buyAdFields[i],this.toLatinNumbers(this.buyAd[this.buyAdFields[i]]));
            }
    
            for(var i = 0; i < this.buyAdFiles.length; i++ ){
                let file = this.buyAdFiles[i];
                formData.append('image_' + i , file);
            }
            formData.append('images_count',this.buyAdFiles.length);
            
            return formData; 
        },
        setCategoryId:function(e){
            e.preventDefault();
            
            this.buyAd.category_id = $(e.target).val();
        },
        setCityId:function(cityId){
            console.log(cityId);
            this.buyAd.city_id = cityId;
        },
        handleBuyAdFilesUpload:function(){
            let uploadedFiles = this.$refs.buyAdFiles.files ;
            /*
              Adds the uploaded file to the files array
            */
            for( var i = 0; i < uploadedFiles.length; i++ ){
              this.buyAdFiles.push( uploadedFiles[i] );
            }
        },
        toLatinNumbers:function(num){
            if(num == null){
                return '';
            }
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
        }
    },
    mounted(){
      this.init();  
    },
});
