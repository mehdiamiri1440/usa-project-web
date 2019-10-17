var visible = false;
var PopupImage =  {
    data:function(){
        return {
            imgSrcs:'',
        };
    },
    props:['img','base'],
    template: '<div class="image-wrapper">' +
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


var PopupImageCertificate =  {

    props:['img','base'],
    template:
        '<a   :href="base + img">'+
        '<img :src="base + img">'+
        '</a>'
    ,
    mounted: function(){
        $('.cerificates > div').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
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

    }
};

var OwlCarousel =  {
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
            margin:10,
            nav:true,
            dots:false
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

    }
};
var vm = new Vue({
    el:'#app',
    data:{
        currentUser:{
            profile:'',
            user_info:'',
        },
        profileOwner:{
            profile:'',
            user_info:'',
            certificates:'',
            relateds:'',
            activity_domain:'',
            is_buyer:'',
        },
        profileDescription:true,
        products:'',
        noProductMsgSignal:false,
        loading:false,
        popUpMsg:'',
        submiting:'',
        copyLinkText:'',
        copyLinkClass:'',
        profileOwnerStatistics:{
            transaction_count:'',
            product_count:'',
            buyAd_count:'',
        }
    },

    methods:{
      dropdown:function() {
            $(".profile-list").fadeIn("slow", function () {
                visible = true;
            });
        },
         dropdownList:function() {
            $(".icon-header-list").fadeIn("slow", function () {
                visible = true;
            });
        },
       documentClick(e){
            if (visible) {
        $('.profile-list').fadeOut("slow");
        $('.icon-header-list').fadeOut("slow");
        visible = false;

          }
        },
        init:function(){

            var self = this;

            if(this.isDeviceMobile()){
                this.copyLinkText = ' اشتراک در واتساپ';
                this.copyLinkClass = 'fa fa-whatsapp fa-2x';
            }
            else{
                this.copyLinkText = 'کپی آدرس';
                this.copyLinkClass = 'fa fa-copy';
            }

            axios.post('/get_user_statistics_by_user_name',{
                user_name: userName
            })
                .then(function(response){
                    self.profileOwnerStatistics = response.data.statistics;
                })
                .catch(function(err){
                    //
                });

            axios.post('/user/profile_info')
                .then(response => (this.currentUser = response.data));
            axios.post('/load_profile_by_user_name',{
                user_name : userName
            })
                .then(response => (this.profileOwner = response.data))
                .catch(function(err){
                    if(err.response.status == 404){
                        window.location.href = '/404'
                    }
                });
        },
        showProfileOwnerProducts:function(e){

            e.preventDefault();
            this.profileDescription = false;

            this.loading = true;

            var self = this;

            axios.post('/get_product_list_by_user_name',{
                user_name : userName
            }).then(function(response){
                self.products = response.data.products;

                self.loading = false;
            });
        },
        showProfileOwnerDescription:function(e){

            e.preventDefault();
            this.profileDescription = true;

            this.profileOwner.profile = '';

            axios.post('/load_profile_by_user_name',{
                user_name : userName
            })
                .then(response => (this.profileOwner = response.data))
                .catch(function(err){
                    if(err.response.status == 404){
                        window.location.href = '/404'
                    }
                });

        },
        refreshProduct:function(productId){
            var self = this;
            axios.post('/refresh_my_product_by_id',{
                product_id : productId
            })
                .then(function(response){
                    if(response.data.status == true){
                        self.popUpMsg = 'محصول شما بروز رسانی شد و در صدر لیست محصولات قرار گرفت.';
                        $('#myModal').modal('show');
                    }
                    else{
                        self.popUpMsg = 'هم اکنون قادر به انجام عملیات نیستیم.دوباره تلاش کنید.';
                        $('#myModal').modal('show');
                    }
                })
                .catch(function(err){
                    self.popUpMsg = 'هم اکنون قادر به انجام عملیات نیستیم.دوباره تلاش کنید.';
                    $('#myModal').modal('show');
                });
        },
        copyProfileLinkToClipBoard:function(){
            if(this.isDeviceMobile()){

                var linkElement = document.createElement('a');
                linkElement.setAttribute('href','whatsapp://send?text=' + 'https://incobac.com/profile/' + this.profileOwner.user_info.user_name);
                linkElement.setAttribute('data-action','share/whatsapp/share');
                document.body.appendChild(linkElement);

                linkElement.click();

                document.body.removeChild(input);

            }
            else{
                var input = document.createElement('input');
                input.setAttribute('value', 'https://incobac.com/profile/' + this.profileOwner.user_info.user_name);
                document.body.appendChild(input);
                input.select();
                var result = document.execCommand('copy');
                document.body.removeChild(input);
                if(result){
                    this.popUpMsg = 'آدرس پروفایل کاربر کپی شد.';
                    $('#myModal').modal('show');
                }
            }

        },
        isDeviceMobile:function() {
            if( navigator.userAgent.match(/Android/i)
                || navigator.userAgent.match(/webOS/i)
                || navigator.userAgent.match(/iPhone/i)
                || navigator.userAgent.match(/iPad/i)
                || navigator.userAgent.match(/iPod/i)
                || navigator.userAgent.match(/BlackBerry/i)
                || navigator.userAgent.match(/Windows Phone/i)
            ){
                return true;
            }
            else {
                return false;
            }
        }

    },
    mounted(){
        this.init();

    },
    components:{
        'image-viewer' : OwlCarousel,
        'image-viewer-list' : OwlCarouselLists,
        "popup":PopupImage,
        "popup-certificate":PopupImageCertificate,
    },
    created(){
        document.addEventListener('click', this.documentClick)
    },
});






