var vm = new Vue({
    el:'#app',
    data:{
        currentUser:{
            profile:'',
            user_info: ''
        },
        profileComplementaryFields: [
            'is_company',
            'company_name',
            'company_register_code',
            'public_phone',
            'description',
        ],
        relatedFiles:[],
        certificateFiles:[],
        errors:'',
        popUpMsg:'',
    },
    methods:{
        init:function(){
            axios.post('/user/profile_info')
                .then(response => (this.currentUser = response.data));
        },
        RegisterComplementaryProfileInfo : function(){

            if(this.currentUser.profile.is_company == null || this.currentUser.profile.public_phone == null){
                this.popUpMsg = 'ابتدا اطلاعات پایه را تکمیل کنید.';
                
                $('#myModal').modal('show');
                return ;
            }

            this.errors = '';
            var self = this;
            
            console.log(this.currentUser.profile.description);

            let formData = new FormData();
            var cnt = this.profileComplementaryFields.length ;

            for(var i = 0 ; i < cnt ; i++){
                if(this.profileComplementaryFields[i] == 'description' &&  (this.currentUser.profile['description'] == null || this.currentUser.profile['description'] == '')){
                    continue;
                }
                formData.append(this.profileComplementaryFields[i],this.currentUser.profile[this.profileComplementaryFields[i]]);
            }

            for(var i = 0; i < this.relatedFiles.length; i++ ){
                let file = this.relatedFiles[i];
                formData.append('related_' + i , file);
            }

            for(var i = 0; i < this.certificateFiles.length; i++ ){
                let file = this.certificateFiles[i];
                formData.append('certificate_' + i , file);
            }

            formData.append('related_image_count',this.relatedFiles.length) ;
            formData.append('certificate_image_count',this.certificateFiles.length);

            axios.post('/user/profile_modification',formData,{
                    headers:{
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type' : 'application/json',
                    }
                })
                .then(function(response){
                    if(response.status == 200){
                        self.popUpMsg = 'تغییرات با موفقیت انجام شد.';

                        $('#myModal').modal('show');
                    }
                    else if(response.status == 302){
                        window.location.href = '/login';
                    }
                })
                .catch(function(err){
                    self.errors = '';
                    self.errors = err.response.data.errors;
                });
        },
        handleRelatedFilesUpload(){
            let uploadedFiles = this.$refs.relatedFiles.files ;
            console.log(uploadedFiles)
            /*
              Adds the uploaded file to the files array
            */
            for(var i = 0; i < uploadedFiles.length; i++ ){
              this.relatedFiles.push( uploadedFiles[i] );
            }
        },
        handleCertificateFilesUpload(){
            let uploadedFiles = this.$refs.certificateFiles.files ;
            /*
             Adds the uploaded file to the files array
             */
            for( var i = 0; i < uploadedFiles.length; i++ ){
                this.certificateFiles.push( uploadedFiles[i] );
            }
        },
    },
    mounted(){
        this.init();
        this.currentUser;
    },
});


function call_api(route,data,call_back){
    axios.post(route,data)
        .then(call_back);
}