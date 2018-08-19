var vm = new Vue({
    el:'#app',
    data:{
        currentUser:{
            profile:{
                is_company: '',
                company_name:'',
                company_register_code:'',
                address:'',
                public_phone:'',
                profile_photo:'',
            },
            user_info:'',
        },
        profileBasicFields:[
            'is_company',
            'company_name',
            'company_register_code',
            'public_phone',
            'address',
        ],
        profilePhoto:'',
        errors:'',
        popUpMsg:'',
    },
    methods:{
        init:function(){
            this.isLoaded = true;
            axios.post('/user/profile_info')
                .then(response => (this.currentUser = response.data));
        },
        RegisterBasicProfileInfo:function(){
            this.errors = '';
            var self = this;
            
            var data = new FormData();

            for(var i = 0 , cnt = this.profileBasicFields.length ; i < cnt ; i++){
                    if(this.currentUser.profile[this.profileBasicFields[i]] != null){
                        data.append(this.profileBasicFields[i],this.toLatinNumbers(this.currentUser.profile[this.profileBasicFields[i]]));   
                    }
            }

            let profilePhoto = this.$refs.profilePhoto.files[0];
            if(profilePhoto){
                data.append('profile_photo',profilePhoto);
            }

            axios.post('/user/profile_modification',data)
                .then(function(response){
                    if(response.status == 200){
                        self.popUpMsg = 'تغییرات با موفقیت اعمال شد';
                        
                        $('#myModal').modal('show');
                    }
                })
                .catch(function(err){
                    self.errors = '';
                    self.errors = err.response.data.errors;
                });
        },
        toLatinNumbers:function(num){
            if(num == null){
                return null;
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
    },
    mounted(){
        this.init();
    },
});



