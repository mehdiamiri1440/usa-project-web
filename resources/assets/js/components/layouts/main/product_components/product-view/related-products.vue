
<style lang="scss" >
div.items-wrapper {
  padding: 0 7px;
}
.buttons-wrapper a {
  max-width: 240px;
  font-size: 16px;
  font-weight: 500;
  padding: 12px;
  border-radius: 12px;
  margin: 0;
}
</style>
<template>
  <div id="related-products-item">
    <div
      v-for="(product, productIndex) in products"
      :key="'related-product-' + productIndex"
      class="col-xs-6 col-sm-4 items-wrapper pull-right col-md-3 col-lg-2"
    >
      <ProductGridArticle
        :product="product"
        :str="$parent.str"
        :productIndex="productIndex"
      />
    </div>
    <div
      class="more-product-wrapper text-center col-xs-12 margin-top-50"
      v-if="loadMoreActive && continueToLoadProducts"
    >
      <div class="spinner-border">
        <span class="sr-only"></span>
      </div>
      <p class="text-rtl">درحال دریافت اطلاعات ...</p>
    </div>
    <div
      v-else-if="!continueToLoadProducts"
      class="buttons-wrapper text-center col-xs-12 margin-top-50"
    >
      <router-link
        :to="{ path: this.$parent.categoryUrl }"
        class="green-button blue-button bg-gray"
        >مشاهده همه محصولات</router-link
      >
    </div>
  </div>
</template>

<script>
import ProductGridArticle from "../../product_components/Product_grid_article";
import { isElementShownInView } from "../../../../../custom";
export default {
  components: {
    ProductGridArticle,
  },
  data() {
    return {
      products: [],
      productCountInPage: 12,
      productCountInEachLoad: 12,
      fromProductCount: 0,
      loadMoreActive: false,
      continueToLoadProducts: true,
    };
  },
  methods: {
    getRelatedProducts() {
      let categoryName = this.$parent.product.main.sub_category_name;
      axios
        .post("/user/get_product_list", {
          from_record_number: this.fromProductCount,
          to_record_number: this.productCountInPage,
          search_text: categoryName,
        })
        .then((response) => {
          this.products = this.products.concat([...response.data.products]);
          this.$parent.isRelatedProducts = true;
          this.$nextTick(() => {
            this.infiniteScrollHandler();
          });
        });
    },
    feed() {
      var self = this;
      let categoryName = this.$parent.product.main.sub_category_name;

      this.loadMoreActive = true;
      this.fromProductCount = this.productCountInPage;
      this.productCountInPage += this.productCountInEachLoad;
      axios
        .post("/user/get_product_list", {
          from_record_number: self.fromProductCount,
          to_record_number: self.productCountInPage,
          search_text: categoryName,
        })
        .then((response) => {
          if (!response.data.products.length) {
            self.continueToLoadProducts = false;
          }
          if (self.products && self.products.length) {
            self.products = self.products.concat([...response.data.products]);
          }
          self.loadMoreActive = false;
        });
    },
    infiniteScrollHandler() {
      $(window).scroll(() => {
        let productsSection = $("div.items-wrapper:last-of-type");

        if (typeof productsSection.offset() !== "undefined") {
          if (
            $(window).scrollTop() + $(window).height() >=
            productsSection.offset().top
          ) {
            if (
              this.products.length >= 12 &&
              !this.loadMoreActive &&
              this.continueToLoadProducts
            ) {
              this.feed();
            }
          }
        }
      });
    },
  },
  mounted() {},
  watch: {
    "$parent.product.main"() {
      isElementShownInView(
        "#related-products-wrapper",
        (isInView) => {
          if (isInView && this.products.length == 0) {
            this.getRelatedProducts();
          }
        },
        100
      );
    },
  },
};
</script>
