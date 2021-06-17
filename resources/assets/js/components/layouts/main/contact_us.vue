<style scoped>
p,
span,
div,
h3 {
  line-height: 1.618;
}
</style>
<template>
  <div class="main-content-index-pages">
    <section class="parallax-section policy">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <h3 class="text-right">ارتباط با ما</h3>
            <p class="text-right">
              از هریک از راه های زیر که برایتان راحت تر است با ما در ارتباط
              باشید.
            </p>

            <br />

            <ul class="text-right">
              <li>شماره تماس :‌09118413054 / 09178928266</li>
              <li>ایمیل پشتیبانی :‌support@buskool.com</li>
              <li></li>
            </ul>

            <h3 class="text-right">
              در صورتی که به دلیل اختلال در درگاه پرداخت به این صفحه هدایت شدید،
              لطفا برای تکمیل فرآیند خرید با شماره
              <h2 class="red-text">
                <a href="tel:09118413054">09118413054</a>
              </h2>
              تماس بگیرید.
            </h3>
            <p class="text-right">
              سوالات، انتقادات و پیشنهادات خود را از طریق آدرس ایمیل
              support@buskool.com با ما در میان بگذارید.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/contact-us" });
  },
  methods: {
    stopLoader: function () {
      this.$nextTick(function () {
        this.$store.state.routeStore.isLoading = false;
      });
    },
    metaInfo() {
      return {
        title: " تماس با ما ",
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
      if (document.readyState == "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated: function () {
    this.$nextTick(this.stopLoader());
  },
};
</script>
