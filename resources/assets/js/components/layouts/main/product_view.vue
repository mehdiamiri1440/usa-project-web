<style scoped>
#main {
  padding-top: 100px;
}
.main-content {
  margin-bottom: 30px;
}

.main-content > h4 {
  margin: 30px auto;
}

.main-content-item {
  direction: rtl;
  float: left;
  width: 100%;
  margin: 24px auto;
  border-radius: 5px;
  box-shadow: 0 0 5px #cfcfcf;
  padding: 15px 0;
}

.main-article-title {
  margin: 15px auto;
  font-weight: bold;
}

.main-article-title a {
  color: #4c5058;
}

.main-article-title a:hover {
  color: #444;
}

.main-article-content {
  padding: 0 15px;
}

.main-article-content p {
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: bold;
}

.main-article-content p span {
  font-weight: normal;
}

.image-article-content {
  padding: 0;
  padding-top: 10px;
  height: 240px;
  overflow: hidden;
}

.image-article-content img {
  height: 100%;
}

.image-article-content > div {
  display: none;
}

.image-article-content > div:first-of-type {
  display: block;
}

.image-article-content a:hover img {
  filter: grayscale(0);
  transition: 300ms;
}

.image-article-content img {
  transition: 300ms;
  filter: grayscale(40%);
}

.user-contents {
  border-right: 2px solid #f0f3f6;
  text-align: center;
  padding: 0 20px;
}

.create_buy {
  position: relative;
}

.buy_details {
  border-top: 2px solid #f0f3f6;
  padding: 15px 0;
  margin: 15px auto;
  display: block;
}

.buy_details > div {
  margin: 7px auto;
}

.user-image {
  width: 135px;
  height: 135px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 10px;
}

.user-image img,
.user-image > div {
  height: 100%;
}

.buy_details .green-button {
  margin: 5px auto;
  display: inline-block;
  background: #00c569;
  color: #fff;
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  width: initial;
  line-height: 21px;
  padding: 8px 30px;
}

.buy_details .submit-button {
  text-align: center;
}

.green-button {
  margin: 5px 0;
  display: inline-block;
  background: #00c569;
  color: #fff;
  padding: 10px 0;
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  width: 100%;
  line-height: 21px;
  border: none;
}

.green-button:hover {
  background: #279b41;
  color: #fff;
  cursor: pointer;
}

.gray-button {
  margin: 5px auto;
  display: inline-block;
  background: #000122;
  color: #fff;
  padding: 15px 30px;
  border-radius: 3px;
  text-align: center;
  font-size: 12px;
  line-height: 21px;
}

.gray-button:hover {
  background: #279b41;
  color: #fff;
  cursor: pointer;
}

.gray-button:active,
.gray-button:focus {
  color: #fff;
}

.text-des {
  margin: 15px auto;
  float: left;
  width: 100%;
}

.sec-button {
  text-align: center;
}

.sub-header-fix {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.sidebar-fix {
  position: fixed;
  right: 0;
  top: 64px;
  z-index: 2;
}

.logo {
  padding: 10px;
  text-align: right;
  float: right;
  width: 190px;
}

.logo img {
  width: 150px;
}

li.active a {
  color: #313942;
}

li.active a::after {
  content: " ";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #00c569;
  height: 3px;
  width: 100%;
}

@media screen and (max-width: 1199px) {
  /*.logo {*/
  /*float: none;*/
  /*margin: 0 auto;*/
  /*}*/
  .user-image {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 10px;
  }
}

@media screen and (max-width: 992px) {
  .user-image {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 10px;
    float: right;
  }

  .user-contents > img {
    display: none;
  }

  .title-page {
    text-align: center;
    margin: 30px auto 0;
  }

  .right-sidebar {
    display: none;
  }

  .main-image {
    padding: 0;
  }

  .sub-header {
    background: #f0f3f6;
    padding-top: 80px;
  }

  .create_buy_mobile {
    display: block;
  }

  .links-sub-header {
    direction: rtl;
    text-align: center;
  }

  .logo img {
    width: 100%;
  }

  .user-contents > p {
    float: right;
    font-size: 18px;
    padding-top: 30px;
    padding-right: 20px;
  }

  .green-button {
    float: none;
    width: initial;
    padding: 10px 25px;
    margin-top: 20px;
  }

  .create_buy {
    display: none;
  }

  .main-content {
    margin-bottom: 0;
    padding-bottom: 0;
  }
}

@media screen and (max-width: 768px) {
  .links-sub-header {
    direction: rtl;
    text-align: center;
  }

  .logo img {
    width: 100%;
  }

  .user-contents > img {
    display: none;
  }

  #main {
    padding-top: 75px;
  }
}

@media screen and (max-width: 715px) {
  .name-header-profile {
    display: none;
  }

  .profile-menu-header i {
    position: absolute;
    left: -75px;
    top: 22px;
    font-size: 20px;
  }
}

@media screen and (max-width: 555px) {
  #main,
  .main-content,
  .wrapper-related-products {
    padding-left: 0;
    padding-right: 0;
  }

  .logo {
    padding: 6px 10px;
  }

  .user-image {
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
    margin: 10px auto 10px;
    float: right;
  }

  .green-button {
    float: left;
    padding: 10px 5px;
    margin-top: 11px;
    font-size: 10px;
  }

  .user-contents > p {
    float: right;
    font-size: inherit;
    padding-top: 28px;
    padding-right: 5px;
  }
}

@media screen and (max-width: 430px) {
  .user-image {
    width: 50px;
    height: 50px;
  }

  .logo {
    padding: 6px 63px;
    width: 100%;
    height: 109px;
  }
}
</style>

<template>
  <div class="container">
    <main id="main" class="row">
      <div class="col-xs-12">
        <section v-if="product.main.id" class="main-content">
          <div class="row">
            <ProductArticle
              :product="product"
              :loading_img="loading_img"
              :defultimg="defultimg"
              :str="str"
              :loading="loading"
              :currentUser="currentUser"
            />
          </div>
        </section>

        <section v-else style="padding-top:0; "  class="padding-15-0  col-xs-12"

                             >

                             <div class="margin-15-0 default-item-wrapper shadow-content row">

                                 <div class="default-user-contents col-xs-12  col-sm-3">

                                     <div class=" default-boxing-size placeholder-content default-article-user-image"></div>

                                     <div class="text-center xs-text-right">

                                         <span class="placeholder-content default-boxing-size content-half-width "></span>

                                     </div>

                                        <span class="xs-default-user-button placeholder-content default-boxing-size default-button-full-with margin-0"></span>

                                         <span class="hidden-xs placeholder-content default-boxing-size default-button-full-with margin-0"></span>


                                 </div>

                                 <div class="default-article-contents col-xs-12  col-sm-9">

                                     <div class="default-wrapper-main-image pull-right  col-xs-12 col-sm-5">

                                         <span class="default-main-image  placeholder-content"></span>

                                     </div>

                                     
                                    <div class=" default-main-article-content col-xs-12 col-sm-7">
                                            <span class="content-half-width placeholder-content default-input-boxing-size"></span>

                                            <span class="default-boxing-size content-full-width placeholder-content "></span>

                                            <span class="default-boxing-size content-half-width placeholder-content "></span>

                                             <span class="default-boxing-size content-default-width placeholder-content "></span>

                                            <span class="default-boxing-size content-half-width placeholder-content "></span>

                                         </div>
                                 </div>
                             </div>

                    </section>


        <div class="sec-button">
          <a href="/product-list" class="btn gray-button">نمایش دیگرمحصولات</a>
        </div>

      </div>
    </main>
  </div>
</template>


<script>
import ProductArticle from "./product_components/product_article";
import ProductAsideCategories from "./product_components/sidebar/product_aside_categories";
import { eventBus } from "../../../../js/router/dashboard_router";

export default {
  components: {
    ProductArticle,
    ProductAsideCategories
  },
  props: ["str", "defultimg", "loading_img"],
  data: function() {
    return {
      currentUser: {
        profile: "",
        user_info: ""
      },
      product: {
         main: {
          category_name : "",
          sub_category_name : "",
         },
         user_info: "",
         profile_info: {
             profile_photo: ""
         },
         photos: [],
      },
      errors: "",
      popUpMsg: "",
      submiting: false,
      loading: false
    };
  },
  methods: {
    init: function() {
      var self = this;
      axios.post("/user/profile_info").then(function(response) {
        self.currentUser = response.data;
        axios
          .post("/get_product_by_id", {
            product_id: self.$route.params.id
          })
          .then(function(response) {
            self.product = response.data.product;
            self.loading = false;
          })
          .catch(function(err) {
            window.location.href = "/404";
          });
      });
    },
    stopLoader: function() {
      eventBus.$emit("isLoading", false);
    }
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/product-view" });

    document.addEventListener("click", this.documentClick);
  },
  mounted() {
    this.init();
    var self = this;
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated() {
    this.$nextTick(this.stopLoader());
  },
  metaInfo() {
    let productSubCategory = this.product.main.sub_category_name;
    let productName = this.product.main.product_name;
    let productCity = this.product.main.city_name;
    let productProvince = this.product.main.province_name;
    let productOwnerFullName =
      this.product.user_info.first_name +
      " " +
      this.product.user_info.last_name;
    let productStock = this.product.main.stock;
    let productDescription = this.product.main.description
      ? this.product.main.description
      : "";
    //
    return {
      title:
        "خرید و فروش عمده و قیمت " +
        productSubCategory +
        " " +
        productName +
        " " +
        productCity +
        " " +
        productProvince +
        " " +
        productOwnerFullName,
      titleTemplate: "اینکوباک | %s",
      meta: [
        {
          name: "description",
          content:
            "خرید و فروش عمده و قیمت " +
            productSubCategory +
            " " +
            productName +
            " " +
            productCity +
            " " +
            productProvince +
            " " +
            "موجودی : " +
            productStock +
            " کیلوگرم" +
            productDescription
        },
        {
          name: "author",
          content: "اینکوباک"
        },
        {
          property: "og:description",
          content:
            "خرید و فروش عمده و قیمت " +
            productSubCategory +
            " از بهترین تولیدکنندگان ایران - اینکوباک بازار آنلاین کشاورزی ایران"
        },
        {
          property: "og:site_name",
          content: "اینکوباک بازارآنلاین خرید و فروش محصولات کشاورزی ایران"
        },
        {
          property: "og:title",
          content:
            "اینکوباک | خرید و فروش عمده و قیمت " +
            productSubCategory +
            " " +
            productName +
            " " +
            productCity +
            " " +
            productProvince +
            " " +
            productOwnerFullName
        }
      ]
    };
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/product-view" });

    document.addEventListener("click", this.documentClick);
  },
  mounted() {
    this.init();
    var self = this;
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated() {
    this.$nextTick(this.stopLoader());
  }
};
</script>
