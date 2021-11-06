<style scoped>
.default-main-wrapper {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  overflow: hidden;
}

.wrapper_no_pic {
  text-align: center;
  font-size: 23px;
  padding: 15px 0;
  border: 5px dashed #bdbdbd;
  border-radius: 4px;
}

.wrapper_no_pro {
  text-align: center;
  padding: 15px 0;
  margin: 15px auto;
}

.content_no_pic {
  font-size: 70px;
  margin: 20px auto;
  color: #bdbdbd;
}

.text_no_pic {
  margin: 15px auto;
  color: #bdbdbd;
  font-size: 23px;
  font-weight: bold;
}

.my-products-info-text {
  line-height: 1.618;
  padding: 15px;
  margin: 15px auto;
  direction: rtl;
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
  .product-wrapper {
    padding: 0;
    padding-bottom: 100px;
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
  .user-contents .user-image,
  .user-contents p {
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

  .article-contents,
  .article-contents > .main-image {
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
          <div class="title col-xs-12">
            <div class="row">
              <div class="col-xs-12 col-sm-4 pull-right">
                <h1>محصولات من</h1>
              </div>
            </div>
          </div>

          <div class="col-xs-12 product-wrapper">
            <div
              class="
                col-xs-12
                default-main-wrapper
                text-center
                my-products-info-text
              "
            >
              <!-- <i class="fas fa-chart-line"></i> -->
              <span
                >با اعمال نردبان روی محصولات خود بیشتر دیده شوید و با خریداران
                بیشتری ارتباط برقرار کنید.</span
              >
            </div>
            <div class="row">
              <div
                v-for="(product, productIndex) in products"
                :key="productIndex"
                class="col-xs-12 pull-right"
              >
                <ProductArticle
                  :product="product"
                  :str="str"
                  :loading="loading"
                  :currentUser="currentUser"
                  :isMyProfile="true"
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

            <div class="text_no_pic standard-line text-rtl">
              <p>شما محصولی را ثبت نکرده اید یا در انتظار تایید است.</p>
            </div>

            <!-- <router-link
              class="green-button"
              :to="{ name: 'registerProductSeller' }"
            >
              ثبت محصول
            </router-link> -->
          </div>
        </div>

        <section class="main-content col-xs-12" v-if="loading">
          <div class="row">
            <div
              v-for="(defaultItem, index) in 1"
              :key="index"
              class="default-items col-xs-12"
            >
              <div
                class="
                  col-xs-12
                  padding-15
                  margin-15-0
                  default-item-wrapper default-main-wrapper
                "
              >
                <div class="default-user-contents col-xs-12 padding-0">
                  <div
                    class="
                      placeholder-content
                      default-article-user-image
                      pull-right
                    "
                  ></div>

                  <span
                    class="
                      padding-top-5
                      placeholder-content
                      margin-15
                      pull-right
                      content-min-width
                    "
                  ></span>

                  <span
                    class="
                      margin-0
                      placeholder-content
                      default-button-min-with
                      pull-left
                    "
                  ></span>
                </div>

                <div
                  class="
                    default-article-contents
                    padding-0
                    margin-15-0
                    col-xs-12
                  "
                >
                  <div class="default-wrapper-main-image pull-right">
                    <span class="default-main-image placeholder-content"></span>
                  </div>

                  <div class="default-main-article-content">
                    <span class="content-half-width placeholder-content"></span>

                    <span
                      class="content-default-width placeholder-content"
                    ></span>

                    <span class="content-min-width placeholder-content"></span>

                    <span class="content-half-width placeholder-content"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import ProductArticle from "../../../layouts/main/product_components/product_article";
import { eventBus } from "../../../../router/router";

export default {
  components: {
    ProductArticle,
  },
  props: ["str"],
  data: function () {
    return {
      products: {
        main: "",
        user_info: "",
        profile_info: {
          profile_photo: "",
        },
        photos: [],
      },
      currentUser: {
        profile: {
          is_company: "",
          company_name: "",
          company_register_code: "",
          address: "",
          public_phone: "",
          profile_photo: this.storage + "",
          postal_code: "",
          shaba_code: "",
        },
        user_info: "",
      },
      items: [
        {
          message: "محصولات من",
          url: "myProducts",
        },
      ],
      loading: false,
      verifiedUserContent: this.$parent.verifiedUserContent,
    };
  },
  methods: {
    init: function () {
      var self = this;
      self.loading = true;

      axios.post("/user/profile_info").then(function (response) {
        self.currentUser = response.data;

        axios
          .post("/get_product_list_by_user_name", {
            user_name: self.currentUser.user_info.user_name,
          })
          .then(function (response) {
            self.products = response.data.products;
            self.loading = false;
          });
      });
    },
  },
  mounted() {
    this.init();
    eventBus.$emit("subHeader", false);
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/my-products" });
  },
};
</script>
