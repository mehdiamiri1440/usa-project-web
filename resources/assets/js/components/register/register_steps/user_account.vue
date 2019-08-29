<style scoped>
	
	.text-red{
		color: red;
	}	
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


    input.active{
		border-color: #00C569;
		color: #333;
    }

    input.active + i{
		color: #00C569;
    }

    input.active:focus ,  input.active:focus + i , input.active + i {
		border-color: #00C569;
    }

    input.error {
    		color: #333;
		border-color: #e41c38;
    }

    input.error + i{
		color: #e41c38;
    }

    input.error:focus ,  input.error:focus + i  {
		border-color: #e41c38;
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

				        		یک نام کاربری  
				        		<span class="text-red">(انگلیسی و بدون فاصله)</span>
				        		 وارد کنید

						</label>
				    
				     	<div class="input-wrapper col-xs-12 user-name-wrapper">

				     		<div class="row">
				     			<input 
						     	 	 v-model="userName" 
						     		 :class = "{'error' : $parent.errors.user_name[0], 'active' : userName.length >= 3 }"
						     		 id="user-name" 
						     		 type="text"
						     		 class="dire"
						     		 placeholder="مثال : alizade_1357"  
						     		 maxlength="20"
						     		 >

						     		<i class="fa fa-user"></i>

						     	</div>

								     <p class="error-message">
							       		<span  v-if="$parent.errors.user_name[0]" v-text="$parent.errors.user_name[0]"></span>
							       	</p>
			     
			        	
				     		</div>

				     	<div class="row">
				     		
				    
				     		<div class="col-xs-6 pull-right">
				     				<label for="password">
									کلمه عبور را وارد کنید				     	
								    </label>

					     		<div class="input-wrapper  password-wrapper">

					     		
						     		<input 
						     		v-model="password" 
						     		 :class = "{'error' : $parent.errors.password[0], 'active' : password.length}"
						     		 id="password" 
						     		 type="password"
						     		 class="dire"
						     		 placeholder="کلمه عبور" 

						     		 >

						     		<i class="fa fa-lock"></i>

					     	 	</div>

					     	 	<p class="error-message">
							       		<span  v-if="$parent.errors.password[0]" v-text="$parent.errors.password[0]"></span>
							    </p>

				     		</div>

				     		<div class="col-xs-6 ">
				     				<label for="password">
					     				تکرار کلمه عبور
									</label>
					     		<div class="input-wrapper password-wrapper">

					     		
						     		<input 
						     		 v-model="rePassword" 
						     		 :class = "{'error' : $parent.errors.password_conf[0], 'active' : rePassword.length}"
						     		 id="re-password" 
						     		 type="password"
						     		 class="dire"
						     		 placeholder="تکرار کلمه عبور"  
						     		 minlength="20"
						     		 >

						     		<i class="fa fa-lock"></i>

					     	 	</div>

				     		</div>
				     		   <p class="error-message">
							       		<span  v-if="$parent.errors.password_conf[0]" v-text="$parent.errors.password_conf[0]"></span>
							    </p>
				     

			        </div>

			       
			        <button class="submit-button disabled " 
			        :class="{'active' : password.length && rePassword.length && userName.length >=3}"
			        @click.prevent="$parent.setAccount()" >
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
			}
		},
	    watch: {
	  	  'userName': function(value) {

	  	    this.$parent.step3.user_name = this.userName;

	      },
	      'password': function(value) {

	  	  	this.$parent.errors.password = '';
	  	  	this.$parent.step3.password = this.password;

	      },
	      'rePassword': function(value) {

	  	  		this.$parent.errors.password_conf = '';
	  	  		this.$parent.step3.re_password = this.rePassword;
	      },

	    },
	    mounted(){
	    	this.userName = this.$parent.step3.user_name;
	    	this.password = this.$parent.step3.password;
	    	this.rePassword = this.$parent.step3.re_password;
	    }
	}

</script>