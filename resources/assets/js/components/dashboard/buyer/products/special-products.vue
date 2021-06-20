<style scoped>
.product-wrapper {
  max-width: 1170px;
  margin: 0 auto;
  float: initial;
}

.items-wrapper {
  padding: 0 3px;
}

#main-content {
  margin-top: 58px;
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

.default-main-wrapper {
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  overflow: hidden;
}

.load-more-button {
  text-align: center;

  margin: 15px auto;
}

.load-more-button button {
  border: 2px solid;

  padding: 15px 30px;

  height: initial;

  background: #fff;

  position: relative;

  top: 0;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);

  transition: 200ms;

  color: #00c569;
}

.load-more-button button:hover {
  top: -3px;

  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);

  transition: 200ms;
}

.btn-loader {
  overflow: hidden;
}

.btn-loader-active-wrapper {
  height: 26px;
}

.btn-loader img {
  width: 56px;

  margin-top: -15px;
}

.default-grid {
  padding: 0 3px;
}

.default-grid .default-main-article-content {
  width: 100%;
}
.default-grid .default-wrapper-main-image {
  width: 100%;
  height: 160px;
}
.default-grid > div {
  padding: 0;
}

.default-grid .default-article-contents {
  padding: 15px;
}

@media screen and (max-width: 767px) {
  #main-content {
    margin-top: 123px;
  }

  .product-wrapper,
  .product-wrapper > .row > div,
  .main-content,
  .main-content > .row > div {
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

  /* .main-content > .row {
    margin: 0;
  } */

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
</style>
<template>
  <div>
    <main id="main-content" class="col-sm-12 contents">
      <div class="row">
        <div class="title col-xs-12">
          <h1>فروشندگان پیشنهادی</h1>
        </div>

        <div v-if="products.length > 0" class="product-wrapper">
          <div
            v-for="(product, productIndex) in products"
            :key="product.main.id"
            class="col-xs-6 col-sm-4 items-wrapper pull-right col-md-3"
          >
            <ProductGridArticle
              :product="product"
              :str="str"
              :currentUser="currentUser"
              :productIndex="productIndex"
            />
          </div>
          <div
            class="load-more-button col-xs-12"
            v-if="$parent.searchText === '' && continueToLoadProducts === true"
          >
            <button class="btn btn-loader" @click.prevent="feed()">
              <div class="btn-content">
                <span class="hidden-xs text-rtl" v-show="!loadMoreActive">
                  مشاهده محصولات بیشتر
                  <i class="fa fa-plus"></i>
                </span>

                <span
                  class="hidden-sm hidden-md hidden-lg text-rtl"
                  v-show="!loadMoreActive"
                >
                  محصولات بیشتر
                  <i class="fa fa-plus"></i>
                </span>

                <div v-show="loadMoreActive" class="btn-loader-active-wrapper">
                  <img src="../../../../../img/gif/loading.gif" />
                </div>
              </div>
            </button>
          </div>
        </div>

        <div
          class="col-xs-12"
          v-else-if="products.length == 0 && $parent.searchText && !loading"
        >
          <div class="wrapper_no_pro">
            <div class="content_no_pic">
              <i class="fa fa-list-alt"></i>
            </div>

            <div class="text_no_pic standard-line">
              <h4 class="text-center" dir="rtl">جستجو نتیجه ای نداشت.</h4>

              <p class="text-center" dir="rtl">
                شما می توانید درخواست خرید خود را در اینجا ثبت کنید.
              </p>

              <div class="text-center no-product-buttons">
                <router-link
                  :to="{ name: 'registerRequestBuyer' }"
                  class="green-button"
                  tag="button"
                  >ثبت درخواست خرید</router-link
                >

                <button class="green-button" @click.prevent="resetFilter()">
                  نمایش همه محصولات
                </button>
              </div>
            </div>
          </div>
        </div>

        <section v-else class="product-wrapper">
          <div
            v-for="(defaultItem, index) in 8"
            :key="index"
            class="default-items col-xs-6 col-sm-4 col-md-3 default-grid"
          >
            <div
              class="
                col-xs-12
                margin-15-0
                default-item-wrapper default-main-wrapper
              "
            >
              <div class="default-wrapper-main-image pull-right">
                <span class="default-main-image placeholder-content"></span>
              </div>

              <div
                class="
                  default-article-contents
                  padding-0
                  margin-top-10
                  col-xs-12
                "
              >
                <div class="default-main-article-content">
                  <span class="content-half-width placeholder-content"></span>

                  <span
                    class="content-default-width placeholder-content"
                  ></span>
                  <span
                    class="
                      placeholder-content
                      default-button-full-with
                      pull-left
                      mobile-hidden
                    "
                  ></span>
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
import ProductGridArticle from "../../../layouts/main/product_components/Product_grid_article";
// import ProductGridArticle from "./product_components/Product_grid_article";

export default {
  components: {
    ProductGridArticle,
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
      currentUser: "",
      categoryId: "",
      subCategoryId: "",
      searchValue: "",
      productCountInEachLoad: 16,
      productCountInPage: 16,
      continueToLoadProducts: true,
      loadMoreActive: false,
      loading: false,
      searchTextTimeout: null,
    };
  },
  methods: {
    init: function () {
      var self = this;

      this.loading = true;

      this.$parent.searchText = "";

      axios
        .post("/user/profile_info")
        .then(function (response) {
          self.currentUser = response.data;

          axios
            .post("/user/get_product_list", {
              from_record_number: 0,
              special_products: true,
              to_record_number: self.productCountInPage,
            })
            .then(function (response) {
              self.products = response.data.products;
              self.loading = false;
              localStorage.removeItem("productCountInPage");
              self.$store.state.dashboardStore.submiting = false;
            });
        })
        .catch((error) => reject(error));
    },
    feed() {
      this.loading = true;

      var self = this;

      if (this.$parent.searchText === "" && this.continueToLoadProducts) {
        this.loadMoreActive = true;
        this.productCountInPage += this.productCountInEachLoad;

        axios
          .post("/user/get_product_list", {
            from_record_number: 0,
            to_record_number: self.productCountInPage,
            special_products: true,
          })
          .then(function (response) {
            self.products = response.data.products;
            localStorage.productCountInPage = JSON.stringify(
              self.productCountInPage
            );
            self.$store.state.dashboardStore.submiting = false;
            if (self.products.length + 1 < self.productCountInPage) {
              self.continueToLoadProducts = false;
            }

            self.loading = false;
            self.loadMoreActive = false;
          });
      }
    },
    registerComponentStatistics: function (
      categoryName,
      actionName,
      labelName
    ) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName,
      });
    },
    applyFilter: function () {
      var self = this;

      this.loading = true;

      var searchObject = {};

      this.products = {};

      searchObject.special_products = true;

      if (this.$parent.searchText) {
        searchObject.search_text = this.$parent.searchText;
      }

      if (jQuery.isEmptyObject(searchObject)) {
        searchObject.from_record_number = 0;
        searchObject.to_record_number = this.productCountInPage;
      }

      axios
        .post("/user/get_product_list", searchObject)
        .then(function (response) {
          self.products = response.data.products;
          self.loading = false;

          // self.scrollToTop();
        })
        .catch(function (err) {
          alert("خطایی رخ داده است. دوباره تلاش کنید.");
        });
    },
    resetFilter: function () {
      // reset text data from header for syncing
      // eventBus.$emit("resetTextSearch", true);
    },
  },
  mounted() {
    this.init();
    this.$store.state.dashboardStore.subHeader = false;
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/my-products" });
  },
  watch: {
    "$parent.searchText": function (value) {
      var self = this;

      clearTimeout(this.searchTextTimeout);

      this.searchTextTimeout = setTimeout(function () {
        self.registerComponentStatistics(
          "product-list",
          "search-text",
          self.$parent.searchText
        );

        self.applyFilter();
      }, 1500);
    },
  },
};
</script>
