<style scoped>

    .wrapper_no_pic {
        text-align: center;
        font-size: 23px;
        padding: 15px 0;
        border: 5px dashed #bdbdbd;
        border-radius: 4px;
    }

    .wrapper_no_pro {
        text-align: center;
        font-size: 23px;
        padding: 15px 0;
    }

    .content_no_pic {
        font-size: 70px;
        margin: 20px auto;
        color: #bdbdbd;
    }

    .text_no_pic {
        margin: 30px auto;
        color: #bdbdbd;
    }

    .main-content-item {
        box-shadow: none;
    }
    .title {
        text-align: right;
        padding: 13px 15px 0;

    }

    .title h1 {

        font-size: 18px;
        font-weight: bold;

    }

    @media screen and (max-width: 767px) {
        .product-wrapper{
            padding: 0;
        }
        .title {
            text-align: center;

        }

        .detail-success {
            max-width: 300px;
            margin: 0 auto;
        }
        .main-content-item {
            padding: 0;
        }
        #main {
            margin-top: 111px;
            background: #fff;
            padding: 0;
        }
        .user-contents .user-image, .user-contents p {
            float: right;
        }

        .user-contents p {
            padding: 15px;
            margin: 0;
            font-size: 14px;
            font-weight: 800;
        }

        .user-contents p:first-of-type {
            padding-right: 0;
        }

        .article-contents , .article-contents > .main-image {
            padding: 0 !important;
        }

    }

    @media screen and (max-width: 500px) {
        .user-contents .user-image {
            width: 50px;
            height: 50px;
        }

        .user-contents p {
            padding: 5px 0;
            width: 100%;
        }

        .user-contents .green-button {
            float: left;
            width: initial;
            padding: 15px 30px;
        }
    }
</style>
<template>
    <div>
        <main id="main-content" class="col-sm-12">
            <div class="contents">

                <div v-if="products.length > 0">

                    <div  class="title col-xs-12">

                        <div  class="row">

                            <div  class="col-xs-12 col-sm-4 pull-right">

                                <h1>
                                    محصولات من
                                </h1>

                            </div>

                        </div>

                    </div>

                    <div class="col-xs-12 product-wrapper">
                        <div class="row">

                            <div v-for="(product,productIndex) in products" :key="product.main.id" class="col-xs-12  pull-right">
                                <ProductArticle
                                        :product="product"
                                        :loading_img="loading_img"
                                        :defultimg="defultimg"
                                        :str="str"
                                        :loading="loading"
                                        :currentUser="currentUser"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12" v-if="products.length === 0 && !loading">
                    <div class="wrapper_no_pro">
                        <div class="content_no_pic">
                            <i class="fa fa-list-alt"></i>
                        </div>

                        <div class="text_no_pic standard-line">
                            <p>محصولی ثبت نشده است یا در انتظار تایید است</p>
                        </div>
                    </div>
                </div>
                <div class="loading_images  col-xs-12" v-show="loading">
                    <img :src="loading_img" style="width:200px;height:200px">
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import ProductArticle from '../../../layouts/main/product_components/product_article';
    import {eventBus} from "../../../../router/router";

    export default {
        components: {
            ProductArticle,
        },
        props: [
            'defultimg',
            'incobaicon',
            'str',
            'loading_img'
        ],
        data: function () {
            return {
                products: {
                    main: '',
                    user_info: '',
                    profile_info: {
                        profile_photo: ''
                    },
                    photos: [],
                },
                searchText: '',
                provinceId: '',
                categoryId: '',
                subCategoryId: '',
                cityId: '',
                searchValue: "",
                productCountInPage : 8,
                loading :false
            }
        },
        methods: {
            init: function () {
                var self = this;
                self.loading = true;

                axios.post('/user/get_product_list', {
                    from_record_number: 0,
                    special_products: true,
                    to_record_number: this.productCountInPage,
                })
                    .then(function (response) {
                        self.products = response.data.products;
                        self.loading = false;
                        }
                    );
            },
            feed() {

                var self = this;
                if (this.searchText === '' && this.provinceId === '' && this.categoryId === '' && this.continueToLoadProducts) {
                    this.loadMoreActive = true;
                    this.productCountInPage += this.productCountInEachLoad;
                    axios.post('/user/get_product_list', {
                        from_record_number: 0,
                        response_rate: self.$parent.productByResponseRate,
                        to_record_number: this.productCountInPage,
                    }).then(function (response) {
                        self.products=response.data.products;
                        localStorage.productCountInPage=JSON.stringify(self.productCountInPage)
                        eventBus.$emit('submiting', false);
                        if (self.products.length + 1 < self.productCountInPage) {
                            self.continueToLoadProducts = false;
                        }

                        self.loadMoreActive = false;
                    });
                }

            },
        },
        mounted() {
            this.init();
        },
        created() {
            gtag('config', 'UA-129398000-1', {'page_path': '/my-products'});
        }
    };
</script>
