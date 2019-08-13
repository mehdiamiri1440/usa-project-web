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
		     ثبت موبایل
		 </h2>

		 <div class="form-contents col-xs-12">

		     	<div class="row">
		     		
			     	<label for="phone-number">
			     		لطفا شماره موبایل خود را وارد کنید
			     	</label>
			    
			     	<div class="input-wrapper phone-number-wrapper">
			     		<input 
			     		v-model="phoneNumber" 
			     		:class="{'error' : $parent.errors.phone[0]}" 
			     		id="phone-number" 
			     		type="number"
			     		class="dire"
			     	    placeholder="09123456789"
			     	    pattern="[0-9]*"
			     		>

			     		<i class="fa fa-phone-square"></i>
			     	</div>
			     		
			     	<span class="small-description">
			     		 پس از وارد کردن شماره موبایل ما یک کد برای شما ارسال میکنیم تا از صحت شماره وارد شده اطمینان حاصل کنیم 

			     	</span>
			       	
			       	<p class="error-message">
			       		<span  v-if="$parent.errors.phone" v-text="$parent.errors.phone[0]"></span>
			       	</p>
			        <button class="submit-button disabled " @click.prevent="getPhoneNumber()" >
			        	ارسال کد تایید
					</button>

		     </div>
		</div>
		
    </div>
</template>

<script> 

	export default{
		data:function(){
			return{
				phoneNumber : this.$parent.step1.phone,	
			}
		},
		methods:{
			 getPhoneNumber(){
				this.$emit("getPhoneNumber", this.phoneNumber);
		  	 	if(this.$parent.errors.phone.length <= 0){
		  	 		$('#phone-number').addClass('error');
	    			$('.submit-button').removeClass('active').addClass('disabled');
	    	
		  	 	}else{
		  	 		$('#phone-number').addClass('removeClass').addClass('active');
	    			$('.submit-button').removeClass('active').addClass('disabled');
	    	
		  	 	}
		 		
		 	 },
		 	 checkPhoneIsfill(){
		 	 	var element = $('#phone-number').val();
		 	 	if (element.length >= 11) {
	    			$('#phone-number').addClass('active');
	    			$('.submit-button').removeClass('disabled').addClass('active');

	    		}else{
	    			$('#phone-number').removeClass('active');
	    			$('.submit-button').removeClass('active').addClass('disabled');
	    		}
		 	 }
		},
	    watch: {
	  	  'phoneNumber': function(value) {
	  	  	this.$parent.errors.phone[0] = '';
	  	  	$('#phone-number').removeClass('active');
	  	  	$('#phone-number').removeClass('error');

	  	  	if(this.phoneNumber.length >= 11){
	  	  		this.phoneNumber = this.phoneNumber.substring(0,11);
	  	  		$('.submit-button').focus();
	  	  	}
	    	this.checkPhoneIsfill();
	      }
	    },
	    mounted(){	
	    	this.checkPhoneIsfill();
	    }
	}

</script>