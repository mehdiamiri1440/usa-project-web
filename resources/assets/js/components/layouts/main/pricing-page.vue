<style scoped>
#faq {
  direction: rtl;
  padding-bottom: 0;
  background-position: 50% 60px;
  background: #f6f6f6;
}

#faq .wrapper-table {
  visibility: visible;
  animation-delay: 0.9s;
  animation-name: fadeInUp;
}
</style>
<template>
  <div class="main-content-index-pages">
    <section id="faq" class="parallax-section">
      <div class="container">
        <div class="row">
          <PricingTableComponent />
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { eventBus } from "../../../router/router";
import PricingTableComponent from "./pricing-table-content";

export default {
  components: {
    PricingTableComponent,
  },
  methods: {
    stopLoader: function () {
      eventBus.$emit("isLoading", false);
    },
    trElement: function (element) {
      var elementClass = $(element).attr("class");
      if (elementClass !== "") {
        console.log($(element).toggleClass("changed-angle"));
      } else {
        // console.log("false");
      }
    },
  },
  mounted: function () {
    var self = this;
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        self.$nextTick(self.stopLoader());
      }
    };
  },
  updated: function () {
    this.$nextTick(this.stopLoader());
  },
  created() {
    gtag("config", "UA-129398000-1", { page_path: "/pricing" });
  },
  metaInfo() {
    return {
      title: "ارتقا عضویت ",
      titleTemplate: "باسکول | %s",
      meta: [
        {
          name: "description",
          content:
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات غذایی و کشاورزی ایران | صادرات محصولات غذایی و کشاورزی",
        },
        {
          name: "author",
          content: "باسکول",
        },
        {
          property: "og:description",
          content:
            "مرجع تخصصی خرید و فروش عمده و قیمت محصولات غذایی و کشاورزی ایران | صادرات محصولات غذایی و کشاورزی",
        },
        {
          property: "og:site_name",
          content:
            "باسکول بازارآنلاین خرید و فروش عمده محصولات غذایی و کشاورزی ایران",
        },
        {
          property: "og:title",
          content: " باسکول | بازار خرید و فروش عمده محصولات غذایی و کشاورزی ",
        },
      ],
    };
  },
};
</script>
