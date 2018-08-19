Vue.component('step1', {
    template: '#step1',
    props: [
        'currentStep',
        'step1'
    ]
});
Vue.component('step2', {
    template: '#step2',
    props: [
        'currentStep',
        'step2'
    ]
});
Vue.component('step3', {
    template: '#step3',
    props: [
        'currentStep',
        'step1',
        'step2'
    ]
});
Vue.component('step4', {
    template: '#step4',
    props: [
        'currentStep',
        'step1',
        'step2'
    ]
});
var app = new Vue({
    el: '#app',
    data:{
        currentStep: 1,
        step1: {
            phone: ''
        },
        step2: {
            verification_code:'',
            reSendCode:false,
        },
        step3:{
            first_name:'',
            last_name:'',
            password:'',
            re_password:'',
            user_name:'',
            sex:'آقا',
            province:'',
            city:'',
            national_code:'',
            provinceList:'',
            cityList:'',
        },
        step4:{
            activity_type:0,
            rules:0,
            categoryList:'',
            categoryId:'',
        },
        errors:{
            first_name:[],
            last_name:[],
            province:[],
            city:[],
            user_name:[],
            national_code:[],
            password:[],
            password_conf:[],
            sex:[],
            verification_code:[],
            phone:[],
            category_id:[],
        },
        errorFlag:false,
        userNameUnique:true,
        nationalCodeUnique:true,
        popUpMsg:'',
    },
    ready: function(){
        console.log('ready');
    },
    methods:{
        goToStep: function(step){
            this.currentStep = step;
        },
        send_verification_code:function(){
            this.step2.reSendCode = false;
            
            var self = this;
            axios.post("/send_verification_code",{
                phone : this.toLatinNumbers(this.step1.phone)
            })
            .then(function(response){
                self.goToStep(2);
                
                self.step2.verification_code = '';
                self.errors.verification_code = []; 
                
                setTimeout(function(){
                    self.step2.reSendCode = true;
                },60000);
            })
            .catch(function(err){
                self.errors.phone = err.response.data.errors.phone; 
            });
        },
        verify_code:function(){
            var self = this;
            
            axios.post('/verify_code',{
                verification_code:this.toLatinNumbers(this.step2.verification_code)
            }).then(function (response){
                
                if (response.data.status == true){
                    self.goToStep(3);
                    self.getProvinceList();
                }else if(response.data.status == false){
                    self.goToStep(2);
                    self.errors.verification_code = [];
                    self.errors.verification_code.push('کد وارد شده درست نیست');
                }
            }).catch(function(error){
                self.goToStep(2);
                self.errors.verification_code = [];
                self.errors.verification_code.push('وارد کردن کد الزامی است.');
            });
            
        },
        register_details:function(){
            this.errorFlag = false;
            
            this.checkStep3();
            
            if(this.errorFlag == false && this.userNameUnique == true && this.nationalCodeUnique == true){
                 this.goToStep(4);
                 this.getCategory();
            }
        },
        submitForm:function(){
           var self = this;
            
           this.errorFlag = false;
            
           this.checkStep4();
           
           if(this.step4.rules != 1){
               this.popUpMsg = 'پذیرش قوانین ثبت آگهی الزامی است.';
               
               $('#myModal').modal('show');
               return ;
           }
           
           var object = {
                phone:this.step1.phone,
                first_name:this.step3.first_name,
                last_name:this.step3.last_name,
                password:this.step3.password,
                user_name:this.step3.user_name,
                sex:this.step3.sex,
                province:this.step3.province,
                city:this.step3.city,
                activity_type:this.step4.activity_type,
                national_code:this.toLatinNumbers(this.step3.national_code),
                category_id:this.step4.categoryId
            };
            
            if(this.errorFlag == false){
                 axios.post('api/v1/users',object)
                    .then(function (response){
                        if(response.status == 201){
                            
                            self.popUpMsg = 'ثبت نام با موفقیت انجام شد.در حال انتقال به صفحه ی ورود...';
                            
                            $('#myModal').modal('show');
                            
                            setTimeout(function(){
                                window.location.href = '/login';   
                            },3000);
                        }
                 })
                .catch(function(err){
                     
                 });                
            }
        },
        setCategoryId:function(e){
            e.preventDefault();
            
            this.step4.categoryId = $(e.target).val();  
        },
        checkStep3:function(){
            this.userNameValidator(this.step3.user_name);
            this.firstNameValidator(this.step3.first_name);
            this.lastNameValidator(this.step3.last_name);
            this.provinceValidator(this.step3.province);
            this.cityValidator(this.step3.city);
            this.nationalCodeValidator(this.step3.national_code);
            this.passwordValidator(this.step3.password,this.step3.re_password);
            this.sexValidator(this.step3.sex);
        },
        checkStep4:function(){
            this.categoryIdValidator(this.step4.categoryId);  
        },
        firstNameValidator:function(name){
            this.errors.first_name = [];
            
            if(name === ''){
                this.errors.first_name.push('فیلد الزامی است');
                this.errorFlag = true;
            }
            if( ! this.validateRegx(name,/^[\u0600-\u06FF\s]+$/)){
                this.errors.first_name.push('فیلد باید فارسی باشد');
                this.errorFlag = true;
            }
        },
        lastNameValidator:function(name){
            this.errors.last_name = [];
            
            if(name === ''){
                this.errors.last_name.push('فیلد الزامی است');
                this.errorFlag = true;
            }
            if( ! this.validateRegx(name,/^[\u0600-\u06FF\s]+$/)){
                this.errors.last_name.push('فیلد باید فارسی باشد');
                this.errorFlag = true;
            }
        },
        provinceValidator:function(province){
            this.errors.province = [];
            
            if(province === ''){
                this.errors.province.push('فیلد استان الزامی است');
                this.errorFlag = true;
            }
            if( ! this.validateRegx(province,/^[\u0600-\u06FF\s]+$/)){
                this.errors.province.push('استان باید فارسی باشد');
                this.errorFlag = true;
            }
        },
        cityValidator:function(city){
            this.errors.city = [];
            
            if(city === ''){
                this.errors.city.push('فیلد شهر الزامی است');
                this.errorFlag = true;
            }
            if( ! this.validateRegx(city,/^[\u0600-\u06FF\s]+$/)){
                this.errors.city.push('شهر باید فارسی باشد');
                this.errorFlag = true;
            }
        },
        userNameValidator:function(userName){
            if(this.userNameUnique == true){
                this.errors.user_name = [];
            }
            
            if(userName == ''){
                this.errors.user_name.push('نام کاربری الزامی است');
                
                this.errorFlag = true;
            }
            if( ! this.validateRegx(userName,/^\w+$/)){
                this.errors.user_name.push(' شامل حروف غیر مجاز است');
                this.errorFlag = true;
            }
        },
        nationalCodeValidator:function(code){
            code = this.toLatinNumbers(code);
            
            if(this.nationalCodeUnique == true){
                this.errors.national_code = [];
            }
            
            if(code === ''){
                this.errors.national_code.push('کد ملی الزامی است');
                this.errorFlag = true;
            }
            if( ! this.isIrNationalCode(code)){
                this.errors.national_code.push('کد ملی معتبر نیست');
                this.errorFlag = true;
            }
        },
        isIrNationalCode:function(input){
            if (!/^\d{10}$/.test(input)){
                return false;
            }
 
            var check = parseInt(input[9]);
            var sum = [0, 1, 2, 3, 4, 5, 6, 7, 8]
                .map(function (x) { return parseInt(input[x]) * (10 - x); })
                .reduce(function (x, y) { return x + y; }) % 11;
 
            return sum < 2 && check == sum || sum >= 2 && check + sum == 11;
        },
        passwordValidator:function(pass,passConf){
            this.errors.password = [];
            this.errors.password_conf = [];
            
            if(pass === ''){
                this.errors.password.push('رمز عبور الزامی است');
                this.errorFlag = true;
            }
            if(pass.length < 8){
                this.errors.password.push('رمز عبور حداقل ۸ کاراکتر باشد');
                this.errorFlag = true;
            }
            if(passConf === ''){
                this.errors.password_conf.push('تکرار رمز عبور الزامی است');
                this.errorFlag = true;
            }
            if(passConf != pass){
                this.errors.password_conf.push('رمز عبور مطابقت ندارد');
                this.errorFlag = true;
            }
        },
        sexValidator:function(sex){
            this.errors.sex = [];
            
            if(sex === ''){
                this.errors.sex.push('جنسیت الرامی است');
                this.errorFlag = true;
            }
        },
        categoryIdValidator:function(categoryId){
            this.errors.category_id = [];
            console.log('test : '+ categoryId);
            if(categoryId === ''){
                this.errors.category_id.push('انتخاب حوزه ی فعالیت الزامی است.');
                this.errorFlag = true;
            }
        },
        validateRegx:function(input,regx){
            return regx.test(input);  
        },
        getCategory:function(){
            axios.post('/get_category_list').then(response => (this.step4.categoryList = response.data.categories));
        },
        getCategoryId:function (categoryId){
            this.step4.categoryId = categoryId;
        },
        getProvinceList:function(){
            axios.post('/location/get_location_info')
                .then(response => (this.step3.provinceList = response.data.provinces));
        },
        getCityList:function(provinceId){
            axios.post('/location/get_location_info',{
                province_id : provinceId
            })
            .then(response => (this.step3.cityList = response.data.cities));
        },
        setProvinceName:function(e){
            e.preventDefault();
            
            this.step3.province = $(e.target).val();
            
            var provinceId = '';
            
            for(var i = 0 ; i < this.step3.provinceList.length ; i++){
                if(this.step3.province == this.step3.provinceList[i].province_name){
                    provinceId = this.step3.provinceList[i].id ;
                    break;
                }
            }
            
            this.getCityList(provinceId);
        },
        setCityName:function(e){
            e.preventDefault();
            
            this.step3.city = $(e.target).val();
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
    },
    watch:{
        'step3.user_name':function(){
            var self = this;
            if(this.step3.user_name.length > 0){
                axios.post('user/is_user_name_unique',{
                    user_name : this.step3.user_name,
                })
                .then(function(response){
                    if(response.data.status == true){
                        self.errors.user_name = [];
                        self.userNameUnique = true;
                    }
                })
                .catch(function(err){
                    self.errors.user_name = [];
                    self.errors.user_name.push('نام کاربری قبلا گرفته شده');
                    
                    self.errorFlag = true;
                    self.userNameUnique = false;
                });
            }  
        },
        'step3.national_code':function(){
            var self = this;
            
            this.step3.national_code = this.toLatinNumbers(this.step3.national_code);
            
            if(this.step3.national_code.length > 0 && this.step3.national_code < 10){
                this.errors.national_code = [];
                this.errors.national_code.push('کد ملی ۱۰ رقمی است');
                
                this.errorFlag = true;
            }
            else if(this.step3.national_code.length == 10){
                axios.post('user/is_national_code_unique',{
                    national_code: this.toLatinNumbers(this.step3.national_code),
                })
                .then(function(response){
                    if(response.data.status == true){
                        self.errors.national_code = [];
                        self.nationalCodeUnique = true;
                    }                    
                })
                .catch(function(err){
                    self.errors.national_code = [];
                    self.errors.national_code.push('کد ملی قبلا گرفته شده');
                    
                    self.errorFlag = true;
                    self.nationalCodeUnique = false;
                });
            }
            
        }
    }
});

