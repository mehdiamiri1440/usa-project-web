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
    .timer-button{
    	background: none;

		border: 1px solid;

		color: #00C569;

		border-radius: 4px;

		padding: 3px 10px;

		margin-bottom: 9px;
		transition: 300ms;
		cursor: pointer;
    }
     .timer-button:hover{
    	background: #00C569;

		border: none;
	transition: 300ms;
		color: #fff;

	
    }
    .text-green{
    	color: #00C569
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
   	    margin: 13px auto 4px;
    	position: relative;
    }
    
    .timer-wrapper{
    	height: 38px;
    	text-align: center;
		font-size: 12px;

    }

    input{
    	
    	width: 100%;

		border-radius: 4px;

		border: 1px solid;

		padding: 8px 15px 9px 15px;

		color: #BEBEBE;

		direction: ltr;

		-webkit-transition: 300ms;

		transition: 300ms;

		text-align: center;

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
		 	تایید موبایل
		 </h2>

		 <div class="form-contents col-xs-12">

		     	<div class="row">
		     		
			     	<label for="verify-code">
					کد ارسال شده به شماره ی	     		
						<span class="text-green" v-text="$parent.step1.phone"></span>
			     		را وارد کنید

			     	</label>
			    
			     	<div class="input-wrapper verify-code-wrapper">
			     	
			     		<div class="row">	

				     		<div class="col-xs-3">
					     		<input v-model="verifycode1" 
					     		:class="{'error' : this.$parent.errors.verification_code|| $parent.step3.msg, 'active' : verifycode1.length}"
					     		id="verify-code-1" 
					     		type="number" 
					     		class="dire"
					     		placeholder="_"  
					     		max="9"
					     		onfocus="this.select();"
					     		pattern="[0-9]*"
					     		v-on:keyup="keymonitor($event,2)"

					     		 />
				     		</div>

				     		<div class="col-xs-3">
					     		<input v-model="verifycode2"
					     		:class="{'error' : $parent.errors.verification_code || $parent.step3.msg, 'active' : verifycode2.length}"
					     		id="verify-code-2" 
					     		type="number" 
					     		class="dire"
					     		placeholder="_"  
					     		max="9"
					     		onfocus="this.select();"
					     		pattern="[0-9]*"
					     		v-on:keyup="keymonitor($event,3)"

					     		 />
				     		</div>

				     		<div class="col-xs-3">
					     		<input v-model="verifycode3"
					     		:class="{'error' : $parent.errors.verification_code || $parent.step3.msg, 'active' : verifycode3.length }"
					     		id="verify-code-3" 
					     		type="number" 
					     		class="dire"
					     		placeholder="_"  
					     		max="9"
					     		onfocus="this.select();"
					     		pattern="[0-9]*"
					     		v-on:keyup="keymonitor($event,4)"


					     		 />
				     		</div>

				     		<div class="col-xs-3">
					     		<input v-model="verifycode4"
					     		:class="{'error' : $parent.errors.verification_code|| $parent.step3.msg, 'active' : verifycode4.length}"
					     		id="verify-code-4" 
					     		type="number" 
					     		class="dire"
					     		placeholder="_"  
					     		max="9"
					     		onfocus="this.select();"
					     		pattern="[0-9]*"
					     		v-on:keyup="keymonitor($event,5)"

					     		 />
				     		</div>

			     		</div>

			     	</div>
			     		
	
			       	<p class="error-message">
			       		<span
			       		 v-if="$parent.errors.verification_code "
			       	     v-text="$parent.errors.verification_code[0]"
			       		>
			       			
			       		</span>


			       		<span
			       		 v-if=" $parent.step3.msg "
			       	     v-text=" $parent.step3.msg"
			       		>
			       			
			       		</span>
			       	
			       	</p>

                    <div class="timer-wrapper" >
                         <button
                        		
                                 class="timer-button"
                                 type="button"
                                 @click="reSendCode()"
                                 :disabled="$parent.step2.reSendCode === false"
                                 :value="$parent.step2.timeCounterDown">

                                 ارسال مجدد کد فعال سازی
							
		                     </button>
                    </div>

			        <button class="submit-button disabled " 
			        :class="{'active' : currentCode.length == 4}"
			        @click.prevent="getVerificationCode()" >
			        	بررسی کد
					</button>

		     </div>
		</div>
		
    </div>
</template>

<script> 

	export default{
		data(){
			return{

				verifycode1 : this.$parent.step3.verification_code.substring(0, 1),
				verifycode2 : this.$parent.step3.verification_code.substring(1, 2),
				verifycode3 : this.$parent.step3.verification_code.substring(2, 3),
				verifycode4 : this.$parent.step3.verification_code.substring(3, 4),
				currentCode : ''
			}
		},
		methods:{
			 reSendCode(){
			 	this.$parent.goToStep(2);
			 },
			 getVerificationCode(){
	
			 	this.sumCodeNumbers();
			 	this.$parent.verifyCode();
				
		 	 },
		 	 sumCodeNumbers(){
		 	 		
		 	 		this.currentCode =  this.verifycode1 + this.verifycode2 + this.verifycode3 + this.verifycode4;
		 	 		if (this.currentCode.length == 4) {
		 	 			this.$parent.step3.verification_code = this.currentCode
		 	 		}
		 	 },
		 	 tabTopNext(element){
		 	 	  $(element).focus();
			 },
			 keymonitor: function(event,index) {
			       

			       var keyWatch = this.$parent.toLatinNumbers(event.key);
		
			       	if(
			       		(event.keyCode >= 48 && event.keyCode <= 57)
			       	 || (event.keyCode >= 96 && event.keyCode <= 105 )
			       	 || (keyWatch >= 0 && keyWatch <= 9)
			       	 ){

			       	if (index <= 4) {
			       		  this.tabTopNext('#verify-code-' + index);
			       	}
				       
				         
			         }
			   },
			
		 },
	    watch: {
	  	  'verifycode1': function(value) {
	  	  	this.$parent.errors.verification_code = ''
	  	  	this.sumCodeNumbers();
	  	  	this.verifycode1 = this.verifycode1.substring(0,1);
	      },
	      'verifycode2': function(value) {
	      	this.$parent.errors.verification_code = ''
	      	this.sumCodeNumbers();
	  	  	this.verifycode2 = this.verifycode2.substring(0,1);

	      },
	      'verifycode3': function(value) {
	      	this.$parent.errors.verification_code = ''
	      	this.sumCodeNumbers();
	  	  	this.verifycode3 = this.verifycode3.substring(0,1);

	      },
	      'verifycode4': function(value) {
	      	this.$parent.errors.verification_code = ''
	      	this.sumCodeNumbers();
	  	  	this.verifycode4 = this.verifycode4.substring(0,1);
	      }

	     
	    },
	    mounted(){
	    		if (this.$parent.isOsIOS()) {
	    			for (var i = 0; i <= 4; i++) {
	    				$('#verify-code-' + i).attr('type','text')
	    			}
		    		
		    	}	

	    	if (this.$parent.isOsIOS()) {
	    		$('#phone-number').attr('type','text')
	    	}
	    }
	  
	}

</script>