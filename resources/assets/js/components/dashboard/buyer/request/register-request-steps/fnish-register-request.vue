
<style scoped>



    h2{
    	font-size: 23px;
		font-weight: bold;
    }

    .main-text{
    	font-size: 17px;
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

	@media screen and (max-width: 1199px){
		.main-content-wrapper{
			padding: 0;
		}
	}
</style>

<template>
	<div>
		<header class="header-contents-wrapper text-center text-rtl  col-xs-12">
				<div class="header-contents shadow-content">
					<h2>
					<i class="fa fa-check green-text"></i>  درخواست شما با موفقیت ثبت شد
					</h2>
					<p class="main-text">
						تعدادی از مرتبط ترین محصولات برای درخواست خرید شما در زیر نمایش داده شده است

					</p>
					<p class="red-text ">
						 در صورت عدم ارسال پیام به فروشنده ها دیگر به این محصولات دسترسی نخواهید داشت.
					</p>
				</div>
		</header>

		<main class="main-content-wrapper">

			<finish-step-article v-for="(item , index) in 6" :key="index"/>
		</main>
    </div>
</template>

<script>

	import	FinishStepArticle from './finish-step-components/finish-step-article'

	export default{

		components:{
			FinishStepArticle
		},
		data(){
            return{
                assetsUrl : this.$parent.defimgitem
            }
		}


	}

</script>
