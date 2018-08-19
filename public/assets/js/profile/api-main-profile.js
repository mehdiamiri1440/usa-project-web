
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

var OwlCarousel =  {
    data:function(){
        return {
            imgSrcs:'',
        };
    },
    props:['img','base'],
    template: '<div>' +
        '<a  :href="base + img">'+
            '<img :src="base + img">'+
        '</a>'+
    '</div>',
    mounted: function(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            margin:10,
            nav:true
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
        },
        profileDescription:true,
        products:'',
        noProductMsgSignal:false,
        loading:false,
    },
    methods:{
        init:function(){
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
                console.log('loaded');
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
    },
    mounted(){
      this.init();
    },
    components:{
        'image-viewer' : OwlCarousel,
        "popup":PopupImage
    }
});






