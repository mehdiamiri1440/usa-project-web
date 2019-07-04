<template>
        <div class="container-fluid">
            <div class="container">

                <img :src="not_found_image">
                <div class="buttons">
                    <div>
                        <a href="/" class="green-bot">
                            صفحه نخست
                        </a>
                    </div>
                    <div>
                        <a href="javascript:history.back()" class="botton-inco">
                            بازگشت به صفحه قبل
                        </a>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>

    img {
        width: 31%;
        margin: 90px auto 20px;
        display: block;
    }

    .green-bot {
        margin: 15px 0;
        display: inline-block;
        background: #28a745;
        color: #f5f5f5;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }

    .green-bot:hover {
        color: #fff;
        background: #11a028;
        transition: 300ms;
    }

    .botton-inco {
        margin: 15px 0;
        display: inline-block;
        background: #313a43;
        color: #f5f5f5;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border: none;
        transition: 300ms;
    }

    .botton-inco:hover {
        color: #fff;
        background: #283743;
    }

    .buttons {
        width: 55%;
        margin: 0 auto;
        text-align: center;
    }

    .buttons div {
        width: 50%;
        padding: 0 15px;
        float: right;
    }

    .buttons div a {
        width: 100%;
    }

    @media screen and (max-width: 992px) {
        .buttons {
            width: 40%;
            margin: 0 auto;
            text-align: center;
        }

        .buttons div {
            width: 100%;
            padding: 0 15px;
            float: right;
        }

    }

    @media screen and (max-width: 768px) {
        .buttons {
            width: 50%;
            margin: 0 auto;
            text-align: center;
        }

        img {

            width: 40%;
            margin: 50px auto 20px;
            display: block;

        }
    }

    @media screen and (max-width: 500px) {
        .buttons {
            width: 70%;
            margin: 0 auto;
            text-align: center;
        }

        img {

            width: 60%;
            margin: 50px auto 20px;
            display: block;

        }
    }

    @media screen and (max-width: 380px) {
        .buttons {
            width: 100%;
            margin: 0 auto;
            text-align: center;
        }

        img {

            width: 60%;
            margin: 150px auto 20px;
            display: block;

        }
    }
</style>
<script>
    import {eventBus} from "../../router/dashboard_router";

    export default {
        props:[
            'not_found_image',
        ],
        methods:{
            loader:function(){
                this.$nextTick(function () {
                    eventBus.$emit('finishLoad', false);
                });
            }
        },
        mounted:function(){
            this.loader();
        },
        updated: function () {
            this.loader();
        }
    }
</script>
