var vm = new Vue({
    el:'#app',
    data:function(){
        return {
            currentUser:{
                profile:'',
                user_info: '',
            },
            product : {
                product_name:'',
                stock:'',
                min_sale_price:'',
                max_sale_price:'',
                min_sale_amount:'',
                description:'',
                address:'',
                category_id:'',
                city_id:'',
                rules:false,
            },
            productFields:[
                'product_name',
                'stock',
                'min_sale_price',
                'max_sale_price',
                'min_sale_amount',
                'description',
                'address',
                'category_id',
                'city_id',
            ],
            categoryList:'',
            SubCategoryList:'',
            categorySelected:'',
            provinces:'',
            cities:'',
            productFiles:[],
            popUpMsg:'',
        };
    },
    methods:{
        init:function(){
            axios.post('/get_category_list')
                .then(response => (this.categoryList = response.data.categories));
            axios.post('/location/get_location_info')
                .then(response => (this.provinces = response.data.provinces));
        },
        loadSubCategoryList:function(categoryId){
            axios.post('/get_category_list',{
                parent_id : categoryId,
            }).then(response => (this.SubCategoryList = response.data.categories));
        },
        loadCityList:function(provinceId){
            axios.post('/location/get_location_info',{
                province_id : provinceId,
            }).then(response => (this.cities = response.data.cities));
        },
        submitProduct:function(){
            
            if(this.product.rules != true){
                alert('accept the rules first!');
            }
            else{
                let formData = this.getProductFormFields();
            
                axios.post('/user/add_product',formData)
                    .then(function(response){
                        if(response.status == 201){
                            alert('success');
                        } 
                        else{
                            alert('failed');
                        }
                });
            }
            
        },
        getProductFormFields:function(){
            let formData = new FormData();
            let cnt = this.productFields.length;
            
            for(var i = 0 ; i < cnt ; i++){
                formData.append(this.productFields[i],this.toLatinNumbers(this.product[this.productFields[i]]));
            }
    
            for(var i = 0; i < this.productFiles.length; i++ ){
                let file = this.productFiles[i];
                formData.append('image_' + i , file);
            }
            formData.append('images_count',this.productFiles.length);
            
            return formData; 
        },
        setCategoryId:function(categoryId){
            console.log(categoryId);
            this.product.category_id = categoryId ;
        },
        setCityId:function(cityId){
            console.log(cityId);
            this.product.city_id = cityId;
        },
        handleProductFilesUpload:function(){
            let uploadedFiles = this.$refs.productFiles.files ;
            /*
              Adds the uploaded file to the files array
            */
            for( var i = 0; i < uploadedFiles.length; i++ ){
              this.productFiles.push( uploadedFiles[i] );
            }
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
        }
    },
    mounted(){
      this.init();  
    },
});
