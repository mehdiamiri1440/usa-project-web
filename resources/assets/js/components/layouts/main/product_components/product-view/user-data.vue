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

.section-wrapper {
  border-top: 1px solid #e0e0e0;
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
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f0f0f1;
}

.default-grid .default-article-contents {
  padding: 15px;
}

#reviews-section {
  margin-top: 67px;
}

.load-more-comments {
  border-radius: 12px;
  color: #555;
  background: #e0e0e0;
  min-width: 200px;
}

@media screen and (max-width: 767px) {
  #product-section .box-title {
    padding: 0 10px;
  }

  #reviews-section {
    padding: 0 25px;
  }
}
</style>

<template>
  <div class="row">
    <section
      v-if="userProducts.length > 0 && userProductsLoader == false"
      id="product-section"
      class="section-wrapper col-xs-12 latest-product"
    >
      <div class="row">
        <h3 class="box-title">
          محصولات
          {{
            $parent.product.user_info.first_name +
            " " +
            $parent.product.user_info.last_name
          }}
        </h3>

        <div class="products-contents">
          <div class="owl-carousel product-carousel">
            <div
              v-for="(product, productIndex) in userProducts"
              :key="'user-product-' + productIndex"
            >
              <ProductGridArticle
                :product="product"
                :str="$parent.str"
                :productIndex="productIndex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="product-section"
      class="section-wrapper col-xs-12"
      v-else-if="!userProducts.length && userProductsLoader == true"
    >
      <div class="row">
        <h3 class="box-title">محصولات</h3>

        <div class="col-xs-12 products-contents">
          <div class="row">
            <div
              v-for="(item, index) in 4"
              :key="index"
              :class="{ 'hidden-xs': index >= 2 }"
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
            v-show="index < defaultCommentsCount"
            :key="index"
            :review="comment"
          />
        </div>

        <div class="text-center">
          <button
            class="load-more-comments green-button hover-effect"
            v-if="defaultCommentsCount <= reviews.comments.length - 1"
            @click="defaultCommentsCount = reviews.comments.length"
          >
            نظرات بیشتر
          </button>
        </div>
      </div>
    </section>
    <section
      id="reviews-section"
      v-else-if="reviewsLoader"
      class="section-wrapper col-xs-12 reviews-product"
    >
      <div class="row">
        <h3 class="box-title">نظرات کاربران</h3>
        <div class="reviews-wrapper">
          <div class="default-review">
            <PlaceholderArticleReview v-for="(item, index) in 2" :key="index" />
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
import ProductGridArticle from "../../product_components/Product_grid_article";
import owlCarousel from "../../../../../owl.carousel.min.js";
import { isElementShownInView } from "../../../../../custom";

export default {
  components: {
    ProductCarousel,
    ArticleReview,
    PlaceholderArticleReview,
    ProductGridArticle,
  },
  data() {
    return {
      reviews: {
        comments: [],
      },
      defaultCommentsCount: 6,
      reviewsLoader: true,
      userProductsLoader: true,
      userProducts: [],
    };
  },
  methods: {
    init() {
      isElementShownInView(
        "#reviews-section",
        (isInView) => {
          if (isInView) {
            this.getReviews();
          }
        },
        100
      );
      isElementShownInView(
        "#product-section",
        (isInView) => {
          if (isInView) {
            this.getProductByUserName();
          }
        },
        100
      );
    },
    getReviews() {
      this.reviewsLoader = true;
      axios
        .post("/profile/get-user-comments", {
          user_id: this.$parent.product.user_info.id,
        })
        .then((response) => {
          this.reviewsLoader = false;
          this.$parent.doneGetReviews = true;
          this.reviews = response.data;
        });
    },
    getProductByUserName() {
      this.registerComponentStatistics(
        "productDetail",
        "showUserProducts",
        "show user products"
      );
      axios
        .post("/get_product_list_by_user_name", {
          user_name: this.$parent.product.user_info.user_name,
        })
        .then((response) => {
          let data = response.data.products;
          this.userProducts = data.filter((item) => {
            return item.main.id != this.$route.params.id;
          });
          this.userProductsLoader = false;
          this.$nextTick(() => {
            this.userProductCarouselEnabled();
          });
        });
    },
    userProductCarouselEnabled() {
      $(".owl-carousel.product-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        loop: false,
        rewind: true,
        nav: true,
        navText: [
          '<span class="fa fa-angle-left"></span>',
          '<span class="fa fa-angle-right"></span>',
        ],
        mouseDrag: true,
        margin: 6,
        dots: true,
        stagePadding: 6,
        rtl: true,
        responsive: {
          0: {
            items: 2,
            navText: false,
            dots: true,
          },
          590: {
            items: 3,
            navText: false,
            dots: true,
          },
          992: {
            items: 4,
          },
        },
      });
    },
    registerComponentStatistics(categoryName, actionName, labelName) {
      this.$parent.registerComponentStatistics(
        categoryName,
        actionName,
        labelName
      );
    },
  },
  // mounted() {},
  watch: {
    "$parent.product.user_info"() {
      this.init();
    },
  },
};
</script>
