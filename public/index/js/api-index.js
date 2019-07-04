
var viz=false;

var OwlCarousel =  {
    data:function(){
        return {
            imgSrcs:'',
        };
    },
    props:['img','title','link'],
    template: "<div class='detail-thumb'>"
    +
    "<img :src='img' class='img-responsive'><h4>{{title}}</h4>"
    +"<a :href='link' class='blue-bot'>مشاهده محصول</a>"
    +"</div>",
    mounted: function(){
        $(".owl-carousel").owlCarousel({
            autoplay:true,
            autoplayTimeout:2000,
            loop:true,
            nav:true,
            items: 4,
            mouseDrag: true,
            margin:30,
            responsive:{
                0:{
                    items:1,
                    stagePadding:15
                },
                450:{
                    items:2,
                    stagePadding:15
                },
                600:{
                    items:3,
                    stagePadding:15
                },
                992:{
                    items:4,
                }
            }
        });
    }
};

var vm = new Vue({
        el: '#app',
        components:{
            'image-viewer' : OwlCarousel,
        },
        data: {
            posts: '',
            mainSearchBoxText:'',
            enterKeyActiveForSearch:false,
            homePageProducts:'',
        },
        methods: {
            dropdown: function () {
                $(".profile-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            dropdownList: function () {
                $(".icon-header-list").fadeIn("slow", function () {
                    viz = true;
                });
            },
            documentClick(e) {
                if (viz) {
                    $('.profile-list').fadeOut("slow");
                    $('.icon-header-list').fadeOut("slow");
                    viz = false;

                }
            },
            init: function () {
                var self = this;

                axios.post('/get_wp_posts')
                .then(function (response){
                    self.posts = response.data.posts;
                });

                axios.post('/user/get_product_list',{
                    from_record_number:0,
                    to_record_number:5,
                }).then(function(response){
                    self.homePageProducts = response.data.products;
                });
            },
            search:function(){
                if(this.mainSearchBoxText != ''){
                    //redirect to product-list with
                    window.location.href = 'master/#/product-list/' + this.mainSearchBoxText;
                }
            },
        },
        mounted: function () {
            this.init();
        },
      created() {
          document.addEventListener('click', this.documentClick)
            var self = this;
            window.addEventListener('keydown', function (event) {
                if (event.keyCode === 13) {
                    if(self.enterKeyActiveForSearch){
                        self.search();
                    }
                }
            });
        },
        watch:{
            mainSearchBoxText:function(){
                if(this.mainSearchBoxText != ''){
                    this.enterKeyActiveForSearch = true;
                }
                else{
                    this.enterKeyActiveForSearch = false;
                }
            }
        }
    })
