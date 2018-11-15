
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
        errors:'',
        popUpMsg:'',
        submiting:false,
        loading:false,
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
        openRequestRegisterBox:function(e){
            if(this.currentUser.profile){
                e.preventDefault;
                var event =  $(e.target);

                this.errors = '';

                var index = (event.parents('article').index() + 1);
                var element =  $('article:nth-of-type(' + index + ') .buy_details');
                element.slideToggle("125", "swing");
                $('.buy_details').not(element).slideUp();
            }
            else{
                this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                $('#myModal').modal('show');
            }

        },
        registerRequest:function(e){
            e.preventDefault;
            var event = $(e.target);

            this.submiting = true;

            this.errors = '';

            var index = (event.parents('article').index() + 1);
            var productId =  $('article:nth-of-type(' + index + ') .buy_details input#product-id');
            var requirementAmount =  $('article:nth-of-type(' + index + ') .buy_details input#requirement-amount');
            var packType =  $('article:nth-of-type(' + index + ') .buy_details input#pack-type');
            var description =  $('article:nth-of-type(' + index + ') .buy_details textarea#description');

            description = description.val();
            requirementAmount = this.toLatinNumbers(requirementAmount.val());
            packType = packType.val();
            productId = productId.val();

            var product = this.getProductById(productId);

            var request = {
                requirement_amount:requirementAmount,
                category_id:product.main.sub_category_id,
                pack_type:packType,
                description:description,
            };

            if(product.main.product_name){
                request.name = product.main.product_name;
            }

            var self = this;
            //check if product_id there isn't in user product request list
            axios.post('/does_buyer_already_had_requested_the_produtct',{
                product_id : productId,
            })
            .then(function(response){

                if(response.data.status == false){
                    self.RegisterBuyAdRequest(request,productId);
                    self.submiting = false;
                }
                else{
                    self.popUpMsg = 'شما قبلا درخواست خرید این محصول را ثبت کرده اید!';
                    console.log(self.popUpMsg);
                    $('#myModal').modal('show');

                    self.submiting = false;

                    return false;
                }
            });


        },
        RegisterBuyAdRequest:function(request,productId){
            var self = this;

            axios.post('/user/add_buyAd',request)
                    .then(function(response){
                            self.popUpMsg = 'درخواست خرید شما ثبت شد!';
                            $('#myModal').modal('show');

                            axios.post('/register_buyer_request_for_the_product',{
                                product_id:productId,
                            });
                    })
                    .catch(function(err){
                        self.errors = '';
                        self.errors = err.response.data.errors;
                    });
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
        },
        getProductById:function(productId){
            var product = this.products.filter(function(product){
                if(product.main.id == productId){
                    return true;
                }
                else return false;
            });

            return product[0];
        }
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
        window.css('overflow-y','hidden');
        window.addEventListener('scroll', this.handleScroll);
        window.css('overflow-y','auto');
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
