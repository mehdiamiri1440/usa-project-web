<style scoped>
.main-article-wrapper {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 35px;
}

.user-information-content {
  display: block;
  float: right;
  width: 100%;
  padding: 5px 30px;
  background: none;
  border: none;
  border-bottom: 1px solid #ccc;
}
.user-image {
  width: 35px;
  height: 35px;
  float: right;
  margin-left: 10px;
}
.user-content {
  display: block;
  max-width: 170px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 700;
  color: #777;
  height: 21px;
  padding-top: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  top: 7px;
  text-align: right;
}

.main-article {
  background: #fff;
  overflow: hidden;
  padding: 15px;
}

.article-image {
  height: 100px;
  overflow: hidden;
  position: relative;
  display: block;
  background: #f6f6f6;
  width: 130px;
  border-radius: 4px;
  float: right;
}

.article-image img {
  display: block;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.main-content {
  padding-right: 20px;
  float: right;
  text-align: right;
  width: calc(100% - 130px);
}

h3.article-title {
  font-size: 16px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 215px;
  margin-bottom: 25px;
  margin-top: 10px;
  height: 17px;
}

.main-content p {
  font-size: 13px;
  font-weight: 700;
  max-width: 500px;
  overflow: hidden;
  height: 25px;
  line-height: 1.618;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}

.button-wrapper {
  float: right;
  width: 100%;
  margin-top: 15px;
}

.green-button {
  width: 100%;
  padding: 4px 0 5px;
  margin-top: 10px;
  max-width: 400px;
}

button i {
  position: relative;

  top: 3px;

  margin: 0 5px;
}
</style>

<template>
  <div>
    <article class="main-article-wrapper col-xs-12">
      <div class="user-information-wrapper row">
        <router-link :to="{}" tag="button" class="user-information-content">
          <div class="user-image">
            <img src="../../../../../../../img/user-defult.png" />
          </div>
          <div class="user-content">
            <span class="user-name-link"> عادل انتظاری ملکی </span>
          </div>
        </router-link>
      </div>
      <div class="main-article text-center">
        <router-link
          class="article-image"
          :to="getProductUrl()"
          target="_blank"
        >
          <div v-show="isImageLoad">
            <transition>
              <img
                :src="str + '/' + product.photo"
                @load="ImageLoaded"
                alt=""
              />
            </transition>
          </div>
          <div v-show="!isImageLoad" class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </router-link>
        <div class="main-content text-rtl">
          <h3 class="article-title">
            {{ product.subcategory_name + " | " + product.product_name }}
          </h3>
          <!-- <p class="product-description">
            توضیحات :
            <span> {{ product.description }}</span> <span>کیلوگرم</span>
          </p> -->
          <p class="green-text">
            مقدار موجودی :
            <span> {{ product.stock }}</span> <span>کیلوگرم</span>
          </p>
        </div>
        <div class="button-wrapper">
          <button
            class="green-button"
            @click.prevent="$parent.openChat(product)"
          >
            <i class="fa fa-envelope"></i> پیام به فروشنده
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ["product", "str"],
  data: function () {
    return {
      isImageLoad: false,
    };
  },
  created: function () {
    this.loadImage();
  },
  methods: {
    loadImage: function () {
      this.isImageLoad = false;
    },
    ImageLoaded: function () {
      this.isImageLoad = true;
    },
    getProductUrl: function () {
      return (
        "/product-view/خرید-عمده-" +
        this.product.subcategory_name.replace(" ", "-") +
        "/" +
        this.product.category_name.replace(" ", "-") +
        "/" +
        this.product.id
      );
    },
  },
};
</script>
