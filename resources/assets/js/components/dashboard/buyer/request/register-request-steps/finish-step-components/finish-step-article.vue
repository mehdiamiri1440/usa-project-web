<style scoped>
    .main-article-wrapper{
        margin-bottom:35px ;
    }
    .main-article {
        background: #fff;
        overflow: hidden;
    }

    .article-image{
        height: 130px;
        overflow: hidden;
        position: relative;
        display: block;
        background: #f6f6f6;
    }

    .article-image img{
        display: block;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .main-content{
        padding: 10px;
    }

    h3.article-title{
        font-size: 16px;
        font-weight: bold;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 215px;
        margin: 0 auto 8px;
        height: 17px;
    }

    .main-content p{
        font-weight:bold;

    }

    .green-button{
        width: 100%;
        padding: 4px 0 5px;
        margin-top: 10px;
    }

    button i{
        position: relative;

        top: 3px;

        margin: 0 5px;
    }
</style>

<template>
    <div>

        <article class="main-article-wrapper col-xs-12 col-sm-6 col-md-4 pull-right ">
            <div class="main-article text-center shadow-content">
                <div class="article-image">
                    <img v-show="isImageLoad" :src="$parent.assetsUrl"  @load="ImageLoaded" alt="">
                    <div v-show="!isImageLoad" class="lds-ring">
                        <div></div><div></div><div></div><div></div>

                    </div>
                </div>
                <div class="main-content text-rtl">
                    <h3 class="article-title ">
                        خرمای مضافتی اصل
                    </h3>
                    <p class=" green-text">
                        <span> 500</span> <span>کیلوگرم</span>
                    </p>
                    <button class="green-button "><i class="fa fa-envelope"></i> پیام به فروشنده</button>
                </div>
            </div>
        </article>


    </div>
</template>

<script>

    export default {
        data:function () {
            return{
                isImageLoad:false,
            }
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
