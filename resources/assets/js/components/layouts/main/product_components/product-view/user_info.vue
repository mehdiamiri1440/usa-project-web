<style scoped>
		
	.green-button{
		
		font-size: 14px;
		font-weight: bold;
		padding: 10px 0;
	}
		
	.green-button-o{
		
		color: #00c569;
		background:none;
		border: 2px solid #00c569;
		padding: 8px 0;

	}

	.green-button-o:hover{

		background:#00c569;
		
	}

	.user-info-wrapper{
		padding: 30px 20px;
		text-align: center;
		font-weight: bold;
	}

	.user-info-wrapper.active{
		padding: 28px 20px;
		border: 2px solid #00C569;
	}

	.user-information-content-image{
		position: relative;
	}

	.user-information-content-image .user-image{
		width: 90px;
		height: 90px;
		position: relative;

	}

	.valid-icon{
		background: #00C569;

		width: 31px;

		height: 31px;

		border-radius: 50px;

		padding-top: 3px;

		position: absolute;

		bottom: -12px;

		right: auto;

		left: 50%;

		margin-left: -15px;
	}

	.user-information-content p{

		font-size: 18px;

		font-weight: bold;

		color: #333;

	}

	.user-information-content p.user-position{
		
		font-size: 12px;


		color: #777;

	}

	p.user-valid-text{

		font-size: 13px;

		font-weight: bold;

		color: #00c569;

	}

	@media screen and (max-width: 1199px){

		.user-info-wrapper{

			overflow: hidden;

		}

	    .user-information-content-image, .default-wrapper-main-image, .default-image-info{

	    	float: right;

	    }

	    .user-information-content{

	    	float: right;

			text-align: right;

			margin-right: 15px;

			padding-top: 6px;

	    }

	    .user-info-actions, .default-user-action-buttons{
	    	float: left;
	    }

	    .valid-icon{


		    width: 34px;
		    height: 34px;

		    padding-top: 3px;

		    bottom: initial;
			top: -2px;
			right: -6px;
			left: initial;
		    border: 2px solid white;

		}

		.green-button{

				padding: 7px 0;

		}

		.user-info-actions a:first-of-type{

			margin-top: 0

		}

		.default-image-info{

			width: 40%;

			text-align: right;

			margin-top: 27px;

			margin-right: 15px;

		}

		.default-user-action-buttons{
			width: 160px;
		}

	}

	@media screen and (max-width: 767px){

		.default-user-action-buttons{
			width: initial;
		}

		.user-info-wrapper{

			overflow: inherit;

		}

	    .user-information-content-image, .default-user-action-buttons, .default-wrapper-main-image, .default-image-info{

	    	float: inherit;

	    }

	    .user-information-content, .default-image-info{

	    	float: inherit;

			text-align: inherit;

			margin-right: inherit;

			padding-top: inherit;

	    }

	    .user-info-actions{

	    	float: inherit;

	    }

	    .valid-icon{


				width: 31px;

				height: 31px;

				top: initial;

				bottom: -12px;

				right: auto;

				left: 50%;


		}

		.green-button{
			
				padding: 10px 0;
				
		}
		

		.user-info-actions a:first-of-type{
			
			margin-top: 15px
			
		}

		.default-image-info{

			text-align: center;

			margin: 15px auto;

			padding: 0;

		}

	}
</style>
<template>
	<div v-if="$parent.product.user_info" class="user-info-wrapper wrapper-bg" :class="{ 'active': $parent.product.user_info.active_pakage_type != 0 }">
		<a v-if :href="'/profile/'+ $parent.product.user_info.user_name"  class="user-information-link">
                       <div class="user-information-content-image">
                          <div class="user-image" v-if="$parent.product.profile_info.profile_photo">
                              <img v-bind:src=" '/storage/' + $parent.product.profile_info.profile_photo">
                            
                          </div>

                          <div class="user-image" v-else>
                              <img :src="$parent.defultimg" class="image_defult">
	                             
                          </div>
 <div class="valid-icon"  v-if="$parent.product.user_info.active_pakage_type != 0">

		                           	<svg width="21.75" height="21.68" viewBox="0 0 24.965 30.574">
				                        <g id="incobac-icon" data-name="incobac" transform="translate(-273.1 -715.025)">
				                            <path id="Subtraction_1" data-name="Subtraction 1"
				                                  d="M-1951.5,35.792a12.419,12.419,0,0,1-8.839-3.661A12.419,12.419,0,0,1-1964,23.292a12.361,12.361,0,0,1,1.378-5.71,12.614,12.614,0,0,1,3.679-4.333l3.175,3.175a7.967,7.967,0,0,0-3.732,6.768,8.009,8.009,0,0,0,8,8,8.036,8.036,0,0,0,7.917-6.85l2.185-2.149,2.34,2.3a12.464,12.464,0,0,1-4.012,8.026A12.467,12.467,0,0,1-1951.5,35.792Zm12.465-13.44,0,0-2.361-2.33-2.169,2.14a8.029,8.029,0,0,0-4.052-5.965l3.2-3.2a12.44,12.44,0,0,1,5.381,9.357Z"
				                                  transform="translate(2237.1 709.808)" fill="#fff"/>
				                            <g id="Group_24" data-name="Group 24">
				                                <path id="Rectangle_12" data-name="Rectangle 12"
				                                      d="M3,0H9.5a0,0,0,0,1,0,0V5.5a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V3A3,3,0,0,1,3,0Z"
				                                      transform="translate(282.389 717.5) rotate(45)" fill="#fff"/>
				                                <path id="Rectangle_13" data-name="Rectangle 13"
				                                      d="M0,0H13.5a0,0,0,0,1,0,0V5a0,0,0,0,1,0,0H4A4,4,0,0,1,0,1V0A0,0,0,0,1,0,0Z"
				                                      transform="translate(294.935 718.561) rotate(135)" fill="#fff"/>
				                            </g>
				                        </g>
				                    </svg>

	                         	  </div>
                      </div>

                      <div class="user-information-content">

                      	  <p class="user-position">
                      	  	فروشنده
                      	  </p>
                          
                          <p v-if="$parent.product.user_info" v-text="$parent.product.user_info.first_name + ' ' +
            $parent.product.user_info.last_name"></p>

                          <p v-if="$parent.product.user_info.active_pakage_type != 0" class="user-valid-text">                 
	                        	کاربر تایید شده
	                      </p>
                      </div> 

                      <div class="user-info-actions">

	                      <a :href="'/profile/'+ $parent.product.user_info.user_name" class="green-button green-button-o">
	                      	مشاهده پروفایل
	                      </a>

	                      <a  v-if="!$parent.isMyProfile" href="#" @click.prevent="$parent.openChat($parent.product)" class="green-button">
	                      	ارسال پیام
	                      </a>

	                      <a  v-else href="/dashboard/profile"  class="green-button ">
	                      	ویرایش پروفایل
	                      </a>

	                      
                      </div>
                  </a>
	</div>


	<div class="user-info-wrapper default-user-info-wrapper wrapper-bg" v-else>
		<div class="default-wrapper-main-image placeholder-content text-center">
			
		</div>

		<div class="default-image-info text-rtl text-center margin-15-0">
			<span class="placeholder-content content-half-width inline-block"></span>
			<span class="placeholder-content content-default-width inline-block"></span>
		</div>
		<div class="default-user-action-buttons">
			<div class="placeholder-content default-button-full-with margin-0"></div>
			<div class="placeholder-content default-button-full-with margin-10-0"></div>

		</div>
	</div>
</template>
