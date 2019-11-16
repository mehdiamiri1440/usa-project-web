<style scoped>
    p, span, div, h3{
        line-height: 1.618;
    }
</style>
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
                            <li>شماره تماس :‌09118413054 / 09178928266</li>
                            <li>ایمیل پشتیبانی :‌support@incobac.com</li>
                            <li>ایمیل شخصی مدیر فنی :‌ ali_delkhosh@ymail.com</li>
                            <li></li>
                        </ul>

                        <p class="text-right">
                            سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل support@incobac.com با ما در میان
                            بگذارید.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {eventBus} from "../../../router/router";

    export default {
        methods: {
            stopLoader: function () {
                this.$nextTick(function () {
                    eventBus.$emit('isLoading', false);
                });
            },
        },
        mounted: function () {
            var self = this;
            document.onreadystatechange = () => {
                if (document.readyState == "complete") {
                    self.$nextTick(self.stopLoader());
                }
            }
        },
        updated: function () {
            this.$nextTick(this.stopLoader());
        },
        created() {
            gtag('config', 'UA-129398000-1', {'page_path': '/contact-us'});
        },
        metaInfo() {

            return {
                title: ' تماس با ما ',
                titleTemplate: 'اینکوباک | %s',
                meta: [
                    {
                        name: 'description',
                        content: 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
                    },
                    {
                        name: 'author',
                        content: 'اینکوباک'
                    },
                    {
                        'property': 'og:description',
                        'content': 'مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی'
                    },
                    {
                        'property': 'og:site_name',
                        'content': 'اینکوباک بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران'
                    },
                    {
                        'property': 'og:title',
                        'content': ' اینکوباک | بازار خرید و فروش عمده محصولات کشاورزی '
                    },

                ]

            }
        }
    }
</script>
