
<style scoped>
	.buttons-wrapper {
        margin: 15px auto;
        text-align: center;
    }

    .buttons-wrapper .green-button {
        width: initial;
        font-size: 16px;
        padding: 8px 20px;

    }

	.main-article-wrapper{
        margin-bottom:35px ;
    }

    h2{
    	font-size: 23px;
		font-weight: bold;
		margin-bottom: 10px;
    }

    .main-text{
    	font-size: 15px;
    }

    p{
    	line-height: 1.618;
    	font-weight: bold;
    }

    .header-contents{
    	background: #fff;
    	margin: 15px auto 30px;
    	padding: 15px;
    }

	.main-content-wrapper{
		padding: 0 50px;
	}

	.default-main-article{
		background: #fff;
	}

	@media screen and (max-width: 1199px){
		.main-content-wrapper{
			padding: 0;
		}
	}

	@media screen and (max-width: 992px){
		.header-contents-wrapper{
			padding: 0;
		}

		.header-contents{

			background:#fff;

			margin: 0 auto 30px;

			padding: 15px;

			border-radius: 0;

		}
	}
</style>

<template>
	<div>
		

		<div>
			<header class="header-contents-wrapper text-center text-rtl  col-xs-12" v-if="products">
					<div class="header-contents shadow-content">
						<h2>
						<i class="fa fa-check green-text"></i>  درخواست شما با موفقیت ثبت شد
						</h2>
						<p class="main-text text-rtl">
							تعدادی از مرتبط ترین محصولات برای درخواست خرید شما در زیر نمایش داده شده است.

						</p>
						<p class="red-text ">
							 در صورت عدم ارسال پیام به فروشنده ها دیگر به این محصولات دسترسی نخواهید داشت.
						</p>
					</div>
			</header>

			<header class="header-contents-wrapper text-center text-rtl  col-xs-12" v-else>
					<div class="header-contents shadow-content">
						<h2>
						<i class="fa fa-check green-text"></i>  درخواست شما با موفقیت ثبت شد
						</h2>
						<!-- <p class="main-text">
							تعدادی از مرتبط ترین محصولات برای درخواست خرید شما در زیر نمایش داده شده است

						</p> -->
						<p class="red-text ">
							 در صورت عدم ارسال پیام به فروشنده ها دیگر به این محصولات دسترسی نخواهید داشت.
						</p>
					</div>
			</header>

			<main class="main-content-wrapper">

				<div v-if="products">
					<finish-step-article v-for="(product , index) in products" :key="index"
						:product="product"
						:str="str"
					/>
				</div>

				<!-- <div v-else>
					<div class="default-placeholder-content" v-for="(item , index) in 6" :key="index">
						<article class="main-article-wrapper col-xs-12 col-sm-6 col-md-4 pull-right  ">
							<div class="default-main-article text-center shadow-content">
								<div class=" placeholder-content default-finish-step-image">
									
								</div>

								<div class="default-main-content text-center  padding-10">
									<p class="placeholder-content content-default-width margin-10-auto"></p>
									<p class=" placeholder-content content-half-width margin-auto">
									
									</p>
									<p class="placeholder-content default-button-full-with	"></p>
								</div>

							</div>
						</article>
					</div>
				</div> -->

				<div class="buttons-wrapper  col-xs-12">
					<router-link :to="{name : 'productList'}" class="green-button blue-button">
						مشاهده همه محصولات
					</router-link>
				</div>
			</main>

		</div>


		





    </div>
</template>

<script>

	import	FinishStepArticle from './finish-step-components/finish-step-article'

	export default{
		props:[
		  'products',
		  'str'
        ],
		components:{
			FinishStepArticle
		},
		data(){
            return{
                assetsUrl : this.$parent.defimgitem
            }
		},
		methods:{
			openChat:function(product){
				this.$parent.openChat(product);
			}
		}


	}

</script>
