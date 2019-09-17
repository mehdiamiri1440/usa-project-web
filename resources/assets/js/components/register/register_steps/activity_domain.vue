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

	padding: 8px 15px 9px;

	color: #BEBEBE;

	direction: ltr;

	-webkit-transition: 300ms;

	transition: 300ms;

	margin-top: 7px;

	direction: rtl;

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




    .radio-wrapper{
    	margin: 10px auto;
    }

	.label-radio {

	display: inline-block;

	position: relative;

	cursor: pointer;



	-webkit-user-select: none;

	-moz-user-select: none;

	-ms-user-select: none;

	user-select: none;

	direction: rtl;

	padding: 8px 30px 8px 13px;

	font-size: 14px;

	}
	.label-radio:nth-of-type(2){
		margin-left: 16px;
	}
	/* Hide the browser's default radio button */
	.label-radio input {
		position: absolute;

		opacity: 0;

		cursor: pointer;

		z-index: 1;

		left: 0;

		right: 0;

		top: 0;

		bottom: 0;

		height: 100%;

		margin: 0;
	}

	/* Create a custom radio button */
	.checkmark {
	 position: absolute;

	 top: 16px;

	 right: 13px;

	 height: 12px;

	 width: 12px;

	 background-color: #eee;

	 border-radius: 50%;
	}

	/* On mouse-over, add a grey background color */
	.label-radio:hover input ~ .checkmark {
	  background-color: #ccc;
	}

	/* When the radio button is checked, add a blue background */
	.label-radio input:checked ~ .checkmark {
		  background-color: #00C569;
	}

	.label-radio input:checked ~ label::after{
		  border-color: #00C569;
	}


	.label-radio label::after{

		content: "";

		display: block;

		position: absolute;

		left: 0;

		right: 0;

		top: -2px;

		bottom: 0;

		z-index: 0;

		margin: 0;

		padding: 0;

		border-radius: 3px;

		border: 1px solid #BDC4CC;

	}

	.label-radio.error label::after{
		border: 1px solid #e41c38;
	}
	.label-radio label svg{
		width: 20px;
		height: 30px;
		float: right;
	}
	.label-radio label span{
		margin: 5px;
		position: relative;
		top: 5px;
	}

    .cls-1 {

	    fill: #333;
    }
    .cls-2 {
		fill: #333;
	}




	  select{

	    	width: 100%;

			border-radius: 4px;

			border: 1px solid;

			padding: 8px 15px;
			position: relative;

			z-index: 1;

			color: #777777;

			direction: rtl;

			transition: 200ms;

			background: none;

			appearance:none;
			-webkit-appearance:none;
			-moz-appearance:none;
			-ms-appearance:none;



	    }
	    .input-wrapper i {
	    	display: inline-block;

			position: absolute;

			left: 15px;

			font-size: 20px;

			color: #BEBEBE;

			top: 9px;

			transition: 200ms;
	    }

	     select option{
			color: #333;
	    }

	    select:focus{
			color: #333;
	    }

	    select.active{
			color: #00C569;
	    }

	    select.active:focus {
			color: #00C569;
	    }

	    select.error {
			color: #e41c38;
	    }

	    select.error:focus{
			color: #e41c38;
	    }

	    .input-wrapper:after{
		content: "\F107";

		color: #777;

		position: absolute;

		display: inline-block;

		top: 9px;

		font-family: "Font Awesome 5 Free",sans-serif;

		font-weight: 900;

		left: 25px;

		font-size: 20px;

		z-index: 0;

    }




    @media screen and (max-width: 767px){
		.input-wrapper {
		    padding: 0 5px;

		}
		select{
			font-size: 12px;
		}
		.input-wrapper[data-v-3cdb4684]::after {
		    left: 14px;
		}
	}
</style>

<template>
	<div>
		 <h2 class="title-contents">

			حوزه فعالیت

		 </h2>

		 <div class="form-contents col-xs-12">

		     	<div class="row">

			     	<label for="activityType">
			     		نوع فعالیت خود را مشخص کنید
			     	</label>


			    	  <div class="radio-wrapper">

			    	  	<div class="label-radio">

							  <input
							   v-model="activityType"
							   type="radio"
							   value="1"
							   name="radio"
						       :checked="'1'  == $parent.step4.activity_type"
							   />

							  <span class="checkmark"></span>

							  <label>
							  	<svg xmlns="http://www.w3.org/2000/svg" width="16.55" height="20.411" viewBox="0 0 16.55 20.411">

							  <path id="Path_7" data-name="Path 7" class="cls-2" d="M15.781,12.574l-3.81-1.1a1.017,1.017,0,0,1-.2-.082.333.333,0,0,0-.16-.105,1.036,1.036,0,0,1-.388-.8V9.419a3.676,3.676,0,0,0,1.233-2.747V3.784a3.684,3.684,0,1,0-7.368,0V6.672A3.675,3.675,0,0,0,6.286,9.385v1.094a1.037,1.037,0,0,1-.745.991l-3.812,1.1A2.407,2.407,0,0,0,0,14.875v4.567a.337.337,0,1,0,.674,0V14.875a1.73,1.73,0,0,1,1.243-1.654l1.415-.409a.331.331,0,0,0,.026.032L5.17,14.656a1.38,1.38,0,0,0,1.781.149l.636-.453a1.213,1.213,0,0,0,.45.722L6.613,21.943a.526.526,0,0,0,.127.451l1.425,1.894.031.036a.819.819,0,0,0,1.157,0l.017-.017,1.442-1.915a.528.528,0,0,0,.123-.455L9.515,15.073a1.213,1.213,0,0,0,.449-.721l.636.453a1.38,1.38,0,0,0,1.781-.149l1.834-1.834,1.38.4a1.73,1.73,0,0,1,1.243,1.654v4.567a.337.337,0,0,0,.674,0V14.875A2.407,2.407,0,0,0,15.781,12.574ZM10.012,1.05l-.03-.024.037.017ZM5.766,6.674V4.89q.186.018.373.018A3.936,3.936,0,0,0,8.918,3.761L9.929,2.751a1.531,1.531,0,0,1,.795.466,2.382,2.382,0,0,0,1.062.616v2.84a3.01,3.01,0,1,1-6.021,0Zm3.01,3.684A3.661,3.661,0,0,0,10.554,9.9v.582a1.706,1.706,0,0,0,.411,1.106l-1.9,1.351a1.17,1.17,0,0,0-.58,0L6.561,11.568a1.705,1.705,0,0,0,.4-1.089V9.873a3.66,3.66,0,0,0,1.816.484Zm-2.219,3.9a.708.708,0,0,1-.914-.077L4.064,12.6l1.664-.482A1.685,1.685,0,0,0,6.013,12L7.86,13.319c-.007.009-.015.016-.022.025Zm3.7,7.75-1.4,1.855a.144.144,0,0,1-.179,0l-1.4-1.855,1.383-6.681c.034,0,.067.005.1.005a.67.67,0,0,0,.1-.005ZM11.9,14.178a.708.708,0,0,1-.913.076l-1.28-.911c-.007-.009-.015-.016-.022-.025l1.83-1.3a1.685,1.685,0,0,0,.264.1l1.7.491Z" transform="translate(0 -0.1)"/>
							  <path id="Path_8" data-name="Path 8" class="cls-1" d="M199.657,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,199.657,230.69Z" transform="translate(-185.887 -215.15)"/>
							  <path id="Path_9" data-name="Path 9" class="cls-1" d="M51.407,230.69a.337.337,0,0,0-.337.337v3.862a.337.337,0,1,0,.674,0v-3.862A.337.337,0,0,0,51.407,230.69Z" transform="translate(-47.628 -215.15)"/>
							  <path id="Path_10" data-name="Path 10" class="cls-1" d="M101.82,98.128a2.188,2.188,0,0,0,2.022-1.39.337.337,0,1,0-.628-.244,1.5,1.5,0,0,1-2.793,0,.337.337,0,1,0-.628.244,2.188,2.188,0,0,0,2.028,1.39Z" transform="translate(-93.045 -89.797)"/>

								</svg>

								<span>

								خریدار

								</span>

							  </label>

						</div>

			    	    <div class="label-radio">
						  <input type="radio"
						  v-model="activityType"
						  value="0"
						  :checked="'0'  == $parent.step4.activity_type"
						  name="radio">
						  <span class="checkmark"></span>
						  <label>

						  	<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="17.511" height="24.462" viewBox="0 0 17.511 24.462">

								  <g id="Layer_1" data-name="Layer 1" transform="translate(0 0)">
								    <path id="Path_11" data-name="Path 11" class="cls-1" d="M14.915,13.164l-3.6-1.043a.98.98,0,0,1-.7-.936V10.3a.318.318,0,0,0-.018-.1,3.474,3.474,0,0,0,1.183-2.611V6.03H14.35V5.138H11.774V3.582a3.482,3.482,0,1,0-6.964,0V5.138H2.185V6.03H4.811V7.586a3.474,3.474,0,0,0,1.155,2.588.318.318,0,0,0-.026.127v.885a.98.98,0,0,1-.7.936L1.634,13.164A2.275,2.275,0,0,0,0,15.339v4.316a.318.318,0,0,0,.637,0V15.339a1.635,1.635,0,0,1,1.175-1.564l1.282-.369v6.627a.478.478,0,1,0,.955,0v-6.7a.475.475,0,0,0-.041-.191l1.223-.354v1.465a1.517,1.517,0,0,0,1.539,1.491H9.764A1.517,1.517,0,0,0,11.3,14.252V12.781l1.248.361a.477.477,0,0,0-.015.118v6.773a.478.478,0,1,0,.955,0V13.415l1.246.361a1.635,1.635,0,0,1,1.175,1.563v4.316a.318.318,0,1,0,.637,0V15.339A2.275,2.275,0,0,0,14.915,13.164ZM5.448,3.582a2.845,2.845,0,1,1,5.69,0V5.138H5.448Zm0,4V6.03h5.69V7.586a2.845,2.845,0,1,1-5.69,0ZM9.764,15.1H6.771a.88.88,0,0,1-.9-.854V12.517a1.62,1.62,0,0,0,.708-1.333v-.573a3.471,3.471,0,0,0,3.4.02v.55a1.62,1.62,0,0,0,.694,1.324v1.742a.88.88,0,0,1-.9.858Z" transform="translate(0 -0.1)"/>
								    <path id="Path_12" data-name="Path 12" class="cls-1" d="M101.307,118.036a2.068,2.068,0,0,0,1.911-1.314.318.318,0,1,0-.594-.231,1.414,1.414,0,0,1-2.64,0,.318.318,0,1,0-.594.231A2.068,2.068,0,0,0,101.307,118.036Z" transform="translate(-93.039 -108.888)"/>
								  </g>

							</svg>

							<span >

								فروشنده
							</span>



						  </label>
						</div>

			     	</div>

			     	<p class="error-message">
			       		<span  v-if="error" v-text="error"></span>
			       	</p>

			    	<label for="activity-domain">

 						حوزه فعالیت خود را مشخص کنید

 					</label>

 					<div class="input-wrapper activity-domain-wrapper ">

					     		<select
					     		v-on:change="getActivityDomain($event)"
					     		:class="{'error' :  error}"

				     			 id="activity-domain"
				     			 class="dire"
					     		>
                                        <option disabled selected>
                                            انتخاب کنید
                                        </option>
                                        <option
                                                v-for="category in $parent.step4.categoryList"
                                                :selected = "$parent.step4.categoryId == category.id"
                                                v-bind:value="category.id"
                                                v-text="category.category_name"
                                        >

                                        </option>
                                </select>

			     	</div>



			       	<p class="error-message">
			       		<span  v-if="$parent.errors.category_id[0]" v-text="$parent.errors.category_id[0]"></span>
			       	</p>

			        <button class="submit-button disabled "
			        :class = "{'active' : $parent.step4.formSubmitActive && activityType && isSelect }"
			         :disabled="!$parent.step4.formSubmitActive"
			         @click.prevent="finalStep()" >
					ثبت نهایی
					</button>

		     </div>
		</div>

    </div>
</template>

<script>

	export default{
		data:function(){
			return{
					activityDomain : this.$parent.step4.categoryId,
					activityType : this.$parent.step4.activity_type,
					error : '',
					isSelect : false
			}
		},
		methods:{
			 finalStep(){

					this.checkfildsIsCurrect();
					this.$parent.submitForm();

		 	 },
		 	 getActivityDomain(event){

		 	 	 if (event) {
		 	 	 	this.isSelect = true;
                    this.$parent.step4.formSubmitActive = true;
		 	 	 }
		 	 	 $('#activity-domain').removeClass('error').addClass('active');
		 	 	 this.$parent.setCategoryId(event);
		 	 	 this.fildsIsFill();

		 	 },
		 	 checkfildsIsCurrect(){
		 	 	this.fildsIsFill();
		 	 	$('.label-radio').removeClass('error');
		 	 	$('#activity-domain').removeClass('error');

		 	 	if (this.$parent.step4.activity_type == '') {
			 	 	  this.error = ' نوع فعالیت خود را مشخص کنید'
			 	 	  $('.label-radio').addClass('error').removeClass('active');
			 	 	  this.$parent.step4.formSubmitActive = true;
			 	}else if (this.$parent.step4.categoryId == '') {
			 		$('#activity-domain').addClass('error').removeClass('active');
			 	 	  this.$parent.step4.formSubmitActive = true;

			 	}



		 	 },
		 	 fildsIsFill(){

		 	 	 if(this.activityType != '' && this.$parent.step4.categoryId != ''){
		 	 	 	   $('.submit-button').removeClass('disabled').addClass('active');
		 	 	 	   $('#activity-domain').addClass('active').removeClass('error')
		 	 	}else{
		 	 		 $('.submit-button').removeClass('active').addClass('disabled');
                     this.$parent.step4.formSubmitActive = true;

		 	 	}
		 	 }
		},
	    watch: {
	  	  'activityType': function(value) {
	  			this.error = '';
	  			$('.label-radio').removeClass('error');
	  			this.activityType = value;
	  			this.$parent.step4.activity_type = this.activityType;
	  			this.fildsIsFill();

	      }
	    },
	    mounted(){

	    	this.activityType = this.$parent.step4.activity_type;
	    	this.activityDomain;
	    	this.fildsIsFill();
	    }
	}

</script>
