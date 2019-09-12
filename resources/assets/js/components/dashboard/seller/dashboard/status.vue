<style scoped>
   	.green-button{
   		margin: 0;
   	}

   	.blue-brand-background {
   		background: #000546;
   	}

   	.header-links-wrapper a{
   		margin-top: 30px;
   		margin-left: 15px;
   	}
    .title {
        text-align: right;
        padding: 15px 0;
		border-bottom: 2px solid #E8E8E8;
    }

    .title h1 {

        font-size: 30px;
        font-weight: bold;

    }

    .boxes {
    	margin: 15px auto;
    }

    .box {

		background: #fff;

		border-radius: 4px;

		box-shadow: 0 3px 10px rgba(0,0,0,0.16);

		padding: 0;

		overflow: hidden;

		position: relative;

		top: 0;

    	transition: 300ms;

    	height: 180px;

    	margin: 15px 0;
    }

    .box:hover {
    	transition: 300ms;
		box-shadow: 0 8px 10px rgba(0,0,0,0.3);
		top: -5px;
    }

    .box:hover .box-icon{
		animation: shake 2.8s cubic-bezier(.36,.07,.19,.97) both;
    }

    .box .box-title{

    	font-size: 17px;

		padding: 15px 10px 0;

    }

    .box-main{

    	padding: 0 10px;

		position: relative;

		margin: 27px auto;

    }

    .content-wrapper{
    	
    	font-size: 28px;
    	
    	font-weight: bold;

    }

    .box .box-icon{

    	opacity: 0.35;

		font-size: 76px;

		position: absolute;

		left: 10px;

		top: -5px;

    }

    .box a{

    	width: 100%;

		position: relative;

		border-radius: 0;

    }

    .box-upgrade-link{
    	margin-top: 54px;
    }


	@keyframes shake {

	  10%, 90% {
	    transform: translate3d(0, -6px, 0);
	  }
	  
	  20%, 80% {
	    transform: translate3d(0, 0, 0);
	  }

	}

    @media screen and (max-width: 992px) {

        .list-title, .needs, .list-time {
            padding: 15px;
        }

    }

    @media screen and (max-width: 767px) {


        .title {
            text-align: center;

        }

    }

</style>
<template>
    <div>

        <section class="main-content col-xs-12"چپ77>
            <div  class="title col-xs-12">
                <div  class="row">
                    <div  class="col-xs-12 col-sm-4 pull-right">
                        <h1>
                            داشبورد
                        </h1>
                    </div> 
                    <div  class="col-xs-12 col-sm-4 pull-left text-left">
                        <a href="#" class="green-button blue-brand-background">
                        	  <i class="fa fa-list-alt"></i>
                            مشاهده تعرفه ها

                        </a>
                    </div> 

                </div>
            </div>
            <div  class="header-links col-xs-12">
                <div  class="row">
          			<div  class="header-links-wrapper"  >

                        <a v-for="link in linkItems" :href="link.href" class="green-button" >
                        	<i :class="link.icon"></i>
                        	<span v-text="link.text"></span>
                        </a>

                    </div> 	
                </div>
            </div>

            <div class="boxes col-xs-12">

               <div class="row ">
                	<div v-for="box in boxes" class=" pull-right col-xs-12 col-sm-6 col-md-4 col-lg-3">
	                	<div  class="box">
	                		
	                			
	                			<div class="box-title">
	                				<span v-text='box.title'></span>
	                			</div>
	                			<div class="box-main">

	                				<div class="content-wrapper">
	                				<span v-if="box.status" v-text="box.status"></span>
	                				<span v-if="box.staticName" v-text="box.staticName"></span>
	                				</div>
	                				<i :class="box.icon" class="box-icon" :style="{ color : [box.iconColor]}"></i>

	                			</div>
	                			<div v-if="box.upgrade" class="box-upgrade-link">
	                				
	                				<a href="#" class="green-button blue-brand-background">
	                					<i class="fa fa-arrow-up"></i>
	                					ارتقاء به عضو ویژه
	                				</a>	
	                			
	                			</div>

	                	</div> 
               		</div>
               </div>

            </div>

            <div  class="boxes col-xs-12">

               <div class="row ">
                	<div v-for="items in 7" class=" pull-right col-xs-12 col-sm-6 col-md-4 col-lg-3">
	                	<div  class="box">
	                		
	                			<div class="box-title-default">
	                				<span class="content-half-width placeholder-content margin-15"></span>
	                			</div>
	                			<div class="box-main">

	                				<div class="content-wrapper">
	                				<span class="content-full-width placeholder-content margin-15"></span>
	                				<!-- <span v-if="box.staticName" v-text="box.staticName"></span> -->
	                				</div>
	                				<span class="default-icon pull-left placeholder-content"></span>

	                			</div>
	                			<div  class="box-upgrade-link ">
	                				<span class="content-full-width placeholder-content default-item-wrapper col-xs-12"></span>
	                			</div>

	                	</div> 
               		</div>
               </div>

            </div>
        </section>
    </div>
</template>


<script>

	export default{

		data:function(){
			return {
				linkItems : [
				    {
						href : '#',
						icon : 'fa fa-plus',
						text : 'افزودن محصول'
					},
				    {
						href : '#',
						icon : 'fa fa-list-alt',
						text : 'درخواست های خرید'
					},
				    {
						href : '#',
						icon : 'fas fa-comment-alt',
						text : 'پیام ها'
					}
				],
				boxes : [
					{
						title : 'نوع پلن فعال شما',
						icon : 'fas fa-address-card',
						iconColor : '#19668E',
						staticName : '',
						upgrade : true,
						status : 'شماره یک'
					},
					{
						title : 'تعداد محصولات ثبت شده',
						icon : 'fas fa-box-open',
						iconColor : '#FFAC58',
						staticName : 'محصول',
						upgrade : false,
						status : '10'
					},
					{
						title : 'تعداد محصولات قابل ثبت',
						icon : 'fas fa-boxes',
						iconColor : '#aa49c8',
						staticName : 'محصول',
						upgrade : true,
						status : '10'
					},
					{
						title : 'میزان امتیاز',
						icon : 'fas fa-star',
						iconColor : '#00C5BE',
						staticName : 'امتیاز',
						upgrade : false,
						status : '185'
					},
					{
						title : 'عداد درخواست های خرید ',
						icon : 'fas fa-inbox',
						iconColor : '#D8A679',
						staticName : 'درخواست',
						upgrade : true,
						status : '120'
					},
					{
						title : 'فروشنده معتبر',
						icon : 'fas fa-award	',
						iconColor : '#21AD93',
						staticName : '',
						upgrade : true,
						status : 'خیر'
					},	
					{
						title : 'احتمال پاسخگویی به پیام',
						icon : 'fa fa-chart-line',
						iconColor : '#FF8058',
						staticName : 'درصد',
						upgrade : true,
						status : '20'
					},					
				]
			}
		}
	}

</script>