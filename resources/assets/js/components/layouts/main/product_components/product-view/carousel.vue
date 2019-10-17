
<style scoped>

/* preloader image style*/
    .lds-ring {
     display: inline-block;

	position: absolute;

	width: 64px;

	height: 64px;

	left: 50%;

	top: 50%;

	transform: translate(-50%,-50%);

    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 5px solid #28a745;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #28a745 transparent transparent transparent;
    }
    .lds-ring-alt{
    	display: block;	
    	margin-top: 50px;
    	direction: rtl;
    	text-align: center;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /*preloader image style*/


</style>

<template>
	<div class="image-wrapper">

            <a v-show="isImageLoad"  :href="base + img">

            <transition>
                <img  :src="base + img" @load="ImageLoaded" :alt="alt">
            </transition>

            </a>

             <div v-show="!isImageLoad" class="lds-ring">
             	<div></div><div></div><div></div><div></div>

             </div> 
             <!-- <span v-text="alt" class="lds-ring-alt"></span> -->
     </div>
</template>

<script>
	
	export default{
		 data: function () {
            return {
                imgSrcs: '',
                isImageLoad:false,
            };
        },
        props:
		[
			'productImages',
			'str',
			'productName',
			'categoryName',
			'cityName',
			'provinceName',
		],
        props: ['img', 'base', 'popUpLoaded', 'alt'],
     
        mounted: function () {

            $(".owl-carousel").owlCarousel({
                loop:false,
                items:1,
                margin:10,
                nav:true,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                dots:true
            });
            $(this.$el).parent().parent().parent().magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                callbacks: {
                    open: function () {
                        if (!window.history.state) {
                            window.history.pushState({pushed: true}, '', '/product-list');
                        }

                        $(window).on('popstate', function (e) {
                            $.magnificPopup.close();
                        });
                    },
                }
            });
        },
        created:function(){
            this.loadImage();
        },
         methods: {
            loadImage: function (){
                this.isImageLoad = false;
            },
            ImageLoaded: function (){
                this.isImageLoad = true;
            }
        }
	}

</script>