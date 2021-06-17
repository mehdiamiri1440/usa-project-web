
<style scoped>
p,
span,
div,
h3 {
  line-height: 1.618;
}
.green-button {
  width: initial;
  padding: 13px 15px;
  font-size: 16px;
}

.about-us-icon {
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.about-us-icon img {
  max-width: 70px;
  float: right;
  margin-left: 15px;
}

.about-us-icon p {
  float: right;
  font-size: 17px;
  margin-top: 17px;
}
.info-text {
  margin-top: 30px;
  font-size: 12px;
}

@media screen and (max-width: 767px) {
  .about-us-icon {
    text-align: center;
  }
  .about-us-icon img {
    margin: 0 auto;
    float: none;
  }
  .about-us-icon p {
    float: none;
    width: 100%;
  }
}
</style>

<template>
  <div class="main-content-index-pages">
    <section class="parallax-section policy">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <h3 class="text-right">کاربران احراز هویت شده چه کسانی هستند؟</h3>
            <div class="col-xs-12">
              <div class="col-xs-12 about-us-icon">
                <img
                  src="../../../../img/verification-icons/verify-icon-1.jpg"
                  alt
                />

                <p>اطلاعات کارت ملی آن ها نزد باسکول است.</p>
              </div>
              <div class="col-xs-12 about-us-icon">
                <img
                  src="../../../../img/verification-icons/verify-icon-3.jpg"
                  alt
                />

                <p>مطابقت تصویر کارت ملی با تصویر خودشان انجام شده است.</p>
              </div>
              <div class="col-xs-12 about-us-icon">
                <img
                  src="../../../../img/verification-icons/verify-icon-2.jpg"
                  alt
                />

                <p>اطلاعات آدرس مکانی انها احراز شده است.</p>
              </div>

              <h3 class="text-center">
                <router-link
                  v-if="$parent.userId && $parent.isSeller == 1"
                  :to="{ name: 'profileBasicSellerVeficiation' }"
                  class="green-button"
                  >شما هم احراز هویت کنید</router-link
                >
                <router-link
                  v-else-if="$parent.userId && $parent.isSeller == 0"
                  :to="{ name: 'profileBasicBuyerVeficiation' }"
                  class="green-button"
                  >شما هم احراز هویت کنید</router-link
                >
                <router-link v-else :to="{ name: 'login' }" class="green-button"
                  >شما هم احراز هویت کنید</router-link
                >
              </h3>
              <p class="text-center gray-text info-text">
                باسکول هیچ مسئولیتی در قبال سو رفتار کاربران احراز هویت شده به
                عهده نمی گیرد و صرفا اطلاعات هویتی آنها را مطابق توضیحات بالا
                تایید می کند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Route from "../../../router/components/route";

export default {
  components: { Route },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/about-us" });
  },
  methods: {
    stopLoader: function () {
      this.$store.state.routeStore.isLoading = false;
    },
    metaInfo() {
      return {
        title: "احراز هویت ",
        titleTemplate: "باسکول | %s",
        meta: [
          {
            name: "description",
            content:
              "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی",
          },
          {
            name: "author",
            content: "باسکول",
          },
          {
            property: "og:description",
            content:
              "مرجع تخصصی خرید و فروش عمده و قیمت محصولات کشاورزی ایران | صادرات محصولات کشاورزی",
          },
          {
            property: "og:site_name",
            content:
              "باسکول بازارآنلاین خرید و فروش عمده محصولات کشاورزی ایران",
          },
          {
            property: "og:title",
            content: " باسکول | بازار خرید و فروش عمده محصولات کشاورزی ",
          },
        ],
      };
    },
  },
  mounted: function () {
    this.$store.commit("routeStore/setMeta", {
      meta: this.metaInfo(),
    });
    var self = this;
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated: function () {
    this.$nextTick(this.stopLoader);
  },
};
</script>
