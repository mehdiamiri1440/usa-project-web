<style scoped>
    #page_not_found{
        width: 450px;
        margin: 0 auto;
        display: block;
    }
    .green-button {
        margin:0 !important;
        display: inline-block;
        background: #00C569;
        color: #f5f5f5;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border:none;
        transition: 300ms;
    }
    .green-button:hover {
        color: #fff;
        background: #11a028;
        transition: 300ms;
    }
    .botton-inco {
        display: inline-block;
        background: #313a43;
        color: #f5f5f5;
        padding: 10px 35px;
        border-radius: 3px;
        text-align: center;
        border:none;
        transition: 300ms;
    }
    .botton-inco:hover {
        color: #fff;
        background: #283743;
    }

    .buttons{
        width: 55%;
        margin: 0 auto;
        text-align: center;
    }
    .buttons div{
        width: 50%;
        padding: 0 15px;
        float: right;
    }
    .buttons div a{
        width: 100%;
    }

    @media screen and (max-width: 992px) {
        .buttons{
            width: 55%;
            margin: 0 auto;
            text-align: center;
        }
        .buttons div{
            width: 100%;
            padding: 0 15px;
            float: right;
        }
        .green-button {
            margin:15px auto !important;

        }

    }

    @media screen and (max-width: 768px) {
        .buttons {
            width: 50%;
            margin: 0 auto;
            text-align: center;
        }
        #page_not_found {
            width: 55%;
        }
    }

    @media screen and (max-width: 500px) {
        .buttons {
            width: 70%;
            margin: 0 auto;
            text-align: center;
        }
        #page_not_found {
            width: 80%;
        }
    }

    @media screen and (max-width: 380px) {
        .buttons {
            width: 100%;
            margin: 0 auto;
            text-align: center;
        }
    }
</style>
<template>

    <div class="container-fluid">
        <div class="container">
            <img id="page_not_found" :src="pagenotfoundimage">
            <div class="buttons">
                <div>
                    <a href="/" class="green-button">
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
<script>
    export default {
        props:[
            'pagenotfoundimage'
        ]
    }
</script>
