<style scoped>

    /* preloader image style*/
    .lds-ring {
        display: inline-block;

        position: absolute;

        width: 64px;

        height: 64px;

        left: 50%;

        top: 50%;

        transform: translate(-50%, -50%);

    }

    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 5px solid #00c569;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #00c569 transparent transparent transparent;
    }

    .lds-ring-alt {
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
    .main-article-image {

        width: 140px;

        height: 140px;

        overflow: hidden;

        position: relative;

        background: #F6F6F6;

        border-radius: 4px;

    }

    .main-article-image img {

        width: initial;

        height: 100%;

        position: relative;

        transform: translate(50%, 0);

        right: 50%;
    }

    .image-count-item {

        position: absolute;

        bottom: 0;

        right: 0;

        background: rgba(0, 0, 0, 0.5);

        padding: 5px 9px 3px;

        color: #fff;

    }

    @media screen and (max-width: 400px) {
        .main-article-image {

            width: 90px;

            height: 90px;

        }
    }

    @media screen and (max-width: 370px) {
        .main-article-image {

            width: initial;

            height: 230px;

        }

    }
</style>

<template>
    <div class="main-article-image">

        <img v-show="isImageLoad" :src="base + img" @load="ImageLoaded" :alt="alt">

        <div v-show="!isImageLoad" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>

        <div v-if="imageCount" class="image-count-item">
            <i class="fas fa-images"></i>
            <span v-text="imageCount"></span>

        </div>
    </div>
</template>

<script>

    export default {
        data: function () {
            return {
                imgSrcs: '',
                isImageLoad: false,
            };
        },
        props: ['img', 'base', 'popUpLoaded', 'alt', 'imageCount'],

        created: function () {
            this.loadImage();
        },
        methods: {
            loadImage: function () {
                this.isImageLoad = false;
            },
            ImageLoaded: function () {
                this.isImageLoad = true;
            }
        }
    }

</script>
