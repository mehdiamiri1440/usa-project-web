<style scoped>

    .main-content-item {
        box-shadow: none;
    }

    @media screen and (max-width: 767px) {
        .main-content-item {
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

        .user-contents .green_bot {
            float: left;
            width: initial;
            padding: 15px;
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

        .user-contents .green_bot {
            float: left;
            width: initial;
            padding: 15px;
        }
    }
</style>
<template>
    <div>
        <main id="main" class="col-sm-12">
            <div class="contents">

                <div v-if="products.length > 0">
                    <product-article
                            :products="products"
                            :loading_img="loading_img"
                            :defultimg="defultimg"
                            :str="str"
                            :loading="loading"
                    >

                    </product-article>
                </div>
                <!--  <div class="col-xs-12" v-if="products.length == 0 && !loading">
                      <div class="col-xs-12" v-if="products.length == 0 && !loading">
                          <div class="wrapper_no_pro">
                              <div class="content_no_pic"><i class="fa fa-list-alt"></i></div>
                              <div class="text_no_pic"><p>محصولی ثبت نشده است</p></div>
                          </div>
                      </div>
                  </div>
                  <div class="loading_images  col-xs-12" v-show="loading">
                      <img :src="loading_img" style="width:200px;height:200px">
                  </div>-->
            </div>
        </main>
    </div>
</template>

<script>
    import productArticle from '../../../../components/layouts/main/product_components/product_article';
    import {eventBus} from "../../../../../js/router/dashboard_router";

    export default {
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
                currentUser: {
                    profile: {
                        is_company: '',
                        company_name: '',
                        company_register_code: '',
                        address: '',
                        public_phone: '',
                        profile_photo: this.storage + '',
                        postal_code: '',
                        shaba_code: '',
                    },
                    user_info: '',
                },
                // getUserName: this.$route.params.user_name

            }
        },

        methods: {
            init: function () {
                var self = this;

                axios.post('/user/profile_info')
                    .then(function (response) {
                            self.currentUser = response.data;
                            axios.post('/get_product_list_by_user_name', {
                                user_name: self.currentUser.user_info.user_name
                            }).then(function (response) {
                                self.products = response.data.products;
                                self.loading = false;
                            });
                        }
                    );
            },

        },
        mounted() {
            this.init();
        }
        ,
        components: {
            "product-article":
            productArticle,
        }
        ,
        created() {
            gtag('config', 'UA-129398000-1', {'page_path': '/my_products'});
        }
        ,
    }
    ;


</script>
