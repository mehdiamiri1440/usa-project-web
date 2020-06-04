<style scoped>
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

.shadow-content {
  background: #fff;
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

@media screen and (max-width: 370px) {
  .default-wrapper-main-image {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
    border-radius: 4px;
  }
  .default-main-article-content {
    width: 100%;

    position: relative;

    top: 15px;
  }

  .default-item-wrapper .default-button-min-with {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
<template>
  <div>
    <main id="main-content" class="col-sm-12">
      <div class="contents">
        <div class="title col-xs-12">
          <div class="row">
            <div class="col-xs-12 col-sm-4 pull-right">
              <h1>محصولات ویژه</h1>
            </div>
          </div>
        </div>

        <div v-if="products.length > 0" class="col-xs-12 product-wrapper">
          <div class="row">
            <div
              v-for="(product,productIndex) in products"
              :key="product.main.id"
              class="col-xs-12 pull-right"
            >
              <ProductArticle
                :product="product"
                :str="str"
                :currentUser="currentUser"
                :productIndex="productIndex"
              />
            </div>
          </div>
          <div
            class="load-more-button col-xs-12"
            v-if="$parent.searchText === '' && continueToLoadProducts === true "
          >
            <button class="btn btn-loader" @click.prevent="feed()">
              <div class="btn-content">
                <span class="hidden-xs text-rtl" v-show="!loadMoreActive">
                  مشاهده محصولات بیشتر
                  <i class="fa fa-plus"></i>
                </span>

                <span class="hidden-sm hidden-md hidden-lg text-rtl" v-show="!loadMoreActive">
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

        <div class="col-xs-12" v-else-if="products.length == 0 && $parent.searchText && !loading">
          <div class="wrapper_no_pro">
            <div class="content_no_pic">
              <i class="fa fa-list-alt"></i>
            </div>

            <div class="text_no_pic standard-line">
              <h4 class="text-center" dir="rtl">جستجو نتیجه ای نداشت.</h4>

              <p class="text-center" dir="rtl">شما می توانید درخواست خرید خود را در اینجا ثبت کنید.</p>

              <div class="text-center no-product-buttons">
                <router-link
                  :to="{name : 'registerRequestBuyer'}"
                  class="green-button"
                  tag="button"
                >ثبت درخواست خرید</router-link>

                <button class="green-button" @click.prevent="resetFilter()">نمایش همه محصولات</button>
              </div>
            </div>
          </div>
        </div>

        <section v-else class="main-content col-xs-12">
          <div class="row">
            <div v-for="(defaultItem ,index) in 8" :key="index" class="default-items col-xs-12">
              <div class="col-xs-12 padding-15 margin-15-0 default-item-wrapper shadow-content">
                <div class="default-user-contents col-xs-12 padding-0">
                  <div class="placeholder-content default-article-user-image pull-right"></div>

                  <span
                    class="padding-top-5 placeholder-content margin-15 pull-right content-min-width"
                  ></span>

                  <span class="margin-0 placeholder-content default-button-min-with pull-left"></span>
                </div>

                <div class="default-article-contents padding-0 margin-15-0 col-xs-12">
                  <div class="default-wrapper-main-image pull-right">
                    <span class="default-main-image placeholder-content"></span>
                  </div>

                  <div class="default-main-article-content">
                    <span class="content-half-width placeholder-content"></span>

                    <span class="content-default-width placeholder-content"></span>

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
    ProductArticle
  },
  props: ["str"],
  data: function() {
    return {
      products: {
        main: "",
        user_info: "",
        profile_info: {
          profile_photo: ""
        },
        photos: []
      },
      currentUser: "",
      categoryId: "",
      subCategoryId: "",
      searchValue: "",
      productCountInEachLoad: 10,
      productCountInPage: 10,
      continueToLoadProducts: true,
      loadMoreActive: false,
      loading: false,
      searchTextTimeout: null
    };
  },
  methods: {
    init: function() {
      var self = this;

      this.loading = true;

      var searchValueText = this.$parent.searchText;

      axios
        .post("/user/profile_info")
        .then(function(response) {
          self.currentUser = response.data;

          if (searchValueText) {
            self.registerComponentStatistics(
              "homePage",
              "search-text",
              searchValueText
            );
            self.searchValue = searchValueText;
            eventBus.$emit("submiting", false);
          } else {
            axios
              .post("/user/get_product_list", {
                from_record_number: 0,
                special_products: true,
                to_record_number: self.productCountInPage
              })
              .then(function(response) {
                self.products = response.data.products;
                self.loading = false;
                localStorage.removeItem("productCountInPage");
                eventBus.$emit("submiting", false);
              });
          }
        })
        .catch(error => reject(error));
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
            special_products: true
          })
          .then(function(response) {
            self.products = response.data.products;
            localStorage.productCountInPage = JSON.stringify(
              self.productCountInPage
            );
            eventBus.$emit("submiting", false);
            if (self.products.length + 1 < self.productCountInPage) {
              self.continueToLoadProducts = false;
            }

            self.loading = false;
            self.loadMoreActive = false;
          });
      }
    },
    registerComponentStatistics: function(categoryName, actionName, labelName) {
      gtag("event", actionName, {
        event_category: categoryName,
        event_label: labelName
      });
    },
    applyFilter: function() {
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
        .then(function(response) {
          self.products = response.data.products;
          self.loading = false;

          // self.scrollToTop();
        })
        .catch(function(err) {
          alert("خطایی رخ داده است. دوباره تلاش کنید.");
        });
    },
    resetFilter: function() {
      // reset text data from header for syncing

      eventBus.$emit("resetTextSearch", true);
    }
  },
  mounted() {
    this.init();
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/my-products" });
  },
  watch: {
    "$parent.searchText": function(value) {
      var self = this;

      clearTimeout(this.searchTextTimeout);

      this.searchTextTimeout = setTimeout(function() {
        self.registerComponentStatistics(
          "product-list",
          "search-text",
          self.$parent.searchText
        );

        self.applyFilter();
      }, 1500);
    }
  }
};
</script>
