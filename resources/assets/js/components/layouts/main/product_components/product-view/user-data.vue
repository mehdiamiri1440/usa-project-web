<style  scoped>
@import url("../../../../../../css/owl-product-items-style.css");

.title-box {
  text-align: center;
}

.title-box h3 {
  font-size: 17px;
  font-weight: bold;
  color: #4b4b4b;
  margin-bottom: 12px;
}

.title-box a {
  margin: 20px auto 10px;

  width: inherit;

  font-size: 14px;

  font-weight: bold;

  padding: 9px 22px 6px;
}

.box-title {
  font-size: 18px;
  color: #313a43;
  direction: rtl;
  margin: 30px 0 15px;
}

.box-title::after {
  content: " ";
  width: 100px;
  height: 2px;
  background: #00c569;
  display: block;
  border-radius: 5px;
  margin-top: 10px;
}

.section-wrapper .title-box {
  text-align: center;

  margin-top: 35px;
}

#product-section {
  border-top: 1px solid #e0e0e0;
}
</style>

<template>
  <div class="row">
    <section
      v-if="$parent.relatedProducts.length > 0 && $parent.isLoading == false"
      id="product-section"
      class="section-wrapper col-xs-12 latest-product"
    >
      <div class="row">
        <h3 class="box-title">محصولات مرتبط</h3>

        <div class="products-contents">
          <div class="owl-carousel product-carousel">
            <ProductCarousel
              v-for="(product, index) in $parent.relatedProducts"
              :key="index"
              :img="$parent.str + '/thumbnails/' + product.photo"
              :title="product.product_name"
              :stock="$parent.getConvertedNumbers(product.stock)"
              :link="$parent.getRelatedProductUrl(product)"
              column="4"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="section-wrapper col-xs-12"
      v-else-if="
        $parent.relatedProducts.length == 0 && $parent.isLoading == true
      "
    >
      <div class="row">
        <h3 class="box-title">محصولات مرتبط</h3>

        <div class="col-xs-12 products-contents">
          <div class="row">
            <div
              v-for="(item, index) in 4"
              :key="index"
              :class="{ 'hidden-xs': index >= 2 }"
              class="col-lg-3 col-md-4 col-xs-6 default-carousel-item"
            >
              <article class="carousel-item box-content col-xs-12">
                <span
                  class="
                    default-index-product-image
                    placeholder-content
                    col-xs-12
                  "
                ></span>

                <span
                  class="
                    content-default-width
                    placeholder-content
                    margin-10
                    col-xs-10 col-xs-offset-1
                  "
                ></span>

                <span
                  class="
                    content-default-width
                    placeholder-content
                    col-xs-8 col-xs-offset-2
                  "
                ></span>

                <span class="margin-10"></span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="reviews-section"
      v-if="reviews.comments.length > 0 && !reviewsLoader"
      class="section-wrapper col-xs-12 reviews-product"
    >
      <div class="row">
        <h3 class="box-title">نظرات کاربران</h3>

        <div
          class="reviews-wrapper"
          v-if="reviews.comments.length > 0 && !reviewsLoader"
        >
          <ArticleReview
            v-for="(comment, index) in reviews.comments"
            :key="index"
            :review="comment"
          />
        </div>
        <div class="reviews-wrapper" v-else-if="reviewsLoader">
          <div class="default-review">
            <PlaceholderArticle-review
              v-for="(item, index) in 2"
              :key="index"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import ProductCarousel from "../../main_components/product-list-carousel";
import ArticleReview from "../../main_components/review-components/article-review";
import PlaceholderArticleReview from "../../main_components/review-components/placeholder-article-review";

export default {
  components: {
    ProductCarousel,
    ArticleReview,
    PlaceholderArticleReview,
  },
  data() {
    return {
      reviews: {
        comments: [],
      },
      reviewsLoader: false,
    };
  },
  methods: {
    init() {},
    getReviews() {
      this.reviewsLoader = true;
      axios
        .post("/profile/get-user-comments", {
          user_id: this.$parent.product.user_info.id,
        })
        .then((response) => {
          //   this.doDeletereview = false;
          this.reviewsLoader = false;
          this.reviews = response.data;
        });
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    "$parent.product.user_info"() {
      this.getReviews();
    },
  },
};
</script>
