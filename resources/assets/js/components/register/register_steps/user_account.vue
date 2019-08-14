<style scoped>
		
	.submit-button{
		background: #DDDDDD;
		color: #fff;
		border: none;
		border-radius: 4px;
		width: 100%;
		font-size: 16px;
		padding: 10px 0 9px;
		transition: 300ms;
		cursor: default;
    }

    .submit-button.active{
		background: #00C569;
		cursor: pointer;
    }

    .title-contents{
    	font-weight: bold;
    	font-size: 19px;

    }

    .form-contents{
    	margin: 5px auto;
    }

    .form-contents lable{
    	font-size: 12px;
    }

    .input-wrapper{
   	    margin: 6px auto 4px;
    	position: relative;
    }

    input{
    	width: 100%;

		border-radius: 4px;

		box-shadow: none;

		border: 1px solid;

		padding: 8px 15px 9px 45px;

		color: #BEBEBE;

		direction: ltr;

		transition: 300ms;

    }
    .input-wrapper i {
    	display: inline-block;

		position: absolute;

		left: 15px;

		font-size: 20px;

		color: #BEBEBE;

		top: 9px;

		transition: 300ms;
    }


    input:focus ,  input:focus + i{
		color: #333;

    }

    input.active{
		color: #00C569;
    }

    input.active:focus ,  input.active:focus + i , input.active + i {
		color: #00C569;
    }

    input.error {
		color: #e41c38;
    }

    input.error:focus ,  input.error:focus + i , input.error + i {
		color: #e41c38;
    }
    .error-message{

    	text-align: center;

		color: #e41c38;

		font-weight: bold;

		height: 25px;

		margin-bottom: 5px;

	    direction: rtl;

    }

</style>

<template>
	<div>
		 <h2 class="title-contents">
		     حساب کاربری
		 </h2>

		 <div class="form-contents col-xs-12">

		     	<div class="row">
		     		
			        	
				        <label for="user-name">

				        		یک نام کاربری منحصر به فرد (انگلیسی و بدون فاصله) وارد کنید
						</label>
				    
				     	<div class="input-wrapper col-xs-12 user-name-wrapper">

				     		<div class="row">
				     			<input 
						     	 	 v-model="userName" 
						     		 :class = "{'error' : $parent.errors.user_name[0]}"
						     		 id="user-name" 
						     		 type="text"
						     		 class="dire"
						     		 placeholder="نام کاربری"  
						     		 maxlength="20"
						     		 >

						     		<i class="fa fa-user"></i>

						     	</div>

								    <p class="error-message">
							       		<span  v-if="$parent.errors.user_name[0]" v-text="$parent.errors.user_name[0]"></span>
							       	</p>
			     
			        	
				     		</div>
				        <label for="password">
						کلمه عبور را وارد کنید				     	
					        </label>
				     	<div class="row">
				     		
				    
				     		<div class="col-xs-6 pull-right">
				     			
					     		<div class="input-wrapper  password-wrapper">

						     		<input 
						     		 v-model="password" 
						     		 id="password" 
						     		 type="password"
						     		 class="dire"
						     		 placeholder="کلمه عبور" 

						     		 >

						     		<i class="fa fa-lock"></i>

					     	 	</div>

				     		</div>

				     		<div class="col-xs-6 ">
				     			
					     		<div class="input-wrapper password-wrapper">

						     		<input 
						     		 v-model="rePassword" 
						     		
						     		 id="re-password" 
						     		 type="password"
						     		 class="dire"
						     		 placeholder="تکرار کلمه عبور"  
						     		 minlength="20"
						     		 >

						     		<i class="fa fa-lock"></i>

					     	 	</div>

				     		</div>

				     

			        </div>



			       	<p class="error-message">
			       		<span  v-if="error " v-text="error"></span>
			       	</p>
			        <button class="submit-button disabled " @click.prevent="submitForm()" >
			        	مرحله بعد
					</button>

		     </div>
		</div>
		
    </div>
</template>

<script> 

	export default{
		data:function(){
			return{
				password : '',
				rePassword : '',
				userName : '',
				passwordCurrect:false,
				error : ''
			}
		},
		methods:{
			 submitForm(){

			 	if (this.password != this.rePassword) {

			 		this.error = "کلمه عبور مطابقت ندارد"
			 		$('#password').addClass('error').removeClass('active');
			 		$('#re-password').addClass('error').removeClass('active');

			 	}else if(this.userName.length < 3){
			 		this.$parent.errors.user_name = ['نام کاربری باید حد اقل 3 حرف و بدون فاصله باشد'];
			 		$('#user-name').addClass('error').removeClass('active');

			 	}else if (this.password.length < 8) {

			 		this.error = "رمز عبور حداقل ۸ کاراکتر باشد "
			 		$('#password').addClass('error').removeClass('active');

			 	}else if(this.password.length == 0 && this.password.length == 0 ){
			 		this.error = "کلمه عبور را وارد کنید";
			 		$('#password').addClass('error').removeClass('active');
			 		$('#re-password').addClass('error').removeClass('active');
			 	}else{
			 		this.error = '';
			 		$('#password').addClass('active').removeClass('error');
			 		$('#re-password').addClass('active').removeClass('error');
			 		this.formIsFill();
			 		this.$parent.setAccount();
			 	}
		 		
		 	 },
		 	 formIsFill(){
		 	 	if (this.passwordCurrect && this.userName ) {

		 	 		this.$parent.step3.user_name = this.userName;
		 	 		this.$parent.step3.password = this.password;
		 	 		this.$parent.step3.re_password = this.rePassword;



			 		$('#user-name').addClass('active').removeClass('error');
			 		$('#password').addClass('active').removeClass('error');
			 		$('#re-password').addClass('active').removeClass('error');
		 	 		$('.submit-button').removeClass('disabled').addClass('active');
		 	 	}else{
		 	 		$('.submit-button').removeClass('active').addClass('disabled');
		 	 	}
		 	 }
		},
	    watch: {
	  	  'userName': function(value) {
	  	  	this.$parent.errors.user_name = ''
	  	  	var element = $('#user-name');
	  	  	element.removeClass('active');
	  	  	element.removeClass('error');

	    		if (value.length >= 3) {

	    			element.addClass('active').removeClass('err');

	    		}else{

	    			element.removeClass('active');
	    		
	    		}
	    		 this.formIsFill();
	      },
	      'password': function(value) {
	  	  	var element = $('#password');
	  	  	var nextElement = $('#re-password');
	  	  	element.removeClass('active');
	  	  	element.removeClass('error');
	  	  	nextElement.removeClass('active');
	  	  	nextElement.removeClass('error');

	    		if (value.length > 7) {

	    			element.addClass('active');

	    		}else{

	    			element.removeClass('active');
	    		
	    		}
	    		 this.formIsFill();

	      },
	      'rePassword': function(value) {
	  	  	var element = $('#re-password');
	  	 	var nextElement = $('#password');
	  	  	element.removeClass('active');
	  	  	element.removeClass('error');
	  	  	nextElement.removeClass('active');
	  	  	nextElement.removeClass('error');

	    		if (value.length > 7) {

	    			element.addClass('active');

	    		}else{

	    			element.removeClass('active');
	    		
	    		}

	    		if (this.password == this.rePassword) {
					this.passwordCurrect = true; 		
			 	}
	    		 this.formIsFill();

	      },

	    },
	    mounted(){
	    	this.userName = this.$parent.step3.user_name;
	    	this.password = this.$parent.step3.password;
	    	this.rePassword = this.$parent.step3.re_password;
	    }
	}

</script>