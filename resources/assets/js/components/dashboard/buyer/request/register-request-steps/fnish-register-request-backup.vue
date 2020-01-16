
<style scoped>

	p{
		line-height: 1.618;
		text-align: center;
	}

	label{
		margin: 0 auto 9px auto;
	}

	.submit-button{

		background: #DDDDDD;
		color: #fff;
		border: none;
		border-radius: 4px;
		display: inline-block;
		font-size: 16px;
		padding: 10px 30px 9px;
		transition: 200ms;
		cursor: default;
		margin: 8px 0;

    }

    .submit-button.active{
		background: #00C569;
		cursor: pointer;
    }

    .title-contents{

    	font-weight: bold;
    	font-size: 19px;
		margin-bottom: 15px;

    }

    .form-contents{
    	margin: 5px auto;
    }

    .form-contents lable{
    	font-size: 12px;
    }

    .input-wrapper,.text-input-wrapper{
   		margin: 6px auto;

    	position: relative;

    }

    .input-wrapper:after{
		content: "\F107";

		color: #777;

		position: absolute;

		display: inline-block;

		top: 6px;

		font-family: "Font Awesome 5 Free",sans-serif;

		font-weight: 900;

		left: 15px;

		font-size: 20px;

		z-index: 0;

    }

    input{
    	width: 100%;

		border-radius: 4px;

		border: 1px solid;

		padding: 8px 15px ;

		color: #BEBEBE;

		border-color: #BEBEBE;

		direction: rtl;

		transition: 300ms;

		background: #fff;
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
		border-color: #333;

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
    		color: #333;
		color: #00C569;
    }

    select.active:focus {
		color: #00C569;
    }

    select.error {
    		color: #333;
		color: #e41c38;
    }

    select.error:focus{
		color: #e41c38;
    }
    .error-message{

    	text-align: center;

		color: #e41c38;

		font-weight: bold;

		height: 15px;

	    direction: rtl;

		font-size: 11px;
    }

    .background-blue{

        background: #000546 !important;

    }

    .small-description{

         font-size: 11px;

         font-weight: bold;

         color: #777777;

         line-height: 1.618;

    }

    .list-item-wrapper{

		background: #f8f8f8;
		box-shadow: 0 5px 10px #c5c5c5;
		border: none;
		margin: 20px auto;
		padding: 4px 0;

    }
    .list-item-wrapper > p{

		float: right;
		padding: 0;
		padding-top: 12px;

    }
    .send-message{

    	padding: 0;
    	text-align: center;

    }
    .send-message .submit-button{

        display: inline-block;
    	font-size: 14px;
		padding: 7px 15px;

    }

    .send-message a.submit-button:before{

        content: none;

    }
    .main-description{
    	margin-top: 25px;
    }
    .red-text{
		color: #e41c38;

    }

    .blue-background{

        background: #000546 !important;

    }
    @media screen and (max-width: 767px){
		.input-wrapper {
		    padding: 0 5px;

		}
		select{
			font-size: 12px;
		}
		.input-wrapper::after {
		    left: 14px;
		}
	}
</style>

<template>
	<div>


		 <div class="form-contents ">

			    	<div class=" col-xs-12 ">

				     	<div class="text-input-wrapper">


				     		<p class="main-description">
                                درخواست خرید شما پس از تایید کارشناسان اینکوباک برای کشاورزان و تامین کنندگان مرتبط ارسال میشود.
				     		</p>

                           <div v-if="$parent.relatedProduct">


	                            <p class="main-description"  ><strong>یکی از مرتبط ترین محصولات برای درخواست خرید شما در زیر نمایش داده شده است.
	                            	<br/>
	                            	<span class="red-text">در صورت عدم ارسال پیام به فروشنده دیگر به این محصول دسترسی نخواهید داشت.</span></strong>
	                            </p>

								 <div class="list-group-item list-item-wrapper  col-xs-12" >
									<p class="list-title  col-xs-12">
										<span>{{$parent.relatedProduct.category_name}}</span> <span> | </span> <span>{{$parent.relatedProduct.subcategory_name}}</span> <span> | {{$parent.relatedProduct.product_name}}</span>
									</p>
									<p class="needs  col-xs-12">
										<span class="static-content">
	                            			میزان موجودی :
	                        			</span>
	                        			<span>{{$parent.relatedProduct.stock}}</span>
	                        			<span class="static-content">
	                            				کیلوگرم
	                       	            </span>
	                       			</p>
	                       			<p class="list-time  col-xs-12">
	                                    {{$parent.relatedProduct.register_date}}
	                       		    </p>

	                       		    <div class="send-message  col-xs-12">
	                                    <router-link class="submit-button active blue-background" :to="$parent.getProductUrl()" target="_blank">
	                       		    		 جزییات محصول
	                     				</router-link>

                       		    	<button class="submit-button active " @click.prevent="$parent.openChat($parent.relatedProduct)">
                       		    		 <i style="position:relative;top:2px;font-size: 12px;left: 2px;" class="fa fa-comment-alt"></i>
                                        پیام به فروشنده
                     				</button>

      								</div>

      							</div>

                            </div>

                            <div class="text-center margin-15-0" v-else>
                            	   <router-link class="submit-button active" :to="{name : 'productList'}">
                       		    		  لیست محصولات
                     				</router-link>

                            </div>

<!--

                                    <button class="submit-button active" @click.prevent="$parent.getProductUrl()">
                       		    		 پیام به فروشنده
                     				</button>
-->



				     	</div>

				    </div>

			      <!--  <div class="col-xs-12">
			       	<div class="text-center">
			       		 <button class="submit-button active "

			       		 	@click.prevent="$parent.reLoadPage()"
			       		   >
			        		ثبت درخواست جدید

		        	  </button>
			       	</div>
			       </div> -->
		</div>

    </div>
</template>

<script>


</script>
