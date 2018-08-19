
var PopupImage =  {
    data:function(){
        return {
            imgSrcs:'',
        };
    },
    props:['img','base'],
    template: '<div>' +
    '<a   :href="base + img">'+
    '<img :src="base + img">'+
    '</a>'+
        '</div>',
    mounted: function(){
        $(this.$el).parent().magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });

    }
};

var vm = new Vue({
    el:'#app',
    data:{
        currentUser:{
            profile:'',
            user_info:''
        },
        products:{
            main:'',
            user_info:'',
            profile_info:{
                profile_photo:''
            },
            photos:[],
        },
        categoryList:'',
        subCategoryList:'',
        provinceList:'',
        cityList:'',
        categoryId:'',
        subCategoryId:'',
        provinceId:'',
        cityId:'',
        searchText:'',
        scrolled:false,
        productCountInPage:6,
        productCountInEachLoad:5,
        continueToLoadProducts:true,
        searchActive:false,
    },
    methods:{
        init:function(){
            axios.post('user/get_product_list',{
                from_record_number:0,
                to_record_number:this.productCountInPage,
            }).then(response => (this.products = response.data.products));
            axios.post('/user/profile_info')
                .then(response => (this.currentUser = response.data));
            axios.post('/get_category_list')
                .then(response => (this.categoryList = response.data.categories));
            axios.post('location/get_location_info')
                .then(response => (this.provinceList = response.data.provinces));
        },
        setCategoryFilter:function(e){
            e.preventDefault;
            var categoryId = $(e.target).val();

            var self = this;

            axios.post('user/get_product_list')
                .then(function(response){
                    self.products = '';
                    self.products = response.data.products.filter(function(product){
                        if(self.cityId != ''){
                            return product.main.category_id == categoryId && product.main.city_id == self.cityId;
                        }
                        else if(self.provinceId != '' && self.cityId == ''){
                            return product.main.category_id == categoryId && product.main.province_id == self.provinceId;
                        }
                        else{
                            return product.main.category_id == categoryId;
                        }
                    });
            });

            axios.post('/get_category_list',{
                    parent_id : categoryId
                }).then(response => (this.subCategoryList = response.data.categories));

            this.categoryId = categoryId;
            this.searchText = '';
            this.continueToLoadProducts = false;
            this.searchActive = true;
        },
        setSubCategoryFilter:function(e){
            e.preventDefault;
            var subCategoryId = $(e.target).val();
            var self = this;

            axios.post('user/get_product_list')
                .then(function(response){
                    self.products = '';
                    self.products = response.data.products.filter(function(product){
                        if(self.cityId != ''){
                            return product.main.sub_category_id == subCategoryId && product.main.city_id == self.cityId;
                        }
                        else if(self.provinceId != '' && self.cityId == ''){
                            return product.main.sub_category_id == subCategoryId && product.main.province_id == self.provinceId;
                        }
                        else{
                            return product.main.sub_category_id == subCategoryId ;
                        }
                    });
            });

            this.subCategoryId = subCategoryId;
            this.continueToLoadProducts = false;
        },
        setProvinceFilter:function(e){
            e.preventDefault;
            var provinceId = $(e.target).val();

            var self = this;

            axios.post('user/get_product_list')
                .then(function(response){

                    self.products = '';

                    self.products = response.data.products.filter(function(product){

                        if(self.subCategoryId != ''){
                            return  product.main.province_id == provinceId && product.main.sub_category_id == self.subCategoryId;
                        }
                        else if(self.categoryId != '' &&  self.subCategoryId == ''){
                            return product.main.province_id == provinceId &&
                                product.main.category_id == self.categoryId;

                        }
                        else{
                            return product.main.province_id == provinceId;
                        }
                    });
            });

            axios.post('location/get_location_info',{
                province_id : provinceId
            }).then(response => (this.cityList = response.data.cities));

            this.provinceId = provinceId;
            this.searchText = '';
            this.continueToLoadProducts = false;
            this.searchActive = true;
        },
        setCityFilter:function(e){
            e.preventDefault;
            var cityId = $(e.target).val();

            var self = this;

            axios.post('user/get_product_list')
                .then(function(response){
                    self.products = '';

                    self.products = response.data.products.filter(function(product){

                        if(self.subCategoryId != ''){
                            return  product.main.city_id == cityId && product.main.sub_category_id == self.subCategoryId;
                        }
                        else if(self.categoryId != '' &&  self.subCategoryId == ''){
                            return product.main.city_id == cityId &&
                                product.main.category_id == self.categoryId;

                        }
                        else{
                            return product.main.city_id == cityId;
                        }
                    });
            });

            this.cityId = cityId;
            this.continueToLoadProducts = false;
        },
        handleScroll(){
              var offset = $(window).scrollTop() + $(window).height();
              var height = $(document).height();

              var self = this;

              if(offset  > height - 3){ //3 pixels to buttom
                  if(this.searchText == '' && this.provinceId == '' && this.categoryId == '' && this.continueToLoadProducts){
                      this.productCountInPage += this.productCountInEachLoad ;
                      console.log(this.productCountInPage);
                        axios.post('user/get_product_list',{
                            from_record_number:0,
                            to_record_number:this.productCountInPage,
                        }).then(function(response){
                            self.products = response.data.products;

                            if(self.products.length + 1 < self.productCountInPage){
                                self.continueToLoadProducts = false;
                            }
                        });
                    }
            }
        },
    },
    watch:{
        searchText:function(){
            var self = this;

            axios.post('user/get_product_list')
                .then(function(response){
                    self.products = '';

                    self.products = response.data.products.filter(function(product){
                        if(self.searchText == ''){
                            return true;
                        }
                        else if(product.main.product_name.search(self.searchText) != -1 ||
                               product.main.province_name.search(self.searchText) != -1 ||
                               product.main.city_name.search(self.searchText) != -1 ||
                               product.main.category_name.search(self.searchText) != -1 ||
                               product.main.sub_category_name.search(self.searchText) != -1
                            ){
                                return true;
                            }
                        
                        return false;
                    });
            });
        },
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
    },
    components:{
        "popup":PopupImage
    },
    mounted(){
      this.init();      
    },
});
