
var viz = false;
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

var OwlCarouselLists =  {
    data:function(){
        return {
            imgSrcs:'',
        };
    },
    props:['img','base'],
    template: '<div class="image-wrapper">' +
        '<a  :href="base + img">'+
        '<img :src="base + img">'+
        '</a>'+
        '</div>',
    mounted: function(){
        $(".owl-carousel").owlCarousel({
            loop:false,
            items:1,
            margin:10,
            nav:false,
            dots:true
        });
        $(this.$el).parent().parent().parent().magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    },
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
        bottom:false,
        loadMoreActive:false,
    },
    methods:{
       dropdown:function() {
            $(".profile-list").fadeIn("slow", function () {
                viz = true;
            });
        },
       dropdownList:function() {
            $(".icon-header-list").fadeIn("slow", function () {
                viz = true;
            });
        },
       documentClick(e){
            if (viz) {
                $('.profile-list').fadeOut("slow");
                $('.icon-header-list').fadeOut("slow");
                viz = false;
            }
        },
       init:function(){
            var self = this;
            var searchValueText = searchValue;

            if(searchValueText){
                this.searchText = searchValueText;
            }
            else{
                self.loading = true;
                axios.post('/user/get_product_list',{
                    from_record_number:0,
                    to_record_number:this.productCountInPage,
                }).then(function(response){
                    self.products = response.data.products;
                    self.productCountInPage = self.products.length;
                    self.loading = false;
                });
            }


            axios.post('/user/profile_info')
                .then(response => (this.currentUser = response.data));
            axios.post('/get_category_list')
                .then(response => (this.categoryList = response.data.categories));
            axios.post('/location/get_location_info')
                .then(response => (this.provinceList = response.data.provinces));
        },
        setCategoryFilter:function(e){
            e.preventDefault;
            var categoryId = $(e.target).val();

            var self = this;

            axios.post('/user/get_product_list')
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

            axios.post('/user/get_product_list')
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

            axios.post('/user/get_product_list')
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

            axios.post('/location/get_location_info',{
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
            this.loading = true;
            var self = this;

            axios.post('/user/get_product_list')
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
            this.loading = false;
//            this.continueToLoadProducts = false;
//            self.productCountInPage = self.products.length;
        },
        feed(){
//              var offset = $(window).scrollTop() + $(window).height();
//              var height = $(document).height();

          var self = this;
          

          if(this.searchText == '' && this.provinceId == '' && this.categoryId == '' && this.continueToLoadProducts){
              this.loadMoreActive = true;
              
              this.productCountInPage += this.productCountInEachLoad ;

                axios.post('/user/get_product_list',{
                    from_record_number:0,
                    to_record_number:this.productCountInPage,
                }).then(function(response){
                    self.products = response.data.products;

                    if(self.products.length + 1 < self.productCountInPage){
                        self.continueToLoadProducts = false;
                    }
                    
                    this.loadMoreActive = true;
                });
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

                this.scrollToTheRequestRegisterBox(element);
            }
            else{
                this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                $('#myModal2').modal('show');
            }

        },
        scrollToTheRequestRegisterBox:function(element){
            var newPosition = $(element).offset();
            console.log(newPosition.top);
            $('html, body').stop().animate({ scrollTop: newPosition.top - 380}, 1000);
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
            })
            .catch(function(e){
                    self.popUpMsg = 'حساب کاربری شما از نوع خریداران نیست!';
                    console.log(self.popUpMsg);
                    $('#myModal').modal('show');

                    self.submiting = false;

                    return false;
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
        },
        redirectToLogin:function(){
            window.location.href = '/login';
        },
        registerRequestInSearchNotFoundCase:function(){
            if(this.currentUser.profile){
                if(this.currentUser.user_info.is_buyer){
                    window.location.href = '/dashboard/#/register-request';
                }
                else{
                    this.popUpMsg = 'حساب کاربری شما از نوع خریدار نیست.';
                    $('#myModal').modal('show');
                }
            }
            else{
                this.popUpMsg = 'تنها کاربران تایید شده ی اینکوباک مجاز به ثبت درخواست هستند.اگر کاربر ما هستید ابتدا وارد سامانه شوید درغیر اینصورت ثبت نام کنید.';
                $('#myModal2').modal('show');
            }
        },
        bottomVisible:function(){
          const scrollY = window.scrollY;
          const visible = document.documentElement.clientHeight;
          const pageHeight = document.documentElement.scrollHeight;
          const bottomOfPage = visible + scrollY >= pageHeight ;
          return bottomOfPage || pageHeight < visible ;
        },
    },
    watch:{

        searchText:function(){
            var self = this;

            axios.post('/user/get_product_list')
                .then(function(response){
                    self.products = '';
                    self.loading = true;

                     var text = self.searchText.split(' ');
                     self.products = response.data.products.filter(function(product){
                        return text.every(function(el){
                            if(product.main.product_name.indexOf(el) > -1 ||
                                product.main.province_name.indexOf(el) > -1 ||
                                product.main.city_name.indexOf(el) > -1 ||
                                product.main.category_name.indexOf(el) > -1 ||
                                product.main.sub_category_name.indexOf(el) > -1){
                                    return true;
                            }
                            else return false;
                        });
                });
               self.loading = false;
            });
        },

        bottom(bottom){
          if (bottom) {
            this.feed()
          }
        },
    },
    created(){
        document.addEventListener('click', this.documentClick)
        //window.addEventListener('scroll', this.handleScroll);
//        window.addEventListener('scroll', () => {
//          this.bottom = this.bottomVisible();
//            this.feed();
//        });


    },
    destroyed(){
        //window.removeEventListener('scroll', this.handleScroll);
    },
    components:{
        "popup":PopupImage,

        'image-viewer-list' : OwlCarouselLists,
    },
    mounted(){
      this.init();

    },
});
