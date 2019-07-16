<template>
    <div class="main-content-index-pages">

        <section class="parallax-section policy">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class=" col-md-12 col-sm-12">
                        <h3 class="text-right">ارتباط با ما</h3>
                        <p class="text-right">از هریک از راه های زیر که برایتان راحت تر است با ما در ارتباط باشید.</p>
                        <br/>
                        <ul class="text-right">
                            <li>شماره تماس  :‌09118413054 / 09178928266</li>
                            <li>ایمیل پشتیبانی :‌support@incobac.com</li>
                            <li>ایمیل شخصی مدیر فنی :‌ ali_delkhosh@ymail.com</li>
                            <li></li>
                        </ul>

                        <p class="text-right">
                            سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل support@incobac.com با ما در میان بگذارید.
                        </p>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
    import {eventBus} from "../../../router/dashboard_router";

    export default {
        methods:{
            stopLoader: function () {
                this.$nextTick(function () {
                    eventBus.$emit('isLoading', false);
                });
            },
        },
        mounted:function(){
            //
        },
        updated: function () {
            //
        },
        beforeCreate:function(){
            var self = this;
            window.addEventListener("load", function(event) {
                    self.stopLoader();
            });
        }
    }
</script>
