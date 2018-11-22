 var vm = new Vue({
        el: '#app',
        data: {
            posts: '',
            mainSearchBoxText:'',
            enterKeyActiveForSearch:false,
        },
        methods: {
            init: function () {
                var self = this;
                
                axios.post('/get_wp_posts')
                    .then(function (response){
                        self.posts = response.data.posts;
                    });
            },
            search:function(){
                if(this.mainSearchBoxText != ''){
                    //redirect to product-list with
                    window.location.href = '/product-list/' + this.mainSearchBoxText;
                }
                 
            }
        },
        mounted: function () {
            this.init();
        },
      created() {
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